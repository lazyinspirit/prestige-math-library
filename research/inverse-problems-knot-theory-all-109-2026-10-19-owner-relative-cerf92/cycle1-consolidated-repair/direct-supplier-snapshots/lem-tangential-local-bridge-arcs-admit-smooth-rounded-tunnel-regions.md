---
id: lem-tangential-local-bridge-arcs-admit-smooth-rounded-tunnel-regions
kind: lemma
title: "Tangential local bridge arcs admit smooth rounded tunnel regions"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - thm-collar-neighborhood-theorem
  - lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms
  - lem-broad-compression-comparisons-preserve-retained-disks-and-smooth-local-moves
  - lem-proper-compression-disks-admit-neat-witnesses-with-standard-cut-balls
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
---

## Statement

Assume Countable Choice. In a smooth boundary half-ball let $\tau$ be a smooth embedded arc, with two distinct endpoints in its flat boundary disk $D$ and all other points in the interior. Supply a smooth rank-two embedded bridge disk $\Delta$ with boundary $\tau\cup b$, where $b\subset\operatorname{Int}D$ is a smooth embedded interval. Ordinary smooth boundary points and transverse corners of the disk at those endpoints are permitted. Neither the arc nor the disk is required to be transverse to $D$.

There are arbitrarily small smooth rounded tunnel regions $N$ around $\tau$, with $N\cap D$ two disjoint smooth end disks, whose remaining boundary is an annulus, and with a smooth product parametrization as an attached one-handle. Such a parametrization uses an auxiliary neat core; it need not have the original tangent arc as its coordinate axis. The supplied $\tau$ is contained in $N$, and $\Delta\cap N$ is a strip along $\tau$ with its endpoint sectors. The closure $\Delta_0=\overline{\Delta\setminus N}$ is a smooth broad proper disk in the drilled half-ball. Its boundary traverses the lateral annulus longitudinally once, so meets a suitable meridian once transversely. It may be replaced by a neat disk with the SAME boundary if necessary. Cutting the drilled ball along that disk gives a ball, with compatible smooth rounded collars; the complement outside an arbitrarily small neighborhood of $\Delta\cup D$ is fixed. The region $N$ and this cutting disk give the standard relative one-handle/meridian-longitude stabilization model, with no twist.

All constructions can avoid any disjoint compact protected data. This assertion constructs a smooth neighborhood of a broad proper arc; it does not assert that a smooth boundary-preserving diffeomorphism makes that given arc transverse.

## Facts & Assumptions

**Given:** The supplied half-ball, interval, and actual smooth or cornered bridge witness.

[F1] Smooth local inverse charts, finite cutoffs and boundary collars exist under Countable Choice. ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]], [[thm-collar-neighborhood-theorem]])

[F2] Smooth Jordan disk coordinates extend prescribed boundary collars. ([[lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms]])

[F3] The positive normal-fiber comparisons explicitly constructed for broad disks are boundary-fixing homeomorphisms and are smooth away from the original boundary edges; they do not assert smooth tangency-changing conjugacy. The local construction needs only its graph and positive normal height, not the global ball hypothesis. ([[lem-broad-compression-comparisons-preserve-retained-disks-and-smooth-local-moves]], Proof1.1–3.1)

[F4] Once broad proper disks are known to have ball cut components, they admit neat replacements with the same boundaries and standard smooth rounded cut-ball parameters. ([[lem-proper-compression-disks-admit-neat-witnesses-with-standard-cut-balls]])

## Proof

**Given:** The data in the Statement.

1.1 Choose disjoint boundary half-ball charts at the two endpoints, with $D$ the plane $r=0$. A sufficiently small Euclidean half-ball in such a chart meets $\tau$ in just its initial segment and $\Delta$ in just its endpoint sector. Here is the required control, including tangencies. Extend a source chart of the rank-two disk to a smooth surface chart $F$ near that endpoint. Uniformly on its small source domain, $F(x)=Ax+O(|x|^2)$, where $A$ is injective. Thus $d|F(tx)|^2/dt=2t|Ax|^2+O(t^2|x|^3)>0$ for $t>0$ small. Its source boundary is a smooth half-plane or a transverse sector, up to a smooth change of coordinates. The same positive radial estimate applies on each of its two boundary intervals. Hence small spheres meet the disk in one interval, with one end on $\tau$ and one on $b$, and meet each of those intervals exactly once and transversely. This proves the asserted sector description; it does not use a nonzero boundary-normal derivative. Shrink these end half-balls away from the protected data. [F1, given, construct, algebra]

2.1 Between their spherical boundaries the remaining compact arc is in the open half-ball. Take a smooth normal disk field along it, with one normal direction the inward direction of $\Delta$ transverse to $\tau$; extend a local such field along the interval by finite partitions and normalize its nonzero tangent component. Its other normal direction is the oriented cross product. The resulting tubular map has invertible derivative on the zero section and is injective for small radii: local injectivity follows from [F1], and pairs outside a common local chart have a positive separation by compactness. Choose small variable radii so its intersection with $\Delta$ is exactly the narrow strip on that side of $\tau$. Join the ends of this tube to the two end half-balls in their small spherical collars, and round those joins away from $D$ and the two transverse intersection intervals of step1.1. The radius and the rounding can be chosen so those intervals continue to the two sides of the strip, with no additional intersection: they are transverse compact intersections, and all remaining portions have positive separation. This produces a smooth region $N$ with precisely two flat end disks and a lateral annulus. Its intersection with $\Delta$ consists of the two sectors joined by the strip; its inward frontier on $\Delta$ is one smooth interval $\delta$ joining the end disks' boundary circles. In the unchanged middle tube $\delta$ is longitudinal. The disk $\Delta_0$ is the complementary closed disk, with boundary the remaining part of $b$ and $\delta$, smoothing their endpoint corners if desired. Its interior is in the drilled interior. [F1, step 1.1, construct]

3.1 The REGION $N$ has the asserted smooth attached-one-handle parametrization without assigning its axis to the original $\tau$. Each end half-ball has standard rounded disk-collar coordinates; choose a short smooth inward axis there, then bend it to the old middle axis before the collar used in step2.1. Choose its normal disk frame to agree with the tube frame at that collar. The radial disks in the end cap, followed by these cross-sectional disks, give the product: the successive radii are positive, and their strictly increasing axial collar parameters identify the cap-to-tube overlap. Equivalently, flatten the attaching disk between an end half-ball and the tube by translating its graph in its normal collar; then the two disk products concatenate. This is a finite smooth collar construction, with [F2] supplying the prescribed rim maps. It gives a neat auxiliary core and is fixed on the remaining boundary. A middle cross section is a cocore of this product. Its rim meets $\delta$ once and transversely, since $\delta$ is the one longitudinal interval of the middle tube and has no return there. The sectors in step1.1 lie in the end caps and contribute no additional intersection. [F1, F2, step 1.1, step 2.1, construct]

3.2 Verify the cutting topology before invoking any smooth ball theorem. Work in finitely many surface charts along the actual bridge disk. Away from $b$ these are its ordinary disk-normal product charts. Along $b$ use the following boundary-fixed topological collar if the disk is tangent: in a projection chart its height is $r=R(s,v)>0$ for $v>0$, and [F3]'s increasing fiber map sends it to $R+\epsilon v\chi$, fixing $r=0$. At a transverse point the ordinary boundary collar suffices. These finite charts provide a topological rectangular normal neighborhood of the bridge disk relative to its bottom. At an endpoint the sector description of step1.1 supplies the missing corner: parametrize its successive radial intersection intervals from their $b$ end to their $\tau$ end, linearly in their interval parameters. These parameters agree with the two boundary collars after an increasing reparametrization of the interval. Extension across the normal coordinate uses the same increasing fiber maps as [F3]. Thus the endpoint sector is a topological corner sector even when its original smooth boundary tangents agree. In these coordinates drilling $N$ removes a groove along the upper edge $\tau$ of the rectangle; cutting along the remaining rectangle $\Delta_0$ opens that groove to its lower boundary edge $b$. The two new copies of the rectangle are then exterior boundary faces. Translating the resulting open rectangular collar outward, level by level in its normal coordinate, identifies the closure with the original half-ball; it is the identity beyond this collar and the two end sectors. Hence the actual cut component is a topological ball. This argument is about the given smooth region and given disk: only the coordinate comparison through a tangency is topological. [F1, F3, step 1.1, step 2.1, construct]

4.1 Apply [F4] to the broad proper disk $\Delta_0$ in the drilled region, whose cut-ball topology was proved in step3.2, if its boundary collars are not neat. Its boundary curve is retained exactly, as are the cocore and all data outside the chosen small bridge neighborhood. Round the finite new face corners. The resulting cut ball has actual smooth standard parameters by [F4], and these retain the labelled meridian and longitudinal interval. This proves the smooth ball assertion without treating the topological comparison through the original tangency as a diffeomorphism. The cocore cuts the transferred region back into its two end collars, while this cutting disk opens the complementary groove. The meridian and longitude intersect once by step3.1; the longitude is selected by the supplied bridge disk, so there is no independent twist. Capping the exterior model disk gives precisely the meridian-longitude genus-one splitting, and removing that cap gives its relative connected-sum model. Every support can be as small as desired by first choosing the endpoint charts and then the middle radii; finitely many positive separation bounds retain the protected data. All choices after [F1]–[F4] are finite. [F1, F2, F4, step 2.1, step 3.1, step 3.2, construct] ∎
