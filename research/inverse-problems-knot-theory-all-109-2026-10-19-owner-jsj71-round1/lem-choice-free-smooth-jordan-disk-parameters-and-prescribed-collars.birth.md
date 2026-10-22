---
id: lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars
kind: lemma
title: "Choice-free smooth Jordan disk parameters and prescribed collars"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - thm-polygonal-jordan-curve
  - thm-simple-polygon-admits-a-triangulation
  - thm-euler-formula-for-connected-plane-graphs
  - lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption
  - lem-choice-free-isotopy-extension-for-a-compact-smooth-source
proof_strategy: direct
axiom_use: "Choice-free. The finite polygonal collapse proof is reproduced in full; disk attachments use supplied window parameters and explicit finite collars, and all supported extensions use the finite compact-source supplier. No arbitrary-cover partition of unity is invoked."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Finite polygonal reduction and finite smooth window constructions"
      locator: "The full local proof is reproduced here with the explicit choice-free marked-window and compact-source extension suppliers; no citation substitutes for a proof."
---

## Statement

The bounded region of a smooth embedded
circle in the oriented plane, together with its boundary, is a smooth manifold
with boundary diffeomorphic to the closed standard disk. Let $D_0,D_1$ be two
such closed regions. Every orientation-preserving smooth boundary
diffeomorphism $b:\partial D_0\to\partial D_1$ extends to an
orientation-preserving diffeomorphism $B:D_0\to D_1$. More precisely, for
specified smooth inward collars $c_i:\partial D_i\times[0,\epsilon)\to D_i$
with $c_i(p,0)=p$, the extension may be required to satisfy
$B(c_0(p,r))=c_1(b(p),r)$ for every sufficiently small $r\ge0$. In addition, given interior points $p_i\in D_i$ and an orientation-preserving smooth diffeomorphism $q$ from a neighborhood of $p_0$ onto a neighborhood of $p_1$, the extension can agree with $q$ near $p_0$ while retaining the prescribed boundary collars.

## Facts & Assumptions

**Given:** The smooth embedded circles in the plane, their boundary map and collars, and the interior germ when prescribed.

[F1] A smooth map with invertible derivative is a local diffeomorphism, without a choice hypothesis ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]).

[F2] A simple polygon has exactly one bounded complementary region and one unbounded complementary region, with the polygon as the frontier of both ([[thm-polygonal-jordan-curve]]).

[F3] A simple polygonal region has a finite straight triangulation ([[thm-simple-polygon-admits-a-triangulation]]), and a connected finite plane graph has $V-E+F=2$ ([[thm-euler-formula-for-connected-plane-graphs]]).

[F4] A parametrized smooth disk attached along a parametrized boundary interval, with its explicit attaching collar and rounded corner, is absorbed by a diffeomorphism without choice ([[lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption]]).

[F5] Without choice, an isotopy of embeddings of a compact smooth manifold with boundary into a boundaryless manifold of the same dimension, constant near the two time endpoints, extends to a smooth ambient isotopy supported in any specified neighborhood of its track ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]]).

## Proof

1.1 Parametrize the circle by a smooth regular embedding $\gamma:S^1\to\mathbb R^2$, and let $n$ be its smooth unit normal obtained by rotating and normalizing its tangent. The map $T(s,r)=\gamma(s)+rn(s)$ has invertible derivative at $r=0$. By [F1] and compactness it is a local diffeomorphism on a common strip $|r|<a$. It is injective after shrinking $a$: otherwise collisions for widths tending to zero would have a subsequence of their circle parameters converging; equality of the limiting images and injectivity of $\gamma$ give the same limiting parameter, contrary to a local inverse there. Thus $T$ is a smooth two-sided annular coordinate. [F1, given, construct]

1.2 We prove that a rounded polygonal region is a smooth disk. Take the finite triangulation in [F3]. The dual adjacency graph of its triangles, with an exterior root adjacent across every boundary edge, is connected. Indeed the triangles at any one vertex form a consecutive cyclic fan or a consecutive interval fan, so all their sectors are joined through shared edges, and connectedness of the triangulated region joins all fans. Choose a finite spanning tree of this dual graph rooted at the exterior. Process triangles in increasing distance from that root. Remove each triangle and its edge toward its parent: this edge is free, since its only other incident triangle has already been removed or is exterior. Removing a triangle with its free side leaves its two other sides and vertices, preserves connectedness, and preserves $V-E+F$. Plane Euler in [F3], with the exterior counted as one extra face, gives initial value $V-E+F=1$. At the end the remaining connected graph $K$ therefore has $V-E=1$, so it is a tree: a spanning tree already has $V-1$ edges, leaving no edge outside that spanning tree. [F2, F3, construct]

2.1 Inscribe a polygon with a sufficiently fine cyclic mesh in $\gamma$. Uniform continuity of $\gamma'$ gives positive scalar product of each chord direction with the tangent at every nearby normal projection, and the chord error tends uniformly to zero. Hence the normal projection of each chord is strictly increasing in its cyclic coordinate; the whole polygon has degree one under normal projection and is a normal graph. In particular it is embedded. Smooth its finitely many corners in disjoint small graph charts: convolution of the local graph function with a smooth compactly supported kernel on a smaller interval, joined by a smooth cutoff on a larger interval, leaves it unchanged outside that chart and can be made arbitrarily small in height and tangent direction. The smoothed curve $P'$ is still a normal graph $r=f(s)$, with $f$ smooth and arbitrarily small. Choose a smooth cutoff $\chi$ supported in $(-a,a)$ and equal to one near zero. For $\|f\|_\infty\|\chi'\|_\infty<1$, the map $(s,r)\mapsto(s,r+\chi(r)f(s))$ is a diffeomorphism, because its normal derivative is positive, and equals the identity near the ends of the strip. It extends by the identity to a smooth plane diffeomorphism carrying $\gamma$ onto the rounded polygon $P'$. The same graph construction compares any two sufficiently small choices of corner rounding. By [F2], the polygon has bounded and unbounded regions; rounding preserves them by local graph homeomorphisms: in a graph chart, a continuous vertical displacement, cut off in the transverse direction with positive transverse derivative, carries the original piecewise affine graph to the rounded graph, and transporting them by the displayed plane diffeomorphism proves the corresponding separation and smooth boundary charts for $\gamma$. [F1, F2, step 1.1, construct]

3.1 Realize these finite collapses on smooth rounded neighborhoods. In affine coordinates on a triangle whose free side is to be removed, retain thin strips along its other two sides and a rounded disk at their common vertex. The missing sector can be chosen as a convex triangle with its corners rounded. Its attaching part runs along the inner sides of the two retained strips, joined around their common vertex, and is one boundary interval. Near the other two vertices use disjoint vertex disks and the corresponding short collar intervals; outside this triangle the neighborhood is unchanged. No other simplex meets its open interior. These choices give compatible rounded neighborhoods before and after the collapse whose difference is one smooth disk attached along one embedded boundary interval. To check that this added piece is a standard disk, a convex rounded triangle has a positive smooth radial boundary function $a(\theta)$ about any interior center. On the standard disk the radial map $r\mapsto r\exp(\eta(\log r)\log a(\theta))$ is smooth and linear near zero when $\eta=0$ there, agrees with $r\mapsto ra(\theta)$ near $r=1$ when $\eta=1$ there, and has positive radial derivative if $|\eta'|\,\|\log a\|_\infty<1$; choose its transition over a sufficiently long interval of $\log r$. Thus it is a disk parametrization. The corner models match the retained strip collars before [F4] is applied. Consequently each collapse preserves the smooth diffeomorphism type of the rounded neighborhood. A rounded neighborhood of the final tree is a disk: remove a leaf disk and its band successively, each a disk attached along one interval, until one vertex disk remains. Applying [F4] finitely often proves the assertion for the initial rounded polygon. Step 2.1 then proves it for the original smooth circle. [F4, step 2.1, step 1.2, construct]

4.1 Choose orientation-preserving disk parametrizations $p_i:\overline B(0,1)\to D_i$. The boundary map $p_1^{-1}bp_0$ has a smooth increasing angular lift $g:\mathbb R\to\mathbb R$, with $g(\theta+2\pi)=g(\theta)+2\pi$. Let $\rho(r)$ be smooth, zero near zero and one near one. The map $(r,\theta)\mapsto(r,\theta+\rho(r)(g(\theta)-\theta))$ is the identity near the center and has angular derivative $1+\rho(r)(g'(\theta)-1)>0$. It is consequently a smooth disk diffeomorphism extending the boundary map, and is a product in the radial collars. Conjugate by $p_0,p_1$ to obtain a preliminary extension. [step 3.1, construct]

5.1 We can replace either radial collar by its prescribed collar without changing the boundary. More generally, express two collars with the same boundary parametrization in the normal coordinates of step 1.1. Their relative coordinate map is $(s,r)\mapsto(S(s,r),R(s,r))$, where $S(s,0)=s$, $R(s,0)=0$, and $\partial_rR(s,0)>0$. Use the periodic lift of $S-s$ and interpolate to the identity by $(s+u(S-s),(1-u)r+uR)$ for $0\le u\le1$. At $r=0$ the Jacobian is triangular with positive diagonal entries $1,(1-u)+u\partial_rR(s,0)$. Smooth collar maps extend across $r=0$ in the normal chart, by their local smooth-extension convention and finitely many chart cutoffs. Compactness and the local-inverse and separation argument of step 1.1 give a common narrow two-sided closed annulus on which every interpolated map is an embedding. Reparametrize $u$ smoothly to be constant near its endpoints. Apply [F5] to this compact two-dimensional annulus and the ambient plane, with support in a thin boundary neighborhood. The prescribed isotopy fixes its middle circle, so its ambient extension fixes every boundary point and preserves the bounded side. Its final diffeomorphism identifies the two collar germs exactly. Perform this correction on both sides of the preliminary extension of step 4.1. The resulting extension agrees with $c_0(p,r)\mapsto c_1(b(p),r)$ on a common smaller collar. Its smooth inverse and orientation follow from the same properties of all the factors. [F1, F5, step 1.1, step 4.1, construct]

6.1 For the interior prescription, first move $B(p_0)$ to $p_1$ by a diffeomorphism supported in $\operatorname{int}D_1$. A smooth path exists there by the disk parametrization of step 3.1. Cover it by finitely many interior coordinate balls and subdivide it so each successive pair lies in one smaller convex coordinate ball. For each pair, translation of a sufficiently small closed coordinate disk along their segment is an isotopy of full-dimensional disk embeddings whose track lies in that ball. Apply [F5], with a time parameter constant near its ends, and compose the resulting supported ambient diffeomorphisms. This moves the point as stated and leaves a neighborhood of the boundary fixed. Rename the resulting extension $B$. The germ $k=q\circ B^{-1}$ at $p_1$ fixes $p_1$ and preserves orientation. In centered coordinates its rescalings $k_t(x)=k(tx)/t$ for $t>0$ extend smoothly at $t=0$ to $Ax$, where $A=Dk(0)$, since $k(tx)/t=\int_0^1Dk(stx)x\,ds$. Each positive linear matrix $A$ is smoothly joined to the identity: write $A=RP$ with $P$ positive definite and $R$ a rotation, interpolate $P$ linearly to the identity and the rotation angle linearly to zero. Concatenate the resulting path from the identity to $A$ with $k_t$ from $A$ to $k$, and make the time parameter constant near the endpoints and all joins. On one common sufficiently small closed disk all slices are embeddings with track in an interior coordinate ball, by compactness and the inverse-function and separation argument of step 1.1. [F5] extends this disk isotopy to an ambient isotopy supported in that ball. Its terminal map $K$ agrees with $k$ near $p_1$, so $K\circ B=q$ near $p_0$. The boundary collars stay fixed. The attachments have actual convex disk parameters and explicit edge/vertex collars from step 3.1, exactly the marked inputs required by [F4]. All supported extensions use [F5], whose compact-track finite bump proof requires no choice. Thus all selections and compositions here are finite and no choice hypothesis has been added. [F1, F5, step 1.1, step 3.1, step 5.1, construct] ∎
