---
id: ex-loss-update-can-have-infinite-normalizer
kind: example
title: "A measurable loss can have an infinite normalizer"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - cor-cauchy-reals-lub-complete
  - cor-exponential-reciprocal-and-positivity
  - def-countable
  - def-dirac-measure
  - def-generalized-bayes-loss-update-and-temperature
  - def-integer-power
  - def-integral-of-a-nonnegative-simple-function
  - def-natural-logarithm
  - def-natural-numbers
  - def-nonnegative-lebesgue-integral
  - def-nonnegative-simple-measurable-function
  - def-probability-measure
  - def-abs-value
  - def-nonnegative-extended-series
  - def-nonnegative-weighted-sum-of-measures
  - def-ordered-field
  - def-finite-sum
  - def-series
  - lem-countable-discrete-space-is-standard-borel
  - lem-finite-sum-laws
  - cor-of-one-positive
  - prop-dirac-measure-is-a-probability-measure
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-geometric-series
  - thm-nonnegative-series-bounded-partial-sums
  - thm-algebra-of-limits
  - thm-induction-principle
  - thm-nonnegative-weighted-sums-of-measures
  - thm-of-archimedean
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "P. G. Bissiri, C. C. Holmes, and S. G. Walker, A general framework for updating belief distributions, JRSS B 78(5), 2016"
      url: "https://arxiv.org/pdf/1306.6430"
---
## Example

Let $\Theta=\mathbb N$ with its power-set sigma-algebra, and put
$a_k=(1/2)^{k+1}$ for $k\in\mathbb N$. Define the prior
$$\pi:=\sum_{k=0}^{\infty}a_k\delta_k,$$
where $\delta_k$ is the Dirac measure at $k$. The geometric-series formula
gives $\sum_{k\ge0}a_k=1$, so $\pi$ is a probability measure. Define the
real-valued loss $\ell(k):=\log a_k$. At temperature $w=1$, every
unnormalized atom has mass $a_ke^{-\ell(k)}=1$, and the normalizer is infinite;
therefore the loss update is not defined.

## Facts & Assumptions

**Given:** The von Neumann natural numbers $\mathbb N$, their power-set
sigma-algebra, weights $a_k=(1/2)^{k+1}$, and Dirac measures $\delta_k$.

[F1] [[def-generalized-bayes-loss-update-and-temperature]]: at fixed $w>0$,
$Z=\int e^{-w\ell}\,d\pi$ must be finite and positive for the update to be
defined.

[F2] [[lem-countable-discrete-space-is-standard-borel]]: every nonempty
at-most-countable set with its power-set sigma-algebra is standard Borel.

[F3] [[def-countable]]: a set equinumerous with $\mathbb N$ is at-most-countable.

[F4] [[def-natural-numbers]]: $0\in\mathbb N$ and $\mathbb N$ is closed under
successor.

[F5] [[thm-nonnegative-weighted-sums-of-measures]]: a countable nonnegative
weighted sum of measures on one measurable space is a measure.

[F6] [[def-dirac-measure]]: $\delta_k(A)=1$ when $k\in A$ and is zero
otherwise.

[F7] [[prop-dirac-measure-is-a-probability-measure]]: each $\delta_k$ is a
probability measure.

[F8] [[def-probability-measure]]: a probability measure has total mass one.

[F9] [[thm-induction-principle]]: a property holding at zero and preserved by
successor holds for all natural numbers.

[F10] [[def-integer-power]]: $b^0=1$ and $b^{k+1}=b^k b$ for natural $k$.

[F11] [[thm-geometric-series]]: for $|r|<1$,
$\sum_{j=0}^{\infty}r^j=1/(1-r)$.

[F12] [[def-natural-logarithm]]: $\log$ is inverse to $\exp$ on
$(0,\infty)$.

[F13] [[cor-exponential-reciprocal-and-positivity]]: $\exp(t)>0$ and
$\exp(-t)=1/\exp(t)$.

[F14] [[def-nonnegative-simple-measurable-function]]: a finite nonnegative
linear combination of indicators of measurable sets is a nonnegative simple
measurable function.

[F15] [[def-nonnegative-lebesgue-integral]]: the nonnegative integral is the
supremum of the integrals of nonnegative simple minorants, with values in
$[0,+\infty]$.

[F16] [[def-integral-of-a-nonnegative-simple-function]]: the integral of a
simple function represented on disjoint measurable sets is the sum of its
coefficient times the measure of each set.

[F17] [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]: the
nonnegative integral of a simple function equals its simple integral.

[F18] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: if
$0\le f\le g$, then $\int f\,d\pi\le\int g\,d\pi$.

[F19] [[cor-cauchy-reals-lub-complete]]: $\mathbb R$ is a complete ordered
field.

[F20] [[thm-of-archimedean]]: in a complete ordered field, for every $x$ there
is a natural $n\ge1$ with $x<n$.

[F21] [[def-abs-value]]: if $b\ge0$, then $|b|=b$.

[F22] [[def-ordered-field]]: products of positive reals are positive.

[F23] [[cor-of-one-positive]]: $1>0$.

[F24] [[lem-finite-sum-laws]]: finite sums scale by a real constant,
$\sum_{k<n}c u_k=c\sum_{k<n}u_k$.

[F25] [[def-series]]: a convergent series sums to the limit of its finite
partial sums.

[F26] [[thm-algebra-of-limits]]: scaling a convergent sequence by a fixed
real constant scales its limit by that constant.

[F27] [[thm-nonnegative-series-bounded-partial-sums]]: for nonnegative terms,
the usual convergent series sum is the supremum of its finite partial sums.

[F28] [[def-nonnegative-extended-series]]: the nonnegative extended sum is the
supremum of its finite partial sums.

[F29] [[def-nonnegative-weighted-sum-of-measures]]: the countable weighted sum
is evaluated pointwise by the nonnegative extended sum of its weighted
measures.

## Verification

1.1 The identity map shows $\mathbb N$ is equinumerous with itself, hence at-most-countable by [F3]; [F4] makes it nonempty. Therefore [F2] shows $(\Theta,\mathcal P(\Theta))$ is standard Borel. [F3, F4, F2, given]

1.2 Put $b=1/2$. Ordered-field arithmetic gives $0<b<1$, so [F21] gives $|b|=b<1$. The powers are positive: $b^0=1>0$ by [F10] and [F23], and if $b^k>0$, then $b^{k+1}=b^kb>0$ by [F10] and [F22]. Induction [F9] gives $a_k=b^{k+1}>0$ for every $k$. [F21, F10, F23, F22, F9, F19, given, algebra]

2.1 By [F11], $\sum_{k=0}^{\infty}b^k=1/(1-b)$. For every $N$, recursion [F10] and finite-sum scaling [F24] give $$\sum_{k<N+1}a_k=\sum_{k<N+1}b^{k+1} =b\sum_{k<N+1}b^k.$$ The partial sums of $\sum b^k$ converge to $1/(1-b)$ by [F11] and [F25]; therefore [F26] gives $\sum_{k=0}^{\infty}a_k=b/(1-b)=1$. By [F27] and [F28], this usual series sum is also the nonnegative extended sum of the coefficients used in the weighted measure. [F11, F10, F24, F25, F26, F27, F28, step 1.2, algebra]

2.2 Since $a_k>0$, $\ell(k)=\log a_k$ is finite. Every inverse image of a Borel subset of $\mathbb R$ is a subset of $\mathbb N$, hence is in $\mathcal P(\mathbb N)$; therefore $\ell$ is measurable. By [F12]–[F13], $e^{-\ell(k)}=1/a_k$, so the normalizer is $Z=\int e^{-\ell}\,d\pi$. [F12, F13, step 1.2, given]

3.1 By [F5] and [F7], $\pi=\sum_{k\ge0}a_k\delta_k$ is a measure. Its total mass is $$\pi(\Theta)=\sum_{k\ge0}a_k\delta_k(\Theta)=\sum_{k\ge0}a_k=1$$ by [F6], [F28], [F29], and step 2.1, so [F8] makes $\pi$ a probability. For each $k$, [F6] gives $\pi(\{k\})=a_k$. [F5, F7, F6, F28, F29, step 2.1, F8, algebra]

4.1 For each $N\in\mathbb N$, set $$s_N:=\sum_{k=0}^{N}a_k^{-1}\mathbf1_{\{k\}}.$$ It is a nonnegative simple function by [F14], and $0\le s_N\le e^{-\ell}$: there is equality at $k\le N$, and for $k>N$ the left side is zero while $e^{-\ell(k)}>0$ by [F13]. By [F16]–[F17] and step 3.1, $$\int s_N\,d\pi=\sum_{k=0}^{N}a_k^{-1}\pi(\{k\})=N+1.$$ Thus [F18] yields $Z\ge N+1$ for every $N$. [F14, F13, F16, F17, step 3.1, F18, F15, step 2.2, algebra]

5.1 If $Z$ were finite, [F19]–[F20] would give $N\in\mathbb N$, $N\ge1$, with $Z<N$. Step 4.1 gives $Z\ge N+1$, a contradiction. Since [F15] places $Z$ in $[0,+\infty]$, it follows that $Z=+\infty$. The finite-positive condition in [F1] therefore fails, so no generalized Bayes update is defined. [F19, F20, step 4.1, F15, F1, contradiction] ∎
