(function(global) {
    var map = {
        'app': 'app',
        '@angular': 'node_modules/@angular',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs': 'node_modules/rxjs'
    };

    var packages = {
        'app': {
            main: 'main.js',
            defaultExtensions: 'js'
        },
        'rxjs': {
            defaultExtensions: 'js'
        },
        'angular2-in-memory-web-api': {
            main: 'index.js',
            defaultExtensions: 'js'
        }
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade'
    ];

    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = {
            main: 'index.js',
            defaultExtensions: 'js'
        };
    }

    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {
            main: '/bundles/' + pkgName + '.umd.js',
            defaultExtensions: 'js'
        };
    }

    var setPackageConfig = System.packageWithIndex
        ? packIndex
        : packUmd;

        ngPackageNames.forEach(setPackageConfig);

        var config = {
          map: map,
          packages: packages
        };

        System.config(config)
})(this)
