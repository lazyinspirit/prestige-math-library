"""Check current repair carriers; preserves raw outputs and honest exit codes."""
from pathlib import Path
import json,subprocess,re
b=Path(__file__).resolve().parent;r=b.parents[1]
d=json.loads((b/'effective-receipts.json').read_text());assert not d['missing'] and not d['stale']
ids=list(d['receipts'])
files=[f'items/{i}.md' for i in sorted(ids)]
page_ids=set()
for p in (b/'root-before').rglob('*.md'):
 m=re.search(r'^page: ([^\n]+)',p.read_text(),re.M)
 if m:page_ids.add(m[1].strip('\"'))
pages=[]
for p in (r/'library').rglob('*.md'):
 m=re.search(r'^page: ([^\n]+)',p.read_text(),re.M)
 if m and m[1].strip('\"') in page_ids:pages.append(str(p.relative_to(r)))
commands={
 'precheck-final.txt':['node','tools/tsx-run.mjs','tools/precheck.mts',*files],
 'rendercheck-final.json':['node','tools/rendercheck.mjs',*files,*pages,'--json'],
 'diffcheck-final.txt':['git','diff','--check','--',*files,*pages,'research/plan-spec.json','research/published-consumer-supplier-ledger.md'],
 'depcheck-final.json':['node','tools/depcheck.mjs','--json'],
 'plan-validation-final.txt':['node','tools/validate-plan.mjs','research/plan-spec.json']}
out={}
for name,cmd in commands.items():
 with (b/name).open('w') as f:run=subprocess.run(cmd,cwd=r,stdout=f,stderr=subprocess.STDOUT)
 out[name]={'exit_code':run.returncode}
 print(name,run.returncode,flush=True)
(b/'final-check-results.json').write_text(json.dumps({'owned_item_carriers':len(files),'root_pages':len(pages),'results':out},indent=2)+'\n')
