---
id: thm-set-is-locally-cartesian-closed
kind: theorem
title: "Set is locally cartesian closed"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-locally-cartesian-closed-category, thm-local-cartesian-closure-is-equivalent-to-every-pullback-functor-having-a-right-adjoint, thm-currying-is-an-adjunction-in-set, prop-sets-and-functions-form-category-set]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Section 4.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
---

## Statement

The category $\mathbf{Set}$ is locally cartesian closed.

## Facts & Assumptions

**Given:** A function $f:X\to Y$ and an object $p:E\to X$ of the slice category $\mathbf{Set}/X$.

[L1] A category is locally cartesian closed exactly when each pullback functor $f^\ast$ has a right adjoint ([[thm-local-cartesian-closure-is-equivalent-to-every-pullback-functor-having-a-right-adjoint]]).

[L2] In $\mathbf{Set}$, functions are the morphisms and products are cartesian products ([[prop-sets-and-functions-form-category-set]]).

[L3] In $\mathbf{Set}$, currying gives the adjunction between product and function-set formation ([[thm-currying-is-an-adjunction-in-set]]).

## Proof

**Proof technique:** direct.

1.1 For $p:E\to X$, define a set over $Y$ by $(\Pi_fE)_y:=\prod_{x\in f^{-1}(y)}E_x$, where $E_x=p^{-1}(x)$. An element of $(\Pi_fE)_y$ is therefore a choice of one element of $E_x$ for each $x$ over $y$; when $f^{-1}(y)=\varnothing$, this product is the singleton empty family. The projection $\Pi_fE\to Y$ sends such a family to $y$. [given, L2, construct]

2.1 If $q:B\to Y$ is another object over $Y$, then a morphism $q\to\Pi_fE$ over $Y$ assigns to each $b\in B$ over $y=q(b)$ a family of elements in the fibers $E_x$ for $x\in f^{-1}(y)$. Equivalently, it assigns to each pair $(b,x)$ with $q(b)=f(x)$ an element of $E_x$, which is exactly a morphism $f^\ast q\to p$ over $X$. This correspondence is natural and is the fiberwise form of [L3]. [step 1.1, L2, L3, algebra]

3.1 Step 2.1 constructs a right adjoint $\Pi_f$ to every pullback functor in $\mathbf{Set}$. Hence [L1] implies that $\mathbf{Set}$ is locally cartesian closed. [step 2.1, L1] ∎
