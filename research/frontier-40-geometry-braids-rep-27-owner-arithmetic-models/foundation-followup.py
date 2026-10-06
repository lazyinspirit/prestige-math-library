import json,pathlib
f=pathlib.Path('research/frontier-40-geometry-braids-rep-27-batch-27.pages.json');p=json.loads(f.read_text());by={x['id']:x for pg in p for x in pg['items']}
x=by['thm-weil-extension-rational-map-into-group-scheme'];s=x['statement'];s=s.replace('Let $S$ be a normal Noetherian base scheme','Let $S$ be a regular Noetherian base scheme');s=s[:s.index(' The diagonal argument requires')]+''' For the local diagonal contradiction, regularity of S and the published flat-local regularity ascent lemma show that Z and Z×_S Z have regular local rings: the fibre rings of a smooth map are geometrically regular. A pure codimension-one closed subset in such a local ring is the zero locus of a product f of finitely many irreducibles, by the published regular-local UFD theorem. Its restriction to the diagonal is a nonzero element, since the exceptional intersection has codimension at least two there, and is a nonunit if the point belongs to the intersection. The principal ideal theorem then gives a codimension-one component of that intersection, contradiction. This regular-base specialization of BLR 4.4/1 avoids an unproved general normal-base dimension assertion and suffices for every commissioned Dedekind/DVR consumer. On Z'=V∩(Z×_S U) the actual extension is v(z_1,z_2)u(z_2), not v alone. Smoothness makes pr_1 flat; each geometric fibre meets Z' since V contains the diagonal and U is fibrewise dense. It is therefore faithfully flat, and corrected morphism descent finishes the proof. Affine H is finite type over an affine base neighbourhood, as required by the corrected affine-target lemma.''';x['statement']=s;x['deps']+=['lem-ag-flat-local-regularity-ascent-descent','thm-ag-standard-smooth-geometric-regularity','thm-nonaffine-regular-local-ring-is-ufd','thm-krull-principal-ideal-theorem','thm-regular-local-rings-are-normal']
x=by['lem-good-reduction-stable-under-base-change'];x['statement']=x['statement'].replace('let $S\'\\to S$ be a morphism of Dedekind schemes','let $S\'\\to S$ be a dominant morphism of Dedekind schemes')
# AC/DC inherited by the dual theorem through projectivity and its local square supplier.
x=by['thm-abelian-variety-dual-and-polarization'];x['statement']=x['statement'].replace('Assume the Axiom of Choice.','Assume AC and DC as inherited from projectivity and the supplied cohomology machinery.');x['deps']+=['def-dependent-choice']
for x in by.values():x['deps']=list(dict.fromkeys(x['deps']))
remaining=list(p[0]['items']);out=[];done=set()
while remaining:
 ready=[x for x in remaining if all(d not in by or d in done for d in x['deps'])]
 if not ready:raise Exception('cycle')
 for x in ready:
  x['dependency_level']=max([by[d]['dependency_level']+1 for d in x['deps'] if d in by]+[0]);out.append(x);done.add(x['id']);remaining.remove(x)
p[0]['items']=out
for x in p[1]['items']:x['dependency_level']=max([by[d]['dependency_level']+1 for d in x['deps'] if d in by]+[0])
f.write_text(json.dumps(p,indent=2,ensure_ascii=False)+'\n')
