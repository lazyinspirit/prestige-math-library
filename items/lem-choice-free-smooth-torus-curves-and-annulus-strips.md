---
id: lem-choice-free-smooth-torus-curves-and-annulus-strips
kind: lemma
title: "Choice-free smooth torus curve normalization and annulus strips"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [lem-essential-simple-curve-on-torus-is-primitive, lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars, lem-choice-free-isotopy-extension-for-a-compact-smooth-source, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. All curve approximations, intersections and relevant deck translates are finite; smooth disk parameters and supported isotopies use the named finite suppliers."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed p.16, finite boundary-curve vertical/horizontal normalization. The primitive reduction, finite bigon moves and smooth annulus-strip parameters are proved explicitly here."
---

## Statement

An essential smooth embedded circle in the standard torus $T=\mathbb R^2/\mathbb Z^2$ represents a nonzero primitive integral homology class. A finite disjoint family of essential smooth circles can be carried by a jointly smooth ambient isotopy of $T$ to parallel affine circles. Two essential circles with the same primitive unoriented class are smoothly ambient isotopic. The components between disjoint essential circles have smooth annulus parameters, with prescribed product collars on their boundary circles. No choice axiom is assumed.

Likewise two smooth spanning arcs of a parametrized annulus with the same endpoints and relative winding number are smoothly ambient isotopic relative to any collars on which they already agree. When disjoint, they have a smooth disk-strip parameter; disjoint essential circles in a parametrized annulus have smooth annulus-strip parameters. All isotopies may be stationary near their time endpoints.

## Facts & Assumptions

**Given:** The standard torus or parametrized annulus and the indicated finite smooth curve or arc system.

[F1] An essential embedded PL circle in the standard torus has primitive nonzero homology class, by a transverse circle of intersection $\pm1$ ([[lem-essential-simple-curve-on-torus-is-primitive]], full proof).

[F2] Planar smooth Jordan disks admit smooth parameters and extensions retaining specified boundary collars, without choice ([[lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]], Statement).

[F3] Compact-source smooth embedding isotopies extend ambiently with compact support, without choice ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]], Statement).

[F4] Full-rank Euclidean coordinate maps have smooth inverses ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], Statement).

## Proof

1.1 A smooth circle in the flat torus has a two-sided normal strip: rotate its unit tangent by $\pi/2$ in the oriented flat metric and use $\gamma(s)+r n(s)$ in local lifts. Its derivative is invertible at $r=0$; [F4], compactness and separation of distinct circle parameters give one injective strip. Subdivide its parameter into finitely many intervals lying in lift charts and replace their images by chords. Sufficiently fine chords have positive tangent projection and uniformly small normal error, so the resulting polygon is an embedded normal graph over the circle, exactly as for the inscribed polygon in [F2]'s proof. Normal graph interpolation gives a homotopy in the torus. The polygon is PL in a finite subdivision of the standard square triangulation (subdivide its finitely many crossings with square edges). It is essential and has the same homology class. Apply [F1]. Any two disjoint essential circles have proportional classes, since their algebraic intersection is zero; primitive nonzero classes with zero determinant agree up to sign. [F1, F2, F4, given, construct]

2.1 We give the finite bigon reduction with its smooth realization. Apply an integral unimodular linear torus map to put the common primitive class in direction $(1,0)$. Lift to the annular cover $\mathbb R^2/\langle(1,0)\rangle$ and then to the plane. Each reference lift is a proper horizontally periodic line in a bounded vertical strip. Its translates are disjoint. When two circles intersect, their signed crossing sum is zero; hence a segment of a lift leaves and returns to the same side of a reference lift. Among return regions choose one innermost with respect to the finitely many translates meeting this bounded excursion. Any further arc entering it has an innermost return through its reference boundary interval, giving a smaller return region. Reference lifts cannot enter without such a return either. Thus it is an empty bigon. Its projection is injective: translated boundaries cannot cross inside it, while strict nesting of it and a nonzero translate is impossible for bounded equal-area regions. The same argument for spanning arcs uses their strip lifts with the same translated endpoints; equal winding is precisely that matching-endpoint condition. A failure of a bigon in the presence of crossings would force all crossings of the two lifts to have the same sign, contrary to the zero crossing sum or the equal endpoint order. There are finitely many downstairs crossings after a small finite chart perturbation; that perturbation is a graph embedding isotopy, extended by [F3]. [F1, F2, F3, step 1.1, construct]

3.1 Each empty bigon has smooth quadrant charts at its transverse corners, by [F4]. Truncate those corners, use [F2] with their prescribed boundary collars on the remaining planar Jordan disk, and restore the quadrants. This gives a lens chart with boundaries $y=0$ and $y=\phi(x)$, where $\phi>0$ between two simple zeros and negative just outside. For small $\delta>0$ and a cutoff $\psi$ equal to one between the zeros, the graphs $y=t\psi(x)(\phi(x)+\delta)$ move the lower arc smoothly over the upper arc, fixed near the endpoints of a slightly larger interval. Outside the two zeros the moving graph remains above $\phi$ wherever it could cross, since its difference is $\psi\delta-(1-\psi)\phi>0$. The empty bigon and a thin outer collar keep the track off all other curve portions. By [F3] this removes two crossings by a smooth ambient isotopy. Repeat finitely often. Disjoint arcs with matching endpoint lifts bound a disk strip; consecutive disjoint periodic circle lifts bound an annulus strip. To see both the topology and the smooth parameters, choose a simple arc between the two boundary curves in the strip, and cut along its period translates. Such an arc is obtained from a finite chain of coordinate disks by erasing repeated loops and smoothing its finitely many joins. The cut region is a bounded planar Jordan disk with paired cut-edge collars. Use [F2] to prescribe equal product parameters on the two cut edges and reglue; its quotient is a smooth annulus parameter. In the arc case there are no paired cut edges and [F2] directly gives the disk strip. Thus there is no merely topological annulus parameter being silently treated as smooth. [F2, F3, F4, step 2.1, construct]

4.1 For an empty family take the identity isotopy. Otherwise move disjoint curves across these smooth strips, and adjust their pointwise parameters by interpolating increasing interval maps or increasing periodic angular lifts. These are smooth embedding isotopies, so [F3] extends them. This proves the two-curve and two-arc assertions. For a finite disjoint torus family, first move one circle to an affine representative. Cut along it. The other circles are linearly ordered in the resulting annulus by their disjoint strip lifts. Choose the first remaining circle from one boundary. The strip up to it contains no other remaining circle. Use its smooth strip parameter to move it to a level in a small affine collar of that boundary, with support away from the boundary itself and from all other circles. That move has an explicit positive transverse interpolation in the strip, extended by [F3]. Regard this new affine circle as the boundary of the remaining annulus and repeat. This finite procedure retains every already affine circle and gives parallel affine levels for the whole family, using actual ambient isotopies at every step. All time changes can be stationary near their ends, and protected arc collars remain untouched by choosing bigons and strips outside them. Every selection, perturbation and reduction was finite. [F2, F3, step 1.1, step 3.1, construct] ∎
