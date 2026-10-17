---
id: lem-qsm-consistent-local-states
kind: lemma
title: Consistent local densities extend to an algebraic state
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
- def-qsm-infinite-algebraic-state
- lem-qsm-quasilocal-completion
- lem-qsm-matrix-state-calculus
- def-countable-choice
- def-qsm-local-spin-algebras
- lem-qsm-local-spin-inclusions-isometric
- def-qsm-quasilocal-spin-algebra
- lem-qsm-finite-matrix-cstar-and-state-duality
dependency_roles:
  def-qsm-infinite-algebraic-state: mathematical-premise
  lem-qsm-quasilocal-completion: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  lem-qsm-local-spin-inclusions-isometric: mathematical-premise
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
  - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §§2.4 and 3.2.3, pp. 34–36 and 55–57
    url: https://arxiv.org/pdf/1311.2717
  - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §4 and Chapter 3 §1, pp.
      6–8 and 25–26
    url: https://arxiv.org/pdf/math-ph/0107009
---

## Statement

Assume Countable Choice for the norm completion in [[def-qsm-quasilocal-spin-algebra]]. Let $\{\rho_\Lambda\}$ be positive trace-one matrices, one on each finite-region algebra $\mathcal A_\Lambda$ of [[def-qsm-local-spin-algebras]], such that for every $\Lambda\subseteq\Lambda'$ their partial traces agree: $\operatorname{Tr}_{\Lambda'\setminus\Lambda}(\rho_{\Lambda'})=\rho_\Lambda$. There is a unique infinite algebraic state $\omega$ on $\mathcal A$ whose restriction to each $\mathcal A_\Lambda$ is $A\mapsto\operatorname{Tr}_{\Lambda}(\rho_\Lambda A)$.

## Facts & Assumptions

**Given:** Countable Choice, the local spin algebra and its norm completion, and a family $\rho_\Lambda=\rho_\Lambda^*\ge0$ with $\operatorname{Tr}_{\Lambda}\rho_\Lambda=1$ satisfying all finite partial-trace consistency equations.

[F1] The local algebras form a directed family with isometric inclusions; their union $\mathcal A_{\mathrm{loc}}$ is a unital $*$-algebra dense in the completed C*-algebra $\mathcal A$ ([[def-qsm-local-spin-algebras]], [[lem-qsm-local-spin-inclusions-isometric]], [[def-qsm-quasilocal-spin-algebra]], [[lem-qsm-quasilocal-completion]]).

[F2] [[lem-qsm-finite-matrix-cstar-and-state-duality]] supplies the unique finite density/state correspondence and $|\operatorname{Tr}(\rho A)|\le\|A\|$ for every complex matrix $A$, with functional norm one for trace-one positive $\rho$.

[F3] An infinite algebraic state is a bounded normalized positive functional on $\mathcal A$, and its restrictions are represented by finite density matrices ([[def-qsm-infinite-algebraic-state]]).

## Proof

**Proof technique:** direct.

**Given:** The density family and consistency hypotheses of the Statement, Countable Choice, and the finite-matrix interface [F2].

1.1 For $A\in\mathcal A_\Lambda$, define $\omega_0(A):=\operatorname{Tr}_{\Lambda}(\rho_\Lambda A)$. This is independent of the chosen localization region: if $A$ is also viewed in $\mathcal A_\Delta$, embed both representatives into $\mathcal A_{\Lambda\cup\Delta}$; the two partial-trace consistency equations make both pairings equal to the one computed using $\rho_{\Lambda\cup\Delta}$. Thus $\omega_0$ is a well-defined functional on $\mathcal A_{\mathrm{loc}}$. [given, F1, construct]

2.1 Linearity follows by placing any two local arguments and their sum in one common finite region. The identity has value $\operatorname{Tr}_{\Lambda}(\rho_\Lambda I)=1$, and for local $A$, [F2] gives $\omega_0(A^*A)=\operatorname{Tr}_{\Lambda}(\rho_\Lambda A^*A)\ge0$. Therefore $\omega_0$ is normalized and positive on $\mathcal A_{\mathrm{loc}}$. [given, F2, step 1.1]

3.1 For local $A$, its restriction is the normalized finite-matrix state from [F2], whose functional norm is one. Hence $|\omega_0(A)|\le\|A\|$. [F2, step 2.1]

4.1 The bound of step 3.1 makes $\omega_0$ continuous and uniquely extendible from the dense subalgebra $\mathcal A_{\mathrm{loc}}$ to a bounded linear functional $\omega$ on $\mathcal A$, with $\|\omega\|\le1$. It remains normalized because $I\in\mathcal A_{\mathrm{loc}}$ and $\omega_0(I)=1$; since $\|I\|=1$, this also gives $\|\omega\|\ge1$, hence $\|\omega\|=1$. For any $X\in\mathcal A$, choose local $X_n\to X$; then $X_n^*X_n\to X^*X$ by continuity of multiplication and adjoint, and $\omega(X^*X)=\lim_n\omega_0(X_n^*X_n)\ge0$. Thus $\omega$ is an infinite algebraic state. [F1, F3, step 2.1, step 3.1, construct]

5.1 Any state with the prescribed local restrictions agrees with $\omega_0$ on $\mathcal A_{\mathrm{loc}}$ and hence agrees with $\omega$ on its norm closure, since both are continuous and $\mathcal A_{\mathrm{loc}}$ is dense. The extension is unique. [F1, F3, step 4.1] ∎

