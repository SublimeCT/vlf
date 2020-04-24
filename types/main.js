import localForage from 'localforage';
const vlf = {
    install(vue) {
        vue.prototype.$vlf = localForage;
        Object.defineProperty(vue, '$vlf', {
            get() {
                return localForage;
            }
        });
    }
};
export default vlf;
//# sourceMappingURL=main.js.map