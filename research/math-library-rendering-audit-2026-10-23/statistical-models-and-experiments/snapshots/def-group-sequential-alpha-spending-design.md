---
id: def-group-sequential-alpha-spending-design
kind: definition
title: Canonical group-sequential alpha-spending design
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-test-size-and-power
  - def-multivariate-normal-law
  - lem-characteristic-function-of-a-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - lem-normal-density-has-total-mass-one
  - def-axiom-of-choice
justified_by:
  - thm-group-sequential-alpha-spending-calibration
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
    - title: "David L. DeMets and K. K. Gordon Lan, Interim Analysis: The Alpha Spending Function Approach, Statistics in Medicine 13 (1994), PDF pp. 2–3, 6–7"
      url: "https://eclass.uoa.gr/modules/document/file.php/MATH301/PracticalSession3/LanDeMets.pdf"
    - title: "Michael J. Grayling, James M. S. Wason, and Adrian P. Mander, Group Sequential Clinical Trial Designs for Normally Distributed Outcome Variables, The Stata Journal 18(2) (2018), PDF pp. 2–4"
      url: "https://arxiv.org/pdf/1710.03127"
    - title: "Giorgos Minas, Multivariate Global Testing and Adaptive Designs, PhD thesis, Chapter 5 §§5.3–5.3.1, printed pp. 72–73"
      url: "https://wrap.warwick.ac.uk/id/eprint/58321/7/WRAP_THESIS_Minas_2013.pdf"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Fix a finite integer
maximum $K\ge1$, prescheduled information fractions
$0<t_1<\cdots<t_K=1$ (where $t_j$ is the fraction of total planned
information available at look $j$), and a nominal level $\alpha\in(0,1)$. An
**alpha-spending function** is a nondecreasing map
$A:[0,1]\to[0,\alpha]$ with $A(0)=0$ and $A(1)=\alpha$.

Under the stipulated simple null law $P_0$, the standardized look vector is
$Z=(Z_1,\ldots,Z_K)\sim N_K(0,\Sigma)$, where
$$\Sigma_{jk}=\sqrt{t_j/t_k}\quad(j\le k),\qquad \Sigma_{jk}=\Sigma_{kj}\quad(j>k).$$
Here $N_K$ is the finite-dimensional multivariate normal law of
[[def-multivariate-normal-law]], whose projection characterization determines
the law by [[lem-characteristic-function-of-a-multivariate-normal-law]].
The construction of this covariance matrix as a valid Gaussian covariance is
proved in [[thm-group-sequential-alpha-spending-calibration]]. The standardized
coordinates are correlated; independence of the $Z_j$ is not assumed.

For a **one-sided upper-boundary design**, look $j$ rejects when
$Z_j\ge b_j$. For a **symmetric two-sided design**, look $j$ rejects when
$|Z_j|\ge c_j$. In either case, the procedure stops at its first crossing.
For each $k$, its cumulative type-I probability is the probability under the
stipulated null law of crossing at one of looks $1,\ldots,k$. The design is
exactly calibrated to $A$ when this cumulative probability equals $A(t_k)$
for every $k$. If it is embedded in an experiment with a nonempty alternative
and singleton null hypothesis, this null rejection probability is the test
size in the sense of [[def-test-size-and-power]].

The fractions and joint null law are assumptions of this definition. It does
not derive a Gaussian model from an asymptotic central limit theorem, justify
data-dependent look timing, justify estimated variance, or establish error
control over an unspecified composite null. A two-sided design calibrates its
two-sided crossing events separately; one-sided boundaries are not doubled
to obtain two-sided boundaries.
