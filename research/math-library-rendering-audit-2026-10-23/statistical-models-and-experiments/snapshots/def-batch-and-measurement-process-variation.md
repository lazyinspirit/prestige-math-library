---
id: def-batch-and-measurement-process-variation
kind: definition
title: "Batch and measurement-process variation"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-linear-mixed-model
  - def-measurand-calibration-and-measurement-uncertainty
  - def-moments-variance-and-covariance
  - def-independent-random-elements
  - def-random-element-and-real-random-variable
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "NIST/SEMATECH Engineering Statistics Handbook, Chapter 2: Measurement Process Characterization"
      url: "https://www.itl.nist.gov/div898/handbook/toolaids/pff/mpc.pdf"
    - title: "Fan Li, STA610 Lecture 5 Notes: Estimation of Group Effects"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec5-GroupEffects.pdf"
    - title: "Fan Li, STA610 Lecture 6 Notes: Linear Mixed-Effects Models"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec6-LME.pdf"
---

## Definition

Fix nonempty finite index sets $I$ and $J_i$ for $i\in I$, and positive
integers $m_{ij}$ for $i\in I$ and $j\in J_i$. The index $i$ names a fixed
process condition, such as a fixed instrument configuration or an operator
held fixed by design. The index $j$ names a batch nested within that condition
(for example, a day, or a specified day–operator combination); $k\in\{1,\ldots,m_{ij}\}$ names a repeat reading within that batch. If days and
operators are crossed, or their separate contributions are needed, the model
must use additional indices and terms: this nested model does not separate
such effects.

On one probability space, let the real random variables $B_{ij}$ and
$\epsilon_{ijk}$ be jointly independent and square-integrable, with
$$\mathbb E[B_{ij}]=0,\qquad \operatorname{Var}(B_{ij})=\sigma_B^2<\infty,\qquad \mathbb E[\epsilon_{ijk}]=0,\qquad \operatorname{Var}(\epsilon_{ijk})=\sigma_\epsilon^2<\infty.$$
The variances are common over the indicated indices and may be zero. Let
$\mu$ and each $\tau_i$ be fixed real constants. The **nested batch
measurement model** is
$$Y_{ijk}=\mu+\tau_i+B_{ij}+\epsilon_{ijk}.$$
Here $\tau_i$ represents the fixed process-condition offset, $B_{ij}$ is the
random batch offset, and $\epsilon_{ijk}$ is the repeat error. The replicate
mean is $\bar Y_{ij\cdot}=m_{ij}^{-1}\sum_{k=1}^{m_{ij}}Y_{ijk}$. This is a
scalar random-intercept specialization of the finite-moment mixed-model form
in [[def-linear-mixed-model]]; it adds mutual independence across the finite
batch and repeat families and assumes a common repeat-error variance.

In this article, **repeatability** means variation among readings made under
the same stated short-term conditions, represented by the repeat-error term
in this model. **Reproducibility** means variation across the explicitly
named conditions being compared, such as days or operators; the parameter
$\sigma_B^2$ describes only the random batch factor represented by $j$. A
design-based interpretation as variation over a target population requires
batches sampled from that population; under a working random-effects model,
its interpretation instead depends on the stated model and inferential target.
**Stability** means constancy over the stated time interval of the measurement
process law, including its calibration relation and relevant error behavior.
These words are used with these declared scopes; terminology in measurement
standards can vary.

Choose the batch-effect specification to match the model and inferential
target. A design-based interpretation treats $B_{ij}$ as random when observed
batches are sampled from a named population and the target includes variation
over it. A random-effects distribution may also be used as a working model for
selected batches that are not a probability sample, but that choice alone does
not justify design-based extrapolation. If the selected batches are the entire
target and no distributional model is intended, represent their offsets as
fixed batch parameters; the random-effect variance formula below then does not
describe extrapolation to unobserved batches. Pool calibration curves only under an explicit common-curve or
equivalence model over the stated calibration range. Without that model,
report batch-specific calibration descriptions. This definition and its
variance consequences assert no empirical adequacy or stability of a
particular measurement process. The measurement occasion called a batch and
the calibration-curve terminology agree with
[[def-measurand-calibration-and-measurement-uncertainty]].
