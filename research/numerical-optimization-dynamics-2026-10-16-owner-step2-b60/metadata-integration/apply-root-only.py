from pathlib import Path
import hashlib,json,sys,datetime
p=Path(__file__).with_name('journal.json');j=json.loads(p.read_text());sha=lambda f:hashlib.sha256(Path(f).read_bytes()).hexdigest()
for r in j['rows']:
 assert sha(r['target'])==r['before_sha256'],('target changed',r['target'])
 assert sha(r['before'])==r['before_sha256'],('archive changed',r['before'])
 assert sha(r['proposed'])==r['proposed_sha256'],('proposal changed',r['proposed'])
for r in j['context_guards']:assert sha(r['path'])==r['sha256'],('context changed',r['path'])
if sys.argv[1:]!=['--apply']:
 print('Guards match; ROOT review required. No canonical changes. Pass --apply only after review.');sys.exit(0)
receipt=p.with_name('application-receipt.json');assert not receipt.exists()
for r in j['rows']:Path(r['target']).write_bytes(Path(r['proposed']).read_bytes())
receipt.write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'targets':[r['target'] for r in j['rows']],'limits':'No gates, levels, recertification, published repair metadata or native scopes modified.'},indent=2)+'\n');print(receipt)
