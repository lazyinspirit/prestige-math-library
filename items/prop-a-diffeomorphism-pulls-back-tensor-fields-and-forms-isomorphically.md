---
id: prop-a-diffeomorphism-pulls-back-tensor-fields-and-forms-isomorphically
kind: proposition
title: "A diffeomorphism pulls back tensor fields and forms isomorphically"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-pullback-of-covariant-tensors-is-smooth-and-functorial,
       prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges,
       def-diffeomorphism-and-local-diffeomorphism-of-manifolds]
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

If $F:M\to N$ is a diffeomorphism, then pullback by $F$ is an isomorphism on
covariant tensor fields and on differential forms. Its inverse is pullback by
$F^{-1}$.

## Facts & Assumptions

**Given:** A diffeomorphism $F:M\to N$ with inverse $F^{-1}$.

[F1] A diffeomorphism has a smooth inverse ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

[L1] Covariant tensor pullback and form pullback are functorial ([[prop-pullback-of-covariant-tensors-is-smooth-and-functorial]], [[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]]).

## Proof
**Proof technique:** direct.

1.1 By [F1], both $F$ and $F^{-1}$ are smooth, so [L1] gives pullback maps in both directions on covariant tensor fields and on forms. [F1, L1, given]

2.1 Functoriality from [L1] yields $$ (F^{-1})^*\circ F^*=(F\circ F^{-1})^*=\operatorname{id}^*,\qquad F^*\circ(F^{-1})^*=((F^{-1})\circ F)^*=\operatorname{id}^*. $$ The identity pullback is the identity map by the same functoriality statements. [L1, step 1.1, algebra]

3.1 Hence $F^*$ is an isomorphism with inverse $(F^{-1})^*$ on covariant tensor fields and on differential forms. [step 2.1] ∎