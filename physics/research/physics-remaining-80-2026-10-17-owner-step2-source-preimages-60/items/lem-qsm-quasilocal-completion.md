---
id: lem-qsm-quasilocal-completion
kind: lemma
title: Quasi-local algebra completion and locality
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
- def-qsm-quasilocal-spin-algebra
- def-qsm-local-spin-algebras
- lem-qsm-local-spin-inclusions-isometric
- def-c-star-algebra
- def-completion-of-a-normed-space
- thm-metric-completion-carries-a-unique-banach-space-structure
- lem-completion-operations-are-well-defined
- def-countable-choice
- lem-qsm-matrix-state-calculus
- lem-qsm-finite-matrix-cstar-and-state-duality
dependency_roles:
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  lem-qsm-local-spin-inclusions-isometric: mathematical-premise
  def-c-star-algebra: mathematical-premise
  def-completion-of-a-normed-space: mathematical-premise
  thm-metric-completion-carries-a-unique-banach-space-structure: mathematical-premise
  lem-completion-operations-are-well-defined: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.2.3, pp. 55–57
    url: https://arxiv.org/pdf/1311.2717
  - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 3 §1, pp. 25–26
    url: https://arxiv.org/pdf/math-ph/0107009
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the Cauchy-sequence completion. For the local spin system of [[def-qsm-local-spin-algebras]], the normed $*$-algebra $\mathcal A_{\mathrm{loc}}$ and its completion $\mathcal A$ of [[def-qsm-quasilocal-spin-algebra]] are well defined; $\mathcal A$ is a unital complex C*-algebra and $\mathcal A_{\mathrm{loc}}$ is norm dense in it. If $A\in\mathcal A_\Lambda$ and $B\in\mathcal A_\Delta$ for disjoint finite regions $\Lambda,\Delta$, then $AB=BA$.

## Facts & Assumptions

**Given:** The finite spin system of [[def-qsm-local-spin-algebras]], the isometric inclusions of [[lem-qsm-local-spin-inclusions-isometric]], its local union $\mathcal A_{\mathrm{loc}}$, its norm completion $\mathcal A$, and Countable Choice.

[F1] For $\Lambda\subseteq\Lambda'$, the inclusion $T\mapsto T\otimes I$ is isometric and compatible with composition; finite local operators on disjoint regions act on separate tensor factors ([[def-qsm-local-spin-algebras]], [[lem-qsm-local-spin-inclusions-isometric]]).

[F2] [[lem-qsm-finite-matrix-cstar-and-state-duality]] supplies completeness, submultiplicativity, isometric adjoint and $\|T^*T\|=\|T\|^2$ for each finite local matrix algebra with its ordinary operator norm, including dimension one.

[F3] A norm completion of a normed space carries a Banach-space norm extending the original norm, under Countable Choice ([[def-countable-choice]], [[def-completion-of-a-normed-space]], [[thm-metric-completion-carries-a-unique-banach-space-structure]]).

[F4] In the published Cauchy-class completion, termwise addition, scalar multiplication and the limit norm are well defined ([[lem-completion-operations-are-well-defined]]).

[F5] A complex C*-algebra is a complete submultiplicative complex $*$-algebra satisfying $\|x^*x\|=\|x\|^2$; unital C*-algebras have a nonzero identity ([[def-c-star-algebra]]).

## Proof

**Proof technique:** direct.

**Given:** The local system, factor inclusions, norm completion and Countable Choice as specified above.

1.1 For $A\in\mathcal A_\Lambda$ and $B\in\mathcal A_\Delta$, both embed into $\mathcal A_{\Lambda\cup\Delta}$ by [F1]. Thus their sum, product and adjoint are defined in a common finite matrix algebra, so $\mathcal A_{\mathrm{loc}}$ is a unital $*$-algebra. If $A$ has two localization regions, embedding into their union and isometry [F1] show that both assigned norms equal its norm in that common algebra; hence the local norm is well defined. [given, F1, construct]

1.2 By [F3] and [F4], the norm completion is a Banach space and sums, scalar multiples and the limit norm are well defined on Cauchy-sequence classes; the constant sequence at the local unit is its candidate unit, and the local algebra is dense by the definition of completion. [given, F3, F4]

2.1 In any common finite matrix algebra, the operator norm is submultiplicative, the adjoint preserves norm, and [F2] supplies the C*-identity $\|A^*A\|=\|A\|^2$. Isometric inclusions [F1] transfer these identities to $\mathcal A_{\mathrm{loc}}$, so it is a normed $*$-algebra with the C*-identity. [F1, F2, step 1.1]

3.1 Let $(A_n)$ and $(B_n)$ be Cauchy sequences in $\mathcal A_{\mathrm{loc}}$. Each is bounded: after some index its terms lie within one unit of a fixed term, and the finitely many earlier terms have a finite maximum norm. Then
$$\|A_nB_n-A_mB_m\|\le\|A_n\|\,\|B_n-B_m\|+\|A_n-A_m\|\,\|B_m\|$$
shows that $(A_nB_n)$ is Cauchy. If either sequence is replaced by an equivalent one, the same estimate makes the product sequences equivalent. Thus multiplication $[A_n][B_n]:=[A_nB_n]$ is well defined on the completion and obeys $\|xy\|\le\|x\|\,\|y\|$. [step 1.2, step 2.1, algebra]

4.1 Since $\|A_n^*-A_m^*\|=\|A_n-A_m\|$ in the local algebra by step 2.1, $[A_n]^*:=[A_n^*]$ is a well-defined involution on the completion. The Cauchy-sequence identities for product and adjoint show $(xy)^*=y^*x^*$ and associativity; continuity of multiplication and the limit norm pass $\|x^*x\|=\|x\|^2$ from [F2] to every $x$ in the completion. The unit class $[I_{\mathrm{loc}}]$ acts as an identity by termwise multiplication and has norm one by isometry, so $\mathcal A$ satisfies the C*-algebra definition in [F5]. [F2, F5, step 2.1, step 1.2, step 3.1]

5.1 If $A\in\mathcal A_\Lambda$ and $B\in\mathcal A_\Delta$ with $\Lambda\cap\Delta=\varnothing$, in $\mathcal A_{\Lambda\cup\Delta}$ they have forms $A_\Lambda\otimes I_\Delta$ and $I_\Lambda\otimes B_\Delta$. Both products equal $A_\Lambda\otimes B_\Delta$, so $AB=BA$. This proves locality for disjoint finite local factors. [F1, step 1.1] ∎

