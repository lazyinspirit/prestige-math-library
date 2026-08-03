---
id: cex-complex-squaring-is-not-globally-invertible
kind: counterexample
title: "The real complex-squaring map is locally but not globally invertible off the origin"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-euclidean-inverse-function-theorem, def-c-one-map-and-local-inverse, def-invertible-euclidean-linear-map, def-metric-topology, thm-continuous-partial-derivatives-imply-total-differentiability, thm-algebra-of-total-derivatives, thm-of-square-roots]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, §8.5 exercises on local versus global invertibility"
      url: "https://www.jirka.org/ra/html/sec_svinvfuncthm.html"
pipeline_run: null
---

## Example

For

$$S(x,y):=(x^2-y^2,2xy),$$

$DS(x,y)$ is invertible exactly when $(x,y)\ne(0,0)$, so $S$ is locally
invertible off the origin.  Nevertheless $S(x,y)=S(-x,-y)$, and every nonzero
target in $\mathbb R^2$ has exactly two preimages.  Thus the inverse function
theorem is irreducibly local.  At the origin the derivative is not invertible,
and zero has only one preimage.

## Facts & Assumptions

**Given:** No hypotheses beyond those quantified in the statement.

[L1] A $C^1$ map on an open Euclidean domain with an invertible derivative has
a local $C^1$ inverse ([[thm-euclidean-inverse-function-theorem]]).

[L2] Invertibility means the existence of a two-sided linear inverse ([[def-invertible-euclidean-linear-map]]).

[L3] Nonnegative reals have unique nonnegative square roots ([[thm-of-square-roots]]).

[L4] Direct difference quotients give the two coordinate partial-derivative
rows $(2x,-2y)$ and $(2y,2x)$; these affine entries are continuous. Thus the
continuous-partials theorem gives the displayed total derivative, and $S$ is
$C^1$ ([[thm-continuous-partial-derivatives-imply-total-differentiability]],
[[def-c-one-map-and-local-inverse]]).

[L5] A metric space is open in itself ([[def-metric-topology]]).

## Proof

**Proof technique:** direct.

1.1 The total derivative is $$DS(x,y)(u,v)=(2xu-2yv,2yu+2xv).$$ The domain $\mathbb R^2$ is open by [L5], and [L4] makes $S$ $C^1$. If $r^2:=x^2+y^2>0$, its inverse is $$ (p,q)\longmapsto \left(\frac{xp+yq}{2r^2},\frac{-yp+xq}{2r^2}\right).$$ Direct substitution verifies both inverse identities, so [L1] gives local invertibility at every nonzero point. At $(0,0)$ the derivative is the zero map; moreover every ball about the origin contains distinct $(t,0)$ and $(-t,0)$ with the same image, so no local inverse exists there. [L1, L2, L4, L5, algebra]

1.2 If $S(x,y)=(u,v)$, then $$(x^2+y^2)^2=u^2+v^2.$$ For $(u,v)\ne(0,0)$, [L3] therefore fixes the positive value $r:=x^2+y^2=\sqrt{u^2+v^2}$, and $$x^2=\frac{r+u}{2},\qquad y^2=\frac{r-u}{2},\qquad 2xy=v.$$ The square equations and the sign condition $2xy=v$ leave exactly one pair $(x,y)$ up to simultaneous negation.  Thus there are exactly two preimages. [L3, algebra]

2.1 For the zero target, the identity in step 1.2 forces $x^2+y^2=0$, hence $(x,y)=(0,0)$.  [step 1.2, L3, algebra]

3.1 Steps 1.1--2.1 establish every local, global, and origin qualification in the example.  [step 1.1, step 1.2, step 2.1] ∎
