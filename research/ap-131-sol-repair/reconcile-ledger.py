from pathlib import Path
import re,json,hashlib,collections,sys
b=Path(__file__).parent;p=Path('research/published-consumer-supplier-ledger.md');s=p.read_text()
a=s.index('<!-- phase3-classification-index:start -->');z=s.index('<!-- phase3-classification-index:end -->');idx=s[a:z]
log=[]
for file in sys.argv[1:]:
 path=Path(file);latest={}
 for line in path.read_text().splitlines():
  r=json.loads(line)
  if not r.get('decision') and r.get('disposition'):r['decision']='accept' if r['disposition']=='unaffected' else 'repair' if r['disposition'].startswith('repaired') else r['disposition']
  latest[r['id']]=r
 for i,r in latest.items():
  if r.get('decision') not in ['repair','accept','defer']:continue
  text=Path('items',i+'.md').read_bytes()
  assert hashlib.sha256(text).hexdigest()==r['current_sha256'],i
  m=re.search(r'^\| `'+re.escape(i)+r'` \| (.*) \|$',idx,re.M)
  prior=m[1] if m else None
  if prior and f'Evidence: `{file}`.' in prior:continue
  if m:idx=idx[:m.start()]+idx[m.end():]
  dest={'repair':'A-R','accept':'clear','defer':'A-P'}[r['decision']]
  heading={'A-R':'### A-R — Audited and repaired items','A-P':'### A-P — Audited items pending Phase 3 repair','clear':'### Bounded no-repair-needed dispositions'}[dest]
  at=idx.index(heading);q=re.search(r'(?m)^\|---[^\n]*\n',idx[at:]);at+=q.end()
  evidence=str(r.get('evidence') or (str(r.get('affected_use',''))+' '+str(r.get('minimality','')))).replace('\n',' ').replace('|','\\|')
  row=f'| `{i}` | Bounded owner-delegated mathematical review 2026-09-23–24: {evidence} Evidence: `{file}`. '
  if r.get('unresolved'):row+='Remaining obligations: '+str(r['unresolved']).replace('|','\\|')+'. '
  if prior:row+='Earlier finding retained as historical evidence: '+prior
  row+=' |\n';idx=idx[:at]+row+idx[at:];log.append({'id':i,'class':dest,'receipt':file,'new_to_index':not bool(prior)})
code=None;ids={}
for line in idx.splitlines():
 if line.startswith('### Bounded no-repair-needed'):code='clear'
 elif m:=re.match(r'^### (U-P|U-C|A-R|A-P) ',line):code=m[1]
 if m:=re.match(r'^\| `([^`]+)` \|',line):assert m[1] not in ids;ids[m[1]]=code
c=collections.Counter(ids.values())
for k in ['U-P','U-C','A-R','A-P']:idx=re.sub(r'(\| '+k+r' \| [^|]+ \| )\d+( \|)',lambda m:m[1]+str(c[k])+m[2],idx)
idx=re.sub(r'The four queues currently contain [\d,]+ distinct items\.',f"The four queues currently contain {sum(c[k] for k in ['U-P','U-C','A-R','A-P']):,} distinct items.",idx)
s=s[:a]+idx+s[z:];s=re.sub(r'Current classifications: U-P \d+, U-C \d+, A-R \d+, A-P \d+\.',f"Current classifications: U-P {c['U-P']}, U-C {c['U-C']}, A-R {c['A-R']}, A-P {c['A-P']}.",s,count=1);p.write_text(s)
with (b/'ledger-updates.jsonl').open('a') as f:
 for r in log:f.write(json.dumps(r)+'\n')
(b/'ledger-counts.json').write_text(json.dumps({**{k:c[k] for k in ['U-P','U-C','A-R','A-P','clear']},'indexed':len(ids)},indent=2)+'\n')
print('updated',len(log),dict(c),'indexed',len(ids))
