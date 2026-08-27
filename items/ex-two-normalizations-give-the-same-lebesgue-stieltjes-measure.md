---
id: ex-two-normalizations-give-the-same-lebesgue-stieltjes-measure
kind: example
title: "Two different normalizations give the same Lebesgue-Stieltjes measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-lebesgue-stieltjes-correspondence-with-distribution-functions]
proof_strategy: direct
verification:
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

## Example

If $G(x)=F(x)+3$, then $F$ and $G$ define the same Lebesgue-Stieltjes measure.
This is the additive-constant ambiguity that the normalization $F_\mu(0)=0$
removes.

## Facts & Assumptions

**Given:** Countable choice, a nondecreasing right-continuous function $F : \mathbb{R} \to \mathbb{R}$, and the shifted function $G := F+3$.

[L1] Assuming countable choice, two nondecreasing right-continuous functions define the same Lebesgue-Stieltjes measure exactly when their difference is constant. ([[thm-lebesgue-stieltjes-correspondence-with-distribution-functions]])

## Verification

**Proof technique:** direct.

1.1 The function $G$ is nondecreasing and right-continuous whenever $F$ is, and [given] $G-F$ is the constant function $3$. [given]

2.1 Therefore [L1] gives $\mu_G=\mu_F$. The two distribution functions are [step 1.1, L1] distinct unless $3=0$, so the normalization convention is doing real work. [step 1.1, L1] ∎
