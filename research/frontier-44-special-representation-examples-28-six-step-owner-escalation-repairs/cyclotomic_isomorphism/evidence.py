from pathlib import Path
import json,hashlib,re,datetime,subprocess,copy
r=Path('research/frontier-44-special-representation-examples-28-six-step-owner-escalation-repairs/cyclotomic_isomorphism');h=json.loads((r/'current-hashes.json').read_text());ids=[Path(p).stem for p in h]
contractpath=Path('research/frontier-44-special-representation-examples-28-six-step-batch-48.proof-contracts.json');contracts=json.loads(contractpath.read_text())['contracts'];proposal={}
for p in h:
 text=Path(p).read_text();old=(r/Path(p).name).read_text()
 section=lambda s,n:s.split('## '+n+'\n',1)[1].split('\n## ',1)[0].strip()
 assert section(text,'Statement')==section(old,'Statement')
 c=copy.deepcopy(contracts[Path(p).stem]);steps=re.findall(r'^(\d+\.\d+) (.*)$',section(text,'Proof'),re.M)
 c['derivations']=[{'id':'step-'+st.replace('.','-'),'step':st,'claim':claim,'inputs':[t.strip() for t in re.findall(r'\[([^\]]+)\](?: ∎)?$',claim)[-1].split(',') if t.strip() not in ('algebra','construct','given')]} for st,claim in steps]
 for citation in c['citations']:
  citation['uses']=[st for st,claim in steps if citation['fact'] in [t.strip() for t in re.findall(r'\[([^\]]+)\](?: ∎)?$',claim)[-1].split(',')]]
  if citation['source']=='lem-cyclotomic-hecke-intertwiners-and-local-power-series':
   citation['source_section']='Proof'
   supplier=Path('items/'+citation['source']+'.md').read_text();line=next(line for line in supplier.splitlines() if line.startswith('3.1 Pair products'))
   citation['quote']=line.split(' ',1)[1]
 for b in c.get('boundaries',[]):
  b.pop('template_review',None)
  if Path(p).stem=='lem-cyclotomic-klr-block-satisfies-the-hecke-relations':
   b['evidence']=re.sub(r'(?<![\d.])(?:2\.1|3\.1|4\.1)(?![\d.])',lambda m:{'2.1':'4.1','3.1':'5.1','4.1':'6.1'}[m[0]],b.get('evidence',''))
 proposal[Path(p).stem]={'replace_fields':{'derivations':c['derivations'],'citations':c['citations'],'boundaries':c.get('boundaries',[])},'risk_history_action':'Retain genuine prior risk/alpha reports. New local proof construction supplied for root current review; no independent acceptance assigned.'}
(r/'proof-contracts.proposed.json').write_text(json.dumps({'aggregate':str(contractpath),'read_raw_sha256':hashlib.sha256(contractpath.read_bytes()).hexdigest(),'per_id':proposal},indent=2)+'\n')
manifest=Path('research/frontier-44-special-representation-examples-28-six-step-batch-48.pages.json');d=json.loads(manifest.read_text());mp={}
for pg in d:
 for it in pg['items']:
  if it['id'] not in ids:continue
  text=Path('items/'+it['id']+'.md').read_text();sources=copy.deepcopy(it['sources'])
  for ref in sources.get('references',[]):ref['title']=ref['title'].replace('0808.2032v3','0808.2032v4')
  mp[it['id']]={'page_id':pg['id'],'replace_fields':{'strategy':section(text,'Proof'),'sources':sources},'preserve_fields':['id','kind','title','statement','deps','provenance','axiom_use','dependency_level']}
(r/'manifest.proposed.json').write_text(json.dumps({'aggregate':str(manifest),'read_raw_sha256':hashlib.sha256(manifest.read_bytes()).hexdigest(),'per_id':mp},indent=2)+'\n')
checks=[]
for prefix in [['node','tools/tsx-run.mjs','tools/precheck.mts','--json'],['node','tools/rendercheck.mjs','--json'],['node','tools/proof-layout.mjs']]:
 cmd=prefix+list(h);p=subprocess.run(cmd,text=True,capture_output=True);checks.append({'command':' '.join(cmd),'exit_code':p.returncode,'stdout':p.stdout,'stderr':p.stderr,'at':datetime.datetime.now(datetime.timezone.utc).isoformat()});assert p.returncode==0;print(p.stdout.strip())
(r/'final-local-checks.json').write_text(json.dumps({'checks':checks,'raw_sha256':h},indent=2)+'\n')
post=json.loads(Path('research/frontier-44-special-representation-examples-28-six-step-step3-hash-48-post.json').read_text());print('post keys',post.keys())
record={'scope':ids,'statements_preserved':True,'definitions_changed':False,'all_draft':True,'new_helpers':[],'outside_writes':[],'published_claim_required':False,'source_acquisition':{'method':'read cached fulltext only','new_network_attempts':0,'source_file':'research/frontier-44-special-representation-examples-28-owner-native24-cyclotomic-consumer-review/bk0808.txt','source_raw_sha256':hashlib.sha256(Path('research/frontier-44-special-representation-examples-28-owner-native24-cyclotomic-consumer-review/bk0808.txt').read_bytes()).hexdigest(),'personally_read':'Complete extracted text of actual 0808.2032v4, PDF pages 1–32, in contiguous ranges; source formulas and abbreviated exercise cases compared against local calculation. No claim of reading other listed articles in this repair.'},'history':'Current owner construction continuation; original native24 first/max2 and old11 exhausted histories preserved, no reset. Genuine native48 escalations remain authoritative historical findings. No reports/decisions/risk acceptance overwritten.','checks':'Local formatting/render/layout only, no gate or independent mathematical acceptance. One accidental rendercheck --help began broad read-only work and was interrupted before output; excluded from evidence.','raw_sha256':h,'remaining':'No additional missing supplier identified in these four proofs. Exact total dimension, symmetric center, trace perfectness, Murphy/Schur and categorification escalations are outside this sector-isomorphism construction and are not claimed resolved.'}
(r/'repair-report.json').write_text(json.dumps(record,indent=2)+'\n')
(r/'page.proposed.json').write_text(json.dumps({'page':'cyclotomic-hecke-and-quiver-hecke-algebras','proposal':'Replace the pending normalization/colour-case clause, after root current review, with: The two-direction sector comparison now has explicit five-branch local normalizers, an affine six-coefficient braid calculation and all five normalized-crossing colour patterns, including the e=2 double edge. Retain the other open categorical, dimension, center, trace and Schur/Jantzen qualifications until their owners supply current evidence.','new_independent_acceptance':False},indent=2)+'\n')
