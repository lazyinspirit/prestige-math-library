---
id: ex-heavy-tailed-reward-law-outside-subgaussian-model
kind: example
title: "A finite-mean polynomial-tail reward is not sub-Gaussian"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps: [def-stochastic-bandit-and-pseudo-regret, def-centered-subgaussian-reward, def-real-exponential-function-and-e, lem-exponential-series-has-infinite-radius, thm-exponential-is-strictly-increasing, cor-exponential-reciprocal-and-positivity, thm-exponential-addition-formula, def-series, def-integer-power, def-factorial-and-falling-factorial, def-canonical-natural, lem-of-naturals-positive, thm-nonnegative-series-bounded-partial-sums, thm-of-archimedean, def-probability-measure, def-dirac-measure, prop-dirac-measure-is-a-probability-measure, def-nonnegative-weighted-sum-of-measures, thm-nonnegative-weighted-sums-of-measures, def-random-element-and-real-random-variable, def-law-or-distribution-of-a-random-element, lem-law-of-a-random-element-is-a-probability-measure, thm-change-of-variables-for-expectation, prop-order-and-scalar-rules-for-the-nonnegative-integral, lem-zeta-two-and-three-converge, lem-countably-valued-expectation-is-weighted-series]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§5.3, PDF pp. 86–88 / printed pp. 77–79: sub-Gaussian rewards require finite MGF at every real parameter; the notes discuss heavier-tailed reward laws. The discrete construction and its full proof are local."
verification:
  precheck: n/a
---

## Example

For $p\in\{2,3\}$, write $\zeta_p=\sum_{j=1}^{\infty}j^{-p}$, identifying each positive integer with its canonical real image. Let $\Omega=\{1,2,\ldots\}$ with its full power set, put $p_j=1/(\zeta_3j^3)$, and define the probability measure $Q=\sum_{j=1}^{\infty}p_j\delta_j$ by its countable weighted sum of Dirac measures. Let $X:\Omega\to\mathbb R$ be the inclusion map and let $P_X$ be its law. The reward has finite mean $\mathbb E_Q[X]=\int_{\mathbb R}x\,P_X(dx)=\zeta_2/\zeta_3$, but $\int_{\mathbb R}\exp(\lambda x)\,P_X(dx)=+\infty$ for every $\lambda>0$. Thus this finite-mean reward lies outside the centered 1-sub-Gaussian model.

## Example references

[[def-stochastic-bandit-and-pseudo-regret]]: a stochastic arm law is a probability measure on the real Borel space with finite first absolute moment.

[[lem-zeta-two-and-three-converge]]: the two normalizing sums $\zeta_2$ and $\zeta_3$ are finite and positive.

[[lem-countably-valued-expectation-is-weighted-series]]: a countably valued nonnegative random variable has expectation equal to its weighted series.

[[def-centered-subgaussian-reward]]: a 1-sub-Gaussian reward has a finite centered MGF bounded by $\exp(\lambda^2/2)$ for every real $\lambda$.

[[def-probability-measure]]: a probability measure has total mass one.

[[def-dirac-measure]]: the Dirac measure at a point assigns mass one to sets containing that point and zero otherwise.

[[prop-dirac-measure-is-a-probability-measure]]: each Dirac measure is a probability measure.

[[def-nonnegative-weighted-sum-of-measures]]: countable weighted sums of measures are defined pointwise by nonnegative extended sums.

[[thm-nonnegative-weighted-sums-of-measures]]: a countable nonnegative weighted sum of measures is a measure.

[[def-real-exponential-function-and-e]]: the real exponential is defined by its all-real-convergent power series.

[[thm-exponential-is-strictly-increasing]]: the real exponential is continuous, hence Borel measurable.

[[lem-exponential-series-has-infinite-radius]]: the exponential power series converges absolutely at every real argument.

[[thm-nonnegative-series-bounded-partial-sums]]: partial sums of a nonnegative series are bounded above by its extended sum.

[[def-factorial-and-falling-factorial]]: the factorial is recursively defined and $4!=24$ in the natural numbers.

[[def-integer-power]]: natural powers use recursive multiplication and negative powers of positive reals are reciprocals.

[[def-canonical-natural]]: natural numbers in the real field are represented by their canonical images.

[[lem-of-naturals-positive]]: the canonical image of each positive natural is positive.

[[thm-of-archimedean]]: the natural numbers are unbounded in the real field.

[[thm-exponential-addition-formula]]: $\exp(x+y)=\exp(x)\exp(y)$ for all real $x,y$.

[[cor-exponential-reciprocal-and-positivity]]: $\exp(x)>0$ for every real $x$.

[[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: positive finite scalars factor out of nonnegative Lebesgue integrals.

[[def-law-or-distribution-of-a-random-element]]: the law of a random element is its pushforward probability measure.

[[lem-law-of-a-random-element-is-a-probability-measure]]: the law of a random element is a probability measure.

[[thm-change-of-variables-for-expectation]]: for nonnegative measurable $g$, $\mathbb E[g(X)]=\int g\,dP_X$.

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*](https://tor-lattimore.com/downloads/book/book.pdf): §5.3, PDF pp. 86–88 / printed pp. 77–79; the local discrete construction and divergence proof are supplied here.

## Facts & Assumptions

**Given:** The two convergent sums $\zeta_2,\zeta_3$, the positive-integer sample space and weights in the Example, the inclusion random variable $X$, and the centered 1-sub-Gaussian definition.

[F1] The series $\zeta_2$ and $\zeta_3$ converge and are at least one ([[lem-zeta-two-and-three-converge]]).

[F2] Every Dirac measure is a probability measure; a countable weighted sum of measures is a measure, and a measure of total mass one is a probability measure ([[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]], [[def-nonnegative-weighted-sum-of-measures]], [[thm-nonnegative-weighted-sums-of-measures]], [[def-probability-measure]]).

[F3] If a nonnegative measurable random variable is constant on each cell of a countable measurable partition, its expectation is the series of those values weighted by cell probabilities; a finite series gives integrability ([[lem-countably-valued-expectation-is-weighted-series]]).

[F4] The inclusion $X$ is a measurable random element, its law is a probability measure, and expectation of a nonnegative measurable function of $X$ equals its integral against that law ([[def-random-element-and-real-random-variable]], [[def-law-or-distribution-of-a-random-element]], [[lem-law-of-a-random-element-is-a-probability-measure]], [[thm-change-of-variables-for-expectation]]).

[F5] The exponential is continuous; for $x\ge0$, its power-series terms are nonnegative and each finite partial sum is at most $\exp(x)$; in particular $\exp(x)\ge x^4/24$, since $4!=24$ ([[def-real-exponential-function-and-e]], [[thm-exponential-is-strictly-increasing]], [[lem-exponential-series-has-infinite-radius]], [[thm-nonnegative-series-bounded-partial-sums]], [[def-series]], [[def-integer-power]], [[def-factorial-and-falling-factorial]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[F6] The natural numbers are unbounded in $\mathbb R$ ([[thm-of-archimedean]]).

[F7] The exponential addition formula holds and $\exp(y)>0$ for every real $y$ ([[thm-exponential-addition-formula]], [[cor-exponential-reciprocal-and-positivity]]).

[F8] A centered 1-sub-Gaussian reward has finite MGF bounded by $\exp(\lambda^2/2)$ for every real $\lambda$ ([[def-centered-subgaussian-reward]]).

[F9] A positive finite scalar factors out of a nonnegative Lebesgue integral ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F10] A stochastic arm law is a probability measure on the real Borel space with finite first absolute moment, and its mean is the integral of the identity function ([[def-stochastic-bandit-and-pseudo-regret]]).

## Verification

1.1 By [F1], $\zeta_3$ is finite and positive. For $p_j=1/(\zeta_3j^3)$, the finite partial sum of the weights is $S_N/\zeta_3$, where $S_N=\sum_{j=1}^{N}j^{-3}\to\zeta_3$. Given $\varepsilon>0$, choose $N$ with $|S_N-\zeta_3|<\varepsilon\zeta_3$; then $|S_N/\zeta_3-1|<\varepsilon$, so $\sum_jp_j=1$. By [F2], the Dirac weighted sum $Q$ is a measure and $Q(\Omega)=\sum_jp_j=1$, so $Q$ is a probability measure. The inclusion map from a full-power-set space is measurable, and [F4] makes its law $P_X$ a probability measure. [given, F1, F2, F4, construct, choose, algebra]

1.2 Fix $\lambda>0$. The variable $\exp(\lambda X)$ is measurable on the full power set and equals $\exp(\lambda j)$ on $\{j\}$. The function $x\mapsto\exp(\lambda x)$ is Borel measurable by continuity in [F5]. By [F3] and [F4], its expectation and the MGF under $P_X$ are $\sum_{j\ge1}p_j\exp(\lambda j)$. By [F5], $p_j\exp(\lambda j)\ge c j$, where $c=\lambda^4/(24\zeta_3)>0$. Thus the $N$th partial sum is at least $c\sum_{j=1}^{N}j\ge cN$. For any real $M$, [F6] gives an integer $N>M/c$, so these partial sums are unbounded and the nonnegative extended sum is $+\infty$. Hence $\int\exp(\lambda x)\,P_X(dx)=+\infty$. [given, F1, F3, F4, F5, F6, algebra, choose]

2.1 Apply [F3] to the singleton partition $\Omega=\bigcup_{j\ge1}\{j\}$: $\mathbb E_Q[X]=\sum_{j\ge1}j p_j$. Its $N$th partial sum is $T_N/\zeta_3$, where $T_N=\sum_{j=1}^{N}j^{-2}\to\zeta_2$. Given $\varepsilon>0$, choose $N$ with $|T_N-\zeta_2|<\varepsilon\zeta_3$; then $|T_N/\zeta_3-\zeta_2/\zeta_3|<\varepsilon$. Thus $\mathbb E_Q[X]=\zeta_2/\zeta_3<\infty$, so [F3] makes $X$ integrable. By [F4], this equals $\int x\,P_X(dx)$, the finite arm mean in the bandit model. [given, F1, F3, F4, step 1.1, choose, algebra]

3.1 Let $\mu=\mathbb E_Q[X]$, finite by step 2.1 and equal to the arm-law mean by [F4, F10]. Pointwise, [F7] gives $\exp(\lambda(X-\mu))=\exp(-\lambda\mu)\exp(\lambda X)$, with positive finite scalar $\exp(-\lambda\mu)$. By [F9] and step 1.2, the centered MGF is still $+\infty$. The change-of-variables formula [F4] transfers this centered MGF to $P_X$. This contradicts the finite bound required by [F8], so the arm law is not 1-sub-Gaussian. [given, F4, F7, F8, F9, F10, step 2.1, step 1.2, algebra] ∎
