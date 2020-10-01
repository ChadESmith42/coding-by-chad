import { Project } from './project.model';

export const ProjectsData: Project[] = [
    {
        name: 'Resume Story Map',
        link: 'https://cbcmapresume.z19.web.core.windows.net/',
        imgPath: '/assets/images/resume-story-map.png',
        description: ['My background is in Geospatial Information Systems (GIS) and geography. I thought it would be cool to show my geographic influence by creating a map-based resume.', 'The \'Story Map\' concept has been around in GIS for several years. It\'s an inter-active map that guides the user through a story that is spatially related.', 'I used Mapbox-GL API to create the map. Stamen\'s Toner Map serves as the basemap for my resume. I created a custom method to handle the text/map interactions.', 'The map is mobile friendly as well. I modified the initial layout and control method to present a differnt view for mobile users.'],
        lastPublished: null
    },
    {
        name: 'Literary Clock',
        link: 'https://cbcliteraryclock.z22.web.core.windows.net/',
        imgPath: '/assets/images/literary-clock.png',
        description: ['I found an article written by Jaap Meijers which described his project to build his wife a \'literary clock\' from a database of book quotes that reference a time of day and an old Kindle e-reader. I also found Justin Whalley\'s cool site (literaryclock.com), that contains his own web-based version. Justin was cool enough to provide me with his dataset. This is the result.', 'I used Matisse\'s Water Lilies as the visual foundation of this project. I sampled colors from the painting to complement the test. Special Elite font, from Google Fonts, was my choice for typography. The project is built using Angular 9. I wanted the clock to stay in sync, so it checks the time every second. That\'s probably over-kill, but it\'s a small site.'],
        lastPublished: null
    },
    {
        name: 'Fun Fact Generator',
        link: 'https://cbcfunfactgenerator.z22.web.core.windows.net/',
        imgPath: '/assets/images/fun-fact-generator.png',
        description: ['I got the idea for this project while sitting in a meeting, where we were asked to introduce ourselves and include a \'fun fact.\'', 'Hers\'s a fun fact: Developers don\'t like to share personal details.', 'I created a simple list of nouns, adjectives, and verbs. The app picks a word from the list and puts them together to form a fun fact about you. Previous fun facts are listed on the page, but not stored after the session closes.'],
        lastPublished: null
    },
    {
        name: 'Ugliest FizzBuzz',
        link: 'https://angular-fizzbuzz-ugly.stackblitz.io',
        imgPath: '/assets/images/fizzbuzz-ugly.png',
        description: ['While discussing various solutions to coding problems, one of the interns at my job referred to "THE solution" for FizzBuzz. We laughed as if there was only one.', 'Then I began to think about the worst possible way to solve the problem. Shortly thereafter, I created this project.', 'After I finished using ternary operators to solve the problem, I decided the project truly needed to be ugly. I added some bad styling and published. Enjoy the ugliest FizzBuzz solution you may ever see.'],
        lastPublished: null
    },
    {
        name: 'Error Module',
        link: 'https://github-42vgo1.stackblitz.io',
        imgPath: '/assets/images/error-module.png',
        description: ['This module was born from a project I completed at work. I created a centralized error service that sets the state for the application errors. The service emits an observable to the error component. The developer sets the error parameters and route in the error handling within each method.', 'The best thing about this app is the error routing. You can customize the route to indicate which method or endpoint caused the error. As long as that route does not match an existing route, the error component will be displayed and the url will include some debugging information.'],
        lastPublished: null
    },
    {
        name: 'Angular Donut Chart',
        link: 'https://ng8-donut-chart-with-slider.stackblitz.io',
        imgPath: '/assets/images/ng-donut-chart.png',
        description: ['I created this donut chart to fix an old bug related to one of my job\'s external portal sites. The donut chart was not displaying properly in IE11. (I know, it\'s unfortunate, but we still support IE11.)', 'I refactored the component to accept a value for the donut chart. This variation was built on Stackblitz and demonstrates the donut component via a slider. I added changing colors based on the donut chart value.'],
        lastPublished: null
    }
];
