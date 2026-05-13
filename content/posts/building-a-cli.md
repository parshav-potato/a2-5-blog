---
title: "Building a CLI That Doesn't Suck"
date: "2026-05-12"
summary: "Notes on designing command-line tools that people actually want to use."
tags: ["cli", "dx", "design"]
epigraph: "A program which is not usable is not useful."
coverImage: "/images/posts/building-a-cli/hero.svg"
---

Most CLI tools are an afterthought. A wrapper around some library, with flags nobody remembers and error messages that tell you nothing. Here's how I think about building ones that don't suck.

## Start with the happy path

Before you write a single line of code, write out the exact commands a user would type for the three most common use cases. If those feel awkward, your API is wrong.

```bash
# Good: obvious, memorable
$ deploy --preview
$ deploy --production

# Bad: what do these flags even mean?
$ deploy -e staging -t preview -c config.yml --no-cache
```

## Error messages are UI

The terminal is your interface. Error messages are the most important part of that interface, because they appear when someone is already frustrated.

```
# Bad
Error: ENOENT: no such file or directory

# Good
✗ Could not find config.yml in the current directory.

  Expected location: ./config.yml
  
  Run `mytool init` to create one, or use --config to specify a path.
```

Every error should answer three questions:
1. What happened?
2. Why?
3. What can I do about it?

## Progressive disclosure

Don't dump every option in `--help`. Show the basics first:

```
Usage: mytool <command>

Commands:
  init       Create a new project
  deploy     Deploy to production
  dev        Start local development server

Run `mytool <command> --help` for details.
```

Keep the advanced flags for `--help` on individual commands. Respect your user's attention.

## Respect the terminal

- Use exit codes correctly (0 = success, 1 = error)
- Support `--json` output for scripting
- Don't use color when `NO_COLOR` is set
- Pipe-friendly: don't break when stdout isn't a TTY

![Terminal showing a well-designed CLI output](/images/posts/building-a-cli/terminal.svg)

## Ship it

The best CLI is the one that exists. Start with three commands, make them excellent, and iterate from there.
