import json,hashlib,pathlib
base=pathlib.Path('research/non-ml-math-remaining-81-2026-10-18-owner-step2-battery-smoke-quantum')
assignment=json.load(open('research/non-ml-math-remaining-81-2026-10-18-owner-step2-first-battery-failures/finite-smoke-assignment-quantum.json'))
names=['gentle','sqrt-order','hayashi-nagaoka','entropy-zero','packing-one','schmidt-pure','typical-pure','schumacher-pure','hsw-single','qubit-rates','fixed-povm','binary-pure','toric-inventory','toric-ranks','toric-commutation','toric-dimension','toric-loops','toric-gap','toric-worked','planar-toric','fusion-measurement','controlled-phase','b6-identity','sk-budget','multiplicity-two','ising-periodic','fib-projector']
# Select exact complete source lines bearing the assertion, except the two prose
# assertions whose source line wraps require one complete paragraph.
needles=[
 r'$$\left\|\rho-\sqrt{\Lambda}\rho\sqrt{\Lambda}\right\|_1\le2\sqrt{u}.$$',
 'If $A,B$ are nonnegative endomorphisms',
 r'$$I_H-(S+T)^{-1/2}S(S+T)^{-1/2}\preceq2(I_H-S)+4T.$$',
 '[F1] [[def-it-von-neumann-entropy]]: $S(\\rho)',
 r'$$2(u+2\sqrt{u})+4(M-1)\frac dD.$$',
 r'$$F_e^{(n)}\le\sum_{j=1}^{M}\lambda_j^{(n)}.$$',
 r'$$\operatorname{tr}(\Pi_n\rho^{\otimes n})\to1,',
 '2.1 Since $r_n',
 '1.3 Consider any $(n,M)$ code',
 '2.1 Apply the Schumacher theorem',
 '2.1 For either input',
 '2.1 Each pure output state',
 'The cellulation has $L^2$ vertices',
 'dimension $L^2-1$, and their only relation',
 'product of all stars is the identity',
 '$2^{n-r}=4=2^2$',
 r'$$\bar Z_1=',
 r'$\Delta_L=4\min(J_e,J_m)$.',
 '1.3 The three edges',
 '1.1 Set $d=L=3$',
 '1.1 The coefficients',
 '2.1 Applying this matrix',
 '2.1 The empty word',
 '1.1 Compute $\\eta_1',
 '2.1 Inserting $i_1$',
 '2.2 Fusion forces alternation',
 '1.2 The matrix $F$'
]
patches=[]
for r,name,needle in zip(assignment['rows'],names,needles):
 source=pathlib.Path(r['source']).read_text()
 matches=[line for line in source.splitlines() if needle in line]
 if name=='toric-gap': matches=[line for line in matches if line.startswith(needle)]
 assert len(matches)==1,(r['id'],needle,matches)
 excerpt=matches[0]
 # Include complete wrapped prose for counts, relations, product and dimension.
 if name in ['toric-inventory','toric-ranks','toric-commutation','toric-dimension','toric-gap']:
  excerpt=next(p for p in source.split('\n\n') if matches[0] in p)
 doc=json.load(open(r['contract']));before=doc['contracts'][r['id']]['finite_smoke']
 assert before==r['finite_smoke'],r['id']
 check='frontier81-quantum-'+name
 after=[dict(before[0],check=check,fixture=check+'-v1',asserts=excerpt)]
 patches.append(dict(id=r['id'],contract=r['contract'],source=r['source'],source_sha256=hashlib.sha256(source.encode()).hexdigest(),field='finite_smoke',before=before,after=after))
(base/'row-patches.json').write_text(json.dumps(dict(version=1,run=assignment['run'],guard='Require exact equality of current contracts[id].finite_smoke to before; replace only that field with after. Source hash records inspected content and exact excerpt must remain present.',patches=patches),indent=2)+'\n')
print('27 exact guarded finite_smoke field replacements prepared')
