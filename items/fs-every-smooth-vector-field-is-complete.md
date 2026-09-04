---
id: fs-every-smooth-vector-field-is-complete
kind: false-statement
title: "FALSE: every smooth vector field is complete"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complete-vector-field, prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf"
---

## Statement

**False claim:** every smooth vector field on a smooth manifold is complete.

## Facts & Assumptions

**Given:** The vector field $X=x^2\,d/dx$ on $\mathbb R$.

[L1] A vector field is complete if and only if its flow is global ([[prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global]]).

## Refutation

**Proof technique:** direct.

1.1 The integral curve through $x_0>0$ is $$ \gamma(t)=\frac{x_0}{1-x_0t}, $$ because $\gamma(0)=x_0$ and $\gamma'(t)=\gamma(t)^2$. [given]

2.1 The denominator in step 1.1 vanishes at $t=1/x_0$, so the solution cannot be extended to all real times. Thus the flow is not global, and [L1] shows that $X$ is not complete. [L1, step 1.1]

3.1 Hence a smooth vector field need not be complete. [step 2.1] ∎
