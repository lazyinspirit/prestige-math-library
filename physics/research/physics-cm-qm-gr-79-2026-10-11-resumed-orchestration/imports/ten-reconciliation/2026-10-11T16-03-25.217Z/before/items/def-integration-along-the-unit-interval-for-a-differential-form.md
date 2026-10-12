---
id: "def-integration-along-the-unit-interval-for-a-differential-form"
kind: "definition"
title: "Integration along the unit interval for a differential form"
deps: ["def-smooth-differential-k-form", "def-interior-product-of-a-form-by-a-vector-field", "thm-differentiation-under-the-integral-sign-on-a-compact-rectangle", "prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds (2014)"
      url: "https://people.maths.ox.ac.uk/~joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf"
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
justified_by: ["lem-the-interval-homotopy-operator-is-coordinate-independent"]
status: published
origin: "pipeline"
---

## Definition

Let $\omega\in\Omega^k(M\times[0,1])$ be smooth up to the endpoints. For $k\ge1$, its **interval integral** is the $(k-1)$-form $K\omega=\int_0^1\beta_t\,dt$, where $\omega=\alpha_t+dt\wedge\beta_t$ and both families are tangential to $M$. Set $K=0$ on degree zero and on zero terms.

Use the product structure of [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]], restricted from $M\times\mathbb R$. The families are intrinsically $\alpha_t=i_t^*\omega$ and $\beta_t=i_t^*(\iota_{\partial_t}\omega)$, using [[def-interior-product-of-a-form-by-a-vector-field]]; evaluation on tangential tuples and on $(\partial_t,v_1,\ldots,v_{k-1})$ proves existence and uniqueness of the decomposition. The integral is in the fixed finite-dimensional fibre $\bigwedge^{k-1}T_x^*M$. Coefficients have smooth local extensions across endpoints. [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]] supplies parameter differentiation; coordinate independence and full smoothness are proved in [[lem-the-interval-homotopy-operator-is-coordinate-independent]].

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Lemma 17.9 and Proposition 17.10, pp.444–445; the proof here computes the product differential directly.
