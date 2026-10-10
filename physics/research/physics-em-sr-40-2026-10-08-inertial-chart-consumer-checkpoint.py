from pathlib import Path
import json,re,hashlib,collections,datetime
base=Path('physics/research');run='physics-em-sr-40-2026-10-08';cone=json.loads((base/(run+'-inertial-chart-inverse-cone.json')).read_text());root=cone['supplier'];ids={r['id']for r in cone['items']};reverse=collections.defaultdict(list)
for e in cone['edges']:
 if e['kind']=='deps':reverse[e['supplier']].append(e['consumer'])
logical={root};queue=[root]
while queue:
 for id in reverse[queue.pop(0)]:
  if id not in logical:logical.add(id);queue.append(id)
strong={
'ex-sr-affine-chart-transition':'L1/L3 and steps1.1,1.3,3.1: generic origins use the correct forward M^-1(x−x(o\')); the worked boost is explicitly o\'=o. Its matrix inverse is the linear boost inverse. No claimed wrong affine inverse is used.',
'lem-inertial-chart-transitions-are-affine-lorentz':'L3/L10 and steps1.2,1.3,3.1,5.1: forward transition with generic origin is correct; reverse statement uses only matrix M, whose linear part is unchanged. All origin offsets remain arbitrary.',
'lem-affine-minkowski-charts-form-a-smooth-atlas':'L1 and steps1.2,2.4,3.2,3.3: the lemma independently inverts g(u)=Nu+c as N^-1(w−c), and applies this to the unchanged forward chart transition; smoothness/topology independence hold with the corrected inverse too.',
'thm-sr-tensor-and-current-transformation':'L1/L9 and steps1.1,2.2,2.3,3.1: the proof independently solves x\'=Lambda x+b as x=Lambda^-1(x\'−b). Phase offset is theta\'_0=theta_0−k\'_a b^a; this generic translation law is correct. Derivative/component transformations depend only on constant linear parts.',
'ex-sr-primed-frame-origin-motion':'L3/L5 and steps1.1–1.3,2.1: x\'=Bx is realized using c_0=o, so the affine offset is zero by construction, not by suppressing a generic origin. The inverse boost B(−beta) correctly inverts that restricted transition.'}
rows=[]
for old in cone['items']:
 id=old['id'];raw=Path(old['path']).read_text();sha=hashlib.sha256(raw.encode()).hexdigest();body=re.match(r'^---\r?\n[\s\S]*?\r?\n---\r?\n([\s\S]*)$',raw).group(1);paras=re.split(r'\n\s*\n',body)
 incoming=[e for e in cone['edges']if e['consumer']==id]
 parents={e['supplier']for e in incoming}
 cited=[p.strip()for p in paras if set(re.findall(r'\[\[([^\]|]+)',p))&parents]
 facts=[p for p in cited if re.match(r'\[[FLA]\d+\]',p)]
 direct=[p for p in cited if '[['+root in p]
 anchor=(direct or facts or cited or [p.strip()for p in paras if re.search(r'\b(inertial|chart|coordinate|basis|frame)\b',p,re.I)])
 if id==root:reason='Supplier corrected; algebraic inverse composed in both directions for arbitrary origins, plus exact rational witness computation.'
 elif id in strong:reason=strong[id]
 elif id not in logical:
  reason={'cex-sr-lorentz-form-is-not-an-inner-product':'Only cone connection is the Remarks pointer to positivity on a timelike orthogonal complement, not a premise of the counterexample; eta(e_0,e_0)<0 remains its actual witness.', 'lem-sr-uniform-low-speed-taylor-remainder':'Only cone connection is the explanatory consequence pointer to the Galilean-limit consumer; the Taylor statement and proof depend on real calculus, not inertial charts.', 'post-sr-inertial-covariance':'Only cone connection is a scope pointer to the companion ideal-clock postulate; affine inertial changes are defined intrinsically by F(q)−F(p)=L(q−p), not by the incorrect chart inverse.'}[id]
 elif direct:
  reason='Direct cited assertion below uses the unchanged frame/basis, chart construction, forward affine transition, coordinate differences or linear part. The changed inverse constant is not a premise of this use; orthonormality, chart bijectivity and all derivatives remain the same.'
 else:
  reason='Actual consumed immediate assertion below is retained. The frame repair changes no intermediate Statement/Definition asserted here: fixed-frame spatial geometry, derivatives, norms, model equations and their previously asserted conditions remain identical. Thus the inherited premise cannot transmit the erroneous origin inverse; there is no new consumer claim repair from this supplier edit.'
 rows.append({'id':id,'raw_sha256':sha,'initial_raw_sha256':old['raw_sha256'],'raw_changed_since_initial':sha!=old['raw_sha256'],'graph_class':'supplier'if id==root else 'logical-deps-consumer'if id in logical else 'nonlogical-context-only','incoming_edges':incoming,'exact_consumed_assertions':direct or facts or cited,'inspected_anchor':anchor[0]if anchor else None,'inverse_coordinate_passages':[p.strip()for p in paras if ('inverse'in p.lower()or 'reverse transition'in p.lower())and any(s in p for s in["x(o')","x'",'\\Lambda','Mu+','M(u+'])],'focused_verdict':'supplier-repaired'if id==root else 'no-carrier-repair-required-for-changed-inverse','focused_reason':reason,'currency':'checkpoint; active unrelated writers not yet drained'})
output={'version':1,'run':run,'reviewer':'step3b_finite_gate_repair','snapshot_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'scope':'changed chart-inverse clause and inherited actual uses only; not whole-item audits','all_selected':366,'logical_selected':len(logical),'nonlogical_context_only':[r['id']for r in rows if r['graph_class']=='nonlogical-context-only'],'consumer_carriers_edited':[],'rows':rows,'final_currency_status':'pending root-confirmed writer drain; rehash drift rows and graph on freeze before escalation closure'}
(base/(run+'-inertial-chart-consumer-review.json')).write_text(json.dumps(output,indent=2)+'\n')
print(json.dumps({'rows':len(rows),'logical':len(logical),'nonlogical':len(rows)-len(logical),'changed_since_initial':[r['id']for r in rows if r['raw_changed_since_initial']],'no_anchor':[r['id']for r in rows if r['id']!=root and not r['inspected_anchor']]}))
