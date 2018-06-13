import 'babel-polyfill';

import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

import {mount} from '@vue/test-utils'
import HelloWorld from '../src/components/HelloWorld.vue'

var users = [{usern:"Fiat", pass:"123"},{usern:"Fiat2", pass:"123"},{usern:"Fiat3", pass:"123"}]

describe('HelloWorld.vue',function(){
    it('clicking submit button, updating boolean',()=>{
        const wrapper = mount(HelloWorld)
        const btn = wrapper.find('#login')
        btn.trigger('click')
        expect(wrapper.vm.done).toBe(true)
        console.log("Successful 😊")
    })
})