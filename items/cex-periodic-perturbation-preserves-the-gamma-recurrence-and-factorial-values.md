---
id: cex-periodic-perturbation-preserves-the-gamma-recurrence-and-factorial-values
kind: counterexample
title: "A periodic perturbation preserves the Gamma recurrence and factorial values"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [fs-gamma-recurrence-and-factorial-values-do-not-characterize-gamma]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 7 §4"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement refuted

Every meromorphic function with the Gamma recurrence and the Gamma factorial
values must equal Gamma.

## Facts & Assumptions

**Given:** The perturbed function $F(z)=\Gamma(z)e^{\sin(2\pi z)}$.

[L1] The false-statement refutation already proves that $F$ satisfies the Gamma
recurrence and the Gamma factorial values, but is not equal to Gamma
([[fs-gamma-recurrence-and-factorial-values-do-not-characterize-gamma]]).

## Counterexample

**Proof technique:** direct.

1.1 The function $F(z)=\Gamma(z)e^{\sin(2\pi z)}$ is meromorphic, because Gamma is meromorphic and the exponential factor is entire. [given]
2.1 By [L1], this same $F$ has the Gamma recurrence and the Gamma factorial values while still differing from Gamma. Hence it is a counterexample to the statement refuted. [step 1.1, L1] ∎