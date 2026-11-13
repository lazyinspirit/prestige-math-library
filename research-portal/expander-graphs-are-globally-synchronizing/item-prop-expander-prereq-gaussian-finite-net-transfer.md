---
title: From finite Gaussian comparisons to a sphere supremum
status: published
research_item: prop-expander-prereq-gaussian-finite-net-transfer
dependency_level: 0
---

## Prerequisites

- [math:lem-finite-gaussian-max-comparison](https://alphabetamath.cc/item/lem-finite-gaussian-max-comparison)
- [math:def-gaussian-process](https://alphabetamath.cc/item/def-gaussian-process)
- [math:def-stochastic-process-and-finite-dimensional-distributions](https://alphabetamath.cc/item/def-stochastic-process-and-finite-dimensional-distributions)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence)
- [math:thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique](https://alphabetamath.cc/item/thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique)
- [math:thm-rectangle-criterion-for-independent-random-elements](https://alphabetamath.cc/item/thm-rectangle-criterion-for-independent-random-elements)
- [math:prop-closure-properties-of-measurable-functions-used-by-the-integral](https://alphabetamath.cc/item/prop-closure-properties-of-measurable-functions-used-by-the-integral)
- [math:def-standard-normal-and-normal-laws](https://alphabetamath.cc/item/def-standard-normal-and-normal-laws)
- [math:lem-q-and-irrationals-dense-r](https://alphabetamath.cc/item/lem-q-and-irrationals-dense-r)
- [math:thm-rationals-countable](https://alphabetamath.cc/item/thm-rationals-countable)
- [math:thm-heine-borel-rn](https://alphabetamath.cc/item/thm-heine-borel-rn)
- [math:def-metric-continuity](https://alphabetamath.cc/item/def-metric-continuity)
- [math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)


## Statement

Assume the Axiom of Choice. Let $S=\{t\in\mathbb R^d:\|t\|_2=1\}$, where $d\ge1$. Let $X=(X_t)_{t\in S}$ and $Y=(Y_t)_{t\in S}$ be centered real Gaussian processes, possibly on different probability spaces. Suppose that each has continuous sample paths outside a measurable null set and that $\sup_{t\in S}X_t$ and $\sup_{t\in S}Y_t$ are measurable and integrable. If $\mathbb E(X_s-X_t)^2\ge\mathbb E(Y_s-Y_t)^2$ for every $s,t\in S$, then $\mathbb E\sup_{t\in S}X_t\ge\mathbb E\sup_{t\in S}Y_t$.

Here centered means that every coordinate has expectation zero; integrable means finite absolute expectation. A Gaussian process has a possibly singular multivariate normal evaluation vector at every finite list of indices. A finite $\varepsilon$-net in $S$ is a finite subset whose points are within Euclidean distance $\varepsilon$ of every point of $S$.

## Statement references

[math:def-gaussian-process](https://alphabetamath.cc/item/def-gaussian-process)

[math:def-stochastic-process-and-finite-dimensional-distributions](https://alphabetamath.cc/item/def-stochastic-process-and-finite-dimensional-distributions)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-metric-continuity](https://alphabetamath.cc/item/def-metric-continuity)

[math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)

## Facts & Assumptions

**Given:** The sphere, processes, continuity and integrability assumptions, and increment-variance ordering in the Statement.

**Goal:** Compare the expectations of the two sphere suprema.

[F1] Under AC, finite centered Gaussian vectors with finite covariance matrices and ordered increment variances have ordered expected maxima when the two vectors are independent and have at least two coordinates ([math:lem-finite-gaussian-max-comparison](https://alphabetamath.cc/item/lem-finite-gaussian-max-comparison), [math:def-gaussian-process](https://alphabetamath.cc/item/def-gaussian-process), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

[F2] The product of two probability measures exists and has the rectangle formula; the rectangle criterion then gives independence of random vectors depending on separate coordinates ([math:thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique](https://alphabetamath.cc/item/thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique), [math:thm-rectangle-criterion-for-independent-random-elements](https://alphabetamath.cc/item/thm-rectangle-criterion-for-independent-random-elements)).

[F3] Finite maxima and increasing pointwise limits of measurable functions are measurable, and dominated convergence passes expectations through an almost-everywhere limit with an integrable majorant ([math:prop-closure-properties-of-measurable-functions-used-by-the-integral](https://alphabetamath.cc/item/prop-closure-properties-of-measurable-functions-used-by-the-integral), [math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence)).

[F4] The rationals are countable and dense in the reals, and closed bounded subsets of $\mathbb R^d$ are compact ([math:thm-rationals-countable](https://alphabetamath.cc/item/thm-rationals-countable), [math:lem-q-and-irrationals-dense-r](https://alphabetamath.cc/item/lem-q-and-irrationals-dense-r), [math:thm-heine-borel-rn](https://alphabetamath.cc/item/thm-heine-borel-rn)).

[F5] A one-dimensional normal law is an affine image of the standard normal density $e^{-x^2/2}/\sqrt{2\pi}$, including the constant case ([math:def-standard-normal-and-normal-laws](https://alphabetamath.cc/item/def-standard-normal-and-normal-laws)).

[F6] A stochastic process is a family of random elements on one probability space; its finite evaluation vectors have the corresponding pushforward laws ([math:def-stochastic-process-and-finite-dimensional-distributions](https://alphabetamath.cc/item/def-stochastic-process-and-finite-dimensional-distributions)).

[F7] Continuity means metric $\varepsilon$-$\delta$ continuity, using the Euclidean metrics for maps on the sphere and normalization away from zero ([math:def-metric-continuity](https://alphabetamath.cc/item/def-metric-continuity)).

[F8] The expectation of a nonnegative or integrable random variable is its probability-space integral; for a real random variable, integrability means finite absolute expectation ([math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)).

## Proof

1.1 Enumerate the distinct points of $D=\{q/\|q\|_2:q\in\mathbb Q^d\setminus\{0\}\}$ as $t_1,t_2,\ldots$ if $d\ge2$; for $d=1$, take $D=\{-1,1\}$ and repeat these points in the list. Rational coordinate approximation and continuity of normalization away from zero show that $D$ is dense in $S$. Put $N_k=\{t_1,\ldots,t_{k+1}\}$. These finite sets are nested and have dense union. For every $\varepsilon>0$, the open $\varepsilon$-balls centered at points of $D$ cover compact $S$; a finite subcover is contained in some $N_k$, so all later $N_k$ are $\varepsilon$-nets. [F4, F7, construct]

2.1 For either process $Z\in\{X,Y\}$, let $M_k^Z=\max_{t\in N_k}Z_t$ and $M^Z=\sup_{t\in S}Z_t$. On the measurable probability-one event of continuous sample paths, density gives $M_k^Z\uparrow M^Z$: for any $t\in S$, values at a sequence from $D$ tending to $t$ converge to $Z_t$. The finite maxima are measurable by [F3]. Since $t_1\in N_k$, $Z_{t_1}\le M_k^Z\le M^Z$, hence $|M_k^Z|\le |Z_{t_1}|+|M^Z|$ on that event. [given, F3, F6, F7, step 1.1]

3.1 The coordinate $Z_{t_1}$ has a normal law by the Gaussian-process definition. Its absolute expectation is finite: by [F5] it is bounded by $|m|+\sigma\mathbb E|G|$, where $G$ is standard normal and $\mathbb E|G|=\sqrt{2/\pi}$ by integrating its density on the two half-lines. Thus the majorant in step 2.1 is integrable. Dominated convergence gives $\mathbb E M_k^Z\to\mathbb E M^Z$ for each process. [F1, F3, F5, F8, step 2.1]

4.1 For each $k$, put independent copies of the two finite evaluation vectors on the product of their original probability spaces. The rectangle formula and criterion in [F2] give independence, and each copy has its original finite-dimensional law, means, and increment variances. If $N_k$ has fewer than two distinct points, repeat a point in its evaluation list; otherwise list its points once. The finite comparison [F1] gives $\mathbb E M_k^X\ge\mathbb E M_k^Y$. Taking $k\to\infty$ using step 3.1 proves the desired comparison. [given, F1, F2, F6, F8, step 1.1, step 3.1] ∎

## Remarks

To apply this proposition to a quadratic-form process, its increment ordering, almost-sure path continuity, and integrability of its supremum must be established separately.
