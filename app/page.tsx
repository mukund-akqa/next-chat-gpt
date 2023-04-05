import React from "react";
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
function page() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen ">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div className="flex space-y-2  space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Explain Something to me</p>
            <p className="infoText">
              What is the difference between a dog and cat
            </p>
            <p className="infoText">What is the color of the text</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabalitites</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Explain Something to me</p>
            <p className="infoText">
              What is the differnce between a dog and cat
            </p>
            <p className="infoText">What is the color of the text</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Explain Something to me</p>
            <p className="infoText">
              What is the differnce between a dog and cat
            </p>
            <p className="infoText">What is the color of the text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
