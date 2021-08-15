import { defineClientAppEnhance } from '@vuepress/client'
import CodeGroup from '@vuepress/theme-default/lib/client/components/global/CodeGroup'
import CodeGroupItem from '@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue'

export default defineClientAppEnhance(({app, router, siteData}) => {
    app.component('CodeGroup', CodeGroup)
    app.component('CodeGroupItem', CodeGroupItem)
})