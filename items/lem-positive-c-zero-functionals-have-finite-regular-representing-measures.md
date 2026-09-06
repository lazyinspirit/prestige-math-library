---
id: lem-positive-c-zero-functionals-have-finite-regular-representing-measures
kind: lemma
title: "Positive C_0(X) functionals have finite regular representing measures"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-compact-support-c-c-and-c-zero-on-an-lch-space, def-regular-borel-measure-on-an-lch-space, thm-rmk-positive-functional-is-integration-against-its-representing-measure, thm-rmk-uniqueness-among-radon-measures]
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

Let $X$ be LCH and let $L:C_0(X;\mathbb R)\to\mathbb R$ be bounded and positive. There is a unique finite regular Borel measure $\mu$ such that
$L(f)=\int f\,d\mu$ for all $f\in C_0(X)$, and $\mu(X)=\|L\|$.

## Facts & Assumptions

**Given:** $L$ is bounded and positive on $C_0(X)$.

[L1] Positive functionals on $C_c(X)$ have unique Radon representing measures. ([[thm-rmk-positive-functional-is-integration-against-its-representing-measure]], [[thm-rmk-uniqueness-among-radon-measures]])

## Proof

**Proof technique:** direct.

1.1 Restrict $L$ to $C_c(X)$ and apply [L1], obtaining a Radon measure $\mu$. For every compact $K$, a cutoff $0\le h\le1$ equal to $1$ on $K$ gives $\mu(K)\le L(h)\le\|L\|$. Inner regularity on $X$ therefore yields $\mu(X)\le\|L\|<\infty$. [L1]

2.1 Conversely, $|L(f)|\le L(|f|)\le\|f\|_\infty\mu(X)$ first for $f\in C_c(X)$. Since $C_c(X)$ is uniformly dense in $C_0(X)$ and $\mu$ is finite, both sides extend continuously to $C_0(X)$, giving the representation and $\|L\|\le\mu(X)$. Thus equality holds. [step 1.1]

3.1 A finite Radon measure is compact-inner-regular on every Borel set: apply open inner regularity to an open superset of the complement and use finite complements. Hence $\mu$ is regular. Uniqueness follows from [L1]. [step 1.1, step 2.1, L1] ∎
