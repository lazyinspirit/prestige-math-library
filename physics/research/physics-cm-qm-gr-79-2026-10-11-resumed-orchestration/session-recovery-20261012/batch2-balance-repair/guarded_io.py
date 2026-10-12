from pathlib import Path
import json,hashlib,subprocess,datetime,re
RUN='physics-cm-qm-gr-79-2026-10-11';BASE=Path(f'research/{RUN}-resumed-orchestration/session-recovery-20261012/batch2-balance-repair')
registry=BASE/'write-guards.json'
def digest(data):return hashlib.sha256(data).hexdigest()
def write(path,text):
 p=Path(path); state=json.load(open(f'research/{RUN}-scope-review/batch-2/state.json'));assert state['phase']=='held' and len(state['reviews'])==1 and not state['repairs'],'Native state changed'
 processes=subprocess.check_output(['ps','-eo','args'],text=True)
 assert not any('dispatch.mjs' in line and re.search(r'--(?:covers|var i=)\s*(?:2|31)(?:\s|$)',line) for line in processes.splitlines()),'Native overlap'
 g=json.load(open(registry)) if registry.exists() else {'files':{r['file']:r['raw_sha256'] for r in json.load(open(BASE/'before-hashes.json'))},'writes':[]}
 before=p.read_bytes();assert digest(before)==g['files'][str(p)],'File changed outside writer: '+str(p)
 p.write_text(text);after=digest(p.read_bytes());g['writes'].append({'file':str(p),'before_sha256':digest(before),'after_sha256':after,'native_phase':state['phase'],'no_native_2_31_dispatch':True,'at':datetime.datetime.now(datetime.timezone.utc).isoformat()});g['files'][str(p)]=after;registry.write_text(json.dumps(g,indent=2)+'\n')
def item(id):return Path(f'items/{id}.md').read_text()
