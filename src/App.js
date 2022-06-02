import { useState } from "react";
import {Button, Text, Flex, Box, Image, Input, Textarea, Link} from "@chakra-ui/react"

const App = () => {
  return (
    <Box>
      <Box bgImage={require('./first.png')} width={'100vw'} height={'100vh'} bgSize={'100% 100%'}>
        <Flex direction={'row'} justifyContent={'right'} gap={'5%'} paddingTop={'3%'} paddingRight={'10%'}>
          <Button bg={'transparent'} position={'absolute'} top={'6%'} left={'10%'}>
            <Image src={require('./prodOne.png')} width={'100%'} height={'100%'}></Image>
          </Button>
          <Button color={'white'} fontWeight={'bold'} bg={'transparent'} border={'none'} fontSize={'3vh'}>
            About
          </Button>
          <Button color={'white'} fontWeight={'bold'} bg={'transparent'} border={'none'} fontSize={'3vh'}>
            Features
          </Button>
          <Button color={'white'} fontWeight={'bold'} bg={'transparent'} border={'none'} fontSize={'3vh'}>
            Contact
          </Button>
        </Flex>

        <br/><br/><br/>

        <Flex marginLeft={'10%'} direction={'column'} width={'80%'} alignContent={'center'} alignItems={'center'} bgColor={'rgba(0, 0, 0, 0.4)'}>
          <Image src={require('./rocket.png')} position={'absolute'} top={'15%'} left={'45%'} width={'8%'} height={'15%'} />
          <br/><br/>
          <Text color={'white'} width={'55%'} fontSize={'8vh'} fontWeight={'700'}>Getting Your Work Done Through Gaming!</Text>
          <br/>
          <Text color={'gray'} width={'55%'}>We created this software to making learning and work fun for others through games! Sign up now to get early access for Prodicity as soon as it gets released!</Text>
          <br/><br/><br/>
          <Flex direction={'row'} justifyContent={'center'} bg={'transparent'} border={'none'} >
            <Input boxShadow={'0 0 30px 5px #B1C7FF'} color={'white'} fontSize={'3vh'} bgColor={'#232152'} width={'90vh'} padding={'4%'} outline={'none'} borderTopLeftRadius={20} borderBottomLeftRadius={20} borderTopRightRadius={0} borderBottomRightRadius={0} placeholder="Add your email..."/>
            <Button boxShadow={'0 0 30px 5px #B1C7FF'} color={'white'} bgColor={'#161535'} padding={'4%'} borderTopRightRadius={20} borderBottomRightRadius={20} borderTopLeftRadius={0} borderBottomLeftRadius={0}>
              Get Early Access →
            </Button>
          </Flex>
          <br /><br />
        </Flex>
      </Box>

      <Flex bgGradient={'linear(to-b, #161535, #3E3B93)'} justifyContent={'center'} direction={'column'} width={'100vw'} height={'100vh'}>
        <Flex direction={'column'} width={'90vw'} borderTopRightRadius={20} borderBottomRightRadius={20} backgroundColor={'rgba(97, 94, 166, 0.75)'} padding={'5%'} >
          <Flex justifyContent={'center'} direction='row'>
            
            <Flex direction={'column'} marginRight={'5%'}>
              <Text color={'white'} fontWeight={'800'} fontSize={'8vh'}>About Us</Text>
              <br />
              <Image src={require('./prodTwo.png')} width={'80%'} height={'60%'} />
            </Flex>
            
            <Flex direction={'column'} justifyContent={'center'} marginLeft={'5%'}>
              <Text color={'white'} fontSize={'3vh'} width={'30vw'}>
              Hello, we are a company seeking to make people productive through video games. There will be various games like racing, 
              boss fighting, map findings, and more!<br /><br />

              Furthermore, we have different types of options within the app. We have quests, parties, clans, sessions, to do lists, friend tracker, and various other features!
              </Text>
            </Flex>

            
            </Flex>
            <Flex direction={'row'} justifyContent={'center'} gap={'7%'} padding={'2vh'}>
              <Link>
                <Image src = {require('./youtube.png')} width={'3vw'} height={'4vh'} />
              </Link>
              <Link>
                <Image src = {require('./discord.png')} width={'3vw'} height={'4vh'} />
              </Link>
              <Link>
                <Image src = {require('./facebook.png')} width={'3vw'} height={'4vh'} />
              </Link>
              <Link>
                <Image src = {require('./twitter.png')} width={'3vw'} height={'4vh'} />
              </Link>
              <Link>
                <Image src = {require('./tiktok.png')} width={'3vw'} height={'4vh'} />
              </Link>
              <Link>
                <Image src = {require('./instagram.png')} width={'3vw'} height={'4vh'} />
              </Link>
            </Flex>

          </Flex>
      </Flex>

      <Flex bgGradient={'linear(to-b, #3B398D, #323072)'} width={'100vw'} height={'100vh'} direction={'column'} alignItems={'center'}>
        <Text color={'white'} fontSize={'8vh'} fontWeight={'700'}>
          Fight bosses with friends!
        </Text>
        <br/>
        <Text color={'white'} fontSize={'3vh'}>
          Level up your characters  and pets. Fight bosses with friends and complete challenges with your clan!
        </Text>
        <br/><br/>
        <Image src={require('./gaming.png')} />
      </Flex>

      <Flex paddingTop={'5%'} bgGradient={'linear(to-b, #312F6E, #3A378C)'} width={'100vw'} height={'100vh'} direction={'column'} alignItems={'center'}>
        <Flex direction = 'row'>
          <Image src = {require('./imgOne.png')} width={'40vw'} height={'40vh'}/>
          <Flex direction = {'column'} justifyContent={'center'} alignItems={'center'} width={'40vw'} marginLeft={'5vw'}>
            <Text color={'white'} fontWeight={'800'} fontSize={'5vh'}>Group Sessions</Text>
            <br />
            <Text color={'white'}>Group sessions but you have the option to conduct group and indicifual sessions. During these sessions you can chat related to studies, execute tasks on the todo list, and even listen to music!</Text>
          </Flex>
        </Flex>
        <Flex direction = 'row'>
          <Flex direction = {'column'} justifyContent={'center'} alignItems={'center'} width={'40vw'} marginRight={'5vw'}>
            <Text color={'white'} fontWeight={'800'} fontSize={'5vh'}>Marketplace</Text>
            <br />
            <Text color={'white'}>You can buy various characters in the market system for bragging rights and other amazing purposes, but in order to do so, you have to work up to that level...</Text>
          </Flex>
          <Image src = {require('./imgTwo.png')} width={'40vw'} height={'40vh'} />
        </Flex>
      </Flex>

      <Flex paddingTop={'2vh'} bgGradient={'linear(to-b, #3A378C, #161535)'} width={'100vw'} height={'100vh'} direction={'column'} alignItems={'center'}>
        <Text color = {'white'} fontSize={'4vh'} fontWeight={'500'}>
          Prodicity
        </Text>
        <Text color = {'white'} fontWeight={'600'} fontSize={'6vh'} >
          What makes 
          Prodicity such a great platform?
        </Text>
        <Image src = {require('./bigImg.png')} width={'85vw'} height = {'85vh'}/>
      </Flex>

      <Flex paddingTop={'1%'} backgroundColor={'#161535'} width={'100vw'} height={'120vh'} direction={'column'} alignItems={'center'}>
        <Text color={'white'} fontSize={'8vh'} fontWeight={'700'}>
          Let’s Talk
        </Text>
        <Text color={'gray'} width={'50vw'}>
        If you need help you can visit the help center or read our About Us page. We are looking forward to answering any of your questions here! We hope you enjoy the app!
        </Text>
        <Flex direction={'row'} justifyContent={'center'} margin={0}>
          <Flex direction={'column'} alignItems={'center'} justifyContent={'center'}>
            
            <Flex direction = "column" justifyContent={'center'} marginBottom={'4vh'}>
              <Text color={'white'} fontSize={'3vh'} fontWeight={'600'}>Email:</Text>
              <Input boxShadow={'0 0 10px 5px #B1C7FF'} color={'white'} borderRadius={20} fontSize={'3vh'} bgColor={'#232152'} width={'90vh'} padding={'4%'} placeholder = {'Enter Email Here'}/>
            </Flex>

            <Flex direction = "column" justifyContent={'center'} marginBottom={'4vh'}>
              <Text color={'white'} fontSize={'3vh'} fontWeight={'600'}>Subject:</Text>
              <Input boxShadow={'0 0 10px 5px #B1C7FF'} color={'white'} borderRadius={20} fontSize={'3vh'} bgColor={'#232152'} width={'90vh'} padding={'4%'} placeholder = {'Enter Subject Here'}/>
            </Flex>

            <Flex direction = "column" justifyContent={'center'} marginBottom={'4vh'}>
              <Text color={'white'} fontSize={'3vh'} fontWeight={'600'}>Message:</Text>
              <Textarea resize={'vertical'} boxShadow={'0 0 10px 5px #B1C7FF'} color={'white'} borderRadius={20} fontSize={'3vh'} bgColor={'#232152'} width={'90vh'} height={'25vh'} padding={'4%'} placeholder = {'Enter Message Here'}/>
            </Flex>
            
            <Button width={'20vw'} color={'white'} boxShadow={'0 0 10px 5px #B1C7FF'} backgroundColor={'#232152'} fontSize={'3vh'} padding={'4%'}>
              Submit
            </Button>
            
          </Flex>

          <Flex direction={'column'} alignItems={'center'} justifyContent={'center'}>
            <Image src={require('./contact.png')} width={'100%'} height={'60%'}/>
            <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
              <Image src={require('./nav.png')} width={'13%'} height={'65%'} marginRight={'1vw'} />
              <Text color = {"white"} fontWeight={'600'} width={'12vw'}>Cupertino, CA 95014 
United States</Text>
            </Flex>
            <br/>
            <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
              <Image src={require('./mail.png')} width={'13%'} height={'65%'} marginRight={'1vw'} />
              <Link color={'white'} target={"_blank"} fontWeight={'600'} width={'12vw'}>prodicityteam@gmail.com</Link>
            </Flex>
            <br/>
            <Flex direction={'row'} justifyContent={'center'} gap={'7%'} padding={'2vh'}>
              <Link>
                <Image src = {require('./youtube.png')} width={'4vw'} height={'4vh'} />
              </Link>
              <Link>
                <Image src = {require('./discord.png')} width={'4vw'} height={'4vh'} />
              </Link>
              <Link>
                <Image src = {require('./facebook.png')} width={'4vw'} height={'4vh'} />
              </Link>
              <Link>
                <Image src = {require('./twitter.png')} width={'4vw'} height={'4vh'} />
              </Link>
              <Link>
                <Image src = {require('./tiktok.png')} width={'4vw'} height={'4vh'} />
              </Link>
              <Link>
                <Image src = {require('./instagram.png')} width={'4vw'} height={'4vh'} />
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <br/>
        <Text color={'white'}>
          Copyright © Prodicity Inc. 2022
        </Text>
      </Flex>

    </Box>
  );
}

export default App;
