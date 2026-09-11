---
id: thm-christoffel-symbol-transformation-law
kind: theorem
title: "Christoffel symbol transformation law"
status: published
origin: pipeline
deps: ["def-christoffel-symbols-of-an-affine-connection","prop-connection-laws-in-directional-form"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

For coordinates $x^i$ and $y^a$, the symbols transform by
$$\widetilde\Gamma^c{}_{ab}=\frac{\partial y^c}{\partial x^k}\left(\frac{\partial x^i}{\partial y^a}\frac{\partial x^j}{\partial y^b}\Gamma^k{}_{ij}+\frac{\partial^2x^k}{\partial y^a\partial y^b}\right).$$
Repeated indices are summed. The second-derivative term is inhomogeneous.

## Facts & Assumptions

**Given:** An affine connection and two overlapping smooth coordinate charts.

[F1] The symbols are the coefficients of coordinate-frame derivatives ([[def-christoffel-symbols-of-an-affine-connection]]).

[F2] The connection is function-linear in the direction and has the section Leibniz rule ([[prop-connection-laws-in-directional-form]]).

## Proof

1.1 Put $J^i_a=\partial x^i/\partial y^a$, so $\partial_{y^a}=J^i_a\partial_{x^i}$. Applying both connection rules gives $\nabla_{\partial_{y^a}}\partial_{y^b}=J^i_a(\partial_{x^i}J^k_b)\partial_{x^k}+J^i_aJ^j_b\Gamma^k{}_{ij}\partial_{x^k}$. The first coefficient is $\partial_{y^a}J^k_b=\partial^2x^k/(\partial y^a\partial y^b)$ by the chain rule. [F1, F2]

2.1 Express $\partial_{x^k}=(\partial y^c/\partial x^k)\partial_{y^c}$ and compare coefficients to obtain the displayed transformation. Identity changes recover the original symbols, affine coordinate changes have no second-derivative term, and dimension one has the corresponding scalar second derivative. Dimension zero has no indices. Coordinate changes have invertible Jacobians; no singular coordinate substitution is admitted. [F1, step 1.1] ∎
