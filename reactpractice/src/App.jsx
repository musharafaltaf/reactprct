import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  const jobs = [
  {
    id: 1,
    company: "Google",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0LqqItjj6kjPy2bhfx_Cs3kIqIEesiN8aMbEXoL-zw&s",
    title: "Frontend Developer",
    location: "Bangalore, India",
    tag: "Full-time",
    salary: "₹12L - ₹20L",
    postedDate: "2026-11-10",
    experience: "2-4 years",
    category: "Engineering",
  },
  {
    id: 2,
    company: "Microsoft",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISXBURx3Mqxn-hoH52jFqxJApL2LAit1QzeCAjCK0XA&s=10",
    title: "Software Engineer",
    location: "Hyderabad, India",
    tag: "Full-time",
    salary: "₹15L - ₹25L",
    postedDate: "2026-11-09",
    experience: "1-3 years",
    category: "Engineering",
  },
  {
    id: 3,
    company: "Amazon",
    logo: "https://media.wired.com/photos/5a99ba72927dc94e67685b9b/191:100/w_1280,c_limit/amazon-a-logo.jpg",
    title: "Full Stack Developer",
    location: "Mumbai, India",
    tag: "Full-time",
    salary: "₹10L - ₹18L",
    postedDate: "2026-11-08",
    experience: "2-5 years",
    category: "Engineering",
  },
  {
    id: 4,
    company: "Netflix",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThW3vszDScLtuavCM31FfcECi3KJ9-wo2HqnX1wB0ewQ&s",
    title: "UI/UX Designer",
    location: "Remote",
    tag: "Remote",
    salary: "₹8L - ₹15L",
    postedDate: "2026-11-07",
    experience: "2-4 years",
    category: "Design",
  },
  {
    id: 5,
    company: "Adobe",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8rU25mnV4mfWqCgV9Y5sjKIfwb2HSKpXAYYJsPLAqCg&s=10",
    title: "Product Designer",
    location: "Noida, India",
    tag: "Full-time",
    salary: "₹10L - ₹18L",
    postedDate: "2026-11-06",
    experience: "3-5 years",
    category: "Design",
  },
  {
    id: 6,
    company: "Flipkart",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjDYLQiGoHOM6_thGgUWPX_3EuapeJQPHATtk9uPc7w&s",
    title: "Backend Developer",
    location: "Bangalore, India",
    tag: "Full-time",
    salary: "₹12L - ₹22L",
    postedDate: "2026-11-05",
    experience: "2-4 years",
    category: "Engineering",
  },
  {
    id: 7,
    company: "Spotify",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4Etwn9YseNZjBn99AHtkQXAkeDoT7UKtSsRUVz0ldA&s=10",
    title: "Data Analyst",
    location: "Remote",
    tag: "Remote",
    salary: "₹8L - ₹14L",
    postedDate: "2026-11-04",
    experience: "1-3 years",
    category: "Data",
  },
  {
    id: 8,
    company: "Tesla",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq7DcYnHS8qNNLtjecc_ymXKCMTQp9-wJRKZnjbgQ5fA&s=10",
    title: "Machine Learning Engineer",
    location: "Pune, India",
    tag: "Full-time",
    salary: "₹18L - ₹30L",
    postedDate: "2026-11-03",
    experience: "3-5 years",
    category: "Engineering",
  },
  {
    id: 9,
    company: "Wipro",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXQlQALb-hPHHs5HeEndcCmv49D5dBWaNv-lwiX6LaQ&s=10",
    title: "React Developer",
    location: "Jaipur, India",
    tag: "Full-time",
    salary: "₹5L - ₹10L",
    postedDate: "2026-11-02",
    experience: "1-3 years",
    category: "Engineering",
  },
  {
    id: 10,
    company: "TCS",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgNGXc58h3CzNUBpmb4Sw9GXUOGKLiIo4MAzgqvWWPA&s=10",
    title: "Java Developer",
    location: "Delhi, India",
    tag: "Full-time",
    salary: "₹6L - ₹12L",
    postedDate: "2026-11-01",
    experience: "1-3 years",
    category: "Engineering",
  },
];
  return (
    <div className='parent'>
      {jobs.map(function(elem,idx){
        console.log(idx)

        return <Card company = {elem.company} title={elem.title} tag={elem.tag} location={elem.location} salary={elem.salary} logo={elem.logo} postedDate={elem.postedDate} experience={elem.experience} key={idx}/>  
         })}
        
    </div>
  )
}

export default App
