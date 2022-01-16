// pageview

CREATE TABLE `pageview` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`page` text NOT NULL,
`userip` text NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1


// totalview

CREATE TABLE `totalview` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`page` text NOT NULL,
`totalvisit` text NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1

