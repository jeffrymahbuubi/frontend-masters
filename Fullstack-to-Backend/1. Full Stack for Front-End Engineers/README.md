# Fullstack for Front-End Engineers

## Description

- Links = https://frontendmasters.com/courses/fullstack-v3
- Material Lecture = https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf
- Lecturer = Jem Young - Netflix Engineering Manager

## Course Material

### Introduction

#### [1. Introduction](https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf) | Page 1 - Page 17

- Based on the lecturer's opinion, a **full-stack engineer** is not someone who just knows a bit of front-end and back-end and integrates it all together with someone else's tools. He argues that if you can't pick the right operating system for your company, tweak an IP configuration table, or adjust a firewall, then you may not be a full-stack engineer.
- In this course:
  - Deep deive into servers and networking
  - Database overview
  - How the internet works
  - Relationships between systems

#### [2. What is a Full Stack Engineer](https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf) | Page 18 - Page 24

- What is a stack?
  - UI
  - web server
  - database
  - operating system
  - application server
- Popular Stacks
  - MEAN ➡️ Mongo, Express, Angular, Node.js
  - LAMP ➡️ Linux, Apache, MySQL, PHP
  - MERN ➡️ Mongo, Express, React, Node.js
- Based on category
  - UI ➡️ React, Angular, Vue
  - Web Server ➡️ Node.js, Tomcat, Apache
  - Database ➡️ Redis, MySQL, Postgress
- So based on the Lecturers slide

  > Full Stack Engineeri is an engineer who can create and manage both the frontend and backend of an application

### Command Line

#### [Command Line Exercise](https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf) | Page 24 - Page 42

- Terminal and Command Line
  - The most efficient way to talking to your computers or The fastest way to communicate with computers.
  - It fast, consistent, and low overhead
- Some examples of commands:
  - `ls`: List directory contents
  - `cd`: Change directory
  - `mkdir`: Make directory
  - `rmdir`: Remove directory
  - `cat`: Concatenate and display files
  - `man`: Manual pages
  - `less`: View file contents
  - `touch`: Create empty file
  - `rm`: Remove files
  - `echo`: Repeat input
- In case you get lost:
  - `cd..`: Move up directory
  - `pwd`: Print working directory
  - `clear`: Clear terminal screen
  - `ctrl + c`: Cancel current command
  - `cd ~`: Go to home directory
- VIM
  - **insert mode** - Text editing ➡️ press `i`
  - **normal mode** - Primary mode ➡️ press `esc`
  - **command mode** - Searching, saving, exiting press `:`
  - In case you get stuck:
    - Press `esc` and press `q!`
  - Some good resources for learning VIM
    - [VIM Wiki](https://vim.fandom.com/wiki/All_the_right_moves)
    - [VIM Cheatsheet](https://linuxmoz.com/vi-commands-cheat-sheet/)
    - [OpenVIM](https://openvim.com/) - This is interesting: a hands-on guide to using VIM in the browser.
- Shells
  - It is the actual application running in the terminal. A shell interprets all those commands and converts them into something that the operating system can understand.
  - `zsh` - more extensible version of bash (`~/.zshrc`)
  - `bash` - Bourne again shell (`~/.bash_profile`)
  - To show your current shell you can do follwing
    - `echo $0`
    - `echo $SHELL`
  - If you want to learn more there is course in frontend-masters called [Intro to Bash, VIM, & Regex](https://frontendmasters.com/courses/bash-vim-regex/) taught by James Halliday
- Exercise:

  - **Command Line Exercise**

    - Create a `.bash` script to compile an execution list of commands for the exercise (Page 31). This serves as proof that you have completed the exercise. To execute the bash script, you need to grant permission to the script using `chmod +x script.bash`, and then execute the script by running `./script.bash`.

  - **VIM Exercise**

    - It's mostly similar to the command line exercise, except you create a file with `vi test` ➡️ Press `i` to enter insert mode ➡️ Write something ➡️ Press `esc` to exit insert mode ➡️ Save your file with `:wq` (write and quit).

  - **Shell Exercise**
    - Open your shell configuration file.
    - Add a line to make your shell greet you with "Good morning."
    - **TIPS**:
      - If you don't know the name of a file, you can press `TAB`, and the terminal will show you a list of possible files. For example, if you type `vi ~/.ba..` and are unsure of the file name, pressing `TAB` will show options like `.bash_history`, `.bashrc`, and `.bash_logout`. Complete the command by typing `vi ~/.bashrc` to open your shell configuration file.
      - Solution is just put `echo good morning $USER`

### [Server](https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf) | Page 43 - Page 46

#### Servers

- What is a server?

- When we think of **servers**, we often think of dedicated hardware that must be available 100% of the time to other devices.
- We are going to create a simple **Node.js server** running on port 3000. Some ports are reserved, such as port 22 for **SSH**, port 80 for **HTTP**, and port 443 for **HTTPS**. In total, there are around 65,000 ports.

  ```javascript
  const http = require("http");

  const fs = require("fs");
  const PORT = 3000;

  const server = http.createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream("index.html").pipe(res);
  });

  server.listen(PORT);
  console.log(`server started on port ${PORT}`);
  ```

- Every server has two basic components: a **request** (`req`) and a **response** (`res`). There are various types of responses.
- `require('http')` and `require('fs')` are built-in libraries that come pre-installed with Node.js.
- The `res.writeHead` method is used to set the header content type. It helps the browser understand what is being sent back. These headers are not part of the response body; they are metadata attached to the response.
- `fs.createReadStream` allows you to stream files directly from the disk to the response. This approach is much faster and more memory-efficient than loading the entire file into memory first.
- The `const server` declaration indicates that we have created a server. To make the server listen to a port, we use `server.listen(PORT)`.
- To run the server, you can use **Node Version Manager (nvm)**. Use `nvm ls` to list available Node.js versions and `nvm use v18` to switch to Node.js version 18.

#### [Server Management](https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf) | Page 47 - Page 50

- In the past, many companies created data centers where they placed their servers in their basements. Generally, as a developer, you're not running a server rack in your own house. While some people do run their own servers using open NAS for serving, when we're talking about web applications, you're not going to run a server from your own home because if it's down, people can't access the website.
- Today, we use **cloud computing**. It's like a giant data center somewhere. The idea is that there is a massive pile of servers somewhere, and we can borrow some time from them or install our applications on them.
- **Cloud Computing**:
  - **Virtualization**: Dividing a server's resources into virtual computers.
  - **Virtual Machine**: A digital version of a physical computer. This concept involves virtualizing an entire computer, including memory, hardware, GPU, and all other parts. It's like a clone of your computer.
  - **VPS (Virtual Private Server)**: Netflix, Facebook, and all modern web applications use some sort of VPS.

#### [Buying a VPS](https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf) | Page 51 - Page 54

- We are going to use [DigitalOcean](https://www.digitalocean.com/?refcode=3bea45abfdb1&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=CopyPaste). Follow that link to get $200 in free credits for 2 months, but you will still need to use your own credit card to set up.
- Steps:
  - **Step 1**: Create a Droplet (Cloud Server) ➡️ Choose the region closest to where your visitors are coming from. In this case, I choose Singapore. Generally, a high-performance web application like Netflix has servers in all regions.
  - **Step 2**: Select Datacenter ➡️ In this case, I choose Datacenter 1 (SGP1).
  - **Step 3**: Select Operating System ➡️ We want to carefully consider the OS. We will choose Ubuntu, specifically the LTS (Long Term Support) version.
  - **Step 4**: For the Droplet type, choose the smallest one (Basic) with a shared CPU. Select the cheapest option; in this case, I chose Regular at $4/month.
  - **Step 5**: To access the server, we use SSH. Create an SSH key with `ssh-keygen`, name it `fsfe` for learning purposes, and copy the `fsfe.pub` file to DigitalOcean.
- **Operating Systems**:
  - **Windows** ➡️ Windows Server
  - **Unix**:
    - Solaris
    - **Linux** ➡️ Debian, CentOS, Ubuntu, Fedora, Red Hat
    - **BSD** ➡️ FreeBSD ➡️ OSX/MacOS

### Operating Systems

#### [Operating Systems](https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf) | Page 54 - 55

- One of the best things about **Linux** is that most distributions are free, although Red Hat is not.
- In a **Unix** system, the OS is composed of the following layers: Hardware ➡️ Kernel ➡️ Shell ➡️ User.
  - The **Kernel** is the layer that interacts with the hardware. This falls under the field of **Computer Engineering**, not **Computer Science**.

#### [Security & Hashing](https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf) | Page 56 - Page 60

- In the past, we used passwords, but human behavior tends to create weak passwords. Therefore, we use **SSH** since it's more secure and unlikely to be hacked.
- It's crucial to keep our server safe from malicious actors because if someone gains control of our server, the blame will fall on you, not the bad actors. Hence, we don't use usernames and passwords for servers.
- **Dictionary Attack**: This involves using computer-generated randomness to guess your password.
- **Hashing**: A method of storing large amounts of information in a small string of characters.
  - We take some data, which is just a string of bits and bytes.
  - We pass it into a mathematical function called a **hash function**.
  - The output of the function is called a **hash**. There are different kinds of hashing functions:
    - **MD5**: This used to be a cryptographic hash. The problem with MD5 is that it is very predictable and not long enough, producing 33 characters.
      - `echo password >> foo` creates a file named `foo` containing `password`.
      - We use a tool called `openssl`, which contains hashing functions.
      - To hash the `foo` file, we use `openssl md5 foo | awk -F"{print $2}"`.
      - You can check the hash result with `openssl md5 foo`, and it will show `MD5(foo)= 286755fad04869ca523320acce0dc6a4`.
    - **SHA1**:
      - It produces 44 characters.
      - You can use `openssl sha1 foo`, and the result will be `SHA1(foo)= c8fed00eb2e87f1cee8e90ebbe870c190ac3848c`.
    - **SHA256** (The Gold Standard):
      - It produces 65 characters.

#### [Hashing with Salt](https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf) | Page 61 - Page 62

- Adding **salt** to a hashing function enhances security by introducing an additional layer of randomness to the input data. This makes it significantly harder for attackers to use precomputed tables (rainbow tables) to crack the hashes. Even if two users have the same password, their hashes will be different due to the unique salt added to each password before hashing.
- In order to validate your file that has been hashed using a hashing function, you need to store the **salt**.
- So what's the use case?
  - **Cryptocurrencies**: It's all about hashing. Bitcoin uses SHA256. You solve the puzzle, run the hash, and get a prize called Bitcoin.
  - **Ethereum**: Uses Keccak-256.
- **Ransomware**: A type of software that gets maliciously installed on a computer system and encrypts all the data on that system. By encrypting the data, it means using hashing. Since hashing is one-way, ransomware typically uses encryption, which is two-way.

#### [Setup SSH Keys for Login](https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf) | Page 63 - Page 72

- SSH uses something called a public key encryption. So the concept is there's two parts to an SSH key called a SSH key pair. There's the public SSH which you can share.
- The public key is used to encrypt any sort of data, and think it as a hashing function. The great thing is anybody can encrypt this message but only me can decrypt it.
- SSH Exercise:
  - Move into the `~/.ssh` directory 📁
  - Generate a key using `ssh-keygen`
  - Name your key `fsfe`
- You can `cat fsfe` and `fsfe.pub`. The `fsfe` private key will be substantially longer. This is because the private key uses very strong encryption. It's called asymmetric cryptography, which means you can only encrypt one way and decrypt the other way. That's why not all communication uses SHA256, because it's very resource-intensive.
- **Accessing Your Server**
  - **Step 1:** SSH into your server: `ssh root@<your_IP>`
  - **Step 2:** SSH into your server using your private key: `ssh -i ~/.ssh/fsfe root@<your_IP>`
    - You will be prompted to choose "yes" or "no"; in this case, choose "yes."
    - For the password prompt, you may skip it for now.
    - The connected host/server information will be stored in the `known_hosts` file. Therefore, the next time you connect to the server, you won't need to fill in the prompt again.
  - **Step 3:** Exit your server: `exit`
- **Extra Measure:** If you try to connect to a server that you have connected to before but receive a prompt, it means something is wrong. WARNING: Double-check before connecting to the host.
- In step 2, the `-i` flag stands for "identity." Every time you want to connect to a server, you need to use this `-i` identifier. However, there is a method to simplify this process so that you don't need to use `-i` each time, as follows:

  - Step 1: Make sure keychain is active (`vi ~/.ssh/config`)

    - For WSL User, you need to install `keychain` by `sudo apt-get install keychain` and (eval `keychain --eval --agents ssh id_rsa`)

      ```bash
      Host*
        IgnoreUnknown yes
        AddKeysToAgent yes
        IdentityFile ~/.ssh/fsfe
      ```

    - For Apple User,

      ```bash
      Host*
        AddKeysToAgent yes
        UseKeychain yes
      ```

- **Step 2:** Add the private key to the keychain using `ssh-add <key_name>`, e.g., `ssh-add fsfe`. For Apple users, it should be `ssh-add --apple-use-keychain fsfe`.
- **Step 3:** Connect to the server using `ssh root@<ip-address>`.

### The Internet

#### [How the Internet Works](https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf) | Page 74 - Page 79

- **Network Path**: computer ➡️ network card ➡️ router ➡️ ISP ➡️ Tier 1 ISP ➡️ Tier 1 ISP ➡️ datacenter ➡️ server cluster ➡️ load balancer ➡️ server
- **Terminology**:
  - **Internet**: A network of networks
  - **Intranet**: Private network
  - **LAN**: Local area network
  - **WAN**: Wide area network
  - **IP**: Internet protocol
  - **IP Address**: Numeric label assigned to an internet-connected device
- **History**:
  - **IPv4**: Consists of 4 blocks, for example, `127.0.0.1`. In total, it should have 4.3 billion addresses, but it turns out this is not enough. It was sufficient during the 80s and 90s, but nowadays it is not.
  - **IPv6**: Created to address the limitations of IPv4. It has 340 undecillion addresses, so we will never run out of IP addresses. IPv4 is 32 bits, while IPv6 is 128 bits, making it exponentially larger.

#### [Network Tools Exercise](https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf) | Page 81

- Check Status of a newtork host ➡️ `ping google.com`
- Follow the path of your request ➡️ `traceroute google.com`
- Show network status ➡️ `netstat -lt | less`

#### [Internet & Networking Terminology](https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf) | Page 82 - Page 83

- **TCP (Transmission Control Protocol)**

  - It is the most reliable connection.
  - It uses a process called a handshake ➡️ When sending data, the server responds with SYN-ACK (synchronize-acknowledge), and then the data is sent back. This process is repeated millions of times.
  - TCP was invented because early connections were unreliable. For example, in `traceroute google.com`, you can trace where the response is coming from, which is built on TCP. If the sender requests 100% of the data but only receives 90%, the remaining data will be resent until 100% is received.
  - You can still use video chat with TCP, but it will be much more expensive as it requires more bandwidth.
  - Common Application:
    - **Web Browsing**
    - **Email**
    - **File Transfer**
    - **Remote Access**
    - **Database Services**

- **UDP (User Datagram Protocol)**

  - Unlike TCP, UDP is only one-way. UDP keeps sending data and doesn't care about the remaining data. It is useful for real-time data like video. For example, when you use WhatsApp for real-time chatting or video, sometimes the video gets blurry—that's because of UDP. UDP sends data with the assumption that you're probably receiving it. It doesn't really care if you're not; UDP will keep sending data until your session has stopped or the connection is closed.
  - UDP is much faster than TCP, which is why it is used for real-time applications.
  - Common Application:
    - **Streaming Services**
    - **Online Gaming**
    - **VoIP**
    - **DNS (Domain Name System)**
    - **Broadcast and Multicast**

- **ICMP (Internet Control Message Protocol)**

  - This is built over either TCP or UDP. They are not used for sending data; they are just for checking the server and fall under network tools.

- **Packet**
- A **packet** is a unit of data transmitted over a network.
  - All of TCP, UDP, and ICMP operate at the packet level, meaning everything runs through packets.
- **Useful Tip**: To learn more about this protocol, you can visit the [Cloudflare Learning Center](https://www.cloudflare.com/learning/).

#### [DNS & URLs](https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf) | Page 84 - 91

- **DNS (Domain Name System)**: Translates domain names into IP addresses.
- **Nameserver**: Holds DNS records to translate domain names into IP addresses.
- Your computer communicates through the browser, which talks to a nameserver. The nameserver provides the IP address. The IP address is then used to communicate with the server. The server responds to the browser at the IP level, and the information is sent back to the user.
- **DNS Records**:
  - **A Record**: Maps a domain name to an IP address.
  - **CNAME**: Maps a domain name to another domain name.
- There are tools to look up information related to DNS:
  - `nslookup frontendmasters.com`: Look up the nameservers for a domain.
  - `dig frontendmasters.com`: Look up the DNS records for a domain.
- **Anatomy of a URL (Uniform Resource Locator)**
  - It is composed of a `subdomain`, `domain`, `TLD` (top-level domain), `path`, and `query parameter`. For example: `blog.yourdomain.com/en/fullstack?test=true`
    - `subdomain`: `blog.yourdomain.com`
    - `domain`: `yourdomain.com`
    - `TLD`: `.com`
    - `path`: `/en/fullstack`
    - `query parameter`: `test=true`

#### [Buying a Domain Name](https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf) | Page 93 - Page 94

- We are going to buy a domain name from [Namecheap](https://www.namecheap.com/).
- Some `TLDs` (top-level domains) are reserved, such as `.edu`, `.org`, `.gov`, and `.mil`. These are only obtainable if you are part of an institution.
- Steps to Buying a Domain:
  - **Step 1**: Buy a domain with a registrar (e.g., `jeffrymahbuubi.com`)
    - Update the nameserver to use DigitalOcean.
  - **Step 2**: On DigitalOcean, add two A records with your IP address:
    - `@`
    - `www`
  - **Step 3**: Add the nameservers of DigitalOcean to Namecheap:
    - In the `nameservers` option, choose Custom DNS and fill in DigitalOcean nameservers: `ns1.digitalocean.com`, `ns2.digitalocean.com`, `ns3.digitalocean.com`. For more information, [read this doc](https://docs.digitalocean.com/products/networking/dns/getting-started/dns-registrars/) from DigitalOcean.

#### [Update & Restart Server](https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf) | Page 95 - Page 100

- For a brand new server, we want to do the following:

  1. Update software
  2. Restart your server
  3. Create a new user
  4. Make that user a superuser
  5. Enable login for the new user
  6. Disable root login

- **Updating and restarting**:

  1. SSH into your server
  2. Update software:

     ```bash
     apt update
     apt upgrade
     ```

  3. Restart your server: `shutdown now -r`

- **sudo**:
  - `root`: Highest permission level. Allows unrestricted access to the OS. It indicated by `#` or hash-sign
  - `sudo`: Superuser do. Allows you to run commands and programs as root.
- **Creating and updating users**

  ```bash
  <!-- Create a new user -->
  adduser <your_username>
  <!-- Add user to "sudo" group -->
  usermod -aG sudo <your_username>
  <!-- Switch user -->
  su <your_username>
  <!-- Check sudo access -->
  sudo cat /var/log/auth.log
  ```

  - Every time you create a new user, it creates a directory `/home/<your_username>`.
  - The next step is to disable `root` access. We definitely don't want root access open to the public.

- **Enable login as new user**

  - In our `home` directory, we want to create an `authorized_keys` file. The `authorized_keys` file is where our public key will reside. Whenever we log in as a new user, it will check the public key and authenticate with the private key.

    ```bash
    # Create authorized_keys file
    cd ~/.ssh
    touch authorized_keys
    ~/.ssh/authorized_keys
    # Paste your public key from your local computer into the authorized_keys file inside the VPS
    # Exit
    # Login with the new user
    ssh <your_username>@<your_IP>
    ```

#### [File Permissions](https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf) | Page 101

- Security

  - Why don't we want to log in as root? You can check `sudo cat /var/log/auth.log` and you may find attempts by unauthorized users trying to access your server. From the moment your server is online, many people will try to get into it. That's why this matter is important.
  - We want to perform the following steps to grant read/write permissions to the filesystem on the server:

    ```bash
    <!-- 1. Change file permission -->
    chmod 644 ~/.ssh/authorized_keys
    <!-- 2. Disable root login, find the PermitRootLogin and set to no -->
    sudo vi /etc/ssh/sshd_config
    PermitRootLogin no
    <!-- 3. Restart ssh daemon -->
    sudo service sshd restart
    ```

    - After we change `PermitRootLogin yes` to `PermitRootLogin no`, we modify a configuration for a daemon. A daemon is a process that does not continuously read the config file; it only reads it once at runtime and then keeps it in memory. Therefore, we need to restart the SSH process using `sudo service sshd restart` (the `d` stands for daemon).

    - If you want to switch to the root user, you can use `sudo -i`.

### Application Setup

#### [Setup Nginx Web Server](https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf) Page 102 - Page 118

- So let's make our server response to a request. There are two big web server out there [Apache](https://httpd.apache.org/) and [NGINX](https://www.f5.com/go/product/welcome-to-nginx). We're gonna using `nginx`
- So `nginx` support **Web server**, **Reverse proxy**, and **Forward proxy**.
- What is proxy?

  - When a request is made to the cloud server, in this case DigitalOcean, we want to route it to our application. Our application can consist of several components: the application itself, a database, or another server. To route the request, a web server like `nginx` or `apache` can act as a middleman between the request and our application.

    ```mermaid
    graph LR
    A[Request] --> B[DigitalOcean]
    B --> C["Web Server (nginx/apache)"]
    C --> D[Application]
    C --> E[Database]
    C --> F[Another Server]
    ```

- To install `nginx` do followings

  ```bash
  <!-- Install nginx -->
  sudo apt install nginx
  <!-- Start nginx -->
  sudo service nginx start
  ```

- View default `nginx` configuration: `less /etc/nginx/sites-available/default`
- When you first open your browser after setting up the web server `jeffrymahbuubi.com`, you will see some default information. This is written in HTML, and the file is located at `~/var/www/index.nginx-debian.html`. You can change the content of this file or create a new `index.html` using `vi` with content like "hello world".
- Now, let's use `Node.js` so that the request passed from `nginx` will be handled by `Node.js`.

  ```mermaid
  graph LR
  A[Request] --> B[DigitalOcean Server]
  B --> C[nginx]
  C --> D[Node.js]
  ```

  ```bash
  <!-- Link to newest nod.js source -->
  curl https://deb.nodesource.com/setup_19.x | sudo -E bash -
  <!-- Install node.js -->
  sudo apt-get install nodejs
  <!-- Install git -->
  sudo apt install git
  ```

  - Note: It's recommended to use with LTS support `setup_20.x`
  - I prefer to use NVM (Node Version Manager). For more information, you can visit the [official documentation](https://nodejs.org/en/download/package-manager).

#### [Setup Proxy Pass](https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf) | Page 119 - Page 127

- Remember, when you create a new file `index.html` and you can't save it unless you use `sudo`, we need to change ownership to ourselves using the following commands:

  ```bash
  <!-- Change ownership of /www -->
  sudo chown -R $USER:$USER /var/www
  <!-- Make an application directory -->
  mkdir /var/www/app
  <!-- Initialize empty git repo in /app -->
  git init
  ```

- Then we want to create our server with `node.js` as before in the `/var/www/app`

  ```bash
  touch app.js
  <!-- 2. Initialize project -->
  npm init
  <!-- 3. Create a basic node server in app.js -->
  <!-- 4. Start your application -->
  ```

  ```javascript
  // Simple Server

  const http = require("http");

  http
    .createServer(function (req, res) {
      res.write("Hi I'm Jeffry, a Research Assisant from NCKU, Taiwan");
      res.end();
    })
    .listen(3000);

  console.log("Server started on port 3000");
  ```

- You will notice that when you try to start your server using `node app.js` and visit your webpage, it will give a `502 Bad Gateway` error. This is because we need to set up the **proxy pass** for our application `jeffrymahbuubi`.
- Create a new nginx server and proxy requests.

  - **Step 1**

    ```bash
    <!-- Create a new nginx server and proxy request -->
    sudo vi /etc/nginx/sites-enabled/<your_app>
    ```

  - **Step 2**

    ```bash
        server {
                listen 80 default_server;
                listen [::]:80 default_server;

                root /var/www/html;
                index index.html;

                server_name jeffrymahbuubi.com;

                location / {
                        proxy_pass http://127.0.0.1:3000/;
                }
        }
    ```

  - **Step 3**

    ```bash
    <!-- Validate nginx configuration -->
    sudo nginx -t
    <!-- Restart nginx -->
    sudo service nginx restart
    ```

#### [Virtual Server & PM2](https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf) | Page 128

- You will notice that when you close your server, your website will go down as well. To keep the server running continuously, you can use a library called `pm2` (Process Manager 2).

  ```bash
  <!-- 1. Install PM2 -->
  sudo npm i pm2 -g
  <!-- 2. Start PM2 -->
  pm2 start app.js --watch
  <!-- 3. Setup auto restart -->
  pm2 save
  pm2 startup
  ```

- After running `pm2 startup`, it will provide a command like `sudo env PATH=$PATH:/home/jeffrymahbuubi/.nvm/versions/node/v20.17.0/bin /home/jeffrymahbuubi/.nvm/versions/node/v20.17.0/lib/node_modules/pm2/bin/pm2 startup systemd -u jeffrymahbuubi --hp /home/jeffrymahbuubi`. Use this command to ensure your application starts on every system startup.

### Git

### Security

### Continuous Integration & Deployment

### Realtime & Databases

### Containers
