---
id: lem-hh-finite-comatrix-coalgebra-exists
kind: lemma
title: "Finite comatrix coalgebras exist"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 1
deps: [def-hh-coalgebra-and-coalgebra-map, def-hh-scalar-and-tensor-conventions, lem-hh-tensor-coherence-on-elementary-tensors, thm-universal-property-of-free-modules, prop-functoriality-of-module-tensor-products]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "UCSD Math 207A, Hopf Algebras lecture notes, Spring 2020"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "Chapter 1, Example 1.23, printed pp. 16–17: the matrix coalgebra formula."
    - title: "Benedikt Stufler, Hopf Algebras lecture notes, University of Zurich course, 2018"
      url: "https://www.dmg.tuwien.ac.at/stufler/doc/lec/2018hopf.pdf"
      locator: "§3.1, Example 3.2(2) and its basis calculation, printed pp. 12–13."
---

## Statement

For a field $k$ and an integer $n\geq1$, let $E_n$ be the vector space with basis $c_{ij}$ for $1\leq i,j\leq n$. The linear maps defined on this basis by
$$\Delta(c_{ij})=\sum_{\ell=1}^n c_{i\ell}\otimes c_{\ell j},\qquad \varepsilon(c_{ij})=\delta_{ij}$$
make $E_n$ a coalgebra. In particular, the one-dimensional space with basis $c$ and maps $\Delta(c)=c\otimes c$, $\varepsilon(c)=1$ is a nonzero coalgebra.

## Facts & Assumptions

**Given:** A field $k$, an integer $n\geq1$, and the vector space $E_n$ with the stated basis.

[F1] The coalgebra axioms are coassociativity and the two counit identities, with the associator and unit maps specified in the definition ([[def-hh-coalgebra-and-coalgebra-map]]).

[F2] Tensors are algebraic finite sums over $k$ ([[def-hh-scalar-and-tensor-conventions]]).

[F3] The tensor associator identifies $(E_n\otimes E_n)\otimes E_n$ with $E_n\otimes(E_n\otimes E_n)$ ([[lem-hh-tensor-coherence-on-elementary-tensors]]).

[F4] A set map from a free basis extends uniquely to a linear map ([[thm-universal-property-of-free-modules]]).

[F5] Tensoring linear maps gives well-defined linear maps, with $(f\otimes g)(x\otimes y)=f(x)\otimes g(y)$ ([[prop-functoriality-of-module-tensor-products]]).

## Proof

1.1 The displayed assignments on the basis extend uniquely to linear maps $\Delta:E_n\to E_n\otimes E_n$ and $\varepsilon:E_n\to k$ by [F4]. [given, F4, construct]

2.1 On a basis vector, the left side of coassociativity in $E_n\otimes(E_n\otimes E_n)$ is $\alpha((\Delta\otimes\mathrm{id})\Delta(c_{ij}))=\sum_{m,\ell}c_{im}\otimes(c_{m\ell}\otimes c_{\ell j})$, while the right side is $(\mathrm{id}\otimes\Delta)\Delta(c_{ij})=\sum_{\ell,m}c_{i\ell}\otimes(c_{\ell m}\otimes c_{mj})$. Interchanging the dummy indices $m$ and $\ell$ in the finite right-hand sum makes the sums identical. Since both sides are linear and the $c_{ij}$ form a basis, coassociativity holds on $E_n$. [given, step 1.1, F1, F2, F3, F5, algebra]

2.2 For every $i,j$, $\lambda(\varepsilon\otimes\mathrm{id})\Delta(c_{ij})=\sum_\ell\delta_{i\ell}c_{\ell j}=c_{ij}$ and $\rho(\mathrm{id}\otimes\varepsilon)\Delta(c_{ij})=\sum_\ell c_{i\ell}\delta_{\ell j}=c_{ij}$. Linearity extends both identities from the basis to $E_n$. [given, step 1.1, F1, F5, algebra]

3.1 Steps 2.1 and 2.2 verify the coalgebra axioms of [F1]. At $n=1$ the displayed formulas give $\Delta(c)=c\otimes c$ and $\varepsilon(c)=1$; because $c$ is a basis vector it is nonzero. [step 2.1, step 2.2, F1, given] ∎
