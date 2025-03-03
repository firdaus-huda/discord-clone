import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroButton from './components/HeroButton'
import Content from './components/Content'
import EmptySpace from './components/EmptySpace'
import RunningText from './components/RunningText'

function App() {
  return (
    <>
      <Header/>
      <Navbar />
      <Hero />
      <HeroButton/>
      <EmptySpace/>
      <Content 
          header='MAKE YOUR GROUP CHATS MORE FUN' 
          content='Use custom emoji, stickers, soundboard effects and more to add your personality to your voice, video, or text chat. Set your avatar and a custom status, and write your own profile to show up in chat your way.'
          videoSource='https://cdn.prod.website-files.com/6257adef93867e50d84d30e2%2F6787b62a9742f59453ba8919_Discord_Websote_Refresh_Emojis2_EN-transcode.mp4'
          reversePosition = {true}/>
      <EmptySpace/>
      <Content 
          header='stream like you’re in the same room' 
          content='Use custom emoji, stickers, soundboard effects and more to add your personality to your voice, video, or text chat. Set your avatar and a custom status, and write your own profile to show up in chat your way.'
          videoSource='https://cdn.prod.website-files.com/6257adef93867e50d84d30e2%2F6763b611120b46189e164b4a_Discord_Website_Refresh_EN-transcode.mp4'/>
      <EmptySpace/>
      <Content 
          header='Hop in when you’re free, no need to call' 
          content='Easily hop in and out of voice or text chats without having to call or invite anyone, so your party chat lasts before, during, and after your game session.'
          videoSource='https://cdn.prod.website-files.com/6257adef93867e50d84d30e2%2F6763b97ce56d6870c55bae84_Discord_Refresh_Hop-In_Fix_EN-transcode.mp4'
          reversePosition = {true}/>
      <EmptySpace/>
      <RunningText/>
      <EmptySpace/>
      <Content 
          header='See who’s around to chill' 
          content='See who’s around, playing games, or just hanging out. For supported games, you can see what modes or characters your friends are playing and directly join up.'
          videoSource='https://cdn.prod.website-files.com/6257adef93867e50d84d30e2%2F6763b9b54d5970da21066d28_Discord_Refresh_StatusHover_EN-transcode.mp4'/>
      <EmptySpace/>
      <Content 
          header='always have something to do together' 
          content='Watch videos, play built-in games, listen to music, or just scroll together and spam memes. Seamlessly text, call, video chat, and play games, all in one group chat.'
          videoSource='https://cdn.prod.website-files.com/6257adef93867e50d84d30e2%2F6763b9f56c9bf69e5e914cd5_Discord_Refresh_Activities_EN-transcode.mp4'
          reversePosition = {true}/>
      <EmptySpace/>
      <Content 
          header='wherever YOU GAME, HANG OUT HERE' 
          content='On your PC, phone, or console, you can still hang out on Discord. Easily switch between devices and use tools to manage multiple group chats with friends.'
          videoSource='https://cdn.prod.website-files.com/6257adef93867e50d84d30e2%2F6763ba683086419cf7bfb7fb_Discord_Refresh_Platforms-transcode.mp4'/>
      <EmptySpace/>
    </>
  )
}

export default App
