---
id: lem-grid-reidemeister-moves-with-arbitrary-exterior
kind: lemma
title: "Relative grid realizations of Reidemeister moves"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-oriented-reidemeister-moves
  - lem-grid-local-reidemeister-realizations
  - lem-grid-regular-jog-refinements
  - lem-grid-bridge-like-refinement
  - lem-planar-isotopy-preserves-grid-move-class
dependency_level: 5
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
      locator: "Appendix B.4, last paragraph of Theorem B.4.1; relative approximation and exterior fitting supplied locally"
---

## Statement

Assume countable choice. Suppose two nonempty oriented decorated planar diagrams differ by one Reidemeister move inside a disk, retaining the entire exterior and its boundary incidence. Each endpoint admits a bridge representative in its decorated planar-isotopy class. Let $D_0^\prime,D_1^\prime$ be any bridge diagrams planar isotopic to the respective endpoints. Then any bridge-like grid rectifications of $D_0^\prime,D_1^\prime$ are connected by finitely many marked grid stabilizations, legal commutations and destabilizations. All signs, strand orientations and consistent strict over/under orders of R3 are included. The exterior diagram is arbitrary. A legal commutation exchanges adjacent rows or columns whose closed marking intervals are disjoint or strictly nested; a stabilization is a three-mark two-by-two split preserving one mark of each type in each row and column. No shared-endpoint switch is assumed as a primitive move. The conclusion uses no global grid-isotopy generation theorem.

## Statement references

[[def-countable-choice]]

[[def-oriented-reidemeister-moves]]

[[lem-grid-local-reidemeister-realizations]]

[[lem-grid-regular-jog-refinements]]

[[lem-grid-bridge-like-refinement]]

[[lem-planar-isotopy-preserves-grid-move-class]]

## Facts & Assumptions

**Given:** The two oriented diagrams, the isolated Reidemeister disk and its fixed decorated exterior, and prescribed rectifications of bridge representatives of the two endpoint planar classes.

[F1] [[lem-grid-local-reidemeister-realizations]] supplies finite marked rectangular R1/R2/R3 certificates with exact endpoint markings, all orientation/sign variants, and disjoint-or-strictly-nested commutation tests.

[F2] [[lem-grid-regular-jog-refinements]] inserts an empty monotone jog at any interior height of a vertical piece by an explicit stabilization and short-row sweep, on either side, with its marking table.

[F3] [[lem-grid-bridge-like-refinement]] refines every nonempty grid by actual grid moves to a bridge-like grid and preserves the decorated planar-isotopy class after smoothing.

[F4] [[lem-planar-isotopy-preserves-grid-move-class]] identifies all grid rectifications of planar-isotopic bridge diagrams using actual grid moves.

## Proof

1.1 First choose the finite local rectangular tangle of [F1] for the specified move. Its strands and boundary cyclic order are those of the given Reidemeister disk: the R1 model is one immersed arc with one kink, R2 has a single excursion across the other arc and back, and R3 has the top, middle and bottom arcs with the same three pairwise boundary incidences. The variants in [F1] include their reverse boundary cyclic orders and all oriented decorations. Extend the local tangle slightly along its boundary arcs so that its ends are vertical and its horizontal joins lie strictly inside a rectangle $B=[c,d]\times[a,b]$; the vertical ends meet only the top or bottom of $B$. This can be done in disjoint boundary collars: continue each rectangular leg until its first horizontal turn is inside $B$, and put its next vertical end at the boundary. Preserve the cyclic order of these ends. An order-preserving matching of finitely many boundary ports extends to a smooth increasing angular map of their boundary circles: interpolate with positive derivative in the gaps, then interpolate its angular lift with the identity. Applying that map in a boundary collar matches the old and new attachment ports. The chosen local model and the given local diagram are planar equivalent as decorated arcs relative to their boundary incidence: straighten their finitely many embedded edge strips, match their small crossing disks using the same branch order, and interpolate monotonically across the intervening empty strips. Thus one may attach the original exterior to this rectangular tangle without changing the planar class on either side of the move. Only the local tangle, and not the exterior, is replaced at this stage. [F1, given, construct, cases]

1.2 We give the relative rectangular extension used for that attachment. A finite smooth decorated diagram outside the fixed tangle can be made rectangular without adding crossings, while keeping the tangle and its short vertical boundary collars fixed. Choose disjoint small disks at its finitely many exterior crossings, and in each use the two transverse branches as local coordinates. Replace their smaller cores by a horizontal underpassing segment and a vertical overpassing segment, attaching in the annular collars in the same four-sector order. This is a plane isotopy of the decorated crossing: the local coordinate diffeomorphism matches the two crossing arcs, and the four remaining disjoint edge strips extend the matching by increasing interval coordinates. The remaining finitely many embedded arcs have disjoint thin neighborhoods, except for their prescribed end collars. Subdivide each arc into finitely many patches in which one Cartesian coordinate is strictly monotone. Inside such a patch approximate its graph by a finite orthogonal staircase with the same end collars: choose a sufficiently fine partition in the monotone coordinate, put each horizontal or vertical step inside the corresponding small graph rectangle, and connect consecutive steps there. Rectangles of nonadjacent subarcs can be chosen disjoint by compact separation. At a common end use a smaller empty patch to connect the two paths, removing immediate backtracking. Round the staircase slightly to be a graph in that patch. Linear interpolation of its graph function with the old graph, in a smaller graph strip, is an isotopy; increasing transverse-coordinate maps extend it to the strip and are the identity at its boundary. These finitely many strip isotopies establish the asserted planar equivalence, not merely a close approximation. No path enters $B$ except its prescribed end collar. [given, construct]

2.1 Choose all newly introduced horizontal levels and vertical columns distinct from each other and from the finitely many fixed model levels and columns, except when they are portions of the same straight piece. The staircase construction permits this: make each new turn inside an open empty patch, choose its coordinate avoiding a finite set, and keep successive coordinates within that patch; combine consecutive collinear pieces first. The fixed vertical end collars extend only until their first exterior turn, so each continues its one fixed model column, rather than creating another segment in that column. No two such fixed continuations have the same column. Likewise each fixed model horizontal join remains its sole segment at its level. Consequently every horizontal segment has its own row and every vertical segment its own column. Orient the resulting closed orthogonal curves. At each corner put $O$ when the outgoing edge is horizontal and $X$ when it is vertical. Along every horizontal edge the initial mark is $O$ and terminal mark $X$, and along every vertical edge they are $X,O$; this is independent of the directions left/right or up/down. Thus there is one mark of each type in every row and column. The model's marks agree with these because its oriented certificate uses exactly the same convention. The result is an actual grid $G$ extending the chosen local tangle, with its original exterior planar diagram, not just an unmarked rectangular picture. [F1, step 1.2, construct]

3.1 We now make the required model rows and columns consecutive by actual moves. All model horizontal joins lie in the interior of $B$ and all model vertical pieces meeting its height band are the designated pieces. A foreign vertical column between the extreme model columns therefore has interval entirely below $a$ or entirely above $b$: its connected vertical segment lies outside $B$. Cut each designated piece that exits below $B$ at a distinct height in the empty gap immediately below $a$, choosing the cuts strictly increasing in left-to-right column order. Insert its lower anchor immediately to its right by [F2]; the original column retains only the upper localized piece. Cut each piece exiting above $B$ in the gap immediately above $b$, with cut heights strictly decreasing in left-to-right order. Use the reflected upper-end version of [F2], retaining the lower localized piece and putting its upper anchor immediately to its right. Explicitly, at an upper endpoint $(P,T,d)$ introduce $i<T$ and its right neighbor $Q$, remove that mark and put $(P,i,d),(Q,i,\bar d),(Q,T,d)$; the empty northwest block is a legal stabilization, and the short row sweeps down by the adjacent-column disjoint-or-nested test of [F2]. All cuts can be chosen nearer to $[a,b]$ than every foreign old endpoint level, since there are finitely many. [F2, step 2.1, construct]

4.1 Stable-sort the localized model columns together to the left of the intervening inactive columns, retaining the orders in each list. Every inversion is disjoint. A foreign old column ends below every lower cut or starts above every upper cut. A lower anchor for an earlier model column ends below the lower endpoint of any later model column that exits downward, by increasing lower cuts; a later model column that does not exit downward starts inside $[a,b]$ instead. An earlier upper anchor starts above the endpoint of any later model column that exits upward, by decreasing upper cuts; a later column not exiting upward ends inside the band. Hence each adjacent exchange is a legal disjoint-column commutation. The localized columns now have exactly their model adjacency. A foreign row inside $[a,b]$ has its whole horizontal segment to the left or to the right of $B$, because the extended exterior avoids $B$; its interval is therefore disjoint from every model horizontal join. Clear such foreign rows from between the model levels by adjacent row commutations, retaining their relative order. The localized column sorting has kept the model columns inside their original extreme column span and has changed no endpoint of these foreign rows; those disjointness tests remain valid. The model rows required in [F1] are now consecutive. The added cut rows are outside their band. The fitted input still has the old decorated planar class: cutting introduces a monotone empty jog, and the disjoint column and row sweeps move only disjoint height pieces or disjoint horizontal joins. Their crossing lists and cyclic vertex orders are unchanged; increasing graph-coordinate maps on the empty strips, as constructed in step 1.2, give plane isotopies. [step 3.1, construct, cases]

5.1 Apply the exact finite certificate of [F1]. All its hypotheses hold literally in this grid. The cut rows supply the exterior endpoints of the long local columns where required; short internal columns and their endpoint rows are unchanged. The certificate fixes all exterior marked incidence and preserves the boundary order of both the upper and lower emerging pieces, since it is the stated Reidemeister tangle relative to its boundary. The cut joins remain empty monotone jogs: at a lower cut, earlier lower localized pieces lie to its left, later ones start higher, earlier lower anchors have already ended and later anchors lie beyond its anchor. Upper anchors are absent there. At an upper cut the reversed height ordering gives the same check: earlier upper localized pieces lie to its left, later ones end lower, earlier upper anchors have not started and later anchors lie beyond its anchor. Lower anchors are absent there. Foreign old columns miss all these cut heights. These assertions hold before and after the local certificate because the boundary orders are retained. Thus smoothing the output gives exactly the second Reidemeister diagram with the same exterior, plus these monotone jogs; no extra crossing is introduced by fitting or by the certificate. [F1, step 3.1, step 4.1, construct, cases]

6.1 Refine both the fitted input and its output using [F3]. Their smoothings are planar isotopic to the originally prescribed two endpoint diagrams by the relative construction just proved and the planar-isotopy clause of [F3]. The refinements themselves are grid moves. The arbitrary prescribed bridge rectifications connect to these two refined grids by [F4]. Concatenate the reverse first refinement, the fitted local certificate, the second refinement, and the endpoint identifications. This gives a finite sequence from any prescribed initial rectification to any prescribed final rectification. The model choice in [F1] covers every allowed sign and orientation, and all fitting arguments depended only on ordered empty collars and finite exterior separation. This proves the full assertion with arbitrary exterior data. [F1, F3, F4, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 5.1, construct] ∎
