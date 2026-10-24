---
id: def-levy-prokhorov-metric
kind: definition
title: Levy prokhorov metric
deps: ["def-probability-measure", "def-metric-bounded-diameter", "thm-infimum-property", "lem-distance-to-set-is-lipschitz"]
sources:
  references:
    - title: van Gaans, §4, pp. 9–10 (open-enlargement convention; equivalence must be proved locally)
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
verification:
  audited: 2026-09-10
origin: pipeline
---

## Definition

For Borel probabilities $\mu$,$\nu$ on a metric space S, put $F^{[\varepsilon]}=\{x:d(x,F)\le\varepsilon\}$ for nonempty closed F, and $\varnothing^{[\varepsilon]}=\varnothing$. Define $\pi(\mu,\nu)$ as the infimum of $\varepsilon$>0 such that, for every closed F, both $\mu(F)\le\nu(F^{[\varepsilon]})+\varepsilon$ and $\nu(F)\le\mu(F^{[\varepsilon]})+\varepsilon$. The admissible set contains every $\varepsilon$>=1 and is bounded below by zero, so its real infimum exists by [[thm-infimum-property]]. Enlargements are closed because distance to a nonempty set is continuous. [[lem-distance-to-set-is-lipschitz]] The metric assertion is proved in the following lemma.
