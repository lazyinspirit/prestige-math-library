---
id: lem-grid-regular-jog-refinements
kind: lemma
title: "Regular jogs can be inserted and removed by grid moves"
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
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Appendix B.4, rectangular approximation construction; the regular-jog extension and its marked insertion proof are supplied locally"
---

## Statement

Assume countable choice. In a nonempty generic marked rectangular diagram call a horizontal segment a cap if its two incident vertical segments extend to the same side in height, and monotone otherwise. A generalized bridge rectification has three kinds of horizontal segment: an empty cap, a monotone segment with exactly one crossing, and an empty monotone segment, called a regular jog. Smooth the first two kinds as in a bridge-like grid and tilt and round each regular jog monotonically in height. This produces a bridge diagram with one distinguished regular point for each jog, at pairwise distinct heights different from all critical and crossing heights. For a jog remember also whether its lower incident vertical piece is to the left or to the right of its upper incident piece. This is its side datum.

Two generalized bridge rectifications whose smoothed diagrams with distinguished points are bridge isotopic, with the same side data, are connected by finitely many disjoint-interval column commutations after normalization of coordinate orders. Every generalized bridge rectification is related by finite grid stabilizations, legal commutations and destabilizations to an ordinary bridge-like grid whose smoothing has the same bridge-isotopy class after forgetting the distinguished regular points.

More explicitly, a vertical grid piece in column $P$ from a mark $a$ at lower row $L$ to its complementary mark at upper row $T$ may be split at any regular height $L<h<T$. Insert $Q$ immediately right of $P$ and $J$ immediately above $L$, replace $(P,L,a)$ by $(P,J,a),(Q,J,\bar a),(Q,L,a)$, and commute the short row $J$ to the gap containing $h$. Here $\bar a$ is the other marking type. This inserts a crossing-free jog with the lower piece on the right. Insertion to the left gives the other side. These constructions, their inverses, and the preceding uniqueness assertion do not use global grid-isotopy generation.

A legal commutation exchanges adjacent rows or columns whose closed marking intervals are disjoint or strictly nested. A stabilization replaces a marking by a three-mark two-by-two block with its type twice at opposite corners, the complementary type once, and one empty corner, preserving one of each type per row and column.

## Statement references

[[def-countable-choice]]

[[def-grid-diagram-for-an-oriented-knot]]

[[lem-bridge-diagram-grid-rectification]]

## Facts & Assumptions

**Given:** The finite oriented generalized bridge diagrams, their distinguished jog points and side data, and the explicit grid-move conventions in the statement.

[F1] [[def-grid-diagram-for-an-oriented-knot]] fixes the row $O$-to-$X$, column $X$-to-$O$, and vertical-over conventions.

[F2] [[lem-bridge-diagram-grid-rectification]] supplies an ordinary bridge-like grid for every nonempty bridge diagram, and commutation equivalence for ordinary rectifications with bridge-isotopic smoothings.

## Proof

1.1 Associate pieces to a jog-marked bridge diagram by cutting at extrema, undercrossing preimages and the distinguished regular points, leaving each overcrossing branch uncut. Every resulting piece is strictly height-monotone and has a nondegenerate closed height interval. At a critical or crossing height use its ordinary local cap or crossing order. At a distinguished regular height its two incident pieces lie consecutively among the local vertical pieces; prescribe their order by the side datum. This prescription is consistent with all other pieces: the distinguished point has a small disk disjoint from every other branch, and both incident vertical positions can be placed arbitrarily close to its original position on the selected sides. Pieces whose closed height intervals overlap have one prescribed left-to-right inequality, given by the graph order on an interior regular height or by this endpoint prescription. For every set of intervals containing a common height, these inequalities give a coherent total order. [given, construct]

2.1 The inequalities have no directed cycle. Three pairwise intersecting closed intervals have a common point, by comparing their largest left endpoint with their smallest right endpoint, so a triangle has coherent order. An interval intersection graph has no chordless cycle of length at least four: at a vertex with largest left endpoint both neighbors contain that endpoint and hence intersect each other. A chord of a shortest directed cycle, in either direction, would shorten it. Thus there is no directed cycle. Repeated removal of a vertex with no incoming edge gives a total order extending all inequalities, and assigning distinct increasing coordinates realizes them. At a critical height its horizontal join is an empty cap; at a crossing height the join meets exactly the overpassing piece; at a jog height its incident endpoints are consecutive and its join is empty and monotone. This constructs generalized rectifications with the stipulated incidence and side data. [step 1.1, construct, algebra]

3.1 The coordinate solution set is the open convex set defined by those strict inequalities. The special and distinguished height order is fixed in a bridge isotopy; pieces and their local orders continue without alteration. Hence two generalized rectifications of the same marked bridge class give two points of this same convex set after identifying pieces. Join them by a piecewise linear path which crosses each coordinate-equality hyperplane transversely and one at a time: choose an intermediate point in a small open ball avoiding the finitely many affine hyperplanes that force parallel or simultaneous crossings. Finitely many proper affine hyperplanes cannot cover an open ball, as their defining polynomial product is nonzero on some line segment. Only pieces with disjoint closed height intervals can meet in coordinate along this path, since intersecting intervals have a fixed strict inequality. At such a meeting the two columns are adjacent. The normalized grids therefore differ by a finite sequence of disjoint-interval column commutations. Ordered changes of height coordinates alter no normalized grid. This proves the uniqueness assertion, including closed interval endpoints at the distinguished heights. [step 1.1, step 2.1, construct, algebra]

3.2 We also verify the bridge interpretation used here. On each interval of regular heights all pieces are ordered graphs, so ordered rectangular replacements have the same graph order. At a jog the replacement can be smoothed as a strictly height-monotone arc, with the same unique graph on each nearby horizontal fiber. At a crossing the difference of the two graph abscissae has a simple zero, so the positive affine horizontal map matching the two graph values extends smoothly over that zero by division by their simple vanishing factor. At a cap choose the small central smoothing as an affine horizontal image of the original Morse cap, and connect to its vertical legs by monotone branches in an empty neighborhood. Between these finitely many special neighborhoods extend the prescribed horizontal maps by positive derivatives on each gap: choose short end collars matching the prescribed derivatives, then a nonnegative interior bump whose integral fills the required positive image gap. Compact regular subbands give positive separation bounds. Smooth partitions in the height coordinate patch these maps by convex combinations, preserving positive horizontal derivative and all matching values. Outside a large rectangle take the identity. Interpolating the resulting increasing horizontal fiber maps with the identity, and separately interpolating increasing height reparameterizations, gives plane diffeomorphisms throughout. They prove the required bridge isotopies. The regular-jog case adds no singularity or critical point to this construction. [step 1.1, step 2.1, construct, algebra]

4.1 The stated insertion is an actual marked stabilization. With $J>L$ and $Q>P$, the new block has $a$ northwest and southeast, $\bar a$ northeast and empty southwest. Row $L$ keeps its exterior $\bar a$, column $P$ keeps its exterior $\bar a$ at $T$, and the new row and column have one marking of each type. The new row interval is $[P,Q]$. Since these columns are adjacent, each old intervening row between $L,T$ has its endpoints outside that interval: its endpoints cannot be on $P$ except in rows $L,T$, and cannot be on the new $Q$. It is thus disjoint from $[P,Q]$ or strictly contains it. Commute $J$ upward one neighboring row at a time to the desired gap. No swap with $L,T$ is needed. Every exchange is legal. In that gap the new horizontal segment has one incident vertical leg above and one below, and crosses no old column, so it is a regular jog. Old crossing and critical height orders are unchanged. Its smoothing is bridge isotopic to the original after forgetting the distinguished point, by the local monotone-graph construction of step 3.2. [F1, given, construct, cases]

5.1 If the lower incident piece is to be on the left, insert $Q$ immediately left of $P$ instead. Use the same marks $(P,J,a),(Q,J,\bar a),(Q,L,a)$ and remove $(P,L,a)$. The new block now has $\bar a$ northwest, $a$ northeast and southwest, and empty southeast; it is again an allowed stabilization. The same adjacent-column interval argument moves the new row to the chosen height. Reflection here specifies a second finite recipe; no move from a grid to its reflection is assumed. Either type $a$ works by [F1]. Repeating these finite constructions inserts any finite ordered list of regular jogs and side data on the monotone pieces of an ordinary bridge rectification. An already inserted jog merely subdivides a piece; the next chosen regular point lies in one of its still vertical subpieces, to which the same construction applies. [F1, step 4.1, construct, cases]

6.1 Finally take a generalized bridge rectification $G$ and let $D$ be its jog-marked smoothing. Forget the regular points and choose an ordinary bridge rectification $B$ by [F2]. The distinguished points of $D$ lie on its monotone pieces at heights different from all special heights, so the two insertion recipes insert their matching ordered points and side data into $B$, giving a generalized grid $B'$. Steps 1.1–3.2 identify $B'$ and $G$ by disjoint-interval column commutations. Reverse those insertions to obtain a finite grid-move sequence from $G$ to $B$. This is an explicit reduction through fixed marked bridge data, not an appeal to planar invariance of an unproved global assignment. It proves every assertion. [F2, step 3.1, step 3.2, step 4.1, step 5.1, construct] ∎
