<template>
    <div class="position-relative overflow-hidden">
        <div class="position-relative" style="display: block">
            <!-- SIDEBAR -->
            <div :class="[activeTheme,'sidebar-container position-sticky float-left dark-bg light-bg']">
                <div class="sidebar-wrapper">
                    <div class="position-relative overflow-hidden">
                        <div class="sidebar-logo-wrap">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 150 400 100" :class="[activeTheme, 'light-fill dark-fill']">
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
                        <div class="sidebar-info-outer z-25">
                            <div :class="[activeTheme, 'position-relative z-50 dark-bg light-bg']">
                                <div @click="toggleSocialNetInfo" :class="[activeTheme, 'sidebar-info-btn pointer']">
                                    <span></span>
                                    <svg id="sidebar-plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" :class="[activeTheme, 'dark-fill light-fill']">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg>
                                </div>
                            </div>
                            <!-- SOCIAL NETWORKS INFO -->
                            <div id="social-net-wrap" class="info-wrapper z-10">
                                <span :class="[activeTheme, 'side-info-font dark-dim-color light-dim-color']">Follow Club House</span>
                                <div :class="[activeTheme, 'line-divider dark-dim-bg light-dim-bg']"></div>
                                <a class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" :class="[activeTheme, 'dark-fill light-fill']">
                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                                    </svg>
                                </a>
                                <a class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" :class="[activeTheme, 'dark-fill light-fill']">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                    </svg>
                                </a>
                                <a class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" :class="[activeTheme, 'dark-fill light-fill']">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                    </svg>
                                </a>
                                <a class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" :class="[activeTheme, 'dark-fill light-fill']">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- MAIN SECTION -->
            <div class="content-container position-relative">
                <!-- JUMBOTRON -->
                <div class="jumbo">
                    <div class="h-100 position-relative z-25">
                        <!-- WELCOME SCREEN -->
                        <div style="width: 100%; height: 100%; padding-top: 140px;">
                            <!-- PAGE TITLE -->
                            <div class="welcome-wrapper d-flex flex-column text-left position-relative" style="height: 100%;">
                                <!-- COLLAPSE NAVIGATION -->
                                <transition name="dropDown" mode="out-in">
                                    <div v-if="toggleNavbar" id="navbarContentCollapse" class="collapse position-absolute">
                                        <ul class="nav-wrapper">
                                            <li class="nav-item text-center">
                                                <a>
                                                    <span :class="[activeTheme, 'navigation-num-font dark-color light-color']">01</span>
                                                    <h6 :class="[activeTheme, 'navigation-font dark-color light-color']">EXPERIENCES</h6>
                                                </a>
                                            </li>
                                            <li class="nav-item text-center active">
                                                <a>
                                                    <span :class="[activeTheme, 'navigation-num-font dark-color light-color']">02</span>
                                                    <h6 :class="[activeTheme, 'navigation-font dark-color light-color']">CLUBHOUSE</h6>
                                                </a>
                                            </li>
                                            <li class="nav-item text-center">
                                                <a>
                                                    <span :class="[activeTheme, 'navigation-num-font dark-color light-color']">03</span>
                                                    <h6 :class="[activeTheme, 'navigation-font dark-color light-color']">OUR COMMUNITY</h6>
                                                </a>
                                            </li>
                                            <li class="nav-item text-center">
                                                <a>
                                                    <span :class="[activeTheme, 'navigation-num-font dark-color light-color']">04</span>
                                                    <h6 :class="[activeTheme, 'navigation-font dark-color light-color']">MEMBERSHIP</h6>
                                                </a>
                                            </li>
                                            <li class="nav-item text-center">
                                                <a>
                                                    <span :class="[activeTheme, 'navigation-num-font dark-color light-color']">05</span>
                                                    <h6 :class="[activeTheme, 'navigation-font dark-color light-color']">APPLY</h6>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </transition>
                                <!-- TITLE & SLIDER -->
                                <div class="text-left front-content position-sticky" v-observer>
                                    <div class="slider">
                                        <transition name="slideLeft" mode="out-in">
                                            <span v-if="showRangeInput" :class="[activeTheme, 'jumbo-subtitle-font dark-color light-color']">{{themeSub.active}}</span>
                                        </transition>
                                        <div :class="[activeTheme, 'slider-wrapper position-relative pointer']">
                                            <transition name="fadeInOut" mode="out-in" @after-leave="setStage">
                                                <input v-if="showRangeInput" id="slider-input-range" @mouseup="checkRange" type="range" min="0" max ="100" v-model="sRange">
                                            </transition>
                                            <div id="range-line" :class="[activeTheme, 'range-line position-absolute dark-dim-bg light-dim-bg']"></div>
                                        </div>
                                        <transition name="slideRight" mode="out-in">
                                            <span v-if="showRangeInput" :class="[activeTheme, 'jumbo-subtitle-dim-font dark-dim-color']">{{themeSub.next}}</span>
                                        </transition>
                                    </div>
                                    <div class="title">
                                        <h1 :class="[activeTheme, 'jumbo-title-font dark-color dark-color light-color']">CLUBHOUSE</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="jumbo-inner-overlay d-flex flex-column position-fixed z-50">
                                <!-- NAVIGATION -->
                                <nav class="navigation">
                                    <div class="collapse-logo float-left sidebar-logo-wrap">
                                        <img src="../static/logo/ClubHouseNYC-Logo.svg" alt="Logo" class="img-res">
                                    </div>
                                    <button @click="toggleNavbar = !toggleNavbar" class="navbar-toggler pointer" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span :class="[activeTheme, 'dark-bg light-bg bg-reverse']"></span>
                                    </button>
                                    <div id="navbarContentNoCollapse" class="no-collapse-content" style="width: 100%; height: 120px;">
                                        <ul class="nav-wrapper">
                                            <li class="nav-item"></li>
                                            <li class="nav-item text-center">
                                                <a>
                                                    <span :class="[activeTheme, 'navigation-num-font dark-color light-color']">01</span>
                                                    <h6 :class="[activeTheme, 'navigation-font dark-color light-color']">EXPERIENCES</h6>
                                                </a>
                                            </li>
                                            <li class="nav-item text-center active">
                                                <a>
                                                    <span :class="[activeTheme, 'navigation-num-font dark-color light-color']">02</span>
                                                    <h6 :class="[activeTheme, 'navigation-font dark-color light-color']">CLUBHOUSE</h6>
                                                </a>
                                            </li>
                                            <li class="nav-item text-center">
                                                <a>
                                                    <span :class="[activeTheme, 'navigation-num-font dark-color light-color']">03</span>
                                                    <h6 :class="[activeTheme, 'navigation-font dark-color light-color']">OUR COMMUNITY</h6>
                                                </a>
                                            </li>
                                            <li class="nav-item text-center">
                                                <a>
                                                    <span :class="[activeTheme, 'navigation-num-font dark-color light-color']">04</span>
                                                    <h6 :class="[activeTheme, 'navigation-font dark-color light-color']">MEMBERSHIP</h6>
                                                </a>
                                            </li>
                                            <li class="nav-item text-center">
                                                <a>
                                                    <span :class="[activeTheme, 'navigation-num-font dark-color light-color']">05</span>
                                                    <h6 :class="[activeTheme, 'navigation-font dark-color light-color']">APPLY</h6>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                <!-- SCROLL MORE -->
                                <div @click="scrollToContent" class="ste text-left pointer">
                                    <p :class="[activeTheme, 'jumbo-stm-font dark-color light-color']">SCROLL TO EXPLORE
                                        <b style="margin-left: 15px;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16" :class="[activeTheme, 'dark-fill light-fill']" style="vertical-align: middle;">
                                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                            </svg>
                                        </b>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- OVERLAY -->
                        <div :class="[activeTheme, 'overlay dark-overlay light-overlay']"></div>
                        <!-- FANCY CAROUSEL -->
                        <div class="fc-wrapper d-flex flex-row z-10">
                            <div v-for="item in fancyCarousel" :key="item.id" :class="[activeTheme, 'fc-item']">
                                <!-- BACKGROUND -->
                                <div class="fc-hidden-layer current-slide-img" :style="{backgroundImage: 'url(' + item.curr + ')', width: item.cw}"></div>
                                <div class="fc-hidden-layer next-slide-img" :style="{backgroundImage: 'url(' + item.next + ')', width: item.nw, opacity: item.nw}"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- CONTENT -->
                <div id="main-wrap" class="article-wrapper position-relative z-50">
                    <div id="hide-content-wrap" class="float-right pointer" style="padding-right: 50px;">
                        <div @click="hideContent" class="sidebar-info-btn pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(9, 14, 15, .45)" viewBox="0 0 16 16" style="transform: rotateZ(45deg);">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                        </div>
                    </div>
                    <article class="d-flex flex-row-mobile mb">
                        <div class="article-enumerate-mobile"><span class="section-nav-num-font">02 /</span><h5 class="section-nav-font">CLUBHOUSE</h5></div>
                        <div class="article-img-wrap overflow-hidden col-3">
                            <img src="../static/images/restaurant.jpg" alt="Clubhouse Restaurant" class="img-res" v-observer>
                        </div>
                        <div class="col-7">
                            <div class="d-flex flex-row">
                                <div class="article-text-p" v-observer>
                                    <div class="article-enumerate"><span class="section-nav-num-font">02 /</span><h5 class="section-nav-font">CLUBHOUSE</h5></div>
                                    <h2 class="section-title-font">WELCOME HOME</h2>
                                    <h3 class="section-p-one">ClubHouse NYC is your house, and my house; our house.</h3>
                                    <p class="section-p-two">From your morning coffee to your afternoon workout to your evening nightcap, our 30,000 square foot clubhouse is your lifestyle hub and  home away from home.</p>
                                    <p class="section-p-two">And it's being built as we speak.</p>
                                    <p class="section-p-two">Explore our vision below.</p>
                                </div>
                                <div class="article-enumerate-h"><span class="section-nav-num-font">02 / </span><h5 class="section-nav-font">CLUBHOUSE</h5></div>
                            </div>
                        </div>
                    </article>
                    <article class="d-flex flex-column">
                        <img src="../static/images/club-building.jpg" alt="3D Model of the Clubhouse" class="img-res" v-observer>
                        <div v-observer>
                            <h3 class="section-subtitle-font">OUR AMENITIES:</h3>
                            <table>
                                <tr>
                                    <th class="th">FIRST FLOOR:</th>
                                    <th class="th">SECOND FLOOR:</th>
                                    <th class="th">THIRD FLOOR:</th>
                                </tr>
                                <tr>
                                    <td>01 / Contemporary Restaurant & Bar</td>
                                    <td>06 / Speakeasy Bar & Performance Venue</td>
                                    <td>10 / Sky Lounge & Outdoor Theatre</td>
                                </tr>
                                <tr>
                                    <td>02 / Private Dining</td>
                                    <td>07 / Korean Karaoke</td>
                                    <td>11 / Open Air Pool Deck & Terrace</td>
                                </tr>
                                <tr>
                                    <td>03 / Common Lounge & Outdoor Patio</td>
                                    <td>08 / Tap Room & Sports Lounge</td>
                                    <td>12 / Rooftop Bar</td>
                                </tr>
                                <tr>
                                    <td>04 / Coffee & Smoothie Bar</td>
                                    <td colspan="2">09/ Yoga Studio</td>
                                </tr>
                                <tr>
                                    <td colspan="3">05 / Fitness Center & Locker Rooms</td>
                                </tr>
                            </table>
                        </div>
                    </article>
                </div>
            </div>
        </div>
        <!-- FOOTER -->
        <div id="footer" class="position-relative z-50">
            <div class="d-flex flex-row align-center" style="width: 100%">
                <div class="footer-logo-wrap">
                    <img src="../static/logo/ClubHouseNYC-Logo.svg" alt="Logo" class="img-res">
                </div>
                <div class="d-flex flex-row justify-end" style="width: 100%;">
                    <div class="d-flex flex-row mrl">
                        <span class="footer-dim-font dark-theme dark-color">Location</span>
                        <div class="line-divider  dark-theme dark-dim-bg"></div>
                        <p class="footer-font dark-theme dark-color">New York City</p>
                    </div>
                    <div class="d-flex flex-row mrl">
                        <span class="footer-dim-font dark-theme dark-color">Get in touch</span>
                        <div class="line-divider  dark-theme dark-dim-bg"></div>
                        <a class="footer-font dark-theme dark-color" href="mailto: info@clubhousenycus.com">info@clubhousenycus.com</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import observer from '../plugins/observer'
import img1 from '../static/images/enter-the-club.jpg'
import img2 from '../static/images/pool-on-a-roof.jpg'

export default {
    name: "Index",
    data () {
        return {
            activeTheme: "dark-theme",
            themeSub: {
                active: "PLAY HARD",
                next: "SPEAK EASY"
            },
            sRange: 0,
            sliderRangeLineEl: "",
            sliderRangeInputEl: "",
            showRangeInput: true,
            toggleSNW: false,
            toggleNavbar: false,
            fancyCarousel: [
                {id: 1, curr: img1, next: img2, cw: "100%", nw: 0},
                {id: 2, curr: img1, next: img2, cw: "100%", nw: 0},
                {id: 3, curr: img1, next: img2, cw: "100%", nw: 0},
                {id: 4, curr: img1, next: img2, cw: "100%", nw: 0},
                {id: 5, curr: img1, next: img2, cw: "100%", nw: 0},
                {id: 6, curr: img1, next: img2, cw: "100%", nw: 0},
                {id: 7, curr: img1, next: img2, cw: "100%", nw: 0}
            ]
        }
    },
    watch: {
      sRange: {
          handler (value) {
              let x = value / 100;
              x = (1 - x) * 60;
              this.sliderRangeLineEl.style.transform = "translateX(" + x + "px)";
              this.fancyCarousel.forEach(function(item) {
                  item.opacity = item.nw = value + "%";
              });
          }
      }
    },
    mounted () {
        this.sliderRangeLineEl = document.querySelector("#range-line");
        this.sliderRangeLineEl.style.transform = "translateX(60px)";
        this.sliderRangeInputEl = document.querySelector("#slider-input-range");
    },
    methods: {
        toggleSocialNetInfo () {
            let socialNetWrapEl = document.querySelector("#social-net-wrap");
            let plus = document.querySelector("#sidebar-plus");
            console.log('plus: ', plus);
            if (!this.toggleSNW) {
                socialNetWrapEl.style.transform = "rotate(-90deg)";
                plus.style.transform = "rotate(-45deg)";
                this.toggleSNW = true;
            } else {
                socialNetWrapEl.style.transform = "rotate(0deg)";
                plus.style.transform = "rotate(0deg)";
                this.toggleSNW = false;
            }
        },
        setStage () {
            this.sRange = 0;
            if (this.activeTheme === "dark-theme")  {
                this.activeTheme = "light-theme";
                this.fancyCarousel.forEach(function (item) {
                    item.curr = img2;
                    item.next = img1;
                    item. nw = 0;
                });
                this.themeSub.active = "SPEAK EASY";
                this.themeSub.next = "PLAY HARD";
            } else {
                this.activeTheme = "dark-theme";
                this.fancyCarousel.forEach(function (item) {
                    item.curr = img1;
                    item.next = img2;
                    item. nw = 0;
                });
                this.themeSub.active = "PLAY HARD";
                this.themeSub.next = "SPEAK EASY";
            }
            this.sliderRangeLineEl.style.transform = "translateX(60px)";
            this.showRangeInput = true;
        },
        checkRange () {
            if (this.sRange === "100") {
                this.showRangeInput = false;
            }
        },
        scrollToContent () {
            window.scrollTo(0, 470);
        },
        hideContent () {
            window.scrollTo(0, 0);
        }
    }
}
</script>
