---
id: rem-cm18-model-test
kind: remark
title: "Model testing for the force branch: what a test specifies, what rejection and retention establish, and what is not claimed"
status: draft
origin: pipeline
domain: physics
deps: [def-cm-statistical-test-and-size, def-cm-confidence-set-and-coverage, def-cm-likelihood-function, def-cm18-observable-model, def-cm18-calibration, def-cm18-sampling-model, rem-cm-inference-and-uncertainty-scope, post-cm02-force-superposition, pthm-cm02-ivp]
dependency_roles:
  def-cm-statistical-test-and-size: mathematical-premise
  def-cm-confidence-set-and-coverage: mathematical-premise
  def-cm-likelihood-function: mathematical-premise
  def-cm18-observable-model: formulation-prerequisite
  def-cm18-calibration: formulation-prerequisite
  def-cm18-sampling-model: formulation-prerequisite
  rem-cm-inference-and-uncertainty-scope: mathematical-premise
  post-cm02-force-superposition: physical-assumption
  pthm-cm02-ivp: physical-result
dependency_level: 13
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope remark on the logic of testing a force model against data: the ingredients a test must specify, the meaning of a rejection or a retention under a specified model family and sampling model, the distinction between evidence and proof, and the reasons a discrepancy does not by itself identify a failing ingredient. The item reports no measurement, asserts no p-value, no effect size and no empirical conclusion, and makes no claim that any model or law has been tested or confirmed."
sources:
  references:
    - title: "S. Greenland, S. J. Senn, K. J. Rothman, J. B. Carlin, C. Poole, S. N. Goodman and D. G. Altman, Statistical tests, P values, confidence intervals, and power: a guide to misinterpretations, European Journal of Epidemiology 31 (2016), 337-350, sections on uncertainty and statistical significance and on the interpretation of P values"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4877414/"
    - title: "NIST/SEMATECH e-Handbook of Statistical Methods, section 7.1.3, What are statistical tests?, on the components of a statistical test including the null hypothesis, the test statistic and the critical region"
      url: "https://www.itl.nist.gov/div898/handbook/prc/section1/prc13.htm"
    - title: "L. Wasserman, All of Statistics: A Concise Course in Statistical Inference (Springer, 2004), Chapter 10 (hypothesis testing and p-values) and the warnings in Sections 10.2 and 11.1; full text copy at the cited URL"
      url: "https://egrcc.github.io/docs/math/all-of-statistics.pdf"
verification:
  precheck: n/a
---

## The ingredients a test must specify

A test of a null set is a rejection region $R$ inside a measurable data space
$S$ for a specified family $(\mathbb P_{\theta})_{\theta\in\Theta}$ of
probability measures and a specified null set $\Theta_{0}\subseteq\Theta$;
its power function is $\beta(\theta)=\mathbb P_{\theta}(R)$ and its size is
$\sup_{\theta\in\Theta_{0}}\beta(\theta)$
([[def-cm-statistical-test-and-size]]). The size is computed from the null
set and the family alone; no alternative set and no prior distribution enter
it, and a test at level $\alpha$ rejects a true null with probability at most
$\alpha$ **under the specified family**.

For the force branch of [[post-cm02-force-superposition]], a family and a
rejection region are obtained only after specifying: one inertial frame; an
operational observable model of [[def-cm18-observable-model]] — parameters,
preparations, observation times, readout and units — whose prediction map is
computed from the maximal motions supplied by [[pthm-cm02-ivp]]; a
calibration datum of [[def-cm18-calibration]] with its reference deviations;
a sampling model of [[def-cm18-sampling-model]] with its adopted IID and
second-moment hypotheses, or an explicitly different dependence model; the
law of the error random element, or its declared bounds; a null set
$\Theta_{0}$ of parameter values; and a rejection region. Until these data
are fixed, the phrase "a test of Newton's law" names no test, and the size
and power of no test are defined.

## What rejection and retention establish

A rejection is a decision about the specified triple of null family,
apparatus behaviour and sampling assumptions. It is evidence against that
triple at the declared size; it is not a proof that a force law, a spacetime,
or classical mechanics is false, and the realized discrepancy does not by
itself identify which ingredient failed. A discrepancy may expose the force
law, a wrong or incomplete calibration, a changed preparation, correlated
errors violating the sampling hypothesis, or an analysis error; separating
these requires further stated models and further data. Conversely, retaining
the null is not proof of the null: a test with low power fails to reject
alternatives it cannot distinguish, and the absence of a rejection under one
rejection region carries no information about the size of an effect.

The indices of this page attach no probability to a parameter value. The
level of a confidence set is a pre-data infimum of coverage probabilities
([[def-cm-confidence-set-and-coverage]]); a likelihood value is the density
of the observed datum at a parameter value, not the probability of the value
([[def-cm-likelihood-function]]); and a size is a supremum over the null set
of probabilities of a region. In particular a $p$-value computed from a
specified family is not the probability that the tested hypothesis is true,
as [[rem-cm-inference-and-uncertainty-scope]] records for this mathematical
interface. The cited interpretive warnings of the sources state the same
properties for statistical tests in general.

## What agreement does not establish

Agreement of a prediction with observations is evidence for the combined
adopted assumptions — force model, calibration, preparation, sampling model
and analysis — at the stated uncertainty; it is not a deductive proof of the
model and it does not test "classical physics" as a whole, only the specified
family. A finite sample can fail to exhibit a feature that the declared
sampling model predicts with positive probability per trial; such a sample is
not by itself a refutation of the model, and the elementary probability of
that outcome under the sampling model is part of the specification, not an
empirical result.

No datum, no rejection, no retention, no $p$-value, no effect size and no
measured uncertainty is asserted anywhere in this item.
