// source: mysqlx_session.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var mysqlx_pb = require('./mysqlx_pb.js');
goog.object.extend(proto, mysqlx_pb);
goog.exportSymbol('proto.Mysqlx.Session.AuthenticateContinue', null, global);
goog.exportSymbol('proto.Mysqlx.Session.AuthenticateOk', null, global);
goog.exportSymbol('proto.Mysqlx.Session.AuthenticateStart', null, global);
goog.exportSymbol('proto.Mysqlx.Session.Close', null, global);
goog.exportSymbol('proto.Mysqlx.Session.Reset', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Mysqlx.Session.AuthenticateStart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Mysqlx.Session.AuthenticateStart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Mysqlx.Session.AuthenticateStart.displayName = 'proto.Mysqlx.Session.AuthenticateStart';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Mysqlx.Session.AuthenticateContinue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Mysqlx.Session.AuthenticateContinue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Mysqlx.Session.AuthenticateContinue.displayName = 'proto.Mysqlx.Session.AuthenticateContinue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Mysqlx.Session.AuthenticateOk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Mysqlx.Session.AuthenticateOk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Mysqlx.Session.AuthenticateOk.displayName = 'proto.Mysqlx.Session.AuthenticateOk';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Mysqlx.Session.Reset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Mysqlx.Session.Reset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Mysqlx.Session.Reset.displayName = 'proto.Mysqlx.Session.Reset';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Mysqlx.Session.Close = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Mysqlx.Session.Close, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Mysqlx.Session.Close.displayName = 'proto.Mysqlx.Session.Close';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Mysqlx.Session.AuthenticateStart.prototype.toObject = function(opt_includeInstance) {
  return proto.Mysqlx.Session.AuthenticateStart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Mysqlx.Session.AuthenticateStart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Session.AuthenticateStart.toObject = function(includeInstance, msg) {
  var f, obj = {
    mechName: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    authData: msg.getAuthData_asB64(),
    initialResponse: msg.getInitialResponse_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Mysqlx.Session.AuthenticateStart}
 */
proto.Mysqlx.Session.AuthenticateStart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Mysqlx.Session.AuthenticateStart;
  return proto.Mysqlx.Session.AuthenticateStart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Mysqlx.Session.AuthenticateStart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Mysqlx.Session.AuthenticateStart}
 */
proto.Mysqlx.Session.AuthenticateStart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMechName(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAuthData(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setInitialResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Mysqlx.Session.AuthenticateStart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Mysqlx.Session.AuthenticateStart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Mysqlx.Session.AuthenticateStart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Session.AuthenticateStart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * required string mech_name = 1;
 * @return {string}
 */
proto.Mysqlx.Session.AuthenticateStart.prototype.getMechName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Mysqlx.Session.AuthenticateStart} returns this
 */
proto.Mysqlx.Session.AuthenticateStart.prototype.setMechName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Mysqlx.Session.AuthenticateStart} returns this
 */
proto.Mysqlx.Session.AuthenticateStart.prototype.clearMechName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mysqlx.Session.AuthenticateStart.prototype.hasMechName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes auth_data = 2;
 * @return {string}
 */
proto.Mysqlx.Session.AuthenticateStart.prototype.getAuthData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes auth_data = 2;
 * This is a type-conversion wrapper around `getAuthData()`
 * @return {string}
 */
proto.Mysqlx.Session.AuthenticateStart.prototype.getAuthData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAuthData()));
};


/**
 * optional bytes auth_data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAuthData()`
 * @return {!Uint8Array}
 */
proto.Mysqlx.Session.AuthenticateStart.prototype.getAuthData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAuthData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Mysqlx.Session.AuthenticateStart} returns this
 */
proto.Mysqlx.Session.AuthenticateStart.prototype.setAuthData = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Mysqlx.Session.AuthenticateStart} returns this
 */
proto.Mysqlx.Session.AuthenticateStart.prototype.clearAuthData = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mysqlx.Session.AuthenticateStart.prototype.hasAuthData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes initial_response = 3;
 * @return {string}
 */
proto.Mysqlx.Session.AuthenticateStart.prototype.getInitialResponse = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes initial_response = 3;
 * This is a type-conversion wrapper around `getInitialResponse()`
 * @return {string}
 */
proto.Mysqlx.Session.AuthenticateStart.prototype.getInitialResponse_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getInitialResponse()));
};


/**
 * optional bytes initial_response = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getInitialResponse()`
 * @return {!Uint8Array}
 */
proto.Mysqlx.Session.AuthenticateStart.prototype.getInitialResponse_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getInitialResponse()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Mysqlx.Session.AuthenticateStart} returns this
 */
proto.Mysqlx.Session.AuthenticateStart.prototype.setInitialResponse = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Mysqlx.Session.AuthenticateStart} returns this
 */
proto.Mysqlx.Session.AuthenticateStart.prototype.clearInitialResponse = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mysqlx.Session.AuthenticateStart.prototype.hasInitialResponse = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Mysqlx.Session.AuthenticateContinue.prototype.toObject = function(opt_includeInstance) {
  return proto.Mysqlx.Session.AuthenticateContinue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Mysqlx.Session.AuthenticateContinue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Session.AuthenticateContinue.toObject = function(includeInstance, msg) {
  var f, obj = {
    authData: msg.getAuthData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Mysqlx.Session.AuthenticateContinue}
 */
proto.Mysqlx.Session.AuthenticateContinue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Mysqlx.Session.AuthenticateContinue;
  return proto.Mysqlx.Session.AuthenticateContinue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Mysqlx.Session.AuthenticateContinue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Mysqlx.Session.AuthenticateContinue}
 */
proto.Mysqlx.Session.AuthenticateContinue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAuthData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Mysqlx.Session.AuthenticateContinue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Mysqlx.Session.AuthenticateContinue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Mysqlx.Session.AuthenticateContinue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Session.AuthenticateContinue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * required bytes auth_data = 1;
 * @return {string}
 */
proto.Mysqlx.Session.AuthenticateContinue.prototype.getAuthData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * required bytes auth_data = 1;
 * This is a type-conversion wrapper around `getAuthData()`
 * @return {string}
 */
proto.Mysqlx.Session.AuthenticateContinue.prototype.getAuthData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAuthData()));
};


/**
 * required bytes auth_data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAuthData()`
 * @return {!Uint8Array}
 */
proto.Mysqlx.Session.AuthenticateContinue.prototype.getAuthData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAuthData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Mysqlx.Session.AuthenticateContinue} returns this
 */
proto.Mysqlx.Session.AuthenticateContinue.prototype.setAuthData = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Mysqlx.Session.AuthenticateContinue} returns this
 */
proto.Mysqlx.Session.AuthenticateContinue.prototype.clearAuthData = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mysqlx.Session.AuthenticateContinue.prototype.hasAuthData = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Mysqlx.Session.AuthenticateOk.prototype.toObject = function(opt_includeInstance) {
  return proto.Mysqlx.Session.AuthenticateOk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Mysqlx.Session.AuthenticateOk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Session.AuthenticateOk.toObject = function(includeInstance, msg) {
  var f, obj = {
    authData: msg.getAuthData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Mysqlx.Session.AuthenticateOk}
 */
proto.Mysqlx.Session.AuthenticateOk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Mysqlx.Session.AuthenticateOk;
  return proto.Mysqlx.Session.AuthenticateOk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Mysqlx.Session.AuthenticateOk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Mysqlx.Session.AuthenticateOk}
 */
proto.Mysqlx.Session.AuthenticateOk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAuthData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Mysqlx.Session.AuthenticateOk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Mysqlx.Session.AuthenticateOk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Mysqlx.Session.AuthenticateOk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Session.AuthenticateOk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes auth_data = 1;
 * @return {string}
 */
proto.Mysqlx.Session.AuthenticateOk.prototype.getAuthData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes auth_data = 1;
 * This is a type-conversion wrapper around `getAuthData()`
 * @return {string}
 */
proto.Mysqlx.Session.AuthenticateOk.prototype.getAuthData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAuthData()));
};


/**
 * optional bytes auth_data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAuthData()`
 * @return {!Uint8Array}
 */
proto.Mysqlx.Session.AuthenticateOk.prototype.getAuthData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAuthData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Mysqlx.Session.AuthenticateOk} returns this
 */
proto.Mysqlx.Session.AuthenticateOk.prototype.setAuthData = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Mysqlx.Session.AuthenticateOk} returns this
 */
proto.Mysqlx.Session.AuthenticateOk.prototype.clearAuthData = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mysqlx.Session.AuthenticateOk.prototype.hasAuthData = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Mysqlx.Session.Reset.prototype.toObject = function(opt_includeInstance) {
  return proto.Mysqlx.Session.Reset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Mysqlx.Session.Reset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Session.Reset.toObject = function(includeInstance, msg) {
  var f, obj = {
    keepOpen: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Mysqlx.Session.Reset}
 */
proto.Mysqlx.Session.Reset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Mysqlx.Session.Reset;
  return proto.Mysqlx.Session.Reset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Mysqlx.Session.Reset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Mysqlx.Session.Reset}
 */
proto.Mysqlx.Session.Reset.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setKeepOpen(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Mysqlx.Session.Reset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Mysqlx.Session.Reset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Mysqlx.Session.Reset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Session.Reset.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool keep_open = 1;
 * @return {boolean}
 */
proto.Mysqlx.Session.Reset.prototype.getKeepOpen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Mysqlx.Session.Reset} returns this
 */
proto.Mysqlx.Session.Reset.prototype.setKeepOpen = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Mysqlx.Session.Reset} returns this
 */
proto.Mysqlx.Session.Reset.prototype.clearKeepOpen = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mysqlx.Session.Reset.prototype.hasKeepOpen = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Mysqlx.Session.Close.prototype.toObject = function(opt_includeInstance) {
  return proto.Mysqlx.Session.Close.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Mysqlx.Session.Close} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Session.Close.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Mysqlx.Session.Close}
 */
proto.Mysqlx.Session.Close.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Mysqlx.Session.Close;
  return proto.Mysqlx.Session.Close.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Mysqlx.Session.Close} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Mysqlx.Session.Close}
 */
proto.Mysqlx.Session.Close.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Mysqlx.Session.Close.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Mysqlx.Session.Close.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Mysqlx.Session.Close} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Session.Close.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.Mysqlx.Session);