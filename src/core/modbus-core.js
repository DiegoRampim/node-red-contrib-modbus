/**
 Copyright 2016,2017 - Klaus Landsdorf (http://bianco-royal.de/)
 All rights reserved.
 node-red-contrib-modbus

 @author <a href="mailto:klaus.landsdorf@bianco-royal.de">Klaus Landsdorf</a> (Bianco Royal)
 */
'use strict'
// SOURCE-MAP-REQUIRED

var de = de || {biancoroyal: {modbus: {core: {}}}} // eslint-disable-line no-use-before-define
de.biancoroyal.modbus.core.internalDebug = de.biancoroyal.modbus.core.internalDebug || require('debug')('contribModbus:core') // eslint-disable-line no-use-before-define
de.biancoroyal.modbus.core.ObjectID = de.biancoroyal.modbus.core.ObjectID || require('bson').ObjectID // eslint-disable-line no-use-before-define

de.biancoroyal.modbus.core.getObjectId = function () {
  return new de.biancoroyal.modbus.core.ObjectID()
}

de.biancoroyal.modbus.core.getOriginalMessage = function (messageList, msg) {
  let origMsg = messageList.get(msg.payload.messageId) || undefined

  if (origMsg && origMsg.messageId) {
    messageList.delete(origMsg.messageId)
    de.biancoroyal.modbus.core.internalDebug('Remove Message In:<' + origMsg.messageId + '> Out:<' + msg.payload.messageId + '>')
  } else {
    de.biancoroyal.modbus.core.internalDebug('Message Not Found ' + msg.payload.messageId)
  }

  return origMsg
}

de.biancoroyal.modbus.core.functionCodeModbus = function (dataType) {
  switch (dataType) {
    case 'Coil':
      return 1
    case 'Input':
      return 2
    case 'HoldingRegister':
      return 3
    case 'InputRegister':
      return 4
    default:
      return dataType
  }
}

module.exports = de.biancoroyal.modbus.core
