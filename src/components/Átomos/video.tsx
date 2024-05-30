import netword from '../../assets/video/Network07.mp4'

const Video = () => {
  return (
   <>
   <div className='fixed inset-0  overflow-hidden'> 
   <video className='absolute min-w-full min-h-full object-cover' src={netword} 
   autoPlay muted loop></video>
   </div>
   </>
  );
};

export default Video;