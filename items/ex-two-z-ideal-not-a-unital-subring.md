---
id: ex-two-z-ideal-not-a-unital-subring
kind: example
title: '$2\mathbb Z$ is an ideal of $\mathbb Z$ but is not a subring under the library''s unital convention'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-left-right-and-two-sided-ideal, lem-ideal-criterion-and-intersections, def-subring, thm-int-comm-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Janssen and Lindsey, Rings with Inquiry, Ideals"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Rings_with_Inquiry_%28Janssen_and_Lindsey%29/04%3A_Ideals_and_Homomorphisms_and_test/4.01%3A_Ideals_in_general"
pipeline_run: null
---

## Example

$2\mathbb Z$ is an ideal of $\mathbb Z$ but is not a subring under the library's unital convention.

## Facts & Assumptions

**Given:** The subset $2\mathbb Z\subseteq\mathbb Z$.

[L1] A two-sided ideal is an additive subgroup with multiplication absorption ([[def-left-right-and-two-sided-ideal]]).

[L2] The ideal criterion is subtraction closure and absorption ([[lem-ideal-criterion-and-intersections]]).

[L3] A subring contains the ambient identity ([[def-subring]]).

[L4] $\mathbb Z$ is a ring with identity $1$ ([[thm-int-comm-ring]]).

## Verification

**Proof technique:** direct.

1.1 Differences of even integers are even, and multiplying an even integer by any integer remains even, so $2\mathbb Z$ is an ideal. [L1, L2, L3, L4, given, algebra]

2.1 The identity $1$ does not belong to $2\mathbb Z$. [step 1.1, L1, L2, L3, L4, given]

3.1 Thus the missing identity rules out $2\mathbb Z$ as a unital subring. [step 2.1] ∎
