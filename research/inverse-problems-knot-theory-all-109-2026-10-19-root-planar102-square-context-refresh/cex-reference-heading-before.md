---
id: cex-knot-kt-47-boundary-case
kind: counterexample
title: "A crossing label occurring once is invalid"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-planar-diagram-gauss-and-dowker-codes
  - alg-planar-code-validation-and-diagram-reconstruction
  - thm-planar-code-validation-and-diagram-reconstruction-procedure-properties
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Knot Atlas, Gauss Codes manual"
      url: "https://katlas.org/wiki/Gauss_Codes"
      locator: "Gauss-code definition, lines 65–70"
    - title: "Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational Complexity of Knot and Link Problems, Journal of the ACM 46 (1999), section 1"
      url: "https://arxiv.org/pdf/math/9807016"
      locator: "§1 Introduction, finite four-valent diagram representation, web text lines 102–121"
---

## Statement refuted

The one-entry signed Gauss word $-1$ with declared crossing count $c=1$ has
every declared label present, but it is not a Gauss code for a closed regular
oriented diagram: label $1$ occurs once, only as an under-visit, instead of
twice with one over-visit and one under-visit. The validation procedure returns
`invalid-crossing-visit-count` with counts $(0\text{ over},1\text{ under})$
before performing any crossing-graph or face-count calculation.

## Statement refuted references

[[def-planar-diagram-gauss-and-dowker-codes]] — each crossing label occurs exactly once over and once under.

[[alg-planar-code-validation-and-diagram-reconstruction]] — visit-count check and its ordered failure reason.

[[thm-planar-code-validation-and-diagram-reconstruction-procedure-properties]] — exact invalid-code return behavior.

[Knot Atlas, “Gauss Codes”](https://katlas.org/wiki/Gauss_Codes) — each crossing is recorded on both visits, with over/under signs.

[Hass–Lagarias–Pippenger, §1](https://arxiv.org/pdf/math/9807016) — a regular diagram crossing is a four-valent vertex.

## Facts & Assumptions

**Given:** The declared crossing count $c=1$ and the one-entry word $-1$.

[F1] [[def-planar-diagram-gauss-and-dowker-codes]]: for each crossing label $j\in\{1,\ldots,c\}$, a Gauss code contains exactly two visits to $j$, one over and one under.

[F2] [[alg-planar-code-validation-and-diagram-reconstruction]]: for a nonempty Gauss input, after range checking, the procedure counts the two over/under visits and returns `invalid-crossing-visit-count` at the first label whose counts are not $(1,1)$, before any graph or face test.

[F3] [[thm-planar-code-validation-and-diagram-reconstruction-procedure-properties]]: each invalid return is the first failed predicate in the stated procedure order.

## Proof

1.1 The only declared label is $1$, which lies in $\{1\}$. The word has one entry, and its negative sign makes that entry an under-visit. Hence its visit-count pair is $(0,1)$, not the required $(1,1)$ in [F1]. [given, F1, algebra]

2.1 The range check passes, so the validator reaches its Gauss visit-count check. By [F2] and [F3] it returns `invalid-crossing-visit-count` with $(0,1)$ before constructing a crossing graph or computing faces. Therefore mere presence of every declared label does not make a signed word a Gauss code. [given, F1, F2, F3, step 1.1] ∎
