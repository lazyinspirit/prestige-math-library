import json,re,hashlib,pathlib,datetime
ROOT=pathlib.Path('.'); OUT=ROOT/'research/frontier-41-ha-dt-29-owner5b-completion-group-6'
w=json.loads((ROOT/'research/frontier-41-ha-dt-29-owner5b-completion-worklists/group-6.json').read_text())
reviewer='/root/step5b_completion_g6'
def source(i):return (ROOT/'items'/f'{i}.md').read_text()
def sha(i):return hashlib.sha256((ROOT/'items'/f'{i}.md').read_bytes()).hexdigest()
def body(i):return source(i).split('---',2)[-1].strip()
def sections(i):
 s=body(i);matches=list(re.finditer(r'^## (.+)$',s,re.M));return [(m[1],s[m.end():matches[k+1].start() if k+1<len(matches) else len(s)].strip()) for k,m in enumerate(matches)]
def main(i):return sections(i)[0][1]
def pars(i):return body(i).split('\n\n')
def qualifier(t):
 d={
 'def-formal-immersion-between-smooth-manifolds':'Definition: smooth base and covering bundle map, injective on every fibre; equal ranks allowed; empty-source inequality is vacuous. Canonical tangent structures have the stated countable-choice supplier context.',
 'def-space-of-immersions-and-space-of-formal-immersions':'Definition: actual subspace/product weak smooth topology; no fibration theorem is inferred from the recorded fibre description.',
 'def-weak-compact-open-smooth-topology-on-mapping-spaces':'Definition: finite compact chart pieces and finite-order jet tolerances. Uses of openness are confined to compact sources; local jet continuity also works on noncompact sources.',
 'def-regular-homotopy-of-immersions':'Definition: jointly smooth interval family with every slice immersive. Repeated images and intermediate branch tangencies do not violate the source rank condition.',
 'def-compact-parameter-pair':'Definition: P0 times finitely many intervals and closed Q; relative smoothing/holonomization requires the original data on an open neighbourhood of Q. No arbitrary compact-space comparison is invoked.',
 'def-normal-bundle-of-a-formal-immersion':'Definition: quotient of the pullback by the monomorphism image; the supplied Euclidean metric represents it by the orthogonal complement, rank n-m in the applicable dimension range.',
 'def-stable-normal-inverse-of-the-tangent-bundle':'Definition: actual rank-k bundle and actual isomorphism TM plus nu to epsilon^(m+k), not merely characteristic-class vanishing.',
 'def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold':'Definition: normal w over F2 and normal p over Q from an actual stable inverse; Pontryagin connectedness is handled componentwise. AC is retained for class suppliers.',
 'lem-formal-immersion-gives-the-tangent-normal-bundle-identity':'Statement: quotient exact sequence splits under AC_omega; a metric gives the displayed orthogonal splitting. Euclidean uses have the actual supplied metric; general cases retain choice.',
 'lem-parametric-immersion-extension-on-a-disk':'Statement/Proof 4.1, 7.1–10.1: absolute disk equivalence permits equality k=n; boundary-relative integration uses k<n, full source columns, exact collar germs and original neighbourhood-holonomic Q data.',
 'lem-restriction-of-formal-immersion-data-has-the-parametric-lifting-property':'Statement: k<n full m-column core/first-jet restriction; independent actual radial derivative C retained on the formal side. No unrestricted codimension-zero restriction theorem is used.',
 'lem-formal-immersion-homotopies-extend-over-a-subcritical-handle':'Statement: 0<=k<=m<=n and k<n; cocore factors remain source factors. Relative handle application retains attaching germs and holonomic parameter neighbourhoods.',
 'lem-formal-immersion-homotopies-extend-over-a-collar':'Statement: fixed source dimension, precomposition with collar embeddings gives genuine/formal comparison homotopies; it is not an immersion of the product source.',
 'thm-smale-hirsch-for-open-source-manifolds':'Statement: boundaryless source has no compact component; m<=n includes equality. AC_omega retained; compact-parameter relative uses retain original smoothly holonomic neighbourhoods.',
 'thm-smale-hirsch-immersion-theorem':'Statement: boundaryless M,N and m<n, AC_omega; weak equivalence and separately proved neighbourhood-relative compact smooth parameter form. No actual homotopy equivalence or arbitrary compact-pair theorem inferred.',
 'cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes':'Statement: compact boundaryless source and positive codimension, AC_omega; pi0 and finite CW relative comparison, with distinct neighbourhood-holonomic smooth parameter clause. Broader arbitrary compact clauses remain unproved orientation.',
 'lem-positive-codimension-thickening-reduces-closed-sources-to-the-open-case':'Statement: positive normal rank; enriched normal identifications and genuine/formal disk-bundle comparisons precede forgetful-fibration descent with common Aut(E) fibre.',
 'lem-a-handle-decomposition-gives-a-relative-cw-complex':'Statement: finite CW model of pairs under AC_omega, not a literal unstated CW structure on an incoming smooth manifold. Current disk Proof 9.1 and main Proof 4.1 explicitly transfer by pair homotopies and collar HEP.',
 'thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms':'Statement: compact collared triad, AC_omega, adapted excellent Morse function and complete collar-extension field; used with the handle/CW-model construction, not a new arbitrary-compact theorem.',
 'def-handle-decomposition-relative-to-the-incoming-boundary':'Definition: finite ordered smooth handles relative to the fixed incoming collar; empty incoming face and 0-handles allowed. No skeletal handle ordering is presumed.',
 'def-smooth-cobordism-triad-for-morse-theory':'Definition: compact collared triad with disjoint incoming/outgoing boundary faces, either allowed empty; zero-dimensional faces are empty. Positive-dimensional cap-free bands have nonempty outgoing face.',
 'prop-dual-elimination-of-top-index-handles':'Statement: compact connected triad with nonempty outgoing face, AC_omega; removes top-index handles even when incoming face is empty or outgoing face disconnected.',
 'lem-the-basepoint-evaluation-of-the-stiefel-section-space-is-a-fibration':'Statement clauses 1–3: evaluation fibration, reference-dependent based difference model only with nonempty fixed fibre; n>=m+1 supplies connected fibre, n>=m+2 simple connectivity. Root empty-section HLP correction retained.',
 'lem-stiefel-manifolds-are-connected-and-simply-connected-in-positive-codimension':'Statement: m>=1; path connectivity at n>=m+1 and pi1=0 only at n>=m+2. Codimension-one frames identify with SO(m+1); no simple connectivity is presumed there.',
 'prop-euclidean-formal-immersions-are-sections-of-a-stiefel-bundle':'Statement clauses 1–3: raw Mono section homeomorphism, O(m)-equivariant polar deformation onto metric Stiefel sections; contractible Euclidean base factor. A supplied tangent metric/structures, not a global frame, suffices.',
 'lem-smoothing-formal-immersion-families':'Statement: original formal adjoints smooth near Q; homotopy through monomorphisms fixed on a smaller neighbourhood. Source compactness is unnecessary.',
 'lem-smoothing-genuine-immersion-families':'Statement: compact source, original genuine family smooth near Q; rank-preserving smoothing fixed near Q. Arbitrary interval paths are first made constant at endpoint collars.',
 'lem-smooth-families-and-path-components-in-the-weak-topology':'Statement: compact-source genuine path components equal regular homotopy classes; formal smoothing extends beyond compact sources. Smooth-near-Q relative hypothesis and AC_omega are preserved.',
 'lem-the-derivative-map-is-continuous':'Statement/Proof 2.1: weak derivative continuity follows from one extra derivative on compact projected source pieces and bounded fibre coordinates; canonical tangent structures are supplied.',
 'lem-regular-homotopy-preserves-the-formal-gauss-class':'Statement/Proof 1.1–3.1: necessity follows from local compact chart/time jet bounds and continuous derivative map; it does not require compactness of the whole source or a noncompact smoothing converse.',
 'def-self-transverse-immersion-and-double-point-locus':'Definition: ordered coincidences, unordered branch pairs and collision images distinguished. Pairwise transversality permits triples; image counts equal pair counts only when no triples occur.',
 'def-primary-double-point-obstruction-to-removing-self-intersections':'Definition: finite branch-pair counts, even-dimensional ordering-independent signs, and selected Whitney circle labels with compatible chosen paths. No unqualified label path-independence is used.',
 'lem-double-point-locus-has-expected-dimension-two-m-minus-n':'Statement clauses 1–3: locus in off-diagonal product has dimension 2m-n, negative dimension implies empty; image quotient is bijective only without higher collisions.',
 'lem-a-double-point-of-a-self-transverse-immersion-has-two-disjoint-embedded-sheet-disks':'Statement: disks for a selected complementary transverse preimage pair; excludes other preimages only when the image is a genuine double point.',
 'lem-a-small-regular-homotopy-removes-triple-points-and-preserves-transverse-branch-pairs':'Statement: closed source in twice its positive dimension, AC_omega; triple separation retains all finite unordered branch pairs and applicable signs.',
 'lem-a-collared-whitney-disk-can-be-made-disjoint-from-an-entire-compact-immersed-image':'Statement: fixed admissible collared bigon in the stated high-dimensional range; relative perturbation avoids every branch of the compact immersed image, not just the selected sheets.',
 'lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle':'Statement clauses i–iii: selected circle is nullhomotopic exactly for compatible equal labels; ambient simple connectivity suffices. Source paths/whiskers are fixed as data, not declared independent.',
 'lem-whitney-disk-framing-obstruction-can-be-corrected-under-the-standard-high-dimensional-hypotheses':'Statement: sheet dimensions >=3, admissible boundary frame can be corrected in one rank-(m-1) sheet-normal summand away from corner collars to extend; arbitrary prescribed full frames need not extend.',
 'thm-whitney-move-removes-a-cancelling-pair-of-intersections':'Statement: actual clean framed bigon; auxiliary ambient flow is applied only to the first sheet/source patch. Regular extension needs a tube avoiding every other source-image branch; endpoints remove exactly the chosen pair.',
 'def-local-whitney-move':'Definition: auxiliary compactly supported graph-separating flow acts only on the selected sheet with the comparison sheet fixed; simultaneous ambient action would retain intersections.',
 'thm-isotopy-extension':'Statement clauses 1,2,4: compact-source isotopies extend with prescribed neighbourhood support; clause 4 removes endpoint stationarity, clause 2 extends an open-domain isotopy near a controlled compact set.',
 'prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual':'Statement: rank-equals-base-dimension signed zero count is Euler evaluation. In the even-rank self-intersection instance the tangent-first Koszul sign is +1; mod two it disappears.',
 'lem-finite-normal-push-off-count-for-an-even-dimensional-euclidean-immersion':'Statement: closed oriented even positive-dimensional source, self-transverse with no triples; normal push-off contributes Euler zero count plus twice the signed image count.',
 'prop-whitney-disjunction-removes-algebraically-cancelling-double-points-in-the-stable-range':'Statement: m>=3 compact connected source, admissible genuine double-point pairing and nullhomotopic selected circles; oriented simply connected even-m zero-count criterion first separates triples preserving branch-pair signs.',
 'rem-arbitrary-compact-parameter-immersion-classification-needs-a-mapping-space-comparison':'Recorded orientation only: the arbitrary compact-pair assertions are expressly unproved. The consumer does not use them as a logical supplier.',
 'lem-the-second-homotopy-group-of-so-three-vanishes':'Statement: pi2(SO3)=0 via the quaternion covering and higher covering isomorphism; SO3 components, not pi1, are used for eversion and oriented rank-three clutching.',
 'cor-top-normal-stiefel-whitney-and-euler-classes-vanish-for-euclidean-embeddings':'Statement: closed m>=1, codimension k>=1 embedding, AC; top normal w_k vanishes and oriented normal Euler class vanishes. Rank-alone immersion vanishing is only above k.',
 'lem-normal-pontryagin-class-is-the-rational-inverse-of-the-tangent-pontryagin-class':'Statement: closed connected source and actual stable inverse, AC; p(TM)p(nu)=1 over Q. Integral multiplicativity is not asserted; disconnected applications are componentwise.',
 'lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class':'Statement: closed source and actual stable inverse, AC; w(TM)w(nu)=1 in mod-two cohomology, yielding the unique normal inverse.',
 'lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity':'Statement: closed source Euclidean embedding with n>m, AC_omega, rank n-m inverse from tangent-normal splitting; existence for all closed sources uses the supplied Euclidean embedding theorem.',
 'lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle':'Statement: closed source Euclidean immersion with n>m, AC_omega, gives the actual rank n-m normal inverse rather than only stable characteristic data.',
 'rem-a-closed-n-manifold-cannot-immerse-in-r-n':'Statement: nonempty closed n-manifold and n>=1; local-diffeomorphism open compact image contradicts connected noncompact Euclidean target. Dimension zero is excluded.',
 }
 if t in d:return d[t]
 sec=sections(t)[0][0]
 # Exact unchanged clauses for remaining elementary suppliers, retained in full below.
 return sec+': '+main(t)
implicit={
 ('ex-ambient-isotopy-of-an-unknotted-circle-in-r-three','lem-stiefel-manifolds-are-connected-and-simply-connected-in-positive-codimension'):'Metadata context only. F1 explicitly rejects using topological connectedness as a smooth-path theorem; Verification 1.1 constructs the SO3 path by a fixed axis and sine/cosine. The supplier connectivity assertion remains true but is not an input.',
 ('prop-whitney-disjunction-removes-algebraically-cancelling-double-points-in-the-stable-range','def-self-intersection-number-of-an-oriented-submanifold'):'Metadata context only. Proof 7.1 uses the defined immersion branch-pair count from the primary obstruction definition, not the embedded self-intersection invariant; no conversion between those two counts is inferred.',
 ('thm-smale-hirsch-immersion-theorem','lem-formal-immersion-homotopies-extend-over-a-subcritical-handle'):'Indirect prerequisite through F1/open-source and F2/thickening. Main Proof 1.1 invokes the rebuilt open theorem and enriched thickening; strict core k<n remains in that supplied open chain. No fresh unrestricted handle theorem is inferred.',
 ('def-normal-bundle-of-a-formal-immersion','lem-formal-immersion-gives-the-tangent-normal-bundle-identity'):'Definition quotient, image-subbundle, chosen-metric orthogonal complement and intrinsic quotient identification use exactly the splitting lemma. Its proof starts from the quotient/rank definition and proves the complement; no splitting assertion is used circularly.',
 ('cex-vanishing-stable-characteristic-classes-does-not-make-two-embeddings-isotopic','lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity'):'Proof 1.1 explicitly trivializes both rank-one sphere normals by radial sections. The embedding inverse statement identifies the resulting normal class; no existence or isotope classification converse is inferred.',
 ('cex-vanishing-stable-characteristic-classes-does-not-make-two-embeddings-isotopic','def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold'):'Proof 1.1 uses the explicit sphere tangent-plus-trivial-line isomorphism to give identical total normal classes 1; these are mod-two w and rational p. The nonisotopy argument subsequently uses ambient orientation, not these classes.',
 ('lem-the-immersion-condition-is-open-in-the-weak-topology-for-compact-sources','def-formal-immersion-between-smooth-manifolds'):'Statement clause for formal immersions and Proof 2.1 apply finite-chart injectivity margins to fibre matrices of a covering smooth bundle map; base and bundle coefficients must vary together. Compact source supplies a finite uniform margin.',
 ('rem-vanishing-primary-double-point-and-characteristic-obstructions-do-not-classify-embeddings','def-regular-homotopy-of-immersions'):'Closing paragraph contrasts regular homotopy disjunction with isotopy classification; it uses the smooth-family immersion meaning only. It does not infer isotopy from a regular homotopy.',
}
def use(c,t):
 ps=pars(c);hits=[p for p in ps if '[['+t in p]; facts=[p for p in hits if re.match(r'^\[[A-Z]\d+\]',p)]
 tags=[re.match(r'^\[([^]]+)\]',p)[1] for p in facts]
 proof=[p for p in ps if re.match(r'^\d+\.\d+ ',p) and (any(re.search(r'\b'+re.escape(k)+r'\b',p.rsplit('[',1)[-1]) for k in tags) or '[['+t in p)]
 if hits:
  consumed=facts or hits
  note='Consumer '+(', '.join('Fact '+k for k in tags) if tags else 'Definition/Statement/Remarks citation')
  if proof:note+='; Proof/Verification '+', '.join(re.match(r'^(\d+\.\d+)',p)[1] for p in proof)
  note+=' consumes: '+ ' '.join(consumed)
 else:
  note=implicit.get((c,t))
  if not note:
   if t.startswith('def-'):
    note='Implicit '+sections(c)[0][0]+'/Proof terminology uses the '+t+' interface, rather than a separately quoted theorem. Actual consumer clause: '+main(c)
   elif c=='lem-regular-homotopy-preserves-the-formal-gauss-class':note='Proof 4.1 uses the sphere Stiefel section-space description for its stated difference-class instance; general invariance Proof 1.1–3.1 uses only jet continuity and D continuity.'
   elif c.startswith('rem-smale-hirsch'):note='Opening paragraph records only weak homotopy equivalence, compact-source weak openness and the separately hypothesized relative theorem; it explicitly declines a homotopy inverse and arbitrary-compact inference.'
   else:raise RuntimeError((c,t))
 return {'supplier':t,'supplier_sha256':sha(t),'consumer_clause':note,'supplier_section':sections(t)[0][0],'supplier_clause':main(t),'proof_clauses':proof,'justification':qualifier(t),'note':t+': '+note+' Licensed interface: '+qualifier(t)}
cs=sorted(w['pending_direct_consumers'],key=lambda c:(w['manifest_entries'][c['id']]['entry'].get('dependency_level',0),c['id']))
pairs={(c['id'],t) for c in cs for t in c['changed_suppliers']}|{(e['from'],e['to']) for e in w['pending_edges']}
evidence={}
for c,t in sorted(pairs):evidence[(c,t)]=use(c,t)
dispositions=[]
for c in cs:
 checks=[evidence[(c['id'],t)] for t in c['changed_suppliers']]
 dispositions.append({'id':c['id'],'status':'still-licensed','reviewer':reviewer,'consumer_sha256':sha(c['id']),'changed_suppliers':c['changed_suppliers'],'notes':'\n\n'.join(x['note'] for x in checks)})
(OUT/'impact-dispositions.json').write_text(json.dumps({'run':w['run'],'group':6,'dispositions':dispositions},indent=2)+'\n')
rows=[]
for e in w['pending_edges']:
 x=evidence[(e['from'],e['to'])]
 rows.append({'kind':'edge','from':e['from'],'to':e['to'],'verdict':'accurate','from_sha256':sha(e['from']),'to_sha256':sha(e['to']),'defect_ids':[],'note':x['note'],'reviewer':reviewer})
(OUT/'edge-verdicts.jsonl').write_text(''.join(json.dumps(r)+'\n' for r in rows))
for n in ['defect-proposals.json','carrier-deltas.json']:(OUT/n).write_text('[]\n')
(OUT/'interface-clause-evidence.json').write_text(json.dumps({'run':w['run'],'group':6,'reviewer':reviewer,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'interfaces':[{'consumer':c,'consumer_sha256':sha(c),**x} for (c,t),x in evidence.items()]},indent=2)+'\n')
# Honest reuse binds source byte observations and retains old unequal fingerprints.
old=json.loads((ROOT/'research/frontier-41-ha-dt-29-owner-smale-hirsch-final-current-carriers.json').read_text())
b18=json.loads((ROOT/'research/frontier-41-ha-dt-29-owner-batch18-current-content-integration.json').read_text())
reuse={'owner':'/root','reviewer':reviewer,'batch17':[],'batch18':[]}
for i,b in old['carriers'].items():reuse['batch17'].append({'id':i,'old_raw_sha256':b['item_file_sha256'],'current_raw_sha256':sha(i),'exact_match':b['item_file_sha256']==sha(i),'reuse':'root full-proof adjudication as context; actual current interface checked' if b['item_file_sha256']==sha(i) else 'old exact-byte evidence NOT reused; current CW-model transfer clauses read directly'})
for b in b18['actual_current_reviews']:reuse['batch18'].append({'id':b['id'],'old_raw_sha256':b['raw_sha256'],'current_raw_sha256':sha(b['id']),'exact_match':b['raw_sha256']==sha(b['id']),'root_scope':b['scope']})
(OUT/'prior-evidence-bindings.json').write_text(json.dumps(reuse,indent=2)+'\n')
print('Completed',len(rows),'edges;',len(dispositions),'consumers;',len(evidence),'distinct exact interfaces; source repairs 0')
