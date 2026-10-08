---
id: def-jacobian-of-a-compact-riemann-surface
kind: definition
title: The Jacobian of a compact Riemann surface
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 20
deps:
  - cor-quotient-of-an-abelian-group-is-abelian
  - cor-subgroups-of-abelian-groups-are-normal
  - def-algebraic-dual-and-linear-functional
  - def-axiom-of-choice
  - def-balls-and-polydiscs-in-complex-euclidean-space
  - def-complex-lattice-and-complex-torus
  - def-covering-space-action
  - def-deck-transformation-and-deck-group
  - def-full-rank-lattice-covolume-and-dual-lattice
  - def-homeomorphism-and-open-maps
  - def-holomorphic-map-and-complex-jacobian
  - def-path-connected
  - def-period-pairing-and-period-lattice
  - def-quotient-group
  - def-quotient-topology
  - def-vector-space
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - lem-full-lattice-fundamental-domain-and-bounded-points
  - lem-holomorphic-differentials-form-a-g-dimensional-space
  - lem-product-topology-on-rn
  - lem-period-pairing-is-well-defined-and-computed-by-integration
  - rem-complex-euclidean-space-dictionary
  - thm-complex-torus-quotient-is-well-defined
  - thm-compactness-under-continuous-maps
  - thm-heine-borel-rn
  - thm-orbit-map-of-a-covering-space-action-is-a-covering
  - thm-path-connected-implies-connected
  - thm-rational-points-and-boxes-in-rn
  - thm-quotient-group-laws
  - thm-riemann-bilinear-relations
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)"
      url: "https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf"
      locator: "Ch. 7 §1, Proposition-Definition 7.1 and proof, printed pp. 59–60: the period homomorphism, period lattice, and Jacobian quotient. The local proof here supplies the quotient atlas and does not rely on the proof's broken internal cross-reference 'Theorem ??'."
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 15, Theorem 15.1 and the Jacobian definition, printed pp. 127–128: the period image is a lattice and Jac(X)=Ω(X)^*/H_1(X,Z)."
    - title: "Karl Otto Forster, Lectures on Riemann Surfaces, GTM 81, 4th corrected printing"
      url: "http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf"
      locator: "Ch. 2 §21.6, printed pp. 170–171: the Jacobi variety as C^g/Per and its group and basis-presentation conventions. Forster explicitly says the complex manifold structure is not treated there; the local quotient-atlas proof here supplies it."
verification:
  precheck: pending
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the period,
dimension, and bilinear-relations suppliers. Let $X$ be a compact
connected Riemann surface of genus $g$, let $\Omega(X)$ be its $g$-dimensional
complex vector space of holomorphic differentials, and let
$$e:H_1(X;\mathbb Z)\longrightarrow\Omega(X)^*,\qquad e(\gamma)(\omega):=P(\gamma,\omega),\qquad \Lambda:=e(H_1(X;\mathbb Z))$$
be the period homomorphism and period subgroup of
[[def-period-pairing-and-period-lattice]]. By
[[thm-riemann-bilinear-relations]], $e$ is injective and $\Lambda$ is a full
lattice in the real vector space underlying $\Omega(X)^*$. For $g=0$ both
spaces are zero and we use the rank-zero lattice convention $\Lambda=\{0\}$.

The **Jacobian** of $X$ is the quotient set and additive quotient group
$$\operatorname{Jac}(X):=\Omega(X)^*/\Lambda=\{[\xi]:=\xi+\Lambda\mid \xi\in\Omega(X)^*\},$$
with $[\xi]+[\eta]:=[\xi+\eta]$, identity $[0]$, and the quotient topology
of the projection $\pi:\Omega(X)^*\to\operatorname{Jac}(X)$. Give
$\Omega(X)^*$ its finite-dimensional Euclidean topology: in any complex basis it
is identified with $\mathbb C^g$, and invertible complex-linear changes of basis
are Euclidean homeomorphisms.

For $g\ge1$, let $\omega_1,\ldots,\omega_g$ be the normalized basis of
[[thm-riemann-bilinear-relations]]. Evaluation on this basis identifies
$\Omega(X)^*$ with $\mathbb C^g$ and identifies $\Lambda$ with
$$\mathbb Z^g+\Pi\mathbb Z^g,$$
where $\Pi_{ij}=P(b_i,\omega_j)$ and $\operatorname{Im}\Pi$ is positive
definite. The quotient has the complex atlas whose charts are local inverses
of injective restrictions of $\pi$ to sufficiently small open balls in
$\mathbb C^g$; their transition maps are locally translations by lattice
vectors.
Thus $\operatorname{Jac}(X)$ is a compact connected complex torus of complex
dimension $g$, and $\pi$ is a holomorphic covering map whose deck group is the
translation action of $\Lambda$. For $g=0$, $\operatorname{Jac}(X)$ is the
one-point, zero-dimensional torus.

The quotient, its group structure, topology, and complex atlas depend only on
$X$ and the intrinsic period homomorphism, not on the chosen symplectic basis
or complex basis of $\Omega(X)$. A different complex basis presents the same
quotient as $\mathbb C^g/\Lambda'$ by the induced complex-linear coordinate
isomorphism. When $g=1$, this is the quotient torus of
[[def-complex-lattice-and-complex-torus]] and
[[thm-complex-torus-quotient-is-well-defined]].

## Facts & Assumptions

**Given:** Full AC, a compact connected Riemann surface $X$ of genus $g$, its period pairing $P$, and the period homomorphism $e$.

[F1] The algebraic dual $V=\Omega(X)^*$ is a complex vector space under pointwise operations; in particular, its addition makes $V$ an abelian group ([[def-algebraic-dual-and-linear-functional]], [[def-vector-space]]).

[F2] The holomorphic-differential space $\Omega(X)$ has complex dimension $g$ ([[lem-holomorphic-differentials-form-a-g-dimensional-space]]).

[F3] If $\omega_1,\ldots,\omega_g$ is a complex basis of $\Omega(X)$, evaluation $\xi\mapsto(\xi(\omega_1),\ldots,\xi(\omega_g))$ is a complex-linear isomorphism $V\cong\mathbb C^g$ ([[def-algebraic-dual-and-linear-functional]]).

[F4] The period homomorphism is $e(\gamma)(\omega)=P(\gamma,\omega)$ and $\Lambda=e(H_1(X;\mathbb Z))$ is its subgroup image; for genus zero both are zero ([[def-period-pairing-and-period-lattice]]).

[F5] The period functional agrees with integration on homology and is independent of the chosen symplectic basis and cycle representatives, so $e$ and $\Lambda$ are intrinsic ([[lem-period-pairing-is-well-defined-and-computed-by-integration]]).

[F6] The bilinear-relations theorem supplies the unique normalized basis, the coordinate formula $\Lambda=\mathbb Z^g+\Pi\mathbb Z^g$, and the real basis of $V$ given by $e(a_1),e(b_1),\ldots,e(a_g),e(b_g)$ for $g\ge1$ ([[thm-riemann-bilinear-relations]]).

[F7] For $g\ge1$, a full lattice is the integer span of a real basis ([[def-full-rank-lattice-covolume-and-dual-lattice]]). For $g=0$ the zero lattice is the rank-zero convention stipulated in the Definition; the positive-rank lattice definition is not applied in dimension zero.

[F8] A full lattice in a finite-dimensional real vector space has a half-open fundamental parallelotope whose translates cover the space ([[lem-full-lattice-fundamental-domain-and-bounded-points]]).

[F9] Every bounded set in a finite-dimensional real vector space meets a full lattice in finitely many points ([[lem-full-lattice-fundamental-domain-and-bounded-points]]).

[F10] A subgroup of an abelian group is normal; its quotient group is defined by cosets, the quotient-group laws make those cosets a group, and a quotient of an abelian group is abelian ([[cor-subgroups-of-abelian-groups-are-normal]], [[def-quotient-group]], [[thm-quotient-group-laws]], [[cor-quotient-of-an-abelian-group-is-abelian]]).

[F11] The quotient topology is characterized by a set being open exactly when its inverse image under the quotient projection is open. For a subgroup translation quotient, the projection of an open set is open because its full inverse image is a union of open translates ([[def-quotient-topology]]).

[F12] In finite-dimensional coordinates, real-linear maps are continuous; the complex-Euclidean dictionary identifies $\mathbb C^g$ homeomorphically with $\mathbb R^{2g}$, and the product and Euclidean topologies on $\mathbb R^{2g}$ agree ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]], [[rem-complex-euclidean-space-dictionary]], [[lem-product-topology-on-rn]]).

[F13] The cube $[0,1]^{2g}$ is compact, continuous images of compact sets are compact, and rational boxes form a countable basis of $\mathbb R^{2g}$ ([[thm-heine-borel-rn]], [[thm-compactness-under-continuous-maps]], [[thm-rational-points-and-boxes-in-rn]]).

[F14] The line segment $t\mapsto(1-t)\xi+t\eta$ is a continuous path between any two points of $V$; composing such paths with the continuous quotient projection gives paths in the quotient, and path-connected spaces are connected ([[def-path-connected]], [[thm-path-connected-implies-connected]]).

[F15] A group action by homeomorphisms is a covering-space action when every point has a neighborhood disjoint from its nonidentity translates; its orbit map is a covering, and if the total space is path-connected its deck group consists exactly of the acting transformations ([[def-homeomorphism-and-open-maps]], [[def-covering-space-action]], [[thm-orbit-map-of-a-covering-space-action-is-a-covering]], [[def-deck-transformation-and-deck-group]]).

[F16] Complex translations are holomorphic affine maps with holomorphic inverse, by the definition of holomorphic maps in complex Euclidean space ([[def-holomorphic-map-and-complex-jacobian]]).

[F17] For $g=1$, the basis $(1,\Pi)$ with $\operatorname{Im}\Pi>0$ is an oriented full complex lattice and its quotient is the established compact complex torus ([[def-complex-lattice-and-complex-torus]], [[thm-complex-torus-quotient-is-well-defined]]).

[F18] Full AC is assumed in the period, dimension, and bilinear-relations suppliers; here it is inherited to select the symplectic and normalized bases used in [F6], with no further arbitrary selection ([[def-axiom-of-choice]], [[lem-holomorphic-differentials-form-a-g-dimensional-space]], [[thm-riemann-bilinear-relations]]).

## Verification

**Given:** The objects and conventions in the Definition.

1.1 Put $V=\Omega(X)^*$ with its additive structure and let $\pi:V\to V/\Lambda$ be the coset projection. By [F1], $V$ is an abelian group; by [F4], $\Lambda$ is a subgroup. Then [F10] gives the well-defined abelian quotient law $[\xi]+[\eta]=[\xi+\eta]$, identity $[0]$, and inverse $[-\xi]$. Equip this coset set with the quotient topology from [F11]. [F1, F4, F10, F11, given]

2.1 By [F5], for each homology class the functional $e(\gamma)$ is independent of the chosen symplectic basis and cycle representative, so its image $\Lambda$ and the quotient equivalence relation are intrinsic to $X$. A change of complex basis changes the evaluation coordinates by an invertible complex-linear map; [F3] and [F12] make it a homeomorphism, so the quotient set, group, and topology are unchanged. [F3, F4, F5, F12, step 1.1]

3.1 If $g=0$, [F2] and [F4] give $V=\Lambda=0$ and the quotient is a point. If $g\ge1$, under the inherited AC of [F18] use the normalized basis $\omega_1,\ldots,\omega_g$ from [F6] to define $\Phi:V\to\mathbb C^g$ by $\Phi(\xi)=(\xi(\omega_1),\ldots,\xi(\omega_g))$. By [F2] and [F3] this is a complex-linear isomorphism; [F6] gives $\Phi(\Lambda)=\mathbb Z^g+\Pi\mathbb Z^g$ and a real basis of $V$ consisting of its period vectors, and [F7] identifies that full lattice with their integer span. [F2, F3, F4, F6, F7, F18, step 2.1]

4.1 If $g=0$, step 3.1 is a point, hence compact. Assume $g\ge1$ and write $v_1,\ldots,v_{2g}$ for the real basis of $V$ from step 3.1. By [F8], the half-open parallelotope $P=\{\sum_i t_iv_i:0<t_i\le1\}$ has translates by $\Lambda$ covering $V$, so $\pi(P)=V/\Lambda$. In basis coordinates its closure is the image of $[0,1]^{2g}$ under a linear isomorphism; that map is continuous by [F12], and [F13] makes the closure compact. Since $\pi$ is continuous, [F13] makes $\pi(\overline P)=V/\Lambda$ compact. [F8, F12, F13, step 3.1]

4.2 If $g=0$, the quotient is a point and is Hausdorff, second-countable, and connected. Assume $g\ge1$. By [F9], bounded subsets meet $\Lambda$ finitely. For distinct classes $[\xi]\ne[\eta]$, put $w=\xi-\eta\notin\Lambda$; the bounded set $\overline B(w,1)$ meets $\Lambda$ in finitely many points, all at positive distance from $w$, while lattice points outside it are more than distance $1$ away. Hence some $r>0$ has $B(w,r)\cap\Lambda=\varnothing$. The projection is open by [F11], so $\pi(B(\xi,r/3))$ and $\pi(B(\eta,r/3))$ are disjoint open neighborhoods: an intersection would give a lattice difference in $B(w,2r/3)$. Thus the quotient is Hausdorff. Since $\pi$ is open, these images of a countable rational-box basis form a countable basis: for any open quotient set and any point in it, choose a lift in its open preimage and a rational box around that lift contained in the preimage. The straight-line paths in [F14] also show $V$ and its quotient image are path-connected, hence the quotient is connected. [F9, F11, F12, F13, F14, step 3.1]

5.1 If $g=0$, $\pi:0\to0$ is the identity covering, its deck group is trivial, and the single chart gives the complex atlas. Assume $g\ge1$. The bounded-intersection property [F9] gives $\epsilon>0$ with $B(0,\epsilon)\cap\Lambda=\{0\}$. For each $z\in V$, $U_z=B(z,\epsilon/3)$ has disjoint nonidentity translates, since an intersection with $U_z+\lambda$ would imply $|\lambda|<2\epsilon/3$. The translations are homeomorphisms, so [F15] makes the orbit projection a covering with deck group exactly those translations; the projection is open by [F11], and its restriction to $U_z$ is a homeomorphism onto $\pi(U_z)$, giving a chart. On overlaps the two local lifts differ by a continuous $\Lambda$-valued map, locally constant because $\Lambda$ is discrete; every chart transition is therefore locally a translation and holomorphic by [F16]. [F9, F11, F14, F15, F16, step 4.2]

6.1 In the charts of step 5.1, addition is locally $(z,w)\mapsto z+w+c$ and inversion is locally $z\mapsto-z+c$ for a fixed lattice vector $c$, so both are holomorphic by [F16]. If $g=1$, [F4] and [F6] give $\Lambda=\mathbb Z+\Pi\mathbb Z$ with $\operatorname{Im}\Pi>0$, and [F17] identifies this with the oriented complex-lattice quotient. For $g=0$, step 3.1 gives the one-point zero-dimensional torus. Any other complex basis changes coordinates by an invertible complex-linear map carrying $\Lambda$ to its coordinate image; by [F3], [F5], and [F12], it induces the biholomorphic presentation isomorphism in the Definition. [F3, F4, F5, F6, F12, F16, F17, step 2.1, step 3.1, step 5.1] ∎
## Source notes

The definition $\Lambda=e(H_1(X;\mathbb Z))$ comes from
`def-period-pairing-and-period-lattice`, which supplies $P,e,\Lambda$ in the
statement and steps 1.1, 2.1, 3.1, and 6.1; its decision remains escalated on
the dimension supplier. `lem-period-pairing-is-well-defined-and-computed-by-integration`
supplies independence of the period functional in step 2.1 and its intrinsic
use in step 6.1; its decision remains escalated on the period definition and
dimension supplier. `thm-riemann-bilinear-relations` supplies the normalized
basis and full-lattice coordinates in the statement and steps 3.1 and 6.1; its
decision remains escalated pending its own inputs. Finally,
`lem-holomorphic-differentials-form-a-g-dimensional-space` supplies
$\dim_{\mathbb C}\Omega(X)=g$ and the genus-zero case in the statement and steps
3.1; its decision remains escalated on Riemann–Roch and the line-bundle
supplier. Keep this consumer escalated until those exact supplier decisions
and uses are reconciled.

The original scaffold cited `def-quotient-vector-space-and-canonical-projection`
for $\Omega(X)^*/\Lambda$. A full lattice is an additive $\mathbb Z$-subgroup,
not a complex-linear subspace: for $g\ge1$ it is countable and nonzero, whereas
every nonzero complex-linear subspace contains uncountably many scalar
multiples. The proof therefore constructs the additive quotient group and its
quotient topology using the general group and topology suppliers, then builds
the complex atlas locally. Forster §21.6 describes the Jacobian as an abelian
group and explicitly says its complex manifold structure is not treated there;
the chart and covering proof above supplies that structure.
