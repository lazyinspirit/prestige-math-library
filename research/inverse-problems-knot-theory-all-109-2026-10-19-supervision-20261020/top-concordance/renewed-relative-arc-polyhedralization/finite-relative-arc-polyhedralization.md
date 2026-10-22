# Relative polyhedralization of a compact charted arc in R5

NEW construction, not an accepted-provider audit. Author-stage proof; independent
review is outstanding. The source is Homma, Yokohama Math. J. 10 (1962), 5–10,
obtained from https://ynu.repo.nii.ac.jp/record/6436/files/YMJ_10_1962_005-010.pdf.
All six printed pages were read; the alternating inequalities on printed p8
were also checked in the page image. Gluck 1963, pp91–94, and Cantrell–Edwards
1963, pp451–457, were read in the pair owner's newly obtained primary text.
No accepted raw-engulfing or arc supplier Proof was read.

## Exact finite input and conclusion

Let a:I→R5 be an embedded compact arc contained in an open TOP pair chart
h:V→R5 in which a is a straight coordinate subarc. Assume that closed end/overlap
subintervals L have a neighborhood in I on which the IMAGE arc is already PL
in the ambient Euclidean structure. Choose smaller closed subintervals L0
strictly inside those supplied PL germs. The fixed ambient neighborhoods are
chosen sufficiently small around a(L0), disjoint from the active compact
portion outside the larger germs. The conclusion is a compactly supported
ambient homeomorphism F, equal to the identity on those smaller ambient
neighborhoods, with F(a(I)) ambient PL. Support can be confined to a prescribed
open neighborhood of the active arc and PL transition buffers, and displacement
can be prescribed arbitrarily small there. No claim is made at an omitted
non-locally-flat endpoint of a noncompact arc.

The finite input does NOT imply that F is a finite composition of PL maps in
the ambient structure. That would itself be PL and could not remove a non-PL
arc. A finite geometric PL extension operation is iterated by an explicit
alternating limit in the two structures. This distinction is essential.

First reparametrize the chart axis on the larger end germs so that a|L is a
PL MAP in ambient coordinates, not only a PL image. An increasing homeomorphism
of the axis extends as (t,y)↦(alpha(t),y) in its product chart. The intervals are
finite and disjoint; interpolate monotonically on their complementary intervals.
Thus L is a common subpolyhedron with the same parametrization in both structures.
Choose compact source and ambient polyhedral balls whose interiors contain the
active arc and its support buffers. The source ball means a polyhedral ball in
h coordinates; its image need not be ambient PL. All source-structure maps
below fix its boundary collar and extend by the identity to ambient R5.

## 1. The finite relative PL extension operation

We require this elementary statement in either Euclidean PL coordinate system:
for every epsilon>0, two sufficiently close parametrized PL arcs e0,e1 on the
same subdivided interval, agreeing on L, are related by a PL ambient map J
which fixes the specified smaller germ neighborhoods, has support in a chosen
neighborhood of the active arcs and their short straight tracks, and satisfies
sup|J-id|<epsilon. Its inverse has the same displacement bound. The smallness
threshold may depend on the compact coordinate carrier and the specified
support buffer, but not on the number of vertices introduced subsequently.
Here is the local geometric construction and its uniform displacement bound.

**Cone move.** Consider the two edge segments av and vb of one arc star. A
thin radial polyhedral neighborhood B of this two-edge star can be chosen with
a,b on its boundary, v in its interior, and no other arc in its interior. To
construct it, triangulate the direction sphere about v, put the two directions
toward a,b among its vertices, set those two radial lengths to |a-v|,|b-v|,
and make the other radial lengths small. Refine near the two special directions
to keep B within any prescribed neighborhood of the star. Cap tips in small
chosen half-space sectors at a,b so the continuing fixed edges remain outside.
This is a radial PL sphere, hence its radial cone is an actual PL ball. Each
boundary facet has v on its strict inner side. The finite intersection of these
strict inner half-spaces contains an open ball about v and is a kernel of B.
Thus, for v' sufficiently close to v, both v and v' see every boundary point,
and the cones from v and from v' of the SAME boundary triangulation are both
triangulations of B. The simplexwise map fixing the boundary and taking v to v'
is an ambient PL homeomorphism. It takes a-v-b to a-v'-b. If a point has cone
coordinate lambda at v, its displacement is exactly lambda(v'-v), so the map
moves it by at most |v'-v|. Extension by the identity is continuous on ∂B.
This uses a common-kernel STAR-SHAPED ball, not the convex hull of the star;
a convex hull could introduce a spurious filled triangular region.

**Short vertex path.** Move v along a straight or polygonal path v(t) while a,b
are fixed, with the two-edge stars embedded and disjoint from all fixed arc
pieces except their endpoints. The trace of the two edges is the union of the
triangles a-v0-v1 and b-v0-v1 on each linear part. It is two-dimensional. At
each parameter the preceding ball has a positive kernel margin; compactness
and a finite subdivision of the path give finitely many cone moves. Their
supports can be chosen in any preassigned neighborhood of that trace, using
its positive distances from nonincident fixed pieces and its separated finite
linear direction sectors at a,b. The sum of their displacement bounds is no
more than the length of the vertex path. This is an actual support and track
bound, not just a bound on the final vertex position.

**Two colors and a generic intermediate arc.** Subdivide I to make both e0 and
e1 affine on each interval. Choose an intermediate vertex tuple z, arbitrarily
close to the midpoint tuple, then perform four stages: odd vertices e0→z;
even vertices e0→z; odd vertices z→e1; even vertices z→e1. Fixed vertices in L
are never moved. During one stage adjacent vertices are fixed. The moving
star traces are finite unions of linear two-simplices; the rest of the arc
is a finite union of one-simplices. Choose the finitely many intermediate
vertex coordinates in general position, with a further arbitrarily small
finite polygonal perturbation of a vertex path if necessary. Nonincident
trace pairs have dimension sum 2+2=4<5; a trace and an unrelated fixed edge
have sum 2+1=3<5. They are consequently disjoint. This finite general-position
assertion is obtained by avoiding the finitely many zero sets of the affine
incidence determinants: there are more ambient coordinates than the dimensions
of the two simplex parameters, and a free perturbation gives a nonzero minor.
At a shared fixed endpoint the only intersection is that forced endpoint;
the links are disjoint finite one-dimensional subsets of its S4 direction
sphere, after the same relative perturbation. This gives disjoint small
support sectors there. At the fixed initial/final arc edges the perturbation
is relative to those edges; no old endpoint or fixed germ is displaced.

The support neighborhoods of different moving vertices in ONE color are
disjoint, except for their fixed boundary tips. Choose the finite cone balls
in these neighborhoods. A point therefore participates in at most one moving
vertex's maps in that color. If the original parametrized distance is <delta,
z can be chosen so every vertex path has length <delta plus an arbitrarily
small prescribed error. Each color moves any point by at most that amount.
The four-color displacement is <4delta plus the sum of the four chosen errors.
Choose delta<epsilon/8 and the total error<epsilon/2. In a finite compact
coordinate carrier, choose delta also below its support buffer. The same
argument in a PL ball fixes its boundary collar; in a finite atlas fragment
along finitely many coordinate balls, with smaller tolerances whose finite sum
is epsilon. This establishes the required controlled PL extension operation.

The generic intermediate tuple is necessary: mixed arcs made from arbitrarily
specified vertices of e0 and e1 need not already be embedded. The dimension
argument is applied to the actual finite triangle traces, NOT to a TOP image
of a disk. Every disk/triangle in this step is ambient PL from its construction.

## 2. Finite relative approximation

A continuous arc map with a prescribed PL restriction on L has arbitrarily
close PL approximations agreeing there: subdivide the remaining finitely many
parameter intervals until each image lies in a small coordinate ball, retain
the fixed vertices on L, and interpolate generically chosen nearby vertices.
Distinct nonincident edges have dimension sum 2<5, so finite generic choices
make the approximation an embedding. Near L keep a larger buffer interval
unchanged and perturb only outside it; fixed ambient neighborhoods of L0 are
then disjoint from all supports. This applies in either of the two PL
structures, since both are actual Euclidean charts near the compact carrier.
The argument uses only finite subdivision, finite affine incidence avoidance,
and uniform continuity of the specified coordinate homeomorphism.

## 3. Alternating corrections, with actual inverse convergence

Write a for the source-PL arc and choose an ambient-PL approximation f equal
to a on L. Build ambient-PL maps U_i and source-PL maps V_i, all supported in
fixed compact buffers, so that V_i a and U_i f converge to the same map.
Then the desired ambient homeomorphism is F=U^{-1}V, since Va=Uf implies Fa=f.
Each V_i is an actual ambient TOP map, by the specified chart and identity
extension; it is not called ambient PL.

Here is the noncircular tolerance schedule. Suppose U_i is known. Choose a
positive next displacement budget alpha_{i+1}<2^{-i-6}epsilon. Make it also so
small that every map j with sup|j-id|<alpha_{i+1} satisfies

    sup |U_i^{-1} j^{-1}-U_i^{-1}| < 2^{-i-6}epsilon.

Uniform continuity of U_i^{-1} on the fixed compact carrier supplies it; outside
the carrier all maps are the identity. Choose the corresponding closeness
threshold delta_A(alpha_{i+1}) from Section 1. In the preceding SOURCE step
approximate U_i f closely enough that the new V_i a differs from it by less
than half that threshold. After V_i has been constructed, choose a positive
source-coordinate budget beta_{i+1}, with its ambient displacement and the
ambient inverse displacement of V_i under such a postcomposition both below
2^{-i-6}epsilon. The two uniform continuity moduli of the chart and V_i^{-1}
supply this finite choice. Let delta_S(beta_{i+1}) be its source PL extension
threshold.

In the AMBIENT step choose an ambient-PL approximation g to V_i a close enough
in source coordinates to allow a source correction <beta_{i+1}; also keep it
within delta_A(alpha_{i+1}) of U_i f. The latter is possible by the maintained
half-threshold condition and arbitrarily close approximation. Section 1 gives
an ambient-PL postcorrection j with j U_i f=g and displacement <alpha_{i+1}.
Set U_{i+1}=j U_i. Now choose alpha_{i+2} using the known U_{i+1}^{-1}, and
in the SOURCE step approximate U_{i+1} f by a source-PL map close enough in
ambient coordinates to delta_A(alpha_{i+2})/2 and within the maintained source
threshold of V_i a. Extend that source-PL correction to k and put
V_{i+1}=k V_i. This restarts the induction with the next half-threshold.
Start U_0=V_0=id, choose alpha_1 first, and choose f close enough to a to meet
its half-threshold; beta_1 is then chosen from V_0. All approximations and
extensions fix L and the smaller ambient germ neighborhoods as above.

The map sequences and their inverse sequences are uniformly Cauchy with
summable prescribed ambient bounds. Their limits U,V,Ubar,Vbar are continuous,
and U Ubar=Ubar U=id and V Vbar=Vbar V=id: pass to the limit in the compositions
using uniform convergence and uniform continuity on the compact carrier.
Thus U,V are homeomorphisms with the actual displayed inverses. The approximation
errors can additionally be required <2^{-i} in both metrics, so Va=Uf. Total
summable bounds, and the chart's uniform continuity, give the chosen support
and displacement bound for F and F^{-1}. This does not rely on the false claim
that a one-sided uniform limit of homeomorphisms is automatically a homeomorphism.

## 4. Choice and exact limitations

There is no arbitrary dependent-choice invocation in the alternation. Fix finite
coordinate charts and the initial finite real vertex/endpoint data once. Enumerate
finite PL candidates using rational coordinate perturbations, rational positive
tolerances, and dyadic subdivisions. Required nonrational endpoint coordinates
are fixed, not chosen anew; include all evaluations of the given chart functions
on previously coded vertices and their finite field operations in the code
closure. This is a countable closure under specified functions, constructed by
ordinary recursion on natural numbers. At each stage take the LEAST candidate
code satisfying its finite open approximation, support, incidence and modulus
conditions. The preceding finite existence arguments show the set is nonempty.
A predicate need not be decidable to have a least natural-number witness. The
resulting infinite sequence is deterministic recursion, not DC. Any externally
prescribed countable collection of independent finite input chart data can be
chosen using CC once. No global choice of all TOP charts is made.

This proves only the relative compact-charted-arc operation described above,
subject to independent review of the explicit PL cone/color extension in §1.
It does not by itself polyhedralize an arbitrary non-locally-flat endpoint,
justify a countable annular assembly accumulating there, prove cellularity,
or prove a relative pair-complement parametrization. Those are the pair owner's
separate operations. The initially given whole TOP pair chart remains an actual
input; no finite chart-union assertion is smuggled into this construction.
