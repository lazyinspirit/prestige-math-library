---
id: lem-an-analytic-germ-has-a-rational-geometric-majorant
kind: lemma
title: Geometric majorants for analytic germs
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Gantumur, Math 580 Lecture Notes 2: The Cauchy-Kovalevskaya Theorem'
      url: https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf
      locator: Gantumur, §3 equations (29)–(30), printed pp. 7–8; local proof uses polydisc Cauchy estimates.
status: draft
origin: pipeline
proof_strategy: direct
deps: ["def-real-analytic-germ-in-several-variables", "lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation", "thm-cauchy-estimates-on-a-polydisc"]
---

## Statement

For any finite family of analytic germs $f_j$ in $n\ge1$ variables at zero there are $M,r>0$ such that $|[z^\alpha]f_j|\le Mr^{-|\alpha|}$ for every $j,\alpha$. Consequently $f_j\ll M/(1-(z_1+\cdots+z_n)/r)$, and $f_j-f_j(0)\ll M/(1-(z_1+\cdots+z_n)/r)-M$.

## Facts & Assumptions

**Given:** A finite family of analytic germs $f_j$ in $n\ge1$ variables at the origin.

[F1] Real analytic germs have holomorphic complexifications on a positive polydisc. ([[def-real-analytic-germ-in-several-variables]]).

[F2] Cauchy estimates bound every derivative by its factorial times the boundary supremum and inverse polyradius powers. ([[thm-cauchy-estimates-on-a-polydisc]]).

## Proof

1.1 If the family is empty take $M=r=1$. Otherwise F1 gives a common complex polydisc of positive polyradius $R$; take $r=\frac12\min_iR_i$. The finitely many complexifications are continuous on the compact distinguished boundary of the $r$-polydisc. Let $M$ be the larger of $1$ and their finitely many boundary suprema. F2 and $[z^\alpha]f_j=D^\alpha f_j(0)/\alpha!$ give the asserted bound. [given, F1, F2]

2.1 The coefficient of $z^\alpha$ in $M\sum_{q\ge0}((z_1+\cdots+z_n)/r)^q$ is $Mr^{-|\alpha|}|\alpha|!/\alpha!$. The multinomial factor counts arrangements of a multiset and is at least one, including $\alpha=0$. Hence it dominates the bound in step 1.1. Subtracting the respective constants leaves coefficient zero at degree zero and the same inequality in positive degrees, proving the second comparison. [step 1.1, algebra] ∎

## Source notes

Gantumur, §3 equations (29)–(30), printed pp. 7–8; local proof uses polydisc Cauchy estimates.

