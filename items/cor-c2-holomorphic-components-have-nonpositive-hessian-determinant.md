---
id: cor-c2-holomorphic-components-have-nonpositive-hessian-determinant
kind: corollary
title: "The Hessian determinant of each $C^2$ holomorphic component is nonpositive; a nondegenerate critical point is a saddle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-c2-holomorphic-components-are-harmonic,
       def-hessian-and-euclidean-critical-point,
       cor-two-variable-hessian-determinant-test,
       thm-clairaut-schwarz-mixed-partials]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Exercise 2.1.7"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $f=u+iv$ be holomorphic with $C^2$ components. For either component $w\in\{u,v\}$,

$$ \det H_w=-w_{xx}^2-w_{xy}^2\le0. $$

If $a$ is a critical point of $w$ and $\det H_w(a)\ne0$, then the determinant is negative and $a$ is neither a local maximum nor a local minimum, hence is a saddle in the Hessian-test sense. If the determinant is zero, the Hessian test is inconclusive.

## Facts & Assumptions

**Given:** A holomorphic $f=u+iv$ whose components are $C^2$, and one component $w$.

[L1] Each such component is harmonic: $w_{xx}+w_{yy}=0$ ([[thm-c2-holomorphic-components-are-harmonic]]).

[F1] The Hessian is the matrix of second partial derivatives, and a critical point is one at which the gradient vanishes ([[def-hessian-and-euclidean-critical-point]]).

[L2] For a $C^2$ function, $w_{xy}=w_{yx}$ ([[thm-clairaut-schwarz-mixed-partials]]).

[L3] At a critical point of a $C^2$ function of two variables, a negative Hessian determinant gives neither a local minimum nor a local maximum, while determinant zero gives no conclusion ([[cor-two-variable-hessian-determinant-test]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [L2], $\det H_w=w_{xx}w_{yy}-w_{xy}^2$. By [L1], $w_{yy}=-w_{xx}$, so $\det H_w=-w_{xx}^2-w_{xy}^2\le0$. [F1, L1, L2, algebra]

2.1 If the determinant at a critical point is nonzero, step 1.1 makes it negative, and [L3] gives neither a local maximum nor a local minimum. If it is zero, [L3] gives no conclusion. [step 1.1, given, L3] ∎
