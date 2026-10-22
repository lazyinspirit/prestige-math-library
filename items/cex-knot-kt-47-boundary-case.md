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
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Knot Atlas, Gauss Codes manual"
      url: "https://katlas.org/wiki/Gauss_Codes"
      locator: "Gauss-code definition, lines 65–70"
    - title: "Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)"
      url: "https://arxiv.org/pdf/math/9807016"
      locator: "§3 Knots and Links, web text lines 271–283 (four-valent crossing graph and over/under labels)"
---

## Statement refuted

For every positive integer $c$, every finite signed word with labels in
$\{1,\ldots,c\}$ in which each declared label occurs at least once is a Gauss
code of a closed regular oriented diagram.

## Statement references

[[def-planar-diagram-gauss-and-dowker-codes]] — each crossing label occurs exactly once over and once under.

[[alg-planar-code-validation-and-diagram-reconstruction]] — visit-count check and its ordered failure reason.

[[thm-planar-code-validation-and-diagram-reconstruction-procedure-properties]] — exact invalid-code return behavior.

[Knot Atlas, “Gauss Codes”](https://katlas.org/wiki/Gauss_Codes) — each crossing is recorded on both visits, with over/under signs.

[Hass–Lagarias–Pippenger, §3](https://arxiv.org/pdf/math/9807016) — a regular diagram crossing is a four-valent vertex.

## Facts & Assumptions

**Given:** The declared crossing count $c=1$ and the one-entry word $-1$.

[F1] [[def-planar-diagram-gauss-and-dowker-codes]]: for each crossing label $j\in\{1,\ldots,c\}$, a Gauss code contains exactly two visits to $j$, one over and one under.

[F2] [[alg-planar-code-validation-and-diagram-reconstruction]]: for a nonempty Gauss input, after range checking, the procedure counts the two over/under visits and returns `invalid-crossing-visit-count` at the first label whose counts are not $(1,1)$, before any graph or face test.

[F3] [[thm-planar-code-validation-and-diagram-reconstruction-procedure-properties]]: each invalid return is the first failed predicate in the stated procedure order.

## Counterexample

**Given:** The declared crossing count $c=1$ and the one-entry word $-1$.

1.1 The only declared label is $1$, which lies in $\{1\}$. The word has one entry, and its negative sign makes that entry an under-visit. Hence its visit-count pair is $(0,1)$, not the required $(1,1)$ in [F1]. [given, F1, algebra]

2.1 The range check passes, so the validator reaches its Gauss visit-count check. By [F2] and [F3] it returns `invalid-crossing-visit-count` with $(0,1)$ before constructing a crossing graph or computing faces. Therefore mere presence of every declared label does not make a signed word a Gauss code. [given, F1, F2, F3, step 1.1] ∎
