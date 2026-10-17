---
id: lem-qsm-kms-strip-uniqueness
kind: lemma
title: Bounded KMS strip norm and zero-edge uniqueness
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - def-qsm-kms-state
  - thm-hadamard-three-lines
dependency_roles:
  def-qsm-kms-state: mathematical-premise
  thm-hadamard-three-lines: mathematical-premise
dependency_level: 8
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.4, Proposition 3.4.5, pp. 74–75
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §7, p. 12
      url: https://arxiv.org/pdf/math-ph/0107009
verification:
  precheck: pass
---

## Statement

Let $b>0$ and $S_b=\{z\in\mathbb C:0\le\operatorname{Im}z\le b\}$, with interior $S_b^\circ=\{z:0<\operatorname{Im}z<b\}$. Let $F:S_b\to\mathbb C$ be bounded (so $\sup_{z\in S_b}|F(z)|<\infty$), continuous, and complex-differentiable at every point of $S_b^\circ$, and set

$$M_0:=\sup_{t\in\mathbb R}|F(t)|,\qquad M_1:=\sup_{t\in\mathbb R}|F(t+ib)|.$$

For $0<s<b$,

$$\sup_{t\in\mathbb R}|F(t+is)|\le M_0^{1-s/b}M_1^{s/b},$$

where each exponent is positive and $0^r=0$ for $r>0$. In particular, if $M_0,M_1\le C$ then $|F(z)|\le C$ on $S_b$. If two bounded continuous functions on $S_b$, holomorphic inside, have the same lower boundary values, then they agree on all of $S_b$.

## Facts & Assumptions

**Given:** $b>0$ and a bounded continuous function $F:S_b\to\mathbb C$ holomorphic on $S_b^\circ$.

[F1] [[thm-hadamard-three-lines]]: for a bounded continuous function on $\{w:0\le\operatorname{Re}w\le1\}$ holomorphic inside, the supremum on an interior vertical line is at most the positive-exponent geometric interpolation of the two boundary suprema. The theorem permits zero boundary suprema because both interpolation exponents are strictly positive.

[F2] [[def-qsm-kms-state]]: the relevant physical-time strip is the closed strip $S_b$ and a KMS correlation function is bounded, continuous on the closed strip, and holomorphic inside.

## Proof

**Proof technique:** rotate and rescale the strip to the unit strip, apply Hadamard's three-lines theorem, and use zero-edge uniqueness.

**Given:** $b>0$, [F1]–[F2], and $F$ as in the Statement.

1.1 The KMS convention in [F2] uses the same closed strip when $b=\beta\hbar$; the following estimate only needs the stated $b>0$ strip hypotheses. Define $G(w):=F(ibw)$ on $0\le\operatorname{Re}w\le1$. If $w=x+iy$, then $ibw=-by+ibx$, so the lines $\operatorname{Re}w=0$ and $\operatorname{Re}w=1$ map to the lower and upper edges of $S_b$. The linear map is holomorphic and maps the open strip to $S_b^\circ$, so $G$ is bounded and continuous on the closed unit strip and holomorphic inside. [given, F1, F2, construct]

2.1 For $0<s<b$, put $x=s/b\in(0,1)$. The vertical line $\operatorname{Re}w=x$ maps onto $\{t+is:t\in\mathbb R\}$, while the boundary suprema of $G$ are exactly $M_0$ and $M_1$. Applying [F1] gives the asserted interpolation inequality. Both exponents $1-x$ and $x$ are positive, so the zero-supremum cases use the defined positive powers and do not invoke $0^0$. [step 1.1, F1, given, algebra]

3.1 If $M_0,M_1\le C$, step 2.1 gives $|F(t+is)|\le C$ for each $0<s<b$; the same bound holds on both edges by definition of $M_0,M_1$. Hence it holds on all of $S_b$. [step 2.1, given]

4.1 Let $F$ and $H$ be two such functions with identical lower edges. Their difference $D=F-H$ is bounded, continuous on $S_b$, holomorphic inside, has lower supremum $0$, and has a finite upper supremum. For every $0<s<b$, step 2.1 applied to $D$ gives $\sup_t|D(t+is)|\le0^{1-s/b}M_1^{s/b}=0$. Thus $D$ vanishes in the open strip; continuity then gives zero on the upper edge as well as the lower edge. [step 2.1, given, algebra] ∎
## Remarks

The boundary uniqueness assertion is used when the lower KMS correlation is already known and a candidate analytic continuation is written explicitly. Boundedness on the whole strip is essential to the cited three-lines theorem; no maximum-principle argument on an unbounded strip is being assumed.
