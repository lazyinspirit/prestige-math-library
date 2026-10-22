from pathlib import Path
import re,shutil
root=Path.cwd();base=root/'research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/rational-hf'
hid='lem-lens-space-q-one-triangles-and-cyclic-handle-maps';oid='lem-heegaard-floer-correction-terms-lens-space-lp1'
aid='lem-rational-heegaard-floer-absolute-grading-and-cobordism-maps'
p=root/'items'/f'{hid}.md'
if p.exists():raise SystemExit('New helper already exists')
archive=base/'canonical-before'/f'{oid}.md'
if archive.exists():raise SystemExit('Before archive already exists')
shutil.copyfile(root/'items'/f'{oid}.md',archive)
front=f'''---
id: {hid}
kind: lemma
title: "The q-one lens triangles and their cyclic handle maps"
status: draft
origin: session
deps:
  - {aid}
  - lem-os-disk-and-polygon-analytic-foundations
  - thm-strictly-admissible-triple-free-polygons-have-full-marked-low-dimensional-counts
  - lem-strong-polygon-admissibility-bounds-indices-and-positive-domains
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Absolutely Graded Floer Homologies and Intersection Forms for Four-Manifolds with Boundary"
      url: "https://arxiv.org/abs/math/0110170"
    - title: "Ozsvath and Szabo, Holomorphic Triangles and Invariants for Smooth Four-Manifolds"
      url: "https://arxiv.org/abs/math/0110169"
---

'''
body=r'''## Statement

For each integer $p\ge1$ there is a pointed genus-one triple $(\alpha,\beta,\gamma)$ whose three manifolds are $Y_{\alpha\beta}=S^3$, $Y_{\beta\gamma}=S^3$ and $Y_{\alpha\gamma}=-L(p,1)$, where $L(p,1)$ is positive $p$-surgery on the unknot. For each $0\le i<p$, a fixed Spin$^c$ triangle class from the two sphere generators to the lens generator $x_i$ has Maslov index zero, basepoint multiplicity zero, and mod-two count one. Its extension over the capped triple manifold has $\langle c_1,[P]\rangle=2i-p$, $[P]^2=-p$, $\chi=1$, and $\sigma=-1$. The cyclic triple $(\gamma,\alpha,\beta)$ gives a fixed-Spin$^c$ map from $L(p,1)$ to $S^3$ with coefficient one from $[x_i,0]$ to the sphere generator at exponent zero and the same four-dimensional data. These are individual fixed-structure coefficients, not sums over extending structures. The boundary labels are $2i-p$ modulo $2p$; conjugation replaces $i$ by $p-i$ modulo $p$.

## Facts & Assumptions

[F1] [[lem-rational-heegaard-floer-absolute-grading-and-cobordism-maps]] supplies the actual chosen-handle maps and their identification under handle presentation changes. Its absolute degree conclusion is not used to compute the local Chern count below.

[F2] The admissible disk/polygon counts and gluing are supplied by [[lem-os-disk-and-polygon-analytic-foundations]], [[thm-strictly-admissible-triple-free-polygons-have-full-marked-low-dimensional-counts]] and [[lem-strong-polygon-admissibility-bounds-indices-and-positive-domains]], at their supplied good-end and strict admissibility scopes. The explicit periodic-domain, index and individual-class calculations follow below.

## Proof

**Given:** An integer $p\ge1$, $0\le i<p$, and a sufficiently small $\epsilon>0$. All counts are over $\mathbb F_2$.

'''
s='\n'.join((base/'lens-p-one-triangle-operation.md').read_text().splitlines()[7:130])
blocks=[]
for part in re.split(r'^## ',s,flags=re.M):
 if part.strip():
  ls=part.splitlines(); blocks.append('**'+ls[0].strip()+'.** '+' '.join(x.strip() for x in ls[1:] if x.strip()))
steps=[]
for n,b in enumerate(blocks,1):
 tags='F1, F2' if n==1 else f'F1, F2, step 1.{n-1}'
 steps.append(f'1.{n} {b} [{tags}]')
paras=(base/'lens-turned-around-triangle-bridge.md').read_text().split('\n\n')
start=next(n for n,t in enumerate(paras) if t.startswith('The same oriented triangle'))
mid=next(n for n,t in enumerate(paras) if t.startswith('Here is the four-dimensional'))
uniq=next(n for n,t in enumerate(paras) if t.startswith('For each of these fixed structures'))
end=next(n for n,t in enumerate(paras) if t.startswith('In the alpha-gamma'))
cyclic=' '.join(paras[start:mid]);four=' '.join(paras[mid:uniq]);unique=' '.join(paras[uniq:end])
for n,b in enumerate([cyclic,four,unique],1):
 b=' '.join(b.splitlines())
 steps.append(f'2.{n} {b} [F1, F2, step 1.3'+(f', step 2.{n-1}' if n>1 else '')+']')
steps.append(r'2.4 The characteristic restriction classes are $k=2i-p$ modulo $2p$. The $p$ listed values represent all Spin$^c$ structures once. Reversing the capped-core or meridian orientation replaces $k$ by $-k$, hence $i$ by $p-i$ modulo $p$, which is conjugation. Cyclic relabelling of the same triangle does not change its extending Spin$^c$ structure, so this tracks the paired boundary labels as asserted. The construction includes $p=1$, when $k=-1$. [step 1.3, step 2.2, step 2.3] ∎')
p.write_text(front+body+'\n\n'.join(steps)+'\n')

s=archive.read_text().replace('  proof: not-supplied','  proof: ai-altered').replace('verification:\n  precheck: n/a\n','')
pos=s.index('dependency_level:')
s=s[:pos]+f'  - {hid}\n  - {aid}\n  - def-lens-space-surgery-orientation-convention\n'+s[pos:]
s=s[:s.index('## Proof status')]+r'''## Facts & Assumptions

[F1] [[lem-lens-space-q-one-triangles-and-cyclic-handle-maps]] supplies the explicit individual index-zero, basepoint-zero count-one triangles, their cyclic maps and Chern evaluation $k=2i-p$ on a generator of square $-p$.

[F2] [[lem-rational-heegaard-floer-absolute-grading-and-cobordism-maps]] constructs the absolute grading, with the sphere generator at degree zero, and proves the degree formula for these actual fixed-Spin$^c$ handle maps.

[F3] [[lem-heegaard-floer-correction-term-heegaard-invariance]] identifies the correction term as the bottom degree of the infinity image. The convention in the statement is [[def-lens-space-surgery-orientation-convention]].

## Proof

**Given:** $p\ge1$ and a label $0\le i<p$, with the torus diagrams and fixed triangle structures of [F1].

1.1 The alpha-gamma diagram, and the diagram with those two attaching curves reversed, each have one intersection in each Spin$^c$ structure. Their infinity differentials are zero: the Maslov index of a self-disk in a torsion Spin$^c$ structure is $2n_z$, so cannot be one. The minus lattice in each summand is therefore exactly $U\mathbb F_2[U][x_i,0]$, and its plus image has bottom $[x_i,0]$. Its correction term is the absolute grading of that generator, with no unknown exponent shift. [F1, F3]

1.2 For the negative-trace map from $S^3$ to $-L(p,1)$, the fixed triangle has index and basepoint multiplicity zero and count one. It sends the sphere generator at exponent zero to $[x_i,0]$. The four-dimensional data are $c_1^2=-k^2/p$, $\chi=1$ and $\sigma=-1$. Hence its degree is $D_i=(1-k^2/p)/4$, and $d(-L(p,1),i)=D_i$. This computes the negative orientation directly. [F1, F2, step 1.1]

1.3 The cyclically reordered triangle gives the actual fixed-structure map from $L(p,1)$ to $S^3$ and sends $[x_i,0]$ to the sphere generator at exponent zero. It is the same oriented triple four-manifold with the other sphere input filled, so it has the same degree $D_i$. Consequently $0=\operatorname{gr}[x_i,0]+D_i$, and $d(L(p,1),i)=-D_i=((2i-p)^2-p)/(4p)$. This argument uses an actual turned-around triangle map rather than a general grading-duality assertion. [F1, F2, step 1.1, step 1.2]

1.4 The characteristic labels under orientation reversal or conjugation are paired by $k\mapsto-k$, equivalently $i\mapsto p-i$ modulo $p$. Their squares agree, so the two computations give exactly the asserted negation for the opposite orientation with the conjugate label. For $p=1$ the same computation has $k=-1$ and both correction terms zero. [F1, step 1.2, step 1.3] ∎
'''
(root/'items'/f'{oid}.md').write_text(s)
print('Authored local lens triangle/cyclic-map supplier and filled unchanged original lens statement.')
