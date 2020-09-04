$(function() {
    $.getJSON("data.json", function(data) {
        // Đổ dữ liệu vào #gallery
        let coverList = data[0].coverList;
        coverList.forEach((cover, i) => {
            $("#gallery").append(`
                <div class="gallery-item item-${i + 1}">
                    <img src="${cover.srcCoverImg}" alt="${
        cover.title
      }" class="gallery-img">
                    <div class="overlay">${cover.title}</div>
                </div>
            `);
        });

        //========Click item-1 show list img of item-1
        $(".item-1").click(function() {
            $(".gallery").hide();
            $(".heading").text("Tiện ích DA");

            let DA = data[1].DA;
            DA.forEach((item) => {
                $(".sub-item").append(`
                    <div class="gallery-item1">
                        <img src="${item.srcImg}" alt="${item.title}" class="gallery-img">
                        <div class="overlay">${item.title}</div>
                    </div>
                `);
            });
        });

        //========Click item-2 show list img of item-2
        $(".item-2").click(function() {
            $(".gallery").hide();
            $(".heading").text("Tiện ích Ruby");

            let ruby = data[2].ruby;
            ruby.forEach((item) => {
                $(".sub-item").append(`
                    <div class="gallery-item1">
                        <img src="${item.srcImg}" alt="${item.title}" class="gallery-img">
                        <div class="overlay">${item.title}</div>
                    </div>
                `);
            });
        });

        //========Click item-3 show list child of item-3
        $(".item-3").click(function() {
            $(".gallery").hide();
            $(".heading").text("Tiện ích Sapphire 1");

            let sapphire1 = data[3].sapphire1;
            sapphire1.forEach((item, i) => {
                $(".sub-item").append(`
                    <div class="gallery-item item-3-${i + 1}" onclick="click()">
                        <img src="${item.srcCoverImg}" alt="${item.title}" class="gallery-img">
                        <div class="overlay">${item.title}</div>
                    </div>
                `);
            });
        });

        //========Click item-4 show list img of item-4
        $(".item-4").click(function() {
            $(".gallery").hide();
            $(".heading").text("Biển hồ nước mặn");

            let saltwaterLake = data[4].saltwaterLake;
            saltwaterLake.forEach((item) => {
                $(".sub-item").append(`
                    <div class="gallery-item1">
                        <img src="${item.srcImg}" alt="${item.title}" class="gallery-img">
                        <div class="overlay">${item.title}</div>
                    </div>
                `);
            });
        });

        //========Click item-5 show list img of item-5
        $(".item-5").click(function() {
            $(".gallery").hide();
            $(".heading").text("Biển hồ nước ngọt");

            let freshwaterLake = data[5].freshwaterLake;
            freshwaterLake.forEach((item) => {
                $(".sub-item").append(`
                    <div class="gallery-item1">
                        <img src="${item.srcImg}" alt="${item.title}" class="gallery-img">
                        <div class="overlay">${item.title}</div>
                    </div>
                `);
            });
        });

        //========Click item-6 show list img of item-6
        $(".item-6").click(function() {
            $(".gallery").hide();
            $(".heading").text("ĐH VinUni");

            let vinUni = data[6].vinUni;
            vinUni.forEach((item) => {
                $(".sub-item").append(`
                    <div class="gallery-item1">
                        <img src="${item.srcImg}" alt="${item.title}" class="gallery-img">
                        <div class="overlay">${item.title}</div>
                    </div>
                `);
            });
        });
    });

    function click() {
        console.log("ok");
    }
});