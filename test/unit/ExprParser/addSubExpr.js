/*
 * Copyright (c) 2022, Oracle and/or its affiliates.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2.0, as
 * published by the Free Software Foundation.
 *
 * This program is also distributed with certain software (including
 * but not limited to OpenSSL) that is licensed under separate terms,
 * as designated in a particular file or component or in included license
 * documentation.  The authors of MySQL hereby grant you an
 * additional permission to link the program and your derivative works
 * with the separately licensed software that they have included with
 * MySQL.
 *
 * Without limiting anything contained in the foregoing, this file,
 * which is part of MySQL Connector/Node.js, is also subject to the
 * Universal FOSS Exception, version 1.0, a copy of which can be found at
 * http://oss.oracle.com/licenses/universal-foss-exception.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License, version 2.0, for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin St, Fifth Floor, Boston, MA 02110-1301  USA
 */

'use strict';

/* eslint-env node, mocha */

const Parser = require('../../../lib/ExprParser');
const expect = require('chai').expect;

describe('ExprParser', () => {
    context('addSubExpr', () => {
        const type = Parser.Type.ADD_SUB_EXPR;

        it('parses addition functions', () => {
            return expect(Parser.parse('1.234 + 1.234', { type })).to.deep.equal({
                type: 'addSubExpr',
                value: {
                    name: '+',
                    params: [{
                        type: 'literal',
                        value: 1.234
                    }, {
                        type: 'literal',
                        value: 1.234
                    }]
                }
            });
        });

        it('parses subtraction functions', () => {
            return expect(Parser.parse(`${Number.MIN_SAFE_INTEGER} - 10`, { type })).to.deep.equal({
                type: 'addSubExpr',
                value: {
                    name: '-',
                    params: [{
                        type: 'literal',
                        value: Number.MIN_SAFE_INTEGER
                    }, {
                        type: 'literal',
                        value: 10
                    }]
                }
            });
        });

        it('parses composable functions', () => {
            return expect(Parser.parse('3 + 5 - 2', { type })).to.deep.equal({
                type: 'addSubExpr',
                value: {
                    name: '-',
                    params: [{
                        type: 'addSubExpr',
                        value: {
                            name: '+',
                            params: [{
                                type: 'literal',
                                value: 3
                            }, {
                                type: 'literal',
                                value: 5
                            }]
                        }
                    }, {
                        type: 'literal',
                        value: 2
                    }]
                }
            });
        });

        it('parses composable functions with the correct precedence', () => {
            expect(Parser.parse('2 * 2 - 1', { type })).to.deep.equal({
                type: 'addSubExpr',
                value: {
                    name: '-',
                    params: [{
                        type: 'mulDivExpr',
                        value: {
                            name: '*',
                            params: [{
                                type: 'literal',
                                value: 2
                            }, {
                                type: 'literal',
                                value: 2
                            }]
                        }
                    }, {
                        type: 'literal',
                        value: 1
                    }]
                }
            });

            return expect(Parser.parse('3 + 5 * 2', { type })).to.deep.equal({
                type: 'addSubExpr',
                value: {
                    name: '+',
                    params: [{
                        type: 'literal',
                        value: 3
                    }, {
                        type: 'mulDivExpr',
                        value: {
                            name: '*',
                            params: [{
                                type: 'literal',
                                value: 5
                            }, {
                                type: 'literal',
                                value: 2
                            }]
                        }
                    }]
                }
            });
        });
    });
});
