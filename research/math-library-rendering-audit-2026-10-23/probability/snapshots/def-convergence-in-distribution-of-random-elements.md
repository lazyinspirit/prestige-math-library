---
id: def-convergence-in-distribution-of-random-elements
kind: definition
title: Convergence in distribution of random elements
deps: ["def-law-or-distribution-of-a-random-element", "def-weak-convergence-of-borel-probability-measures"]
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: van Gaans, Definition 3.1 applied to laws
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: pipeline
---

## Definition

Random elements $X_n,X$ with values in the same metric space **converge in distribution**, written $X_n\Rightarrow X$, if their laws from [[def-law-or-distribution-of-a-random-element]] satisfy $P_{X_n}\Rightarrow P_X$ in [[def-weak-convergence-of-borel-probability-measures]]. They may be defined on different probability spaces. The definition specifies only their marginal laws.
