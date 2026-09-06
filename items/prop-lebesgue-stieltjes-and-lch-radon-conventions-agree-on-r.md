---
id: prop-lebesgue-stieltjes-and-lch-radon-conventions-agree-on-r
kind: proposition
title: "Lebesgue--Stieltjes regularity agrees with the LCH Radon convention on R"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, def-radon-measure-on-an-lch-space, def-borel-measure-finite-on-compact-sets-on-r, thm-existence-of-the-lebesgue-stieltjes-measure, thm-lebesgue-stieltjes-measures-are-regular-on-r]
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

Assume the Axiom of Countable Choice. Every Lebesgue--Stieltjes measure
$\mu_F$ on $\mathbb R$ is Radon in the LCH convention, and its interval convention remains
$\mu_F((a,b])=F(b)-F(a)$ for increasing right-continuous $F$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, an increasing right-continuous
$F$, and its Lebesgue--Stieltjes measure $\mu_F$.

[L1] Under the stated choice hypothesis, $\mu_F$ is a Borel measure finite
on compact sets and regular on $\mathbb R$.
([[thm-existence-of-the-lebesgue-stieltjes-measure]],
[[thm-lebesgue-stieltjes-measures-are-regular-on-r]])

## Proof

**Proof technique:** direct.

1.1 By [L1], $\mu_F$ is finite on compact sets, outer regular on Borel sets, and inner regular by compact sets on Borel sets, hence in particular on open sets. These imply every clause of the LCH Radon definition. [L1]

2.1 No measure is replaced in this comparison, so the defining half-open interval formula and the Borel sigma-algebra from the construction remain unchanged. [given, L1] ∎
