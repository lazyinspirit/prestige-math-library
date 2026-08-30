---
id: ex-a-regular-value-with-empty-fibre
kind: example
title: "A value outside the image can still be regular"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-and-critical-points-and-values, thm-derivative-of-exponential,
       cor-exponential-is-a-bijection-onto-positive-reals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, Theorem 3.3 context"
      url: "https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf"
---

## Example

For the smooth map $f:\mathbb R\to\mathbb R$, $f(x)=e^x$, the value $0$ is a
regular value even though $f^{-1}(0)=\varnothing$.

## Facts & Assumptions

**Given:** The map $f(x)=e^x$.

[F1] The definition of regular value allows the fibre to be empty
([[def-regular-and-critical-points-and-values]]).

[L1] The derivative of $e^x$ is $e^x$
([[thm-derivative-of-exponential]]), and the exponential maps $\mathbb R$
bijectively onto $(0,\infty)$
([[cor-exponential-is-a-bijection-onto-positive-reals]]).

## Verification
**Proof technique:** direct.

1.1 The image of $f$ is $(0,\infty)$, so $f^{-1}(0)=\varnothing$. [given]

2.1 By [F1], regularity of $0$ asks whether every point of the empty fibre is regular, which is vacuously true. The derivative fact [L1] is compatible with that conclusion because the map has no critical point over $0$. [F1, L1, step 1.1]

3.1 Hence $0$ is a regular value although it is not attained. [step 1.1, step 2.1] ∎
