$(function() {

    $.getJSON("data.json", function(data) {
        // Đổ dữ liệu vào #gallery
        let coverList = data[0].coverList;
        coverList.forEach((cover, i) => {
            $("#gallery").append(`
                <div class="gallery-item item-${i + 1}">
                    <img src="${cover.srcCoverImg}" alt="${cover.title}" class="gallery-img">
                    <div class="overlay">${cover.title}</div>
                </div>
            `)
        });

        // Click item-1 show list img of item-1 
        $(".item-1").click(function() {
            $(".gallery").hide();
            $(".heading").text("Tiện ích DA");

            let DA = data[1].DA;
            DA.forEach(item => {
                $(".sub-item").append(`
                    <div class="gallery-item1">
                        <img src="${item.srcImg}" alt="${item.title}" class="gallery-img">
                        <div class="overlay">${item.title}</div>
                    </div>
                `)
            })
        })

        // Click item-2 show list img of item-2 
        $(".item-2").click(function() {
            $(".gallery").hide();
            $(".heading").text("Tiện ích Ruby");

            let ruby = data[2].ruby;
            ruby.forEach(item => {
                $(".sub-item").append(`
                    <div class="gallery-item1">
                        <img src="${item.srcImg}" alt="${item.title}" class="gallery-img">
                        <div class="overlay">${item.title}</div>
                    </div>
                `)
            })
        })
    });

})