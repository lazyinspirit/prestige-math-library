---
id: "ex-dyadic-conditional-expectation-martingale"
kind: "example"
title: "Dyadic conditional expectation martingale"
deps: ["lem-conditional-expectation-process-is-a-martingale", "thm-lebesgue-measure-is-a-complete-measure", "def-half-open-box", "prop-restriction-is-a-measure", "def-conditional-expectation-as-an-ae-class", "lem-conditional-expectation-is-unique-almost-surely", "thm-linearity-of-the-lebesgue-integral-on-l-one", "thm-integral-triangle-inequality", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "van der Vaart, Martingales, Diffusions and Financial Mathematics"
      url: https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf
status: "draft"
origin: "pipeline"
---

## Example

Assume AC. On $(0,1]$ with Lebesgue probability, let $I_{n,j}=(j/2^n,(j+1)/2^n]$ for $0\le j<2^n$ and let $\mathcal F_n$ be their finite-partition sigma-algebra. For real $f\in L^1(P)$,
$$M_n=\sum_{j=0}^{2^n-1}\left(2^n\int_{I_{n,j}}f\,dP\right)\mathbf1_{I_{n,j}}$$
is a version of $E[f\mid\mathcal F_n]$, and $(M_n)$ is a martingale.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the example.

[F1] Under countable choice Lebesgue measure exists and agrees with half-open interval length. [[thm-lebesgue-measure-is-a-complete-measure]].

[F2] Restriction of a measure to a measurable set is a measure. [[prop-restriction-is-a-measure]].

[F3] Under AC every integrable input has a measurable integrable conditional version. [[def-conditional-expectation-as-an-ae-class]].

[F4] Finite linear combinations remain integrable and their integrals are linear. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F5] The absolute integral is bounded by the integral of the absolute value. [[thm-integral-triangle-inequality]].

[F6] Conditional expectations of a fixed L1 variable along a filtration form a martingale. [[lem-conditional-expectation-process-is-a-martingale]].

[F7] AC supplies the inherited conditional-expectation existence and any stated choice of versions. [[def-axiom-of-choice]].

## Verification

**Proof technique:** direct.

1.1 First justify the finite integral operations locally. Augment every finite disjoint simple display by the complement with coefficient $0$. Intersections of two augmented displays partition the whole space and have equal coefficients on every nonempty cell, so finite additivity and $0\cdot(+\infty)=0$ prove representation independence. Common refinements give simple addition and monotonicity; scalar zero is direct and positive scalars are termwise. Supremum over simple minorants, increasing simple approximation and the sets $\{f_j\ge cs\}$, $0<c<1$, give monotone convergence and nonnegative additivity. Positive/negative and real/imaginary decompositions give the finite $L^1$ linearity and triangle estimate used below. The trace restriction of Lebesgue measure to $(0,1]$ has total mass one. The displayed half-open cells [[def-half-open-box]] are disjoint, exhaust the space and have probability $2^{-n}>0$. Their unions form a sigma-algebra because unions and complements select cells from a finite partition. Each cell at n is exactly the union of its children at n+1, so the sigma-algebras increase. Every cell integral of $f$ is finite. The displayed finite-valued $M_n$ is $\mathcal F_n$-measurable, and $E|M_n|=\sum_j|\int_{I_{n,j}}f\,dP|\le\sum_j\int_{I_{n,j}}|f|\,dP=E|f|<\infty$. [given, F1, F2, F4, F5, construct]

2.1 For $A=\bigcup_{j\in J}I_{n,j}\in\mathcal F_n$, finite addition and the cell mass give $\int_A M_n\,dP=\sum_{j\in J}2^n(\int_{I_{n,j}}f\,dP)2^{-n}=\int_Af\,dP$. Thus $M_n$ meets every defining conditional-expectation requirement. Apply [F6] to obtain the martingale. For $f=\mathbf1_{(0,1/2]}$, the first average is $M_0=1/2$ and every finer cell lies entirely in $(0,1/2]$ or its complement, so $M_n=f$ for $n\ge1$. In particular $E[M_1\mid\mathcal F_0]=1/2$. AC supplies the Lebesgue construction and CE existence; the explicit finite averages require no version selection. [F1, F3, F4, F6, F7, step 1.1] ∎
