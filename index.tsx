import React from 'react';
import './assets/css/index.css'
import './assets/libs/color-picker/color-picker.min.js'
import './assets/libs/color-picker/color-picker.min.css'
import './assets/js/components.js'
import './builder.config.js'
import './assets/js/script.js'

import './assets/js/highlight.min.js'
import './assets/js/twemoji.min.js'
import './assets/libs/codemirror/codemirror.min.js'
import './assets/libs/codemirror/codemirror.min.css'
import './assets/libs/codemirror/mode/javascript/javascript.min.js'
import './assets/libs/codemirror/theme/material-darker.min.css'
import './assets/libs/codemirror/addon/scroll/simplescrollbars.min.js'
import './assets/libs/codemirror/addon/scroll/simplescrollbars.min.css'
import './assets/libs/codemirror/addon/edit/matchbrackets.min.js'
import './assets/libs/codemirror/addon/fold/brace-fold.min.js'
import './assets/libs/codemirror/addon/fold/foldgutter.min.css'
import './assets/libs/codemirror/addon/fold/foldgutter.min.js'
import './assets/libs/codemirror/addon/fold/foldcode.min.js'
import './assets/libs/codemirror/addon/lint/json-lint.min.js'
import './assets/js/jsonlint.js'
import './assets/libs/codemirror/addon/lint/lint.min.css'
import './assets/libs/codemirror/addon/lint/lint.min.js'

export default function Container() {
    return (
      <div className="gui emptyEmbed">
        <div className="main">
            <section className="side1 noDisplay">
                <div className="chooser needed">
                    <div className="back"></div>
                    <div className="gui opt">
                        <p>GUI</p>
                    </div>
                    <div className="json opt">
                        <p>JSON</p>
                    </div>
                    <div className="top-btn clear">
                        <svg title="clear everything" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000">
                            <g>
                                <path d="M740.4,401.4c-46-25.4-92.5-49.9-139.1-74.2c-36.3-18.9-73.3-19.2-110-0.9c-22,11-38.8,27.5-50.4,49.9c116.5,62,232.2,123.6,348.7,185.6c2.2-5.1,4.4-9.3,6-13.7C816.7,491.3,794.5,431.2,740.4,401.4z" style={{ fill: "#fff" }}></path>
                                <path d="M875.6,35.1c-9.2-12.8-21.9-20.4-37.2-23.8c-16.7-3.7-26.1,0.2-35,14.3c-53,84.6-106,169.2-159,253.8c-1.7,2.7-3.2,5.4-4.8,8.1c1,1.1,1.5,2,2.3,2.4c36.2,19.3,72.4,38.6,109.1,58.2c1.3-2.1,2-3.1,2.6-4.2c41.6-93.9,83.1-187.8,124.8-281.6C882.7,52.3,881.7,43.5,875.6,35.1z" style={{ fill: "#fff" }}></path>
                                <path d="M754.3,597.7c7.1-18.1-1.8-38.5-19.9-45.6c-18-7.2-38.5,1.7-45.6,19.8c-3.7,9.4-80.7,208.2-18.2,347.6c-29.6-0.3-76.3-7.1-141.9-31.8c-12.2-38-20.9-97.3,5.7-166.9c0,0-63.7,72.8-74.3,137.5c-13.7-6.6-28-13.8-43-21.8c-15-8.1-28.9-16-42-23.8c48.1-44.6,73.5-137.9,73.5-137.9c-43.3,60.6-97.5,86.2-135.9,97c-57.1-41.1-88.6-76.3-105.1-100.6c150.8-25,273.9-199.1,279.7-207.4c11.1-15.9,7.2-37.9-8.7-48.9c-15.9-11.2-37.8-7.2-49,8.7c-1.4,1.9-137.8,193.7-271.7,179.5c-10.4-1.1-21,2.5-28.6,10c-7.5,7.5-11.3,17.9-10.2,28.5c1.3,12.4,19.5,125.3,264.8,256.9C522.1,972.6,615.5,990,672.6,990c44.3,0,66.9-10.4,71.7-13c9.4-4.9,16-13.8,18.1-24.3c2.1-10.4-0.7-21.2-7.5-29.4C668.7,819.5,753.5,599.9,754.3,597.7z" style={{ fill: "#fff" }}></path>
                            </g>
                        </svg>
                    </div>
                    <div className="top-btn copy">
                        <svg version="1.1" x="0px" y="0px" viewBox="0 0 512 512" title="Copy JSON data">
                            <g>
                                <path fill="currentColor" d="M437.781,36.885C415.688,13.395,384.888,0.052,352.64,0H288c-60.623,0.095-111.219,46.301-116.8,106.667H160   C95.228,106.737,42.737,159.228,42.667,224v170.667C42.737,459.439,95.228,511.929,160,512h85.333   c64.772-0.071,117.263-52.561,117.333-117.333v-11.2c60.37-5.572,106.582-56.173,106.667-116.8V116.693   C469.376,87.041,458.089,58.492,437.781,36.885z M298.667,394.667c0,29.455-23.878,53.333-53.333,53.333H160   c-29.455,0-53.333-23.878-53.333-53.333V224c0-29.455,23.878-53.333,53.333-53.333h10.667v96   C170.737,331.439,223.228,383.929,288,384h10.667V394.667z M405.333,266.667C405.333,296.122,381.455,320,352,320h-64   c-29.455,0-53.333-23.878-53.333-53.333V117.333C234.667,87.878,258.545,64,288,64h53.333v21.333   C341.333,108.897,360.436,128,384,128h21.333V266.667z"></path>
                            </g>
                        </svg>
                        <svg fill="currentColor" viewBox="0 0 16 16" className="mark hidden">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                        </svg>
                    </div>
                    <div className="pickerToggle">
                        <svg version="1.1" x="0px" y="0px" viewBox="0 0 512 512">
                            <path style={{ fill: "#D8D8DA" }} d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z   M256,336.842c-44.648,0-80.842-36.194-80.842-80.842s36.194-80.842,80.842-80.842s80.842,36.194,80.842,80.842  S300.648,336.842,256,336.842z"></path>
                            <path style={{ fill: "#D4B6E6" }} d="M282.947,188.632h220.076C485.09,122.726,441.507,67.394,383.64,34.044L229.053,188.632H282.947z"></path>
                            <path style={{ fill: "#EBAFD1" }} d="M229.053,188.632L383.639,34.044C346.068,12.39,302.482,0,256,0c-23.319,0-45.899,3.135-67.368,8.978  v220.075L229.053,188.632z"></path>
                            <path style={{ fill: "#E07188" }} d="M188.632,229.053V8.978C122.726,26.91,67.394,70.493,34.045,128.36l154.586,154.588V229.053z"></path>
                            <g>
                                <polygon style={{ fill: "#D8D8DA" }} points="188.632,229.053 229.053,188.633 282.947,188.633 282.947,188.632 229.053,188.632  "></polygon>
                                <polygon style={{ fill: "#D8D8DA" }} points="229.053,323.367 188.632,282.947 229.053,323.368 282.947,323.368 323.368,282.947    282.947,323.367  "></polygon>
                            </g>
                            <path style={{ fill: "#B4D8F1" }} d="M503.024,188.632H282.947v0.001h0.958l39.463,40.42L477.955,383.64  C499.611,346.068,512,302.482,512,256C512,232.681,508.865,210.099,503.024,188.632z"></path>
                            <path style={{ fill: "#ACFFF4" }} d="M323.368,282.947v220.075c65.905-17.932,121.238-61.517,154.586-119.382L323.368,229.053V282.947z"></path>
                            <path style={{ fill: "#95D5A7" }} d="M282.947,323.368L128.361,477.956C165.932,499.61,209.518,512,256,512  c23.319,0,45.899-3.135,67.368-8.977V282.947L282.947,323.368z"></path>
                            <path style={{ fill: "#F8E99B" }} d="M229.053,323.368H8.976C26.91,389.274,70.493,444.606,128.36,477.956l154.588-154.588H229.053z"></path>
                            <path style={{ fill: "#EFC27B" }} d="M188.632,282.947L34.045,128.36C12.389,165.932,0,209.518,0,256c0,23.319,3.135,45.901,8.976,67.368  h220.076L188.632,282.947z"></path>
                            <polygon style={{ fill: "#D8D8DA" }} points="283.905,188.633 282.947,188.633 323.368,229.053 "></polygon>
                            <path style={{ fill: "#B681D5" }} d="M503.024,188.632C485.09,122.726,441.507,67.394,383.64,34.044L256,161.684v26.947h26.947H503.024z"></path>
                            <path style={{ fill: "#E592BF" }} d="M383.639,34.044C346.068,12.39,302.482,0,256,0v161.684L383.639,34.044z"></path>
                            <path style={{ fill: "#80CB93" }} d="M256,350.316V512c23.319,0,45.899-3.135,67.368-8.977V282.947l-40.421,40.421L256,350.316z"></path>
                            <polygon style={{ fill: "#F6E27D" }} points="282.947,323.368 256,323.368 256,350.316 "></polygon>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                        </svg>
                    </div>
                    <div className="top-btn menu">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                        <div className="box">
                            <div className="item normal dataLink">
                                <div className="icon">
                                    <svg version="1.1" x="0" y="0" viewBox="0 0 24 24" height="16" width="16">
                                        <g>
                                            <path d="m17.47 11.293a1 1 0 1 0 1.414 1.414l1.544-1.544a5.368 5.368 0 0 0 -7.591-7.591l-1.544 1.544a1 1 0 1 0 1.414 1.414l1.544-1.544a3.368 3.368 0 1 1 4.763 4.763z" fill="#ffffff"></path>
                                            <path d="m6.53 12.707a1 1 0 1 0 -1.414-1.414l-1.544 1.544a5.368 5.368 0 0 0 7.591 7.591l1.544-1.544a1 1 0 0 0 -1.414-1.414l-1.544 1.544a3.368 3.368 0 0 1 -4.763-4.763z" fill="#ffffff"></path>
                                            <path d="m8.205 15.8a1 1 0 0 0 1.414 0l6.181-6.181a1 1 0 1 0 -1.414-1.414l-6.181 6.176a1 1 0 0 0 0 1.419z" fill="#ffffff"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div>Get URL with data link</div>
                            </div>
                            <div className="item normal download">
                                <div className="icon">
                                    <svg width="16" height="16" fill="currentColor" className="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                                        <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                                      </svg>
                                </div>
                                <div>Download as JSON file</div>
                            </div>
                            <div className="vs no-frame"></div>
                            <div className="item normal reverse">
                                <div className="icon">
                                    <svg version="1.1" width="16" height="16" x="0" y="0" viewBox="0 0 20 20">
                                        <g>
                                            <g fill="#2b2a3d">
                                                <path d="m14.6 8.6 1.4 1.4 4-4-4-4-1.4 1.4 1.6 1.6h-16.2v2h16.2z" fill="#ffffff"></path>
                                                <path d="m5.4 11.4-1.4-1.4-4 4 4 4 1.4-1.4-1.6-1.6h16.2v-2h-16.2z" fill="#ffffff"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div>Reverse editor and preview</div>
                            </div>
                            <div className="item normal noUser">
                                <div className="icon">
                                    <svg width="16" height="16" fill="currentColor" className="bi bi-person-x-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"></path>
                                    </svg>
                                </div>
                                <div>Hide username and avatar</div>
                            </div>
                            <div className="item normal multi">
                                <div className="icon">
                                    <svg version="1.1" x="0" y="0" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" width="16" height="16">
                                        <g>
                                            <g fill="rgb(0,0,0)">
                                                <path d="m423.414 476.379h-335.4485c-29.2016 0-52.9655-23.764-52.9655-52.965v-194.207c0-29.202 23.7639-52.966 52.9655-52.966h335.4485c29.201 0 52.965 23.764 52.965 52.966v194.207c0 29.201-23.764 52.965-52.965 52.965zm-335.4485-264.827c-9.728 0-17.6552 7.927-17.6552 17.655v194.207c0 9.728 7.9272 17.655 17.6552 17.655h335.4485c9.728 0 17.655-7.927 17.655-17.655v-194.207c0-9.728-7.927-17.655-17.655-17.655z" fill="#ffffff" data-original="#000000"></path>
                                                <path d="m123.276 35h264.827c4.683 0 9.173 1.8601 12.484 5.1711s5.172 7.8016 5.172 12.4841c0 4.6824-1.861 9.1731-5.172 12.4841-3.311 3.3109-7.801 5.171-12.484 5.171h-264.827c-4.683 0-9.173-1.8601-12.484-5.171-3.311-3.311-5.171-7.8017-5.171-12.4841 0-4.6825 1.86-9.1731 5.171-12.4841s7.801-5.1711 12.484-5.1711z" fill="#ffffff"></path>
                                                <path d="m87.9652 105.621h335.4488c4.682 0 9.173 1.86 12.484 5.171s5.171 7.802 5.171 12.484c0 4.683-1.86 9.173-5.171 12.484s-7.802 5.171-12.484 5.171h-335.4488c-4.6824 0-9.1731-1.86-12.4841-5.171-3.3109-3.311-5.171-7.801-5.171-12.484 0-4.682 1.8601-9.173 5.171-12.484 3.311-3.311 7.8017-5.171 12.4841-5.171z" fill="#ffffff"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div>Multi-embeds</div>
                            </div>
                            <div className="vs no-frame"></div>
                            <div className="item normal auto-params no-frame">
                                <input id="auto" name="auto" autoComplete="off" type="checkbox" />
                                <svg version="1.1" x="0" y="0" viewBox="0 0 512 512" width="16" height="16" fill="currentColor" style={{ display: "none" }}>
                                    <g>
                                        <path d="M200,24a24,24,0,1,1-24,24A24,24,0,0,1,200,24ZM32,192a24,24,0,1,0,24-24A24,24,0,0,0,32,192Zm53-91a24,24,0,1,0,24-24A24,24,0,0,0,85,101Zm354.039,7.273A237.668,237.668,0,0,0,315.461,24.881a24,24,0,1,0-12.883,46.238,189.368,189.368,0,0,1,98.448,66.463A185.963,185.963,0,0,1,440,252.116C440,355.716,355.629,440,251.922,440a186.451,186.451,0,0,1-114.189-38.577,188.962,188.962,0,0,1-36.191-36.548L88,361.865v59.956a236.16,236.16,0,0,0,330.847-2.9,235.762,235.762,0,0,0,20.192-310.646ZM72,456V341.919l114.794,25.51a24,24,0,1,0,10.412-46.858l-144-32A24,24,0,0,0,24,312V456a24,24,0,0,0,48,0Z"></path>
                                    </g>
                                </svg>
                                <div>Auto-update URL options</div>
                            </div>
                            <div className="item normal auto no-frame">
                                <input type="checkbox" id="auto" name="auto" autoComplete="off" className="hidden" />
                                {/* <!-- <div className="icon">
                                    <svg version="1.1" x="0" y="0" viewBox="0 0 48 48" width="16" height="16">
                                        <g>
                                            <g>
                                                <path d="m40.26 7.74a23 23 0 0 0 -29.26-2.74h.37a2 2 0 0 1 1.63.55c.9.92.53 2 .4 3.13a18.61 18.61 0 0 1 25.85 26l-1.34-1.34c-.2 1.74-.66 6-.77 7l7-.77-1.72-1.72a23 23 0 0 0 -2.16-30.11z" fill="#ffffff"></path>
                                                <path d="m37.17 42.26a2 2 0 0 1 -2-2.22l.14-1.26a18.61 18.61 0 0 1 -25.93-26.3l1.45 1.45c.3-2.64-.05.5.78-7l-7 .78 1.66 1.65a23 23 0 0 0 31.81 32.81 6.29 6.29 0 0 1 -.91.09z" fill="#ffffff"></path>
                                                <path d="m28 18h4l-4-4z" fill="#ffffff"></path>
                                                <path d="m26 13h-9a2 2 0 0 0 -2 2v18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2c0-14.55.08-13-.18-13h-5.82a1 1 0 0 1 -1-1c0-6.35 0-5.83 0-6zm-1 18h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm0-4h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm0-4h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z" fill="#ffffff"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div> --> */}
                                <div>Auto-update data link in URL</div>
                            </div>
                            <div className="vs no-frame"></div>
                            <div className="item section toggle">
                                <div className="inner">
                                    <div className="title">Toggle on or off</div>
                                    <div className="toggles">
                                        <div className="item pointer editor">
                                            <input autoComplete="off" type="checkbox" />
                                            <span>Editor</span>
                                        </div>
                                        <div className="item pointer preview">
                                            <input autoComplete="off" type="checkbox" />
                                            <span>Preview</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item section bottom">
                                <div className="inner more">
                                    <div className="title">More</div>
                                    <a className="source" target="_blank" href="https://github.com/Glitchii/embedbuilder/">Source Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top item">
                    <div className="gui">
                        <div className="item content">
                            <p className="ttle">Message content</p>
                        </div>
                        <div className="edit">
                            <textarea className="editContent" placeholder="Message content" maxLength="2000" autoComplete="off"></textarea>
                        </div>
                        <div className="item guiEmbedName ">
                            <span className="text">Embed 1</span>
                            <span className="icon">
                                <svg version="1.1" x="0" y="0" viewBox="0 0 24 24" width="16" height="16">
                                    <g>
                                        <g>
                                            <path d="m7 7v12c0 .5522847.44771525 1 1 1h8c.5522847 0 1-.4477153 1-1v-12zm-1-2h12c.5522847 0 1 .44771525 1 1v13c0 1.6568542-1.3431458 3-3 3h-8c-1.65685425 0-3-1.3431458-3-3v-13c0-.55228475.44771525-1 1-1z" fill="#ffffff"></path>
                                            <path d="m4 7c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1h16c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1z" fill="#ffffff"></path>
                                            <path d="m10 4c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1h4c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1z" fill="#ffffff"></path>
                                            <path d="m9 10c0-.55228475.44771525-1 1-1 .5522847 0 1 .44771525 1 1v6c0 .5522847-.4477153 1-1 1-.55228475 0-1-.4477153-1-1z" fill="#ffffff"></path>
                                            <path d="m13 10c0-.55228475.4477153-1 1-1s1 .44771525 1 1v6c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1z" fill="#ffffff"></path>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </div>
                        <div className="guiEmbed">
                            <div className="item author rows2 active">
                                <p className="ttle">Author</p>
                            </div>
                            <div className="edit">
                                <div className="linkName">
                                    <div className="editIcon">
                                        <span className="imgParent"></span>
                                        <input className="editAuthorLink" type="text" placeholder="Icon URL" autoComplete="off" />
                                    </div>
                                    <div className="editName">
                                        <input className="editAuthorName" type="text" maxLength="256" placeholder="Author name" autoComplete="off" />
                                    </div>
                                </div>
                                <div className="browse">
                                    <svg version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 64 64">
                                        <g>
                                            <path d="m23.414 21.414 6.586-6.586v29.172c0 1.104.896 2 2 2s2-.896 2-2v-29.172l6.586 6.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-10-10c-.78-.781-2.048-.781-2.828 0l-10 10c-.781.781-.781 2.047 0 2.828.78.781 2.048.781 2.828 0z" fill="#ffffff" data-original="#000000"></path>
                                            <path d="m50 40c-1.104 0-2 .896-2 2v8c0 1.103-.897 2-2 2h-28c-1.103 0-2-.897-2-2v-8c0-1.104-.896-2-2-2s-2 .896-2 2v8c0 3.309 2.691 6 6 6h28c3.309 0 6-2.691 6-6v-8c0-1.104-.896-2-2-2z" fill="#ffffff" data-original="#000000"></path>
                                        </g>
                                    </svg>
                                    <svg version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0">
                                        <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
                                            <animateTransform attributeName="transform" dur="1s" type="translate" values="0 15 ; 0 -15; 0 15" repeatCount="indefinite" begin="0.1"></animateTransform>
                                        </circle>
                                        <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
                                            <animateTransform attributeName="transform" dur="1s" type="translate" values="0 10 ; 0 -10; 0 10" repeatCount="indefinite" begin="0.2"></animateTransform>
                                        </circle>
                                        <circle fill="#fff" stroke="none" cx="54" cy="50" r="6">
                                            <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3"></animateTransform>
                                        </circle>
                                    </svg>
                                    <p></p>
                                </div>
                            </div>
                            <div className="item title inlineField">
                                <p className="ttle">Title</p>
                                <input className="editTitle" type="text" placeholder="Title" autoComplete="off" maxLength="256" />
                            </div>
                            <div className="item description active">
                                <p className="ttle">Description</p>
                            </div>
                            <div className="edit">
                                <textarea className="editDescription" placeholder="Embed description" maxLength="2048" autoComplete="off"></textarea>
                            </div>
                            <div className="item fields">
                                <p className="ttle">Fields</p>
                            </div>
                            <div className="edit">
                                <div className="fields">
                                    <div className="field">
                                        <div className="fieldNumber"></div>
                                        <div className="fieldInner">
                                            <div className="designerFieldName">
                                                <input type="text" placeholder="Field name" defaultValue="Field name" autoComplete="off" maxLength="256" />
                                            </div>
                                            <div className="designerFieldValue">
                                                <textarea placeholder="Field value" autoComplete="off" maxLength="1024" defaultValue="Field value" />
                                            </div>
                                        </div>
                                        <div className="inlineCheck">
                                            <label>
                                                <input type="checkbox" autoComplete="off" />
                                                <span>Inline</span>
                                            </label>
                                        </div>
                                        <div className="removeBtn">
                                            <svg version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 329.26933 329">
                                                <g>
                                                    <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" fill="#ffffff" data-original="#000000"></path>
                                                </g>
                                            </svg>
                                            <span>Remove</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="addField">
                                    <p>New Field</p>
                                    <svg version="1.1" x="0" y="0" viewBox="0 0 477.867 477.867">
                                        <g>
                                            <g>
                                                <g>
                                                    <path d="M392.533,0h-307.2C38.228,0.056,0.056,38.228,0,85.333v307.2c0.056,47.105,38.228,85.277,85.333,85.333h307.2    c47.105-0.056,85.277-38.228,85.333-85.333v-307.2C477.81,38.228,439.638,0.056,392.533,0z M443.733,392.533    c0,28.277-22.923,51.2-51.2,51.2h-307.2c-28.277,0-51.2-22.923-51.2-51.2v-307.2c0-28.277,22.923-51.2,51.2-51.2h307.2    c28.277,0,51.2,22.923,51.2,51.2V392.533z" fill="#ffffff" data-original="#000000"></path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path d="M324.267,221.867H256V153.6c0-9.426-7.641-17.067-17.067-17.067s-17.067,7.641-17.067,17.067v68.267H153.6    c-9.426,0-17.067,7.641-17.067,17.067S144.174,256,153.6,256h68.267v68.267c0,9.426,7.641,17.067,17.067,17.067    S256,333.692,256,324.267V256h68.267c9.426,0,17.067-7.641,17.067-17.067S333.692,221.867,324.267,221.867z" fill="#ffffff" data-original="#000000"></path>
                                                </g>
                                            </g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="item thumbnail largeImg">
                                <p className="ttle">Thumbnail</p>
                            </div>
                            <div className="edit">
                                <div className="linkName">
                                    <div className="editIcon">
                                        <span className="imgParent"></span>
                                        <div className="txtCol">
                                            <input className="editThumbnailLink" type="text" placeholder="Thumbnail URL" autoComplete="off" />
                                            <div className="browse">
                                                <svg version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 64 64">
                                                    <g>
                                                        <path d="m23.414 21.414 6.586-6.586v29.172c0 1.104.896 2 2 2s2-.896 2-2v-29.172l6.586 6.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-10-10c-.78-.781-2.048-.781-2.828 0l-10 10c-.781.781-.781 2.047 0 2.828.78.781 2.048.781 2.828 0z" fill="#ffffff" data-original="#000000"></path>
                                                        <path d="m50 40c-1.104 0-2 .896-2 2v8c0 1.103-.897 2-2 2h-28c-1.103 0-2-.897-2-2v-8c0-1.104-.896-2-2-2s-2 .896-2 2v8c0 3.309 2.691 6 6 6h28c3.309 0 6-2.691 6-6v-8c0-1.104-.896-2-2-2z" fill="#ffffff" data-original="#000000"></path>
                                                    </g>
                                                </svg>
                                                <svg version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0">
                                                    <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
                                                        <animateTransform attributeName="transform" dur="1s" type="translate" values="0 15 ; 0 -15; 0 15" repeatCount="indefinite" begin="0.1"></animateTransform>
                                                    </circle>
                                                    <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
                                                        <animateTransform attributeName="transform" dur="1s" type="translate" values="0 10 ; 0 -10; 0 10" repeatCount="indefinite" begin="0.2"></animateTransform>
                                                    </circle>
                                                    <circle fill="#fff" stroke="none" cx="54" cy="50" r="6">
                                                        <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3"></animateTransform>
                                                    </circle>
                                                </svg>
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item image largeImg">
                                <p className="ttle">Image</p>
                            </div>
                            <div className="edit">
                                <div className="linkName">
                                    <div className="editIcon">
                                        <span className="imgParent"></span>
                                        <div className="txtCol">
                                            <input className="editImageLink" type="text" placeholder="Image URL" autoComplete="off" />
                                            <div className="browse">
                                                <svg version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 64 64">
                                                    <g>
                                                        <path d="m23.414 21.414 6.586-6.586v29.172c0 1.104.896 2 2 2s2-.896 2-2v-29.172l6.586 6.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-10-10c-.78-.781-2.048-.781-2.828 0l-10 10c-.781.781-.781 2.047 0 2.828.78.781 2.048.781 2.828 0z" fill="#ffffff" data-original="#000000"></path>
                                                        <path d="m50 40c-1.104 0-2 .896-2 2v8c0 1.103-.897 2-2 2h-28c-1.103 0-2-.897-2-2v-8c0-1.104-.896-2-2-2s-2 .896-2 2v8c0 3.309 2.691 6 6 6h28c3.309 0 6-2.691 6-6v-8c0-1.104-.896-2-2-2z" fill="#ffffff" data-original="#000000"></path>
                                                    </g>
                                                </svg>
                                                <svg version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0">
                                                    <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
                                                        <animateTransform attributeName="transform" dur="1s" type="translate" values="0 15 ; 0 -15; 0 15" repeatCount="indefinite" begin="0.1"></animateTransform>
                                                    </circle>
                                                    <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
                                                        <animateTransform attributeName="transform" dur="1s" type="translate" values="0 10 ; 0 -10; 0 10" repeatCount="indefinite" begin="0.2"></animateTransform>
                                                    </circle>
                                                    <circle fill="#fff" stroke="none" cx="54" cy="50" r="6">
                                                        <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3"></animateTransform>
                                                    </circle>
                                                </svg>
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item footer rows2">
                                <p className="ttle">Footer</p>
                            </div>
                            <div className="edit">
                                <div className="linkName">
                                    <div className="editIcon">
                                        <span className="imgParent"></span>
                                        <input className="editFooterLink" type="text" placeholder="Icon URL" autoComplete="off" />
                                    </div>
                                    <div className="editName">
                                        <input className="editFooterText" type="text" maxLength="2048" defaultValue="Footer text" placeholder="Footer text" autoComplete="off" />
                                    </div>
                                </div>
                                <div className="browse">
                                    <svg version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 64 64">
                                        <g>
                                            <path d="m23.414 21.414 6.586-6.586v29.172c0 1.104.896 2 2 2s2-.896 2-2v-29.172l6.586 6.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-10-10c-.78-.781-2.048-.781-2.828 0l-10 10c-.781.781-.781 2.047 0 2.828.78.781 2.048.781 2.828 0z" fill="#ffffff" data-original="#000000"></path>
                                            <path d="m50 40c-1.104 0-2 .896-2 2v8c0 1.103-.897 2-2 2h-28c-1.103 0-2-.897-2-2v-8c0-1.104-.896-2-2-2s-2 .896-2 2v8c0 3.309 2.691 6 6 6h28c3.309 0 6-2.691 6-6v-8c0-1.104-.896-2-2-2z" fill="#ffffff" data-original="#000000"></path>
                                        </g>
                                    </svg>
                                    <svg version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0">
                                        <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
                                            <animateTransform attributeName="transform" dur="1s" type="translate" values="0 15 ; 0 -15; 0 15" repeatCount="indefinite" begin="0.1"></animateTransform>
                                        </circle>
                                        <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
                                            <animateTransform attributeName="transform" dur="1s" type="translate" values="0 10 ; 0 -10; 0 10" repeatCount="indefinite" begin="0.2"></animateTransform>
                                        </circle>
                                        <circle fill="#fff" stroke="none" cx="54" cy="50" r="6">
                                            <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3"></animateTransform>
                                        </circle>
                                    </svg>
                                    <p></p>
                                </div>
                                <div className="footerDate">
                                    <svg width="16" height="16" fill="currentColor" className="bi bi-calendar-date" viewBox="0 0 16 16">
                                        <text y="12" x="3"></text>
                                        {/* <!-- <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"></path> --> */}
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
                                    </svg>
                                    <p></p>
                                    <input className="embedFooterTimestamp" type="datetime-local" name="timestamp" id="timestamp" autoComplete="off" />
                                </div>
                            </div>
                        </div>
                        <div className="guiEmbedAdd pointer">
                            <div className="icon">
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"></path>
                                </svg>
                            </div>
                            <div className="text">Add embed</div>
                        </div>
                    </div>
                    <div className="editorHolder"></div>
                </div>
                <div className="bottom item needed">
                    <div className="colors high">
                        <div className="hex">
                            <div>
                               <span>
                                    <span>#</span>
                                    <input placeholder="Hex code" autoComplete="off" />
                               </span>                        
                            </div>
                         </div>
                        <div className="col colLeft">
                            <div className="picker">
                                <svg version="1.1" x="0" y="0" viewBox="0 0 390.954 390.955">
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M377.314,27.704C360.761,0.494,325.283-8.145,298.076,8.41l-52.561,31.977l-3.607-5.932    c-10.484-17.229-32.947-22.7-50.179-12.218C174.5,32.72,169.032,55.184,179.512,72.415l7.162,11.771L60.314,161.652    c-11.612,7.065-30.483,32.364-35.989,39.95c-2.97,4.09-3.191,9.563-0.565,13.881l24.784,40.738    c2.627,4.317,7.591,6.637,12.587,5.88c9.269-1.402,40.41-6.529,52.024-13.596l126.357-77.467l7.161,11.771    c10.481,17.229,32.946,22.7,50.178,12.217c17.229-10.481,22.699-32.946,12.217-50.177l-3.607-5.93l52.561-31.978    C385.229,90.389,393.868,54.912,377.314,27.704z M100.124,227.084l-0.694-59.882l85.469-52.59    c0.715,8.641,3.392,17.25,8.204,25.161c4.812,7.911,11.229,14.245,18.571,18.853L100.124,227.084z" fill="#ffffff"></path>
                                                <path d="M52.666,276.584c-1.823-1.458-4.413-1.459-6.238-0.003C44.745,277.922,5.23,309.82,5.23,343.554    c0,27.909,18.223,47.4,44.314,47.4c26.836,0,46.314-19.936,46.314-47.4C95.859,311.472,54.43,277.995,52.666,276.584z     M55.582,378.402c-0.414,0.104-0.829,0.155-1.237,0.155c-2.231,0-4.266-1.506-4.842-3.769c-0.68-2.672,0.931-5.389,3.6-6.075    c0.915-0.241,20.916-5.754,20.913-25.823c0-2.762,2.237-5,4.999-5.001c2.762,0,5.001,2.238,5.001,4.999    C84.02,365.254,65.417,375.898,55.582,378.402z" fill="#ffffff"></path>
                                            </g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="color" style={{ background: "#41f097" }}></div>
                        </div>
                        <div className="col colRight">
                            <div className="colBack">
                                <svg version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512">
                                    <g>
                                        <g>
                                            <path d="m377 91h-362c-8.291 0-15 6.709-15 15v30c0 8.291 6.709 15 15 15h362c41.353 0 75 33.647 75 75s-33.647 75-75 75h-121v-45c0-5.742-3.281-10.986-8.452-13.491s-11.323-1.846-15.85 1.714l-94.995 75c-3.604 2.842-5.698 7.192-5.698 11.777s2.095 8.936 5.698 11.777l94.995 75c4.554 3.569 10.688 4.222 15.85 1.714 5.171-2.504 8.452-7.749 8.452-13.491v-45h121c74.443 0 135-60.557 135-135s-60.557-135-135-135z" fill="currentColor"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="cTop">
                                <h2><span className="embedText">Embed <span className="pointer"></span></span> Colour</h2>
                                <p className="desc">Pick the embed colour</p>
                            </div>
                            <div className="pallets">
                                <div className="color" style={{ background: "#00bb9c" }}></div>
                                <div className="color" style={{ background: "#00cb74" }}></div>
                                <div className="color" style={{ background: "#0098d9" }}></div>
                                <div className="color" style={{ background: "#a05bb4" }}></div>
                                <div className="color" style={{ background: "#f52565" }}></div>
                                <div className="color" style={{ background: "#f6c42f" }}></div>
                                <div className="color" style={{ background: "#ef7f31" }}></div>
                                <div className="color" style={{ background: "#f24e43" }}></div>
                                <div className="color" style={{ background: "#93a5a6" }}></div>
                                <div className="color" style={{ background: "#5c7d8a" }}></div>
                                <div className="color" style={{ background: "#00806a" }}></div>
                                <div className="color" style={{ background: "#008a4e" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="side2">
                <div className="msgEmbed">
                    <div className="contents">
                        <img src="https://cdn.discordapp.com/embed/avatars/1.png" className="avatar" alt=" " />
                        <h2>
                            <span className="username" role="button">Discord Bot</span>
                            <span className="botTag">
                                <svg aria-label="Verified bot" className="botTagVerified" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2">
                                    <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor"></path>
                                 </svg>                                 
                                <span className="botText">BOT</span>
                            </span>
                            <span className="timeText"></span>
                        </h2>
                    </div>
                    <div className="markup messageContent"></div>
                    <div className="container">
                        <div className="embed markup">
                            <div className="embedGrid">
                                <div className="embedAuthor embedMargin"></div>
                                <div className="embedTitle embedMargin"></div>
                                <div className="embedDescription embedMargin"></div>
                                <div className="embedFields"></div>
                                <div className="imageWrapper clickable embedMedia embedImage">
                                    {/* <img className="img embedImageLink" onLoad={this.nextElementSibling?.style.removeProperty('display')}  /> */}
                                    <div className="spinner-container" style={{ display: "block" }}>
                                        <span className="spinner">
                                            <span className="inner">
                                                <span className="wanderingCubesItem"></span>
                                                <span className="wanderingCubesItem"></span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="imageWrapper clickable embedThumbnail">
                                    {/* <img className="img embedThumbnailLink" onLoad={this.nextElementSibling?.style.removeProperty('display')} /> */}
                                    <div className="spinner-container" style={{ display: "block" }}>
                                        <span className="spinner">
                                            <span className="inner">
                                                <span className="wanderingCubesItem"></span>
                                                <span className="wanderingCubesItem"></span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="embedFooter embedMargin"></div>
                            </div>
                        </div>
                    </div>
                    <div className="emptyTxt">Nothing here</div>
                </div>
                <div className="bottomSide">
                    <div className="notification">There is an error</div>
                </div>
            </section>
        </div>
        <input type="hidden" value></input>
      </div>
    );
  }