(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[31],{103:function(t,e,n){"use strict";var o=n(5),i=n.n(o),a=n(108),r=n(109),l=n(77),p=n(101),s=n(8),c=function(t){return"/"+t===s.a?i.a.createElement(p.a,{id:"menu.home"}):i.a.createElement(p.a,{id:"menu.".concat(t)})},d=function(t,e,n){return t.split(e)[0]+e},g=function(t){var e=t.match.path.substr(1),n=e.split("/");return n[n.length-1].indexOf(":")>-1&&(n=n.filter((function(t){return-1===t.indexOf(":")}))),i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},n.map((function(t,o){return i.a.createElement(r.a,{key:o,active:n.length===o+1},n.length!==o+1?i.a.createElement(l.b,{to:"/".concat(d(e,t))},c(t)):c(t))}))))};e.a=function(t){var e=t.heading,n=t.match;return i.a.createElement(i.a.Fragment,null,e&&i.a.createElement("h1",null,i.a.createElement(p.a,{id:e})),i.a.createElement(g,{match:n}))}},107:function(t,e,n){"use strict";var o=n(10),i=n(14),a=n(5),r=n.n(a),l=n(24),p=n.n(l),s=n(98),c=n.n(s),d=n(99),g=p.a.oneOfType([p.a.number,p.a.string]),m={tag:d.t,noGutters:p.a.bool,className:p.a.string,cssModule:p.a.object,form:p.a.bool,xs:g,sm:g,md:g,lg:g,xl:g},h={tag:"div",widths:["xs","sm","md","lg","xl"]},x=function(t){var e=t.className,n=t.cssModule,a=t.noGutters,l=t.tag,p=t.form,s=t.widths,g=Object(i.a)(t,["className","cssModule","noGutters","tag","form","widths"]),m=[];s.forEach((function(e,n){var o=t[e];if(delete g[e],o){var i=!n;m.push(i?"row-cols-"+o:"row-cols-"+e+"-"+o)}}));var h=Object(d.p)(c()(e,a?"no-gutters":null,p?"form-row":"row",m),n);return r.a.createElement(l,Object(o.a)({},g,{className:h}))};x.propTypes=m,x.defaultProps=h,e.a=x},108:function(t,e,n){"use strict";var o=n(10),i=n(14),a=n(5),r=n.n(a),l=n(24),p=n.n(l),s=n(98),c=n.n(s),d=n(99),g={tag:d.t,listTag:d.t,className:p.a.string,listClassName:p.a.string,cssModule:p.a.object,children:p.a.node,"aria-label":p.a.string},m=function(t){var e=t.className,n=t.listClassName,a=t.cssModule,l=t.children,p=t.tag,s=t.listTag,g=t["aria-label"],m=Object(i.a)(t,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),h=Object(d.p)(c()(e),a),x=Object(d.p)(c()("breadcrumb",n),a);return r.a.createElement(p,Object(o.a)({},m,{className:h,"aria-label":g}),r.a.createElement(s,{className:x},l))};m.propTypes=g,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},e.a=m},109:function(t,e,n){"use strict";var o=n(10),i=n(14),a=n(5),r=n.n(a),l=n(24),p=n.n(l),s=n(98),c=n.n(s),d=n(99),g={tag:d.t,active:p.a.bool,className:p.a.string,cssModule:p.a.object},m=function(t){var e=t.className,n=t.cssModule,a=t.active,l=t.tag,p=Object(i.a)(t,["className","cssModule","active","tag"]),s=Object(d.p)(c()(e,!!a&&"active","breadcrumb-item"),n);return r.a.createElement(l,Object(o.a)({},p,{className:s,"aria-current":a?"page":void 0}))};m.propTypes=g,m.defaultProps={tag:"li"},e.a=m},110:function(t,e,n){"use strict";var o=n(10),i=n(14),a=n(5),r=n.n(a),l=n(24),p=n.n(l),s=n(98),c=n.n(s),d=n(99),g={tag:d.t,inverse:p.a.bool,color:p.a.string,body:p.a.bool,outline:p.a.bool,className:p.a.string,cssModule:p.a.object,innerRef:p.a.oneOfType([p.a.object,p.a.string,p.a.func])},m=function(t){var e=t.className,n=t.cssModule,a=t.color,l=t.body,p=t.inverse,s=t.outline,g=t.tag,m=t.innerRef,h=Object(i.a)(t,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),x=Object(d.p)(c()(e,"card",!!p&&"text-white",!!l&&"card-body",!!a&&(s?"border":"bg")+"-"+a),n);return r.a.createElement(g,Object(o.a)({},h,{className:x,ref:m}))};m.propTypes=g,m.defaultProps={tag:"div"},e.a=m},117:function(t,e,n){"use strict";var o=n(10),i=n(14),a=n(5),r=n.n(a),l=n(24),p=n.n(l),s=n(98),c=n.n(s),d=n(99),g={tag:d.t,className:p.a.string,cssModule:p.a.object,innerRef:p.a.oneOfType([p.a.object,p.a.string,p.a.func])},m=function(t){var e=t.className,n=t.cssModule,a=t.innerRef,l=t.tag,p=Object(i.a)(t,["className","cssModule","innerRef","tag"]),s=Object(d.p)(c()(e,"card-body"),n);return r.a.createElement(l,Object(o.a)({},p,{className:s,ref:a}))};m.propTypes=g,m.defaultProps={tag:"div"},e.a=m},387:function(t,e,n){"use strict";n.r(e);var o=n(5),i=n.n(o),a=n(107),r=n(110),l=n(117),p=n(103),s=n(102),c=n(101);e.default=function(t){var e=t.match;return i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,null,i.a.createElement(s.a,{xxs:"12"},i.a.createElement(p.a,{heading:"menu.mailing",match:e}),i.a.createElement(s.b,{className:"mb-5"}))),i.a.createElement(a.a,null,i.a.createElement(s.a,{xxs:"12",className:"mb-4"},i.a.createElement(r.a,{className:"mb-5"},i.a.createElement(l.a,null,i.a.createElement(c.a,{id:"pages.mailing-info"}))),i.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:'\n                    <div leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="height:auto !important;width:100% !important; font-family: Helvetica,Arial,sans-serif !important; margin-bottom: 40px;">\n                    <center>\n                        <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="max-width:600px; background-color:#ffffff;border:1px solid #e4e2e2;border-collapse:separate !important; border-radius:4px;border-spacing:0;color:#242128; margin:0;padding:40px;"\n                            heigth="auto">\n                            <tbody>\n                                <tr>\n                                    <td align="left" valign="center" style="padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;">\n                                        <img src="https://coloredstrategies.com/mailing/gogo.png" />\n                                    </td>\n                                    <td align="right" valign="center" style="padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;">\n                                        <span style="color: #8f8f8f; font-weight: normal; line-height: 2; font-size: 14px;">02.02.2019</span>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td colSpan="2" style="padding-top:10px;border-top:1px solid #e4e2e2">\n                                        <h3 style="color:#303030; font-size:18px; line-height: 1.6; font-weight:500;">Get\n                                            Started</h3>\n                                        <p style="color:#8f8f8f; font-size: 14px; padding-bottom: 20px; line-height: 1.4;">\n                                            Dynamically target high-payoff intellectual capital for customized\n                                            technologies. Objectively integrate emerging core competencies before\n                                            process-centric communities. Dramatically evisculate holistic\n                                            innovation rather than client-centric data.<br/><br/>Progressively\n                                            maintain extensive infomediaries via extensible niches. Dramatically\n                                            disseminate standardized metrics after resource-leveling processes.\n                                        </p>\n                                        <h3 style="color:#303030; font-size:18px; line-height: 1.6; font-weight:500;">Verification\n                                            Code</h3>\n                                        <p style="background-color:#f1f1f1; padding: 8px 15px; border-radius: 50px; display: inline-block; margin-bottom:20px; font-size: 14px;  line-height: 1.4; font-family: Courier New, Courier, monospace; margin-top:0">148\n                                            544 174</p>\n            \n                                        <h3 style="color:#303030; font-size:18px; line-height: 1.6; font-weight:500;">Steps\n                                            to\n                                            Follow</h3>\n                                        <ol style="color:#8f8f8f; font-size: 14px; padding-bottom: 20px; padding-left:20px; line-height: 1.6">\n                                            <li>Preliminary thinking systems</li>\n                                            <li>Bandwidth efficient</li>\n                                            <li>Green space</li>\n                                            <li>Social impact</li>\n                                        </ol>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td colSpan="2">\n                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse;">\n                                            <tbody>\n                                                <tr>\n                                                    <td style="padding:15px 0px;" valign="top" align="center">\n                                                        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate !important;">\n                                                            <tbody>\n                                                                <tr>\n                                                                    <td align="center" valign="middle" style="padding:13px;">\n                                                                        <a href="#" title="START NOW" target="_blank" style="font-size: 14px; line-height: 1.5; font-weight: 700; letter-spacing: 1px; padding: 15px 40px; text-align:center; text-decoration:none; color:#FFFFFF; border-radius: 50px; background-color:#922c88;">START\n                                                                            NOW</a>\n                                                                    </td>\n                                                                </tr>\n                                                            </tbody>\n                                                        </table>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <table style="margin-top:30px; padding-bottom:20px;; margin-bottom: 40px;">\n                            <tbody>\n                                <tr>\n                                    <td align="center" valign="center">\n                                        <p style="font-size: 12px; text-decoration: none;line-height: 1; color:#909090; margin-top:0px; margin-bottom:5px; ">\n                                            ColoredStrategies Inc, 35 Little Russell St. Bloomsburg London,UK\n                                        </p>\n                                        <p style="font-size: 12px; line-height:1; color:#909090;  margin-top:5px; margin-bottom:5px;">\n                                            <a href="#" style="color: #922c88; text-decoration:none;">Privacy\n                                                Policy</a>\n                                            | <a href="#" style="color: #922c88; text-decoration:none;">Unscubscribe</a>\n                                        </p>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </center>\n                </div>\n            \n                <div leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="height:auto !important;width:100% !important; font-family: Helvetica,Arial,sans-serif !important;">\n                    <center>\n                        <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="max-width:600px; background-color:#ffffff;border:1px solid #e4e2e2;border-collapse:separate !important; border-radius:4px;border-spacing:0;color:#242128; margin:0;padding:40px;"\n                            heigth="auto">\n                            <tbody>\n                                <tr>\n                                    <td align="left" valign="center" style="padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;">\n                                        <img src="https://coloredstrategies.com/mailing/gogo.png" />\n                                    </td>\n                                    <td align="right" valign="center" style="padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;">\n                                        <span style="color: #8f8f8f; font-weight: normal; line-height: 2; font-size: 14px;">02.02.2019</span>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td colSpan="2" style="padding-top:10px; border-top:1px solid #e4e2e2">\n                                        <table>\n                                            <tr>\n                                                <td colSpan="2" style="padding-bottom:20px;">\n                                                    <h3 style="color:#303030; font-size:18px; line-height: 1.6; font-weight:500;">Order\n                                                        Summary</h3>\n                                                    <p style="color:#8f8f8f; font-size: 14px; padding-bottom: 20px; line-height: 1.4; margin-bottom:0;">\n                                                        Dynamically target high-payoff intellectual capital for\n                                                        customized technologies. Objectively integrate emerging\n                                                        core competencies before process-centric communities.\n                                                        Dramatically evisculate holistic innovation rather than\n                                                        client-centric data.<br/><br/>Progressively maintain\n                                                        extensive infomediaries via extensible niches.\n                                                    </p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td style="padding-top:0px; padding-bottom:20px; width:140px ">\n                                                    <img src="https://coloredstrategies.com/mailing/product-1.jpg" style="width: 113px; height: 85px; object-fit: cover; border-radius: 3px; " />\n                                                </td>\n                                                <td style="padding-top:0px; padding-bottom:20px;">\n                                                    <h4 style="font-size: 16px; line-height: 1; margin-bottom:20px;"><a href="#"\n                                                            style="text-decoration: none; color:#303030; font-weight:500;">Marble\n                                                            Cake</a></h4>\n                                                    <p href="#" style="font-size: 12px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">3\n                                                        pcs</p>\n                                                    <p style="font-size: 12px; line-height: 1; color:#909090; margin-top:5px;">Standart\n                                                        Package</p>\n                                                </td>\n                                                <td style="padding-top:0px; padding-bottom:20px; text-align: right;">\n                                                    <p style="font-size: 13px; line-height: 1; color:#922c88;  margin-top:5px; vertical-align:top; white-space:nowrap;">$\n                                                        14.82</p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colSpan="3" style="border-top:1px solid #e4e2e2">&nbsp;</td>\n                                            </tr>\n                                            <tr>\n                                                <td style="padding-top:0px; padding-bottom:20px; width:140px ">\n                                                    <img src="https://coloredstrategies.com/mailing/product-2.jpg" style="width: 113px; height: 85px; object-fit: cover; border-radius: 3px; " />\n                                                </td>\n                                                <td style="padding-top:0px; padding-bottom:20px;">\n                                                    <h4 style="font-size: 16px; line-height: 1; margin-bottom:20px;"><a href="#"\n                                                            style="text-decoration: none; color:#303030; font-weight:500;">Chocolate\n                                                            Cake</a></h4>\n                                                    <p href="#" style="font-size: 12px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2\n                                                        pcs</p>\n                                                    <p style="font-size: 12px; line-height: 1; color:#909090; margin-top:5px;">Standart\n                                                        Package</p>\n                                                </td>\n                                                <td style="padding-top:0px; padding-bottom:20px; text-align: right;">\n                                                    <p style="font-size: 13px; line-height: 1; color:#922c88;  margin-top:5px; vertical-align:top; white-space:nowrap;">$\n                                                        4.24</p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colSpan="3" style="border-top:1px solid #e4e2e2">&nbsp;</td>\n                                            </tr>\n                                            <tr>\n                                                <td style="padding-top:0px; padding-bottom:20px; width:140px ">\n                                                    <img src="https://coloredstrategies.com/mailing/product-3.jpg" style="width: 113px; height: 85px; object-fit: cover; border-radius: 3px; " />\n                                                </td>\n                                                <td style="padding-top:0px; padding-bottom:20px;">\n                                                    <h4 style="font-size: 16px; line-height: 1; margin-bottom:20px;"><a href="#"\n                                                            style="text-decoration: none; color:#303030; font-weight:500;">Fat\n                                                            Rascal</a></h4>\n                                                    <p href="#" style="font-size: 12px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px;  margin-bottom:0;">1\n                                                        pcs</p>\n                                                    <p style="font-size: 12px; line-height: 1; color:#909090; margin-top:5px;">Standart\n                                                        Package</p>\n                                                </td>\n                                                <td style="padding-top:0px; padding-bottom:20px; text-align: right;">\n                                                    <p style="font-size: 13px; line-height: 1; color:#922c88;  margin-top:5px; vertical-align:top; white-space:nowrap;">$\n                                                        12.91</p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colSpan="3" style="border-top:1px solid #e4e2e2">&nbsp;</td>\n                                            </tr>\n                                            <tr>\n                                                <td style="padding-top:0px; padding-bottom:20px; width:140px ">\n                                                    <img src="https://coloredstrategies.com/mailing/product-4.jpg" style="width: 113px; height: 85px; object-fit: cover; border-radius: 3px; " />\n                                                </td>\n                                                <td style="padding-top:0px; padding-bottom:20px;">\n                                                    <h4 style="font-size: 16px; line-height: 1; margin-bottom:20px;"><a href="#"\n                                                            style="text-decoration: none; color:#303030; font-weight:500;">Cremeschnitte</a></h4>\n                                                    <p href="#" style="font-size: 12px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">4\n                                                        pcs</p>\n                                                    <p style="font-size: 12px; line-height: 1; color:#909090; margin-top:5px;">Standart\n                                                        Package</p>\n                                                </td>\n                                                <td style="padding-top:0px; padding-bottom:20px; text-align: right;">\n                                                    <p style="font-size: 13px; line-height: 1; color:#922c88;  margin-top:5px; vertical-align:top; white-space:nowrap;">$\n                                                        54.20</p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colSpan="3" style="border-top:1px solid #e4e2e2">&nbsp;</td>\n                                            </tr>\n                                            <tr>\n                                                <td colSpan="2" style="padding-top:0px; padding-bottom:5px; text-align: right; color:#909090;">\n                                                    <p style="font-size: 12px; line-height: 1; margin-top:5px; vertical-align:top;  margin-bottom: 0;">Subtotal:&nbsp;</p>\n                                                </td>\n                                                <td style="padding-top:0px; padding-bottom:5px; text-align: right; padding-left: 15px;">\n                                                    <p style="font-size: 13px; line-height: 1; margin-top:5px; vertical-align:top; color:#922c88; white-space:nowrap; margin-bottom: 0;">$\n                                                        124.20</p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colSpan="2" style="padding-top:0px; padding-bottom:5px; text-align: right; color:#909090;">\n                                                    <p style="font-size: 12px; line-height: 1; margin-top:5px; vertical-align:top; margin-bottom: 0;">Shipping:&nbsp;</p>\n                                                </td>\n                                                <td style="padding-top:0px; padding-bottom:5px; text-align: right; padding-left: 15px;">\n                                                    <p style="font-size: 13px; line-height: 1; margin-top:5px; vertical-align:top; color:#922c88; white-space:nowrap; margin-bottom: 0;">$\n                                                        4.04</p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colSpan="2" style="padding-top:0px; padding-bottom:5px; text-align: right; color:#909090;">\n                                                    <p style="font-size: 12px; line-height: 1; margin-top:5px; vertical-align:top; margin-bottom: 0;">Taxes:&nbsp;</p>\n                                                </td>\n                                                <td style="padding-top:0px; padding-bottom:5px; text-align: right; padding-left: 15px;">\n                                                    <p style="font-size: 13px; line-height: 1; margin-top:5px; vertical-align:top; color:#922c88; white-space:nowrap; margin-bottom: 0;">$\n                                                        9.14</p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colSpan="2" style="padding-top:0px; padding-bottom:5px; text-align: right; color:#909090;">\n                                                    <p style="font-size: 12px; line-height: 1; margin-top:5px; vertical-align:top; margin-bottom: 0;"><strong>Total:&nbsp;</strong></p>\n                                                </td>\n                                                <td style="padding-top:0px; padding-bottom:5px; text-align: right; padding-left: 15px;">\n                                                    <p style="font-size: 13px; line-height: 1; margin-top:5px; vertical-align:top; color:#922c88; white-space:nowrap; margin-bottom: 0;"><strong>$\n                                                            137.38</strong></p>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n            \n                        <table style="margin-top:30px; padding-bottom:20px; margin-bottom: 40px;">\n                            <tbody>\n                                <tr>\n                                    <td align="center" valign="center">\n                                        <p style="font-size: 12px; text-decoration: none;line-height: 1; color:#909090; margin-top:0px; margin-bottom:5px; ">\n                                            ColoredStrategies Inc, 35 Little Russell St. Bloomsburg London,UK\n                                        </p>\n                                        <p style="font-size: 12px; line-height:1; color:#909090;  margin-top:5px; margin-bottom:5px;">\n                                            <a href="#" style="color: #922c88; text-decoration:none;">Privacy\n                                                Policy</a>\n                                            | <a href="#" style="color: #922c88; text-decoration:none;">Unscubscribe</a>\n                                        </p>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </center>\n                </div>\n            \n                <div leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="height:auto !important;width:100% !important; font-family: Helvetica,Arial,sans-serif !important;">\n                    <center>\n                        <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="max-width:600px; background-color:#ffffff;border:1px solid #e4e2e2;border-collapse:separate !important; border-radius:4px;border-spacing:0;color:#242128; margin:0;padding:40px;"\n                            heigth="auto">\n                            <tbody>\n                                <tr>\n                                    <td align="left" valign="center" style="padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;">\n                                        <img src="https://coloredstrategies.com/mailing/gogo.png" />\n                                    </td>\n                                    <td align="right" valign="center" style="padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;">\n                                        <span style="color: #8f8f8f; font-weight: normal; line-height: 2; font-size: 14px;">02.02.2019</span>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td colSpan="2" style="padding-top:10px;border-top:1px solid #e4e2e2">\n                                        <table>\n                                            <tr>\n                                                <td style="padding-bottom:20px;">\n                                                    <h3 style="color:#303030; font-size:18px; line-height: 1.6; font-weight:500;">Latest\n                                                        from Blog</h3>\n                                                    <p style="color:#8f8f8f; font-size: 14px; padding-bottom: 20px; line-height: 1.4;">\n                                                        Dynamically target high-payoff intellectual capital for\n                                                        customized technologies. Objectively integrate emerging\n                                                        core competencies before process-centric communities.\n                                                    </p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td style="padding-bottom: 30px;">\n                                                    <a href="#">\n                                                        <img style="max-width: 100%; object-fit: cover; border-radius: 3px; margin-bottom:5px;"\n                                                            src="https://gogo-react.coloredstrategies.com/img/carousels/1.jpg" />\n                                                    </a>\n                                                    <h4 style="font-size: 16px; line-height: 1; margin-bottom:5px; margin-top: 10px;"><a\n                                                            href="#" style="text-decoration: none; color:#303030; font-weight:500;">Distinctively\n                                                            Exploit Optimal Alignments</a></h4>\n                                                    <p style="color:#8f8f8f; font-size: 14px; line-height: 1.4; margin-top:10px">\n                                                        Objectively integrate emerging\n                                                        core competencies before integrate emerging process-centric\n                                                        communities.\n                                                    </p>\n                                                    <p style="font-size: 14px; line-height: 1; margin-top:5px;"><a style="color:#922c88; text-decoration:initial;"\n                                                            href="#">Learn\n                                                            More</a></p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colSpan="3" style="border-top:1px solid #e4e2e2; padding-bottom:10px;">&nbsp;</td>\n                                            </tr>\n                                            <tr>\n                                                <td style="padding-bottom: 30px;">\n                                                    <a href="#">\n                                                        <img style="max-width: 100%; object-fit: cover; border-radius: 3px; margin-bottom:5px;"\n                                                            src="https://gogo-react.coloredstrategies.com/img/carousels/2.jpg" />\n                                                    </a>\n                                                    <h4 style="font-size: 16px; line-height: 1; margin-bottom:5px; margin-top: 10px;"><a\n                                                            href="#" style="text-decoration: none; color:#303030; font-weight:500;">Assertively\n                                                            Iterate Resource Maximizing</a></h4>\n                                                    <p style="color:#8f8f8f; font-size: 14px; line-height: 1.4; margin-top:10px">\n                                                        Objectively integrate emerging\n                                                        core competencies before integrate emerging process-centric\n                                                        communities.\n                                                    </p>\n                                                    <p style="font-size: 14px; line-height: 1; margin-top:5px;"><a style="color:#922c88; text-decoration:initial;"\n                                                            href="#">Learn\n                                                            More</a></p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colSpan="3" style="border-top:1px solid #e4e2e2; padding-bottom:10px;">&nbsp;</td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <a href="#">\n                                                        <img style="max-width: 100%; object-fit: cover; border-radius: 3px; margin-bottom:5px;"\n                                                            src="https://gogo-react.coloredstrategies.com/img/carousels/3.jpg" />\n                                                    </a>\n                                                    <h4 style="font-size: 16px; line-height: 1; margin-bottom:5px; margin-top: 10px;"><a\n                                                            href="#" style="text-decoration: none; color:#303030; font-weight:500;">Objectively\n                                                            Manufactured Products</a></h4>\n                                                    <p style="color:#8f8f8f; font-size: 14px; line-height: 1.4; margin-top:10px">\n                                                        Objectively integrate emerging\n                                                        core competencies before integrate emerging process-centric\n                                                        communities.\n                                                    </p>\n                                                    <p style="font-size: 14px; line-height: 1; margin-top:5px;"><a style="color:#922c88; text-decoration:initial;"\n                                                            href="#">Learn\n                                                            More</a></p>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n            \n                        <table style="margin-top:30px; padding-bottom:20px; margin-bottom: 40px;">\n                            <tbody>\n                                <tr>\n                                    <td align="center" valign="center">\n                                        <p style="font-size: 12px; text-decoration: none;line-height: 1; color:#909090; margin-top:0px; margin-bottom:5px; ">\n                                            ColoredStrategies Inc, 35 Little Russell St. Bloomsburg London,UK\n                                        </p>\n                                        <p style="font-size: 12px; line-height:1; color:#909090;  margin-top:5px; margin-bottom:5px;">\n                                            <a href="#" style="color: #922c88; text-decoration:none;">Privacy\n                                                Policy</a>\n                                            | <a href="#" style="color: #922c88; text-decoration:none;">Unscubscribe</a>\n                                        </p>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </center>\n                </div>\n                    '}}))))}}}]);
//# sourceMappingURL=miscellaneous-mailing.58504495.chunk.js.map