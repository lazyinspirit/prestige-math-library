---
id: cex-dirichlet-function-is-positive-but-has-zero-lebesgue-integral
kind: counterexample
title: "The Dirichlet function is positive on a dense set but has Lebesgue integral $0$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dirichlet-and-thomae-functions, prop-countable-subsets-of-rn-are-lebesgue-null, thm-nonnegative-integral-zero-iff-zero-almost-everywhere]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, Example 4.2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Statement refuted

A nonnegative function that is positive on a dense subset of $[0,1]$ must have
strictly positive Lebesgue integral.

## Facts & Assumptions

**Given:** The Dirichlet function $\mathbf 1_{\mathbb Q}$ on $\mathbb R$.

[L1] The Dirichlet function is the indicator of the rational reals ([[def-dirichlet-and-thomae-functions]]).

[L2] The rationals in $\mathbb R$ are Lebesgue null ([[prop-countable-subsets-of-rn-are-lebesgue-null]]).

[L3] A nonnegative measurable function has integral $0$ exactly when it vanishes almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1], the restriction of $\mathbf 1_{\mathbb Q}$ to $[0,1]$ is positive at every rational point, hence on a dense subset of $[0,1]$. [L1]

2.1 By [L2], the set $\mathbb Q\cap[0,1]$ on which $\mathbf 1_{\mathbb Q}$ is positive is null. Therefore $\mathbf 1_{\mathbb Q}=0$ almost everywhere on $[0,1]$, so [L3] gives. [L2, L3] ∎

$$\int_{[0,1]}\mathbf 1_{\mathbb Q}\,d\lambda=0.$$

This refutes the Statement.
