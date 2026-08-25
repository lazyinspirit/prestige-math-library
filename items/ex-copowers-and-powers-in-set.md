---
id: ex-copowers-and-powers-in-set
kind: example
title: "Powers and copowers of a set by a set"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  truth_risk: "The empty and singleton cases must not be reversed: $Y^{\\varnothing}$ is terminal, while $\\varnothing\\cdot Y$ is initial."
  counterexample_search: "The two defining bijections were written out in both directions and then checked on the finite cases $S=\\varnothing$, $S=\\{\\ast\\}$, $S=\\{0,1\\}$, and $Y=\\varnothing$ to catch the usual empty-exponent and empty-copower mistakes."
deps: [def-power-and-copower-by-a-set, thm-a-power-is-a-product-of-copies-and-a-copower-is-a-coproduct-of-copies, prop-sets-and-functions-form-category-set, def-the-set-of-functions-from-one-set-to-another, def-cartesian-product, def-finite-cardinality]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $S$ and $Y$ be sets. In $\mathbf{Set}$ the power of $Y$ by $S$ is the
function set $Y^{S}$, and the copower of $Y$ by $S$ is the Cartesian product
$S\times Y$:

$$Y^{S}=\mathbf{Set}(S,Y),\qquad S\cdot Y=S\times Y.$$

The defining bijections can be written down directly, and the finite cases show
what happens at the empty and singleton weights.

## Facts & Assumptions

**Given:** Sets $S$ and $Y$, and an arbitrary set $X$.

[F1] The power of $Y$ by $S$ is the weighted limit of the one-object diagram at the constant weight $S$, and the copower is the corresponding weighted colimit ([[def-power-and-copower-by-a-set]]).

[L1] A power by a set is the product of that many copies and a copower is the coproduct ([[thm-a-power-is-a-product-of-copies-and-a-copower-is-a-coproduct-of-copies]]).

[F2] Sets as objects and functions as morphisms form a large locally small category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

[F3] The function set $B^{A}$ consists exactly of the functions $A\to B$ ([[def-the-set-of-functions-from-one-set-to-another]]).

[F4] The Cartesian product $A\times B$ consists exactly of the ordered pairs $(a,b)$ with $a\in A$ and $b\in B$ ([[def-cartesian-product]]).

[F5] A set is finite when it is in bijection with $\{0,1,\dots,n-1\}$ for some natural number $n$ ([[def-finite-cardinality]]).

## Verification

**Proof technique:** direct.

1.1 For every set $X$, a function $f:X\to Y^{S}$ is exactly a family of functions $f_x:S\to Y$ indexed by $x\in X$, and hence exactly a function $\Phi(f):S\to\mathbf{Set}(X,Y)$ given by $\Phi(f)(s)(x):=f(x)(s)$; conversely, from $\alpha:S\to\mathbf{Set}(X,Y)$ one recovers $\Psi(\alpha):X\to Y^{S}$ by $\Psi(\alpha)(x)(s):=\alpha(s)(x)$. These two constructions are inverse, so $\mathbf{Set}(X,Y^{S})\cong\mathbf{Set}(S,\mathbf{Set}(X,Y))$, which is the defining bijection of the power of $Y$ by $S$. [F1, F2, F3]

1.2 For every set $X$, a function $g:S\times Y\to X$ is exactly a function $\Phi'(g):S\to\mathbf{Set}(Y,X)$ given by $\Phi'(g)(s)(y):=g(s,y)$; conversely, from $\beta:S\to\mathbf{Set}(Y,X)$ one recovers $\Psi'(\beta):S\times Y\to X$ by $\Psi'(\beta)(s,y):=\beta(s)(y)$. These two constructions are inverse, so $\mathbf{Set}(S\times Y,X)\cong\mathbf{Set}(S,\mathbf{Set}(Y,X))$, which is the defining bijection of the copower of $Y$ by $S$. [F1, F3, F4]

2.1 Steps 1.1 and 1.2 identify the two objects explicitly, and [L1] says the same objects are, in general, the product and the coproduct of $S$ copies of $Y$. So in $\mathbf{Set}$ the power is the function set and the copower is the Cartesian product. [L1, step 1.1, step 1.2]

3.1 The finite checks agree with those formulas: if $S=\{0,1\}$ and $Y=\{a,b,c\}$ then $Y^{S}$ has $3^{2}=9$ elements while $S\times Y$ has $2\cdot3=6$; if $S=\{\ast\}$ then both objects identify with $Y$; if $S=\varnothing$ then $Y^{\varnothing}$ is a one-element set while $\varnothing\times Y=\varnothing$; and if $Y=\varnothing$ then $\varnothing^{S}=\varnothing$ for nonempty $S$, but $\varnothing^{\varnothing}$ is again a one-element set. [L1, F5, step 2.1] ∎

## Remarks

The empty exponent is the standard trap: a power by $\varnothing$ is terminal, not initial. The hom-set bijection fixes the direction, and it fixes it the same way as the published empty product and empty coproduct do.

This example is the set-level shadow of the general theorem. The A page proves that a power is a product of copies and a copower a coproduct of copies in an arbitrary locally small category; here the copies can be named explicitly as functions out of $S$ and ordered pairs with $S$.
