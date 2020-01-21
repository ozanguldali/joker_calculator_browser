loadButton.onclick = function() {

    loadButton.disabled = true;

    error_injecting.hidden = false;

    if ( onWindowLoad() === true ) {

        customerListDiv.hidden = false;

        let order_table = injecting_DOM.querySelector("body > div.container.ys-main > div > div > div.row.basket-info > div > div > table > tbody");

        let rowCount = order_table.rows.length;

        let i, value, count;
        for ( i = 0; i < rowCount; i++ ) {

            addCustomer.name = order_table.rows[ i ].cells[0].querySelector( "b" ).innerText;

            count = order_table.rows[ i ].cells[2].innerText;

            value = order_table.rows[ i ].cells[3].innerText;
            value = value.trim().replace( "TL", "" ).trim().replace( ",", "." ).trim();
            initialCost = parseFloat( value );

            console.log(name);
            console.log(initialCost);

            if ( count === "1" )
                addRow(name, initialCost);

            else {

                let j;
                for ( j = 0; j < count; j++ ) {

                    addRow(name, initialCost/count);

                }

            }

        }

        console.log( injecting_htmlString );

        return false;

    }

    setTimeout(function() {

        error_injecting.innerText = 'Lütfen Elle Giriş Yapınız, veya Yeniden Başlatınız.';

    }, 3 * 1000 );

    console.log( injecting_htmlString );

    return false;

};