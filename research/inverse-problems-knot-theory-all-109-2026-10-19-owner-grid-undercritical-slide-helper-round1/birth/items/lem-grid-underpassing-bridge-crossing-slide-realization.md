---
id: lem-grid-underpassing-bridge-crossing-slide-realization
kind: lemma
title: "A marked grid certificate for an underpassing bridge slide"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-grid-diagram-for-an-oriented-knot
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: four explicitly verified finite grid moves suffice. A shared-endpoint switch is decomposed, not assumed to be an allowed commutation."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Definitions3.1.6–3.1.10 and Exercise3.1.11, printed pp.46–48 (PDF pp.51–53); DefinitionB.4.11, printed p.390. The needed marked switch decomposition and underpassing slide certificate are proved locally."
---

## Statement

Use planar grid markings with horizontal orientation $O$ to $X$, vertical
orientation $X$ to $O$, and vertical segments over horizontal segments.
Allowed commutations exchange adjacent rows or columns whose closed marking
intervals are disjoint or one is contained in the interior of the other.
Stabilizations split a row and a column at a chosen marking into a
three-mark $2\times2$ block, with the chosen type twice, the other type once,
and one empty corner; every new row and column has one of each type.
Destabilizations are their inverses. A row exchange with a shared marking
column is not assumed to be an allowed commutation.

Suppose a finite grid has four consecutive columns $L,B,M,R$ and two
consecutive rows $H<K$. For $a\in\{O,X\}$, with $\bar a$ the opposite type,
its markings on those rows are exactly
$$H:\ (L,a),(M,\bar a),\qquad K:\ (M,a),(R,\bar a).$$
The other markings of $L,R$ lie below $H$. Column $B$ has its markings in
rows $D<H$ and $T>K$, in either orientation. Thus the capped strand runs
through the two horizontal segments $L$ to $M$ and $M$ to $R$, and is
underpassing at its crossing with $B$.

Four allowed grid moves produce a grid whose active column order is
$L,M,B,R$ and whose active rows have markings
$$H:\ (M,a),(R,\bar a),\qquad K:\ (L,a),(M,\bar a).$$
Its other markings are exactly those obtained by first exchanging columns
$B,M$ and then exchanging the contents of rows $H,K$. The latter
shared-endpoint row exchange is realized by a stabilization, one allowed
commutation, and a destabilization, rather than used as a primitive move.

More explicitly, first commute $B,M$. Insert a column $V$ immediately
right of $L$, between $L,M$, and a row $J$ between $H,K$, by stabilizing
at $(L,H)$. Then commute $J,K$ and destabilize the block in columns
$V,M$ and rows $H,K$. Delete the old column $M$ and old row $K$,
and rename $V$ as $M$ and $J$ as $K$. The complete certificate is:

| Stage | Active column order | Active row order | Marked rows |
| --- | --- | --- | --- |
| 0 | $L,B,M,R$ | $H<K$ | $H:(L,a),(M,\bar a)$; $K:(M,a),(R,\bar a)$ |
| 1 | $L,M,B,R$ | $H<K$ | Same labeled markings |
| 2 | $L,V,M,B,R$ | $H<J<K$ | $H:(V,a),(M,\bar a)$; $J:(L,a),(V,\bar a)$; $K:(M,a),(R,\bar a)$ |
| 3 | $L,V,M,B,R$ | $H<K<J$ | Same labeled markings as stage 2 |
| 4 | $L,M,B,R$ | $H<K$ | $H:(M,a),(R,\bar a)$; $K:(L,a),(M,\bar a)$ |

Initially $B$ crosses the lower segment on the left side of the capped
strand; finally it crosses the lower segment on its right side, and remains
overpassing. Both choices of $a$ and both orientations of $B$ are covered.
Reflecting the entire certificate in either coordinate axis supplies the
opposite-side and minimum versions without exchanging horizontal and
vertical segments or changing the overpassing convention.

This is a conditional local certificate with the stated adjacency and
partner-height hypotheses. Bringing arbitrary bridge approximations into
this form, and global grid-move generation, are separate assertions.

## Statement references

[[def-grid-diagram-for-an-oriented-knot]]

[Ozsvath, Stipsicz and Szabo, *Grid Homology for Knots and Links*, Exercise3.1.11 and AppendixB.4](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Facts & Assumptions

**Given:** The finite grid and its consecutive active columns, consecutive active rows, marked corners, and exterior-partner heights specified in the statement.

[F1] [[def-grid-diagram-for-an-oriented-knot]] supplies one marking of each type per row and column, horizontal orientation $O$ to $X$, vertical orientation $X$ to $O$, and vertical-over crossing data.

## Proof

1.1 In column $M$ the two markings lie at $H,K$. The interval $[H,K]$ lies strictly inside the interval $[D,T]$ of $B$, because $D<H<K<T$. Columns $B,M$ are adjacent. Their exchange is therefore an allowed nested-interval commutation, giving stage 1. It carries the whole column, including both exterior markings of $B$, and makes $L,M$ adjacent. No other mark changes its row. [F1, given, construct]

2.1 Stabilize the marking $a$ at $(L,H)$, inserting $V$ immediately right of $L$ and $J$ immediately above $H$. Put $a$ at $(L,J)$ and $(V,H)$, put $\bar a$ at $(V,J)$, and leave $(L,H)$ empty. Thus the new block has northwest $a$, northeast $\bar a$, southeast $a$, and empty southwest: it is an $a:\mathrm{SW}$ stabilization. The former other marking $(M,H)$ of row $H$ stays on that row, and the former other marking of column $L$ stays in that column. Row $H$ now has $(V,a),(M,\bar a)$; row $J$ has $(L,a),(V,\bar a)$; all columns and rows still contain one of each type. Row $K$ remains $(M,a),(R,\bar a)$. This proves stage 2 with column order $L<V<M<B<R$ and row order $H<J<K$. [F1, step 1.1, construct]

3.1 Rows $J,K$ are adjacent. Their closed horizontal intervals are $[L,V]$ and $[M,R]$. Since $L<V<M<R$, these are disjoint, including their endpoints. Their exchange is an allowed commutation. It gives stage 3, with row order $H<K<J$ and the same labeled marking pairs. This exchange uses no shared-endpoint interval rule. [step 2.1, construct]

4.1 At stage 3, columns $V,M$ are adjacent and rows $H,K$ are adjacent. In their block the northwest cell $(V,K)$ is empty; northeast $(M,K)$ and southwest $(V,H)$ have $a$; southeast $(M,H)$ has $\bar a$. The other marking of the two-row block is $\bar a$ at $(R,K)$, outside these two columns. The other marking of the two-column block is $\bar a$ at $(V,J)$, outside these two rows. This is an $a:\mathrm{NW}$ stabilization block in reverse. Contract it by deleting column $M$ and row $K$, retaining $a$ at the merged corner $(V,H)$, and moving the exterior block marking $(R,K)$ to $(R,H)$. The marking $(V,J)$ stays in column $V$. After renaming $V$ as $M$ and $J$ as $K$, the two rows are exactly $H:(M,a),(R,\bar a)$ and $K:(L,a),(M,\bar a)$. Each retains one $O$ and one $X$. [F1, step 2.1, step 3.1, construct]

5.1 The stabilization inserted $V$ between the adjacent columns $L,M$; deletion of the old $M$ makes $V$ occupy precisely that old column's rank. Similarly $J$ was inserted between the adjacent rows $H,K$, exchanged with $K$, and remains at the original $K$ rank after the old row $K$ is deleted. Therefore the three-move subcertificate changes no other row or column rank and realizes exactly the exchange of the two original row contents. Column $L$'s lower partner and column $R$'s lower partner stay fixed, while the only exterior displacement in the complete four-move certificate is the already specified exchange of columns $B,M$ in step 1.1. All untouched rows and columns retain their marking counts. This verifies the full exterior marking assertion, not merely the unmarked local arcs. [F1, step 1.1, step 2.1, step 4.1, construct]

6.1 In the initial column order $L<B<M<R$, column $B$ crosses the row-$H$ segment $[L,M]$, and lies outside the row-$K$ segment $[M,R]$. In the final order $L<M<B<R$, it crosses the row-$H$ segment $[M,R]$ and lies outside the row-$K$ segment $[L,M]$. Its interval still runs from below $H$ to above $K$, and it is over at both crossings by [F1]. The capped strand, whose exterior legs at $L,R$ end below $H$, is the underpassing height-critical branch in this pair of rectangular patterns. If $a=O$ it runs from the lower $L$ leg to the lower $R$ leg; $a=X$ reverses that direction. The types at every new corner were explicitly checked in steps 2.1 and 4.1, so either orientation of that strand and either choice of the two exterior types on $B$ works. Horizontal or vertical reflection preserves adjacency and strict containment or disjointness, and reflects each legal three-mark block to another legal stabilization block. Vertical segments remain vertical and overpassing. Thus the reflected opposite-side and minimum certificates are also valid; no equivalence from a grid to its own reflection and no axis-exchange shortcut is assumed. The four stated moves and all marking checks are finite, so no choice axiom is used. [F1, step 1.1, step 4.1, step 5.1, construct] ∎
