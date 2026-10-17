from pathlib import Path
import json,hashlib,sys,datetime
p=Path(__file__).with_name('journal.json');j=json.loads(p.read_text());sha=lambda f:hashlib.sha256(Path(f).read_bytes()).hexdigest()
for r in j['rows']:
 assert sha(r['target'])==r['before_sha256'],('target changed',r['target'])
 assert sha(r['before'])==r['before_sha256'],('before changed',r['before'])
 assert sha(r['proposed'])==r['proposed_sha256'],('proposal changed',r['proposed'])
for r in j['context_guards']:assert sha(r['path'])==r['sha256'],('source context changed or pending',r['path'])
if sys.argv[1:]!=['--apply']:
 print('Guards match; ROOT review and actual82/99 writer drain required. Nothing applied.');sys.exit(0)
out=p.with_name('application-receipt.json');assert not out.exists()
for r in j['rows']:Path(r['target']).write_bytes(Path(r['proposed']).read_bytes())
out.write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'targets':[r['target'] for r in j['rows']],'limits':'No source, crossbatch ledger, levels, gates, history, recertification or native controls modified.'},indent=2)+'\n');print(out)
