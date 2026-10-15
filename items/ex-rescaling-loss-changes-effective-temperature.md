---
id: ex-rescaling-loss-changes-effective-temperature
kind: example
title: "Rescaling loss changes the effective temperature"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - cor-exponential-reciprocal-and-positivity
  - def-generalized-bayes-loss-update-and-temperature
  - def-probability-measure
  - lem-countable-discrete-space-is-standard-borel
  - lem-generalized-bayes-loss-update-normalizes-to-a-probability-measure
  - thm-exponential-is-strictly-increasing
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

Let $\Theta=\{0,1\}$ with its power-set sigma-algebra and prior
$\pi(0)=p$, $\pi(1)=1-p$ for $0<p<1$. At a fixed observation $x_0$, let
$\ell_{x_0}(0)=a$ and $\ell_{x_0}(1)=b$ with $a\ne b$. For every $w,c>0$,
replacing this loss section by $c\ell_{x_0}$ at temperature $w$ gives the same
update as retaining $\ell_{x_0}$ at temperature $cw$. At any two distinct
positive temperatures, the updates are different.

## Facts & Assumptions

**Given:** The finite parameter space $\Theta=\{0,1\}$ with its power-set
sigma-algebra; an observation $x_0$; $0<p<1$; real loss-section values
$a\ne b$; and positive temperatures $w,c,t_1,t_2$ with $t_1\ne t_2$.

[F1] [[lem-countable-discrete-space-is-standard-borel]]: every nonempty
at-most-countable set with its power-set sigma-algebra is standard Borel.

[F2] [[def-probability-measure]]: a probability measure is a measure of total
mass one.

[F3] [[def-generalized-bayes-loss-update-and-temperature]]: when its normalizer
is finite and positive, the update is the measure with density
$e^{-t\ell}/Z_t$ relative to the prior.

[F4] [[lem-generalized-bayes-loss-update-normalizes-to-a-probability-measure]]:
each update with a finite positive normalizer is a probability measure.

[F5] [[thm-exponential-is-strictly-increasing]]: the exponential is strictly
increasing, hence injective, on $\mathbb R$.

[F6] [[cor-exponential-reciprocal-and-positivity]]: $e^u>0$ and
$e^{-u}=1/e^u$ for every real $u$.

## Verification

1.1 The set $\Theta$ is nonempty and finite, so [F1] makes its power-set measurable space standard Borel. Since $0<p<1$, the masses $p$ and $1-p$ are positive and sum to one, so [F2] makes $\pi$ a probability. For every $t>0$, the two real loss values give positive finite weights $e^{-ta}$ and $e^{-tb}$ by [F6]; their prior-weighted sum is therefore finite and positive. [F1, F2, F6, given, algebra]

2.1 By [F3]–[F4], the update $q_t=G_{t,\pi,x_0}$ has masses $$q_t(0)=\frac{p e^{-ta}}{p e^{-ta}+(1-p)e^{-tb}},\qquad q_t(1)=\frac{(1-p)e^{-tb}}{p e^{-ta}+(1-p)e^{-tb}}.$$ Consequently its odds satisfy $$\frac{q_t(1)}{q_t(0)}=\frac{1-p}{p}e^{-t(b-a)}.$$. [F3, F4, step 1.1, algebra]

2.2 For $\theta\in\Theta$, the unnormalized weight after replacing $\ell_{x_0}$ by $c\ell_{x_0}$ at temperature $w$ is $\pi(\theta)e^{-w c\ell_{x_0}(\theta)}= \pi(\theta)e^{-(cw)\ell_{x_0}(\theta)}$. These are exactly the unnormalized masses for $q_{cw}$. The two updates have the same finite positive normalizer by step 1.1, so their values on both singletons, and hence on every subset of $\Theta$, agree. [step 1.1, F3, algebra]

3.1 Because $b-a\ne0$ and $t_1\ne t_2$, the real numbers $-t_1(b-a)$ and $-t_2(b-a)$ differ. Injectivity in [F5] makes their exponentials different. Multiplication by the fixed positive factor $(1-p)/p$ preserves that difference, so step 2.1 gives distinct odds. On a two-point probability space the odds determine both singleton masses; therefore $q_{t_1}\ne q_{t_2}$. [F5, step 2.1, algebra] ∎
