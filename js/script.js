// ==UserScript==
// @name         Mentoring
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Dont esquecimento more
// @author       Érick Luiz F. Lopes
// @match        https://outlook.office.com/owa/*
// @grant        none
// ==/UserScript==

(function() {

    var classTextBox =".allowTextSelection.customScrollBar._mcp_32.ms-bg-color-white.ms-font-color-black.owa-font-compose" ;
    var classButtonNewMail = "._fce_h._fce_f.ms-fwt-r.ms-fcl-np.o365button";
    var classTheme = "._mcp_Q1._mcp_R1.ms-font-weight-regular.ms-bg-color-white-hover.ms-font-color-neutralPrimary.allowTextSelection._mcp_O1.textbox.ms-font-s.ms-fwt-sl.ms-fcl-np.ms-bcl-nta.ms-bcl-nsa-h";
    var textMentoring = `<div style="font-size:16px; font-family:Calibri,Arial,Helvetica,sans-serif,serif,EmojiFont">
        <b>Alocação na semana (0% a 200%):</b>&nbsp;100%&nbsp;</div>
        <div style="font-size:16px; font-family:Calibri,Arial,Helvetica,sans-serif,serif,EmojiFont">
        <b>Quantidade de Horas Extras:&nbsp;</b>&nbsp;0</div>
        <div style="font-size:16px; font-family:Calibri,Arial,Helvetica,sans-serif,serif,EmojiFont">
        <b>Alocação na próxima semana (0% a 200%):&nbsp;</b>100%</div>
        <div style="font-size:16px; font-family:Calibri,Arial,Helvetica,sans-serif,serif,EmojiFont">
        <b><br>
        </b></div>
        <div style="font-size:16px; font-family:Calibri,Arial,Helvetica,sans-serif,serif,EmojiFont">
        <b>Como esta se sentindo com relação as atividades ou Compasso em geral.&nbsp;😊,&nbsp;</b></div>
        <div style="font-size:16px; font-family:Calibri,Arial,Helvetica,sans-serif,serif,EmojiFont">
        <br>
        </div>
        <div style="font-size:16px; font-family:Calibri,Arial,Helvetica,sans-serif,serif,EmojiFont">
        <b>Descreva de forma MACRO em uma LINHA o resumo das tuas atividades:</b></div>
        <div style="font-size:16px; font-family:Calibri,Arial,Helvetica,sans-serif,serif,EmojiFont"></div>
        <br>
        <p></p>`;
    var date = new Date();
    var buttonSendEmail = "._mcp_62.o365button.o365buttonOutlined.ms-font-m.ms-fwt-sb.ms-fcl-w.ms-bgc-tp.ms-bcl-tp.ms-bgc-td-f.ms-bcl-tdr-f";

    var setEventInSubmit = setTimeout(function() {
        if(document.querySelector(buttonSendEmail)){
            document.querySelector(buttonSendEmail).addEventListener('click',function(){
                console.log(document.querySelector(classTheme).innerHTML);
                if(document.querySelector(classTheme).innerHTML == 'mentoring'){
                    localStorage.setItem('mentoringEnviado','true');
                }
            });
            clearTimeout(setEventInSubmit);
        }
    }, 10);
    // quinta == 4
    if(date.getDay() == 6){
        if(!localStorage.getItem('mentoringEnviado')){
                var buildEmail = function(){
                  setTimeout(function(){},)
                  var textBox = document.querySelector(".allowTextSelection.customScrollBar._mcp_32.ms-bg-color-white.ms-font-color-black.owa-font-compose");
                  textBox.innerHTML = textMentoring + textBox.innerHTML;;
                }

                var openTextBox = function(){
                    clearTimeout(validyElements);
                    document.querySelector(classButtonNewMail).click();
                    var validyElement = setTimeout(function(){
                        if(document.querySelector(classTextBox)){
                            buildEmail();
                        }
                    },10000);


                    var listenTheme = setTimeout(function(){
                        if(document.querySelector(classTheme)){
                            document.querySelector(classTheme).value = "Mentoring";
                        }
                    }, 10000);
                }

                var validyElements = setTimeout(function(){
                    if(document.querySelector(classButtonNewMail)){
                        openTextBox();

                    }

                },10000);
        }
    }else{
        localStorage.setItem('mentoringEnviado', null);
    }

    'use strict';
    // Click no botão de envio de mensagem

// Captura a div
//document.querySelector(".allowTextSelection.customScrollBar._mcp_32.ms-bg-color-white.ms-font-color-black.owa-font-compose");

// Insere o elemento como ultimo filho, tem que ser como primeiro filho
//p = document.createElement("p");
//p.innerText = "kshjdjhfjkhdfjk";
//document.querySelector(".allowTextSelection.customScrollBar._mcp_32.ms-bg-color-white.ms-font-color-black.owa-font-compose").appendChild(p);
})();