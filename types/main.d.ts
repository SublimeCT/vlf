import Vue, { VueConstructor } from 'vue';
import localforage from 'localforage'

// 2. 定制一个文件，设置你想要补充的类型
//    在 types/vue.d.ts 里 Vue 有构造函数类型
declare module 'vue/types/vue' {
    // 3. 声明为 Vue 补充的东西
    interface Vue {
        $vlf: localforage
    }
}
interface VueLocalForageOptions {
}
export declare type VueLocalForagePlugin = {
    install(vue: VueConstructor<Vue>, options?: VueLocalForageOptions | null): void;
};
declare const vlf: VueLocalForagePlugin;
export default vlf;
