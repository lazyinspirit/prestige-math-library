---
id: def-left-and-right-weak-global-dimension
title: "Left and right weak global dimension"
kind: definition
status: draft
origin: pipeline
deps: ["def-flat-dimension-of-a-module"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Definition

The left weak global dimension of $R$ is
$\sup\{\operatorname{fd}_R M:M\text{ a left }R\text{-module}\}$, and the
right weak global dimension is the analogous supremum over right modules.
The supremum is allowed to be $\infty$.
