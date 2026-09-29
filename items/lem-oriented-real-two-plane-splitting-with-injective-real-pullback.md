---
id: lem-oriented-real-two-plane-splitting-with-injective-real-pullback
kind: lemma
title: Oriented real two-plane splitting with real-cohomology injection
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-smooth-manifold
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - def-smooth-function-on-a-relatively-open-subset-of-a-half-space
  - def-smooth-map-between-manifolds-with-boundary
  - prop-chain-rule-for-smooth-half-space-maps
  - def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
  - def-smooth-bundle-metric
  - def-oriented-real-vector-bundle-and-oriented-frame-bundle
  - def-stiefel-space-grassmannian-and-tautological-bundle
  - def-oriented-grassmannian-and-tautological-oriented-bundle
  - def-quotient-topology
  - def-locally-trivial-fiber-bundle
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary
  - thm-second-countable-implies-lindelof
  - thm-countable-union-of-countable
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
  - def-cw-complex-with-closure-finiteness-and-weak-topology
  - thm-leray-hirsch-module-isomorphism
  - thm-numerable-fiber-bundles-are-hurewicz-fibrations
  - def-hurewicz-and-serre-fibrations
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-fibration-sequence-is-natural
  - lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - thm-five-lemma-for-modules
  - thm-homotopic-maps-induce-equal-maps-in-singular-cohomology
  - lem-integral-cohomology-ring-of-complex-projective-space-by-splitting
  - def-schubert-cells-in-real-and-complex-grassmannians
  - thm-schubert-cells-give-the-stable-grassmannian-cw-structure
  - thm-cellular-homology-computes-singular-homology
  - lem-real-projective-space-cellular-homology-and-pinch-map
  - def-compactly-supported-singular-cohomology-of-a-locally-compact-space
  - thm-long-exact-sequence-of-a-pair-in-singular-cohomology
  - thm-excision-for-singular-cohomology
  - thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
  - thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric
  - thm-poincare-duality-for-oriented-topological-manifolds
  - def-euler-class-by-zero-section-pullback-of-the-thom-class
  - thm-naturality-orientation-sign-and-whitney-product-for-euler-classes
  - prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish
  - def-pontryagin-classes-by-complexification
  - thm-top-pontryagin-class-is-the-square-of-the-euler-class
  - thm-pontryagin-whitney-product-away-from-two
  - thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes
  - def-singular-chain-complex-and-singular-homology
  - def-singular-cochain-complex-with-coefficients
  - def-singular-cohomology-with-coefficients
  - def-singular-cohomology-ring
  - prop-singular-cohomology-is-contravariantly-functorial
  - prop-cup-product-is-natural-unital-and-associative
  - thm-heine-borel-rn
  - thm-compactness-under-continuous-maps
  - thm-closed-subspace-of-a-compact-space-is-compact
  - thm-finite-products-of-compact-spaces
  - thm-compact-subset-of-a-hausdorff-space-is-closed
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Kaiwen, Talk 13: Cohomology of Projective Bundles (2025)"
      url: "https://www.math.uni-bonn.de/people/cfb/TEACHING/Vortrag-13-Song.pdf"
      locator: "§4, Propositions 4.6–4.13 and Theorem 4.14, printed pp. 7–11; geometric model and claimed fiber groups, with source proof sketches re-derived here"
    - title: "Allen Hatcher, Vector Bundles & K-Theory"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "Appendix to §1.2, Proposition 1.20 and proof, printed pp. 36–37: every CW complex is paracompact"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume AC. Let $E\to M$ be an oriented smooth Euclidean vector bundle of rank
$r\geq0$ over a finite-dimensional Hausdorff second-countable smooth manifold
$M$, possibly with boundary or empty. There is a smooth proper flag-bundle
projection $q:F(E)\to M$ (proper means inverse images of compact sets are
compact) such that $q^*:H^*(M;\mathbb R)\to H^*(F(E);\mathbb R)$ is injective
and $q^*E$ is an ordered orthogonal sum of oriented real two-plane bundles,
with one oriented trivial line appended when $r$ is odd. The cases $r=0,1,2$
are included.

## Facts & Assumptions

**Given:** AC, $M$, and the oriented Euclidean bundle $E\to M$. Write
$H^*(-;\mathbb R)$ for singular cohomology with real coefficients.

[A1] AC supplies a choice function for every family of nonempty sets. Its
restriction to countable families gives AC$_\omega$ ([[def-axiom-of-choice]],
[[def-countable-choice]]). We use AC$_\omega$ for the tubular-neighbourhood,
bundle-metric, smooth-partition and countable-cover suppliers; full AC is also inherited by
the CW-type, characteristic-class, Leray–Hirsch and UCT suppliers. At the end,
full AC is used once more to identify cohomology of a disjoint union with the
product of its component cohomologies.

[F1] A smooth bundle has local smooth linear frames; a supplied smooth bundle
metric makes orthogonal complements smooth subbundles, and the supplied
orientation can be represented by positive frames
([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]],
[[def-smooth-bundle-metric]],
[[def-oriented-real-vector-bundle-and-oriented-frame-bundle]]).

[F2] The oriented Grassmannian $\operatorname{Gr}_2^+(\mathbb R^n)$ is the
quotient of the orthonormal two-frame space by $\operatorname{SO}(2)$; it has
the tautological oriented plane bundle. The ordinary Grassmannian has graph
charts, and these charts lift to its two orientation sheets
([[def-stiefel-space-grassmannian-and-tautological-bundle]],
[[def-oriented-grassmannian-and-tautological-oriented-bundle]],
[[def-quotient-topology]]).

[F3] Smooth manifolds with or without boundary have the indicated Euclidean or
half-space charts. Under AC$_\omega$, their open covers admit smooth partitions
of unity; a locally trivial fiber bundle is numerable when such a subordinate
partition is supplied. Under AC$_\omega$, second-countable spaces are Lindelöf
and a countable union of countable sets is countable
([[thm-second-countable-implies-lindelof]],
[[thm-countable-union-of-countable]], [[def-smooth-manifold]],
[[def-locally-trivial-fiber-bundle]],
[[thm-smooth-partitions-of-unity-exist-on-manifolds]],
[[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]).

[F4] Under AC every finite-dimensional Hausdorff second-countable smooth
manifold, with boundary or empty, is paracompact Hausdorff, CGWH, and of CW
homotopy type, and every smooth finite-rank vector bundle on it is numerable
([[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]). A CW complex
is a Hausdorff space with closure-finite cells and weak topology
([[def-cw-complex-with-closure-finiteness-and-weak-topology]]). Every CW
complex is paracompact and Hausdorff (Hatcher, *Vector Bundles & K-Theory*,
Appendix to §1.2, Proposition 1.20, printed pp. 36–37; its inductive
partition-of-unity proof is the paracompactness input below).

[F5] For a rank-$m$ oriented Euclidean bundle, the oriented two-plane
Grassmann bundle is locally the product with $\operatorname{Gr}_2^+(\mathbb
R^m)$, and its tautological plane plus oriented orthogonal complement is the
pullback of the original bundle. A smooth map's local coordinate expressions
are smooth in boundary charts ([F1], [F2],
[[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]],
[[def-smooth-function-on-a-relatively-open-subset-of-a-half-space]],
[[def-smooth-map-between-manifolds-with-boundary]],
[[prop-chain-rule-for-smooth-half-space-maps]]).

[F6] The cohomology ring of $\mathbb{CP}^{n-1}$ is
$\mathbb Z[a]/(a^n)$ for the Euler class $a$ of its complex tautological line;
its integral homology is $\mathbb Z$ in even degrees $0,2,\ldots,2n-2$ and
zero otherwise. The Schubert CW structure has one cell in each even
dimension and none in odd dimensions, so its cellular boundaries vanish.
The integral homology of $\mathbb{RP}^{n-1}$ is $\mathbb Z$
in degree zero, $\mathbb Z/2$ in odd degrees strictly below the top, and an
additional $\mathbb Z$ in top degree exactly when $n-1$ is odd; all other
groups vanish ([[lem-integral-cohomology-ring-of-complex-projective-space-by-splitting]],
[[def-schubert-cells-in-real-and-complex-grassmannians]],
[[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]],
[[thm-cellular-homology-computes-singular-homology]],
[[lem-real-projective-space-cellular-homology-and-pinch-map]]).

[F7] The standard inclusion $\mathbb{RP}^{n-1}\hookrightarrow\mathbb{CP}^{n-1}$
is a smooth embedding: in affine projective charts it is the inclusion of real
coordinates into complex coordinates. Both projective spaces are compact, and
the ambient one is Hausdorff, so the image is closed. Explicitly, the unit
real and complex spheres surject onto the respective projective spaces;
their quotient topologies make these spaces compact by [F13]. The map
$[z]\mapsto zz^*/\|z\|^2$ identifies $\mathbb{CP}^{n-1}$ with a subset of
the Hausdorff space of Hermitian matrices: it is continuous and injective,
and compact-to-Hausdorff implies it is a homeomorphism onto its image. The affine
charts have transition maps given by ratios of coordinates, and the real
chart is the zero set of the imaginary coordinate functions in the complex
chart. This proves the stated smooth embedded inclusion directly
([[def-quotient-topology]],
[[thm-compactness-under-continuous-maps]],
[[thm-compact-subset-of-a-hausdorff-space-is-closed]]). A closed embedded
submanifold has a tubular neighborhood that deformation retracts onto it
([[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]).
Compactly supported cohomology is the filtered colimit of relative
cohomology groups $H^*(X,X\setminus K)$ over compact supports $K$;
excision, the pair long exact sequence and the five lemma apply naturally to
singular cohomology ([[def-compactly-supported-singular-cohomology-of-a-locally-compact-space]],
[[thm-excision-for-singular-cohomology]],
[[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]],
[[thm-five-lemma-for-modules]]).

[F8] On an oriented boundaryless $d$-manifold, cap product gives natural
Poincaré duality $H_c^q(-;\mathbb R)\cong H_{d-q}(-;\mathbb R)$; on a CW
complex, the UCT sequence is natural, and homotopic maps induce equal singular
cohomology maps ([[thm-poincare-duality-for-oriented-topological-manifolds]],
[[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]],
[[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]).

[F9] Euler classes are natural for oriented pullbacks and multiply over
ordered oriented sums. A positive-rank bundle with a nowhere-zero section has
zero Euler class ([[def-euler-class-by-zero-section-pullback-of-the-thom-class]],
[[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]],
[[prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish]]). Singular
cohomology pullback preserves cup products and the unit
([[def-singular-cohomology-ring]],
[[prop-cup-product-is-natural-unital-and-associative]]).

[F10] For an oriented rank-$2k$ bundle on a path-connected CW base, its top
Pontryagin class equals the square of its Euler class. Over a coefficient ring
where $2$ is invertible, total Pontryagin classes multiply under ordered
Whitney sums, and adding a trivial bundle leaves them unchanged
([[def-pontryagin-classes-by-complexification]],
[[thm-top-pontryagin-class-is-the-square-of-the-euler-class]],
[[thm-pontryagin-whitney-product-away-from-two]],
[[thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes]]).
These characteristic classes are first defined integrally, then mapped through
the coefficient-ring map; step 1.6 uses their images in real cohomology.

[F11] A numerable fiber bundle is a Hurewicz fibration; a Hurewicz fibration
has the disk homotopy lifting property of a Serre fibration. Serre fibrations
have natural long exact homotopy sequences. Weak homotopy equivalences induce
integral homology isomorphisms; the natural UCT sequence and the module five
lemma then compare singular cohomology with real coefficients
([[thm-numerable-fiber-bundles-are-hurewicz-fibrations]],
[[def-hurewicz-and-serre-fibrations]],
[[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]],
[[thm-fibration-sequence-is-natural]],
[[lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice]],
[[thm-five-lemma-for-modules]]). Singular chains are free on singular
simplices, cochains are their Hom complexes, and continuous maps induce
contravariantly functorial cohomology maps
([[def-singular-chain-complex-and-singular-homology]],
[[def-singular-cochain-complex-with-coefficients]],
[[def-singular-cohomology-with-coefficients]],
[[prop-singular-cohomology-is-contravariantly-functorial]]).

[F12] Leray–Hirsch applies to a Serre fibration over a path-connected CW
complex when finitely many total-space classes restrict to a homogeneous
cohomology basis on every fiber. Its module isomorphism sends the unit basis
class to pullback on the base ([[thm-leray-hirsch-module-isomorphism]]).

[F13] A finite-dimensional Euclidean Stiefel space is compact by Heine–Borel;
continuous images of compact spaces are compact; closed subsets of compact
spaces and finite products of compact spaces are compact; compact subsets of a
Hausdorff space are closed ([[thm-heine-borel-rn]],
[[thm-compactness-under-continuous-maps]],
[[thm-closed-subspace-of-a-compact-space-is-compact]],
[[thm-finite-products-of-compact-spaces]],
 [[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

[F14] Under AC$_\omega$, every smooth vector bundle admits a smooth bundle
metric ([[thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric]]).

## Proof

**Proof technique:** construct one oriented Grassmann tower, calculate its
fiber basis, and prove injectivity at each stage.

1.1 Fix $n\geq3$ and write $G_n=\operatorname{Gr}_2^+(\mathbb R^n)$, with [F2, F13]
tautological oriented plane $L$ and oriented orthogonal complement $Q$. The
quotient definition gives a continuous bijection from the compact Stiefel
quotient to the set of unit simple bivectors in $\Lambda^2\mathbb R^n$;
the bivector records both the plane and its orientation. A continuous bijection
from a compact space to a Hausdorff space is a homeomorphism here: a closed
subset of the compact source is compact, and its image is closed in the
Hausdorff target by [F13]. The graph charts make $G_n$ a smooth manifold of
dimension $2n-4$; the finite coordinate-plane chart cover makes it
second-countable. The group $\operatorname{SO}(n)$
acts transitively on oriented two-planes, and is path-connected: successive
plane rotations reduce any special orthogonal matrix to the identity. Hence
$G_n$ is path-connected. [F2, F13, linear algebra]

1.2 Let $W_n=\mathbb{CP}^{n-1}\setminus\mathbb{RP}^{n-1}$. Write a point as [F2]
$[z]=[x-iy]$ with $x,y\in\mathbb R^n$ linearly independent. The ordered pair
$(x,y)$ orients its real span; multiplying $z$ by a nonzero complex scalar
changes $(x,y)$ by a positive-determinant similarity, so this defines a map
$W_n\to G_n$. Conversely, in a local oriented orthonormal frame of a plane,
the point of $W_n$ is an invertible $2\times2$ real matrix modulo positive
similarities. Polar decomposition writes it uniquely as a positive scalar,
an element of $\operatorname{SO}(2)$, and a positive symmetric determinant-one
matrix. Thus $W_n$ is the associated bundle over $G_n$ with fiber the positive
symmetric determinant-one matrices. The homotopy $A\mapsto A^{1-t}$ contracts
that fiber to the identity; it is equivariant under orthogonal conjugation,
so it descends through the frame changes and gives a deformation retraction
$W_n\simeq G_n$. The real-part map on each complex tautological line sends
$z=x-iy$ and $iz=y+ix$ to the positively oriented basis $(x,y)$, identifying
the pulled-back oriented plane with the underlying real complex tautological
line. [F2, linear algebra, step 1.1]

1.3 Put $X=\mathbb{CP}^{n-1}$, $A=\mathbb{RP}^{n-1}$, and $d=2n-2$. [F6, F7, F14]
The quotient maps from $S^{2n-1}$ to $X$ and from $S^{n-1}$ to $A$ show that
both are compact. By [F7], $A$ is a closed smooth embedded submanifold.
The tubular-neighborhood theorem [F7] gives a tubular diffeomorphism from an
open neighborhood of the zero section of the normal bundle onto a neighborhood
of $A$. By [F14], give the normal bundle a smooth metric. Around each point of
the compact zero section, a bundle chart contains a product neighborhood lying
inside the tubular domain; finitely many such base patches cover $A$, and the
minimum of their positive fiber radii gives a uniform disk neighborhood.
Every smaller-radius disk neighborhood deformation retracts radially to $A$.
Their images $U$ are nested tubular neighborhoods. Their
complements $K=X\setminus U$ are compact subsets of $W_n$ and are cofinal
among compact subsets of $W_n$: for compact $C\subset W_n$, the open set
$X\setminus C$ contains the compact zero section, so compactness gives a
sufficiently small uniform disk neighborhood lying in $X\setminus C$. By
[F7] and excision,
$H_c^q(W_n;\mathbb R)\cong\operatorname*{colim}_U H^q(X,U;\mathbb R)$.
The inclusion $A\hookrightarrow U$ is a homotopy equivalence; the natural
pair long exact sequences and five lemma identify every $H^q(X,U;\mathbb R)$
with $H^q(X,A;\mathbb R)$. Consequently $H_c^q(W_n;\mathbb R)\cong
H^q(X,A;\mathbb R)$, and the map forgetting support is the relative-to-absolute
map $\epsilon:H^q(X,A;\mathbb R)\to H^q(X;\mathbb R)$. [A1, F7, F6, F14, topology, step 1.2]

1.4 Apply the natural UCT to the integral homology in [F6]. For $G=\mathbb Z$, [F6, F7]
$\operatorname{Hom}(G,\mathbb R)=\mathbb R$ and
$\operatorname{Ext}^1(G,\mathbb R)=0$. For $G=\mathbb Z/2$ both terms vanish:
the Hom group is zero because $\mathbb R$ has no 2-torsion, and the free
resolution $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb Z/2\to0$
computes $\operatorname{Ext}^1(\mathbb Z/2,\mathbb R)=\mathbb R/2\mathbb R=0$.
Thus $H^q(X;\mathbb R)=\mathbb R$ in even degrees $0,2,\ldots,d$ and zero
otherwise. For $A$, it is $\mathbb R$ in degree zero, and also in degree
$n-1$ when $n$ is even; all its other positive-degree groups vanish. The
pair long exact sequence now gives $H_c^0(W_n;\mathbb R)=0$; for positive
even $q\le d$ it gives $H_c^q(W_n;\mathbb R)=\mathbb R$ except that
$H_c^n(W_n;\mathbb R)=\mathbb R^2$ when $n$ is even; all odd groups and
groups outside $[0,d]$ vanish. [A1, F6, F7, UCT calculation, step 1.3]

1.5 The complex orientation of $X$ restricts to an orientation of the open [F6, F8, F9]
manifold $W_n$. Poincaré duality and the deformation retraction in step 1.2
therefore compute $H^*(G_n;\mathbb R)$: it is $\mathbb R$ in degrees
$0,2,\ldots,2n-4$, zero in odd degrees, and has dimension two in degree
$n-2$ when $n$ is even. Let $a=e(\gamma_{\mathbb C,\mathbb R})\in H^2(X;\mathbb Z)$
be the generator from [F6], let $i:W_n\hookrightarrow X$, and let
$x=e(L)\in H^2(G_n;\mathbb Z)$, with integral classes mapped to real
coefficients as needed. By [F6] and [F8], the image of each $a^j$ is a nonzero
generator of $H^{2j}(X;\mathbb R)$. For positive even $q\le d$ except $q=n$ when $n$ is
even, the pair sequence shows $\epsilon$ of step 1.3 is an isomorphism. PD
identifies it with $i_*:H_{d-q}(W_n;\mathbb R)\to H_{d-q}(X;\mathbb R)$.
By the natural UCT pairing, the dual restriction
$i^*:H^{d-q}(X;\mathbb R)\to H^{d-q}(W_n;\mathbb R)$ is therefore an
isomorphism. Step 1.2 identifies the pullback of $x$ with $i^*a$; since
$a^j$ generates $H^{2j}(X;\mathbb Z)$, it follows that $x^j\ne0$ for every
$0\le j\le n-2$ except possibly $j=(n-2)/2$ when $n$ is even. In that
exceptional case $x^j\ne0$ follows below from the nonzero square
$x^{n-2}$. [A1, F6, F8, F9, step 1.2, step 1.3, step 1.4]

1.6 Suppose $n=2k\ge4$. The ordered sum $L\oplus Q$ is the trivial oriented [F9, F10]
rank-$2k$ bundle. By [F9], $x e(Q)=e(L)e(Q)=e(L\oplus Q)=0$, since the
trivial positive-rank bundle has a nowhere-zero section. To calculate the
square, take a homotopy equivalence $h:Y\to G_n$ from a path-connected CW
complex. Since $G_n$ is a finite-dimensional second-countable smooth
manifold, [F4] makes $Q$ numerable; pulling its numeration back makes
$Q_Y=h^*Q$ numerable on $Y$. Hatcher's CW paracompactness proof, recorded in [F4],
gives that $Y$ is paracompact and Hausdorff, so the Pontryagin suppliers apply.
Set $L_Y=h^*L$ and $x_Y=h^*x$. Euler naturality identifies their Euler
classes with pullbacks of those on $G_n$. The top
Pontryagin theorem gives $p_1(L_Y)=x_Y^2$, and the rank cutoff gives
$p(L_Y)=1+x_Y^2$. Pontryagin multiplicativity over $\mathbb R$ and stability
under a trivial summand yield $p(L_Y)p(Q_Y)=p(L_Y\oplus Q_Y)=1$. Comparing
successive homogeneous degrees in this equation gives
$p_j(Q_Y)=(-1)^j x_Y^{2j}$ for $0\le j\le k-1$. The top Pontryagin theorem
for $Q_Y$ then gives $e(Q_Y)^2=p_{k-1}(Q_Y)=(-1)^{k-1}x_Y^{n-2}$.
Since $h^*$ is an isomorphism and Euler classes are natural, this descends to
$e(Q)^2=(-1)^{k-1}x^{n-2}$ on $G_n$. Step 1.5 established
$x^{n-2}\ne0$; hence $x^{(n-2)/2}$ and $e(Q)$ are linearly independent:
multiplying a relation $\alpha x^{(n-2)/2}+\beta e(Q)=0$ by $x$ and using
$xe(Q)=0$ gives $\alpha x^{n/2}=0$, while step 1.5 gives $x^{n/2}\ne0$;
then $\alpha=0$, and $e(Q)^2\ne0$ forces $\beta=0$. These two classes
therefore form a basis of the two-dimensional middle cohomology. For odd $n$,
the nonzero powers in step 1.5 already form a basis by their distinct
degrees. Thus the full fiber basis is $1,x,\ldots,x^{n-2}$ when $n$ is odd,
and $1,x,\ldots,x^{n-2},e(Q)$ when $n$ is even. [A1, F4, F9, F10, step 1.5]

1.7 For each oriented smooth Euclidean bundle $V\to B$ of rank $n\ge3$, [F1, F2, F3, F5]
form its oriented Grassmann bundle $\pi:G_2^+(V)\to B$. Local positive
orthonormal frames and the graph charts of [F2] give smooth local product
charts with fiber $G_n$. Transition maps act smoothly by $\operatorname{SO}(n)$;
their formulas remain smooth on half-space charts by [F5] when $B$ has
boundary. Thus the total is a finite-dimensional smooth manifold, with boundary exactly over
the boundary of $B$. It is Hausdorff: points over different base points
separate by inverse images of base neighborhoods, and points in one fiber
separate in a bundle chart. It is second-countable: the trivializing cover
has a countable subcover by Lindelöfness; each product chart has a countable
basis, and their countable union is a basis. The pulled-back bundle splits
orthogonally as $\pi^*V=L_V\oplus Q_V$, with both summands oriented as in [F2].
[F1, F2, F3, step 1.1]

1.8 Each $\pi$ is proper. Let $K\subset B$ be compact. [F13]
Around each point of $K$, choose a relatively open coordinate ball or half-ball $U$ whose compact
closure lies inside a bundle-trivializing chart. Heine–Borel makes each
closure compact. Finitely many such $U_i$ cover $K$. Each $K\cap\overline{U_i}$
is a closed subset of compact $K$, hence compact; in the trivialization,
$\pi^{-1}(K\cap\overline{U_i})$ is homeomorphic to
$(K\cap\overline{U_i})\times G_n$, compact by [F13]. Their finite union is
$\pi^{-1}(K)$, so it is compact. [F3, F13, local charts, step 1.7]

1.9 Every stage projection is numerable. On its smooth base, apply the [F3, F4]
boundaryless or boundary partition theorem in [F3] to its bundle-trivializing
cover; the supplied partition satisfies the support and local-finiteness
conditions in the definition of numerable fiber bundle. Its total is again
a second-countable smooth manifold, so [F4] makes every stage paracompact
Hausdorff and of CW homotopy type and makes its smooth finite-rank vector
bundles numerable. [A1, F3, F4, step 1.7]

1.10 We prove real-cohomology injectivity for $\pi:G_2^+(V)\to B$ componentwise. [F4, F11]
The fiber $G_n$ is path-connected. Since a smooth manifold is locally path
connected, its connected components are path components; the local bundle
charts and path lifting show that the total-space components are exactly the
preimages of base components. Fix one such component $C$ and a path-connected
CW complex $Y$ with a homotopy equivalence $h:Y\to C$, available by [F4].
Pull back $\pi$ to $\widetilde G\to Y$. The pulled-back bundle is numerable
because its partition is the pullback of the partition in step 1.9. By [F11]
both projections are Hurewicz, hence Serre, fibrations. [A1, F4, F11, step 1.9]

1.11 The global classes $1,e(L_V),e(L_V)^2,\ldots,e(L_V)^{n-2}$, [F9, F12]
together with $e(Q_V)$ when $n$ is even, restrict to the full fiber basis
of step 1.6 by naturality of Euler classes and cup products. Pull these
classes back to $\widetilde G$; on each fiber their restrictions are the
same basis. Applying Leray–Hirsch
[F12] to $\widetilde G\to Y$ shows that
$\widetilde\pi^*:H^*(Y;\mathbb R)\to H^*(\widetilde G;\mathbb R)$ is
injective: in the module isomorphism, pullback is exactly the coefficient of
the basis element $1$. [A1, F9, F12, step 1.6, step 1.10]

1.12 The pullback map $\widetilde h:\widetilde G\to\pi^{-1}(C)$ induces a [F11]
weak homotopy equivalence. On fibers it is the identity, and on bases it is
the homotopy equivalence $h$. The natural long exact sequences [F11] give
isomorphisms on all higher homotopy groups. For $m\ge3$, the terms in the
five-term segment around $\pi_m$ are abelian, so the module five lemma
applies. In degree two, if $z\in\pi_2(\widetilde G)$ maps to zero, its base
class is zero because $h_*:\pi_2(Y)\to\pi_2(C)$ is injective; hence $z$
comes from $\pi_2(G_n)$. Its fiber class is a boundary from $\pi_3(C)$,
which lifts through the surjection $h_*:\pi_3(Y)\to\pi_3(C)$, so exactness
makes $z=0$. Conversely, for $z\in\pi_2(\pi^{-1}(C))$, its base class lifts
to $\pi_2(Y)$; naturality and the identity fiber map make the lifted class
have zero boundary in $\pi_1(G_n)$, so exactness lifts it to
$\pi_2(\widetilde G)$. The difference from $z$ lies in the image of
$\pi_2(G_n)$ and can be corrected there. For $\pi_1$ use the group sequence
$\pi_2(C)\to\pi_1(G_n)\to\pi_1(\pi^{-1}C)\to\pi_1(C)\to\pi_0(G_n)$:
injectivity lifts a boundary witness through $\pi_2(Y)\to\pi_2(C)$, and
surjectivity first lifts the base loop through $h_*$ and then corrects by a
loop in the common fiber. Since the fiber and both bases are path-connected,
the total spaces are path-connected too, so $\widetilde h$ is also a
bijection on components. [F11, exactness, step 1.10]

1.13 By [F11], $\widetilde h$ induces an isomorphism on integral homology. [F8, F11]
Apply the natural UCT sequence to the free singular chain complexes with
coefficient group $\mathbb R$. The induced maps on the Hom and Ext terms are
isomorphisms because the integral homology maps are; the five lemma therefore
makes $\widetilde h^*:H^*(\pi^{-1}C;\mathbb R)\to
H^*(\widetilde G;\mathbb R)$ an isomorphism. Also $h^*:H^*(C;\mathbb R)\to
H^*(Y;\mathbb R)$ is an isomorphism by [F8]. The square
$\widetilde h^*\pi^*=\widetilde\pi^*h^*$ commutes by functoriality. If
$\pi^*a=0$, then
$\widetilde\pi^*h^*a=0$; step 1.11 gives $h^*a=0$, hence $a=0$. Thus
$\pi^*$ is injective on every component. Singular cochains on a disjoint
union are the product of component cochains; full AC makes the product of
component coboundary preimages surjective, so cohomology is the product of
component cohomologies. Therefore $\pi^*$ is injective globally. [A1, F8,
F11, step 1.11, step 1.12]

1.14 Start with $B_0=M$ and $V_0=E$. Whenever the current oriented complement [F1]
$V_j$ has rank $n_j\ge3$, set $B_{j+1}=G_2^+(V_j)$, pull $V_j$ back, and
replace it by its oriented orthogonal complement $V_{j+1}$. Step 1.7 keeps
each stage smooth, Hausdorff and second-countable; steps 1.8–1.9 make every
projection proper and numerable; step 1.13 proves every cohomology pullback
injective. The rank drops by two at each stage, so the process stops after
finitely many stages with rank zero, one, or two. A rank-one oriented
Euclidean bundle has the unique positive unit section and is the oriented
trivial line; a rank-two terminal complement is itself the final oriented
two-plane. The composite $q:F(E)=B_s\to M$ is proper by finite composition of
proper maps; its cohomology pullback is the composition of the stagewise
injections. The tautological planes and terminal rank-two plane, or final
line when rank one, give the required ordered orthogonal decomposition.
[F1, step 1.7, step 1.8, step 1.9, step 1.13, finite induction]

1.15 If $M=\varnothing$, its tower is empty and all cohomology groups are [A1, F1, F3]
zero. If $r=0$, take $q=\operatorname{id}_M$ and the empty sum. If $r=1$,
take the identity and the unique positive unit section. If $r=2$, no Grassmann stage is needed: take the identity and the single
oriented plane $E$. These identity maps are proper and induce identity maps in cohomology.
At every positive-rank stage the complement is oriented by the rule that
$L_j\oplus V_j$ has the pulled-back orientation, so no orientation choice is
hidden. The boundary case is included by the half-space chart and partition
arguments of steps 1.7–1.9; the fiber calculation uses only closed
boundaryless manifolds. The item is a one-way existence statement, so neither
direction of an iff is applicable. AC is used only in the supplier and
component-product uses recorded in [A1]. Full AC lets us choose cocycle
representatives for any family of component cohomology classes and choose
coboundary preimages for any family of component boundaries; hence the canonical
map from cohomology of the disjoint union to the product of component
cohomologies is an isomorphism. [A1, F1, F3, step 1.7, step 1.9, step 1.13,
step 1.14] ∎

## Source notes

Kaiwen, *Talk 13: Cohomology of Projective Bundles*, §4, Proposition 4.6 and
Lemma 4.7 identify the oriented Grassmannian with the homotopy type of the
projective complement by polar decomposition; Lemma 4.8 and Proposition 4.9
give the compact-support/relative-cohomology and Poincaré-duality route to the
additive groups; Proposition 4.12 records the Euler and Pontryagin relations;
Propositions 4.13 and Theorem 4.14 apply Leray–Hirsch and iterate the tower.
The notes mark the polar-decomposition and cohomology arguments as sketches.
They also state integral Pontryagin multiplicativity without treating the
two-torsion obstruction; this proof instead uses the library's
real-coefficient product theorem and supplies the missing middle-degree basis
argument. The source locators above refer to printed pages 7–11 (PDF pages
6–10).

Hatcher, *Vector Bundles & K-Theory*, Appendix to §1.2, Proposition 1.20,
printed pp. 36–37, proves that every CW complex is paracompact by extending
locally finite partitions over successive skeleta. This is the precise
paracompactness input for the CW model used in step 1.6.
