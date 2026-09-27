from pathlib import Path
import json,re,hashlib,collections,sys
ROOT=Path(__file__).resolve().parents[2];BASE=Path(__file__).resolve().parent

def record(r):
 i=r['id'];p=ROOT/'items'/f'{i}.md';text=p.read_text();old=(BASE/'before'/p.name).read_text()
 claim=lambda s:'\n'.join(m[0]+m[1].strip() for m in re.findall(r'(?m)^(## (?:Statement|Definition|Example|Statement refuted))\n([\s\S]*?)(?=^## |\Z)',s))
 r.update(current_sha256=hashlib.sha256(text.encode()).hexdigest(),before_sha256=hashlib.sha256(old.encode()).hexdigest(),statement_changed=claim(old)!=claim(text),scope='Sequential owner-authorized bounded mathematical review; no independent judge or whole-library certification.')
 if r['statement_changed']:assert r.get('impact_file')
 with (BASE/'receipts.jsonl').open('a') as f:f.write(json.dumps(r,ensure_ascii=False)+'\n')
 p=ROOT/'research/published-consumer-supplier-ledger.md';s=p.read_text();a=s.index('<!-- phase3-classification-index:start -->');z=s.index('<!-- phase3-classification-index:end -->');idx=s[a:z]
 m=re.search(r'^\| `'+re.escape(i)+r'` \| (.*) \|$',idx,re.M);assert m
 prior=m[1];idx=idx[:m.start()]+idx[m.end():];dest={'accept':'clear','repair':'A-R','defer':'A-P'}[r['decision']]
 heading={'clear':'### Bounded no-repair-needed dispositions','A-R':'### A-R — Audited and repaired items','A-P':'### A-P — Audited items pending Phase 3 repair'}[dest]
 at=idx.index(heading);t=re.search(r'(?m)^\|---[^\n]*\n',idx[at:]);at+=t.end()
 note=r['evidence'].replace('\n',' ').replace('|','\\|');un=r.get('unresolved')
 if un:note+=' Remaining prerequisite: '+str(un).replace('|','\\|')
 row=f'| `{i}` | Sequential bounded review 2026-09-23: {note} Evidence: `research/up-final-eight-review/receipts.jsonl`. Earlier classification/evidence superseded for this exact finding: {prior} |\n'
 idx=idx[:at]+row+idx[at:]
 code=None;ids={}
 for l in idx.splitlines():
  if l.startswith('### Bounded no-repair-needed'):code='clear'
  elif q:=re.match(r'^### (U-P|U-C|A-R|A-P) ',l):code=q[1]
  if q:=re.match(r'^\| `([^`]+)` \|',l):assert q[1] not in ids;ids[q[1]]=code
 counts=collections.Counter(ids.values());assert len(ids)==3389
 for k in ['U-P','U-C','A-R','A-P']:idx=re.sub(r'(\| '+k+r' \| [^|]+ \| )\d+( \|)',lambda m:m[1]+str(counts[k])+m[2],idx)
 idx=re.sub(r'The four queues currently contain [\d,]+ distinct items\.',f"The four queues currently contain {sum(counts[k] for k in ['U-P','U-C','A-R','A-P']):,} distinct items.",idx)
 s=s[:a]+idx+s[z:];s=re.sub(r'Current classifications: U-P \d+, U-C \d+, A-R \d+, A-P \d+\.',f"Current classifications: U-P {counts['U-P']}, U-C {counts['U-C']}, A-R {counts['A-R']}, A-P {counts['A-P']}.",s,count=1);p.write_text(s)
 (BASE/'counts.json').write_text(json.dumps(dict(counts),indent=2)+'\n');print(i,r['decision'],dict(counts))
if __name__=='__main__':record(json.loads(sys.stdin.read()))
