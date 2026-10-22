---
id: lem-unitary-field-witt-forms-respect-bordism-and-whole-boundary-gluing
kind: lemma
title: Unitary field Witt forms respect bordism and whole-boundary gluing
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
  - thm-cellular-chains-compute-homology-with-local-coefficients
  - thm-poincare-lefschetz-duality-with-local-coefficients
  - lem-involutive-twisted-chain-duals-realize-local-coefficient-duality
  - thm-excision-and-mayer-vietoris-with-local-coefficients
  - def-cup-and-cap-products-with-local-coefficient-pairings
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Casson and Gordon, Cobordism of Classical Knots
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cassgord.pdf
      locator: Printed190, the whole-boundary gluing equality; all field linear algebra and bordism comparisons are proved below
---

## Statement

Assume AC. Let $F$ be a commutative field of characteristic different from two with involution, and supply a rank-one unitary $F$ local system on each smooth compact oriented manifold in question, with one compatible system on each gluing or bordism. Give its finite-dimensional local homology the usual Hermitian cap-intersection form.

For a four-manifold $W$, the radical of its absolute middle form is exactly the image of $H_2(\partial W;F)$; denote its nonsingular quotient form by $Q_F(W)$. If $\partial W$ is $F$-acyclic, this is the absolute middle form itself. If two four-manifolds with the same entire marked boundary are glued with opposite boundary orientations, giving a closed $Z=W_0\cup_{\partial}(-W_1)$, then
$$[Q_F(Z)]=[Q_F(W_0)]-[Q_F(W_1)]\quad\text{in }W(F).$$
The nonsingular middle form of the boundary of any compact oriented smooth five-manifold with extending coefficients is metabolic, hence zero in $W(F)$. All assertions commute with extension of involutive fields, disjoint union, orientation reversal and coefficient-compatible marked identifications. In particular, the untwisted form used for a manifold with boundary is its nonsingular image form, not an unsupported assertion that its entire ordinary $H_2$ has nonsingular intersection form.

## Facts & Assumptions

**Given:** AC, finite smooth manifolds, their collars and the compatible unitary coefficient systems.

[F1] Finite compatible triangulations and local cellular chains compute their actual local homology and that of pairs. [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]], [[thm-cellular-chains-compute-homology-with-local-coefficients]]

[F2] Local duality, its unitary dual-system identification and the cap boundary formula give the perfect absolute-relative pairings and their compatibility with restriction, boundary and evaluation. [[thm-poincare-lefschetz-duality-with-local-coefficients]], [[lem-involutive-twisted-chain-duals-realize-local-coefficient-duality]], [[def-cup-and-cap-products-with-local-coefficient-pairings]]

[F3] Local pair sequences and Mayer–Vietoris are exact for the supplied collared gluings. [[thm-excision-and-mayer-vietoris-with-local-coefficients]] The full AC convention is retained. [[def-axiom-of-choice]]

## Proof

1.1 Every chain complex in [F1] is finite-dimensional over $F$. Dualizing a finite vector-space complex computes the dual of its homology: split each chain group into boundaries, a complement representing homology, and a complement mapped isomorphically onto the preceding boundaries. In these three summands the assertion follows directly by transposition of that differential. Thus [F2] gives a perfect pairing between $H_2(W,\partial W;F)$ and $H_2(W;F)$. The absolute intersection form is this perfect pairing composed with $j:H_2(W;F)\to H_2(W,\partial W;F)$. Its radical is $\ker j$, which the exact pair sequence identifies with the image of $H_2(\partial W;F)$. Symmetry with the involution follows from the degree-two cup interchange and the supplied unitary coefficient pairing. The quotient by that radical is nonsingular, since it is a finite-dimensional Hermitian form with zero radical. [F1, F2, F3, algebra]

2.1 We record the required field reduction explicitly. In a nonsingular Hermitian space $H$, let $S$ satisfy $S^\perp\subseteq S$, and put $L=S^\perp$. Then $L$ is isotropic, and $S=L^\perp$. Choose a basis $x_i$ of $L$ and dual vectors $y_i$ with $\langle x_i,y_j\rangle=\delta_{ij}$. Their matrix is $\left(\begin{smallmatrix}0&I\\I&D\end{smallmatrix}\right)$. Replacing the $y$ list by $y-\frac12xD$ in the conjugate-first matrix convention removes $D$; in the linear-first convention use its conjugate-transposed basis-change formula, giving the same zero/unit identities. This splits off a nonsingular hyperbolic space $L\oplus Y$. Its orthogonal complement maps isometrically to $S/L$: existence and uniqueness follow by subtracting its $x,y$ pairings. Consequently $[H]=[S/L]$. In particular an isotropic $L=L^\perp$ is a half-dimensional subspace and makes $H$ hyperbolic. All choices are finite. [step 1.1, algebra]

2.2 In the closed gluing put $E=H_2(W_0;F)\oplus H_2(-W_1;F)$ and let $S$ be its image in $H=H_2(Z;F)$. Same-piece intersections are preserved: inverse relative cap classes extend by zero from that piece to the whole manifold, and evaluation on an included cycle is its old evaluation. Classes from different pieces pair to zero, since their supported relative cochains have disjoint interiors. These assertions can also be checked by taking small chains in the two open collar enlargements; boundary transport on the common collar is identical. Hence the induced form on $E$ is exactly the sum of its two old forms. By [F3], its kernel onto $S$ is the image of $H_2(\partial W_0;F)$ under the difference of the two inclusions; it lies in the radical of $E$ by step 1.1. [F2, F3, step 1.1, construct, algebra]

3.1 The perfect form on the closed manifold $Z$ identifies $S^\perp$ with the kernel of $$H_2(Z;F)\longrightarrow H_2(Z,\partial W_0;F)=H_2(W_0,\partial W_0;F)\oplus H_2(-W_1,\partial W_1;F).$$ Indeed local excision and duality identify this map with the two intersection functionals on included classes, just as in step 2.2. The pair sequence makes its kernel the image of $H_2(\partial W_0;F)$ in $H_2(Z;F)$. This image is contained in $S$. Therefore $S$ is coisotropic, with radical $S^\perp$. Since $E\twoheadrightarrow S$ has its kernel inside the radical and preserves the form, it induces an isometry $E/\operatorname{rad}E\cong S/S^\perp$: an element pairing to zero against all of $E$ maps precisely to an element pairing to zero against all of $S$. Step 2.1 now gives the claimed Witt gluing identity, including the ordinary case where the two piece forms have radicals. [F2, F3, step 1.1, step 2.1, step 2.2, algebra]

3.2 Let $V$ be five-dimensional and $N=\partial V$. On the perfect middle form of the closed $N$ put $L=\ker(H_2(N;F)\to H_2(V;F))$. A functional on $H_2(N;F)$ vanishes on $L$ exactly when it factors through the image in $H_2(V;F)$; extend that functional to all of the latter finite-dimensional vector space. Thus the annihilator of $L$ is the image of restriction $H^2(V;\mathcal F^\vee)\to H^2(N;\mathcal F^\vee)$. Under the perfect form of $N$, cap boundary naturality [F2] identifies this image with the image of $H_3(V,N;F)\to H_2(N;F)$: the identity is $\partial(u\cap[V,N])=u|_N\cap[N]$ up to the fixed degree sign, which changes neither image. The pair sequence identifies this last image with $L$. Hence $L^\perp=L$. Step 2.1 proves the boundary form is metabolic. This proves bordism invariance on actual extending coefficient systems, rather than an appeal to signature equality alone. [F1, F2, F3, step 2.1, construct, algebra]

4.1 A field extension is exact: choose a basis of each finite-dimensional space and compute kernel and image ranks by nonzero minors. It therefore preserves pair sequences, radicals, quotient forms and the displayed hyperbolic reductions. Orientation reversal negates all evaluations on the fundamental class; disjoint union is the direct sum of the finite chain models. A marked coefficient-compatible diffeomorphism transports those chains, their local orientations and evaluations, hence all forms. Empty manifolds and zero-dimensional homology yield the zero form throughout. This proves every stated compatibility without a signature-to-Witt inference or any assumption of nonsingularity on a singular ordinary absolute group. [F1, F2, step 1.1, step 3.1, step 3.2, algebra] ∎