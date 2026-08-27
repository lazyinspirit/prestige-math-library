---
id: cex-e-to-one-over-z-shows-essential-singularities-break-the-argument-principle
kind: counterexample
title: "The function e^(1/z) shows that essential singularities lie outside the argument principle"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-argument-principle-null-homologous-cycle]
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
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.4"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the argument principle still applies unchanged when the
enclosed singularity is essential.

## Facts & Assumptions

**Given:** The punctured unit disc and the function $f(z)=e^{1/z}-1$.

[L1] The argument principle requires a finite zero-minus-pole count for a
meromorphic function ([[thm-argument-principle-null-homologous-cycle]]).

## Counterexample

**Proof technique:** direct.

1.1 The equation $e^{1/z}-1=0$ is equivalent to $1/z=2\pi i k$ for some nonzero integer $k$, so the zeros are $$z_k=\frac{1}{2\pi i k}\qquad(k\in\mathbb Z\setminus\{0\}).$$ These are infinitely many distinct points, and they accumulate at $0$. [given, algebra]

2.1 Thus every small circle around $0$ encloses infinitely many zeros of $e^{1/z}-1$, while $0$ is an essential singularity rather than a pole. The finite meromorphic count required by [L1] is unavailable, so the naive extension of the argument principle to essential singularities is false. [step 1.1, L1] ∎
