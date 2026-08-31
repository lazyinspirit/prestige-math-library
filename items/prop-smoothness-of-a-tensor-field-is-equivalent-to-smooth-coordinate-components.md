---
id: prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components
kind: proposition
title: "Smoothness of a tensor field is equivalent to smooth coordinate components"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-smooth-tensor-field,
       thm-tensor-transition-laws-define-a-smooth-vector-bundle,
       prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Statement

A type $(r,s)$ tensor field is smooth if and only if, in every smooth chart,
its coordinate component functions are smooth.

## Facts & Assumptions

**Given:** A type $(r,s)$ tensor field $T$ on a smooth manifold $M$.

[F1] A smooth tensor field is a smooth section of the tensor bundle ([[def-smooth-tensor-field]]).

[L1] The tensor bundle is a smooth vector bundle with the standard tensor-coordinate trivializations ([[thm-tensor-transition-laws-define-a-smooth-vector-bundle]]).

[L2] Smoothness of a section is equivalent to smoothness of its local component functions ([[prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components]]).

## Proof
**Proof technique:** direct.

1.1 By [F1] and [L1], a tensor field is a section of a smooth vector bundle whose local bundle coordinates are exactly the tensor coefficients relative to the chart bases $\partial/\partial x^i$ and $dx^i$. [F1, L1, given]

2.1 Applying [L2] to those trivializations shows that the section is smooth exactly when each local coefficient function is smooth. [L1, L2, step 1.1]

3.1 Therefore smoothness of a tensor field is equivalent to smoothness of its coordinate components. [step 2.1] ∎