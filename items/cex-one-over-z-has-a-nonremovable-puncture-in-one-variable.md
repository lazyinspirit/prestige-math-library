---
id: cex-one-over-z-has-a-nonremovable-puncture-in-one-variable
kind: counterexample
title: "The one-variable function 1 / z does not extend across the origin"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-simple-pole,
       thm-pole-characterizations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J.-B. Campesato, MAT334 notes index"
      url: "https://www.math.toronto.edu/campesat/mat334.html"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the one-variable function $1/z$ extends holomorphically
across $0$.

## Facts & Assumptions

**Given:** The holomorphic function $f(z)=1/z$ on $0<|z|<1$.

[L1] A simple pole is a pole of order $1$ ([[def-simple-pole]]).

[L2] A pole is exactly a nonremovable singularity whose reciprocal has a zero at
the singular point ([[thm-pole-characterizations]]).

## Counterexample

**Proof technique:** direct.

1.1 The function $f(z)=1/z$ satisfies $z\,f(z)=1$, so $0$ is a pole of order $1$, that is, a simple pole, by [L1]. [given, L1, algebra]

2.1 By [L2], a pole is not removable. Hence $1/z$ does not extend holomorphically across $0$. This is the one-variable contrast to the several-variable puncture theorem. [step 1.1, L2] ∎
