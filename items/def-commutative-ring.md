---
id: def-commutative-ring
kind: definition
title: "Commutative ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ring, def-binary-operation]
justified_by: []
aliases: []
landmark: true
short: "commutative ring"
verification:
  precheck: n/a
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Commutative ring (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Commutative_ring"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §16.3: Rings"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/16%3A_Rings/16.03%3A_Rings"
pipeline_run: null
---

## Definition

A ring $R$ ([[def-ring]]) is **commutative** when its multiplication is
commutative ([[def-binary-operation]]):

$$xy \;=\; yx \qquad \text{for all } x, y \in R .$$

Addition is commutative in every ring, by axiom (R1), so the word refers to
multiplication alone.

## Remarks

- **One of the two distributive laws becomes redundant.** In a commutative ring
  the right law $(y+z)x = yx + zx$ follows from the left one, since
  $(y+z)x = x(y+z) = xy + xz = yx + zx$. Both are still stated in [[def-ring]],
  because a ring is not assumed commutative there.

- Every field is a commutative ring ([[lem-field-is-a-commutative-ring]]), and
  $\mathbb{Z}$, $\mathbb{Q}$ and $\mathbb{R}$ are commutative rings; the
  companion page records each of those as an instance. The quaternions are a
  ring that is not commutative
  ([[def-quaternions]], [[thm-quaternions-form-a-division-ring]]).
