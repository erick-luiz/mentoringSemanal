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
var htmlDiv = `<div id="modal">
        <div id="header">
            <h1>Aguarde um minuto</h1>
        </div>
        <div id="body">
            <p>Estamos carregando seu Mentoring Semanal!</p>
        </div>
        <div class="loader loader--style4" title="3">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width="24px" height="24px" viewBox="0 0 24 24" style="enable-background:new 0 0 50 50;" xml:space="preserve">
            <rect x="0" y="0" width="4" height="7" fill="#333">
              <animateTransform  attributeType="xml"
                attributeName="transform" type="scale"
                values="1,1; 1,3; 1,1"
                begin="0s" dur="0.6s" repeatCount="indefinite" />
            </rect>

            <rect x="10" y="0" width="4" height="7" fill="#333">
              <animateTransform  attributeType="xml"
                attributeName="transform" type="scale"
                values="1,1; 1,3; 1,1"
                begin="0.2s" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="20" y="0" width="4" height="7" fill="#333">
              <animateTransform  attributeType="xml"
                attributeName="transform" type="scale"
                values="1,1; 1,3; 1,1"
                begin="0.4s" dur="0.6s" repeatCount="indefinite" />
            </rect>
          </svg>
        </div>
    </div>`;

var styleCss = `#overlay-plugin{position:fixed;background:rgba(0,0,0,0.8);width:100%;height:100%;top:0;left:0;z-index:10;display:flex;flex-direction:row;justify-content:center;align-items:center;color:#777;text-align:center;font-family:"Gill sans", sans-serif}#overlay-plugin #modal{margin:auto;position:absolute;background:#ffffff;z-index:2;border-radius:10px;padding:2%}#overlay-plugin h1{margin:1em 0;border-bottom:1px dashed;padding-bottom:1em;font-weight:lighter}#overlay-plugin p{font-style:italic}#overlay-plugin .loader{margin:0 0 2em;height:100px;width:20%;text-align:center;padding:1em;margin:0 auto 1em;display:inline-block;vertical-align:top}.hide{display:none !important}svg path,svg rect{fill:#FF6700}`;