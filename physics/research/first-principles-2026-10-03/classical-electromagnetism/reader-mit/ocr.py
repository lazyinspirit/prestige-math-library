import pymupdf,pathlib,concurrent.futures,subprocess,os
r=pathlib.Path(__file__).parent.resolve();(r/'images').mkdir(exist_ok=True);(r/'text/oxford-pages').mkdir(exist_ok=True)
d=pymupdf.open(r/'sources/oxford-classf.pdf')
for i,p in enumerate(d):p.get_pixmap(dpi=170).save(r/'images'/f'{i+1:03}.png')
def one(i):
 env=dict(os.environ,LD_LIBRARY_PATH=str(r/'ocr/usr/lib/x86_64-linux-gnu'),TESSDATA_PREFIX=str(r/'ocr/usr/share/tesseract-ocr/5/tessdata'))
 p=subprocess.run([str(r/'ocr/usr/bin/tesseract'),str(r/'images'/f'{i:03}.png'),str(r/'text/oxford-pages'/f'{i:03}'),'--psm','3'],env=env,capture_output=True)
 if p.returncode:print(i,p.stderr.decode())
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:list(ex.map(one,range(1,len(d)+1)))
print('DONE')
