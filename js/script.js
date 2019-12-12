$(document).ready(function() {
    var renderBlock = "";

    $('.img-fluid').each(function(index, element) {

        //    For each image generate bootstrap responsive code and also modal image code,
        //  caption is from the alt text of the image
        index = index += 1
        var divindex = 'modal' + index;

        var imagesource = $(this).attr('src');

        var modalImageHTML = ` <div class="col-lg-4 col-md-6 col-sm-12 ">
        <a href="javascript:void(0);" class="imglink" data-toggle="modal" data-target="#` + divindex + `">
        </a>
        </div>`;

        $(this).wrap(modalImageHTML);

        var modalHTML = `<div id="` + divindex + `" class="modal fade" role='dialog'>
    <div class="modal-dialog modal-lg">
        <div class="modal-content">

            <div class="modal-body">
                <img class="img-fluid" src="` + imagesource + `" alt="" class="img-fluid">
            </div>
            <div class="modal-footer">
                <p>` + $(this).attr("alt") + `</p>
                <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
    </div>`;

        renderBlock += modalHTML;


        // element == this

    });








    $('.row').after(renderBlock);
    $.ajax({
        type: "GET",
        url: "readme.txt",
        data: "data",

        success: function(response) {
            $('.aboutText').append(response);
        }
    });

    $('.img-fluid').after(' <i class="fa fa-search" aria-hidden="true"></i>');

    $('.fa').hide();
    $('.imglink').hover(function() {
        // over
        $(this).children('i').show();

    }, function() {
        $(this).children('i').hide();

        // out
    });

});