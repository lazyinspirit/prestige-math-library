---
id: def-hellinger-distance-for-dominated-laws
kind: definition
title: "Root-L2 Hellinger distance for dominated laws"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-probability-measure
  - def-axiom-of-choice
  - def-nonnegative-lebesgue-integral
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-threshold-characterisations-of-real-and-extended-real-measurability
  - cor-additivity-of-the-nonnegative-lebesgue-integral
axiom_use: "The general likelihood-density convention imports AC to select representatives; when p and q are supplied, this definition makes no further choice."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "B. J. K. Kleijn, Lectures on Nonparametric Bayesian Statistics, §8.1, equation (8.2)"
      url: "https://staff.fnwi.uva.nl/b.j.k.kleijn/NPBayes-LecNotes-2015.pdf"
---

## Definition

Let $(\mathsf X,\mathcal A)$ be a measurable space and let $P,Q$ be probability measures ([[def-probability-measure]]) on it, both dominated by a specified common sigma-finite positive measure $\mu$ as in [[def-dominated-statistical-experiment]]. For supplied finite-valued nonnegative measurable density representatives $p=dP/d\mu$ and $q=dQ/d\mu$ in the convention of [[def-likelihood-density]], the **root-L2 Hellinger distance** is

$$h(P,Q):=\left(\int \bigl(\sqrt p-\sqrt q\bigr)^2\,d\mu\right)^{1/2}.$$

The square roots are measurable: for every real $r$, $\{\sqrt p>r\}$ is the whole space if $r<0$ and equals $\{p>r^2\}$ if $r\ge0$, and the same holds for $q$ ([[thm-threshold-characterisations-of-real-and-extended-real-measurability]]). The arithmetic and lattice rules make the nonnegative integrand measurable ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]). It is integrable because $(\sqrt p-\sqrt q)^2\le p+q$ and the integral is additive on nonnegative functions ([[cor-additivity-of-the-nonnegative-lebesgue-integral]]), so its integral is at most $P(\mathsf X)+Q(\mathsf X)=2$.

The generic density-selection convention [[def-likelihood-density]] assumes the Axiom of Choice [[def-axiom-of-choice]]. When $p$ and $q$ are explicitly given, this displayed integral requires no further choice.
