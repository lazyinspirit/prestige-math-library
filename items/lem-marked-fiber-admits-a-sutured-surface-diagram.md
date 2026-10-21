---
id: lem-marked-fiber-admits-a-sutured-surface-diagram
kind: lemma
title: "Actual binding marking and an adapted sutured diagram for a fiber"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-sutured-floer-chain-complex
  - def-balanced-taut-sutured-manifold-and-product-region
  - def-knot-relative-spinc-structure
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Juhasz, Floer homology and surface decompositions"
      url: "https://arxiv.org/pdf/math/0609779v3"
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
    - title: "Sarkar and Wang, An algorithm for computing some Heegaard Floer homologies"
      url: "https://arxiv.org/pdf/math/0607777v4"
    - title: "Ni, Knot Floer homology detects fibred knots"
      url: "https://arxiv.org/pdf/math/0607156v4"
---

## Statement

Let a null-homologous knot in a closed connected oriented three-manifold be fibered with a specified connected oriented Seifert fiber. Its compact exterior with two meridional sutures admits a good surface-adapted balanced diagram carrying that actual Seifert surface, its boundary longitude, and the meridional boundary trivialization. For a fiber of an actual open book the cut/double diagram represents the marked product obtained by cutting along the fiber, with the original monodromy retained in regluing.

## Facts & Assumptions

[F1] [[def-sutured-floer-chain-complex]] supplies its stated definitions or proved operator/construction interface at its stated scope.

[F2] [[def-balanced-taut-sutured-manifold-and-product-region]] supplies its stated definitions or proved operator/construction interface at its stated scope.

[F3] [[def-knot-relative-spinc-structure]] supplies its stated definitions or proved operator/construction interface at its stated scope.

## Proof

**Given:** The actual diagrams, markings, orientation classes, and admissibility hypotheses in the statement.

1.1 New topological construction, 2026-10-20. This replaces the unverified two-marking of the unchanged doubled-page diagram. It constructs a diagram of the actual meridionally sutured exterior and retains the actual fiber. It makes no claim that the resulting attaching systems have the old upper-page intersection pattern. [construct]

1.2 **Input and output.** Let $F$ be a compact connected oriented genus-$g$ surface with one boundary component, and let $\phi:F\to F$ be an orientation-preserving return diffeomorphism equal to the identity in a specified boundary collar. Use the actual open-book manifold: start with the mapping torus of $\phi$ and attach $\partial F\times D^2$ so the angular coordinate of $D^2$ is the mapping-torus coordinate. Its binding is $K=\partial F\times\{0\}$. The completed pages at angles $0$ and $\pi$ form the doubled-page splitting surface $\Sigma_0$ of genus $2g$. Denote its two actual handlebodies by $H_\alpha,H_\beta$. Their complete disk systems are the doubled cocores of a disk-band presentation of $F$. All these statements refer to the supplied open-book model, not merely to an arbitrary diagram with the right number of curves. [construct]

1.3 The construction produces a surface $\Sigma=\Sigma_0\setminus(\operatorname{int}D_p\cup\operatorname{int}D_q)$, with two boundary components, and $2g$ complete attaching circles in each family. Its balanced sutured manifold is exactly $Y\setminus\operatorname{int}N(K)$ with two oppositely oriented meridional sutures. The original fiber, carried through the specified isotopy, is retained as a properly embedded surface whose boundary meets these sutures once each. Cutting along that surface is the marked product $F\times[0,1]$ with the return map retained on its ends. [construct]

1.4 **1. Bridge the actual seam.** Choose distinct points $p,q$ on the binding seam in $\Sigma_0$. They divide the seam into two closed arcs $a_\alpha,a_\beta$ with common endpoints and disjoint interiors. In a two-sided product collar of $\Sigma_0$, push the interior of $a_\alpha$ a small distance into $H_\alpha$ and the interior of $a_\beta$ into $H_\beta$. Use a positive smooth displacement vanishing at the endpoints; round in disjoint coordinate balls at $p,q$. The result is an embedded knot $K'$ ambient isotopic to $K$: in the collar, interpolate the displacement linearly from zero, and extend that explicit small graph isotopy using the collar's normal coordinate and a compact cutoff. Carry the pages and their normal framing by this same isotopy. [construct]

1.5 Each pushed arc $k_\alpha\subset H_\alpha$ and $k_\beta\subset H_\beta$ has an actual bridge disk: sweep its original boundary arc through this collar displacement. The swept rectangle, with its two endpoint sides collapsed and rounded, is an embedded disk whose boundary consists of the pushed arc and the original arc on $\Sigma_0$. Thus the arcs are boundary parallel in the specified handlebodies. This is an isotopy of the actual binding, not an identification inferred from basepoint positions. [construct]

1.6 **2. Construct disk systems missing the bridge arcs.** Here is the finite disk-patch operation needed on either handlebody $H$. Let $a\subset\partial H$ be its boundary bridge arc. Choose a smooth disk patch $D\subset\partial H$ containing $a$ in its interior, and choose a slightly larger disk patch $D^+$. Start with the supplied complete compressing disks. Select a point in $\operatorname{int}D$ outside their finitely many boundary circles and a small disk $D_0$ about that point disjoint from those circles. [construct]

1.7 There is an explicit boundary isotopy shrinking $D$ into $D_0$. Choose a disk coordinate on $D^+$, first carry its chosen center to the origin through a small coordinate flow, and then use radial maps $r\mapsto f_t(r)$ with $f_t'>0$, fixed near $\partial D^+$, shrinking the smaller disk into $D_0$. The increasing functions can be chosen by integrating a positive smooth radial derivative and normalizing its total integral; leave it equal to one near the outside boundary. This gives a surface diffeomorphism isotopic to the identity. Extend its time-dependent vector field to a collar of $\partial H$, multiply by a cutoff in the normal coordinate, and integrate it on the compact handlebody. This gives an actual handlebody isotopy with that boundary value. [construct]

1.8 Pull the old complete disk system back by its endpoint diffeomorphism. Its boundary circles now miss $D$, and its complement remains the original cut ball carried by a diffeomorphism. Choose a sufficiently thin boundary collar and straighten the disks there as products of their boundary curves. Their interiors away from that collar are compact, so the bridge disk and arc can be chosen in the collar over $D$, disjoint from every compressing disk. Equivalently, first make this collar choice and then perform the arbitrarily small bridge push of section 1. No endpoint of the final binding is moved by an unrecorded identification: the auxiliary boundary isotopy only constructs the new disks, while the bridge arcs remain the specified arcs of $K'$. [construct]

1.9 Perform this operation independently in $H_\alpha$ and $H_\beta$. Let the new disk boundaries be $\boldsymbol\alpha,\boldsymbol\beta$. Both systems miss small common disks $D_p,D_q$ around the endpoints, because their boundary curves miss their respective bridge patches containing both endpoints. Make the two attaching systems transverse by small boundary perturbations away from these endpoint disks; carry their disk witnesses at the same time. This preparation need not preserve any old intersections. [construct]

1.10 **3. Drill and read the actual sutures.** Delete a small product neighborhood of each pushed bridge arc from its handlebody. The two deleted neighborhoods fit at the endpoint disks to the actual tubular neighborhood $N(K')$ with the carried page framing. Each new complete disk system misses its arc neighborhood. Cutting its drilled handlebody along those disks gives a ball with a boundary-parallel arc neighborhood removed, hence a solid torus. This last identification is explicit in a bridge-disk neighborhood: a ball with the neighborhood of a diameter-parallel proper arc removed is an annulus times an interval, after rounding. The meridian disks that were cut remain the feet of the original $2g$ one-handles. [construct]

1.11 Consequently each drilled handlebody is the compression body obtained from an annulus times an interval by attaching $2g$ one-handles. Its positive boundary is precisely $\Sigma$; its negative annulus $A_\alpha$ or $A_\beta$ is the tube around its bridge arc. Compressing $\Sigma$ along the corresponding attaching circles gives that annulus. In particular every component of the complement of a single attaching system meets $\partial\Sigma$, so the diagram is balanced. This can also be read from the original cut sphere with the two endpoint disks deleted: it is an annulus, and cutting the attaching curves only adds the retained disk faces. [construct]

1.12 Glue the two drilled compression bodies along their original punctured splitting surface. Since the bridge isotopy and tube matching were explicit, the result is literally the exterior of $K'$, hence is ambient diffeomorphic to the exterior of the original binding. Its torus boundary is $A_\alpha\cup A_\beta$, joined along the two endpoint meridian circles. Choose the two sutured annuli as narrow collars of these joining circles. The remaining two annuli are $R_-$ and $R_+$. Each joining circle bounds a normal disk in the deleted tube at $p$ or $q$, so it is an actual meridian of $K'$. Their induced suture orientations are opposite. This proves the required peripheral marking; a longitude has not been substituted for a meridian. [construct]

1.13 **4. Retain the actual fiber class.** Carry a completed open-book page through the bridge isotopy and delete its boundary collar inside $N(K')$. The resulting surface $F'$ is properly embedded in the constructed exterior. In the carried page framing of $N(K')$, its boundary is the longitude with fixed normal angle. Each endpoint meridian circle meets it once, with the two sutured crossings having opposite boundary-region directions. Thus $F'$ is the actual decomposing Seifert surface, not an inferred polygon on $\Sigma$. [construct]

1.14 The complement of a binding tube in the original open book is the supplied mapping torus of the truncated page. Carry this model by the same ambient isotopy. Cutting at $F'$ opens the base circle to an interval and yields the marked product $F\times[0,1]$. At its two ends the original return map is still $\phi$; no assertion that $\phi$ is isotopic to the identity is used. The construction covers $g=0$ as well: the doubled splitting is a sphere, there are no attaching circles, and drilling the two bridge arcs gives the annular product diagram of the disk-open-book binding exterior. [construct]

1.15 **What this does and does not admit.** No repaired supplier was reread, revalidated or hashed for this construction. No canonical definition, statement, coefficients, manifold scope, metadata, gate or workflow control was changed. [construct]

2.1 New topological authoring segment, 2026-10-20. Compose this with the binding/bridge construction. The output is an adapted surface diagram of the actual exterior and its actual fiber; no old doubled-page intersections are retained or counted. [construct]

2.2 **Exact geometric problem.** Let $(M,\gamma)$ be the meridionally sutured exterior constructed in the binding donor, and let $S=-F'$ be its carried, cooriented fiber with the sign needed for top Alexander grading. Its boundary crosses each of the two meridional sutures once. In particular its single boundary component has a nonempty arc on each of $R_+$ and $R_-$. The construction below gives a finite balanced diagram $(\Sigma,\alpha,\beta)$ and a quasi-polygon $P\subset\Sigma$, with $\partial P=A\cup B$, such that $\alpha\cap B=\beta\cap A=\varnothing$ and the rounded surface [construct]

2.3 $$P\times\{1/2\}\ \cup\ A\times[1/2,1]\ \cup\ B\times[0,1/2]$$ [construct]

2.4 is equivalent to the actual marked $S$ through decomposing surfaces. The vertices of $P$ are on $\partial\Sigma$. The construction is allowed to change the diagram and its genus; it retains the exterior, peripheral marking and fiber isotopy class. [construct]

2.5 **Construct the middle polygon and its creases.** Straighten the two meridional boundary annuli as products of their core circle and a height interval, with height increasing from $R_-$ to $R_+$. Along the longitude $\partial S$, the two crossing arcs are vertical in these annuli. Choose a narrow collar of $\partial S$ inside $S$. For the arc of $\partial S$ lying on the positive side, join its two suture-crossing points by an interior parallel arc; the region between the original arc and this parallel arc is a boundary bigon $D_+$. Do the same on the negative side, giving $D_-$. Retain the endpoints at the two actual suture crossings. The remainder $P$ has one edge $A$ adjacent to $D_+$ and one edge $B$ adjacent to $D_-$. Its vertices are those crossing points, and its orientation is the given orientation of $S$. [construct]

2.6 Give $P$ constant function value $c=1/2$. Parametrize $D_+$ by an interval across its collar so the function increases from $c$ at $A$ to $1$ at $R_+$, matching the already specified boundary height on the sides. On $D_-$ it increases from $0$ at $R_-$ to $c$ at $B$. At $A$ crease the surface so its positive middle normal points toward $D_+$, and at $B$ crease it in the opposite direction. These are the two local graph models of an oriented right-angle crease. On a small normal neighborhood of each bigon extend the function constantly in that normal coordinate; near $P$ extend it by $c+\varepsilon n$, where $n$ is its positive normal coordinate. The crease choices make these extensions agree on their overlaps, after using smaller collar rectangles and a monotone interpolation. In particular the gradient is nonzero there and has the specified coorientation through the middle polygon. [construct]

2.7 Extend this locally defined function, together with the sutured boundary heights, over the remaining compact manifold. Use any finite relative smooth handle presentation to obtain a Morse extension, taking perturbations supported outside the prescribed neighborhood. Such a presentation can be obtained from a finite relative triangulation by thickening its simplices in increasing dimension; rounding their collars supplies the local Morse handle charts. All choices here are finite. Call the resulting function $f_0$. [construct]

2.8 **Reorder handles and remove the unwanted polygon feet.** Reorder the relative handles so index-one critical values lie below $c$ and index-two values above it. At the middle level this has the following explicit effect. Every index-one handle moved from above $c$ inserts a tube into that level, whose belt circle is an alpha curve. Every index-two handle moved from below $c$ inserts a tube with beta belt circle, as seen by reversing the handle chart. Minima and maxima crossing the middle add separate spherical level components. The actual surface $S$ is not discarded: intersect it with the new middle level, retaining the boundary bands. Its middle part $P'$ can acquire holes at the tube feet. The additional alpha belt circles themselves miss $P'$, and similarly for additional beta belt circles. [construct]

2.9 The following finite removal performs the required geometric repair. On each component of $P'$ choose a finite rooted tree from its nonempty $A$ edge meeting every component of its intersection with the old alpha circles. Push parallel alpha fingers along this tree to the root. After this, every alpha portion meeting $P'$ has an endpoint on $A$, with no closed alpha component confined to $P'$. The fingers are parallel inside narrow tree ribbons, so alpha circles remain mutually disjoint and miss $B$. Use a tree rooted on $B$ for beta circles. Its beta fingers likewise remain disjoint and miss $A$. In particular every component of $P'\setminus\bigcup\beta$ meets $B$: the beta arcs have both endpoints on $B$, and no beta circle remains in the interior. The corresponding statement holds with alpha and $A$ exchanged. [construct]

2.10 For a foot of an additional alpha-belt tube, choose an arc from that foot to $B$ inside $P'\setminus\bigcup\beta$. First slide every old alpha curve crossing this arc over the tube's alpha belt circle, using parallel copies of that arc. This clears the chosen corridor and preserves the complete disk systems. Then push the $B$ edge through the corridor and across the tube foot. In the actual manifold this last push is an isotopy of the negative boundary band of $S$: follow its negative gradient collar through the tube chart. Thus the surface remains equivalent as a decomposing surface, and the foot ceases to be a boundary component of its middle polygon. The push creates no beta intersection because the corridor misses beta. For a beta-belt foot, use the symmetric corridor to $A$, clear crossing beta curves by beta disk slides, and push the positive boundary band. Each operation removes one unwanted foot. There are finitely many, so the procedure terminates. [construct]

2.11 After this removal the middle polygon misses all auxiliary tubes introduced by handle reordering. Remove index-zero handles by a rooted spanning tree of the one-handle incidence graph, rooted at the nonempty incoming boundary; cancel each terminal zero/one pair in its actual handle chart. The manifold is connected to that incoming boundary, so such a tree reaches every zero handle. Use the dual rooted tree from the outgoing boundary to remove index-three handles with two-handles. The polygon and its boundary bands miss the auxiliary tube neighborhoods just cleared, so these cancellations can be made away from them. The remaining middle level and attaching circles give a relative diagram with only index-one and index-two handles. [construct]

2.12 Its two compressed boundary surfaces are exactly the original $R_-$ and $R_+$, and no closed compressed component remains. Since $\chi(R_-)=\chi(R_+)$, the two numbers of handles agree. Every component of either cut attaching surface meets the sutured boundary, so the diagram is balanced. By construction alpha misses $B$, beta misses $A$, and the rounded middle polygon with its bands is the original marked $S$ up to the explicit band isotopies. This gives the asserted surface diagram. [construct]

2.13 **What the cut represents.** Replace $P$ by the two copies $P_A,P_B$, retaining alpha only on $P_A$ and beta only on $P_B$. This is the literal diagrammatic cut along the rounded surface just constructed: below the middle level use the $P_A$ sheet, above it use $P_B$, and on the boundary bands use the same collar-height coordinate. The remaining exterior of $P$ keeps its old interval coordinate. Locally these descriptions meet by monotone interval rescaling, so the cut manifold and its sutures retain their actual marking. Since $S$ is the carried fiber, the resulting sutured manifold is the marked product already supplied in the binding donor. [construct]

2.14 This is a topological identification of the cut manifold. It does not identify its possibly nonempty attaching-curve diagram with the empty product diagram by signed chain maps. Nor does it make the diagram admissible, make it nice, classify its disk counts, construct coherent integral orientations, or prove the product computation is invariant. Those are still actual analytic and move operations. In particular no new claim of one outer generator follows from this construction. [construct] ∎
