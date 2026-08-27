---
id: ex-free-groups-and-their-cantor-boundaries
kind: example
title: "Free groups have Cantor-set boundaries"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-finite-and-free-groups-are-hyperbolic, thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 5.3"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
---

## Example

If $F_r$ is a free group of rank $r \ge 2$, then its Gromov boundary is a
Cantor set.

## Facts & Assumptions

**Given:** A free group $F_r$ of rank $r \ge 2$.

[L1] Free groups are hyperbolic
([[prop-finite-and-free-groups-are-hyperbolic]]).

[A1] The boundary of a regular tree of valence at least $3$ is homeomorphic to
a Cantor set.

## Verification

**Proof technique:** direct.

1.1 By [L1], the Cayley graph of $F_r$ with respect to a free basis is a hyperbolic tree. [L1]

2.1 Because $r \ge 2$, that tree has valence at least $3$, so [A1] identifies its boundary with a Cantor set. Hence the boundary of $F_r$ is a Cantor set. [A1, step 1.1] ∎ 