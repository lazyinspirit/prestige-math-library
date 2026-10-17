#!/usr/bin/env python3
"""Readonly source/mirror comparisons; no gate or canonical write."""
from pathlib import Path
import json,re,subprocess,hashlib
base=Path(__file__).resolve().parent;repo=base.parents[1];packet=base/'root-metadata-integration-r2';info=json.loads((packet/'integration.json').read_text());newowners=info['newitems'];issues=[];observations=[];counts={}
def issue(kind,**kw):issues.append(dict(kind=kind,**kw))
node=r'''import fs from 'node:fs';import {parseFrontmatter} from './tools/content-policy-lib.mjs';const paths=JSON.parse(fs.readFileSync(0,'utf8'));const out={};for(const p of paths){const s=fs.readFileSync(p,'utf8');out[p]=parseFrontmatter(s.split('---')[1]);}process.stdout.write(JSON.stringify(out));'''
sourcepaths=set()
for b in [33,49,68]:
 pages=json.loads((packet/'proposed/research'/f'{info["run"]}-batch-{b}.pages.json').read_text())
 for p in pages:
  for x in p['items']:sourcepaths.add('items/'+x['id']+'.md')
for p in info['canonical_targets']:
 if p.startswith('library/'):sourcepaths.add(p)
res=subprocess.run(['node','--input-type=module','-e',node],input=json.dumps(sorted(sourcepaths)),text=True,capture_output=True,cwd=repo);assert res.returncode==0,res.stderr;front=json.loads(res.stdout)
def section(source,name):
 p=repo/'items'/(source+'.md')
 if not p.exists():return None
 s=p.read_text();m=re.search(r'## '+re.escape(name)+r'\n(.*?)(?=\n## |\Z)',s,re.S);return m[1].strip() if m else None
def proofsteps(i):
 s=(repo/'items'/(i+'.md')).read_text();m=re.search(r'## (?:Proof|Verification)\n(.*)',s,re.S);out={}
 if not m:return out
 for x in re.finditer(r'^(\d+\.\d+) (.*?)(?=^\d+\.\d+ |^## |\Z)',m[1],re.M|re.S):
  t=re.search(r'\[([^\[\]\n]+)\]\s*(?:∎)?\s*$',x[2].strip())
  if t:out[x[1]]=(x[2].strip()[:t.start()].rstrip(),[z.strip() for z in t[1].split(',')])
 return out
allman=deriv=quotes=pagecount=0
for b in [33,49,68]:
 prefix=f'{info["run"]}-batch-{b}';rel='research/'+prefix+'.pages.json';before=json.loads((packet/'before'/rel).read_text());after=json.loads((packet/'proposed'/rel).read_text());befids=[x['id'] for p in before for x in p['items']];aftids=[x['id'] for p in after for x in p['items']];expected={i for i,o in newowners.items() if o==b}
 if set(aftids)-set(befids)!=expected or set(befids)-set(aftids):issue('manifest-id-delta',batch=b,added=sorted(set(aftids)-set(befids)),removed=sorted(set(befids)-set(aftids)),expected=sorted(expected))
 for page in after:
  for x in page['items']:
   actual=front['items/'+x['id']+'.md'];allman+=1
   for key in ['id','kind','deps']:
    if x.get(key,[])!=actual.get(key,[]):issue('manifest-source-field',batch=b,item=x['id'],field=key,proposed=x.get(key),actual=actual.get(key))
   if x['id'] in newowners:
    for key in ['provenance','sources','verification']:
     if x.get(key)!=actual.get(key):issue('new-manifest-source-field',item=x['id'],field=key)
 rel='research/'+prefix+'.proof-contracts.json';contracts=json.loads((packet/'proposed'/rel).read_text())['contracts']
 for i,c in contracts.items():
  actual=proofsteps(i)
  for d in c.get('derivations',[]):
   deriv+=1;step=d.get('step');match=actual.get(step)
   if not match:issue('derivation-step-missing',item=i,step=step);continue
   if d.get('claim')!=match[0]:issue('derivation-claim',item=i,step=step,whitespace_only=(' '.join(str(d.get('claim','')).split())==' '.join(match[0].split())))
   if d.get('inputs')!=match[1]:issue('derivation-tags',item=i,step=step,proposed=d.get('inputs'),actual=match[1])
  for q in c.get('citations',[]):
   quotes+=1;sec=section(q.get('source',''),q.get('source_section',''))
   if sec is None or not isinstance(q.get('quote'),str) or q['quote'] != sec:issue('supplier-section-quote',consumer=i,source=q.get('source'),fact=q.get('fact'),section=q.get('source_section'))
 # Existingexternalharvests must be untouched; only canonical localcompositions added.
 rel='research/'+prefix+'.coverage.json';bef=json.loads((packet/'before'/rel).read_text());aft=json.loads((packet/'proposed'/rel).read_text())
 for old,newpage in zip(bef['pages'],aft['pages']):
  if old.get('sources')!=newpage.get('sources'):issue('coverage-external-harvest-mutated',batch=b,page=old.get('page'))
  additions=newpage.get('canonical',[])[len(old.get('canonical',[])):]
  pageexpected=expected if newpage.get('page')==after[0]['id'] else set()
  if {x.get('item') for x in additions}!=pageexpected:issue('coverage-added-ids',batch=b,page=newpage.get('page'),items=[x.get('item') for x in additions],expected=sorted(pageexpected))
  for row in additions:
   if row.get('disposition')!='included' or 'Locallyproved' not in row.get('reason','') or 'no' not in row.get('reason','').lower():issue('coverage-local-attribution',batch=b,item=row.get('item'))
 for rel in info['canonical_targets']:
  if rel.startswith('library/') and after[0]['id'] in rel:
   pagecount+=1;old=(packet/'before'/rel).read_text();newtext=(packet/'proposed'/rel).read_text();oldfm=front[rel];m=newtext.split('---',2);fm=m[1]
   # Inventorylists are one ID per listline in these currentApage frontmatters.
   oldids=set(oldfm.get('items',[]));newids=set(re.findall(r'^  - ((?:thm|alg|lem|def|ex|cor|prop|rem)-[a-z0-9-]+)\s*$',fm,re.M))
   if newids-oldids!=expected or oldids-newids:issue('Apage-inventory-delta',page=rel,added=sorted(newids-oldids),removed=sorted(oldids-newids),expected=sorted(expected))
   oldbody=old.split('---',2)[2];newbody=m[2]
   if not newbody.startswith(oldbody):issue('Apage-existing-body-changed',page=rel)
   observations.append(dict(page=rel,summary_addition=newbody[len(oldbody):].strip(),review='Root should confirm plain-language summary matches already approved source; this is a nonmechanical semantic review.'))
# Guardcurrency/reportonly: donotrefreshorchangeexistingguardedutility.
for rel,h in json.loads((packet/'rawguards.json').read_text()).items():
 p=repo/rel
 if not p.exists() or hashlib.sha256(p.read_bytes()).hexdigest()!=h:issue('existing-packet-guard-drift',path=rel)
fr=repo/'items/alg-finite-budget-francis-schur-reduction.md';old=(base/'before/items'/fr.name).read_text();definition_preserved=fr.read_text().split('## Definition\n',1)[1]==old.split('## Definition\n',1)[1].split('## Facts & Assumptions',1)[0]
if not definition_preserved:issue('Francis-definition-byte-mismatch')
report=dict(run=info['run'],identity='readonly-deterministic-matrix49-68-source-exactness',canonical_writes=False,guarded_utility_preserved=True,counts=dict(targets=len(info['canonical_targets']),manifest_items=allman,derivations=deriv,supplier_quotes=quotes,A_pages=pagecount),mismatches=issues,Francis_definition_byte_preserved=definition_preserved,nonmechanical_root_review=observations,coverage_disposition='All original externalharvest/source-reading records compared unchanged; newcanonical rowschecked for exactnew4IDsetandlocalcomposition wording. Semantic honesty still rests on approved sourceattribution; no newreading/fetch claimed.',interpretation='This is a deterministic readonly mirror report, not a gate, native acceptance, proof review, level/hash recertification or permission toapply. Existing packet/guards/utility unchanged.')
(base/'root-metadata-source-exactness-report-r2.json').write_text(json.dumps(report,indent=2,ensure_ascii=False)+'\n');print(json.dumps({'counts':report['counts'],'mismatches':issues},indent=2))
