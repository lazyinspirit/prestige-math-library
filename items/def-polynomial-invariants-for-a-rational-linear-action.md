---
id: def-polynomial-invariants-for-a-rational-linear-action
kind: definition
title: Polynomial invariants of a rational algebraic-group action
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Goodman, Multiplicity-Free Spaces and Schur-Weyl-Howe Duality, §6"
      url: https://sites.math.rutgers.edu/~goodman/pub/webnuslect.pdf
      locator: "PDF pp. 17–19: polynomial coordinate rings, algebraic-group invariants, and Gram maps."
    - title: "Lakshmibai, Raghavan, Sankaran, and Shukla, Standard Monomial Bases, Moduli Spaces of Vector Bundles & Invariant Theory, §2"
      url: https://www.imsc.res.in/~sankaran/Papers/0604321.pdf
      locator: "PDF pp. 11–14: the orthogonal group coaction on polynomial functions of vector tuples."
---

## Definition

Let $k$ be a field. An affine algebraic group $G$ over $k$ is an affine variety with algebraic multiplication, identity, and inverse maps satisfying the group axioms. Its coordinate algebra $k[G]$ has comultiplication $\Delta$ and counit $\varepsilon$, the pullbacks of multiplication and the identity map. A finite-dimensional **rational left $G$-module** is a finite-dimensional $k$-vector space $V$ with a $k$-linear coaction $\lambda_V:V\to k[G]\otimes_k V$ satisfying $(\Delta\otimes\operatorname{id}_V)\lambda_V=(\operatorname{id}_{k[G]}\otimes\lambda_V)\lambda_V$ and $(\varepsilon\otimes\operatorname{id}_V)\lambda_V=\operatorname{id}_V$; equivalently it is a morphism of varieties $G\times V\to V$ defining an algebraic left action. With this left-comodule convention the left action is recovered by $g\cdot v=(\operatorname{ev}_{g^{-1}}\otimes\operatorname{id}_V)\lambda_V(v)$; equivalently $\lambda_V(v)$ evaluated at $g$ is $g^{-1}\cdot v$. The inverse is necessary because evaluation of the displayed left coaction directly at $g$ gives a right action. Its affine coordinate ring is $k[V]=\operatorname{Sym}_k(V^*)$. For every integer $t\ge0$, the diagonal action on $V^t$ induces a coaction $\lambda_{k[V^t]}:k[V^t]\to k[G]\otimes_k k[V^t]$ by pullback of the action morphism. The invariant subring is
$$k[V^t]^G=\{f\in k[V^t]:\lambda_{k[V^t]}(f)=1\otimes f\}.$$
This is the algebraic-group coaction convention; it does not identify invariants of the finite group of $k$-points $G(k)$ with $k[V^t]^G$.
