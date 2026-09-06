---
id: thm-lebesgue-measure-is-a-radon-measure-on-rn
kind: theorem
title: "Lebesgue measure is a Radon measure on R^n"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, def-radon-measure-on-an-lch-space, cor-rn-is-locally-compact-and-sigma-compact, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-lebesgue-outer-regularity-for-arbitrary-subsets, thm-lebesgue-inner-regularity-by-closed-and-compact-sets]
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

Let $n\ge1$ and assume the Axiom of Countable Choice. Lebesgue measure on
$\mathbb R^n$ is a Radon measure, and it is regular in the stronger
compact-inner-regular-on-all-Borel-sets convention.

## Facts & Assumptions

**Given:** $n\ge1$, the Axiom of Countable Choice, and Lebesgue measure
$\lambda^n$ on $\mathbb R^n$.

[L1] Under these hypotheses, Lebesgue measure is finite on bounded sets,
outer regular on arbitrary sets, and compact-inner-regular on measurable
sets. ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]],
[[thm-lebesgue-outer-regularity-for-arbitrary-subsets]],
[[thm-lebesgue-inner-regularity-by-closed-and-compact-sets]])

## Proof

**Proof technique:** direct.

1.1 Compact subsets of $\mathbb R^n$ are bounded, so they have finite measure by [L1]. Outer regularity on Borel sets and compact inner regularity on open sets are also direct instances of [L1]. These are precisely the Radon clauses. [L1]

2.1 The last part of [L1] applies to every Borel set, so the stronger regularity assertion also holds. [L1] ∎
