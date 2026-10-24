---
id: ex-full-hyperposterior-versus-plug-in-normal-hierarchy
kind: example
title: "Integrating hyperparameter uncertainty versus plugging in"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-hierarchical-bayesian-model
  - thm-hierarchical-posterior-normalization-on-positive-finite-evidence
  - thm-normal-normal-hierarchical-shrinkage
  - lem-normal-location-scale-density
  - lem-normal-density-has-total-mass-one
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited through the library normal-law and conditional-expectation conventions; the finite mixture and Gaussian integral calculations are choice-free."
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
    - title: "Andrew Gelman, John B. Carlin, Hal S. Stern, David B. Dunson, Aki Vehtari, and Donald B. Rubin, Bayesian Data Analysis, 3rd ed., §§5.3–5.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
      locator: "Chapter 5, §§5.3–5.4, printed pp. 109–117: full hyperparameter posterior and why substituting point estimates discards uncertainty."
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 16"
      url: "https://www.bayesrulesbook.com/chapter-16.html"
      locator: "Chapter 16, §§16.3–16.6: the normal hierarchical model retains uncertainty in the global parameters when forming group posteriors and predictions."
---

## Example

Let the hyperparameter be $t=\tau^2\in\{1,4\}$ with prior probability
$1/2$ at each value. There is one group, $\theta\mid t\sim N(0,t)$, and
$Y\mid\theta\sim N(\theta,1)$. Observe $y=0$. Specify the likelihood-density version pointwise by
$$f(\theta,y)=(2\pi)^{-1/2}\exp(-(y-\theta)^2/2)\qquad(\theta,y\in\mathbb R).$$
The full posterior for $\theta$
is a mixture of the two conditional normal posteriors. Plugging in the
posterior mode of $t$ instead yields just one component, which is not the full
posterior.

## Facts & Assumptions

**Given:** A proper two-point hyperprior on $t\in\{1,4\}$, one group parameter $\theta\mid t\sim N(0,t)$, an observation kernel $Y\mid\theta\sim N(\theta,1)$, and observed value $y=0$.

[F1] The hierarchy's prior and observation kernels define the joint latent-data model. [[def-hierarchical-bayesian-model]]

[F2] On positive finite evidence, the joint posterior is the normalized prior-times-likelihood measure. [[thm-hierarchical-posterior-normalization-on-positive-finite-evidence]]

[F3] With the canonical normal likelihood density specified in the Example and positive conditional variances, the group posterior conditional on fixed normal hyperparameters is the normal law from the Normal–Normal update. [[thm-normal-normal-hierarchical-shrinkage]]

[F4] For $a\in\mathbb R$ and $v>0$, the $N(a,v)$ density is $(2\pi v)^{-1/2}e^{-(x-a)^2/(2v)}$. [[lem-normal-location-scale-density]]

[F5] The standard normal density has Lebesgue integral one. [[lem-normal-density-has-total-mass-one]]

[A1] AC is assumed for the library normal-law convention. [[def-axiom-of-choice]]

## Verification

**Given:** The model and observed value in the Example.

1.1 The specified model supplies the prior and sampling kernels [F1]; their densities are given by [F4]. For fixed $t>0$, multiply the two densities and integrate over $\theta$. The integrand is $(2\pi\sqrt t)^{-1}\exp(-(1+t^{-1})\theta^2/2)$. Substituting $z=\sqrt{1+t^{-1}}\,\theta$ and using [F5] for the unit normal integral gives the marginal evidence $m_t(0)=1/\sqrt{2\pi(1+t)}$, which is positive and finite for $t=1,4$. [A1, F1, F4, F5, given, algebra]

2.1 The two prior masses are equal, so [F2] gives posterior odds $P(t=1\mid y=0)/P(t=4\mid y=0)=m_1(0)/m_4(0)=\sqrt{5/2}>1$. Thus the posterior mode is $t=1$, and the posterior weights $w=P(t=1\mid y=0)$ and $1-w$ are both strictly between zero and one. [F2, step 1.1, algebra]

3.1 By [F3], $\theta\mid t=1,y=0\sim N(0,1/2)$ and $\theta\mid t=4,y=0\sim N(0,4/5)$. The full posterior is their mixture with weights $w$ and $1-w$, so its second moment is $w/2+(1-w)4/5>1/2$. [A1, F3, step 2.1, algebra]

4.1 Plugging in the posterior mode $t=1$ gives only $N(0,1/2)$, whose second moment is $1/2$. This differs from the full posterior's second moment in step 3.1, so the plug-in posterior is not the full posterior mixture. [step 3.1, algebra] ∎
