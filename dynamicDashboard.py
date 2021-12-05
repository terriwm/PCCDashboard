import os
from time import sleep

dir = os.listdir()
delay = int(input("Time delay between dashboard (sec): "))

dir.remove(".git")
dir.remove("empty-example")
dir.remove("cycleDashboards.sh")
dir.remove("README.md")
dir.remove("dynamicDashboard.py")

while True:
    for directory in dir:
        os.system("chromium-browser " + directory + "/index.html &")
        sleep(5)
        os.system("xdotool key F11")
        sleep(delay - 5)
        os.system("killall chromium-browse")