import {
    html,
    render
} from 'https://unpkg.com/lit-html?module';

const userProfiles = [{
        username: 'Max',
        img: "https://cdn.landesa.org/wp-content/uploads/default-user-image.png",
        position: "Front End Developer",
        description: "Max is a front end developer, technical trainer and freelancer."
    },
    {
        username: 'Peter',
        img: "https://cdn.landesa.org/wp-content/uploads/default-user-image.png",
        position: "Back End Developer",
        description: "Peter is a back end developer, technical trainer and freelancer."
    },
    {
        username: 'Tony',
        img: "https://cdn.landesa.org/wp-content/uploads/default-user-image.png",
        position: "Full Stack Developer",
        description: "Tony is a full stack developer, technical trainer and freelancer."
    }
];

const userProfile = (username, img, position, description) => html `<article class="user-profile">
<img src="${img}" alt="${username}" />
<h2>${username}</h2>
<h5>${position}</h5>
<p>${description}</p>
</article>`;

const userProfileItems = (items) => html `
<ul>
${items.map(({username, img, position, description}) => {
    return userProfile(username, img, position, description);
}
    )}
</ul>
`;

render(userProfileItems(userProfiles), document.getElementById("user-profiles"));