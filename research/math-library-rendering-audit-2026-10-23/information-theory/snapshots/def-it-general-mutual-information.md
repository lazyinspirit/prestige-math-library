---
id: def-it-general-mutual-information
kind: definition
title: "Mutual information for standard-Borel random elements"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-kullback-leibler-divergence
  - def-standard-borel-space
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
justified_by: []
aliases: []
axiom_use: "The definition uses the published KL divergence, whose Radon–Nikodym definition assumes AC."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected first edition"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 5, §5.5, printed pp. 113–121, equation (5.29): general mutual information as joint-law KL."
---

## Definition

Assume AC. Let $X,Y$ be random elements with standard-Borel value spaces $(\mathsf X,\mathcal X)$ and $(\mathsf Y,\mathcal Y)$, and let $P_{XY}$, $P_X$, and $P_Y$ be their joint and marginal probability laws. The product law $P_X\otimes P_Y$ exists by [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]. Define the mutual information in nats by

$$I_{\mathrm{nat}}(X;Y):=D(P_{XY}\|P_X\otimes P_Y)\in[0,+\infty],$$

where $D$ is the directional Kullback–Leibler divergence of [[def-kullback-leibler-divergence]]. This definition remains meaningful when one or both laws have no Lebesgue density and does not subtract differential entropies that may be infinite.

## Remarks

The underlying spaces are standard Borel, as defined in [[def-standard-borel-space]]. AC is part of the definition's dependency contract through the Radon–Nikodym construction in the KL supplier.
