---
id: cex-almost-sure-convergence-does-not-imply-convergence-of-expectations
kind: counterexample
title: "Almost-sure convergence does not imply convergence of expectations"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-almost-sure-convergence-of-random-variables, def-expectation-of-a-nonnegative-or-integrable-random-variable]
proof_strategy: direct
sources:
  references:
    - title: "S. Roch, Lecture 3: Modes of convergence, Example 3.11"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes3.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement refuted

Almost-sure convergence alone need not imply convergence of expectations.

## Facts & Assumptions

**Given:** Lebesgue probability space $(0,1)$ and
$X_n=(n+1)\mathbf1_{(0,1/(n+1))}$ for $n\in\mathbb N$.

[L1] Almost-sure convergence is pointwise convergence off a null set ([[def-almost-sure-convergence-of-random-variables]]).

[L2] Expectation is integration against the probability measure ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]]).

## Counterexample

**Proof technique:** direct.

1.1 For every $x\in(0,1)$, eventually $x>1/(n+1)$, so $X_n(x)=0$. [L1]
Hence $X_n\to0$ almost surely by [L1]. [L1]

2.1 Yet [L2] gives [step 1.1, L2]
$\mathbb E X_n=\int_0^{1/(n+1)}(n+1)\,dx=1$ for every $n$, whereas
$\mathbb E0=0$. Thus the expectations do not converge. [step 1.1, L2] ∎
