---
id: lem-conway-has-an-explicit-zero-trace-partner-with-s-two
kind: lemma
title: "An explicit alternate Conway zero-trace partner has Rasmussen invariant two"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 12
deps:
  - def-piccirillo-conway-pair
  - lem-piccirillo-knot-lee-computations
  - def-countable-choice
  - def-handle-slide-of-one-k-handle-over-another
  - lem-handle-slides-preserve-the-relative-diffeomorphism-type
  - lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type
  - thm-handle-cancellation
  - alg-khovanov-chain-complex-from-diagram
  - def-lee-deformed-khovanov-complex
  - lem-lee-filtered-spectral-sequence-and-two-orientation-classes
  - def-rasmussen-s-invariant
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Lisa Piccirillo, The Conway knot is not slice"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v191-n2-p05-s.pdf"
      locator: "Figure 4 supplies the initial marked panels; the alternate final two bands and exact arithmetic below are independently constructed"
    - title: "Dirk Schuetz, KnotJob, author-distributed program and source"
      url: "https://www.maths.dur.ac.uk/users/dirk.schuetz/KnotJob.zip"
      locator: "Exact rational unreduced calculation on the explicitly specified alternate PD, using -ku1 and -s0"
---

## Statement

Assume countable choice. Let $C$ be the Conway knot specified in [[def-piccirillo-conway-pair]], and let $Q$ be the oriented knot with the following counterclockwise incoming-under PD (equal labels are joined):
$$[(38,82,39,81),(106,79,107,80),(57,81,58,80),(72,84,73,83),(91,82,92,83),(77,61,78,60),(78,103,79,104),(70,53,71,54),(44,73,45,74),(26,75,27,76),(7,77,8,76),(64,98,65,97),(52,69,53,70),(1,67,2,66),(32,67,33,68),(59,19,60,18),(37,56,38,57),(15,59,16,58),(50,96,51,95),(43,91,44,90),(28,47,29,48),(5,49,6,48),(42,23,43,24),(41,11,42,10),(31,97,32,96),(22,12,23,11),(12,22,13,21),(104,17,105,18),(9,88,10,89),(3,98,4,99),(84,46,85,45),(86,26,87,25),(93,55,94,54),(85,75,86,74),(87,8,88,9),(4,30,5,29),(51,34,52,35),(68,33,69,34),(94,36,95,35),(14,40,15,39),(99,47,100,46),(100,28,101,27),(101,6,102,7),(102,62,103,61),(65,3,66,2),(63,30,64,31),(62,49,63,50),(19,40,20,41),(20,14,21,13),(24,90,25,89),(55,109,56,108),(16,105,17,106),(92,109,93,0),(36,108,37,107),(71,1,72,0)].$$
Then there is an orientation-preserving smooth diffeomorphism $X_0(C)\cong X_0(Q)$ and the rational Lee filtration levels of $Q$ are $1,3$, so $s(Q)=2$. No identification of $Q$ with the named Figure 2 partner is part of this assertion.

## Facts & Assumptions

**Given:** Countable choice and the two specified finite diagrams.

[A1] [[def-countable-choice]] is assumed.

[F1] [[def-piccirillo-conway-pair]] specifies the literal Conway Figure 1 diagram. Its explicit eleven-crossing transcription, crossing centers and complete visit word are supplied by the direct Figure 1 calculation in [[lem-piccirillo-knot-lee-computations]], Proof 1.1. Only that diagram transcription is used in the trace construction, rather than an identification by an invariant.

[F2] [[def-handle-slide-of-one-k-handle-over-another]] and [[lem-handle-slides-preserve-the-relative-diffeomorphism-type]] supply framed equal-index slides and their relative diffeomorphisms.

[F3] [[lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type]] extends an isotopy of the complete framed attaching regions to a diffeomorphism of the attachments.

[F4] [[thm-handle-cancellation]] cancels an actual one-intersection consecutive pair. Its Proof 2.1 localizes the old-boundary support in the tube about the outside attaching arc together with the two feet.

[F5] [[alg-khovanov-chain-complex-from-diagram]] and [[def-lee-deformed-khovanov-complex]] give the normalized rational cube and its Lee perturbation. The zero smoothing joins PD positions $(0,1),(2,3)$ and the one smoothing joins $(0,3),(1,2)$.

[F6] [[lem-lee-filtered-spectral-sequence-and-two-orientation-classes]] and [[def-rasmussen-s-invariant]] give the two limiting knot levels, their difference two, and $s=s_{max}-1=s_{min}+1$. The possible nonzero Lee differentials change homological degree by one and quantum degree by $4k$, $k\ge1$.

[F7] The finite data used below are in the accompanying family file `alternate-trace-certificate.json.gz`, with its executable `verify-alternate-trace.py`. It contains all input PDs, every intermediate cyclic adjacency/under-over/color graph of the selected moves, explicit band polygons and ancestry, the I/J context map and cap coordinates, and the directly bound rational input/output. These are finite encodings, not additional topological assumptions. The proof describes their geometric interpretation.

## Proof

1.1 Interpret each finite movie in [F7] geometrically. Its records retain all four cyclic halfports, crossing height and component names. The checker verifies the actual monogon, opposite bigon, triangular-face and same-face premises for the indicated Reidemeister moves, and checks the complete resulting graph and every seam. A constant-over or constant-under record consists of a simple successive overstrand or understrand and the recorded simple dual-face replacement path: raise the arc into an empty upper slab or lower it into an empty lower slab, isotope the two boundary-parallel arcs there relative to their endpoint collars, and return. A finite polygonal sweep realizes this as an ambient isotopy. An orientation-preserving ribbon isomorphism at a seam is a planar isotopy of the finite projection graph, retaining every underpass; no reflection is permitted. Extend each motion to a sufficiently small normal tube and use [F3]. Thus every selected record is an actual framed attaching isotopy. The deterministic replay checks 2,129 such moves on their directly specified inputs; it compares complete diagrams, not invariants. [A1, F3, F7, construct]

2.1 Begin with source panel $F$: dotted red $R$, zero-framed green $G$, zero-framed blue $B$. Its complete 36-crossing PD has 16 blue self-crossings, 18 blue/red crossings and two green/red crossings, and no others. The actual red projection is simple, and green is its tiny meridian: choose disks $D_R,D_G$ meeting along a single radial slit, with $G\cap D_R$ one point, while $D_G$ misses the entire blue framed tube. To justify the initial cancellation, put blue transverse to $D_R$. At each blue puncture $p$, take a thin green zero-parallel bounding $D_G'$ disjoint from blue; its slit in $D_R$ is parallel to the fixed slit. The disk minus these two radial slits is connected. A simple disk arc from $p$ to the new puncture, avoiding the slits and all other punctures, thickens to an untwisted blue-over-green band. Push its new product arch across the empty bigon to the other side of $D_R$. This reduces the actual puncture count by one and preserves disjointness from $D_G$. Induction clears the finite set, so [F4] cancels $R,G$ off the blue tube. After these components are forgotten, each band together with $D_G'$ is an embedded product bigon disjoint from the current blue tube; reversing these disk pushes identifies the remaining blue knot with the original literal blue $B$. Because $f(G)=\operatorname{lk}(B,G)=0$ throughout, its transported framing stays zero. The input-bound 98-move blue movie and the 7-move source-Conway movie in [F7] identify this $B$ with the eleven-crossing Figure 1 input. The latter has visit word $U2,O8,U7,U11,O10,O9,U6,O2,U5,O7,U9,O6,U8,O5,O4,U3,O1,U4,O11,U10,O3,U1$ in the literal crossing-center order, so it is the specified $C$. Thus the $F$ handlebody is $X_0(C)$. [A1, F1, F2, F3, F4, F7, step 1.1, construct]

3.1 The two early moves across dotted red are outgoing-boundary isotopies, as follows. The boundary of the dotted unknot is zero surgery on $R$. In its added solid torus the zero longitude $R_0$ bounds the new meridian disk. This disk together with an untwisted blue-to-$R_0$ band is a bigon whose interior misses the old-exterior link. Its product neighborhood supplies an isotopy of the full blue attaching tube, fixing green and its parallel. For $F$, use the inward red zero-parallel at distance 8 in the recorded padded source coordinates, cut it and blue at heights 1017 and 1027, and join equal-height ends horizontally. The full 56-crossing output has an input-bound 255-move marked isotopy to panel $G$. Here $\operatorname{lk}(B,R)=-1$ and the band adds $+R_0$, so the blue integer changes from $0$ to $-2$. In $G$ use the outer red zero-parallel at distance 8 and heights 1272,1282. This band adds $-R_0$, and the recorded 69-move marked isotopy gives $H$, restoring the blue integer to zero. Indeed expansion of the pushed-off untwisted band gives $f(B\mathbin{\#}\epsilon R_0)=f(B)+2\epsilon\operatorname{lk}(B,R)$: the two parallel band rectangles cancel and the two cross-linking terms agree. Green remains zero during each cap push, and its full parallel travels during each whole-link redraw. These actual attaching isotopies preserve the handlebody by [F3]. [F3, F7, step 2.1, construct, algebra]

4.1 The 149-move marked movie in [F7] carries $H$ to $I$. The next $I\to J$ step has the following explicit relative proof. Remove the green fingers with crossing labels $\{24,25,26,27,28,29\}$ in $I$ and $\{0,14,28,29,33,34\}$ in $J$, smoothing the retained branches and using the literal disjoint short cap at the tails. The resulting 29-crossing contexts have the recorded unique orientation-preserving ribbon isomorphism, including the cap edge $(17,1)$--$(18,1)$. Each finger has two simple parallel under-band sides and a positive blue meridian head; its under-crossings occur in reversed pairs on the same retained edges. Under the full context map the blue meridian positions are opposite blue halfedges at the single crossing $J19$, where blue is under red. Slide the head along the blue product tube below that red overpass. Lower both side strips into an empty lower slab; their simple planar cores straighten by finite product-disk pushes relative to the endpoint collars, and then reverse this straightening to the target strips. All retained context stays above the support. This carries the actual entire finger and its normal strip and proves $I\to J$ as a marked attaching isotopy. The exact incidence table, the absence of extra short-cap crossings, and all reversed pairs are included in [F7]. [F3, F7, step 3.1, construct]

5.1 In $K$, perform three reverse ordinary green-over-blue slides: use green paths 18,19,20 cut at heights 1500,1510,1520, and blue zero-parallels at distances $0.4,0.8,1.2$, joined by the recorded short untwisted under-bands. Their 128-crossing output and $J$ have the input-bound 926-move whole marked equivalence in [F7]. Reversing these three slides therefore carries the $J$ handlebody to $K$. The actual $H$ input has seven positive and seven negative green/blue crossings, while $K$ has six of each sign, so both mutual linking numbers are zero. The $H/I/J$ isotopies preserve this count as a linking number. At each slide blue is retained with framing zero, and adding its zero-parallel preserves $\operatorname{lk}(G,B)=0$. For an untwisted signed band the same push-off expansion gives $f(G')=f(G)+f(B)+2\epsilon\operatorname{lk}(G,B)=0$ and $\operatorname{lk}(G',B)=\operatorname{lk}(G,B)+\epsilon f(B)=0$. Thus every green framing here is the actual zero framing. [F2, F3, F7, step 4.1, construct, algebra]

6.1 Now use two independently specified forward green-over-blue bands, not an asserted identification with the later published panels. Their green cuts are the midpoints of the upper and lower orange source interruptions, $(1914,1835.5)$ and $(1892.5,1928)$, and their blue zero-parallels are at distances $0.8$ and $0.4$. The first band uses polygonal core through $(1960,1790),(1980,1650),(1900,1550)$ to the recorded blue-strip target; the second has the corresponding 8-unit displaced core. The code in [F7] supplies their thin disjoint parallel sides and matching cut-end order. The first slide is performed first; the second band is below the first green copy and band, and its blue parallel inherits the retained blue heights at all previous crossings. Every band side is embedded, the crossing-height inequalities separate the old link and the two band interiors, and the endpoint collars sew the product strips. They are legitimate framed band sums, with the zero framing and zero mutual linking retained by step 5.1's formula. Their exact full output has 106 crossings. The recorded 625-move input-bound marked movie carries it to a 69-crossing endpoint, transporting every retained component and normal strip. [F2, F3, F7, step 5.1, construct, algebra]

7.1 At that endpoint the red and blue projections are simple, with exactly two red/blue crossings, one blue-over-red and one blue-under-red, both of Hopf sign, and no red/green crossing. Green is connected, so one complementary Jordan disk of red misses green. The recorded dual-face flood identifies that disk as faces 62 and 63 and its blue part as a single simple crosscut. Flatten red and make that crosscut's height monotone between its opposite endpoint heights, inside this green-free disk times a vertical interval. Carry the thin blue tube. The horizontal red disk now meets blue exactly once and misses the whole green tube. In [F4] the cancellation support can be chosen in the thin tube about the outside blue arc and the feet, disjoint from the green tube by compact separation. Hence cancelling red/blue fixes the actual green attaching embedding and framing. Following green opposite halfedges after erasing red/blue gives exactly the 55-crossing PD in the Statement. Therefore steps 2.1--7.1 give an orientation-preserving smooth diffeomorphism $X_0(C)\cong X_0(Q)$. All recorded cyclic isomorphisms preserve projection orientation and crossing height; a possible reversal of a knot parametrization is harmless, since conjugating both core and normal disk factors extends it over the two-handle with positive four-dimensional orientation. [F2, F3, F4, F7, step 2.1, step 6.1, construct]

8.1 Orient the single component of this exact $Q$ input. Its crossing counts are $n_+=32,n_-=23$, so the normalized shifts in [F5] are $h=|v|-23$ and quantum shift $|v|-14$. The independently executed rational cube calculation on this PD gives $Kh^{-1,*}(Q)=2q,\qquad Kh^{0,*}(Q)=q^{-1}+2q+q^3,\qquad Kh^{1,*}(Q)=2q+3q^3+q^5$. Here a coefficient is the rational rank. To reproduce the finite arithmetic, enumerate state circles by the two local pairings of [F5], order them by least arc, and use tensor labels $1,X$ of degrees $1,-1$. Edge $j$ has sign $(-1)^{\sum_{i<j}v_i}$ and the usual rational merge/split maps. In each quantum degree use exact rational Gaussian elimination. Equivalently tensor one crossing at a time and split off each invertible two-term summand: a pivot $u$ changes a remaining entry to $d_{cd}-d_{cb}u^{-1}d_{ad}$. Invertible elementary basis changes prove this Schur rule and preserve cohomology. The existing author-distributed KnotJob `-ku1` calculation uses reduced BigRat numerator/denominator arithmetic for these operations. Its direct PD input, complete rational output polynomial and exit-zero bounded run are in [F7]; no knot-table value was imported. The separate `-s0` result is 2, but the next step already determines the value from the stated exact ranks. [F5, F7, step 7.1, construct, algebra]

9.1 The nonzero class in $Kh^{0,3}(Q)$ cannot support a Lee differential: all possible targets $(1,3+4k)$ vanish for $k\ge1$ by step 8.1. Nor can it receive one, since every $(-1,3-4k)$ vanishes. Each later page is a subquotient of the corresponding graded group, so these vanishings cover every possible page of the finite filtration. Thus this degree-three class survives. By [F6] the two limiting levels are among $\{-1,1,3\}$, differ by two and include 3; they are exactly $1,3$, and $s(Q)=2$. Together with step 7.1 this proves the full assertion. [F5, F6, step 8.1, step 7.1, algebra] ∎
