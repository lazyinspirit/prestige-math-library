---
id: lem-planar-isotopy-preserves-grid-move-class
kind: lemma
title: "Planar isotopy preserves the grid-move class of bridge rectifications"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-planar-isotopy-has-finite-bridge-height-events
  - lem-bridge-diagram-grid-rectification
  - lem-grid-bridge-birth-death-realization
  - lem-grid-special-height-exchange-realization
  - lem-grid-bridge-crossing-slides-with-arbitrary-exterior
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Appendix B.4, Proposition B.4.3; finite-event assembly with local suppliers explicitly recorded here"
---

## Statement

Assume countable choice. Let $D_0,D_1$ be nonempty oriented bridge diagrams that are planar isotopic with crossing decorations transported by the isotopy. Then any bridge-like grid rectification of $D_0$ is connected to any bridge-like grid rectification of $D_1$ by finitely many marked grid stabilizations, legal commutations and destabilizations. Here vertical strands pass over horizontal strands, a legal commutation exchanges adjacent rows or columns with disjoint or strictly nested closed marking intervals, and a stabilization is a three-mark two-by-two split preserving one $O$ and one $X$ per row and column. In particular the grid-move class assigned by bridge rectification depends only on the oriented decorated planar-isotopy class whenever that class is represented by bridge diagrams. No Reidemeister-move or global grid-isotopy generation theorem is used.

## Statement references

[[def-countable-choice]]

[[lem-planar-isotopy-has-finite-bridge-height-events]]

[[lem-bridge-diagram-grid-rectification]]

[[lem-grid-bridge-birth-death-realization]]

[[lem-grid-special-height-exchange-realization]]

[[lem-grid-bridge-crossing-slides-with-arbitrary-exterior]]

## Facts & Assumptions

**Given:** The two nonempty oriented bridge diagrams, their decorated planar isotopy, and arbitrary bridge-like rectifications of its endpoints.

[F1] [[lem-planar-isotopy-has-finite-bridge-height-events]] replaces a planar isotopy relative to its bridge endpoint collars by a regular family with finitely many isolated ordinary bridge-height events and no other events.

[F2] [[lem-bridge-diagram-grid-rectification]] supplies rectifications and disjoint-interval column commutations between rectifications within one bridge-isotopy class.

[F3] [[lem-grid-bridge-birth-death-realization]] connects all rectifications across an ordinary height birth or death, for either side and orientation and arbitrary exterior data.

[F4] [[lem-grid-special-height-exchange-realization]] connects all rectifications across a separated special-height exchange, for all critical/crossing types and orientations.

[F5] [[lem-grid-bridge-crossing-slides-with-arbitrary-exterior]] connects all rectifications across a crossing passing a height extremum, for either overpassing branch, either extremum and arbitrary exterior data.

## Proof

1.1 Reparameterize the given planar isotopy to be stationary on small endpoint collars: compose time with a smooth nondecreasing function that is zero near $0$, one near $1$, and strictly increasing between those collars. This changes neither endpoint diagram nor decorated planar class. Apply [F1] relative to those collars. Its finite exceptional times can be ordered $t_1<\cdots<t_N$. Around each choose a closed interval $[a_i,b_i]$ containing that time in its interior, with bridge endpoints, no other exceptional time, and pairwise disjoint intervals in their original order. If $N=0$, there are no such intervals. The complement consists of finitely many intervals all of whose diagrams are bridge diagrams. [F1, given, construct]

2.1 On a complementary interval there are no critical births, no crossing-critical coincidence and no special-height equality. Its critical points and crossing preimages continue smoothly, with unchanged orientation, decorations and strict order of special heights. Thus this restricted family is a bridge isotopy. By [F2] any rectifications of its two endpoints are connected by a finite sequence of legal column commutations. This includes constant complementary intervals and intervals containing no crossings: the asserted uniqueness concerns the full finite piece order, not a nonzero crossing count. [F2, step 1.1, construct]

2.2 At $t_i$ exactly one of the three kinds in [F1] occurs. Shrink $[a_i,b_i]$ if necessary. A birth/death has an isolated immersed local model and no crossing there, so [F3] applies. A coincidence of two spatially distinct special points has precisely the hypotheses of [F4]. A crossing-critical coincidence has a nondegenerate extremum on exactly one branch, with the other branch noncritical; all other special heights remain outside its interacting pair after this shrinking, so [F5] applies. These three cases exhaust [F1]. Each supplier connects arbitrary rectifications at the two endpoints, retaining all exterior strands, orientations and crossing decorations. No compatibility choice between neighboring local certificates is therefore required. [F1, F3, F4, F5, step 1.1, cases]

3.1 Choose a rectification at each of the finitely many subdivision endpoints by [F2], keeping the two prescribed grids at $0,1$. Use step 2.1 on every complementary interval and step 2.2 on every exceptional interval. Their terminal and initial grids agree at the chosen shared endpoints, so concatenation is an actual finite sequence of the stated grid moves from the first prescribed grid to the second. When $N=0$ only step 2.1 is needed. Reversing any constituent sequence is permitted because commutations and the stabilization/destabilization pair are reversible. Consequently all choices of bridge representatives and rectifications in the same planar class give one grid-move class. Only the finite-event and proved local suppliers have been used. [F2, step 1.1, step 2.1, step 2.2, construct] ∎
