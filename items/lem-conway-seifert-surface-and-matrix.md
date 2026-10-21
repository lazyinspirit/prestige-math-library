---
id: lem-conway-seifert-surface-and-matrix
kind: lemma
title: "Seifert-matrix certificate for the Conway diagram"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-piccirillo-conway-pair
  - alg-seifert-surface-from-diagram
  - thm-seifert-surface-from-diagram-procedure-properties
  - def-knot-seifert-pairing-and-matrix
  - lem-seifert-pairing-well-defined
  - lem-seifert-bands-embedded-orientable-boundary-correct
  - thm-linking-number-equals-signed-intersection
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Lisa Piccirillo, The Conway knot is not slice"
      url: "https://arxiv.org/pdf/1808.02923"
      locator: "Figure 1 (Conway diagram), arXiv v1 PDF p. 2"
    - title: "KnotInfo complete data table"
      url: "https://raw.githubusercontent.com/knotinfo-org/assets/main/knotinfo_data_complete.xls.zip"
      locator: "The 11n34 row, PD Code and Seifert Matrix fields; candidate computation data only"
    - title: "Knot Atlas, Planar Diagrams"
      url: "https://katlas.org/wiki/Planar_Diagrams"
      locator: "PD convention, lines 65–89"
    - title: "Julia Collins, An algorithm for computing the Seifert matrix of a link from a braid representation"
      url: "https://ensaios.sbm.org.br/wp-content/uploads/sites/14/2021/09/EM_30_Collins-1.pdf"
      locator: "§3, printed pp.255–259; positive push is in the second variable there, so its table is transposed here"
---

## Statement

Assume the Axiom of Choice. For the oriented Conway diagram $C$ fixed on the
preceding item, the Seifert smoothing and band construction yields a connected
embedded Seifert surface with a basis for its first homology whose
positive-push-off Seifert matrix is
$$V=\begin{pmatrix} -1&0&0&0&0&0&0&0\\ -1&-1&0&0&0&0&0&0\\ -1&-1&0&0&1&0&0&0\\ 0&0&-1&1&0&1&-1&1\\ 0&0&0&0&1&0&0&0\\ 0&0&0&0&0&1&0&0\\ -1&-1&1&0&1&0&0&0\\ 0&0&-1&0&0&1&0&1 \end{pmatrix}.$$

## Statement references

[Piccirillo, Figure 1](https://arxiv.org/pdf/1808.02923)

[KnotInfo, complete knot table](https://raw.githubusercontent.com/knotinfo-org/assets/main/knotinfo_data_complete.xls.zip)

[Knot Atlas, PD convention](https://katlas.org/wiki/Planar_Diagrams)

## Facts & Assumptions

**Given:** Full AC, the Conway diagram fixed by the preceding item, and the positive-push-off convention for Seifert matrices.

[A1] Full AC, written AC, is [[def-axiom-of-choice]]. It supplies countable choice through [[thm-choice-implies-dependent-implies-countable-choice]] for the finite-projection/surface interface.

[F1] [[def-piccirillo-conway-pair]] fixes $C$ by Piccirillo's diagram.

[F2] [[alg-seifert-surface-from-diagram]] and [[thm-seifert-surface-from-diagram-procedure-properties]] supply the finite disk-and-band data. [[lem-seifert-bands-embedded-orientable-boundary-correct]] proves that these data realize a connected embedded oriented surface with the specified knot boundary.

[F3] [[def-knot-seifert-pairing-and-matrix]] uses $V_{ij}=\operatorname{lk}(a_i^+,a_j)$ for the positive push-off of a basis curve $a_i$ in the oriented surface.

[F4] The Seifert pairing is bilinear on integral homology classes, so a basis change by an integral unimodular matrix $P$ replaces $B$ by $P^TBP$. [[lem-seifert-pairing-well-defined]]

[F5] Linking is the signed intersection number, equivalently the signed mixed-crossing count with the positive-meridian orientation. [[thm-linking-number-equals-signed-intersection]]

## Proof

1.1 Transcribe the left knot in [F1], ignoring its red mutation circle. Number its crossings $1,\ldots,11$ at the following approximate pixel centers in the original $5323\times1843$ source image: $(1540,216),(310,538),(1867,633),(1335,806),(877,840),(175,919),(884,1180),(375,871),(410,1527),(1890,1393),(1443,1230)$. These coordinates identify the crossing neighborhoods, not a metric hypothesis. Start at the underpass of crossing $2$ and follow the strand toward crossing $8$. The complete cyclic under/over visit word is $U2,O8,U7,U11,O10,O9,U6,O2,U5,O7,U9,O6,U8,O5,O4,U3,O1,U4,O11,U10,O3,U1$. Label the outgoing arc after each successive visit by $0,\ldots,21$. Listing each crossing counterclockwise, starting with its incoming under-arc, gives the following PD list: $[(20,15,21,16),(21,6,0,7),(14,19,15,20),(16,13,17,14),(7,12,8,13),(5,11,6,10),(1,9,2,8),(11,1,12,0),(9,5,10,4),(18,4,19,3),(2,18,3,17)]$. Each of the eleven source gaps is used once as an underpass; the matching unbroken source arc is its overpass. The two extra apparent breaks on the horizontal arcs and the bottom break occur at the red mutation circle and are joined without any knot crossing. Thus this is a transcription of the specified diagram, rather than a knot-table identification. [F1, given, construct]


2.1 Let $W=(3,-2,3,-2,3,-1,3,-1,2,2,-1)$ be a four-strand braid read left to right, where $+j$ has strand $j$ over strand $j+1$. Close corresponding ends outside the braid without extra crossings. Its PD list, obtained by following its four strands, is $[(12,6,13,5),(6,1,7,2),(2,14,3,13),(14,7,15,8),(8,4,9,3),(15,20,16,21),(4,10,5,9),(21,16,0,17),(17,11,18,10),(11,19,12,18),(19,0,20,1)]$. The arc relabeling $a\mapsto14-a\pmod {22}$ carries the list of step 1.1 to this list: its crossings go respectively to $(6,4,8,11,2,5,1,3,7,9,10)$, with cyclic rotation by two at every crossing. These are equal connected oriented ribbon diagrams with the same overpasses. Their equivalence involves no crossing change: thicken corresponding vertices and edges in the projection sphere, identify these strips by the specified cyclic orders, and extend over the complementary disk faces. One may realize the identification by first matching a thickened spanning tree, then matching the remaining arcs in their disk faces by innermost-bigon isotopies, and finally using the disk Alexander isotopy on the faces. Lifting the crossing neighborhoods with their retained over/under heights gives an ambient isotopy of the knots and their Seifert disk-and-band data. Either direction along the single knot is available; the reversed orientation will be handled as well. [F1, step 1.1, construct]


3.1 Apply [F2] to this braid's smoothing. Its four circles give four disks, and its eleven crossings give eleven half-twisted bands. The surface retracts onto the graph with four consecutive vertices and one edge for every braid letter. Choosing one edge between each consecutive vertex pair gives a spanning tree. For each fixed adjacent pair of disks, the cycles between consecutive bands form an integral basis: relative to the fundamental cycles of the non-tree edges they are successive differences, an integral triangular change of basis with diagonal entries $1$. In the order of disk pairs $1,2,3$, use the eight intervals of braid positions $(6,8),(8,11);(2,4),(4,9),(9,10);(1,3),(3,5),(5,7)$. Orient each cycle to run forward on the upper numbered disk and backward on the lower one, and join through the indicated two bands. This constructs eight actual cycles on the embedded surface, not abstract matrix generators. Its Euler characteristic is $4-11=-7$, so its one-boundary genus is four, consistently with this basis of rank eight. [A1, F2, F3, step 2.1, construct, algebra]


4.1 Here is the local push-off count used for all entries. Write a band of sign $\varepsilon$ in coordinates as $(s,t)\mapsto(s,t\cos\pi s,-\varepsilon t\sin\pi s)$, $0\le s\le1$, with its end strips continued into the two disks. Positive normal is fixed by the ambient and surface orientations in [F3]. A cycle using bands of signs $\varepsilon_a,\varepsilon_b$ has self-linking $-(\varepsilon_a+\varepsilon_b)/2$: its two half-turn contributions add, and the straight disk segments have zero twist. For consecutive cycles on the same disk pair, the shared positive band gives positive-push-first pairings $(B_{ij},B_{ji})=(1,0)$, and the shared negative band gives $(0,-1)$. To see the off-diagonal signs, displace the first cycle by its positive normal in the displayed band chart: in the nonzero direction its two mixed crossings both have the indicated sign, whereas in the other direction the displaced return strip is disjoint. For cycles on neighboring disk pairs with position intervals $a<c<b<d$, their four return strips have exactly the same two-crossing local configuration. If the earlier interval is on the smaller disk pair, its nonzero pairing is $B_{ji}=1$; if on the larger pair it is $B_{ij}=-1$. Disjoint or nested intervals, and nonneighboring disk pairs, have zero pairing in both directions: their return strips can be separated, or their two mixed crossings have opposite signs. These cases exhaust the eight cycles in step 3.1. This computes the mixed crossings of the actual displaced curves; the convention pushes the first variable, so it transposes the push-second table of the cited Collins source. [F3, F5, step 3.1, construct, algebra]


5.1 Applying those counts to the eight listed intervals gives $B=\begin{pmatrix}1&0&0&0&0&0&0&0\\-1&1&0&0&0&0&0&0\\0&0&1&0&0&0&0&0\\0&-1&-1&0&1&0&0&0\\0&0&0&0&-1&0&0&0\\0&0&-1&0&0&-1&1&0\\0&0&1&-1&0&0&-1&1\\0&0&0&0&0&0&0&-1\end{pmatrix}$. For example, the first two cycles use only negative bands, so their diagonal entries are $1$ and the shared-band entry is $B_{21}=-1$; the staggered intervals $(4,9)$ on pair $2$ and $(8,11)$ on pair $1$ give $B_{42}=-1$. The remaining nonzero off-diagonal entries are $B_{43}=-1$, $B_{45}=1$, $B_{63}=-1$, $B_{67}=1$, $B_{73}=1$, $B_{74}=-1$, and $B_{78}=1$; the diagonal entries are $(1,1,1,0,-1,-1,-1,-1)$. Thus all sixty-four entries are determined by the preceding local count, including their zeros. [F3, F5, step 3.1, step 4.1, algebra]


6.1 Put $P=\begin{pmatrix}-4&4&5&0&0&5&0&-4\\4&15&9&-12&-7&-4&12&-17\\-1&8&9&-2&0&2&2&-9\\7&20&8&-16&-13&-8&15&-24\\0&7&8&-2&0&1&2&-8\\-12&-16&-2&17&14&14&-16&20\\-13&-20&-4&20&16&15&-19&24\\-9&-13&-4&14&9&10&-14&15\end{pmatrix}$. Integer multiplication gives $\det P=1$ and $P^TBP=V$, where $V$ is the matrix displayed in the Statement. These are finite integer identities; no polynomial invariant is used to identify the matrix. By [F4], the cycles $a_j=\sum_iP_{ij}b_i$, for the cycles $b_i$ of step 3.1, form an integral homology basis with exactly the stated positive-push-off matrix. They are legitimate integral one-cycles as in [F3]; simple representatives are unnecessary for the matrix definition. [F3, F4, step 5.1, algebra, construct]


7.1 If the orientation fixed for $C$ is the reverse of the braid orientation, reverse the surface orientation as well. The normal reverses, and the resulting positive-push-first matrix is $B^T$: a negative push in the first variable is, by the normal collar and symmetry of linking, a positive push in the second. In this case use instead $P'=\begin{pmatrix}-5&-8&-1&7&7&6&-6&7\\-14&-22&-5&19&17&16&-18&23\\-12&-17&-6&15&11&14&-14&17\\-19&-36&-11&34&26&23&-33&40\\-10&-17&-5&15&12&12&-14&17\\13&29&9&-28&-21&-16&28&-34\\17&33&11&-31&-23&-20&31&-38\\10&16&4&-14&-12&-11&14&-18\end{pmatrix}$. Direct integer multiplication gives $\det P'=1$ and $(P')^TB^TP'=V$. Thus either auxiliary orientation allowed in [F1] yields the same asserted matrix in an appropriate integral basis. Transporting the surface back through the actual diagram isotopy of step 2.1 proves the Statement for its specified Conway diagram. [F1, F2, F3, F4, step 2.1, step 5.1, step 6.1, algebra, construct] ∎
