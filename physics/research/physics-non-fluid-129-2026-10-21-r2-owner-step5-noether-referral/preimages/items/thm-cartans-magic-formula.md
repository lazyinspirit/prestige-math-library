---
id: thm-cartans-magic-formula
kind: theorem
title: "Cartan's magic formula"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exterior-derivative-by-the-invariant-vector-field-formula, prop-exterior-derivative-of-a-function-is-its-differential, thm-the-exterior-derivative-is-a-graded-derivation, def-lie-derivative-of-a-differential-form, prop-lie-derivative-of-forms-is-a-degree-zero-graded-derivation, prop-interior-product-on-forms-is-a-graded-antiderivation]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
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

For every vector field $X$ and differential form $\omega$, $$\mathcal L_X\omega=d(\iota_X\omega)+\iota_X(d\omega).$$

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that For $f\in C^\infty(M)=\Omega^0(M)$, $df(X)=Xf$ for every smooth vector field $X$. ([[prop-exterior-derivative-of-a-function-is-its-differential]]).

[F2] For a one-form $\alpha$, the invariant formula gives $d\alpha(X,Y)=X\alpha(Y)-Y\alpha(X)-\alpha([X,Y])$ ([[def-exterior-derivative-by-the-invariant-vector-field-formula]]).

## Proof

**Proof technique:** direct.

1.1 For a function $f$, the right side is $\iota_Xdf=Xf=\mathcal L_Xf$; for a one-form $\alpha$, evaluate both sides on $Y$ and use $d\alpha(X,Y)=X\alpha(Y)-Y\alpha(X)-\alpha([X,Y])$. [F1, F2, given]

2.1 Both $\mathcal L_X$ and $d\iota_X+\iota_Xd$ are degree-zero derivations, so equality on functions and exact coordinate one-forms extends to every local coordinate expression and hence globally. [step 1.1] ∎
