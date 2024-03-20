import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const CameraDisplay: React.FC = () => {
  const webcamRef = useRef<Webcam | null>(null);
  const [isCameraOn, setIsCameraOn] = useState<boolean>(true);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const startCamera = () => {
    setIsCameraOn(true);
  };

  const stopCamera = () => {
    setIsCameraOn(false);
  };

  const captureImage = () => {
    if (webcamRef.current) {
      const imageSrc: string | null = webcamRef.current.getScreenshot();
      console.log(imageSrc);
      setCapturedImage(imageSrc);
    }
  };


  return (
    <div>
      <h1>Camera Display</h1>
      {isCameraOn ? (
        <div>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
          <button onClick={stopCamera}>Stop Camera</button>
          <button onClick={captureImage}>Capture</button>
        </div>
      ) : (
        <button onClick={startCamera}>Start Camera</button>
      )}
      {capturedImage && (
        <div>
          <h2>Captured Image</h2>
          <img src={capturedImage} alt="Captured" />
        </div>
      )}
    </div>
  );
};

export default CameraDisplay;
