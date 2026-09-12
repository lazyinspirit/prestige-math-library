---
id: fs-a-spectral-sequence-collapses-when-one-differential-is-zero
kind: false-statement
title: A spectral sequence collapses when one differential is zero
deps: ["def-collapse-at-a-page", "def-r-page-of-the-spectral-sequence-of-a-filtered-complex", "lem-the-filtered-differential-induces-d-r-on-the-r-page", "lem-abelian-group-model-for-spectral-sequence-computations"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: published
verification:
  audited: 2026-09-12
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---



## Statement

It is false that the vanishing of a single differential $d^s$ implies collapse at $E^s$.

## Facts & Assumptions

**Given:** The two-generator integer complex with filtration degrees 2 and 0.

[F1] Collapse requires every subsequent differential to vanish ([[def-collapse-at-a-page]]).

[F2] Pages are the explicit filtered numerator/denominator quotients ([[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]]).

[F3] The page differential is induced by d on representatives ([[lem-the-filtered-differential-induces-d-r-on-the-r-page]]).

[F4] Integer groups form legitimate objects of the abelian category ([[lem-abelian-group-model-for-spectral-sequence-computations]]).

## Refutation

**Proof technique:** direct.

1.1 In [F4] take $C_2=ℤx$, $C_1=ℤy$, dx=y, and all other groups and differentials zero. Give x filtration degree 2 and y filtration degree 0: a generator is present precisely at or above its degree. This is finite and d preserves filtration because 0≤2. From [F2], $E^0$ has ℤ at (2,0) and (0,1), zero elsewhere. The differential lands two filtration levels lower, so $d^0=0$. [F2, F3, F4]

2.1 At the x position, $A^1_{2,2}=A^2_{2,2}=\mathbb Zx$ and both $B^1,B^2$ are zero. At the y position $A^1_{0,1}=A^2_{0,1}=\mathbb Zy$; the potential boundary sources $F_0C_2$ and $F_1C_2$ are zero, and $F_{-1}C_1=0$. Thus both $E^1$ and $E^2$ have the same two groups. The $d^1$ target from x is (1,0), which is zero, so $d^1=0$; [F3] instead gives $d^2[x]=[y]$, the nonzero identity between the two copies of ℤ. [F2, F3, step 1.1]

3.1 At r=3, the x numerator is zero since dx is not in $F_{-1}C_1$; the y denominator is all ℤy since it now includes $d(F_2C_2)$. Every page term is therefore zero. Thus $d^1=0$ but the sequence does not collapse at $E^1$ by [F1], since $d^2≠0$. [F1, F2, step 2.1] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.
