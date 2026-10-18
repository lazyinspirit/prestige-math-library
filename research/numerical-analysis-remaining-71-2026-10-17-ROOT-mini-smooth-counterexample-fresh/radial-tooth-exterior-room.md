# Exterior room in the proposed radial-tooth geometry

Research geometry check, 2026-10-18, communicated to the fractional helper and root. This checks a specific Euclidean packing issue in the helper's proposed full-mass obstruction. It is not a completed recursive triangulation, fractional counterexample, or pressure example.

Fix a sufficiently large integer N. In a disk of radius H form the star polygon P whose successive vertices have polar angles j*pi/N and alternating radii H and H/2. Join successive vertices by straight segments. The polygon is simple and star-shaped about the center: each angular sector has width pi/N<pi and its edge intersects each intervening ray exactly once.

Each of the 2N polygon edges has length comparable to H. Its perpendicular distance from the center is comparable to H/N. On the middle third of any edge, the distance to every other polygon edge is at least cH/N, for an absolute c>0 and all sufficiently large N. For either neighboring edge this follows from the determinant formula for distance to its line: the common-vertex determinant is comparable to H^2 sin(pi/N), its edge length is comparable to H, and the middle-third parameter is bounded below by 1/3. The same estimate applies at either endpoint. Edges in more distant angular sectors are farther away; splitting off the finitely many neighboring sectors, radial coordinates in [c_0 H,c_1 H] with 1/2<c_0<c_1<1 and the polar-distance formula bound their separation below by a fixed multiple of H/N. All constants are independent of N.

Now fix small b_0>0 and choose points on those middle-thirds with mutual spacing comparable to

    ell=b_0 H/N.

There are B comparable to N^2/b_0 such points. For sufficiently small fixed sigma>0, the exterior halfdisks of radius sigma ell centered at the points lie outside P, avoid every other polygon edge, and are mutually disjoint. The clearance estimate gives avoidance of the polygon, and spacing gives mutual disjointness. This proves actual outside room for B~b_0 rho^(-2) children at scale sigma rho H, with rho=b_0/N. These are ordinary Euclidean halfdisks, not abstract tree nodes.

The middle-third restriction matters. At an inner concave valley the exterior wedge angle is only comparable to 1/N. If points arbitrarily close to the valley were retained, clearing a disk of radius sigma ell could require removing arclength comparable to sigma b_0 H, rather than merely sigma ell. Removing a fixed middle-third neighborhood avoids that issue and preserves the N^2/b_0 count.

The parent-center fan triangles along an edge interval of length comparable to ell have area comparable to

    ell H/N = ell^2/b_0.

An exterior collar triangulated at scale ell could give total nonparent area O(ell^2) incident at each chosen attachment vertex. Thus the area comparison needed for dominant normalized incoming parent mass is geometrically plausible. To turn this observation into an actual mass-matrix theorem, that collar must be built compatibly with all child patches and the remaining polygonal region, and exact coefficient lower bounds must be proved.

An entire child fan cannot surround its attachment vertex, since that would overlap P. It must be a sector fan inside the available exterior halfdisk. Its maximum radius can be chosen less than half the reserved-disk radius, leaving room for its own descendants. This suggests a finite planar template repeated by similarities, but no complete recursive matching simplicial template is asserted in this note. In particular, the existence of the exterior disks alone does not prove that every filler triangle and every descendant can have a uniform minimum angle while preserving the proposed condensed row weights.

Even a completed full-R_h fractional obstruction would not automatically obstruct the original constrained initial datum or the mixed pressure observation. Exact smooth-solenoidal excitation, the mass-Schur correction, time observation and the original nonlinear realization would remain to be checked.
