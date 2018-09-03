import helloAmd from './src/hello-amd.js'
import helloCommonsJS from './src/hello-commonjs.js'
import {hello as helloEs6} from './src/hello-es6.js'

helloAmd('main1')
helloCommonsJS('main2')
helloEs6('main3')
