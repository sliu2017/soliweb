import Cover from '../components/Home/Cover';
import About from '../components/Home/About';
import Projects from '../components/Home/Projects';

const data = [
    {
        anchor: 'cover',
        color: '#cccccc',
        path: '#cover',
        icon: 'fa fa-home',
        header: 'sonny',
        body: Cover,
    },
    {
        anchor: 'about',
        color: '#999999',
        path: '#about',
        icon: 'fa fa-info',
        header: 'about',
        body: About,
    },
    {
        anchor: 'projects',
        color: '#666666',
        path: '#projects',
        icon: 'fa fa-folder',
        header: 'projects',
        body: Projects,
    },
];

export default data;