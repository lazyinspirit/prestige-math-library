---
id: lem-clifford-zero-dimensional-algebra-is-base-field
kind: lemma
title: "The zero-dimensional Clifford algebra is the base field"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-complex-clifford-classification-and-graded-products
dependency_level: 1
deps:
  - def-clifford-algebra-of-a-quadratic-space
  - def-tensor-algebra-of-a-vector-space
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §1.2"
      url: https://arxiv.org/pdf/0805.0311
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Part I, §1, statements (1.1)–(1.4)"
      url: https://www.math.ens.psl.eu/~benoist/refs/ABS.pdf
---

## Statement

Let $k$ be a field of characteristic not $2$, let $V=0$, and let $Q$ be the unique quadratic form on $V$. Then the plus-$Q$ Clifford algebra is $\mathrm{Cl}(0,Q)\cong k$ as a unital $k$-algebra.

## Facts & Assumptions

**Given:** A field $k$ with $\operatorname{char}(k)\ne2$, the zero vector space $V=0$, and its unique quadratic form $Q=0$.

[F1] The plus-$Q$ Clifford algebra is the quotient of $T_k(V)$ by the smallest two-sided ideal containing $j(v)^2-Q(v)1$ for every $v\in V$ ([[def-clifford-algebra-of-a-quadratic-space]]).

[F2] $T_k(V)=\bigoplus_{m\ge0}V^{\otimes m}$ with $V^{\otimes0}=k$ and multiplication by concatenation ([[def-tensor-algebra-of-a-vector-space]]).

## Proof

**Proof technique:** evaluate the quotient in dimension zero.

1.1 Since $V=0$, every tensor power $V^{\otimes m}$ with $m\ge1$ is zero. By [F2], $T_k(0)=k$ and the canonical inclusion $j:V\to T_k(V)$ has only the value $j(0)=0$. [given, F2, algebra]

2.1 The only defining relation in [F1] is $j(0)^2-Q(0)1=0$. The zero ideal already contains this relation, so it is the smallest such two-sided ideal; hence the quotient is $T_k(0)/0=k$ as a unital $k$-algebra. [given, F1, step 1.1, algebra] ∎
