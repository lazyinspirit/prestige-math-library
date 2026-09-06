---
id: prop-lie-derivative-agrees-with-x-on-functions-and-bracket-on-vector-fields
kind: proposition
title: "Tensor Lie derivative agrees with $X$ on functions and bracket on vector fields"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lie-derivative-of-a-tensor-field, def-lie-derivative-of-a-function, thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

For a function $f$ and vector field $Y$, $$\mathcal L_Xf=Xf\quad\hbox{and}\quad\mathcal L_XY=[X,Y].$$

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that If $X$ has local flow $\Phi_t$ and $T$ is a smooth tensor field, its Lie derivative is $$\mathcal L_XT=\left.\frac d{dt}\right|_{t=0}\Phi_t^*T,$$ on every local flow domain where this derivative is defined. ([[def-lie-derivative-of-a-tensor-field]]).

## Proof

**Proof technique:** direct.

1.1 For functions, $\Phi_t^*f=f\circ\Phi_t$, whose derivative at zero is $Xf$. [F1, given]

2.1 For vector fields, differentiating the pullback uses the inverse-time pushforward convention and yields the established bracket $[X,Y]$. [step 1.1] ∎

