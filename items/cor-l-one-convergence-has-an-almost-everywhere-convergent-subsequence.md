---
id: cor-l-one-convergence-has-an-almost-everywhere-convergent-subsequence
kind: corollary
title: "Convergence in L^1(mu) has an almost-everywhere convergent subsequence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-l-one-convergence-implies-convergence-in-measure, thm-riesz-subsequence-theorem-for-convergence-in-measure]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Corollary 2.32"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space and let
$f_n,f : X \to \mathbb R$ be measurable with $f_n,f \in L^1(\mu)$. If $f_n \to f$
in $L^1(\mu)$, then some subsequence of $(f_n)$ converges to $f$
$\mu$-almost everywhere.

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$, measurable real-valued integrable functions $f_n,f \in L^1(\mu)$, and convergence of $(f_n)$ to $f$ in $L^1(\mu)$.

[L1] Convergence in $L^1(\mu)$ implies convergence in measure. ([[thm-l-one-convergence-implies-convergence-in-measure]])

[L2] Convergence in measure has a subsequence converging almost everywhere to the same limit. ([[thm-riesz-subsequence-theorem-for-convergence-in-measure]])

## Proof

**Proof technique:** direct.

1.1 By [L1], the sequence $(f_n)$ converges to $f$ in measure. [L1]

2.1 Apply [L2] to step 1.1. The resulting subsequence converges to $f$ almost everywhere. [step 1.1, L2] ∎
