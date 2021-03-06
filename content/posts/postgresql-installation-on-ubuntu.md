---
title: "PostgreSQL Installation on Ubuntu"
date: 2019-12-21T11:12:04Z
draft: false
thumbnail: v1575980873/2019/PostgreSQL.jpg
categories: [SysAdmin]
tags: [PostgreSQL, Ubuntu, VPS]
readmore: Read the tutorial
summarize: true
update: true
---

On the way to install Nextcloud we've already completed the [initial setup of our VPS](/ubuntu-server-initial-setup/) and the [installation of a webserver (Nginx)](/nginx-installation-on-ubuntu/).

We'll now proceed with the installation of PostgreSQL, a relational database management system.

I’m currently using Ubuntu 20.04, but these instructions are equally valid for other Ubuntu versions.

<!--more-->

### Why PostgreSQL

PostgreSQL isn't the obvious choice to use with Nextcloud. In fact, the officially recommended database management system by Nextcloud is MySQL or MariaDB.[^1]

I choosed PostgreSQL mainly because I planned to run other applications, in the same server, that are only compatible with it. My goal was to have a simple as possible setup, avoiding run multiple database systems simultaneously.

Either way, PostgreSQL has its advantages like an extensive SQL compliance, data integrity and being open source and community driven.

But maybe it isn't the right choice for you and for a more informed decision you can, for example, read this [comparassion between SQLite vs MySQL vs PostgreSQL](https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems/). I found it really usefull.

### Install PostgreSQL

Ubuntu’s default repositories contain PostgreSQL packages, so you can install these using the `apt` packaging system.

First, refresh the local package index:
```plain
# sudo apt update
```

Then, install the PostgreSQL package along with a `-contrib` package that adds some additional utilities and functionality:
```plain
# sudo apt install postgresql postgresql-contrib
```

To learn the basics about using PostgreSQL you can start by reading [this tutorial on Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04/).

### Tune PostgreSQL

One of the downsides of PostgreSQL is its memory performance, so besides optional is highly recommended tune its settings depending on the hardware at your disposale.

To do so, you can visit [PGTune](https://pgtune.leopard.in.ua/), fill the form with your system informations and get a list of settings to add/modify in `postgresql.conf`. This file can be found in `/etc/postgresql/<version_number>/main` folder. In my case, as I'm using the version 12 of PostgreSQL, I use the following command to edit it:
```plain
# sudo nano /etc/postgresql/12/main/postgresql.conf
```

Then is a matter of search for each one of the parameters in the list and modify or add it to match the values generated by PGTune.

### What's next?

Now that you've installed a webserver and a database management system [all that's missing so you can install Nextcloud is PHP](/php-installation-on-ubuntu/).

{{< call-for-contribution >}}

[^1]: [Nextcloud 17 system requirements](https://docs.nextcloud.com/server/17/admin_manual/installation/system_requirements.html#system-requirements)
