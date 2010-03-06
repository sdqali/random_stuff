#!/usr/bin/python
import sys
import os
import pyinotify

if len(sys.argv)==1:
    print "Please pass a command to excute as a parameter"
    print "For example autorun.py 'ruby foo.rb'"
    sys.exit()

commandToRun = sys.argv[1]

watchManager = pyinotify.WatchManager()
mask = pyinotify.IN_MODIFY

class ActionProcesser(pyinotify.ProcessEvent):
    def process_IN_MODIFY(self, event):
        print "Autorunner in action"
        os.system(commandToRun)

notifier = pyinotify.Notifier(watchManager, ActionProcesser())

wdd = watchManager.add_watch(os.getcwd(), mask, rec=True)

while True:
    try:
        notifier.process_events()
        if notifier.check_events():
            notifier.read_events()
    except KeyboardInterrupt:
        notifier.stop()
        break  
