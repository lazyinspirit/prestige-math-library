---
id: ex-point-null-needs-a-model-atom
kind: example
title: "Point-null mass under atomic and continuous priors"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-countable-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-marginal-likelihood-and-bayes-factor
  - thm-finite-model-posterior-odds-from-marginal-evidence
  - thm-lebesgue-measure-of-a-box-of-every-kind
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is used only through the stated Lebesgue-volume supplier; the finite-model calculation is choice-free."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §7.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
      locator: "Chapter 7, §7.4, printed pp. 183–184: a discrete point hypothesis is a separate model and continuous parameter models assign zero probability to exact points."
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 8, §8.2.2"
      url: "https://www.bayesrulesbook.com/chapter-8.html"
      locator: "§8.2.2, lines 170–188: zero point-null prior and posterior probabilities under the continuous Beta model; the displayed alternative-against-null odds divide by zero."
---

## Example

Let $M_0$ have parameter space $\Theta_0=\{0\}$ and prior $\Pi_0=\delta_0$,
and let $M_1$ have parameter space $\Theta_1=[0,1]$ and uniform prior
$\Pi_1=\lambda|_{[0,1]}$. Use the common data space $\mathcal Y=\{0,1\}$ with
counting measure $\mu$, and specify the jointly measurable Bernoulli density
on each parameter space by $f_i(\theta,0)=1-\theta$ and
$f_i(\theta,1)=\theta$. Give the models prior weights $w_0,w_1>0$ with
$w_0+w_1=1$. After observing $y=0$, model $M_0$ has positive posterior
probability because it is an explicit model atom with positive prior weight. A
single continuous prior on $[0,1]$ instead assigns $\theta=0$ probability
zero.

## Facts & Assumptions

**Given:** The two-model setup in the Example and observed value $y=0$.

[A1] Countable Choice is assumed for the Lebesgue-volume formula used to compute interval and singleton measures. [[def-countable-choice]]

[F1] For finitely many models with positive weights and finite positive evidences, posterior model probabilities are proportional to weight times evidence. [[thm-finite-model-posterior-odds-from-marginal-evidence]]

[F2] Evidence under a proper parameter prior is the integral of the specified likelihood density against that prior. [[def-marginal-likelihood-and-bayes-factor]]

[F3] Lebesgue measure of an interval is its length. [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[F4] On $\mathbb R$, Lebesgue measure $\lambda$ is the restriction of Lebesgue outer measure to the Lebesgue measurable sets. [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]

## Verification

**Given:** The models, weights, and observation in the Example.

1.1 By [A1, F3], $\lambda([0,1])=1$, so the uniform prior is proper. Under $M_0$, $m_0(0)=1$. Under $M_1$, its density is $1$ on $[0,1]$, so $m_1(0)=\int_0^1(1-\theta)\,d\theta=1/2$. Both evidences are finite and positive, and [F1] gives $\Pr(M_0\mid y=0)=w_0/(w_0+w_1/2)>0$. [A1, F1, F2, F3, given, algebra]

2.1 By [F3], the degenerate closed interval $[0,0]=\{0\}$ is Lebesgue measurable and has measure zero; [F4] identifies this measure as $\lambda$. Thus the uniform prior assigns the singleton mass $\int_{\{0\}}1\,d\lambda=0$. The separate model atom in step 1.1 instead gives $\theta=0$ prior weight $w_0$ and positive posterior probability. [A1, F3, F4, step 1.1, algebra] ∎
