---
id: fs-every-borel-measure-on-an-lch-space-is-radon
kind: false-statement
title: "Every Borel measure on an LCH space is Radon"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-dieudonne-club-set-function-is-a-borel-measure, thm-ordinal-spaces-and-compactness, def-radon-measure-on-an-lch-space]
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

The assertion “every Borel measure on an LCH space is Radon” is false.

## Facts & Assumptions

**Given:** $X=[0,\omega_1]$ and $\bar m$ is the Dieudonne Borel probability measure.

## Refutation

**Proof technique:** counterexample.

1.1 The ordinal space $X$ is compact Hausdorff, hence LCH, and $\bar m$ is a finite Borel measure. The set $Y=[0,\omega_1)$ is open and has $\bar m(Y)=1$. [given]

2.1 Every compact $K\subseteq Y$ is bounded below some $\alpha<\omega_1$, so its complement in $Y$ contains a club and $\bar m(K)=0$. Therefore $$\bar m(Y)=1\ne0=\sup_{K\Subset Y}\bar m(K),$$ contradicting the open-set inner-regularity clause of a Radon measure. [given] ∎
