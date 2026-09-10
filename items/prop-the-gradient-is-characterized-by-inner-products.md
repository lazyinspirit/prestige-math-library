---
id: "prop-the-gradient-is-characterized-by-inner-products"
kind: "proposition"
title: "The gradient is characterized by inner products"
deps: ["def-riemannian-gradient"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

The gradient is the unique smooth vector field $Y$ satisfying $g(Y,X)=Xf$ for every smooth vector field $X$.

## Facts & Assumptions

**Given:** A Riemannian manifold and a smooth real function $f$.

[F1] [[def-riemannian-gradient]]: For a smooth real function $f$, its **Riemannian gradient** is $\operatorname{grad}_g f=(df)^\sharp$. prop-exterior-derivative-of-a-function-is-its-differential identifies $df(X)=Xf$. The smooth bundle isomorphism in thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms therefore makes the gradient a smooth vector field. In coordinates $(\operatorname{grad}_g f)^i=\sum_jg^{ij}\partial_jf$. Constants, and all functions in dimension zero, have zero gradient.

## Proof

**Proof technique:** direct.

1.1 By the inverse pairing defining $\sharp$, $g(\operatorname{grad}_g f,X)=g((df)^\sharp,X)=df(X)=Xf$. Thus the gradient has the required property. [F1, given]

2.1 If $Y$ also has the property, set $Z=Y-\operatorname{grad}_g f$, itself a smooth global vector field. Subtracting the two identities and taking $X=Z$ gives $g(Z,Z)=0$. Positive definiteness makes $Z=0$ at every point, so $Y=\operatorname{grad}_g f$. This also covers zero-dimensional and empty manifolds. [F1, step 1.1] ∎

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.
