import Vue, { VueConstructor } from 'vue'
import localForage from 'localforage'

interface VueLocalForageOptions {}

export type VueLocalForagePlugin = {
    install(vue: VueConstructor<Vue>, options?: VueLocalForageOptions | null): void
}

const vlf: VueLocalForagePlugin = {
    install (vue, options) {
        vue.prototype.$vlf = localForage
        Object.defineProperty(vue, '$vlf', {
            get() {
                return localForage
            }
        })
    }
}

export default vlf
