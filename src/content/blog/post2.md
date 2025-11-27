---
title: "Creating my own Neovim configuration."
description: "This blog is about my editor, how I migrated from NvChad to my own Neovim configuration"
pubDate: "2025-May-06"
heroImage: "/hero_image_blog_2.png"
tags: ["Neovim", "Code Editor", "Linux Tooling"]
---

# Creating My Own Neovim Configuration

Back in 2015, when I first started using Linux, I kept hearing about Vim. At the time, I thought the typical mouse-and-keyboard style of editing was peak productivity—what else could there be?

Then came the dotfiles. After tweaking config files across different distros, I realized terminal-based editing was way faster than hunting down files in a GUI. I started using `nano`—basically Notepad for the terminal. It was simple and handy, but definitely not ideal for writing actual code.

One day, I stumbled across videos of people flying through files using Vim motions. That speed grabbed me. So I gave it a shot… and man, it was rough. Uncomfortable, confusing—and yeah, I couldn’t even figure out how to quit at first. Classic.

But I stuck with it. Eventually, Vim became my go-to editor. Fast, efficient, and surprisingly addictive. Still, I began to miss some of the features I’d gotten used to in VSCode. That led me to try out Vim modes in other editors, especially when using heavier IDEs like NetBeans for Java.

These days, Vim (and now Neovim) feels like home. I’ve spent years customizing it, learning its quirks, and bending it to fit every language and workflow I use. We’ve got history.

> I’m no Vim master—there’s still a ton I don’t know. I’m learning new tricks all the time.

## The VSCode Intermission

During my first internship, I was forced to use VSCode on Windows. After so much time on Linux, it felt like I was missing a limb. Everything felt slower, clunkier, and I really started to miss my setup—not just the Vim motions, but the entire terminal-based flow.

Eventually, I managed to install WSL and get a basic version of Neovim running. I gave NvChad a shot, but it felt too bloated for my needs—and oddly harder to use than VSCode in some ways.

Still, it sparked something. I got curious about building my own setup. That’s when I discovered [Lazy.nvim](https://github.com/folke/lazy.nvim) and started diving deep into tuning Neovim to make it my own.

## Building My Own Setup

I wanted a workflow similar to NvChad—simple and efficient. Things like `<Space> + e` to open the file tree had become second nature. So I made a list of all the features I used constantly and began recreating them in my own configuration.

You can check it out here:  
👉 **[AlvirNeovimConfig GitHub Repo](https://github.com/AlvirElWapo/AlvirNeovim_cfg.git)**

It’s still a work in progress, and I’ll be adding plenty more tweaks in the future. But for now, here’s the current structure of my config:

```text
Nvim
├── init.lua
├── lazy-lock.json
└── lua
├── config
│   ├── init.lua
│   ├── lazy.lua
│   └── options.lua
└── plugins
├── bufferline.lua
├── catppuccin.lua
├── comment.lua
├── completion.lua
├── dashboard.lua
├── lualine.lua
├── mason.lua
├── nvim-tree.lua
├── rainbow-brackets.lua
├── telescope.lua
├── toggleterm.lua
└── whichkey.lua
```



