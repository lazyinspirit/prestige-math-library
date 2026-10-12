import json,re,yaml,hashlib
from pathlib import Path
run='physics-cm-qm-gr-79-2026-10-11';e=Path('research')/f'{run}-cc-spectral-prerequisite'
ids=['ex-nrqm-controlled-dynamics-gap-closing-failure','ex-nrqm-controlled-dynamics-long-time-rwa-limitation','thm-nrqm-controlled-dynamics-rotating-wave-finite-time-error','prop-nrqm-controlled-dynamics-first-order-amplitude-tail','thm-nrqm-controlled-dynamics-quadratic-free-packet-decay','thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients','thm-nrqm-controlled-dynamics-degenerate-feshbach-error','thm-nrqm-controlled-dynamics-analytic-perturbation-remainder','ex-nrqm-controlled-dynamics-continuum-contribution-in-perturbation']
texts={i:Path(f'items/{i}.md').read_text() for i in ids};meta={i:yaml.safe_load(t.split('---',2)[1]) for i,t in texts.items()}
def section(t,h):return re.search(r'## '+re.escape(h)+r'\n(.*?)(?=\n## |\Z)',t,re.S).group(1).strip()
stmts={i:section(t,'Statement' if '## Statement' in t else 'Example') for i,t in texts.items()}
paths=[Path(f'research/{run}-batch-40.{k}.json') for k in ['pages','proof-contracts']]
for path in paths:
 b=e/'native-holds'/f'{path.name}.before-continuation-contour-consumer-mirrors';
 if not b.exists():b.write_bytes(path.read_bytes())
pages=json.loads(paths[0].read_text())
for page in pages:
 for row in page.get('items',[])+page.get('examples',[]):
  if isinstance(row,dict) and row.get('id') in meta:
   i=row['id']
   for k in ['id','kind','domain','title','dependency_level','deps','dependency_roles','aliases','provenance','sources']:
    if k in meta[i]:row[k]=meta[i][k]
   row['statement']=stmts[i]
paths[0].write_text(json.dumps(pages,indent=2,ensure_ascii=False)+'\n')
d=json.loads(paths[1].read_text())
for i,c in d['contracts'].items():
 for citation in c.get('citations',[]):
  if citation.get('source') in stmts and citation.get('source_section')=='Statement':citation['quote']=stmts[citation['source']]
 if i not in texts:continue
 proof=section(texts[i],'Proof' if '## Proof' in texts[i] else 'Verification'); rows=[]
 for match in re.finditer(r'(?m)^(\d+\.\d+) (.*?)(?=\n\n\d+\.\d+ |\Z)',proof,re.S):
  num,body=match.groups();tag=re.search(r'\[([^\]]+)\](?:\s*∎)?\s*$',body);assert tag,(i,num)
  rows.append({'id':'step-'+num.replace('.','-'),'claim':body[:tag.start()].strip(),'step':num,'inputs':[x.strip() for x in tag.group(1).split(',')]})
 c['derivations']=rows;c['citations']=[]
 facts=section(texts[i],'Facts & Assumptions') if '## Facts & Assumptions' in texts[i] else proof.split('1.1 ',1)[0]
 for match in re.finditer(r'(?m)^\[(F\d+)\] (.*?)(?=\n\n\[F\d+\]|\Z)',facts,re.S):
  fact,body=match.groups();uses=[r['step'] for r in rows if fact in r['inputs']]
  assert uses,(i,fact)
  for src in dict.fromkeys(re.findall(r'\[\[([^\]|]+)',body)):
   source_text=Path(f'items/{src}.md').read_text();h='Statement' if '## Statement' in source_text else 'Definition'
   c['citations'].append({'fact':fact,'source':src,'source_section':h,'quote':section(source_text,h),'uses':uses})
 for b in c.get('boundaries',[]):
  case=b['case']
  if i.endswith('analytic-perturbation-remainder'):
   b['evidence']='The simple normalized eigenvector excludes empty H and multiplicity degeneracy; step 1.1 covers the closed radius-R bounds, steps 1.1–2.1 the full arbitrary-H inverse and complex disk, and step 3.1 explicitly covers V=0 and half-radius evaluation. CC is the stated foundation; no global basis choice occurs.'
  elif i.endswith('simple-level-reduced-resolvent-coefficients'):
   b['evidence']='Step 1.1 includes the zero complementary space and actual inverse; steps 2.1–3.1 prove the entire strict q<1/2 disk without an unsupported projection half-bound, and steps 4.1–5.1 prove the exact zero-coupling coefficients. A normalized simple eigenvector excludes empty H and eigenvalue degeneracy; CC is explicit.'
  elif i.endswith('degenerate-feshbach-error'):
   b['evidence']='Steps 1.1–1.2 cover every finite r>=1 using only finite choices and CC; steps 2.1–4.2 include QH=0, z=E and lambda=0 on exact restricted domains; steps 5.1–6.1 retain the constant and conditional spectral-distance conclusion. The normalized finite eigenspace excludes empty H.'
  elif i.endswith('gap-closing-failure'):
   b['evidence']='Steps 1.1–2.1 explicitly distinguish the ordered upper projection, the full rank-two spectral atom at the crossing and the exact norm-one leakage at every T>0; step 3.1 proves the constant continuous eigenvector counterbranch. All arguments are finite displayed matrices, without a gapped theorem premise at the crossing.'
  elif i.endswith('long-time-rwa-limitation'):
   b['evidence']='Steps 1.1–1.2 retain the commuting nondecay computation and its uniform small-ratio bound; steps 1.2–3.1 give the explicit noncommuting sequence with ratio tending to zero and exact norm-two deviation at growing times. The matrices, signs and finite exponential formulas handle every n>=1 and fixed positive frequency.'
  elif i.endswith('rotating-wave-finite-time-error'):
   b['evidence']='Steps 1.1–2.1 prove the exact Duhamel and outer-derivative integration-by-parts identities; step 3.1 proves the complete constant with all hbar factors; step 4.1 explicitly covers equal times, B=0, negative frequency/absolute times and zero H. The strict nonzero frequency and positive hbar predicates are retained.'
  elif i.endswith('first-order-amplitude-tail'):
   b['evidence']='Step 1.1 proves the first-variable-linear forward amplitude and exact free phase, step 2.1 includes K=0 and equal times in the actual strong-vector tail, and step 3.1 explicitly verifies selected coefficient integrability from measurability and its integrable majorant. The complete unit eigenfamily excludes empty H; no stronger continuity premise or norm-only Dyson supplier is imposed.'
  elif i.endswith('quadratic-free-packet-decay'):
   b['evidence']='Step 1.1 proves the exact Fourier normalization and Schwartz initial packet; step 1.2 explicitly disposes zero amplitude and empty K prime and constructs uniform reciprocal-gradient coefficients; steps 2.1–3.1 prove both time signs and all integers N, including negative N. The compact stationary-set hypothesis is retained unchanged; no global choice or generic stationary-phase premise is used.'
  else:
   b['evidence']='Steps 1.1–2.1 prove the explicit PVM, full spectrum including both interval endpoints, simple eigenvalue and absent complementary eigenvectors; steps 3.1–4.1 verify the unit vector, actual reduced inverse, zero first coefficient and nonzero continuous second coefficient. CC is inherited explicitly.'
 c['focused_repair']={'reviewer':'/root/physics_spectral_review_continuation','cycle':'inherited-distinct-repair-cycle-1-cap-2','evidence':str(e),'independent_acceptance':False,'scope':'Actual supplier and mandatory consumer proof integration; original author/reviewer identities and histories retained.'}
paths[1].write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
for name in ['continuation-integrated-ids.json','continuation-actual-read-ids.json']:
 p=e/name;a=json.loads(p.read_text());a+= [i for i in ids if i not in a];p.write_text(json.dumps(a,indent=2)+'\n')
(e/'continuation-contour-consumer-integration.json').write_text(json.dumps({'items':[{'id':i,'raw_sha256':hashlib.sha256(Path(f'items/{i}.md').read_bytes()).hexdigest()} for i in ids],'local_checks_pending':True,'independent_acceptance':False,'repair_cycle':'inherited1/cap2'},indent=2)+'\n')
print('four40 mirrors/contracts integrated; histories retained')
