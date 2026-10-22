---
id: lem-grid-bridge-crossing-slides-with-arbitrary-exterior
kind: lemma
title: "Bridge crossing slides admit grid moves with arbitrary exterior data"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-grid-diagram-for-an-oriented-knot
  - lem-bridge-diagram-grid-rectification
  - lem-grid-regular-jog-refinements
  - lem-grid-bridge-crossing-slide-realization
  - lem-grid-underpassing-bridge-crossing-slide-realization
dependency_level: 3
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
      locator: "Appendix B.4, crossing-slide step in Proposition B.4.3; the arbitrary-exterior refinement is proved locally"
---

## Statement

Assume countable choice. Let two nonempty oriented bridge diagrams differ by one crossing sliding through one nondegenerate height extremum of a branch. The other branch is not height-critical, the crossing decorations are unchanged, and no other special height lies between these two interacting special heights on either sufficiently close side. Then any ordinary bridge-like grid rectifications of the two sides are connected by finitely many marked stabilizations, legal commutations and destabilizations, with the row $O$-to-$X$, column $X$-to-$O$, and vertical-over conventions. The height-critical branch may be overpassing or underpassing, and every orientation and maximum/minimum variant is included. No condition is imposed on the exterior strands or their remote endpoint heights.

A legal commutation exchanges adjacent rows or columns whose closed marking intervals are disjoint or strictly nested. The stabilizations and destabilizations are the usual three-mark two-by-two split and its inverse. In particular a shared-endpoint switch is not taken as a primitive grid move. No global grid-isotopy generation assertion is used.

## Statement references

[[def-countable-choice]]

[[def-grid-diagram-for-an-oriented-knot]]

[[lem-bridge-diagram-grid-rectification]]

[[lem-grid-regular-jog-refinements]]

[[lem-grid-bridge-crossing-slide-realization]]

[[lem-grid-underpassing-bridge-crossing-slide-realization]]

## Facts & Assumptions

**Given:** The bridge crossing slide, with its local decorated and oriented branches, and the finite grid-move conventions in the statement.

[F1] [[lem-bridge-diagram-grid-rectification]] gives ordinary rectifications and their commutation equivalence within a bridge-isotopy class.

[F2] [[lem-grid-regular-jog-refinements]] gives exact marked interior vertical-piece splitting by a stabilization and short-row sweep, and removal of all crossing-free regular jogs to an ordinary rectification by actual grid moves.

[F3] [[lem-grid-bridge-crossing-slide-realization]] gives the overpassing-cap certificate on consecutive columns $P,L,Q,R$ and consecutive rows $H<K$, with $P$'s other mark above $K$ and the other marks of $L,Q,R$ below $H$. It tracks all exterior markings.

[F4] [[lem-grid-underpassing-bridge-crossing-slide-realization]] gives the underpassing-cap certificate on consecutive columns $L,B,M,R$ and rows $H<K$, with the other marks of $L,R$ below $H$ and the two marks of $B$ outside $[H,K]$. It decomposes its shared-endpoint row switch into permitted moves and tracks all exterior markings.

## Proof

1.1 Take an ordinary bridge rectification of the first side using [F1]. Initially its designated columns need not be consecutive. For an overpassing maximum, write its cap row as $K$ with legs $L<R$, and its nearby crossing row as $H<K$. The crossing-containing underpassing join has one endpoint outside the cap and one inside. Its upper incident piece must be outside: an inside upper piece would continue above $K$, since no special height intervenes, and would cross the allegedly empty cap. By horizontal reflection of the coordinate recipe and, if necessary, reversing the move, the column order is $P<L<Q<R$, with $P$ the upper incident piece and $Q$ the lower one. Thus its row and partner data are those of [F3], except for column consecutiveness. For an underpassing maximum, the overpassing branch continues through the whole band as one vertical piece $B$, while the underpassing branch has a short piece $M$ between its crossing row $H$ and cap row $K$. The same empty-cap test puts these columns in order $L<B<M<R$, up to the same choices of side and move direction. These are exactly the non-adjacency parts of [F4]. The two rows are consecutive because no other special height intervenes. [F1, given, construct, cases]

2.1 Every other original column strictly between the leftmost and rightmost of the four designated columns has its entire closed vertical interval below $H$ or above $K$. In the overpassing case a column present at height $K$ between $L,R$ would cross the empty cap. A column between $P,L$ present at $H$ would add a second crossing to row $H$. The same argument covers the remaining subintervals, using the empty cap or the fact that the crossing row contains exactly its designated crossing. Since no old marking row is strictly between $H,K$, a foreign interval cannot meet just one interior part of the band without containing $H$ or $K$. Its endpoints cannot equal $H,K$, whose marks are already the four designated endpoints. For the underpassing case, the cap $[M,R]$ and the one-crossing join $[L,M]$ give the identical exclusion. Thus all foreign intervals in the relevant column span miss the entire closed band. [step 1.1, given, construct, cases]

2.2 Let $H_-$ be the old row immediately below $H$ and $K_+$ the old row immediately above $K$; if either is absent use an arbitrary exterior level on that side. Each lower incident designated piece has its other endpoint in a row at or below $H_-$. In the overpassing case these lower pieces are $L,Q,R$, in that left-to-right order. Split them by [F2], inserting a new lower anchor column immediately right of each original column and moving its crossing-free jog row to heights $$H_-<j_L<j_Q<j_R<H.$$ The original columns now contain only the upper pieces beginning at these cut rows; the new lower anchor for $C$ has interval ending at $j_C$. In the underpassing case do the same for $L,B,R$ with $$H_-<j_L<j_B<j_R<H.$$ The short column $M$ is not cut. All new row levels lie in the formerly empty gap, and all mark types are exactly those prescribed in [F2], with the original lower-end type used separately on each piece. The sweeps remain legal even past an earlier inserted cut row, since the two columns of the newly inserted jog are adjacent and the earlier row has neither endpoint on them. [F2, step 1.1, construct]

3.1 Cut the unique upper incident piece as well: it is $P$ in the first case and $B$ in the second. If its upper mark has type $d$ in row $T$, insert an anchor immediately right of its column and a row $i$ immediately below $T$, replace the old mark by $d$ in the original column at $i$, $\bar d$ in the anchor at $i$, and $d$ in the anchor at $T$. With north row $T$ and south row $i$, northwest is empty, northeast and southwest have $d$, and southeast has $\bar d$, so this is an allowed stabilization. Sweep the short row downward to $$K<i<K_+$$ by the same disjoint-or-strictly-nested test as in [F2]. The original upper piece is now bounded above by $i$, while its upper anchor starts at $i$. For $B$ this is done after its lower cut, so its localized interval is $[j_B,i]$. Each old foreign interval in step 2.1 is either below every lower cut or above $i$, since its endpoints are old row levels. [F2, step 2.1, step 2.2, construct]

4.1 Bring the four localized original columns together, preserving their order, by moving each of them left past intervening inactive columns, one adjacent exchange at a time. Every such exchange has disjoint closed intervals. Foreign old columns are disjoint from every localized piece by the preceding three cut and exclusion constructions. The upper anchor, if before a later localized column, starts above $K$, while that later column ends at or below $K$. A lower anchor for a designated piece can occur before a later lower localized piece only in the same left-to-right order used for the cut heights; its interval ends at an earlier $j$, strictly below that later piece's lower cut. In the underpassing case it may also precede the short $M$, whose interval starts at $H$ and is therefore disjoint from every lower anchor. No exchange of inactive columns with each other is needed: this is the finite stable sorting which puts the four distinguished letters before all intervening inactive letters while retaining the order within each list. Every inversion just enumerated is disjoint. The four localized columns are now consecutive and in the original designated order. The rows $H,K$ remain consecutive. [step 2.1, step 2.2, step 3.1, construct, cases]

5.1 Apply [F3] or [F4] to this actual grid. Its hypotheses now hold literally. Lower partner heights are the cut rows below $H$, the unique upper partner is $i>K$, and the short $M$ has its original two endpoint rows. The certificates give genuine finite grid moves, not switches as extra primitives. In the overpassing case the four surviving localized columns end in order $L,Q,R,P$. The relative order of the lower incident pieces $L,Q,R$ is unchanged. In the underpassing case they end in order $L,M,B,R$, and the relative order of the lower incident pieces $L,B,R$ is unchanged. The unique upper incident piece is the same in either case. Rename the surviving crossing and cap levels $H,K$: the certificate inserts levels only immediately beside the interacting levels, so the new crossing remains above every lower cut and the cap below the upper cut. Every original marking outside the localized columns and interacting rows is transported exactly as asserted by those certificates. [F3, F4, step 4.1, construct, cases]

6.1 Check the cut rows after the certificate, since they cannot be dismissed as harmless without proof. At a lower cut row $j_C$, the jog joins its localized column to its lower anchor, which remains in the inactive list to the right of all four localized columns. A later lower localized piece starts at a strictly larger cut height and is absent at $j_C$; an earlier lower localized piece is to the left of $C$, in both the initial and final orders. A lower anchor with an earlier cut ends below $j_C$, and an anchor with a later cut lies after $C$'s anchor in the retained inactive order. The short $M$, when present, starts at $H>j_C$, and the upper-only piece $P$, when present, also starts at $H$. Upper anchors and old foreign columns are absent at all these cut heights. Thus no vertical segment lies in the interior of the cut row's horizontal interval. At the upper cut $i$, all other localized pieces end at or below $K$, all lower anchors end below $H$, and every old foreign upper interval begins at or above $K_+>i$; that jog is empty too. Each cut jog is monotone, because its two incident legs run respectively into the lower and upper parts of the same original oriented strand. All these statements remain true after the local column permutations, because the lower-piece order was retained in step 5.1. [step 2.2, step 3.1, step 4.1, step 5.1, construct, cases]

7.1 Every old horizontal row outside $H,K$ lies outside the localized vertical range, except for the newly inserted cut rows just checked. Its markings and crossing order therefore cannot acquire an extra crossing from the local certificates. Its old upper or lower continuation is carried by the same inactive anchor as before. The two interacting rows have exactly the cap and crossing patterns on the other side of the slide, by [F3] or [F4]. Consequently the output is a generalized bridge rectification: it has the original exterior bridge data, the desired new local bridge data, and only the empty monotone jogs of step 6.1. Its oriented strand incidence and crossing decorations agree with the desired second diagram. The ordered-graph bridge-isotopy construction in [F1] identifies these data; for regular jogs its exact extension is included in [F2]. [F1, F2, F3, F4, step 5.1, step 6.1, construct]

8.1 Remove all regular jogs using [F2]. It supplies an actual finite move sequence to an ordinary bridge-like grid of the second bridge-isotopy class. Finally [F1] connects that grid to any prescribed rectification of the second side, and likewise permits any initial rectification. Horizontal reflection of the finite coordinate recipes handles the opposite side, vertical reflection handles a minimum in place of a maximum, and reversal handles either time direction; these recipes preserve vertical-over data. The independent marking choices in [F3] and [F4] cover both orientations of both strands. We have used only proved local certificates, reversible marked jog refinements and disjoint commutations, so no planar-invariance or global-generation premise has entered the argument. [F1, F2, F3, F4, step 1.1, step 7.1, construct, cases] ∎
