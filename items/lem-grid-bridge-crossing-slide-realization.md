---
id: lem-grid-bridge-crossing-slide-realization
kind: lemma
title: "A marked grid certificate for an over-arch crossing slide"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-grid-diagram-for-an-oriented-knot
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: the certificate consists of finitely many explicit row, column, and marking operations. No perturbation or general grid-generation theorem is assumed."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Definitions3.1.6–3.1.8, printed pp.46–47; AppendixB.4, FigureB.22 and proof of PropositionB.4.3, printed p.391 (PDF p.396). The coordinate and marking verification is supplied locally."
---

## Statement

Use planar grid markings with horizontal orientation from $O$ to $X$,
vertical orientation from $X$ to $O$, and vertical segments over horizontal
segments. An allowed commutation exchanges adjacent rows or columns when
their closed marking intervals are disjoint or one is contained in the
interior of the other. A stabilization splits a row and column through a
chosen marked cell into two each; its new $2\times2$ block has three
markings, with the chosen type twice, the other type once, and one empty
corner, and every new row and column again has one marking of each type.
Destabilization is the inverse operation.

Suppose a finite planar grid has four consecutive columns, labeled in order
$P,L,Q,R$, and two consecutive rows $H<K$. Its markings on those rows are
exactly
$$H:\ (P,b),(Q,\bar b),\qquad K:\ (L,a),(R,\bar a),$$
where $a,b\in\{O,X\}$ and a bar denotes the other type. The other marking
of column $P$ is in a row $T>K$; the other markings of columns $L,Q,R$
are in rows strictly below $H$. These hypotheses describe an overpassing
cap with columns $L,R$ and an underpassing segment from $P$ to $Q$,
crossing its left leg. Rows outside this specified pattern and columns
outside this consecutive block are arbitrary.

Insert a row $J$ immediately below $H$ and a column $U$ immediately to the
right of $Q$. There is the following certificate, where a column or row
label follows its markings under a commutation:

| Stage | Column order in the active block | Active row order | Operation from the preceding stage |
| --- | --- | --- | --- |
| 0 | $P,L,Q,R$ | $H<K$ | Initial pattern |
| 1 | $P,L,Q,U,R$ | $J<H<K$ | Stabilize at $(Q,H)$ |
| 2 | $P,L,Q,R,U$ | $J<H<K$ | Commute $U,R$ |
| 3 | $P,L,Q,R,U$ | $J<K<H$ | Commute $H,K$ |
| 4 | $L,Q,R,P,U$ | $J<K<H$ | Commute $P$ successively past $L,Q,R$ |
| 5 | $L,Q,R,P,U$ | $J<H<K$ | Commute $H,K$ |
| 6 | $L,Q,R,P$ | $J<K$ | Destabilize, deleting $H,U$ |

At stages 1–5 the active markings, with their row and column labels, are
$$H:\ (P,b),(U,\bar b),\quad J:\ (Q,\bar b),(U,b),\quad K:\ (L,a),(R,\bar a).$$
At stage 6 they are
$$J:\ (Q,\bar b),(P,b),\qquad K:\ (L,a),(R,\bar a).$$
All other markings are transported by the stated row or column operations.
Thus the final underpassing segment crosses the right leg of the cap.
The six displayed arrows are $S,C,C,C,C,S^{-1}$, with the fourth arrow
comprising three elementary commutations. All four choices of $(a,b)$ are
valid whenever the initial markings extend to the given oriented grid.
Applying horizontal or vertical reflection to the entire certificate gives
the corresponding opposite-side or minimum pattern, with vertical segments
still over.

This is a conditional finite grid certificate for the specified over-arch
patterns. It does not assert that every bridge approximation has these
adjacency hypotheses, or that a crossing slide whose height-critical branch
is underpassing has been treated.

## Statement references

[[def-grid-diagram-for-an-oriented-knot]]

[Ozsvath, Stipsicz and Szabo, *Grid Homology for Knots and Links*, FigureB.22](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Facts & Assumptions

**Given:** A finite grid with the consecutive-column, consecutive-row, marking, and exterior-partner hypotheses of the statement.

[F1] [[def-grid-diagram-for-an-oriented-knot]] supplies one $O$ and one $X$ per row and column, horizontal orientation $O$ to $X$, vertical orientation $X$ to $O$, and vertical-over crossing data.

## Proof

1.1 Coordinates in the table specify only the order of row and column levels. Replacing finitely many distinct levels by their ranks does not change the marked grid, so the table can be checked using any increasing real coordinates. The other markings in columns $P,L,Q,R$ have complementary types $\bar b,\bar a,b,a$ respectively by [F1]. The new row $J$, being inserted immediately below $H$, remains above all three lower partner rows. The top partner row $T$ remains above $K$ and $H$ throughout the indicated row interchanges. [F1, given, construct]

2.1 Stabilize the marking $\bar b$ at $(Q,H)$ by replacing it with $\bar b$ at $(U,H)$, $\bar b$ at $(Q,J)$, and $b$ at $(U,J)$. The cell $(Q,H)$ is empty. In the block with north row $H$, south row $J$, west column $Q$, and east column $U$, its northwest cell is empty, northeast and southwest have $\bar b$, and southeast has $b$. Row $H$ still pairs $b$ with $\bar b$, row $J$ pairs $\bar b$ with $b$, column $Q$ still pairs $\bar b$ with its unchanged exterior $b$, and column $U$ pairs $\bar b$ with $b$. All other rows and columns retain their two types. This is exactly a stabilization of type $\bar b:\mathrm{NW}$ and gives stage 1. [F1, step 1.1, construct]

3.1 At stage 1, the closed vertical interval of $U$ is $[J,H]$. The interval of $R$ starts at its lower partner row and ends at $K$. Its endpoints satisfy $\text{lower partner}<J<H<K$, so $[J,H]$ lies strictly inside it. The two columns are adjacent by their order in the table. Their exchange is an allowed nested-interval commutation and gives stage 2. This reasoning does not depend on either marking type. [step 1.1, step 2.1, construct]

4.1 At stage 2, row $H$ has endpoints $P,U$ and row $K$ has endpoints $L,R$. The column order is $P<L<Q<R<U$, so $[L,R]$ lies strictly inside $[P,U]$. The rows are adjacent. Their exchange is therefore an allowed nested-interval commutation, giving stage 3. [step 2.1, step 3.1, construct]

5.1 At stage 3 the vertical interval of $P$ is $[H,T]$. Those of $L,R$ end at $K<H$, and that of $Q$ ends at $J<H$; all begin at their lower partner rows. Hence each is disjoint as a closed interval from $[H,T]$. Commute $P$ with its adjacent neighbor $L$, then with $Q$, then with $R$. At each exchange these same labeled intervals remain disjoint, and the adjacent-column orders are successively $L,P,Q,R,U$, $L,Q,P,R,U$, and $L,Q,R,P,U$. This proves the fourth table arrow as three allowed commutations, not a single nonadjacent-column move. [step 1.1, step 2.1, step 4.1, construct]

6.1 At stage 4 the closed horizontal intervals of rows $K,H$ are respectively $[L,R]$ and $[P,U]$. The column order $L<Q<R<P<U$ makes them disjoint, including their endpoints. They are adjacent rows. Their exchange is an allowed disjoint-interval commutation and gives stage 5, with $J<H<K$. [step 2.1, step 5.1, construct]

7.1 At stage 5 the adjacent rows $J,H$ and adjacent columns $P,U$ contain $b$ in $(P,H)$ and $(U,J)$, $\bar b$ in $(U,H)$, and an empty $(P,J)$. The other marking in row $J$ is $\bar b$ in column $Q$ outside this block, and the other marking in column $P$ is $\bar b$ in row $T$ outside it. Thus this is a $b:\mathrm{SW}$ stabilization block in reverse. Contract it, deleting row $H$ and column $U$, and put $b$ in $(P,J)$. The remaining marking $(Q,J)$ has type $\bar b$. Every retained row and column again has one marking of each type. This proves stage 6 and the claimed finite move word. The only altered exterior coordinates are exactly those moved by the stated full row and column exchanges; nothing about arbitrary exterior markings was assumed. [F1, step 1.1, step 2.1, step 6.1, construct]

8.1 Initially the horizontal $H$ segment between $P$ and $Q$ crosses column $L$, whose upper endpoint is at $K>H$, but not column $R$. Finally the $J$ segment between $Q$ and $P$ crosses column $R$, whose upper endpoint is at $K>J$, but not $L$. The overpassing cap consists of the vertical legs $L,R$ and their horizontal segment at $K$; the relative order of the three lower legs $L,Q,R$ is retained. If $a=O$ the cap is oriented from its left lower leg to its right lower leg, and if $a=X$ the direction reverses. If $b=O$ the other strand enters from row $T$ and exits down column $Q$, and if $b=X$ this direction reverses. Every new corner's type is already prescribed in steps 2.1 and 7.1, so these four orientation cases require no unmarked or unoriented identification. Reflecting the entire labeled certificate horizontally or vertically preserves adjacency, disjointness, and strict interval containment and takes a three-mark stabilization block to another allowed such block. It also preserves which segments are vertical and hence which are over. It therefore supplies the stated opposite-side and minimum certificates; this does not assert a grid-move equivalence from a grid to its own reflection. Axis exchange is not used. The result is precisely the conditional finite certificate stated, with no claim about underpassing critical branches or general bridge rectification. Every operation is finite and needs no choice axiom. [F1, step 2.1, step 7.1, construct] ∎
