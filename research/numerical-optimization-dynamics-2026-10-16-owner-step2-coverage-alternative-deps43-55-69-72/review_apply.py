#!/usr/bin/env python3
"""ROOT-ONLY four-field source/manifest projection. No gate execution; diff-only by default."""
from pathlib import Path
import argparse,copy,difflib,hashlib,json,re,os,yaml
PACKAGE=Path(__file__).resolve().parent
ROOT=PACKAGE.parent.parent

def sha(data):return hashlib.sha256(data).hexdigest()
def main():
    parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('--apply',action='store_true');args=parser.parse_args()
    proposal=json.loads((PACKAGE/'proposal.json').read_text());ops=json.loads((PACKAGE/'operations.json').read_text())['operations']
    for row in proposal['guards']:
        path=ROOT/row['path']
        if path.is_symlink()or not path.is_file()or sha(path.read_bytes())!=row['raw_sha256']:raise SystemExit('STALE source/manifest guard: '+row['path'])
    documents={};raw={}
    for op in ops:
        file=op['file']
        if file not in documents:raw[file]=(ROOT/file).read_bytes();documents[file]=json.loads(raw[file])
        cursor=documents[file]
        for key in op['pointer'][:-1]:cursor=cursor[key]
        page=documents[file]['pages'][op['pointer'][1]];source=page['sources'][op['pointer'][3]]
        if page['page']!=op['page']or source.get('title')!=op['source_title']or source.get('url')!=op['source_url']or cursor.get('item')!=op['item']or source.get('source_resolution',{}).get('status')!='dropped':raise SystemExit('Alternative identity/status drift: '+file)
        metadata=json.loads((ROOT/op['manifest']).read_text());item=next((it for pg in metadata for it in pg['items']if it['id']==op['item']),None)
        text=(ROOT/op['source']).read_text();fm=yaml.safe_load(re.match(r'^---\n([\s\S]*?)\n---',text)[1]);actual=fm.get('deps',[])
        if item is None or item.get('deps',[])!=actual or op['after']!=actual:raise SystemExit('Source/manifest comparison changed: '+op['item'])
        if cursor['deps']==op['after']:continue
        if cursor['deps']!=op['before']:raise SystemExit('STALE exact coverage field: '+op['item'])
        cursor['deps']=copy.deepcopy(op['after'])
    writes=[]
    for file,doc in documents.items():
        after=(json.dumps(doc,indent=2,ensure_ascii=False)+'\n').encode()
        if json.loads(raw[file])==doc:continue
        print(''.join(difflib.unified_diff(raw[file].decode().splitlines(True),after.decode().splitlines(True),fromfile=file,tofile='field-projected/'+file)),end='');writes.append((ROOT/file,raw[file],after))
    if not args.apply:
        print('\nREAD ONLY: four field identities/source comparisons pass; no gate or canonical write.');return
    for path,before,after in writes:
        if path.read_bytes()!=before:raise SystemExit('Concurrent metadata drift: '+str(path))
    for path,before,after in writes:
        temporary=path.with_name(path.name+'.root-alternative-deps.tmp')
        with temporary.open('xb')as handle:handle.write(after)
        os.chmod(temporary,path.stat().st_mode&0o777);os.replace(temporary,path)
    print('\nApplied only four alternative.deps fields; all other parsed coverage content preserved. No source/gate/native writes.')
if __name__=='__main__':main()
