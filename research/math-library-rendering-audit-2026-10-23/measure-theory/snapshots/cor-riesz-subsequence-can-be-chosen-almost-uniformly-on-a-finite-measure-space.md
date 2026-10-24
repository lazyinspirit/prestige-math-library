---
id: cor-riesz-subsequence-can-be-chosen-almost-uniformly-on-a-finite-measure-space
kind: corollary
title: "On a finite measure space, convergence in measure has an almost-uniformly convergent subsequence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-riesz-subsequence-theorem-for-convergence-in-measure, thm-egorovs-theorem]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorems 2.30 and 2.33"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space with $\mu(X)<+\infty$, and let
$f_n,f : X \to \mathbb R$ be measurable. If $f_n \to f$ in measure, then some
subsequence of $(f_n)$ converges to $f$ almost uniformly.

## Facts & Assumptions

**Given:** A finite measure space $(X,\mathcal A,\mu)$ and measurable functions $f_n,f : X \to \mathbb R$ such that $f_n \to f$ in measure.

[L1] Convergence in measure has a subsequence converging almost everywhere to the same limit. ([[thm-riesz-subsequence-theorem-for-convergence-in-measure]])

[L2] On a finite measure space, almost-everywhere convergence implies almost-uniform convergence. ([[thm-egorovs-theorem]])

## Proof

**Proof technique:** direct.

1.1 By [L1], there is a subsequence $(f_{n_k})$ converging to $f$ almost everywhere. [L1]

2.1 Apply [L2] to the subsequence from step 1.1. It converges to $f$ almost uniformly. [step 1.1, L2] ∎
