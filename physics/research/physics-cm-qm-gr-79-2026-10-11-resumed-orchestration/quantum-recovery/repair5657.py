from pathlib import Path
import json,re,hashlib,shutil,datetime
import yaml
r='physics-cm-qm-gr-79-2026-10-11'; base=Path('research')/f'{r}-resumed-orchestration/quantum-recovery/batch5657-repair';before=base/'before';before.mkdir(parents=True,exist_ok=True)
ids=['lem-nrqm-identical-particles-two-particle-exchange-operator','thm-nrqm-identical-particles-two-factor-symmetry-decomposition','texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry','ex-nrqm-identical-particles-exchange-versus-coulomb-terms','lem-nrqm-bell-singlet-pairings']
archive=[Path('items')/f'{i}.md' for i in ids]
for n in [56,57]:
 archive += [Path('research')/f'{r}-batch-{n}.{s}' for s in ['pages.json','proof-contracts.json','notes.md','cross-inputs.json','coverage.md'] if (Path('research')/f'{r}-batch-{n}.{s}').exists()]
 archive += [Path('research')/f'{r}-dispatch/beta-batch-{n}.result.json']
 manifest=json.loads((Path('research')/f'{r}-batch-{n}.pages.json').read_text())
 archive += [Path('research')/f'{r}-step1-{i["id"]}.json' for p in manifest for i in p['items']]
for p in archive:
 if p.exists() and not (before/p.name).exists():shutil.copy2(p,before/p.name)
def change(i,fun):
 p=Path('items')/f'{i}.md';p.write_text(fun(p.read_text()))
def swap(s,a,b):
 assert a in s,a[:90];return s.replace(a,b,1)
i=ids[0];s=(Path('items')/f'{i}.md').read_text()
a=s.index('(d) for $u,v');b=s.index('\n\n## Facts',a)
s=s[:a]+r'''(d) whenever $u,v\in H$ are orthonormal,
$\tau\kappa(u\otimes v)\ne\kappa(u\otimes v)$. Consequently, if $H$
contains an orthonormal pair (equivalently, $\dim H\ge2$), both exchange
eigenspaces contain nonzero vectors and $\tau\ne I$. If $H=\{0\}$ or
$\dim H=1$, then $\tau=I$, $P_+^{(2)}=I$ and $P_-^{(2)}=0$; for $H=\{0\}$
the tensor square and both ranges are zero.''' +s[b:]
a=s.index('[F2]');b=s.index('\n\n[F3]',a)
s=s[:a]+r'''[F2] **Permutation unitaries.** $U_{(12)}\in\mathcal B(H\widehat\otimes H)$ is the unique bounded operator with $U_{(12)}\kappa(u\otimes v)=\kappa(v\otimes u)$; it is unitary with $U_\pi U_\sigma=U_{\pi\sigma}$ and $U_\pi^{*}=U_{\pi^{-1}}$. For every $\pi\in S_2$, $U_\pi P_+^{(2)}=P_+^{(2)}U_\pi=P_+^{(2)}$ and $U_\pi P_-^{(2)}=P_-^{(2)}U_\pi=\operatorname{sgn}(\pi)P_-^{(2)}$. The orthogonal projections are $P_+^{(2)}=\frac12\sum_{\pi\in S_2}U_\pi$ and $P_-^{(2)}=\frac12\sum_{\pi\in S_2}\operatorname{sgn}(\pi)U_\pi$ ([[lem-nrqm-composites-permutation-sector-projections]] clauses (a)-(c), [[def-countable-choice]]).'''+s[b:]
a=s.index('\n4.1 [Assembly]');s=s[:a]+r'''
3.2 [Zero and one-dimensional spaces] If $H=\{0\}$, all elementary tensors are zero and their completion is zero, so $\tau=I$ on that space. If $H$ is one-dimensional, fix a unit spanning vector $e$. Every elementary tensor has the form $(\alpha e)\otimes(\beta e)=\alpha\beta(e\otimes e)$ and its swap is $\beta\alpha(e\otimes e)$, the same vector. Hence $\tau=I$ on the dense algebraic tensor space and, by boundedness, on its completion. Step 1.2 then gives $P_+^{(2)}=I$ and $P_-^{(2)}=0$ in both cases. If $\dim H\ge2$, normalize a nonzero vector $u$ and choose $w$ outside its span; the nonzero vector $w-\langle w,u\rangle u$ normalizes to a unit $v$ orthogonal to $u$, so step 3.1 applies. This proves all branches of (d). [F1, F2, step 1.2, step 3.1, choose, algebra]
''' +s[a:]
s=swap(s,'step 3.1 proves (d).','steps 3.1 and 3.2 prove (d).');s=swap(s,'step 2.2, step 3.1] ∎','step 2.2, step 3.1, step 3.2] ∎');(Path('items')/f'{i}.md').write_text(s)
change(ids[1],lambda s:swap(s,r'$\tau_W^2=I=\tau_W^{*}$',r'$\tau_W^2=I$ and $\tau_W^{*}=\tau_W$'))
p=Path('items')/f'{ids[2]}.md';s=p.read_text();a=s.index('4.2 [Antiparallel spins]');b=s.index('\n\n5.1',a)
s=s[:a]+r'''4.2 [Antiparallel spins] Let $u,v$ be orthonormal. The orbital projections are $P_+^{(K)}(u\otimes v)=(u\odot v)/\sqrt2$ and $P_-^{(K)}(u\otimes v)=(u\wedge v)/\sqrt2$ by their definitions. In the internal tensor square, $P_-^{(V)}(e_+\otimes e_-)=\sigma_-/\sqrt2$ and $P_+^{(V)}(e_+\otimes e_-)=\sigma_+/\sqrt2$ by [F2] and the exchange formulas in [F4]. Substituting these four identities into (b) gives $\Theta P_-^{(K\otimes V)}\bigl((u\otimes e_+)\otimes(v\otimes e_-)\bigr)=\tfrac12\bigl((u\odot v)\otimes\sigma_-+(u\wedge v)\otimes\sigma_+\bigr)$. The two tensor summands inside the parentheses are orthogonal unit vectors, by [F3] and [F4], so this complete projected vector has norm $1/\sqrt2$. Multiplying it by $\sqrt2$ gives the unit representative $\tfrac1{\sqrt2}\bigl((u\odot v)\otimes\sigma_-+(u\wedge v)\otimes\sigma_+\bigr)$ of the image ray, as in (d). [F2, F3, F4, step 3.1, algebra]''' +s[b:];p.write_text(s)
# Helper's before-byte source guards are authenticated before integration.
bind=json.loads((base.parent/'exchange57-strict/bindings.json').read_text());guards=[]
for row in bind['sources']:
 p=Path(row['path'].removeprefix('physics/'));actual=hashlib.sha256(p.read_bytes()).hexdigest();is_owned=p.stem in ids
 if not is_owned:assert actual==row['raw_sha256'],p
 guards.append(dict(row,current_sha256=actual,owned_changed=is_owned))
(base/'source-guards.json').write_text(json.dumps(guards,indent=2)+'\n')
shutil.copy2(base.parent/'exchange57-strict/candidate.md',Path('items')/f'{ids[3]}.md')
p=Path('items')/f'{ids[4]}.md';s=p.read_text();a=s.index('2.2 [Product Pauli');b=s.index('\n\n3.1',a)
s=s[:a]+r'''2.2 [Product Pauli operators on $\Psi$] Term-by-term application of [F1] and [F4] gives $(\sigma_x\otimes\sigma_x)\Psi=(\sigma_y\otimes\sigma_y)\Psi=(\sigma_z\otimes\sigma_z)\Psi=-\Psi$. Put $r_+:=(\kappa(e_+\otimes e_+)+\kappa(e_-\otimes e_-))/\sqrt2$ and $r_-:=(\kappa(e_+\otimes e_+)-\kappa(e_-\otimes e_-))/\sqrt2$. The six mixed products are $(\sigma_x\otimes\sigma_y)\Psi=-iq$, $(\sigma_y\otimes\sigma_x)\Psi=iq$, $(\sigma_x\otimes\sigma_z)\Psi=-r_+$, $(\sigma_z\otimes\sigma_x)\Psi=r_+$, $(\sigma_y\otimes\sigma_z)\Psi=ir_-$ and $(\sigma_z\otimes\sigma_y)\Psi=-ir_-$. Each is orthogonal to $\Psi$ by step 1.2. Thus $\langle(\sigma_i\otimes\sigma_j)\Psi,\Psi\rangle=-\delta_{ij}$ for all $i,j\in\{x,y,z\}$. [given, F1, F4, step 1.2, algebra]''' +s[b:];p.write_text(s)
(base/'repair-in-progress.json').write_text(json.dumps({'run':r,'cycle':1,'max_cycles':2,'ids':ids,'scope':'Focused actual supplier-consumer repairs, no whole-item audit. Source35 and41 caps frozen.','archived_before':[str(p) for p in archive if p.exists()]},indent=2)+'\n')
print(json.dumps({'changed':ids,'before':str(before)}))
