window.onload = function () {
    let params = new URLSearchParams(window.location.search);
    let tomo = params.get("tomo");

    // Lista de tomos con sus IDs de Google Drive
    let tomos = {
        1: { id: "18uA3l5-IaxoJf9LVrlDZazGBEVEOqHt8", title: "Tomo 1:" },
        2: { id: "1JboysEvjGJ58qYaYyX317Ie0pTVVyzKY", title: "Tomo 2:" },
        3: { id: "1TOhENbBv6YvYSnqfSnoOy3iElMznoN0E", title: "Tomo 3:" },
        4: { id: "15g32ttIGUTkjSi4FHDqpCz1F6bj-chrY", title: "Tomo 4:" },
        5: { id: "1KzFF6s43T19cjosMpgnkrhSe4Ym70OOQ", title: "Tomo 5:" },
        6: { id: "1k0DmZTky37vZr2eTxAGc10RTqGQDjrMF", title: "Tomo 6:" },
        7: { id: "1EW-GWHmHLTbaBCwcRZ1y-ip0ag6pCpEj", title: "Tomo 7:" },
        8: { id: "1dD2MWI6-xOceUuNp_S6tLvW8kTfC24Lp", title: "Tomo 8:" },
        9: { id: "1RS8E1nzJq0hvlwaVdJUrJ9ATSvsdqS0h", title: "Tomo 9:" },
        10: { id: "18w5SCeXAOwJVxgXDOmovgdL-9DB5erhM", title: "Tomo 10:" },
        11: { id: "1Qt6UJcxSZ6B3eevhf8eR1sMGSc_ZxZhq", title: "Tomo 11:" },
        12: { id: "1HO0bmsF5vO8LhKMyb3BinGl4DZvCo7fg", title: "Tomo 12:" },
        13: { id: "11xyJmnQx2tHRMBhkOzHK96WKF3_dy_3E", title: "Tomo 13:" },
        14: { id: "1goNMI9tRp6i5nU9y60m7RSux4-0zGKTU", title: "Tomo 14:" },
        15: { id: "1Bdzp_Rz1eg2PWmAzgUegEOamp946JwBD", title: "Tomo 15:" },
        16: { id: "1vArz4lHpQc3UYOhv6-CaJ5QzrnaOr2JC", title: "Tomo 16:" },
        17: { id: "18w2PjIpdPj9E-eU1uY7kWcDpDy-3H0lF", title: "Tomo 17:" },
        18: { id: "1BzTrqibFqHFw48sj4ttUkV8FBt8utrCJ", title: "Tomo 18:" },
        19: { id: "1u4bwURSCdjRQ9fHp7Y9BnbNQHysBVA_z", title: "Tomo 19:" },
        20: { id: "1mCR2EBMp-001_3FgZqz4WLywfoWL7QRC", title: "Tomo 20:" },
        21: { id: "1INcNHBCrfzrJ4vYquGIxFDDq4pcx_5ib", title: "Tomo 21:" },
        22: { id: "1IrNTOwAQMjvrYU1mWbIeTZEKHEsEDNMS", title: "Tomo 22:" },
        23: { id: "1-wIx-jaUZqfbw-XJrMZ8pJv9iQnrBM8r", title: "Tomo 23:" },
        24: { id: "1USMHPDeTh83mFNKQO-Rx7XJj6NWsjxL-", title: "Tomo 24:" },
        25: { id: "1WvJdeN2WHOnD-JWNEjgLWFmFcAN4VS4U", title: "Tomo 25:" },
        26: { id: "1qm2quoUkUBrjSsM_eU8h9ZpXz0kZZxcH", title: "Tomo 26:" },
        27: { id: "1e1bjGsLy0z9DPX_T2R7LFk2zio1MOUVE", title: "Tomo 27:" },
        28: { id: "1KrEA6lZ1N1QoiWfLxtYXzw-EFyBN4tCP", title: "Tomo 28:" },
        29: { id: "1wHXHRJy_JtfYWRvXKEi5K6my_66bn_zl", title: "Tomo 29:" },
        30: { id: "1zSUtSA0sSEPv7TRUlqIPkrfNauY7iXoK", title: "Tomo 30:" },
        31: { id: "1m6hkjdZV-vAfg90U7BZDwMr4bHsfHfmY", title: "Tomo 31:" },
        32: { id: "1LS30A8UX79RhIqw28WRgpRLJxOND4W6F", title: "Tomo 32:" },
        33: { id: "1G8BsT8crzZcUP76qajLjR_8f4wwdbZvK", title: "Tomo 33:" },
        34: { id: "1TA-rewmVGyFqM7bQNgO3-vmr9sTBLb5R", title: "Tomo 34:" },
        35: { id: "1LMVFm0PEvcd9ygdE00kQuNDIVzjysNFQ", title: "Tomo 35:" },
        36: { id: "1rwLsF8O5Mvdj7y8Uz_OOkgoNbBTZasZO", title: "Tomo 36:" },
        37: { id: "1ZEqXSpmrHXgX0idZjdWdUI9PtdlBG9hC", title: "Tomo 37:" },
        38: { id: "1kAngaqhNhFeNzWIfpMjygj4C3k7nBBOh", title: "Tomo 38:" },
    };

    if (tomo && tomos[tomo]) {
        let driveLink = `https://drive.google.com/file/d/${tomos[tomo].id}/preview`;
        document.getElementById("mangaFrame").src = driveLink;

        // Mostrar el título del tomo
        document.getElementById("tomoTitle").textContent = tomos[tomo].title;
    } else {
        document.getElementById("mangaFrame").src = "error.html"; // Página de error si falta el tomo
    }
    // Botón para el tomo anterior
    document.getElementById("prevTomo").addEventListener("click", function () {
        let prevTomo = parseInt(tomo) - 1;
        if (prevTomo > 0 && tomos[prevTomo]) {
            window.location.href = `MangaViewer.html?tomo=${prevTomo}`;
        }
    });

    // Botón para el tomo siguiente
    document.getElementById("nextTomo").addEventListener("click", function () {
        let nextTomo = parseInt(tomo) + 1;
        if (tomos[nextTomo]) {
            window.location.href = `MangaViewer.html?tomo=${nextTomo}`;
        }
    });
};
