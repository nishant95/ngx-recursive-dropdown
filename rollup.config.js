// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
// import angular from 'rollup-plugin-angular';
// import typescript from 'rollup-plugin-typescript';
// var sass = require('node-sass');
// import { nameLibrary, PATH_SRC, PATH_DIST } from './config-library.js';
// export default {
//     input: PATH_SRC+nameLibrary+'.ts',
//     output: {
//         name: nameLibrary,
//         format: 'umd',
//         file: PATH_DIST+nameLibrary+".umd.js",
//         sourcemap: true
//     },
//     external: [
//         '@angular/core',
//     ],
//     plugins: [
//     angular(
//         {
//             preprocessors:{
//                 template:template => template,
//                 style: scss => {
//                      let css;
//                      if(scss){
//                          css = sass.renderSync({ data: scss }).css.toString();
//                      }else{
//                           css = '';
//                      }
//                      return css;
//                 },
//             }
//         }
//     ),
//     typescript({
//          typescript:require('typescript')
//     }),
//     resolve({
//          module: true,
//          main: true
//     }),
//     commonjs({
//          include: 'node_modules/**',
//     })
//     ],
//     onwarn: warning => {
//          const skip_codes = [
//          'THIS_IS_UNDEFINED',
//          'MISSING_GLOBAL_NAME'
//     ];
//     if (skip_codes.indexOf(warning.code) != -1) return;
//         console.error(warning);
//     }
// };

export default {
    input: 'dist/lib/index.js',
    output:{
        file: 'dist/bundles/ngx-recursive-dropdown.umd.js',
        name: 'ng.NgxRecursiveDropdown',
        globals: {
            '@angular/core': 'ng.core',
            '@angular/common': 'ng.common',
            '@angular/forms': 'ng.forms',
        },
        format: 'umd',
    }
}

// output.format = "es";
// output.file = PATH_DIST+nameLibrary+".esm.js"
