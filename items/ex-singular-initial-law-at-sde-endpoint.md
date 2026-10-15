---
id: ex-singular-initial-law-at-sde-endpoint
kind: example
title: A deterministic initial law is singular although the SDE is well-posed
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
axiom_base: Full AC
deps:
  - def-ito-sde-and-strong-solution
  - thm-global-strong-well-posedness-for-lipschitz-ito-sdes
  - def-law-or-distribution-of-a-random-element
  - def-lebesgue-outer-measure
  - def-half-open-box
  - def-elementary-set-in-rn
  - thm-elementary-volume-is-well-defined
  - thm-of-archimedean
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-borel-sigma-algebra
  - def-open-and-closed-in-r
  - def-neighbourhood-r
  - lem-of-abs-value
  - lem-of-triangle-inequality
  - thm-lebesgue-measure-is-a-complete-measure
  - def-nonnegative-lebesgue-integral
  - def-integral-over-a-measurable-set
  - def-integral-of-a-nonnegative-simple-function
  - def-countable-choice
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Ramon van Handel, Stochastic Calculus, Filtering, and Stochastic Control: Lecture Notes (ACM 217, Spring 2007), Chapter 5.1"
      url: "https://web.math.princeton.edu/~rvan/acm217/ACM217.pdf"
    - title: "A.W. van der Vaart, Martingales, Diffusions and Financial Mathematics (preliminary notes), Section 7.1"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Example

Assume Full AC. Fix $T>0$ and use a complete usual filtered probability
space carrying a filtration-relative standard scalar Brownian motion $W$. Set
$X_0=0$, $b(t,x)=0$, and $\sigma(t,x)=1$, so
$$dX_t=dW_t,\qquad 0\le t\le T.$$
The initial law is the point mass at $0$. It is concentrated on a Lebesgue-null
set, although the strong well-posedness theorem applies. A **Lebesgue density**
for a probability law $\mu$ on $\mathbb R$ means a nonnegative Lebesgue-measurable
function $g$ such that $\mu(A)=\int_Ag\,d\lambda$ for every Borel set $A$,
where $\lambda$ is one-dimensional Lebesgue measure.

## Facts & Assumptions

**Given:** the data above, the Itô SDE convention of [[def-ito-sde-and-strong-solution]], and Full AC.

[F1] The SDE definition requires jointly Borel coefficients, uniform global state Lipschitz and linear-growth bounds, and an $\mathcal F_0$-measurable $L^2$ initial value independent of future Brownian increments. [[def-ito-sde-and-strong-solution]]

[F2] Under those hypotheses, there is a unique adapted continuous strong solution on the given space. [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]

[F3] The law of a random element $X_0$ assigns a measurable target set $A$ the probability $P(X_0\in A)$. [[def-law-or-distribution-of-a-random-element]]

[F4] Lebesgue outer measure is the infimum of the sums of $\mu_0$ over countable elementary covers. Every half-open box is elementary and has $\mu_0(B)=\operatorname{vol}(B)$; in dimension one, $(-1/n,1/n]$ is a half-open interval of volume $2/n$. [[def-lebesgue-outer-measure]] [[def-elementary-set-in-rn]] [[thm-elementary-volume-is-well-defined]] [[def-half-open-box]]

[F5] Full AC supplies countable choice. Under countable choice, a set of Lebesgue outer measure zero is Lebesgue measurable and has Lebesgue measure zero. [[def-axiom-of-choice]] [[lem-ac-supplies-sequential-choices-for-probability-constructions]] [[def-countable-choice]] [[thm-lebesgue-measure-is-a-complete-measure]] [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]

[F6] The integral over a measurable set is the nonnegative Lebesgue integral of the function times its indicator; that integral is the supremum of nonnegative simple minorants, and a simple integral is the sum of its values times the measures of their level sets. [[def-integral-over-a-measurable-set]] [[def-nonnegative-lebesgue-integral]] [[def-integral-of-a-nonnegative-simple-function]]

[F7] The singleton $\{0\}$ is Borel: for each $x\ne0$, $|x|/2>0$, and if $y\in N_{|x|/2}(x)$ then $|x|\le|x-y|+|y|<|x|/2+|y|$, so $y\ne0$. Thus $\mathbb R\setminus\{0\}$ is open and $\{0\}$ is closed; closed sets are Borel. [[def-neighbourhood-r]] [[lem-of-abs-value]] [[lem-of-triangle-inequality]] [[def-open-and-closed-in-r]] [[def-borel-sigma-algebra]]

[F8] For any real $a\ge0$ with $a\le2/n$ for every $n\ge1$, one has $a=0$: if $a>0$, the Archimedean property supplies $n>2/a$, so $2/n<a$, a contradiction. [[thm-of-archimedean]]

## Verification

1.1 The maps $b(t,x)=0$ and $\sigma(t,x)=1$ are jointly Borel. Their state Lipschitz constant is $L=0$, and $|b(t,x)|+|\sigma(t,x)|=1\le1(1+|x|)$ gives $K=1$. The constant diffusion is nondegenerate because its scalar variance is $1$. The deterministic $X_0=0$ is $\mathcal F_0$-measurable, square-integrable, and independent of the Brownian increments, so [F1] holds; applying [F2] gives strong well-posedness. [F1, F2, given]

1.2 By [F3] and [F7], the initial law $\mu$ satisfies $\mu(\{0\})=P(X_0=0)=1$. For every $n\ge1$, the half-open interval $(-1/n,1/n]$ covers $\{0\}$ and is an elementary set of volume $2/n$; by [F4] its outer-measure cover cost is $2/n$. Hence $0\le\lambda^*(\{0\})\le2/n$ for every $n$, so $\lambda^*(\{0\})\le2$ is finite. If $\lambda^*(\{0\})>0$, [F8] supplies $n>2/\lambda^*(\{0\})$, contradicting the bound; therefore $\lambda^*(\{0\})=0$. [F3, F4, F7, F8, given]

2.1 By [F5], $\{0\}$ is Lebesgue measurable and $\lambda(\{0\})=0$. If a Lebesgue density $g$ for $\mu$ existed, [F6] would give $\mu(\{0\})=\int_{\{0\}}g\,d\lambda=0$: every nonnegative simple minorant of $g1_{\{0\}}$ has integral zero because each positive level set is contained in the null singleton and the zero level contributes zero, so the supremum of their integrals is zero. This contradicts step 1.2. Thus the initial law has no Lebesgue density at $t=0$; no claim about positive-time densities is made. [F3, F5, F6, F7, step 1.2, given] ∎
