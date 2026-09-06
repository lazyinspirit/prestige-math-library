---
id: thm-rmk-uniqueness-among-radon-measures
kind: theorem
title: "Uniqueness of the RMK representing measure among Radon measures"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rmk-positive-functional-is-integration-against-its-representing-measure, def-radon-measure-on-an-lch-space, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]
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

If two Radon measures $\mu$ and $\nu$ on an LCH space satisfy
$\int f\,d\mu=\int f\,d\nu$ for every $f\in C_c(X)$, then $\mu=\nu$ on $\mathcal B(X)$.

## Facts & Assumptions

**Given:** $\mu,\nu$ are Radon and agree on all $C_c$ integrals.

[L1] LCH cutoffs exist between compact and open sets. ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]])

## Proof

**Proof technique:** direct.

1.1 If $K\subseteq U$ with $K$ compact and $U$ open, choose $f$ by [L1]. Then $$\mu(K)\le\int f\,d\mu=\int f\,d\nu\le\nu(U).$$ Taking the infimum over $U\supseteq K$ gives $\mu(K)\le\nu(K)$ by outer regularity; symmetry gives equality on compact sets. [L1]

2.1 Inner regularity on open sets now gives $\mu(U)=\nu(U)$ for every open $U$. Outer regularity on Borel sets then gives $\mu(E)=\nu(E)$ for every Borel $E$, including infinite values. [step 1.1] ∎
