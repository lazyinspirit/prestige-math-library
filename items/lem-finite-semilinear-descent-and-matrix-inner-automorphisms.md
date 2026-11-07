---
id: lem-finite-semilinear-descent-and-matrix-inner-automorphisms
kind: lemma
title: Finite semilinear descent and matrix automorphisms
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- def-finite-galois-extension-and-galois-group
- thm-finite-galois-extension-characterizations
justified_by: []
proof_strategy: direct
axiom_use: None. Only finite-dimensional linear algebra, finite Galois sums and finitely bounded algebraic constructions are used; no arbitrary basis, closure, compactness or infinite dependent choice is invoked.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03; locally adapted intermediate lemma
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Chapter IV §2, Corollary 2.12, and §3 finite descent/factor-set framework; semilinear descent and matrix-unit proofs reconstructed here.
verification: {}
---

## Statement

Let $E/K$ be finite Galois with group $G$. If an $E$-vector space $V$ of finite dimension has an honest semilinear $G$-action, the natural map $E\otimes_KV^G\to V$ is an isomorphism. Moreover every $E$-algebra automorphism of $\operatorname{End}_E(V)$, for $V\ne0$, is conjugation by an invertible $E$-linear map, unique up to a nonzero scalar.

## Statement references

[[def-finite-galois-extension-and-galois-group]]

## Facts & Assumptions

**Given:** The objects in the Statement.

[F1] The Galois group consists of distinct field automorphisms; its fixed field is $K$ by condition 4 of the finite-Galois characterization. [[def-finite-galois-extension-and-galois-group]] [[thm-finite-galois-extension-characterizations]]

## Proof

**Proof technique:** direct finite-dimensional construction.

**Given:** The data above.

1.1 Distinct field homomorphisms $\sigma_i:E\to E$ are linearly independent over $E$ as functions. Otherwise take a nonzero relation with least support and normalize one coefficient to $1$. Evaluate it at $ab$ and subtract $\sigma_1(b)$ times its value at $a$. Choosing $b$ with $\sigma_j(b)\ne\sigma_1(b)$ for another supported index gives a smaller nonzero relation. A one-term relation is impossible. [F1, given, induction, algebra]

2.1 Write the honest semilinear action as $T_\sigma$. For $a\in E,v\in V$, the vector $\sum_{\sigma\in G}\sigma(a)T_\sigma(v)$ is invariant, since $T_\tau$ permutes the terms by $\sigma\mapsto\tau\sigma$. If the $E$-span of invariant vectors were proper, choose a nonzero $E$-linear functional $\lambda$ vanishing on it. Then $\sum_\sigma\sigma(a)\lambda(T_\sigma(v))=0$ for all $a$. Step 1.1 implies every coefficient vanishes, in particular $\lambda(v)=0$ for every $v$, a contradiction. Thus invariants span. A finite basis can be extracted from any spanning set of a finite-dimensional vector space by selecting successively outside the span, for at most $\dim_EV$ steps; this uses only finite choice. Choose such an $E$-basis among the invariants. An invariant linear combination of this basis has coefficients fixed by $G$, hence in $K$, so this same basis is a $K$-basis of $V^G$. This proves descent, including $V=0$. [F1, step 1.1, choose, algebra]

3.1 For a matrix-algebra automorphism $\alpha$, let $f_{ij}=\alpha(e_{ij})$. The mutually orthogonal $f_{ii}$ sum to $1$, and $f_{ij}$ identify all their image subspaces. There are $\dim_EV$ such nonzero equal-dimensional subspaces in $V$, so each has dimension one. Choose nonzero $v$ in the image of $f_{11}$, and put $v_i=f_{i1}v$. They form a basis, with $f_{ij}v_l=\delta_{jl}v_i$. The basis-change matrix $P$ therefore gives $\alpha(X)=PXP^{-1}$ for every $X$. If two matrices do so, their quotient commutes with all matrix units; its off-diagonal entries are zero and its diagonal entries equal, so it is scalar. This includes dimension one. [given, choose, algebra] ∎


## Choice accounting

The annihilating functional in step 2.1 is obtained by extending a finite basis of a proper subspace in a finite-dimensional space. The chosen invariant basis and the matrix-unit vector in step 3.1 are finite choices. No algebraic closure, infinite family of bases, compactness principle or infinite recursion occurs.
