---
id: ex-unit-temperature-likelihood-update
kind: example
title: "The unit-temperature likelihood update is ordinary Bayes in a finite model"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-conditional-probability
  - def-generalized-bayes-loss-update-and-temperature
  - def-natural-logarithm
  - def-probability-measure
  - def-statistical-experiment
  - lem-countable-discrete-space-is-standard-borel
  - lem-generalized-bayes-loss-update-normalizes-to-a-probability-measure
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "P. G. Bissiri, C. C. Holmes, and S. G. Walker, A general framework for updating belief distributions, JRSS B 78(5), 2016"
      url: "https://arxiv.org/pdf/1306.6430"
    - title: "J. Knoblauch, J. Jewson, and T. Damoulas, An Optimization-centric View on Bayes’ Rule: Reviewing and Generalizing Variational Inference, JMLR 23(132), 2022"
      url: "https://www.jmlr.org/papers/volume23/19-1047/19-1047.pdf"
---
## Example

Let $\Theta=\{0,1\}$ have prior masses $\pi(0)=1/3$ and $\pi(1)=2/3$.
Let the observation space be $\mathsf X=\{0,1\}$ and define sampling laws
by $P_0(Y=1)=1/4$, $P_0(Y=0)=3/4$, $P_1(Y=1)=3/4$, and
$P_1(Y=0)=1/4$. These finite spaces with power-set sigma-algebras are
standard Borel, and the displayed laws define a statistical experiment.
Take $\ell(\theta,y)=-\log P_\theta(Y=y)$ for every
$(\theta,y)\in\Theta\times\mathsf X$. For observed $y=1$ at
$w=1$, the unnormalized masses are $1/12$ and $1/2$, so the update is
$(1/7,6/7)$. The same values follow by conditioning the joint prior-sampling
law on $Y=1$.

## Facts & Assumptions

**Given:** The parameter and observation spaces $\{0,1\}$ with power-set
sigma-algebras, prior $(1/3,2/3)$, and the four displayed sampling
probabilities.

[F1] [[lem-countable-discrete-space-is-standard-borel]]: a nonempty
at-most-countable set with its power-set sigma-algebra is standard Borel.

[F2] [[def-probability-measure]]: a probability measure has total mass one.

[F3] [[def-statistical-experiment]]: a statistical experiment consists of a
sample measurable space, a parameter set, and a probability law on the sample
space for each parameter.

[F4] [[def-generalized-bayes-loss-update-and-temperature]]: at $w=1$ the
update weights are proportional to $e^{-\ell(\theta,y)}$ and are normalized
by their integral against the prior.

[F5] [[lem-generalized-bayes-loss-update-normalizes-to-a-probability-measure]]:
a finite-positive-normalizer update is a probability measure.

[F6] [[def-natural-logarithm]]: $\log$ is the inverse of $\exp$ on
$(0,\infty)$.

[F7] [[def-conditional-probability]]: in a finite probability space,
$\Pr(A\mid B)=\Pr(A\cap B)/\Pr(B)$ when $\Pr(B)>0$.

## Verification

1.1 Both parameter and sample spaces are nonempty finite sets, so [F1] makes them standard Borel. The prior masses are nonnegative and sum to one; each pair of sampling probabilities is nonnegative and sums to one. By [F2] these are probability measures, and [F3] therefore gives the stated finite statistical experiment. [F1, F2, F3, given, algebra]

2.1 All four likelihoods are positive, so [F6] makes $\ell$ real-valued on $\Theta\times\mathsf X$. Each parameter section is measurable because the parameter sigma-algebra is the power set, satisfying the loss hypotheses of [F4] for every $y\in\mathsf X$. At $y=1$, the inverse relation in [F6] gives $e^{-\ell(\theta,1)}=e^{\log P_\theta(Y=1)}=P_\theta(Y=1)$. Hence the unnormalized weights are $$\pi(0)P_0(Y=1)=\frac1{12},\qquad \pi(1)P_1(Y=1)=\frac12,$$ and their normalizer is $Z=1/12+1/2=7/12$, finite and positive. [F6, F4, step 1.1, algebra]

3.1 By [F4]–[F5], the update is a probability measure with $$q(0)=\frac{1/12}{7/12}=\frac17,\qquad q(1)=\frac{1/2}{7/12}=\frac67.$$. [F4, F5, step 2.1, algebra]

4.1 Define the joint masses by $\Pr(\theta,y)=\pi(\theta)P_\theta(Y=y)$. The four masses are $1/4,1/12,1/6,1/2$ at $(0,0),(0,1),(1,0),(1,1)$, respectively; they sum to one, and $\Pr(Y=1)=7/12>0$. Applying [F7] to each parameter singleton gives $$\Pr(\theta=0\mid Y=1)=\frac{1/12}{7/12}=\frac17,\qquad \Pr(\theta=1\mid Y=1)=\frac{1/2}{7/12}=\frac67.$$ Thus the loss update equals the ordinary finite-model posterior at $y=1$. [F7, step 1.1, step 2.1, step 3.1, algebra] ∎
