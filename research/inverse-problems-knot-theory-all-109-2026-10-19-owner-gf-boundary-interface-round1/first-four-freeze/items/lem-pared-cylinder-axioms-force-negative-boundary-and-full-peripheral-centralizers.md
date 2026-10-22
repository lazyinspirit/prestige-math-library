---
id: lem-pared-cylinder-axioms-force-negative-boundary-and-full-peripheral-centralizers
kind: lemma
title: Pared cylinder axioms force negative boundary and full peripheral centralizers
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-pared-hyperbolic-structures-and-volume
  - thm-classification-of-compact-connected-surfaces
  - lem-jordan-schoenflies-extension-for-plane-curves
  - thm-invariance-of-domain
  - thm-collar-neighborhood-theorem
  - lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar
  - lem-local-thin-components-of-torsion-free-kleinian-quotients
justified_by: []
proof_strategy: direct
axiom_use: AC is inherited from surface classification, the collar and local hyperbolic suppliers; all additional choices and constructions are finite.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Iteration on Teichmuller space
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/iter/iter.pdf
      locator: Section3.1, printed434–435, PDF10–11; the cylinder, all-torus-boundary and marking hypotheses are separated here and the consequences are proved below.
---

## Statement

Assume AC. Let $M$ be a connected compact oriented irreducible three-manifold, either smooth or a GIVEN finite PL manifold with its PL boundary charts. Let $P\subset\partial M$ be a finite disjoint union of compact $\pi_1$-injective annuli and entire torus boundary components in the same category. Suppose every torus component of $\partial M$ lies in $P$, and every $\pi_1$-injective map of an annulus into $M$ whose two boundary loops lie essentially in $P$ is homotopic through maps of pairs into $P$: throughout the homotopy its boundary stays in $P$, but need not stay pointwise fixed. Put $S=\partial M\setminus\operatorname{int}P$. Irreducibility and embedded balls are interpreted in the given category; no triangulation or smoothing of an arbitrary topological manifold is asserted.

Either $M$ is a ball and $P$ is empty, or every component of $S$ has strictly negative Euler characteristic; $S$ may be empty. No incompressibility assumption on $S$ is needed for this conclusion. For each component $Q$ of $P$ and every nontrivial $a\in\pi_1(Q)$, the centralizer of its image in $\pi_1(M)$ is precisely the image of $\pi_1(Q)$, with the same base path used on both sides.

If $\rho:\pi_1(M)\to\Gamma\le\mathrm{PSL}_2(\mathbb C)$ is an isomorphism onto a discrete torsion-free group and sends $\pi_1(Q)$ to parabolic transformations, then this image is the FULL stabilizer in $\Gamma$ of its parabolic fixed point. An annular $Q$ therefore gives the full rank-one translation group and its core maps to a primitive generator, while a torus $Q$ gives the full rank-two lattice. These assertions supply neither a quasidisk boundary nor geometric finiteness of a boundary-component subgroup, and impose no new hypothesis on an earlier hyperbolization claim.

## Facts & Assumptions

**Given:** The smooth or given finite PL pair with its collars, its irreducibility, injective peripheral subgroups, all-torus-boundary and cylinder properties, and the optional representation in the Statement.

[F1] The homotopy-through-maps-of-pairs and peripheral conventions are in [[def-pared-hyperbolic-structures-and-volume]]. That actual Definition does not say pointwise relative boundary and does not include the all-torus-boundary clause: the latter is an explicit premise here. McMullen's Section3.1 includes that clause and a stronger pointwise relative-boundary cylinder condition, so satisfies the cylinder premise used here. Boundary tracks may move within $P$, but cannot leave $P$ or move between its different components.

[F2] Under AC, closed orientable surfaces have genus $g\ge0$ and Euler characteristic $2-2g$ by [[thm-classification-of-compact-connected-surfaces]]. Capping $b$ collared boundary circles adds $b$ to the finite Euler count. Jordan curves on the sphere have disk complementary closures by the planar [[lem-jordan-schoenflies-extension-for-plane-curves]], transported through a sphere chart. Smooth collars exist by [[thm-collar-neighborhood-theorem]]. In the given finite PL branch, boundary half-space charts and surface-rim charts are the local collars to which [[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]] applies; its finite local-push proof supplies actual PL collars. Full-dimensional embedded interiors are open by [[thm-invariance-of-domain]], including for the underlying maps of the given PL objects.

[F3] A discrete torsion-free Möbius group has no nonidentity elliptic elements. A subgroup fixing one parabolic point consists of a translation lattice of rank one or two: the affine commutation and discreteness calculations are proved in [[lem-local-thin-components-of-torsion-free-kleinian-quotients]], Proof3.1–4.1, without any volume hypothesis.

[A1] Full choice is [[def-axiom-of-choice]].

## Proof

1.1 Cap each of the finitely many boundary circles of a component $S_0$ of $S$ by a disk using its given surface collar. The capped oriented surface has genus $g$, so $\chi(S_0)=2-2g-b$, where $b$ is its boundary count, by [F2]. If this is nonnegative, the possible pairs are $(g,b)=(0,0),(0,1),(0,2),(1,0)$. In the first and last cases $S_0$ is a sphere or torus. In the middle cases it is a disk or annulus: the capped surface is a sphere; the disk-region conclusion of [F2] identifies the complement of one cap as a disk, and the complement of two disjoint caps as an annulus. For the latter, join the caps by a simple arc in their complement, slit along it and use the disk-region parametrization; identifying the two slit edges gives a rectangle with its opposite edges identified. These are statements about the underlying collared surfaces and apply unchanged to the supplied PL branch. Thus the four possibilities are actual surface types, not just Euler counts. [A1, F2, given, construct, algebra]

1.2 Fix a base point in $Q$, a nontrivial peripheral loop $\alpha$ representing $a$, and any based loop $h$ in $M$ commuting with $a$. Fill the nullhomotopic commutator square $\alpha h\alpha^{-1}h^{-1}$. Its two sides labeled $h$ have the identical parametrized map, so identifying these sides gives a map of an annulus with both boundary loops equal to $\alpha$ and with the transverse base-point path equal to $h$. Its fundamental-group map is injective because $a$ has infinite order by peripheral injectivity. Apply the cylinder premise. Both boundary loops stay in $Q$ during the homotopy, so its final connected image in $P$ is in $Q$. Let $p_0,p_1$ be the two endpoint tracks of the transverse path, both paths in $Q$ starting at the original base point, and let $k$ be the final transverse path in $Q$. The homotopy of the transverse interval gives $h$ homotopic relative its original endpoints to $p_0 k p_1^{-1}$, a loop entirely in $Q$. Thus $h$ lies in the peripheral image even though the annulus boundary need not be pointwise fixed. The reverse inclusion holds because $\pi_1(Q)$ is abelian. This proves the exact centralizer assertion, including possible roots or finite-index supergroups. [F1, given, construct, algebra]

2.1 A disk component is impossible. Its boundary is a rim of an annular component $Q$ of $P$ and represents a generator of $\pi_1(Q)$ up to sign. The disk in $\partial M$ makes this element trivial in $\pi_1(M)$, contrary to the assumed injection. A closed torus component of $S$ is also impossible: it would be an entire torus component of $\partial M$ outside $P$, contrary to the all-torus-boundary hypothesis. [F1, step 1.1, given, contradiction]

2.2 Suppose $S_0$ is an annulus. Each rim borders an annular component of $P$ and is essential there. The inclusion of $S_0$ in $M$ is $\pi_1$-injective, because its generator is already nontrivial of infinite order in such an injective peripheral annulus. If its two rims border different components of $P$, the relative-cylinder property would homotope a connected annulus into $P$ with boundary in those different components. No such connected image exists. If they border the same annulus $Q$, the two annuli $S_0,Q$ exhaust a closed torus component of $\partial M$: their four collars match along both rims and their union is open and closed in that boundary component. This torus must lie entirely in $P$, again a contradiction. Thus annular components are excluded by the actual hypotheses, rather than by an extra stability convention. [F1, F2, step 1.1, given, contradiction]

2.3 In the representation case, normalize a nontrivial peripheral element to $T(z)=z+\omega$, $\omega\ne0$. Any commuting Möbius transformation fixes its unique fixed point $\infty$, hence is affine, and direct multiplication with $T$ makes its linear coefficient one. Conversely every translation commutes with $T$. Every element of $\Gamma$ fixing $\infty$ is a translation: a coefficient of nonunit modulus would conjugate $T$ to nontrivial translations tending to the identity, while a unit coefficient different from one would be elliptic. Both contradict discreteness and torsion-freeness, as in [F3]. Consequently the full parabolic stabilizer equals the centralizer of $T$, and step1.2 identifies it with $\rho\pi_1(Q)$. [F3, step 1.2, given, construct, algebra]

3.1 Finally suppose a component is a sphere. It is an entire component of $\partial M$. Push it a short distance into $M$ using the boundary collar, smoothly or in the supplied PL product as appropriate. The pushed sphere bounds a parametrized ball by irreducibility. Its interior cannot contain a boundary point of $M$: an interior chart of the ball followed by a boundary half-space chart of $M$ would give an injective continuous map from an open three-ball to $\mathbb R^3$, whose image is open by [F2] but lies in a closed half-space and contains a point of its boundary plane. This is impossible. The ball therefore lies on the side away from the original boundary. Removing the short open boundary collar from a connected manifold preserves connectedness, as the collar coordinate pushes any path in that collar to its inner level. The ball interior is both open and closed on the corresponding side of the pushed sphere, so it is that whole side. Hence $M$ is the union of this ball and its boundary sphere collar, which is a ball by radial extension of that supplied collar. The construction uses no change of category. Now $\pi_1(M)=0$; injectivity excludes every annulus or torus component of $P$, so $P=\varnothing$. Otherwise steps1.1,2.1,2.2 exhaust the nonnegative Euler cases and give $\chi(S_0)<0$ for every component. [F1, F2, step 1.1, step 2.1, step 2.2, given, construct]

4.1 A discrete additive subgroup of $\mathbb C$ is a lattice of rank one or two by [F3]. Since $\rho$ and each peripheral inclusion are injective, its rank here is one for an annulus and two for a torus. In the rank-one case the image of the annulus generator generates the WHOLE stabilizer, so it cannot be a proper power of another stabilizer element. The rank-two image likewise is not a proper finite-index sublattice. Base-path changes conjugate all the displayed groups together. The proof used the actual relative-cylinder and all-torus-boundary clauses, and no geometric finiteness or quasifuchsian assertion. All additional constructions were finite. [A1, F1, F3, step 3.1, step 1.2, step 2.3, algebra] ∎
