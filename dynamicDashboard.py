import os
from time import sleep

#get a list of all files in directory
dir = os.listdir()
delay = int(input("Time delay between dashboard (sec): "))

#remove all the files that are not dashboards
dir.remove(".git")
dir.remove("empty-example")
dir.remove("cycleDashboards.sh")
dir.remove("README.md")
dir.remove("dynamicDashboard.py")

#cycle through all the dashboards, launching and killing the browser
while True:
    for directory in dir:
        os.system("chromium-browser \"" + directory + "\"/index.html &")
        sleep(5)
        #wait for the browser to open then press f11 to go full screen
        os.system("xdotool key F11")
        sleep(delay - 5)
        os.system("killall chromium-browse")
