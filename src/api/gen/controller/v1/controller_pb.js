// source: controller/v1/controller.proto
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

var controller_v1_resources_pb = require('../../controller/v1/resources_pb.js');
goog.object.extend(proto, controller_v1_resources_pb);
var frontier_v1_resources_pb = require('../../frontier/v1/resources_pb.js');
goog.object.extend(proto, frontier_v1_resources_pb);
var config_v1_resources_pb = require('../../config/v1/resources_pb.js');
goog.object.extend(proto, config_v1_resources_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.veidemann.api.controller.v1.CrawlerStatus', null, global);
goog.exportSymbol('proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply', null, global);
goog.exportSymbol('proto.veidemann.api.controller.v1.RoleList', null, global);
goog.exportSymbol('proto.veidemann.api.controller.v1.RunCrawlReply', null, global);
goog.exportSymbol('proto.veidemann.api.controller.v1.RunCrawlRequest', null, global);
goog.exportSymbol('proto.veidemann.api.controller.v1.RunStatus', null, global);
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
proto.veidemann.api.controller.v1.RunCrawlRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.veidemann.api.controller.v1.RunCrawlRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.veidemann.api.controller.v1.RunCrawlRequest.displayName = 'proto.veidemann.api.controller.v1.RunCrawlRequest';
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
proto.veidemann.api.controller.v1.RunCrawlReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.veidemann.api.controller.v1.RunCrawlReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.veidemann.api.controller.v1.RunCrawlReply.displayName = 'proto.veidemann.api.controller.v1.RunCrawlReply';
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
proto.veidemann.api.controller.v1.RoleList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.veidemann.api.controller.v1.RoleList.repeatedFields_, null);
};
goog.inherits(proto.veidemann.api.controller.v1.RoleList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.veidemann.api.controller.v1.RoleList.displayName = 'proto.veidemann.api.controller.v1.RoleList';
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
proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply.displayName = 'proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply';
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
proto.veidemann.api.controller.v1.CrawlerStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.veidemann.api.controller.v1.CrawlerStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.veidemann.api.controller.v1.CrawlerStatus.displayName = 'proto.veidemann.api.controller.v1.CrawlerStatus';
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
proto.veidemann.api.controller.v1.RunCrawlRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.veidemann.api.controller.v1.RunCrawlRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.veidemann.api.controller.v1.RunCrawlRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.veidemann.api.controller.v1.RunCrawlRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    seedId: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.veidemann.api.controller.v1.RunCrawlRequest}
 */
proto.veidemann.api.controller.v1.RunCrawlRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.veidemann.api.controller.v1.RunCrawlRequest;
  return proto.veidemann.api.controller.v1.RunCrawlRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.veidemann.api.controller.v1.RunCrawlRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.veidemann.api.controller.v1.RunCrawlRequest}
 */
proto.veidemann.api.controller.v1.RunCrawlRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSeedId(value);
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
proto.veidemann.api.controller.v1.RunCrawlRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.veidemann.api.controller.v1.RunCrawlRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.veidemann.api.controller.v1.RunCrawlRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.veidemann.api.controller.v1.RunCrawlRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSeedId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string job_id = 5;
 * @return {string}
 */
proto.veidemann.api.controller.v1.RunCrawlRequest.prototype.getJobId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.veidemann.api.controller.v1.RunCrawlRequest} returns this
 */
proto.veidemann.api.controller.v1.RunCrawlRequest.prototype.setJobId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string seed_id = 6;
 * @return {string}
 */
proto.veidemann.api.controller.v1.RunCrawlRequest.prototype.getSeedId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.veidemann.api.controller.v1.RunCrawlRequest} returns this
 */
proto.veidemann.api.controller.v1.RunCrawlRequest.prototype.setSeedId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.veidemann.api.controller.v1.RunCrawlReply.prototype.toObject = function(opt_includeInstance) {
  return proto.veidemann.api.controller.v1.RunCrawlReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.veidemann.api.controller.v1.RunCrawlReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.veidemann.api.controller.v1.RunCrawlReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobExecutionId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.veidemann.api.controller.v1.RunCrawlReply}
 */
proto.veidemann.api.controller.v1.RunCrawlReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.veidemann.api.controller.v1.RunCrawlReply;
  return proto.veidemann.api.controller.v1.RunCrawlReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.veidemann.api.controller.v1.RunCrawlReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.veidemann.api.controller.v1.RunCrawlReply}
 */
proto.veidemann.api.controller.v1.RunCrawlReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobExecutionId(value);
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
proto.veidemann.api.controller.v1.RunCrawlReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.veidemann.api.controller.v1.RunCrawlReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.veidemann.api.controller.v1.RunCrawlReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.veidemann.api.controller.v1.RunCrawlReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobExecutionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string job_execution_id = 1;
 * @return {string}
 */
proto.veidemann.api.controller.v1.RunCrawlReply.prototype.getJobExecutionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.veidemann.api.controller.v1.RunCrawlReply} returns this
 */
proto.veidemann.api.controller.v1.RunCrawlReply.prototype.setJobExecutionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.veidemann.api.controller.v1.RoleList.repeatedFields_ = [1];



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
proto.veidemann.api.controller.v1.RoleList.prototype.toObject = function(opt_includeInstance) {
  return proto.veidemann.api.controller.v1.RoleList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.veidemann.api.controller.v1.RoleList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.veidemann.api.controller.v1.RoleList.toObject = function(includeInstance, msg) {
  var f, obj = {
    roleList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.veidemann.api.controller.v1.RoleList}
 */
proto.veidemann.api.controller.v1.RoleList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.veidemann.api.controller.v1.RoleList;
  return proto.veidemann.api.controller.v1.RoleList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.veidemann.api.controller.v1.RoleList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.veidemann.api.controller.v1.RoleList}
 */
proto.veidemann.api.controller.v1.RoleList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<!proto.veidemann.api.config.v1.Role>} */ (reader.readPackedEnum());
      msg.setRoleList(value);
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
proto.veidemann.api.controller.v1.RoleList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.veidemann.api.controller.v1.RoleList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.veidemann.api.controller.v1.RoleList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.veidemann.api.controller.v1.RoleList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoleList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
};


/**
 * repeated veidemann.api.config.v1.Role role = 1;
 * @return {!Array<!proto.veidemann.api.config.v1.Role>}
 */
proto.veidemann.api.controller.v1.RoleList.prototype.getRoleList = function() {
  return /** @type {!Array<!proto.veidemann.api.config.v1.Role>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.veidemann.api.config.v1.Role>} value
 * @return {!proto.veidemann.api.controller.v1.RoleList} returns this
 */
proto.veidemann.api.controller.v1.RoleList.prototype.setRoleList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.veidemann.api.config.v1.Role} value
 * @param {number=} opt_index
 * @return {!proto.veidemann.api.controller.v1.RoleList} returns this
 */
proto.veidemann.api.controller.v1.RoleList.prototype.addRole = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.veidemann.api.controller.v1.RoleList} returns this
 */
proto.veidemann.api.controller.v1.RoleList.prototype.clearRoleList = function() {
  return this.setRoleList([]);
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
proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply.prototype.toObject = function(opt_includeInstance) {
  return proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    openIdConnectIssuer: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply}
 */
proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply;
  return proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply}
 */
proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpenIdConnectIssuer(value);
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
proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpenIdConnectIssuer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string open_id_connect_issuer = 1;
 * @return {string}
 */
proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply.prototype.getOpenIdConnectIssuer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply} returns this
 */
proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply.prototype.setOpenIdConnectIssuer = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.veidemann.api.controller.v1.CrawlerStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.veidemann.api.controller.v1.CrawlerStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.veidemann.api.controller.v1.CrawlerStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.veidemann.api.controller.v1.CrawlerStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    runstatus: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.veidemann.api.controller.v1.CrawlerStatus}
 */
proto.veidemann.api.controller.v1.CrawlerStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.veidemann.api.controller.v1.CrawlerStatus;
  return proto.veidemann.api.controller.v1.CrawlerStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.veidemann.api.controller.v1.CrawlerStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.veidemann.api.controller.v1.CrawlerStatus}
 */
proto.veidemann.api.controller.v1.CrawlerStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.veidemann.api.controller.v1.RunStatus} */ (reader.readEnum());
      msg.setRunstatus(value);
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
proto.veidemann.api.controller.v1.CrawlerStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.veidemann.api.controller.v1.CrawlerStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.veidemann.api.controller.v1.CrawlerStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.veidemann.api.controller.v1.CrawlerStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRunstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional RunStatus runStatus = 1;
 * @return {!proto.veidemann.api.controller.v1.RunStatus}
 */
proto.veidemann.api.controller.v1.CrawlerStatus.prototype.getRunstatus = function() {
  return /** @type {!proto.veidemann.api.controller.v1.RunStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.veidemann.api.controller.v1.RunStatus} value
 * @return {!proto.veidemann.api.controller.v1.CrawlerStatus} returns this
 */
proto.veidemann.api.controller.v1.CrawlerStatus.prototype.setRunstatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.veidemann.api.controller.v1.RunStatus = {
  RUNNING: 0,
  PAUSED: 1,
  PAUSE_REQUESTED: 2
};

goog.object.extend(exports, proto.veidemann.api.controller.v1);
