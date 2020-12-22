import { PluginObject } from 'vue'
import { ComponentOptions, VueConstructor } from 'vue/types/umd'
import JNotice from './JNotice.vue'
import { jnoticeSetup } from './types'

export default {
  install(Vue:VueConstructor, options?:ComponentOptions<Vue>):void {

    let top:HTMLElement[] = [], bottom:HTMLElement[] = [], tleft:HTMLElement[] = [], bleft:HTMLElement[] = [], tright:HTMLElement[] = [], bright:HTMLElement[] = []
    const offset = 8

    const jnoticeDefaultSetup:jnoticeSetup = {
      text: 'This is jnotice!',
      duraiton: 3000,
      position: 'top',
      background: '#ddd',
      color: '#000',
      width: '400px',
      mheight: '50px',
      type: 'info'
    }

    Vue.prototype.$jnotice = function(jnoticeSetup?: jnoticeSetup) {

      jnoticeSetup = typeof jnoticeSetup === 'undefined' ?  jnoticeDefaultSetup : jnoticeSetup

      Object.assign(jnoticeDefaultSetup, jnoticeSetup)

      const vW = document.body.clientWidth

      const root = this.$root
      let ins = (new JNotice({
        propsData: {
          type: jnoticeDefaultSetup.type,
          text: jnoticeDefaultSetup.text
        }
      }) as any) .$mount()
      
      let insEleStyle = (ins.$el as HTMLElement).style

      insEleStyle = root.$el.appendChild(ins.$el).style

      if(jnoticeSetup?.position === 't-left') {
        insEleStyle.cssText = `opacity:0;top:${ offset }px;left:${ offset }px;color:${jnoticeDefaultSetup.color};` +
          `background:${jnoticeDefaultSetup.background};width:${jnoticeDefaultSetup.width};min-height:${jnoticeDefaultSetup.mheight}`
        tleft.push(ins.$el)
        for (let i=tleft.length-1;i>=0;i--) {
          const ele = tleft[i]
          ele.style.transform = `translate(0 ,calc(${100*( tleft.length-1-i )}% + ${offset*( tleft.length-1-i )}px))`
        }
      } else if(jnoticeSetup?.position === 't-right') {
        insEleStyle.cssText = `opacity:0;top:${ offset }px;right:${ offset }px;color:${jnoticeDefaultSetup.color};` + 
          `background:${jnoticeDefaultSetup.background};width:${jnoticeDefaultSetup.width};min-height:${jnoticeDefaultSetup.mheight}`
        tright.push(ins.$el)
        for (let i=tright.length-1;i>=0;i--) {
          const ele = tright[i]
          ele.style.transform = `translate(0 ,calc(${100*( tright.length-1-i )}% + ${offset*( tright.length-1-i )}px))`
        }
      } else if(jnoticeSetup?.position === 'b-left') {
        insEleStyle.cssText = `opacity:0;bottom:${ offset }px;left:${ offset }px;color:${jnoticeDefaultSetup.color};` +
          `background:${jnoticeDefaultSetup.background};width:${jnoticeDefaultSetup.width};min-height:${jnoticeDefaultSetup.mheight}`
        bleft.push(ins.$el)
        for (let i=bleft.length-1;i>=0;i--) {
          const ele = bleft[i]
          ele.style.transform = `translate(0 ,calc(-${100*( bleft.length-1-i )}% - ${offset*( bleft.length-1-i )}px))`
        }
      } else if(jnoticeSetup?.position === 'b-right') {
        insEleStyle.cssText = `opacity:0;bottom:${ offset }px;right:${ offset }px;color:${jnoticeDefaultSetup.color};` + 
          `background:${jnoticeDefaultSetup.background};width:${jnoticeDefaultSetup.width};min-height:${jnoticeDefaultSetup.mheight}`
        bright.push(ins.$el)
        for (let i=bright.length-1;i>=0;i--) {
          const ele = bright[i]
          ele.style.transform = `translate(0 ,calc(-${100*( bright.length-1-i )}% - ${offset*( bright.length-1-i )}px))`
        }
      } else if(jnoticeSetup?.position === 'bottom') {
        insEleStyle.cssText = `opacity:0;bottom:${ offset }px;left:${ vW / 2 }px;transform:translateX(-50%);color:${jnoticeDefaultSetup.color};` + 
          `background:${jnoticeDefaultSetup.background};width:${jnoticeDefaultSetup.width};min-height:${jnoticeDefaultSetup.mheight}`
          bottom.push(ins.$el)
          for (let i=bottom.length-1;i>=0;i--) {
            const ele = bottom[i]
            ele.style.transform = `translate(-50% ,calc(-${100*( bottom.length-1-i )}% - ${offset*( bottom.length-1-i )}px))`
          }
      } else {

        insEleStyle.cssText = `opacity:0;top:${ offset }px;left:${ vW / 2 }px;transform:translateX(-50%);color:${jnoticeDefaultSetup.color};` + 
          `background:${jnoticeDefaultSetup.background};width:${jnoticeDefaultSetup.width};min-height:${jnoticeDefaultSetup.mheight}` 
        top.push(ins.$el)
        for (let i=top.length-1;i>=0;i--) {
          const ele = top[i]
          ele.style.transform = `translate(-50% ,calc(${100*( top.length-1-i )}% + ${offset*( top.length-1-i )}px))`
        }
      }

      setTimeout(() => {
        insEleStyle.opacity = '1'
      }, 0)

      setTimeout(() => {
        root.$el.removeChild(ins.$el)
        ins.$destroy()
        if(jnoticeSetup?.position === 't-left') {
          tleft.splice(tleft.indexOf(ins.$el), 1)
        } else if(jnoticeSetup?.position === 't-right') {
          tright.splice(tright.indexOf(ins.$el), 1)
        } else if(jnoticeSetup?.position === 'b-left') {
          bleft.splice(bleft.indexOf(ins.$el), 1)
        } else if(jnoticeSetup?.position === 'b-right') {
          bright.splice(bright.indexOf(ins.$el), 1)
        } else if(jnoticeSetup?.position === 'bottom') {
          bottom.splice(bottom.indexOf(ins.$el), 1)
        } else {
          top.splice(top.indexOf(ins.$el), 1)
        }
        
      }, jnoticeDefaultSetup.duraiton)
    }
  }
} as PluginObject<void>