<template>
    <div class="position-relative screen-container">
        <transition name="fadeInOut" mode="out-in">
            <div v-if="!pageReady" class="position-absolute screen-loader d-flex flex-column align-center justify-center">
                <div class="screen-loader-svg-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 150 400 100" fill="rgb(0, 0, 0)">
                        <g id="Layer_1" data-name="Layer 1">
                            <path class="l-c-1" d="M370.88,221.11a21.06,21.06,0,0,1,21-21.18,20.61,20.61,0,0,1,16.44,8l-5.52,4.2a13.27,13.27,0,0,0-10.74-5.4c-7.86,0-13.8,6.42-13.8,14.34s5.82,14.34,13.8,14.34a13.38,13.38,0,0,0,10.74-5.34l5.52,4.14a20.44,20.44,0,0,1-16.44,8A21.06,21.06,0,0,1,370.88,221.11Z" transform="translate(-370.88 -45.16)"/>
                            <path class="l-l" d="M411.14,198.73h7v43h-7Z" transform="translate(-370.88 -45.16)"/>
                            <path class="l-u-1" d="M449.9,213.73v28h-7v-4.38c-1.44,3.48-5.88,5-8.7,5-7.2,0-11.22-4.8-11.22-13V213.73h7v15.06c0,4.5,2.7,6.78,5.82,6.78s7.14-1.74,7.14-7.2V213.73Z" transform="translate(-370.88 -45.16)"/>
                            <path class="l-b" d="M485.24,227.71c0,8.94-6.42,14.64-13.8,14.64-3.36,0-7.38-1.38-9.3-4.38v3.78h-7v-43h7v18.72c1.92-2.94,5.82-4.32,9.36-4.32C478.88,213.13,485.24,218.71,485.24,227.71Zm-7-.06a7.86,7.86,0,0,0-7.92-8,8.1,8.1,0,1,0,7.92,8Z" transform="translate(-370.88 -45.16)"/>
                            <path class="l-h" d="M520.78,200.41v41.34h-7.32V224.47H496.3v17.28H489V200.41h7.32v17.52h17.16V200.41Z" transform="translate(-370.88 -45.16)"/>
                            <path class="l-o" d="M523.92,227.65c0-8.88,6.9-14.52,14.88-14.52s14.94,5.64,14.94,14.52-7,14.7-14.94,14.7S523.92,236.53,523.92,227.65Zm22.8,0a7.9,7.9,0,1,0-7.92,8.22A7.87,7.87,0,0,0,546.72,227.65Z" transform="translate(-370.88 -45.16)"/>
                            <path class="l-u-2" d="M582.8,213.73v28h-7v-4.38c-1.44,3.48-5.88,5-8.7,5-7.2,0-11.22-4.8-11.22-13V213.73h7v15.06c0,4.5,2.7,6.78,5.82,6.78s7.14-1.74,7.14-7.2V213.73Z" transform="translate(-370.88 -45.16)"/>
                            <path class="l-s" d="M585.16,233h6.54c0,1.92,1.68,3.72,4.62,3.72,2.76,0,4.56-1.26,4.56-3.06,0-1.56-1.2-2.28-3.3-2.76l-3.72-1c-6.3-1.68-7.92-5-7.92-8.58,0-4.38,4.32-8.22,10.44-8.22,5,0,10.62,2.46,10.56,8.76h-6.66c0-2-1.74-3.18-3.72-3.18-2.16,0-3.66,1.2-3.66,2.94,0,1.44,1.38,2.28,3,2.64l4.5,1.2c6.3,1.62,7.44,5.58,7.44,8.16,0,5.7-5.7,8.7-11.4,8.7S585.28,239,585.16,233Z" transform="translate(-370.88 -45.16)"/>
                            <path class="l-e" d="M638.44,230.17H616.78c.78,3.9,3.78,5.88,7.92,5.88a9.33,9.33,0,0,0,7.62-3.48l4.62,3.54c-2.58,4.08-7.5,6.24-12.6,6.24-8.4,0-14.76-5.88-14.76-14.64,0-8.94,6.72-14.58,14.7-14.58s14.34,5.58,14.34,14.34A23.43,23.43,0,0,1,638.44,230.17Zm-6.78-4.86c-.42-3.84-3.36-6.06-7.26-6.06s-6.78,1.8-7.62,6.06Z" transform="translate(-370.88 -45.16)"/>
                            <path class="l-n" d="M693.28,200.41l-8,41.34h-6.66l-11.1-27.84-5.4,27.84h-7.32l8-41.34h6.9L680.56,228l5.4-27.6Z" transform="translate(-370.88 -45.16)"/>
                            <path class="l-y" d="M726.76,200.41,710.8,223v18.78h-7.38V222.91l-15.84-22.5h8.64l10.86,16.08,11-16.08Z" transform="translate(-370.88 -45.16)"/>
                            <path class="l-c-2" d="M719.64,221.11a21.06,21.06,0,0,1,21-21.18,20.61,20.61,0,0,1,16.44,8l-5.52,4.2a13.27,13.27,0,0,0-10.74-5.4c-7.86,0-13.8,6.42-13.8,14.34s5.82,14.34,13.8,14.34a13.38,13.38,0,0,0,10.74-5.34l5.52,4.14a20.44,20.44,0,0,1-16.44,8A21.06,21.06,0,0,1,719.64,221.11Z" transform="translate(-370.88 -45.16)"/>
                        </g>
                    </svg>
                </div>
                <div class="loading-bar-wrap">
                    <span class="loading-bar"></span>
                </div>
            </div>
        </transition>
        <Nuxt />
    </div>
</template>

<script>
export default {
    name: "default",
    data () {
        return {
            pageReady: false,
            loadingPercent: 0,
            loadTime: 0,
            interval: null,

            loadingBarEl: ''
        }
    },
    created () {
        let perfData = window.performance.timing;
        let estimatedTime = Math.abs(perfData.loadEventEnd - perfData.navigationStart);
        this.loadTime = Number((estimatedTime / 1000) % 60) * 100;
        this.doProgress();
    },
    mounted () {
        document.querySelector('body').style.overflowY = "hidden";
        this.loadingBarEl = document.querySelector('.loading-bar');
    },
    watch: {
        loadingPercent (val) {
            if (val >= 100) {
                clearInterval(this.interval);
                setTimeout(() => {
                    document.querySelector('.screen-loader').style.opacity = '0';
                    this.pageReady = true;
                    document.querySelector('body').style.overflowY = "scroll";
                }, 800)
            }
        }
    },
    methods: {
        doProgress () {
            let step = this.loadTime / 100;
            this.interval = setInterval(() => {
                this.loadingPercent++;
                this.loadingBarEl.style.width = this.loadingPercent + "%";
            }, step);
        }
    }
}
</script>
