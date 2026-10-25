---
id: def-measurand-calibration-and-measurement-uncertainty
kind: definition
title: "Measurands, calibration, and measurement uncertainty"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-scientific-statistical-model-contract
  - def-random-element-and-real-random-variable
  - def-moments-variance-and-covariance
  - def-real-frechet-derivative-on-real-and-complex-matrix-spaces
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of Measurement Data — Guide to the Expression of Uncertainty in Measurement, clauses 1–8"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf/cb0ef43f-baa5-11cf-3f85-4dcd86f77bd6"
    - title: "JCGM 100:2008/Amd.1:2026, Amendment 1: Nonlinearity in Measurement Models"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_Amd1_2026.pdf"
    - title: "NIST/SEMATECH Engineering Statistics Handbook, Chapter 2: Measurement Process Characterization"
      url: "https://www.itl.nist.gov/div898/handbook/toolaids/pff/mpc.pdf"

---

## Definition

A **measurand** is the specified quantity intended to be measured, including
the conditions needed to make its value sufficiently well-defined for the
stated accuracy. A **measurement model** for a scalar measurand $q$ is a
specified function
$$q=f(x_1,\ldots,x_d)$$
where $f:U\to\mathbb R$ is defined on an open set $U\subseteq\mathbb R^d$ and
the $x_i$ are the input quantities that contribute to the reported result.
For the uncertainty model below, assume $\hat x\in U$. To treat the nonlinear
output $f(X)$ as a random output, either require $X\in U$ almost surely and
require $\omega\mapsto f(X(\omega))$ to be measurable on the event $\{X\in U\}$,
defining it measurably on the null complement, or specify a measurable
extension of the model to the input values outside $U$. The almost-sure domain
condition alone does not ensure measurability. If the variance of $f(X)$ is
used, also require the resulting output to be square-integrable. The input
list includes each significant correction, correction factor, calibration
quantity, reference value, and other influence quantity used by the model.
The estimate based on input estimates
$\hat x=(\hat x_1,\ldots,\hat x_d)$ is $\hat q=f(\hat x)$.

For uncertainty evaluation, represent the possible input values by an
$\mathbb R^d$-valued random element $X=(X_1,\ldots,X_d)$ on one probability
space, with square-integrable real coordinate variables. Their means are the
input estimates, $\mathbb E[X_i]=\hat x_i$, and their **input covariance matrix** is
$$\Sigma_{ij}=\operatorname{Cov}(X_i,X_j),\qquad 1\le i,j\le d.$$
This probability model represents the evaluated uncertainty of the inputs; it
does not assert that every input varies physically at random. No independence
of the inputs is assumed.

A **systematic effect** is an identified influence whose estimated
contribution can be corrected. A **random effect** is an influence that
appears as variation across repeated observations under the declared
conditions. These descriptions concern how an effect enters the measurement
model; they are separate from the Type A/Type B evaluation labels. A
**correction** is an estimated signed value added algebraically to an
uncorrected result to compensate for a recognized systematic effect. A
correction factor changes a result multiplicatively according to the stated
model. Applying a correction does not remove uncertainty: uncertainty in the
correction and in its reference values remains an input contribution unless
its contribution is shown negligible for the stated result. A **reference
standard** is a stated reference artifact or realization used to compare or
calibrate a measurement system; its assigned value and uncertainty, including
covariance with other shared reference inputs, belong in the measurement
model. A **calibration curve** is the specified relation between a reference
quantity and an instrument response used to convert a later response into an
estimate of the measurand.

**Type A evaluation** means evaluating an uncertainty component by statistical
analysis of a series of observations. **Type B evaluation** means evaluating
it by other information or methods. These labels describe how a component is
evaluated, not whether its cause is random or systematic. A **repeatability
component** describes variation in repeated readings under stated, comparable
conditions. A later reading of a calibrated instrument can therefore add a
new repeatability component; include its covariance with other inputs when
the model does not justify treating them as uncorrelated.

A **standard uncertainty** is an uncertainty measure expressed as a standard
deviation. The combined standard uncertainty below is the standard deviation
of a linearized output, not an interval statement.

When $f$ is differentiable at $\hat x$, write
$g=\nabla f(\hat x)$ and define the **first-order linearized output** by
$$Q_{\mathrm{lin}}=f(\hat x)+g^T(X-\hat x).$$
The **first-order combined standard uncertainty** is
$u_c=\sqrt{\operatorname{Var}(Q_{\mathrm{lin}})}$, the standard deviation of
this Taylor-linearized output. The next theorem gives its covariance formula.
Its use as an approximation to the uncertainty of the nonlinear output
requires the first-order model to be adequate for the stated measurement.
This standard uncertainty is not itself an interval and implies no coverage
probability or confidence level.

A **measurement batch** in the example on the companion page is a declared
measurement occasion or configuration, such as one day of operation. It is a
label for a process condition; it is not a random-effect assumption by itself.
Whether a calibration relation remains stable across batches is an empirical
question about the stated process and study.

## Remarks

The broader [[def-scientific-statistical-model-contract]] requires the
observation law, units and index roles, target, observation mechanism,
support (a measurable set assigned probability one), conditioning convention,
and status of model-adequacy assumptions;
it does not prove that a proposed model applies physically. Here
[[def-random-element-and-real-random-variable]] supplies the measurable-map
meaning of each input variable, [[def-moments-variance-and-covariance]]
defines the finite means and covariances, and
[[def-real-frechet-derivative-on-real-and-complex-matrix-spaces]] supplies the
first-order derivative remainder (identify $\mathbb R^d$ with real column
matrices and use the Euclidean/Frobenius norm).
