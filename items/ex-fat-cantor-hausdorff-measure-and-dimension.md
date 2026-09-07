---
id: "ex-fat-cantor-hausdorff-measure-and-dimension"
kind: "example"
title: "The fat Cantor set has positive length and dimension one"
deps: ["def-fat-cantor-set", "thm-fat-cantor-set-has-positive-measure", "thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line", "thm-hausdorff-dimension-critical-exponent", "thm-continuity-from-above-for-measures"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Bishop–Peres §1.2 p.7 positive-volume consequence; existing fat Cantor construction
      url: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Example

Assume the Axiom of Countable Choice. For the Smith–Volterra–Cantor set $S$,

$$\mathcal H^1(S)=\lambda_1(S)=\tfrac12,\qquad\dim_H S=1.$$

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] The stage-$n$ set $S_n$ consists of $2^n$ intervals of length $\ell_n$, with $\ell_0=1$ and $\ell_{n+1}=(\ell_n-4^{-n-1})/2$; the stages decrease to $S$. [[def-fat-cantor-set]]

[F2] The fat Cantor set is closed and bounded; every interval cover has total length at least $1/2$. [[thm-fat-cantor-set-has-positive-measure]]

[F3] Under the standing Countable Choice hypothesis, on the line $\mathcal H^1$ equals Lebesgue outer measure. [[thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line]]

[F4] Finite positive measure at exponent one forces dimension one. [[thm-hausdorff-dimension-critical-exponent]]

[F5] For decreasing measurable sets, continuity from above holds if some member has finite measure. [[thm-continuity-from-above-for-measures]]

## Verification

1.1 The construction intervals at a fixed level are disjoint, and induction in the defining recursion gives $2^n\ell_n=\tfrac12+2^{-n-1}$. Thus $\lambda_1(S_n)=\tfrac12+2^{-n-1}$. The stages are closed, and $\lambda_1(S_0)=1<\infty$. Their intersection is the closed set $S$. [F1, F2]

2.1 Continuity from above yields $\lambda_1(S)=\lim_n\lambda_1(S_n)=1/2$. The equality with $\mathcal H^1$ and the finite-positive criterion give the stated measure and dimension. Thus the earlier cover lower bound has been matched by an exact measure calculation here. [F3, F4, F5, step 1.1] ∎
