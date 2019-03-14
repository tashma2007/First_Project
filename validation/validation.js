$(document).ready(function () {

    var validator = $("contactUs-form").bootstrapValidator({
        fields: {
            email: {
                stringLength: {
                    min: 6,
                    max: 35,
                    message: "Email address must be between 3 and 35 characters long",
                    
                }
            }

        }

    })

})