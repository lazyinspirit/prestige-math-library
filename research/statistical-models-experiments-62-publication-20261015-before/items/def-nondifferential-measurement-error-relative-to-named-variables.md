---
id: def-nondifferential-measurement-error-relative-to-named-variables
kind: definition
title: "Nondifferential measurement error relative to named variables"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-measurement-error-models
  - def-conditional-independence-given-a-sigma-algebra
  - def-axiom-of-choice
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
    - title: "Hernán and Robins, Causal Inference: What If, Chapter 9"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
      locator: "Technical Point 9.1 and §9.2, printed pp. 126–127"
    - title: "Keogh et al., STRATOS guidance on measurement error and misclassification, Part 1"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7450672/"
      locator: "§2.1"
---

## Definition

Let $X,W,Y,Z$ be real random variables on a common probability space. Let
$\mathcal G$ be the smallest sub-sigma-algebra of the ambient sigma-algebra
that makes both $X$ and $Z$ measurable; when no $Z$ is named, take
$\mathcal G=\sigma(X)$. The error in measuring $X$ by $W$ is
**nondifferential with respect to $Y$ relative to $(X,Z)$** exactly when
$$W\perp\!\!\!\perp Y\mid\mathcal G,$$
using the library definition
[[def-conditional-independence-given-a-sigma-algebra]]. It is
**differential with respect to $Y$ relative to $(X,Z)$** when this conditional
independence fails.

The named variables are part of the definition: changing $Y$ or $Z$ can
change the classification. This condition alone fixes no direction of bias
for a specified estimator or target. Such a direction requires additional
model and target assumptions.

**Axiom:** This definition assumes the Axiom of Choice
([[def-axiom-of-choice]]) because the cited
conditional-independence definition is stated using the library's
conditional-expectation classes.
