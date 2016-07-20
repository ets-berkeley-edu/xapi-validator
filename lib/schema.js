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

module.exports.formats = {
  "version" : "^[0-9]+\\.[0-9]+\\.[0-9]+(?:-[0-9A-Za-z-]+)?$",
  "uuid" : "^[0-9a-fA-F]{8}(?:-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$",
  "sha1" : "^[0-9a-fA-F]{40}$",
  "sha2" : "^[0-9a-fA-F]{56}(?:[0-9a-fA-F]{8}(?:[0-9a-fA-F]{32}){0,2})?$",
  "mimetype" : "^[-\\w\\+\\.]+/[-\\w\\+\\.]+(?:;\\s*[-\\w\\+\\.]+=(?:(['\"]?)[-\\w\\+\\.]+\\1)|''|\"\")?$",
  "mailto-iri" : "^mailto:(?:%[0-9a-fA-F]{2}|[-a-zA-Z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:])+@(?:\\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\\.[A-Za-z0-9\\-._~!$&'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:%[0-9a-fA-F]{2}|[-a-zA-Z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:])+)$",
  "mailto-uri" : "^mailto:(?:(?:(?:[A-Za-z0-9\\-._~!$&'()*+,;=:]|%[0-9A-Fa-f]{2})+)@(?:(?:\\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\\.[A-Za-z0-9\\-._~!$&'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-Za-z0-9\\-._~!$&'()*+,;=]|%[0-9A-Fa-f]{2})+)))$",
  "iri" : "^(?:[A-Za-z](?:[-A-Za-z0-9\\+\\.])*:(?:\\/\\/(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:])*@)?(?:\\[(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|::(?:[0-9A-Fa-f]{1,4}:){5}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|v[0-9A-Fa-f]+[-A-Za-z0-9\\._~!\\$&'\\(\\)\\*\\+,;=:]+)\\]|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}|(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=@])*)(?::[0-9]*)?(?:\\/(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@]))*)*|\\/(?:(?:(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@]))+)(?:\\/(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@]))*)*)?|(?:(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@]))+)(?:\\/(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@]))*)*|(?!(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@])))(?:\\?(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@])|[\\uE000-\\uF8FF\\uDC00\\uDB80-\\uDFFD\\uDBBF|\\uDC00\\uDBC0-\\uDFFD\\uDBFF\\/\\?])*)?(?:\\#(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@])|[\\/\\?])*)?)$",
  "iri-reference" : "^(?:[A-Za-z](?:[-A-Za-z0-9\\+\\.])*:(?:\\/\\/(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:])*@)?(?:\\[(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|::(?:[0-9A-Fa-f]{1,4}:){5}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|v[0-9A-Fa-f]+[-A-Za-z0-9\\._~!\\$&'\\(\\)\\*\\+,;=:]+)\\]|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}|(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=@])*)(?::[0-9]*)?(?:\\/(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@]))*)*|\\/(?:(?:(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@]))+)(?:\\/(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@]))*)*)?|(?:(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@]))+)(?:\\/(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@]))*)*|(?!(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@])))(?:\\?(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@])|[\\uE000-\\uF8FF\\uDC00\\uDB80-\\uDFFD\\uDBBF|\\uDC00\\uDBC0-\\uDFFD\\uDBFF\\/\\?])*)?(?:\\#(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@])|[\\/\\?])*)?|(?:\\/\\/(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:])*@)?(?:\\[(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|::(?:[0-9A-Fa-f]{1,4}:){5}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|v[0-9A-Fa-f]+[-A-Za-z0-9\\._~!\\$&'\\(\\)\\*\\+,;=:]+)\\]|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}|(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=@])*)(?::[0-9]*)?(?:\\/(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@]))*)*|\\/(?:(?:(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@]))+)(?:\\/(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@]))*)*)?|(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=@])+)(?:\\/(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@]))*)*|(?!(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@])))(?:\\?(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@])|[\\uE000-\\uF8FF\\uDC00\\uDB80-\\uDFFD\\uDBBF|\\uDC00\\uDBC0-\\uDFFD\\uDBFF\\/\\?])*)?(?:\\#(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@])|[\\/\\?])*)?)$",
  "rfc3986-uri" : "^[A-Za-z][A-Za-z0-9+\\-.]*:(?:\\/\\/(?:(?:[A-Za-z0-9\\-._~!$&'()*+,;=:]|%[0-9A-Fa-f]{2})*@)?(?:\\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\\.[A-Za-z0-9\\-._~!$&'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-Za-z0-9\\-._~!$&'()*+,;=]|%[0-9A-Fa-f]{2})*)(?::[0-9]*)?(?:\\/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*|\\/(?:(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:\\/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)?|(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:\\/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*|)(?:\\?(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@\\/?]|%[0-9A-Fa-f]{2})*)?(?:\\#(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@\\/?]|%[0-9A-Fa-f]{2})*)?$",
  "rfc3986-uri-reference" : "^(?:[A-Za-z][A-Za-z0-9+\\-.]*:(?:\\/\\/(?:(?:[A-Za-z0-9\\-._~!$&'()*+,;=:]|%[0-9A-Fa-f]{2})*@)?(?:\\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\\.[A-Za-z0-9\\-._~!$&'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-Za-z0-9\\-._~!$&'()*+,;=]|%[0-9A-Fa-f]{2})*)(?::[0-9]*)?(?:\\/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*|\\/(?:(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:\\/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)?|(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:\\/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*|)(?:\\?(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@\\/?]|%[0-9A-Fa-f]{2})*)?(?:\\#(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@\\/?]|%[0-9A-Fa-f]{2})*)?|(?:\\/\\/(?:(?:[A-Za-z0-9\\-._~!$&'()*+,;=:]|%[0-9A-Fa-f]{2})*@)?(?:\\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\\.[A-Za-z0-9\\-._~!$&'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-Za-z0-9\\-._~!$&'()*+,;=]|%[0-9A-Fa-f]{2})*)(?::[0-9]*)?(?:\\/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*|\\/(?:(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:\\/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)?|(?:[A-Za-z0-9\\-._~!$&'()*+,;=@]|%[0-9A-Fa-f]{2})+(?:\\/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*|)(?:\\?(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@\\/?]|%[0-9A-Fa-f]{2})*)?(?:\\#(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@\\/?]|%[0-9A-Fa-f]{2})*)?)$",
  "iso_date" : "^([-+]?\\d{4}(?!\\d{2}\b))((-?)((0[1-9]|1[0-2])(\\3([12]\\d|0[1-9]|3[01]))?|W([0-4]\\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\\d|[12]\\d{2}|3([0-5]\\d|6[1-6])))([T\\s]((([01]\\d|2[0-3])((:?)[0-5]\\d)?|24\\:?00)([\\.,]\\d+(?!:))?)?(\\17[0-5]\\d([\\.,]\\d+)?)?([zZ]|([-+])([01]\\d|2[0-3]):?([0-5]\\d)?)?)?)?$",
  "iso_duration" : "^P(?=\\w*\\d)(?:\\d+Y|Y)?(?:\\d+M|M)?(?:\\d+W|W)?(?:\\d+D|D)?(?:T(?:\\d+H|H)?(?:\\d+M|M)?(?:\\d+(?:\\­.\\d{1,2})?S|S)?)?$",
  "langtag" : "^(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)|((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)))$"
};

module.exports.statement = {
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "id" : "statement",
  "type" : "object",
  "allOf" : [{
    "$ref" : "statement_base"
  }],
  "properties" : {
    "objectType" : {
      "type" : "null"
    },
    "id" : {},
    "actor" : {},
    "verb" : {},
    "object" : {},
    "result" : {},
    "context" : {},
    "timestamp" : {},
    "stored" : {},
    "authority" : {},
    "version" : {},
    "attachments" : {}
  },
  "additionalProperties" : false
};

module.exports.schema = {
  "account" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "account",
    "type" : "object",
    "required" : ["account"],
    "properties" : {
      "account" : {
        "id" : "account!core",
        "type" : "object",
        "additionalProperties" : false,
        "required" : ["homePage", "name"],
        "properties" : {
          "homePage" : {
            "type" : "string",
            "format" : "iri"
          },
          "name" : {
            "type" : "string"
          }
        }
      },
      "mbox" : {
        "type" : "null"
      },
      "mbox_sha1sum" : {
        "type" : "null"
      },
      "openid" : {
        "type" : "null"
      }
    }
  },
  "activity_definition" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "activity_definition",
    "type" : "object",
    "oneOf" : [{
      "properties" : {
        "interactionType" : {
          "type" : "null"
        },
        "correctResponsesPattern" : {
          "type" : "null"
        },
        "choices" : {
          "type" : "null"
        },
        "scale" : {
          "type" : "null"
        },
        "source" : {
          "type" : "null"
        },
        "target" : {
          "type" : "null"
        },
        "steps" : {
          "type" : "null"
        }
      }
    }, {
      "$ref" : "interactionactivity"
    }],
    "additionalProperties" : false,
    "properties" : {
      "name" : {
        "$ref" : "languagemap"
      },
      "description" : {
        "$ref" : "languagemap"
      },
      "type" : {
        "type" : "string",
        "format" : "iri"
      },
      "moreInfo" : {
        "type" : "string",
        "format" : "iri"
      },
      "interactionType" : {},
      "correctResponsesPattern" : {},
      "choices" : {},
      "scale" : {},
      "source" : {},
      "target" : {},
      "steps" : {},
      "extensions" : {
        "$ref" : "extensions"
      }
    }
  },
  "activity_list_or_obj" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "activity_list_or_obj",
    "oneOf" : [{
      "type" : "array",
      "items" : {
        "$ref" : "activity"
      }
    }, {
      "$ref" : "activity"
    }]
  },
  "activity" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "activity",
    "type" : "object",
    "required" : ["id"],
    "additionalProperties" : false,
    "properties" : {
      "objectType" : {
        "enum" : ["Activity"]
      },
      "id" : {
        "$ref" : "activityid!core"
      },
      "definition" : {
        "$ref" : "activity_definition"
      }
    }
  },
  "activityid" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "activityid",
    "type" : "object",
    "required" : ["activityId"],
    "properties" : {
      "activityId" : {
        "id" : "activityid!core",
        "type" : "string",
        "format" : "iri"
      }
    }
  },
  "agent" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "agent",
    "allOf" : [{
      "$ref" : "inversefunctional"
    }],
    "properties" : {
      "name" : {
        "type" : "string"
      },
      "objectType" : {
        "enum" : ["Agent"]
      },
      "mbox" : {},
      "mbox_sha1sum" : {},
      "account" : {},
      "openid" : {}
    },
    "additionalProperties" : false
  },
  "anonymousgroup" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "anonymousgroup",
    "allOf" : [{
      "$ref" : "group_base"
    }],
    "required" : ["member"],
    "properties" : {
      "member" : {},
      "name" : {},
      "objectType" : {}
    },
    "additionalProperties" : false
  },
  "attachment" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "attachment",
    "type" : "object",
    "additionalProperties" : false,
    "required" : ["usageType", "display", "contentType", "length", "sha2"],
    "properties" : {
      "usageType" : {
        "type" : "string",
        "format" : "iri"
      },
      "display" : {
        "$ref" : "languagemap"
      },
      "description" : {
        "$ref" : "languagemap"
      },
      "contentType" : {
        "type" : "string",
        "format" : "mimetype"
      },
      "length" : {
        "type" : "number",
        "minimum" : 0
      },
      "sha2" : {
        "type" : "string",
        "format" : "sha2"
      },
      "fileUrl" : {
        "type" : "string",
        "format" : "iri"
      }
    }
  },
  "context" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "context",
    "type" : "object",
    "additionalProperties" : false,
    "properties" : {
      "registration" : {
        "type" : "string",
        "format" : "uuid"
      },
      "instructor" : {
        "oneOf" : [{
          "$ref" : "agent"
        }, {
          "$ref" : "group"
        }]
      },
      "team" : {
        "allOf" : [{
          "$ref" : "group"
        }]
      },
      "contextActivities" : {
        "$ref" : "contextactivities"
      },
      "revision" : {
        "type" : "string"
      },
      "platform" : {
        "type" : "string"
      },
      "language" : {
        "type" : "string",
        "format" : "langtag"
      },
      "statement" : {
        "$ref" : "statementref"
      },
      "extensions" : {
        "$ref" : "extensions"
      }
    }
  },
  "contextactivities" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "contextactivities",
    "type" : "object",
    "additionalProperties" : false,
    "properties" : {
      "parent" : {
        "$ref" : "activity_list_or_obj"
      },
      "grouping" : {
        "$ref" : "activity_list_or_obj"
      },
      "category" : {
        "$ref" : "activity_list_or_obj"
      },
      "other" : {
        "$ref" : "activity_list_or_obj"
      }
    }
  },
  "extensions" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "extensions",
    "patternProperties" : {
      "^(?:[A-Za-z](?:[-A-Za-z0-9\\+\\.])*:(?:\\/\\/(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:])*@)?(?:\\[(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|::(?:[0-9A-Fa-f]{1,4}:){5}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|v[0-9A-Fa-f]+[-A-Za-z0-9\\._~!\\$&'\\(\\)\\*\\+,;=:]+)\\]|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}|(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=@])*)(?::[0-9]*)?(?:\\/(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@]))*)*|\\/(?:(?:(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@]))+)(?:\\/(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@]))*)*)?|(?:(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@]))+)(?:\\/(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@]))*)*|(?!(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@])))(?:\\?(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@])|[\\uE000-\\uF8FF\\uDC00\\uDB80-\\uDFFD\\uDBBF|\\uDC00\\uDBC0-\\uDFFD\\uDBFF\\/\\?])*)?(?:\\#(?:(?:%[0-9A-Fa-f][0-9A-Fa-f]|[-A-Za-z0-9\\._~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF\\uDC00\\uD800-\\uDFFD\\uD83F\\uDC00\\uD840-\\uDFFD\\uD87F\\uDC00\\uD880-\\uDFFD\\uD8BF\\uDC00\\uD8C0-\\uDFFD\\uD8FF\\uDC00\\uD900-\\uDFFD\\uD93F\\uDC00\\uD940-\\uDFFD\\uD97F\\uDC00\\uD980-\\uDFFD\\uD9BF\\uDC00\\uD9C0-\\uDFFD\\uD9FF\\uDC00\\uDA00-\\uDFFD\\uDA3F\\uDC00\\uDA40-\\uDFFD\\uDA7F\\uDC00\\uDA80-\\uDFFD\\uDABF\\uDC00\\uDAC0-\\uDFFD\\uDAFF\\uDC00\\uDB00-\\uDFFD\\uDB3F\\uDC00\\uDB44-\\uDFFD\\uDB7F!\\$&'\\(\\)\\*\\+,;=:@])|[\\/\\?])*)?)$" : {}
    },
    "additionalProperties" : false
  },
  "group_base" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "group_base",
    "type" : "object",
    "required" : ["objectType"],
    "properties" : {
      "name" : {
        "type" : "string"
      },
      "objectType" : {
        "enum" : ["Group"]
      },
      "member" : {
        "type" : "array",
        "items" : {
          "$ref" : "agent"
        }
      }
    }
  },
  "group" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "group",
    "oneOf" : [{
      "$ref" : "anonymousgroup"
    }, {
      "$ref" : "identifiedgroup"
    }]
  },
  "identifiedgroup" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "identifiedgroup",
    "allOf" : [{
      "$ref" : "inversefunctional"
    }, {
      "$ref" : "group_base"
    }],
    "properties" : {
      "name" : {},
      "objectType" : {},
      "member" : {},
      "mbox" : {},
      "mbox_sha1sum" : {},
      "account" : {},
      "openid" : {}
    },
    "additionalProperties" : false
  },
  "interactionactivity_base" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "interactionactivity_base",
    "type" : "object",
    "properties" : {
      "correctResponsesPattern" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      }
    }
  },
  "interactionactivity_choices" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "interactionactivity_choices",
    "type" : "object",
    "allOf" : [{
      "$ref" : "interactionactivity_base"
    }],
    "required" : ["choices", "interactionType"],
    "properties" : {
      "choices" : {
        "$ref" : "interactioncomponent_list"
      },
      "scale" : {
        "type" : "null"
      },
      "source" : {
        "type" : "null"
      },
      "target" : {
        "type" : "null"
      },
      "steps" : {
        "type" : "null"
      },
      "interactionType" : {
        "enum" : ["choice", "sequencing"]
      }
    }
  },
  "interactionactivity_none" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "interactionactivity_none",
    "type" : "object",
    "required" : ["interactionType"],
    "allOf" : [{
      "$ref" : "interactionactivity_base"
    }, {
      "oneOf" : [{
        "properties" : {
          "interactionType" : {
            "enum" : ["true-false"]
          },
          "correctResponsesPattern" : {
            "type" : "array",
            "items" : {
              "enum" : ["true", "false"]
            }
          }
        }
      }, {
        "not" : {
          "properties" : {
            "interactionType" : {
              "enum" : ["true-false"]
            }
          }
        }
      }]
    }],
    "properties" : {
      "choices" : {
        "type" : "null"
      },
      "scale" : {
        "type" : "null"
      },
      "source" : {
        "type" : "null"
      },
      "target" : {
        "type" : "null"
      },
      "steps" : {
        "type" : "null"
      },
      "interactionType" : {
        "enum" : ["true-false", "fill-in", "long-fill-in", "numeric", "other"]
      }
    }
  },
  "interactionactivity_scale" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "interactionactivity_scale",
    "type" : "object",
    "allOf" : [{
      "$ref" : "interactionactivity_base"
    }],
    "required" : ["scale", "interactionType"],
    "properties" : {
      "choices" : {
        "type" : "null"
      },
      "scale" : {
        "$ref" : "interactioncomponent_list"
      },
      "source" : {
        "type" : "null"
      },
      "target" : {
        "type" : "null"
      },
      "steps" : {
        "type" : "null"
      },
      "interactionType" : {
        "enum" : ["likert"]
      }
    }
  },
  "interactionactivity_sourcetarget" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "interactionactivity_sourcetarget",
    "type" : "object",
    "allOf" : [{
      "$ref" : "interactionactivity_base"
    }],
    "required" : ["source", "target", "interactionType"],
    "properties" : {
      "choices" : {
        "type" : "null"
      },
      "scale" : {
        "type" : "null"
      },
      "source" : {
        "$ref" : "interactioncomponent_list"
      },
      "target" : {
        "$ref" : "interactioncomponent_list"
      },
      "steps" : {
        "type" : "null"
      },
      "interactionType" : {
        "enum" : ["matching"]
      }
    }
  },
  "interactionactivity_steps" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "interactionactivity_steps",
    "type" : "object",
    "allOf" : [{
      "$ref" : "interactionactivity_base"
    }],
    "required" : ["steps", "interactionType"],
    "properties" : {
      "choices" : {
        "type" : "null"
      },
      "scale" : {
        "type" : "null"
      },
      "source" : {
        "type" : "null"
      },
      "target" : {
        "type" : "null"
      },
      "steps" : {
        "$ref" : "interactioncomponent_list"
      },
      "interactionType" : {
        "enum" : ["performance"]
      }
    }
  },
  "interactionactivity" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "interactionactivity",
    "type" : "object",
    "oneOf" : [{
      "$ref" : "interactionactivity_choices"
    }, {
      "$ref" : "interactionactivity_scale"
    }, {
      "$ref" : "interactionactivity_sourcetarget"
    }, {
      "$ref" : "interactionactivity_steps"
    }, {
      "$ref" : "interactionactivity_none"
    }]
  },
  "interactioncomponent_list" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "interactioncomponent_list",
    "type" : "array",
    "items" : {
      "$ref" : "interactioncomponent"
    },
    "minItems" : 1
  },
  "interactioncomponent" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "interactioncomponent",
    "type" : "object",
    "required" : ["id"],
    "properties" : {
      "id" : {
        "type" : "string",
        "minLength" : 1
      },
      "description" : {
        "$ref" : "languagemap"
      }
    }
  },
  "inversefunctional" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "inversefunctional",
    "oneOf" : [{
      "$ref" : "mbox"
    }, {
      "$ref" : "mbox_sha1sum"
    }, {
      "$ref" : "openid"
    }, {
      "$ref" : "account"
    }]
  },
  "languagemap" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "languagemap",
    "type" : "object",
    "patternProperties" : {
      "^(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)|((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)))$" : {
        "type" : "string"
      }
    },
    "additionalProperties" : false
  },
  "mbox_sha1sum" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "mbox_sha1sum",
    "type" : "object",
    "required" : ["mbox_sha1sum"],
    "properties" : {
      "mbox_sha1sum" : {
        "id" : "mbox_sha1sum!core",
        "type" : "string",
        "format" : "sha1"
      },
      "mbox" : {
        "type" : "null"
      },
      "openid" : {
        "type" : "null"
      },
      "account" : {
        "type" : "null"
      }
    }
  },
  "mbox" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "mbox",
    "type" : "object",
    "required" : ["mbox"],
    "properties" : {
      "mbox" : {
        "id" : "mbox!core",
        "type" : "string",
        "format" : "mailto-iri"
      },
      "mbox_sha1sum" : {
        "type" : "null"
      },
      "openid" : {
        "type" : "null"
      },
      "account" : {
        "type" : "null"
      }
    }
  },
  "openid" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "openid",
    "type" : "object",
    "required" : ["openid"],
    "properties" : {
      "openid" : {
        "id" : "openid!core",
        "type" : "string",
        "format" : "rfc3986-uri"
      },
      "mbox" : {
        "type" : "null"
      },
      "mbox_sha1sum" : {
        "type" : "null"
      },
      "account" : {
        "type" : "null"
      }
    }
  },
  "person" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "person",
    "type" : "object",
    "additionalProperties" : false,
    "required" : ["objectType"],
    "properties" : {
      "objectType" : {
        "enum" : ["Person"]
      },
      "name" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "mbox" : {
        "type" : "array",
        "items" : {
          "$ref" : "mbox!core"
        }
      },
      "mbox_sha1sum" : {
        "type" : "array",
        "items" : {
          "$ref" : "mbox_sha1sum!core"
        }
      },
      "openid" : {
        "type" : "array",
        "items" : {
          "$ref" : "openid!core"
        }
      },
      "account" : {
        "type" : "array",
        "items" : {
          "$ref" : "account!core"
        }
      }
    }
  },
  "result" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "result",
    "type" : "object",
    "properties" : {
      "score" : {
        "$ref" : "score"
      },
      "success" : {
        "type" : "boolean"
      },
      "completion" : {
        "type" : "boolean"
      },
      "response" : {
        "type" : "string"
      },
      "duration" : {
        "type" : "string",
        "format" : "iso_duration"
      },
      "extensions" : {
        "$ref" : "extensions"
      }
    },
    "additionalProperties" : false
  },
  "score" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "score",
    "type" : "object",
    "additionalProperties" : false,
    "properties" : {
      "scaled" : {
        "type" : "number",
        "minimum" : -1,
        "maximum" : 1
      },
      "raw" : {
        "type" : "number"
      },
      "min" : {
        "type" : "number"
      },
      "max" : {
        "type" : "number"
      }
    }
  },
  "statement_base" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "statement_base",
    "type" : "object",
    "required" : ["actor", "verb", "object"],
    "additionalProperties" : false,
    "properties" : {
      "objectType" : {},
      "id" : {
        "type" : "string",
        "format" : "uuid"
      },
      "actor" : {
        "oneOf" : [{
          "$ref" : "agent"
        }, {
          "$ref" : "group"
        }]
      },
      "verb" : {
        "$ref" : "verb"
      },
      "object" : {
        "$ref" : "statement_object"
      },
      "result" : {
        "$ref" : "result"
      },
      "context" : {
        "$ref" : "context"
      },
      "timestamp" : {
        "type" : "string",
        "format" : "iso_date"
      },
      "stored" : {
        "type" : "string",
        "format" : "iso_date"
      },
      "authority" : {
        "oneOf" : [{
          "$ref" : "agent"
        }, {
          "allOf" : [{
            "$ref" : "anonymousgroup"
          }],
          "properties" : {
            "member" : {
              "type" : "array",
              "items" : {
                "$ref" : "agent"
              },
              "minItems" : 2,
              "maxItems" : 2
            }
          }
        }]
      },
      "version" : {
        "type" : "string",
        "format" : "version"
      },
      "attachments" : {
        "type" : "array",
        "items" : {
          "$ref" : "attachment"
        }
      }
    }
  },
  "statement_object" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "statement_object",
    "type" : "object",
    "oneOf" : [{
      "$ref" : "activity"
    }, {
      "required" : ["objectType"],
      "oneOf" : [{
        "$ref" : "agent"
      }, {
        "$ref" : "group"
      }, {
        "$ref" : "statementref"
      }, {
        "$ref" : "substatement"
      }]
    }]
  },
  "statementref" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "statementref",
    "type" : "object",
    "additionalProperties" : false,
    "required" : ["objectType", "id"],
    "properties" : {
      "objectType" : {
        "enum" : ["StatementRef"]
      },
      "id" : {
        "type" : "string",
        "format" : "uuid"
      }
    }
  },
  "statementresult" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "statementresult",
    "type" : "object",
    "additionalProperties" : false,
    "required" : ["statements"],
    "properties" : {
      "statements" : {
        "type" : "array",
        "items" : {
          "$ref" : "statement"
        }
      },
      "more" : {
        "type" : "string",
        "format" : "iri"
      }
    }
  },
  "substatement" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "substatement",
    "allOf" : [{
      "$ref" : "statement_base"
    }],
    "required" : ["objectType"],
    "additionalProperties" : false,
    "properties" : {
      "objectType" : {
        "enum" : ["SubStatement"]
      },
      "id" : {
        "type" : "null"
      },
      "stored" : {
        "type" : "null"
      },
      "version" : {
        "type" : "null"
      },
      "authority" : {
        "type" : "null"
      },
      "object" : {
        "not" : {
          "required" : ["objectType"],
          "properties" : {
            "objectType" : {
              "enum" : ["SubStatement"]
            }
          }
        }
      },
      "actor" : {},
      "verb" : {},
      "result" : {},
      "context" : {},
      "timestamp" : {},
      "attachments" : {},
      "version" : {}
    }
  },
  "verb" : {
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "id" : "verb",
    "type" : "object",
    "required" : ["id"],
    "properties" : {
      "id" : {
        "type" : "string",
        "format" : "iri"
      },
      "display" : {
        "$ref" : "languagemap"
      }
    },
    "additionalProperties" : false
  }
};
