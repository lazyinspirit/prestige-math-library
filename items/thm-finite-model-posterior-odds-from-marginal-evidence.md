---
id: thm-finite-model-posterior-odds-from-marginal-evidence
kind: theorem
title: "Finite-model posterior probabilities and Bayes-factor odds"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-likelihood-density
  - def-marginal-likelihood-and-bayes-factor
  - prop-fiberwise-posterior-propriety-iff-finite-positive-evidence
  - thm-bayes-formula-for-dominated-kernels
  - thm-finite-bayes-theorem
justified_by: []
proof_strategy: direct
axiom_use: "None. The finite disjoint-union construction and the dominated-kernel Bayes formula are choice-free."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §7.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
      locator: "Chapter 7, §7.4, printed pp. 182–184: finite model posterior odds equal prior odds times the evidence ratio when model marginal densities are proper."
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 8, §8.2.1"
      url: "https://www.bayesrulesbook.com/chapter-8.html"
      locator: "Full official chapter inspected, lines 145–168: prior odds, posterior odds, and the odds-ratio definition of a Bayes factor."
---

## Statement

Assume the finite dominated model setup of
[[def-marginal-likelihood-and-bayes-factor]]. Fix a data value $y$ such that
$0<m_i(y)<\infty$ for every $i\in I$. A version of the posterior model
probabilities at this fiber is
$$\Pr(M=i\mid y)=\frac{w_i m_i(y)}{\sum_{\ell\in I}w_\ell m_\ell(y)}.$$
For any two models $i,j\in I$, the posterior odds satisfy
$$\frac{\Pr(M=j\mid y)}{\Pr(M=i\mid y)}=\frac{w_j}{w_i}\,BF_{ji}(y).$$
The displayed version uses the specified jointly measurable density
representatives; no quotient is formed if an evidence is zero or infinite.

## Facts & Assumptions

**Given:** The finite collection of proper model priors, the common sigma-finite
data measure, specified jointly measurable likelihood densities, positive
model weights, and a data fiber where every model evidence is finite and
positive.

[F1] Each $m_i(y)$ is the evidence integral against the proper within-model
prior, and $BF_{ji}=m_j/m_i$ is defined when both evidence values are finite
positive. [[def-marginal-likelihood-and-bayes-factor]]

[F2] A likelihood-weighted measure has a finite positive normalization exactly
when its evidence is finite and positive. [[prop-fiberwise-posterior-propriety-iff-finite-positive-evidence]]

[F3] For a proper parameter prior and a probability kernel with a specified
jointly measurable density, the quotient by the prior-predictive density on
finite positive fibers is a regular conditional law. [[thm-bayes-formula-for-dominated-kernels]]

[F4] For a finite partition and a positive-probability data event, Bayes'
formula gives posterior cell probability as prior cell probability times
conditional event probability divided by the total event probability.
[[thm-finite-bayes-theorem]]

[F5] Separate parameter-indexed likelihood-density versions do not by
themselves assert joint measurability in parameter and data; this theorem
requires the joint measurability separately. [[def-likelihood-density]]

## Proof

**Proof technique:** form the finite disjoint-union parameter model, apply the
dominated-kernel Bayes formula, and take the image on the model index.

**Given:** The hypotheses in the Statement.

1.1 Form the measurable disjoint union $E=\bigsqcup_{i\in I}(\{i\}\times\Theta_i)$ and put $\Pi(A)=\sum_iw_i\Pi_i(A_i)$, where $A_i=\{\theta:(i,\theta)\in A\}$. This is a probability measure because each $\Pi_i$ is a probability measure and the finite weights sum to one. On $(i,\theta)$ use the observation kernel $Q_i(\theta,\cdot)$ with density $\ell((i,\theta),y)=f_i(\theta,y)$. Each section is a probability kernel, and finite piecewise measurability plus the stipulated joint measurability makes $\ell$ a specified jointly measurable density; [F5] warns that separate density versions alone would not suffice. Its prior-predictive density is $m(y)=\sum_iw_i m_i(y)$. The given finite-positive hypotheses make $m(y)$ finite and positive, so [F2] confirms its likelihood-weighted prior has a probability normalization. [F1, F2, F5, given, construct]

2.1 Apply [F3] to $(E,\Pi)$ and this dominated observation kernel. Define its global posterior kernel $K(y,\cdot)$ by the normalized likelihood-weighted prior on $G=\{y:0<m(y)<\infty\}$ and by the fixed prior $\Pi$ on $G^c$, exactly as in [F3]. The set $G$ is measurable, and [F3] states that $G^c$ has predictive probability zero. At the specified fiber, where every model evidence is finite and positive, this posterior kernel assigns the tagged slice $\{i\}\times\Theta_i$ mass $\int_{\{i\}\times\Theta_i}\ell((l,\theta),y)\,\Pi(d l,d\theta)/m(y)=w_i\int_{\Theta_i}f_i(\theta,y)\,\Pi_i(d\theta)/(\sum_lw_lm_l(y))=w_im_i(y)/(\sum_lw_lm_l(y))$. The model-index map $(i,\theta)\mapsto i$ is measurable, so the image of this regular conditional law is the stated posterior model probability. [F1, F3, step 1.1, given, algebra]

3.1 For any measurable data event $B$ with positive predictive probability, the global kernel in step 2.1 has the event identity $\int_B K(y,\{i\}\times\Theta_i)m(y)\,d\mu(y)=w_i\int_Bm_i(y)\,d\mu(y)$ by [F3]. The integral on the left means integration against the predictive measure $m\,d\mu$, so no product with an infinite density on an exceptional fiber is evaluated pointwise. Dividing by the event probability agrees with [F4]. This event identity uses the global kernel, whereas the displayed odds claim only concerns the given finite-positive fiber. At that fiber, divide the positive finite probabilities from step 2.1 for $j$ and $i$; [F1] gives $(w_j/w_i)(m_j/m_i)=(w_j/w_i)BF_{ji}$. [F1, F3, F4, step 1.1, step 2.1, algebra] ∎
