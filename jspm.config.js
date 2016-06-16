SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "cg/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.11"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "cg": {
      "main": "../index.js",
      "format": "esm",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "css": "github:systemjs/plugin-css@0.1.23",
    "d3": "npm:d3@4.0.0-alpha.44",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha"
  },
  packages: {
    "npm:d3@4.0.0-alpha.44": {
      "map": {
        "d3-ease": "npm:d3-ease@0.7.0",
        "d3-collection": "npm:d3-collection@0.2.0",
        "d3-axis": "npm:d3-axis@0.3.2",
        "d3-timer": "npm:d3-timer@0.4.4",
        "d3-path": "npm:d3-path@0.1.5",
        "d3-interpolate": "npm:d3-interpolate@0.8.0",
        "d3-polygon": "npm:d3-polygon@0.2.1",
        "d3-dispatch": "npm:d3-dispatch@0.4.3",
        "d3-array": "npm:d3-array@0.7.1",
        "d3-format": "npm:d3-format@0.5.1",
        "d3-force": "npm:d3-force@0.6.3",
        "d3-drag": "npm:d3-drag@0.2.1",
        "d3-queue": "npm:d3-queue@2.0.3",
        "d3-shape": "npm:d3-shape@0.6.1",
        "d3-hierarchy": "npm:d3-hierarchy@0.2.3",
        "d3-zoom": "npm:d3-zoom@0.2.2",
        "d3-random": "npm:d3-random@0.2.1",
        "d3-request": "npm:d3-request@0.4.7",
        "d3-dsv": "npm:d3-dsv@0.3.2",
        "d3-transition": "npm:d3-transition@0.2.10",
        "d3-time": "npm:d3-time@0.2.5",
        "d3-selection": "npm:d3-selection@0.7.3",
        "d3-scale": "npm:d3-scale@0.7.2",
        "d3-quadtree": "npm:d3-quadtree@0.7.3",
        "d3-color": "npm:d3-color@0.4.2",
        "d3-voronoi": "npm:d3-voronoi@0.3.3",
        "d3-time-format": "npm:d3-time-format@0.3.2"
      }
    },
    "npm:d3-force@0.6.3": {
      "map": {
        "d3-collection": "npm:d3-collection@0.2.0",
        "d3-timer": "npm:d3-timer@0.4.4",
        "d3-dispatch": "npm:d3-dispatch@0.4.4",
        "d3-quadtree": "npm:d3-quadtree@0.7.3"
      }
    },
    "npm:d3-drag@0.2.1": {
      "map": {
        "d3-dispatch": "npm:d3-dispatch@0.4.4",
        "d3-selection": "npm:d3-selection@0.7.3"
      }
    },
    "npm:d3-shape@0.6.1": {
      "map": {
        "d3-path": "npm:d3-path@0.1.5"
      }
    },
    "npm:d3-zoom@0.2.2": {
      "map": {
        "d3-dispatch": "npm:d3-dispatch@0.4.4",
        "d3-drag": "npm:d3-drag@0.2.2",
        "d3-transition": "npm:d3-transition@0.2.10",
        "d3-interpolate": "npm:d3-interpolate@0.8.3",
        "d3-selection": "npm:d3-selection@0.7.3"
      }
    },
    "npm:d3-axis@0.3.2": {
      "map": {
        "d3-transition": "npm:d3-transition@0.2.10",
        "d3-selection": "npm:d3-selection@0.7.3",
        "d3-scale": "npm:d3-scale@0.7.2"
      }
    },
    "npm:d3-request@0.4.7": {
      "map": {
        "d3-collection": "npm:d3-collection@0.2.0",
        "d3-dispatch": "npm:d3-dispatch@0.4.4",
        "d3-dsv": "npm:d3-dsv@0.3.2",
        "xmlhttprequest": "npm:xmlhttprequest@1.8.0"
      }
    },
    "npm:d3-interpolate@0.8.0": {
      "map": {
        "d3-color": "npm:d3-color@0.4.2"
      }
    },
    "npm:d3-drag@0.2.2": {
      "map": {
        "d3-dispatch": "npm:d3-dispatch@0.4.4",
        "d3-selection": "npm:d3-selection@0.7.3"
      }
    },
    "npm:d3-transition@0.2.10": {
      "map": {
        "d3-dispatch": "npm:d3-dispatch@0.4.4",
        "d3-ease": "npm:d3-ease@0.7.0",
        "d3-interpolate": "npm:d3-interpolate@0.8.3",
        "d3-timer": "npm:d3-timer@0.4.4",
        "d3-color": "npm:d3-color@0.4.2",
        "d3-selection": "npm:d3-selection@0.7.3"
      }
    },
    "npm:d3-scale@0.7.2": {
      "map": {
        "d3-array": "npm:d3-array@0.7.1",
        "d3-collection": "npm:d3-collection@0.2.0",
        "d3-format": "npm:d3-format@0.5.1",
        "d3-color": "npm:d3-color@0.4.2",
        "d3-interpolate": "npm:d3-interpolate@0.8.3",
        "d3-time": "npm:d3-time@0.2.6",
        "d3-time-format": "npm:d3-time-format@0.3.2"
      }
    },
    "npm:d3-time-format@0.3.2": {
      "map": {
        "d3-time": "npm:d3-time@0.2.6"
      }
    },
    "npm:d3-dsv@0.3.2": {
      "map": {
        "rw": "npm:rw@1.3.2"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "npm:buffer@4.6.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "isarray": "npm:isarray@1.0.0",
        "ieee754": "npm:ieee754@1.1.6"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.0"
      }
    },
    "npm:stream-http@2.3.0": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "inherits": "npm:inherits@2.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "readable-stream": "npm:readable-stream@2.1.4"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "npm:readable-stream@2.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:d3-interpolate@0.8.3": {
      "map": {
        "d3-color": "npm:d3-color@0.4.2"
      }
    }
  }
});
