---
id: rem-cm-inference-and-uncertainty-scope
kind: remark
title: "Scope of the sampling, propagation and inference interfaces"
status: draft
origin: pipeline
domain: mathematics
deps: [cor-cm-linearization-error-bounds, cor-iid-finite-variance-weak-law, def-cm-confidence-set-and-coverage, def-cm-covariance-matrix-of-a-random-vector, def-cm-iid-sampling-model, def-cm-likelihood-function, def-cm-measurement-model, def-cm-statistical-test-and-size, lem-cm-finite-iid-sample-mean-bound, lem-cm-linearized-propagation-of-covariance, thm-factorization-of-expectations-for-independent-variables]
dependency_roles:
  lem-cm-finite-iid-sample-mean-bound: mathematical-premise
  cor-cm-linearization-error-bounds: mathematical-premise
  cor-iid-finite-variance-weak-law: mathematical-premise
  def-cm-confidence-set-and-coverage: mathematical-premise
  def-cm-covariance-matrix-of-a-random-vector: mathematical-premise
  def-cm-iid-sampling-model: mathematical-premise
  def-cm-likelihood-function: mathematical-premise
  def-cm-measurement-model: mathematical-premise
  def-cm-statistical-test-and-size: mathematical-premise
  lem-cm-linearized-propagation-of-covariance: mathematical-premise
  thm-factorization-of-expectations-for-independent-variables: mathematical-premise
dependency_level: 3
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of measurement data — Guide to the expression of uncertainty in measurement (BIPM), clause 2.2.3 and clause 5 on the interpretation of combined standard uncertainty"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
    - title: "L. Wasserman, All of Statistics: A Concise Course in Statistical Inference (Springer, 2004), Section 6.3.2 (warning on confidence intervals) and Section 10.2 (warning on p-values); full text copy at the cited URL"
      url: "https://egrcc.github.io/docs/math/all-of-statistics.pdf"
    - title: "S. Greenland, S. J. Senn, K. J. Rothman, J. B. Carlin, C. Poole, S. N. Goodman and D. G. Altman, 'Statistical tests, P values, confidence intervals, and power: a guide to misinterpretations', European Journal of Epidemiology 31 (2016), 337–350"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4877414/"
    - title: "NIST/SEMATECH e-Handbook of Statistical Methods, section 7.1.4, 'What are confidence intervals?' and section 7.1.5, 'What is the relationship between a test and a confidence interval?'"
      url: "https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm"
verification:
  precheck: n/a
---

## The sampling quantification is model-conditional

For a repeated-observation sampling model with the IID and second-moment
hypotheses of [[def-cm-iid-sampling-model]],
[[lem-cm-finite-iid-sample-mean-bound]] states that
$$E\bigl\lvert\overline Y-\mu\bigr\rvert^2=\frac{\sigma^2}{n}, \qquad \mathbb P\bigl(\lvert\overline Y-\mu\rvert\ge a\bigr)\le\frac{\sigma^2}{na^2} \quad(a>0),$$
If the variables are additionally specified as an infinite IID
sequence, [[cor-iid-finite-variance-weak-law]] also gives convergence
of its sample means to $\mu$ in $L^2$ and in probability. The factorization of
mixed moments used in its proof is
[[thm-factorization-of-expectations-for-independent-variables]]. The bound is
distribution-free in the law of the observations, but it is conditional on
the two model hypotheses and on the finite number $\sigma^2$; when the
hypotheses fail, the identity and the bound are not available from these
items, and $\sigma^2$ is model data rather than a measured quantity of an
apparatus.

## Propagated covariance is exact for the linearization only

[[lem-cm-linearized-propagation-of-covariance]] computes the mean vector and
covariance matrix of the affine map $T(x)=h(\mu)+Dh(\mu)(x-\mu)$ applied to
the random vector $X$: they are $h(\mu)$ and
$Dh(\mu)\operatorname{Cov}(X)Dh(\mu)^{\mathsf T}$
([[def-cm-covariance-matrix-of-a-random-vector]]). That covariance is the
covariance of the *linearization*, not of $h\circ X$; the two agree when $h$
is affine on the values of $X$. Under the convexity, $C^2$ and Hessian-bound
hypotheses of [[cor-cm-linearization-error-bounds]] the scalar remainder mean is bounded using the second moment,
and the covariance difference is bounded using the fourth moment. For a
vector map $f=(f_i)$ with component Hessian bounds $B_i$, put
$S=Df(\mu)\operatorname{Cov}(X)Df(\mu)^{\mathsf T}$ and
$q_i=B_i^2E|X-\mu|^4/4$. The explicit bound is
$$|\operatorname{Cov}(f(X))_{ij}-S_{ij}|\le\sqrt{S_{ii}q_j}+\sqrt{S_{jj}q_i}+\sqrt{q_iq_j}.$$
Without
those hypotheses no such domination is asserted, and any use of the
propagated covariance as an uncertainty of a nonlinear observation carries
the hypotheses and moment conditions of that corollary.

## Size, coverage and likelihood are properties of a specified family

The size of a test is $\sup_{\theta\in\Theta_0}\mathbb P_\theta(R)$
([[def-cm-statistical-test-and-size]]); it is a supremum over a null set of a
specified model family, and no distribution on the parameter set enters its
definition. The level of a confidence set is
$\inf_{\theta}\mathbb P_\theta(\theta\in C)$
([[def-cm-confidence-set-and-coverage]]); it is a pre-data infimum of
coverage probabilities, not the probability, given the realized datum, that
the realized set contains the parameter. A likelihood $L_s(\theta)$ is the
value at the datum $s$ of one density $p_\theta$ of the family
([[def-cm-likelihood-function]]); it is not a probability of the parameter
value. The specification of the family, the rejection region, the confidence
map and the dominating measure are data of each construction. The cited
secondary sources record the corresponding interpretive warnings, which this
remark states as properties of the definitions above.

## No observation is asserted

The measurement model of [[def-cm-measurement-model]] and the sampling model
of [[def-cm-iid-sampling-model]] are mathematical structures; neither
contains an apparatus, a preparation, a sampling protocol, a measured value
or a measured uncertainty. The statements proved here are conditional on the
stated hypotheses and are silent about whether any physical sequence of
measurements satisfies them. A physical use must state preparation, apparatus,
calibration, sampling and uncertainty separately, and must distinguish its
model-conditional prediction from the reported observations it compares
against them.

No Gaussian error model, normal density, convolution identity or quantile
table appears in these items; the quantitative bound recorded above is the
distribution-free inequality of [[cor-iid-finite-variance-weak-law]]. Any
exact interval claim from a normal error model would require its normalized
density and a separate convolution, quantile or tail supplier, and is not
made here.
