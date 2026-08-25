---
id: def-functor-tensor-product
kind: definition
title: "The tensor product of a presheaf and a covariant set-valued functor"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-end-and-coend, def-hom-functors-and-hom-bifunctor, prop-sets-and-functions-form-category-set, def-cartesian-product, def-product-category, def-opposite-category, def-presheaf-representable-functor-and-representation]
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "B. Richter, From Categories to Homotopy Theory (author's draft), Example 4.4.7"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Definition

Let $\mathcal C$ be a category, let
$P:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$ be a presheaf
([[def-presheaf-representable-functor-and-representation]],
[[def-opposite-category]]) and let $F:\mathcal C\to\mathbf{Set}$ be a covariant
functor ([[prop-sets-and-functions-form-category-set]]). The assignment

$$T(c_1,c_2):=P(c_1)\times F(c_2)$$

is a functor $\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathbf{Set}$
([[def-product-category]], [[def-cartesian-product]]): it is contravariant in
$c_1$ because $P$ is, covariant in $c_2$ because $F$ is, and the two slots act
independently, on the two coordinates of the Cartesian product.

The **tensor product** of $P$ and $F$ over $\mathcal C$ is the coend of the
product of a presheaf and a covariant set-valued functor
([[def-end-and-coend]]), when it exists:

$$P\otimes_{\mathcal C}F:=\int^{c}P(c)\times F(c).$$

Its cowedge components are written
$\rho_c:P(c)\times F(c)\to P\otimes_{\mathcal C}F$, and the cowedge equation
reads $\rho_c(P(f)(y),x)=\rho_{c'}(y,F(f)(x))$ for $f:c\to c'$, $y\in P(c')$
and $x\in F(c)$.

## Remarks

The variance is written into the definition rather than left to the reader. A
coend needs its integrand contravariant in the first slot and covariant in the
second, so a presheaf and a covariant functor are exactly the pair for which the
displayed product is an integrand; two covariant functors do not give one, and
the expression $\int^{c}F(c)\times G(c)$ for two covariant $F$ and $G$ is not
defined.

The name records the analogy with a tensor product of modules: the cowedge
equation moves an element of $\mathcal C$ across the product exactly as a
scalar moves across $\otimes_R$, and
[[def-hom-functors-and-hom-bifunctor]] supplies the actions when $P$ and $F$
are hom-functors. The analogy is made precise for a one-object $\mathcal C$ on
this page's companion, where the two functors are a right and a left action of
a monoid.
