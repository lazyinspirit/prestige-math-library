---
id: lem-finite-product-measure-with-density
kind: lemma
title: "Finite products of measures with densities have the product density"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps: ["def-finite-window-spatial-observation","def-measure-with-density","thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique","thm-tonelli-theorem-for-sigma-finite-product-spaces","thm-measure-uniqueness-on-a-sigma-finite-pi-system","prop-closure-properties-of-measurable-functions-used-by-the-integral","def-extended-real-valued-measurable-function"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "Countable Choice is inherited through the finite-window Lebesgue measure; the finite product-density proof itself uses no choice."
sources:
  references:
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications, complete lecture notes"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 4, §4.3 and Example 4.5, PDF pp. 61–63: the finite Poisson density is expanded as a sum of product integrals."
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, author-hosted 2017 version"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 3, Theorem 3.6 and Proposition 3.8, PDF pp. 33–34: finite product sampling laws."
verification:
  precheck: pending
---

## Statement

Let $\mu$ be any finite measure on $(W,\mathcal B_W)$, where $W$ and its
trace Borel sigma-algebra $\mathcal B_W$ are as in
[[def-finite-window-spatial-observation]]. Let $f:W\to[0,\infty]$ be
measurable with $\int_W f\,d\mu<\infty$, and put $\nu=f\,d\mu$.
For every integer $n\ge1$, the product measure $\nu^{\otimes n}$ on
$\mathcal B_W^{\otimes n}$ has density
$$F_n(x_1,\ldots,x_n)=\prod_{i=1}^n f(x_i),$$
where products use the extended-product convention
$0\cdot(+\infty)=0$. For $n=0$, both product measures are the
unit mass on the one-point empty tuple and the product density is $1$.

## Facts & Assumptions

**Given:** A finite measure $\mu$, a nonnegative measurable $f$ with finite
integral, and its density measure $\nu=f\,d\mu$.

[F1] The set function $A\mapsto\int_Af\,d\mu$ is a measure.
([[def-measure-with-density]])

[F2] Finite products of sigma-finite measures exist and have the rectangle
product formula. ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]])

[F3] Tonelli's theorem interchanges nonnegative iterated integrals on a
sigma-finite product. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[F4] Two finite measures agreeing on a generating pi-system agree on the
generated sigma-algebra. ([[thm-measure-uniqueness-on-a-sigma-finite-pi-system]])

[F5] Finite products of nonnegative measurable functions are measurable.
For two such functions $u,v$, for $a\ge0$,
$$\{uv>a\}=\bigcup_{q\in\mathbb Q,\ q>0}\{u>q\}\cap\{v>a/q\},$$
and for $a<0$ the superlevel set is the whole space. Iterating this identity
proves the finite-product claim, using $0\cdot(+\infty)=0$.
([[def-extended-real-valued-measurable-function]])

## Proof

**Given:** $n\ge1$, $\mu(W)<\infty$, and $\int_W f\,d\mu<\infty$.

1.1 Each coordinate projection $\pi_i:W^n\to W$ is measurable because inverse images of members of $\mathcal B_W$ are measurable rectangles. Hence each $f\circ\pi_i$ is measurable, and [F5] makes $F_n=\prod_{i=1}^n f\circ\pi_i$ measurable. Thus $A\mapsto\int_A F_n\,d\mu^{\otimes n}$ is a measure by the same indefinite-integral construction as [F1]. Its total mass is $(\int_W f\,d\mu)^n<\infty$ by repeated Tonelli [F3]. [given, F1, F3, F5, construct]

1.2 For a measurable rectangle $B_1\times\cdots\times B_n$, repeated use of [F2] gives $\nu^{\otimes n}(B_1\times\cdots\times B_n)=\prod_i\nu(B_i) =\prod_i\int_{B_i}f\,d\mu$. Repeated Tonelli [F3] gives the same value for $\int_{B_1\times\cdots\times B_n}F_n\,d\mu^{\otimes n}$. [given, F1, F2, F3, algebra]

2.1 Rectangles form a generating pi-system containing the whole space $W^n$, and the product formula for $W^n$ in step 1.2 shows that the two finite measures have the same finite total mass. Therefore [F4] applies and gives equality on all of $\mathcal B_W^{\otimes n}$. For $n=0$ the statement is the definition of the empty product measure. [step 1.1, step 1.2, F2, F4] ∎