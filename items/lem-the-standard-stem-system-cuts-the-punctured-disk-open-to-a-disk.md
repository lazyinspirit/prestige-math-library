---
id: lem-the-standard-stem-system-cuts-the-punctured-disk-open-to-a-disk
kind: lemma
title: "The standard stem system cuts the punctured disk open to a disk"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 1
deps: [def-standard-meridians-of-a-punctured-disk, def-homeomorphism-and-open-maps, lem-jordan-schoenflies-extension-for-plane-curves, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, version 5.0 author draft, section 1.3.1 (cutting a surface along a proper arc, boundary bookkeeping), printed pp. 38-39"
      url: "https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf"
    - title: "Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, version 5.0 author draft, section 2.2.1 (Alexander lemma) and the once-punctured disk remark, printed pp. 50-51"
      url: "https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf"
---

## Statement

Assume AC. Cutting $D^2\setminus Q_n$ open along the standard stem system
$s_1,\dots,s_n$ of [[def-standard-meridians-of-a-punctured-disk]], **with each
puncture end completed by its slit-tip point**, yields a compact connected
surface $H$ homeomorphic to the closed disk $D^2$. Each slit has two boundary
sides meeting at its puncture tip; the outer boundary is opened at $d$ into
boundary arcs. A homeomorphism of $D^2$ fixing $\partial D^2$, $Q_n$, and
all the stems pointwise lifts to a homeomorphism of $H$ fixing $\partial H$
pointwise, and conversely such a homeomorphism of $H$ reglues to a
homeomorphism of $D^2$.

## Facts & Assumptions

**Given:** AC, the disk and the finite standard stem system of
[[def-standard-meridians-of-a-punctured-disk]]. Cutting includes the indicated
end completion; the uncompleted cut of the punctured surface is obtained by
deleting the puncture tips from $H$.

[F1] A Jordan curve bounds a closed disk, with a prescribed boundary
parametrization extending to a disk homeomorphism, under the stated AC
([[lem-jordan-schoenflies-extension-for-plane-curves]],
[[def-axiom-of-choice]]).

## Proof

1.1 *A concrete model of a slit tip.* Choose pairwise disjoint small round disks $B_i$ about the punctures, meeting only their own stems. In polar coordinates about $q_i$, put the stem radius at angle $0$. The cut of $B_i\setminus\{q_i\}$ is $(0,R_i]\times[0,2\pi]$, not a compact annulus or disk. Adjoin its missing tip by forming $E_i=([0,R_i]\times[0,2\pi])/(\{0\}\times[0,2\pi])$: the whole zero-radius edge is collapsed to one point. This is a closed disk (a rectangle with one edge collapsed, equivalently a triangle), whose boundary is the outer circular arc and the two radial sides joined at the tip. The map $(r,\theta)\mapsto q_i+r e^{\mathrm{i}\theta}$ extends continuously to the tip and, on identifying the two radial sides, gives the filled disk $B_i$. Deleting the tip before regluing gives $B_i\setminus\{q_i\}$. [given, construct]

2.1 *The outer piece.* Put $\Omega=D^2\setminus\bigcup_i\operatorname{int}B_i$. Open it along the truncated stems from $d$ to $C_i=\partial B_i$, separating all sectors at their common endpoint $d$. To see that the result is a disk, first thicken each truncated stem to a narrow strip, with strips disjoint away from a small half-disk at $d$. The region left between these strips and the $B_i$ has one polygonal Jordan boundary: tracing it visits the outer boundary once and makes one detour along both sides of each strip and around its associated hole. It is a closed disk by [F1]. Shrinking the strip widths gives the same cut topology, since each strip-side collar has a rectangular coordinate chart and changing its width is a homeomorphism. Each opened $C_i$ is a closed boundary arc $A_i$; at $d$ there are $n+1$ sector copies when $n>0$, rather than just two copies for the whole star. For $n=0$ the outer piece is $D^2$. [F1, step 1.1, construct]

3.1 *Attaching the completed tips.* Glue the circular boundary arc of $E_i$ to $A_i$ with matching radial-side endpoints. Gluing two disks along a proper closed boundary arc gives a disk: map the two disks to the upper and lower half-disks, with the glued arcs as their common diameter, and use these maps on the quotient. Applying this construction finitely many times to the outer disk and the $E_i$ yields a compact disk $H$. Its boundary consists of the outer boundary arc and the two sides of every stem, with each pair joined at $q_i$ and with consecutive sides joined at the appropriate sector copy of $d$. [step 1.1, step 2.1, construct]

4.1 *The quotient and its topology.* Identify matching points on each pair of stem sides, including the copies of $d$. The quotient map $\pi:H\to D^2$ is the ordinary coordinate map off the cuts and the polar map of step 1.1 at a tip. It is a continuous surjection whose fibers are exactly these prescribed identifications; compactness of $H$ and the Hausdorff property of $D^2$ show that its quotient is the filled disk $D^2$. Removing the images $q_i$ of the added tips recovers $X=D^2\setminus Q_n$. Thus the compact disk assertion concerns the completed cut, with both filled and punctured quotients accounted for. [step 3.1, construct]

5.1 *Lifting maps.* A homeomorphism $f$ as in the statement preserves each local side of every stem: an orientation-reversing map would reverse the outer boundary, which $f$ fixes pointwise, and an orientation-preserving map fixing an oriented stem cannot interchange its sides. Thus it lifts on the open cut surface, fixing both stem-side copies and all sector copies of $d$. Near a tip, continuity of $f$ at $q_i$ implies that points with radius tending to zero have image radius tending to zero, uniformly in their angle; the collapsed-edge model therefore extends the lift continuously by fixing the tip. The same argument applies to $f^{-1}$, so the lift is a boundary-fixed homeomorphism of $H$. [given, step 1.1, step 4.1]

6.1 *Regluing maps and isotopies.* A boundary-fixed homeomorphism $g$ of $H$ respects every fiber of $\pi$ and induces a homeomorphism of the filled disk, with inverse induced by $g^{-1}$. It fixes the outer boundary, stems and punctures pointwise. If $G:H\times I\to H$ is a boundary-fixed isotopy, the map $(z,t)\mapsto\pi(G(z,t))$ is constant on the fibers of $\pi\times\operatorname{id}_I$; this map is a quotient map because its domain is compact and its target is Hausdorff. It therefore induces a continuous isotopy $D^2\times I\to D^2$, including at every puncture uniformly in time. This proves the asserted correspondence and the isotopy version needed by consumers. [step 4.1, step 5.1, construct] ∎
