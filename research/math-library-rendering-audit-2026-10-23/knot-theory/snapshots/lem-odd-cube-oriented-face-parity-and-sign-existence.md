---
id: lem-odd-cube-oriented-face-parity-and-sign-existence
kind: lemma
title: Oriented odd-cube face parity and constructive edge signs
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-odd-khovanov-barnatan-and-leo-triple
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ozsváth, Rasmussen and Szabó, Odd Khovanov homology
      url: https://arxiv.org/pdf/0710.4300
      locator: Definition 1.1 and Lemmas 1.2, 2.1–2.3
    - title: Putyra, A 2-category of chronological cobordisms and odd Khovanov homology
      url: https://arxiv.org/pdf/1310.1895
      locator: Proposition 4.10, its four planar surgery configurations in Table 2, and Proposition 5.1
dependency_level: 1
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let a finite planar resolution cube be equipped with an arrow at each crossing, transported to its saddle edges while resolving the other disjoint crossing disks, and use the odd exterior merge and split maps. There is a function assigning a sign to every edge such that the resulting signed differential squares to zero over the integers. More precisely, one can prescribe the face products on all faces, including faces whose two composites vanish, as follows. On a face with nonzero composites let $\kappa\in\{1,-1\}$ be their relative commutation sign. On a zero-composite face the two saddle arcs have alternating endpoints on one circle, one arc inside and one outside; put them in the standard two-chord picture by an orientation-preserving planar isotopy and rotate so that the inside arrow points upwards and set $\kappa=1$ when the outside arrow points left, and $\kappa=-1$ when it points right. Then the prescribed product of the four edge signs is $-\kappa$. These prescriptions are consistent, and two edge assignments realizing the same prescriptions are related by a vertexwise sign change. All the constructions are finite and choice-free. If a point away from the saddle disks is marked on a component of the diagram, the vertexwise comparison commutes with its marked right $\mathbb Z[X]/(X^2)$-action.

## Statement references

[[def-odd-khovanov-barnatan-and-leo-triple|Odd saddle maps and the marked right action]]

[Ozsváth–Rasmussen–Szabó, Definition 1.1 and Lemmas 1.2, 2.1–2.3](https://arxiv.org/pdf/0710.4300)

[Putyra, Proposition 4.10 and Table 2](https://arxiv.org/pdf/1310.1895)

## Facts & Assumptions

**Given:** A finite planar circle-and-surgery-arc cube, with disjoint saddle disks and coherent arrows.

[F1] A merge is the exterior quotient identifying its two incident generators. A split is left multiplication by the difference of the two output generators, followed by either lift of the old generator ([[def-odd-khovanov-barnatan-and-leo-triple]]).

[F2] When a component carries a mark away from the saddle disks, the marked right action appends the marked-circle generator, and the saddle maps commute with it ([[def-odd-khovanov-barnatan-and-leo-triple]]).

## Proof

**Given:** The hypotheses of the Statement. Call a saddle a split when it increases the number of circles, and put $b=1$ for a split and $b=0$ for a merge. Products of signs below are in $\{1,-1\}$, so reversing the direction in which one traverses a face does not change its contribution.

1.1 **The two-saddle calculation.** Quotients commute with quotients. Two split factors anticommute because $u\wedge v=-v\wedge u$. A quotient and a split commute when the quotient carries the split difference to the corresponding output difference. These give $\kappa=1,-1,1$, respectively, for two merges, two splits and a mixed pair whose saddle types are unchanged by interchange. The remaining connected nonzero case starts with two circles and two bands between them: either order first merges and then splits. Both composites factor through the quotient identifying the two input circles. If the two band arrows point towards the same input circle, their final split differences are opposites, giving $\kappa=-1$; if they point towards different circles, the differences agree, giving $\kappa=1$. Finally, alternating endpoints on a single input circle give a split followed by a merge in either order. The quotient kills the split difference, so both composites are zero. These exhaust the cases: discard components missing both arcs, and distinguish whether each arc joins equal or distinct components; if both are self-arcs, their endpoints either alternate or do not. A spectator generator is carried identically throughout, so the computation on the incident generators proves the full exterior-map equation. [F1, given, algebra]

2.1 **Reversing an arrow is a gauge change.** Reverse the arrow at coordinate $i$. The unsigned edge map changes by $r(e)=-1$ on its split edges and by $r(e)=1$ on its merge edges; other edges have $r(e)=1$. The face coefficient changes by the product of these four $r$'s. For nonzero composites this follows by multiplying the two equations for the edge maps. For a zero face, the $i$-saddle is a split in one ordering and a merge in the other. Reversing its arrow reverses the left/right test defining $\kappa$, so the coefficient changes by $-1$, again the product of the $r$'s. Consequently the product of the six $\kappa$'s on a three-cube is unchanged by reversing any arrow: every edge belongs to exactly two of its faces. It suffices to check one choice of arrows for every unoriented three-saddle configuration. [step 1.1, algebra]

2.2 **Separating a configuration.** Collapse each saddle disk to a four-valent vertex and retain the regular arcs joining its four ports. Discard vertex-free circles. This gives a planar four-valent multigraph with three vertices. If it is disconnected, one component contains just one vertex. If it has a two-edge cut, cut those edges and cap the resulting pair of ports in each piece by an arc. The original diagram is then obtained by joining the two capped marked arcs; one piece again has one vertex and the other two. The caps can be chosen in a thin neighbourhood of the cut, so they preserve the cyclic orders and inside/outside intersection test for every two-saddle face within a piece. Every resolution of the joined diagram has the circle count $k_1+k_2-1$; in the disconnected case it has count $k_1+k_2$. Thus the merge/split status of a saddle is its status in its own capped piece. A face using one saddle from each piece is an ordinary interchange with coefficient $(-1)^{b_i b_j}$ by step 1.1. The two faces using both saddles of the two-vertex piece have equal coefficients and cancel in the boundary product. If the one-vertex piece has split indicator $b_c$, the product from the four remaining faces is $(-1)^{b_c N}$, where $N$ is the sum of the split counts in the two orders of the two saddles in the other piece. Each order has the same split count, namely $(k_{\mathrm{out}}-k_{\mathrm{in}}+2)/2$. Hence $N$ is even and the boundary product is $1$. This also proves the disconnected case, using separate exterior generators rather than the marked connected sum. [step 1.1, algebra, construct]

3.1 **The irreducible list.** Suppose the graph is connected and has no two-edge cut. It has no loop: a loop uses two of the four ports at its vertex, and the remaining two edges would be a cut. Write $m_{ij}$ for the number of edges between vertices $i,j$. The three degree equations give $m_{12}=m_{23}=m_{31}=2$. At each vertex the two parallel edges bound a lens on one side; the remaining edges must lie on the other side, since they must reach the third vertex without crossing. Thus the planar graph has three lens faces and two triangular faces, with its cyclic orders determined up to reflection and permutation of the vertices. Resolving its three vertices gives eight choices. Permuting the vertices identifies choices having the same number of switches from the resolution into three lens circles. The four representatives, obtained by zero, one, two and three switches, have respectively these circle-and-band descriptions: three circles with three bands forming a triangle; two circles joined by two bands, with a self-band on one circle separating their attachment points; one circle with two parallel inside bands and one outside band alternating with each of them; and two circles joined by three parallel bands. This enumeration follows also by doing the switches successively: the first merges two lens circles, the second merges the remaining two circles, and the third splits their common circle. It accounts for all eight choices, without an assumption about the arrows. [step 2.2, construct]

4.1 **Triangle and three parallel bands.** In the triangle representative direct the three bands cyclically. A face with the third band absent is two successive merges, of coefficient $1$. With the third band performed first, the two remaining arrows point towards different circles, again giving coefficient $1$ by step 1.1. Thus all six coefficients are $1$. In the three-parallel-band representative direct all three arrows from the first circle to the second. The three bottom faces have two arrows towards the same circle and coefficient $-1$. After the third band merges the two circles, the two remaining bands are nonalternating self-bands; their two split factors anticommute, so each top face also has coefficient $-1$. In both representatives the six-face product is $1$. [step 1.1, step 3.1, algebra]

4.2 **Digon with a self-band.** Place the two circles to the left and right, draw the two joining bands above and below, and draw the self-band across the left circle, separating the upper and lower attachment points. Direct both joining bands towards the right circle. The face of the two joining bands before the self-band is a same-head interchange and has coefficient $-1$. After the self-band, those bands form a tree on three circles and the corresponding face has coefficient $1$. The two faces involving the self-band before the other joining band are ordinary mixed interchanges and have coefficient $1$. After a joining band is performed, the other joining band and the self-band have alternating endpoints. The two resulting zero faces are reflections across the horizontal midline, with the self-band arrow retained and the two equally directed joining arrows exchanged. Reflection reverses the inside/outside oriented-intersection test, so their $\kappa$'s are opposite. Their product is $-1$, cancelling the single nonzero coefficient $-1$. The total product is $1$, for either direction of the self-band arrow. [step 1.1, step 3.1, algebra]

4.3 **Two inside bands and an outside band.** List the endpoints clockwise as $c,a,b,c,b,a$, where $a,b$ are the two parallel inside bands and $c$ is outside. Direct $a,b$ upwards. Their bottom face consists of two splits and has coefficient $-1$. After performing $c$, their heads lie on the same one of the two resulting circles; their top face is a same-head interchange and has coefficient $-1$. The faces $(a,c)$ before $b$ and $(b,c)$ before $a$ are zero faces with the same inside-arrow direction and the same outside arrow, hence have equal coefficients. Their product is $1$. In the two remaining faces, performing the other inside band has separated the endpoints of $c$; the two events are an ordinary merge and split with coefficient $1$. Thus the six-face product is again $1$, for either direction of $c$. Steps 3.1–4.3 and arrow reversal in step 2.1 prove that every three-cube has boundary product $\prod\kappa=1$. Consequently $\phi=-\kappa$ also has boundary product $1$, because there are six faces. [step 1.1, step 2.1, step 3.1, algebra]

5.1 **Constructing the signs.** Induct on cube dimension $n$. For $n=0$ there are no signs; for $n=1$ choose the only edge sign $1$. For the induction step construct signs on the lower face $v_n=0$, set every edge in direction $n$ to $1$, and define an upper-face edge in direction $i<n$ by $\epsilon_i(v,1)=\phi_{i,n}(v)\epsilon_i(v,0)$. This enforces each vertical face product. For an upper face in directions $i,j<n$, multiply the six face equations for its three-cube with direction $n$: the lower face and four vertical faces already have their prescribed products, while the six prescribed products multiply to $1$ by step 4.3. Therefore the upper face has its prescribed product too. The resulting differential has square zero: on a nonzero face the two unsigned composites differ by $\kappa$, while their signed coefficient ratio is $-\kappa$; on a zero face both composites vanish. Every operation in this induction is a finite multiplication of signs. [F1, step 4.3, construct, algebra]

6.1 **Comparison.** If $\epsilon,\epsilon'$ realize the same face products, their quotient $\rho(e)=\epsilon'(e)/\epsilon(e)$ has product $1$ around every face. Give the lowest vertex sign $1$, and give any other vertex the product of $\rho$ along a monotone path to it. Two such paths differ by interchanging adjacent coordinate changes; each interchange is a square and leaves the product unchanged. Therefore these vertex signs are well-defined and their ratio across an edge is $\rho(e)$. Multiplying every state module by its vertex sign gives a chain isomorphism. These scalar maps preserve both normalized gradings and, when a mark is supplied, commute with its marked action by [F2]. This proves all the assertions. [F2, step 5.1, algebra, construct] ∎
