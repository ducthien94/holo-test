$(function() {

    let type1 = [
        { id: 1, category: "DA", title: "Tiện ích dự án" },
        { id: 2, category: "ruby", title: "Tiện ích Ruby" },
        { id: 4, category: "saltwaterLake", title: "Biển hồ nước mặn" },
        { id: 5, category: "freshwaterLake", title: "Biển hồ nước ngọt" },
        { id: 6, category: "vinUni", title: "ĐH VinUni" }
    ];

    let type2 = [
        { id: 3, category: "sapphire1", title: "Tiện ích Sapphire 1" },
        { id: 7, category: "sapphire2", title: "Tiện ích Sapphire 2" },
        { id: 8, category: "other", title: "Tiện ích khác" },
    ];

    $.getJSON("data.json", function(data) {

        // Đổ dữ liệu vào #gallery
        let coverList = data[0].coverList;
        coverList.forEach((cover, i) => {
            $("#gallery").append(`
                <div class="gallery-item item-${i + 1}">
                    <img src="${cover.srcCoverImg}" alt="${cover.title}" class="gallery-img">
                    <div class="overlay">${cover.title}</div>
                </div>
            `);
        });

        $(".btn").click(function() {

        })


        //  Click gallery-item nào thì show ảnh của item đó.
        type1.forEach(item => {
            const { id, category, title } = item;
            $(`.item-${id}`).click(function() {
                $(".gallery").hide();
                $(".heading").text(title);
                let galleryItem = data[id][category];
                galleryItem.forEach((item) => {
                    const { srcImg, title } = item;
                    $(".sub-gallery").append(`
                       <div class="gallery-item1">
                           <img onclick="showPopup(this)" src="${srcImg}" alt="${title}" class="gallery-img">
                           <div class="overlay">${title}</div>
                       </div>
                   `);
                });
            });
        })

        //  Click sub-gallery-item thì show ảnh của item đó
        type2.forEach(item => {
            const { id, category, title } = item;
            $(`.item-${id}`).click(function() {
                $(".gallery").hide();
                $(".heading").text(title);

                let subGallery = data[id][category];
                subGallery.forEach((item, i) => {
                    const { srcCoverImg, title } = item;
                    $(".sub-gallery").append(`
                      <div class="gallery-item" onclick="showGalleryItem(${i}, '${category}', ${id})">
                          <img src="${srcCoverImg}" alt="${title}" class="gallery-img">
                          <div class="overlay">${title}</div>
                      </div>
                  `);
                });
            });
        })
    });

});

// Show gallery item of sub-gallery
function showGalleryItem(i, category, id) {
    $.getJSON("data.json", function(result) {
        let data = result[id][category];
        let title = data[i].title
        $(".gallery-item").hide();
        $(".heading").text(title);
        data[i].child.forEach((item) => {
            const { srcImg, title } = item;
            $(".sub-gallery").append(`
                 <div class="gallery-item1">
                     <img onclick="showPopup(this)" src="${srcImg}" alt="${title}" class="gallery-img">
                     <div class="overlay">${title}</div>
                 </div>
             `);
        });
    })


}

function showPopup(o) {
    let srcImg = o.src;
    let title = o.alt;
    $(".overlay-img").fadeIn();
    $(".popup").children("img").attr("src", srcImg);
    $(".popup .img-title").text(title)
}

// Close popup
$(".close").click(function() {
    $(".overlay-img").fadeOut();
})