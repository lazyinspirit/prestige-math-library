---
id: def-hellinger-distance-between-density-laws
kind: definition
title: "Root-L2 Hellinger distance between density laws"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-probability-measure
  - def-measure-with-density
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-composition-with-borel-functions-preserves-measurability
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - cor-integral-over-a-null-set-vanishes
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
    - title: "Ghosal, Ghosh and van der Vaart, Convergence rates of posterior distributions, §2"
      url: "https://doi.org/10.1214/aos/1016218228"
    - title: "Ghosal, The Dirichlet Process, Related Priors and Posterior Asymptotics, §2.5"
      url: "https://people.eecs.berkeley.edu/~jordan/sail/readings/Ghosal09.pdf"
    - title: "Kleijn, Bayesian Statistics for Frequentists, §6.4"
      url: "https://staff.fnwi.uva.nl/b.j.k.kleijn/bkleijn-book-work-in-progress-Bayesian_Statistics_for_frequentists-Version-1.0-July-2025.pdf"
---

## Definition

Let $(\mathsf X,\mathcal A,\mu)$ be a measure space and let $p,q:\mathsf X\to[0,\infty)$ be measurable densities with $\int p\,d\mu=\int q\,d\mu=1$. They define probability laws $P(B)=\int_Bp\,d\mu$ and $Q(B)=\int_Bq\,d\mu$ ([[def-probability-measure]]). Their **root-L2 Hellinger distance**, with the root-L2 normalization, is
$$h(P,Q):=\left(\int_{\mathsf X}(\sqrt p-\sqrt q)^2\,d\mu\right)^{1/2}.$$

The dominating measure $\mu$ is fixed throughout a use of this definition. Changing either density on a $\mu$-null set does not change the value, since the integrand changes only on a null set. This definition does not assert that separate choices of density versions are jointly measurable in an additional parameter.

## Remarks

The integrand is measurable: square root is Borel on $[0,\infty)$, and subtraction and squaring preserve measurability ([[thm-composition-with-borel-functions-preserves-measurability]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]]). For $a,b\ge0$, $(\sqrt a-\sqrt b)^2=a+b-2\sqrt{ab}\le a+b$. Thus $0\le(\sqrt p-\sqrt q)^2\le p+q$ pointwise; monotonicity and additivity of the nonnegative integral ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]]) give $h(P,Q)^2\le\int(p+q)\,d\mu=2$, so the defining integral is finite. The set functions $B\mapsto\int_Bp\,d\mu$ and $B\mapsto\int_Bq\,d\mu$ are measures by [[def-measure-with-density]], and their total masses are one, so they are probability laws by [[def-probability-measure]]. Changing either density on a $\mu$-null set changes the integrand only on a null set, whose nonnegative integral vanishes ([[cor-integral-over-a-null-set-vanishes]]), confirming the stated version invariance.
