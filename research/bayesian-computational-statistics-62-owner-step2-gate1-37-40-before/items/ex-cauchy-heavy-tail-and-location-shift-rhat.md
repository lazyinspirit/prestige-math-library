---
id: ex-cauchy-heavy-tail-and-location-shift-rhat
kind: example
title: Heavy tails and a location shift in split R-hat
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-standard-cauchy-law
  - def-countable-choice
  - def-moments-variance-and-covariance
  - def-standard-normal-and-normal-laws
  - lem-standard-normal-cdf-is-continuous-and-strictly-increasing
  - lem-standard-normal-cdf-quantiles-and-symmetry
  - alg-split-rhat-from-multiple-chains
  - alg-rank-normalized-folded-split-rhat
  - def-pi-via-first-positive-cosine-zero
  - thm-algebra-of-continuous-functions
  - cor-continuous-functions-are-borel-measurable
  - thm-borel-sets-are-lebesgue-measurable
  - thm-integration-against-a-density
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-lebesgue-measure-of-a-box-of-every-kind
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Aki Vehtari et al., Rank-normalization, folding, and localization, §§1.2 and 4.1–4.2"
      url: https://arxiv.org/pdf/1903.08008v5
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 11, §11.11"
      url: https://artowen.su.domains/mc/Ch-MCMC.pdf
axiom_use: "The Cauchy density law inherits Countable Choice through its Borel-measure construction. The finite raw split calculation is choice-free; the rank-normalized diagnostic inherits full AC through the standard-normal score interface."
---

## Example

The standard Cauchy law has density $f(x)=1/(\pi(1+x^2))$ by [[def-standard-cauchy-law]]. Its second moment is
infinite, so the population variance used to interpret an unranked variance
diagnostic does not exist. Separately, take two finite chains of length eight:

$$x_1=(-1,-1,1,1,-1,-1,1,1),\qquad x_2=(1,1,3,3,1,1,3,3).$$

The raw split statistic and the rank-normalized split statistic on these
location-shifted arrays are both $\sqrt{7/4}$; the folded component is
$\sqrt{3/4}$. This finite calculation illustrates location sensitivity. It is
distinct from the paper's replicated Cauchy simulations, which are empirical
evidence rather than a theorem.

## Facts & Assumptions

**Given:** The standard Cauchy law [[def-standard-cauchy-law]], the two finite arrays above, and the
split and rank-normalized folded split procedures.

[A1] The Axiom of Choice assumed by the standard-normal rank-score interface.
[[def-axiom-of-choice]]

[A2] Countable Choice is used by the construction of the standard Cauchy probability law.
[[def-countable-choice]]

[F6] The standard Cauchy law is a probability measure with density $f(x)=1/(\pi(1+x^2))$.
[[def-standard-cauchy-law]]

[F1] Variance is defined for square-integrable random variables.
[[def-moments-variance-and-covariance]]

[F2] Split $\widehat R$ uses
$\widehat V^+=(N-1)W/N+B/N$ and returns $\sqrt{\widehat V^+/W}$ when $W>0$.
[[alg-split-rhat-from-multiple-chains]]

[F3] The improved procedure takes the maximum of rank-normalized split
$\widehat R$ and rank-normalized folded split $\widehat R$.
[[alg-rank-normalized-folded-split-rhat]]

[F4] The standard-normal law has the even density
$\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$.
[[def-standard-normal-and-normal-laws]]

[F5] Its CDF is continuous and strictly increasing from $0$ to $1$, so the
inverse Blom scores are unique.
[[lem-standard-normal-cdf-is-continuous-and-strictly-increasing]]

[F7] Every probability in $(0,1)$ has a unique finite standard-normal score,
and complementary probabilities have opposite scores.
[[lem-standard-normal-cdf-quantiles-and-symmetry]]

[F8] The standard Cauchy law is the measure $f\,d\lambda$, with
$f(x)=1/(\pi(1+x^2))$. For nonnegative measurable $g$,
$\int g\,d(f\,d\lambda)=\int gf\,d\lambda$.
[[def-standard-cauchy-law]] [[thm-integration-against-a-density]]

[F9] The nonnegative integral is monotone, positively homogeneous, and agrees
with the simple integral on simple functions; in particular,
$\int c\mathbf1_A\,d\lambda=c\lambda(A)$ for $c\ge0$ and measurable $A$.
[[prop-order-and-scalar-rules-for-the-nonnegative-integral]]
[[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]

[F10] Under Countable Choice, the interval $[1,R]$ has Lebesgue measure $R-1$
for every finite $R\ge1$.
[[thm-lebesgue-measure-of-a-box-of-every-kind]]

[F11] $\pi>0$, and the polynomial $x^2$ and the function
$h(x)=x^2/(\pi(1+x^2))$ are continuous, hence Lebesgue measurable under
Countable Choice: the denominator never vanishes, algebra preserves continuity,
continuous functions are Borel measurable, and Borel sets are Lebesgue
measurable.
[[def-pi-via-first-positive-cosine-zero]]
[[thm-algebra-of-continuous-functions]]
[[cor-continuous-functions-are-borel-measurable]]
[[thm-borel-sets-are-lebesgue-measurable]]

## Verification

**Given:** The density and arrays in the Example.

1.1 Put $h(x):=x^2f(x)=x^2/(\pi(1+x^2))$, which is nonnegative and measurable by [F11]. For every finite $R>1$ and $x\in[1,R]$, $x^2/(1+x^2)\ge1/2$, so $(2\pi)^{-1}\mathbf1_{[1,R]}(x)\le h(x)$. By [F9] and [F10], $\int_{\mathbb R}h\,d\lambda\ge\int_{\mathbb R}(2\pi)^{-1}\mathbf1_{[1,R]}\,d\lambda=\frac{R-1}{2\pi}.$ These lower bounds are unbounded as $R\to\infty$, so $\int h\,d\lambda=+\infty$. Applying [F8] to the nonnegative measurable function $x\mapsto x^2$ gives $\int_{\mathbb R}x^2\,d\mu_C=\int_{\mathbb R}x^2f\,d\lambda=\int_{\mathbb R}h\,d\lambda=+\infty.$ Thus the Cauchy target is not square-integrable, and its population variance is not defined under [F1]. [A2, given, F1, F8, F9, F10, F11, algebra]

1.2 Splitting the arrays gives four length-four chains, two with values $(-1,-1,1,1)$ and two with $(1,1,3,3)$. Each has sample variance $4/3$; their means are $0,0,2,2$, with grand mean $1$. Hence $W=4/3$ and $B=(4/3)(1+1+1+1)=16/3$. [given, F2, algebra]

1.3 In the pooled sample, $-1,1,3$ have multiplicities $4,8,4$ and average ranks $2.5,8.5,14.5$. Their Blom probabilities are $17/130,1/2,113/130$. By [F7], the corresponding scores are $-a,0,a$ for $a=\Phi^{-1}(113/130)>0$. The four split-chain means are $-a/2,-a/2,a/2,a/2$, each variance is $a^2/3$, and the scale factors cancel in [F2]; the rank-normalized split statistic is again $\sqrt{7/4}$. [A1, F2, F3, F7, algebra]

2.1 Therefore $\widehat V^+=(3/4)(4/3)+(1/4)(16/3)=7/3$, and the raw split statistic is $\sqrt{(7/3)/(4/3)}=\sqrt{7/4}$. [step 1.2, F2, algebra]

2.2 The pooled median is $1$, so the raw folds have values $0$ and $2$, each occurring eight times. Their average ranks are $4.5$ and $12.5$, with Blom probabilities $33/130$ and $97/130$. By [F7], their scores are $-b$ and $b$, where $b=\Phi^{-1}(97/130)>0$. Thus every folded score is $b$ times its raw fold minus $b$. A positive scaling and common translation multiply $W$ and $B$ by $b^2$ and leave $\widehat V^+/W$ unchanged. The raw folded split chains are $(2,2,0,0)$ and $(0,0,2,2)$; each has mean $1$ and sample variance $4/3$, so $B=0$ and the rank-normalized folded statistic is $\sqrt{3/4}$. [A1, step 1.2, F2, F3, F7, algebra]

3.1 The maximum in [F3] is $\sqrt{7/4}$. The calculation detects this finite location shift, while step 1.1 shows why variance-based population reasoning is unavailable for the Cauchy target. [step 1.1, step 1.3, step 2.1, step 2.2, F3, algebra] ∎
