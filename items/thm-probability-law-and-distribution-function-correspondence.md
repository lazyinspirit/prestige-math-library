---
id: thm-probability-law-and-distribution-function-correspondence
kind: theorem
title: "Probability laws correspond to distribution functions"
status: draft
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cumulative-distribution-function-of-a-random-variable, def-law-or-distribution-of-a-random-element, lem-law-of-a-random-element-is-a-probability-measure, thm-lebesgue-stieltjes-correspondence-with-distribution-functions, prop-measure-of-a-set-difference, thm-continuity-from-below-for-measures, thm-continuity-from-above-for-measures, prop-measure-monotonicity]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "J. R. Norris, Probability and Measure, Section 2.3"
      url: "https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf"
    - title: "Jean-Francois Le Gall, Integration, Probabilities and Stochastic Processes, Section 8.1.6"
      url: "https://www.imo.universite-paris-saclay.fr/~jean-francois.le-gall/IPPA2.pdf"
---

## Statement

Assume the Axiom of Countable Choice.

1. Let $X$ be a real random variable, let $\mathbb P_X$ be its law, and let
   $F_X(x)=\mathbb P(X\le x)$. Then $F_X$ is nondecreasing and right-continuous,
   satisfies
   $$\lim_{x\to-\infty}F_X(x)=0,\qquad \lim_{x\to+\infty}F_X(x)=1,$$
   and obeys
   $$\mathbb P_X((a,b])=F_X(b)-F_X(a)\qquad(a<b).$$
2. Conversely, if $F:\mathbb R\to\mathbb R$ is nondecreasing and
   right-continuous with
   $$\lim_{x\to-\infty}F(x)=0,\qquad \lim_{x\to+\infty}F(x)=1,$$
   then there is a unique Borel probability measure $\mu$ on $\mathbb R$ such
   that
   $$\mu((a,b])=F(b)-F(a)\qquad(a<b),$$
   equivalently
   $$F(x)=\mu((-\infty,x])\qquad(x\in\mathbb R).$$

## Facts & Assumptions

**Given:** Countable Choice, a real random variable $X$, its law $\mathbb P_X$,
and a function $F$ as in part 2.

[L1] The law $\mathbb P_X$ is a probability measure on
$(\mathbb R,\mathcal B(\mathbb R))$
([[def-law-or-distribution-of-a-random-element]],
[[lem-law-of-a-random-element-is-a-probability-measure]]).

[L2] For measures, monotonicity, set-difference subtraction, continuity from
below, and continuity from above are available
([[prop-measure-monotonicity]], [[prop-measure-of-a-set-difference]],
[[thm-continuity-from-below-for-measures]],
[[thm-continuity-from-above-for-measures]]).

[L3] Assuming Countable Choice, finite-on-compacts Borel measures on
$\mathbb R$ correspond to nondecreasing right-continuous functions modulo
constants, and the interval increments determine the measure
([[thm-lebesgue-stieltjes-correspondence-with-distribution-functions]]).

## Proof

**Proof technique:** direct.

1.1 If $a<b$, then $(-\infty,a]\subseteq(-\infty,b]$, so [L1] and [L2] give $F_X(a)\le F_X(b)$. Also $$(-\infty,b]\setminus(-\infty,a]=(a,b],$$ so the finite-measure difference formula from [L2] yields $$\mathbb P_X((a,b])=F_X(b)-F_X(a).$$ [L1, L2]

1.2 For fixed $x$, the sets $(-\infty,x+1/n]$ decrease to $(-\infty,x]$, and $\mathbb P_X((-\infty,x+1])\le\mathbb P_X(\mathbb R)=1$. Hence [L2] gives right continuity of $F_X$. Likewise $(-\infty,n]\uparrow\mathbb R$ and $(-\infty,-n]\downarrow\varnothing$, so continuity from below and from above give $$\lim_{n\to\infty}F_X(n)=1,\qquad \lim_{n\to\infty}F_X(-n)=0.$$ [L1, L2]

1.3 Put $G(x):=F(x)-F(0)$. Then $G$ is still nondecreasing and right-continuous, so [L3] gives a unique Borel measure $\mu$ finite on compact sets with $$\mu((a,b])=G(b)-G(a)=F(b)-F(a)\qquad(a<b).$$ [L3, given]

2.1 For fixed $x$, the sets $(-n,x]$ increase to $(-\infty,x]$. Hence [L2] and step 1.3 give $$\mu((-\infty,x])=\lim_{n\to\infty}\mu((-n,x])=\lim_{n\to\infty}(F(x)-F(-n))=F(x).$$ Applying continuity from below once more to $(-\infty,n]\uparrow\mathbb R$ shows $\mu(\mathbb R)=\lim_n F(n)=1$, so $\mu$ is a probability measure. If $\nu$ is another Borel probability measure with $\nu((-\infty,x])=F(x)$ for all $x$, then $\nu((a,b])=F(b)-F(a)=\mu((a,b])$ for every $a<b$, and [L3] gives $\nu=\mu$. [L2, L3, step 1.3]

3.1 Steps 1.1 and 1.2 prove part 1, and steps 1.3 and 2.1 prove part 2. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
