---
id: thm-incidence-functions-form-a-ring
kind: theorem
title: "Pointwise addition and convolution make $I(P,R)$ a ring with identity $\\delta$"
status: published
origin: session
deps: [lem-incidence-convolution-associative-and-distributive, def-delta-and-zeta-incidence-functions, def-ring, def-ring-of-functions]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "F. Gotti, Incidence Algebras, MIT 18.211 notes"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/38.%20Mobius%20Inversion%20Formula/Incidence%20Algebras.pdf"
pipeline_run: null
---

## Statement

If $P$ is locally finite and $R$ is a commutative ring, then pointwise addition and incidence convolution make $I(P,R)$ a ring whose multiplicative identity is the delta incidence function $\delta$.

## Facts & Assumptions

**Given:** A locally finite poset $P$, a commutative ring $R$, and $f\in I(P,R)$.

[L1] All functions from a set into a ring form an abelian group under pointwise addition, with pointwise zero and additive inverses ([[def-ring-of-functions]], [[def-ring]]).

[L2] Incidence convolution is associative and distributes over pointwise addition on both sides ([[lem-incidence-convolution-associative-and-distributive]]).

[F1] $\delta(x,y)$ is $1_R$ on the diagonal and $0_R$ off it ([[def-delta-and-zeta-incidence-functions]]).

## Proof

**Proof technique:** direct.

1.1 Since $I(P,R)$ is the set of functions from the comparable pairs of $P$ to $R$, [L1] makes it an abelian group under pointwise addition. [L1]

1.2 Associativity of convolution and both distributive laws are [L2]. [L2]

1.3 For $x\le y$, $(\delta*f)(x,y)=\sum_{x\le z\le y}\delta(x,z)f(z,y)=f(x,y)$ because only the term $z=x$ is nonzero. [F1]

1.4 Likewise $(f*\delta)(x,y)=\sum_{x\le z\le y}f(x,z)\delta(z,y)=f(x,y)$ because only the term $z=y$ is nonzero. [F1]

2.1 Thus convolution is associative, distributes over the pointwise abelian-group operation, and has the two-sided identity $\delta$; these are exactly the ring axioms. [step 1.1, step 1.2, step 1.3, step 1.4, L1] ∎
