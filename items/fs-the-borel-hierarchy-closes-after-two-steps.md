---
id: fs-the-borel-hierarchy-closes-after-two-steps
kind: false-statement
title: "FALSE: every Borel subset of the real line is a countable union of countable intersections of open and closed sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [rem-the-borel-hierarchy-never-stabilizes]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Marker, Descriptive Set Theory, Section 2, Corollary 2.38"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
    - title: "M. Christ, Math 202B Lecture 1, Comment on the Borel hierarchy"
      url: "https://math.berkeley.edu/~mchrist/Math202B/Lectures/L1.pdf"
pipeline_run: null
---

## Statement

Every Borel subset of $\mathbb R$ belongs to the class obtained by taking
countable intersections of open and closed sets and then countable unions of
those intersections.

## Facts & Assumptions

**Given:** The Borel hierarchy on $\mathbb R$ formed by alternating countable unions and countable intersections from the open and closed sets.

[L1] For every ordinal $1\le\alpha<\omega_1$, the additive and multiplicative Borel classes on $\mathbb R$ differ, so the Borel hierarchy does not stabilize at any countable stage ([[rem-the-borel-hierarchy-never-stabilizes]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that every Borel set belongs to the displayed fixed finite-stage class. [assume-contra]

2.1 That class would then equal the Borel sigma-algebra. Since the Borel sigma-algebra is already closed under complements, countable unions, and countable intersections, every further stage would add no set, so the hierarchy would stabilize at that countable stage. [step 1.1, algebra]

3.1 The stabilization in step 2.1 contradicts [L1]. Hence the asserted finite description does not contain every Borel subset of $\mathbb R$. [step 2.1, L1, discharge-contradiction] ∎
