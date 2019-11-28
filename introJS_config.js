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
                intro: "Seznam vrstev s daty, které může uživatel zobrazit nebo skrýt. Vrstvy jsou pro větší přehlednost rozděleny do šesti kategorií. Uživatel může pomocí vstupního textového pole vrstvy filtrovat podle názvu. Každá datová vrstva má podle významu zobrazovaných bodů nebo polygonů vlastní symbol na mapě. Je možné zobrazit více datových vrstev najednou. Tento widget obsahuje tlačítko pro zobrazení všech vrstev a skrytí aktuální zobrazených vrstev.",
                position: 'bottom'
            },
            {
                element: getNode('[settingid="legenda_widget"]'),
                intro: "Seznam názvů datových vrstev a ke jím příslušejících symbolů nebo značek, které jsou aktuálně zobrazené na mapě. Symbol zobrazující objekty datové vrstvy je vždy vybrán tak aby bylo pro uživatele jednoduché a intuitivní rozeznat o jakou datovou vrstvu se jedná. Například datová vrstva Sportoviště je na mapě zobrazena sportovními míči.",
                position: 'bottom'
            },
            {
                element: getNode('[settingid="lokality_widget"]'),
                intro: "Seznam geografických oblastí v Brně a okolí. Po kliknutí na vybranou oblast se mapa automaticky přesune na zvolené místo.",
                position: 'bottom'
            },
            {
                element: getNode('[settingid="podkladovky_widget"]'),
                intro: "Tento widget nabízí seznam možností změny mapového podkladu. Na výběr je jedenáct podkladů, mezi kterými si uživatel může libovolně přepínat.",
                position: 'bottom'
            },
            {
                element: getNode('[settingid="lupa_widget"]'),
                intro: "Tento widget umožňuje interaktivní pracovat s více vrstvami. Slouží pro zvýšení přehlednosti zobrazených vrstev na mapě. Po otevření widgetu se zobrazí lupa s výběrem oblasti na mapě, se kterou může uživatel manipulovat a přesouvat ji. Aktuálně zobrazené vrstvy se uživateli zobrazí pouze ve vyříznuté oblasti a tak se může soustředit a vyhledávat body zájmu v této oblasti. Na zbývající části mapy nebudou datové vrstvy zobrazeny.",
                position: 'bottom'
            },
            {
                element: getNode('[settingid="tisk_widget"]'),
                intro: "Umožňuje vytisknout aktuální rozsah mapy spolu se zobrazenými vrstvami. Uživatel má možnost zvolit si formát a rozvržení tištěného dokumentu.",
                position: 'bottom'
            }, 
            {
                element: getNode('[settingid="panorama_widget"]'),
                intro: "Widget zobrazující panorama vybraného místa z mapy. Po klinutí na místo je v prohlížeči otevřeno nové okno s 3D panoramatem.",
                position: 'bottom'
            },
            {
                element: getNode('[settingid="napoveda_widget"]'),
                intro: "Tento widget obsahuje informace o zobrazovaných datových vrstvách, jejich atributech a přehledný popis widgetů, se kterými mohou uživatelé aplikace pracovat.",
                position: 'bottom'
            },
            {
                element: getNode('[settingid="informace_widget"]'),
                intro: "Základní informace o aplikaci Volný čas v Brně a odkazy na poskytovatele dat.",
                position: 'bottom'
            },
            {
                element: '#step5',
                intro: 'Hotovo, užijte si volný čas v Brně :)'
            }
        ]
    }).start();
}

