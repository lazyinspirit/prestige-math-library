---
id: def-biological-and-technical-replication-model
kind: definition
title: Biological and technical replication model
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-scientific-statistical-model-contract
  - def-linear-mixed-model
  - def-random-element-and-real-random-variable
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - def-independent-random-elements
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 1 §§1.3 and 1.5, printed pp. 6, 8–10"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
    - title: "Susan Holmes and Wolfgang Huber, Modern Statistics for Modern Biology, Chapter 13 §§13.3.2, 13.4.2, 13.4.5"
      url: "https://www.huber.embl.de/msmb/13-chap.html"
verification:
  precheck: n/a
---

## Definition

For a specified scientific question, a **biological unit** is one unit at the
level whose biological variation is relevant to the target population. A
**biological replicate** is a distinct biological unit at that same
level under the sampling law being modeled. The unit receiving randomized
treatment is the **randomization unit**; when treatment is assigned to a cage,
litter, plot, or batch, that cluster is the randomized replicate even if
members or subsamples within it are measured separately. A **technical
replicate** is another reading or assay of the same specimen or material within
one biological unit. These roles follow the scientific and assignment design
recorded by [[def-scientific-statistical-model-contract]]; their names alone do
not assert statistical independence.

Let $n,m\ge1$ be integers, let $i\in\{1,\ldots,n\}$ index biological units,
and let $j\in\{1,\ldots,m\}$ index technical measurements of unit $i$. On one
probability space, take square-integrable real random variables $B_i$ and
$E_{ij}$, in the sense of
[[def-random-element-and-real-random-variable]], with
$$Y_{ij}=\mu+\tau_i+B_i+E_{ij}.$$
Here $\mu$ and the treatment contributions $\tau_i$ are fixed real numbers
when the analysis conditions on the assigned treatment schedule. The random
effect $B_i$ represents biological variation shared by all measurements of
unit $i$; $E_{ij}$ is technical measurement error. The complete finite family
$(B_i)_{i=1}^n,(E_{ij})_{i\le n,j\le m}$ is mutually independent in the sense
of [[def-independent-random-elements]], and
$$\mathbb E[B_i]=\mathbb E[E_{ij}]=0,\qquad \operatorname{Var}(B_i)=\sigma_b^2,\qquad \operatorname{Var}(E_{ij})=\sigma_e^2$$
for all indices, where $\sigma_b^2,\sigma_e^2\ge0$. Mean, variance, and
square-integrability use [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]
and [[def-moments-variance-and-covariance]]. No Gaussian assumption is made.

With the rows indexed by $(i,j)$, this is a special case of the finite-
dimensional linear mixed model [[def-linear-mixed-model]]: the random-intercept
design row selects $B_i$, and the fixed mean at that row is $\mu+\tau_i$.
When inference averages over randomized assignments, the vector
$\boldsymbol\tau=(\tau_1,\ldots,\tau_n)$ is instead a random vector under the
declared assignment law; its covariance and any dependence on $B$ or $E$ must
then be retained as specified by the result that uses it.

## Remarks

The equal-variance, mutual-independence, and balanced-measurement assumptions
belong to this particular model. Role labels do not imply them. Shared plate,
visit, cluster, batch, or serial-assay effects require additional terms or a
different covariance structure. This definition and its variance consequences
do not establish that the model fits an empirical study, that its sampling law
is representative, or that a treatment contrast is causally identified.
