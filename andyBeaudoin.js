$( document ).ready(function() {


    Portfolio = {

        // previousIndex: 0,

        // currentIndex: 1,

        devIcons: ["fa fa-code fa-5x", 'fa fa-laptop fa-5x', "fa fa-database fa-5x", "fa fa-keyboard-o fa-5x", "fa fa-code-fork fa-5x", "fa fa-mobile fa-5x"],

        artIcons: ["fa fa-pencil fa-5x", "fa fa-paint-brush fa-5x", "fa fa-eraser fa-5x", "fa fa-child fa-5x", "fa fa-eye fa-5x", "fa fa-hand-peace-o fa-5x" ],

        otherIcons: ["fa fa-camera-retro fa-5x", "fa fa-film fa-5x", "fa fa-language fa-5x", "fa fa-lightbulb-o fa-5x", "fa fa-hand-peace-o fa-5x", "fa fa-bicycle fa-5x"],

        vicariousImages: ['vic_lander.png', 'vic_post.png', 'vic_post2.png', 'vic_story.png'],

        blockImages: [],

        top5Images: [],

        devImages: [this.vicariousImages, this.blockImages, this.top5Images],

        artImages: [],

        otherImages: [],

        devTimeout: null,

        artTimeout: null,

        otherTimeout: null,

        devIsClicked: false,

        artIsClicked: false,

        otherIsClicked: false,

        devTabVic: false,

        devTabBlock: false,

        devTabTop: false,

        addedProps: {
            'border': '1px solid #A32227',
            'background-color': '#ECE6CD'
        },

        lostProps: {
            'border': '',
            'background-color': ''
        },

        // carouselProps: {
        //     'background' : null,
        //     'width': '100%',
        //     'height': '300px',
        //     'background-repeat': 'no-repeat',
        //     'background-size': 'contain',
        //     'display': 'inline-block'
        // },

        init: function () {

            var self = this;

            $('.devExtender').hide();

            $('#devClicker').click(function() {

                self.devStartShow();

            });

            $('#artClicker').click(function(){

                self.artStartShow();
                
            });

            $('#otherClicker').click(function(){

                self.otherStartShow();

            });

        },

        devStartShow: function () {


            if (this.artIsClicked === false && this.otherIsClicked === false) {

                this.devIsClicked = true;
                
                var iteration= $(this).data('iteration')||1
                
                switch (iteration) {
                
                    case 1:
                        
                        this.devClassChanger(0);

                        // this.devCarousel(0);
                        
                        $('.devExtender').slideDown(800);
                        
                        this.devChangeState();
                        
                        this.autoScroll();

                        this.devTabSelector();

                        break;
                    
                    case 2:
                        clearTimeout(this.devTimeout);
                        $('.devExtender').slideUp(800);
                        this.devUnChangeState();
                        this.devIsClicked = false;
                        break;

                }

                iteration++;
                
                if (iteration>2) iteration=1

                $(this).data('iteration',iteration);
            }

        },

        devClassChanger: function (index) {

            var self = this,
            i = index + 1,
            j = this.devIcons.length - 1,
            currentDevIcon = "",
            nextDevIcon = this.devIcons[i];

            if (index === -1) {

            // this is telling the program to set the last icon as the current

                currentDevIcon = this.devIcons[j];

            } else {

            //else set it to the index

                currentDevIcon = this.devIcons[index];

            };


            $('#icon1').removeClass(currentDevIcon).addClass(nextDevIcon);


            this.devTimeout = setTimeout(function () {

                 if (i === j) {


                    self.devClassChanger(-1);

                } else {


                    self.devClassChanger(i);

                }

            }, 100);   

        },

        artStartShow: function () {

            var self = this;

            if (this.devIsClicked === false && this.otherIsClicked === false) {

                this.artIsClicked = true;
            
                var iteration= $(this).data('iteration')||1
                
                switch (iteration) {
                
                    case 1:

                        this.artClassChanger(0);

                        $('.artExtender').slideDown(800);

                        this.artChangeState();

                        this.autoScroll();

                         $('.part1').click(function () {
                            //Function
                        });

                        break;
                    
                    case 2:
                        // this.devClassStatic(0);
                        $('.artExtender').slideUp(800);
                        clearTimeout(this.artTimeout);
                        this.artUnChangeState();
                        this.artIsClicked = false;
                        break;

                }

                iteration++;
                
                if (iteration>2) iteration=1

                $(this).data('iteration',iteration);
            }

        },

        artClassChanger: function (index) {

            var self = this,
            i = index + 1,
            j = this.artIcons.length - 1,
            currentArtIcon = "",
            nextArtIcon = this.artIcons[i];

            if (index === -1) {

            // this is telling the program to set the last icon as the current

                currentArtIcon = this.artIcons[j];

            } else {

            //else set it to the index

                currentArtIcon = this.artIcons[index];

            };


            $('#icon2').removeClass(currentArtIcon).addClass(nextArtIcon);


            this.artTimeout = setTimeout(function () {

                 if (i === j) {


                    self.artClassChanger(-1);

                } else {


                    self.artClassChanger(i);

                }

            }, 100);   

        },

        otherStartShow: function () {

            var self = this;

            if (this.devIsClicked === false && this.artIsClicked === false) {

                this.otherIsClicked = true;

                var iteration= $(this).data('iteration')||1
                
                switch (iteration) {
                
                    case 1:

                        this.otherClassChanger(0);

                        $('.otherExtender').slideDown(800);

                        this.otherChangeState();

                        this.autoScroll();

                         $('.part1').click(function () {

                            //Function

                        });

                        break;
                    
                    case 2:
                        // this.devClassStatic(0);
                        $('.otherExtender').slideUp(800);
                        clearTimeout(this.otherTimeout);
                        this.otherUnChangeState();
                        this.otherIsClicked = false;
                        break;

                }

                iteration++;
                
                if (iteration>2) iteration=1

                $(this).data('iteration', iteration);
            }
        },

        otherClassChanger: function (index) {

            var self = this,
            i = index + 1,
            j = this.otherIcons.length - 1,
            currentOtherIcon = "",
            nextOtherIcon = this.otherIcons[i];

            if (index === -1) {

            // this is telling the program to set the last icon as the current

                currentOtherIcon = this.otherIcons[j];

            } else {

            //else set it to the index

                currentOtherIcon = this.otherIcons[index];

            };


            $('#icon3').removeClass(currentOtherIcon).addClass(nextOtherIcon);


            this.otherTimeout = setTimeout(function () {

                 if (i === j) {


                    self.otherClassChanger(-1);

                } else {


                    self.otherClassChanger(i);

                }

            }, 100);   

        },

        devChangeState: function () {

            $('#devClicker').css(this.addedProps);

        },

        devUnChangeState: function () {

            $('#devClicker').css(this.lostProps);

        },

        artChangeState: function () {

            $('#artClicker').css(this.addedProps);

        },

        artUnChangeState: function () {

            $('#artClicker').css(this.lostProps);

        },

        otherChangeState: function () {

            $('#otherClicker').css(this.addedProps);

        },

        otherUnChangeState: function () {

            $('#otherClicker').css(this.lostProps);

        },

        autoScroll: function () {

            $('html, body').animate({
                scrollTop: $(".devExtender").offset().top - 50
            }, 1000);

        },

        devTabSelector: function () {

            // this.devTabBlock = false;
            $('.aboutBlock').hide();

            // this.devTabTop = false;
            $('.aboutTopFive').hide();

            // this.devTabVic = true;
            $('.aboutVicarious').fadeIn(500);
            
            

            $('#vicTab').click( function () {

                // this.devTabBlock = false;
                $('.aboutBlock').hide();

                // this.devTabTop = false;
                $('.aboutTopFive').hide();

                // this.devTabTop = true;

                $('.aboutVicarious').fadeIn(500);

            });

            $('#blockTab').click( function () {
                
                // this.devTabVic = false;
                $('.aboutVicarious').hide();

                // this.devTabTop = false;
                $('.aboutTopFive').hide();

                this.devTabBlock = true;

                $('.aboutBlock').fadeIn(500);

            });

            $('#topTab').click( function () {
                
                // this.devTabBlock = false;
                $('.aboutBlock').hide();

                // this.devTabVic = false;
                $('.aboutVicarious').hide();

                $('.aboutTopFive').fadeIn(500);

            });

        }

        // devCarousel: function (index) {

        //     //index is always current
        //     //i is always the next
        //     //j is always the last
        //     var self = this,
        //     i = index + 1,
        //     j = this.vicariousImages.length - 1,
        //     currentImage = "",
        //     nextImage = this.vicariousImages[i];

        //     if (index === -1) {

        //         currentImage = this.vicariousImages[j];

        //     } else {

        //         currentImage = this.vicariousImages[index];

        //     }

        //     this.carouselProps['background'] = 'url(images/dev/' + currentImage + ')'

        //     $('.part1').css(this.carouselProps);


        //     $('.part1').click( function () {

        //         if (i === j) {

        //             self.devCarousel(-1);

        //         } else {

        //             self.devCarousel(i);

        //         }
        //     });

        // },

        // artCarousel: function (index) {

        // },

        // artCarousel: function (index) {

        // }

    };

    Portfolio.init();

});















