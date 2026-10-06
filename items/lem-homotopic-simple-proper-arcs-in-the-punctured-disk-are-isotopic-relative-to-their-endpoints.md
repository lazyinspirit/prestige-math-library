---
id: lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints
kind: lemma
title: "Homotopic simple proper arcs in the punctured disk are isotopic relative to their endpoints"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 2
deps: [lem-plane-arc-complements-and-accessible-jordan-points, lem-finite-plane-graph-ear-and-face-facts, lem-smooth-finite-point-motions-extend-to-boundary-fixed-disk-isotopies, thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk, lem-a-plane-arc-has-a-rectangular-neighborhood-by-schoenflies, lem-jordan-schoenflies-extension-for-plane-curves, thm-brouwer-fixed-point-theorem, thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group, lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis, def-axiom-of-choice, def-standard-meridians-of-a-punctured-disk, def-homotopy-relative-and-path-homotopy]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-15.md"
      - "research/frontier-38-owner-30-alpha-batch-15-5a.md"
      - "research/frontier-38-owner-30-step5-hash-15-post.json"
    reviewed_raw_sha256: "841514bde8dc1fc0cb73f555004b83c8b26b60680c3e53c5f0b46184c3259215"
    content_sha256: "e4a8f60f5e3fc0a303ff1053d67973103f78c82a0414fdf4dc4006bae7f637c1"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, version 5.0 author draft, Proposition 1.7 and sections 1.2.4-1.2.7 (the bigon criterion for arcs and the half-bigon caveat), printed pp. 31-33 and 37-38"
      url: "https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf"
    - title: "Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, version 5.0 author draft, Proposition 1.10 with the statement that it works for arcs, printed pp. 35-38"
      url: "https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf"
---

## Statement

Assume AC. Let $\alpha,\beta$ be simple proper arcs in the punctured disk with the same
endpoints, each on $\partial D^2$ or at a puncture, homotopic relative to
endpoints through proper arcs. Then they are isotopic relative to endpoints as unoriented arc images. For distinct ordered endpoints their given parametrizations can also be joined by an isotopy of parametrized arcs.
Here an arc with a puncture endpoint is understood via its continuous extension
to $[0,1]$ in the filled disk; the homotopy is continuous on $[0,1]\times I$
there, its endpoints are fixed, and its interior avoids $Q_n\cup\partial D^2$.
Restricting away from a puncture endpoint gives the proper arc in
$D^2\setminus Q_n$.

## Facts & Assumptions

**Given:** AC and two simple arcs and a relative-endpoint homotopy with the compact
extension specified in the statement. The intermediate proper arcs in this
homotopy need not be simple.

[F1] Relative homotopy is the relation of
[[def-homotopy-relative-and-path-homotopy]]. Marked points and boundary
endpoints have the conventions of [[def-standard-meridians-of-a-punctured-disk]].

[F2] Under AC, every compact embedded plane arc has a prescribed straightening homeomorphism and hence rectangular and endpoint-sector neighborhoods
([[lem-a-plane-arc-has-a-rectangular-neighborhood-by-schoenflies]], [[def-axiom-of-choice]]).

[F3] Under AC, prescribed Jordan boundary maps extend over the disk regions
([[lem-jordan-schoenflies-extension-for-plane-curves]]).

[F4] Every continuous disk self-map has a fixed point
([[thm-brouwer-fixed-point-theorem]]).

[F5] Boundary-fixed disk homeomorphisms admit the Alexander isotopy
([[thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group]]).
The compact holed disk admits the explicit finite tether cut and free meridian graph of
[[lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis]].

[F6] A plane embedded interval has polygonally connected complement
([[lem-plane-arc-complements-and-accessible-jordan-points]]). A finite
2-connected graph has a rooted ear decomposition from a prescribed cycle
([[lem-finite-plane-graph-ear-and-face-facts]]).

[F7] Under AC, smooth collision-free finite point motions extend to boundary-fixed
smooth disk isotopies
([[lem-smooth-finite-point-motions-extend-to-boundary-fixed-disk-isotopies]]).
Every boundary-fixed punctured-disk mapping class has a diffeomorphism representative
([[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]],
statement part 3). This supplier is proved by evaluation and finite point motions,
independently of general arc isotopy.

## Proof

1.1 *A relative graph containing each arc.* We first treat one supplied arc $a$. If its endpoints are distinct, extend each interior marked endpoint to a distinct point of the outer circle by an auxiliary arc, disjoint from $a$ and all other marked points. The access at an interior endpoint comes from [F2]'s rectangular neighborhood: leave that endpoint in an unused sector inside a small disk missing all other marked points. The required complement inside the disk is connected. Indeed [F6] connects points in the plane minus the compact arc; replace the finitely many excursions of a polygonal path outside the round disk by outer-boundary paths avoiding its possible boundary endpoint, then push those compact paths slightly inward. Their distance from the original arc is positive. Remove other marked points by small finite detours. Joining the endpoint-access germs by a polygonal path and retaining the portion between its last contact with the initial germ and first subsequent contact with the terminal germ gives a simple auxiliary arc; loop erasure handles the polygonal portion. After the first auxiliary arc, the union is again an embedded interval with only one boundary endpoint, so the same argument supplies the second. The resulting crosscut together with the outer circle is a finite 2-connected plane graph. For coincident endpoints, the arc image is a Jordan loop. If the loop lies in the interior, add two disjoint bridges to distinct outer-boundary points, with distinct loop contacts; if it meets the outer boundary at its common endpoint, add one bridge with different contacts. Access at a loop contact comes from [F3]'s circle coordinates. To justify the second bridge, straighten the inner Jordan loop by [F3]; after the first bridge its complement in the disk is connected by the interval argument above. Polygonal paths there can be moved outside the straightened inner circle by detours along that circle with its bridge contact omitted. Those compact circle arcs have positive distance from the bridge and outer boundary. The same detour argument proves connectivity of the region between a loop touching the outer circle and that circle, omitting their one contact. Thus the bridges exist in the required complementary region. Subdivide the cycles and paths to remove loop edges and parallel edges. In each case deleting any vertex leaves the graph connected, so it is 2-connected. [F2, F3, F6, construct]

2.1 *A marked-set-relative smooth representative.* Reproduce the rooted ear decomposition of this graph from the outer circle in a target disk, using polygonal ears. At each stage an ear lies in one source Jordan face; its union with either boundary path gives two Jordan curves, so [F3] splits that face into two disks. Choose a polygonal target crosscut in the corresponding target face, subdivide it at the new vertices, and repeat. This constructs the same finite planar graph with the same face incidence and cyclic orders; prescribe the identity on the outer circle and corresponding parametrizations on all edges. Place target copies of the other marked points in their corresponding faces. The finitely many target marked points can be moved to the prescribed $Q_n$ by [F7]: choose fresh intermediate buffer points, move the points one at a time along polygonal paths avoiding the stationary points, then move the buffers to their assigned targets. Round and smoothly reparametrize each finite path to be constant at the joins. Separation and the boundary margin stay positive, so [F7] applies. The resulting target graph is piecewise smooth and has the prescribed marked vertices and face labels. Extend the graph map over each Jordan face by [F3]; the extensions agree on the graph, so they paste to a boundary-fixed disk homeomorphism. In each target face correct its images of the remaining marked points by the same buffer construction, using small supported Lipschitz translations inside that face as in the plane-arc supplier's point-normalization construction. These corrections fix the entire graph. We obtain a homeomorphism $h$ fixing every marked point and the outer boundary, and carrying $a$ to a piecewise smooth arc $e$. By [F7], the class of $h^{-1}$ has a diffeomorphism representative $g$ and an isotopy from $h^{-1}$ to $g$ fixing the outer boundary and preserving $Q_n$ setwise. Each individual point track is constant because it lies in the discrete set $Q_n$ and starts at that same point. Applying this isotopy to $e$ gives a relative-endpoint isotopy from $a$ to the piecewise smooth arc $g(e)$. No topological isotopy-extension theorem was assumed. [F3, F6, F7, step 1.1, construct]

3.1 *Finite transverse position with fixed endpoints.* Perform step 2.1 for both arcs. At an interior marked endpoint separate their finitely many tangent germs by a small rotation $z\mapsto q+e^{\mathrm{i}t\theta\chi(|z-q|)}(z-q)$, with cutoff supported in a small disk missing the other marks. At a boundary endpoint use a boundary-flattening coordinate $(x,y)$ with $y\ge0$ and the small shear $(x,y)\mapsto(x+tby\chi(x,y),y)$; the Lipschitz bound of the supported displacement can be made below one, as in the point-translation construction, and $y=0$ is fixed. Pick the rotation angle or shear coefficient outside the finitely many values aligning tangent germs. Endpoint germs enter the disk transversely in the graph construction, so these shears separate them. Each regular smooth germ is a graph over its tangent coordinate; multiplying its graph height by a cutoff interpolation straightens a smaller terminal germ without changing the endpoint or leaving its narrow interior cone. This is an isotopy of embedded arcs and extends by the corresponding small normal-coordinate displacement. Now the germs are distinct straight rays. On the compact remaining parts, finite normal strips and sufficiently fine polygonal interpolation give embedded piecewise polygonal representatives; the near-parameter injectivity follows from the graph coordinate, and far-parameter pieces have positive separation by compactness. Interpolate the graph heights in those strips, retaining the endpoint rays. A generic finite perturbation of their vertices avoids tangencies and overlapping edges. The two arcs now have finitely many transverse interior intersections and disjoint fixed endpoint germs. All changes fix the endpoints and avoid the other marked points. [F2, F3, step 2.1, construct]

4.1 *Ordinary bigons and the projection argument.* The homotopy class has a representative disjoint in its interior from the fixed arc: push that arc to one side in its narrow strip, fixing its endpoints. Thus a homotopy reducing intersection to zero exists. First normalize its terminal strips. By compact-square continuity, a common strip $0<u<\varepsilon$ maps into a small disk about its endpoint $q$ containing no other mark. For an interior endpoint, lift its angle continuously on the contractible rectangle $(0,\varepsilon]\times I$, and write $H(u,t)-q=R(u,t)e^{\mathrm i\Theta(u,t)}$ with $R>0$. Reparametrize the initial and final straight germs so their radii are linear in $u$. With a cutoff $\eta(u)$ equal to1 for $u\le\varepsilon/2$ and0 for $u\ge3\varepsilon/4$, interpolate the radius to $uR(\varepsilon,t)/\varepsilon$ and angle to $\Theta(\varepsilon,t)$. At $t=0,1$ these models already equal the straight germs, so the modification fixes both endpoint arcs; positivity avoids $q$ and both original and model radii tend uniformly to0. In a boundary half-disk use the same interpolation with angle in $(0,\pi)$, so the interior stays inside. Treat each terminal strip separately even at coincident ends. Approximate the positive radius and real lifted angle of the resulting straight-germ family by finitely piecewise linear functions of $t$, keeping their end values and using a generic angle perturbation. The bounded angle range then meets the fixed endpoint ray in only finitely many isolated times. On the remaining compact parameter square all images have positive distance from the forbidden marked points and boundary. Triangulating that square and making a sufficiently small generic perturbation of its finitely many vertex images, with the prescribed terminal-germ boundary data retained, makes the homotopy piecewise transverse. Thus its inverse-image intersections have a finite polygonal description, including the endpoint sectors. A returning component of the inverse image gives a nullhomotopic loop with one side in each arc. Use the cover formed by gluing copies of the compact holed cut disk along paired shores, indexed by reduced meridian words, and append the lifted puncture collars; its adjacency tree gives a simply connected cover. Compact pieces meet only finitely many cut disks and bounded collar rectangles. Enlarge this finite subtree to include every corner star met by the piece. Successive gluing along boundary intervals produces a disk neighborhood, or a half-disk neighborhood at an actual outer-boundary point; thus the compact lifted Jordan curves and their bounded regions lie in a disk exhaustion where the plane Jordan theorem applies. The families of lifted arcs are locally finite: properness bounds their parameter ranges over a compact set away from deleted ends, and finitely many covering charts then admit only finitely many lifts meeting a smaller compact neighborhood. Lift the nullhomotopic loop. Inside a compact disk neighborhood choose an innermost bigon across ALL lifts of both arcs. If another lift enters such a disk, an outermost component of its intersection with the disk, together with the appropriate existing side, cuts off a smaller bigon; repeat this reduction. Transverse position and local finiteness give finitely many intersections in that compact disk, so the reduction terminates with no other lifted arc entering its interior. Its boundary projects injectively: each side is embedded, the two corner signs are opposite, and an identification between different sides would give another transverse lifted crossing on a side. One branch of that transverse curve would enter the disk, contradicting the innermost choice. For a nonidentity deck map $\phi$, its boundary and the original boundary are disjoint: if $x=\phi(y)$ were on both, injectivity of the boundary projection would give $x=y$, contradicting the fixed-point-free deck action at an actual covering point. This excludes shared sides and tangencies as well as crossings. If disk interiors overlapped, disjoint Jordan boundaries would imply $\phi(D)\subset D$ or $\phi^{-1}(D)\subset D$. [F4] would give a deck fixed point, again impossible. Hence the entire disk projects injectively and is a compact puncture-free ordinary bigon in the actual punctured surface. [F1, F4, F5, step 3.1, construct]

5.1 *Endpoint-sector bigons use a different actual surface.* A returning inverse-image component ending at a fixed endpoint $q$ bounds a parameter sector adjacent to that endpoint edge, with the opposite endpoint edge omitted. If $q$ is a puncture, fill just $q$ and keep every other puncture deleted; if $q$ is a boundary point, no puncture is filled. The homotopy on this sector maps into that surface because all its nonendpoint tracks avoid every marked point, and its endpoint edge is constantly $q$. Lift this compact sector to the simply connected cover of that surface. The lift of $q$ is an actual surface point, not an ideal end. Choose an innermost disk between the two lifted arc sides; either it is an ordinary bigon, or it has that lift of $q$ as one corner. At this corner the chosen endpoint germs are distinct, and their projections hit $q$ nowhere else. The same finite-subtree disk exhaustion and outermost-subdisk reduction across all lifts apply in this filled surface; properness is retained at every other deleted end and the filled corner has an ordinary covering chart. The boundary-injectivity and disjoint-deck-boundary argument of step 4.1 then applies, and [F4] now applies on this actual filled surface. The projected disk contains no other puncture, and contains $q$ only at its boundary corner: injectivity of the whole disk excludes a second interior preimage of $q$. Thus this is a legitimate endpoint-sector disk in the filled model. No fixed-point-free assertion was made about a completed puncture tip in the original punctured cover. A half-bigon using an outer-boundary interval between two different fixed endpoints is not removed; only a sector at the single fixed endpoint is used here. [F3, F4, F5, step 3.1, step 4.1, construct]

6.1 *Finite ambient reductions.* For an ordinary bigon, prescribe the arc push across a slightly enlarged compact disk neighborhood, fixing its outer boundary. The moving subarc is a crosscut there, so its two complementary Jordan pieces extend the prescription by [F3]. The Alexander isotopy [F5] gives the ambient disk move. At a marked endpoint corner choose a slightly enlarged disk neighborhood containing that endpoint in its interior and no other marked point. Extend the moving arc from that endpoint by an auxiliary arc to the neighborhood boundary, on a free side, as in step 1.1; this makes a crosscut. Do the same for its prescribed image after the sector push. The relative graph/face construction of step 2.1, with the endpoint vertex mapped to itself and the outer boundary mapped identically, gives the required neighborhood homeomorphism. Choose its disk coordinate centered at this fixed marked point, using [F3]’s pointed extension, and apply the Alexander formula; that center stays fixed throughout. At a boundary endpoint use a half-disk neighborhood and keep its outer-boundary edge fixed. These moves fix all other marked points and the outer boundary. Each ordinary move removes two transverse corners and each endpoint-sector move removes one interior corner. Consequently the finite number of interior intersections decreases until the arc interiors are disjoint. [F3, F5, step 4.1, step 5.1, construct]

7.1 *The last disk and parametrization.* For distinct endpoints, the disjoint arcs form a Jordan curve in the filled disk. Their relative homotopy gives winding number zero about every marked point other than the endpoints, so its bounded region contains none. By [F3] take its endpoints to $(-1,0),(1,0)$ and its two sides to the upper and lower semicircles. The arcs $(x,(1-2t)\sqrt{1-x^2})$ give an isotopy from one side to the other with fixed endpoints. For coincident ends, the two Jordan loops meet only at their common endpoint. Their winding numbers about the other marks agree. If their bounded disks are disjoint, both disks contain no other mark, so shrink the loops toward the common endpoint in disk coordinates by positive homotheties centered at that boundary point. The images remain simple and never collapse to a point. Match the two resulting small images inside a common endpoint neighborhood by the relative graph/face homeomorphism construction of step 2.1, and then [F5]’s Alexander isotopy: center the coordinate at an interior marked endpoint, or keep the boundary edge fixed at an outer endpoint. If they are nested, the region between them contains no mark; split the common contact into two boundary copies in the polygonal representatives. Its completed cut is a polygonal disk, and the same disk-side isotopy descends after identifying those fixed copies. These are isotopies of unoriented images. For distinct ordered endpoints, the final parametrization differs from the target by an increasing endpoint-fixing homeomorphism $f$ of $[0,1]$; interpolation $(1-t)f+t\operatorname{id}$ corrects it through embedded parametrized arcs. Compose the finite moves with steps 2.1 and 3.1. Compact-domain continuity includes each filled puncture endpoint. AC is used precisely through the plane-arc neighborhoods, relative Jordan extensions, finite point-motion extensions and smooth representative clause. This proves the asserted general topological conclusion. [F3, F5, step 2.1, step 3.1, step 6.1, construct] ∎

## Remarks

The bigon and homotopy arguments are the arc versions of Farb–Margalit,
Lemma 1.8 and Proposition 1.10, explicitly stated for arcs in section 1.2.7.
Minimal position means the absence of removable bigons; it does not imply
the existence of a bigon whenever intersections remain. Homotopy is used
above to establish that the minimum intersection number is zero.

The unoriented convention is essential at coincident endpoints. For example,
$z(u)=\tfrac14(1-e^{2\pi i u})$ and its reverse have their only occurrence of $0$ at
the two endpoints. Writing their positive radii as $\tfrac12\sin(\pi u)$,
interpolating their lifted polar angles through the constant angle gives a
compact proper homotopy fixing $0$ and avoiding it in the interior. It passes
through a nonsimple out-and-back path. The two parametrizations cannot be
isotopic through embedded based loops because their Jordan orientations differ;
their unoriented images are the same. This is the image convention explicitly
used by Farb–Margalit in section 1.2.7. All stem consumers have distinct ordered
endpoints, so their parametrization conclusion uses the adjustment above.
