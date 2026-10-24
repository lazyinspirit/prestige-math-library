import pathlib,json,hashlib,collections,re,yaml
B=pathlib.Path('research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution');O=B/'authored-original-source-review/supported';T=json.loads((B/'private-preparation/authored-final-v3/authored-maintenance-template.json').read_text());Gpath=B/'authored-original-source-review/consumer-use-graph.json';G=json.loads(Gpath.read_text());D=json.loads((O/'current-declaration-bindings.json').read_text());ROOT=pathlib.Path('/home/lazyinspirit/Projects/prestige-math-library')
def sha(p):return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def sec(s):return {m.group(1):m.group(2).strip() for m in re.finditer(r'^## ([^\n]+)\n(.*?)(?=^## |\Z)',s,re.M|re.S)}
changed={x.get('id'):x for x in G['changed_originals'] if x.get('id')};E={(e['supplier'],e['consumer']):e for e in G['edges']};adj=collections.defaultdict(list)
for a,b in E:adj[a].append(b)
J={e['id']:e for e in json.loads((O/'supplier-reviews.json').read_text())['entries']};nodes={};pairs=[];direct=[]
reasons={
'lem-equivariant-rescaled-heat-kernel-extension':'F3 is used on finite-volume manifold/spacetime kernels with explicit absolute spatial and beta/factorial time bounds (steps2.1,4.1,5.1,6.1). These are sigma-finite products and finite matrix entries; Countable Choice is declared. The title-only Fubini successor retains exactly these hypotheses. No assertion of arbitrary interchange of an undamped Fourier double integral is made (step1.1 explicitly avoids it).',
'pthm-qftx-n2-linear-monopole-bps-vortex-bound':'F9 is used for finite-energy polar radial slices in2.1 and the finite-energy R2-times-interval decomposition in4.1. The nonnegative densities are integrable by the stated energy hypotheses; products are sigma-finite and full AC is declared. The Fubini version changes only title markup. Polar-coordinate interpretation is the existing integration interface, with no changed source premise.',
'pthm-qftx-n2-nonlinear-local-electric-flux-confinement':'F4/step8.1 slices a finite nonnegative energy density on R2-times-[0,L], retaining the almost-everywhere section conclusion needed for the lower bound. Full AC and finite-energy admissibility are explicit. No attainment or uniform epsilon-collar constant is inferred. Unchanged Fubini interface supports exactly this slicing use.',
'thm-qftx-critical-flux-cylinder-linear-energy':'F4/step1.1 decomposes the integrable nonnegative total density into transverse and longitudinal integrals on sigma-finite R2-times-[0,L]. It expressly uses almost-everywhere slices; stronger each-slice admissibility is a separate assumption. Full AC is declared. Title markup does not change that conclusion.',
'thm-qftx-critical-vortex-global-energy-minimum':'F4/step1.2 applies to nonnegative integrable kinetic/potential polar densities and gives the measurable radial functions Q,K with finite radial integrals. The radius includes the existing arc-length Jacobian. Full AC covers the declared countable radius selection. The title-only change does not alter sigma-finiteness/integrability or almost-everywhere conclusions.',
'lem-qftx-eigenfunction-open-bm-annihilation':'F3/step2.1 uses the zero-section Euler/Thom cap interpretation on finite Borel approximations, with complex line bundle and positive orientation; torus is a product of GL1, coefficients Q have characteristic zero, AC is retained via A1, and singular open supports are allowed by the supplier. Added Cartesian Remarks do not replace or narrow the existing zero-section proof or assert support purity.',
'lem-qftx-fixed-embedding-bm-euler-self-intersection':'F3/step2.1 uses complex-oriented Gysin and zero-section self-intersection after the stated invariant tubular identification, with twice-complex-codimension grading. Torus/product-GL1, characteristic-zero coefficients and AC satisfy the equivariant contract. F4/F5 separately supply numerable Thom classes and paracompact CW base scope for the proper Euler-unit clause. Added supplier diagrams preserve the positive orientation and singular-support scope; no new transversal assumption is inserted.'}
for t in T['entries']:
 sid=pathlib.Path(t['path']).stem;cg=changed[sid];us={u['id']:u for u in cg['transitive_owned_uses']};dist={sid:0};q=collections.deque([sid])
 while q:
  a=q.popleft()
  for b in adj[a]:
   if b not in dist:dist[b]=dist[a]+1;q.append(b)
 for c in t['consumers']:
  u=us[c['id']];p=u['witness_path'];assert len(p)-1==dist[c['id']];assert u['source_sha256']==c['source_sha256']==sha(u['source_path']);assert u['declaration_sha256']==c['declaration_sha256']==D[c['id']]['sha256']
  for n in p:
   if n not in nodes:
    path=pathlib.Path('items')/(n+'.md');s=path.read_text();sn=sec(s);row={'id':n,'source_path':str(path),'source_sha256':sha(path),'public_statement_definition_sha256':hashlib.sha256(json.dumps({k:sn[k] for k in ['Statement','Definition'] if k in sn},sort_keys=True).encode()).hexdigest(),'declared_edge_fields':{k:yaml.safe_load(re.match(r'\A---\n(.*?)\n---\n',s,re.S).group(1)).get(k,[]) for k in ['deps','justified_by','forward_refs','external_refs']}}
    if n in D:row['declaration_sha256']=D[n]['sha256']
    if n in changed:
     ch=changed[n];ns=sec(pathlib.Path(ch['original_path']).read_text());row['successor_sha256']=sha(ch['original_path']);row['successor_statement_definition_unchanged']=all(sn.get(k)==ns.get(k) for k in ['Statement','Definition']);assert row['successor_statement_definition_unchanged']
     row['other_successor_science_review_required']=n not in J
    nodes[n]=row
  edges=[E[(a,b)] for a,b in zip(p,p[1:])];isdir=len(p)==2
  pairs.append({'supplier':sid,'consumer':c['id'],'source_sha256':c['source_sha256'],'declaration_sha256':c['declaration_sha256'],'decision':'source-version-compatible-direct-use' if isdir else 'source-version-compatible-inherited-path','witness_path':p,'path_edges':edges,'direct':isdir,'reason':reasons[c['id']] if isdir else 'The reviewed successor retains the same public statement/definition, hypotheses, dependencies and mathematical meaning. The bound actual shortest declared dependency path passes through unchanged public interfaces; current source and declaration bytes are bound. No new premise or changed meaning is propagated by this supplier version. This is an inherited source-version judgment, not a direct citation claim or an independent audit of this consumer whole proof. Other changed originals on the path require their separate owner reviews.','reading_limits':'Exact direct Fact/proof use passages inspected.' if isdir else 'Declared shortest path and actual current bytes/interface identity checked; consumer whole proof not independently audited.'})
 for c in cg['direct_consumers']:
  if c['owned']:
   for f in c['fact_uses']:
    direct.append({'supplier':sid,'consumer':c['id'],'source_sha256':c['source_sha256'],'declaration_sha256':D[c['id']]['sha256'],**f,'decision':'compatible-with-reviewed-successor','reason':reasons[c['id']]})
assert len(pairs)==1621 and len(direct)==8
(O/'consumer-reviews.json').write_text(json.dumps({'reviewer':'/root/invariant_recovery','graph':{'path':str(Gpath),'sha256':sha(Gpath)},'counts':{'closure_pairs':len(pairs),'unique_current_consumers':len({p['consumer'] for p in pairs}),'direct_pairs':sum(p['direct'] for p in pairs),'direct_fact_or_ac_paragraphs':len(direct),'bound_path_nodes':len(nodes)},'production_writes':False,'direct_use_reviews':direct,'entries':pairs,'path_nodes':list(nodes.values()),'unresolved_version_gaps':[],'limits':['No independent whole-proof acceptance of264 consumers or1621 direct readings.','Other changed original suppliers crossed by paths require their separately scoped owner reviews; this file does not accept them.','Declared dependency paths certify source-version relevance, not a semantic proof of every transitive inference.']},indent=2)+'\n')
print(len(pairs),'pairs;',len(nodes),'nodes;',len(direct),'direct paragraphs;',sum(p['direct'] for p in pairs),'direct pairs')
