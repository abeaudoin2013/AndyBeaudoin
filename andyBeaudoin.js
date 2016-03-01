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

        // devIteration: 1,

        // artIteration: 1,

        // otherIteration: 1,

        filmIteration: 1,

        devTimeout: null,

        artTimeout: null,

        otherTimeout: null,

        devIsClicked: false,

        artIsClicked: false,

        otherIsClicked: false,

        filmIsClicked: false,

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

        modalProps: {
            'background': '',
            'width': '100%',
            'height': '93%',
            'margin-left': '29%',
            'margin-top': '3%;',
            'display': 'inline-block'
        },

        changeTabColor: {'background-color': 'rgba(211, 77, 68, .8)'},

        initialTabColor: {'background-color': 'rgba(211, 77, 68, .5)'},

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

            $('.artExtender').hide();

            $('.otherExtender').hide();

            $('.films').hide();

            $('.overlay').hide();

            this.startShow();

            // $('#devClicker').click(function() {

            //     console.log('dev');

            //     self.devStartShow();

            // });

            // $('#artClicker').click(function(){

            //     console.log('art');

            //     self.artStartShow();
                
            // });

            // $('#otherClicker').click(function(){

            //     console.log('other');

            //     self.otherStartShow();

            // });

        },

        startShow: function () {

            var self = this;

            // this.devIteration = 1;

            $('#devClicker').click(function() {

                if (self.artIsClicked === true) {

                    //Close art section and open dev

                    self.closeArt();

                    self.openDev();

                } else if (self.otherIsClicked === true) {

                    //Close other section and open dev

                    self.closeOther();

                    //open dev

                    self.openDev();


                } else if (self.devIsClicked === true) {

                    self.closeDev();

                
                } else if (self.devIsClicked === false) {

                    self.openDev();

                }

            });


            $('#artClicker').click(function () {

                if (self.devIsClicked === true) {

                    //close dev open art

                    //close dev

                    self.closeDev();

                    //open art

                    self.openArt();

                } else if (self.otherIsClicked === true) {
                    
                    //close other open art

                    //close other

                    self.closeOther();


                    //open art

                    self.openArt();

                } else if (self.artIsClicked === true) {

                    //close art

                    self.closeArt();


                } else if (self.artIsClicked === false) {

                    //open art

                    self.openArt();

                }

                

                // self.artIsClicked = true;

            });

            $('#otherClicker').click( function () {

                if (self.devIsClicked === true) {

                    //close dev open other

                    //close dev

                    self.closeDev();

                    //open other

                    self.openOther();

                } else if (self.artIsClicked === true) {

                    //close art open other

                    //close art

                    self.closeArt();

                    //open other

                    self.openOther();

                } else if (self.otherIsClicked === true) {

                    //close other

                    self.closeOther();


                } else if (self.otherIsClicked === false) {

                    //open other

                    self.openOther();

                }

            });


        },

        openDev: function () {

            this.devIsClicked = true;

            this.devClassChanger(0);
            
            $('.devExtender').slideDown(800);
            
            this.devChangeState();
            
            this.devAutoScroll();

            this.devTabSelector();

            $('.devFloaterClose').show();

        },

        closeDev: function () {

            this.devIsClicked = false;

            clearTimeout(this.devTimeout);

            $('.devExtender').slideUp(800);

            this.devUnChangeState();

        },

        openArt: function () {

            this.artIsClicked = true;

            this.artClassChanger(0);

            $('.artExtender').slideDown(800);

            this.artChangeState();

            this.artAutoScroll();

            this.artModals();

            this.floaterCloseArt();

            $('.artFloaterClose').show();

        },

        closeArt: function () {

            this.artIsClicked = false;

            $('.artExtender').slideUp(800);

            clearTimeout(this.artTimeout);

            this.artUnChangeState();

        },

        openOther: function () {

            this.otherIsClicked = true;

            this.otherClassChanger(0);

            $('.otherExtender').slideDown(800);

            this.otherChangeState();

            this.otherAutoScroll();

            this.otherTabSelector();

            this.floaterCloseOther();

            $('.otherFloaterClose').show();

        },

        closeOther: function () {

            this.otherIsClicked = false;

            $('.otherExtender').slideUp(800);

            clearTimeout(this.otherTimeout);

            this.otherUnChangeState();

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

        otherClassChanger: function (index) {

            var self = this,
            i = index + 1,
            j = this.otherIcons.length - 1,
            currentOtherIcon = "",
            nextOtherIcon = this.otherIcons[i];

            if (index === -1) {

            // Set the last icon as the current

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

        devAutoScroll: function () {

            $('html, body').animate({
                scrollTop: $(".devExtender").offset().top - 50
            }, 500);

        },

        artAutoScroll: function () {

            $('html, body').animate({
                scrollTop: $(".artExtender").offset().top - 25
            }, 500);

        },

        otherAutoScroll: function () {

            $('html, body').animate({
                scrollTop: $('.otherExtender').offset().top - 25
            }, 500);

        },

        unAutoScroll: function () {

            $('html, body').animate({
                scrollTop: "0px"
            }, 500);

        },

        devTabSelector: function () {

            var self = this,
            darken = this.changeTabColor,
            lighten = this.initialTabColor;

            $('.aboutBlock').hide();
            $('#blockTab').css(lighten);

            $('.aboutVicarious').hide();
            $('#vicTab').css(lighten);

            $('.myClients').fadeIn(500);
            $('#clientsTab').css(darken);            

            $('#vicTab').click( function () {

                $('#vicTab').css(darken);
                $('#blockTab').css(lighten);
                $('#clientsTab').css(lighten);

                // this.devTabBlock = false;
                $('.aboutBlock').hide();

                // this.devTabTop = false;
                $('.myClients').hide();

                // this.devTabTop = true;

                $('.aboutVicarious').fadeIn(500);

            });

            $('#blockTab').click( function () {

                $('#vicTab').css(lighten);
                $('#blockTab').css(darken);
                $('#clientsTab').css(lighten);

                // this.devTabVic = false;
                $('.aboutVicarious').hide();

                // this.devTabTop = false;
                $('.myClients').hide();

                // this.devTabBlock = true;

                $('.aboutBlock').fadeIn(500);

            });

            $('#clientsTab').click( function () {

                $('#vicTab').css(lighten);
                $('#blockTab').css(lighten);
                $('#clientsTab').css(darken);
                
                // this.devTabBlock = false;
                $('.aboutBlock').hide();

                // this.devTabVic = false;
                $('.aboutVicarious').hide();

                $('.myClients').fadeIn(500);

            });

            $('.devFloaterClose').click( function () {

                self.closeDev();

            });

        },

        artModals: function () {

            var self = this;

            $('#one').click( function () {

                self.modalEvent('#one');

            });

            $('#two').click( function () {

                self.modalEvent('#two');

            });

            $('#three').click( function () {

                self.modalEvent('#three');

            });

            $('#four').click( function () {

                self.modalEvent('#four');

            });

            $('#five').click( function () {

                self.modalEvent('#five');

            });

            $('#six').click( function () {

                self.modalEvent('#six');

            });

            $('#seven').click( function () {

                self.modalEvent('#seven');

            });

            $('#eight').click( function () {

                self.modalEvent('#eight');

            });

            $('#nine').click( function () {

                self.modalEvent('#nine');

            });

            $('#ten').click( function () {

                self.modalEvent('#ten');

            });

            $('#eleven').click( function () {

                self.modalEvent('#eleven');

            });

            $('#twelve').click( function () {

                self.modalEvent('#twelve');

            });

            $('#thirteen').click( function () {

                self.modalEvent('#thirteen');

            });

            $('#fourteen').click( function () {

                self.modalEvent('#fourteen');

            });

            $('#fifteen').click( function () {

                self.modalEvent('#fifteen');

            });

            $('#sixteen').click( function () {

                self.modalEvent('#sixteen');

            });

            $('#seventeen').click( function () {

                self.modalEvent('#seventeen');

            });

            $('#eighteen').click( function () {

                self.modalEvent('#eighteen');

            });

        },

        modalEvent: function (element) {

            var self = this;

            this.modalProps['background'] = $(element).css('background');

                $('.overlay').slideDown(500);

                $('.innerlay').css(self.modalProps);

                $('.artFloaterClose').hide();

                $('.modalClose').click( function () {

                    $('.overlay').slideUp(500);

                    $('.artFloaterClose').show();

                });

        },

        floaterCloseArt: function () {

            var self = this;

            $('.artFloaterClose').click( function () {

                self.closeArt();

            });

        },

        floaterCloseOther: function () {

            var self = this;

            $('.otherFloaterClose').click( function () {

                self.closeOther();
            });

        },

        otherTabSelector: function () {

            var self = this,
            darken = this.changeTabColor,
            lighten = this.initialTabColor;

            $('.writingDrop').css(darken);
            $('.writings').fadeIn(500);

            $('.filmsDrop').css(lighten);
            $('.films').hide();

            $('.pastWorkDrop').css(lighten);
            $('.pastWorks').hide();


           
            $('.filmDrop').click(function () {

                $('.filmDrop').css(darken);

                $('.writingDrop').css(lighten);
                $('.writings').hide();

                $('.pastWorkDrop').css(lighten);
                $('.pastWorks').hide();

                $('.films').fadeIn(500)

            });

            $('.writingDrop').click( function () {

                $('.filmDrop').css(lighten);
                $('.writingDrop').css(darken);
                $('.pastWorkDrop').css(lighten);

                // this.devTabVic = false;
                $('.films').hide();

                // this.devTabTop = false;
                $('.pastWorks').hide();

                // this.devTabBlock = true;

                $('.writings').fadeIn(500);

            });

            $('.pastWorkDrop').click( function () {

                $('.filmDrop').css(lighten);
                $('.writingDrop').css(lighten);
                $('.pastWorkDrop').css(darken);
                
                // this.devTabBlock = false;
                $('.films').hide();

                // this.devTabVic = false;
                $('.writings').hide();

                $('.pastWorks').fadeIn(500);

            });


        }

    };

    Portfolio.init();

});















