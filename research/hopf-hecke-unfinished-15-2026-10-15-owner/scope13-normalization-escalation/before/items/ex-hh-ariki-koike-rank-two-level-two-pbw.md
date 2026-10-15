---
id: ex-hh-ariki-koike-rank-two-level-two-pbw
kind: example
title: "The eight PBW words at level two and rank two"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 0
deps:
  - def-hh-multiplicative-cyclotomic-hecke-algebra
  - thm-hh-ariki-koike-basis-and-generic-splitness
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

For $r=n=2$ over $R=\mathbb Z[Q^{\pm1},u_1^{\pm1},u_2^{\pm1}]$, the Ariki–Koike PBW basis is

$$\{1,X_1,X_2,X_1X_2,T_1,X_1T_1,X_2T_1,X_1X_2T_1\}.$$

The relations include $X_1^2=(u_1+u_2)X_1-u_1u_2$, $T_1^2=(Q-1)T_1+Q$, and $X_2=Q^{-1}T_1X_1T_1$.

## Facts & Assumptions

**Given:** The multiplicative cyclotomic presentation and the Ariki–Koike PBW theorem over $R$.

[F1] [[def-hh-multiplicative-cyclotomic-hecke-algebra]]: $(T_1-Q)(T_1+1)=0$.

[F2] [[def-hh-multiplicative-cyclotomic-hecke-algebra]]: the affine relation is $T_1X_1T_1=QX_2$.

[F3] [[def-hh-multiplicative-cyclotomic-hecke-algebra]]: the level-two cyclotomic relation is $(X_1-u_1)(X_1-u_2)=0$.

[F4] [[thm-hh-ariki-koike-basis-and-generic-splitness]]: $X_1^{a_1}X_2^{a_2}T_w$, $0\le a_1,a_2<2$, $w\in S_2$, is an $R$-basis.

## Verification

**Given:** $r=n=2$, the generators $X_1,X_2,T_1$, and the ordered PBW family from the example.

1.1 Expanding the level-two cyclotomic polynomial [F3] gives $X_1^2=(u_1+u_2)X_1-u_1u_2$. Expanding the Hecke quadratic [F1] gives $T_1^2=(Q-1)T_1+Q$, and the affine relation [F2] gives $X_2=Q^{-1}T_1X_1T_1$ because $Q$ is a unit. [F1, F2, F3, algebra]

1.2 The exponent pairs $(a_1,a_2)\in\{0,1\}^2$ give $1,X_1,X_2,X_1X_2$, and $S_2=\{1,s_1\}$ gives the two right factors $1,T_1$. Their eight products are exactly the displayed list. [given, algebra]

2.1 The basis theorem [F4] applies with these values of $r,n$ and declares this enumerated PBW family an $R$-basis. The relations in step 1.1 are the corresponding reductions in this presentation. [F1, F2, F3, F4, step 1.1, step 1.2] ∎
