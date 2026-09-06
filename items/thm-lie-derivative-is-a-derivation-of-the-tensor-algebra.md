---
id: thm-lie-derivative-is-a-derivation-of-the-tensor-algebra
kind: theorem
title: "The Lie derivative is a derivation of the tensor algebra"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lie-derivative-of-a-tensor-field, prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

The Lie derivative obeys $\mathcal L_X(S\otimes T)=(\mathcal L_XS)\otimes T+S\otimes(\mathcal L_XT)$ and commutes with every natural contraction.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that If $X$ has local flow $\Phi_t$ and $T$ is a smooth tensor field, its Lie derivative is $$\mathcal L_XT=\left.\frac d{dt}\right|_{t=0}\Phi_t^*T,$$ on every local flow domain where this derivative is defined. ([[def-lie-derivative-of-a-tensor-field]]).

## Proof

**Proof technique:** direct.

1.1 Pullback by each local diffeomorphism preserves tensor products and commutes with contraction. [F1, given]

2.1 Differentiate these identities at $t=0$ and use the ordinary product rule for the tensor-product identity. [step 1.1] ∎

