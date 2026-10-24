---
id: lem-aqft-ising-fusion-data-coherence
kind: lemma
title: "Coherence of the Ising fusion data"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-noninvertible-symmetries
dependency_level: 2
deps:
  - def-aqft-noninvertible-defect-fusion
  - def-aqft-ising-fusion-data
  - def-monoidal-category
dependency_roles:
  def-aqft-noninvertible-defect-fusion: mathematical-premise
  def-aqft-ising-fusion-data: mathematical-premise
  def-monoidal-category: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Steven H. Simon, Topological Quantum, §§9.2–9.3"
      url: "https://www-thphys.physics.ox.ac.uk/people/SteveSimon/topological2020/TopoBookSep12.pdf"
      locator: "PDF pp. 119–121 (book pagination approximately 103–105): Ising fusion rules, F-symbols, unitary basis changes and the pentagon equation."
    - title: "David Aasen, Roger S. K. Mong, and Paul Fendley, Topological Defects on the Lattice I: The Ising Model"
      url: "https://arxiv.org/pdf/1601.07185"
      locator: "§§4.1–4.3, PDF pp. 17–22, equations (4.6) and (4.19)–(4.21): lattice junction weights and Ising F-moves."
verification:
  precheck: pass
---

## Statement

For the complex-linear Ising fusion-data package with simple labels $\mathbf 1,\psi,\sigma$, fusion rules $\psi\otimes\psi\cong\mathbf 1$, $\psi\otimes\sigma\cong\sigma\otimes\psi\cong\sigma$, and $\sigma\otimes\sigma\cong\mathbf 1\oplus\psi$, with the associator and dual maps specified below, the associator satisfies the pentagon, the strict unitors satisfy the triangle, and the evaluation and coevaluation maps satisfy both snake identities. Consequently the package is a finite semisimple rigid monoidal category with simple unit, hence a finite semisimple fusion category. With the chosen fusion-space basis orthonormal and the standard Hermitian inner products, its associators are unitary.

## Statement references

[Simon, *Topological Quantum*, §§9.2–9.3](https://www-thphys.physics.ox.ac.uk/people/SteveSimon/topological2020/TopoBookSep12.pdf)

[Aasen, Mong, and Fendley, §§4.1–4.3](https://arxiv.org/pdf/1601.07185)

## Facts & Assumptions

**Given:** Work over $\mathbb C$ with the finite direct-sum category candidate, fusion rules, associator matrices, strict unitors and evaluation/coevaluation maps in the stated data package.

[F1] [[def-aqft-noninvertible-defect-fusion]]: a finite semisimple fusion category is a finite semisimple tensor category with simple unit, coherent associator and unitors, and left and right duals.

[F2] [[def-aqft-ising-fusion-data]]: the simple labels are $\mathbf 1,\psi,\sigma$; the only nontrivial associator matrices are $F^{\sigma\sigma\sigma}_{\sigma}=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$, $F^{\psi\sigma\psi}_{\sigma}=-1$, and $F^{\sigma\psi\sigma}_{\psi}=-1$; $\sigma$ has evaluation and coevaluation coefficient $2^{1/4}$ in the unit channel.

[F3] [[def-monoidal-category]]: the associator must satisfy the pentagon and the unitors the triangle equation for all objects.

## Proof

1.1 For triples with no unit label, the two bracketings have the same direct-sum decomposition: $\psi\psi\psi$ gives $\psi$; $\psi\psi\sigma$, $\psi\sigma\psi$, and $\sigma\psi\psi$ give $\sigma$; $\psi\sigma\sigma$, $\sigma\psi\sigma$, and $\sigma\sigma\psi$ give $\mathbf 1\oplus\psi$; and $\sigma\sigma\sigma$ gives $2\sigma$. Triples containing $\mathbf 1$ reduce by the strict unit rule. Thus the fusion products define the same channel bases on both sides of each associator. By construction, there are exactly three simple objects, all Hom spaces are finite-dimensional, every object is a finite direct sum of simples, and $\operatorname{End}(\mathbf 1)=\mathbb C$, so the category is finite semisimple with simple unit. [given, F1, F2, algebra]

1.2 Tensoring scalar morphisms is bilinear and preserves composition. Each associator block is a matrix between the stated channel bases, so it commutes with scalar morphisms on each simple factor; blockwise this gives naturality on all direct sums. The nontrivial $2\times2$ associator is the real Hadamard matrix divided by $\sqrt2$, whose product with its transpose is the identity; every other allowed associator is $1$ or $-1$. Hence all associators are invertible and unitary in the specified orthonormal fusion bases. [F2, algebra]

1.3 In the pentagon equation, write $F^{abc}_d[x,y]=0$ whenever either intermediate fusion channel is forbidden. For each choice of simple labels $a,b,c,d,e,f,g,k,\ell\in\{\mathbf 1,\psi,\sigma\}$, the two paths are $F^{fcd}_e[g,\ell]F^{ab\ell}_e[f,k]=\sum_{h\in\{\mathbf 1,\psi,\sigma\}}F^{abc}_g[f,h]F^{ahd}_e[g,k]F^{bcd}_k[h,\ell]$. The exact checker `research/advanced-qft-supersymmetry-build-2026-10-23-batch-39-ising-pentagon-check.py` substitutes the specified $F$-rules using rational arithmetic in $\mathbb Q(\sqrt2)$ over all $3^9=19{,}683$ outer label assignments. It finds 132 assignments with a nonzero side, verifies equality in all 132, and finds the remaining 19,551 assignments are $0=0$. The checker exits successfully only at those exact totals. Thus the pentagon holds for simple labels; multilinearity extends it to finite direct sums. [F2, F3, algebra]

1.4 Every associator coefficient involving $\mathbf 1$ is $1$, so with strict unitors both sides of the triangle equation are the identity on each simple label and hence on every direct sum. For $\psi$, the two snake composites have scalar $1\cdot1=1$. For $\sigma$, each composite uses the unit-channel coefficient $F^{\sigma\sigma\sigma}_{\sigma}[\mathbf 1,\mathbf 1]=1/\sqrt2$ and the two duality coefficients $2^{1/4}$, so its scalar is $2^{1/4}2^{1/4}/\sqrt2=1$. These are both snake identities, and direct sums inherit the chosen duals componentwise. [given, F2, F3, algebra]

2.1 The candidate therefore has a bilinear tensor product, natural invertible associator and strict unitors satisfying pentagon and triangle, finite semisimplicity, simple unit and duals for every simple object. By [F1] it is a finite semisimple fusion category; the checked unitary associator matrices give the stated unitary structure. This is a purely mathematical result and makes no QFT-realization claim. [F1, step 1.1, step 1.2, step 1.3, step 1.4] ∎

## Remarks

The pentagon is the equality of the two composites of associators between the five bracketings of four tensor factors. The diagram records those paths; the proof uses the exact finite $F$-symbol check above, not the drawing.

```tikzcd
& (((a\otimes b)\otimes c)\otimes d) \arrow[rr,"\alpha_{a\otimes b,c,d}"] \arrow[dl,"\alpha_{a,b,c}\otimes 1_d"'] & & (a\otimes b)\otimes(c\otimes d) \arrow[dr,"\alpha_{a,b,c\otimes d}"] & \\
(a\otimes(b\otimes c))\otimes d \arrow[rr,"\alpha_{a,b\otimes c,d}"'] & & a\otimes((b\otimes c)\otimes d) \arrow[ur,"1_a\otimes\alpha_{b,c,d}"'] & & a\otimes(b\otimes(c\otimes d))
```
