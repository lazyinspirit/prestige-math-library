---
id: lem-grid-local-reidemeister-realizations
kind: lemma
title: "Explicit marked grid models for all three Reidemeister moves"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-grid-diagram-for-an-oriented-knot
  - def-oriented-reidemeister-moves
dependency_level: 1
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
      locator: "Appendix B.4, Figure B.23 and the last paragraph of Theorem B.4.1"
---

## Statement

Use oriented marked grids with vertical segments over horizontal ones. A stabilization splits one row and column through a chosen marking into a three-mark two-by-two block: the chosen type occurs twice at opposite corners, the other type once, and the last corner is empty; one mark of each type remains in every row and column. A commutation exchanges adjacent rows or columns with disjoint or strictly nested closed marking intervals. In the patterns below $\bar a$ denotes the other type from $a\in\{O,X\}$, and all unspecified markings belong to an arbitrary valid exterior grid.

The following are marked grid certificates for R1, R2 and R3, respectively.

* R1: choose a corner $(P,H)$ of type $a$, its row partner $(B,H)$ of type $\bar a$ with $P<B$, and its column partner $(P,T)$ with $H<T$. Insert $C$ immediately left of $P$ and $H'$ immediately above $H$. Replace the old row marks by $(P,H,a),(C,H,\bar a),(C,H',a),(B,H',\bar a)$. This one stabilization inserts one Reidemeister kink, up to planar isotopy.
* R2: suppose $P,R$ are adjacent columns in that order, $K<H$ are consecutive rows, and the closed vertical interval of $P$ has endpoints $V<K<H<T$. Column $R$ has endpoints $K,H$. The row marks are $H:(A,a),(R,\bar a)$ and $K:(D,\bar a),(R,a)$, where $A,D<P$, the other endpoint of $A$ is above $H$, and that of $D$ is below $K$. Commuting $P,R$ removes the two crossings of $P$ with these rows and realizes R2.
* R3: suppose $P,R$ are adjacent columns in that order and $K<L<H$ are three consecutive rows. Column $P$ has endpoints $V<K<H<T$, and column $R$ has endpoints $K,H$. The row marks are $H:(A,a),(R,\bar a)$, $K:(R,a),(C,\bar a)$ and $L:(D,b),(E,\bar b)$, with $D<A<P<R<C<E$. The other endpoint of $A$ is above $H$, and that of $C$ is below $K$. Commuting $P,R$ realizes R3: the crossing between the top strand $P$ and the middle strand moves from row $H$ to row $K$, while the two crossings with the bottom strand in row $L$ change order.

In R2 and R3 the two types on column $P$ may be chosen in either order, subject to being part of the given grid. All indicated orientation choices, both directions of each move, and the horizontally and vertically reflected coordinate recipes are allowed. These models include every local sign/orientation variant of R1 and R2 and every consistent strict over/under height order and orientation variant of R3. The assertion is about these explicit finite models; a relative rectangularization placing an arbitrary surrounding diagram into their adjacency patterns is a separate obligation.

## Statement references

[[def-grid-diagram-for-an-oriented-knot]]

[[def-oriented-reidemeister-moves]]

## Facts & Assumptions

**Given:** A valid finite marked grid satisfying one of the indicated patterns, with the specified local definitions of stabilization and commutation.

[F1] [[def-grid-diagram-for-an-oriented-knot]] supplies the row $O$-to-$X$, column $X$-to-$O$, and vertical-over conventions.

[F2] [[def-oriented-reidemeister-moves]] includes both kink signs, all orientations of R1/R2, and all orientation variants of R3 with a consistent strict top/middle/bottom order; the cyclic over/under triangle is excluded.

## Proof

1.1 In R1 the stabilization block has north row $H'$, south row $H$, west column $C$, east column $P$. Its northwest and southeast corners have $a$, its southwest has $\bar a$, and its northeast is empty. The chosen original mark $a$ at $(P,H)$ is retained and duplicated at $(C,H')$; its old row partner moves from $(B,H)$ to $(B,H')$. Column $P$ keeps its exterior $\bar a$ at $T$, and column $B$ keeps its exterior $a$. Thus every new and retained row and column has exactly one mark of each type. This is a legitimate stabilization, including the relocated exterior row partner. [F1, given, construct]

1.2 In R2, $[K,H]$ is strictly contained in $[V,T]$. Therefore the adjacent-column exchange is legal. In the narrow vertical strip containing $P,R$, initially each row $H,K$ extends from a column left of $P$ to $R$, and so crosses $P$ once. Their pieces join through the vertical segment $R$; the other incoming leg at $A$ extends upward and the outgoing leg at $D$ downward. Thus these two rows and column $R$ form one strand making a horizontal excursion across $P$ and back, while $P$ is over at both crossings. After the exchange their endpoints at $R$ lie left of $P$, and both crossings disappear. There are no other horizontal levels between $K,H$, so the excursion bounds an empty bigon in this narrow strip. This is exactly the two-strand R2 removal. [F1, F2, given, construct]

1.3 In R3 the same strict interval containment makes the column exchange legal. Initially row $H$ runs from $A<P$ to $R$ and crosses $P$ once, while row $K$ runs from $R$ to $C$ and does not cross $P$. Row $L$ runs from $D$ to $E$ and crosses both $P,R$. It meets neither vertical leg at $A,C$, because the $A$ leg lies above $H$ and the $C$ leg below $K$. Hence in this strip there are exactly three crossings: $P$ over the middle strand in row $H$, $P$ over the bottom row $L$, and the middle vertical strand $R$ over that bottom row. After the exchange, row $H$ no longer crosses $P$, row $K$ does cross it, and the bottom row crosses the now reversed column order $R,P$. The three over/under relations are unchanged. [F1, given, construct]

2.1 The R1 model’s unoriented local path runs down $P$ from $T$ past level $H'$ to $H$, left to $C$, up to $H'$, and right past $P$ toward $B$. The new row at $H'$ crosses $P$ exactly once. The short return path through $C$ and row $H$ contains no other column or row level, so it encloses an otherwise empty small kink. Other old columns that crossed the original segment between $P,B$ also cross the slightly displaced segment at $H'$: their endpoint levels are not strictly between these consecutive levels. No other old row is crossed by moving the endpoint in column $B$. Consequently all exterior changes are planar displacements in an empty thin strip and preserve their crossings, while the neighborhood of $P,H$ undergoes precisely R1. If $a=O$, traversal down $P$ encounters the overpassing branch first; if $a=X$, traversal is reversed and the underpassing branch is encountered first. [F1, F2, step 1.1, construct, cases]

2.2 The two R2 crossings have opposite signs: along the excursion the two horizontal traversals have opposite horizontal directions, whereas the oriented direction of the vertical $P$ strand is fixed. Reversing either strand reverses both signs and preserves their opposition. The variable $a$ reverses the excursion orientation, and the two choices of top/bottom type in column $P$ reverse the other strand. These are the four independent orientation patterns. Exterior rows above $H$ or below $K$ do not meet the short column $R$; moving the adjacent long column $P$ across that absent short segment there changes no crossing. The endpoints of rows $H,K$ on other old columns do not move. Hence all other changes are planar displacements, with no extra local Reidemeister event. [F1, step 1.2, construct, cases]

2.3 These are the two sides of R3, not merely two diagrams with three crossings. In the narrow strip the top arc is $P$, the middle arc enters along $H$, turns down $R$, and exits along $K$, while the bottom arc passes straight across at $L$. The column exchange transfers the top-middle crossing from above the middle-bottom crossing to below it and interchanges their positions along the bottom arc. They bound the usual empty triangular region before and after the slide. There are no further horizontal levels between $K,H$ and no further vertical column between $P,R$. Thus its interior contains no other local strand or vertex. Any crossings of the long row portions outside this strip are unchanged, as are all exterior rows where $R$ is absent. This is exactly the R3 of [F2] with top $P$, middle $R$-excursion, and bottom row $L$. [F2, step 1.3, construct]

3.1 Every marking table in R3 extends both orientations of each of these three arcs independently whenever the exterior grid does: the choice of $a$ reverses the middle arc, the choice of $b$ reverses the bottom arc, and the type at the upper endpoint of $P$ reverses the top arc. The two marks on each of rows $H,K,L$ and on column $R$ remain complementary, so this is a marked certificate for all eight orientation patterns. An R3 crossing pattern has exactly one top, one middle and one bottom arc by [F2]; assigning them these roles treats every strict height order of the original named strands. The three pairwise crossing arcs have cyclically alternating endpoints on the local boundary. Up to cyclic starting point there are only the two opposite cyclic orders of their three names; the reflected recipe treats the other order. Thus no allowed height-order or local endpoint-order case is excluded. The cyclic over/under pattern would have no top arc and is not an R3 in [F2]. [F1, F2, step 1.3, step 2.3, construct, cases]

4.1 Finally reflection of a whole coordinate recipe in either axis preserves adjacent levels, disjointness and strict containment of intervals, and takes an allowed three-mark stabilization block to another such block. It preserves vertical-over crossings. It gives recipes for the opposite local side and for a minimum in place of a maximum, without asserting that a grid is move-equivalent to its reflection. A single reflection reverses crossing signs, so the two kink signs in R1 and both sign orders in R2 are included. Together with the orientation reversals checked in steps 2.1, 2.2 and 3.1, this exhausts the variants specified in [F2]. Reversing each listed grid operation gives the reverse Reidemeister move. This proves exactly the finite pattern assertions; no claim about constructing their relative exterior fit has been used. [F1, F2, step 1.1, step 2.1, step 1.2, step 2.2, step 2.3, step 3.1, construct, cases] ∎
