import image from '../../assets/DanO.jpg'

export default function AboutMe() {
    return (
        <div className='bg-isabelline-500 grid grid-flow-col gap-3'>
            <img src={image} className='col-span-1' alt="A photograph of Daniel O'Neil, the person this portfolio is about. He is wearing a striped shirt, a red tie, and glasses. He is stood in front of a lovely abstract painting his mother made for him as a gift." />
            <div className='col-span-4'>
            <h1 className='font-display'>Daniel O'Neil</h1>
            <p className='font-display py-6'>
                Hi, I'm Daniel O'Neil. I am an aspiring full-stack developer based in East Lansing, Michigan.
                I have a Bachelors of Science in Finance and Information Systems Management from Wayne State University, and I have full-stack development training from the MSU coding bootcamp.
                I am looking for either local or remote employment opportunities as I highly value my family and friends in the area and proximity to them is important to me.
                I hope this portfolio does a good job of exemplifying my skills in react, but I also have experience in the rest of the MERN stack, more basic full stack concepts like relational databases and Javascript.
                I also have some experience in fully offline programming in Java, C++, and some Python although you won't find those represented in my github.
                Outside of work I love playing video games, watching sports, working out, spending time with my friends and loved ones, and cooking.
            </p>
            <p className='font-display py-6'>
                Feel free to contact me using either my email (<a className='text-vivid_sky_blue-400 hover:text-vivid_sky_blue-600' href="mailto:danpatoneil@gmail.com">danpatoneil@gmail.com</a>) or the contact page on this site will send a message directly to my email.
                If you'd like to peruse my github page, you can find it <a className='text-vivid_sky_blue-400 hover:text-vivid_sky_blue-600' href="https://github.com/danpatoneil/">here</a>
            </p>
            </div>
        </div>
    );
}
