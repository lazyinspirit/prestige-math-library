---
id: thm-asd-deformation-complex-index-formula
kind: theorem
title: Index formula for the sign-fixed self-dual deformation operator
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-asd-moduli-fredholm-index-and-lattice-setup
  - def-axiom-of-choice
  - def-graded-hermitian-clifford-module-and-geometric-dirac
  - def-even-dimensional-spinor-bundle-chirality-and-spin-connection
  - lem-spinor-and-clifford-associated-bundles-are-well-defined
  - thm-geometric-clifford-module-dirac-index-formula
  - thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology
  - thm-de-rham-theorem
  - def-chern-pontryagin-and-euler-characteristic-forms
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
  - lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Simon K. Donaldson, An Application of Gauge Theory to the Topology of 4-Manifolds
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf
      locator: §§I.2 and II.1, printed pp. 282–287; the index-five case for $c_2(P)[X]=-1$ and $b_1=b_-=0$
---

## Statement

Assume full AC. Let $X$ be a closed connected oriented smooth Riemannian four-manifold, let $b_1(X)=\dim H^1(X;\mathbb R)$, let $b_-(X)$ be the dimension of the negative subspace of its real intersection form, and let $P\to X$ be a smooth principal $SU(2)$-bundle. Put $k=-\langle c_2(P),[X]\rangle$. For the real Fredholm operator $D_A=d_A^*\oplus d_A^-$ from first Sobolev one-forms with values in $\operatorname{ad}P$ to zeroth Sobolev zero-forms and anti-self-dual two-forms, its Fredholm index is $8k-3(1-b_1(X)+b_-(X))$. In particular, if $\pi_1(X)=0$, the intersection form is positive definite, and $c_2(P)[X]=-1$, then $\operatorname{ind}_{\mathbb R}(D_A)=5$.

## Statement references

[Donaldson, *An Application of Gauge Theory to the Topology of 4-Manifolds*, §§I.2, II.1](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf)

## Facts & Assumptions

**Given:** Full AC, the closed connected oriented Riemannian four-manifold and smooth $SU(2)$ bundle. The connection $A$ is smooth. No self-duality of $A$ or Spin structure on $X$ is required for the index calculation.

[A1] Full AC is used through the existing analytic index, Hodge and Chern–Weil theorems, not through a new choice of spin structure. ([[def-axiom-of-choice]])

[F1] A graded Hermitian Clifford module with compatible connection has a chiral Fredholm operator on the exact $H^1\to L^2$ domain, with complex index $\int_X[\widehat A(TX)\operatorname{ch}(V/S)]_4$. Its local multiplicity space has dimension equal to the module rank divided by four in dimension four. The reference chirality is $i^2c(e^1)c(e^2)c(e^3)c(e^4)$. Local multiplicity curvatures and their characters patch even without a global Spin lift. ([[def-graded-hermitian-clifford-module-and-geometric-dirac]], [[def-even-dimensional-spinor-bundle-chirality-and-spin-connection]], [[lem-spinor-and-clifford-associated-bundles-are-well-defined]], [[thm-geometric-clifford-module-dirac-index-formula]])

[F2] On a compact boundaryless Riemannian manifold, every real de Rham class has a unique smooth harmonic representative. De Rham integration identifies wedge products with singular cup products and their oriented evaluation. Thus the real intersection form is represented on harmonic two-forms by $\int_X\alpha\wedge\beta$. ([[thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology]], [[thm-de-rham-theorem]])

[F3] With the library's connection convention, $c(\nabla)=\det(I-F/(2\pi i))$ and $\operatorname{ch}(\nabla)=\operatorname{tr}\exp(-F/(2\pi i))$. The second Chern form represents the topological second Chern class over the reals. Integration of an exact form on closed $X$ is zero. ([[def-chern-pontryagin-and-euler-characteristic-forms]], [[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]], [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]])

## Proof

**Given:** Full AC and the bundle, connection and orientation data in the Statement.

1.1 Construct the required Clifford module explicitly. Put $V_0^+=\Lambda^1T^*X\otimes\mathbb C$ and $V_0^-=(\Lambda^0\oplus\Lambda^-)T^*X\otimes\mathbb C$, with their metric Hermitian forms. For a real covector $\xi$ define $B_\xi a=(-\iota_{\xi^\sharp}a,\sqrt2\,\pi_-(\xi\wedge a))$ and $c(\xi)(a,b)=(-B_\xi^*b,B_\xi a)$ on $V_0^+\oplus V_0^-$. In an oriented orthonormal frame with $\xi=te^1$, the scalar part of $B_\xi a$ has squared norm $t^2|a_1|^2$, while the three forms $\sqrt2\pi_-(e^1\wedge e^j)$, $j=2,3,4$, are orthonormal. Hence $B_\xi^*B_\xi=|\xi|^2I$. Both spaces have dimension four, so for $\xi\ne0$ also $B_\xi B_\xi^*=|\xi|^2I$; the zero case is immediate. Polarization gives the Clifford relation $c(\xi)c(\eta)+c(\eta)c(\xi)=-2\langle\xi,\eta\rangle I$, and the displayed block matrix is skew-Hermitian and odd. Wedge, contraction and $\pi_-$ are parallel for the Levi–Civita connection, so the induced connection is Clifford-compatible. Its chiral Dirac operator is exactly $\widetilde D_0=d^*\oplus\sqrt2d^-$. This is an actual geometric Clifford module, not a postulated Spin factorization. [F1, given, construct, algebra]

1.2 Let $E=P\times_{SU(2)}\mathbb C^2$ and $G=\operatorname{ad}P\otimes\mathbb C$, with their induced unitary connections. The bundle $G$ is the trace-zero endomorphism bundle of $E$. Set $Z=-F_E/(2\pi i)$, a traceless two-by-two matrix of commuting two-forms. The determinant convention gives $c_2(E)=-\tfrac12\operatorname{tr}(Z^2)$ as a form. For a traceless diagonal matrix with entries $u,-u$, its commutator action on trace-zero endomorphisms has eigenvalues $0,2u,-2u$. Therefore $\operatorname{tr}(\operatorname{ad}Z)=0$ and $\operatorname{tr}((\operatorname{ad}Z)^2)=4\operatorname{tr}(Z^2)$. These are polynomial identities for all traceless complex matrices: matrices with distinct eigenvalues are dense, and continuity gives the rest. Polarizing the degree-two identity gives the same identity for matrices of two-forms. It follows, through degree four, that $\operatorname{ch}(G)=3-4c_2(E)$, with no degree-two term. This fixes the factor and sign directly from the stated Chern normalization. [F3, given, construct, algebra]

2.1 Fix its chirality sign and multiplicity. Write $c_j=c(e^j)$. Applying $c_4c_3c_2c_1$ to $e^1\in V_0^+$ gives successively $(-1,0)$, $-e^2$, $(0,(e^{23}-e^{14})/\sqrt2)$, and $-e^1$. Reversal of four distinct generators has positive sign, so $c_1c_2c_3c_4e^1=-e^1$. The construction is $SO(4)$-equivariant, and oriented rotations carry $e^1$ to every unit one-form; therefore $-c_1c_2c_3c_4=I$ on $V_0^+$. This volume operator anticommutes with every $c_j$; since $c_1$ identifies the two summands, it is $-I$ on $V_0^-$. Thus the given grading IS the reference chirality $i^2c_1c_2c_3c_4$. In the local factorization in [F1], $\Gamma_{V_0}=\Gamma_S\otimes\Gamma_W$ consequently forces $\Gamma_W=I$. The local multiplicity has rank $8/4=2$ and is entirely even. If $\Theta=\operatorname{ch}(V_0/S)$, then $\Theta_0=2$. This conclusion patches without choosing a global spinor bundle. [F1, step 1.1, construct, algebra]

2.2 Calibrate the untwisted index by harmonic forms, rather than import an Euler/signature index formula. On a closed manifold, $\int_Xda\wedge da=\int_Xd(a\wedge da)=0$. Since $\alpha\wedge\alpha=(|\alpha^+|^2-|\alpha^-|^2)d\mathrm{vol}$ for real two-forms, polarization and complexification give $2\|d^-a\|_2^2=\|da\|_2^2$. Hence the smooth kernel of $\widetilde D_0$ is exactly the harmonic one-forms. Its formal adjoint is $(f,\omega)\mapsto df+\sqrt2d^*\omega$, with $\omega$ anti-self-dual. Pairing this equation with $df$ gives $\|df\|_2^2=0$, because $\langle d^*\omega,df\rangle=\langle\omega,d(df)\rangle=0$. Thus $f$ is constant and $d^*\omega=0$. For an anti-self-dual two-form the latter is equivalent to $d\omega=0$, so $\omega$ is harmonic. The Dirac regularity in [F1] identifies the Hilbert kernel and cokernel with these smooth spaces. On harmonic two-forms the Hodge star preserves the space and splits the intersection form into positive and negative definite summands: its value on $\omega^++\omega^-$ is $\|\omega^+\|_2^2-\|\omega^-\|_2^2$. By [F2] their negative dimension is precisely $b_-(X)$. Consequently $\operatorname{ind}_{\mathbb C}\widetilde D_0=b_1(X)-1-b_-(X)$. [F1, F2, F3, step 1.1, construct, algebra]

3.1 Twist the actual module of step1.1 by $G$, with the product connection. On its local multiplicity factor the curvature is $F^{V_0/S}\otimes I+I\otimes F_G$, and the two factors commute. The finite exponential and tensor-trace identities therefore give $\operatorname{ch}((V_0\otimes G)/S)=\Theta\operatorname{ch}(G)$. The identities are invariant under the local multiplicity transitions in [F1], so they are global form identities, requiring no Spin structure. Applying the actual analytic index theorem to the twisted and untwisted modules yields $\operatorname{ind}_{\mathbb C}\widetilde D_A=3\operatorname{ind}_{\mathbb C}\widetilde D_0-4\int_X\widehat A_0\Theta_0c_2(E)$. Here $\widetilde D_A=d_A^*\oplus\sqrt2d_A^-$, $\widehat A_0=1$, and $\Theta_0=2$ by step2.1. Using [F3] to evaluate the Chern form gives $\operatorname{ind}_{\mathbb C}\widetilde D_A=3(b_1-1-b_-)-8\langle c_2(P),[X]\rangle$. No assertion that $d_A^2=0$ was used: the Clifford operator and its index calculation apply to every smooth connection. [F1, F3, step 1.1, step 2.1, step 2.2, step 1.2, construct, algebra]

4.1 Multiplication of the target summand $\Lambda^-\otimes\operatorname{ad}P$ by $\sqrt2$ is a bounded invertible map on $L^2$, so $\widetilde D_A$ and $D_A$ have the same kernel and isomorphic cokernels on their exact first-Sobolev domains. The complex operator just computed is the complexification of the real one. If a complexified equation holds, its real and imaginary parts satisfy the real equation; hence its kernel is the complexification of the real kernel, and the same holds for the orthogonal cokernel using the adjoint. Finite complex dimensions of these spaces equal the corresponding real dimensions. Closed range transfers to the real operator by restricting the complex estimate, or by taking real parts of convergent-image preimages in the kernel complement. Thus $D_A:H^1\to L^2$ is real Fredholm and has index $8k-3(1-b_1+b_-)$, with $k=-\langle c_2(P),[X]\rangle$. This is not a claim about a KO-index theorem. [F1, step 3.1, construct, algebra]

5.1 If $\pi_1(X)=0$, every closed real one-form is exact: define a primitive by path integration from a basepoint; nullhomotopy and local primitives make the integral independent of path. Thus $b_1=0$ by [F2]. Positive definiteness gives $b_-=0$, and the prescribed charge is $k=1$. The proved formula gives $8-3=5$. Full AC has entered exactly through [F1]–[F3]'s analytic index, harmonic representatives and characteristic-class comparison; the finite symbol, chirality, trace and sign calculations add no choice. [A1, F1, F2, F3, step 4.1, algebra] ∎
