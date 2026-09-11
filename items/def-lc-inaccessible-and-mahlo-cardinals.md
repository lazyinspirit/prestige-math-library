---
id: "def-lc-inaccessible-and-mahlo-cardinals"
kind: "definition"
title: "Inaccessible and Mahlo cardinals"
deps: ["def-cardinal", "def-cofinality", "def-cardinal-arithmetic", "def-club-subsets-of-ordinals", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Monk Chapter 17, weak compactness/Mahlo discussion pp.356–363
      url: https://euclid.colorado.edu/~monkd/jech.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

Work in ZFC; [[def-axiom-of-choice]] is the ambient axiom used for arbitrary cardinality comparisons. Cardinals are initial ordinals as in [[def-cardinal]], regular means $\operatorname{cf}(\kappa)=\kappa$ as in [[def-cofinality]], and $2^\mu$ is the cardinality of the power set in [[def-cardinal-arithmetic]].

An **inaccessible** cardinal is an uncountable regular strong limit cardinal: $2^\mu<\kappa$ for every cardinal $\mu<\kappa$. A **weakly inaccessible** cardinal is an uncountable regular limit cardinal. Strong limit and limit cardinal are different conditions.

For a regular uncountable kappa, a subset S is **stationary** if it meets every club subset of kappa, using [[def-club-subsets-of-ordinals]]. An inaccessible kappa is **Mahlo** if $\{\alpha<\kappa:\alpha\text{ is an uncountable regular cardinal}\}$ is stationary. None of these definitions asserts existence.
