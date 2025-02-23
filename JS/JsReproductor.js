window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const videoUrl = urlParams.get('video'); // URL de Uqload
    const megaUrl = urlParams.get('mega');   // URL de Mega
    const player = document.getElementById('videoPlayer');
    const serverSelector = document.getElementById('serverSelector');
    const titleElement = document.getElementById('episodeTitle'); // Elemento donde se muestra el título

    console.log("🎥 Video URL:", videoUrl);
    console.log("🎥 Mega URL:", megaUrl);

    document.addEventListener("DOMContentLoaded", function() {
        document.body.style.backgroundImage = "url('img/fondo.gif')"; // Asegúrate de que la ruta sea correcta
        document.body.style.backgroundSize = "cover"; // Ajusta el tamaño de la imagen
        document.body.style.backgroundPosition = "center"; // Centra la imagen
        document.body.style.backgroundRepeat = "no-repeat"; // Evita que se repita
        document.body.style.backgroundAttachment = "fixed"; // Mantiene el fondo estático al hacer scroll
    });
    

    const episodes = [
        {uqload: "https://uqload.net/lgqp4vk3l27x.html",
            mega:"https://mega.nz/embed/UYdDXY5D#CZ1pTrnelaGueJW4R7FUKm_zDumtzS-llMJEpTy_lxQ",
        title: "Temporada 1 - Episodio 1 - "},
        {uqload: "https://uqload.net/bcllueyx5sqc.html",
            mega:"https://mega.nz/embed/0ZFVUA7S#EH2uO6kObzawsSZDItZIEGM8jIN9lDQAmaEuX7nNroY",
         title: "Temporada 1 - Episodio 2 - "},
        {uqload: "https://uqload.net/f76dw0i2ra6o.html",
            mega:"https://mega.nz/embed/gNNFkACR#HJZpbf9fEy53rm0UkXl4PPtAETbFwnr00jMYSQZGisM",
        title: "Temporada 1 - Episodio 3 - "},
        {uqload: "https://uqload.net/95ex4l74y1mc.html",
            mega:"https://mega.nz/embed/tQFRmIwa#nF0BhIBIh3_fpj8W1MDcyqD_UtV7m47jW9n9TPy1WFI",
        title: "Temporada 1 - Episodio 4 - "},
        {uqload: "https://uqload.net/q29hwhm7ptwh.html",
            mega:"https://mega.nz/embed/4UEhWQSS#TDZk6QjJm2s-Ksu3wc1PL4i_KBfEWato5BUYA7frBA4",
        title: "Temporada 1 - Episodio 5 - "},
        {
            uqload: "https://uqload.net/rl9skcyi1t98.html",
            mega:"https://mega.nz/embed/UVUxRSyb#PBS_H2bu7jBNbuc6dB4sbOOty7PQ3--kSpS17jKqjpM",
            title: "Temporada 1 - Episodio 6 - "
        },
        {
            uqload: "https://uqload.net/iikat5ykhmgm.html",
            mega:"https://mega.nz/embed/tUclASgD#vivEsf3OUIzH8GbSqopL7V_m-O948HnPOSwLdFeMvHw",
            title: "Temporada 1 - Episodio 7 - "
        },
        {
            uqload: "https://uqload.net/fod1ttlt2x4l.html",
            mega:"https://mega.nz/embed/5BMHSSzT#lRdKDYHXPFlT3UCPYjphOSg-X42iuqFRQ2M6EOoeITg",
            title: "Temporada 1 - Episodio 8 - "
        },
        {
            uqload: "https://uqload.net/f76dw0i2ra6o.html",
            mega:"https://mega.nz/embed/BdE3jIIQ#kDlvcyePMutu3tf8LawMP3GVpDBZMD8LyKMYW6fnH9Q",
             title: "Temporada 1 - Episodio 9 - "
        },
        {
            uqload: "https://uqload.net/gfqhpkq9m10z.html",
            mega:"https://mega.nz/embed/NYU1VIZS#84jE5UM_qodz1_LmhVBD5iIoaTSwJL3jETPxCkBiMrQ",
            title: "Temporada 1 - Episodio 10 - "
        },
        {
            uqload: "https://uqload.net/2zhrpzapqu1c.html",
            mega:"https://mega.nz/embed/BYFTyKDC#qVbu-BU66aBbhWaF5bqQdyKOO1JR-ljTnRZANNx50zQ",
             title: "Temporada 1 - Episodio 11 - "
        },
        {
            uqload: "https://uqload.net/t7mqcf06cb0j.html",
            mega:"https://mega.nz/embed/FNUnUIKK#w0kaIf7S3VitezbJJ2liEx_e4S-6g18d3ZxJGwBLd-8",
            title: "Temporada 1 - Episodio 12 - "
        },
        {
            uqload: "https://uqload.net/gxhwa4rl9ckp.html",
            mega:"https://mega.nz/embed/VQdTwYjR#UyENU7pYFnAFnl_aL_9rntPzL9yuZFeq0mN7Nfltxss",
            title: "Temporada 1 - Episodio 13 - "
        },
        {
            uqload: "https://uqload.net/wu6rw5hv9q7o.html",
            mega:"https://mega.nz/embed/scFlVCKZ#Hx-YWMq-_S3DhlMnzguVGmCDmmydjvAWMV-i-A904uo",
            title: "Temporada 1 - Episodio 14 - "
        },
        {
            uqload: "https://uqload.net/l06z1yx9gxu2.html",
            mega:"https://mega.nz/embed/cIFREAya#OkKRzYV0nB4P196sL3McQPsBx7ajgASu95C2nu0bSbE",
            title: "Temporada 1 - Episodio 15 - "
        },
        {
            uqload: "https://uqload.net/ei50xjdsg578.html",
            mega:"https://mega.nz/embed/8JVHGQDZ#eMPuOyCTdwUqOgqVBJG9W9omP_4xMaNEEjqsavD4fuI",
            title: "Temporada 1 - Episodio 16 - "
        },
        {
            uqload: "https://uqload.net/isag7ap9kyc7.html",
            mega:"https://mega.nz/embed/AMFzWS5I#pARMr1HTE7M-Ud4_ve8YqWZd5QxanvYWySwmtUvj0XM",
             title: "Temporada 1 - Episodio 17 - "
        },
        {
            uqload: "https://uqload.net/dr7llotj45yv.html",
            mega:"https://mega.nz/embed/1RcljKyb#9e8gt_Ygctte_-anZfCaw0DmhAsOTQ5NUbHCnPup45c",
             title: "Temporada 1 - Episodio 18 - "
        },
        {
            uqload: "https://uqload.net/dywj080te3pk.html",
            mega:"https://mega.nz/embed/9RNFGYwJ#hwMw-7aRpESBQ0Awcl9YG5AOdrUiwTifP8BRa4drc9o",
            title: "Temporada 2 - Episodio 1 -"
        },
        {
            uqload: "https://uqload.net/03br924fa8g5.html",
            mega:"https://mega.nz/embed/9ddjHSKT#I5pOSbNKnRCLeEkiokWaJ9Bwzb6E-Zr2rvoCZEl72pY",
             title: "Temporada 2 - Episodio 2 -"
        },
        {
            uqload: "https://uqload.net/y19n7exxs4hd.html",
            mega:"https://mega.nz/embed/hVV3yaTS#lCMbJN-9Mnj3Og1XZ03oIbH_xk4c6zZXYqAh1OdTP-g",
             title: "Temporada 2 - Episodio 3 -"
        },
        {
            uqload: "https://uqload.net/o7imhb62dupg.html",
            mega:"https://mega.nz/embed/hBF1RSiS#sAvAcLSoIKkwsvF7Wsg34_0uJt0tU5hTB9BHgD0uQ7Y",
             title: "Temporada 2 - Episodio 4 -"
        },
        {
            uqload: "https://uqload.net/f910k5pbplr4.html",
            mega:"https://mega.nz/embed/dFdFyQQa#7CN2aPBxsj2sDegEPQ33A0wWfEWzounmDO99pPUaJUk",
             title: "Temporada 2 - Episodio 5 -"
        },
        {
            uqload: "https://uqload.net/3tdowqyjjqtb.html",
            mega:"https://mega.nz/embed/ZQdlEAJT#cNaiYowplw41p_ZTFUxkmp5N_cT9FdMAVAYrj1DGiUM",
             title: "Temporada 2 - Episodio 6 -"
        },
        {
            uqload: "https://uqload.net/l1eeyh7a4vtn.html",
            mega:"https://mega.nz/embed/9UM3kYqK#pEWBiIfRKNIX6Zhn2aDAoCqr9CItIyvFZBSNyNHk4Xc",
             title: "Temporada 2 - Episodio 7 -"
        },
        {
            uqload: "https://uqload.net/pp845d122foq.html",
            mega:"https://mega.nz/embed/xEVlAYYB#0vzL1JR44jw_a5SCVD4p74fKmqjZJsBy-p4et58YQY8",
            title: "Temporada 2 - Episodio 8 -"
        },
        {
            uqload: "https://uqload.net/r71t86ma08jz.html",
            mega:"https://mega.nz/embed/xQMRGIhA#zsQ502sDB-YYOyqQvjkjF_TpMEeCBbCXp70Ypj4_35g",
            title: "Temporada 2 - Episodio 9 -"
        },
        {
            uqload: "https://uqload.net/ybsbfdjzwudd.html",
            mega:"https://mega.nz/embed/8IEXDA6Y#LCUK3a90fPRhyXNSJ928j2W_wMNqaehD_DJmrGhKvmU",
            title: "Temporada 2 - Episodio 10 -"
        },
        {
            uqload: "https://uqload.net/wh81qwxrr8vl.html",
            mega:"https://mega.nz/embed/cMU3XKKZ#_76Y5Dic2CbdhynovOdX6Jg8XjP3zixBv90uXrTql9w",
            title: "Temporada 2 - Episodio 11 -"
        },
        {
            uqload: "https://uqload.net/p3n33hcqscmj.html",
            mega:"https://mega.nz/embed/UQdB2SKA#JDlhSQ-gUqPCBeNw9fODvclpROF0j4-4oEG93TqmB7E",
            title: "Temporada 2 - Episodio 12 -"
        },
        {
            uqload: "https://uqload.net/k89r2w3ff2vo.html",
            mega:"https://mega.nz/embed/Zdd1QACa#Re40XlXwrsCx4BmwgkOYPXim2pMb3o4KlT4qrhyXPoo",
            title: "Temporada 2 - Episodio 13 -"
        },
        {
            uqload: "https://uqload.net/ujztgrx08ymj.html",
            mega:"https://mega.nz/embed/9cFHSYqa#GWamzIwXnkyfX3CPDkJDRfjRFueH59SGkRgY-6qVraM",
            title: "Temporada 2 - Episodio 14 -"
        },
        {
            uqload: "https://uqload.net/780s44avi6uf.html",
            mega:"https://mega.nz/embed/MRF1hASJ#5zMjv1ZIVBopZlF8yfo_JTQQlITsSDQXaT3PaVbEwO4",
            title: "Temporada 2 - Episodio 15 -"
        },
        {
            uqload: "https://uqload.net/h9zudnvh4m03.html",
            mega:"https://mega.nz/embed/gRF3XYRR#MC_d2So5MzaqCp2RimRhQYbQVSJK6rLKdQ1AH9gRlgI",
            title: "Temporada 2 - Episodio 16 -"
        },
        {
            uqload: "https://uqload.net/b4w0024wdlxw.html",
            mega:"https://mega.nz/embed/EVcHxAQC#6FiUlJG7bcb5Tn8s2ouTAeoKYzIq8UZQUllsn4swxF4",
            title: "Temporada 2 - Episodio 17 -"
        },
        {
            uqload: "https://uqload.net/enamf0qk1jhr.html",
            mega:"https://mega.nz/embed/IZdzmS7K#6SD70nEZWK6HFWak1w-YHj4GpvAWFsYjkcmvR3UP9rk",
            title: "Temporada 2 - Episodio 18 -"
        },
        {
            uqload: "https://uqload.net/nqt29no75u46.html",
            mega:"https://mega.nz/embed/lNtVWKjJ#0yvQdp8lLNTDig-X3IE0moKHYaptpL-SzY92ZjSHyR4",
            title: "Temporada 2 - Episodio 19 -"
        },
        {
            uqload: "https://uqload.net/1vnclwv5wr4p.html",
            mega:"https://mega.nz/embed/ZA8D1QJT#erMnSYLjNUdgajmIO3I6YggT0iDzCQr2ZgkrIlyfVr0",
            title: "Temporada 2 - Episodio 20 -"
        },
        {
            uqload: "https://uqload.net/soom247tojch.html",
            mega:"https://mega.nz/embed/VRlHjSpa#Puyfz0yYzmN-pPQRKAcKzAhY87yOhL_0C93eutkadDU",
            title: "Temporada 2 - Episodio 21 -"
        },
        {
            uqload: "https://uqload.net/sdi4q9ydwwyd.html",
            mega:"https://mega.nz/embed/0R8nCaAI#fMguhJCUdVXot-7vj-HZb-VTMvyrgloGiXjNPPgxhP0",
            title: "Temporada 2 - Episodio 22 -"
        },
        {
            uqload: "https://uqload.net/bjd8fa4isu88.html",
            mega:"https://mega.nz/embed/6WIkxbhC#koS4WelVPrQQwmCMwh4y7PZujlvrIWaPHawspL0VKmI",
            title: "Temporada 3 - Episodio 1 -"
        },
        {
            uqload: "https://uqload.net/ete3mrxn856c.html",
            mega:"https://mega.nz/embed/4csHFQRJ#QxZVg7gk7ISuv4BibyRdkosQduhjAYp-bhxvxr61Nhs",
            title: "Temporada 3 - Episodio 2 -"
        },
        {
            uqload: "https://uqload.net/2crkfh2d0ueh.html",
            mega:"https://mega.nz/embed/CGRyARrT#NkrWUTqyZ5pGJ_WlxRlMfuAa5yjfRJe5lu8y4iLq7ps",
            title: "Temporada 3 - Episodio 3 -"
        },
        {
            uqload: "https://uqload.net/zwqrg8wnhldb.html",
            mega:"https://mega.nz/embed/oN83XaCY#oKLZ_sEwLjoo19D8NTp-mV_IKcU4b_U90IqMmDb_Sdg",
            title: "Temporada 3 - Episodio 4 -"
        },
        {
            uqload: "https://uqload.net/pxgujjw5b2sf.html",
            mega:"https://mega.nz/embed/FQsjla5I#R1-AGPFiIyPeXvUB6Ore2xzyXCzsvT9y0PatcvP29BQ",
            title: "Temporada 3 - Episodio 5 -"
        },
        {
            uqload: "https://uqload.net/q37b2iqdtk8e.html",
            mega:"https://mega.nz/embed/NZ0l3SBY#Kc1Ov9ZI7XAIbXhUm8gMlyS-DX4VXrUY1fiWTlYOEII",
            title: "Temporada 3 - Episodio 6 -"
        },
        {
            uqload: "https://uqload.net/xed1ebitob0s.html",
            mega:"https://mega.nz/embed/gF9DjYJK#lCv2N8O3lpG4vQcJlQ0Dm6rHjGkeXZcAlZWjNGPMDOc",
            title: "Temporada 3 - Episodio 7 -"
        },
        {
            uqload: "https://uqload.net/4nzbsap99nmt.html",
            mega:"https://mega.nz/embed/wI9FmQiD#BAcpXZq9SxVD6kTOgYfANx3EYF5ZZrd5p_spQM4vyJA",
            title: "Temporada 3 - Episodio 8 -"
        },
        {
            uqload: "https://uqload.net/ixfmufyh4fkr.html",
            mega:"https://mega.nz/embed/wdkzQC5A#3z0Y01P7xqaSU4AuC9HXTK7N8Exm-X3Ox4WTJUmPi0Y",
            title: "Temporada 3 - Episodio 9 -"
        },
        {
            uqload: "https://uqload.net/8leul9piklfb.html",
            mega:"https://mega.nz/embed/ER0lzCZT#DYgNmNyoA9HjB9_a0TW0vLVoEQJBqmo00Y33zD5d4S4",
            title: "Temporada 3 - Episodio 10 -"
        },
        {
            uqload: "https://uqload.net/klzxkb2loyum.html",
            mega:"https://mega.nz/embed/OKQS3LLZ#mCSR0YtNncMoqLkLd07iHDP8R1Yjf_7oGXNL3gcm4dQ",
            title: "Temporada 3 - Episodio 11 -"
        },
        {
            uqload: "https://uqload.net/ywplil3h8xmd.html",
            mega:"https://mega.nz/embed/QAlxCYTa#0q_tldSt7N1oW1YlDwuAeuZRH1staHVqY1ADeqsvKw4",
            title: "Temporada 3 - Episodio 12 -"
        },
        {
            uqload: "https://uqload.net/e5qpw2ircsrn.html",
            mega:"https://mega.nz/embed/IJlBDKJZ#TKHq-3zGQnXByewjtuncFo2ipbgn2kC244zjIvn6i88",
            title: "Temporada 3 - Episodio 13 -"
        },
        {
            uqload: "https://uqload.net/2hsxqs6qp75m.html",
            mega:"https://mega.nz/embed/EBtHQYpS#oeDO12rxgCEDztlHH-4DJ3JKTq-0Y2QyTQmLKQXRgPI",
            title: "Temporada 3 - Episodio 14 -"
        },
        {
            uqload: "https://uqload.net/eaw43hwfvpkv.html",
            mega:"https://mega.nz/embed/QIsTyCbC#kGrY87r48FvUGooMmPv3A01SzWfS8S3Mw3Xz7N3_v0o",
            title: "Temporada 3 - Episodio 15 -"
        },
        {
            uqload: "https://uqload.net/tk002917a5jx.html",
            mega:"https://mega.nz/embed/BBkh3QDT#4SEaMrAPUApwqpMjWMAoD6tWUi_V8P60rFMvtoy5lnU",
            title: "Temporada 3 - Episodio 16 -"
        },
        {
            uqload: "https://uqload.net/zf6yvgmtc7o7.html",
            mega:"https://mega.nz/embed/3TRiHDAb#3qHE16wR2tXCLQ5dYlK4KNtCH6YL2hpoxNQot-gA71A",
            title: "Temporada 3 - Episodio 17 -"
        },
        {
            uqload: "https://uqload.net/cdj2d4y8xu7b.html",
            mega:"https://mega.nz/embed/QZ91UAKI#apY8O_aN16HV1iExbqETeAndA4PywZw0Rs0l7_CPmfs",
            title: "Temporada 3 - Episodio 18 -"
        },
        {
            uqload: "https://uqload.net/fbnmtlt9zxgw.html",
            mega:"https://mega.nz/embed/9c0RVYCJ#4POT82-FrfZzAkXLGCyYomDWNd1Gtm8h-1Xz1I5fSKY",
            title: "Temporada 3 - Episodio 19 -"
        },
        {
            uqload: "https://uqload.net/nclug5r0vzmj.html",
            mega:"https://mega.nz/embed/pRkVxIhY#KRhryKl6a5l90Y5D1bllWakLSrRChfdWQW1u57JrfRY",
            title: "Temporada 3 - Episodio 20 -"
        },
        {
            uqload: "https://uqload.net/aqdeeedwe48i.html",
            mega:"https://mega.nz/embed/ZNtzXSjL#Dhnb8T0YVz03GwruNTUbreWq8sGVvWwS-qsFgCGCrEQ",
            title: "Temporada 3 - Episodio 21 -"
        },
        {
            uqload: "https://uqload.net/lrh7jqnuvhqb.html",
            mega:"https://mega.nz/embed/IQ8nSY7Z#Qc23NSFuajiNPQ9ARf3-qjRUx2FRz-tqlkGD71p_zuY",
            title: "Temporada 3 - Episodio 22 -"
        },
        {
            uqload: "https://uqload.net/okkpmpo35sns.html",
            mega:"https://mega.nz/embed/LfZW2ZpJ#42MOrUPmRNplN7V2POwit2bVpVh4L44eI8-BjwVkxu0",
            title: "Temporada 3 - Episodio 23 -"
        },
        {
            uqload: "https://uqload.net/2o1xxj3d30l0.html",
            mega:"https://mega.nz/embed/wc8zHCBI#5luzozqp7u4W3_7UA0gOTm1KwubkybzRaipa_5tn_mw",
            title: "Temporada 3 - Episodio 24 -"
        },
        {
            uqload: "https://uqload.net/vt44mv8i8l6y.html",
            mega:"https://mega.nz/embed/MZ1FiY4Q#GSg66o7x3dlMFLp1BMHDPu6P1Y99sp9rM2MS5TmuYEs",
            title: "Temporada 4 - Episodio 1 -"
        },
        {
            uqload: "https://uqload.net/6xcpn1s0o6ew.html",
            mega:"https://mega.nz/embed/FQ0RSIhK#si_wZJnbaCgpARgyRnvI0olfal7l2FlNfrFHDJICffk",
            title: "Temporada 4 - Episodio 2 -"
        },
        {
            uqload: "https://uqload.net/dlptoz0pzfk3.html",
            mega:"https://mega.nz/embed/lc0nkIYY#4IFSrMvoou0c_aVspAjRJNlEkFmQKpHCER5In01_Mqw",
            title: "Temporada 4 - Episodio 3 -"
        },
        {
            uqload: "https://uqload.net/2dx0a6buflxu.html",
            mega:"https://mega.nz/embed/II1xWABB#4rdVrZWnEI0xlhKYj49uUZ_Di3wG_2oL3WRHxNGBt8A",
            title: "Temporada 4 - Episodio 4 -"
        },
        {
            uqload: "https://uqload.net/yqw6r2p6nlr7.html",
            mega:"https://mega.nz/embed/dZt1EAoS#sd9KuNi04TfBF0CmpNTgStiVF_8x9lcH_cvcVLoKMSo",
            title: "Temporada 4 - Episodio 5 -"
        },
        {
            uqload: "https://uqload.net/ngyulzf7nyp1.html",
            mega:"https://mega.nz/embed/8MlHSCxB#4b_U5_m-rGK-xN1l4SS4Ejc0J2hm9pbW2AhIwyNMmGk",
            title: "Temporada 4 - Episodio 6 -"
        },
        {
            uqload: "https://uqload.net/6gcod0mkug5z.html",
            mega:"https://mega.nz/embed/1Z9RiITb#4FyUTYbr3Pq8S9GNzWxlXfu1cnTF6izgM9rhtpV48PY",
            title: "Temporada 4 - Episodio 7 -"
        },
        {
            uqload: "https://uqload.net/8w0xf73yuyk6.html",
            mega:"https://mega.nz/embed/YMknzaQK#yWb5u4kGs2qUvva-Gn5OX0WPqBF74CzlEuYcpfbcXqk",
            title: "Temporada 4 - Episodio 8 -"
        },
        {
            uqload: "https://uqload.net/xcvh7xqj4e1r.html",
            mega:"https://mega.nz/embed/IckhmaJT#Lvh8H0uSZJsxGZHjTs6WGodTF3W4yo9Mhj_-xx5RRFA",
            title: "Temporada 4 - Episodio 9 -"
        },
        {
            uqload: "https://uqload.net/9pshdnnvtzby.html",
            mega:"https://mega.nz/embed/BI0XWYrT#bplAFosHRNH62-Wuz3gqU64YFSTnhlK7PUSCVFGb2_A",
            title: "Temporada 4 - Episodio 10 -"
        },
        {
            uqload: "https://uqload.net/sp7nz5o3obux.html",
            mega:"https://mega.nz/embed/pY9XQYob#IaRWV8M8RRZF_Mn99kdGJdOnt1jDgbw-9AfMa_ZmoC0",
            title: "Temporada 4 - Episodio 11 -"
        },
        {
            uqload: "https://uqload.net/xmw2wfy02r82.html",
            mega:"https://mega.nz/embed/0E0xEa4Z#b8WmClSs7GreRX4SZknTxyquDDKZYhsvzf1MyRT7hQ0",
            title: "Temporada 4 - Episodio 12 -"
        },
        {
            uqload: "https://uqload.net/e3pz2jm9xtx8.html",
            mega:"https://mega.nz/embed/tAkBna5a#DMG2_THAGCQ7xrbcUTcw-fSnxa4aeQozZEkjdWrDPDU",
            title: "Temporada 4 - Episodio 13 -"
        },
        {
            uqload: "https://uqload.net/h4q5guhqg4au.html",
            mega:"https://mega.nz/embed/dd9HQALK#WH4HEacG1ihcFFr-LJ6-RH62NmgwM31sl9Es5kE70Zo",
            title: "Temporada 4 - Episodio 14 -"
        },
        {
            uqload: "https://uqload.net/bkavt2jcse4u.html",
            mega:"https://mega.nz/embed/QMkXVQZD#2Mn3hkXKFLJCdPyOGMgfW6xU5HerMXrzw9fRVRyGkSs",
            title: "Temporada 4 - Episodio 15 -"
        },
        {
            uqload: "https://uqload.net/4ceqcpxp6qnz.html",
            mega:"https://mega.nz/embed/5EtHyajQ#yWTl5ZBrLdnz4YYxhCbRv-kXCxLdP3nXsotTWXojeF4",
            title: "Temporada 4 - Episodio 16 -"
        },
        {
            uqload: "https://uqload.net/hf6hgupwygi2.html",
            mega:"https://mega.nz/embed/FR9BDAaR#wxIDeeYONYhrG_alUzrTbWtz_B1dF7zurZpux326CQc",
            title: "Temporada 4 - Episodio 17 -"
        },
        {
            uqload: "https://uqload.net/mjqmrzck7ewh.html",
            mega:"https://mega.nz/embed/MNlVgSzK#c__s2PpaXp5SlnhW9GGmRlOHv65kjjW5zNVWvjU6XBE",
            title: "Temporada 4 - Episodio 18 -"
        },
        {
            uqload: "https://uqload.net/sginmuxwja4k.html",
            mega:"https://mega.nz/embed/iPQgBRqL#tLfFmvMlLtanFXTimdlec0vF-blkLsUgGE3zMk5LgpA",
            title: "Temporada 4 - Episodio 19 -"
        },
        {
            uqload: "https://uqload.net/v4cn4si5p675.html",
            mega:"https://mega.nz/embed/1Z9DEIbS#mrl7gIR634_kglDIYKc6ez6h3-HX4UVsZqkr9kxV0HY",
            title: "Temporada 4 - Episodio 20 -"
        },
        {
            uqload: "https://uqload.net/lgar0ne05wji.html",
            mega:"https://mega.nz/embed/kd9FnSpQ#Zz-73Wb2QdliChrUjCSbyY5tGXSFsf3yBAMhEocDWvg",
            title: "Temporada 4 - Episodio 21 -"
        },
        {
            uqload: "https://uqload.net/eece7psya3si.html",
            mega:"https://mega.nz/embed/ZB9FBSLQ#yp-jslN-6jH-RZ2RvX0pYaK4nT-d2mkxfcmASkbD_48",
            title: "Temporada 4 - Episodio 22 -"
        },
        {
            uqload: "https://uqload.net/kv4zk5xjrfqg.html",
            mega:"https://mega.nz/embed/Bdl1iapY#-6mdlDvN7AkKAebHM3dfKIKqLYxA1LcasMNZkRMez5I",
            title: "Temporada 4 - Episodio 23 -"
        },
        {
            uqload: "https://uqload.net/vrdxur31jz2d.html",
            mega:"https://mega.nz/embed/wFllSaiD#5fio6v-mDDpCgQuxd7npku0mqbHO9QDb4VsQmeJItkM",
            title: "Temporada 4 - Episodio 24 -"
        },
        {
            uqload: "https://uqload.net/g94ub8zfuh6u.html",
            mega:"https://mega.nz/embed/ERszyACA#weKARXlKzPvBd2mb3NQq51cF1upmoWmMRKzQ8-Glxek",
            title: "Temporada 5 - Episodio 1 -"
        },
        {
            uqload: "https://uqload.net/r2n066wndxcq.html",
            mega:"https://mega.nz/embed/Yc9xBaLA#0t3UZGJ_BpTe3zkkJtISMhQN8m-BQktOpITDkeVYAbA",
        title: "Temporada 5 - Episodio 2 -"},
        {
            uqload: "https://uqload.net/r2n066wndxcq.html",
            mega:"https://mega.nz/embed/ZM0FFCCJ#Lv3hLKmPf98m35G1CNzYo7O2yRt3eloHoNbSH7izzgo",
            title: "Temporada 5 - Episodio 3 -"
        },
        {
            uqload: "https://uqload.net/azw8mg8xu3r2.html",
            mega:"https://mega.nz/embed/kA9xgIhT#Eorp7L4nPTnodKT6oeywiyQLrCVXuvLhUXnc69bL6vE",
            title: "Temporada 5 - Episodio 4 -"
        },
        {
            uqload: "https://uqload.net/xzkxt36h0io5.html",
            mega:"https://mega.nz/embed/ZV9jTAjS#JjhySKQhnQClJBl41kdKfBQPD4qezyAyc7midqWlv10",
            title: "Temporada 5 - Episodio 5 -"
        },
        {
            uqload: "https://uqload.net/km0mo26sl8ig.html",
            mega:"https://mega.nz/embed/9M13WAZJ#hPd_GB79vvlpXlU0fNjQlK2IUK7OPNrUo5CwnVpqRXA",
            title: "Temporada 5 - Episodio 6 -"
        },
        {
            uqload: "https://uqload.net/km0mo26sl8ig.html",
            mega:"https://mega.nz/embed/cc1BGAQb#tVrbItABeeAqY6VyAkWvX0GhRoGM_cbOu6IuRvqWlE8",
            title: "Temporada 5 - Episodio 7 -"
        },
        {
            uqload: "https://uqload.net/8mdclzhf71g5.html",
            mega:"https://mega.nz/embed/oYlBxKQR#whxq73BWUI-HHH29kR7YVj1jqRlgxHuYtP3WPSKehAc",
            title: "Temporada 5 - Episodio 8 -"
        },
        {
            uqload: "https://uqload.net/pwxhcc1gfmfa.html",
            mega:"https://mega.nz/embed/sUt3mQQC#lpnGZJap2isxSnlUmysdo8iLJM0Zf6y5Cv_bRwa9AIo",
            title: "Temporada 5 - Episodio 9 -"
        },
        {
            uqload: "https://uqload.net/d4c7ur7vdv87.html",
            mega:"https://mega.nz/embed/AJtDGIJK#qUPvjP64sdCtGhJ5rGV6sXjOIIK1KfJVVvJCkESLU5s",
            title: "Temporada 5 - Episodio 10 -"
        },
        {
            uqload: "https://uqload.net/xhpuddzlog2s.html",
            mega:"https://mega.nz/embed/ME1nTAwT#4dnmgci9cWnW4N0zSJEgWQHNMGFrI93k0xGoDZcSdww",
            title: "Temporada 5 - Episodio 11 -"
        },
        {
            uqload: "https://uqload.net/j78aco9tbvgt.html",
            mega:"https://mega.nz/embed/sYl3UCwb#UcpBvk8wavEen27iaXJuEJqsYEKOYHVppFK7vNpT_tk",
            title: "Temporada 5 - Episodio 12 -"
        },
        {
            uqload: "https://uqload.net/yxwet5be02l1.html",
            mega:"https://mega.nz/embed/8d9ziQQR#jIILtcM7OyUDYkHI8CiSYzNZbM5AV5d-q5NBD_me6Mk",
            title: "Temporada 5 - Episodio 13 -"
        },
        {
            uqload: "https://uqload.net/l8nmi4cp7s36.html",
            mega:"https://mega.nz/embed/eDJgFJaY#pR4AEl0MIJD2kaDT9mGEHxDP9LFegQUOtn7eCRL0rF0",
            title: "Temporada 5 - Episodio 14 -"
        },
        {
            uqload: "https://uqload.net/uad394vck3wr.html",
            mega:"https://mega.nz/embed/gMkhgayI#4AB8qlLGVyrFd22SzHT17xd6gLAA2QeXhKI0FWBib4I",
            title: "Temporada 5 - Episodio 15 -"
        },
        {
            uqload: "https://uqload.net/m1cej7c49laj.html",
            mega:"https://mega.nz/embed/JF8j0aTR#iB06fo3AgDMmkXLhgYusCDn8IqDOU3OBm5fDIBKd1jY",
            title: "Temporada 5 - Episodio 16 -"
        },
        {
            uqload: "https://uqload.net/qs2njo3bsafk.html",
            mega:"https://mega.nz/embed/BUtnGaoD#SQqlnfnEaxwCXLZzb4DEdYoSO5w2_m76CIYhT_ReJjU",
            title: "Temporada 5 - Episodio 17 -"
        },
        {
            uqload: "https://uqload.net/k7xbyi315juk.html",
            mega:"https://mega.nz/embed/NM9VQIwb#z6pz8XWx4Ko-2v31rXuRdmgcQMceJp83cz1lgxJwjD4",
            title: "Temporada 5 - Episodio 18 -"
        },
        {
            uqload: "https://uqload.net/vuri9ehl82su.html",
            mega:"https://mega.nz/embed/SaZSAJKD#4Jorldi43SLM_zIh53-sXfEceibLPUD2tDZYPG2yl38",
            title: "Temporada 5 - Episodio 19 -"
        },
        {
            uqload: "https://uqload.net/dau2swfgwt86.html",
            mega:"https://mega.nz/embed/Nc1lgaoZ#2zYzKvpvu36xxekFcEvKKOPJc_ZCpyE_femosCyD3Nk",
            title: "Temporada 5 - Episodio 20 -"
        },
        {
            uqload: "https://uqload.net/nz6sfnlo5tcn.html",
            mega:"https://mega.nz/embed/gRtRXAKZ#1inFgefL8SkxLDcACLDfidksf-oZuwZg9-erSFeRjs8",
            title: "Temporada 5 - Episodio 21 -"
        },
        {
            uqload: "https://uqload.net/nz6sfnlo5tcn.html",
            mega:"https://mega.nz/embed/sRtVESCS#len6060O-Gk6NV-2SqmB5Q42sxMntWbP7awgXGIvVfo",
            title: "Temporada 5 - Episodio 22 -"
        },
        {
            uqload: "https://uqload.net/hfzuw7edq7v2.html",
            mega:"https://mega.nz/embed/odkRyKQa#a533EhFWUT4X3rnUJE8IMSZ-Sx3OSjDJR-K3NMEH5Mk",
            title: "Temporada 5 - Episodio 23 -"
        },
        {
            uqload: "https://uqload.net/vnnvlp5okqtf.html",
            mega:"https://mega.nz/embed/gA0TyIqR#skGkpGZOVrM9J0XFkG4wPZRX-FNA9qS1OfFpPtgI7zk",
            title: "Temporada 5 - Episodio 24 -"
        },
        {
            uqload: "https://uqload.net/hhf6v1yhogfe.html",
            mega:"https://mega.nz/embed/td1jwKpA#yTjOruEeSjynhRQ0MGaWcgHYhwyy400-5JDfkjA5s_k",
            title: "Temporada 6 - Episodio 1 -"
        },
        {
            uqload: "https://uqload.net/uhzqwqf1xqbk.html",
            mega:"https://mega.nz/embed/Jd1BDCbT#56Xd0uBIHwSxHQYlut5beVYZdq99NKqwexUVIlMWtIs",
            title: "Temporada 6 - Episodio 2 -"
        },
        {
            uqload: "https://uqload.net/rdahf4kdetoi.html",
            mega:"https://mega.nz/embed/xNsz0IgL#n92Tw1eXTt-WD5WPQEOESnChRxJuWAGYUuySSzxD_io",
            title: "Temporada 6 - Episodio 3 -"
        },
        {
            uqload: "https://uqload.net/xfs7o6d7y8jt.html",
            mega:"https://mega.nz/embed/JYlVCCgT#egwsXs06C1hB8EXZElupEww4hd-6_2KL4Wj5_SPeW2s",
            title: "Temporada 6 - Episodio 4 -"
        },
        {
            uqload: "https://uqload.net/ix8jj1qk6l9y.html",
            mega:"https://mega.nz/embed/8Vl1WIaK#y1NdeJSZ4NpUsAY5-Y6a2lLj3ROrXUL592K22tAaJC0",
            title: "Temporada 6 - Episodio 5 -"
        },
        {
            uqload: "https://uqload.net/wb8nufhbqkpv.html",
            mega:"https://mega.nz/embed/8UkXjYoI#fZA-OEaNd4B5hdB2ctsQ9iTxGWwB2B6xTvMacQ8zyEo",
            title: "Temporada 6 - Episodio 6 -"
        },
        {
            uqload: "https://uqload.net/yidcym2e3wjh.html",
            mega:"https://mega.nz/embed/sNkDgabI#TCHGOrztrt3KnKa9yhnQ2rxMZXj5O1Yk-NM8QpUiMdA",
            title: "Temporada 6 - Episodio 7 -"
        },
        {
            uqload: "https://uqload.net/hgdq050nqtl0.html",
            mega:"https://mega.nz/embed/FBtDHQyS#DvE2fULOCzE5LtL1Bj_2EtYwQXAMy5fLuVWdf_uJirA",
            title: "Temporada 6 - Episodio 8 -"
        },
        {
            uqload: "https://uqload.net/ahqkjv6srvhw.html",
            mega:"https://mega.nz/embed/cd9B1a6C#nBwGm8Tswci6qY4RFFOjPngADDgKNP2e52gkeKBg81A",
            title: "Temporada 6 - Episodio 9 -"
        },
        {
            uqload: "https://uqload.net/35qw9961imys.html",
            mega:"https://mega.nz/embed/nDB0iLZZ#mIfT156aso8p-QQ45gPNUvHj6Dz6WSFpcCdkc_rbB-Q",
            title: "Temporada 6 - Episodio 10 -"
        },
        {
            uqload: "https://uqload.net/bo3nhdemwcar.html",
            mega:"https://mega.nz/embed/sZ9ngYrY#FC6-Ag7_m9CxWaruDJQLsuay0q9n28VjvZ8VKhEQaJs",
            title: "Temporada 6 - Episodio 11 -"
        },
        {
            uqload: "https://uqload.net/1ffrcldkfntt.html",
            mega:"https://mega.nz/embed/BY13HIaI#e5dRqz7337-ZvWQ2q0lEbFNz6IOqztIZSlvYD11akyA",
            title: "Temporada 6 - Episodio 12 -"
        },
        {
            uqload: "https://uqload.net/s8qwj6uucnxk.html",
            mega:"https://mega.nz/embed/0Z1VVIhR#NwvGYZEd1yrSe5AHld1xIkUj3mMZf2u60-THalEyC1A",
            title: "Temporada 6 - Episodio 13 -"
        },
        {
            uqload: "https://uqload.net/ofqp2854332d.html",
            mega:"https://mega.nz/embed/gI8niYqC#hspSTk6C6liK05T2leWw1CvU1ay0onBK397JXzO3BLM",
         title: "Temporada 6 - Episodio 14 -"
        },
        {
            uqload: "https://uqload.net/bcasa572zmcq.html",
            mega:"https://mega.nz/embed/iTQAnDBZ#3TgwDFRbcQekkoPBYc5patw0HHy6CfIbxqSN8NEcSes",
            title: "Temporada 6 - Episodio 15 -"
        },
        {
            uqload: "https://uqload.net/k3i3qce0wdfy.html",
            mega:"https://mega.nz/embed/8ZkHwSoQ#0tjq11-mzuS8vBGQSUTYyiNPcn1AtrMtzOz10IulZK8",
            title: "Temporada 6 - Episodio 16 -"
        },
        {
            uqload: "https://uqload.net/ug3s8527k5io.html",
            mega:"https://mega.nz/embed/tA0Bya4B#3Spj5khAzxBLgg3DfI6R_lEBgsemAes803HRbLrliqY",
            title: "Temporada 6 - Episodio 17 -"
        },
        {
            uqload: "https://uqload.net/9afmlremuful.html",
            mega:"https://mega.nz/embed/4B8lBSiR#ktDFUDcdGnkpHUw1lQm6BDWxf-UagQHWdPwyyACGbIA",
            title: "Temporada 6 - Episodio 18 -"
        },
        {
            uqload: "https://uqload.net/k33mv4vfk9e9.html",
            mega:"https://mega.nz/embed/FF0THapY#41X_7INH-oUNLUzJHttvKwdjghqRQndcITUwZVLEsUU",
            title: "Temporada 6 - Episodio 19 -"
        },
        {
            uqload: "https://uqload.net/8p502ure6s8l.html",
            mega:"https://mega.nz/embed/dQkxXQLK#Oh8qz4mgipPp65MPRRBdt5EBl62MJ5NZ6EsZJrhL7us",
            title: "Temporada 6 - Episodio 20 -"
        },
        {
            uqload: "https://uqload.net/ybi3uf7v0vdh.html",
            mega:"https://mega.nz/embed/pZ9VnAxZ#i7aa-rOqQpW74LB3x9f-sb6ydFrMt-bi7jJB_Bc8QsU",
            title: "Temporada 6 - Episodio 21 -"
        },
        {
            uqload: "https://uqload.net/yacvl7lbvwgu.html",
            mega:"https://mega.nz/embed/EUsjkAqT#QQiNlaHD8xTv8NjbgT6irUijB4V-ZrHPwC5o0tRC1KI",
            title: "Temporada 6 - Episodio 22 -"
        },
        {
            uqloadrl: "https://uqload.net/g0t247iwdlb9.html",
            mega:"https://mega.nz/embed/UM03RIAB#qZ6QNjZtfPe1hRnDM07FErGiPAraILnkUjkttMK_IRc",
            title: "Temporada 6 - Episodio 23 -"
        },
        {
            uqload: "https://uqload.net/nf2lsf7dowwt.html",
            mega:"https://mega.nz/embed/ZN0RDaiB#CIFOiMPQRooQsTflLu8lqjUN92WYGU1BrxXrQeFpQCM",
            title: "Temporada 6 - Episodio 24 -"
        },
        {
            uqload: "https://uqload.net/9jstu3k18c9w.html",
            mega:"https://mega.nz/embed/oM9T3CST#sAjcMper4--TcHSaCzUZqHwxKVdFP8uuhvuiRAW-a-I",
            title: "Temporada 7 - Episodio 1 -"
        },
        {
            uqload: "https://uqload.net/sa6dob6xyyzg.html",
            mega:"https://mega.nz/embed/QU0HyYhA#BxbbWRtQKZaN294ed-M6KwsYDvuIvs5alRd5KCQTn-s",
            title: "Temporada 7 - Episodio 2 -"
        },
        {
            uqload: "https://uqload.net/cwzkizzyx1k4.html",
            mega:"https://mega.nz/embed/tYlhDCzK#8KO-sH2m9KuYZwfZvLL9Hiho6YRG5zNlGfz38zvyt6E",
            title: "Temporada 7 - Episodio 3 -"
        },
        {
            uqload: "https://uqload.net/uh2m6avrtr9o.html",
            mega:"https://mega.nz/embed/sd1hCaZa#fmzdAI9CgKFZLO6_hTaV8w22GN9ldCIZXmlDqlsvv08",
            title: "Temporada 7 - Episodio 4 -"
        },
        {
            uqload: "https://uqload.net/mcot0j1mcb5a.html",
            mega:"https://mega.nz/embed/8clz3CyR#x9p59RbNPJXPcgjoxCz0E2M1aBhGG-6XY-gs_CuDBJo",
            title: "Temporada 7 - Episodio 5 -"
        },
        {
            uqload: "https://uqload.net/e2sb7bk63nnd.html",
            mega:"https://mega.nz/embed/HPYmQZyT#ok0Tcst_YjpXT457OyKLil-nAAWxZpPz81yIEY8u1FA",
            title: "Temporada 7 - Episodio 6 -"
        },
        {
            uqload: "https://uqload.net/vdsacu4u39ge.html",
            mega:"https://mega.nz/embed/VRs1CYxI#zsvrYupKQnDgmZqR9Fo9FK9_l0_yQ-VgAhcrOP7vB2A",
            title: "Temporada 7 - Episodio 7 -"
        },
        {
            uqload: "https://uqload.net/zvfpj6zqfvw6.html",
            mega:"https://mega.nz/embed/QF0D3aKT#MV7bCiWAiGUZuCSqK2EzSSgG6wfcb7VGm69SgQNJyV4",
            title: "Temporada 7 - Episodio 8 -"
        },
        {
            uqload: "https://uqload.net/721pw0ym5xsa.html",
            mega:"https://mega.nz/embed/5UsBACqQ#AEz95Te7QR24r3oXQxaYY9v2IhkkSRkHvXzbuWXHAD0",
            title: "Temporada 7 - Episodio 9 -"
        },
        {
            uqload: "https://uqload.net/ehxui16by9zm.html",
            mega:"https://mega.nz/embed/sJkVjKRC#9aNYWwUTcGx2VF8HIQVPEhv33ou1sX8K71F1uulOhc4",
            title: "Temporada 7 - Episodio 10 -"
        },
        {
            uqload: "https://uqload.net/pka6gvavxwxg.html",
            mega:"https://mega.nz/embed/9QlD2YxL#8x43Q2A9HNBNf61cJQ0plk_5DAqLQg0wE85EkYuImBM",
            title: "Temporada 7 - Episodio 11 -"
        },
        {
            uqload: "https://uqload.net/cdivnk0zrd57.html",
            mega:"https://mega.nz/embed/cckTxYTA#hR5hl30uNDksvbth3C99kulqp-wjCL1eI3ZDEZDydNg",
            title: "Temporada 7 - Episodio 12 -"
        },
        {
            uqload: "https://uqload.net/d5d1tnuxhkir.html",
            mega:"https://mega.nz/embed/vCZWnDhJ#mupcfkRV8bm7DJTmxgOeEECHvSV1Mpa6hyva271gGv4",
            title: "Temporada 7 - Episodio 13 -"
        },
        {
            uqload: "https://uqload.net/x2eysdf8xnlu.html",
            mega:"https://mega.nz/embed/gB8TgCKb#LVKDtZqAjNXueMhOxbk-_y2rDll72MvvAhazkNE6YXU",
            title: "Temporada 7 - Episodio 14 -"
        },
        {
            uqload: "https://uqload.net/5pt9poty04m6.html",
            mega:"https://mega.nz/embed/9c0zXKDY#BzZpTyHVEWELt5SrAcAuIlGvhsmEhTJyu_LEY1wgEio",
            title: "Temporada 7 - Episodio 15 -"
        },
        {
            uqload: "https://uqload.net/ruvsmmpe6897.html",
            mega:"https://mega.nz/embed/Zc1zQChB#TC6KwyZqVH7L3TGmF_7WE2rxCLlt9EENe2SPmwKfOJA",
            title: "Temporada 7 - Episodio 16 -"
        },
        {
            uqload: "https://uqload.net/sv8zrvmhrtfi.html",
            mega:"https://mega.nz/embed/LeYWUB5K#yQ9PQ-ZVHokC9gfmrGg42PfaPYRo__nKUlMgUvjlA0s",
            title: "Temporada 7 - Episodio 17 -"
        },
        {
            uqload: "https://uqload.net/kyysl9hcxqap.html",
            mega:"https://mega.nz/embed/4d0FxAAL#rX9rmMncW9Z_7IET3KkYedx1cK4ea2ku96YtUtZFnEE",
            title: "Temporada 7 - Episodio 18 -"
        },
        {
            uqload: "https://uqload.net/iyqgdmwv8ett.html",
            mega:"https://mega.nz/embed/ANkHCQaa#mC7OLwLuoOfdes7sD7yeiXbqoXEMMCVAvDtIqPFE5XY",
            title: "Temporada 7 - Episodio 19 -"
        },
        {
            uqload: "https://uqload.net/hynmoql97lry.html",
            mega:"https://mega.nz/embed/kM1nRQYB#yO8gn9H_2SNZQahk1AnAjA9UB5J5VGdlk3waw1335Wk",
            title: "Temporada 7 - Episodio 20 -"
        },
        {
            uqload: "https://uqload.net/n06qyrtuno5x.html",
            mega:"https://mega.nz/embed/oN8T1apA#BCLJeUlc86xPEKlIu9Sdxsjpun_6Bc_3EMJ8b0SuIqU",
            title: "Temporada 7 - Episodio 21 -"
        },
        {
            uqload: "https://uqload.net/gh2xx0xnny0e.html",
            mega:"https://mega.nz/embed/ZJkliSYQ#9exCLoFXwF5_bJTZkdAPM38Kx0KBJ4nW3hj8ATEc7Jo",
            title: "Temporada 7 - Episodio 22 -"
        },
        {
            uqload: "https://uqload.net/amezy1abofbz.html",
            mega:"https://mega.nz/embed/dctVwQKK#RknAFj5EuUyc8otMe3casMHUNuab73uH5ejzf7VXfrU",
            title: "Temporada 7 - Episodio 23 -"
        },
        {
            uqload: "https://uqload.net/m5cfm5kipcuh.html",
            mega:"https://mega.nz/embed/oAshmaRI#BSal8aTYxLXtzcGTAXcv_glm8i2Xazl-jKziMiGT9Fc",
            title: "Temporada 7 - Episodio 24 -"
        },
        {
            uqload: "https://uqload.net/z184tov0puao.html",
            mega:"https://mega.nz/embed/BAlHhI7K#AwLbaL4qPtBzQGLrX2kb1ZS4wzNF6u0aE_DQ0DPafkM",
            title: "Temporada 7 - Episodio 25 -"
        },
    ]
        const OVAs = [

        {
            uqload: "https://uqload.net/h1afd66lsnh7.html",
            mega:"https://mega.nz/embed/takmjbrb#RKEVEyhiy2XkA2q0E43eUp3eBstOGEUyKehWOv8tPK4",
            title: "OVA - Episodio 1 -"
        },
        {
            uqload: "https://uqload.net/3he4vukv6erd.html",
            mega:"https://mega.nz/embed/wONUGLLR#M62nRhOgX5WKdVjO927t5CbaWNqDpsjpJMkivSscvaQ",
            title: "OVA - Episodio 2 -"
        },
        {
            uqload: "https://uqload.net/6ypd5w4ru1o3.html",
            mega:"https://mega.nz/embed/ZSNwGZ5L#jR9hoHmoNtfkbg8hDApcMHbuyjDD05FNMqFcl-DYEEE",
            title: "OVA - Episodio 3 -"
        },
        {
            uqload: "https://uqload.net/sivy78jycs3i.html",
            mega:"https://mega.nz/embed/hCt3yLrD#yNrYKp1HOgPb7x9osJhj5ydbJjcopZOlCk20wqLaVeg",
            title: "OVA - Episodio 4 -"
        },
        {
            uqload: "https://uqload.net/xy2qthibm23o.html",
            mega:"https://mega.nz/embed/decDBB7Y#z9l4_0vUhdqFczsQKBNA7gs8bKnTkCQLrwcpQqrjG-Y",
            title: "OVA - Episodio 5 -"
        },
        {
            uqload: "https://uqload.net/ir0cr0r9hzq4.html",
            mega:"https://mega.nz/embed/oCl0wJAa#ehvBsbABR_ICJahyyg-ppjNLZkcaEf4vAENExI40emk",
            title: "OVA - Episodio 6 -"
        },
        {
            uqload: "https://uqload.net/l57qo321sqr3.html",
            mega:"https://mega.nz/embed/gCsxWRaZ#_TGDfiuThnvrCx1AKMqOgVwFE4LUf_zJ6tOdypS-v9k",
            title: "OVA - Episodio 7 -"
        },
        {
            uqload: "https://uqload.net/9bvw95u7v7kq.html",
            mega:"https://mega.nz/embed/ZWUiCIgC#K9EK_3dGeBu8epY4Sr3bocd3bDvfZsU5Kda0VzJFyus",
            title: "OVA - Episodio 8 -"
        },
        {
            uqload: "https://uqload.net/nmhkzn9enggc.html",
            mega:"https://mega.nz/embed/YWlTgYzT#JGhHUEieAFQ5u4a3iE9ishHeHyT9cV_7Jarr8wDnBzQ",
            title: "OVA - Episodio 9 -"
        },
        {
            uqload: "https://uqload.net/4ty9olgosldc.html",
            mega:"https://mega.nz/embed/VaUT2SIJ#WXBEqScgXpmbWIC8NZxx07_yaAVjcevAWSHjsYsfrqA",
            title: "OVA - Episodio 10 -"
        },
        {
            uqload: "https://uqload.net/otwoa6yewzqm.html",
            mega:"https://mega.nz/embed/oKsHnazL#zYLscIK-n01Up8_S39lquyByz09xNFH5uL12lHmmBEQ",
            title: "OVA - Episodio 11 -"
        },
        {
            uqload: "https://uqload.net/3abj0ot59145.html",
            mega:"https://mega.nz/embed/5W0QWSCb#8FRqqI83TjNt1P-AknssmRhRFOfpbrsmHj_vqs8VXuU",
            title: "OVA - Episodio 12 -"
        },
    ]
        const peliculas = [

        {
            uqload: "https://uqload.net/p6m7b61w43nk.html",
            mega:"https://mega.nz/embed/EaFhgI4R#J_2RZ5Fa38h-8DkKKkrZIAnMRhj0JLzeK50TaQ4XIys",
            title: "pelicula 1 -Gran Batalla en Nekonron"
        },
        {
            uqload: "https://uqload.net/whk1dpj8x03i.html",
            mega:"https://mega.nz/embed/1PEUiYLD#ukM7FzQ4rmm0Iqxy6T58NwU096S3DhJJZDGttQpsksc",
            title: "pelicula 2 -Batalla en Togenkyo"
        },
        {
            uqload: "https://uqload.net/cmxp9kg7hit3.html",
            mega:"https://mega.nz/embed/cD8UlDDC#ScflfOqUO69TOZ68jcyChZqqQ8JC5YJs9lkRJQLIzCA",
            title: "pelicula 3 -El equipo de Ranma vs. el Fenix legendario"
        },
    ]
        const Japones = [

        {
            youtube: "https://www.youtube.com/embed/RJCEBLKsoLs",
            title: "Opening 1"
        },
        {
            youtube: "https://www.youtube.com/embed/Y9Tts-oTyXk",
            title: "Ending 1"
        },
        {
            youtube: "https://www.youtube.com/embed/n3u8k9B5YrU",
            title: "Opening 2"
        },
        {
            youtube: "https://www.youtube.com/embed/uzN7S89rCv0",
            title: "Ending 2"
        },
        {
            youtube: "https://www.youtube.com/embed/PgXmdymXB2o",
            title: "Opening 3"
        },
        {
            youtube: "https://www.youtube.com/embed/W4O237xcL04",
            title: "Ending 3"
        },
        {
            youtube: "https://www.youtube.com/embed/X3ce9456Ljc",
            title: "Opening 4"
        },
        {
            youtube: "https://www.youtube.com/embed/ioh93LqtM5o",
            title: "Ending 4"
        },
        {
            youtube: "https://www.youtube.com/embed/oDOk4WDW1uk",
            title: "Opening 5"
        },
        {
            youtube: "https://www.youtube.com/embed/SzLKV8I2gF0",
            title: "Ending 5"
        },
        {
            youtube: "https://www.youtube.com/embed/a60CRYOrLNI",
            title: "Opening 6"
        },
        {
            youtube: "https://www.youtube.com/embed/ZYuwF-uHI6o",
            title: "Ending 6"
        },
        {
            youtube: "https://www.youtube.com/embed/L5cBbJ_U9Sg",
            title: "Opening 7"
        },
        {
            youtube: "https://www.youtube.com/embed/Wcg3Gjf0JLQ",
            title: "Ending 7"
        },
        {
            youtube: "https://www.youtube.com/embed/NjXH08mE-m0",
            title: "Ending 8"
        },
        {
            youtube: "https://www.youtube.com/embed/ysV6PQ1B5rY",
            title: "Ending 9"
        },

    ]
        const Latino = [

        {
            youtube: "https://www.youtube.com/embed/-Q8tKcAi9Jg",
            title: "Remake Opening 1"
        },
        {
            youtube: "https://www.youtube.com/embed/ramyCT8Ot8Y",
            title: "Remake Ending 1"
        },
        {
            youtube: "https://www.youtube.com/embed/kG-D_69kO5U",
            title: "Opening Latino 1"
        },
        {
            youtube: "https://www.youtube.com/embed/DnjZtlnq5tk",
            title: "Ending Latino 1"
        },
        {
            youtube: "https://www.youtube.com/embed/w64VdK2XAHk",
            title: "Opening Latino 2"
        },
        {
            youtube: "https://www.youtube.com/embed/yQ9VnEL94qM",
            title: "Ending Latino 2"
        },
        {
            youtube: "https://www.youtube.com/embed/xqkPHSwffEw",
            title: "Opening Latino 3"
        },
        {
            youtube: "https://www.youtube.com/embed/JBlqmOcnEoo",
            title: "Ending Latino 3"
        },
        {
            youtube: "https://www.youtube.com/embed/z3kFN-tf9Ho",
            title: "Opening Latino 4"
        },
        {
            youtube: "https://www.youtube.com/embed/sOzT2lCsRjA",
            title: "Ending Latino 4"
        },
        {
            youtube: "https://www.youtube.com/embed/Z6zAXGR2ArI",
            title: "Opening Latino 5"
        },
        {
            youtube: "https://www.youtube.com/embed/-TBFf1psa2c",
            title: "Ending Latino 5"
        },
        {
            youtube: "https://www.youtube.com/embed/tSID9QBCLsk",
            title: "Opening Latino 6"
        },
        {
            youtube: "https://www.youtube.com/embed/RqB-cUSFBzg",
            title: "Ending Latino 6"
        },
        {
            youtube: "https://www.youtube.com/embed/41evUBjcUzU",
            title: "Opening Latino 7"
        },
        {
            youtube: "https://www.youtube.com/embed/NXTUIA8H1kw",
            title: "Ending Latino 7"
        },
        {
            youtube: "https://www.youtube.com/embed/0MvlkLrfSPA",
            title: "Ending Latino 8"
        },
        {
            youtube: "https://www.youtube.com/embed/q2MlFXji_K4",
            title: "Ending Latino 9"
        },

    ]
    const Remake = [

        {
            uqload: "https://uqload.net/zwcwgp8fq84g.html",
            mega:"https://mega.nz/embed/5GVwBbIB#cYAxDzcn7mtGAevYcJIyrSYmZ6IDpOiE0sKgx1vffyw",
            title: "Temporada 1 Remake - Capitulo 1 -"
        },
        {
            uqload: "https://uqload.net/vqoue3dgbhvi.html",
            mega:"https://mega.nz/embed/nf5wkBRK#l3CQEjrXZdMCsoLgDTjk7a0-qM54OY8tb6Sduln0kpo",
            title: "Temporada 1 Remake - Capitulo 2 -"
        },
        {
            uqload: "https://uqload.net/ub4r6z6vkd4l.html",
            mega:"https://mega.nz/embed/CfA0yLIT#pBUGEHmqQiyWZOOjRpNzIEVtxKYr586uqHTyLshmchQ",
            title: "Temporada 1 Remake - Capitulo 3 -"
        },
        {
            uqload: "https://uqload.net/sdnmnw2fzgir.html",
            mega:"https://mega.nz/embed/AMRCQaTS#DiBBFixcee6DjalbKyEEr6nRq2uhWcUBlW75riU1eys",
            title: "Temporada 1 Remake - Capitulo 4 -"
        },
        {
            uqload: "https://uqload.net/sepj28zuz0b5.html",
            mega:"https://mega.nz/embed/dYZC3bxI#fBvhCiFqI7lHiEJwmtTG4iOybCvNm8Ve1QgdiC4Zm4Q",
            title: "Temporada 1 Remake - Capitulo 5 -"
        },
        {
            uqload: "https://uqload.net/8qagt9fdgkju.html",
            mega:"https://mega.nz/embed/xXsw1ZxD#Pqkg1le2L7czjHDCWXApc4ZWMO2YsdqMVfOq1LbrWcg",
            title: "Temporada 1 Remake - Capitulo 6 -"
        },
        {
            uqload: "https://uqload.net/f9pt6z5j4bhh.html",
            mega:"https://mega.nz/embed/AbFkwKwA#VxxGdLR-pxSnHL_IO0Ml0p1phhqnEsZPfn1B8gmjp1g",
            title: "Temporada 1 Remake - Capitulo 7 -"
        },
        {
            uqload: "https://uqload.net/b64pp68mun6m.html",
            mega:"https://mega.nz/embed/JHM1iByA#UmCdc4NvDukXaMkkNB65g-PwfSZK3JioqjfjWPNNSdg",
            title: "Temporada 1 Remake - Capitulo 8 -"
        },
        {
            uqload: "https://uqload.net/4g0t5pmwks9p.html",
            mega:"https://mega.nz/embed/5YJFnCIQ#x37wrcqQhTxRcqQaM-scwKu0faY1qbLaSN5NMZZN6ZQ",
            title: "Temporada 1 Remake - Capitulo 9 -"
        },
        {
            uqload: "https://uqload.net/g3d55d7wgs61.html",
            mega:"https://mega.nz/embed/TPoDAKRQ#IzxPRsrmlOKcs3NEf9wyyRQ9xlCFw2yFYZDK0VsFQZw",
            title: "Temporada 1 Remake - Capitulo 10 -"
        },
        {
            uqload: "https://uqload.net/ya94oajplxsf.html",
            mega:"https://mega.nz/embed/MzU0xabD#tqX8VDrw2qvOE2Axj824Y5V6_SSFQnrHlpoQTtyJhXg",
            title: "Temporada 1 Remake - Capitulo 11 -"
        },
        {
            uqload: "https://uqload.net/w92fexsfr5q7.html",
            mega:"https://mega.nz/embed/aAtwhTCY#1TS59HR0sW0U_fqhON7zDX22Fo8R-nWDAezz_8rPhQE",
            title: "Temporada 1 Remake - Capitulo 12 -"
        },

     
    ];

    const allContent = [...episodes, ...OVAs, ...Remake, ...Japones, ...Latino, ...peliculas];

    // Validar que hay un video cargado
    if (!videoUrl && !megaUrl) {
        alert("❌ No se ha seleccionado un video válido.");
        window.location.href = 'RanmaWeb.html'; // Redirigir si no hay video válido
        return;
    }

    // Buscar el episodio actual en la lista
    const currentEpisode = allContent.find(episode =>
        episode.uqload === videoUrl ||
        episode.mega === megaUrl ||
        episode.youtube === videoUrl
    );

    if (currentEpisode) {
        titleElement.textContent = currentEpisode.title; // Mostrar el título
    } else {
        titleElement.textContent = "Episodio Desconocido"; // Si no se encuentra, evitar errores
    }

    // Detectar si el video es de YouTube
    const isYouTube = currentEpisode?.youtube !== undefined;

    // Ocultar el selector de servidores si es YouTube
    if (isYouTube) {
        serverSelector.style.display = "none";
    } else {
        serverSelector.style.display = "block"; // Mostrar selector si no es YouTube
    }

    // Modificar la URL de Uqload para usar "embed-" si es necesario
    let uqloadEmbedUrl = videoUrl && videoUrl.includes("uqload.net")
        ? videoUrl.replace('.net/', '.net/embed-')
        : null;

    // 🚀 **Función para cambiar el servidor**
    function cambiarServidor() {
        let selectedServer = serverSelector.value;
        console.log("🔄 Servidor seleccionado:", selectedServer);

        if (selectedServer === "uqload" && uqloadEmbedUrl) {
            player.src = uqloadEmbedUrl;
        } else if (selectedServer === "mega" && megaUrl) {
            player.src = megaUrl;
        } else {
            alert("⚠ No hay un enlace válido para este servidor.");
        }

        console.log("🎥 Video cargado:", player.src);
    }

    // Si el video es de YouTube, cargarlo directamente y ocultar servidores
    if (isYouTube) {
        player.src = currentEpisode.youtube;
    } else {
        // Cargar el servidor por defecto (Uqload primero, si no, Mega)
        if (uqloadEmbedUrl) {
            player.src = uqloadEmbedUrl;
            serverSelector.value = "uqload";
        } else if (megaUrl) {
            player.src = megaUrl;
            serverSelector.value = "mega";
        } else {
            alert("⚠ No hay un enlace válido.");
        }
    }

    // 🛠 **Asegurar que el selector cambia el servidor**
    if (serverSelector) {
        serverSelector.addEventListener("change", cambiarServidor);
    } else {
        console.error("⚠ El selector de servidores no existe en el DOM.");
    }

    // 🚀 **Navegación entre episodios**
    document.getElementById('prevEpisode').addEventListener('click', function () {
        let currentIndex = allContent.findIndex(episode =>
            episode.uqload === videoUrl ||
            episode.mega === megaUrl ||
            episode.youtube === videoUrl
        );

        if (currentIndex > 0) {
            const prevEpisode = allContent[currentIndex - 1];
            window.location.href = `Reproductor.html?video=${prevEpisode.uqload || prevEpisode.youtube}&mega=${prevEpisode.mega}`;
        } else {
            alert("⏪ No hay un episodio anterior.");
        }
    });

    document.getElementById('nextEpisode').addEventListener('click', function () {
        let currentIndex = allContent.findIndex(episode =>
            episode.uqload === videoUrl ||
            episode.mega === megaUrl ||
            episode.youtube === videoUrl
        );

        if (currentIndex !== -1 && currentIndex < allContent.length - 1) {
            const nextEpisode = allContent[currentIndex + 1];
            window.location.href = `Reproductor.html?video=${nextEpisode.uqload || nextEpisode.youtube}&mega=${nextEpisode.mega}`;
        } else {
            alert("⏩ No hay un episodio siguiente.");
        }
    });

    console.log("✅ Script cargado correctamente.");
};