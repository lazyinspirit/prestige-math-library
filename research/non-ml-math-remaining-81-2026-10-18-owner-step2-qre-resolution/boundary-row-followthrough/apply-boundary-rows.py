#!/usr/bin/env python3
"""Exact boundary-row patches only. Default verifies proposal/row guards, no writes.
Root runs --apply after final sources are installed and citations/derivations regenerated.
"""
from pathlib import Path
import json,hashlib,argparse,datetime,os
p=argparse.ArgumentParser();p.add_argument('--apply',action='store_true');a=p.parse_args();here=Path(__file__).resolve().parent;root=here.parents[2];h=lambda b:hashlib.sha256(b).hexdigest();doc=json.loads((here/'boundary-row-patches.json').read_text());byfile={};errors=[]
for r in doc['patches']:
 proposal=root/r['source_proposal']
 if h(proposal.read_bytes())!=r['source_proposal_sha256']:errors.append('proposal changed: '+r['source_proposal'])
 path=root/r['contract'];j=byfile.setdefault(path,json.loads(path.read_text()));rows=j['contracts'][r['id']]['boundaries'];matches=[i for i,x in enumerate(rows) if x['case']==r['case']]
 if len(matches)!=1:errors.append('nonunique case: '+r['id']+':'+r['case']);continue
 old=rows[matches[0]]
 if old!=r['before'] and old!=r['proposed']:errors.append('boundary row changed: '+r['id']+':'+r['case']);continue
 if a.apply:
  target=root/'items'/(r['id']+'.md');body=target.read_bytes().split(b'---',2)[2]
  if h(body)!=r['expected_installed_body_sha256']:errors.append('final accepted body not installed: '+r['id'])
 rows[matches[0]]=r['proposed']
if errors:print(json.dumps({'refused':errors,'writes':False},indent=2));raise SystemExit(1)
if not a.apply:print(f"Read-only row/proposal guards match: {len(doc['patches'])} rows; no writes. Installed-source body guards are enforced by --apply.");raise SystemExit(0)
archive=here/('root-before-row-apply-'+datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ'));archive.mkdir()
for path,j in byfile.items():
 rel=path.relative_to(root);q=archive/rel;q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(path.read_bytes())
for path,j in byfile.items():
 tmp=path.with_name(path.name+f'.boundary-owner-{os.getpid()}.tmp');tmp.write_text(json.dumps(j,indent=2,ensure_ascii=False)+'\n');tmp.replace(path)
print(f"Applied only {len(doc['patches'])} boundary rows in {len(byfile)} contracts; fresh before archive: {archive.relative_to(root)}. No other contract field changed; no source/gate/native action.")
