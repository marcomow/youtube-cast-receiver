# Youtube Cast Receiver (YCR)

> Cast Youtube videos to ANY computer, no chromecast needed!

![](https://img.shields.io/badge/platform-linux--64%20%7C%20osx--64%20%7C%20win--64-green)
![](https://img.shields.io/badge/node%40latest-%3E%3D%206.0.0-green)
![](https://img.shields.io/badge/license-GPL-green)

![](https://github.com/marcomow/youtube-cast-receiver/blob/master/assets/icon.png?raw=true)

Youtube Cast Receiver (YCR) was built to allow you to cast Youtube content from
your phone directly to your computer. This is very useful while traveling with a
laptop and hdmi cable. Leave the chromecast at home!

This is achieved by spoofing the useragent to make your connection appear to
come from a smart TV, allowing you to access
[youtube.com/tv](https://youtube.com/tv). This app launches in fullscreen mode
to give you an immersive and native feeling casting experience.

## Installation

Download the appropriate executable for your operating system from the latest
[release](https://github.com/marcomow/youtube-cast-receiver/releases).

## Linking your device

### 1: Open the application and click the settings icon

![step1](https://i.imgur.com/WLl57WN.png)

### 2: Click "LINK WITH TV CODE"

![step2](https://i.imgur.com/J0Awy33.png)

### 3: Note the TV code on your screen

![step3](https://i.imgur.com/bhmCurr.png)

### 4: Open the Youtube app on your smartphone and click your photo in the top right

<img src="https://i.imgur.com/wcA32XI.png" height="500px">

### 5: Tap "Settings"

<img src="https://i.imgur.com/wcA32XI.png" height="500px">

### 6: Tap "Watch on TV"

<img src="https://i.imgur.com/TrBpOjk.png" height="500px">

### 7: Tap "Enter TV code"

<img src="https://i.imgur.com/2kEBacS.png" height="500px">

### 8: Enter the code on your computer screen in the box and press "Link"

<img src="https://i.imgur.com/gCKYXlz.png" height="500px">

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Development

### Install Deno

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Run the project locally:

```sh
git clone https://github.com/marcomow/youtube-cast-receiver
deno task develop
```

To build:

```sh
deno task compile
```

## Meta

Credits
[https://github.com/GarrettBlackmon/youtube-cast-receiver](https://github.com/GarrettBlackmon/youtube-cast-receiver)

Distributed under the GPL license.
