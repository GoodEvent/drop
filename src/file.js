let inputElement = document.querySelector("#file")
inputElement.addEventListener('change', handlChange)

function handlChange() {
    let file = this.files[0];
    let reader = new FileReader();
    reader.onload = function (e) {
        let data = this.result;
        let workbook = XLSX.read(data, { type: 'binary' });
        console.log(workbook);
        let outPutSheet = workbook.Sheets.Output;
        let range = XLSX.utils.decode_range(outPutSheet['!ref']);
        let cols = [];
        for (let C = range.s.c; C <= range.e.c; ++C) {
            for (let R = range.s.r; R <= range.e.r; ++R) {
                let cell_address = { c: C, r: R };
                let cell_ref = XLSX.utils.encode_cell(cell_address);
                let value = outPutSheet[cell_ref] && outPutSheet[cell_ref].v;
                // console.log(value)
                if (R === 0) {
                    let col = { width: 100 };
                    col.title = value;
                    col.dataIndex = titileToDataIndex(value);
                    cols.push(col);
                } else if (R === 1) {
                    cols[C].description = value;
                    console.log(value)
                    if (value.search(/自定义排序/)) {
                        cols[C].sorter = true;
                    } else {
                        cols[C].sorter = false;
                    }
                    if (value.search(/筛选/)) {
                        cols[C].filter = true;
                    } else {
                        cols[C].filter = false;
                    }
                }
            }
        }
        console.log(cols);
    }
    reader.readAsBinaryString(file);
}

function titileToDataIndex(title) {
    let sa = title.split(' ');
    let dataIndex = sa.reduce((rs, s, index) => {
        if (index === 0) {
            return rs += s.toLowerCase();
        } else {
            let arrays = s.split('');
            let first = arrays.shift();
            first = first.toUpperCase();
            let end = arrays.join('').toLowerCase();
            let news = first + end;
            return rs += news;
        }
    }, '')
    return dataIndex;

}