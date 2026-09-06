---
id: lem-the-flow-definition-of-tensor-lie-derivative-is-local-and-well-defined
kind: lemma
title: "The flow definition of tensor Lie derivative is local and well-defined"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lie-derivative-of-a-tensor-field, thm-fundamental-theorem-on-flows]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

The local-flow definition of $\mathcal L_XT$ is independent of the chosen local flow and depends only on $X$, $T$, and the point.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that If $X$ has local flow $\Phi_t$ and $T$ is a smooth tensor field, its Lie derivative is $$\mathcal L_XT=\left.\frac d{dt}\right|_{t=0}\Phi_t^*T,$$ on every local flow domain where this derivative is defined. ([[def-lie-derivative-of-a-tensor-field]]).

## Proof

**Proof technique:** direct.

1.1 Two local flows of $X$ have, for each starting point, integral curves with the same initial condition. [F1, given]

2.1 Local uniqueness makes the flows equal near $(0,p)$; their pullback curves therefore have the same derivative at zero. [step 1.1] ∎

