---
id: def-reverse-mirror-of-oriented-knot
kind: definition
title: "Reverse mirror of an oriented knot"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-connected-sum-and-prime-knot
  - def-oriented-link-in-s-three-and-ambient-isotopy
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
sources:
  references:
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§1.1, mirror and reverse conventions, printed p.2"
    - title: "Dale Rolfsen, Knots and Links"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
      locator: "Chapter F, concordance-group inverse convention, printed pp.227–228"
---

## Definition

Fix the orientation-reversing reflection $r:S^3\to S^3$ chosen for the mirror convention in the oriented connected-sum definition. If $K$ is a smooth oriented knot, its mirror $r(K)$ carries the orientation induced from $K$ by $r$. The reverse mirror of $K$, denoted $K^\dagger$, is the image $r(K)$ with its knot orientation reversed. Thus $K^\dagger$ changes both the ambient orientation convention and the orientation of the knot.

## Definition references

[[def-knot-connected-sum-and-prime-knot|The fixed reflection used for mirrors]]

[[def-oriented-link-in-s-three-and-ambient-isotopy|Oriented knot types]]

