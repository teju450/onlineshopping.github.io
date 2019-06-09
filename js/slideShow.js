//animation list: card, fade, box3D, glide

$(document).ready(function () {
	   
    $('.slideWiz').slideWiz(
        {
            auto: true,
            speed: 5000,
            type : 'box3D',
            row: 9,
            file :[
    {
      src: {
        main: "img/d4.png",
        cover: "img/d4.png"
      },
      title: 'Slide 1',
      desc: 'Description 1',
      btnTitle: 'Action Button',
      button: {
        text: 'Button Text',
        url: false, // URL
        class: 'Button Class(es)',
        color: '#3781ce'
      }
    },{
      src: {
        main: "img/d2.png",
        cover: "img/d2.png"
      },
      title: 'Slide 2',
      desc: 'Description 2',
      btnTitle: 'Action Button',
      button: {
        text: 'Button Text',
        url: false, // URL
        class: 'Button Class(es)',
        color: '#3781ce'
      }
    },{
      src: {
        main: "img/d3.png",
        cover: "img/d3.png"
      },
      title: 'Slide 3',
      desc: 'Description 3',
      btnTitle: 'Action Button',
      button: {
        text: 'Button Text',
        url: false, // URL
        class: 'Button Class(es)',
        color: '#3781ce'
      }
    },{
      src: {
        main: "img/d6.png",
        cover: "img/d6.png"
      },
      title: 'Slide 4',
      desc: 'Description 4',
      btnTitle: 'Action Button',
      button: {
        text: 'Button Text',
        url: false, // URL
        class: 'Button Class(es)',
        color: '#3781ce'
      }
    },{
      src: {
        main: "img/d9.png",
        cover: "img/d9.png"
      },
      title: 'Slide 3',
      desc: 'Description 3',
      btnTitle: 'Action Button',
      button: {
        text: 'Button Text',
        url: false, // URL
        class: 'Button Class(es)',
        color: '#3781ce'
      }
    },{
      src: {
        main: "img/d8.png",
        cover: "img/d8.png"
      },
      title: 'Slide 3',
      desc: 'Description 3',
      btnTitle: 'Action Button',
      button: {
        text: 'Button Text',
        url: false, // URL
        class: 'Button Class(es)',
        color: '#3781ce'
      }
    },{
      src: {
        main: "img/d5.png",
        cover: "img/d5.png"
      },
      title: 'Slide 3',
      desc: 'Description 3',
      btnTitle: 'Action Button',
      button: {
        text: 'Button Text',
        url: false, // URL
        class: 'Button Class(es)',
        color: '#3781ce'
      }
    },
	
    // more slides here
]
                

        }
    );
	 
	
});


