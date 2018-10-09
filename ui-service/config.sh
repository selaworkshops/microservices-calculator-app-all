#!/bin/sh -e
sed -i -e 's#HOST_IP#'"$HOST_IP"'#g' $(pwd)/services-controller.js