---
id: cex-temperature-generalized-bayes-credible-set-zero-coverage
kind: counterexample
title: "A generalized Bayes credible set can have zero coverage"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - cor-exponential-reciprocal-and-positivity
  - def-confidence-set-and-coverage
  - def-dirac-measure
  - def-generalized-bayes-loss-update-and-temperature
  - def-probability-measure
  - def-statistical-experiment
  - lem-countable-discrete-space-is-standard-borel
  - lem-generalized-bayes-loss-update-normalizes-to-a-probability-measure
  - prop-dirac-measure-is-a-probability-measure
  - thm-exponential-is-strictly-increasing
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "P. G. Bissiri, C. C. Holmes, and S. G. Walker, A general framework for updating belief distributions, JRSS B 78(5), 2016"
      url: "https://arxiv.org/pdf/1306.6430"
    - title: "L. Perrotta, Practical Calibration of the Temperature Parameter in Gibbs Posteriors, arXiv:2004.10522, 2020"
      url: "https://arxiv.org/pdf/2004.10522"
---
## Statement refuted

A positive temperature and a proper generalized Bayes loss update alone
guarantee that every posterior $0.95$-credible set has frequentist coverage at
least $0.95$ under the sampling experiment.


## Facts & Assumptions

**Given:** The finite parameter space $\Theta=\{0,1\}$, singleton observation
space $\mathsf X=\{x_0\}$, prior $(1/100,99/100)$, sampling laws
$P_0=P_1=\delta_{x_0}$, and the displayed loss at $w=1$.

[F1] [[lem-countable-discrete-space-is-standard-borel]]: a nonempty
at-most-countable set with its power-set sigma-algebra is standard Borel.

[F2] [[def-probability-measure]]: a probability measure has total mass one.

[F3] [[def-dirac-measure]]: $\delta_{x_0}(A)=1$ if $x_0\in A$ and is zero
otherwise.

[F4] [[prop-dirac-measure-is-a-probability-measure]]: each Dirac set function
is a probability measure.

[F5] [[def-statistical-experiment]]: an experiment consists of a sample
measurable space, parameter set and a probability law on the sample space for
each parameter.

[F6] [[def-generalized-bayes-loss-update-and-temperature]]: if
$0<Z=\int e^{-w\ell_x}\,d\pi<\infty$, the update is the normalized measure
with that density.

[F7] [[lem-generalized-bayes-loss-update-normalizes-to-a-probability-measure]]:
each update with a finite positive normalizer is a probability measure.

[F8] [[cor-exponential-reciprocal-and-positivity]]: $e^t>0$ and
$e^{-t}=1/e^t$ for real $t$.

[F9] [[thm-exponential-is-strictly-increasing]]: the exponential is strictly
increasing on $\mathbb R$.

[F10] [[def-confidence-set-and-coverage]]: a confidence-set procedure maps
data to parameter subsets with measurable membership sections; coverage at
$\theta$ is the sampling probability that its set contains $\theta$.


## Counterexample

Let $\Theta=\{0,1\}$ and $\mathsf X=\{x_0\}$, each with its power-set
sigma-algebra. Use prior $\pi(0)=1/100$, $\pi(1)=99/100$, and sampling laws
$P_0=P_1=\delta_{x_0}$. At the sole observation $x_0$, let
$\ell(0,x_0)=1$ and $\ell(1,x_0)=0$, with temperature $w=1$. The singleton
data-to-set rule $C(x_0)=\{1\}$ is called $0.95$-credible here when the update
$q_{x_0}$ satisfies $q_{x_0}(C(x_0))\ge0.95$. It has posterior mass greater
than $0.95$, yet its coverage at true parameter $0$ is zero.

1.1 The parameter and data spaces are nonempty finite sets, so [F1] makes them standard Borel. The prior masses sum to one, hence [F2] makes $\pi$ a probability. [F3]–[F5] show the sampling laws define a statistical experiment. [F6]–[F8] give the normalizer $$Z=\frac1{100}e^{-1}+\frac{99}{100}e^0,$$ which is finite and positive. By [F7], the resulting update $q$ is a probability measure. [F1, F2, F3, F5, F6, F8, F7, F4, given, algebra]

2.1 Since $-1<0$, [F9] gives $e^{-1}<e^0$. Both are positive by [F8], and $$Z=\frac1{100}e^{-1}+\frac{99}{100}e^0<e^0.$$ Therefore $$q(\{1\})=\frac{(99/100)e^0}{Z}>\frac{99}{100}>0.95.$$ Thus $C(x_0)=\{1\}$ is a posterior credible set of mass greater than $0.95$. [F9, F8, F6, step 1.1, algebra]


## Verification

3.1 Regard $C$ as the data-to-set procedure with sole value $C(x_0)=\{1\}$. Its membership section for parameter $0$ is empty, and for parameter $1$ is $\{x_0\}$; both are measurable. The coverage definition [F10] therefore applies, and at true parameter $0$ it gives $$P_0\{x:C(x)\ni0\}=P_0(\varnothing)=0.$$ This is below $0.95$, refuting the proposed universal guarantee. [F10, step 1.1, step 2.1, algebra] ∎
