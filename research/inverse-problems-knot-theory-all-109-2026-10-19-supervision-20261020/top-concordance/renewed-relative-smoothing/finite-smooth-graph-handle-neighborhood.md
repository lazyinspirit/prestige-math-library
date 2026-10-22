# A finite smooth graph has an arbitrarily small zero-/one-handle neighborhood

This is a finite local operation, not a triangulation theorem for a TOP or
smooth manifold. It is usable only after the ambient smooth structure and
the actual embedded graph have been supplied. It does not manufacture a
relative handle presentation of an arbitrary comparison cobordism.

Let X be an actual smooth n-manifold, n≥3, and let Γ⊂int X be a finite
embedded graph whose closed edges are smooth embedded arcs (or smooth loops
subdivided at a marked point), with nonzero one-sided derivatives at their
endpoints. At every vertex require an actual smooth vertex chart in which
the incident half-edges are distinct radial segments; alternatively these
vertex ball/star models may be part of the supplied graph data. Distinct open
edges are disjoint. This excludes arbitrary tangential or nonstandard
vertex germs. Let U be an open neighborhood
of Γ, and let V be an open cover of Γ in U. Then Γ has a compact smooth
regular neighborhood H⊂U built from finitely many smooth n-balls and
one-handles. Every handle can be made to lie in one member of V. The
neighborhood retracts onto a graph obtained from Γ by finite subdivision.
For a positive continuous control tolerance, choose V sufficiently fine;
then each handle has the required projected diameter. No assertion that
the whole connected H has small diameter is intended.

First subdivide each compact edge into finitely many subarcs lying in
members of V. A finite subcover of its parameter interval and an ordinary
Lebesgue number give this subdivision. At every original and new vertex
choose a smooth coordinate ball whose closure lies in the corresponding
member of V, with all the finitely many vertex balls pairwise disjoint.
Choose the radii so small that each incident half-edge crosses its ball
boundary once and transversely and no nonincident edge meets the ball.
This is immediate in the supplied radial vertex models. At a new subdivision
vertex the smooth arc straightening chart supplies the standard two-ray
model. All remaining compact nonincident edge portions are separated from
the vertex. Shrink the balls inside the intersections of the finitely many
cover members assigned to their incident subarcs, so every subsequent
attaching collar retains its cover constraint.

The closed edge segments remaining outside the vertex balls are finitely
many disjoint smooth compact arcs, transverse to the ball boundaries.
Choose their tubular neighborhoods as framed D¹×D^(n−1) tubes, with endpoint
disks in pairwise disjoint patches on those boundaries. Here only normal
triviality over an interval is needed: choose an initial normal frame and
continue it across finitely many overlapping coordinate subintervals,
projecting onto the normal spaces and applying Gram–Schmidt after each
sufficiently short step. The local tube maps are embeddings near their
zero sections by the inverse function theorem. Compactness of the finite
arcs then supplies positive tube radii for which the maps are embeddings,
the tubes are disjoint, and every tube lies in its chosen member of V.
The transverse endpoint charts make the attaching maps products with the
boundary collars. Thus the vertex balls are the actual zero-handles and
the tubes the actual one-handles.

Round the finitely many attaching corners inside arbitrarily small
coordinate neighborhoods, preserving smaller endpoint product collars.
In each two-dimensional inward-normal quadrant replace the corner by a
smooth rounded arc and take its product with the corner stratum; choose
the rounding support smaller than the previously reserved chart and tube
buffers. The result is a compact smooth H with its actual finite handle
presentation. Contract its vertex balls to their vertex stars and its
normal tube fibers to zero. The contractions agree on the product attaching
collars after the usual finite collar interpolation, giving a deformation
retraction to the subdivided graph. Equivalently the handle core graph is
identified with Γ through the vertex-star contractions.

An exact protected relative variant requires input product models, rather
than an assertion that arbitrary overlaps fit. Suppose Γ and H already
have specified smooth ball/tube models near a closed protected set D,
extending to an open neighborhood A, and that the changing graph portions
are separated from D by a smaller open buffer. Retain those supplied models
near D, put subdivision points and new attaching patches outside that
buffer, and perform all tube choices and rounding there. The result agrees
with the supplied ball/tube neighborhood on a neighborhood of D. This
variant does not alter a prescribed product merely to obtain convenient
vertex balls.

Every step is finite once Γ and its actual smooth product data are supplied.
There is no arbitrary family of choices, no use of a full-AC triangulation
provider, and no conversion of an unsmoothed TOP chart into a smooth handle.
The operation is therefore available under the annular Countable Choice
scope. It is a candidate new local interface, not an accepted general small
handlebody supplier.
