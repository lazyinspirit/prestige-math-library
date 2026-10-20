---
id: def-rademacher-complexity
kind: definition
title: "One-sided Rademacher complexity"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-probability-measure
  - def-empirical-process-and-rademacher-process
  - def-one-sided-empirical-rademacher-complexity
  - def-identically-distributed-and-iid-random-variables
  - thm-independent-random-elements-have-product-joint-law
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Definitions 3.1–3.2"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Peter L. Bartlett and Shahar Mendelson, Rademacher and Gaussian Complexities: Risk Bounds and Structural Results, JMLR 3 (2002), Definition 2"
      url: "https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf"
---

## Definition

Let $(\mathcal Z,\mathcal A,P)$ be a probability space and let $\mathcal G$ be a nonempty class of $\mathcal A$-measurable functions $g:\mathcal Z\to[0,1]$. For a fixed sample $S=(z_1,\ldots,z_m)\in\mathcal Z^m$, where $m\ge1$, let $\sigma_1,\ldots,\sigma_m$ be independent uniform signs in $\{-1,+1\}$. Define

$$P_mg:=\frac1m\sum_{i=1}^m g(z_i),\qquad Pg:=\int g\,dP,$$

and define the empirical Rademacher complexity by

$$\widehat{\mathfrak R}_S(\mathcal G):=\mathbb E_\sigma\left[\sup_{g\in\mathcal G}\frac1m\sum_{i=1}^m\sigma_i g(z_i)\right].$$

Here $\mathbb E_\sigma$ is the uniform average over the $2^m$ sign vectors. If $S=(Z_1,\ldots,Z_m)$ is an IID sample with common law $P$, and the displayed supremum is measurable as a function of $S$, the expected Rademacher complexity is

$$\mathfrak R_m(\mathcal G):=\mathbb E_{S\sim P^m}\widehat{\mathfrak R}_S(\mathcal G).$$

The class may be finite, countable, or uncountable when the indicated supremum is measurable; a specified countable subclass giving the same supremum for every sign vector for almost every sample suffices. This is the one-sided convention: the definition contains no absolute value, and zero need not belong to $\mathcal G$. Both complexities lie in $[0,1]$: every signed average lies in $[-1,1]$, and for any fixed $g_0\in\mathcal G$ the sign-average supremum is at least the sign-average for $g_0$, which is zero.

## Definition references

[[def-probability-measure]]: $P$ is a measure of total mass one on $(\mathcal Z,\mathcal A)$.

[[def-empirical-process-and-rademacher-process]]: defines the notation $Pg=\int g\,dP$, $P_mg=m^{-1}\sum_i g(Z_i)$ and the one-sided Rademacher process.

[[def-one-sided-empirical-rademacher-complexity]]: uses the same nonabsolute sign supremum normalization for fixed samples and finite or countable classes.

[[def-identically-distributed-and-iid-random-variables]]: IID means mutually independent random elements with the same law.

[[thm-independent-random-elements-have-product-joint-law]]: identifies the joint law of a finite independent tuple with the product of its marginals, so an IID tuple with common law $P$ has law $P^m$.

[Mohri et al., Definitions 3.1–3.2, printed pp. 30–31](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1): the adopted $1/m$ one-sided empirical and expected normalization.

[Bartlett and Mendelson, Definition 2, printed p. 464](https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf): an independent treatment using an absolute supremum and a $2/m$ normalization, recorded for comparison.
