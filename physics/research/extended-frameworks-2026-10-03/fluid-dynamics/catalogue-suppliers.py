#!/usr/bin/env python3
"""Metadata survey only: does not certify a plan or its proofs."""
import hashlib,json,re
from pathlib import Path
BASE=Path(__file__).resolve().parent
ROOT=BASE.parents[3]
records=[]
for p in sorted((ROOT/'research').glob('plan-*.md')):
    s=p.read_text()
    ids=list(dict.fromkeys(re.findall(r'`((?:def|lem|thm|prop|cor|ex|cex|rem|fs)-[a-z0-9-]+)`',s)))
    statuses=[]
    for ident in ids:
        item=ROOT/'items'/f'{ident}.md'
        if item.exists():
            t=item.read_text();m=re.search(r'^status:\s*(\S+)',t,re.M)
            statuses.append({'id':ident,'status':m.group(1) if m else 'draft','path':str(item.relative_to(ROOT)),'sha256':hashlib.sha256(item.read_bytes()).hexdigest(),'proof_read_here':False})
        else:statuses.append({'id':ident,'status':'planned-unproved','path':str(p.relative_to(ROOT)),'proof_read_here':False})
    records.append({'path':str(p.relative_to(ROOT)),'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'title':next((x.lstrip('# ').strip() for x in s.splitlines() if x.startswith('#')),''),'reading':'metadata/index survey only; relevant extents explicitly in supplier-dispositions.md or workers','items':statuses})
(BASE/'root-mathematics-catalogue.json').write_text(json.dumps({'status':'metadata-survey-not-proof-certification','scaffolds':records},indent=2)+'\n')
print(json.dumps({'scaffold_files':len(records),'indexed_id_occurrences':sum(len(r['items']) for r in records)}))
