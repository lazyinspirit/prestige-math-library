---
id: lem-su-two-asd-determinant-lines-are-gauge-equivariantly-orientable
kind: lemma
title: Gauge-equivariant orientability of the real SU(2) ASD determinant line
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-high-sobolev-coulomb-slices-for-irreducible-su-two-connections
  - thm-asd-deformation-complex-index-formula
  - lem-chiral-dirac-is-fredholm-with-kernel-and-cokernel
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
  - lem-fredholm-splitting-and-parametrix
  - thm-fredholm-index-is-stable-under-compact-perturbations
  - thm-implicit-function-theorem-for-banach-spaces
  - thm-complex-bott-periodicity
  - thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-cellular-approximation-for-maps-of-cw-pairs
  - thm-based-sphere-maps-are-classified-by-geometric-degree
  - lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice
  - lem-a-handle-decomposition-gives-a-relative-cw-complex
  - thm-obstruction-theory-for-lifting-through-a-fibration
  - thm-poincare-duality-for-oriented-topological-manifolds
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Donaldson, An Application of Gauge Theory to the Topology of 4-Manifolds
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf
      locator: printed pp.293–295, complete orientation argument and Lemma 10
---

## Statement

Assume full AC. Let $X$ be a closed simply connected oriented Riemannian smooth four-manifold and $E$ a Hermitian rank-two bundle with fixed unit determinant. Over its affine $H^3$ space of determinant-one connections, consider the real Fredholm family
$$D_A=d_A^*\oplus d_A^-:H^3(\Lambda^1\otimes\mathfrak{su}(E))\longrightarrow H^2((\Lambda^0\oplus\Lambda^-)\otimes\mathfrak{su}(E)).$$
Its determinant line admits an orientation preserved by every $H^4$ determinant-one gauge transformation. It consequently descends to an orientable line bundle on the unbased irreducible quotient. The same assertion holds after any continuous gauge-equivariant family of compact perturbations of these operators. At the regular zero set of a smooth curvature perturbation with compact slice derivative, this orientation induces an orientation of the actual finite-dimensional moduli manifold. The orientation is not asserted to be canonical without additional choices.

## Statement references

[Donaldson, §II.4 and Lemma 10](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf)

## Facts & Assumptions

[F1] The $H^3/H^4$ gauge group and irreducible slices are supplied by [[lem-high-sobolev-coulomb-slices-for-irreducible-su-two-connections]]. The ASD operator is a real Clifford-type operator, and the fixed smooth realization has a Green parametrix; the $H^3\to H^2$ realization follows from that parametrix at order two. [[thm-asd-deformation-complex-index-formula]] [[lem-chiral-dirac-is-fredholm-with-kernel-and-cokernel]] [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]

[F2] Fredholm operators have bounded complements and finite-rank augmentations; compact perturbations preserve Fredholmness, and the implicit theorem identifies finite-dimensional kernels of a continuous surjective family as a vector bundle. [[lem-fredholm-splitting-and-parametrix]] [[thm-fredholm-index-is-stable-under-compact-perturbations]] [[thm-implicit-function-theorem-for-banach-spaces]]

[F3] Complex Bott periodicity and stable clutching classify complex bundles on spheres, with stability for a bundle on $S^q$ of rank $n$ when $q\le2n$. [[thm-complex-bott-periodicity]] [[thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range]]

[F4] The fibration homotopy sequence, cellular approximation and degree classification give the sphere homotopy calculations used below. [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]] [[thm-cellular-approximation-for-maps-of-cw-pairs]] [[thm-based-sphere-maps-are-classified-by-geometric-degree]]

[F5] The compact Morse/handle construction gives a finite CW model of $X$ with cells of dimension at most four: the cells are exactly the handle cores, whose indices lie between zero and four. [[lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice]] [[lem-a-handle-decomposition-gives-a-relative-cw-complex]]

[F6] Relative obstruction theory for sections of a numerable bundle identifies the obstruction in the cohomology of the base with the transported fiber homotopy group. [[thm-obstruction-theory-for-lifting-through-a-fibration]]

[F7] Integral Poincaré duality and the first Hurewicz map give $H^3(X;\mathbb Z)=H_1(X;\mathbb Z)=0$ for this $X$. [[thm-poincare-duality-for-oriented-topological-manifolds]] [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]

[A1] Full AC is inherited through the analytic, Bott, finite-model and obstruction suppliers. [[def-axiom-of-choice]]

## Proof

**Given:** Full AC, the simply connected closed oriented four-manifold, the fixed determinant, and the specified real operator family.

1.1 **Determinant lines without a constant-kernel assumption.** For a Fredholm map $T:H\to K$, choose a finite-dimensional subspace $V\subset K$ such that $T(H)+V=K$. Then $\widehat T:H\oplus V\to K$, $(h,v)\mapsto Th+v$, is onto, remains onto nearby and has a finite-dimensional kernel bundle there by a fixed complemented inverse and [F2]. Define its determinant line as $\Lambda^{\max}\ker\widehat T\otimes(\Lambda^{\max}V)^*$. The exact sequence $0\to\ker T\to\ker\widehat T\to V\to\operatorname{coker}T\to0$ identifies it with $\Lambda^{\max}\ker T\otimes(\Lambda^{\max}\operatorname{coker}T)^*$ whenever those dimensions are fixed. For two augmentations, enlarge to their sum and use the exact sequence of their kernels and added vector spaces; taking top exterior powers gives the transition isomorphism. A third enlargement gives the same composition, because ordered bases concatenate associatively and the same permutation signs occur on both sides. Thus these lines glue even when kernel dimensions jump. An invertible change in domain and target acts naturally on these exact sequences, and the determinant line of a direct sum is the tensor product, with one fixed ordering of summands. The orientation double cover of this line bundle has unique path lifting by local trivializations; its orientation monodromy is invariant under endpoint-fixed homotopy, by subdivision of a homotopy square into trivializing rectangles. On a contractible base it is therefore trivial. These constructions also prove homotopy invariance of orientability and of orientation monodromy for continuous Fredholm families. [F2, A1, construct, algebra]

1.2 **The low homotopy groups of $SU(3)$.** The last-column map $SU(3)\to S^5$ has fiber $SU(2)=S^3$ and local sections: near a given unit column, project a fixed complementary basis into its orthogonal complement, apply Gram–Schmidt, and multiply the first column by the inverse determinant. This explicitly trivializes the map. Cellular approximation in [F4] gives $\pi_j(S^d)=0$ for $j<d$, and degree gives $\pi_3(S^3)=\mathbb Z$. Its exact sequence therefore gives $\pi_1SU(3)=\pi_2SU(3)=0$ and $\pi_3SU(3)=\mathbb Z$. To compute $\pi_4$, every complex bundle over $S^1$ is trivial: cut the circle at a point, trivialize on the interval, and join its endpoint gluing matrix to the identity by polar decomposition and a spectral-angle path in $U(n)$. Thus $\widetilde K^0(S^1)=0$, and Bott twice gives $\widetilde K^0(S^5)=0$. A bundle with zero reduced class becomes trivial after adding a trivial bundle: from $E\oplus F\cong\mathbb C^{\operatorname{rank}E}\oplus F$, embed $F$ in a finite trivial bundle by the finite square-root-partition chart embedding and add its orthogonal complement. Stable clutching [F3], in its stable range $5\le2\cdot3$, now gives $\pi_4U(3)=0$. The map $U(3)\to SU(3)\times S^1$, $u\mapsto(u\operatorname{diag}(\det u^{-1},1,1),\det u)$, is a homeomorphism with the evident product inverse. Higher homotopy groups of $S^1$ vanish by lifting to its contractible universal cover. Hence $\pi_4SU(3)=0$. [F3, F4, construct, algebra]

2.1 **Connectedness of the based $SU(3)$ gauge group.** Let $Q$ be any fixed-determinant rank-three Hermitian bundle over $X$. A gauge transformation is a section of its conjugation bundle with fiber $SU(3)$. Transfer this bundle to the finite four-dimensional CW model $C$ in [F5]. Such transfer preserves homotopy classes of sections: along a homotopy of base maps, embed the pulled-back vector bundle over the compact cylinder in a finite trivial bundle, take its continuous orthogonal projections $P(x,t)$, and subdivide time so adjacent projections differ by less than one. Their restrictions give invertible maps between image planes. Polar normalization makes these maps unitary, and correcting the determinant in a locally chosen small logarithm makes them determinant-preserving; concatenate the finitely many time strips. They give continuous bundle identifications along that cylinder, and conjugating a section by those identifications transports its homotopies. Apply this construction to the two homotopies of the CW-model equivalence. For a section $u$ on $C$, seek a homotopy to the identity as a section over $C\times I$ prescribed on $C\times\{0,1\}$. By step 1.2 all obstructions through dimension three vanish. The degree-four obstruction is in $H^4(C\times I,C\times\partial I;\mathbb Z)=H^3(C;\mathbb Z)=0$ by [F6]–[F7]. The coefficient system is constant, since conjugation by an element of the connected group $SU(3)$ is homotopic to the identity. The remaining degree-five obstruction uses $\pi_4SU(3)=0$. Thus the section homotopy exists and transfers back to $X$. To keep it based, correct its value path $w_t$ at $x_0$: subdivide time so each $w_{t_j}^{-1}w_t$ is in a logarithm chart, extend that logarithm by a fixed smooth bump in a bundle chart around $x_0$, exponentiate, and concatenate the resulting gauge paths. Their value at $x_0$ is $w_t$, so dividing by them makes the homotopy based. [F5, F6, F7, step 1.2, construct, algebra]

3.1 **The same connectedness in $H^4$.** A given $H^4$ gauge can first be approximated in $H^4$ by smooth gauges. Indeed smooth-approximate it as an endomorphism in finitely many charts and patch linearly; uniform closeness makes these matrices invertible. Polar normalize and multiply by the scalar cube root of their determinant inverse chosen near one. These operations converge in $H^4$, by the matrix Banach-algebra calculus in [F1], whose Leibniz and matrix power-series estimates apply to every fixed finite rank, and give determinant-one unitary sections. Correct their value at $x_0$ by the bump construction in step 1.2. A sufficiently close approximation differs from the original by an $H^4$ logarithm, so is joined to it by exponentiation of that logarithm. For a continuous homotopy between smooth endpoints supplied by step 1.2, first make it constant on short end collars. Smooth-approximate its endomorphism coefficients on the compact $X\times I$, retaining the smooth endpoints by a cutoff, then perform the same polar and near-one determinant normalization. Uniform approximation makes this a genuine smooth homotopy of unitary determinant-one sections, constant on smaller end collars. The based correction again uses a smooth value path. It is a continuous $H^4$ path. Thus the based $H^4$ gauge group of $Q$ is path connected, including for nontrivial $Q$. [F1, step 2.1, construct, algebra]

4.1 **Orientation for the rank-three family.** Over the affine $H^3$ space of connections on $Q$, the operator family with coefficients in $\mathfrak{su}(Q)$ is Fredholm: relative to a fixed smooth reference its varying zeroth-order terms factor through the compact inclusion $H^3\to H^2$, using [F1], and [F2] applies. The reference Clifford-square Green construction applies unchanged to any finite-rank real coefficient bundle. Step 1.1 orients its determinant line over this contractible affine space. For any based gauge $u$, the comparison of the orientation at $A$ with the transported orientation at $u^*A$ is a sign. It is continuous in $(A,u)$ and equals $+1$ at $u=1$. The affine space and the based gauge group of step 2.1 are path connected, so the sign is always $+1$. [F1, F2, step 1.1, step 3.1, construct, algebra]

5.1 **Stabilization and the full $SU(2)$ gauge group.** Set $Q=E\oplus\mathbb C$ and take the block connection $A\oplus d$. The real parallel decomposition is $\mathfrak{su}(Q)=\mathfrak{su}(E)\oplus\mathbb R\oplus E_{\mathbb R}$: a trace-free skew-Hermitian block matrix has trace-free $2\times2$ block, one imaginary scalar diagonal block, and an off-diagonal column in $E$. The covariant derivative and Hodge projections preserve this decomposition. The middle operator is a fixed real operator on ordinary forms; choose an orientation for its one fixed determinant line. The last operator is complex linear, so its kernel and cokernel augmentations can be taken complex and its real determinant line has the canonical complex orientation. These orientations are respected by stabilized $SU(2)$ gauge transformations. By direct-sum naturality in step 1.1, the orientation sign of such a based gauge on the first summand is exactly its sign on the rank-three family, which is $+1$ by step 3.1. For an arbitrary $SU(2)$ gauge, choose a path of gauges supported in a chart around $x_0$, starting at the identity and ending with its prescribed value at $x_0$; write that value as one exponential in $SU(2)$ and multiply its exponent by a bump. Factoring off this endpoint leaves a based gauge. The supported path has sign $+1$ by continuity, and so does the based factor. Thus every gauge preserves the chosen orientation of the rank-two determinant family. [F1, step 1.1, step 4.1, construct, algebra]

6.1 **Compact perturbations and the moduli orientation.** For a continuous compact perturbation $K_A$ the family $D_A+tK_A$, $0\le t\le1$, is Fredholm by [F2] and equivariant. Applying step 1.1 on a gauge loop times this interval shows that its orientation monodromy is independent of $t$; at $t=0$ it vanishes by step 4.1. It is therefore orientable on the irreducible quotient at $t=1$. To relate this to the actual quotient-section linearization, use the splitting into the Coulomb slice and gauge directions in [F1]. Add a bounded zero-order vertical gauge block so that the full gauge-fixed operator has upper block $d_A^*d_A$ on gauge directions and the slice derivative on the other summand, with zero off-diagonal lower block. This changes the original operator by a compact map: $d_A^-d_Av=[F_A^-,v]$ and the perturbation's covariant vertical derivative are zeroth-order in $v\in H^4$, hence factor compactly into $H^2$; alternatively extend the given compact slice derivative by the bounded Coulomb projection. The positive invertible scalar block has its canonical determinant orientation. At a regular zero the slice derivative is onto, and its kernel is the tangent space by the implicit theorem [F2]. Step 1.1 identifies its determinant with the top exterior power of that tangent space, giving the stated orientation of the regular moduli manifold. [F1, F2, step 1.1, step 5.1, construct, algebra] ∎

## Source notes

The complete orientation argument and Lemma 10 on Donaldson's printed pp.293–295 were read. The stabilization is reproduced with an actual low-homotopy calculation and a relative obstruction construction for a general nontrivial bundle, followed by Sobolev approximation. The determinant-line construction uses finite augmentations and their natural exact sequences; a numerical complex index alone is not substituted for a real orientation argument. Full AC is explicit, and no Spin structure on $X$ is assumed.
