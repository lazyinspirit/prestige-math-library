---
id: def-it-finite-conditional-mutual-information
kind: definition
title: "Finite conditional mutual information"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-it-information-units-and-logarithm-base, lem-it-finite-marginals-and-conditionals-are-pmfs, def-qa-35-finite-probability-entropy-and-stochastic-matrices, def-finite-probability-space-and-event, def-random-element-and-real-random-variable]
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; all conditional distributions and sums are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected first edition"
      url: https://ee.stanford.edu/~gray/it.pdf
      locator: "Chapter 2, §2.5, printed pp. 40–41; conditional mutual information as conditional-product divergence."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: "Chapter 3, §3.4, printed pp. 50–52, Definition 3.6; CMI and conditional independence."
---

## Definition

Let $p_{XYZ}$ be a joint probability vector on finite alphabets and write $p_Z(z)$ for its marginal. It is the law of finite coordinate random elements on the canonical finite probability space from [[def-finite-probability-space-and-event]] and [[def-random-element-and-real-random-variable]]. For each $z$ with $p_Z(z)>0$, the conditional law $p_{XY|z}$ and its marginals $p_{X|z},p_{Y|z}$ are probability vectors by [[lem-it-finite-marginals-and-conditionals-are-pmfs]]. Define conditional mutual information in nats by

$$I(X;Y|Z):=\sum_{z:p_Z(z)>0}p_Z(z)D(p_{XY|z}\|p_{X|z}\otimes p_{Y|z}),$$

using the finite KL convention of [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]], where $(p_{X|z}\otimes p_{Y|z})(x,y):=p_{X|z}(x)p_{Y|z}(y)$. A positive conditional joint mass forces both conditional marginals to be positive, so each displayed KL term is finite. Zero-mass conditioning values contribute no term. The base-$b$ version replaces $\ln$ by $\log_b$ inside the conditional KL sums.
