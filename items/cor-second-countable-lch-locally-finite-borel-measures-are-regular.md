---
id: cor-second-countable-lch-locally-finite-borel-measures-are-regular
kind: corollary
title: "Locally finite Borel measures on second-countable LCH spaces are regular"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact, def-second-countable-space, lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]
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

Every Borel measure finite on compact sets on a second-countable LCH space is regular.

## Facts & Assumptions

**Given:** $X$ is second-countable and LCH, and $\mu$ is finite on compact sets.

[L1] An LCH space has a base of open sets with compact closure. ([[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]])

[L2] If every open set is sigma-compact, compact-finite Borel measures are regular. ([[thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact]])

## Proof

**Proof technique:** direct.

1.1 Refining a countable base by [L1] gives a countable base $(V_n)$ with compact closures. Every open $U$ is the union of those $V_n$ whose closures lie in $U$, hence is a countable union of compact sets $\overline{V_n}$. [L1]

2.1 Thus every open set is sigma-compact, and [L2] applies to $\mu$. [step 1.1, L2] ∎
