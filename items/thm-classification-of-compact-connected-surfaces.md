---
id: thm-classification-of-compact-connected-surfaces
kind: theorem
title: "Classification of compact connected surfaces"
status: draft
origin: pipeline
deps: [thm-polygonal-normal-form-for-compact-connected-surfaces, lem-polygonal-schema-reduction-moves, def-connected-sum-of-compact-surfaces, def-polygonal-schema-and-edge-pairing, ex-sphere-polygonal-schema, ex-torus-polygonal-schema, ex-projective-plane-polygonal-schema, def-euler-characteristic-of-a-finite-cw-complex, thm-euler-poincare-formula-for-finite-cw-complexes, def-r-orientation-of-a-topological-manifold, def-orientation-local-system-and-orientation-cover, thm-top-homology-characterizes-compact-orientable-manifolds, prop-singular-chains-and-homology-are-covariantly-functorial, def-axiom-of-choice]
justified_by: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Gallier and Xu, A Guide to the Classification Theorem for Compact Surfaces"
      url: "https://www.cis.upenn.edu/~jean/surfclassif-root.pdf"
      locator: "Chapter 6, Lemma 6.1 and Theorems 6.1–6.2, printed pp.92–97"
    - title: "Koch, Classification of Surfaces"
      url: "https://pages.uoregon.edu/koch/math431/Surfaces.pdf"
      locator: "§§3–9, printed pp.3–13; normal forms compared with orientation and Euler characteristic"
pipeline_run: frontier-36-complete
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every nonempty compact
connected boundaryless topological $2$-manifold is homeomorphic to exactly one
of the following types: the sphere $S^2$, a connected sum of $g\geq1$ tori,
or a connected sum of $k\geq1$ real projective planes. The connected sums here
are the explicit polygonal models with their chosen disk removals and boundary
gluings ([[def-connected-sum-of-compact-surfaces]]). The integer is unique
within its type. Equivalently, two such surfaces are homeomorphic if and only
if they have the same integral orientability and Euler characteristic.

The canonical one-face words are respectively the sphere digon $aa^{-1}$
(whose *reduced notation* is empty), the $g$-fold commutator word
$\prod_{i=1}^g a_i b_i a_i^{-1} b_i^{-1}$, and the $k$-fold square word
$\prod_{j=1}^k c_jc_j$. The empty notation is not an empty polygonal schema.

## Facts & Assumptions

**Given:** a nonempty compact connected boundaryless topological surface $S$.

[L1] Under AC, every such $S$ has one of the genuine polygonal normal-form
schemas displayed in the statement
([[thm-polygonal-normal-form-for-compact-connected-surfaces]],
[[def-axiom-of-choice]]). Their vertices, paired edges and polygon interiors
form finite CW cells ([[def-polygonal-schema-and-edge-pairing]]).

[L2] The sphere digon realizes $S^2$ with $(V,E,F)=(2,1,1)$
([[ex-sphere-polygonal-schema]]). The one-handle square quotient realizes
$T^2$ and the one-square-pair quotient realizes $\mathbb{RP}^2$
([[ex-torus-polygonal-schema]], [[ex-projective-plane-polygonal-schema]]).
The connected-sum model explicitly remembers the deleted chart disks and
boundary homeomorphism ([[def-connected-sum-of-compact-surfaces]]). Changing
the names of paired edges changes only the word presentation
([[def-polygonal-schema-and-edge-pairing]]). Paired edge subdivision preserves
the quotient, matching the same affine side parameter on both copies
([[lem-polygonal-schema-reduction-moves]]).

[L3] The Euler characteristic of a finite CW structure is the alternating
cell count, equals the alternating sum of finite-rank integral homology, and
is preserved by homeomorphisms through functoriality of singular homology
([[def-euler-characteristic-of-a-finite-cw-complex]],
[[thm-euler-poincare-formula-for-finite-cw-complexes]],
[[prop-singular-chains-and-homology-are-covariantly-functorial]]).

[L4] Integral orientability means a continuous generating section of the
local integral top-homology system. A homeomorphism carries local pairs
$(S,S\setminus\{x\})$ to corresponding local pairs and transports those
sections; equivalently for compact connected surfaces the top integral
homology is $\mathbb Z$ in the orientable case and zero in the
nonorientable case ([[def-r-orientation-of-a-topological-manifold]],
[[def-orientation-local-system-and-orientation-cover]],
[[thm-top-homology-characterizes-compact-orientable-manifolds]]).

## Proof

**Given:** $S$ as above.

1.1 By [L1], choose a normal-form polygon for $S$. The sphere digon gives $S^2$ by [L2]. A one-handle block gives $T^2$ and a one-square block gives $\mathbb{RP}^2$ by [L2]. For two positive block words $W,V$, first relabel their finitely many paired edges so that the alphabets of $W$ and $V$ are disjoint; this is only a naming change under [L2]. Reserve new labels for every paired subdivision and for the bridge, all outside both alphabets and pairwise distinct. Construct **convex** genuine polygonal disks $P_W,P_V$ whose affine side pairings realize the two block surfaces as follows. A handle word has at least four sides, and a crosscap word with at least two blocks has at least four sides, so each may be placed on a regular convex polygon with its sides labelled in order. The single-crosscap word $cc$ is a genuine digon rather than a straight-edged convex polygon: for each such summand $\sigma\in\{W,V\}$ subdivide both paired occurrences at the same affine side parameter and in the same traversal direction, $cc\mapsto u_\sigma v_\sigma u_\sigma v_\sigma$, as permitted by [L2], using its reserved pair $u_\sigma,v_\sigma$ distinct from both original alphabets and from the pair reserved for the other summand; then place the four resulting sides on a convex quadrilateral. This subdivision changes only the presentation: it preserves the quotient and leaves the normal-form word $cc$ as its unsplit representative. Write $W^\prime,V^\prime$ for the actual convex boundary words of $P_W,P_V$: each equals its input word unless that summand was subdivided, in which case its $cc$ block is replaced by the reserved four-side word. Each selected outer boundary vertex below is chosen from an original, unsubdivided corner. A positive handle or square word has one quotient vertex represented by at least two boundary corners; in the subdivided $cc$ case the two original digon corners remain paired. Thus the selected vertex class has another boundary-corner occurrence after the optional subdivision. Choose small convex polygonal closed disks $H_W\subset \operatorname{int}P_W$ and $H_V\subset\operatorname{int}P_V$; their interiors survive as embedded chart disks because all side pairings occur on the outer boundaries. Put $A_W=P_W\setminus\operatorname{int}H_W$ and $A_V=P_V\setminus\operatorname{int}H_V$. After the original outer-side pairings, these are exactly the two punctured summands of the connected-sum definition [L2]. Pair their inner polygonal boundary circles by a piecewise-affine, boundary-orientation-reversing homeomorphism $\phi$. This specified quotient, not a choice-independent connected sum, is the model used below. [L1,L2]

2.1 Before taking the outer-side pairings, $A_W$ and $A_V$ are polygonal annuli. Their inner-boundary gluing is again a polygonal annulus $A$: each annulus has a radial product chart $S^1\times[0,1]$ obtained by linear rays from a point inside its convex inner disk, and the chosen piecewise-affine circle map is absorbed in one product collar. The two outer boundary circles of $A$ carry the actual convex words $W^\prime$ and $V^\prime$. Give the bridge a reserved label $t$ outside both (possibly subdivided) alphabets. Choose an embedded polygonal arc $t$ in $A$ from the selected original corner on the $W^\prime$ outer boundary to the selected original corner on the $V^\prime$ outer boundary, meeting the common seam $\partial H_W=\partial H_V$ once and otherwise avoiding the boundary. One may take a polygonal radial slit in each original annulus ending at paired seam points. Cutting $A$ along $t$ gives a genuine polygonal closed disk $Q$: traverse its boundary from the first selected vertex to read $W^\prime$, the first copy $t_+$ of the slit, $V^\prime$, and the second copy $t_-$ in the reverse direction. Hence its cyclic boundary word is $W^\prime\,t\,V^\prime\,t^{-1}$. Identifying $t_+$ with $t_-$ and applying the actual $W^\prime,V^\prime$ side pairings reconstructs exactly the connected-sum quotient of step 1.1. This follows directly from the equivalence relations on the disjoint source annuli: the seam pairing is encoded in $A$, the two slit copies are the only new pair, and every old outer-side pair remains unchanged. [L1,L2,step 1.1]

3.1 After the $W^\prime,V^\prime$ pairings, the image of $t$ is an embedded polygonal edge with two **distinct** endpoint vertex classes, one in each punctured summand. Its open edge does not meet another cell. Affine side pairings and the single cyclic vertex links give finite PL disk charts at its endpoints: subdivide the finitely many incident sectors and map their fan linearly to a planar disk. Thus $t$ is a tame PL arc. A finite PL regular neighborhood $N$ of this arc is a closed disk: take small disjoint vertex-star disks at its ends and a thin edge rectangle between them, and subdivide along their boundaries; their union is a disk and straightens the arc to a closed horizontal segment $K$ strictly inside a convex planar disk. The quotient $N/K$ is a disk by an explicit relative-boundary homeomorphism. For each $x\notin K$, let $p(x)$ be the nearest point of the segment and let the ray from $p(x)$ through $x$ hit $\partial N$ at $b(x)$. The normal rays partition $N\setminus K$; if $z_0\in\operatorname{int}K$, the formula $F(x)=z_0+\frac{|x-p(x)|}{|b(x)-p(x)|}(b(x)-z_0)$ and $F(K)=z_0$ is continuous, bijective on the quotient and fixes $\partial N$. Its inverse follows the unique normal ray indexed by the radial boundary point $b(x)$. Thus $N/K\cong N$ relative to its boundary. Extend this homeomorphism by the identity outside $N$: contracting the bridge $t$ preserves the surface homeomorphism type. [L1,L2,step 2.1]

4.1 In the finite cell quotient of $Q$ the contraction erases the paired bridge side $t,t^{-1}$ and merges its two endpoint vertices; no other edge or face is changed. First collapse the two disjoint closed slit intervals $t_+,t_-$ on $\partial Q$ **separately**, obtaining two boundary points $q_+,q_-$. Here is an explicit disk-quotient map. Choose a homeomorphism $H:Q\to\overline{\mathbb D}$, possible because $Q$ is the genuine closed disk of step 2.1, and choose the angular origin outside both images $H(t_+),H(t_-)$, so these are disjoint intervals $I_+=[a,b]$ and $I_-=[c,d]$ in $0<t<1$. Put $L=(b-a)+(d-c)<1$ and define $q:[0,1]\to[0,1]$ by $q(t)=\frac{t-\ell([0,t]\cap(I_+\cup I_-))}{1-L}$, where $\ell$ is the ordinary length of a finite union of intervals. Thus $q$ is continuous, nondecreasing, has $q(0)=0,q(1)=1$, is constant exactly on the two listed intervals, and is strictly increasing on their complement. For $0\le r<1$ put $f_r(t)=(1-r)t+r q(t)$, a strictly increasing circle homeomorphism of degree one, and set $F(re^{2\pi it})=re^{2\pi i f_r(t)}$ for $r<1$, $F(e^{2\pi it})=e^{2\pi i q(t)}$, and $F(0)=0$. The formulas agree continuously as $r\uparrow1$ and at the angular seam; each interior circle maps homeomorphically to itself, while the boundary fibers are exactly $I_+$ and $I_-$ and singletons elsewhere. Hence $F\circ H$ induces a continuous bijection from $Q/(t_+\text{ collapsed},t_-\text{ collapsed})$ onto the closed disk; compactness and Hausdorffness make it a homeomorphism. The remaining boundary arcs occur in the cyclic order $W^\prime,V^\prime$. Map their images, side by side, to the corresponding sides of a convex polygon carrying the word $W^\prime V^\prime$, with each map affine in the original side parameter; the resulting boundary-circle homeomorphism extends radially over the disk, so the quotient is a genuine polygonal disk with unchanged affine pairings on every surviving $W^\prime,V^\prime$ side. Finally $q_+$ and $q_-$ are identified by the actual $W^\prime$ side pairings: they are the two copies of the selected original corner of $P_W$ created by cutting the annulus, and its vertex class has another corner occurrence through which the two slit copies are joined by the paired side endpoints (the same follows from $V^\prime$). Thus adding the original $t_+\leftrightarrow t_-$ pairing after the separate collapses adds no further relation. The resulting polygon quotient is exactly the bridge contraction of step 3.1, and its cyclic word is $W^\prime V^\prime$. Paired desubdivision of every optional four-side crosscap block, using [L2] in reverse with its matched side parameters, returns the canonical word $WV$ without changing the quotient. At each iteration give the incoming single handle or crosscap block and its optional paired subdivision fresh edge labels, and reserve a new bridge label, all disjoint from the labels already used. Iterating this precise polygonal connected-sum identity identifies every positive normal word with the explicit sum of the corresponding tori or projective planes. Only polygonal annuli and true closed disks occur; no monogon or empty-boundary polygon is used. [L1,L2,step 1.1,step 2.1,step 3.1]

5.1 Determine orientability from the one-face word. Orient the polygon interior. If a paired label has opposite exponents, the paired sides have opposite induced boundary directions, so the orientation generators on the two adjacent face sectors agree after the side identification. If every label has opposite exponents, these local generators glue across every open side and, around a vertex, around the single cyclic link. They yield a continuous generating section of the orientation local system: the handle words and the sphere digon are orientable. If a label has equal exponents, a path from an interior point of one occurrence through the polygon interior to the paired point on the other occurrence descends to a loop whose local orientation generator changes sign on crossing the paired side. No generating section can return to its initial value around that loop. Every $k$-square word with $k\geq1$ is therefore nonorientable. This local transport is the orientation definition [L4], and [L4] makes the distinction homeomorphism invariant. [L1, L4,step 4.1]

6.1 Count cells. The sphere digon has $(V,E,F)=(2,1,1)$ and $\chi=2$ by [L2,L3]. A one-handle block identifies all four corners, so it has one vertex and two paired edges. Concatenating another handle block at the common boundary junction identifies its four new corners with that vertex; induction gives $(V,E,F)=(1,2g,1)$ and $\chi=1-2g+1=2-2g$. A one-square block has its two corners identified, so it has one vertex and one paired edge. Each additional square block joins its new corners to that vertex; hence $(V,E,F)=(1,k,1)$ and $\chi=1-k+1=2-k$. These are finite CW counts under [L1], so [L3] makes their values independent of the chosen presentation. [L1, L2, L3,step 5.1]

7.1 A homeomorphism preserves integral orientability by [L4] and Euler characteristic by [L3]. Thus an orientable surface cannot be homeomorphic to a nonorientable one. Within the orientable family, $2-2g$ is injective for $g\geq0$, taking $g=0$ for the sphere; within the nonorientable family, $2-k$ is injective for $k\geq1$. This proves uniqueness of the integer and necessity of the two invariants. Conversely, if two surfaces have the same orientability and Euler characteristic, step 5.1 selects the same one of the two branches, and step 6.1 gives the same integer. Steps 1.1–4.1 make each surface homeomorphic to the same explicitly chosen polygonal model, so the surfaces are homeomorphic. The only AC use is inherited from normal-form existence [L1]; finite surgery and invariant computations add no choice. [L1,L3,L4,step 1.1,step 2.1,step 3.1,step 4.1,step 5.1,step 6.1] ∎
## Remarks

The sphere has a genuine paired digon. The empty reduced word records that
inverse-pair reduction has terminated; it is not itself a schema. The
connected-sum identifications in the proof use the disks and gluings
constructed there and do not require a choice-independence theorem.
