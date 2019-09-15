cp -r start "$1";
cd "$1";
rm -rf node_modules;
echo "directory made: $1";
echo `npm install` > "/dev/null";
echo "node modules installed";
cat ./package.json | echo `jq '.url="'$2'"'` > package.json;
echo "url changed: $2";
cat ./package.json | echo `jq '.name="'$3'"'` > package.json;
echo '.build.productName="'$1'"';
echo "name changed: $1";
echo `curl $4 > ./build/icon.png` > "/dev/null";
cat ./package.json | echo `jq '.color="'$5'"'` > package.json;
echo "Color finished";
# cat ./package.json | echo `jq '.build["productName"]="'$1'"'` > package.json;
cd build;
convert -resize x256 icon.png icon.ico;
echo "Images finished";
# ./new.sh Name url package-name file:// #fffff