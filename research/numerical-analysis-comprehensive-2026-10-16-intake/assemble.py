import json,re,pathlib,hashlib,yaml,collections
R=pathlib.Path.cwd();O=R/'research/numerical-analysis-comprehensive-2026-10-16-intake';prefix='research/numerical-analysis-48-2026-10-16-coverage-'; spec=json.loads((R/'research/plan-spec.json').read_text()); canonical={x['id']:x for x in spec['pages']}; oldlabels={x.get('label'):x for x in spec['pages'] if x['kind']=='A'}; sources={}; entries={}; amap={}; unresolved=[]
def read(path):
 p=R/path;d=json.loads(p.read_text());sources[str(path)]={'sha256':hashlib.sha256(p.read_bytes()).hexdigest()};return d
def add(key,id,raw,path,**other):
 assert key not in entries,key
 entries[key]={'key':key,'a_page':id,'b_page':id+'-examples','category':'numerical-analysis','source_file':path,'source_record_verbatim':raw,'amendments':[],'raw_dependencies':[],'prerequisite_ownership':[],'disposition':'genuinely-new',**other};amap[key]=key;amap[id]=key
 return entries[key]
original=read(prefix+'original/original-46-dispositions.json'); orig={x['pair']:x for x in original['rows']}; approved=read('research/numerical-analysis-comprehensive-2026-10-16-intake/original-approved-design-snapshot.json'); evidence={x['pair']:x for x in approved['pairs']}; pm=read('research/numerical-analysis-2026-10-12/scaffold/prerequisite-map.json'); localowners=read(prefix+'original/prerequisite-owner-map.json')
skip={f'NA-{i:02}' for i in [1,39,40,41,42,43,45]}
for key in ['P-NUM-ODE-01','P-NUM-ODE-02']+[f'NA-{i:02}' for i in range(1,47) if f'NA-{i:02}' not in skip]:
 p=oldlabels[key];a=add(key,p['id'],orig.get(key,{'approved_design':'research/plan-numerical-analysis-prerequisites.md'}),prefix+'original/original-46-dispositions.json',title=p['title'],disposition=orig.get(key,{}).get('classification','new-independent-prerequisite'))
 a['raw_dependencies']=p['requires'];section=evidence.get(key,{}).get('approved_section_verbatim','');a['proof_routes']=re.search(r'\*\*Proof route:\*\* (.*?)(?=\n\n)',section,re.S)[1] if section else 'Exact local defect, stability and propagation proof in the binding independent ODE scaffold';a['examples']=re.search(r'\*\*Examples:\*\* (.*?)(?=\n\n)',section,re.S)[1] if section else 'Exact Euler state/log-density examples from binding independent ODE scaffold';a['scope']=orig.get(key,{}).get('exact_incremental_obligation',p.get('description',''));a['preserved_original_design']=evidence.get(key,{});a['source_urls']=list(dict.fromkeys(re.findall(r'https?://[^\s)>,]+',evidence.get(key,{}).get('approved_section_verbatim',''))));a['prerequisite_ownership']=[{'owner':key,'obligation':'All approved same-pair missing established intermediates remain local before their consumers; exact contracts in original binding appendices and prerequisite-owner-map.'}]
# Independent ODE interfaces remain fully specified by the durable binding scaffold.
ode_design=(R/'research/plan-numerical-analysis-prerequisites.md').read_text()
for key in ['P-NUM-ODE-01','P-NUM-ODE-02']:
 entries[key]['scope']=ode_design
 entries[key]['binding_scaffold']='research/plan-numerical-analysis-prerequisites.md'
# Specialized linear/approximation proposals.
lin=read(prefix+'linear/proposal.json')
for x in lin['pairs']:
 a=add(x['owner'],x['a_page'],x,prefix+'linear/proposal.json',title=x['a_page'].replace('-',' ').capitalize(),disposition=x.get('reuse_disposition','genuinely-new'))
 a['raw_dependencies']=x['requires']+x.get('canonical_items',[]);a['scope']=x['contracts'];a['proof_routes']=x['proof_route'];a['examples']=x['examples'];a['prerequisite_ownership']=x['unmet_prerequisites'];a['source_urls']=list(dict.fromkeys(u for s in x.get('source_references',[]) for u in s.get('urls',[])))
for x in lin['amendments']:
 owner='NA-02' if x['owner']=='NA-01' else x['owner'];a=entries[owner];a['amendments'].append({'origin':prefix+'linear/proposal.json','original_owner':x['owner'],'resolved_owner':owner,'design':x,'reason':'New compensated/pairwise/error-free transform mathematics lives in finite-precision extension NA02; fully-covered NA01 stays external.' if owner!=x['owner'] else 'approved scope extension'});a['raw_dependencies']+=x['requires'];a['source_urls']+=list(u for s in x.get('source_references',[]) for u in s.get('urls',[]))
# Optimization: normalized rich JSON if present; retain exact prose section in every case.
opt=read(prefix+'optimization/pairs.json'); opttext=(R/(prefix+'optimization/proposal.md')).read_text();sources[prefix+'optimization/proposal.md']={'sha256':hashlib.sha256(opttext.encode()).hexdigest()}
for x in opt['pairs']:
 key=x.get('owner',x.get('key'));a=add(key,x.get('a_page',x.get('a_slug')),x,prefix+'optimization/pairs.json',disposition=x.get('classification',x.get('disposition','genuinely-new')))
 m=re.search(r'^### '+re.escape(key)+r':.*?\n(.*?)(?=^### |^## |\Z)',opttext,re.M|re.S);a['full_design_verbatim']=m[0] if m else '';a['scope']=x.get('scope',a['full_design_verbatim']);a['proof_routes']=x.get('proof_route',a['full_design_verbatim']);a['examples']=x.get('examples',a['full_design_verbatim']);a['source_urls']=x.get('source_urls',[v['url'] for v in x.get('sources',[]) if isinstance(v,dict) and 'url' in v]);a['raw_dependencies']=x.get('new_dependencies',x.get('dependencies',x.get('requires',[])))+x.get('canonical_dependencies',[]);a['prerequisite_ownership']=x.get('missing_prerequisites',x.get('missing_prerequisites_owner',x.get('missing_prerequisite_owner','same pair owns every named intermediate in exact design')))
# Time, with a single combined adjoint/sensitivity owner.
time=read(prefix+'time/proposals.json')
for x in time['rows']:
 key=x['local_key']
 if key=='T12':
  entries['DIF3']['amendments'].append({'origin':prefix+'time/proposals.json','original_owner':'T12','resolved_owner':'DIF3','design':x,'reason':'One shared discrete/continuous adjoint, tangent, finite-time tangent-QR and sensitivity owner; no duplicate method pair.'});amap['T12']='DIF3';amap[x['key']]='DIF3';continue
 a=add(key,x['key'],x,prefix+'time/proposals.json',disposition=x['disposition']);a['scope']=x['promise_and_proof_design_verbatim'];a['proof_routes']=a['scope'];a['examples']=a['scope'];a['source_urls']=x['source_urls'];a['raw_dependencies']=x['new_dependency_keys']+x['canonical_reuse'];a['prerequisite_ownership']=[{'owner':key,'obligation':x['missing_prerequisites_owner']}]
for key in ['NA-16','NA-17','NA-18','NA-21','NA-22']:
 entries[key]['amendments'].append({'origin':prefix+'time/proposals.json','design':time['existing_scope_amendments_verbatim'],'binding_subset':key,'reason':'Keep exact matching numbered amendment; conditional applications do not reverse supplier edges.'})
# Physics/chemistry and mathematical application methods.
pc=read(prefix+'physics-chemistry/pairs.json')
for x in pc['pairs']:
 a=add(x['key'],x['a_page'],x,prefix+'physics-chemistry/pairs.json',disposition=x['classification']);a['scope']=x['scope'];a['proof_routes']=x['proof_routes'];a['examples']=x['examples'] or (re.search(r'\bB: (.*?)(?= Sources| Source:|\Z)',x['scope'],re.S)[1] if re.search(r'\bB: (.*?)(?= Sources| Source:|\Z)',x['scope'],re.S) else x['scope']);a['source_urls']=x['source_urls'];a['raw_dependencies']=x['pair_deps']+x['canonical_deps'];a['prerequisite_ownership']=x['missing_prerequisites']
for x in pc.get('existing_pair_amendments',[]):entries[x['key']]['amendments'].append({'origin':prefix+'physics-chemistry/pairs.json','design':x})
# PDE and engineering.
pde=read(prefix+'pde/proposed-pairs.json')
for x in pde['pairs']:
 a=add(x['key'],x['a_slug'],x,prefix+'pde/proposed-pairs.json',title=x['title'],disposition=x['disposition']);a['scope']=x['scope'];a['proof_routes']=x['proof_route'];a['examples']=x['examples'];a['source_urls']=x['source_urls'];a['raw_dependencies']=x['dependencies'];a['prerequisite_ownership']=[{'owner':x['missing_prerequisite_owner'],'obligation':x['missing_prerequisites']}]
pdetext=(R/(prefix+'pde/proposal.md')).read_text();pdeam=pdetext.split('## Exact existing-pair amendments',1)[1].split('## Proposed A/B pairs',1)[0]
# Preserve full amendment text, bind its explicit NA sections at same owners.
for key in ['NA-28','NA-33','NA-34','NA-35','NA-36','NA-38']:
 if key in entries and not any(a.get('origin')==prefix+'pde/proposal.md' for a in entries[key]['amendments']):entries[key]['amendments'].append({'origin':prefix+'pde/proposal.md','design':pdeam,'binding_subset':key})
xd=read(prefix+'crossdomain/proposed-pairs.json')
for x in xd['new_pairs']:
 a=add(x['key'],x['page_a'],x,prefix+'crossdomain/proposed-pairs.json',disposition=x['disposition']);a['scope']=x['scope'];a['proof_routes']=x['proof_route'];a['examples']=x['examples'];a['source_urls']=x['source_urls'];a['raw_dependencies']=x['frontier_requires']+x['canonical_reuse'];a['prerequisite_ownership']=x['missing_prerequisites']
for x in xd.get('existing_extensions',[]):entries[x['integrated_owner']]['amendments'].append({'origin':prefix+'crossdomain/proposed-pairs.json','design':x,'reason':'Reuse SMC/Feynman-Kac algorithms, new efficiency/stability only in rare-event extension.'})
# Later coordinated source amendments are binding to their exact owners.
if time.get('cycle2_na15_amendment_verbatim'):
 entries['NA-15']['amendments'].append({'origin':prefix+'time/proposals.json','design':time['cycle2_na15_amendment_verbatim'],'scope':'SSPRK33 preservation/CFL and stabilized explicit Chebyshev RKC algorithm/order/stability/internal roundoff, all local NA15.'})
if 'T19' in entries:entries['T19']['source_urls']=[u.replace('https://doi.org/10.1016/S0764-4442(00','https://doi.org/10.1016/S0764-4442(00)01793-6') if u=='https://doi.org/10.1016/S0764-4442(00' else u for u in entries['T19']['source_urls']]
if time.get('cycle2_na15_nonlinear_rkc_verbatim'):
 entries['NA-15']['amendments'].append({'origin':prefix+'time/proposals.json','design':time['cycle2_na15_nonlinear_rkc_verbatim'],'scope':'Binding full nonlinear RKC2 construction and order proof, superseding the earlier incomplete-construction caveat.'})
# Schwarz has a single mathematical owner, with its complete PDE stable-decomposition proof.
if 'PE25' in entries:
 schwarz=[a for a in entries['NA-07']['amendments'] if a.get('origin')==prefix+'linear/proposal.json']
 entries['PE25']['amendments'].append({'origin':prefix+'linear/proposal.json','design':schwarz,'reason':'All overlapping additive-Schwarz stable decomposition, local-energy and condition-bound promises belong PE25 once; NA07 owns multigrid/AMG only.'})
 for a in schwarz:a['scope_reassignment']={'moved_to':'PE25','clauses':'Overlapping additive Schwarz and its stable-decomposition/local-energy condition theorem. Not authored a second time in NA07.','retained_here':'Algebraic multigrid hierarchy, actual concrete uniform smoothing/approximation and cycle costs.'}
 entries['NA-07']['raw_dependencies']=[d for d in entries['NA-07']['raw_dependencies'] if d not in ['NA-28','NA28','PE25']]
# Explicit known source locators for cross-referenced original rows.
for key in ['P-NUM-ODE-01','P-NUM-ODE-02']:
 entries[key]['source_urls']=['https://www.unige.ch/~hairer/poly/chap3.pdf']
entries['NA-04']['source_urls']=['https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf']
# Preserve NA43 and NA45 deltas in their adopted single owners.
entries['OPT0']['preserved_original_design']=evidence['NA-43']
entries['OPT0']['original_scope_disposition']=orig['NA-43']
entries['NA-44']['amendments'].append({'original_pair':'NA-45','design':orig['NA-45'],'full_original_design':evidence['NA-45'],'reason':'Existing scalar ledger canonical; new normed-chain/Minkowski and numerical instances locally in inverse/error-transport extension.'})
entries['NA-34']['binding_local_foundation']='research/plan-numerical-analysis-mixed-foundation.md'
# Domain addenda are binding without asserting that scalar/PDE/particle interfaces coincide.
for key in ['NA-15','NA-17','NA-18','NA-22','NA-23','NA-24','NA-25','NA-26','NA-27','NA-28','NA-29','NA-30','NA-31','NA-32','NA-33','NA-34','NA-35','NA-36','NA-44']:
 entries[key]['amendments'].append({'origin':prefix+'crossdomain/proposed-pairs.json','binding_subset':key,'design':xd['original_frontier_amendments']})
# Event saltation is owned with the event map; an optional reset-adjoint application cannot create DIF3<->T10 cycle.
entries['DIF3']['raw_dependencies']=[d for d in entries['DIF3']['raw_dependencies'] if d!='T10']
entries['DIF3']['amendments'].append({'resolved_owner':'T10','design':'T10 owns all reset/saltation/event-specific sensitivity formulas and examples, consuming regular ODE tangent/adjoint from DIF3. DIF3 core consumes no event map. This is a placement decision, with all promises retained.'})
# Explicit context versus logical-supplier separation for closure/navigation reviewers.
entries['NA-11']['context_only_item_ids']=['cor-runge-polynomial-approximation']
entries['NA-11']['canonical_context_note']='Complex Runge approximation is optional contextual reading, not a premise for real interpolation or the Runge-function example. All published_context lists are discovery/interface evidence, never blanket claims of logical consumption.'
entries['OPT15']['context_only_item_ids']=['ex-orthogonal-design-lasso-is-soft-thresholding']
entries['OPT15']['prerequisite_ownership']=[{'owner':'OPT15','proposed_typed_id':'lem-na-coordinate-soft-threshold-minimizer','obligation':'Prove the one-coordinate absolute-value quadratic minimizer and kink cases locally (or consume a matching actual typed prox theorem); the published lasso worked example is contextual, never a premise or a copied algorithm.'}]
if 'T21' in entries:
 entries['T21']['context_only_item_ids']=['ex-quantile-coupling-on-the-real-line']
 entries['T21']['prerequisite_ownership']=[{'owner':'T21','proposed_typed_id':'lem-na-generalized-inverse-sublevel-identity','obligation':'Prove the exact generalized-inverse sublevel identity needed for implemented inversion from actual CDF-law correspondence; the quantile coupling example remains contextual.'},{'owner':'T21','obligation':entries['T21']['scope']}]
# Name and identity normalization, pure aliases only.
if 'QUAD-OSC' in entries:entries['QUAD-OSC']['a_page']='oscillatory-filon-and-levin-quadrature';entries['QUAD-OSC']['b_page']='oscillatory-filon-and-levin-quadrature-examples'
for key,a in entries.items():amap[a['a_page']]=key;amap[a['b_page']]=key
for i in range(1,47):
 k=f'NA-{i:02}';alias=f'NA{i:02}';amap[alias]=k
 for oldid in [orig[k]['original_a_page'],oldlabels.get(k,{}).get('id')]:
  if oldid:amap[oldid]=k
amap.update({'TIME-SSP':'NA-15','TIME-IMEX':'T04','TIME-SPLITTING':'T04','TIME-EVENT':'T10','matrix-exponential-and-phi-action-owner-interface':'LIN-EXPA','LIN-EXP':'LIN-EXPA','OPT-TR':'OPT3','APP-RBF':'APP-RBF','validated arithmetic owner':'VAL-INTERVAL','sparse-grid cubature':'QUAD-SMOL','P-NA-SENS-01':'NA-21'})
external={'NA-01':'matrix-norms-condition-numbers-and-numerical-stability','NA-39':'iid-monte-carlo-integration-and-error','NA-40':'quasi-monte-carlo-discrepancy-and-rules','NA-41':'randomized-quasi-monte-carlo-and-replicates','NA-42':'multilevel-monte-carlo'};amap.update({k:v for k,v in external.items()});amap.update({'NA-43':'OPT0','NA-45':'NA-44'})
# Existing item homes and aliases bound to actual carriers.
homes={};aliases={};metadata={};page_meta={}
for p in spec['pages']:
 for x in p.get('items',[]):homes.setdefault(x['id'],p['id'])
for p in (R/'library').glob('*/*.md'):
 t=p.read_text();m=re.match('---\\n(.*?)\\n---',t,re.S)
 if m:
  d=yaml.safe_load(m[1]) or {};id=d.get('page')
  if id:
   page_meta[id]={'status':d.get('status'),'path':str(p.relative_to(R))}
   for item in (d.get('items') or [])+(d.get('examples') or []):homes.setdefault(item,id)
# Conventional descriptions are explicit canonical interfaces, not guessed suppliers.
textdeps={'published exact LU/Cholesky':['direct-matrix-factorisations-lu-cholesky-and-qr'],'published exact SVD':['the-spectral-theorem-and-singular-value-decomposition'],'published SVD/Eckart-Young':['the-spectral-theorem-and-singular-value-decomposition'],'published Hermitian spectral theorem':['the-spectral-theorem-and-singular-value-decomposition'],'published Schur/Hessenberg/QR':['eigenvalue-iterations-and-the-qr-algorithm'],'published matrix differentiation':['matrix-differentiation-and-first-order-spectral-perturbation'],'published Kronecker basics or local lemma':[],'NA-02 complex arithmetic supplier':['NA-02'],'published mathematical-statistics splines':['splines-series-and-approximation-rates'],'published RKHS only if its actual contract suffices':[],'published real/complex elementary function theory':[],'published determinant theory':['determinants-of-matrices-over-a-commutative-ring'],'published Fourier FFT/DFT':['thm-radix-two-fft-correctness']}
nav={};context=[]
def resolve(dep,key):
 dep=dep.strip();path=dep.split('/')[-1] if not dep.startswith(('def-','thm-','lem-','alg-','prop-','cor-','ex-')) else dep
 if dep in textdeps:
  out=[]
  for q in textdeps[dep]:out+=resolve(q,key)
  if not textdeps[dep]:entries[key]['prerequisite_ownership'].append({'owner':key,'obligation':dep+' — prove exact missing interface locally if current typed suppliers insufficient; no external fallback.'})
  return out
 seen=set()
 while path in amap and amap[path]!=path and path not in seen:seen.add(path);path=amap[path]
 if path in entries:return [path] if path!=key else []
 if path in canonical:
  if canonical[path]['kind']=='B':context.append({'consumer':key,'nonlogical_B_page':path});return []
  if path not in page_meta or page_meta[path]['status']!='published':unresolved.append({'owner':key,'unpublished_or_absent_page':path,'original_ref':dep});return []
  return [path]
 file=R/'items'/f'{path}.md'
 if file.exists():
  if path not in metadata:
   d=yaml.safe_load(file.read_text().split('---',2)[1]);metadata[path]=d
  d=metadata[path];h=homes.get(path);nav[path]={'status':d.get('status'),'kind':d.get('kind'),'home':h,'path':str(file.relative_to(R)),'sha256':hashlib.sha256(file.read_bytes()).hexdigest()}
  if h and canonical.get(h,{}).get('kind')=='B':context.append({'consumer':key,'nonlogical_item':path,'home':h,'action':'Contextual example only; required mathematical law must use actual typed supplier or be proved locally.'});return []
  if d.get('status')!='published' or not h:unresolved.append({'owner':key,'nonpublished_or_unhomed_item':path,'home':h});return []
  return resolve(h,key)
 unresolved.append({'owner':key,'unresolved_ref':dep});return []
for key,a in entries.items():
 # normalize ownership shape
 if not isinstance(a['prerequisite_ownership'],list):a['prerequisite_ownership']=[{'owner':key,'obligation':a['prerequisite_ownership']}]
 if not a['prerequisite_ownership']:a['prerequisite_ownership']=[{'owner':key,'obligation':'All missing established analytic kernel/transform/error interfaces explicitly named in scope and proof_routes are authored locally here before their consumers; exact design retained verbatim.'}]
 for obligation in a['prerequisite_ownership']:
  if isinstance(obligation,dict) and obligation.get('owner')=='NA-01':obligation['resolved_owner']='NA-02';obligation['ownership_note']='Compensated arithmetic/error-free transforms assigned to retained finite-precision extension.'
 a['requires']=list(dict.fromkeys(q for dep in a['raw_dependencies'] for q in resolve(dep,key)))
 a['source_urls']=list(dict.fromkeys(a['source_urls']));a['items']=[];a['source_proof_status']='Design only. Exact source proof reading and local proof bodies remain required; citations grant no logical fallback.'
# Explicit coordinated binding increments and minimum method dependencies.
extra={'NA-05':['NA-02'],'NA-07':[],'NA-13':['LIN-EIGITER','VAL-LINEAR'],'NA-14':['QUAD-EXTRAP','VAL-INTERVAL'],'NA-18':['VAL-INTERVAL','NA-15'],'NA-21':['NA-09'],'NA-22':[],'GEO-PRED':['NA-02'],'VAL-INTERVAL':['NA-02'],'T01':['NA-09','NA-16','P-NUM-ODE-02'],'T02':['NA-02','NA-09'],'T03':['LIN-EXPA','P-NUM-ODE-02'],'T04':['NA-15','P-NUM-ODE-02'],'T05':['P-NUM-ODE-02'],'T06':['NA-09'],'T08':['P-NUM-ODE-02'],'T09':['NA-12'],'T10':['NA-18','VAL-ROOT'],'T11':['OPT5','OPT8'],'T13':['euler-maruyama-convergence'],'T15':['euler-maruyama-scheme-and-conditions'],'T16':['probability-spaces-random-variables-and-expectation'],'T19':['NA-15'],'T20':['NA-15','NA-13','P-NUM-ODE-02'],'DIF2':['thm-chain-rule-for-total-derivatives'],'DIF3':['T01','DIF2','NA-21','NA-29','NA-30','NA-36','NA-15','P-NUM-ODE-02'],'RARE1':['iid-monte-carlo-integration-and-error']}
for key,ds in extra.items():
 if key in entries:entries[key]['requires']=list(dict.fromkeys(entries[key]['requires']+[q for d in ds for q in resolve(d,key)]))
# Topological order with deterministic research-owner priority; cycles are reported, not silently erased.
remaining=set(entries);ordered=[]
while remaining:
 ready=sorted(k for k in remaining if not any(d in remaining for d in entries[k]['requires']))
 if not ready:break
 ordered+=ready;remaining-=set(ready)
counts=collections.Counter(a['source_file'].split('-coverage-')[-1].split('/')[0] for a in entries.values());collisions=[{'key':k,'page':a['a_page'],'existing_label':canonical[a['a_page']].get('label')} for k,a in entries.items() if a['a_page'] in canonical and canonical[a['a_page']].get('label')!=k]
# Existing draft original homes are intentionally reused by fresh frontier, never adopted as executed coverage.
summary={'new_run':'numerical-analysis-comprehensive-2026-10-16','pair_count':len(entries),'page_count':2*len(entries),'source_counts':dict(counts),'topological_pairs':len(ordered),'cycles_or_cycle_descendants':sorted(remaining),'unresolved_dependencies':unresolved,'nonlogical_context_refs':context,'identity_collisions':collisions,'source_files':sources,'source_reading_limits':'New audit source targets are not read receipts. Preserve exact per-record limits. Original bounded reads remain attributed to their actual readers.'}
(O/'inventory.json').write_text(json.dumps({'version':1,'status':'reviewable-proposal-not-registered','summary':summary,'pairs':[entries[k] for k in ordered]+[entries[k] for k in sorted(remaining)]},indent=2,ensure_ascii=False)+'\n');(O/'dependency-audit.json').write_text(json.dumps(summary,indent=2,ensure_ascii=False)+'\n');(O/'supplier-navigation.json').write_text(json.dumps(nav,indent=2,ensure_ascii=False)+'\n');(O/'preserved-original-46.json').write_text(json.dumps(original,indent=2,ensure_ascii=False)+'\n');(O/'prerequisite-owner-map-original.json').write_text(json.dumps(localowners,indent=2,ensure_ascii=False)+'\n')
print(json.dumps({k:v for k,v in summary.items() if k not in ['source_files','source_reading_limits']},indent=2,ensure_ascii=False))
