---
id: fs-every-vector-field-can-be-pushed-forward-by-every-smooth-map
kind: false-statement
title: "FALSE: every smooth vector field can be pushed forward by every smooth map"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-f-related-vector-fields, def-pushforward-and-pullback-of-a-vector-field-by-a-diffeomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

**False claim:** every smooth vector field $X$ on $M$ has a canonically defined
pushforward by every smooth map $F:M\to N$.

## Facts & Assumptions

**Given:** The projection $F:\mathbb R^2\to\mathbb R$, $F(x,y)=x$, and the vector field $X=y\,\partial/\partial x$ on $\mathbb R^2$.

[L1] For a general smooth map, the correct comparison notion is $F$-relatedness; an actual pushforward is defined here only for diffeomorphisms ([[def-pushforward-and-pullback-of-a-vector-field-by-a-diffeomorphism]]).

## Refutation

**Proof technique:** direct.

1.1 At a point $(x,y)$, the differential of $F$ sends $X_{(x,y)}=y\,\partial/\partial x$ to the tangent vector $y\,d/dx|_x$ in $T_x\mathbb R$. [given]

2.1 If a pushforward vector field $F_*X$ on $\mathbb R$ existed, its value at $x$ would have to equal $y\,d/dx|_x$ for every point $(x,y)$ in the fibre $F^{-1}(x)$. That is impossible because different values of $y$ in the same fibre give different target vectors. [step 1.1, given]

3.1 Therefore a smooth map need not push a vector field forward to a well-defined vector field on the target, in agreement with [L1]. [L1, step 2.1] ∎
