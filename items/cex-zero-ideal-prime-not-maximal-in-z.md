---
id: cex-zero-ideal-prime-not-maximal-in-z
kind: counterexample
title: 'The zero ideal of $\mathbb Z$ is prime but not maximal'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prime-and-maximal-ideals, lem-ideal-criterion-and-intersections, thm-int-comm-ring, lem-int-cancellation]
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
    - title: "Ernst, An Inquiry-Based Approach to Abstract Algebra, Maximal and Prime Ideals"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/08%3A_An_Introduction_to_Rings/8.04%3A_Maximal_and_Prime_Ideals"
pipeline_run: null
---

## Statement refuted

Every prime ideal of a commutative ring is maximal.

## Facts & Assumptions

**Given:** The zero ideal $(0)$ in $\mathbb Z$.

[L1] A prime ideal is proper and satisfies the zero-product implication; a maximal ideal has no proper intermediate ideal ([[def-prime-and-maximal-ideals]]).

[L2] The ideal criterion verifies subtraction closure and absorption ([[lem-ideal-criterion-and-intersections]]).

[L3] $\mathbb Z$ is a nonzero commutative ring ([[thm-int-comm-ring]]).

[L4] Integer cancellation implies $ab=0$ only if $a=0$ or $b=0$ ([[lem-int-cancellation]]).

## Counterexample

**Proof technique:** direct.

1.1 The set $(0)$ is a proper ideal, and [L4] shows that $ab\in(0)$ implies $a\in(0)$ or $b\in(0)$. [L1, L2, L3, L4, given, algebra]

2.1 The ideal $2\mathbb Z$ satisfies $(0)\subsetneq2\mathbb Z\subsetneq\mathbb Z$. [step 1.1, L1, L2, L3, L4, given, algebra]

3.1 Hence $(0)$ is prime but not maximal, refuting the statement. [step 2.1] ∎
