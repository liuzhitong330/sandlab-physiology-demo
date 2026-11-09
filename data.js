window.UNIVERSITY_LAB_DEMO_DATA = {
  "schemaVersion": 1,
  "source": {
    "repo": "https://github.com/SubramanianLab/ecg-tsfm-benchmark",
    "commit": "ba350e1c6b8f40448335e363d367789f4cada3ef",
    "dataUrl": "https://physionet.org/content/nsrdb/1.0.0/",
    "paperUrl": "https://www.biorxiv.org/content/10.64898/2026.05.25.727760v2",
    "cohort": "18 MIT-BIH NSRDB records; referred subjects without significant arrhythmias"
  },
  "settings": {
    "nominalContext": 8192,
    "horizonBeats": 1024,
    "fsHz": 128,
    "variabilityWindowBeats": 16,
    "defaultRmseMs": 200,
    "defaultFactor": 2
  },
  "models": [
    "TimesFM",
    "Chronos-2",
    "Moirai 2.0"
  ],
  "subjects": [
    "16265",
    "16272",
    "16273",
    "16420",
    "16483",
    "16539",
    "16773",
    "16786",
    "16795",
    "17052",
    "17453",
    "18177",
    "18184",
    "19088",
    "19090",
    "19093",
    "19140",
    "19830"
  ],
  "rows": [
    {
      "subjectId": "16265",
      "model": "TimesFM",
      "rmseMs": 210.21954715251923,
      "maeMs": 83.82581174373627,
      "rmssdRetention": 0.0015868993770228,
      "sdnnRetention": 0.0046586039059685,
      "meanObservedRmssdMs": 58.657235145508615,
      "meanPredictedRmssdMs": 0.21077366755162613,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 39.67394284299541,
          "rmssdRetention": 0.051580986591273956
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 50.53244735114435,
          "rmssdRetention": 0.048827902837860496
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 56.441019732861186,
          "rmssdRetention": 0.01600759127089205
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 58.56194840140451,
          "rmssdRetention": 0.01865857506935545
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 59.915403489978495,
          "rmssdRetention": 0.0116840557599364
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 73.23163125735991,
          "rmssdRetention": 0.012037124710004201
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 208.07233431659773,
          "rmssdRetention": 0.00144282900819665
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 311.9972573960347,
          "rmssdRetention": 0.0011306589288258
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 312.94053950284757,
          "rmssdRetention": 0.0007763849972628001
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 317.8519040308818,
          "rmssdRetention": 0.00071136446408535
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 321.0246101114172,
          "rmssdRetention": 0.0006529113944645499
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 320.8329895661742,
          "rmssdRetention": 0.00062667221844825
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 319.2681398444607,
          "rmssdRetention": 0.0005580852882453499
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 112.74782796390596,
          "rmssdRetention": 0.0015014857416111
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 116.99237076858829,
          "rmssdRetention": 0.0015763553201422502
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 116.02032485209348,
          "rmssdRetention": 0.0019666411946875
        }
      ]
    },
    {
      "subjectId": "16265",
      "model": "Chronos-2",
      "rmseMs": 374.4886517524719,
      "maeMs": 220.53612768650055,
      "rmssdRetention": 0.1547513894785225,
      "sdnnRetention": 0.1723796650994843,
      "meanObservedRmssdMs": 58.657235145508615,
      "meanPredictedRmssdMs": 8.645101808712521,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 63.599255648444164,
          "rmssdRetention": 0.24413568156122262
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 73.08055357556039,
          "rmssdRetention": 0.2937904607410081
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 78.0741090525905,
          "rmssdRetention": 0.35694463807844556
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 72.43087698073823,
          "rmssdRetention": 0.39303459696295046
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 57.2801541282235,
          "rmssdRetention": 0.44278708005827283
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 53.93736362349336,
          "rmssdRetention": 0.5905374801030816
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 208.36892452167345,
          "rmssdRetention": 0.1305423828165091
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 319.1539452312887,
          "rmssdRetention": 0.1218030368292276
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 332.19404351418433,
          "rmssdRetention": 0.1153306418935008
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 347.4916142444566,
          "rmssdRetention": 0.1281018841432225
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 385.68790724249277,
          "rmssdRetention": 0.16842015313873293
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 460.5211284092424,
          "rmssdRetention": 0.11676495001319205
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 556.0715360542097,
          "rmssdRetention": 0.08004379267281335
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 554.3012735151073,
          "rmssdRetention": 0.15598521469767776
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 648.2281195312125,
          "rmssdRetention": 0.12858621487183441
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 665.635089088795,
          "rmssdRetention": 0.1371180738286813
        }
      ]
    },
    {
      "subjectId": "16265",
      "model": "Moirai 2.0",
      "rmseMs": 490.92042446136475,
      "maeMs": 372.87017703056335,
      "rmssdRetention": 0.0090087761224303,
      "sdnnRetention": 0.0154841638696359,
      "meanObservedRmssdMs": 58.657235145508615,
      "meanPredictedRmssdMs": 1.0444326987772685,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 51.21969469997526,
          "rmssdRetention": 0.07900764309124755
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 166.27298636213712,
          "rmssdRetention": 0.2149049061401445
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 344.17550225146516,
          "rmssdRetention": 0.21963068399229752
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 435.54898396431577,
          "rmssdRetention": 0.1060270490028798
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 443.79831010183915,
          "rmssdRetention": 0.05090960398932515
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 443.1109988392593,
          "rmssdRetention": 0.03196012715989885
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 480.8602444152074,
          "rmssdRetention": 0.0120074421142134
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 534.2983251543993,
          "rmssdRetention": 0.00397288682277935
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 535.7779704305218,
          "rmssdRetention": 0.0043725708957167
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 538.0766699665021,
          "rmssdRetention": 0.0038066148337583
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 554.3354977188288,
          "rmssdRetention": 0.0037030964501331
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 579.9077838421695,
          "rmssdRetention": 0.0035583464617961
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 615.8074502737944,
          "rmssdRetention": 0.002644540259844
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 564.406533116326,
          "rmssdRetention": 0.00676987671887135
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 584.9563640624298,
          "rmssdRetention": 0.00630723342534255
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 589.4892392587179,
          "rmssdRetention": 0.0072478591253947
        }
      ]
    },
    {
      "subjectId": "16272",
      "model": "TimesFM",
      "rmseMs": 1614.6348714828491,
      "maeMs": 231.8160980939865,
      "rmssdRetention": 0.0013245640789665,
      "sdnnRetention": 0.0033025264480872,
      "meanObservedRmssdMs": 703.0353458129537,
      "meanPredictedRmssdMs": 3.2280491834493703,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 648.4453047374541,
          "rmssdRetention": 0.07413286151589679
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 733.4148409324208,
          "rmssdRetention": 0.0532505122665993
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 1498.8957357768545,
          "rmssdRetention": 0.0017487761064405
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 1737.1158212324262,
          "rmssdRetention": 0.0012876335934624
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 1754.8398313760435,
          "rmssdRetention": 0.00081444284406305
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 1842.2220920877662,
          "rmssdRetention": 0.0007505621581350001
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 1445.3022707323046,
          "rmssdRetention": 0.00084495958831395
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 459.33909629439836,
          "rmssdRetention": 0.0032637296023179004
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 575.4596264958933,
          "rmssdRetention": 0.0029726449803362497
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 707.114226109528,
          "rmssdRetention": 0.0019423104698083498
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 715.883950314096,
          "rmssdRetention": 0.0020585860573658996
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 1687.0543031848806,
          "rmssdRetention": 0.00113182124642295
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 2411.9437969005335,
          "rmssdRetention": 0.00048704021063755004
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 2462.31529182941,
          "rmssdRetention": 0.0006510908910758
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 2314.899966027334,
          "rmssdRetention": 0.00061954530967065
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 2299.548623511583,
          "rmssdRetention": 0.0006493128676439
        }
      ]
    },
    {
      "subjectId": "16272",
      "model": "Chronos-2",
      "rmseMs": 1715.131163597107,
      "maeMs": 492.28566884994507,
      "rmssdRetention": 0.0164965806495322,
      "sdnnRetention": 0.0235025127698675,
      "meanObservedRmssdMs": 703.0353458129537,
      "meanPredictedRmssdMs": 13.909223152920184,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 656.1393572876541,
          "rmssdRetention": 0.02791280873567245
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 750.6019051447239,
          "rmssdRetention": 0.01964354686743085
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 1517.6729399316418,
          "rmssdRetention": 0.0118884108492906
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 1762.0981610964923,
          "rmssdRetention": 0.00967873503054065
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 1782.6589701103703,
          "rmssdRetention": 0.0094541675075161
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 1857.6114971828563,
          "rmssdRetention": 0.011617554897778451
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 1460.8567371735242,
          "rmssdRetention": 0.0192860455513421
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 489.1177698710969,
          "rmssdRetention": 0.09542718393203245
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 651.6550867283227,
          "rmssdRetention": 0.0948416617593361
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 802.7115386768265,
          "rmssdRetention": 0.07256634742504685
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 894.2512811841106,
          "rmssdRetention": 0.08687810884561925
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 1845.0514064936367,
          "rmssdRetention": 0.03361699037348875
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 2582.9328577517476,
          "rmssdRetention": 0.0095852392765344
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 2638.2637164149255,
          "rmssdRetention": 0.01064380326250035
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 2529.856012868136,
          "rmssdRetention": 0.00888824463698185
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 2521.4218874335825,
          "rmssdRetention": 0.0083899782582567
        }
      ]
    },
    {
      "subjectId": "16272",
      "model": "Moirai 2.0",
      "rmseMs": 1814.1521215438843,
      "maeMs": 759.6255540847778,
      "rmssdRetention": 0.0010144148426063,
      "sdnnRetention": 0.0014517883227806,
      "meanObservedRmssdMs": 703.0353458129537,
      "meanPredictedRmssdMs": 1.8976123835471217,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 663.4313353309082,
          "rmssdRetention": 0.033678389305378295
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 852.5714544313232,
          "rmssdRetention": 0.0235269497973412
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 1672.0995168608526,
          "rmssdRetention": 0.00588077719926665
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 1960.2086955996729,
          "rmssdRetention": 0.0018552857018933
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 1995.7353881686963,
          "rmssdRetention": 0.0011505171990801
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 2063.880055372792,
          "rmssdRetention": 0.0006887818408938999
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 1655.486664777356,
          "rmssdRetention": 0.0009949894814475502
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 817.0356389562903,
          "rmssdRetention": 0.00253468508364845
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 895.495730829561,
          "rmssdRetention": 0.00173155897736295
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 1063.364553389488,
          "rmssdRetention": 0.0008418014274159
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 1128.5713204166511,
          "rmssdRetention": 0.000869131009589
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 1913.452645320036,
          "rmssdRetention": 0.00061410199582445
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 2601.039152944021,
          "rmssdRetention": 0.00020742874131164998
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 2645.902236257039,
          "rmssdRetention": 0.00029663586361955
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 2514.8833941193707,
          "rmssdRetention": 0.0002673842895622
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 2498.7583306842403,
          "rmssdRetention": 0.00026717340079
        }
      ]
    },
    {
      "subjectId": "16273",
      "model": "TimesFM",
      "rmseMs": 85.70263534784317,
      "maeMs": 64.58809226751328,
      "rmssdRetention": 0.0066149196321912,
      "sdnnRetention": 0.0170091916664415,
      "meanObservedRmssdMs": 22.58300807583363,
      "meanPredictedRmssdMs": 0.2725619461875017,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 45.424335617092495,
          "rmssdRetention": 0.053972518040769246
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 53.11105070857805,
          "rmssdRetention": 0.05210374327011235
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 58.44809548184142,
          "rmssdRetention": 0.0161284527179424
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 72.5906045811031,
          "rmssdRetention": 0.01583929003669915
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 75.37589033840959,
          "rmssdRetention": 0.0099039678270287
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 75.76055854907868,
          "rmssdRetention": 0.0090845547975737
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 81.56928824684364,
          "rmssdRetention": 0.00568420738021885
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 74.21600319521008,
          "rmssdRetention": 0.00574356932953775
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 70.277432030308,
          "rmssdRetention": 0.0055831335525142
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 60.615339289409405,
          "rmssdRetention": 0.006839978238748649
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 59.629181615670355,
          "rmssdRetention": 0.0060164267025017495
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 64.06546955827729,
          "rmssdRetention": 0.00682235010008575
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 67.60176336670622,
          "rmssdRetention": 0.00629092700565455
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 108.3930455396932,
          "rmssdRetention": 0.0045667123316909496
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 143.83920490005065,
          "rmssdRetention": 0.00324349074269825
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 164.57417447406877,
          "rmssdRetention": 0.0031775196749664
        }
      ]
    },
    {
      "subjectId": "16273",
      "model": "Chronos-2",
      "rmseMs": 298.75075817108154,
      "maeMs": 208.29235017299652,
      "rmssdRetention": 0.3207919904808652,
      "sdnnRetention": 0.2644382008558893,
      "meanObservedRmssdMs": 22.58300807583363,
      "meanPredictedRmssdMs": 9.528706331817794,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 59.536988384271496,
          "rmssdRetention": 0.26688213976836006
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 75.84966674047982,
          "rmssdRetention": 0.2858003629273958
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 81.9545614585898,
          "rmssdRetention": 0.30381508060287843
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 99.89036653265455,
          "rmssdRetention": 0.2946489105574111
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 107.16340965894808,
          "rmssdRetention": 0.2915583033467561
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 103.26015266663074,
          "rmssdRetention": 0.37377538157458956
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 117.0328060510452,
          "rmssdRetention": 0.43256047745280185
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 116.63057238501032,
          "rmssdRetention": 0.4345838564286866
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 102.37560074976734,
          "rmssdRetention": 0.5950329277441582
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 109.43325663036286,
          "rmssdRetention": 0.8723964420382222
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 185.52895399051962,
          "rmssdRetention": 1.088614255463849
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 288.95833857616697,
          "rmssdRetention": 0.8759256380357509
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 389.43738400185777,
          "rmssdRetention": 0.5462300019599836
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 496.2684353305104,
          "rmssdRetention": 0.2445535413732223
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 609.7015811387889,
          "rmssdRetention": 0.17411765667681725
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 665.2363986176046,
          "rmssdRetention": 0.1354459852951485
        }
      ]
    },
    {
      "subjectId": "16273",
      "model": "Moirai 2.0",
      "rmseMs": 490.4477894306183,
      "maeMs": 413.89429569244385,
      "rmssdRetention": 0.0258310953107644,
      "sdnnRetention": 0.0471114410583475,
      "meanObservedRmssdMs": 22.58300807583363,
      "meanPredictedRmssdMs": 1.1060652649586777,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 50.55336241234193,
          "rmssdRetention": 0.0844931806673007
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 166.67509086061975,
          "rmssdRetention": 0.20384986698431273
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 370.45751241029535,
          "rmssdRetention": 0.1752787199227109
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 450.01136625273267,
          "rmssdRetention": 0.0887822216750411
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 495.4540394760469,
          "rmssdRetention": 0.0510824866688175
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 539.3662656575501,
          "rmssdRetention": 0.03439934411457145
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 570.271321836479,
          "rmssdRetention": 0.02515471574114725
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 575.7502716235866,
          "rmssdRetention": 0.01728975140852445
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 571.0117248373659,
          "rmssdRetention": 0.0183819561537275
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 548.978529297063,
          "rmssdRetention": 0.0216188962749772
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 526.4130928980684,
          "rmssdRetention": 0.01733000886935025
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 515.9114510552936,
          "rmssdRetention": 0.016940405742933
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 494.3344318705119,
          "rmssdRetention": 0.0132338288719658
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 495.20566600860315,
          "rmssdRetention": 0.008595931898552251
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 531.8996986369767,
          "rmssdRetention": 0.00651435839128685
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 585.0054055279404,
          "rmssdRetention": 0.0058244270739411
        }
      ]
    },
    {
      "subjectId": "16420",
      "model": "TimesFM",
      "rmseMs": 107.0132702589035,
      "maeMs": 86.80123090744019,
      "rmssdRetention": 0.013852603465752,
      "sdnnRetention": 0.042848747745706,
      "meanObservedRmssdMs": 26.89585332012027,
      "meanPredictedRmssdMs": 0.5425162916940081,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 53.910598936395274,
          "rmssdRetention": 0.07533979680797555
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 51.98284190366794,
          "rmssdRetention": 0.07683155579476675
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 45.91831690248356,
          "rmssdRetention": 0.04123948475147225
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 43.71700186706684,
          "rmssdRetention": 0.04017236443428015
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 57.90676644078949,
          "rmssdRetention": 0.0229761661236045
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 87.75863276216275,
          "rmssdRetention": 0.0221399006719965
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 97.13577773242656,
          "rmssdRetention": 0.01802222439914075
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 100.6263143389359,
          "rmssdRetention": 0.0155010674906328
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 108.2160925519393,
          "rmssdRetention": 0.011772413183712749
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 116.12703743252983,
          "rmssdRetention": 0.010313229927740749
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 126.71459334786894,
          "rmssdRetention": 0.0098395406865167
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 124.93904274177812,
          "rmssdRetention": 0.0087874999174448
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 133.16836029429874,
          "rmssdRetention": 0.00819673625883555
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 141.35646540848902,
          "rmssdRetention": 0.0074353162982994
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 150.4122041717482,
          "rmssdRetention": 0.0071045856810162
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 160.5725801510314,
          "rmssdRetention": 0.0062778771731935
        }
      ]
    },
    {
      "subjectId": "16420",
      "model": "Chronos-2",
      "rmseMs": 392.3913240432739,
      "maeMs": 286.01303696632385,
      "rmssdRetention": 0.3881291138688753,
      "sdnnRetention": 0.376254498435196,
      "meanObservedRmssdMs": 26.89585332012027,
      "meanPredictedRmssdMs": 9.888242457257814,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 72.60199739782598,
          "rmssdRetention": 0.23446945260308738
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 75.39853356758447,
          "rmssdRetention": 0.2829098503752928
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 70.76780610831324,
          "rmssdRetention": 0.3472203873824809
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 73.5583001760345,
          "rmssdRetention": 0.38810621471957696
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 89.29469447423251,
          "rmssdRetention": 0.4217633962276889
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 127.41959500678648,
          "rmssdRetention": 0.4869883789954827
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 159.77784513625753,
          "rmssdRetention": 0.49643298356564447
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 177.40936049079664,
          "rmssdRetention": 0.520761591357906
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 202.36409462655686,
          "rmssdRetention": 0.5539716837680132
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 247.16100178902232,
          "rmssdRetention": 0.6276936110281435
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 362.45285030977516,
          "rmssdRetention": 0.6455083796806369
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 486.71793438799625,
          "rmssdRetention": 0.38061450162778415
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 588.0185720506754,
          "rmssdRetention": 0.24067729988159908
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 659.2454003953027,
          "rmssdRetention": 0.1772160182862218
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 732.4106291799557,
          "rmssdRetention": 0.1448181752195707
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 757.5263767738427,
          "rmssdRetention": 0.1206574019782344
        }
      ]
    },
    {
      "subjectId": "16420",
      "model": "Moirai 2.0",
      "rmseMs": 557.9630136489868,
      "maeMs": 475.89272260665894,
      "rmssdRetention": 0.0194228231623354,
      "sdnnRetention": 0.0357466809654577,
      "meanObservedRmssdMs": 26.89585332012027,
      "meanPredictedRmssdMs": 1.1038352139475633,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 58.68646693644113,
          "rmssdRetention": 0.0637786362289726
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 153.20773498782717,
          "rmssdRetention": 0.19811865307194546
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 339.3722071865052,
          "rmssdRetention": 0.19871583955603825
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 443.2598354278796,
          "rmssdRetention": 0.1064743956708795
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 493.7448481407739,
          "rmssdRetention": 0.059856305177614005
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 538.3576444298016,
          "rmssdRetention": 0.0365169209310342
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 572.891603122396,
          "rmssdRetention": 0.018851461033356047
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 597.2385274628435,
          "rmssdRetention": 0.012150735638347
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 622.9835458765074,
          "rmssdRetention": 0.00989028160734955
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 641.5009362016932,
          "rmssdRetention": 0.0078469175210644
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 647.429307205408,
          "rmssdRetention": 0.00857415408202565
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 643.5388746642459,
          "rmssdRetention": 0.00734518041711075
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 649.9487229984713,
          "rmssdRetention": 0.0068653189959897495
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 661.8471386387338,
          "rmssdRetention": 0.00598644445594385
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 674.7075301430881,
          "rmssdRetention": 0.005518255640746849
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 689.5207953465253,
          "rmssdRetention": 0.0051608188609628
        }
      ]
    },
    {
      "subjectId": "16483",
      "model": "TimesFM",
      "rmseMs": 54.71663922071457,
      "maeMs": 44.6399450302124,
      "rmssdRetention": 0.0283560940824468,
      "sdnnRetention": 0.0708917561373012,
      "meanObservedRmssdMs": 15.896420689349009,
      "meanPredictedRmssdMs": 0.49684794990590697,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 34.8542179684869,
          "rmssdRetention": 0.0758255081237354
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 37.60222818579936,
          "rmssdRetention": 0.06862727149768866
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 37.54704634906593,
          "rmssdRetention": 0.0339835484968111
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 41.45691774666435,
          "rmssdRetention": 0.037202792920076305
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 50.36393547673216,
          "rmssdRetention": 0.0287249021388385
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 58.2044871515407,
          "rmssdRetention": 0.0298988395442745
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 65.86011297832819,
          "rmssdRetention": 0.0259283988191543
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 63.43155017818025,
          "rmssdRetention": 0.030558167487766852
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 57.39338505666491,
          "rmssdRetention": 0.0309438596769551
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 55.83695225756974,
          "rmssdRetention": 0.02840075780551995
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 55.581296938883725,
          "rmssdRetention": 0.02454653455279885
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 57.3487751809897,
          "rmssdRetention": 0.02211065609285195
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 57.14021752336126,
          "rmssdRetention": 0.019765735996409
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 58.75808541569326,
          "rmssdRetention": 0.017481142894039
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 64.0039737413786,
          "rmssdRetention": 0.0141936825440277
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 65.23809795462907,
          "rmssdRetention": 0.0130972351045271
        }
      ]
    },
    {
      "subjectId": "16483",
      "model": "Chronos-2",
      "rmseMs": 319.0137445926666,
      "maeMs": 221.21736407279968,
      "rmssdRetention": 0.4524839105151198,
      "sdnnRetention": 0.44277356359308,
      "meanObservedRmssdMs": 15.896420689349009,
      "meanPredictedRmssdMs": 9.916497480747267,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 55.59670959064991,
          "rmssdRetention": 0.28328071421681206
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 62.23785258929237,
          "rmssdRetention": 0.30147448154845835
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 62.10416551551789,
          "rmssdRetention": 0.35772917789670283
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 69.79682215486704,
          "rmssdRetention": 0.41423364151202197
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 76.1550933929427,
          "rmssdRetention": 0.42982370337827946
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 76.8571715753429,
          "rmssdRetention": 0.5410477969783195
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 88.39435463831477,
          "rmssdRetention": 0.8352136949602229
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 93.04725477108128,
          "rmssdRetention": 0.9612367410941882
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 85.12735320864172,
          "rmssdRetention": 1.1700820633230333
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 112.9764406474091,
          "rmssdRetention": 1.62465075167706
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 234.56455913356095,
          "rmssdRetention": 1.6670084874426778
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 382.63439883461194,
          "rmssdRetention": 1.0207626816677136
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 479.59148938683967,
          "rmssdRetention": 0.5950150784136313
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 550.5307545385052,
          "rmssdRetention": 0.39207600602300496
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 634.64907454937,
          "rmssdRetention": 0.2595510532148656
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 653.5545208981224,
          "rmssdRetention": 0.2101253618134542
        }
      ]
    },
    {
      "subjectId": "16483",
      "model": "Moirai 2.0",
      "rmseMs": 449.34746623039246,
      "maeMs": 332.04853534698486,
      "rmssdRetention": 0.0359286752783887,
      "sdnnRetention": 0.0517016700623478,
      "meanObservedRmssdMs": 15.896420689349009,
      "meanPredictedRmssdMs": 1.0541550373402708,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 51.28566660466616,
          "rmssdRetention": 0.0809202768053841
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 149.70149746599333,
          "rmssdRetention": 0.17132935468046073
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 291.87311324625017,
          "rmssdRetention": 0.1874587784081591
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 393.61591091543545,
          "rmssdRetention": 0.099207061697416
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 445.2818167679166,
          "rmssdRetention": 0.0701661431301164
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 484.3359763754731,
          "rmssdRetention": 0.03364916758110445
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 502.6943625050266,
          "rmssdRetention": 0.0278824300965379
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 509.65033985284356,
          "rmssdRetention": 0.0303063880514646
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 513.523703980849,
          "rmssdRetention": 0.03386728581760105
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 510.82531384116646,
          "rmssdRetention": 0.030859874738198102
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 500.07114455979496,
          "rmssdRetention": 0.0263538685925192
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 491.9479402812701,
          "rmssdRetention": 0.023081256465060852
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 487.5214406967942,
          "rmssdRetention": 0.020419788402268498
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 497.5604247354409,
          "rmssdRetention": 0.0174041258183428
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 508.0982227458252,
          "rmssdRetention": 0.013641350033396199
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 509.90579426545577,
          "rmssdRetention": 0.0126641093492557
        }
      ]
    },
    {
      "subjectId": "16539",
      "model": "TimesFM",
      "rmseMs": 105.87519407272339,
      "maeMs": 80.62727004289628,
      "rmssdRetention": 0.005064789058976,
      "sdnnRetention": 0.0109623090666876,
      "meanObservedRmssdMs": 42.11580765855722,
      "meanPredictedRmssdMs": 0.41369676030859537,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 85.71801506277316,
          "rmssdRetention": 0.0558084282884005
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 117.17099303900855,
          "rmssdRetention": 0.06003975615371465
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 109.69678134712944,
          "rmssdRetention": 0.01523286889532005
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 107.54749022236639,
          "rmssdRetention": 0.013732434540872751
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 96.75672596942717,
          "rmssdRetention": 0.007968052396860749
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 77.69920300915264,
          "rmssdRetention": 0.007865127537582301
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 85.42882308611095,
          "rmssdRetention": 0.00657507228973565
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 116.19829343881761,
          "rmssdRetention": 0.0052894899207409
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 137.92895363212412,
          "rmssdRetention": 0.00361250353448675
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 132.4282052592183,
          "rmssdRetention": 0.00309949414865885
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 118.98171029852473,
          "rmssdRetention": 0.0025047671375215998
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 111.61522805520826,
          "rmssdRetention": 0.00233590092979435
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 101.66387548077248,
          "rmssdRetention": 0.0022432294265894003
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 94.7235415254464,
          "rmssdRetention": 0.0030006071980323
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 85.2958527663375,
          "rmssdRetention": 0.00401371777276165
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 93.36803219933269,
          "rmssdRetention": 0.0050257402296301
        }
      ]
    },
    {
      "subjectId": "16539",
      "model": "Chronos-2",
      "rmseMs": 451.48858428001404,
      "maeMs": 355.6205630302429,
      "rmssdRetention": 0.2285890174063565,
      "sdnnRetention": 0.2066072449097231,
      "meanObservedRmssdMs": 42.11580765855722,
      "meanPredictedRmssdMs": 9.440075065053707,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 108.3458341056143,
          "rmssdRetention": 0.18745862968879445
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 167.41102277653164,
          "rmssdRetention": 0.2113397674856897
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 185.18338772455888,
          "rmssdRetention": 0.22833813564222555
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 192.48325757792477,
          "rmssdRetention": 0.23713596312164442
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 190.6946275187995,
          "rmssdRetention": 0.2804684017344079
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 205.3604309138415,
          "rmssdRetention": 0.30105779635450464
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 247.0629185596967,
          "rmssdRetention": 0.3546831002705028
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 338.0600620383493,
          "rmssdRetention": 0.31498330599342345
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 433.55652237477415,
          "rmssdRetention": 0.2778092240578629
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 477.2763485652263,
          "rmssdRetention": 0.28793678693505853
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 543.9805548108314,
          "rmssdRetention": 0.26707156334743215
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 618.2686859185009,
          "rmssdRetention": 0.1676883730439345
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 664.6514773584024,
          "rmssdRetention": 0.12672628708800932
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 673.4626767741313,
          "rmssdRetention": 0.1264736129322992
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 679.7183317383908,
          "rmssdRetention": 0.1430311393108231
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 667.2598189434611,
          "rmssdRetention": 0.1426300557400741
        }
      ]
    },
    {
      "subjectId": "16539",
      "model": "Moirai 2.0",
      "rmseMs": 593.7085747718811,
      "maeMs": 530.7285785675049,
      "rmssdRetention": 0.0104412895280462,
      "sdnnRetention": 0.0231020222212978,
      "meanObservedRmssdMs": 42.11580765855722,
      "meanPredictedRmssdMs": 1.2147982257496845,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 93.35763861490814,
          "rmssdRetention": 0.07424523619067419
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 304.0404932559158,
          "rmssdRetention": 0.22380285343030049
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 484.4524227085256,
          "rmssdRetention": 0.1295519074224022
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 554.4805013585777,
          "rmssdRetention": 0.04197536964222795
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 591.7307525629037,
          "rmssdRetention": 0.018184128080015148
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 617.7884153321014,
          "rmssdRetention": 0.011955836435312249
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 602.619754883528,
          "rmssdRetention": 0.007782622031148901
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 593.6314094102692,
          "rmssdRetention": 0.008942550442957449
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 605.0495566712174,
          "rmssdRetention": 0.008197730833572201
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 633.6193020455197,
          "rmssdRetention": 0.0072120343948078505
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 680.1927445423921,
          "rmssdRetention": 0.0079470969859721
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 711.5081826602328,
          "rmssdRetention": 0.00590972124677955
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 713.4289818269366,
          "rmssdRetention": 0.0067737826637474
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 692.4069325849413,
          "rmssdRetention": 0.00578842231894305
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 652.2245236661688,
          "rmssdRetention": 0.006463930785051799
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 631.5953945991463,
          "rmssdRetention": 0.0089548205117033
        }
      ]
    },
    {
      "subjectId": "16773",
      "model": "TimesFM",
      "rmseMs": 129.2935460805893,
      "maeMs": 110.18693447113037,
      "rmssdRetention": 0.022519657724752,
      "sdnnRetention": 0.04124669540331,
      "meanObservedRmssdMs": 38.852905821625,
      "meanPredictedRmssdMs": 1.4107860469658229,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 106.73031318379219,
          "rmssdRetention": 0.1271903377069431
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 139.41398970477533,
          "rmssdRetention": 0.160679005863539
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 130.81933721696618,
          "rmssdRetention": 0.07848762736011185
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 133.22684126007388,
          "rmssdRetention": 0.06510024794309355
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 135.99453939542153,
          "rmssdRetention": 0.0505432815966532
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 139.58339890865378,
          "rmssdRetention": 0.039406686866249804
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 115.59962602865875,
          "rmssdRetention": 0.02543001899031905
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 111.36035770637123,
          "rmssdRetention": 0.022775751578983948
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 119.37767248905409,
          "rmssdRetention": 0.02240003446480755
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 128.0579783398877,
          "rmssdRetention": 0.01995392032693815
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 135.11459589643587,
          "rmssdRetention": 0.019682131701889
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 136.6251831209806,
          "rmssdRetention": 0.019333672813419252
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 135.92072629730714,
          "rmssdRetention": 0.01925591084704
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 135.8431529321809,
          "rmssdRetention": 0.0192030977408928
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 131.0206680314427,
          "rmssdRetention": 0.0187769880721599
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 127.94325610973891,
          "rmssdRetention": 0.0193394360997008
        }
      ]
    },
    {
      "subjectId": "16773",
      "model": "Chronos-2",
      "rmseMs": 549.8809814453125,
      "maeMs": 445.9599256515503,
      "rmssdRetention": 0.3213062273260411,
      "sdnnRetention": 0.2298392092967001,
      "meanObservedRmssdMs": 38.852905821625,
      "meanPredictedRmssdMs": 10.569663154436565,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 121.40497104470623,
          "rmssdRetention": 0.26320161895219896
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 179.38347123823758,
          "rmssdRetention": 0.3570066001176556
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 183.90861821063126,
          "rmssdRetention": 0.3683248578845475
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 181.3945075788593,
          "rmssdRetention": 0.3631662827303166
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 189.52179379086633,
          "rmssdRetention": 0.4210370120270221
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 259.10792403846153,
          "rmssdRetention": 0.38988103799329776
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 319.9886908240493,
          "rmssdRetention": 0.32064478296216437
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 406.76083334410225,
          "rmssdRetention": 0.3105357394757287
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 476.555268148647,
          "rmssdRetention": 0.332652030175671
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 530.1294311161201,
          "rmssdRetention": 0.3637263958137499
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 630.0980240472002,
          "rmssdRetention": 0.33638029756014
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 714.6601477607699,
          "rmssdRetention": 0.24047295636610383
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 805.005875794058,
          "rmssdRetention": 0.15624550714246294
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 842.2129812944796,
          "rmssdRetention": 0.137936918654497
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 884.017655857407,
          "rmssdRetention": 0.10801272570516185
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 893.6499174775364,
          "rmssdRetention": 0.0957017063294208
        }
      ]
    },
    {
      "subjectId": "16773",
      "model": "Moirai 2.0",
      "rmseMs": 666.3835644721985,
      "maeMs": 580.695629119873,
      "rmssdRetention": 0.0130603948847589,
      "sdnnRetention": 0.0228071995465002,
      "meanObservedRmssdMs": 38.852905821625,
      "meanPredictedRmssdMs": 1.2823493170241662,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 130.43444472259802,
          "rmssdRetention": 0.09882938194717
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 329.20951687949173,
          "rmssdRetention": 0.290839830176988
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 532.0394450852767,
          "rmssdRetention": 0.15609504029241072
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 542.8936026759093,
          "rmssdRetention": 0.04423835231995425
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 545.4711463802407,
          "rmssdRetention": 0.02620956277166065
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 593.6579331922566,
          "rmssdRetention": 0.013794241394329599
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 659.0504649632494,
          "rmssdRetention": 0.009069709628046149
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 711.2364201812107,
          "rmssdRetention": 0.00642086254662775
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 730.2544617837511,
          "rmssdRetention": 0.007454360922794849
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 751.4451764926359,
          "rmssdRetention": 0.009329180919803899
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 768.6052956640168,
          "rmssdRetention": 0.010657746064045851
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 780.6257662716245,
          "rmssdRetention": 0.0082514654941572
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 787.225249730691,
          "rmssdRetention": 0.00929011498751235
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 791.7073754065393,
          "rmssdRetention": 0.00663468133360635
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 798.154823916698,
          "rmssdRetention": 0.00775759386871265
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 793.7634899013555,
          "rmssdRetention": 0.0067492379636236
        }
      ]
    },
    {
      "subjectId": "16786",
      "model": "TimesFM",
      "rmseMs": 61.430495232343674,
      "maeMs": 47.86531254649162,
      "rmssdRetention": 0.0067043943907684,
      "sdnnRetention": 0.0108077838829238,
      "meanObservedRmssdMs": 32.87020788078227,
      "meanPredictedRmssdMs": 0.4583669730362848,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 63.05934865604776,
          "rmssdRetention": 0.06077865280852325
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 75.93987042831327,
          "rmssdRetention": 0.05541086867281905
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 74.001162251812,
          "rmssdRetention": 0.0159873584904858
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 63.4803527784268,
          "rmssdRetention": 0.0165298257414616
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 56.940634947563424,
          "rmssdRetention": 0.01034213763784615
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 58.79021219126335,
          "rmssdRetention": 0.01030984157596905
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 58.03005743680897,
          "rmssdRetention": 0.0073743730859708
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 57.286768279179036,
          "rmssdRetention": 0.00749795818790675
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 59.97155584666561,
          "rmssdRetention": 0.0062774130441241496
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 56.92756362949779,
          "rmssdRetention": 0.00610199803941105
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 58.25545805848983,
          "rmssdRetention": 0.00574816968688635
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 58.4749561284672,
          "rmssdRetention": 0.0055930463466015
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 62.82482026589724,
          "rmssdRetention": 0.004481579382615701
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 59.016237794028925,
          "rmssdRetention": 0.0044874070656223
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 58.24295651188918,
          "rmssdRetention": 0.00454981863066065
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 57.53053156249757,
          "rmssdRetention": 0.0040145015455529
        }
      ]
    },
    {
      "subjectId": "16786",
      "model": "Chronos-2",
      "rmseMs": 458.08812975883484,
      "maeMs": 342.81125664711,
      "rmssdRetention": 0.2964120267752647,
      "sdnnRetention": 0.2245325686798238,
      "meanObservedRmssdMs": 32.87020788078227,
      "meanPredictedRmssdMs": 12.146470204279654,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 91.97066908273777,
          "rmssdRetention": 0.1938197868668098
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 113.995446531084,
          "rmssdRetention": 0.21831673787701444
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 131.92095015576808,
          "rmssdRetention": 0.24894721739693804
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 142.85232532306713,
          "rmssdRetention": 0.2766969563653824
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 137.0407856777537,
          "rmssdRetention": 0.3086133564664946
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 148.80045581802503,
          "rmssdRetention": 0.37886638611292234
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 165.33236785914497,
          "rmssdRetention": 0.4625417938353493
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 205.27258656135476,
          "rmssdRetention": 0.5433818431664611
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 249.6457528351822,
          "rmssdRetention": 0.6364271827839887
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 330.66006483706093,
          "rmssdRetention": 0.7557863974560325
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 457.20505875917615,
          "rmssdRetention": 0.7881834356817352
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 596.063175628164,
          "rmssdRetention": 0.44613685109642326
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 711.2512867955176,
          "rmssdRetention": 0.25150565526878343
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 765.2627033582987,
          "rmssdRetention": 0.182764636590586
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 815.0180340622261,
          "rmssdRetention": 0.16203082709223166
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 834.3333095322115,
          "rmssdRetention": 0.1226750467063407
        }
      ]
    },
    {
      "subjectId": "16786",
      "model": "Moirai 2.0",
      "rmseMs": 707.5811624526979,
      "maeMs": 643.4628963470459,
      "rmssdRetention": 0.0127154295118657,
      "sdnnRetention": 0.0138225045402692,
      "meanObservedRmssdMs": 32.87020788078227,
      "meanPredictedRmssdMs": 1.3472531876323037,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 79.63993256036262,
          "rmssdRetention": 0.07835283285500935
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 236.09994904899384,
          "rmssdRetention": 0.1825951461080335
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 508.16796161173426,
          "rmssdRetention": 0.16835048639485975
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 677.5459157035634,
          "rmssdRetention": 0.07061660004077175
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 730.8102139986595,
          "rmssdRetention": 0.033080681746923454
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 760.9464514904063,
          "rmssdRetention": 0.01840111486283325
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 771.4890308269229,
          "rmssdRetention": 0.01012259193400465
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 770.5768460007392,
          "rmssdRetention": 0.0061849946521699995
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 766.4693993223858,
          "rmssdRetention": 0.0052406820926375
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 776.2864850784795,
          "rmssdRetention": 0.00542813935872535
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 773.8885229390434,
          "rmssdRetention": 0.0051238125870681495
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 780.2446082400438,
          "rmssdRetention": 0.005887383036531449
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 785.5794429768457,
          "rmssdRetention": 0.0052002641255585996
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 794.2766529097726,
          "rmssdRetention": 0.00708326111753245
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 798.5678960822931,
          "rmssdRetention": 0.0056470587698894004
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 803.5786744265419,
          "rmssdRetention": 0.0042360442087666
        }
      ]
    },
    {
      "subjectId": "16795",
      "model": "TimesFM",
      "rmseMs": 182.77408182621002,
      "maeMs": 156.4972996711731,
      "rmssdRetention": 0.017816542925779,
      "sdnnRetention": 0.0456620657434153,
      "meanObservedRmssdMs": 47.490741726695234,
      "meanPredictedRmssdMs": 0.8285248455450099,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 118.31831804843513,
          "rmssdRetention": 0.06486658888945446
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 127.81578016817069,
          "rmssdRetention": 0.055633754483714104
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 110.60945098044665,
          "rmssdRetention": 0.020385308900874602
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 105.96775765707633,
          "rmssdRetention": 0.01969985084223395
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 117.20273369238063,
          "rmssdRetention": 0.017990485739518752
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 155.84390161766254,
          "rmssdRetention": 0.02385587717883325
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 181.37056772389042,
          "rmssdRetention": 0.023842250658947198
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 195.48997950393738,
          "rmssdRetention": 0.02630162774215155
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 193.11138557392195,
          "rmssdRetention": 0.0189494699373703
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 193.85157621084014,
          "rmssdRetention": 0.01329448739782
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 183.59732431507126,
          "rmssdRetention": 0.011362236306719151
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 199.03268224272787,
          "rmssdRetention": 0.00733042365705575
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 224.3835233986506,
          "rmssdRetention": 0.0057114596038807
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 248.69874686262696,
          "rmssdRetention": 0.00517572277084505
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 235.60217201033683,
          "rmssdRetention": 0.0042872242425552
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 235.93824807432057,
          "rmssdRetention": 0.0038024145319456
        }
      ]
    },
    {
      "subjectId": "16795",
      "model": "Chronos-2",
      "rmseMs": 573.17054271698,
      "maeMs": 425.3436326980591,
      "rmssdRetention": 0.2845592396832126,
      "sdnnRetention": 0.2519890357648769,
      "meanObservedRmssdMs": 47.490741726695234,
      "meanPredictedRmssdMs": 13.600070281031776,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 156.64728161247626,
          "rmssdRetention": 0.1839008616761649
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 214.72185258918984,
          "rmssdRetention": 0.1966737462449825
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 201.31556822145487,
          "rmssdRetention": 0.23062440657304234
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 215.93297896585582,
          "rmssdRetention": 0.284128000026014
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 225.047936307029,
          "rmssdRetention": 0.37954068343734165
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 239.541840338348,
          "rmssdRetention": 0.5123192760197594
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 220.53584689151225,
          "rmssdRetention": 0.7328411684247036
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 250.2867655068598,
          "rmssdRetention": 0.8450095372543
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 270.97263614075376,
          "rmssdRetention": 0.7954382343148213
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 390.8024893692215,
          "rmssdRetention": 0.6914924639977562
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 571.713300880461,
          "rmssdRetention": 0.5450064935624528
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 717.8319602409736,
          "rmssdRetention": 0.27114523671962387
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 869.5671338727866,
          "rmssdRetention": 0.16688203939386803
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 976.0718458669548,
          "rmssdRetention": 0.1117259269829256
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 1021.2720314090737,
          "rmssdRetention": 0.08566408464733424
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 1029.1429267416036,
          "rmssdRetention": 0.0666627710444088
        }
      ]
    },
    {
      "subjectId": "16795",
      "model": "Moirai 2.0",
      "rmseMs": 793.1253910064697,
      "maeMs": 722.747266292572,
      "rmssdRetention": 0.0096905147320337,
      "sdnnRetention": 0.0150408723561546,
      "meanObservedRmssdMs": 47.490741726695234,
      "meanPredictedRmssdMs": 1.4410874785357655,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 164.49293558419262,
          "rmssdRetention": 0.08552916095193665
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 450.9793621600515,
          "rmssdRetention": 0.16986525354439747
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 722.0053541612639,
          "rmssdRetention": 0.11196703002799224
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 823.5785518637191,
          "rmssdRetention": 0.0274869994374076
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 803.2634782270958,
          "rmssdRetention": 0.0155260849460975
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 742.0137484446988,
          "rmssdRetention": 0.0145627131979692
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 665.3337356355307,
          "rmssdRetention": 0.0137329126787994
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 631.4581345173457,
          "rmssdRetention": 0.00905033823345655
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 638.2022711516588,
          "rmssdRetention": 0.00689835398330795
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 708.3967483469377,
          "rmssdRetention": 0.00606754965441475
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 823.7123470108721,
          "rmssdRetention": 0.0058015469347301
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 919.9638468936315,
          "rmssdRetention": 0.0036902066719273997
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 990.513019263301,
          "rmssdRetention": 0.0036892261378161503
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 1039.6212550450423,
          "rmssdRetention": 0.0034565518592073498
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 1029.4916665927387,
          "rmssdRetention": 0.0020943760550481503
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 1020.677880323331,
          "rmssdRetention": 0.0017953264393838
        }
      ]
    },
    {
      "subjectId": "17052",
      "model": "TimesFM",
      "rmseMs": 170.81581056118011,
      "maeMs": 149.5150327682495,
      "rmssdRetention": 0.0197784150587882,
      "sdnnRetention": 0.042403184233677,
      "meanObservedRmssdMs": 19.263978073442487,
      "meanPredictedRmssdMs": 0.5748071009608459,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 90.28842842744285,
          "rmssdRetention": 0.1240097212742498
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 124.20897497871275,
          "rmssdRetention": 0.13660079160626803
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 131.86144982563513,
          "rmssdRetention": 0.05572932617803525
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 155.50146478329947,
          "rmssdRetention": 0.057123344470591295
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 171.26017039729408,
          "rmssdRetention": 0.036905864033097646
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 192.3281050175539,
          "rmssdRetention": 0.03202190412134355
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 213.55091389837594,
          "rmssdRetention": 0.0225370854101557
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 211.06480813681318,
          "rmssdRetention": 0.0218030868944519
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 205.1991411458781,
          "rmssdRetention": 0.0172540155345744
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 200.14490134109337,
          "rmssdRetention": 0.01731644946937835
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 206.2563904720172,
          "rmssdRetention": 0.01485765181008655
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 200.77266022827237,
          "rmssdRetention": 0.01141273230847125
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 176.26868075232053,
          "rmssdRetention": 0.00970552462972085
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 152.1756383993343,
          "rmssdRetention": 0.0064716849369822
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 121.85435927531228,
          "rmssdRetention": 0.00513791112441505
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 105.52526707588244,
          "rmssdRetention": 0.0045844579109875
        }
      ]
    },
    {
      "subjectId": "17052",
      "model": "Chronos-2",
      "rmseMs": 468.2234227657318,
      "maeMs": 353.33412885665894,
      "rmssdRetention": 0.5920086620146638,
      "sdnnRetention": 0.4817616415777405,
      "meanObservedRmssdMs": 19.263978073442487,
      "meanPredictedRmssdMs": 8.800654281342291,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 103.7906245024528,
          "rmssdRetention": 0.30603148245545325
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 131.06552494043615,
          "rmssdRetention": 0.40189255106113786
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 103.8532720692485,
          "rmssdRetention": 0.5486932677148896
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 125.66363912358334,
          "rmssdRetention": 0.6117596804831273
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 117.72336247473898,
          "rmssdRetention": 0.7002233551967925
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 157.55452434606678,
          "rmssdRetention": 0.7430878830312582
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 197.41111069238303,
          "rmssdRetention": 0.9012352004396453
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 232.63725536175804,
          "rmssdRetention": 0.9096297584666676
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 314.3734377792533,
          "rmssdRetention": 0.9163502429936838
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 395.8974577463563,
          "rmssdRetention": 0.9241152946574256
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 477.2291634282496,
          "rmssdRetention": 0.9321064859860484
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 581.9073876913675,
          "rmssdRetention": 0.4356055266580881
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 678.1662414559853,
          "rmssdRetention": 0.2364619718493418
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 756.6332262698904,
          "rmssdRetention": 0.15113677654186636
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 834.0656307828807,
          "rmssdRetention": 0.08757262096504864
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 878.3119313544706,
          "rmssdRetention": 0.0592487502629678
        }
      ]
    },
    {
      "subjectId": "17052",
      "model": "Moirai 2.0",
      "rmseMs": 542.8658723831177,
      "maeMs": 463.96613121032715,
      "rmssdRetention": 0.023729875458223,
      "sdnnRetention": 0.0376313462625895,
      "meanObservedRmssdMs": 19.263978073442487,
      "meanPredictedRmssdMs": 1.2717475370523474,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 99.36251943532288,
          "rmssdRetention": 0.1498531266561149
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 325.7376632102395,
          "rmssdRetention": 0.3924994466188104
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 474.35738768311546,
          "rmssdRetention": 0.2820068995147124
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 524.6239371596222,
          "rmssdRetention": 0.1125624975145989
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 534.4889033177495,
          "rmssdRetention": 0.0701085894566042
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 524.8053488682574,
          "rmssdRetention": 0.033450374846898445
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 537.1918550422727,
          "rmssdRetention": 0.02143167744503515
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 549.7996299745128,
          "rmssdRetention": 0.0177346636272171
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 551.3588965267304,
          "rmssdRetention": 0.0175333480451245
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 549.7090068998464,
          "rmssdRetention": 0.017020740390447
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 530.9650490768696,
          "rmssdRetention": 0.01724239186932735
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 538.5728765807821,
          "rmssdRetention": 0.0142920249477287
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 580.1777068177723,
          "rmssdRetention": 0.0132677354631034
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 636.4851980565916,
          "rmssdRetention": 0.008532417503777
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 694.1948925411672,
          "rmssdRetention": 0.00676852227466755
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 738.4368604518016,
          "rmssdRetention": 0.0059531689510249
        }
      ]
    },
    {
      "subjectId": "17453",
      "model": "TimesFM",
      "rmseMs": 119.40442025661469,
      "maeMs": 90.65929800271988,
      "rmssdRetention": 0.009134097366184,
      "sdnnRetention": 0.0298174558096763,
      "meanObservedRmssdMs": 40.234783111257634,
      "meanPredictedRmssdMs": 0.5548247792335388,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 52.735735588820226,
          "rmssdRetention": 0.05912395833192035
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 60.280708997313866,
          "rmssdRetention": 0.052713425179103254
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 69.17957397602937,
          "rmssdRetention": 0.023027787095569997
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 74.65596348730021,
          "rmssdRetention": 0.022903935242049
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 82.73785335319235,
          "rmssdRetention": 0.018909510720798647
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 98.97422078200387,
          "rmssdRetention": 0.01453688113406815
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 108.09143698848295,
          "rmssdRetention": 0.011944048695912899
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 122.72700919699906,
          "rmssdRetention": 0.00961110642331975
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 141.3762849199419,
          "rmssdRetention": 0.008258438261743401
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 162.2880084211973,
          "rmssdRetention": 0.0067112467590074495
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 168.37195066407077,
          "rmssdRetention": 0.00567074161498355
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 165.99026597218162,
          "rmssdRetention": 0.005491218512721149
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 158.11086866904117,
          "rmssdRetention": 0.00549081397539255
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 139.86937821269808,
          "rmssdRetention": 0.006044655622799801
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 116.6647986964232,
          "rmssdRetention": 0.00704886286655255
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 86.9349113763971,
          "rmssdRetention": 0.0087901409277219
        }
      ]
    },
    {
      "subjectId": "17453",
      "model": "Chronos-2",
      "rmseMs": 398.3512818813324,
      "maeMs": 315.8919215202331,
      "rmssdRetention": 0.2541246291703549,
      "sdnnRetention": 0.2173239598081412,
      "meanObservedRmssdMs": 40.234783111257634,
      "meanPredictedRmssdMs": 10.27477092516345,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 88.73178449694105,
          "rmssdRetention": 0.21932517742550695
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 108.34199371938195,
          "rmssdRetention": 0.23059918100983895
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 127.24592543921992,
          "rmssdRetention": 0.2422857087889973
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 145.66838229447103,
          "rmssdRetention": 0.2500114612247393
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 155.01802555715506,
          "rmssdRetention": 0.25998036119634005
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 174.49281586579602,
          "rmssdRetention": 0.26829461415468747
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 204.92731079466526,
          "rmssdRetention": 0.3051739925472753
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 247.04126439054878,
          "rmssdRetention": 0.27202786765103726
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 290.0858938066426,
          "rmssdRetention": 0.26070164524276584
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 329.57733779514416,
          "rmssdRetention": 0.2907220057420702
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 414.36135165891994,
          "rmssdRetention": 0.3289924754297946
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 519.7949087922045,
          "rmssdRetention": 0.2811111997393184
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 593.0631703966083,
          "rmssdRetention": 0.2379340461729568
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 640.7821358291029,
          "rmssdRetention": 0.18238007430747274
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 693.3652772720358,
          "rmssdRetention": 0.16039004612346106
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 668.341561830762,
          "rmssdRetention": 0.185729658319276
        }
      ]
    },
    {
      "subjectId": "17453",
      "model": "Moirai 2.0",
      "rmseMs": 623.9038109779358,
      "maeMs": 533.8991284370422,
      "rmssdRetention": 0.0100489533754626,
      "sdnnRetention": 0.0171719426874746,
      "meanObservedRmssdMs": 40.234783111257634,
      "meanPredictedRmssdMs": 1.2040387143681086,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 63.90321074911616,
          "rmssdRetention": 0.06921218312116985
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 220.1173230874186,
          "rmssdRetention": 0.21126716388001293
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 478.8935680592425,
          "rmssdRetention": 0.1572410213491457
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 594.4702262575948,
          "rmssdRetention": 0.04843507790707785
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 627.6931749083484,
          "rmssdRetention": 0.019077315204923798
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 641.2216244811875,
          "rmssdRetention": 0.0099052610747691
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 652.6566176251437,
          "rmssdRetention": 0.00630940334141985
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 664.6129057097909,
          "rmssdRetention": 0.0080763434606442
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 681.4024334975894,
          "rmssdRetention": 0.0075590335508411
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 709.4549887192427,
          "rmssdRetention": 0.00611027941081395
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 727.9506756162491,
          "rmssdRetention": 0.005367297333997
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 734.1941894592582,
          "rmssdRetention": 0.005906578715515601
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 731.7510990325009,
          "rmssdRetention": 0.007885891387607799
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 706.76429001677,
          "rmssdRetention": 0.00591408922745605
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 670.5650403270309,
          "rmssdRetention": 0.00563765613500245
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 631.4822073763521,
          "rmssdRetention": 0.0068857592027805
        }
      ]
    },
    {
      "subjectId": "18177",
      "model": "TimesFM",
      "rmseMs": 358.34068059921265,
      "maeMs": 54.977063089609146,
      "rmssdRetention": 0.0068536719254481,
      "sdnnRetention": 0.0196813096634591,
      "meanObservedRmssdMs": 92.27008073618941,
      "meanPredictedRmssdMs": 1.0566608181274233,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 226.1404964387691,
          "rmssdRetention": 0.08699814988888495
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 110.00947848659656,
          "rmssdRetention": 0.2886602006086506
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 47.32794985699375,
          "rmssdRetention": 0.02364959609034575
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 67.72307975969065,
          "rmssdRetention": 0.01763324440658715
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 82.57007716500634,
          "rmssdRetention": 0.0082476359303051
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 86.12613429513573,
          "rmssdRetention": 0.0068597984220855
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 432.97424639498297,
          "rmssdRetention": 0.0015004928350995
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 554.8985440912785,
          "rmssdRetention": 0.0013572454918912
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 498.4743892811241,
          "rmssdRetention": 0.00125501331100645
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 555.6392159330862,
          "rmssdRetention": 0.0012405950210762
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 496.3330854830636,
          "rmssdRetention": 0.00124682589472075
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 550.8828548039717,
          "rmssdRetention": 0.0013199578219614
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 492.07278225636003,
          "rmssdRetention": 0.0013170344191264002
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 349.1485356567798,
          "rmssdRetention": 0.013088607003482099
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 43.30380455724163,
          "rmssdRetention": 0.01326689938996795
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 43.592188725490054,
          "rmssdRetention": 0.0134668462942052
        }
      ]
    },
    {
      "subjectId": "18177",
      "model": "Chronos-2",
      "rmseMs": 396.8908190727234,
      "maeMs": 131.6460371017456,
      "rmssdRetention": 0.2258270711503942,
      "sdnnRetention": 0.4109911187344992,
      "meanObservedRmssdMs": 92.27008073618941,
      "meanPredictedRmssdMs": 16.977604510699802,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 226.7984807643656,
          "rmssdRetention": 0.2021325023245121
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 118.80960023894764,
          "rmssdRetention": 0.6745578486619321
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 66.86827297810463,
          "rmssdRetention": 0.6630206395808369
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 78.68923553149708,
          "rmssdRetention": 0.5182161422083236
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 91.48058869476769,
          "rmssdRetention": 0.43574663727140234
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 90.5548514344001,
          "rmssdRetention": 0.35940981975997566
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 431.9464576857269,
          "rmssdRetention": 0.0972984892652983
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 555.1992351746792,
          "rmssdRetention": 0.09142357569366975
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 500.83243943361856,
          "rmssdRetention": 0.11085336673887165
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 555.7382978375948,
          "rmssdRetention": 0.1324039338040487
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 514.8924051731469,
          "rmssdRetention": 0.1659311485677816
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 584.3332004451261,
          "rmssdRetention": 0.14908098892688915
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 563.2306320016087,
          "rmssdRetention": 0.13853159293794895
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 460.147142048646,
          "rmssdRetention": 1.1163695245829641
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 338.3447765438502,
          "rmssdRetention": 0.877221419724509
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 350.81126553842745,
          "rmssdRetention": 0.9161203841328032
        }
      ]
    },
    {
      "subjectId": "18177",
      "model": "Moirai 2.0",
      "rmseMs": 538.6369824409485,
      "maeMs": 336.0459506511688,
      "rmssdRetention": 0.0134586374936796,
      "sdnnRetention": 0.0168233087146668,
      "meanObservedRmssdMs": 92.27008073618941,
      "meanPredictedRmssdMs": 0.9201768910126573,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 238.16371228509064,
          "rmssdRetention": 0.03852124021483795
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 262.3796509437961,
          "rmssdRetention": 0.15762392551179966
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 369.9060467196254,
          "rmssdRetention": 0.07138490945644804
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 397.65132472941906,
          "rmssdRetention": 0.02626355456983845
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 404.9273376628807,
          "rmssdRetention": 0.01642284760098535
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 421.28311374373,
          "rmssdRetention": 0.01377331486441355
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 607.7073044066707,
          "rmssdRetention": 0.00198079683164615
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 708.4199056894257,
          "rmssdRetention": 0.0014254753150325
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 674.2575730189141,
          "rmssdRetention": 0.00148385491701535
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 735.857222764883,
          "rmssdRetention": 0.0014534694780376002
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 676.7926126385925,
          "rmssdRetention": 0.0015162566749916
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 710.1911883749121,
          "rmssdRetention": 0.0016485232818429
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 653.0984165737614,
          "rmssdRetention": 0.00162103475378265
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 545.528515870471,
          "rmssdRetention": 0.015470683948469802
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 406.73854437301776,
          "rmssdRetention": 0.0183570074509841
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 401.04687504541454,
          "rmssdRetention": 0.0181326713136913
        }
      ]
    },
    {
      "subjectId": "18184",
      "model": "TimesFM",
      "rmseMs": 108.39322954416275,
      "maeMs": 90.33140540122986,
      "rmssdRetention": 0.0106987256517446,
      "sdnnRetention": 0.0148290370383624,
      "meanObservedRmssdMs": 23.15985145382585,
      "meanPredictedRmssdMs": 0.4276656514173888,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 84.96143073023113,
          "rmssdRetention": 0.07298100647137551
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 118.87144441553279,
          "rmssdRetention": 0.07630640855633715
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 122.7151519182717,
          "rmssdRetention": 0.026440049925146952
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 104.80018076412537,
          "rmssdRetention": 0.02403874450072015
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 91.74688562138911,
          "rmssdRetention": 0.012957163491278
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 88.78293122039193,
          "rmssdRetention": 0.013757997358786
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 87.59248920552763,
          "rmssdRetention": 0.0109128568169343
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 100.19968722064701,
          "rmssdRetention": 0.0109379079190234
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 102.75765815214878,
          "rmssdRetention": 0.00716602902827985
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 95.73330828657465,
          "rmssdRetention": 0.00719521794195385
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 97.4816510889662,
          "rmssdRetention": 0.0079931864969683
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 108.15551351255947,
          "rmssdRetention": 0.0079883241502201
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 117.94367401600236,
          "rmssdRetention": 0.0077056265999376
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 131.0236477561494,
          "rmssdRetention": 0.0076016224840102994
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 135.52065339819148,
          "rmssdRetention": 0.0093011526396064
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 127.33483643549192,
          "rmssdRetention": 0.0112912515738968
        }
      ]
    },
    {
      "subjectId": "18184",
      "model": "Chronos-2",
      "rmseMs": 345.5122411251068,
      "maeMs": 287.73272037506104,
      "rmssdRetention": 0.338246438011702,
      "sdnnRetention": 0.2857921622134344,
      "meanObservedRmssdMs": 23.15985145382585,
      "meanPredictedRmssdMs": 8.715399272342335,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 107.68403675890976,
          "rmssdRetention": 0.248731815724316
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 155.54247123886043,
          "rmssdRetention": 0.30959933132397954
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 190.64905685905495,
          "rmssdRetention": 0.31676549875497834
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 213.13054090676138,
          "rmssdRetention": 0.3096968266486452
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 238.42577172644513,
          "rmssdRetention": 0.2957267306556325
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 258.8465553811955,
          "rmssdRetention": 0.34011794318922545
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 281.7618461671675,
          "rmssdRetention": 0.40427632856432016
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 302.68345219114985,
          "rmssdRetention": 0.46335451586585485
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 323.59396688960544,
          "rmssdRetention": 0.42784460469337027
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 332.25624374253874,
          "rmssdRetention": 0.4288391561792184
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 354.9258256894915,
          "rmssdRetention": 0.5773806437344321
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 390.3912430151579,
          "rmssdRetention": 0.5264973554689125
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 438.59663921631125,
          "rmssdRetention": 0.3972000589365034
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 477.87431665963834,
          "rmssdRetention": 0.3306045878333273
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 534.5108379001217,
          "rmssdRetention": 0.2970695986704635
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 545.6419824660453,
          "rmssdRetention": 0.3047372381539749
        }
      ]
    },
    {
      "subjectId": "18184",
      "model": "Moirai 2.0",
      "rmseMs": 542.047917842865,
      "maeMs": 471.07234597206116,
      "rmssdRetention": 0.0176027437268661,
      "sdnnRetention": 0.0291818511406093,
      "meanObservedRmssdMs": 23.15985145382585,
      "meanPredictedRmssdMs": 1.0849897434711873,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 92.09368188196102,
          "rmssdRetention": 0.0811204862697951
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 219.88650932470088,
          "rmssdRetention": 0.2772974645758285
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 454.6376002755022,
          "rmssdRetention": 0.204002831244524
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 574.0853435852957,
          "rmssdRetention": 0.03945384699666635
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 615.8789714982689,
          "rmssdRetention": 0.0181144825324305
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 628.9057907925735,
          "rmssdRetention": 0.014445213416227301
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 640.5001345779446,
          "rmssdRetention": 0.01299347912799365
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 641.2051610532873,
          "rmssdRetention": 0.0183298850953698
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 621.262620270781,
          "rmssdRetention": 0.01851902583730955
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 598.8466588814114,
          "rmssdRetention": 0.014395175162228699
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 571.1477487534866,
          "rmssdRetention": 0.0130150454482465
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 544.6324952201958,
          "rmssdRetention": 0.0116360584452292
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 528.5703474298681,
          "rmssdRetention": 0.011361271143509051
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 537.6394180141438,
          "rmssdRetention": 0.01139147554199835
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 539.1903235332335,
          "rmssdRetention": 0.0125120465010214
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 533.9972732918073,
          "rmssdRetention": 0.0112997024956428
        }
      ]
    },
    {
      "subjectId": "19088",
      "model": "TimesFM",
      "rmseMs": 2176.264762878418,
      "maeMs": 201.33066177368164,
      "rmssdRetention": 0.0072862292412222,
      "sdnnRetention": 0.0127178118655061,
      "meanObservedRmssdMs": 688.3416065115349,
      "meanPredictedRmssdMs": 1.669333105734107,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 426.87681361062613,
          "rmssdRetention": 0.0544761189363556
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 290.39991158249234,
          "rmssdRetention": 0.12246906860197325
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 284.330732795352,
          "rmssdRetention": 0.00740401846901445
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 259.5893709844166,
          "rmssdRetention": 0.0071702671397833005
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 76.22651439524475,
          "rmssdRetention": 0.0112294118410338
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 69.30605215553116,
          "rmssdRetention": 0.0104236758873873
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 63.713756783847856,
          "rmssdRetention": 0.0074526209815646005
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 61.17668937712189,
          "rmssdRetention": 0.0078933396537049
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 61.4199517741086,
          "rmssdRetention": 0.007572638477086601
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 159.53024369694865,
          "rmssdRetention": 0.0032359275908364
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 1783.7647201763923,
          "rmssdRetention": 0.0006626342367082501
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 3603.6500976137168,
          "rmssdRetention": 0.0001421951500709
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 3712.1750955691377,
          "rmssdRetention": 0.00013288433090405
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 3730.7660451664274,
          "rmssdRetention": 0.0001179366864439
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 3777.3729384405406,
          "rmssdRetention": 0.0001243599611021
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 4144.890445802544,
          "rmssdRetention": 0.0001130156703524
        }
      ]
    },
    {
      "subjectId": "19088",
      "model": "Chronos-2",
      "rmseMs": 2215.270519256592,
      "maeMs": 337.7193808555603,
      "rmssdRetention": 0.080399221753116,
      "sdnnRetention": 0.0910425739658263,
      "meanObservedRmssdMs": 688.3416065115349,
      "meanPredictedRmssdMs": 11.285674086696574,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 431.1830661021903,
          "rmssdRetention": 0.0357742521605834
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 297.48706816796005,
          "rmssdRetention": 0.07917648634729255
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 299.9841919443529,
          "rmssdRetention": 0.0852527806461505
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 280.3709683121353,
          "rmssdRetention": 0.10685266536817095
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 146.34983463322217,
          "rmssdRetention": 0.3846775243987923
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 164.108651223494,
          "rmssdRetention": 0.4125673120462998
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 194.7987921434374,
          "rmssdRetention": 0.4002787733049339
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 223.19141144226958,
          "rmssdRetention": 0.41689656995472557
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 250.12738078872442,
          "rmssdRetention": 0.5406534616759618
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 293.4703035026048,
          "rmssdRetention": 0.30860929945311966
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 1812.5992514303416,
          "rmssdRetention": 0.05496786321667415
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 3637.16319138845,
          "rmssdRetention": 0.0098900725138767
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 3764.0238252584195,
          "rmssdRetention": 0.0060997956786683
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 3791.0736881067055,
          "rmssdRetention": 0.0047716673965572005
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 3854.3966490468597,
          "rmssdRetention": 0.00319516039127245
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 4228.474425803796,
          "rmssdRetention": 0.0031931544534927
        }
      ]
    },
    {
      "subjectId": "19088",
      "model": "Moirai 2.0",
      "rmseMs": 2256.6170692443848,
      "maeMs": 562.3023509979248,
      "rmssdRetention": 0.0077409308905354,
      "sdnnRetention": 0.0072820864681954,
      "meanObservedRmssdMs": 688.3416065115349,
      "meanPredictedRmssdMs": 1.1468703018826896,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 449.59259171721874,
          "rmssdRetention": 0.0343105150035327
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 478.49698079956244,
          "rmssdRetention": 0.057135613714922706
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 590.8104106249262,
          "rmssdRetention": 0.0111283083346035
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 598.8582851550542,
          "rmssdRetention": 0.0043143106612869506
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 555.4499757637199,
          "rmssdRetention": 0.01117068604147715
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 580.7351074660944,
          "rmssdRetention": 0.0098717013303222
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 599.2484488745572,
          "rmssdRetention": 0.00875438103216045
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 599.6841312113863,
          "rmssdRetention": 0.008938013718934951
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 587.5486770465478,
          "rmssdRetention": 0.00895430394388845
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 590.0790328538013,
          "rmssdRetention": 0.00759980524928665
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 1868.2335890235827,
          "rmssdRetention": 0.0006832618661270001
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 3647.769722074629,
          "rmssdRetention": 0.00014721367273835
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 3766.8830101258745,
          "rmssdRetention": 0.00012493319807675
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 3809.541733473831,
          "rmssdRetention": 0.000109021651724
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 3860.0797107550616,
          "rmssdRetention": 9.769433086170655e-05
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 4228.6755436137655,
          "rmssdRetention": 8.884024266231367e-05
        }
      ]
    },
    {
      "subjectId": "19090",
      "model": "TimesFM",
      "rmseMs": 164.04947638511655,
      "maeMs": 104.46856915950775,
      "rmssdRetention": 0.0098383508105721,
      "sdnnRetention": 0.0238918434797994,
      "meanObservedRmssdMs": 34.41361872356137,
      "meanPredictedRmssdMs": 0.37114968161948403,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 39.912064440413886,
          "rmssdRetention": 0.07350226827133015
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 59.132212679384345,
          "rmssdRetention": 0.0679053992833506
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 76.25937769070498,
          "rmssdRetention": 0.0272084913633878
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 86.72506903192723,
          "rmssdRetention": 0.0302435302985659
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 101.28918728974833,
          "rmssdRetention": 0.01900974153850905
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 113.39634196010402,
          "rmssdRetention": 0.016548490329548603
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 119.3732609960408,
          "rmssdRetention": 0.011809383154820101
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 127.1153552349409,
          "rmssdRetention": 0.0097867598866642
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 137.46399339562694,
          "rmssdRetention": 0.0078783054050724
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 151.2291788998495,
          "rmssdRetention": 0.00834045086311915
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 156.51397895234294,
          "rmssdRetention": 0.00860046953546215
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 146.51153538641321,
          "rmssdRetention": 0.008863411344358849
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 209.2172333956813,
          "rmssdRetention": 0.00547774187322835
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 279.8076693071666,
          "rmssdRetention": 0.0021787867507159497
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 275.35295711163405,
          "rmssdRetention": 0.0021352878116733497
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 270.241676660659,
          "rmssdRetention": 0.0021807364658096
        }
      ]
    },
    {
      "subjectId": "19090",
      "model": "Chronos-2",
      "rmseMs": 454.2842507362366,
      "maeMs": 345.40581703186035,
      "rmssdRetention": 0.4792927511447167,
      "sdnnRetention": 0.4029607972251203,
      "meanObservedRmssdMs": 34.41361872356137,
      "meanPredictedRmssdMs": 9.83869281557433,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 53.70210527984807,
          "rmssdRetention": 0.29104855039760547
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 55.96836511429617,
          "rmssdRetention": 0.339390871889356
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 75.62982658375239,
          "rmssdRetention": 0.4492307900934367
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 126.07816510837023,
          "rmssdRetention": 0.4782580769422745
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 179.8479467926397,
          "rmssdRetention": 0.46198615090080825
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 219.8186123239091,
          "rmssdRetention": 0.529118785900703
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 251.0033165913218,
          "rmssdRetention": 0.5700947809495702
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 292.1318703257223,
          "rmssdRetention": 0.5422932751720122
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 356.2360482379544,
          "rmssdRetention": 0.5874879932449852
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 409.62019646875126,
          "rmssdRetention": 0.6944926368776705
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 470.5790006689782,
          "rmssdRetention": 0.8074023748341619
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 553.4709455128254,
          "rmssdRetention": 0.6495067338533078
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 667.873047825751,
          "rmssdRetention": 0.24382618550096524
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 739.4009830175779,
          "rmssdRetention": 0.075540398107947
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 784.6383243642402,
          "rmssdRetention": 0.0540829714655297
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 783.8703898738642,
          "rmssdRetention": 0.0468774372763801
        }
      ]
    },
    {
      "subjectId": "19090",
      "model": "Moirai 2.0",
      "rmseMs": 684.5894455909729,
      "maeMs": 629.2695999145508,
      "rmssdRetention": 0.0087659470319825,
      "sdnnRetention": 0.0131357736745536,
      "meanObservedRmssdMs": 34.41361872356137,
      "meanPredictedRmssdMs": 1.0244150263080642,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 73.67989216307348,
          "rmssdRetention": 0.13949630533438884
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 247.22403425228646,
          "rmssdRetention": 0.3710120031139321
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 461.081063455522,
          "rmssdRetention": 0.3066645623436256
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 558.3191838663219,
          "rmssdRetention": 0.0419622672346145
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 598.6254694140684,
          "rmssdRetention": 0.0214922254220606
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 644.9578016391001,
          "rmssdRetention": 0.01610291488731145
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 690.1449347302191,
          "rmssdRetention": 0.010410628116872
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 732.9794823678707,
          "rmssdRetention": 0.0057744304608422
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 769.5072816024743,
          "rmssdRetention": 0.0086136940230094
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 794.7938854691275,
          "rmssdRetention": 0.007854414208974151
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 805.6263060843928,
          "rmssdRetention": 0.00567371136335775
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 796.3698741421715,
          "rmssdRetention": 0.0048183508355632496
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 802.7463998101097,
          "rmssdRetention": 0.0025385155069549
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 820.2409904529795,
          "rmssdRetention": 0.00122783616964355
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 810.8644806710836,
          "rmssdRetention": 0.00098357481547555
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 798.7997261088885,
          "rmssdRetention": 0.0010464698948661
        }
      ]
    },
    {
      "subjectId": "19093",
      "model": "TimesFM",
      "rmseMs": 107.18684643507004,
      "maeMs": 78.08084785938263,
      "rmssdRetention": 0.0021994301129069,
      "sdnnRetention": 0.0032565118150183,
      "meanObservedRmssdMs": 28.995228896733884,
      "meanPredictedRmssdMs": 0.24329567521073234,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 71.42393797259919,
          "rmssdRetention": 0.036725332475339045
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 87.51931321064082,
          "rmssdRetention": 0.03972390276020215
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 87.18628815964266,
          "rmssdRetention": 0.009526816345123701
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 87.00024601626698,
          "rmssdRetention": 0.009476258501102699
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 82.36672789420126,
          "rmssdRetention": 0.00470939705295495
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 71.14759096426067,
          "rmssdRetention": 0.0041969846936425
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 76.8268783093745,
          "rmssdRetention": 0.0025726391525842003
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 106.27667522705599,
          "rmssdRetention": 0.0025551865907125
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 131.49434056027272,
          "rmssdRetention": 0.00190683021041905
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 141.63628922980135,
          "rmssdRetention": 0.00193539565335935
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 154.57864813857967,
          "rmssdRetention": 0.0018560176006169
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 150.0846340542706,
          "rmssdRetention": 0.0019489042199598498
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 123.3019321020236,
          "rmssdRetention": 0.00198908253412075
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 107.76591250303407,
          "rmssdRetention": 0.0018302256280667
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 91.59212863993478,
          "rmssdRetention": 0.0017294171930533
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 88.72391998195748,
          "rmssdRetention": 0.0016920137761457
        }
      ]
    },
    {
      "subjectId": "19093",
      "model": "Chronos-2",
      "rmseMs": 433.9316785335541,
      "maeMs": 302.39129066467285,
      "rmssdRetention": 0.5002224443805067,
      "sdnnRetention": 0.3694590609477378,
      "meanObservedRmssdMs": 28.995228896733884,
      "meanPredictedRmssdMs": 15.573015064266924,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 87.80178483176661,
          "rmssdRetention": 0.22926529199229345
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 92.32095581565623,
          "rmssdRetention": 0.27187027957169024
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 84.83343807322899,
          "rmssdRetention": 0.34644905938208437
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 79.08849837716036,
          "rmssdRetention": 0.43140185561375943
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 90.0214325028336,
          "rmssdRetention": 0.49726773098556387
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 94.22100722857073,
          "rmssdRetention": 0.5939111745502297
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 125.55499065665151,
          "rmssdRetention": 0.7063305736390888
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 200.67118753895699,
          "rmssdRetention": 0.7118760678446936
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 289.7865687027806,
          "rmssdRetention": 0.6975790054054181
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 283.72407493030465,
          "rmssdRetention": 0.9412319074485864
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 332.7309137786219,
          "rmssdRetention": 1.128139223148882
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 471.0229036736953,
          "rmssdRetention": 0.804367882356513
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 630.9429991633792,
          "rmssdRetention": 0.4914504263531416
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 740.3986228214566,
          "rmssdRetention": 0.3210583386857707
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 841.3681776955616,
          "rmssdRetention": 0.2363249670674728
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 871.1034515927008,
          "rmssdRetention": 0.1711378655858254
        }
      ]
    },
    {
      "subjectId": "19093",
      "model": "Moirai 2.0",
      "rmseMs": 810.8764290809631,
      "maeMs": 766.9717669487,
      "rmssdRetention": 0.0049608779366736,
      "sdnnRetention": 0.002403230320144,
      "meanObservedRmssdMs": 28.995228896733884,
      "meanPredictedRmssdMs": 1.4136454437782802,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 144.890828047159,
          "rmssdRetention": 0.115403707796311
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 393.95548812453023,
          "rmssdRetention": 0.2416787994070279
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 678.2629547886932,
          "rmssdRetention": 0.20158181521100135
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 823.0693159538064,
          "rmssdRetention": 0.07874681865127375
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 880.3097424803275,
          "rmssdRetention": 0.0244619864831691
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 908.6809810157627,
          "rmssdRetention": 0.010805801708971899
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 912.0757990755071,
          "rmssdRetention": 0.0055989878648282
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 894.144806748534,
          "rmssdRetention": 0.00432426191202985
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 869.9602596617527,
          "rmssdRetention": 0.0036913312409401003
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 849.8637772217301,
          "rmssdRetention": 0.0035816029845944
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 831.8805394172637,
          "rmssdRetention": 0.0037052247281356
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 830.2548826108243,
          "rmssdRetention": 0.00349486563593375
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 859.1644451937716,
          "rmssdRetention": 0.0035200051502627
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 877.5785135256341,
          "rmssdRetention": 0.0033087834001576
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 892.9778167905639,
          "rmssdRetention": 0.00329118176848105
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 899.1455452049829,
          "rmssdRetention": 0.0029991066953781
        }
      ]
    },
    {
      "subjectId": "19140",
      "model": "TimesFM",
      "rmseMs": 208.97012948989868,
      "maeMs": 68.98467242717743,
      "rmssdRetention": 0.0124786951433154,
      "sdnnRetention": 0.0130072542480643,
      "meanObservedRmssdMs": 45.33218778367476,
      "meanPredictedRmssdMs": 1.5156976247582288,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 394.78464250808287,
          "rmssdRetention": 0.1038342177584548
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 362.3910402381275,
          "rmssdRetention": 0.0951970344107273
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 327.2973055093301,
          "rmssdRetention": 0.00785964367003955
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 365.79810621134914,
          "rmssdRetention": 0.00665093685516615
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 329.29170275229694,
          "rmssdRetention": 0.00389324660888255
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 86.65056076581348,
          "rmssdRetention": 0.020825831500009648
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 73.64288150514075,
          "rmssdRetention": 0.0145965743187268
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 67.68219196113563,
          "rmssdRetention": 0.01354745241441875
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 63.38429589660072,
          "rmssdRetention": 0.012794598706657799
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 68.57856069742256,
          "rmssdRetention": 0.0130074390605833
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 74.70075529221923,
          "rmssdRetention": 0.0134716600090751
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 77.03258094740147,
          "rmssdRetention": 0.0107627105586959
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 82.18219746353557,
          "rmssdRetention": 0.012162767956472451
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 80.16882016410133,
          "rmssdRetention": 0.010847775918564301
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 73.5930903899215,
          "rmssdRetention": 0.0117289127390374
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 76.19124172657176,
          "rmssdRetention": 0.0099358232260354
        }
      ]
    },
    {
      "subjectId": "19140",
      "model": "Chronos-2",
      "rmseMs": 444.0738558769226,
      "maeMs": 335.60580015182495,
      "rmssdRetention": 0.3288642342853333,
      "sdnnRetention": 0.3283896301862677,
      "meanObservedRmssdMs": 45.33218778367476,
      "meanPredictedRmssdMs": 7.436690455606622,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 399.55198717692065,
          "rmssdRetention": 0.0440283385444005
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 373.43642420954967,
          "rmssdRetention": 0.0507065766495611
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 351.07644552985937,
          "rmssdRetention": 0.05463876775633185
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 400.3701102152195,
          "rmssdRetention": 0.06089281817896515
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 371.72002056691434,
          "rmssdRetention": 0.06619367077811811
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 219.09871478380583,
          "rmssdRetention": 0.4078863135426798
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 247.39708681481588,
          "rmssdRetention": 0.5078720229773888
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 301.28143465138584,
          "rmssdRetention": 0.5631773880792521
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 359.99649838613215,
          "rmssdRetention": 0.616340054372921
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 402.34579922646793,
          "rmssdRetention": 0.7601530324697275
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 472.74038576692135,
          "rmssdRetention": 0.731520072768119
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 516.4808779245676,
          "rmssdRetention": 0.5186824484098717
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 557.1554024330231,
          "rmssdRetention": 0.3605004021892031
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 588.618129371665,
          "rmssdRetention": 0.28373298222746957
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 628.9436452023373,
          "rmssdRetention": 0.22212284253021203
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 632.647717096302,
          "rmssdRetention": 0.208543445507805
        }
      ]
    },
    {
      "subjectId": "19140",
      "model": "Moirai 2.0",
      "rmseMs": 564.473569393158,
      "maeMs": 458.81325006484985,
      "rmssdRetention": 0.0116015273646163,
      "sdnnRetention": 0.0182435756062554,
      "meanObservedRmssdMs": 45.33218778367476,
      "meanPredictedRmssdMs": 0.989367331790614,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 409.2427301302765,
          "rmssdRetention": 0.0360088826525177
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 465.0246133732681,
          "rmssdRetention": 0.0523881657032648
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 566.2366452433936,
          "rmssdRetention": 0.022033171469526602
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 627.2317899846845,
          "rmssdRetention": 0.00623717725412875
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 626.3856068587952,
          "rmssdRetention": 0.0051311364760866
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 552.3380850092769,
          "rmssdRetention": 0.019927702321199052
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 568.7489123583945,
          "rmssdRetention": 0.014718961939405549
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 574.513991485365,
          "rmssdRetention": 0.01183062912120595
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 572.5525253548853,
          "rmssdRetention": 0.0102066174368365
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 568.2446274222643,
          "rmssdRetention": 0.011809823901547951
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 569.1676297460783,
          "rmssdRetention": 0.01091410787033155
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 570.6349338795933,
          "rmssdRetention": 0.01057697787907385
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 573.1118475987051,
          "rmssdRetention": 0.01004934591258235
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 580.935505826969,
          "rmssdRetention": 0.00978239641464205
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 583.7393429238257,
          "rmssdRetention": 0.010029867623329549
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 585.105738970392,
          "rmssdRetention": 0.0095191906613858
        }
      ]
    },
    {
      "subjectId": "19830",
      "model": "TimesFM",
      "rmseMs": 178.91214787960052,
      "maeMs": 31.641963869333267,
      "rmssdRetention": 0.001332302525058,
      "sdnnRetention": 0.0036433576293712,
      "meanObservedRmssdMs": 49.21289659783131,
      "meanPredictedRmssdMs": 0.15738041168542197,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 19.7718781349915,
          "rmssdRetention": 0.0547987612221595
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 30.607271349897022,
          "rmssdRetention": 0.05381447468420275
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 39.90258502525404,
          "rmssdRetention": 0.020672029436831
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 41.92673425292062,
          "rmssdRetention": 0.0206511851735997
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 38.3140178497177,
          "rmssdRetention": 0.0135471310080833
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 32.23230199689471,
          "rmssdRetention": 0.0131432146869336
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 142.13788565751898,
          "rmssdRetention": 0.0088519291285962
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 199.8232934035307,
          "rmssdRetention": 0.0015419444695325998
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 223.27702039095533,
          "rmssdRetention": 0.0012658909077215
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 201.04705871112836,
          "rmssdRetention": 0.0011476240628566499
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 200.98283232647708,
          "rmssdRetention": 0.0009894554195519498
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 223.78555098517296,
          "rmssdRetention": 0.0010198490463626001
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 287.9551703464388,
          "rmssdRetention": 0.00048248474312945005
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 305.6678811845018,
          "rmssdRetention": 0.0005183164550186001
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 209.5323127546476,
          "rmssdRetention": 0.0009267600547219501
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 209.36638616126706,
          "rmssdRetention": 0.0008664775870347
        }
      ]
    },
    {
      "subjectId": "19830",
      "model": "Chronos-2",
      "rmseMs": 323.06960225105286,
      "maeMs": 205.14513552188876,
      "rmssdRetention": 0.2147565393678303,
      "sdnnRetention": 0.2902028098837355,
      "meanObservedRmssdMs": 49.21289659783131,
      "meanPredictedRmssdMs": 7.366554362010738,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 43.214302025402574,
          "rmssdRetention": 0.2858996153060366
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 58.92308222724972,
          "rmssdRetention": 0.3303255842924972
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 74.38543388872502,
          "rmssdRetention": 0.3975804160140052
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 88.05995444755543,
          "rmssdRetention": 0.47264740764206226
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 98.1508994253681,
          "rmssdRetention": 0.4875435313454086
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 100.82311882724687,
          "rmssdRetention": 0.5661471576657031
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 176.60769307237695,
          "rmssdRetention": 0.7531408645720903
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 234.85355875770875,
          "rmssdRetention": 0.1627867094591147
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 269.2938000520968,
          "rmssdRetention": 0.15831924390899743
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 252.96821692736816,
          "rmssdRetention": 0.19441490608109552
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 293.468617724988,
          "rmssdRetention": 0.2542642630733678
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 387.1857513062139,
          "rmssdRetention": 0.18729991368548965
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 495.1738981809951,
          "rmssdRetention": 0.0684187725247583
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 554.1138693809283,
          "rmssdRetention": 0.0457016852204715
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 553.2212562540246,
          "rmssdRetention": 0.0679696285958585
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 560.6863976621083,
          "rmssdRetention": 0.0635940032524793
        }
      ]
    },
    {
      "subjectId": "19830",
      "model": "Moirai 2.0",
      "rmseMs": 484.6325218677521,
      "maeMs": 386.58982515335083,
      "rmssdRetention": 0.0073676191918959,
      "sdnnRetention": 0.0157095914826913,
      "meanObservedRmssdMs": 49.21289659783131,
      "meanPredictedRmssdMs": 0.90209261931982,
      "stepCount": 1009,
      "profile": [
        {
          "startBeat": 0,
          "endBeat": 64,
          "rmseMs": 38.57990352119254,
          "rmssdRetention": 0.15277558356932736
        },
        {
          "startBeat": 64,
          "endBeat": 128,
          "rmseMs": 188.4547045012708,
          "rmssdRetention": 0.46210914753331833
        },
        {
          "startBeat": 128,
          "endBeat": 192,
          "rmseMs": 373.5250752414153,
          "rmssdRetention": 0.31010636322435514
        },
        {
          "startBeat": 192,
          "endBeat": 256,
          "rmseMs": 428.9539780130847,
          "rmssdRetention": 0.1117703669050441
        },
        {
          "startBeat": 256,
          "endBeat": 320,
          "rmseMs": 466.2291135229274,
          "rmssdRetention": 0.0601834059475061
        },
        {
          "startBeat": 320,
          "endBeat": 384,
          "rmseMs": 484.1473644987539,
          "rmssdRetention": 0.0252855176754388
        },
        {
          "startBeat": 384,
          "endBeat": 448,
          "rmseMs": 508.21402599963926,
          "rmssdRetention": 0.01927007453903155
        },
        {
          "startBeat": 448,
          "endBeat": 512,
          "rmseMs": 530.3487884770764,
          "rmssdRetention": 0.004008588221092
        },
        {
          "startBeat": 512,
          "endBeat": 576,
          "rmseMs": 539.9354354762881,
          "rmssdRetention": 0.0033010255009238
        },
        {
          "startBeat": 576,
          "endBeat": 640,
          "rmseMs": 530.3972695645302,
          "rmssdRetention": 0.00315907494407385
        },
        {
          "startBeat": 640,
          "endBeat": 704,
          "rmseMs": 530.117910340208,
          "rmssdRetention": 0.0040272106354495504
        },
        {
          "startBeat": 704,
          "endBeat": 768,
          "rmseMs": 545.0576160674709,
          "rmssdRetention": 0.0041666038172482
        },
        {
          "startBeat": 768,
          "endBeat": 832,
          "rmseMs": 575.7879195839755,
          "rmssdRetention": 0.00177997624117195
        },
        {
          "startBeat": 832,
          "endBeat": 896,
          "rmseMs": 586.8387128282127,
          "rmssdRetention": 0.0017599851311559502
        },
        {
          "startBeat": 896,
          "endBeat": 960,
          "rmseMs": 539.5181947047647,
          "rmssdRetention": 0.00258711431019085
        },
        {
          "startBeat": 960,
          "endBeat": 1024,
          "rmseMs": 536.7476295226514,
          "rmssdRetention": 0.0025396442511128
        }
      ]
    }
  ],
  "summary": [
    {
      "model": "TimesFM",
      "medianRmseMs": 146.67151123285294,
      "meanRmseMs": 341.33321026133166,
      "medianRmssdRetention": 0.0082101633037031,
      "defaultErrorPass": 13,
      "defaultJointPass": 0
    },
    {
      "model": "Chronos-2",
      "medianRmseMs": 439.00276720523834,
      "meanRmseMs": 589.5561973253886,
      "medianRmssdRetention": 0.30860200862806497,
      "defaultErrorPass": 0,
      "defaultJointPass": 0
    },
    {
      "model": "Moirai 2.0",
      "medianRmseMs": 579.0910720825195,
      "meanRmseMs": 756.2373959355884,
      "medianRmssdRetention": 0.01102140844633125,
      "defaultErrorPass": 0,
      "defaultJointPass": 0
    }
  ],
  "protocol": {
    "history": [
      {
        "subjectId": "16265",
        "observedHistoryMin": 101,
        "observedHistoryMax": 503,
        "observedHistoryMedian": 304.0,
        "nominalBeats": 8192,
        "paddingFractionMin": 0.9385986328125,
        "paddingFractionMax": 0.9876708984375,
        "observedHistoryByOrigin": [
          101,
          113,
          127,
          141,
          154,
          167,
          180,
          193,
          206,
          219,
          232,
          244,
          258,
          271,
          284,
          298,
          310,
          322,
          335,
          348,
          359,
          372,
          384,
          397,
          410,
          423,
          435,
          448,
          461,
          474,
          488,
          503
        ],
        "upstreamPaddingChecks": 32,
        "maxTargetRrSeconds": 6.6171875,
        "targetRrOver2sCount": 1,
        "targetUniqueRrCount": 1426,
        "targetQcThresholdSeconds": 2.0
      },
      {
        "subjectId": "16272",
        "observedHistoryMin": 66,
        "observedHistoryMax": 337,
        "observedHistoryMedian": 196.0,
        "nominalBeats": 8192,
        "paddingFractionMin": 0.9588623046875,
        "paddingFractionMax": 0.991943359375,
        "observedHistoryByOrigin": [
          66,
          75,
          83,
          92,
          100,
          109,
          117,
          125,
          133,
          142,
          150,
          158,
          166,
          176,
          185,
          196,
          196,
          204,
          214,
          225,
          235,
          245,
          255,
          264,
          272,
          281,
          290,
          299,
          308,
          317,
          327,
          337
        ],
        "upstreamPaddingChecks": 32,
        "maxTargetRrSeconds": 39.390625,
        "targetRrOver2sCount": 15,
        "targetUniqueRrCount": 1295,
        "targetQcThresholdSeconds": 2.0
      },
      {
        "subjectId": "16273",
        "observedHistoryMin": 99,
        "observedHistoryMax": 481,
        "observedHistoryMedian": 289.0,
        "nominalBeats": 8192,
        "paddingFractionMin": 0.9412841796875,
        "paddingFractionMax": 0.9879150390625,
        "observedHistoryByOrigin": [
          99,
          111,
          122,
          134,
          146,
          158,
          169,
          182,
          194,
          207,
          220,
          233,
          246,
          258,
          271,
          283,
          295,
          307,
          318,
          330,
          343,
          354,
          367,
          379,
          391,
          404,
          417,
          429,
          443,
          455,
          468,
          481
        ],
        "upstreamPaddingChecks": 32,
        "maxTargetRrSeconds": 0.96875,
        "targetRrOver2sCount": 0,
        "targetUniqueRrCount": 1406,
        "targetQcThresholdSeconds": 2.0
      },
      {
        "subjectId": "16420",
        "observedHistoryMin": 100,
        "observedHistoryMax": 484,
        "observedHistoryMedian": 285.5,
        "nominalBeats": 8192,
        "paddingFractionMin": 0.94091796875,
        "paddingFractionMax": 0.98779296875,
        "observedHistoryByOrigin": [
          100,
          113,
          125,
          137,
          149,
          161,
          173,
          184,
          195,
          207,
          219,
          231,
          244,
          256,
          268,
          279,
          292,
          305,
          320,
          333,
          345,
          358,
          370,
          382,
          395,
          408,
          420,
          433,
          446,
          459,
          472,
          484
        ],
        "upstreamPaddingChecks": 32,
        "maxTargetRrSeconds": 0.9375,
        "targetRrOver2sCount": 0,
        "targetUniqueRrCount": 1408,
        "targetQcThresholdSeconds": 2.0
      },
      {
        "subjectId": "16483",
        "observedHistoryMin": 102,
        "observedHistoryMax": 480,
        "observedHistoryMedian": 287.0,
        "nominalBeats": 8192,
        "paddingFractionMin": 0.94140625,
        "paddingFractionMax": 0.987548828125,
        "observedHistoryByOrigin": [
          102,
          115,
          127,
          139,
          151,
          163,
          174,
          186,
          198,
          210,
          222,
          233,
          245,
          257,
          269,
          281,
          293,
          306,
          318,
          330,
          343,
          355,
          367,
          379,
          392,
          404,
          417,
          429,
          442,
          454,
          467,
          480
        ],
        "upstreamPaddingChecks": 32,
        "maxTargetRrSeconds": 0.8203125,
        "targetRrOver2sCount": 0,
        "targetUniqueRrCount": 1402,
        "targetQcThresholdSeconds": 2.0
      },
      {
        "subjectId": "16539",
        "observedHistoryMin": 84,
        "observedHistoryMax": 447,
        "observedHistoryMedian": 253.0,
        "nominalBeats": 8192,
        "paddingFractionMin": 0.9454345703125,
        "paddingFractionMax": 0.98974609375,
        "observedHistoryByOrigin": [
          84,
          94,
          106,
          117,
          129,
          140,
          152,
          162,
          173,
          184,
          196,
          207,
          217,
          227,
          238,
          248,
          258,
          269,
          280,
          291,
          303,
          316,
          328,
          340,
          353,
          367,
          380,
          394,
          409,
          423,
          435,
          447
        ],
        "upstreamPaddingChecks": 32,
        "maxTargetRrSeconds": 1.296875,
        "targetRrOver2sCount": 0,
        "targetUniqueRrCount": 1387,
        "targetQcThresholdSeconds": 2.0
      },
      {
        "subjectId": "16773",
        "observedHistoryMin": 79,
        "observedHistoryMax": 413,
        "observedHistoryMedian": 252.0,
        "nominalBeats": 8192,
        "paddingFractionMin": 0.9495849609375,
        "paddingFractionMax": 0.9903564453125,
        "observedHistoryByOrigin": [
          79,
          90,
          102,
          113,
          123,
          132,
          142,
          151,
          161,
          171,
          182,
          195,
          208,
          220,
          234,
          246,
          258,
          268,
          277,
          287,
          296,
          306,
          316,
          326,
          334,
          345,
          354,
          364,
          375,
          387,
          400,
          413
        ],
        "upstreamPaddingChecks": 32,
        "maxTargetRrSeconds": 1.2265625,
        "targetRrOver2sCount": 0,
        "targetUniqueRrCount": 1358,
        "targetQcThresholdSeconds": 2.0
      },
      {
        "subjectId": "16786",
        "observedHistoryMin": 74,
        "observedHistoryMax": 386,
        "observedHistoryMedian": 226.5,
        "nominalBeats": 8192,
        "paddingFractionMin": 0.952880859375,
        "paddingFractionMax": 0.990966796875,
        "observedHistoryByOrigin": [
          74,
          85,
          94,
          104,
          113,
          123,
          132,
          142,
          151,
          161,
          170,
          180,
          189,
          199,
          210,
          221,
          232,
          243,
          253,
          263,
          273,
          284,
          294,
          304,
          315,
          325,
          336,
          346,
          357,
          366,
          376,
          386
        ],
        "upstreamPaddingChecks": 32,
        "maxTargetRrSeconds": 0.9765625,
        "targetRrOver2sCount": 0,
        "targetUniqueRrCount": 1336,
        "targetQcThresholdSeconds": 2.0
      },
      {
        "subjectId": "16795",
        "observedHistoryMin": 68,
        "observedHistoryMax": 348,
        "observedHistoryMedian": 207.0,
        "nominalBeats": 8192,
        "paddingFractionMin": 0.95751953125,
        "paddingFractionMax": 0.99169921875,
        "observedHistoryByOrigin": [
          68,
          77,
          86,
          96,
          107,
          116,
          125,
          133,
          143,
          153,
          162,
          171,
          179,
          187,
          194,
          203,
          211,
          219,
          227,
          235,
          244,
          253,
          263,
          273,
          284,
          294,
          305,
          313,
          322,
          331,
          340,
          348
        ],
        "upstreamPaddingChecks": 32,
        "maxTargetRrSeconds": 1.2890625,
        "targetRrOver2sCount": 0,
        "targetUniqueRrCount": 1304,
        "targetQcThresholdSeconds": 2.0
      },
      {
        "subjectId": "17052",
        "observedHistoryMin": 74,
        "observedHistoryMax": 403,
        "observedHistoryMedian": 230.5,
        "nominalBeats": 8192,
        "paddingFractionMin": 0.9508056640625,
        "paddingFractionMax": 0.990966796875,
        "observedHistoryByOrigin": [
          74,
          85,
          95,
          105,
          115,
          125,
          135,
          146,
          157,
          169,
          179,
          189,
          198,
          208,
          217,
          226,
          235,
          245,
          256,
          268,
          280,
          292,
          304,
          316,
          327,
          339,
          350,
          361,
          371,
          381,
          392,
          403
        ],
        "upstreamPaddingChecks": 32,
        "maxTargetRrSeconds": 1.1484375,
        "targetRrOver2sCount": 0,
        "targetUniqueRrCount": 1353,
        "targetQcThresholdSeconds": 2.0
      },
      {
        "subjectId": "17453",
        "observedHistoryMin": 87,
        "observedHistoryMax": 440,
        "observedHistoryMedian": 266.0,
        "nominalBeats": 8192,
        "paddingFractionMin": 0.9462890625,
        "paddingFractionMax": 0.9893798828125,
        "observedHistoryByOrigin": [
          87,
          100,
          112,
          123,
          134,
          145,
          156,
          167,
          177,
          189,
          201,
          212,
          224,
          235,
          248,
          260,
          272,
          284,
          295,
          307,
          317,
          329,
          340,
          352,
          363,
          374,
          385,
          396,
          408,
          418,
          429,
          440
        ],
        "upstreamPaddingChecks": 32,
        "maxTargetRrSeconds": 1.09375,
        "targetRrOver2sCount": 0,
        "targetUniqueRrCount": 1377,
        "targetQcThresholdSeconds": 2.0
      },
      {
        "subjectId": "18177",
        "observedHistoryMin": 117,
        "observedHistoryMax": 555,
        "observedHistoryMedian": 335.5,
        "nominalBeats": 8192,
        "paddingFractionMin": 0.9322509765625,
        "paddingFractionMax": 0.9857177734375,
        "observedHistoryByOrigin": [
          117,
          130,
          145,
          160,
          176,
          185,
          198,
          214,
          229,
          243,
          256,
          271,
          286,
          300,
          314,
          328,
          343,
          357,
          372,
          385,
          400,
          414,
          428,
          441,
          455,
          470,
          484,
          497,
          512,
          526,
          541,
          555
        ],
        "upstreamPaddingChecks": 32,
        "maxTargetRrSeconds": 11.6328125,
        "targetRrOver2sCount": 2,
        "targetUniqueRrCount": 1462,
        "targetQcThresholdSeconds": 2.0
      },
      {
        "subjectId": "18184",
        "observedHistoryMin": 95,
        "observedHistoryMax": 480,
        "observedHistoryMedian": 286.0,
        "nominalBeats": 8192,
        "paddingFractionMin": 0.94140625,
        "paddingFractionMax": 0.9884033203125,
        "observedHistoryByOrigin": [
          95,
          106,
          119,
          131,
          141,
          152,
          163,
          174,
          186,
          197,
          209,
          222,
          237,
          251,
          265,
          279,
          293,
          308,
          323,
          337,
          352,
          366,
          378,
          390,
          402,
          412,
          423,
          433,
          444,
          455,
          469,
          480
        ],
        "upstreamPaddingChecks": 32,
        "maxTargetRrSeconds": 1.0703125,
        "targetRrOver2sCount": 0,
        "targetUniqueRrCount": 1409,
        "targetQcThresholdSeconds": 2.0
      },
      {
        "subjectId": "19088",
        "observedHistoryMin": 45,
        "observedHistoryMax": 430,
        "observedHistoryMedian": 230.0,
        "nominalBeats": 8192,
        "paddingFractionMin": 0.947509765625,
        "paddingFractionMax": 0.9945068359375,
        "observedHistoryByOrigin": [
          45,
          57,
          68,
          81,
          94,
          107,
          110,
          123,
          136,
          150,
          162,
          174,
          187,
          199,
          211,
          224,
          236,
          249,
          262,
          277,
          289,
          297,
          307,
          320,
          334,
          348,
          362,
          376,
          390,
          404,
          418,
          430
        ],
        "upstreamPaddingChecks": 32,
        "maxTargetRrSeconds": 68.6875,
        "targetRrOver2sCount": 14,
        "targetUniqueRrCount": 1409,
        "targetQcThresholdSeconds": 2.0
      },
      {
        "subjectId": "19090",
        "observedHistoryMin": 45,
        "observedHistoryMax": 440,
        "observedHistoryMedian": 231.0,
        "nominalBeats": 8192,
        "paddingFractionMin": 0.9462890625,
        "paddingFractionMax": 0.9945068359375,
        "observedHistoryByOrigin": [
          45,
          57,
          69,
          80,
          92,
          104,
          117,
          130,
          141,
          153,
          164,
          176,
          187,
          200,
          213,
          225,
          237,
          249,
          263,
          276,
          289,
          303,
          317,
          330,
          343,
          357,
          371,
          384,
          398,
          412,
          426,
          440
        ],
        "upstreamPaddingChecks": 32,
        "maxTargetRrSeconds": 5.6796875,
        "targetRrOver2sCount": 1,
        "targetUniqueRrCount": 1419,
        "targetQcThresholdSeconds": 2.0
      },
      {
        "subjectId": "19093",
        "observedHistoryMin": 41,
        "observedHistoryMax": 318,
        "observedHistoryMedian": 181.5,
        "nominalBeats": 8192,
        "paddingFractionMin": 0.961181640625,
        "paddingFractionMax": 0.9949951171875,
        "observedHistoryByOrigin": [
          41,
          51,
          61,
          70,
          79,
          88,
          97,
          106,
          115,
          124,
          133,
          142,
          151,
          160,
          168,
          177,
          186,
          195,
          204,
          212,
          221,
          231,
          239,
          248,
          256,
          265,
          274,
          283,
          291,
          300,
          309,
          318
        ],
        "upstreamPaddingChecks": 32,
        "maxTargetRrSeconds": 1.0859375,
        "targetRrOver2sCount": 0,
        "targetUniqueRrCount": 1301,
        "targetQcThresholdSeconds": 2.0
      },
      {
        "subjectId": "19140",
        "observedHistoryMin": 48,
        "observedHistoryMax": 459,
        "observedHistoryMedian": 254.0,
        "nominalBeats": 8192,
        "paddingFractionMin": 0.9439697265625,
        "paddingFractionMax": 0.994140625,
        "observedHistoryByOrigin": [
          48,
          61,
          73,
          85,
          98,
          111,
          125,
          138,
          152,
          165,
          179,
          193,
          206,
          221,
          234,
          247,
          261,
          274,
          288,
          303,
          317,
          331,
          346,
          347,
          362,
          377,
          391,
          406,
          420,
          433,
          446,
          459
        ],
        "upstreamPaddingChecks": 32,
        "maxTargetRrSeconds": 7.8046875,
        "targetRrOver2sCount": 1,
        "targetUniqueRrCount": 1435,
        "targetQcThresholdSeconds": 2.0
      },
      {
        "subjectId": "19830",
        "observedHistoryMin": 70,
        "observedHistoryMax": 525,
        "observedHistoryMedian": 294.5,
        "nominalBeats": 8192,
        "paddingFractionMin": 0.9359130859375,
        "paddingFractionMax": 0.991455078125,
        "observedHistoryByOrigin": [
          70,
          83,
          98,
          112,
          126,
          140,
          154,
          169,
          184,
          198,
          212,
          227,
          242,
          257,
          272,
          287,
          302,
          317,
          332,
          348,
          363,
          378,
          393,
          408,
          423,
          437,
          452,
          467,
          482,
          496,
          511,
          525
        ],
        "upstreamPaddingChecks": 32,
        "maxTargetRrSeconds": 5.2578125,
        "targetRrOver2sCount": 2,
        "targetUniqueRrCount": 1479,
        "targetQcThresholdSeconds": 2.0
      }
    ],
    "origins": 32,
    "leadInstances": 2,
    "originSeconds": [
      64,
      72,
      80,
      88,
      96,
      104,
      112,
      120,
      128,
      136,
      144,
      152,
      160,
      168,
      176,
      184,
      192,
      200,
      208,
      216,
      224,
      232,
      240,
      248,
      256,
      264,
      272,
      280,
      288,
      296,
      304,
      312
    ],
    "padding": {
      "TimesFM": "left extension of first observed RR",
      "Chronos-2": "left zero-padding",
      "Moirai 2.0": "left zero-padding"
    },
    "annotationSymbols": [
      "/",
      "?",
      "A",
      "B",
      "E",
      "F",
      "J",
      "L",
      "N",
      "Q",
      "R",
      "S",
      "V",
      "a",
      "e",
      "f",
      "j",
      "n",
      "r"
    ],
    "upstreamHelper": "models.py::_fixed_length_context",
    "verifiedPaddingCalls": 576
  },
  "reproduction": [
    {
      "model": "TimesFM",
      "officialMeanRmseMs": 341.33321026133166,
      "absoluteDifferenceMs": 0.0
    },
    {
      "model": "Chronos-2",
      "officialMeanRmseMs": 589.5561973253886,
      "absoluteDifferenceMs": 0.0
    },
    {
      "model": "Moirai 2.0",
      "officialMeanRmseMs": 756.2373959355884,
      "absoluteDifferenceMs": 0.0
    }
  ],
  "coverage": {
    "summaryRows": 648,
    "stepRows": 687130,
    "matchedModelSubjects": 54,
    "fullMatchedSetting": {
      "context": 8192,
      "horizon": 1024
    },
    "sourceSettingCoverage": [
      {
        "subjectId": "16265",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16265",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16265",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16265",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16265",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16265",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16265",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 241
      },
      {
        "subjectId": "16265",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16265",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16265",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16265",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16265",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16265",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16265",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16265",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16265",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 241
      },
      {
        "subjectId": "16265",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16265",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16265",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16265",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16265",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16265",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16265",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16265",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16265",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 241
      },
      {
        "subjectId": "16265",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16265",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16272",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 241
      },
      {
        "subjectId": "16272",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16272",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 241
      },
      {
        "subjectId": "16272",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16272",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16272",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16273",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16273",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16273",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16273",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16420",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16420",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16420",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16420",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16483",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16483",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16483",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16483",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16539",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16539",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16539",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16539",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16773",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16773",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16773",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16773",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16786",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16786",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16786",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16786",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16795",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16795",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "16795",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "16795",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "17052",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "17052",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "17052",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17052",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "17453",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "17453",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "17453",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "17453",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "18177",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "18177",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "18177",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18177",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "18184",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "18184",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "18184",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "18184",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "19088",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "19088",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "19088",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19088",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "19090",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "19090",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "19090",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19090",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "19093",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "19093",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "19093",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19093",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "19140",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "19140",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "19140",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19140",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "19830",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "TimesFM",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "TimesFM",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "TimesFM",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "19830",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "Chronos-2",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "Chronos-2",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "Chronos-2",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      },
      {
        "subjectId": "19830",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "Moirai 2.0",
        "context": 2048,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "Moirai 2.0",
        "context": 4096,
        "horizon": 1024,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 256,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 512,
        "variabilityPositions": 0
      },
      {
        "subjectId": "19830",
        "model": "Moirai 2.0",
        "context": 8192,
        "horizon": 1024,
        "variabilityPositions": 1009
      }
    ]
  },
  "limitations": [
    "Secondary reanalysis of saved outputs, not new model inference or independent validation.",
    "A smooth point forecast does not establish a poorly calibrated predictive distribution.",
    "Local 16-beat RR variability is not a direct autonomic-state measure or standard clinical HRV endpoint.",
    "Overlapping origins, two repeated RR lead inputs and sliding positions are not independent subjects.",
    "Requested context differs from observed history; padding effects are hypotheses, not causal conclusions.",
    "Exploratory thresholds are user choices, not validated clinical criteria.",
    "The source uses broad beat annotations, not exclusively normal-to-normal intervals.",
    "Filtered annotations can bridge gaps: long target RR intervals may reflect annotation gaps/artifact, not physiological variation. No records are excluded.",
    "Saved per-subject LSTM uses a different training design and is omitted from this matched comparison.",
    "No raw forecasts are reconstructed, and no surgical restricted-access data were used."
  ]
};
