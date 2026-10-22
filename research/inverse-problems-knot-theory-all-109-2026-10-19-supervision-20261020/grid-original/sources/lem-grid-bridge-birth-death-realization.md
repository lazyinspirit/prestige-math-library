---
id: lem-grid-bridge-birth-death-realization
kind: lemma
title: "Grid stabilizations realize a bridge-height birth or death"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-grid-diagram-for-an-oriented-knot
  - lem-bridge-diagram-grid-rectification
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Appendix B.4, Figure B.22 and the birth/death case of Proposition B.4.3"
---

## Statement

Assume countable choice. Let $G$ be a nonempty bridge-like rectangular diagram, with the vertical-over convention and grid markings of the grid-diagram definition. Choose a vertical piece $P$, whose lower and upper endpoint rows are $L<T$, and choose a height $h\in(L,T)$ distinct from all horizontal levels. There is a finite sequence of two stabilizations and legal row commutations producing another bridge-like rectangular diagram. Its smoothing has the same bridge data as the original except for the insertion of a pair of nondegenerate height extrema near $h$ on the chosen piece. No crossing is added, removed, or redecorated, and all old special heights retain their order. A permitted stabilization duplicates its chosen marking type at opposite corners of a new two-by-two block, puts the other type at a third corner and leaves the last empty, preserving one of each type per row and column; adjacent rows with disjoint or strictly nested closed horizontal marking intervals may commute. Either side of the strand and either orientation are allowed. Reversing the sequence realizes the death.

Consequently, if two nonempty oriented bridge diagrams differ by a single ordinary local birth/death of height-critical points, their bridge rectifications are related by grid moves. This conclusion uses no grid-isotopy generation theorem or crossing-slide realization.

## Statement references

[[def-countable-choice]]

[[def-grid-diagram-for-an-oriented-knot]]

[[lem-bridge-diagram-grid-rectification]]

## Facts & Assumptions

**Given:** Countable choice, the finite bridge-like rectangular diagram, its chosen vertical piece and regular height, or a single ordinary local bridge birth/death.

[F1] [[def-grid-diagram-for-an-oriented-knot]] fixes the row $O$-to-$X$, column $X$-to-$O$, and vertical-over conventions.

[F2] [[lem-bridge-diagram-grid-rectification]] gives rectifications of nonempty bridge diagrams and commutation equivalences between all rectifications with bridge-isotopic smoothings.

## Proof

1.1 Let $a$ be the type of the mark at $(P,L)$, and write $b$ for the other type. The mark at $(P,T)$ has type $b$. Choose real coordinates representing the grid orders. Insert a new column $Q$ immediately to the right of $P$ and a new row $H$ immediately above $L$. Stabilize at $(P,L)$ by removing its $a$ and putting $$a\text{ at }(P,H),\qquad b\text{ at }(Q,H),\qquad a\text{ at }(Q,L).$$ In the new block with north row $H$, south row $L$, west column $P$, east column $Q$, the northwest and southeast corners have $a$, the northeast has $b$, and the southwest is empty. This is an allowed stabilization. Row $L$ retains its unchanged exterior $b$, column $P$ retains its $b$ at $T$, and column $Q$ contains $b,a$. All rows and columns therefore still have exactly one of each marking. [F1, given, construct]

2.1 The short row $H$ has horizontal interval $[P,Q]$. Every original row strictly between $L$ and $T$ has both endpoints outside this interval: no old column was inserted between $P,Q$, the only original rows incident to $P$ are $L,T$, and $Q$ is new. Hence such a row has interval either disjoint from $[P,Q]$ or containing it in its interior. Move $H$ upward, one adjacent row at a time, until it lies in the gap containing $h$. Each exchange is a legal disjoint-interval or strictly nested-interval commutation. The labels of the other rows retain their relative order. No exchange with $L$ or $T$ is needed. If $h$ is already in the first gap the sequence is empty. Set the coordinate of the new $H$ inside the desired gap; coordinates within a fixed order do not change a grid. [F1, step 1.1, given, construct, cases]

3.1 Insert another new column $R$ strictly between the adjacent columns $P,Q$ and another new row $K$ immediately below $H$, above every original row below $H$. Stabilize the $a$ at $(P,H)$ by removing it and putting $$a\text{ at }(P,K),\qquad b\text{ at }(R,K),\qquad a\text{ at }(R,H).$$ The northwest corner $(P,H)$ is empty; northeast and southwest have $a$, and southeast has $b$. This is the other indicated stabilization block. The unchanged $(Q,H)$ has type $b$. Column $P$ now pairs its $a$ at $K$ with its exterior $b$ at $T$; column $R$ pairs $b$ at $K$ with $a$ at $H$; column $Q$ still pairs $b$ at $H$ with $a$ at $L$. Rows $K,H$ have respectively $(a,b)$ and $(a,b)$ in their displayed columns. All untouched rows and columns retain their markings. These statements cover both $a=O$ and $a=X$ without an unoriented identification. [F1, step 1.1, step 2.1, construct]

4.1 The part of the final diagram replacing the original vertical piece is, ignoring its traversal orientation, $$ (P,T)\longrightarrow(P,K)\longrightarrow(R,K)\longrightarrow(R,H)\longrightarrow(Q,H)\longrightarrow(Q,L).$$ Here $L<K<H<T$ and $P<R<Q$. Row $K$ is a local minimum: both incident vertical pieces extend upward. Row $H$ is a local maximum: both incident vertical pieces extend downward. Their intervals $[P,R]$ and $[R,Q]$ contain no other column, so neither cap contains a crossing. There is no original horizontal level between $K,H$. Thus these are exactly the two new height extrema. Every original horizontal segment below $K$ that crossed $P$ now crosses $Q$ instead, and every one above $H$ still crosses $P$. Indeed its endpoints are outside the adjacent original-to-new strip; containing $P$ in its interior is equivalent to containing $Q$ there. There is no original endpoint on $P$ except in rows $L,T$, which remain endpoints rather than crossings. All other old intersections are untouched. This proves the assertion about the crossing list, decorations and special-height order. [F1, step 1.1, step 2.1, step 3.1, construct, cases]

5.1 The old lower endpoint row $L$ is still the same kind of cap or crossing join. Moving its endpoint from $P$ to the immediately neighboring new $Q$ cannot pass any old column. At $L$ the column $P$ no longer extends down to that row, so it cannot become an unwanted crossing of the expanded horizontal interval. At $T$ nothing has changed. All other old horizontal joins keep their type and crossing count by step 4.1. The final diagram is consequently bridge-like, not merely a general grid. Round its two new caps in disjoint small disks and keep their heights inside the gap around $h$. The new local arc runs monotonically in the horizontal direction after its corners are rounded, and its height along that arc decreases, increases, then decreases, or has the reverse traversal. It is therefore the side of an ordinary birth having two nondegenerate critical points. Its three monotone pieces have the same order as the two newly inserted caps; the old side is the single monotone piece. [step 3.1, step 4.1, construct]

6.1 To identify the local event precisely, an ordinary birth has a horizontal regular tangent at the singular point and local height $y=u^3/3-\tau u$, after changes preserving the height orientation and a possible reversal of $u$. For $\tau<0$ it is monotone; for $\tau>0$ its two critical points are $u=\pm\sqrt\tau$, with distinct maximum and minimum values and three ordered monotone pieces between these values. The transverse coordinate $x$ is strictly monotone in $u$ on a sufficiently small event neighborhood, because the original planar curve is immersed. Hence there are exactly two possible horizontal orders for these three pieces. Our construction gives $P<R<Q$; insertion of the two new columns to the left of $P$ gives its reflection and the opposite order. Reflecting the displayed finite coordinate certificate preserves adjacency, interval disjointness and containment, all marking types, and vertical-over decorations; it is a recipe for the opposite-side operations, not an assertion that a grid is move-equivalent to its own reflection. The choice $a=O$ or $a=X$ gives either direction of traversal. Thus all ordinary oriented local birth models, and their reversed deaths, have been treated. [F1, step 3.1, step 4.1, step 5.1, construct, cases]

7.1 Finally take any two bridge diagrams related by a local birth/death. On the monotone side, [F2] supplies a bridge rectification. The event lies on one of its vertical pieces after the identification by bridge data; choose $h$ in the corresponding regular-height gap. Steps 1.1–6.1 produce a bridge-like grid whose smoothing has exactly the bridge data of the other side, with the appropriate horizontal order, orientation and crossing decorations. The fiberwise bridge-isotopy construction in [F2] identifies these smoothings with that side, and its uniqueness assertion connects the produced grid to every other rectification by commutations. Applying [F2] on the first side as well makes the conclusion independent of its initially chosen rectification. Every operation was finite; no global generation or analytic assertion was used. [F2, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, construct] ∎
