#! /bin/bash

while : ; do
	chromium-browser Riley-But-Functional/index.html
	sleep 3
	xdotool key F11
	sleep 297
	killall chromium-browse

	chromium-browser mitchell/index.html
	sleep 3
	xdotool key F11
	sleep 297
	killall chromium-browse
done
