---
id: ex-qsm-quasilocal-two-site-locality
kind: example
title: Two-site Pauli observables commute at disjoint sites
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps: [def-qsm-local-spin-algebras, lem-qsm-local-spin-inclusions-isometric, lem-qsm-quasilocal-completion]
dependency_roles:
  def-qsm-local-spin-algebras: mathematical-premise
  lem-qsm-local-spin-inclusions-isometric: mathematical-premise
  lem-qsm-quasilocal-completion: mathematical-premise
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §1.2 and §3.2.2–3.2.3, pp. 5–6 and 55–57
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 3 §1, pp. 25–26
      url: https://arxiv.org/pdf/math-ph/0107009
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Take $d=1$, spin dimension $q=2$, and distinct sites $x,y\in\mathbb Z$. On $\mathbb C^2$ define the Pauli matrices

$$X=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.$$

Let $X_x$ and $Z_y$ be their one-site observables embedded in the two-site algebra $\mathcal A_{\{x,y\}}$ by the factor inclusions of [[def-qsm-local-spin-algebras]]. Then $X_x$ and $Z_y$ are self-adjoint unitaries of norm one and commute. This is a finite example of the locality clause in [[lem-qsm-quasilocal-completion]].

## Facts & Assumptions

**Given:** The two-site qubit algebra and its isometric factor inclusions.

[F1] A finite region has algebra $\mathcal B(\mathcal H_\Lambda)$, and inclusion into a larger region tensors with the identity ([[def-qsm-local-spin-algebras]]).

[F2] Those factor inclusions preserve products, adjoints and operator norm ([[lem-qsm-local-spin-inclusions-isometric]]).

[F3] Observables supported on disjoint finite regions commute in their common finite tensor algebra ([[lem-qsm-quasilocal-completion]]).

## Proof

**Proof technique:** direct.

**Given:** $x\ne y$, $q=2$, and facts [F1]–[F3].

1.1 Direct matrix multiplication gives $X^*=X$, $Z^*=Z$, $X^2=Z^2=I$, and $\|X\|=\|Z\|=1$ because each preserves the Euclidean norm and is nonzero. By [F2], the embedded $X_x$ and $Z_y$ have the same adjoint, square and norm properties. [given, F1, F2, algebra]

1.2 If $x<y$, lexicographic factor order gives $X_x=X\otimes I$ and $Z_y=I\otimes Z$, so $(X\otimes I)(I\otimes Z)=X\otimes Z=(I\otimes Z)(X\otimes I)$. If $y<x$, the factors are interchanged and both products are $Z\otimes X$. Thus in either ordering $X_xZ_y=Z_yX_x$. [given, F1, algebra]

2.1 The supports $\{x\}$ and $\{y\}$ are disjoint; the computed commutation is therefore the stated instance of the general disjoint-locality clause. [F3, step 1.2] ∎
