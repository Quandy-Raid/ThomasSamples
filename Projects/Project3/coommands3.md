clear - clears the terminal
ctrl+N - New tab in terminal
up & down arrow keys - look back at previous submitted commands
mv *.txt desktop/emptyfolder - move all .txt files to a folder
less css/myfile1.txt css/myfile2.txt - display and compare .txt files
rm -r desktop/emptyfolder - delete folder and all of its contents
ls -al, file *.css - list everything, including hidden files, displays all .css files in a folder
find /etc -type f - iname file1.txt (find command, /etc directory, -type f is regular file [d - directory, l - symbolic link, c - character devices, b - block devices])
find -type f -exec grep -IH 'word' {} \; or grep - r 'word'  (include the [''] because the file/folder may include spaces)(r is recursive, I to ignore binary files, H to output filename where match is found)(GREP is derived from g/re/p Global Regular Expression Print)
