from pathlib import Path
import shutil,json,yaml,re,hashlib,os
root=Path('.')
base=Path('research/physics-non-fluid-129-2026-10-21-r2-owner-qft-green-maps')
run='physics-non-fluid-129-2026-10-21-r2'
manifest=Path(f'research/{run}-batch-68.pages.json')
pages=json.loads(manifest.read_text())
ids=[x['id'] for p in pages for x in p.get('items',[])+p.get('examples',[])]
paths=[Path('items')/(i+'.md') for i in ids]+[manifest,Path(f'research/{run}-batch-68.proof-contracts.json'),Path(f'research/{run}-batch-68.coverage.json'),Path(f'research/{run}-batch-68.notes.md'),Path('library/quantum-field-theory-mathematics/qftx-local-algebras.md')]
for p in paths:
 d=base/'before'/p;d.parent.mkdir(parents=True,exist_ok=True)
 if d.exists(): raise RuntimeError('Preimage already exists '+str(d))
 shutil.copyfile(p,d)
for p in (base/'proposed/items').glob('*.md'): shutil.copyfile(p,Path('items')/p.name)
p=Path('items/lem-qftx-green-propagator-symplectic-quotient.md');s=p.read_text()
s=s.replace('  - def-dependent-choice\n','').replace('  def-dependent-choice: mathematical-premise\n','')
s=s.replace('lem-gr-globally-hyperbolic-causal-structure','lem-qftx-compact-green-support-overlap')
s=s.replace('Assume Countable Choice and Dependent Choice. Let $(M,g,N,P,E_+,E_-)$ be a Green-data interface of [[def-qftx-green-hyperbolic-interface]].','Assume Countable Choice. Let $(M,g,N,P,E_+,E_-)$ be a Green-data interface.')
s=s.replace('**Given:** Countable Choice, Dependent Choice,','**Given:** Countable Choice,')
s=s.replace('[A1] Assume $\\mathrm{AC}_\\omega$ and Dependent Choice, with the exact principles of [[def-countable-choice]] and [[def-dependent-choice]].','[A1] Assume $\\mathrm{AC}_\\omega$, with the exact principle of [[def-countable-choice]].')
s=s.replace('[F2] [[lem-qftx-compact-green-support-overlap]] clause (b): for compact $K_1,K_2\\subseteq M$, $J^+(K_1)\\cap J^-(K_2)$ is compact.','[F2] [[lem-qftx-compact-green-support-overlap]]: every closed subset of $J^+(K_1)\\cap J^-(K_2)$, for compact $K_1,K_2$, is compact, using only finite compact-diamond enclosures under Countable Choice.')
s=s.replace('Their supports meet in the compact set $C:=J^-(\\operatorname{supp}f)\\cap J^+(\\operatorname{supp}h)$, compact by [F2].','Their supports meet in the closed set $C:=\\operatorname{supp}u\\cap\\operatorname{supp}v$, contained in $J^-(\\operatorname{supp}f)\\cap J^+(\\operatorname{supp}h)$ and compact by [F2].')
s=s.replace('By [F2], this intersection is compact, so the smooth function $u$ is compactly supported.','Its closed support is compact by [F2], so the smooth function $u$ is compactly supported.')
p.write_text(s)
p=Path('items/lem-qftx-free-weyl-functoriality.md');s=p.read_text()
s=s.replace('  - lem-qftx-green-propagator-symplectic-quotient\n','  - lem-qftx-green-propagator-symplectic-quotient\n  - lem-qftx-compact-green-support-overlap\n  - lem-manifold-bump-for-a-compact-set-inside-an-open-set\n')
s=s.replace('  lem-qftx-green-propagator-symplectic-quotient: mathematical-premise\n','  lem-qftx-green-propagator-symplectic-quotient: mathematical-premise\n  lem-qftx-compact-green-support-overlap: mathematical-premise\n  lem-manifold-bump-for-a-compact-set-inside-an-open-set: mathematical-premise\n')
s=s.replace(', and the chosen maps are unique Green maps for the given operator.','. The definition supplies formal self-adjointness but does not assert Green-map uniqueness; the needed uniqueness is proved below.')
s=s.replace('## Proof\n','[F5] [[lem-qftx-compact-green-support-overlap]]: the closed overlap of a future-supported smooth function over a compact set and a past-supported smooth function over a compact set is compact under Countable Choice.\n\n[F6] [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]] supplies a compactly supported smooth cutoff equal to one near such an overlap.\n\n## Proof\n')
s=s.replace('By Green-map uniqueness [F1], $u=E_U^\\pm f$.',r'''Here is the uniqueness argument actually needed. If $w$ is the difference of $u$ and $E_U^+f$, then $P_Uw=0$ and $\operatorname{supp}w\subseteq J_U^+(\operatorname{supp}f)$. For any compact smooth real $h$ on $U$, set $v=E_U^-h$. The closed overlap of their supports is compact by [F5]. A compact cutoff $\eta=1$ near that overlap from [F6] gives $\int_U wh\,\mu_g=\int_U wPv\,\mu_g=\int_U(Pw)v\,\mu_g=0$: apply formal self-adjointness first to $\eta w$ and $v$; every commutator term has a derivative of $\eta$ where both supports meet and hence vanishes. A smooth nonzero real $w$ has a small fixed-sign coordinate neighborhood and a nonnegative test bump there, contradicting this vanishing integral. Thus $w=0$. The advanced case interchanges the signs. Hence $u=E_U^\pm f$ without presupposing uniqueness in the definition.''')
s=s.replace('[A1, F1, F2, F4, given, algebra]','[A1, F1, F2, F4, F5, F6, given, algebra]')
p.write_text(s)
p=Path('items/def-qftx-green-hyperbolic-interface.md');s=p.read_text();s=s.replace('This is a conditional interface definition. It does not assert that every normally hyperbolic formally self-adjoint operator on every globally hyperbolic spacetime admits these Green maps, and this batch does not prove that existence theorem. The missing local Cauchy-existence and Green-map construction obligation is recorded in the batch notes and Step 1 readiness record.','This is an interface definition, with no existence axiom. Under Countable Choice and Dependent Choice, [[thm-qftx-green-hyperbolic-existence]] constructs and uniquely determines its continuous Green maps for every smooth globally hyperbolic background and arbitrary smooth real potential specified here. Its proof reconstructs Cauchy evolution from the local symmetric-hyperbolic suppliers.')
# This is a later same-page nonlogical remark, not a reverse dependency.
p.write_text(s)
# Page inventory; shared page prerequisites deliberately remain owner-controlled.
p=Path('library/quantum-field-theory-mathematics/qftx-local-algebras.md');s=p.read_text().replace('  - lem-qftx-green-propagator-symplectic-quotient','  - lem-qftx-compact-green-support-overlap\n  - lem-qftx-smooth-scalar-cauchy-evolution\n  - thm-qftx-green-hyperbolic-existence\n  - lem-qftx-green-propagator-symplectic-quotient');p.write_text(s)
def split(p):
 s=p.read_text();_,fm,b=s.split('---',2);return yaml.safe_load(fm),b
newids=['lem-qftx-compact-green-support-overlap','lem-qftx-smooth-scalar-cauchy-evolution','thm-qftx-green-hyperbolic-existence']
old={x['id']:x for page in pages for x in page.get('items',[])+page.get('examples',[])}
for id in ids+newids:
 p=Path('items')/(id+'.md');m,b=split(p)
 # In-run level includes only this run's actual suppliers; outside context is level -1.
 # New local helpers have interface level1, hence level2, existence level3; quotient now level3.
 levels={'def-qftx-green-hyperbolic-interface':1,'lem-qftx-compact-green-support-overlap':2,'lem-qftx-smooth-scalar-cauchy-evolution':2,'thm-qftx-green-hyperbolic-existence':3,'lem-qftx-green-propagator-symplectic-quotient':3,'def-qftx-free-weyl-net':4,'lem-qftx-free-weyl-functoriality':5,'lem-qftx-causal-time-slice-test-localization':5,'lem-qftx-free-locality':5,'thm-qftx-free-time-slice':6,'prop-qftx-local-projection-no-signal':6,'ex-qftx-postselection-conditioning':7}
 m['dependency_level']=levels[id]
 # Preserve original frontmatter presentation except exact changed level, already-authored updates above.
 s=p.read_text();s=re.sub(r'^dependency_level: \d+',f'dependency_level: {levels[id]}',s,flags=re.M);p.write_text(s)
 heading='Definition' if m['kind']=='definition' else 'Statement'
 statement=re.search(r'^## '+heading+r'\n\n(.*?)(?=\n## |\Z)',b,re.S|re.M).group(1).strip()
 row=old.get(id,{})
 row.update({k:m[k] for k in ['id','kind','domain','library','title','deps','dependency_roles','provenance','sources','dependency_level']})
 row.update(statement=statement,strategy=m.get('proof_strategy'),reference=f'items/{id}.md#{heading}')
 old[id]=row
pages[0]['items']=[old[id] for id in [ids[0]]+newids+ids[1:-1]]
# original example remains unchanged row except its level computed above
pages[1]['examples']=[old[ids[-1]]] if pages[1].get('examples') else pages[1].get('examples',[])
if pages[1].get('items'):pages[1]['items']=[old[x['id']] for x in pages[1]['items']]
tmp=manifest.with_suffix('.tmp');tmp.write_text(json.dumps(pages,indent=2,ensure_ascii=False)+'\n');os.replace(tmp,manifest)
(base/'applied-source-paths.json').write_text(json.dumps([str(p) for p in paths]+['items/'+i+'.md' for i in newids],indent=2)+'\n')
print('Applied 3 new supplier items, compact-overlap quotient/functoriality proof repairs, interface Remark and inventory; contracts/coverage pending.')
