{"version":3,"sources":["script.min.js"],"names":["JCSmartFilter","ajaxURL","viewMode","params","this","form","timer","cacheKey","cache","popups","SEF_SET_FILTER_URL","bindUrlToButton","sef","SEF_DEL_FILTER_URL","document","addEventListener","querySelector","BrandsList","querySelectorAll","str","filterBrands","event","val","target","value","i","length","textContent","toLocaleUpperCase","indexOf","style","display","minPrice","$","maxPrice","range","slider","min","parseInt","attr","max","values","slide","ui","handleIndex","smartFilter","keyup","on","prototype","input","clearTimeout","setTimeout","BX","delegate","reload","click","checkbox","position","pos","findParent","tag","name","gatherInputsValues","findChildren","RegExp","curFilterinput","postHandler","disabled","ajax","loadJSON","values2post","updateItem","PID","arItem","PROPERTY_TYPE","PRICE","trackBar","window","ENCODED_ID","VALUES","MIN","FILTERED_VALUE","setMinFilteredValue","VALUE","MAX","setMaxFilteredValue","hasOwnProperty","control","CONTROL_ID","label","DISABLED","addClass","parentNode","removeClass","innerHTML","ELEMENT_COUNT","result","fromCache","hrefFILTER","url","modef","modef_num","filterBtn","ITEMS","popupId","destroy","classList","add","contains","remove","FILTER_URL","href","util","htmlspecialcharsback","FILTER_AJAX_URL","COMPONENT_CONTAINER_ID","unbindAll","bind","e","insertToNode","PreventDefault","INSTANT_RELOAD","findChild","class","appendChild","buttonId","j","func","button","type","location","elements","el","toLowerCase","checked","options","selected","post","current","p","substring","rest","pp","hideFilterProps","element","obj","filterBlock","propAngle","hasClass","easing","duration","start","opacity","height","offsetHeight","finish","transition","transitions","quart","step","state","complete","setAttribute","animate","obj_children_height","showDropDownPopup","contentNode","PopupWindowManager","create","autoHide","offsetLeft","offsetTop","overlay","draggable","restrict","closeByEsc","content","clone","show","selectDropDownItem","controlId","className","getCurrentPopup","close","namespace"],"mappings":"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","file":"../js/script.min.js","sourcesContent":["document.addEventListener(\"DOMContentLoaded\", () => {\n    if (document.querySelector('[data-brand]') ) {\n        const BrandsList = [...document.querySelectorAll('[data-brand]')]\n        let str = document.querySelector('.brands-filter');\n        filterBrands = (event) => {\n            let val = event.target.value\n            for (i = 0; i < BrandsList.length; i++) {\n                let brand = BrandsList[i].textContent\n                if (brand.toLocaleUpperCase().indexOf(val.toLocaleUpperCase()) > -1) {\n                    BrandsList[i].style.display = \"\";\n                } else {\n                    BrandsList[i].style.display = \"none\";\n                }\n            }\n        }\n        str.addEventListener('input', filterBrands)\n    }\n    if (document.querySelector('.min-price')) {\n        const minPrice = $( \".min-price\" )\n        const maxPrice = $( \".max-price\" )\n\n        var range = $( \"#slider-range\" ).slider({\n            min: parseInt(minPrice.attr('min')),\n            max: parseInt(maxPrice.attr('max')),\n            values: [0, parseInt(maxPrice.val())],\n            range: true,\n            slide: function( event, ui ) {\n                if (ui.handleIndex === 0) {\n                    minPrice.val(ui.values[0])\n                } else {\n                    maxPrice.val(ui.values[1])\n                }\n                smartFilter.keyup(this)\n            }\n        });\n        minPrice.on( \"keyup\", function() {\n            let min = parseInt($(this).val()) < parseInt(maxPrice.val()) ? parseInt($(this).val()) : parseInt(maxPrice.val())\n            range.slider( \"values\", 0, min);\n            range.slider( \"values\", 1, parseInt(maxPrice.val()) );\n            minPrice.val(min)\n        });\n        maxPrice.on( \"keyup\", function() {\n            let max = parseInt($(this).val()) > parseInt(minPrice.val()) ? parseInt($(this).val()) : parseInt(minPrice.val())\n            range.slider( \"values\", 0, parseInt(minPrice.val()) );\n            range.slider( \"values\", 1, max);\n            maxPrice.val(max)\n        });\n    }\n});\nfunction JCSmartFilter(ajaxURL, viewMode, params)\n{\n    this.ajaxURL = ajaxURL;\n    this.form = null;\n    this.timer = null;\n    this.cacheKey = '';\n    this.cache = [];\n    this.popups = [];\n    this.viewMode = viewMode;\n    if (params && params.SEF_SET_FILTER_URL)\n    {\n        this.bindUrlToButton('set_filter', params.SEF_SET_FILTER_URL);\n        this.sef = true;\n    }\n    if (params && params.SEF_DEL_FILTER_URL)\n    {\n        this.bindUrlToButton('del_filter', params.SEF_DEL_FILTER_URL);\n    }\n}\n\nJCSmartFilter.prototype.keyup = function(input)\n{\n    if(!!this.timer)\n    {\n        clearTimeout(this.timer);\n    }\n    this.timer = setTimeout(BX.delegate(function(){\n        this.reload(input);\n    }, this), 500);\n\n};\n\nJCSmartFilter.prototype.click = function(checkbox)\n{\n    if(!!this.timer)\n    {\n        clearTimeout(this.timer);\n    }\n\n    this.timer = setTimeout(BX.delegate(function(){\n        this.reload(checkbox);\n    }, this), 500);\n};\n\nJCSmartFilter.prototype.reload = function(input)\n{\n    if (this.cacheKey !== '')\n    {\n        //Postprone backend query\n        if(!!this.timer)\n        {\n            clearTimeout(this.timer);\n        }\n        this.timer = setTimeout(BX.delegate(function(){\n            this.reload(input);\n        }, this), 1000);\n        return;\n    }\n    this.cacheKey = '|';\n\n    this.position = BX.pos(input, true);\n    this.form = BX.findParent(input, {'tag':'form'});\n    if (this.form)\n    {\n        var values = [];\n        values[0] = {name: 'ajax', value: 'y'};\n        this.gatherInputsValues(values, BX.findChildren(this.form, {'tag': new RegExp('^(input|select)$', 'i')}, true));\n\n        for (var i = 0; i < values.length; i++)\n            this.cacheKey += values[i].name + ':' + values[i].value + '|';\n\n        if (this.cache[this.cacheKey])\n        {\n            this.curFilterinput = input;\n            this.postHandler(this.cache[this.cacheKey], true);\n        }\n        else\n        {\n            if (this.sef)\n            {\n                var set_filter = BX('set_filter');\n                set_filter.disabled = true;\n            }\n\n            this.curFilterinput = input;\n            BX.ajax.loadJSON(\n                this.ajaxURL,\n                this.values2post(values),\n                BX.delegate(this.postHandler, this)\n            );\n        }\n    }\n};\n\nJCSmartFilter.prototype.updateItem = function (PID, arItem)\n{\n    if (arItem.PROPERTY_TYPE === 'N' || arItem.PRICE)\n    {\n        var trackBar = window['trackBar' + PID];\n        if (!trackBar && arItem.ENCODED_ID)\n            trackBar = window['trackBar' + arItem.ENCODED_ID];\n\n        if (trackBar && arItem.VALUES)\n        {\n            if (arItem.VALUES.MIN)\n            {\n                if (arItem.VALUES.MIN.FILTERED_VALUE)\n                    trackBar.setMinFilteredValue(arItem.VALUES.MIN.FILTERED_VALUE);\n                else\n                    trackBar.setMinFilteredValue(arItem.VALUES.MIN.VALUE);\n            }\n\n            if (arItem.VALUES.MAX)\n            {\n                if (arItem.VALUES.MAX.FILTERED_VALUE)\n                    trackBar.setMaxFilteredValue(arItem.VALUES.MAX.FILTERED_VALUE);\n                else\n                    trackBar.setMaxFilteredValue(arItem.VALUES.MAX.VALUE);\n            }\n        }\n    }\n    else if (arItem.VALUES)\n    {\n        for (var i in arItem.VALUES)\n        {\n            if (arItem.VALUES.hasOwnProperty(i))\n            {\n                var value = arItem.VALUES[i];\n                var control = BX(value.CONTROL_ID);\n\n                if (!!control)\n                {\n                    var label = document.querySelector('[data-role=\"label_'+value.CONTROL_ID+'\"]');\n                    if (value.DISABLED)\n                    {\n                        if (label)\n                            BX.addClass(label, 'disabled');\n                        else\n                            BX.addClass(control.parentNode, 'disabled');\n                    }\n                    else\n                    {\n                        if (label)\n                            BX.removeClass(label, 'disabled');\n                        else\n                            BX.removeClass(control.parentNode, 'disabled');\n                    }\n\n                    if (value.hasOwnProperty('ELEMENT_COUNT'))\n                    {\n                        label = document.querySelector('[data-role=\"count_'+value.CONTROL_ID+'\"]');\n                        if (label)\n                            label.innerHTML = value.ELEMENT_COUNT;\n                    }\n                }\n            }\n        }\n    }\n};\n\nJCSmartFilter.prototype.postHandler = function (result, fromCache)\n{\n    var hrefFILTER, url, curProp;\n    var modef = BX('modef');\n    var modef_num = BX('modef_num');\n\n    var filterBtn = BX('set_filter');\n\n    if (!!result && !!result.ITEMS)\n    {\n        for(var popupId in this.popups)\n        {\n            if (this.popups.hasOwnProperty(popupId))\n            {\n                this.popups[popupId].destroy();\n            }\n        }\n        this.popups = [];\n\n        for(var PID in result.ITEMS)\n        {\n            if (result.ITEMS.hasOwnProperty(PID))\n            {\n                this.updateItem(PID, result.ITEMS[PID]);\n            }\n        }\n        if (!!modef && !!modef_num)\n        {\n            modef_num.innerHTML = result.ELEMENT_COUNT;\n            hrefFILTER = BX.findChildren(modef, {tag: 'A'}, true);\n            filterBtn.classList.add('hasResult')\n\n            if (result.ELEMENT_COUNT > 0) {\n                filterBtn.value = 'Показать ('+result.ELEMENT_COUNT+')';\n                modef.classList.contains('is-empty')\t  ? modef.classList.remove('is-empty') : ''\n                filterBtn.classList.contains('is-empty') ? filterBtn.classList.remove('is-empty') : ''\n            }\n            if (result.ELEMENT_COUNT == 0) {\n                filterBtn.value = 'Ничего не найдено';\n                filterBtn.classList.add('is-empty')\n                modef.classList.add('is-empty')\n            }\n\n            if (result.FILTER_URL && hrefFILTER)\n            {\n                hrefFILTER[0].href = BX.util.htmlspecialcharsback(result.FILTER_URL);\n            }\n\n            if (result.FILTER_AJAX_URL && result.COMPONENT_CONTAINER_ID)\n            {\n                BX.unbindAll(hrefFILTER[0]);\n                BX.bind(hrefFILTER[0], 'click', function(e)\n                {\n                    url = BX.util.htmlspecialcharsback(result.FILTER_AJAX_URL);\n                    BX.ajax.insertToNode(url, result.COMPONENT_CONTAINER_ID);\n                    return BX.PreventDefault(e);\n                });\n            }\n\n            if (result.INSTANT_RELOAD && result.COMPONENT_CONTAINER_ID)\n            {\n                url = BX.util.htmlspecialcharsback(result.FILTER_AJAX_URL);\n                BX.ajax.insertToNode(url, result.COMPONENT_CONTAINER_ID);\n            }\n            else\n            {\n                if (modef.style.display === 'none')\n                {\n                    modef.style.display = 'inline-block';\n                }\n\n                if (this.viewMode == \"VERTICAL\")\n                {\n                    curProp = BX.findChild(BX.findParent(this.curFilterinput, {'class':'bx-filter-parameters-box'}), {'class':'bx-filter-container-modef'}, true, false);\n                    curProp.appendChild(modef);\n                }\n\n                if (result.SEF_SET_FILTER_URL)\n                {\n                    this.bindUrlToButton('set_filter', result.SEF_SET_FILTER_URL);\n                }\n            }\n        }\n    }\n\n    if (this.sef)\n    {\n        var set_filter = BX('set_filter');\n        set_filter.disabled = false;\n    }\n\n    if (!fromCache && this.cacheKey !== '')\n    {\n        this.cache[this.cacheKey] = result;\n    }\n    this.cacheKey = '';\n};\n\nJCSmartFilter.prototype.bindUrlToButton = function (buttonId, url)\n{\n    var button = BX(buttonId);\n    if (button)\n    {\n        var proxy = function(j, func)\n        {\n            return function()\n            {\n                return func(j);\n            }\n        };\n\n        if (button.type == 'submit')\n            button.type = 'button';\n\n        BX.bind(button, 'click', proxy(url, function(url)\n        {\n            window.location.href = url;\n            return false;\n        }));\n    }\n};\n\nJCSmartFilter.prototype.gatherInputsValues = function (values, elements)\n{\n    if(elements)\n    {\n        for(var i = 0; i < elements.length; i++)\n        {\n            var el = elements[i];\n            if (el.disabled || !el.type)\n                continue;\n\n            switch(el.type.toLowerCase())\n            {\n                case 'text':\n                case 'textarea':\n                case 'password':\n                case 'hidden':\n                case 'select-one':\n                    if(el.value.length)\n                        values[values.length] = {name : el.name, value : el.value};\n                    break;\n                case 'radio':\n                case 'checkbox':\n                    if(el.checked)\n                        values[values.length] = {name : el.name, value : el.value};\n                    break;\n                case 'select-multiple':\n                    for (var j = 0; j < el.options.length; j++)\n                    {\n                        if (el.options[j].selected)\n                            values[values.length] = {name : el.name, value : el.options[j].value};\n                    }\n                    break;\n                default:\n                    break;\n            }\n        }\n    }\n};\n\nJCSmartFilter.prototype.values2post = function (values)\n{\n    var post = [];\n    var current = post;\n    var i = 0;\n\n    while(i < values.length)\n    {\n        var p = values[i].name.indexOf('[');\n        if(p == -1)\n        {\n            current[values[i].name] = values[i].value;\n            current = post;\n            i++;\n        }\n        else\n        {\n            var name = values[i].name.substring(0, p);\n            var rest = values[i].name.substring(p+1);\n            if(!current[name])\n                current[name] = [];\n\n            var pp = rest.indexOf(']');\n            if(pp == -1)\n            {\n                //Error - not balanced brackets\n                current = post;\n                i++;\n            }\n            else if(pp == 0)\n            {\n                //No index specified - so take the next integer\n                current = current[name];\n                values[i].name = '' + current.length;\n            }\n            else\n            {\n                //Now index name becomes and name and we go deeper into the array\n                current = current[name];\n                values[i].name = rest.substring(0, pp) + rest.substring(pp+1);\n            }\n        }\n    }\n    return post;\n};\n\nJCSmartFilter.prototype.hideFilterProps = function(element)\n{\n    var obj = element.parentNode,\n        filterBlock = obj.querySelector(\"[data-role='bx_filter_block']\"),\n        propAngle = obj.querySelector(\"[data-role='prop_angle']\");\n\n    if(BX.hasClass(obj, \"bx-active\"))\n    {\n        BX.addClass(propAngle, \"down\");\n        BX.removeClass(propAngle, \"up\");\n\n        new BX.easing({\n            duration : 300,\n            start : { opacity: 1,  height: filterBlock.offsetHeight },\n            finish : { opacity: 0, height:0 },\n            transition : BX.easing.transitions.quart,\n            step : function(state){\n                filterBlock.style.opacity = state.opacity;\n                filterBlock.style.height = state.height + \"px\";\n            },\n            complete : function() {\n                filterBlock.setAttribute(\"style\", \"\");\n                BX.removeClass(obj, \"bx-active\");\n            }\n        }).animate();\n    }\n    else\n    {\n        BX.addClass(obj, \"bx-active\");\n        BX.removeClass(propAngle, \"down\");\n        BX.addClass(propAngle, \"up\");\n\n        filterBlock.style.display = \"block\";\n        filterBlock.style.opacity = 0;\n        filterBlock.style.height = \"auto\";\n\n        var obj_children_height = filterBlock.offsetHeight;\n        filterBlock.style.height = 0;\n\n        new BX.easing({\n            duration : 300,\n            start : { opacity: 0,  height: 0 },\n            finish : { opacity: 1, height: obj_children_height },\n            transition : BX.easing.transitions.quart,\n            step : function(state){\n                filterBlock.style.opacity = state.opacity;\n                filterBlock.style.height = state.height + \"px\";\n            },\n            complete : function() {\n            }\n        }).animate();\n    }\n};\n\nJCSmartFilter.prototype.showDropDownPopup = function(element, popupId)\n{\n    var contentNode = element.querySelector('[data-role=\"dropdownContent\"]');\n    this.popups[\"smartFilterDropDown\"+popupId] = BX.PopupWindowManager.create(\"smartFilterDropDown\"+popupId, element, {\n        autoHide: true,\n        offsetLeft: 0,\n        offsetTop: 3,\n        overlay : false,\n        draggable: {restrict:true},\n        closeByEsc: true,\n        content: BX.clone(contentNode)\n    });\n    this.popups[\"smartFilterDropDown\"+popupId].show();\n};\n\nJCSmartFilter.prototype.selectDropDownItem = function(element, controlId)\n{\n    this.keyup(BX(controlId));\n\n    var wrapContainer = BX.findParent(BX(controlId), {className:\"bx-filter-select-container\"}, false);\n\n    var currentOption = wrapContainer.querySelector('[data-role=\"currentOption\"]');\n    currentOption.innerHTML = element.innerHTML;\n    BX.PopupWindowManager.getCurrentPopup().close();\n};\n\nBX.namespace(\"BX.Iblock.SmartFilter\");"]}