---
id: thm-rmk-functional-outer-content-is-an-outer-measure
kind: theorem
title: "The RMK functional outer content is an outer measure"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-rmk-functional-outer-content-is-well-defined, lem-finite-lch-partition-of-unity-near-a-compact-set]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

With $\rho$ and $\mu^*$ as in [[lem-rmk-functional-outer-content-is-well-defined]], $\mu^*$ is an outer measure on $X$.

## Facts & Assumptions

**Given:** The functional construction of $\rho$ and $\mu^*$.

[L1] Compact sets admit finite compactly supported partitions subordinate to finite open covers. ([[lem-finite-lch-partition-of-unity-near-a-compact-set]])

## Proof

**Proof technique:** direct.

1.1 The definition gives $\mu^*(\varnothing)=0$ and monotonicity: an open superset of $F$ is also one of $E$ when $E\subseteq F$. [given]

1.2 Let $E\subseteq\bigcup_nE_n$ and choose open $U_n\supseteq E_n$. If $U=\bigcup_nU_n$ and $0\le f\le\mathbf1_U$ has compact support $K$, finitely many $U_{n_j}$ cover $K$. By [L1] there are $\varphi_j\in C_c(X)$ subordinate to those sets with sum $1$ near $K$. Then $f=\sum_jf\varphi_j$, each summand is admissible for $U_{n_j}$, and positivity and linearity give $$\Lambda(f)\le\sum_j\rho(U_{n_j})\le\sum_n\rho(U_n).$$ Taking the supremum over $f$ yields $\rho(U)\le\sum_n\rho(U_n)$. [L1]

2.1 If $\sum_n\mu^*(E_n)=\infty$, countable subadditivity is automatic. Otherwise, for $\varepsilon>0$ choose $U_n\supseteq E_n$ with $\rho(U_n)\le\mu^*(E_n)+\varepsilon2^{-n-1}$. Step 1.2 and $E\subseteq U$ give $$\mu^*(E)\le\rho(U)\le\sum_n\mu^*(E_n)+\varepsilon.$$ Letting $\varepsilon\downarrow0$ proves countable subadditivity. [step 1.2] ∎
