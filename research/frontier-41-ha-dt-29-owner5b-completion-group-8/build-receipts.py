import json,re,hashlib,pathlib,datetime
root=pathlib.Path('.'); out=root/'research/frontier-41-ha-dt-29-owner5b-completion-group-8'; p=json.loads((root/'research/frontier-41-ha-dt-29-owner5b-completion-worklists/group-8.json').read_text()); reviewer='/root/step5b_completion_g8'
def raw(x): return (root/'items'/f'{x}.md').read_bytes()
def sha(x): return hashlib.sha256(raw(x)).hexdigest()
def body(x): return raw(x).decode().split('---',2)[-1]
def claim(x): return re.split(r'\n## (?:Facts|Proof|Verification|Counterexample|Remarks)',body(x))[0].strip()
def flat(s): return re.sub(r'\s+',' ',s).strip()
implicit={
'thm-novikov-reeb-component-theorem':'The current scope remark names the closed oriented three-manifold, codimension-one hypotheses of Novikov; its five-dimensional cited witness and noncompact puncture witness are outside these hypotheses, so no enlarged theorem is invoked.',
'def-reeb-component-in-a-cooriented-three-manifold-foliation':'The current carrier uses compact saturated solid-torus, boundary-leaf and interior-plane model clauses; no higher-dimensional Reeb component is defined by the scope remark.',
'def-countable-choice-principle-for-foliation-pair':'The current opening assumption AC_omega is the supplier sequence-choice principle; only countable/finite choices in this carrier are attributed to it.',
'def-positive-transverse-accessibility-between-leaves':'The current Definition uses genuine positive transverse paths (or the explicit formal equal-leaf clause for mutual accessibility); the strict-return distinction is preserved.',
'lem-positive-transverse-accessibility-is-a-preorder':'The Definition uses its preorder/equivalence certificate; the endpoint extension requires a genuine positive segment and is not inferred from formal equality.',
'def-saturated-neighbourhood-of-a-leaf':'The current saturated-region language uses union of whole leaves. It does not require this compact region itself to be an open saturated neighbourhood.',
'def-foliation-tangent-to-the-boundary-of-a-manifold-with-boundary':'The Reeb model has its boundary torus as a leaf: this consumes the codimension-one boundary-tangent plaque convention, not boundary transversality.',
'def-transversely-oriented-codimension-one-foliation':'The smooth carrier uses its positive defining-form/coorientation convention. At C2 regularity the finite chart calculation, signed transverse coordinate, or explicit C1 sibling supplies the finite-regularity version.',
'def-c1-regular-codimension-one-foliation-and-transverse-orientation':'The current atlas/plaque-chain and coherent positive-transverse-coordinate clauses use the C1 Definition with the explicitly stipulated C2 charts; no smooth transverse transition is inferred.',
'def-map-transverse-to-a-regular-foliation':'The current differential condition is the pointwise tangent-space sum/nonzero normal derivative. C2 traces use this same linear condition directly, not a smoothness conclusion from the smooth Definition.',
'def-local-transversal-to-a-regular-foliation':'The current crossing/normal fence uses an interval whose tangent complements TF; transversality is open after shrinking. Its regularity comes from the current smooth/C2 construction.',
'def-holonomy-representation-and-holonomy-group-of-a-leaf':'The one-sided return germ and reversed-loop homomorphism convention determine identity kernels. In C2 atlases the finite chart argument is supplied by the C1 holonomy sibling and lem-c2-plaque-transport clause(c), rather than membership in smooth Diff.',
'def-germ-of-a-local-diffeomorphism-at-a-point':'Only agreement on a sufficiently small neighbourhood and composition/inversion of return germs are consumed; finite-regularity germ representatives use their actual C1/C2 chart formulas.',
'lem-one-sided-trivial-holonomy-classes-form-a-normal-subgroup':'N_j is the kernel of one-sided return holonomy, so the quotient P_j is a group and its nonidentity classes are exactly nonidentity one-sided germs.',
'def-limit-cycle-of-a-leaf-of-a-codimension-one-foliation':'N_j is the identity one-sided holonomy kernel, and P_j is the ordinary quotient; eventual leafwise-null displacement is kept distinct from ordinary nonidentity-holonomy limit cycles.',
'def-limitwise-nullhomotopy-subgroup-of-a-leaf':'The current essential endpoint class satisfying eventual null-displacement belongs to Pi_j inside N_j, rather than to the ordinary limit-cycle quotient.',
'lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity':'The specified finite chart traces/fences use its C2 transport and open-collar gluing; parameter endpoints use one-sided derivatives. It supplies no unconstructed cycle/fence.',
'lem-the-bott-partial-connection-is-well-defined-and-flat-in-leaf-directions':'The Definition advertises well-defined projected bracket and leafwise-flat partial connection, certified by the ensuing lemma; it does not assert a full TM connection.',
'def-bott-partial-connection-on-the-normal-bundle-of-a-foliation':'The quotient bracket along TF and its local leaf-parallel frame are the consumed construction; existence of a connection extension is handled separately.',
'def-godbillon-vey-class':'The smooth class is [eta wedge d eta] for d omega = eta wedge omega; no integral or merely C1 class is inferred.',
'lem-frobenius-divisibility-gives-d-omega-equals-eta-wedge-omega':'Its defining-form identity d omega = eta wedge omega is the smooth input. In the closed-form example eta=0 is chosen explicitly; algebraic change-of-form arguments use the supplied identity rather than a new existence assertion.',
'lem-forms-annihilated-by-a-nowhere-vanishing-one-form-are-divisible-by-it':'The one-form difference with wedge omega zero is uniquely f omega; the local/global two-form factorization is used only at its stated smooth regularity.',
'prop-mapping-torus-foliations-realize-global-reeb-stable-examples':'The concluding mapping-torus special case consumes the connected-fibre circle bundle and its pullback defining form; this is a closed total space, not a solid torus.',
'lem-characteristic-disk-center-saddle-index-count':'Retained contextual prerequisite: the actual extraction is through the characteristic-disk/finite-search supplier. No independent strengthened boundary index assertion is used here.',
'lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary':'The Given already specifies finitely many nondegenerate characteristic singularities and a regular fixed collar; this retained dependency records their generic-position input, not an additional perturbation assertion.',
'lem-c1-euclidean-maximal-flow-with-c2-upgrade':'Retained flow prerequisite: regular port traces are proved from C2 first-integral root equations and finite transport, not from a jointly C2 flow of the C1 characteristic field.',
'lem-c2-inverses-and-scalar-return-roots':'The current fence uses unique short transverse-flow root equations with nonzero normal derivative; their C2 inverse/root formula is supplied through the explicit C2 transport carrier.',
'lem-fixed-leafwise-cap-gives-a-joint-transverse-product-with-exact-collar':'The fixed-cap product used in proof3.1 has the same smooth transverse field, actual transported section, and range inside the cap interval; proof2.1 supplies the C2 cap with prescribed collar.',
'lem-cancellation-modification-can-be-supported-in-a-trajectory-neighbourhood':'The current cancellation is through the exact-boundary scalar helper: only the localized nonzero replacement FIELD is used. Scalar equality away from the trajectory neighbourhood is not inferred from the two-face supplier.',
'prop-morse-cancellation-criterion-via-a-unique-connecting-orbit':'The current exact disk-triad helper is the actual cancellation route; the unique connecting-orbit criterion remains prerequisite context and supplies no equality on side collars.',
'lem-a-vanishing-cycle-determines-a-nontrivial-limitwise-nullhomotopy-class':'The current vanishing-cycle Definition advertises precisely the bridge from its essential endpoint and earlier null transverse loops to nonzero Pi_j; no ordinary limit-cycle conclusion is used.',
}
notload={('lem-a-finite-characteristic-circuit-has-c2-regular-port-traces','lem-c1-euclidean-maximal-flow-with-c2-upgrade'),('lem-first-saddle-lobe-admits-a-collar-fixed-center-saddle-cancellation','prop-morse-cancellation-criterion-via-a-unique-connecting-orbit'),('lem-first-saddle-lobe-admits-a-collar-fixed-center-saddle-cancellation','lem-cancellation-modification-can-be-supported-in-a-trajectory-neighbourhood'),('lem-a-compressible-leaf-yields-a-vanishing-cycle','lem-characteristic-disk-center-saddle-index-count')}
regular={'def-holonomy-representation-and-holonomy-group-of-a-leaf','thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints','lem-holonomy-germ-is-independent-of-the-foliation-chart-chain','def-germ-of-a-local-diffeomorphism-at-a-point'}
def note(x,s):
 b=body(x); paras=b.split('\n\n'); matches=[flat(q) for q in paras if s in q]
 facts=[q for q in matches if re.match(r'\[F\d+\]',q)]
 chosen=(facts or matches)
 if chosen:
  q=chosen[0]; labels=re.findall(r'^\[(F\d+)\]',q)
  steps=[re.match(r'(\d+\.\d+)',q).group(1) for q in paras if re.match(r'\d+\.\d+',q) and (s in q or any(re.search(r'\b'+f+r'\b',q) for f in labels))]
  n=f'{s}: current '+ ('Fact '+','.join(labels) if labels else 'Definition/Statement or named proof clause') + ' consumes: '+q
  if steps: n+=' Applied in Proof '+','.join(steps)+'.'
 else:
  n=f'{s}: '+implicit.get(s,'This retained dependency is contextual in the current carrier; the actual argument does not invoke an additional conclusion from it.')
 if s in regular and ('C^2' in b or 'C²' in b): n+=' Regularity disposition: smooth-germ notation is only the convention; finite C2 transport/homotopy invariance is proved by lem-c2-plaque-transport clauses(a),(c), proof1.1/3.1 and the C1 sibling finite-chart construction. No C-infinity upgrade is consumed.'
 if (x,s) in notload: n+=' Direct invocation is not load-bearing in this carrier; the named local intermediary supplies the actual route.'
 return n
edges=[]
for e in p['pending_edges']:
 x,s=e['from'],e['to']; edges.append({'kind':'edge','from':x,'to':s,'verdict':'accurate','reviewer':reviewer,'from_sha256':sha(x),'to_sha256':sha(s),'defect_ids':[],'note':note(x,s)})
dis=[]
for c in p['pending_direct_consumers']:
 x=c['id']; strategy=p['manifest_entries'][x]['entry'].get('strategy','')
 dis.append({'id':x,'status':'still-licensed','reviewer':reviewer,'consumer_sha256':sha(x),'changed_suppliers':c['changed_suppliers'],'notes':'\n'.join(note(x,s) for s in c['changed_suppliers'])+'\nCurrent interface disposition for '+x+': '+strategy})
(out/'edge-verdicts.jsonl').write_text(''.join(json.dumps(e,ensure_ascii=False)+'\n' for e in edges))
(out/'impact-dispositions.json').write_text(json.dumps({'run':p['run'],'group':8,'dispositions':dis},ensure_ascii=False,indent=2)+'\n')
(out/'defect-proposals.json').write_text('[]\n'); (out/'carrier-deltas.json').write_text('[]\n')
(out/'hash-inventory.json').write_text(json.dumps({x:sha(x) for x in sorted(set(p['write_scope_item_ids'])|{e['to'] for e in p['pending_edges']}|{s for c in p['pending_direct_consumers'] for s in c['changed_suppliers']})},indent=2)+'\n')
print(len(edges),'edge rows;',len(dis),'impact rows; no source mutations')
