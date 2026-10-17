#!/usr/bin/env python3
"""ROOT-ONLY guarded metadata application; defaults to read-only diff."""
from pathlib import Path
import argparse,json,hashlib,difflib,os,subprocess
PACKAGE=Path(__file__).resolve().parent
ROOT=PACKAGE.parent.parent

def sha(data):return hashlib.sha256(data).hexdigest()
def main():
    parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('--apply',action='store_true');args=parser.parse_args()
    proposal=json.loads((PACKAGE/'proposal.json').read_text())
    if proposal['issues']:raise SystemExit('Unresolved projection issues; no writes.')
    for row in proposal['guards']:
        path=ROOT/row['path']
        if path.is_symlink()or not path.is_file()or sha(path.read_bytes())!=row['raw_sha256']:raise SystemExit('STALE guard: '+row['path'])
    writes=[]
    for row in proposal['payloads']:
        path=ROOT/row['path'];before=path.read_bytes();after=(PACKAGE/'proposed'/row['path']).read_bytes()
        if sha(before)!=row['before_raw_sha256']or sha(after)!=row['proposed_raw_sha256']:raise SystemExit('STALE payload: '+row['path'])
        print(''.join(difflib.unified_diff(before.decode().splitlines(True),after.decode().splitlines(True),fromfile=row['path'],tofile='proposed/'+row['path'])),end='');writes.append((path,before,after))
    if not args.apply:
        print('\nREAD ONLY: raw guards pass, no canonical writes.');return
    subprocess.run(['node',str(PACKAGE/'verify.mjs')],cwd=ROOT,check=True)
    for path,before,after in writes:
        if path.read_bytes()!=before:raise SystemExit('Concurrent metadata drift: '+str(path))
    for path,before,after in writes:
        temporary=path.with_name(path.name+'.root95-metadata.tmp')
        with temporary.open('xb')as handle:handle.write(after)
        os.chmod(temporary,path.stat().st_mode&0o777);os.replace(temporary,path)
    print('\nApplied exactly three metadata carriers; no source/native/gate writes.')
if __name__=='__main__':main()
