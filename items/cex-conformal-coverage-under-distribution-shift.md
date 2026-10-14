---
id: cex-conformal-coverage-under-distribution-shift
kind: counterexample
title: "Exchangeability failure can destroy split coverage"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 8
deps:
  - alg-split-conformal-prediction-set
  - thm-split-conformal-marginal-coverage
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
---

## Statement refuted

The split-conformal lower coverage bound holds for arbitrary calibration and
test distributions, even when their joint law is not exchangeable.

## Facts & Assumptions

**Given:** The feature is fixed at $x_0$. The single calibration response is
$Y_1=0$ almost surely and the test response is $Y_2=1$ almost surely. The
training sigma-field is trivial, the response space is $\{0,1\}$, the score is
$s(x,y)=y$, $m=1$, and $\alpha=1/2$.

[F1] The split algorithm takes the $k$th calibration score for $k=\lceil(m+1)(1-\alpha)\rceil\le m$. [[alg-split-conformal-prediction-set]]

[F2] The split coverage theorem requires conditional exchangeability of calibration and test examples given training. [[thm-split-conformal-marginal-coverage]]

## Counterexample

1.1 The calibration and test examples are not exchangeable: the event that the first response is $0$ and the second is $1$ has probability $1$, while the permuted event has probability $0$. [given, F2]

2.1 Here $k=\lceil2(1-1/2)\rceil=1$, so $q=Y_1=0$ by [F1]. Thus $C(x_0)=\{y\in\{0,1\}:y\le0\}=\{0\}$, whereas $Y_2=1$ almost surely. Coverage is $0$, refuting the claim without exchangeability. [given, F1, step 1.1] ∎
