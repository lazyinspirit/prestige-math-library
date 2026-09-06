---
id: fs-c-c-is-dense-in-l-infinity-for-radon-measures
kind: false-statement
title: "C_c(X) is dense in L^infinity(mu) for every Radon measure"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-lebesgue-measure-is-a-radon-measure-on-rn, thm-c-c-is-dense-in-l-p-for-radon-measures, def-compact-support-c-c-and-c-zero-on-an-lch-space]
proof_strategy: direct
verification:
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

The assertion that $C_c(X)$ is dense in $L^\infty(\mu)$ for every Radon measure is false.

## Facts & Assumptions

**Given:** $X=\mathbb R$ with Lebesgue measure and the constant function $1$.

## Refutation

**Proof technique:** counterexample.

1.1 For any $g\in C_c(\mathbb R)$, the complement of $\operatorname{supp}g$ has positive measure and $g=0$ there. Hence $|1-g|=1$ on a set of positive measure, so $\|1-g\|_\infty\ge1$. [given]

2.1 Taking $g=0$ shows the distance is exactly $1$. Thus the finite-$p$ density theorem cannot be extended to $p=\infty$. [step 1.1] ∎
