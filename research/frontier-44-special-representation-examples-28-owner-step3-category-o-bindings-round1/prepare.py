import pathlib,json,hashlib,datetime,yaml,copy
r='frontier-44-special-representation-examples-28';out=pathlib.Path(__file__).parent
ids=['def-regular-integral-dot-orbit-labelling-convention','lem-projective-verma-multiplicities-equal-soergel-standard-ranks','thm-projective-verma-multiplicities-are-kazhdan-lusztig-values-at-one','rem-the-full-ext-version-requires-the-koszul-grading-of-category-o'];guards=[]
for id in ids:
 for p in [pathlib.Path('items')/(id+'.md'),pathlib.Path('research')/(r+'-step3b-review-'+id+'.json')]:
  data=p.read_bytes();q=out/'before'/p.name;q.write_bytes(data);guards.append({'path':str(p),'sha256':hashlib.sha256(data).hexdigest(),'before':str(q)})
manifest=pathlib.Path('research')/(r+'-batch-14.pages.json');m=json.load(open(manifest));(out/'before'/manifest.name).write_bytes(manifest.read_bytes());guards.append({'path':str(manifest),'sha256':hashlib.sha256(manifest.read_bytes()).hexdigest(),'before':str(out/'before'/manifest.name)})
did=ids[0];p=pathlib.Path('items')/(did+'.md');txt=p.read_text();newdeps=['lem-the-type-a-standard-character-is-multiplicative','def-normalized-type-a-hecke-algebra-and-its-bar-involution']
oldline=next(l for l in txt.splitlines() if l.startswith('deps:'));new=oldline[:-1]+', '+', '.join(newdeps)+']';txt=txt.replace(oldline,new,1)
start=txt.index('(iv) **Soergel label dictionary.**')
clause=r'''(iv) **Soergel label and character dictionary.** Write $R_x$ for the
polynomial standard graph bimodule supported at $x$, and $B_x$ for the
normalized indecomposable polynomial Soergel bimodule, which is generally not a
standard graph bimodule. With right reduction $\bar B=B\otimes_S\mathbb C$
and left coinvariant-module values of $V$, the projective dictionary is
$$V(P(w\cdot\lambda))\cong\bar B_{w^{-1}}$$
([[thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules]]).
The graph label $x$ corresponds to the standard
$\Delta(x^{-1}\cdot\lambda)$. The individual support ranks are measured on the
polynomial lift before reduction, as in
[[prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v]];
no separated graph-support filtration of the reduced module is asserted.

For degree bookkeeping use precisely the standard-generator normalization of
[[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]:
$\Delta_x(d)=R_x(d-\ell(x))$, and $r_{x,d}(B)$ counts these normalized polynomial
standard layers. Thus the coefficient polynomial is
$$m_x(B;v):=\sum_d r_{x,d}(B)v^d,\qquad h_\Delta(B)=\sum_xm_x(B;v)\widetilde T_x,\qquad\widetilde T_x=v^{\ell(x)}T_x.$$
Here $\widetilde T_x$ is the normalized **standard** Hecke element $H_x$ used
in clause (iii) and
[[def-normalized-type-a-hecke-algebra-and-its-bar-involution]]. The published
Soergel split-Grothendieck-ring convention instead names its simple
Kazhdan--Lusztig generators $H_i=v(T_i+1)=\widetilde T_{s_i}+v$; these must not
be confused with the standard element $H_{s_i}=vT_i$
([[thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra]]).
The standard-character supplier
[[lem-the-type-a-standard-character-is-multiplicative]] identifies $h_\Delta$
with that split-Grothendieck-ring isomorphism. This records the coefficient
normalization, and does not infer the image of a general indecomposable $B_x$
by multiplying simple generators. In particular the character theorem must be
used to identify $h_\Delta(B_x)$ with $\underline H_x$; a product of simple
Soergel classes is a Bott--Samelson class and need not be $[B_x]$.
The inverse labels and all rank comparisons above use auxiliary polynomial
gradings only; forgetting them gives the ordinary projective dictionary.
'''
# clause(iv) is the final complete Definition portion in the authentic carrier
assert '## ' not in txt[start:];txt=txt[:start]+clause+'\n';(out/'proposed/items'/(did+'.md')).write_text(txt)
tid=ids[2];txt=(pathlib.Path('items')/(tid+'.md')).read_text();line=next(l for l in txt.splitlines() if l.startswith('deps:'));txt=txt.replace(line,line[:-1]+', lem-the-type-a-standard-character-is-multiplicative]',1)
a=txt.index('[F3] The split Grothendieck group');b=txt.index('\n\n[F4]',a)
f3=r'''[F3] The actual standard-character normalization ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]], [[lem-the-type-a-standard-character-is-multiplicative]], [[thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra]], [[def-regular-integral-dot-orbit-labelling-convention]]): $r_{x,d}(B)$ counts the normalized standard layer $\Delta_x(d)=R_x(d-\ell(x))$ before reduction, so $h_\Delta(B)=\sum_xm_x(B;v)\widetilde T_x$ with $m_x(B;v)=\sum_dr_{x,d}(B)v^d$ and $\widetilde T_x=v^{\ell(x)}T_x=H_x$ in the normalized standard Hecke basis of [F4]. The character $h_\Delta$ equals the split-Grothendieck-ring isomorphism. Its simple value is $v(T_i+1)=H_{s_i}+v$, rather than the standard $H_{s_i}$; multiplying these simple values computes a Bott--Samelson character, not in general the character of an indecomposable.'''
txt=txt[:a]+f3+txt[b:];a=txt.index('1.2 The character theorem');b=txt.index('\n\n2.1',a)
step=r'''1.2 The character theorem [F2] gives $h_\Delta(B_{w^{-1}})=\underline H_{w^{-1}}=\sum_xp_{x,w^{-1}}H_x$. By the coefficient formula of [F3], the left side is $\sum_xm_x(B_{w^{-1}};v)H_x$, where $m_x(B_{w^{-1}};v)=\sum_dr_{x,d}(B_{w^{-1}})v^d$ uses the normalized polynomial standard layers before reduction. Comparing coefficients in the standard Hecke basis of [F4] yields $m_x(B_{w^{-1}};v)=p_{x,w^{-1}}(v)$ for every $x$, as an identity of Laurent polynomials. This comparison uses the character formula; it does not identify an indecomposable class with a product of simple classes. [F2, F3, F4]'''
txt=txt[:a]+step+txt[b:];(out/'proposed/items'/(tid+'.md')).write_text(txt)
# Complete guarded batch14 successor mirrors only actual revised clause and theorem proof plan.
for pg in m:
 for x in pg['items']:
  if x['id']==did:
   x['deps'].extend(z for z in newdeps if z not in x['deps']); x['statement']=x['statement']+' The coefficient dictionary distinguishes normalized polynomial standards R_x(d-ell(x)) from indecomposable B_x: h_Delta(B)=sum_x(sum_d r_{x,d}(B)v^d) v^ell(x)T_x. The normalized standard H_x is v^ell(x)T_x; the split-K0 simple generator is H_i=v(T_i+1)=H_{s_i}+v, and products of simple generators need not be indecomposable classes. All support ranks are pre-reduction and projective labels are inverted.'
  if x['id']==tid:
   x['deps'].append('lem-the-type-a-standard-character-is-multiplicative') if 'lem-the-type-a-standard-character-is-multiplicative' not in x['deps'] else None
   x['strategy']='Apply the pre-reduction rank comparison to B_{w^-1}; use the actual standard-character formula h_Delta(B)=sum_x m_x(B;v) H_x, m_x=sum_d r_{x,d}v^d, with normalized layers Delta_x(d)=R_x(d-ell(x)), and the character theorem h_Delta(B_{w^-1})=underline H_{w^-1}. Coefficient comparison in the normalized STANDARD basis gives m_x=p_{x,w^-1}. Evaluate x=y^-1 at v=1, use simultaneous inversion and p_yw(1)=P_yw(1). Preserve all support/total-value/no-Koszul clauses. The split-K0 simple KL generator v(T_i+1) is not the standard vT_i; do not infer an indecomposable image by multiplying simple generators.'
(out/'proposed/batch-14.pages.json').write_text(json.dumps(m,indent=2)+'\n')
# Snapshot actual supplier absence independently; manifests are context, not purported authored proofs.
suppliers=[]
for id in ['thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules','prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v','thm-soergels-character-conjecture']:
 p=pathlib.Path('items')/(id+'.md');suppliers.append({'id':id,'path':str(p),'present':p.exists(),'sha256':hashlib.sha256(p.read_bytes()).hexdigest() if p.exists() else None,'classification':'authoring timing obligation, not established mathematical prerequisite gap'})
e={'version':1,'run':r,'reviewer':'/root/repair_step3_soergel_examples_scope','phase':'step3b-category-o-binding-first-pass','round':1,'maximum_rounds':2,'distinct_from_completed_B_scope_repair':True,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'guards':guards,'changed_ids':[did,tid],'unchanged_review_subjects':[ids[1],ids[3]],'supplier_item_changes':[],'pending_actual_suppliers':suppliers,'proposed':[{'path':str(p),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()} for p in (out/'proposed').rglob('*') if p.is_file()],'full_theorem_statement_unchanged':True,'final_actual_supplier_reconciliation_required':True,'scope':'research-only proposal; no live native writer files or receipts changed'}
(out/'proposal.json').write_text(json.dumps(e,indent=2)+'\n');print('prepared two guarded consumer corrections; three actual producer carriers still timing-pending')
