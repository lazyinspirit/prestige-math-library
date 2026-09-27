---
id: thm-linear-isoperimetric-characterisation-of-hyperbolic-groups
kind: theorem
title: "Linear isoperimetric characterisation of hyperbolic groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-presentation, def-hyperbolic-group, thm-hyperbolic-groups-admit-finite-dehn-presentations, lem-linear-isoperimetry-implies-uniformly-thin-geodesic-bigons, lem-relator-expressions-give-controlled-singular-planar-diagrams, def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation, def-axiom-of-choice]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.4"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 2.3"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-06-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice. A finitely generated group is hyperbolic if and only if it admits a finite
presentation satisfying a linear isoperimetric inequality for van Kampen area:
there is a constant $C>0$ such that every null-homotopic word $w$ has a van
Kampen diagram with at most $C|w|$ $2$-cells.

## Facts & Assumptions

**Given:** AC and a finitely generated group $G$.

[F1] Hyperbolic groups admit finite Dehn presentations ([[thm-hyperbolic-groups-admit-finite-dehn-presentations]]).

[F2] Under AC, a finite presentation with algebraic relator area at most $K|w|$ and bounded relator lengths has uniformly slim triangles in its labelled geometric Cayley graph ([[lem-linear-isoperimetry-implies-uniformly-thin-geodesic-bigons]]).

[F3] An expression with $m$ relator factors produces a singular planar van Kampen diagram with no more than $m$ faces ([[lem-relator-expressions-give-controlled-singular-planar-diagrams]]). The least number of such factors is algebraic relator area ([[def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation]]).

[A1] AC is used in [F2] for its cone and uniformity arguments ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ is hyperbolic, [F1] gives a finite presentation with the Dehn reduction property. For every nonempty null word, one reduction replaces a subword longer than half a defining relator by the complementary shorter subword, using one conjugate of that relator; the resulting freely reduced word is strictly shorter. Iterate. There are at most $|w|$ reductions before the empty word, so reversing them gives an expression of $w$ as at most $|w|$ conjugated relators. By [F3] it has a van Kampen diagram with at most $|w|$ cells. The empty word has an empty diagram. Thus the displayed linear inequality holds, with $C=1$ (or any larger positive constant). [F1, F3, algebra]

1.2 Conversely suppose a finite presentation has diagrams with at most $C|w|$ cells for every null word. The boundary word of any finite disc diagram is a product of conjugates of its face relators: choose a spanning tree of its edges, cut along that tree, and peel cells from the exterior; each peel contributes one conjugated relator and the cut-tree traversals cancel freely. Repeated vertices and edges are treated by their separate directed occurrences. Thus the algebraic relator area of $w$ is at most $C|w|$. If the given bound is real, take $K=\max\{0,C\}$; the area is integral, so the same inequality holds. Since the relator set is finite, its lengths have a finite bound $L$. [given, F3, algebra]

2.1 By [F2] and [A1], the bound in step 1.2 makes the labelled geometric Cayley graph uniformly slim. Hence $G$ is hyperbolic. Together with step 1.1 this proves the equivalence. [F2, A1, step 1.1, step 1.2] ∎
