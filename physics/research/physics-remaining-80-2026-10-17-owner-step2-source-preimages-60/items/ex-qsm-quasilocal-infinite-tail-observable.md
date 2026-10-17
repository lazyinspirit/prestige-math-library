---
id: ex-qsm-quasilocal-infinite-tail-observable
kind: example
title: A norm-convergent observable with no finite localization region
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps: [lem-qsm-integer-lattice-countable, def-qsm-local-spin-algebras, lem-qsm-local-spin-inclusions-isometric, def-qsm-quasilocal-spin-algebra, lem-qsm-quasilocal-completion]
dependency_roles:
  lem-qsm-integer-lattice-countable: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  lem-qsm-local-spin-inclusions-isometric: mathematical-premise
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  lem-qsm-quasilocal-completion: mathematical-premise
dependency_level: 6
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §1.2 and §3.2.2–3.2.3, pp. 5–6 and 55–57
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 3 §1, pp. 25–26
      url: https://arxiv.org/pdf/math-ph/0107009
verification:
  precheck: pass
---

## Statement

Take $d=1$ and $q=2$. For $n\ge1$, let $Z_n$ be the one-site Pauli matrix $Z=\operatorname{diag}(1,-1)$ embedded at site $n\in\mathbb Z$. The sequence

$$H_N:=\sum_{n=1}^N2^{-n}Z_n$$

converges in norm in the quasi-local algebra to an element $H$. This element is self-adjoint but has no finite localization region. Thus norm completion adds observables that are not strictly local.

## Facts & Assumptions

**Given:** $d=1$, $q=2$, the local algebras and factor inclusions, and the norm completion $\mathcal A$.

[F1] The lattice $\mathbb Z$ has infinitely many distinct positive sites ([[lem-qsm-integer-lattice-countable]] and the usual integer order).

[F2] Each one-site Pauli matrix $Z$ is self-adjoint and has operator norm one; the factor inclusions are isometric ([[def-qsm-local-spin-algebras]], [[lem-qsm-local-spin-inclusions-isometric]]).

[F3] $\mathcal A_{\mathrm{loc}}$ is dense in its norm completion $\mathcal A$, multiplication and adjoint extend continuously, and disjoint local factors commute ([[def-qsm-quasilocal-spin-algebra]], [[lem-qsm-quasilocal-completion]]).

## Proof

**Proof technique:** direct.

**Given:** The sequence $(H_N)$ and facts [F1]–[F3].

1.1 If $M>N$, the triangle inequality and isometric inclusions give $\|H_M-H_N\|\le\sum_{n=N+1}^{M}2^{-n}<2^{-N}$. Thus $(H_N)$ is Cauchy in $\mathcal A_{\mathrm{loc}}$ and converges to some $H\in\mathcal A$ by completion. Since each $H_N$ is self-adjoint and the adjoint extends continuously, $H^*=H$. [given, F2, F3, algebra]

2.1 Fix $k\ge1$ and let $X_k$ be the Pauli $X$ at site $k$. For $N\ge k$, every $Z_n$ with $n\ne k$ commutes with $X_k$ by disjoint locality, while direct multiplication gives $[Z,X]=ZX-XZ=2iY$, where $Y=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$ and $Y^*Y=I$. Hence $[H_N,X_k]=2^{-k}(2iY)_k$ for all $N\ge k$. By continuity of multiplication and norm convergence, $[H,X_k]=2^{1-k}iY_k$, whose norm is $2^{1-k}>0$. [F2, F3, step 1.1, algebra]

3.1 If $H$ had a finite localization region $\Lambda$, choose $k\ge1$ outside $\Lambda$, possible because $\mathbb Z_{>0}$ is infinite and $\Lambda$ finite. Then [F3] would give $[H,X_k]=0$, contradicting step 2.1. Therefore $H$ has no finite localization region. [F1, F3, step 2.1] ∎
