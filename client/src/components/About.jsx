import React from 'react';
import aboutImage from "../assets/images/about-image.png";

const About = () => {
  return (
    <div className="bg-white">
        <div className="p-24 grid grid-cols-2">
            <div className="">
                <h2 className="text-2xl font-medium">About Us</h2>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis numquam excepturi voluptatum inventore? Harum ipsum ducimus itaque, aliquid, quidem aperiam voluptate ratione veniam maxime architecto labore debitis ullam amet qui?
                </p>
            </div>
            <div className="flex items-center justify-center">
                <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover " />
            </div>
        </div>
    </div>
  )
}

export default About;