#!/usr/bin/env python3
"""Root-only dispatch wrapper. Requires a fresh explicit root writer declaration."""
import argparse, datetime, hashlib, json, subprocess
from pathlib import Path
PACKAGE = Path(__file__).resolve().parent
ROOT = PACKAGE.parent.parent

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--writer-declaration', required=True)
    parser.add_argument('--launch', action='store_true', help='Actually dispatch; otherwise print guarded argv only')
    args = parser.parse_args()
    manifest = json.loads((PACKAGE/'source-manifest.json').read_text())
    relative = str(PACKAGE.relative_to(ROOT))
    declaration_path = Path(args.writer_declaration)
    if not declaration_path.is_absolute(): declaration_path = ROOT/declaration_path
    declaration = json.loads(declaration_path.read_text())
    required = {'owner_identity':'/root', 'native_100_drained':True, 'scoped_writers_drained':True, 'source_apply_authorized':True, 'approved_package':relative}
    for key,value in required.items():
        if declaration.get(key) != value: raise SystemExit('Missing/mismatched root declaration: '+key)
    issued = datetime.datetime.fromisoformat(declaration['issued_at'].replace('Z','+00:00'))
    prepared = datetime.datetime.fromisoformat(manifest['prepared_at'].replace('Z','+00:00'))
    if issued < prepared: raise SystemExit('Writer declaration predates final package preparation.')
    for row in manifest['changes']:
        target = ROOT/row['path']; candidate=PACKAGE/'proposed'/row['path']
        if hashlib.sha256(candidate.read_bytes()).hexdigest()!=row['proposed_raw_sha256']: raise SystemExit('Changed candidate: '+row['path'])
        if row['new']:
            if target.exists() or target.is_symlink(): raise SystemExit('New ID no longer absent: '+row['path'])
        elif target.is_symlink() or hashlib.sha256(target.read_bytes()).hexdigest()!=row['before_raw_sha256']: raise SystemExit('Changed source target: '+row['path'])
    command=['node','tools/dispatch.mjs','--role','scope-repairer','--brief',relative+'/apply-r2.brief.md','--task',relative+'/apply-r2.task.md','--var','writer_declaration='+str(declaration_path.relative_to(ROOT)),'--profile','gpt-6.1-sol-medium','--label','owner-b96-approved-source-apply-r2','--run',manifest['run'],'--covers','96','--session-home',manifest['original_session_home'],'--resume-session',manifest['original_session_id'],'--result-artifact',relative+'/continuation-result-r2.json','--timeout','14400','--attempt','1','--json']
    if args.launch: raise SystemExit(subprocess.call(command,cwd=ROOT))
    print(json.dumps({'launch_performed':False,'guarded_argv':command},indent=2))

if __name__=='__main__': main()
