---
id: "def-lc-weakly-compact-cardinal"
kind: "definition"
title: "Weakly compact cardinals"
deps: ["def-lc-inaccessible-and-mahlo-cardinals", "def-kappa-tree-and-tree-property", "def-partition-arrow-notation", "def-axiom-of-choice"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Monk Theorem 17.23 pp.356–358
      url: https://euclid.colorado.edu/~monkd/jech.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: "pipeline"
---

## Definition

In ZFC a cardinal kappa is **weakly compact** when it is inaccessible in the sense of [[def-lc-inaccessible-and-mahlo-cardinals]] and has the tree property of [[def-kappa-tree-and-tree-property]]: every tree of height kappa with fewer than kappa nodes at each level has a cofinal branch. Cardinal comparisons use [[def-axiom-of-choice]].

The partition notation $\kappa\longrightarrow(\kappa)^2_\mu$ has the meaning in [[def-partition-arrow-notation]]: each coloring of unordered pairs by the nonzero cardinal mu has a homogeneous subset of cardinality kappa. At an inaccessible, the tree property is equivalent to the two-color instance and, equivalently, to the simultaneous assertion of these arrows for every nonzero $\mu<\kappa$; that result is proved subsequently and is not assumed here. No equivalence is claimed for any single arbitrary $\mu$, nor for colors $\mu\geq\kappa$. Inaccessibility is part of this definition, so the tree property alone at a successor cardinal does not establish weak compactness. This is a property of a cardinal, with no asserted existence and no witness-selection definition to justify.
