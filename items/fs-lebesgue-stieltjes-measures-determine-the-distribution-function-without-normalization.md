---
id: fs-lebesgue-stieltjes-measures-determine-the-distribution-function-without-normalization
kind: false-statement
title: "FALSE: a Lebesgue-Stieltjes measure determines its distribution function uniquely"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-lebesgue-stieltjes-correspondence-with-distribution-functions]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 1.16"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

**False claim.** A Lebesgue-Stieltjes measure determines a unique distribution
function. The valid statement on this page is only uniqueness modulo additive
constants, with normalization at $0$ choosing one representative.

## Facts & Assumptions

**Given:** Countable choice, a nondecreasing right-continuous function $F : \mathbb{R} \to \mathbb{R}$, and the shifted function $G := F+1$.

[L1] Assuming countable choice, two nondecreasing right-continuous functions define the same Lebesgue-Stieltjes measure exactly when their difference is constant. ([[thm-lebesgue-stieltjes-correspondence-with-distribution-functions]])

## Refutation

**Proof technique:** direct.

1.1 The function $G$ is nondecreasing and right-continuous whenever $F$ is, and [given] $G-F$ is the constant function $1$. [given]

2.1 Therefore [L1] gives $\mu_G = \mu_F$. Unless $F$ already equals $F+1$, [step 1.1, L1] which no real-valued function does, the two distribution functions are distinct. So the measure does not determine a unique representative without a normalization convention. [step 1.1, L1] ∎
