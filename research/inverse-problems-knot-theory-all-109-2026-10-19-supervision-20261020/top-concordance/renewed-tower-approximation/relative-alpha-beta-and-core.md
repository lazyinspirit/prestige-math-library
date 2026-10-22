# Relative tower approximation and extraction of the framed core

Author: `/root/top_tower_approximation`, 2026-10-20. New prerequisite authoring;
no canonical item, map, native evidence, or earlier acceptance is changed here.
This note does not reread or recertify a repaired supplier. It supplies the
new chapter-4 argument needed by the renewed tower construction.

Primary source actually inspected: Freedman–Quinn, *Topology of
4-Manifolds*, printed pp. 73–84, PDF pp. 79–90. The mathematical proof below
expands §§4.5–4.6; it is not an invocation of a disk-embedding theorem.
Images used for the inspection are in this directory's `sources/`; the
shared OCR is in `../renewed-controlled-disk/sources/fq-pdf-079.txt` through
`fq-pdf-090.txt`. The input from §§4.2–4.4 is being authored separately in
`../renewed-tower-parameterization/`.

## Input and the precise relative conclusion

Write (P=D^2\times D^2\cong D^4), and (A=S^1\times D^2\subset\partial P).
The parameterization input consists of a compact pinched tower neighborhood

\[
C'\subset C\subset N,
\]

and surjections \(\alpha:P\to Q\), \(\beta:C'\to Q\), onto the **same** compact
metric quotient. Both decompositions are null (only finitely many fibers have
diameter at least any specified positive number). The images of nontrivial
fibers are nowhere dense. The boundary restrictions are homeomorphisms, with
the same prescribed identification of the attaching face. These are
saturated singleton-fiber boundaries: with \(\partial Q=\alpha(\partial P)\),
\(\alpha^{-1}(\partial Q)=\partial P\) and
\(\beta^{-1}(\partial Q)=\partial C'\), and every fiber above
\(\partial Q\) is a singleton. This extra assertion is part of the
new common-quotient construction, not an inference from a homeomorphic
boundary restriction alone. Every nontrivial
\(\alpha\)-fiber is either a tame closed 4-ball or a flat embedded 2-disk
united with a regular neighborhood of its boundary circle. The latter is the
specific set occurring in §4.4, not an arbitrary cellular set.

There is a fixed small **four-dimensional** product collar \(U\) of the
attaching face, on which the partial parameterization is an actual
homeomorphism \(q:U\to q(U)\subset C'\), with

\[
\beta q=\alpha\quad\hbox{on }U.
\]

No nontrivial fiber of either quotient meets a smaller closed collar
\(K\subset U\). Choose it sufficiently small that its image has a neighborhood
in \(Q\) disjoint from both singular-image sets. The construction below gives
a homeomorphism

\[
H:P\longrightarrow C',\qquad H|_K=q|_K.
\]

In particular the entire attaching face, its inward collar, and any chosen
product normal germ inside that collar are preserved. An arbitrary interior
bottom-stage germ is **not** included in this assertion: it must first be
placed in the reserved collar or separately shown to lie in such a regular
quotient region.

## The elementary single-fiber collapse

Here is the controlled local operation used for \(\alpha\). Suppose \(E\) is
one of the two fiber types above, \(T_j\) is a null family of closed sets
disjoint from \(E\), and \(\delta>0\). There is a map

\[
k:D^4\to D^4
\]

fixed on the boundary, with only nontrivial fiber \(E=k^{-1}(0)\), such that
for every \(j\) either every point of \(T_j\) moves less than \(\delta\), or
\(\operatorname{diam}k(T_j)<\delta\). The operation is supported in any
chosen standard neighborhood of \(E\), after changing coordinates there.

First suppose \(E\) is starlike about 0. Its radial function \(r_E\) on
\(S^3\) is upper semicontinuous. Given an open neighborhood \(V\) of \(E\),
compactness gives a positive continuous radial majorant with starlike ball
\(W\) satisfying \(E\subset\operatorname{int}W\subset W\subset V\).
For completeness, take finitely many small open sets in \(S^3\) on which an
upper bound for \(r_E\) remains below the radial extent of \(V\), and use a
partition of unity on their slightly smaller refinement; the convex
combination of those upper bounds is the required majorant.

Choose round radii \(b_0=1>b_1>\cdots\to0\) with
\(b_i-b_{i+1}<\delta/8\), and let \(B_i=\overline B(0,b_i)\).
Choose a starlike ball \(V_0\) sufficiently close to \(E\) that every
\(T_j\) it meets has diameter less than \(\delta/2\). This is possible because
the finitely many larger \(T_j\)'s are closed and disjoint from \(E\).
Choose \(V_{i+1}\subset\operatorname{int}V_i\), inside the \(2^{-i}\)-neighborhood
of \(E\), and missing every \(T_j\) that meets \(D^4\setminus V_i\). Only
finitely many sets require exclusion at a fixed positive distance from \(E\);
the remaining sets cannot obstruct a neighborhood of \(E\), by nullity.
Set \(W_i=V_i\cup B_i\); in particular \(W_0=D^4\), whereas
\(V_0\) is small near \(E\). Thus the outermost shell is included in
the \(B_i\setminus V_i\) estimate below, with \(i=0\).

On each ray send the interval between \(\partial W_{i+1}\) and
\(\partial W_i\) affinely to the interval between radii \(b_{i+1}\) and
\(b_i\), and send \(E\) to 0. Continuous radial boundary functions make this
continuous away from \(E\); the image of \(W_i\) lies in the radius-\(b_i\)
ball, which proves continuity at \(E\). On the complement of \(E\) the map is
one-to-one and onto the punctured ball. It is the identity on \(\partial D^4\).

The estimates are useful, rather than merely the existence of the quotient.
If \(x\in B_i\setminus V_i\), the source and image radii lie between two
successive \(b\)'s; hence \(|k(x)-x|<\delta/8\). Thus every set of diameter
at least \(\delta/2\) moves less than \(\delta\). If
\(\operatorname{diam}T_j<\delta/2\), points in the regions
\(B_i\setminus V_i\) each move less than \(\delta/8\). Any pair of
points of this kind has image distance less than
\(\delta/2+2\delta/8<\delta\). If there is a point of \(T\) of the
remaining kind, choose the **maximal** index
\(j\) with \(T\subset V_j\), allowing \(j=-1\) with
\(V_{-1}=D^4\), \(B_{-1}=B_0\), and \(b_{-1}=b_0\). Such a maximal index exists
because \(\bigcap_iV_i=E\) and the nonempty closed \(T\) misses \(E\).
Since \(T\not\subset V_{j+1}\), the choice of \(V_{j+2}\) gives
\(T\cap V_{j+2}=\varnothing\). Thus the **whole** set lies in
\(V_j\setminus V_{j+2}\), and its image lies in \(B_j\). Choose
\(x\in T\) not belonging to any \(B_i\setminus V_i\); then
\(x\notin B_{j+2}\), and \(k(x)\) lies between the spheres of
radii \(b_{j+2}\) and \(b_j\). For any other point \(y\in T\),
if \(y\notin B_{j+2}\),
project both points radially to the sphere of radius \(b_{j+2}\). Their
projections are at distance at most \(|x-y|\), and each image differs from
its projection by less than \(2\delta/8\). Consequently
\(|k(x)-k(y)|<\delta\). If \(y\in B_{j+2}\), it lies outside \(V_{j+2}\),
so moves less than \(\delta/8\); the radial ordering gives
\(|x-k(y)|\le |x-y|+\delta/8<5\delta/8\), and \(k(x)\) is on the segment
from 0 to \(x\), outside \(B_{j+2}\), whereas \(k(y)\) is inside that ball.
Moving \(x\) inward to \(k(x)\) cannot increase this distance. This proves
the stated alternative for every \(T_j\).

For a flat disk united with a neighborhood of its boundary, the standard
pair coordinates identify the disk with
\(D=\{(x,0)\in\mathbb R^2\times\mathbb R^2:|x|\le1\}\) and its
boundary neighborhood with
\(N_r=\{v:\operatorname{dist}(v,\partial D)\le r\}\), for small \(r>0\).
Here the regular-neighborhood hypothesis means this framed tubular
neighborhood, transported by the local product coordinates of the flat
disk; changing its small radius is a relative normal-coordinate isotopy.
This is not an assertion about an arbitrary wild disk or an arbitrary
contractible set. Work in the convex parallel body
\(M=\{v:\operatorname{dist}(v,D)\le R\}\), with \(R>r\). Its boundary
is a 3-sphere (round the harmless product corners if desired).
Nearest-point projection \(\pi:M\to D\) is unique and continuous.
Every point of \(M\setminus D\) has a unique expression

\[
p+t(b-p),\quad b\in\partial M,\quad p=\pi(b),\quad 0<t\le1.
\]

Indeed \(|b-p|=R\), and projection is constant along the outward
normal segment; conversely take the ray from the projection of a point
until its distance from \(D\) is \(R\). Thus \(M\) is exactly the
mapping cylinder of \(\pi|_{\partial M}\), and \(M/D\) is the cone on
\(\partial M\), hence a standard 4-ball. Along a segment based at an
interior point \(p\) of \(D\), distance to \(\partial D\) is
\(\sqrt{\operatorname{dist}(p,\partial D)^2+t^2R^2}\); along one based
at a boundary point it is \(tR\). Both are nondecreasing. Therefore
\(D\cup N_r\) meets every such segment in an initial segment, allowing
the zero-length segment at the collapsed disk. Its image in \(M/D\)
is actually starlike in the cone coordinates.

First collapse \(D\) by the controlled starlike operation, and then
collapse the image of \(D\cup N_r\). Any two quotient maps collapsing
exactly \(D\), with no other nonsingleton fibers, induce homeomorphic
quotient coordinates; consequently the preceding cone description
applies to the first controlled collapse as well. The image family of
the \(T_j\)'s remains null, by uniform continuity, and misses that
starlike-equivalent image. Use ambient error less than \(\delta/4\)
at each operation. If both operations move a member's points a little,
the total movement is less than \(\delta/2\). If the second shrinks
it, the final diameter is less than \(\delta/4\); if the first shrinks
it and the second only moves it, the final diameter is less than
\(\delta/4+2\delta/4=3\delta/4\). This proves the same controlled
alternative for the composite, with its only nontrivial fiber the
original full disk-with-boundary-neighborhood set.

## Approximation of \(\alpha\), including its inverse

We construct quotient maps \(F_n:P\to P\), fixed on \(\partial P\cup K\),
with the following properties. Rescale the metric once if necessary.

1. Forward maps and inverse relations change by less than \(2^{-n}\) at
   the \(n\)-th operation.
2. Every \(F_n(\alpha^{-1}(z))\) has diameter less than \(2^{-n-1}\).
3. \(F_n\) has finitely many nontrivial fibers, each a full fiber of
   \(\alpha\); every original \(\alpha\)-fiber of diameter at least
   \(2^{-n-1}\) has already been collapsed by \(F_n\).

For relations the distance here means uniform Hausdorff distance in each
fiber: every point in one value has a point within the specified distance
in the other value, and conversely. Fibers are compact.

Assume \(F_{n-1}\) is constructed. There are finitely many uncollapsed sets

\[
E_i=F_{n-1}(\alpha^{-1}(z_i))
\]

for which either the displayed set or its original \(\alpha\)-fiber has
diameter at least \(2^{-n-1}\). Nullity gives finiteness. Each \(E_i\) has
diameter less than \(2^{-n}\), by the preceding induction. The set of
nontrivial fibers already collapsed by \(F_{n-1}\) is finite and disjoint
from these \(E_i\)'s. Choose pairwise disjoint neighborhoods \(U_i\), avoiding
those old quotient points and \(\partial P\cup K\), with

\[
\operatorname{diam}U_i<2^{-n},\qquad
\operatorname{diam}F_{n-1}^{-1}(U_i)<2^{-n}.
\]

The second choice is possible because near an uncollapsed fiber
\(F_{n-1}\) is a homeomorphism; its original fiber also has diameter less
than \(2^{-n}\), by the previous original-size threshold. Shrink the
neighborhoods further so that no unselected image of a fiber of diameter
at least \(2^{-n-2}\) meets any \(U_i\). There are only finitely many
such unselected images, and each is compact and disjoint from every
selected \(E_i\), so they can all be excluded. Thus **every** unselected
fiber affected by any support, whether wholly inside it or crossing its
boundary, initially has diameter less than this half-threshold.
Within \(U_i\) choose a standard ball neighborhood \(B_i\) in which \(E_i\)
has its standard model. The single-fiber operation, with small enough
coordinate error to correspond to less than \(2^{-n-3}\) in the ambient
metric, collapses \(E_i\) and either moves the other fibers very little or
makes them small. Extend it by the identity outside \(B_i\).

The operations on disjoint \(B_i\)'s compose to \(G_n\). Set
\(F_n=G_nF_{n-1}\). A fiber wholly outside these balls was already small;
a fiber affected by a ball has diameter less than the half-threshold.
Apply the local controlled lemma to the closed intersections of the
other fibers with that support ball; their family is null. Use ambient
movement/image error less than \(\varepsilon=2^{-n-3}\). In the
movement case the whole fiber's diameter remains less than
\(2^{-n-2}+2\varepsilon=2^{-n-1}\). In the shrinking case a fiber
entirely inside the support has image diameter less than
\(\varepsilon\). A fiber crossing its boundary is connected: the
original fiber is a ball or disk-with-boundary-neighborhood and
\(F_{n-1}\) is continuous. It therefore meets the boundary at a fixed
point \(p\). The inside image lies within \(\varepsilon\) of that
anchor, while every outside point lies within the original small
fiber diameter of \(p\). Its total image diameter is consequently
less than \(2^{-n-2}+\varepsilon<2^{-n-1}\). Each fiber meets at most
one support. To arrange this, distinct selected compact fibers have
positive separation. Any fiber meeting sufficiently small neighborhoods
of two of them must have diameter bounded below by half that separation;
only finitely many do, and those unselected fibers can be excluded by
shrinking the neighborhoods. This justifies the spare estimate for all
affected fibers, including the support-crossing case.
These observations give property 2. Only the selected complete fibers
were collapsed, giving property 3. A point and its new image lie in the
same \(B_i\), and all old/new inverse points lie in the same
\(F_{n-1}^{-1}(B_i)\); the two diameter bounds give property 1.

There are now **two** limits to take. Since every \(F_n\)-fiber is an
\(\alpha\)-fiber, the relation

\[
A_n=\alpha F_n^{-1}:P\to Q
\]

is a single-valued continuous map. Uniform continuity of \(\alpha\) and
the summable inverse-relation estimates imply uniform convergence of
\(A_n\) to a continuous map \(a:P\to Q\). The relations

\[
B_n=F_n\alpha^{-1}:Q\rightrightarrows P
\]

also converge uniformly as compact-valued relations, by the forward
estimates; property 2 makes every limiting value a singleton. Thus their
limit is a continuous map \(b:Q\to P\). To verify this last continuity
without assuming it, a convergent sequence \(z_i\to z\) and corresponding
limit values has a convergent subsequence in compact \(P\); the closed
graph property of a fixed \(B_n\), followed by its uniformly small limit
error, forces that subsequence's limit to be \(b(z)\).

For each \(n\), the graphs of \(A_n\) and \(B_n\) are exact transposes.
Their limits are therefore transposes, so \(a b=\mathrm{id}_Q\) and
\(b a=\mathrm{id}_P\). This proves that \(a\) is a homeomorphism. Every
operation fixed \(\partial P\cup K\), hence

\[
a|_{\partial P\cup K}=\alpha|_{\partial P\cup K}.
\]

No general cell-like approximation theorem was used.

## Disk-to-disk replacement for \(\beta\)

We give the second approximation argument because the fibers of
\(\beta\) are not the standard fibers used above. The statement needed is:

If \(f:D^4\to D^4\) is onto, has null fibers and nowhere dense singular
image, has \(f^{-1}(S^3)=S^3\), and restricts to a homeomorphism on the boundary, it can be replaced
by a homeomorphism with the same boundary values. In addition it can be
kept equal to \(f\) on a closed set \(L\) such that every fiber above
\(f(L)\) is a singleton, so \(f^{-1}(f(L))=L\) and \(f|_L\) is a
homeomorphism onto its image. The prescribed values thus have to be
regular values. A whole regular neighborhood is available for the
reserved attaching collar, but the diagram argument only needs this
weaker closed-set condition. It is not an assertion that arbitrary
prescribed sets can be fixed.

Use the following admissible diagrams:

\[
D^4\mathrel{\mathop{\longrightarrow}^{e}}W
\mathrel{\mathop{\longleftarrow}^{f}}D^4,
\qquad g:W\to D^4.
\]

All spaces are compact metric, all maps onto. The fibers of the
**composites** \(ge\) and \(gf\) are null. The three singular-image sets
\(\Sigma g,g(\Sigma e),g(\Sigma f)\) are nowhere dense and pairwise well
separated: each set misses the closure of either other set. They miss a
closed protected set \(E_0\) containing \(S^3\). The maps \(ge,gf\) are the
identity on their boundary spheres. Here \(\Sigma e\) is the set of values
at which \(e\) has a nonsingleton fiber. The composite singular sets
\(\Sigma(ge)=\Sigma g\cup g(\Sigma e)\) and
\(\Sigma(gf)=\Sigma g\cup g(\Sigma f)\) are countable: nullity makes
each the union, over positive integers \(m\), of its finite set of
fibers with diameter at least \(1/m\). They are nowhere dense, since
they are finite unions of the stipulated nowhere dense sets.
Also require saturated singleton-fiber boundary spheres for both
composites. The protected \(S^3\subset E_0\), together with the boundary
identifications, preserves this property throughout the construction.

The key operation removes some \(e\)-fibers. Let \(B_0\subset\operatorname{int}B\)
be concentric closed round balls in the target, with \(B\) avoiding
\(E_0\), \(\overline{\Sigma g}\), and \(\overline{g(\Sigma f)}\).
Choose both boundary spheres to avoid the countable singular sets of
both composites. In particular
\((ge)^{-1}(\partial B_0)\to\partial B_0\) is a homeomorphism. Form \(W'\)
by replacing \(g^{-1}(\operatorname{int}B_0)\) by
\((ge)^{-1}(\operatorname{int}B_0)\), gluing their frontiers using \(e\).
The latter frontier map is a homeomorphism, so this is a compact Hausdorff
adjunction space. Write \(e':D^4\to W'\) for \(e\) outside the replaced
region and the identity inside it; write \(g'\) for \(g\) outside and
\(ge\) inside. Then

\[
g'e'=ge,
\]

and \(e'\) is a homeomorphism above \(B_0\).

Here is the necessary change in the other map. Choose a homeomorphism
\(w:B\to D^4\), the identity on \(B_0\), and define

\[
t=\mathrm{id}\quad\hbox{outside }g^{-1}(\operatorname{int}B),
\qquad
t=g^{-1}w^{-1}ge\,wg\quad\hbox{on }g^{-1}(B).
\]

These formulas agree along \(g^{-1}(\partial B)\): there \(wg\) is on
\(S^3\), where \(ge\) is the identity, and \(w^{-1}\) cancels \(w\).
Inside the part mapping to \(B_0\), the expression lifts to \(W'\) as
\(wg\), since the intervening \(w^{-1}\) is the identity there and the
remaining expression is \(e\,wg\). Elsewhere the old and new spaces agree.
Thus \(t\) has a continuous lift \(t':W\to W'\); put \(f'=t'f\).

One must choose \(w\), not merely an arbitrary expansion of \(B\). Put
\(S=\Sigma(ge)=\Sigma g\cup g(\Sigma e)\), the **full composite**
singular image. An old singular value outside \(B\) can return into
the annulus under \(w^{-1}\), because \(w\) maps \(B\) onto the whole
disk. Thus replacing \(S\) by \(g(\Sigma e)\) would be incorrect.
In the annulus the new singular image is \(w^{-1}S\). Require

\[
(S\cap (B\setminus B_0))\cap\overline{w^{-1}S}=\varnothing,
\qquad (\overline S\cap w^{-1}S)\cap (B\setminus B_0)=\varnothing.
\]

The restrictions to the annular region are essential: \(w\) fixes
\(B_0\), where the modified maps are homeomorphisms and no separation
condition of this form is needed. One must not require a nonempty
\(S\cap B_0\) to miss its own unchanged copy.

These conditions can be achieved by Baire's theorem. The space of
homeomorphisms \(w:B\to D^4\) fixed on \(B_0\), with metric
\(\max(\|w-v\|_\infty,\|w^{-1}-v^{-1}\|_\infty)\), is complete: a
Cauchy sequence and its inverses have uniform limits that are inverse
continuous maps. For every \(p\in S\cap\operatorname{int}(B\setminus B_0)\)
impose \(w(p)\notin\overline S\). For **every** \(q\in S\setminus B_0\),
including values outside \(B\), impose
\(w^{-1}(q)\notin\overline S\). Its inverse image is in the open
annulus: \(q\) is an interior disk point, since the boundary fibers
are singletons, and it is outside \(B_0\), which \(w\) fixes.
Each condition is open. It is dense
because \(\overline S\) has empty interior and a homeomorphism supported
in an arbitrarily small ball moves a specified interior point to any
sufficiently close point. Such a homeomorphism is obtained by a small
translation near that point, tapered to the identity before the boundary
of the ball. The balls can avoid \(B_0\). The conditions at points of
\(B_0\), if present, are handled by the unchanged inner piece and are not
imposed on this annular perturbation. A countable intersection of these
open dense sets is nonempty and gives the required \(w\).

Here are the exact invariant checks. The composite \(g'e'=ge\) is
unchanged, hence has null fibers. Above \(B\), the old \(gf\) is a
homeomorphism, since \(B\cap\Sigma(gf)=\varnothing\). The other new
composite is

\[
g'f'=gf\quad\hbox{outside }(gf)^{-1}(\operatorname{int}B),
\qquad g'f'=w^{-1}(ge)w(gf)\quad\hbox{inside }(gf)^{-1}(B).
\]

Thus its new fibers are homeomorphic transports of the **full**
\(ge\)-fibers, by \((gf)^{-1}w^{-1}\), not merely of \(e\)-fibers.
Uniform continuity of this homeomorphism on compact disks proves their
nullity. Old fibers outside the ball remain null. No nonsingleton fiber
crosses its boundary: \(ge\) has saturated singleton boundary fibers,
so the conjugated disk map has saturated singleton fibers on
\(\partial B\). Consequently \(g'f'\) has null fibers as well.

Write \(S_e=g(\Sigma e)\), \(S_f=g(\Sigma f)\), \(S_g=\Sigma g\).
Because both chosen spheres miss \(S\), the new three singular-image
sets, with no ambiguous boundary contribution, are

\[
\Sigma g'=S_g\cup(S_e\cap\operatorname{int}B_0),\qquad
g'(\Sigma e')=S_e\setminus B_0,
\]

\[
g'(\Sigma f')=(S_f\setminus B)\cup
\bigl(w^{-1}S\cap\operatorname{int}(B\setminus B_0)\bigr).
\]

For the second line, on the inner replacement \(f'=wgf\) is a
homeomorphism, and on the annulus \(g'=g\) is a homeomorphism, so
the singularities there are exactly the singular values of the
displayed new composite. Outside \(B\), the maps are the old ones.
The first two sets remain well separated: their newly separated
parts lie strictly on opposite sides of \(\partial B_0\), which
contains no point of either set, and \(S_g\) was already well separated
from \(S_e\). Their union is exactly \(S\). The exterior part
\(S_f\setminus B\) remains well separated from \(S\) by the old
invariant. The two Baire conditions give both directions of separation
between the new annular part and \(S\). Any annular accumulation at
either bounding sphere meets no actual point of \(S\), by the choice
of both radii. These sets are nowhere dense: they are subsets of the
old nowhere dense sets or of a homeomorphic copy of \(S\), and a
finite union of their closures still has empty interior. They miss
\(E_0\), since every change is inside \(B\). All boundary values are
unchanged. This proves admissibility with the **composite-null**
invariant, including the part imported from singular values outside
the operation ball.

To start the induction, let \(u=c(\partial f):D^4\to D^4\) be the cone
extension of the boundary homeomorphism. Take

\[
W_0=D^4,\quad e_0=u,\quad f_0=f,\quad g_0=u^{-1}.
\]

Take \(E_0=S^3\cup u^{-1}f(L)\). Because the fibers above \(f(L)\)
are singletons, this closed set misses \(g_0(\Sigma f_0)\); the other
two singular sets are empty. Hence it is an admissible initial diagram.
It is not necessary that the closure of the singular image miss
\(E_0\): every selected singular value is outside the closed \(E_0\),
and its operation ball can therefore avoid \(E_0\). This explains
explicitly why the relative extension beyond the boundary is permitted.

Inductively make all fibers of \(e_n,f_n\) have diameter less than
\(2^{-n}\), while changing both relations

\[
R_n=e_n^{-1}f_n,\qquad S_n=f_n^{-1}e_n
\]

by less than \(2^{-n}\). The nullity needed for this list follows from
the composite invariant: a nontrivial \(e_n\)-fiber has target value
in \(g_n(\Sigma e_n)\), outside \(\overline{\Sigma g_n}\), so the
corresponding \(g_n\)-fiber is a singleton and this \(e_n\)-fiber is
exactly a full \(g_ne_n\)-fiber. Distinct such fibers have distinct
composite target values. The same reasoning applies to \(f_n\).
At stage \(n\), list the finitely many target points where either
\(e_n\) or \(f_n\) has a fiber of size at least \(2^{-n-1}\). By
separation, no target point on this list belongs to both singular-image
families or to \(\Sigma g_n\). Choose disjoint small target balls around
the list, avoiding \(E_0\cup\Sigma g_n\) and the other singular-image
family. Over a ball about an \(e_n\)-singularity, the \(f_n\) inverse
has arbitrarily small diameter, while the \(e_n\) inverse has diameter
less than \(2^{-n}\); the converse holds over an \(f_n\)-singularity.
More precisely, at an \(e_n\)-singularity choose the ball so that
its \(g_ne_n\)-inverse has diameter less than the **old** bound
\(2^{-n}\), and its \(g_nf_n\)-inverse has diameter less than the
**new** bound \(2^{-n-1}\). At an \(f_n\)-singularity the two roles
are reversed. The small opposite-map bound controls fibers newly
created there, while the own-map old bound controls the change of
relations. These bounds follow from upper semicontinuity of inverse compact sets:
if arbitrarily small balls failed the desired bound, a sequence of
points over their shrinking radii would have two limiting points in the
central fiber violating its diameter bound.

Choose both outer and inner radii at which none of the countably many
composite singular images hits either boundary sphere. Shrinking the
outer radii also makes the balls avoid the closures of the two other
singular-image families, by well separation. Apply the diagram operation at all
listed \(e_n\)-singularities; interchange \(e\) and \(f\), apply it at
all listed \(f_n\)-singularities, and interchange back. The relations
change only over the selected balls. Their inverse-image diameters give
the summable estimates for \(R_n,S_n\). All fibers above the next
threshold were removed, and every newly produced fiber is contained in
one of the small inverse-image regions, so the next fiber bound holds.
The equations over \(E_0\) are unchanged at every operation:

\[
(g_nf_n)^{-1}(E_0)=(g_0f_0)^{-1}(E_0),\qquad
e_n^{-1}f_n=e_0^{-1}f_0\quad\hbox{on that set}.
\]

The two relations consequently converge uniformly. Their values have
diameters tending to zero, so they converge to continuous single-valued
maps, by the same compact-graph argument used for \(\alpha\). Their
graphs are transposes, hence their limits are inverse homeomorphisms.
Let \(r\) be the limit of \(e_n^{-1}f_n\). Then \(h=ur\) is a
homeomorphism and on \(L\cup S^3\) it equals
\(u e_0^{-1}f_0=f\). This completes the relative disk-to-disk proof.

## Applying that proof to the actual tower side

By the \(\alpha\) argument identify \(Q\) with \(D^4\). The partial
parameterization input describes \(C'\) as a disk whose collar arcs
\(\{c(k)\}\times[0,1]\), for \(k\) in a closed set \(T\subset S^3\),
have been divided out. Attach an outside collar to \(\partial C'\).
The resulting space \(X=C'\cup_{\partial C'}(\partial C'\times[1,2])\)
is a disk, as follows by an explicit quotient model. Choose continuous
\(j:S^3\to[0,1]\), with \(j^{-1}(0)=T\), for example a rescaled distance
to \(T\). On each collar line replace the parameter interval \([0,1]\)
linearly by \([0,j(s)]\), and replace \([1,2]\) linearly by \([j(s),2]\).
Keep the rest of the disk unchanged. This onto map has exactly the
specified collapsed collar arcs as its nonsingleton fibers; it is the
identity on the outside boundary. Its induced map from the quotient is
a continuous bijection between compact Hausdorff spaces, hence a
homeomorphism. This proves \(X\cong D^4\) without assuming \(C'\) already
is a manifold.

Extend \(\beta\) over the attached collar by \(\partial\beta\times\mathrm{id}\),
with a collar attached also to its target. In disk coordinates this is
the disk-to-disk map just proved replaceable. Its singular fibers are
exactly the old \(\beta\)-fibers. They are null with nowhere dense
singular image by the common-quotient input. Protect the entire attached
collar, including its inner joining hypersurface, together with a
smaller portion of the original attaching collar. Every fiber above
their image is a singleton: on the attached collar this follows from
the formula \(\partial\beta\times\mathrm{id}\), on its inner joining
hypersurface from \(\beta^{-1}(\partial Q)=\partial C'\) and its
homeomorphic boundary restriction, and on the smaller attaching collar
from the input. A regular neighborhood on the crumpled side of the
joining hypersurface is not being assumed. The relative proof gives a
homeomorphism of the enlarged disks that agrees with the extended
\(\beta\) there. It therefore restricts to a homeomorphism

\[
b:C'\longrightarrow Q
\]

equal to \(\beta\) on the reserved smaller collar. The restriction is
justified by fixing the separating collar hypersurface, not by an
assumption that the original crumpled side is already a disk. Consequently

\[
H=b^{-1}a:P\to C'
\]

is the desired homeomorphism. On \(K\),
\(bq=\beta q=\alpha=a\), so \(H=q\). The attaching parameterization and
normal germ are therefore literally the prescribed ones.

## Embedded framed disk inside the given neighborhood

Take the standard product core \(D^2\times\{0\}\subset P\), and set

\[
\Delta=H(D^2\times\{0\})\subset C'\subset C\subset N.
\]

This is an embedded disk; its product normal thickening is the
restriction of \(H\) to \(D^2\times D^2\). At interior points of the core
this supplies a locally flat product chart: a small open product in
\(\operatorname{int}P\) is carried to an open subset of the ambient
4-manifold by invariance of domain, applied to the embedding
\(\operatorname{int}P\to\operatorname{int}N\). At its boundary, the
preserved attaching collar supplies the corresponding relative product
chart. The normal framing at the attaching circle is exactly the
original \(D^2\) factor, since \(H=q\) on a full four-dimensional collar,
not only on the circle. Nothing is asserted about an extension of \(H\)
to a homeomorphism of the whole ambient manifold; none is necessary for
extracting this framed core. The disk and its whole product thickening
lie in the specified tower neighborhood \(N\), so any disjointness and
control obtained by choosing \(N\) are preserved.

If a geometric dual meets the prescribed core in one transverse point
in the protected collar, and misses the rest of \(N\), then it meets
\(\Delta\) in exactly that point with the same transverse product germ.
This last sentence uses those two explicit geometric input conditions;
it does not infer geometric duality from algebraic intersection or from
the boundary condition alone. The controlled-disk author owns the
construction that places the original dual germ in this reserved region.

## Integration limits

This note's complete output is the relative homeomorphism and actual
core extraction for the stated chapter-4 common-quotient input. It does
not establish the finite controlled tower construction, convergence and
nesting, or the singular/partial parameterization and common quotient:
those are genuinely separate new arguments assigned to the other two
authors. The only protected interior sets used here lie in the reserved
attaching collar. The source's boundary-relative proposition, by itself,
would not justify an arbitrary prescribed bottom-stage dual germ.
