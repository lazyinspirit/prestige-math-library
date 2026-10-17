from pathlib import Path
import json,hashlib,sys,datetime
jpath=Path(__file__).with_name('journal.json');j=json.loads(jpath.read_text())
sha=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest()
for r in j['rows']:
 assert sha(r['target'])==r['before_sha256'],('canonical changed',r['target'])
 assert sha(r['before'])==r['before_sha256'],('archive changed',r['before'])
 assert sha(r['proposed'])==r['proposed_sha256'],('proposal changed',r['proposed'])
for r in j['context_guards']:assert sha(r['path'])==r['sha256'],('context changed',r['path'])
if sys.argv[1:]!=['--apply']:
 print('All guards match. ROOT review required; no canonical files written. Explicit --apply writes only the three journal targets.');sys.exit(0)
for r in j['rows']:Path(r['target']).write_bytes(Path(r['proposed']).read_bytes())
out=jpath.with_name('application-receipt.json');assert not out.exists();out.write_text(json.dumps({'applied_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'targets':[r['target'] for r in j['rows']],'limits':'No levels, recertification, controls, gates or historical evidence rewritten.'},indent=2)+'\n')
print(out)
