---
id: "fs-critical-hausdorff-measure-is-always-finite-positive"
kind: "false-statement"
title: "Critical Hausdorff measure is always finite and positive"
deps: ["cex-dimension-one-binary-digit-set-with-zero-length", "thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line", "cor-euclidean-hausdorff-dimension"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Bishop–Peres Proposition 1.2.6 and Example 1.4.2
      url: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: published
origin: "pipeline"
---

## Statement

Assume the Axiom of Countable Choice. The assertion “if $\dim_H A=s<\infty$, then $0<\mathcal H^s(A)<\infty$” is false. Both the lower and upper strict inequalities can fail at dimension one.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Under the standing Countable Choice hypothesis, the nonsquare-position digit set is compact of dimension one and has $\mathcal H^1=0$. [[cex-dimension-one-binary-digit-set-with-zero-length]]

[F2] Under the standing Countable Choice hypothesis, for every subset $A\subseteq\mathbb R$, $\mathcal H^1(A)=\lambda_1^*(A)$. [[thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line]]

[F3] Under the standing Countable Choice hypothesis, $\dim_H\mathbb R=1$. [[cor-euclidean-hausdorff-dimension]]

## Refutation

1.1 The nonsquare-position digit set has dimension one but critical measure zero. Hence dimension alone does not force positive critical measure. [F1]

2.1 The real line also has dimension one but critical measure infinity. Hence dimension alone does not force finite critical measure either. The two witnesses refute the two strict inequalities separately. [F2, F3, step 1.1] ∎
