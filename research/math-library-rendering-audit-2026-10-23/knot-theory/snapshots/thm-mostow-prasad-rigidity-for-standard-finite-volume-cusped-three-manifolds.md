---
id: thm-mostow-prasad-rigidity-for-standard-finite-volume-cusped-three-manifolds
kind: theorem
title: Mostow–Prasad rigidity for complete finite-volume hyperbolic three-manifolds
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
  - lem-finite-volume-hyperbolic-three-manifolds-have-finite-standard-cusp-decompositions
  - lem-peripheral-isomorphisms-of-standard-cusped-hyperbolic-manifolds-give-quasi-isometries
  - lem-hyperbolic-three-space-quasi-isometry-has-quasiconformal-boundary
  - lem-finite-covolume-kleinian-quasiconformal-conjugacy-is-mobius
  - lem-isometry-preserves-finite-volume-integral
proof_strategy: direct
axiom_use: Full AC is retained through the equivariant map, boundary, Haar quotient, measure and volume suppliers.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Gopal Prasad, Strong Rigidity of Q-Rank 1 Lattices
      url: https://www.maths.gla.ac.uk/~mpowell/Prasad-on-Mostow-rigidity.pdf
      locator: Theorems A–C and complete proof of C; the required specialized equivariant map and conformal-boundary argument are proved locally in the stated suppliers
dependency_level: 6
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume AC. Let $M$ and $N$ be nonempty connected oriented complete finite-volume Riemannian three-manifolds of constant curvature $-1$. There is no knot, compactness, or cusp-number restriction. Every isomorphism $\theta:\pi_1(M)\to\pi_1(N)$, up to conjugacy from basepoint changes, is induced by a unique isometry $I:M\to N$. The isometry is properly homotopic to every proper homotopy equivalence inducing that outer isomorphism. Its orientation agrees with that of such an equivalence, and the two Riemannian volumes are equal.

## Facts & Assumptions

**Given:** AC, the two nonempty connected oriented complete finite-volume curvature-$-1$ manifolds, and the group isomorphism.

[A1] Full choice is [[def-axiom-of-choice]].

[F5] The complete metric gives a Kleinian universal-cover presentation, and finite volume gives finitely many standard torus cusp ends with compact complement. These are conclusions of the full local proofs, not extra assumptions on $M,N$. [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]], [[lem-finite-volume-hyperbolic-three-manifolds-have-finite-standard-cusp-decompositions]]

[F1] The full peripheral recognition and equivariant affine-cusp construction supplies a smooth equivariant quasi-isometry $F$ with a smooth equivariant quasi-inverse; on quotients they are proper homotopy equivalences. [[lem-peripheral-isomorphisms-of-standard-cusped-hyperbolic-manifolds-give-quasi-isometries]]

[F2] A quasi-isometry of $\mathbb H^3$ has an equivariant quasiconformal or anticonformal-orientation boundary homeomorphism. Every Möbius boundary map extends uniquely to an isometry. In its proof, the image of the center of any ordered ideal triangle is at uniformly bounded distance from the center of the boundary-image triangle. [[lem-hyperbolic-three-space-quasi-isometry-has-quasiconformal-boundary]]

[F3] An orientation-preserving quasiconformal boundary conjugacy for a discrete subgroup of $\mathrm{PSL}_2(\mathbb C)$ with finite Haar quotient measure is Möbius. Its full proof is the Beltrami lift and elementary unipotent-contraction argument. [[lem-finite-covolume-kleinian-quasiconformal-conjugacy-is-mobius]]

[F4] Isometries preserve the integral of the Riemannian volume density, under the inherited countable-choice hypothesis. [[lem-isometry-preserves-finite-volume-integral]]

## Proof

1.1 First use [F5] to write $M=\Gamma\backslash\mathbb H^3$ and $N=\Gamma'\backslash\mathbb H^3$ with the standard cusp decompositions, identifying their deck groups with the fundamental groups and transporting $\theta$ accordingly. We verify the finite-Haar hypothesis of [F3], rather than infer it from a citation. Put $G=\mathrm{PSL}_2(\mathbb C)$ and $K=\mathrm{SO}(3)$, the stabilizer of a point in $\mathbb H^3$. The action identifies $G$ with the oriented orthonormal frame bundle: in the ball model an orientation-preserving isometry can send the center to any point by an upper half-space affine map after Cayley conjugation, and its stabilizer acts as every rotation; an isometry fixing a frame fixes each geodesic with its initial velocity and is the identity. Give $K$ normalized bi-invariant volume from the Ad-invariant inner product $-\operatorname{tr}(XY)$ on $\mathfrak{so}(3)$. Integrating this probability measure on each frame fiber against hyperbolic volume defines a smooth positive measure on $G$. It is independent of the local frame section, since changes of section are rotations, and is left-$G$-invariant, since $G$ acts isometrically on the base and by rotations on the fibers. It is also right invariant: in left-invariant tangent coordinates the Jacobian of right translation is $|\det_{\mathbb R}\operatorname{Ad}(g^{-1})|$. On $\mathfrak{sl}_2(\mathbb C)$ the complex determinant of Ad is one. For diagonal matrices its eigenvalues are $a^2,1,a^{-2}$; for upper and lower unipotent matrices Ad is triangular with diagonal entries one. These matrices generate $G$ by Gaussian elimination, so the determinant assertion holds for every $g$. The real determinant is the squared modulus of the complex one. Thus the displayed frame measure is Haar on both sides. Its quotient on $\Gamma\backslash G$ is the locally transported right invariant Radon measure required in [F3]. Local product integration and a disjoint countable chart decomposition give its total mass exactly $\operatorname{Vol}(M)$, since the fiber mass is one. It is finite and positive. [A1, F5, given, algebra]

1.2 We give the uniqueness argument, including orientation reversal. First, $\Gamma$ is not elementary. A discrete torsion-free subgroup preserving a point at infinity consists either of translations or, if it contains a loxodromic element, is cyclic after conjugating that element to a diagonal form. In the latter case, the commutator of that loxodromic element with any affine map fixing infinity is a translation. If nontrivial it gives, by conjugation with contracting powers, nontrivial elements tending to the identity. Thus all elements also fix the loxodromic element’s second endpoint, and the diagonal subgroup is cyclic by the compact-annulus argument. The translation case has rank at most two, by the elementary lattice proof in [F1]'s supplier. A subgroup preserving just a pair of ideal points is also cyclic: an element interchanging them has order two in $\mathrm{PSL}_2(\mathbb C)$ and is excluded, and the remaining diagonal subgroup is cyclic by the compact-annulus argument in that same proof. All these quotients have infinite volume. For rank-two translations integrate $y^{-3}$ over a Euclidean fundamental parallelogram and $y\downarrow0$; rank-one translations have in addition an infinite horizontal direction. A cyclic loxodromic quotient has cylindrical density $\sinh r\cosh r\,dr\,d\varphi\,dt$ about its axis, with $t$ taken modulo its positive translation length, so integrating over $r\to\infty$ diverges even if its generator rotates the cylinder. The trivial quotient is $\mathbb H^3$ and has infinite volume as well. These direct integrations contradict the given finite volume. [F1, given, algebra]

2.1 Apply [F1] to $\theta$, then [F2] to its equivariant quasi-isometry, to get an equivariant boundary homeomorphism $h$. If $h$ preserves orientation, [F3] and step 1.1 make it Möbius. If it reverses orientation, compose the target with a fixed reflection $R$ of $\mathbb H^3$. The boundary map $Rh$ is orientation preserving and quasiconformal; its target representation is $\gamma\mapsto R\theta(\gamma)R^{-1}$ in $G$. Apply [F3] to get that $Rh$ is Möbius. Thus in either case $h$ extends to a hyperbolic isometry $\widetilde I$, using [F2] and, in the second case, undoing $R$. Equivariance on the sphere and uniqueness of extension in [F2] give $\widetilde I\gamma=\theta(\gamma)\widetilde I$. It descends to an isometry $I:M\to N$ inducing the stated isomorphism. [A1, F1, F2, F3, step 1.1, construct]

2.2 If an orientation-preserving isometry $J$ centralizes $\Gamma$ and is nonidentity, its Möbius action is parabolic or has two distinct eigenlines. In the parabolic case its centralizer consists of translations fixing its ideal point. In the two-eigenline case the centralizer preserves those eigenlines individually, except when the eigenvalue ratio is $-1$, when it can also interchange them. Such an interchange has order two, so does not belong to the torsion-free $\Gamma$. Consequently centralizing $J$ would make $\Gamma$ elementary, contrary to step 1.2. Thus the orientation-preserving centralizer is trivial. If an orientation-reversing isometry $J$ centralizes $\Gamma$, its square must be the identity by this conclusion. A nontrivial involutive isometry has a fixed point, the midpoint of a segment joining $x$ to $Jx$. Its differential at a fixed point is an orthogonal involution with negative determinant. It has either a one-dimensional negative eigenspace or a three-dimensional one. Exponential coordinates show that its fixed set is respectively a hyperbolic plane or one point. Centralization forces $\Gamma$ to preserve that fixed set. If it is one point, $\Gamma$ is a discrete subgroup of a compact rotation stabilizer and is finite, hence trivial. If it is a plane, torsion-freeness gives a quotient locally modeled on its normal warped product with density $\cosh^2 r$ times plane area. A relatively compact open disk in that plane with disjoint nontrivial translates gives an embedded positive-area product disk times all $r>0$, or both sides identified by a possible side reversal; either way its volume is infinite. Both alternatives contradict finite volume. Thus the full centralizer is trivial. Two isometries inducing the same outer isomorphism have lifts whose induced isomorphisms agree after a target deck transformation. Their quotient then centralizes $\Gamma$, so they are equal. [F1, step 1.2, given, algebra]

3.1 The descended $F$ and $I$ are properly homotopic. Indeed, every point of $\mathbb H^3$ is the center of an ordered ideal triangle: take the center of $(0,1,\infty)$ and send it to the point by an isometry. By the uniform triangle-center bound in [F2], $F$ is at bounded distance from $\widetilde I$ on every point, because the latter sends each such center exactly to its boundary-image center. Unique geodesics give an equivariant homotopy with bounded tracks. On the quotients this is proper: $F$ is proper by [F1], and a track meeting a compact set has its initial point in a fixed compact metric neighborhood of that set. The quotient hyperbolic manifolds are complete and proper, as in [F1]'s proof. [F1, F2, step 2.1, construct]

3.2 Let $g:M\to N$ be any proper homotopy equivalence inducing the same outer isomorphism. Choose a lift $\widetilde g$ inducing $\theta$. On every sufficiently deep source cusp, properness puts its image outside any prescribed compact target core, hence in a single target cusp component. The induced injection of its peripheral group is $\theta(P_i)$, so the peripheral recognition in [F1] identifies that component as the same one used by $I$. The lift of that connected tail consequently lies in the corresponding target horoball; its boundary ideal point is the one fixed by $\theta(P_i)$. For any deeper target horoball, properness gives a still deeper source tail with image in it: avoidance of the enlarged compact target core is uniform on the compact source torus cross-sections. The isometry $I$ has the same property. Horoballs are geodesically convex, so the pointwise geodesic homotopy from $\widetilde g$ to $\widetilde I$ stays inside that arbitrarily deep target horoball on sufficiently deep source tails. On the remaining compact source core the homotopy has compact image by continuity. Thus the homotopy descends and is proper. This includes zero cusps, when both manifolds are compact and every homotopy is proper. [F1, step 2.1, construct]

4.1 A proper homotopy preserves the degree on locally finite top homology, or equivalently on compactly supported top cohomology: pulling back a compactly supported orientation class through a proper homotopy gives the same class by the prism homotopy with compact preimage. For a homotopy equivalence of connected oriented manifolds that degree is $+1$ or $-1$ and detects its orientation. Thus step 3.2 gives the asserted agreement of orientation. Finally apply [F4] to the isometry from step 2.1; its countable-choice premise follows from AC. The two Riemannian volume integrals agree. [A1, F4, step 2.1, step 3.2, algebra] ∎
