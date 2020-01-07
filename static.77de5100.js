// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../Cargo.toml":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__wbindgen_closure_wrapper12274 = exports.__wbindgen_closure_wrapper12276 = exports.__wbindgen_function_table = exports.__wbindgen_memory = exports.__wbindgen_rethrow = exports.__wbindgen_throw = exports.__wbg_cargowebsnippet2908dbb08792df5e699e324eec3e29fd6a57c2c9_1aba12964286db2a = exports.__wbg_cargowebsnippet0f503de1d61309643e0e13a7871406891e3691c9_e3423d1d6ce2504c = exports.__wbg_cargowebsnippet3303dd756c21d0389d6266807bd9b10fb27d21d3_dba0b702a9d4c22c = exports.__wbg_cargowebsnippet85b9ecbdb8513465b790546acfd0cd530441b8a4_c156ae51cab56530 = exports.__wbg_cargowebsnippet7bead6b563d52eee65504adb6b76c5cacb5428d3_b6c783db91943ee9 = exports.__wbg_cargowebsnippetdb12d53e9596e9bc7860a8231ec85044629926e7_78e4e5f2c2ce9f1f = exports.__wbg_cargowebsnippetd2799c0b8fe00873f8c1d4832af466b8200b9d14_674c0676d538f2f2 = exports.__wbg_cargowebsnippet036f2b1f5bc66f472c8dd080fe3397c9b6179d37_e39b93558c995b15 = exports.__wbg_wasmbindgeninitialize_c1c4df6b494511ad = exports.__wbg_cargowebsnippet5f8f03c2f100be177db5a7d58ca6b8cbbeaa0c93_afb20faf3d98c143 = exports.__wbg_cargowebsnippetbb618d13cbb219642bd219af99ee1519e5658d77_fed03c734b9852e1 = exports.__wbg_cargowebsnippet3c5e83d16a83fc7147ec91e2506438012952f55a_23154670c635c22b = exports.__wbg_cargowebsnippet84339b1bf72a580059a6e0ff9499e53759aef5b9_4e8ea0b89beeafa8 = exports.__wbg_cargowebsnippetc26ddf75f581148e029dfcd95c037bb50d502e43_f494f4a63cf92998 = exports.__wbg_cargowebsnippeta466a2ab96cd77e1a77dcdb39f4f031701c195fc_6e24bc386a6d613f = exports.__wbg_cargowebsnippet5f44a6301f6a09d0f350d1015fd129f97bb1e755_7f255ef206b2d180 = exports.__wbg_cargowebsnippet22a7767e09f1cca8e9a9c425b93781008b1ecac3_9d303edc434339dd = exports.__wbg_cargowebsnippet8a049af1e4867892fca647811a9472e4c5832053_5712d9bfa201d671 = exports.__wbg_cargowebsnippetec62bad51093fd25faa38be3170e100862e191f3_eb855e81b6f64133 = exports.__wbg_cargowebsnippet5ceb98b2e46d98ffb6869e5cadbd87470e745875_de59e18ab9006ad2 = exports.__wbg_cargowebsnippet6b6b85c7554455174b3dbb97f3e3e6d010733f81_22d161c96f2d5804 = exports.__wbg_cargowebsnippeta152e8d0e8fac5476f30c1d19e4ab217dbcba73d_d3aa4336afb90213 = exports.__wbg_cargowebsnippet6fcce0aae651e2d748e085ff1f800f87625ff8c8_21ca3c3552146790 = exports.__wbg_cargowebsnippet91749aeb589cd0f9b17cbc01b2872ba709817982_594ed33c557be4ae = exports.__wbg_cargowebsnippet0c326292efc233420ade892f70743acb4a852fd7_828e3eda227fc4f5 = exports.__wbg_cargowebsnippetafafe9a462a05084fec65cacc7d6598e145ff3e3_d374efb355d898fd = exports.__wbg_cargowebsnippet0d39c013e2144171d64e2fac849140a7e54c939a_c38f968232d405ba = exports.__wbg_cargowebsnippetff5103e6cc179d13b4c7a785bdce2708fd559fc0_c2c7bf9cb65f32b6 = exports.__wbg_cargowebsnippet9f22d4ca7bc938409787341b7db181f8dd41e6df_f184afed978d4a95 = exports.__wbg_cargowebsnippet80d6d56760c65e49b7be8b6b01c1ea861b046bf0_5a8953894b8affd6 = exports.__wbg_cargowebsnippetf750c7bda400081b4d7209f43f9d59214d39f6ea_c158729eaadb8dbe = exports.__wbg_cargowebsnippet99c4eefdc8d4cc724135163b8c8665a1f3de99e4_14389f68322b60f1 = exports.__wbg_cargowebsnippetc023351d5bff43ef3dd317b499821cd4e71492f0_a6f092f3cdeb4fef = exports.__wbg_cargowebsnippetde2896a7ccf316486788a4d0bc433c25d2f1a12b_cfdc90cf53c4d5da = exports.__wbg_cargowebsnippet897ff2d0160606ea98961935acb125d1ddbf4688_f4f8b1e103e71863 = exports.__wbg_cargowebsnippet7c8dfab835dc8a552cd9d67f27d26624590e052c_0fd666abcb082554 = exports.__wbg_cargowebsnippet0e54fd9c163fcf648ce0a395fde4500fd167a40b_79ac4825f71161f4 = exports.__wbg_cargowebsnippete854289309e564012996fbb70e7c19bf4e6a8866_cf4f9c19f2bbb277 = exports.__wbindgen_cb_forget = exports.__wbg_cargowebsnippet1c30acb32a1994a07c75e804ae9855b43f191d63_6d353463ef525961 = exports.__wbg_cargowebsnippetdc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf_ce5c721cab10d020 = exports.__wbg_cargowebsnippet97495987af1720d8a9a923fa4683a7b683e3acd6_a438202dc16f44c0 = exports.__wbg_cargowebsnippet72fc447820458c720c68d0d8e078ede631edd723_ece3da0a4474dbeb = exports.__wbg_cargowebsnippet0aced9e2351ced72f1ff99645a129132b16c0d3c_13e902b8d846fb01 = exports.__wbg_cargowebsnippete9638d6405ab65f78daf4a5af9c9de14ecf1e2ec_ad1e81894f802539 = exports.__wbg_cargowebsnippete741b9d9071097746386b2c2ec044a2bc73e688c_1d0e2ab1e286c949 = exports.__wbg_cargowebsnippetcd41a77d0178ae27c833ef2950e5f1a48a1455c1_f91f2bcf70515796 = exports.__wbg_cargowebsnippet46518012593da937dd5f35c2fc1c5e1dcade260b_ea53969a3495cf2c = exports.__wbg_cargowebsnippetf03767d5868baf486b51c1e3988d0ce100e850ca_bc1dd209260bf552 = exports.__wbg_cargowebsnippet690311d2f9134ac0983620c38a9e6460d4165607_a4cb2a84cd08d937 = exports.__wbg_cargowebsnippet08a3b15e1358700ac92bc556f9e9b8af660fc2c7_9e8cd6528929926d = exports.__wbg_cargowebsnippet465ffdf4814bf5d08a3abdf8fe5e61a220b98c34_54cd4762544a0ed8 = exports.__wbg_cargowebsnippetb06dde4acf09433b5190a4b001259fe5d4abcbc2_d346638ea92aac60 = exports.__wbg_cargowebsnippetab05f53189dacccf2d365ad26daa407d4f7abea9_641d6b20c73343b4 = exports.__wbg_cargowebsnippet614a3dd2adb7e9eac4a0ec6e59d37f87e0521c3b_61a037ef81d9af77 = exports.__wbindgen_object_clone_ref = exports.__wbindgen_is_undefined = exports.__wbg_global_9baf085cb9fdc53f = exports.__wbg_window_b26db3ba8287bb02 = exports.__wbg_self_674710f3296ee2fa = exports.__wbg_globalThis_61af7faf43c24a8c = exports.__wbg_call_913a01a8cfcedafe = exports.__wbg_newnoargs_bcfed51ec795a16a = exports.__wbg_cargowebsnippet0da47658267a7497de743e1b0892f992ba6ca6ef_92a6bf0c49eb821e = exports.__wbg_cargowebsnippetda2febd72f9938d90bc2bf2905643f595b07abd9_362a6e8f7d3c5086 = exports.__wbg_cargowebsnippetf6358c198ebcc61c9da370cca2679c0b8bc81a7b_b90bdcc255d53798 = exports.__wbg_cargowebsnippeta1f43b583e011a9bbeae64030b81f677e6c29005_91dc4c9d62139c95 = exports.__widl_f_document_Window = exports.__widl_instanceof_Window = exports.__widl_f_get_element_by_id_Document = exports.__wbg_new_af8ec88c68c25f56 = exports.__wbg_destroy_f313c5f643b8556f = exports.__wbg_cargowebsnippet199d5eb25dfe761687bcd487578eb7e636bd9650_cab2de567628901e = exports.__wbg_cargowebsnippet6bcfdb0f4808b0b1e8b8b8d2facd39b73ac5018b_2b46a18b54b44834 = exports.__wbg_cargowebsnippetc5c1b47195f246fcd2672c546e8c4d526e328687_8e9bf2760a8d405c = exports.__wbg_cargowebsnippet114b518968fda2247f8d0d6ad5a226d35aa55986_90291b06311b4650 = exports.__wbg_cargowebsnippet4fd31c9e56d40b8642cf9e6f96fd6b570f355cea_8a401aade62618ba = exports.__wbindgen_object_drop_ref = exports.run = exports.default = void 0;

var _demo_bg = _interopRequireDefault(require("./pkg/demo_bg.wasm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _demo_bg.default;
exports.default = _default;
var run = _demo_bg.default.run;
exports.run = run;
var __wbindgen_object_drop_ref = _demo_bg.default.__wbindgen_object_drop_ref;
exports.__wbindgen_object_drop_ref = __wbindgen_object_drop_ref;
var __wbg_cargowebsnippet4fd31c9e56d40b8642cf9e6f96fd6b570f355cea_8a401aade62618ba = _demo_bg.default.__wbg_cargowebsnippet4fd31c9e56d40b8642cf9e6f96fd6b570f355cea_8a401aade62618ba;
exports.__wbg_cargowebsnippet4fd31c9e56d40b8642cf9e6f96fd6b570f355cea_8a401aade62618ba = __wbg_cargowebsnippet4fd31c9e56d40b8642cf9e6f96fd6b570f355cea_8a401aade62618ba;
var __wbg_cargowebsnippet114b518968fda2247f8d0d6ad5a226d35aa55986_90291b06311b4650 = _demo_bg.default.__wbg_cargowebsnippet114b518968fda2247f8d0d6ad5a226d35aa55986_90291b06311b4650;
exports.__wbg_cargowebsnippet114b518968fda2247f8d0d6ad5a226d35aa55986_90291b06311b4650 = __wbg_cargowebsnippet114b518968fda2247f8d0d6ad5a226d35aa55986_90291b06311b4650;
var __wbg_cargowebsnippetc5c1b47195f246fcd2672c546e8c4d526e328687_8e9bf2760a8d405c = _demo_bg.default.__wbg_cargowebsnippetc5c1b47195f246fcd2672c546e8c4d526e328687_8e9bf2760a8d405c;
exports.__wbg_cargowebsnippetc5c1b47195f246fcd2672c546e8c4d526e328687_8e9bf2760a8d405c = __wbg_cargowebsnippetc5c1b47195f246fcd2672c546e8c4d526e328687_8e9bf2760a8d405c;
var __wbg_cargowebsnippet6bcfdb0f4808b0b1e8b8b8d2facd39b73ac5018b_2b46a18b54b44834 = _demo_bg.default.__wbg_cargowebsnippet6bcfdb0f4808b0b1e8b8b8d2facd39b73ac5018b_2b46a18b54b44834;
exports.__wbg_cargowebsnippet6bcfdb0f4808b0b1e8b8b8d2facd39b73ac5018b_2b46a18b54b44834 = __wbg_cargowebsnippet6bcfdb0f4808b0b1e8b8b8d2facd39b73ac5018b_2b46a18b54b44834;
var __wbg_cargowebsnippet199d5eb25dfe761687bcd487578eb7e636bd9650_cab2de567628901e = _demo_bg.default.__wbg_cargowebsnippet199d5eb25dfe761687bcd487578eb7e636bd9650_cab2de567628901e;
exports.__wbg_cargowebsnippet199d5eb25dfe761687bcd487578eb7e636bd9650_cab2de567628901e = __wbg_cargowebsnippet199d5eb25dfe761687bcd487578eb7e636bd9650_cab2de567628901e;
var __wbg_destroy_f313c5f643b8556f = _demo_bg.default.__wbg_destroy_f313c5f643b8556f;
exports.__wbg_destroy_f313c5f643b8556f = __wbg_destroy_f313c5f643b8556f;
var __wbg_new_af8ec88c68c25f56 = _demo_bg.default.__wbg_new_af8ec88c68c25f56;
exports.__wbg_new_af8ec88c68c25f56 = __wbg_new_af8ec88c68c25f56;
var __widl_f_get_element_by_id_Document = _demo_bg.default.__widl_f_get_element_by_id_Document;
exports.__widl_f_get_element_by_id_Document = __widl_f_get_element_by_id_Document;
var __widl_instanceof_Window = _demo_bg.default.__widl_instanceof_Window;
exports.__widl_instanceof_Window = __widl_instanceof_Window;
var __widl_f_document_Window = _demo_bg.default.__widl_f_document_Window;
exports.__widl_f_document_Window = __widl_f_document_Window;
var __wbg_cargowebsnippeta1f43b583e011a9bbeae64030b81f677e6c29005_91dc4c9d62139c95 = _demo_bg.default.__wbg_cargowebsnippeta1f43b583e011a9bbeae64030b81f677e6c29005_91dc4c9d62139c95;
exports.__wbg_cargowebsnippeta1f43b583e011a9bbeae64030b81f677e6c29005_91dc4c9d62139c95 = __wbg_cargowebsnippeta1f43b583e011a9bbeae64030b81f677e6c29005_91dc4c9d62139c95;
var __wbg_cargowebsnippetf6358c198ebcc61c9da370cca2679c0b8bc81a7b_b90bdcc255d53798 = _demo_bg.default.__wbg_cargowebsnippetf6358c198ebcc61c9da370cca2679c0b8bc81a7b_b90bdcc255d53798;
exports.__wbg_cargowebsnippetf6358c198ebcc61c9da370cca2679c0b8bc81a7b_b90bdcc255d53798 = __wbg_cargowebsnippetf6358c198ebcc61c9da370cca2679c0b8bc81a7b_b90bdcc255d53798;
var __wbg_cargowebsnippetda2febd72f9938d90bc2bf2905643f595b07abd9_362a6e8f7d3c5086 = _demo_bg.default.__wbg_cargowebsnippetda2febd72f9938d90bc2bf2905643f595b07abd9_362a6e8f7d3c5086;
exports.__wbg_cargowebsnippetda2febd72f9938d90bc2bf2905643f595b07abd9_362a6e8f7d3c5086 = __wbg_cargowebsnippetda2febd72f9938d90bc2bf2905643f595b07abd9_362a6e8f7d3c5086;
var __wbg_cargowebsnippet0da47658267a7497de743e1b0892f992ba6ca6ef_92a6bf0c49eb821e = _demo_bg.default.__wbg_cargowebsnippet0da47658267a7497de743e1b0892f992ba6ca6ef_92a6bf0c49eb821e;
exports.__wbg_cargowebsnippet0da47658267a7497de743e1b0892f992ba6ca6ef_92a6bf0c49eb821e = __wbg_cargowebsnippet0da47658267a7497de743e1b0892f992ba6ca6ef_92a6bf0c49eb821e;
var __wbg_newnoargs_bcfed51ec795a16a = _demo_bg.default.__wbg_newnoargs_bcfed51ec795a16a;
exports.__wbg_newnoargs_bcfed51ec795a16a = __wbg_newnoargs_bcfed51ec795a16a;
var __wbg_call_913a01a8cfcedafe = _demo_bg.default.__wbg_call_913a01a8cfcedafe;
exports.__wbg_call_913a01a8cfcedafe = __wbg_call_913a01a8cfcedafe;
var __wbg_globalThis_61af7faf43c24a8c = _demo_bg.default.__wbg_globalThis_61af7faf43c24a8c;
exports.__wbg_globalThis_61af7faf43c24a8c = __wbg_globalThis_61af7faf43c24a8c;
var __wbg_self_674710f3296ee2fa = _demo_bg.default.__wbg_self_674710f3296ee2fa;
exports.__wbg_self_674710f3296ee2fa = __wbg_self_674710f3296ee2fa;
var __wbg_window_b26db3ba8287bb02 = _demo_bg.default.__wbg_window_b26db3ba8287bb02;
exports.__wbg_window_b26db3ba8287bb02 = __wbg_window_b26db3ba8287bb02;
var __wbg_global_9baf085cb9fdc53f = _demo_bg.default.__wbg_global_9baf085cb9fdc53f;
exports.__wbg_global_9baf085cb9fdc53f = __wbg_global_9baf085cb9fdc53f;
var __wbindgen_is_undefined = _demo_bg.default.__wbindgen_is_undefined;
exports.__wbindgen_is_undefined = __wbindgen_is_undefined;
var __wbindgen_object_clone_ref = _demo_bg.default.__wbindgen_object_clone_ref;
exports.__wbindgen_object_clone_ref = __wbindgen_object_clone_ref;
var __wbg_cargowebsnippet614a3dd2adb7e9eac4a0ec6e59d37f87e0521c3b_61a037ef81d9af77 = _demo_bg.default.__wbg_cargowebsnippet614a3dd2adb7e9eac4a0ec6e59d37f87e0521c3b_61a037ef81d9af77;
exports.__wbg_cargowebsnippet614a3dd2adb7e9eac4a0ec6e59d37f87e0521c3b_61a037ef81d9af77 = __wbg_cargowebsnippet614a3dd2adb7e9eac4a0ec6e59d37f87e0521c3b_61a037ef81d9af77;
var __wbg_cargowebsnippetab05f53189dacccf2d365ad26daa407d4f7abea9_641d6b20c73343b4 = _demo_bg.default.__wbg_cargowebsnippetab05f53189dacccf2d365ad26daa407d4f7abea9_641d6b20c73343b4;
exports.__wbg_cargowebsnippetab05f53189dacccf2d365ad26daa407d4f7abea9_641d6b20c73343b4 = __wbg_cargowebsnippetab05f53189dacccf2d365ad26daa407d4f7abea9_641d6b20c73343b4;
var __wbg_cargowebsnippetb06dde4acf09433b5190a4b001259fe5d4abcbc2_d346638ea92aac60 = _demo_bg.default.__wbg_cargowebsnippetb06dde4acf09433b5190a4b001259fe5d4abcbc2_d346638ea92aac60;
exports.__wbg_cargowebsnippetb06dde4acf09433b5190a4b001259fe5d4abcbc2_d346638ea92aac60 = __wbg_cargowebsnippetb06dde4acf09433b5190a4b001259fe5d4abcbc2_d346638ea92aac60;
var __wbg_cargowebsnippet465ffdf4814bf5d08a3abdf8fe5e61a220b98c34_54cd4762544a0ed8 = _demo_bg.default.__wbg_cargowebsnippet465ffdf4814bf5d08a3abdf8fe5e61a220b98c34_54cd4762544a0ed8;
exports.__wbg_cargowebsnippet465ffdf4814bf5d08a3abdf8fe5e61a220b98c34_54cd4762544a0ed8 = __wbg_cargowebsnippet465ffdf4814bf5d08a3abdf8fe5e61a220b98c34_54cd4762544a0ed8;
var __wbg_cargowebsnippet08a3b15e1358700ac92bc556f9e9b8af660fc2c7_9e8cd6528929926d = _demo_bg.default.__wbg_cargowebsnippet08a3b15e1358700ac92bc556f9e9b8af660fc2c7_9e8cd6528929926d;
exports.__wbg_cargowebsnippet08a3b15e1358700ac92bc556f9e9b8af660fc2c7_9e8cd6528929926d = __wbg_cargowebsnippet08a3b15e1358700ac92bc556f9e9b8af660fc2c7_9e8cd6528929926d;
var __wbg_cargowebsnippet690311d2f9134ac0983620c38a9e6460d4165607_a4cb2a84cd08d937 = _demo_bg.default.__wbg_cargowebsnippet690311d2f9134ac0983620c38a9e6460d4165607_a4cb2a84cd08d937;
exports.__wbg_cargowebsnippet690311d2f9134ac0983620c38a9e6460d4165607_a4cb2a84cd08d937 = __wbg_cargowebsnippet690311d2f9134ac0983620c38a9e6460d4165607_a4cb2a84cd08d937;
var __wbg_cargowebsnippetf03767d5868baf486b51c1e3988d0ce100e850ca_bc1dd209260bf552 = _demo_bg.default.__wbg_cargowebsnippetf03767d5868baf486b51c1e3988d0ce100e850ca_bc1dd209260bf552;
exports.__wbg_cargowebsnippetf03767d5868baf486b51c1e3988d0ce100e850ca_bc1dd209260bf552 = __wbg_cargowebsnippetf03767d5868baf486b51c1e3988d0ce100e850ca_bc1dd209260bf552;
var __wbg_cargowebsnippet46518012593da937dd5f35c2fc1c5e1dcade260b_ea53969a3495cf2c = _demo_bg.default.__wbg_cargowebsnippet46518012593da937dd5f35c2fc1c5e1dcade260b_ea53969a3495cf2c;
exports.__wbg_cargowebsnippet46518012593da937dd5f35c2fc1c5e1dcade260b_ea53969a3495cf2c = __wbg_cargowebsnippet46518012593da937dd5f35c2fc1c5e1dcade260b_ea53969a3495cf2c;
var __wbg_cargowebsnippetcd41a77d0178ae27c833ef2950e5f1a48a1455c1_f91f2bcf70515796 = _demo_bg.default.__wbg_cargowebsnippetcd41a77d0178ae27c833ef2950e5f1a48a1455c1_f91f2bcf70515796;
exports.__wbg_cargowebsnippetcd41a77d0178ae27c833ef2950e5f1a48a1455c1_f91f2bcf70515796 = __wbg_cargowebsnippetcd41a77d0178ae27c833ef2950e5f1a48a1455c1_f91f2bcf70515796;
var __wbg_cargowebsnippete741b9d9071097746386b2c2ec044a2bc73e688c_1d0e2ab1e286c949 = _demo_bg.default.__wbg_cargowebsnippete741b9d9071097746386b2c2ec044a2bc73e688c_1d0e2ab1e286c949;
exports.__wbg_cargowebsnippete741b9d9071097746386b2c2ec044a2bc73e688c_1d0e2ab1e286c949 = __wbg_cargowebsnippete741b9d9071097746386b2c2ec044a2bc73e688c_1d0e2ab1e286c949;
var __wbg_cargowebsnippete9638d6405ab65f78daf4a5af9c9de14ecf1e2ec_ad1e81894f802539 = _demo_bg.default.__wbg_cargowebsnippete9638d6405ab65f78daf4a5af9c9de14ecf1e2ec_ad1e81894f802539;
exports.__wbg_cargowebsnippete9638d6405ab65f78daf4a5af9c9de14ecf1e2ec_ad1e81894f802539 = __wbg_cargowebsnippete9638d6405ab65f78daf4a5af9c9de14ecf1e2ec_ad1e81894f802539;
var __wbg_cargowebsnippet0aced9e2351ced72f1ff99645a129132b16c0d3c_13e902b8d846fb01 = _demo_bg.default.__wbg_cargowebsnippet0aced9e2351ced72f1ff99645a129132b16c0d3c_13e902b8d846fb01;
exports.__wbg_cargowebsnippet0aced9e2351ced72f1ff99645a129132b16c0d3c_13e902b8d846fb01 = __wbg_cargowebsnippet0aced9e2351ced72f1ff99645a129132b16c0d3c_13e902b8d846fb01;
var __wbg_cargowebsnippet72fc447820458c720c68d0d8e078ede631edd723_ece3da0a4474dbeb = _demo_bg.default.__wbg_cargowebsnippet72fc447820458c720c68d0d8e078ede631edd723_ece3da0a4474dbeb;
exports.__wbg_cargowebsnippet72fc447820458c720c68d0d8e078ede631edd723_ece3da0a4474dbeb = __wbg_cargowebsnippet72fc447820458c720c68d0d8e078ede631edd723_ece3da0a4474dbeb;
var __wbg_cargowebsnippet97495987af1720d8a9a923fa4683a7b683e3acd6_a438202dc16f44c0 = _demo_bg.default.__wbg_cargowebsnippet97495987af1720d8a9a923fa4683a7b683e3acd6_a438202dc16f44c0;
exports.__wbg_cargowebsnippet97495987af1720d8a9a923fa4683a7b683e3acd6_a438202dc16f44c0 = __wbg_cargowebsnippet97495987af1720d8a9a923fa4683a7b683e3acd6_a438202dc16f44c0;
var __wbg_cargowebsnippetdc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf_ce5c721cab10d020 = _demo_bg.default.__wbg_cargowebsnippetdc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf_ce5c721cab10d020;
exports.__wbg_cargowebsnippetdc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf_ce5c721cab10d020 = __wbg_cargowebsnippetdc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf_ce5c721cab10d020;
var __wbg_cargowebsnippet1c30acb32a1994a07c75e804ae9855b43f191d63_6d353463ef525961 = _demo_bg.default.__wbg_cargowebsnippet1c30acb32a1994a07c75e804ae9855b43f191d63_6d353463ef525961;
exports.__wbg_cargowebsnippet1c30acb32a1994a07c75e804ae9855b43f191d63_6d353463ef525961 = __wbg_cargowebsnippet1c30acb32a1994a07c75e804ae9855b43f191d63_6d353463ef525961;
var __wbindgen_cb_forget = _demo_bg.default.__wbindgen_cb_forget;
exports.__wbindgen_cb_forget = __wbindgen_cb_forget;
var __wbg_cargowebsnippete854289309e564012996fbb70e7c19bf4e6a8866_cf4f9c19f2bbb277 = _demo_bg.default.__wbg_cargowebsnippete854289309e564012996fbb70e7c19bf4e6a8866_cf4f9c19f2bbb277;
exports.__wbg_cargowebsnippete854289309e564012996fbb70e7c19bf4e6a8866_cf4f9c19f2bbb277 = __wbg_cargowebsnippete854289309e564012996fbb70e7c19bf4e6a8866_cf4f9c19f2bbb277;
var __wbg_cargowebsnippet0e54fd9c163fcf648ce0a395fde4500fd167a40b_79ac4825f71161f4 = _demo_bg.default.__wbg_cargowebsnippet0e54fd9c163fcf648ce0a395fde4500fd167a40b_79ac4825f71161f4;
exports.__wbg_cargowebsnippet0e54fd9c163fcf648ce0a395fde4500fd167a40b_79ac4825f71161f4 = __wbg_cargowebsnippet0e54fd9c163fcf648ce0a395fde4500fd167a40b_79ac4825f71161f4;
var __wbg_cargowebsnippet7c8dfab835dc8a552cd9d67f27d26624590e052c_0fd666abcb082554 = _demo_bg.default.__wbg_cargowebsnippet7c8dfab835dc8a552cd9d67f27d26624590e052c_0fd666abcb082554;
exports.__wbg_cargowebsnippet7c8dfab835dc8a552cd9d67f27d26624590e052c_0fd666abcb082554 = __wbg_cargowebsnippet7c8dfab835dc8a552cd9d67f27d26624590e052c_0fd666abcb082554;
var __wbg_cargowebsnippet897ff2d0160606ea98961935acb125d1ddbf4688_f4f8b1e103e71863 = _demo_bg.default.__wbg_cargowebsnippet897ff2d0160606ea98961935acb125d1ddbf4688_f4f8b1e103e71863;
exports.__wbg_cargowebsnippet897ff2d0160606ea98961935acb125d1ddbf4688_f4f8b1e103e71863 = __wbg_cargowebsnippet897ff2d0160606ea98961935acb125d1ddbf4688_f4f8b1e103e71863;
var __wbg_cargowebsnippetde2896a7ccf316486788a4d0bc433c25d2f1a12b_cfdc90cf53c4d5da = _demo_bg.default.__wbg_cargowebsnippetde2896a7ccf316486788a4d0bc433c25d2f1a12b_cfdc90cf53c4d5da;
exports.__wbg_cargowebsnippetde2896a7ccf316486788a4d0bc433c25d2f1a12b_cfdc90cf53c4d5da = __wbg_cargowebsnippetde2896a7ccf316486788a4d0bc433c25d2f1a12b_cfdc90cf53c4d5da;
var __wbg_cargowebsnippetc023351d5bff43ef3dd317b499821cd4e71492f0_a6f092f3cdeb4fef = _demo_bg.default.__wbg_cargowebsnippetc023351d5bff43ef3dd317b499821cd4e71492f0_a6f092f3cdeb4fef;
exports.__wbg_cargowebsnippetc023351d5bff43ef3dd317b499821cd4e71492f0_a6f092f3cdeb4fef = __wbg_cargowebsnippetc023351d5bff43ef3dd317b499821cd4e71492f0_a6f092f3cdeb4fef;
var __wbg_cargowebsnippet99c4eefdc8d4cc724135163b8c8665a1f3de99e4_14389f68322b60f1 = _demo_bg.default.__wbg_cargowebsnippet99c4eefdc8d4cc724135163b8c8665a1f3de99e4_14389f68322b60f1;
exports.__wbg_cargowebsnippet99c4eefdc8d4cc724135163b8c8665a1f3de99e4_14389f68322b60f1 = __wbg_cargowebsnippet99c4eefdc8d4cc724135163b8c8665a1f3de99e4_14389f68322b60f1;
var __wbg_cargowebsnippetf750c7bda400081b4d7209f43f9d59214d39f6ea_c158729eaadb8dbe = _demo_bg.default.__wbg_cargowebsnippetf750c7bda400081b4d7209f43f9d59214d39f6ea_c158729eaadb8dbe;
exports.__wbg_cargowebsnippetf750c7bda400081b4d7209f43f9d59214d39f6ea_c158729eaadb8dbe = __wbg_cargowebsnippetf750c7bda400081b4d7209f43f9d59214d39f6ea_c158729eaadb8dbe;
var __wbg_cargowebsnippet80d6d56760c65e49b7be8b6b01c1ea861b046bf0_5a8953894b8affd6 = _demo_bg.default.__wbg_cargowebsnippet80d6d56760c65e49b7be8b6b01c1ea861b046bf0_5a8953894b8affd6;
exports.__wbg_cargowebsnippet80d6d56760c65e49b7be8b6b01c1ea861b046bf0_5a8953894b8affd6 = __wbg_cargowebsnippet80d6d56760c65e49b7be8b6b01c1ea861b046bf0_5a8953894b8affd6;
var __wbg_cargowebsnippet9f22d4ca7bc938409787341b7db181f8dd41e6df_f184afed978d4a95 = _demo_bg.default.__wbg_cargowebsnippet9f22d4ca7bc938409787341b7db181f8dd41e6df_f184afed978d4a95;
exports.__wbg_cargowebsnippet9f22d4ca7bc938409787341b7db181f8dd41e6df_f184afed978d4a95 = __wbg_cargowebsnippet9f22d4ca7bc938409787341b7db181f8dd41e6df_f184afed978d4a95;
var __wbg_cargowebsnippetff5103e6cc179d13b4c7a785bdce2708fd559fc0_c2c7bf9cb65f32b6 = _demo_bg.default.__wbg_cargowebsnippetff5103e6cc179d13b4c7a785bdce2708fd559fc0_c2c7bf9cb65f32b6;
exports.__wbg_cargowebsnippetff5103e6cc179d13b4c7a785bdce2708fd559fc0_c2c7bf9cb65f32b6 = __wbg_cargowebsnippetff5103e6cc179d13b4c7a785bdce2708fd559fc0_c2c7bf9cb65f32b6;
var __wbg_cargowebsnippet0d39c013e2144171d64e2fac849140a7e54c939a_c38f968232d405ba = _demo_bg.default.__wbg_cargowebsnippet0d39c013e2144171d64e2fac849140a7e54c939a_c38f968232d405ba;
exports.__wbg_cargowebsnippet0d39c013e2144171d64e2fac849140a7e54c939a_c38f968232d405ba = __wbg_cargowebsnippet0d39c013e2144171d64e2fac849140a7e54c939a_c38f968232d405ba;
var __wbg_cargowebsnippetafafe9a462a05084fec65cacc7d6598e145ff3e3_d374efb355d898fd = _demo_bg.default.__wbg_cargowebsnippetafafe9a462a05084fec65cacc7d6598e145ff3e3_d374efb355d898fd;
exports.__wbg_cargowebsnippetafafe9a462a05084fec65cacc7d6598e145ff3e3_d374efb355d898fd = __wbg_cargowebsnippetafafe9a462a05084fec65cacc7d6598e145ff3e3_d374efb355d898fd;
var __wbg_cargowebsnippet0c326292efc233420ade892f70743acb4a852fd7_828e3eda227fc4f5 = _demo_bg.default.__wbg_cargowebsnippet0c326292efc233420ade892f70743acb4a852fd7_828e3eda227fc4f5;
exports.__wbg_cargowebsnippet0c326292efc233420ade892f70743acb4a852fd7_828e3eda227fc4f5 = __wbg_cargowebsnippet0c326292efc233420ade892f70743acb4a852fd7_828e3eda227fc4f5;
var __wbg_cargowebsnippet91749aeb589cd0f9b17cbc01b2872ba709817982_594ed33c557be4ae = _demo_bg.default.__wbg_cargowebsnippet91749aeb589cd0f9b17cbc01b2872ba709817982_594ed33c557be4ae;
exports.__wbg_cargowebsnippet91749aeb589cd0f9b17cbc01b2872ba709817982_594ed33c557be4ae = __wbg_cargowebsnippet91749aeb589cd0f9b17cbc01b2872ba709817982_594ed33c557be4ae;
var __wbg_cargowebsnippet6fcce0aae651e2d748e085ff1f800f87625ff8c8_21ca3c3552146790 = _demo_bg.default.__wbg_cargowebsnippet6fcce0aae651e2d748e085ff1f800f87625ff8c8_21ca3c3552146790;
exports.__wbg_cargowebsnippet6fcce0aae651e2d748e085ff1f800f87625ff8c8_21ca3c3552146790 = __wbg_cargowebsnippet6fcce0aae651e2d748e085ff1f800f87625ff8c8_21ca3c3552146790;
var __wbg_cargowebsnippeta152e8d0e8fac5476f30c1d19e4ab217dbcba73d_d3aa4336afb90213 = _demo_bg.default.__wbg_cargowebsnippeta152e8d0e8fac5476f30c1d19e4ab217dbcba73d_d3aa4336afb90213;
exports.__wbg_cargowebsnippeta152e8d0e8fac5476f30c1d19e4ab217dbcba73d_d3aa4336afb90213 = __wbg_cargowebsnippeta152e8d0e8fac5476f30c1d19e4ab217dbcba73d_d3aa4336afb90213;
var __wbg_cargowebsnippet6b6b85c7554455174b3dbb97f3e3e6d010733f81_22d161c96f2d5804 = _demo_bg.default.__wbg_cargowebsnippet6b6b85c7554455174b3dbb97f3e3e6d010733f81_22d161c96f2d5804;
exports.__wbg_cargowebsnippet6b6b85c7554455174b3dbb97f3e3e6d010733f81_22d161c96f2d5804 = __wbg_cargowebsnippet6b6b85c7554455174b3dbb97f3e3e6d010733f81_22d161c96f2d5804;
var __wbg_cargowebsnippet5ceb98b2e46d98ffb6869e5cadbd87470e745875_de59e18ab9006ad2 = _demo_bg.default.__wbg_cargowebsnippet5ceb98b2e46d98ffb6869e5cadbd87470e745875_de59e18ab9006ad2;
exports.__wbg_cargowebsnippet5ceb98b2e46d98ffb6869e5cadbd87470e745875_de59e18ab9006ad2 = __wbg_cargowebsnippet5ceb98b2e46d98ffb6869e5cadbd87470e745875_de59e18ab9006ad2;
var __wbg_cargowebsnippetec62bad51093fd25faa38be3170e100862e191f3_eb855e81b6f64133 = _demo_bg.default.__wbg_cargowebsnippetec62bad51093fd25faa38be3170e100862e191f3_eb855e81b6f64133;
exports.__wbg_cargowebsnippetec62bad51093fd25faa38be3170e100862e191f3_eb855e81b6f64133 = __wbg_cargowebsnippetec62bad51093fd25faa38be3170e100862e191f3_eb855e81b6f64133;
var __wbg_cargowebsnippet8a049af1e4867892fca647811a9472e4c5832053_5712d9bfa201d671 = _demo_bg.default.__wbg_cargowebsnippet8a049af1e4867892fca647811a9472e4c5832053_5712d9bfa201d671;
exports.__wbg_cargowebsnippet8a049af1e4867892fca647811a9472e4c5832053_5712d9bfa201d671 = __wbg_cargowebsnippet8a049af1e4867892fca647811a9472e4c5832053_5712d9bfa201d671;
var __wbg_cargowebsnippet22a7767e09f1cca8e9a9c425b93781008b1ecac3_9d303edc434339dd = _demo_bg.default.__wbg_cargowebsnippet22a7767e09f1cca8e9a9c425b93781008b1ecac3_9d303edc434339dd;
exports.__wbg_cargowebsnippet22a7767e09f1cca8e9a9c425b93781008b1ecac3_9d303edc434339dd = __wbg_cargowebsnippet22a7767e09f1cca8e9a9c425b93781008b1ecac3_9d303edc434339dd;
var __wbg_cargowebsnippet5f44a6301f6a09d0f350d1015fd129f97bb1e755_7f255ef206b2d180 = _demo_bg.default.__wbg_cargowebsnippet5f44a6301f6a09d0f350d1015fd129f97bb1e755_7f255ef206b2d180;
exports.__wbg_cargowebsnippet5f44a6301f6a09d0f350d1015fd129f97bb1e755_7f255ef206b2d180 = __wbg_cargowebsnippet5f44a6301f6a09d0f350d1015fd129f97bb1e755_7f255ef206b2d180;
var __wbg_cargowebsnippeta466a2ab96cd77e1a77dcdb39f4f031701c195fc_6e24bc386a6d613f = _demo_bg.default.__wbg_cargowebsnippeta466a2ab96cd77e1a77dcdb39f4f031701c195fc_6e24bc386a6d613f;
exports.__wbg_cargowebsnippeta466a2ab96cd77e1a77dcdb39f4f031701c195fc_6e24bc386a6d613f = __wbg_cargowebsnippeta466a2ab96cd77e1a77dcdb39f4f031701c195fc_6e24bc386a6d613f;
var __wbg_cargowebsnippetc26ddf75f581148e029dfcd95c037bb50d502e43_f494f4a63cf92998 = _demo_bg.default.__wbg_cargowebsnippetc26ddf75f581148e029dfcd95c037bb50d502e43_f494f4a63cf92998;
exports.__wbg_cargowebsnippetc26ddf75f581148e029dfcd95c037bb50d502e43_f494f4a63cf92998 = __wbg_cargowebsnippetc26ddf75f581148e029dfcd95c037bb50d502e43_f494f4a63cf92998;
var __wbg_cargowebsnippet84339b1bf72a580059a6e0ff9499e53759aef5b9_4e8ea0b89beeafa8 = _demo_bg.default.__wbg_cargowebsnippet84339b1bf72a580059a6e0ff9499e53759aef5b9_4e8ea0b89beeafa8;
exports.__wbg_cargowebsnippet84339b1bf72a580059a6e0ff9499e53759aef5b9_4e8ea0b89beeafa8 = __wbg_cargowebsnippet84339b1bf72a580059a6e0ff9499e53759aef5b9_4e8ea0b89beeafa8;
var __wbg_cargowebsnippet3c5e83d16a83fc7147ec91e2506438012952f55a_23154670c635c22b = _demo_bg.default.__wbg_cargowebsnippet3c5e83d16a83fc7147ec91e2506438012952f55a_23154670c635c22b;
exports.__wbg_cargowebsnippet3c5e83d16a83fc7147ec91e2506438012952f55a_23154670c635c22b = __wbg_cargowebsnippet3c5e83d16a83fc7147ec91e2506438012952f55a_23154670c635c22b;
var __wbg_cargowebsnippetbb618d13cbb219642bd219af99ee1519e5658d77_fed03c734b9852e1 = _demo_bg.default.__wbg_cargowebsnippetbb618d13cbb219642bd219af99ee1519e5658d77_fed03c734b9852e1;
exports.__wbg_cargowebsnippetbb618d13cbb219642bd219af99ee1519e5658d77_fed03c734b9852e1 = __wbg_cargowebsnippetbb618d13cbb219642bd219af99ee1519e5658d77_fed03c734b9852e1;
var __wbg_cargowebsnippet5f8f03c2f100be177db5a7d58ca6b8cbbeaa0c93_afb20faf3d98c143 = _demo_bg.default.__wbg_cargowebsnippet5f8f03c2f100be177db5a7d58ca6b8cbbeaa0c93_afb20faf3d98c143;
exports.__wbg_cargowebsnippet5f8f03c2f100be177db5a7d58ca6b8cbbeaa0c93_afb20faf3d98c143 = __wbg_cargowebsnippet5f8f03c2f100be177db5a7d58ca6b8cbbeaa0c93_afb20faf3d98c143;
var __wbg_wasmbindgeninitialize_c1c4df6b494511ad = _demo_bg.default.__wbg_wasmbindgeninitialize_c1c4df6b494511ad;
exports.__wbg_wasmbindgeninitialize_c1c4df6b494511ad = __wbg_wasmbindgeninitialize_c1c4df6b494511ad;
var __wbg_cargowebsnippet036f2b1f5bc66f472c8dd080fe3397c9b6179d37_e39b93558c995b15 = _demo_bg.default.__wbg_cargowebsnippet036f2b1f5bc66f472c8dd080fe3397c9b6179d37_e39b93558c995b15;
exports.__wbg_cargowebsnippet036f2b1f5bc66f472c8dd080fe3397c9b6179d37_e39b93558c995b15 = __wbg_cargowebsnippet036f2b1f5bc66f472c8dd080fe3397c9b6179d37_e39b93558c995b15;
var __wbg_cargowebsnippetd2799c0b8fe00873f8c1d4832af466b8200b9d14_674c0676d538f2f2 = _demo_bg.default.__wbg_cargowebsnippetd2799c0b8fe00873f8c1d4832af466b8200b9d14_674c0676d538f2f2;
exports.__wbg_cargowebsnippetd2799c0b8fe00873f8c1d4832af466b8200b9d14_674c0676d538f2f2 = __wbg_cargowebsnippetd2799c0b8fe00873f8c1d4832af466b8200b9d14_674c0676d538f2f2;
var __wbg_cargowebsnippetdb12d53e9596e9bc7860a8231ec85044629926e7_78e4e5f2c2ce9f1f = _demo_bg.default.__wbg_cargowebsnippetdb12d53e9596e9bc7860a8231ec85044629926e7_78e4e5f2c2ce9f1f;
exports.__wbg_cargowebsnippetdb12d53e9596e9bc7860a8231ec85044629926e7_78e4e5f2c2ce9f1f = __wbg_cargowebsnippetdb12d53e9596e9bc7860a8231ec85044629926e7_78e4e5f2c2ce9f1f;
var __wbg_cargowebsnippet7bead6b563d52eee65504adb6b76c5cacb5428d3_b6c783db91943ee9 = _demo_bg.default.__wbg_cargowebsnippet7bead6b563d52eee65504adb6b76c5cacb5428d3_b6c783db91943ee9;
exports.__wbg_cargowebsnippet7bead6b563d52eee65504adb6b76c5cacb5428d3_b6c783db91943ee9 = __wbg_cargowebsnippet7bead6b563d52eee65504adb6b76c5cacb5428d3_b6c783db91943ee9;
var __wbg_cargowebsnippet85b9ecbdb8513465b790546acfd0cd530441b8a4_c156ae51cab56530 = _demo_bg.default.__wbg_cargowebsnippet85b9ecbdb8513465b790546acfd0cd530441b8a4_c156ae51cab56530;
exports.__wbg_cargowebsnippet85b9ecbdb8513465b790546acfd0cd530441b8a4_c156ae51cab56530 = __wbg_cargowebsnippet85b9ecbdb8513465b790546acfd0cd530441b8a4_c156ae51cab56530;
var __wbg_cargowebsnippet3303dd756c21d0389d6266807bd9b10fb27d21d3_dba0b702a9d4c22c = _demo_bg.default.__wbg_cargowebsnippet3303dd756c21d0389d6266807bd9b10fb27d21d3_dba0b702a9d4c22c;
exports.__wbg_cargowebsnippet3303dd756c21d0389d6266807bd9b10fb27d21d3_dba0b702a9d4c22c = __wbg_cargowebsnippet3303dd756c21d0389d6266807bd9b10fb27d21d3_dba0b702a9d4c22c;
var __wbg_cargowebsnippet0f503de1d61309643e0e13a7871406891e3691c9_e3423d1d6ce2504c = _demo_bg.default.__wbg_cargowebsnippet0f503de1d61309643e0e13a7871406891e3691c9_e3423d1d6ce2504c;
exports.__wbg_cargowebsnippet0f503de1d61309643e0e13a7871406891e3691c9_e3423d1d6ce2504c = __wbg_cargowebsnippet0f503de1d61309643e0e13a7871406891e3691c9_e3423d1d6ce2504c;
var __wbg_cargowebsnippet2908dbb08792df5e699e324eec3e29fd6a57c2c9_1aba12964286db2a = _demo_bg.default.__wbg_cargowebsnippet2908dbb08792df5e699e324eec3e29fd6a57c2c9_1aba12964286db2a;
exports.__wbg_cargowebsnippet2908dbb08792df5e699e324eec3e29fd6a57c2c9_1aba12964286db2a = __wbg_cargowebsnippet2908dbb08792df5e699e324eec3e29fd6a57c2c9_1aba12964286db2a;
var __wbindgen_throw = _demo_bg.default.__wbindgen_throw;
exports.__wbindgen_throw = __wbindgen_throw;
var __wbindgen_rethrow = _demo_bg.default.__wbindgen_rethrow;
exports.__wbindgen_rethrow = __wbindgen_rethrow;
var __wbindgen_memory = _demo_bg.default.__wbindgen_memory;
exports.__wbindgen_memory = __wbindgen_memory;
var __wbindgen_function_table = _demo_bg.default.__wbindgen_function_table;
exports.__wbindgen_function_table = __wbindgen_function_table;
var __wbindgen_closure_wrapper12276 = _demo_bg.default.__wbindgen_closure_wrapper12276;
exports.__wbindgen_closure_wrapper12276 = __wbindgen_closure_wrapper12276;
var __wbindgen_closure_wrapper12274 = _demo_bg.default.__wbindgen_closure_wrapper12274;
exports.__wbindgen_closure_wrapper12274 = __wbindgen_closure_wrapper12274;
},{"./pkg/demo_bg.wasm":"../pkg/demo_bg.wasm"}],"index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Cargo_toml_1 = require("../Cargo.toml");

Cargo_toml_1.run();
},{"../Cargo.toml":"../Cargo.toml"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58887" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../pkg/snippets/stdweb-bb142200b065bd55/inline138.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_72fc447820458c720c68d0d8e078ede631edd723 = __cargo_web_snippet_72fc447820458c720c68d0d8e078ede631edd723;

function __cargo_web_snippet_72fc447820458c720c68d0d8e078ede631edd723(Module, $0, $1, $2) {
  console.error('Panic location:', Module.STDWEB_PRIVATE.to_js_string($0, $1) + ':' + $2);
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline139.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_97495987af1720d8a9a923fa4683a7b683e3acd6 = __cargo_web_snippet_97495987af1720d8a9a923fa4683a7b683e3acd6;

function __cargo_web_snippet_97495987af1720d8a9a923fa4683a7b683e3acd6(Module, $0, $1) {
  console.error('Panic error message:', Module.STDWEB_PRIVATE.to_js_string($0, $1));
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline140.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_dc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf = __cargo_web_snippet_dc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf;

function __cargo_web_snippet_dc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf(Module) {
  console.error('Encountered a panic!');
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline141.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_1c30acb32a1994a07c75e804ae9855b43f191d63 = __cargo_web_snippet_1c30acb32a1994a07c75e804ae9855b43f191d63;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function __cargo_web_snippet_1c30acb32a1994a07c75e804ae9855b43f191d63(Module) {
  Module.STDWEB_PRIVATE = {};

  Module.STDWEB_PRIVATE.to_utf8 = function to_utf8(str, addr) {
    var HEAPU8 = Module.HEAPU8;

    for (var i = 0; i < str.length; ++i) {
      var u = str.charCodeAt(i);

      if (u >= 0xD800 && u <= 0xDFFF) {
        u = 0x10000 + ((u & 0x3FF) << 10) | str.charCodeAt(++i) & 0x3FF;
      }

      if (u <= 0x7F) {
        HEAPU8[addr++] = u;
      } else if (u <= 0x7FF) {
        HEAPU8[addr++] = 0xC0 | u >> 6;
        HEAPU8[addr++] = 0x80 | u & 63;
      } else if (u <= 0xFFFF) {
        HEAPU8[addr++] = 0xE0 | u >> 12;
        HEAPU8[addr++] = 0x80 | u >> 6 & 63;
        HEAPU8[addr++] = 0x80 | u & 63;
      } else if (u <= 0x1FFFFF) {
        HEAPU8[addr++] = 0xF0 | u >> 18;
        HEAPU8[addr++] = 0x80 | u >> 12 & 63;
        HEAPU8[addr++] = 0x80 | u >> 6 & 63;
        HEAPU8[addr++] = 0x80 | u & 63;
      } else if (u <= 0x3FFFFFF) {
        HEAPU8[addr++] = 0xF8 | u >> 24;
        HEAPU8[addr++] = 0x80 | u >> 18 & 63;
        HEAPU8[addr++] = 0x80 | u >> 12 & 63;
        HEAPU8[addr++] = 0x80 | u >> 6 & 63;
        HEAPU8[addr++] = 0x80 | u & 63;
      } else {
        HEAPU8[addr++] = 0xFC | u >> 30;
        HEAPU8[addr++] = 0x80 | u >> 24 & 63;
        HEAPU8[addr++] = 0x80 | u >> 18 & 63;
        HEAPU8[addr++] = 0x80 | u >> 12 & 63;
        HEAPU8[addr++] = 0x80 | u >> 6 & 63;
        HEAPU8[addr++] = 0x80 | u & 63;
      }
    }
  };

  Module.STDWEB_PRIVATE.noop = function () {};

  Module.STDWEB_PRIVATE.to_js = function to_js(address) {
    var kind = Module.HEAPU8[address + 12];

    if (kind === 0) {
      return undefined;
    } else if (kind === 1) {
      return null;
    } else if (kind === 2) {
      return Module.HEAP32[address / 4];
    } else if (kind === 3) {
      return Module.HEAPF64[address / 8];
    } else if (kind === 4) {
      var pointer = Module.HEAPU32[address / 4];
      var length = Module.HEAPU32[(address + 4) / 4];
      return Module.STDWEB_PRIVATE.to_js_string(pointer, length);
    } else if (kind === 5) {
      return false;
    } else if (kind === 6) {
      return true;
    } else if (kind === 7) {
      var pointer = Module.STDWEB_PRIVATE.arena + Module.HEAPU32[address / 4];
      var length = Module.HEAPU32[(address + 4) / 4];
      var _output = [];

      for (var i = 0; i < length; ++i) {
        _output.push(Module.STDWEB_PRIVATE.to_js(pointer + i * 16));
      }

      return _output;
    } else if (kind === 8) {
      var arena = Module.STDWEB_PRIVATE.arena;
      var value_array_pointer = arena + Module.HEAPU32[address / 4];
      var length = Module.HEAPU32[(address + 4) / 4];
      var key_array_pointer = arena + Module.HEAPU32[(address + 8) / 4];
      var _output = {};

      for (var i = 0; i < length; ++i) {
        var key_pointer = Module.HEAPU32[(key_array_pointer + i * 8) / 4];
        var key_length = Module.HEAPU32[(key_array_pointer + 4 + i * 8) / 4];
        var key = Module.STDWEB_PRIVATE.to_js_string(key_pointer, key_length);
        var value = Module.STDWEB_PRIVATE.to_js(value_array_pointer + i * 16);
        _output[key] = value;
      }

      return _output;
    } else if (kind === 9) {
      return Module.STDWEB_PRIVATE.acquire_js_reference(Module.HEAP32[address / 4]);
    } else if (kind === 10 || kind === 12 || kind === 13) {
      var adapter_pointer = Module.HEAPU32[address / 4];
      var pointer = Module.HEAPU32[(address + 4) / 4];
      var deallocator_pointer = Module.HEAPU32[(address + 8) / 4];
      var num_ongoing_calls = 0;
      var drop_queued = false;

      var _output = function output() {
        if (pointer === 0 || drop_queued === true) {
          if (kind === 10) {
            throw new ReferenceError("Already dropped Rust function called!");
          } else if (kind === 12) {
            throw new ReferenceError("Already dropped FnMut function called!");
          } else {
            throw new ReferenceError("Already called or dropped FnOnce function called!");
          }
        }

        var function_pointer = pointer;

        if (kind === 13) {
          _output.drop = Module.STDWEB_PRIVATE.noop;
          pointer = 0;
        }

        if (num_ongoing_calls !== 0) {
          if (kind === 12 || kind === 13) {
            throw new ReferenceError("FnMut function called multiple times concurrently!");
          }
        }

        var args = Module.STDWEB_PRIVATE.alloc(16);
        Module.STDWEB_PRIVATE.serialize_array(args, arguments);

        try {
          num_ongoing_calls += 1;
          Module.STDWEB_PRIVATE.dyncall("vii", adapter_pointer, [function_pointer, args]);
          var result = Module.STDWEB_PRIVATE.tmp;
          Module.STDWEB_PRIVATE.tmp = null;
        } finally {
          num_ongoing_calls -= 1;
        }

        if (drop_queued === true && num_ongoing_calls === 0) {
          _output.drop();
        }

        return result;
      };

      _output.drop = function () {
        if (num_ongoing_calls !== 0) {
          drop_queued = true;
          return;
        }

        _output.drop = Module.STDWEB_PRIVATE.noop;
        var function_pointer = pointer;
        pointer = 0;

        if (function_pointer != 0) {
          Module.STDWEB_PRIVATE.dyncall("vi", deallocator_pointer, [function_pointer]);
        }
      };

      return _output;
    } else if (kind === 14) {
      var pointer = Module.HEAPU32[address / 4];
      var length = Module.HEAPU32[(address + 4) / 4];
      var array_kind = Module.HEAPU32[(address + 8) / 4];
      var pointer_end = pointer + length;

      switch (array_kind) {
        case 0:
          return Module.HEAPU8.subarray(pointer, pointer_end);

        case 1:
          return Module.HEAP8.subarray(pointer, pointer_end);

        case 2:
          return Module.HEAPU16.subarray(pointer, pointer_end);

        case 3:
          return Module.HEAP16.subarray(pointer, pointer_end);

        case 4:
          return Module.HEAPU32.subarray(pointer, pointer_end);

        case 5:
          return Module.HEAP32.subarray(pointer, pointer_end);

        case 6:
          return Module.HEAPF32.subarray(pointer, pointer_end);

        case 7:
          return Module.HEAPF64.subarray(pointer, pointer_end);
      }
    } else if (kind === 15) {
      return Module.STDWEB_PRIVATE.get_raw_value(Module.HEAPU32[address / 4]);
    }
  };

  Module.STDWEB_PRIVATE.serialize_object = function serialize_object(address, value) {
    var keys = Object.keys(value);
    var length = keys.length;
    var key_array_pointer = Module.STDWEB_PRIVATE.alloc(length * 8);
    var value_array_pointer = Module.STDWEB_PRIVATE.alloc(length * 16);
    Module.HEAPU8[address + 12] = 8;
    Module.HEAPU32[address / 4] = value_array_pointer;
    Module.HEAPU32[(address + 4) / 4] = length;
    Module.HEAPU32[(address + 8) / 4] = key_array_pointer;

    for (var i = 0; i < length; ++i) {
      var key = keys[i];
      var key_address = key_array_pointer + i * 8;
      Module.STDWEB_PRIVATE.to_utf8_string(key_address, key);
      Module.STDWEB_PRIVATE.from_js(value_array_pointer + i * 16, value[key]);
    }
  };

  Module.STDWEB_PRIVATE.serialize_array = function serialize_array(address, value) {
    var length = value.length;
    var pointer = Module.STDWEB_PRIVATE.alloc(length * 16);
    Module.HEAPU8[address + 12] = 7;
    Module.HEAPU32[address / 4] = pointer;
    Module.HEAPU32[(address + 4) / 4] = length;

    for (var i = 0; i < length; ++i) {
      Module.STDWEB_PRIVATE.from_js(pointer + i * 16, value[i]);
    }
  };

  var cachedEncoder = typeof TextEncoder === "function" ? new TextEncoder("utf-8") : (typeof util === "undefined" ? "undefined" : _typeof(util)) === "object" && util && typeof util.TextEncoder === "function" ? new util.TextEncoder("utf-8") : null;

  if (cachedEncoder != null) {
    Module.STDWEB_PRIVATE.to_utf8_string = function to_utf8_string(address, value) {
      var buffer = cachedEncoder.encode(value);
      var length = buffer.length;
      var pointer = 0;

      if (length > 0) {
        pointer = Module.STDWEB_PRIVATE.alloc(length);
        Module.HEAPU8.set(buffer, pointer);
      }

      Module.HEAPU32[address / 4] = pointer;
      Module.HEAPU32[(address + 4) / 4] = length;
    };
  } else {
    Module.STDWEB_PRIVATE.to_utf8_string = function to_utf8_string(address, value) {
      var length = Module.STDWEB_PRIVATE.utf8_len(value);
      var pointer = 0;

      if (length > 0) {
        pointer = Module.STDWEB_PRIVATE.alloc(length);
        Module.STDWEB_PRIVATE.to_utf8(value, pointer);
      }

      Module.HEAPU32[address / 4] = pointer;
      Module.HEAPU32[(address + 4) / 4] = length;
    };
  }

  Module.STDWEB_PRIVATE.from_js = function from_js(address, value) {
    var kind = Object.prototype.toString.call(value);

    if (kind === "[object String]") {
      Module.HEAPU8[address + 12] = 4;
      Module.STDWEB_PRIVATE.to_utf8_string(address, value);
    } else if (kind === "[object Number]") {
      if (value === (value | 0)) {
        Module.HEAPU8[address + 12] = 2;
        Module.HEAP32[address / 4] = value;
      } else {
        Module.HEAPU8[address + 12] = 3;
        Module.HEAPF64[address / 8] = value;
      }
    } else if (value === null) {
      Module.HEAPU8[address + 12] = 1;
    } else if (value === undefined) {
      Module.HEAPU8[address + 12] = 0;
    } else if (value === false) {
      Module.HEAPU8[address + 12] = 5;
    } else if (value === true) {
      Module.HEAPU8[address + 12] = 6;
    } else if (kind === "[object Symbol]") {
      var id = Module.STDWEB_PRIVATE.register_raw_value(value);
      Module.HEAPU8[address + 12] = 15;
      Module.HEAP32[address / 4] = id;
    } else {
      var refid = Module.STDWEB_PRIVATE.acquire_rust_reference(value);
      Module.HEAPU8[address + 12] = 9;
      Module.HEAP32[address / 4] = refid;
    }
  };

  var cachedDecoder = typeof TextDecoder === "function" ? new TextDecoder("utf-8") : (typeof util === "undefined" ? "undefined" : _typeof(util)) === "object" && util && typeof util.TextDecoder === "function" ? new util.TextDecoder("utf-8") : null;

  if (cachedDecoder != null) {
    Module.STDWEB_PRIVATE.to_js_string = function to_js_string(index, length) {
      return cachedDecoder.decode(Module.HEAPU8.subarray(index, index + length));
    };
  } else {
    Module.STDWEB_PRIVATE.to_js_string = function to_js_string(index, length) {
      var HEAPU8 = Module.HEAPU8;
      index = index | 0;
      length = length | 0;
      var end = (index | 0) + (length | 0);
      var output = "";

      while (index < end) {
        var x = HEAPU8[index++];

        if (x < 128) {
          output += String.fromCharCode(x);
          continue;
        }

        var init = x & 0x7F >> 2;
        var y = 0;

        if (index < end) {
          y = HEAPU8[index++];
        }

        var ch = init << 6 | y & 63;

        if (x >= 0xE0) {
          var z = 0;

          if (index < end) {
            z = HEAPU8[index++];
          }

          var y_z = (y & 63) << 6 | z & 63;
          ch = init << 12 | y_z;

          if (x >= 0xF0) {
            var w = 0;

            if (index < end) {
              w = HEAPU8[index++];
            }

            ch = (init & 7) << 18 | (y_z << 6 | w & 63);
            output += String.fromCharCode(0xD7C0 + (ch >> 10));
            ch = 0xDC00 + (ch & 0x3FF);
          }
        }

        output += String.fromCharCode(ch);
        continue;
      }

      return output;
    };
  }

  Module.STDWEB_PRIVATE.id_to_ref_map = {};
  Module.STDWEB_PRIVATE.id_to_refcount_map = {};
  Module.STDWEB_PRIVATE.ref_to_id_map = new WeakMap();
  Module.STDWEB_PRIVATE.ref_to_id_map_fallback = new Map();
  Module.STDWEB_PRIVATE.last_refid = 1;
  Module.STDWEB_PRIVATE.id_to_raw_value_map = {};
  Module.STDWEB_PRIVATE.last_raw_value_id = 1;

  Module.STDWEB_PRIVATE.acquire_rust_reference = function (reference) {
    if (reference === undefined || reference === null) {
      return 0;
    }

    var id_to_refcount_map = Module.STDWEB_PRIVATE.id_to_refcount_map;
    var id_to_ref_map = Module.STDWEB_PRIVATE.id_to_ref_map;
    var ref_to_id_map = Module.STDWEB_PRIVATE.ref_to_id_map;
    var ref_to_id_map_fallback = Module.STDWEB_PRIVATE.ref_to_id_map_fallback;
    var refid = ref_to_id_map.get(reference);

    if (refid === undefined) {
      refid = ref_to_id_map_fallback.get(reference);
    }

    if (refid === undefined) {
      refid = Module.STDWEB_PRIVATE.last_refid++;

      try {
        ref_to_id_map.set(reference, refid);
      } catch (e) {
        ref_to_id_map_fallback.set(reference, refid);
      }
    }

    if (refid in id_to_ref_map) {
      id_to_refcount_map[refid]++;
    } else {
      id_to_ref_map[refid] = reference;
      id_to_refcount_map[refid] = 1;
    }

    return refid;
  };

  Module.STDWEB_PRIVATE.acquire_js_reference = function (refid) {
    return Module.STDWEB_PRIVATE.id_to_ref_map[refid];
  };

  Module.STDWEB_PRIVATE.increment_refcount = function (refid) {
    Module.STDWEB_PRIVATE.id_to_refcount_map[refid]++;
  };

  Module.STDWEB_PRIVATE.decrement_refcount = function (refid) {
    var id_to_refcount_map = Module.STDWEB_PRIVATE.id_to_refcount_map;

    if (0 == --id_to_refcount_map[refid]) {
      var id_to_ref_map = Module.STDWEB_PRIVATE.id_to_ref_map;
      var ref_to_id_map_fallback = Module.STDWEB_PRIVATE.ref_to_id_map_fallback;
      var reference = id_to_ref_map[refid];
      delete id_to_ref_map[refid];
      delete id_to_refcount_map[refid];
      ref_to_id_map_fallback.delete(reference);
    }
  };

  Module.STDWEB_PRIVATE.register_raw_value = function (value) {
    var id = Module.STDWEB_PRIVATE.last_raw_value_id++;
    Module.STDWEB_PRIVATE.id_to_raw_value_map[id] = value;
    return id;
  };

  Module.STDWEB_PRIVATE.unregister_raw_value = function (id) {
    delete Module.STDWEB_PRIVATE.id_to_raw_value_map[id];
  };

  Module.STDWEB_PRIVATE.get_raw_value = function (id) {
    return Module.STDWEB_PRIVATE.id_to_raw_value_map[id];
  };

  Module.STDWEB_PRIVATE.alloc = function alloc(size) {
    return Module.web_malloc(size);
  };

  Module.STDWEB_PRIVATE.dyncall = function (signature, ptr, args) {
    return Module.web_table.get(ptr).apply(null, args);
  };

  Module.STDWEB_PRIVATE.utf8_len = function utf8_len(str) {
    var len = 0;

    for (var i = 0; i < str.length; ++i) {
      var u = str.charCodeAt(i);

      if (u >= 0xD800 && u <= 0xDFFF) {
        u = 0x10000 + ((u & 0x3FF) << 10) | str.charCodeAt(++i) & 0x3FF;
      }

      if (u <= 0x7F) {
        ++len;
      } else if (u <= 0x7FF) {
        len += 2;
      } else if (u <= 0xFFFF) {
        len += 3;
      } else if (u <= 0x1FFFFF) {
        len += 4;
      } else if (u <= 0x3FFFFFF) {
        len += 5;
      } else {
        len += 6;
      }
    }

    return len;
  };

  Module.STDWEB_PRIVATE.prepare_any_arg = function (value) {
    var arg = Module.STDWEB_PRIVATE.alloc(16);
    Module.STDWEB_PRIVATE.from_js(arg, value);
    return arg;
  };

  Module.STDWEB_PRIVATE.acquire_tmp = function (dummy) {
    var value = Module.STDWEB_PRIVATE.tmp;
    Module.STDWEB_PRIVATE.tmp = null;
    return value;
  };
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline142.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_e854289309e564012996fbb70e7c19bf4e6a8866 = __cargo_web_snippet_e854289309e564012996fbb70e7c19bf4e6a8866;

function __cargo_web_snippet_e854289309e564012996fbb70e7c19bf4e6a8866(Module, $0) {
  var r = Module.STDWEB_PRIVATE.acquire_js_reference($0);
  return r instanceof DOMException && r.name === "NamespaceError";
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline145.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_0e54fd9c163fcf648ce0a395fde4500fd167a40b = __cargo_web_snippet_0e54fd9c163fcf648ce0a395fde4500fd167a40b;

function __cargo_web_snippet_0e54fd9c163fcf648ce0a395fde4500fd167a40b(Module, $0) {
  var r = Module.STDWEB_PRIVATE.acquire_js_reference($0);
  return r instanceof DOMException && r.name === "InvalidCharacterError";
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline149.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_7c8dfab835dc8a552cd9d67f27d26624590e052c = __cargo_web_snippet_7c8dfab835dc8a552cd9d67f27d26624590e052c;

function __cargo_web_snippet_7c8dfab835dc8a552cd9d67f27d26624590e052c(Module, $0) {
  var r = Module.STDWEB_PRIVATE.acquire_js_reference($0);
  return r instanceof DOMException && r.name === "SyntaxError";
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline150.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_897ff2d0160606ea98961935acb125d1ddbf4688 = __cargo_web_snippet_897ff2d0160606ea98961935acb125d1ddbf4688;

function __cargo_web_snippet_897ff2d0160606ea98961935acb125d1ddbf4688(Module, $0) {
  var r = Module.STDWEB_PRIVATE.acquire_js_reference($0);
  return r instanceof DOMException && r.name === "SecurityError";
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline151.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_de2896a7ccf316486788a4d0bc433c25d2f1a12b = __cargo_web_snippet_de2896a7ccf316486788a4d0bc433c25d2f1a12b;

function __cargo_web_snippet_de2896a7ccf316486788a4d0bc433c25d2f1a12b(Module, $0) {
  var r = Module.STDWEB_PRIVATE.acquire_js_reference($0);
  return r instanceof DOMException && r.name === "NotFoundError";
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline154.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_c023351d5bff43ef3dd317b499821cd4e71492f0 = __cargo_web_snippet_c023351d5bff43ef3dd317b499821cd4e71492f0;

function __cargo_web_snippet_c023351d5bff43ef3dd317b499821cd4e71492f0(Module, $0) {
  var r = Module.STDWEB_PRIVATE.acquire_js_reference($0);
  return r instanceof DOMException && r.name === "HierarchyRequestError";
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline174.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_99c4eefdc8d4cc724135163b8c8665a1f3de99e4 = __cargo_web_snippet_99c4eefdc8d4cc724135163b8c8665a1f3de99e4;

function __cargo_web_snippet_99c4eefdc8d4cc724135163b8c8665a1f3de99e4(Module, $0, $1, $2, $3) {
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  $2 = Module.STDWEB_PRIVATE.to_js($2);
  $3 = Module.STDWEB_PRIVATE.to_js($3);
  Module.STDWEB_PRIVATE.from_js($0, function () {
    var listener = $1;
    $2.addEventListener($3, listener);
    return listener;
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline175.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_f750c7bda400081b4d7209f43f9d59214d39f6ea = __cargo_web_snippet_f750c7bda400081b4d7209f43f9d59214d39f6ea;

function __cargo_web_snippet_f750c7bda400081b4d7209f43f9d59214d39f6ea(Module, $0, $1, $2) {
  $0 = Module.STDWEB_PRIVATE.to_js($0);
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  $2 = Module.STDWEB_PRIVATE.to_js($2);
  var listener = $0;
  $1.removeEventListener($2, listener);
  listener.drop();
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline331.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_80d6d56760c65e49b7be8b6b01c1ea861b046bf0 = __cargo_web_snippet_80d6d56760c65e49b7be8b6b01c1ea861b046bf0;

function __cargo_web_snippet_80d6d56760c65e49b7be8b6b01c1ea861b046bf0(Module, $0) {
  Module.STDWEB_PRIVATE.decrement_refcount($0);
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline333.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_9f22d4ca7bc938409787341b7db181f8dd41e6df = __cargo_web_snippet_9f22d4ca7bc938409787341b7db181f8dd41e6df;

function __cargo_web_snippet_9f22d4ca7bc938409787341b7db181f8dd41e6df(Module, $0) {
  Module.STDWEB_PRIVATE.increment_refcount($0);
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline382.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_ff5103e6cc179d13b4c7a785bdce2708fd559fc0 = __cargo_web_snippet_ff5103e6cc179d13b4c7a785bdce2708fd559fc0;

function __cargo_web_snippet_ff5103e6cc179d13b4c7a785bdce2708fd559fc0(Module, $0) {
  Module.STDWEB_PRIVATE.tmp = Module.STDWEB_PRIVATE.to_js($0);
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline39.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_614a3dd2adb7e9eac4a0ec6e59d37f87e0521c3b = __cargo_web_snippet_614a3dd2adb7e9eac4a0ec6e59d37f87e0521c3b;

function __cargo_web_snippet_614a3dd2adb7e9eac4a0ec6e59d37f87e0521c3b(Module, $0, $1) {
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  Module.STDWEB_PRIVATE.from_js($0, function () {
    return $1.error;
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline40.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_ab05f53189dacccf2d365ad26daa407d4f7abea9 = __cargo_web_snippet_ab05f53189dacccf2d365ad26daa407d4f7abea9;

function __cargo_web_snippet_ab05f53189dacccf2d365ad26daa407d4f7abea9(Module, $0, $1) {
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  Module.STDWEB_PRIVATE.from_js($0, function () {
    return $1.value;
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline41.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_b06dde4acf09433b5190a4b001259fe5d4abcbc2 = __cargo_web_snippet_b06dde4acf09433b5190a4b001259fe5d4abcbc2;

function __cargo_web_snippet_b06dde4acf09433b5190a4b001259fe5d4abcbc2(Module, $0, $1) {
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  Module.STDWEB_PRIVATE.from_js($0, function () {
    return $1.success;
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline466.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_0d39c013e2144171d64e2fac849140a7e54c939a = __cargo_web_snippet_0d39c013e2144171d64e2fac849140a7e54c939a;

function __cargo_web_snippet_0d39c013e2144171d64e2fac849140a7e54c939a(Module, $0, $1) {
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  Module.STDWEB_PRIVATE.from_js($0, function () {
    return $1.location;
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline467.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_afafe9a462a05084fec65cacc7d6598e145ff3e3 = __cargo_web_snippet_afafe9a462a05084fec65cacc7d6598e145ff3e3;

function __cargo_web_snippet_afafe9a462a05084fec65cacc7d6598e145ff3e3(Module, $0, $1, $2) {
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  $2 = Module.STDWEB_PRIVATE.to_js($2);
  Module.STDWEB_PRIVATE.from_js($0, function () {
    return $1.createTextNode($2);
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline471.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_0c326292efc233420ade892f70743acb4a852fd7 = __cargo_web_snippet_0c326292efc233420ade892f70743acb4a852fd7;

function __cargo_web_snippet_0c326292efc233420ade892f70743acb4a852fd7(Module, $0, $1, $2, $3) {
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  $2 = Module.STDWEB_PRIVATE.to_js($2);
  $3 = Module.STDWEB_PRIVATE.to_js($3);
  Module.STDWEB_PRIVATE.from_js($0, function () {
    try {
      return {
        value: function () {
          return $1.createElementNS($2, $3);
        }(),
        success: true
      };
    } catch (error) {
      return {
        error: error,
        success: false
      };
    }
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline475.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_91749aeb589cd0f9b17cbc01b2872ba709817982 = __cargo_web_snippet_91749aeb589cd0f9b17cbc01b2872ba709817982;

function __cargo_web_snippet_91749aeb589cd0f9b17cbc01b2872ba709817982(Module, $0, $1, $2) {
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  $2 = Module.STDWEB_PRIVATE.to_js($2);
  Module.STDWEB_PRIVATE.from_js($0, function () {
    try {
      return {
        value: function () {
          return $1.createElement($2);
        }(),
        success: true
      };
    } catch (error) {
      return {
        error: error,
        success: false
      };
    }
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline477.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_6fcce0aae651e2d748e085ff1f800f87625ff8c8 = __cargo_web_snippet_6fcce0aae651e2d748e085ff1f800f87625ff8c8;

function __cargo_web_snippet_6fcce0aae651e2d748e085ff1f800f87625ff8c8(Module, $0) {
  Module.STDWEB_PRIVATE.from_js($0, function () {
    return document;
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline486.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_a152e8d0e8fac5476f30c1d19e4ab217dbcba73d = __cargo_web_snippet_a152e8d0e8fac5476f30c1d19e4ab217dbcba73d;

function __cargo_web_snippet_a152e8d0e8fac5476f30c1d19e4ab217dbcba73d(Module, $0, $1, $2) {
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  $2 = Module.STDWEB_PRIVATE.to_js($2);
  Module.STDWEB_PRIVATE.from_js($0, function () {
    try {
      return {
        value: function () {
          return $1.querySelector($2);
        }(),
        success: true
      };
    } catch (error) {
      return {
        error: error,
        success: false
      };
    }
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline51.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_465ffdf4814bf5d08a3abdf8fe5e61a220b98c34 = __cargo_web_snippet_465ffdf4814bf5d08a3abdf8fe5e61a220b98c34;

function __cargo_web_snippet_465ffdf4814bf5d08a3abdf8fe5e61a220b98c34(Module, $0) {
  var o = Module.STDWEB_PRIVATE.acquire_js_reference($0);
  return o instanceof Node;
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline559.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_6b6b85c7554455174b3dbb97f3e3e6d010733f81 = __cargo_web_snippet_6b6b85c7554455174b3dbb97f3e3e6d010733f81;

function __cargo_web_snippet_6b6b85c7554455174b3dbb97f3e3e6d010733f81(Module, $0, $1, $2, $3) {
  $0 = Module.STDWEB_PRIVATE.to_js($0);
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  $2 = Module.STDWEB_PRIVATE.to_js($2);
  $3 = Module.STDWEB_PRIVATE.to_js($3);
  $0.replaceState($1, $2, $3);
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline560.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_5ceb98b2e46d98ffb6869e5cadbd87470e745875 = __cargo_web_snippet_5ceb98b2e46d98ffb6869e5cadbd87470e745875;

function __cargo_web_snippet_5ceb98b2e46d98ffb6869e5cadbd87470e745875(Module, $0, $1, $2, $3) {
  $0 = Module.STDWEB_PRIVATE.to_js($0);
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  $2 = Module.STDWEB_PRIVATE.to_js($2);
  $3 = Module.STDWEB_PRIVATE.to_js($3);
  $0.pushState($1, $2, $3);
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline615.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_ec62bad51093fd25faa38be3170e100862e191f3 = __cargo_web_snippet_ec62bad51093fd25faa38be3170e100862e191f3;

function __cargo_web_snippet_ec62bad51093fd25faa38be3170e100862e191f3(Module, $0, $1) {
  $0 = Module.STDWEB_PRIVATE.to_js($0);
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  $0.remove($1);
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline616.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_8a049af1e4867892fca647811a9472e4c5832053 = __cargo_web_snippet_8a049af1e4867892fca647811a9472e4c5832053;

function __cargo_web_snippet_8a049af1e4867892fca647811a9472e4c5832053(Module, $0, $1) {
  $0 = Module.STDWEB_PRIVATE.to_js($0);
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  $0.add($1);
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline66.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_08a3b15e1358700ac92bc556f9e9b8af660fc2c7 = __cargo_web_snippet_08a3b15e1358700ac92bc556f9e9b8af660fc2c7;

function __cargo_web_snippet_08a3b15e1358700ac92bc556f9e9b8af660fc2c7(Module, $0, $1) {
  $0 = Module.STDWEB_PRIVATE.to_js($0);
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  $0.nodeValue = $1;
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline661.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_22a7767e09f1cca8e9a9c425b93781008b1ecac3 = __cargo_web_snippet_22a7767e09f1cca8e9a9c425b93781008b1ecac3;

function __cargo_web_snippet_22a7767e09f1cca8e9a9c425b93781008b1ecac3(Module, $0, $1) {
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  Module.STDWEB_PRIVATE.from_js($0, function () {
    try {
      return {
        value: function () {
          return $1.hash;
        }(),
        success: true
      };
    } catch (error) {
      return {
        error: error,
        success: false
      };
    }
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline665.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_5f44a6301f6a09d0f350d1015fd129f97bb1e755 = __cargo_web_snippet_5f44a6301f6a09d0f350d1015fd129f97bb1e755;

function __cargo_web_snippet_5f44a6301f6a09d0f350d1015fd129f97bb1e755(Module, $0, $1) {
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  Module.STDWEB_PRIVATE.from_js($0, function () {
    try {
      return {
        value: function () {
          return $1.search;
        }(),
        success: true
      };
    } catch (error) {
      return {
        error: error,
        success: false
      };
    }
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline669.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_a466a2ab96cd77e1a77dcdb39f4f031701c195fc = __cargo_web_snippet_a466a2ab96cd77e1a77dcdb39f4f031701c195fc;

function __cargo_web_snippet_a466a2ab96cd77e1a77dcdb39f4f031701c195fc(Module, $0, $1) {
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  Module.STDWEB_PRIVATE.from_js($0, function () {
    try {
      return {
        value: function () {
          return $1.pathname;
        }(),
        success: true
      };
    } catch (error) {
      return {
        error: error,
        success: false
      };
    }
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline70.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_690311d2f9134ac0983620c38a9e6460d4165607 = __cargo_web_snippet_690311d2f9134ac0983620c38a9e6460d4165607;

function __cargo_web_snippet_690311d2f9134ac0983620c38a9e6460d4165607(Module, $0, $1) {
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  Module.STDWEB_PRIVATE.from_js($0, function () {
    return $1.nextSibling;
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline700.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_c26ddf75f581148e029dfcd95c037bb50d502e43 = __cargo_web_snippet_c26ddf75f581148e029dfcd95c037bb50d502e43;

function __cargo_web_snippet_c26ddf75f581148e029dfcd95c037bb50d502e43(Module, $0, $1) {
  $0 = Module.STDWEB_PRIVATE.to_js($0);
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  $0.value = $1;
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline71.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_f03767d5868baf486b51c1e3988d0ce100e850ca = __cargo_web_snippet_f03767d5868baf486b51c1e3988d0ce100e850ca;

function __cargo_web_snippet_f03767d5868baf486b51c1e3988d0ce100e850ca(Module, $0, $1) {
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  Module.STDWEB_PRIVATE.from_js($0, function () {
    return $1.lastChild;
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline718.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_84339b1bf72a580059a6e0ff9499e53759aef5b9 = __cargo_web_snippet_84339b1bf72a580059a6e0ff9499e53759aef5b9;

function __cargo_web_snippet_84339b1bf72a580059a6e0ff9499e53759aef5b9(Module, $0) {
  var o = Module.STDWEB_PRIVATE.acquire_js_reference($0);
  return o instanceof MouseEvent && o.type === "click";
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline760.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_3c5e83d16a83fc7147ec91e2506438012952f55a = __cargo_web_snippet_3c5e83d16a83fc7147ec91e2506438012952f55a;

function __cargo_web_snippet_3c5e83d16a83fc7147ec91e2506438012952f55a(Module, $0) {
  var o = Module.STDWEB_PRIVATE.acquire_js_reference($0);
  return o instanceof Element;
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline796.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_bb618d13cbb219642bd219af99ee1519e5658d77 = __cargo_web_snippet_bb618d13cbb219642bd219af99ee1519e5658d77;

function __cargo_web_snippet_bb618d13cbb219642bd219af99ee1519e5658d77(Module, $0, $1) {
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  Module.STDWEB_PRIVATE.from_js($0, function () {
    return $1.classList;
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline797.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_5f8f03c2f100be177db5a7d58ca6b8cbbeaa0c93 = __cargo_web_snippet_5f8f03c2f100be177db5a7d58ca6b8cbbeaa0c93;

function __cargo_web_snippet_5f8f03c2f100be177db5a7d58ca6b8cbbeaa0c93(Module, $0, $1) {
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  Module.STDWEB_PRIVATE.from_js($0, function () {
    return $1.namespaceURI;
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline798.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wasm_bindgen_initialize = wasm_bindgen_initialize;

function wasm_bindgen_initialize(memory, table, alloc, free) {
  var Module = {};
  Module.web_malloc = alloc;
  Module.web_free = free;
  Module.web_table = table;
  Object.defineProperty(Module, "HEAP8", {
    get: function get() {
      return new Int8Array(memory.buffer);
    }
  });
  Object.defineProperty(Module, "HEAP16", {
    get: function get() {
      return new Int16Array(memory.buffer);
    }
  });
  Object.defineProperty(Module, "HEAP32", {
    get: function get() {
      return new Int32Array(memory.buffer);
    }
  });
  Object.defineProperty(Module, "HEAPU8", {
    get: function get() {
      return new Uint8Array(memory.buffer);
    }
  });
  Object.defineProperty(Module, "HEAPU16", {
    get: function get() {
      return new Uint16Array(memory.buffer);
    }
  });
  Object.defineProperty(Module, "HEAPU32", {
    get: function get() {
      return new Uint32Array(memory.buffer);
    }
  });
  Object.defineProperty(Module, "HEAPF32", {
    get: function get() {
      return new Float32Array(memory.buffer);
    }
  });
  Object.defineProperty(Module, "HEAPF64", {
    get: function get() {
      return new Float64Array(memory.buffer);
    }
  });
  return Module;
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline804.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_036f2b1f5bc66f472c8dd080fe3397c9b6179d37 = __cargo_web_snippet_036f2b1f5bc66f472c8dd080fe3397c9b6179d37;

function __cargo_web_snippet_036f2b1f5bc66f472c8dd080fe3397c9b6179d37(Module, $0, $1) {
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  Module.STDWEB_PRIVATE.from_js($0, function () {
    return $1.state;
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline805.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_d2799c0b8fe00873f8c1d4832af466b8200b9d14 = __cargo_web_snippet_d2799c0b8fe00873f8c1d4832af466b8200b9d14;

function __cargo_web_snippet_d2799c0b8fe00873f8c1d4832af466b8200b9d14(Module, $0) {
  var o = Module.STDWEB_PRIVATE.acquire_js_reference($0);
  return o instanceof Event && o.type === "popstate";
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline81.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_46518012593da937dd5f35c2fc1c5e1dcade260b = __cargo_web_snippet_46518012593da937dd5f35c2fc1c5e1dcade260b;

function __cargo_web_snippet_46518012593da937dd5f35c2fc1c5e1dcade260b(Module, $0, $1, $2, $3) {
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  $2 = Module.STDWEB_PRIVATE.to_js($2);
  $3 = Module.STDWEB_PRIVATE.to_js($3);
  Module.STDWEB_PRIVATE.from_js($0, function () {
    try {
      return {
        value: function () {
          return $1.insertBefore($2, $3);
        }(),
        success: true
      };
    } catch (error) {
      return {
        error: error,
        success: false
      };
    }
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline818.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_db12d53e9596e9bc7860a8231ec85044629926e7 = __cargo_web_snippet_db12d53e9596e9bc7860a8231ec85044629926e7;

function __cargo_web_snippet_db12d53e9596e9bc7860a8231ec85044629926e7(Module, $0) {
  var o = Module.STDWEB_PRIVATE.acquire_js_reference($0);
  return o instanceof HTMLTextAreaElement;
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline826.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_7bead6b563d52eee65504adb6b76c5cacb5428d3 = __cargo_web_snippet_7bead6b563d52eee65504adb6b76c5cacb5428d3;

function __cargo_web_snippet_7bead6b563d52eee65504adb6b76c5cacb5428d3(Module, $0) {
  $0 = Module.STDWEB_PRIVATE.to_js($0);
  $0.preventDefault();
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline831.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_85b9ecbdb8513465b790546acfd0cd530441b8a4 = __cargo_web_snippet_85b9ecbdb8513465b790546acfd0cd530441b8a4;

function __cargo_web_snippet_85b9ecbdb8513465b790546acfd0cd530441b8a4(Module, $0) {
  $0 = Module.STDWEB_PRIVATE.to_js($0);
  $0.stopPropagation();
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline848.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_3303dd756c21d0389d6266807bd9b10fb27d21d3 = __cargo_web_snippet_3303dd756c21d0389d6266807bd9b10fb27d21d3;

function __cargo_web_snippet_3303dd756c21d0389d6266807bd9b10fb27d21d3(Module, $0, $1) {
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  Module.STDWEB_PRIVATE.from_js($0, function () {
    return $1.history;
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline855.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_0f503de1d61309643e0e13a7871406891e3691c9 = __cargo_web_snippet_0f503de1d61309643e0e13a7871406891e3691c9;

function __cargo_web_snippet_0f503de1d61309643e0e13a7871406891e3691c9(Module, $0) {
  Module.STDWEB_PRIVATE.from_js($0, function () {
    return window;
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline87.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_cd41a77d0178ae27c833ef2950e5f1a48a1455c1 = __cargo_web_snippet_cd41a77d0178ae27c833ef2950e5f1a48a1455c1;

function __cargo_web_snippet_cd41a77d0178ae27c833ef2950e5f1a48a1455c1(Module, $0, $1, $2) {
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  $2 = Module.STDWEB_PRIVATE.to_js($2);
  Module.STDWEB_PRIVATE.from_js($0, function () {
    try {
      return {
        value: function () {
          return $1.removeChild($2);
        }(),
        success: true
      };
    } catch (error) {
      return {
        error: error,
        success: false
      };
    }
  }());
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline88.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_e741b9d9071097746386b2c2ec044a2bc73e688c = __cargo_web_snippet_e741b9d9071097746386b2c2ec044a2bc73e688c;

function __cargo_web_snippet_e741b9d9071097746386b2c2ec044a2bc73e688c(Module, $0, $1) {
  $0 = Module.STDWEB_PRIVATE.to_js($0);
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  $0.appendChild($1);
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline89.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_e9638d6405ab65f78daf4a5af9c9de14ecf1e2ec = __cargo_web_snippet_e9638d6405ab65f78daf4a5af9c9de14ecf1e2ec;

function __cargo_web_snippet_e9638d6405ab65f78daf4a5af9c9de14ecf1e2ec(Module, $0) {
  $0 = Module.STDWEB_PRIVATE.to_js($0);
  Module.STDWEB_PRIVATE.unregister_raw_value($0);
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline91.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_0aced9e2351ced72f1ff99645a129132b16c0d3c = __cargo_web_snippet_0aced9e2351ced72f1ff99645a129132b16c0d3c;

function __cargo_web_snippet_0aced9e2351ced72f1ff99645a129132b16c0d3c(Module, $0) {
  var value = Module.STDWEB_PRIVATE.get_raw_value($0);
  return Module.STDWEB_PRIVATE.register_raw_value(value);
}
},{}],"../pkg/snippets/stdweb-bb142200b065bd55/inline919.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_2908dbb08792df5e699e324eec3e29fd6a57c2c9 = __cargo_web_snippet_2908dbb08792df5e699e324eec3e29fd6a57c2c9;

function __cargo_web_snippet_2908dbb08792df5e699e324eec3e29fd6a57c2c9(Module, $0) {
  var o = Module.STDWEB_PRIVATE.acquire_js_reference($0);
  return o instanceof HTMLInputElement;
}
},{}],"../pkg/snippets/web_logger-831cf3115fc27a05/inline0.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_4fd31c9e56d40b8642cf9e6f96fd6b570f355cea = __cargo_web_snippet_4fd31c9e56d40b8642cf9e6f96fd6b570f355cea;

function __cargo_web_snippet_4fd31c9e56d40b8642cf9e6f96fd6b570f355cea(Module, $0) {
  $0 = Module.STDWEB_PRIVATE.to_js($0);
  console.error($0);
}
},{}],"../pkg/snippets/web_logger-831cf3115fc27a05/inline1.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_114b518968fda2247f8d0d6ad5a226d35aa55986 = __cargo_web_snippet_114b518968fda2247f8d0d6ad5a226d35aa55986;

function __cargo_web_snippet_114b518968fda2247f8d0d6ad5a226d35aa55986(Module, $0) {
  $0 = Module.STDWEB_PRIVATE.to_js($0);
  console.warn($0);
}
},{}],"../pkg/snippets/web_logger-831cf3115fc27a05/inline2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_c5c1b47195f246fcd2672c546e8c4d526e328687 = __cargo_web_snippet_c5c1b47195f246fcd2672c546e8c4d526e328687;

function __cargo_web_snippet_c5c1b47195f246fcd2672c546e8c4d526e328687(Module, $0) {
  $0 = Module.STDWEB_PRIVATE.to_js($0);
  console.info($0);
}
},{}],"../pkg/snippets/web_logger-831cf3115fc27a05/inline3.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_6bcfdb0f4808b0b1e8b8b8d2facd39b73ac5018b = __cargo_web_snippet_6bcfdb0f4808b0b1e8b8b8d2facd39b73ac5018b;

function __cargo_web_snippet_6bcfdb0f4808b0b1e8b8b8d2facd39b73ac5018b(Module, $0) {
  $0 = Module.STDWEB_PRIVATE.to_js($0);
  console.debug($0);
}
},{}],"../pkg/snippets/web_logger-831cf3115fc27a05/inline4.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_199d5eb25dfe761687bcd487578eb7e636bd9650 = __cargo_web_snippet_199d5eb25dfe761687bcd487578eb7e636bd9650;

function __cargo_web_snippet_199d5eb25dfe761687bcd487578eb7e636bd9650(Module, $0) {
  $0 = Module.STDWEB_PRIVATE.to_js($0);
  console.log($0);
}
},{}],"../pkg/snippets/yew-bf06628a6ef3fd19/inline30.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_a1f43b583e011a9bbeae64030b81f677e6c29005 = __cargo_web_snippet_a1f43b583e011a9bbeae64030b81f677e6c29005;

function __cargo_web_snippet_a1f43b583e011a9bbeae64030b81f677e6c29005(Module, $0, $1) {
  $0 = Module.STDWEB_PRIVATE.to_js($0);
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  $0.checked = $1;
}
},{}],"../pkg/snippets/yew-bf06628a6ef3fd19/inline31.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_f6358c198ebcc61c9da370cca2679c0b8bc81a7b = __cargo_web_snippet_f6358c198ebcc61c9da370cca2679c0b8bc81a7b;

function __cargo_web_snippet_f6358c198ebcc61c9da370cca2679c0b8bc81a7b(Module, $0, $1) {
  $0 = Module.STDWEB_PRIVATE.to_js($0);
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  $0.removeAttribute($1);
}
},{}],"../pkg/snippets/yew-bf06628a6ef3fd19/inline32.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_da2febd72f9938d90bc2bf2905643f595b07abd9 = __cargo_web_snippet_da2febd72f9938d90bc2bf2905643f595b07abd9;

function __cargo_web_snippet_da2febd72f9938d90bc2bf2905643f595b07abd9(Module, $0, $1, $2) {
  $0 = Module.STDWEB_PRIVATE.to_js($0);
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  $2 = Module.STDWEB_PRIVATE.to_js($2);
  $0.setAttribute($1, $2);
}
},{}],"../pkg/snippets/yew-bf06628a6ef3fd19/inline33.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__cargo_web_snippet_0da47658267a7497de743e1b0892f992ba6ca6ef = __cargo_web_snippet_0da47658267a7497de743e1b0892f992ba6ca6ef;

function __cargo_web_snippet_0da47658267a7497de743e1b0892f992ba6ca6ef(Module, $0, $1) {
  $0 = Module.STDWEB_PRIVATE.to_js($0);
  $1 = Module.STDWEB_PRIVATE.to_js($1);
  $0.type = $1;
}
},{}],"../node_modules/@material/ripple/util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportsCssVariables = supportsCssVariables;
exports.getNormalizedEventCoords = getNormalizedEventCoords;

/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;

function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug'; // Append to head instead of body because this script might be invoked in the
  // head, in which case the body doesn't exist yet. The probe works either way.

  document.head.appendChild(node); // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

  var computedStyle = windowObj.getComputedStyle(node);
  var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';

  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }

  return hasPseudoVarBug;
}

function supportsCssVariables(windowObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  var CSS = windowObj.CSS;
  var supportsCssVars = supportsCssVariables_;

  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables_;
  }

  var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';

  if (!supportsFunctionPresent) {
    return false;
  }

  var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes'); // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari

  var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVars = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVars = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVars;
  }

  return supportsCssVars;
}

function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return {
      x: 0,
      y: 0
    };
  }

  var x = pageOffset.x,
      y = pageOffset.y;
  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY; // Determine touch point relative to the ripple container.

  if (evt.type === 'touchstart') {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }

  return {
    x: normalizedX,
    y: normalizedY
  };
}
},{}],"../node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__spreadArrays = __spreadArrays;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__assign = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __exportStar(m, exports) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

;

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
},{}],"../node_modules/@material/base/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCFoundation = void 0;

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation =
/** @class */
function () {
  function MDCFoundation(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }

    this.adapter_ = adapter;
  }

  Object.defineProperty(MDCFoundation, "cssClasses", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "strings", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "numbers", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "defaultAdapter", {
    get: function () {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    },
    enumerable: true,
    configurable: true
  });

  MDCFoundation.prototype.init = function () {// Subclasses should override this method to perform initialization routines (registering events, etc.)
  };

  MDCFoundation.prototype.destroy = function () {// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  };

  return MDCFoundation;
}();

exports.MDCFoundation = MDCFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCFoundation;
exports.default = _default;
},{}],"../node_modules/@material/base/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCComponent = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _foundation = require("./foundation");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCComponent =
/** @class */
function () {
  function MDCComponent(root, foundation) {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    this.root_ = root;
    this.initialize.apply(this, tslib_1.__spread(args)); // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.

    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  MDCComponent.attachTo = function (root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new _foundation.MDCFoundation({}));
  };
  /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */


  MDCComponent.prototype.initialize = function () {
    var _args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      _args[_i] = arguments[_i];
    } // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.

  };

  MDCComponent.prototype.getDefaultFoundation = function () {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  };

  MDCComponent.prototype.initialSyncWithDOM = function () {// Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  };

  MDCComponent.prototype.destroy = function () {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  };

  MDCComponent.prototype.listen = function (evtType, handler, options) {
    this.root_.addEventListener(evtType, handler, options);
  };

  MDCComponent.prototype.unlisten = function (evtType, handler, options) {
    this.root_.removeEventListener(evtType, handler, options);
  };
  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
   */


  MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
    if (shouldBubble === void 0) {
      shouldBubble = false;
    }

    var evt;

    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        bubbles: shouldBubble,
        detail: evtData
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  };

  return MDCComponent;
}();

exports.MDCComponent = MDCComponent;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCComponent;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","./foundation":"../node_modules/@material/base/foundation.js"}],"../node_modules/@material/dom/events.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyPassive = applyPassive;

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Stores result from applyPassive to avoid redundant processing to detect
 * passive event listener support.
 */
var supportsPassive_;
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */

function applyPassive(globalObj, forceRefresh) {
  if (globalObj === void 0) {
    globalObj = window;
  }

  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported_1 = false;

    try {
      globalObj.document.addEventListener('test', function () {
        return undefined;
      }, {
        get passive() {
          isSupported_1 = true;
          return isSupported_1;
        }

      });
    } catch (e) {} // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.


    supportsPassive_ = isSupported_1;
  }

  return supportsPassive_ ? {
    passive: true
  } : false;
}
},{}],"../node_modules/@material/dom/ponyfill.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closest = closest;
exports.matches = matches;

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }

  var el = element;

  while (el) {
    if (matches(el, selector)) {
      return el;
    }

    el = el.parentElement;
  }

  return null;
}

function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}
},{}],"../node_modules/@material/ripple/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numbers = exports.strings = exports.cssClasses = void 0;

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
};
exports.cssClasses = cssClasses;
var strings = {
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top'
};
exports.strings = strings;
var numbers = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};
exports.numbers = numbers;
},{}],"../node_modules/@material/ripple/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCRippleFoundation = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _foundation = require("@material/base/foundation");

var _constants = require("./constants");

var _util = require("./util");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown']; // Deactivation events registered on documentElement when a pointer-related down event occurs

var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu']; // simultaneous nested activations

var activatedTargets = [];

var MDCRippleFoundation =
/** @class */
function (_super) {
  tslib_1.__extends(MDCRippleFoundation, _super);

  function MDCRippleFoundation(adapter) {
    var _this = _super.call(this, tslib_1.__assign({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;

    _this.activationAnimationHasEnded_ = false;
    _this.activationTimer_ = 0;
    _this.fgDeactivationRemovalTimer_ = 0;
    _this.fgScale_ = '0';
    _this.frame_ = {
      width: 0,
      height: 0
    };
    _this.initialSize_ = 0;
    _this.layoutFrame_ = 0;
    _this.maxRadius_ = 0;
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };
    _this.activationState_ = _this.defaultActivationState_();

    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;

      _this.runDeactivationUXLogicIfReady_();
    };

    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    _this.deactivateHandler_ = function () {
      return _this.deactivate_();
    };

    _this.focusHandler_ = function () {
      return _this.handleFocus();
    };

    _this.blurHandler_ = function () {
      return _this.handleBlur();
    };

    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    return _this;
  }

  Object.defineProperty(MDCRippleFoundation, "cssClasses", {
    get: function () {
      return _constants.cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "strings", {
    get: function () {
      return _constants.strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "numbers", {
    get: function () {
      return _constants.numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
    get: function () {
      return {
        addClass: function () {
          return undefined;
        },
        browserSupportsCssVars: function () {
          return true;
        },
        computeBoundingRect: function () {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        containsEventTarget: function () {
          return true;
        },
        deregisterDocumentInteractionHandler: function () {
          return undefined;
        },
        deregisterInteractionHandler: function () {
          return undefined;
        },
        deregisterResizeHandler: function () {
          return undefined;
        },
        getWindowPageOffset: function () {
          return {
            x: 0,
            y: 0
          };
        },
        isSurfaceActive: function () {
          return true;
        },
        isSurfaceDisabled: function () {
          return true;
        },
        isUnbounded: function () {
          return true;
        },
        registerDocumentInteractionHandler: function () {
          return undefined;
        },
        registerInteractionHandler: function () {
          return undefined;
        },
        registerResizeHandler: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        updateCssVariable: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCRippleFoundation.prototype.init = function () {
    var _this = this;

    var supportsPressRipple = this.supportsPressRipple_();
    this.registerRootHandlers_(supportsPressRipple);

    if (supportsPressRipple) {
      var _a = MDCRippleFoundation.cssClasses,
          ROOT_1 = _a.ROOT,
          UNBOUNDED_1 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter_.addClass(ROOT_1);

        if (_this.adapter_.isUnbounded()) {
          _this.adapter_.addClass(UNBOUNDED_1); // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple


          _this.layoutInternal_();
        }
      });
    }
  };

  MDCRippleFoundation.prototype.destroy = function () {
    var _this = this;

    if (this.supportsPressRipple_()) {
      if (this.activationTimer_) {
        clearTimeout(this.activationTimer_);
        this.activationTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
      }

      if (this.fgDeactivationRemovalTimer_) {
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.fgDeactivationRemovalTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
      }

      var _a = MDCRippleFoundation.cssClasses,
          ROOT_2 = _a.ROOT,
          UNBOUNDED_2 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter_.removeClass(ROOT_2);

        _this.adapter_.removeClass(UNBOUNDED_2);

        _this.removeCssVars_();
      });
    }

    this.deregisterRootHandlers_();
    this.deregisterDeactivationHandlers_();
  };
  /**
   * @param evt Optional event containing position information.
   */


  MDCRippleFoundation.prototype.activate = function (evt) {
    this.activate_(evt);
  };

  MDCRippleFoundation.prototype.deactivate = function () {
    this.deactivate_();
  };

  MDCRippleFoundation.prototype.layout = function () {
    var _this = this;

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }

    this.layoutFrame_ = requestAnimationFrame(function () {
      _this.layoutInternal_();

      _this.layoutFrame_ = 0;
    });
  };

  MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

    if (unbounded) {
      this.adapter_.addClass(UNBOUNDED);
    } else {
      this.adapter_.removeClass(UNBOUNDED);
    }
  };

  MDCRippleFoundation.prototype.handleFocus = function () {
    var _this = this;

    requestAnimationFrame(function () {
      return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };

  MDCRippleFoundation.prototype.handleBlur = function () {
    var _this = this;

    requestAnimationFrame(function () {
      return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };
  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   */


  MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
    return this.adapter_.browserSupportsCssVars();
  };

  MDCRippleFoundation.prototype.defaultActivationState_ = function () {
    return {
      activationEvent: undefined,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  };
  /**
   * supportsPressRipple Passed from init to save a redundant function call
   */


  MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
    var _this = this;

    if (supportsPressRipple) {
      ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
      });

      if (this.adapter_.isUnbounded()) {
        this.adapter_.registerResizeHandler(this.resizeHandler_);
      }
    }

    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
  };

  MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
    var _this = this;

    if (evt.type === 'keydown') {
      this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
    } else {
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
      });
    }
  };

  MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
    var _this = this;

    ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
      _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
    });
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

    if (this.adapter_.isUnbounded()) {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  };

  MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
    var _this = this;

    this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
    POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
      _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
    });
  };

  MDCRippleFoundation.prototype.removeCssVars_ = function () {
    var _this = this;

    var rippleStrings = MDCRippleFoundation.strings;
    var keys = Object.keys(rippleStrings);
    keys.forEach(function (key) {
      if (key.indexOf('VAR_') === 0) {
        _this.adapter_.updateCssVariable(rippleStrings[key], null);
      }
    });
  };

  MDCRippleFoundation.prototype.activate_ = function (evt) {
    var _this = this;

    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    var activationState = this.activationState_;

    if (activationState.isActivated) {
      return;
    } // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction


    var previousActivationEvent = this.previousActivationEvent_;
    var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;

    if (isSameInteraction) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = evt === undefined;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
    var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
      return _this.adapter_.containsEventTarget(target);
    });

    if (hasActivatedChild) {
      // Immediately reset activation state, while preserving logic that prevents touch follow-on events
      this.resetActivationState_();
      return;
    }

    if (evt !== undefined) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers_(evt);
    }

    activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);

    if (activationState.wasElementMadeActive) {
      this.animateActivation_();
    }

    requestAnimationFrame(function () {
      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets = [];

      if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {
        // If space was pressed, try again within an rAF call to detect :active, because different UAs report
        // active states inconsistently when they're called within event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
        // variable is set within a rAF callback for a submit button interaction (#2241).
        activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);

        if (activationState.wasElementMadeActive) {
          _this.animateActivation_();
        }
      }

      if (!activationState.wasElementMadeActive) {
        // Reset activation state immediately if element was not made active.
        _this.activationState_ = _this.defaultActivationState_();
      }
    });
  };

  MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
    return evt !== undefined && evt.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
  };

  MDCRippleFoundation.prototype.animateActivation_ = function () {
    var _this = this;

    var _a = MDCRippleFoundation.strings,
        VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
        VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
    var _b = MDCRippleFoundation.cssClasses,
        FG_DEACTIVATION = _b.FG_DEACTIVATION,
        FG_ACTIVATION = _b.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal_();
    var translateStart = '';
    var translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      var _c = this.getFgTranslationCoordinates_(),
          startPoint = _c.startPoint,
          endPoint = _c.endPoint;

      translateStart = startPoint.x + "px, " + startPoint.y + "px";
      translateEnd = endPoint.x + "px, " + endPoint.y + "px";
    }

    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd); // Cancel any ongoing activation/deactivation animations

    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION); // Force layout in order to re-trigger the animation.

    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(function () {
      return _this.activationTimerCallback_();
    }, DEACTIVATION_TIMEOUT_MS);
  };

  MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
    var _a = this.activationState_,
        activationEvent = _a.activationEvent,
        wasActivatedByPointer = _a.wasActivatedByPointer;
    var startPoint;

    if (wasActivatedByPointer) {
      startPoint = (0, _util.getNormalizedEventCoords)(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2
      };
    } // Center the element around the start point.


    startPoint = {
      x: startPoint.x - this.initialSize_ / 2,
      y: startPoint.y - this.initialSize_ / 2
    };
    var endPoint = {
      x: this.frame_.width / 2 - this.initialSize_ / 2,
      y: this.frame_.height / 2 - this.initialSize_ / 2
    };
    return {
      startPoint: startPoint,
      endPoint: endPoint
    };
  };

  MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
    var _this = this; // This method is called both when a pointing device is released, and when the activation animation ends.
    // The deactivation animation should only run after both of those occur.


    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
    var _a = this.activationState_,
        hasDeactivationUXRun = _a.hasDeactivationUXRun,
        isActivated = _a.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;

    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(function () {
        _this.adapter_.removeClass(FG_DEACTIVATION);
      }, _constants.numbers.FG_DEACTIVATION_MS);
    }
  };

  MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  };

  MDCRippleFoundation.prototype.resetActivationState_ = function () {
    var _this = this;

    this.previousActivationEvent_ = this.activationState_.activationEvent;
    this.activationState_ = this.defaultActivationState_(); // Touch devices may fire additional events for the same interaction within a short time.
    // Store the previous event until it's safe to assume that subsequent events are for new interactions.

    setTimeout(function () {
      return _this.previousActivationEvent_ = undefined;
    }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
  };

  MDCRippleFoundation.prototype.deactivate_ = function () {
    var _this = this;

    var activationState = this.activationState_; // This can happen in scenarios such as when you have a keyup event that blurs the element.

    if (!activationState.isActivated) {
      return;
    }

    var state = tslib_1.__assign({}, activationState);

    if (activationState.isProgrammatic) {
      requestAnimationFrame(function () {
        return _this.animateDeactivation_(state);
      });
      this.resetActivationState_();
    } else {
      this.deregisterDeactivationHandlers_();
      requestAnimationFrame(function () {
        _this.activationState_.hasDeactivationUXRun = true;

        _this.animateDeactivation_(state);

        _this.resetActivationState_();
      });
    }
  };

  MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
    var wasActivatedByPointer = _a.wasActivatedByPointer,
        wasElementMadeActive = _a.wasElementMadeActive;

    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady_();
    }
  };

  MDCRippleFoundation.prototype.layoutInternal_ = function () {
    var _this = this;

    this.frame_ = this.adapter_.computeBoundingRect();
    var maxDim = Math.max(this.frame_.height, this.frame_.width); // Surface diameter is treated differently for unbounded vs. bounded ripples.
    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
    // `overflow: hidden`.

    var getBoundedRadius = function () {
      var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
      return hypotenuse + MDCRippleFoundation.numbers.PADDING;
    };

    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius(); // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform

    var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE); // Unbounded ripple size should always be even number to equally center align.

    if (this.adapter_.isUnbounded() && initialSize % 2 !== 0) {
      this.initialSize_ = initialSize - 1;
    } else {
      this.initialSize_ = initialSize;
    }

    this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
    this.updateLayoutCssVars_();
  };

  MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
    var _a = MDCRippleFoundation.strings,
        VAR_FG_SIZE = _a.VAR_FG_SIZE,
        VAR_LEFT = _a.VAR_LEFT,
        VAR_TOP = _a.VAR_TOP,
        VAR_FG_SCALE = _a.VAR_FG_SCALE;
    this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
        top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
      };
      this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
      this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
    }
  };

  return MDCRippleFoundation;
}(_foundation.MDCFoundation);

exports.MDCRippleFoundation = MDCRippleFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCRippleFoundation;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/foundation":"../node_modules/@material/base/foundation.js","./constants":"../node_modules/@material/ripple/constants.js","./util":"../node_modules/@material/ripple/util.js"}],"../node_modules/@material/ripple/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCRipple = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _component = require("@material/base/component");

var _events = require("@material/dom/events");

var _ponyfill = require("@material/dom/ponyfill");

var _foundation = require("./foundation");

var util = _interopRequireWildcard(require("./util"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCRipple =
/** @class */
function (_super) {
  tslib_1.__extends(MDCRipple, _super);

  function MDCRipple() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.disabled = false;
    return _this;
  }

  MDCRipple.attachTo = function (root, opts) {
    if (opts === void 0) {
      opts = {
        isUnbounded: undefined
      };
    }

    var ripple = new MDCRipple(root); // Only override unbounded behavior if option is explicitly specified

    if (opts.isUnbounded !== undefined) {
      ripple.unbounded = opts.isUnbounded;
    }

    return ripple;
  };

  MDCRipple.createAdapter = function (instance) {
    return {
      addClass: function (className) {
        return instance.root_.classList.add(className);
      },
      browserSupportsCssVars: function () {
        return util.supportsCssVariables(window);
      },
      computeBoundingRect: function () {
        return instance.root_.getBoundingClientRect();
      },
      containsEventTarget: function (target) {
        return instance.root_.contains(target);
      },
      deregisterDocumentInteractionHandler: function (evtType, handler) {
        return document.documentElement.removeEventListener(evtType, handler, (0, _events.applyPassive)());
      },
      deregisterInteractionHandler: function (evtType, handler) {
        return instance.root_.removeEventListener(evtType, handler, (0, _events.applyPassive)());
      },
      deregisterResizeHandler: function (handler) {
        return window.removeEventListener('resize', handler);
      },
      getWindowPageOffset: function () {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      isSurfaceActive: function () {
        return (0, _ponyfill.matches)(instance.root_, ':active');
      },
      isSurfaceDisabled: function () {
        return Boolean(instance.disabled);
      },
      isUnbounded: function () {
        return Boolean(instance.unbounded);
      },
      registerDocumentInteractionHandler: function (evtType, handler) {
        return document.documentElement.addEventListener(evtType, handler, (0, _events.applyPassive)());
      },
      registerInteractionHandler: function (evtType, handler) {
        return instance.root_.addEventListener(evtType, handler, (0, _events.applyPassive)());
      },
      registerResizeHandler: function (handler) {
        return window.addEventListener('resize', handler);
      },
      removeClass: function (className) {
        return instance.root_.classList.remove(className);
      },
      updateCssVariable: function (varName, value) {
        return instance.root_.style.setProperty(varName, value);
      }
    };
  };

  Object.defineProperty(MDCRipple.prototype, "unbounded", {
    get: function () {
      return Boolean(this.unbounded_);
    },
    set: function (unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    },
    enumerable: true,
    configurable: true
  });

  MDCRipple.prototype.activate = function () {
    this.foundation_.activate();
  };

  MDCRipple.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };

  MDCRipple.prototype.layout = function () {
    this.foundation_.layout();
  };

  MDCRipple.prototype.getDefaultFoundation = function () {
    return new _foundation.MDCRippleFoundation(MDCRipple.createAdapter(this));
  };

  MDCRipple.prototype.initialSyncWithDOM = function () {
    var root = this.root_;
    this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
  };
  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   */


  MDCRipple.prototype.setUnbounded_ = function () {
    this.foundation_.setUnbounded(Boolean(this.unbounded_));
  };

  return MDCRipple;
}(_component.MDCComponent);

exports.MDCRipple = MDCRipple;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/component":"../node_modules/@material/base/component.js","@material/dom/events":"../node_modules/@material/dom/events.js","@material/dom/ponyfill":"../node_modules/@material/dom/ponyfill.js","./foundation":"../node_modules/@material/ripple/foundation.js","./util":"../node_modules/@material/ripple/util.js"}],"../node_modules/@material/ripple/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  util: true
};
exports.util = void 0;

var util = _interopRequireWildcard(require("./util"));

exports.util = util;

var _component = require("./component");

Object.keys(_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _component[key];
    }
  });
});

var _constants = require("./constants");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});

var _foundation = require("./foundation");

Object.keys(_foundation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _foundation[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
},{"./util":"../node_modules/@material/ripple/util.js","./component":"../node_modules/@material/ripple/component.js","./constants":"../node_modules/@material/ripple/constants.js","./foundation":"../node_modules/@material/ripple/foundation.js"}],"../node_modules/parcel-bundler/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"../node_modules/parcel-plugin-wasm.rs/wasm-loader.js":[function(require,module,exports) {
var global = arguments[3];
var __dirname = "/Users/jetli/repos/3rdparty/mdc-rs/crates/mdc-yew/examples/demo/node_modules/parcel-plugin-wasm.rs";
"use strict";

var _inline = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline138.js");

var _inline2 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline139.js");

var _inline3 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline140.js");

var _inline4 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline141.js");

var _inline5 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline142.js");

var _inline6 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline145.js");

var _inline7 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline149.js");

var _inline8 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline150.js");

var _inline9 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline151.js");

var _inline10 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline154.js");

var _inline11 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline174.js");

var _inline12 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline175.js");

var _inline13 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline331.js");

var _inline14 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline333.js");

var _inline15 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline382.js");

var _inline16 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline39.js");

var _inline17 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline40.js");

var _inline18 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline41.js");

var _inline19 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline466.js");

var _inline20 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline467.js");

var _inline21 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline471.js");

var _inline22 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline475.js");

var _inline23 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline477.js");

var _inline24 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline486.js");

var _inline25 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline51.js");

var _inline26 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline559.js");

var _inline27 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline560.js");

var _inline28 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline615.js");

var _inline29 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline616.js");

var _inline30 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline66.js");

var _inline31 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline661.js");

var _inline32 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline665.js");

var _inline33 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline669.js");

var _inline34 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline70.js");

var _inline35 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline700.js");

var _inline36 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline71.js");

var _inline37 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline718.js");

var _inline38 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline760.js");

var _inline39 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline796.js");

var _inline40 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline797.js");

var _inline41 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline798.js");

var _inline42 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline804.js");

var _inline43 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline805.js");

var _inline44 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline81.js");

var _inline45 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline818.js");

var _inline46 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline826.js");

var _inline47 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline831.js");

var _inline48 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline848.js");

var _inline49 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline855.js");

var _inline50 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline87.js");

var _inline51 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline88.js");

var _inline52 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline89.js");

var _inline53 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline91.js");

var _inline54 = require("../../pkg/snippets/stdweb-bb142200b065bd55/inline919.js");

var _inline55 = require("../../pkg/snippets/web_logger-831cf3115fc27a05/inline0.js");

var _inline56 = require("../../pkg/snippets/web_logger-831cf3115fc27a05/inline1.js");

var _inline57 = require("../../pkg/snippets/web_logger-831cf3115fc27a05/inline2.js");

var _inline58 = require("../../pkg/snippets/web_logger-831cf3115fc27a05/inline3.js");

var _inline59 = require("../../pkg/snippets/web_logger-831cf3115fc27a05/inline4.js");

var _inline60 = require("../../pkg/snippets/yew-bf06628a6ef3fd19/inline30.js");

var _inline61 = require("../../pkg/snippets/yew-bf06628a6ef3fd19/inline31.js");

var _inline62 = require("../../pkg/snippets/yew-bf06628a6ef3fd19/inline32.js");

var _inline63 = require("../../pkg/snippets/yew-bf06628a6ef3fd19/inline33.js");

var _index = require("@material/ripple/index");

var wasm;
const __exports = {};
const heap = new Array(32);
heap.fill(undefined);
heap.push(undefined, null, true, false);

function getObject(idx) {
  return heap[idx];
}

let heap_next = heap.length;

function dropObject(idx) {
  if (idx < 36) return;
  heap[idx] = heap_next;
  heap_next = idx;
}

function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}

function _assertBoolean(n) {
  if (typeof n !== 'boolean') {
    throw new Error('expected a boolean argument');
  }
}

function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  if (typeof heap_next !== 'number') throw new Error('corrupt heap');
  heap[idx] = obj;
  return idx;
}

let cachedTextDecoder = new TextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
let cachegetUint8Memory0 = null;

function getUint8Memory0() {
  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
    cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }

  return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function logError(e) {
  let error = function () {
    try {
      return e instanceof Error ? `${e.message}\n\nStack:\n${e.stack}` : e.toString();
    } catch (_) {
      return "<failed to stringify thrown value>";
    }
  }();

  console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", error);
  throw e;
}

function _assertNum(n) {
  if (typeof n !== 'number') throw new Error('expected a number argument');
}

function __wbg_adapter_18(arg0, arg1, arg2) {
  _assertNum(arg0);

  _assertNum(arg1);

  _assertNum(arg2);

  var ret = wasm._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h8a5b9683955e772f(arg0, arg1, arg2);

  return ret;
}

function __wbg_adapter_21(arg0, arg1, arg2, arg3) {
  _assertNum(arg0);

  _assertNum(arg1);

  _assertNum(arg2);

  _assertNum(arg3);

  wasm._dyn_core__ops__function__Fn__A__B___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0c494f0376a4c5d3(arg0, arg1, arg2, arg3);
}
/**
*/


__exports.run = function () {
  wasm.run();
};

function isLikeNone(x) {
  return x === undefined || x === null;
}

function handleError(e) {
  wasm.__wbindgen_exn_store(addHeapObject(e));
}

__exports.__wbindgen_object_drop_ref = function (arg0) {
  takeObject(arg0);
};

__exports.__wbg_cargowebsnippet4fd31c9e56d40b8642cf9e6f96fd6b570f355cea_8a401aade62618ba = function (arg0, arg1) {
  try {
    (0, _inline55.__cargo_web_snippet_4fd31c9e56d40b8642cf9e6f96fd6b570f355cea)(takeObject(arg0), arg1);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet114b518968fda2247f8d0d6ad5a226d35aa55986_90291b06311b4650 = function (arg0, arg1) {
  try {
    (0, _inline56.__cargo_web_snippet_114b518968fda2247f8d0d6ad5a226d35aa55986)(takeObject(arg0), arg1);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippetc5c1b47195f246fcd2672c546e8c4d526e328687_8e9bf2760a8d405c = function (arg0, arg1) {
  try {
    (0, _inline57.__cargo_web_snippet_c5c1b47195f246fcd2672c546e8c4d526e328687)(takeObject(arg0), arg1);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet6bcfdb0f4808b0b1e8b8b8d2facd39b73ac5018b_2b46a18b54b44834 = function (arg0, arg1) {
  try {
    (0, _inline58.__cargo_web_snippet_6bcfdb0f4808b0b1e8b8b8d2facd39b73ac5018b)(takeObject(arg0), arg1);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet199d5eb25dfe761687bcd487578eb7e636bd9650_cab2de567628901e = function (arg0, arg1) {
  try {
    (0, _inline59.__cargo_web_snippet_199d5eb25dfe761687bcd487578eb7e636bd9650)(takeObject(arg0), arg1);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_destroy_f313c5f643b8556f = function (arg0) {
  try {
    getObject(arg0).destroy();
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_new_af8ec88c68c25f56 = function (arg0) {
  try {
    var ret = new _index.MDCRipple(takeObject(arg0));
    return addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__widl_f_get_element_by_id_Document = function (arg0, arg1, arg2) {
  try {
    var ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__widl_instanceof_Window = function (arg0) {
  try {
    var ret = getObject(arg0) instanceof Window;

    _assertBoolean(ret);

    return ret;
  } catch (e) {
    logError(e);
  }
};

__exports.__widl_f_document_Window = function (arg0) {
  try {
    var ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippeta1f43b583e011a9bbeae64030b81f677e6c29005_91dc4c9d62139c95 = function (arg0, arg1, arg2) {
  try {
    (0, _inline60.__cargo_web_snippet_a1f43b583e011a9bbeae64030b81f677e6c29005)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippetf6358c198ebcc61c9da370cca2679c0b8bc81a7b_b90bdcc255d53798 = function (arg0, arg1, arg2) {
  try {
    (0, _inline61.__cargo_web_snippet_f6358c198ebcc61c9da370cca2679c0b8bc81a7b)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippetda2febd72f9938d90bc2bf2905643f595b07abd9_362a6e8f7d3c5086 = function (arg0, arg1, arg2, arg3) {
  try {
    (0, _inline62.__cargo_web_snippet_da2febd72f9938d90bc2bf2905643f595b07abd9)(takeObject(arg0), arg1, arg2, arg3);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet0da47658267a7497de743e1b0892f992ba6ca6ef_92a6bf0c49eb821e = function (arg0, arg1, arg2) {
  try {
    (0, _inline63.__cargo_web_snippet_0da47658267a7497de743e1b0892f992ba6ca6ef)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_newnoargs_bcfed51ec795a16a = function (arg0, arg1) {
  try {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_call_913a01a8cfcedafe = function (arg0, arg1) {
  try {
    try {
      var ret = getObject(arg0).call(getObject(arg1));
      return addHeapObject(ret);
    } catch (e) {
      handleError(e);
    }
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_globalThis_61af7faf43c24a8c = function () {
  try {
    try {
      var ret = globalThis.globalThis;
      return addHeapObject(ret);
    } catch (e) {
      handleError(e);
    }
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_self_674710f3296ee2fa = function () {
  try {
    try {
      var ret = self.self;
      return addHeapObject(ret);
    } catch (e) {
      handleError(e);
    }
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_window_b26db3ba8287bb02 = function () {
  try {
    try {
      var ret = window.window;
      return addHeapObject(ret);
    } catch (e) {
      handleError(e);
    }
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_global_9baf085cb9fdc53f = function () {
  try {
    try {
      var ret = global.global;
      return addHeapObject(ret);
    } catch (e) {
      handleError(e);
    }
  } catch (e) {
    logError(e);
  }
};

__exports.__wbindgen_is_undefined = function (arg0) {
  var ret = getObject(arg0) === undefined;

  _assertBoolean(ret);

  return ret;
};

__exports.__wbindgen_object_clone_ref = function (arg0) {
  var ret = getObject(arg0);
  return addHeapObject(ret);
};

__exports.__wbg_cargowebsnippet614a3dd2adb7e9eac4a0ec6e59d37f87e0521c3b_61a037ef81d9af77 = function (arg0, arg1, arg2) {
  try {
    (0, _inline16.__cargo_web_snippet_614a3dd2adb7e9eac4a0ec6e59d37f87e0521c3b)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippetab05f53189dacccf2d365ad26daa407d4f7abea9_641d6b20c73343b4 = function (arg0, arg1, arg2) {
  try {
    (0, _inline17.__cargo_web_snippet_ab05f53189dacccf2d365ad26daa407d4f7abea9)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippetb06dde4acf09433b5190a4b001259fe5d4abcbc2_d346638ea92aac60 = function (arg0, arg1, arg2) {
  try {
    (0, _inline18.__cargo_web_snippet_b06dde4acf09433b5190a4b001259fe5d4abcbc2)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet465ffdf4814bf5d08a3abdf8fe5e61a220b98c34_54cd4762544a0ed8 = function (arg0, arg1) {
  try {
    var ret = (0, _inline25.__cargo_web_snippet_465ffdf4814bf5d08a3abdf8fe5e61a220b98c34)(takeObject(arg0), arg1);

    _assertBoolean(ret);

    return ret;
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet08a3b15e1358700ac92bc556f9e9b8af660fc2c7_9e8cd6528929926d = function (arg0, arg1, arg2) {
  try {
    (0, _inline30.__cargo_web_snippet_08a3b15e1358700ac92bc556f9e9b8af660fc2c7)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet690311d2f9134ac0983620c38a9e6460d4165607_a4cb2a84cd08d937 = function (arg0, arg1, arg2) {
  try {
    (0, _inline34.__cargo_web_snippet_690311d2f9134ac0983620c38a9e6460d4165607)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippetf03767d5868baf486b51c1e3988d0ce100e850ca_bc1dd209260bf552 = function (arg0, arg1, arg2) {
  try {
    (0, _inline36.__cargo_web_snippet_f03767d5868baf486b51c1e3988d0ce100e850ca)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet46518012593da937dd5f35c2fc1c5e1dcade260b_ea53969a3495cf2c = function (arg0, arg1, arg2, arg3, arg4) {
  try {
    (0, _inline44.__cargo_web_snippet_46518012593da937dd5f35c2fc1c5e1dcade260b)(takeObject(arg0), arg1, arg2, arg3, arg4);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippetcd41a77d0178ae27c833ef2950e5f1a48a1455c1_f91f2bcf70515796 = function (arg0, arg1, arg2, arg3) {
  try {
    (0, _inline50.__cargo_web_snippet_cd41a77d0178ae27c833ef2950e5f1a48a1455c1)(takeObject(arg0), arg1, arg2, arg3);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippete741b9d9071097746386b2c2ec044a2bc73e688c_1d0e2ab1e286c949 = function (arg0, arg1, arg2) {
  try {
    (0, _inline51.__cargo_web_snippet_e741b9d9071097746386b2c2ec044a2bc73e688c)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippete9638d6405ab65f78daf4a5af9c9de14ecf1e2ec_ad1e81894f802539 = function (arg0, arg1) {
  try {
    (0, _inline52.__cargo_web_snippet_e9638d6405ab65f78daf4a5af9c9de14ecf1e2ec)(takeObject(arg0), arg1);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet0aced9e2351ced72f1ff99645a129132b16c0d3c_13e902b8d846fb01 = function (arg0, arg1) {
  try {
    var ret = (0, _inline53.__cargo_web_snippet_0aced9e2351ced72f1ff99645a129132b16c0d3c)(takeObject(arg0), arg1);

    _assertNum(ret);

    return ret;
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet72fc447820458c720c68d0d8e078ede631edd723_ece3da0a4474dbeb = function (arg0, arg1, arg2, arg3) {
  try {
    (0, _inline.__cargo_web_snippet_72fc447820458c720c68d0d8e078ede631edd723)(takeObject(arg0), arg1, arg2, arg3);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet97495987af1720d8a9a923fa4683a7b683e3acd6_a438202dc16f44c0 = function (arg0, arg1, arg2) {
  try {
    (0, _inline2.__cargo_web_snippet_97495987af1720d8a9a923fa4683a7b683e3acd6)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippetdc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf_ce5c721cab10d020 = function (arg0) {
  try {
    (0, _inline3.__cargo_web_snippet_dc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf)(takeObject(arg0));
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet1c30acb32a1994a07c75e804ae9855b43f191d63_6d353463ef525961 = function (arg0) {
  try {
    (0, _inline4.__cargo_web_snippet_1c30acb32a1994a07c75e804ae9855b43f191d63)(takeObject(arg0));
  } catch (e) {
    logError(e);
  }
};

__exports.__wbindgen_cb_forget = function (arg0) {
  takeObject(arg0);
};

__exports.__wbg_cargowebsnippete854289309e564012996fbb70e7c19bf4e6a8866_cf4f9c19f2bbb277 = function (arg0, arg1) {
  try {
    var ret = (0, _inline5.__cargo_web_snippet_e854289309e564012996fbb70e7c19bf4e6a8866)(takeObject(arg0), arg1);

    _assertBoolean(ret);

    return ret;
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet0e54fd9c163fcf648ce0a395fde4500fd167a40b_79ac4825f71161f4 = function (arg0, arg1) {
  try {
    var ret = (0, _inline6.__cargo_web_snippet_0e54fd9c163fcf648ce0a395fde4500fd167a40b)(takeObject(arg0), arg1);

    _assertBoolean(ret);

    return ret;
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet7c8dfab835dc8a552cd9d67f27d26624590e052c_0fd666abcb082554 = function (arg0, arg1) {
  try {
    var ret = (0, _inline7.__cargo_web_snippet_7c8dfab835dc8a552cd9d67f27d26624590e052c)(takeObject(arg0), arg1);

    _assertBoolean(ret);

    return ret;
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet897ff2d0160606ea98961935acb125d1ddbf4688_f4f8b1e103e71863 = function (arg0, arg1) {
  try {
    var ret = (0, _inline8.__cargo_web_snippet_897ff2d0160606ea98961935acb125d1ddbf4688)(takeObject(arg0), arg1);

    _assertBoolean(ret);

    return ret;
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippetde2896a7ccf316486788a4d0bc433c25d2f1a12b_cfdc90cf53c4d5da = function (arg0, arg1) {
  try {
    var ret = (0, _inline9.__cargo_web_snippet_de2896a7ccf316486788a4d0bc433c25d2f1a12b)(takeObject(arg0), arg1);

    _assertBoolean(ret);

    return ret;
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippetc023351d5bff43ef3dd317b499821cd4e71492f0_a6f092f3cdeb4fef = function (arg0, arg1) {
  try {
    var ret = (0, _inline10.__cargo_web_snippet_c023351d5bff43ef3dd317b499821cd4e71492f0)(takeObject(arg0), arg1);

    _assertBoolean(ret);

    return ret;
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet99c4eefdc8d4cc724135163b8c8665a1f3de99e4_14389f68322b60f1 = function (arg0, arg1, arg2, arg3, arg4) {
  try {
    (0, _inline11.__cargo_web_snippet_99c4eefdc8d4cc724135163b8c8665a1f3de99e4)(takeObject(arg0), arg1, arg2, arg3, arg4);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippetf750c7bda400081b4d7209f43f9d59214d39f6ea_c158729eaadb8dbe = function (arg0, arg1, arg2, arg3) {
  try {
    (0, _inline12.__cargo_web_snippet_f750c7bda400081b4d7209f43f9d59214d39f6ea)(takeObject(arg0), arg1, arg2, arg3);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet80d6d56760c65e49b7be8b6b01c1ea861b046bf0_5a8953894b8affd6 = function (arg0, arg1) {
  try {
    (0, _inline13.__cargo_web_snippet_80d6d56760c65e49b7be8b6b01c1ea861b046bf0)(takeObject(arg0), arg1);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet9f22d4ca7bc938409787341b7db181f8dd41e6df_f184afed978d4a95 = function (arg0, arg1) {
  try {
    (0, _inline14.__cargo_web_snippet_9f22d4ca7bc938409787341b7db181f8dd41e6df)(takeObject(arg0), arg1);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippetff5103e6cc179d13b4c7a785bdce2708fd559fc0_c2c7bf9cb65f32b6 = function (arg0, arg1) {
  try {
    (0, _inline15.__cargo_web_snippet_ff5103e6cc179d13b4c7a785bdce2708fd559fc0)(takeObject(arg0), arg1);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet0d39c013e2144171d64e2fac849140a7e54c939a_c38f968232d405ba = function (arg0, arg1, arg2) {
  try {
    (0, _inline19.__cargo_web_snippet_0d39c013e2144171d64e2fac849140a7e54c939a)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippetafafe9a462a05084fec65cacc7d6598e145ff3e3_d374efb355d898fd = function (arg0, arg1, arg2, arg3) {
  try {
    (0, _inline20.__cargo_web_snippet_afafe9a462a05084fec65cacc7d6598e145ff3e3)(takeObject(arg0), arg1, arg2, arg3);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet0c326292efc233420ade892f70743acb4a852fd7_828e3eda227fc4f5 = function (arg0, arg1, arg2, arg3, arg4) {
  try {
    (0, _inline21.__cargo_web_snippet_0c326292efc233420ade892f70743acb4a852fd7)(takeObject(arg0), arg1, arg2, arg3, arg4);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet91749aeb589cd0f9b17cbc01b2872ba709817982_594ed33c557be4ae = function (arg0, arg1, arg2, arg3) {
  try {
    (0, _inline22.__cargo_web_snippet_91749aeb589cd0f9b17cbc01b2872ba709817982)(takeObject(arg0), arg1, arg2, arg3);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet6fcce0aae651e2d748e085ff1f800f87625ff8c8_21ca3c3552146790 = function (arg0, arg1) {
  try {
    (0, _inline23.__cargo_web_snippet_6fcce0aae651e2d748e085ff1f800f87625ff8c8)(takeObject(arg0), arg1);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippeta152e8d0e8fac5476f30c1d19e4ab217dbcba73d_d3aa4336afb90213 = function (arg0, arg1, arg2, arg3) {
  try {
    (0, _inline24.__cargo_web_snippet_a152e8d0e8fac5476f30c1d19e4ab217dbcba73d)(takeObject(arg0), arg1, arg2, arg3);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet6b6b85c7554455174b3dbb97f3e3e6d010733f81_22d161c96f2d5804 = function (arg0, arg1, arg2, arg3, arg4) {
  try {
    (0, _inline26.__cargo_web_snippet_6b6b85c7554455174b3dbb97f3e3e6d010733f81)(takeObject(arg0), arg1, arg2, arg3, arg4);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet5ceb98b2e46d98ffb6869e5cadbd87470e745875_de59e18ab9006ad2 = function (arg0, arg1, arg2, arg3, arg4) {
  try {
    (0, _inline27.__cargo_web_snippet_5ceb98b2e46d98ffb6869e5cadbd87470e745875)(takeObject(arg0), arg1, arg2, arg3, arg4);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippetec62bad51093fd25faa38be3170e100862e191f3_eb855e81b6f64133 = function (arg0, arg1, arg2) {
  try {
    (0, _inline28.__cargo_web_snippet_ec62bad51093fd25faa38be3170e100862e191f3)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet8a049af1e4867892fca647811a9472e4c5832053_5712d9bfa201d671 = function (arg0, arg1, arg2) {
  try {
    (0, _inline29.__cargo_web_snippet_8a049af1e4867892fca647811a9472e4c5832053)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet22a7767e09f1cca8e9a9c425b93781008b1ecac3_9d303edc434339dd = function (arg0, arg1, arg2) {
  try {
    (0, _inline31.__cargo_web_snippet_22a7767e09f1cca8e9a9c425b93781008b1ecac3)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet5f44a6301f6a09d0f350d1015fd129f97bb1e755_7f255ef206b2d180 = function (arg0, arg1, arg2) {
  try {
    (0, _inline32.__cargo_web_snippet_5f44a6301f6a09d0f350d1015fd129f97bb1e755)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippeta466a2ab96cd77e1a77dcdb39f4f031701c195fc_6e24bc386a6d613f = function (arg0, arg1, arg2) {
  try {
    (0, _inline33.__cargo_web_snippet_a466a2ab96cd77e1a77dcdb39f4f031701c195fc)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippetc26ddf75f581148e029dfcd95c037bb50d502e43_f494f4a63cf92998 = function (arg0, arg1, arg2) {
  try {
    (0, _inline35.__cargo_web_snippet_c26ddf75f581148e029dfcd95c037bb50d502e43)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet84339b1bf72a580059a6e0ff9499e53759aef5b9_4e8ea0b89beeafa8 = function (arg0, arg1) {
  try {
    var ret = (0, _inline37.__cargo_web_snippet_84339b1bf72a580059a6e0ff9499e53759aef5b9)(takeObject(arg0), arg1);

    _assertBoolean(ret);

    return ret;
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet3c5e83d16a83fc7147ec91e2506438012952f55a_23154670c635c22b = function (arg0, arg1) {
  try {
    var ret = (0, _inline38.__cargo_web_snippet_3c5e83d16a83fc7147ec91e2506438012952f55a)(takeObject(arg0), arg1);

    _assertBoolean(ret);

    return ret;
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippetbb618d13cbb219642bd219af99ee1519e5658d77_fed03c734b9852e1 = function (arg0, arg1, arg2) {
  try {
    (0, _inline39.__cargo_web_snippet_bb618d13cbb219642bd219af99ee1519e5658d77)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet5f8f03c2f100be177db5a7d58ca6b8cbbeaa0c93_afb20faf3d98c143 = function (arg0, arg1, arg2) {
  try {
    (0, _inline40.__cargo_web_snippet_5f8f03c2f100be177db5a7d58ca6b8cbbeaa0c93)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_wasmbindgeninitialize_c1c4df6b494511ad = function (arg0, arg1, arg2, arg3) {
  try {
    var ret = (0, _inline41.wasm_bindgen_initialize)(takeObject(arg0), takeObject(arg1), getObject(arg2), getObject(arg3));
    return addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet036f2b1f5bc66f472c8dd080fe3397c9b6179d37_e39b93558c995b15 = function (arg0, arg1, arg2) {
  try {
    (0, _inline42.__cargo_web_snippet_036f2b1f5bc66f472c8dd080fe3397c9b6179d37)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippetd2799c0b8fe00873f8c1d4832af466b8200b9d14_674c0676d538f2f2 = function (arg0, arg1) {
  try {
    var ret = (0, _inline43.__cargo_web_snippet_d2799c0b8fe00873f8c1d4832af466b8200b9d14)(takeObject(arg0), arg1);

    _assertBoolean(ret);

    return ret;
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippetdb12d53e9596e9bc7860a8231ec85044629926e7_78e4e5f2c2ce9f1f = function (arg0, arg1) {
  try {
    var ret = (0, _inline45.__cargo_web_snippet_db12d53e9596e9bc7860a8231ec85044629926e7)(takeObject(arg0), arg1);

    _assertBoolean(ret);

    return ret;
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet7bead6b563d52eee65504adb6b76c5cacb5428d3_b6c783db91943ee9 = function (arg0, arg1) {
  try {
    (0, _inline46.__cargo_web_snippet_7bead6b563d52eee65504adb6b76c5cacb5428d3)(takeObject(arg0), arg1);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet85b9ecbdb8513465b790546acfd0cd530441b8a4_c156ae51cab56530 = function (arg0, arg1) {
  try {
    (0, _inline47.__cargo_web_snippet_85b9ecbdb8513465b790546acfd0cd530441b8a4)(takeObject(arg0), arg1);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet3303dd756c21d0389d6266807bd9b10fb27d21d3_dba0b702a9d4c22c = function (arg0, arg1, arg2) {
  try {
    (0, _inline48.__cargo_web_snippet_3303dd756c21d0389d6266807bd9b10fb27d21d3)(takeObject(arg0), arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet0f503de1d61309643e0e13a7871406891e3691c9_e3423d1d6ce2504c = function (arg0, arg1) {
  try {
    (0, _inline49.__cargo_web_snippet_0f503de1d61309643e0e13a7871406891e3691c9)(takeObject(arg0), arg1);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_cargowebsnippet2908dbb08792df5e699e324eec3e29fd6a57c2c9_1aba12964286db2a = function (arg0, arg1) {
  try {
    var ret = (0, _inline54.__cargo_web_snippet_2908dbb08792df5e699e324eec3e29fd6a57c2c9)(takeObject(arg0), arg1);

    _assertBoolean(ret);

    return ret;
  } catch (e) {
    logError(e);
  }
};

__exports.__wbindgen_throw = function (arg0, arg1) {
  throw new Error(getStringFromWasm0(arg0, arg1));
};

__exports.__wbindgen_rethrow = function (arg0) {
  throw takeObject(arg0);
};

__exports.__wbindgen_memory = function () {
  var ret = wasm.memory;
  return addHeapObject(ret);
};

__exports.__wbindgen_function_table = function () {
  var ret = wasm.__wbindgen_export_0;
  return addHeapObject(ret);
};

__exports.__wbindgen_closure_wrapper12276 = function (arg0, arg1, arg2) {
  try {
    const state = {
      a: arg0,
      b: arg1,
      cnt: 1
    };

    const real = arg0 => {
      state.cnt++;

      try {
        return __wbg_adapter_18(state.a, state.b, arg0);
      } finally {
        if (--state.cnt === 0) {
          wasm.__wbindgen_export_0.get(305)(state.a, state.b);

          state.a = 0;
        }
      }
    };

    real.original = state;
    var ret = real;
    return addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbindgen_closure_wrapper12274 = function (arg0, arg1, arg2) {
  try {
    const state = {
      a: arg0,
      b: arg1,
      cnt: 1
    };

    const real = (arg0, arg1) => {
      state.cnt++;

      try {
        return __wbg_adapter_21(state.a, state.b, arg0, arg1);
      } finally {
        if (--state.cnt === 0) {
          wasm.__wbindgen_export_0.get(307)(state.a, state.b);

          state.a = 0;
        }
      }
    };

    real.original = state;
    var ret = real;
    return addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

function init(wasm_path) {
  const fetchPromise = fetch(wasm_path);
  let resultPromise;

  if (typeof WebAssembly.instantiateStreaming === 'function') {
    resultPromise = WebAssembly.instantiateStreaming(fetchPromise, {
      './demo.js': __exports
    });
  } else {
    resultPromise = fetchPromise.then(response => response.arrayBuffer()).then(buffer => WebAssembly.instantiate(buffer, {
      './demo.js': __exports
    }));
  }

  return resultPromise.then(({
    instance
  }) => {
    wasm = init.wasm = instance.exports;
    __exports.wasm = wasm;
    return;
  });
}

;

function init_node(wasm_path) {
  const fs = require('fs');

  return new Promise(function (resolve, reject) {
    fs.readFile(__dirname + wasm_path, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data.buffer);
      }
    });
  }).then(data => WebAssembly.instantiate(data, {
    './demo': __exports
  })).then(({
    instance
  }) => {
    wasm = init.wasm = instance.exports;
    __exports.wasm = wasm;
    return;
  });
}

const wasm_bindgen = Object.assign(false ? init_node : init, __exports);

module.exports = function loadWASMBundle(bundle) {
  return wasm_bindgen(bundle).then(() => __exports);
};
},{"../../pkg/snippets/stdweb-bb142200b065bd55/inline138.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline138.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline139.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline139.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline140.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline140.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline141.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline141.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline142.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline142.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline145.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline145.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline149.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline149.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline150.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline150.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline151.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline151.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline154.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline154.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline174.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline174.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline175.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline175.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline331.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline331.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline333.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline333.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline382.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline382.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline39.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline39.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline40.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline40.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline41.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline41.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline466.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline466.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline467.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline467.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline471.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline471.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline475.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline475.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline477.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline477.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline486.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline486.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline51.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline51.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline559.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline559.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline560.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline560.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline615.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline615.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline616.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline616.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline66.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline66.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline661.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline661.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline665.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline665.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline669.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline669.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline70.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline70.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline700.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline700.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline71.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline71.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline718.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline718.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline760.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline760.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline796.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline796.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline797.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline797.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline798.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline798.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline804.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline804.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline805.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline805.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline81.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline81.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline818.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline818.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline826.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline826.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline831.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline831.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline848.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline848.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline855.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline855.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline87.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline87.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline88.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline88.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline89.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline89.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline91.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline91.js","../../pkg/snippets/stdweb-bb142200b065bd55/inline919.js":"../pkg/snippets/stdweb-bb142200b065bd55/inline919.js","../../pkg/snippets/web_logger-831cf3115fc27a05/inline0.js":"../pkg/snippets/web_logger-831cf3115fc27a05/inline0.js","../../pkg/snippets/web_logger-831cf3115fc27a05/inline1.js":"../pkg/snippets/web_logger-831cf3115fc27a05/inline1.js","../../pkg/snippets/web_logger-831cf3115fc27a05/inline2.js":"../pkg/snippets/web_logger-831cf3115fc27a05/inline2.js","../../pkg/snippets/web_logger-831cf3115fc27a05/inline3.js":"../pkg/snippets/web_logger-831cf3115fc27a05/inline3.js","../../pkg/snippets/web_logger-831cf3115fc27a05/inline4.js":"../pkg/snippets/web_logger-831cf3115fc27a05/inline4.js","../../pkg/snippets/yew-bf06628a6ef3fd19/inline30.js":"../pkg/snippets/yew-bf06628a6ef3fd19/inline30.js","../../pkg/snippets/yew-bf06628a6ef3fd19/inline31.js":"../pkg/snippets/yew-bf06628a6ef3fd19/inline31.js","../../pkg/snippets/yew-bf06628a6ef3fd19/inline32.js":"../pkg/snippets/yew-bf06628a6ef3fd19/inline32.js","../../pkg/snippets/yew-bf06628a6ef3fd19/inline33.js":"../pkg/snippets/yew-bf06628a6ef3fd19/inline33.js","@material/ripple/index":"../node_modules/@material/ripple/index.js","fs":"../node_modules/parcel-bundler/src/builtins/_empty.js"}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("wasm",require("../node_modules/parcel-plugin-wasm.rs/wasm-loader.js"));b.load([["demo_bg.92c2f61b.wasm","../pkg/demo_bg.wasm"]]).then(function(){require("index.ts");});
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/static.77de5100.js.map