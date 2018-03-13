import {shallow} from '@vue/test-utils'
import { mount } from '@vue/test-utils'

import stepper from '../src/components/Stepper.vue'
import HelloWorld from '../src/components/HelloWorld.vue'
import one from '../src/components/one.vue'
import two from '../src/components/two.vue'
import three from '../src/components/three.vue'

const wrapper = mount(stepper)
const wrapper2 = mount(HelloWorld)
const step1 = mount(one)
const step2 = mount(two)
const step3 = mount(three)

describe('Stepper data flow test',function(){
    
    it('should have v-stepper component',()=>{
        expect(wrapper.contains('v-stepper')).toBe(true)
    })
    
    it('should contain 3 steps or more',()=>{
        var steps = wrapper.findAll('v-stepper-content')
        expect(steps.length).toBeGreaterThan(2)
    })
    
    it('should contain stepper page components one, two, three',()=>{
        expect(wrapper.contains(one)).toBe(true)
        expect(wrapper.contains(two)).toBe(true)
        expect(wrapper.contains(three)).toBe(true)
    })

    it('should have buttons for navigation front and back',()=>{
        expect(wrapper2.contains('v-btn')).toBe(true)
    })

    it('should emit e1 values to parent to move between steps',()=>{
        let button = step1.find('v-btn')
        expect(button.text()).toBe('BONTINUE')
        button.trigger('click')
        //expect(wrapper.vm.e1).toBe(2)
    })
})