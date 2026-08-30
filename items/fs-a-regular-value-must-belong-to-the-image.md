---
id: fs-a-regular-value-must-belong-to-the-image
kind: false-statement
title: "A regular value need not belong to the image"
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

## Statement

**False claim:** every regular value of a smooth map lies in its image.

## Facts & Assumptions

**Given:** The map $f:\mathbb R\to\mathbb R$, $f(x)=e^x$.

[F1] A value is regular when every point of its fibre is regular, and the empty
fibre is allowed ([[def-regular-and-critical-points-and-values]]).

[L1] The derivative of $e^x$ is $e^x$
([[thm-derivative-of-exponential]]), and the exponential maps $\mathbb R$
bijectively onto $(0,\infty)$
([[cor-exponential-is-a-bijection-onto-positive-reals]]).

## Refutation
**Proof technique:** direct.

1.1 The value $0$ is not in the image of $f$, because $e^x>0$ for every real $x$. [given]

2.1 The fibre $f^{-1}(0)$ is empty. By [F1], the regular-value condition is therefore vacuous, and [L1] is consistent with that since there are no nonregular fibre points to check. [F1, L1, step 1.1]

3.1 Thus $0$ is a regular value that is not attained, so the claim is false. [step 1.1, step 2.1] ∎
