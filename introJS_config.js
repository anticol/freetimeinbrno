function getNode(node){
    return document.querySelector(node);
}

function initIntro(){
    introJs().setOptions({
        steps: [{
                intro: "Vítá vás průvodce aplikací Volný čas v Brně"
            },
            {
                element: getNode('[settingid="_47"]'),
                intro: "Obsahuje zoznam vrstiev s dátami, ktoré môže používateľ zobraziť alebo skryť. Vrstvy sú pre väčšiu prehľadnosť rozdelené do šiestich kategórií. Užívateľ môže pomocou vstupného textového poľa vrstvy filtrovať podľa názvu. Každá dátová vrstva má podľa významu zobrazovaných bodov alebo polygónov vlastný symbol na mape. Je možné zobraziť viacero dátových vrstiev naraz. Tento widget obsahuje tlačidlo pre zobrazenie všetkých vrstiev a skrytie aktuálne zobrazených vrstiev",
                position: 'bottom'
            },
            {
                element: getNode('[settingid="legenda_widget"]'),
                intro: "Obsahuje zoznam názvov dátových vrstiev a ku ním prislúchajúcich symbolov alebo značiek, ktoré sú aktuálne zobrazené na mape. Symbol zobrazujúci objekty dátovej vrstvy je vždy vybraný tak aby bolo pre používateľa jednoduché a intuitívne rozoznať o akú vrstvu sa jedná. Napríklad dátová vrstva Športoviská je na mape zobrazená športovými loptami. ",
                position: 'bottom'
            },
            {
                element: getNode('[settingid="lokality_widget"]'),
                intro: "Obsahuje zoznam geografických oblastí v Brne a okolí. Po kliknutí na vybranú oblasť sa mapa automaticky presunie na zvolené miesto.",
                position: 'bottom'
            },
            {
                element: getNode('[settingid="podkladovky_widget"]'),
                intro: "Tento widget ponúka zoznam možností zmeny mapového podkladu. Na výber je jedenásť podkladov, medzi ktorými si používateľ môže ľubovoľne prepínať. Pre väčšiu prehľadnosť zobrazovaných vrstiev je predvolená tmavá podkladová mapa. V budúcnosti je možné tieto podklady ľubovoľne pridávať alebo odoberať.",
                position: 'bottom'
            },
            {
                element: getNode('[settingid="lupa_widget"]'),
                intro: "Tento widget umožňuje interaktívne pracovať s viacerými vrstvami. Slúži pre zvýšenie prehľadnosti zobrazených vrstiev na mape. Po otvorení widgetu sa zobrazí lupa vyrezávajúca oblasť na mape, s ktorou môže užívateľ manipulovať a presúvať ju. Z aktuálne zobrazených vrstiev si užívateľ môže vybrať tie, ktoré sa majú vo vyrezanej oblasti zobraziť. Zvyšné aktívne vrstvy sa budú zobrazovať na celej mape, ale vrstvy vybrané pomocou lupy sa zobrazia len vo vyrezanej oblasti.",
                position: 'bottom'
            },
            {
                element: getNode('[settingid="tisk_widget"]'),
                intro: "Umožňuje vytlačiť aktuálny rozsah mapy spolu so zobrazenými vrstvami. Používateľ má možnosť zvoliť si formát a rozvrhnutie tlačeného dokumentu.",
                position: 'bottom'
            }, 
            {
                element: getNode('[settingid="panorama_widget"]'),
                intro: "TODO",
                position: 'bottom'
            },
            {
                element: getNode('[settingid="napoveda_widget"]'),
                intro: "Tento widget obsahuje informácie o zobrazovaných dátových vrstvách, ich atribútoch a prehľadný popis widgetov, s ktorými môžu používateľia aplikácie pracovať.",
                position: 'bottom'
            },
            {
                element: getNode('[settingid="informace_widget"]'),
                intro: "Základné informácie o aplikácii Volný čas v Brne, popis jednotlivých dátových vrstiev a odkazy na poskytovateľov dát. Tento widget sa automaticky otvára pri spustení aplikácie.",
                position: 'bottom'
            },
            {
                element: '#step5',
                intro: 'Hotovo :)'
            }
        ]
    }).start();
}

