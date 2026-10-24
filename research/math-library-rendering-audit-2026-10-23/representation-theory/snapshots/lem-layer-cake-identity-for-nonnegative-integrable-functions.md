---
id: lem-layer-cake-identity-for-nonnegative-integrable-functions
kind: lemma
title: The layer-cake identity for integrable functions
status: published
origin: pipeline
dependency_level: 0
deps:
  - def-measure-space
  - def-measure
  - def-sigma-algebra
  - def-measurable-function-between-measurable-spaces
  - def-borel-sigma-algebra
  - def-interval
  - def-calligraphic-l-p-on-a-measure-space
  - def-l-p-space-as-a-quotient-by-null-functions
  - thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one
  - thm-chebyshev-markov-inequality-for-the-integral
  - def-natural-numbers
  - cor-archimedean-reciprocal
  - thm-rationals-countable
  - lem-subset-of-countable
  - lem-q-and-irrationals-dense-r
  - def-countable-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-is-a-complete-measure
  - def-finite-sigma-finite-and-semifinite-measures
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - def-product-measure-on-sigma-finite-spaces
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
axiom_use: >-
  Assumes only the Axiom of Countable Choice (ACω), to use the library's
  Carathéodory Lebesgue measure on the level parameter as a countably additive
  sigma-finite measure. No full Axiom of Choice or Dependent Choice is used.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G, Lemma G.5.2 and proof (printed pp. 467–468)"
    - title: "Anne Thomas, The Banach-Tarski Paradox and Amenability, Lecture 19: Reiter's Property and the Følner Condition"
      url: "https://www.maths.usyd.edu.au/u/athomas/amenability/Lecture19_2012_Reiter.pdf"
      locator: "Slides 12–13 (PDF pp. 12–13), layer-cake identity and Fubini argument"
---

## Statement

Assume the Axiom of Countable Choice. Let $(X,\mathcal A,\mu)$ be any measure
space, and let $f,g\in L^1(X)$ be nonnegative integrable functions with fixed
pointwise nonnegative measurable representatives. For $t>0$ put
$E_t:=\{x\in X:f(x)\ge t\}$ and $E'_t:=\{x\in X:g(x)\ge t\}$, and let $dt$
denote Lebesgue measure on the level parameter. Then
$$\lVert f-g\rVert_1=\int_0^\infty\mu(E_t\mathbin\triangle E'_t)\,dt,$$
and in particular
$$\lVert f\rVert_1=\int_0^\infty\mu(E_t)\,dt.$$
No $\sigma$-finiteness of $\mu$ is required: both integrands are supported on
$S:=\{x:f(x)+g(x)>0\}$, which is $\sigma$-finite.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a measure space $(X,\mathcal A,\mu)$,
and nonnegative $L^1$ classes with the fixed representatives in the statement.

[A1] The Axiom of Countable Choice is the assumption used to construct the
library's Lebesgue measure on $\mathbb R$
([[def-countable-choice]]).

[F1] $\mathcal L^1(\mu)$ is a real vector space, its quotient $L^1(\mu)$ uses
almost-everywhere classes, and its norm is the integral of the absolute value
([[def-calligraphic-l-p-on-a-measure-space]],
[[def-l-p-space-as-a-quotient-by-null-functions]],
[[thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one]]).

[F2] For a nonnegative measurable $h$ and $a>0$,
$\mu(\{h\ge a\})\le a^{-1}\int h\,d\mu$
([[thm-chebyshev-markov-inequality-for-the-integral]]).

[F3] Under [A1], Lebesgue measure $\lambda$ on $\mathbb R$ is a measure,
is $\sigma$-finite, and assigns length $b-a$ to each interval $(a,b]$
([[thm-lebesgue-measure-is-a-complete-measure]],
[[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]],
[[thm-lebesgue-measure-of-a-box-of-every-kind]],
[[def-finite-sigma-finite-and-semifinite-measures]]).

[F4] The rationals are countable and dense in $\mathbb R$, and for every
$\varepsilon>0$ some $n\in\mathbb N$ has $1/n<\varepsilon$
([[thm-rationals-countable]], [[lem-subset-of-countable]],
[[lem-q-and-irrationals-dense-r]], [[cor-archimedean-reciprocal]],
[[def-natural-numbers]]).

[F5] Product-measurable rectangles, countable unions and intersections are
measurable; product measure is defined for $\sigma$-finite measure spaces and
Tonelli's theorem interchanges the integrals of a nonnegative
product-measurable function on such a product
([[def-sigma-algebra]], [[def-measurable-function-between-measurable-spaces]],
[[def-borel-sigma-algebra]], [[def-interval]],
[[def-product-measure-on-sigma-finite-spaces]],
[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).



## Proof

**Proof technique:** direct.

1.1 Put $h:=f+g$ and $S:=\{x:h(x)>0\}$. By [F1], $h\in\mathcal L^1(\mu)$ and $\int h\,d\mu<\infty$. For each $n\ge1$, $S_n:=\{x:h(x)\ge1/n\}$ is measurable and [F2] gives $\mu(S_n)\le n\int h\,d\mu<\infty$. The sets $S_n$ cover $S$: if $h(x)>0$, [F4] gives $n$ with $1/n<h(x)$. Thus $S$ is $\sigma$-finite with its restricted measure, and $f=g=0$ on $X\setminus S$. [F1, F2, F4]

1.2 For $f$, define $A_f:=\{(x,t)\in S\times\mathbb R:0<t\le f(x)\}$. Countability of $\mathbb Q_{>0}$ and [F5] make $A_f=\bigcap_{m\ge1}\bigcup_{q\in\mathbb Q_{>0}}\bigl((S\cap\{x:f(x)>q\})\times(0,q+1/m]\bigr)$ product-measurable. Indeed, if $0<t\le f(x)$, density of $\mathbb Q$ supplies for each fixed $m$ a rational $q$ with $\max(0,t-1/m)<q<f(x)$, so $t\le q+1/m$. Conversely, membership in every union gives $f(x)>t-1/m$ for each $m$; if $f(x)<t$, [F4] gives $m$ with $1/m<t-f(x)$, a contradiction. Define $A_g$ in the same way and put $D:=A_f\mathbin\triangle A_g$. For each $t>0$, its section is $E_t\mathbin\triangle E'_t$, while for each $x\in S$ its section is $(0,f(x)]\mathbin\triangle(0,g(x)]$, whose Lebesgue measure is $|f(x)-g(x)|$ by [F3]. [F3, F4, F5, algebra]

2.1 The restricted measure $\mu|_S$ is $\sigma$-finite by step 1.1, and $\lambda$ is $\sigma$-finite by [F3], so [F5] applies to $\mathbf 1_D$ on their product. Since $D\subseteq S\times(0,\infty)$ and $f=g=0$ off $S$, Tonelli gives $\lVert f-g\rVert_1=\int_S|f-g|\,d\mu=\int_S\int_{\mathbb R}\mathbf 1_D(x,t)\,d\lambda(t)\,d\mu(x)=\int_{\mathbb R}\int_S\mathbf 1_D(x,t)\,d\mu(x)\,d\lambda(t)=\int_0^\infty\mu(E_t\mathbin\triangle E'_t)\,dt$. [A1, F1, F3, F5, step 1.1, step 1.2]

3.1 Taking $g=0$ in step 2.1 gives $\lVert f\rVert_1=\int_0^\infty\mu(E_t)\,dt$. The only choice assumption used is [A1]; the reduction from $X$ to $S$ and the countable product-measurability description are explicit. [step 2.1] ∎
