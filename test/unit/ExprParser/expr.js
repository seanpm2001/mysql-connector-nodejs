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

const assertIgnoredWhitespaces = (expr) => {
    // try up to to 10 whitespaces
    const whitespaces = ' '.repeat(Math.floor(Math.random() * 10) + 1);
    return expect(() => Parser.parse(`${whitespaces}${expr}${whitespaces}`, { type: Parser.Type.EXPR })).to.not.throw();
};

describe('ExprParser', () => {
    context('expr', () => {
        // TODO(Rui): BUG#29795595
        it.skip('ignores any leading or trailing whitespace in an intervalExpr', () => {
            return assertIgnoredWhitespaces('CURTIME() + INTERVAL 2 HOUR');
        });

        // TODO(Rui): BUG#29795595
        it.skip('ignores any leading or trailing whitespace in a mulDivExpr', () => {
            return assertIgnoredWhitespaces('2 * 4');
        });

        // TODO(Rui): BUG#29795595
        it.skip('ignores any leading or trailing whitespace in a addSubExpr', () => {
            return assertIgnoredWhitespaces('1 + 1');
        });

        // TODO(Rui): BUG#29795595
        it.skip('ignores any leading or trailing whitespace in a shiftExpr', () => {
            return assertIgnoredWhitespaces('2 >> 1');
        });

        // TODO(Rui): BUG#29795595
        it.skip('ignores any leading or trailing whitespace in a bitExpr', () => {
            return assertIgnoredWhitespaces('1 ^ 1');
        });

        // TODO(Rui): BUG#29795595
        it.skip('ignores any leading or trailing whitespace in a shiftExpr', () => {
            return assertIgnoredWhitespaces('2 >> 1');
        });

        // TODO(Rui): BUG#29795595
        it.skip('ignores any leading or trailing whitespace in a compExpr', () => {
            return assertIgnoredWhitespaces('foo = :v');
        });

        // TODO(Rui): BUG#29795595
        it.skip('ignores any leading or trailing whitespace in a shiftExpr', () => {
            return assertIgnoredWhitespaces('2 >> 1');
        });

        // TODO(Rui): BUG#29795595
        it.skip('ignores any leading or trailing whitespace in an ilriExpr', () => {
            return assertIgnoredWhitespaces('TRUE IS NOT FALSE');
        });

        // TODO(Rui): BUG#29795595
        it.skip('ignores any leading or trailing whitespace in an andExpr', () => {
            return assertIgnoredWhitespaces('foo = "bar" AND baz = "qux"');
        });

        // TODO(Rui): BUG#29795595
        it.skip('ignores any leading or trailing whitespace in an orExpr', () => {
            return assertIgnoredWhitespaces('foo = "bar" OR baz = "qux"');
        });

        it('fails to parse an expression containing "not" identifiers alongside operators with the same optional prefix', () => {
            const type = Parser.Type.EXPR;

            expect(() => Parser.parse('not in (1, 2, 3)', { type })).to.throw();
            expect(() => Parser.parse('not not in (1, 2, 3)', { type }));
            expect(() => Parser.parse("not like '%foo'", { type })).to.throw();
            expect(() => Parser.parse("not not like '%foo'", { type })).to.throw();
            expect(() => Parser.parse('not in [1, 2, 3]', { type })).to.throw();
            expect(() => Parser.parse('not not in [1, 2, 3]', { type }));
            expect(() => Parser.parse("not like '%foo'", { type })).to.throw();
            return expect(() => Parser.parse("not not like '%foo'", { type })).to.throw();
        });
    });
});
