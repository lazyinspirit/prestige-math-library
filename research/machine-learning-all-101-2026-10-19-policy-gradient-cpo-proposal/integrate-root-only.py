#!/usr/bin/env python3
"""Root-only guarded integration proposal. Not executed by the delegated repairer.
Copies exactly9existing/2new owned proposals, then edits only ML76/82 semantic
stanzas and matching description substrings. Root must centrally refresh all
controlling pointers and recertification/readiness after full review.
"""
from pathlib import Path
import hashlib,json,re,sys
R='machine-learning-all-101-2026-10-19'
BASE=Path('research/'+R+'-policy-gradient-cpo-proposal')
def sha(b):return hashlib.sha256(b).hexdigest()
if sys.argv[1:] != ['--root-reviewed-apply']:
 raise SystemExit('Review source/proof/consumer evidence and pass --root-reviewed-apply explicitly; delegated agent must not run this script.')
inv=json.loads((BASE/'premature-actual-write-inventory.json').read_text())
review=json.loads((BASE/'review.json').read_text())
changes=[]
for row in inv['rows']:
 p=Path(row['actual_target']);q=BASE/'proposed'/p
 assert sha(q.read_bytes())==row['current_sha256'],('proposal changed',q)
 if row['new']:assert not p.exists(),('new item exists',p)
 else:assert sha(p.read_bytes())==row['before_sha256'],('owned actual changed',p)
 changes.append((p,q.read_bytes()))
planpath=Path('research/plan-machine-learning-track.md');plan=planpath.read_text()
specpath=Path('research/plan-spec.json');spec_text=specpath.read_text();spec=json.loads(spec_text)
for prop in review['canonical_proposals']:
 label=prop['label'];m=re.search(r'^### '+label+r' .*?(?=\n### |\Z)',plan,re.M|re.S);assert m
 old=m[0].rstrip();assert sha(old.encode())==prop['canonical_stanza_before_sha256'],('own stanza changed',label)
 new=old
 for edit in prop['edits']:
  if edit['path']=='research/plan-machine-learning-track.md':
   assert new.count(edit['old'])==1,(label,edit['old']);new=new.replace(edit['old'],edit['new'])
 # Description mirrors only own prose substrings; central pointer prefixes remain untouched.
 page=next(p for p in spec['pages'] if p.get('id')==prop['page_id']);before_description=page['description']
 for edit in prop['edits']:
  if edit['path']=='research/plan-machine-learning-track.md':
   assert page['description'].count(edit['old'])==1,(label,'description',edit['old'])
   page['description']=page['description'].replace(edit['old'],edit['new'])
 quoted_before=json.dumps(before_description,ensure_ascii=False);quoted_after=json.dumps(page['description'],ensure_ascii=False)
 assert spec_text.count(quoted_before)==1,('description serialization/uniqueness changed',label)
 spec_text=spec_text.replace(quoted_before,quoted_after)
 plan=plan[:m.start()]+new+m[0][len(old):]+plan[m.end():]
# Preflight all inputs before any write; second-read guards catch observed drift.
for row in inv['rows']:
 p=Path(row['actual_target'])
 assert (not p.exists()) if row['new'] else sha(p.read_bytes())==row['before_sha256']
for p,data in changes:p.write_bytes(data)
planpath.write_text(plan);specpath.write_text(spec_text)
print('Integrated reviewed owned proposals and ML76/82 semantic corrections. Root controlling-pointer/metadata reconciliation and native gates remain owed.')
