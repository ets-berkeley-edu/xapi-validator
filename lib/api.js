/**
 * Copyright 2016 Nicolaas Matthijs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _ = require('lodash');
var jaySchema = require('jayschema');
var xapiSchema = require('./schema');

var js = new jaySchema();

// Formats
var formats = xapiSchema.formats;
_.each(formats, function(pattern, format) {
  var regex = new RegExp(pattern);
  js.addFormat(format, function(value) {
    if (regex.test(value)) {
      return null;
    }

    return true;
  });
});

// Helper schemas
_.each(xapiSchema.schema, function(helperSchema) {
  js.register(helperSchema);
});

// Main schema
var mainSchema = xapiSchema.statement;

/* Validator */

/**
 * Validate an xAPI statement
 *
 * @param  {Object}         statement         The xAPI statement to validate
 * @return {Object}                           The validation error(s), if any
 */
var validate = module.exports.validate = function(statement, callback) {
  js.validate(statement, mainSchema, callback);
};
