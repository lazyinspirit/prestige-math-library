---
id: def-tikhonov-regularised-least-squares
kind: definition
title: "The Tikhonov regularised least-squares objective $\\|Ax-b\\|_2^2+\\lambda\\|x\\|_2^2$ for $\\lambda>0$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-inner-product-norm]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Stanford CS205L, Unit 12: Regularization"
      url: "https://web.stanford.edu/class/cs205l/assets/unit_12_regularization.pdf"
---

## Definition

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$, let
$A\in M_{m\times n}(\mathbb F)$, let $b\in\mathbb F^m$, and let
$\lambda\in\mathbb R$ satisfy $\lambda>0$. The **Tikhonov regularised
least-squares objective** is the map

$$ J_\lambda(x):=\|Ax-b\|_2^2+\lambda\|x\|_2^2 \qquad(x\in\mathbb F^n), $$

where $\|\cdot\|_2$ is the Euclidean norm induced by the standard inner product
([[def-inner-product-norm]]).

The parameter $\lambda$ is part of the problem data. The second term penalises
large norms of $x$, so the regularised problem is not the same optimisation
problem as the unregularised least-squares problem.
