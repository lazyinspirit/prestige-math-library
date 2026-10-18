---
id: lem-spherical-harmonics-form-complete-basis-and-addition-formula
kind: lemma
title: Spherical harmonics form a complete basis with the addition formula
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-spherical-harmonic-partial-wave-conventions, lem-uniform-closure-of-a-real-function-algebra-is-a-lattice, lem-two-point-interpolation-in-a-separating-real-function-algebra, thm-c-c-is-dense-in-l-p-for-radon-measures, def-radon-measure-on-an-lch-space, cor-second-countable-lch-locally-finite-borel-measures-are-regular, cor-second-green-identity-on-a-bounded-c-one-domain, thm-polar-coordinates-formula-for-lebesgue-measure, thm-linear-change-of-variables-for-lebesgue-measure, thm-chain-rule, cor-volume-of-a-closed-three-ball, def-countable-choice, def-dependent-choice, thm-rank-nullity, def-dimension, def-linear-subspace, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, def-euclidean-spheres-and-closed-balls, thm-heine-borel-rn, def-locally-compact-space, def-second-countable-space]
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice and Dependent Choice are used for regularity and L2 density of the finite surface measure; the finite-dimensional harmonic construction uses no arbitrary-index choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Maximilian Kreuzer, Quantum Theory: Lecture Notes, Chapter 8, §§8.1–8.2"
      url: "https://hep.itp.tuwien.ac.at/~kreuzer/Quanten.15.07.09.pdf"
      locator: "PDF pp. 145–149, spherical harmonics, addition theorem, and plane-wave expansion; the completeness and addition-kernel proof is supplied locally."
    - title: "Pierre Capel, Introduction to Scattering Theory, TALENT lecture notes"
      url: "https://indico.mitp.uni-mainz.de/event/279/sessions/1001/attachments/2951/3418/Capel1TALENTFB22ho.pdf"
      locator: "PDF pp. 17–20, spherical-harmonic partial waves and Legendre normalization."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice. Use $\mathcal H_\ell$ from [[def-spherical-harmonic-partial-wave-conventions]]. For every $\ell\ge0$, $\dim_\mathbb C\mathcal H_\ell=2\ell+1$; the spaces $\mathcal H_\ell$ are pairwise orthogonal in $L^2(S^2,d\sigma;\mathbb C)$ and their algebraic sum is dense there. Thus they give a complete orthogonal spherical-harmonic expansion. For any orthonormal basis $Y_{\ell 1},\ldots,Y_{\ell,2\ell+1}$ of $\mathcal H_\ell$, the basis-independent reproducing kernel
$$Z_\ell(\omega,\eta):=\sum_{m=1}^{2\ell+1}Y_{\ell m}(\omega)\overline{Y_{\ell m}(\eta)}$$
satisfies $Z_\ell(\omega,\omega)=(2\ell+1)/(4\pi)$. In particular,
$$|g(\omega)|\le\sqrt{\frac{2\ell+1}{4\pi}}\,\|g\|_{L^2(S^2)}\qquad(g\in\mathcal H_\ell).$$
For fixed $\eta$, rotational invariance makes $Z_\ell(\omega,\eta)$ a degree-$\ell$ zonal polynomial of $\omega\cdot\eta$; normalizing $P_\ell(1)=1$ gives the usual addition identity $Z_\ell(\omega,\eta)=\frac{2\ell+1}{4\pi}P_\ell(\omega\cdot\eta)$.

## Facts & Assumptions

**Given:** Countable Choice and Dependent Choice, the sphere and its surface measure from [[def-spherical-harmonic-partial-wave-conventions]], and the finite-dimensional polynomial spaces used below.

[F1] Homogeneous harmonic restrictions satisfy the polar Laplacian identity and use the polar surface measure ([[def-spherical-harmonic-partial-wave-conventions]], [[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F2] Green's second identity holds on the unit ball for real $C^2$ functions under Countable Choice; its complex form follows by applying it to real and imaginary parts ([[cor-second-green-identity-on-a-bounded-c-one-domain]]).

[F3] The uniform closure of a unital real function algebra is closed under pointwise maxima and minima ([[lem-uniform-closure-of-a-real-function-algebra-is-a-lattice]]).

[F4] A finite Radon measure on a locally compact Hausdorff space has $C_c$ dense in $L^2$ under Dependent Choice ([[thm-c-c-is-dense-in-l-p-for-radon-measures]]). Every finite Borel measure on a second-countable locally compact Hausdorff space is Radon under Countable Choice ([[def-radon-measure-on-an-lch-space]], [[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]).

[F5] Rank-nullity gives $\dim\ker\Delta=\dim\mathcal P_\ell-\dim\mathcal P_{\ell-2}$ once surjectivity of the polynomial Laplacian is proved locally ([[thm-rank-nullity]], [[def-dimension]], [[def-linear-subspace]]).

[F6] The complex $L^2$ inner product satisfies Cauchy–Schwarz and has the norm induced by $d\sigma$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[F7] Under Countable Choice, invertible linear changes of variables preserve Lebesgue measurability and scale measure by the absolute determinant ([[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F8] A unital real algebra separating points interpolates any prescribed values at two distinct points ([[lem-two-point-interpolation-in-a-separating-real-function-algebra]]).

[A1] Countable Choice is used in [F4] to show the finite Borel surface measure is Radon and in the cited proof of [F3]; Dependent Choice is used in the $C_c$-density theorem. No Axiom of Choice is used for the finite-dimensional polynomial bases.

## Proof

**Given:** The spaces $\mathcal H_\ell$, surface measure $d\sigma$, Countable Choice and Dependent Choice.

1.1 If $P_\ell(x)=r^\ell Y(\omega)$ is homogeneous and harmonic, the polar Laplacian convention in [F1] gives $0=\Delta P_\ell=r^{\ell-2}(\ell(\ell+1)Y+\Delta_{S^2}Y)$. Hence $-\Delta_{S^2}Y=\ell(\ell+1)Y$. [F1, given, algebra]

1.2 Let $\mathcal P_n$ be the homogeneous complex polynomials of degree $n$ in three variables, with monomial basis of size $\binom{n+2}{2}$. For homogeneous $R_m$ of degree $m$, direct differentiation gives $\Delta(|x|^{2a}R_m)=2a(2m+2a+1)|x|^{2a-2}R_m+|x|^{2a}\Delta R_m$. Given $S\in\mathcal P_{n-2}$, put $J=\lfloor(n-2)/2\rfloor$, $c_j=2(j+1)(2n-2j-1)$, $b_0=1/c_0$, and $b_j=-b_{j-1}/c_j$ for $1\le j\le J$. Then $Q=\sum_{j=0}^Jb_j|x|^{2(j+1)}\Delta^jS\in\mathcal P_n$ satisfies $\Delta Q=S$: the coefficient of $|x|^{2j}\Delta^jS$ is $b_jc_j+b_{j-1}=0$ for $j\ge1$, the $S$ coefficient is $b_0c_0=1$, and $\Delta^{J+1}S=0$. Thus $\Delta:\mathcal P_n\to\mathcal P_{n-2}$ is onto. By [F5], its harmonic kernel has dimension $\binom{n+2}{2}-\binom n2=2n+1$ for $n\ge2$; for $n=0,1$ all homogeneous polynomials are harmonic and have dimensions $1,3$. Restriction to $S^2$ is injective because homogeneity recovers $P(r\omega)=r^nP(\omega)$, so $\dim\mathcal H_n=2n+1$. [F5, given, algebra]

2.1 Let $P_\ell,Q_m$ be homogeneous harmonic polynomials of degrees $\ell,m$. Apply [F2] on the unit ball to the real and imaginary components of $P_\ell,\overline{Q_m}$. Their volume Laplacians vanish, while homogeneity gives outward normal derivatives $\partial_\nu P_\ell=\ell P_\ell$ and $\partial_\nu\overline{Q_m}=m\overline{Q_m}$ on $S^2$. Therefore $(\ell-m)\int_{S^2}P_\ell(\omega)\overline{Q_m(\omega)}d\sigma(\omega)=0$. If $\ell\ne m$, this proves orthogonality. [F1, F2, step 1.1, algebra]

2.2 For $P\in\mathcal P_n$, define $H=P+\sum_{j=1}^{\lfloor n/2\rfloor}a_j|x|^{2j}\Delta^jP$, where $a_0=1$ and $a_{j+1}=-a_j/[2(j+1)(2n-2j-1)]$. The differentiation identity in step 1.2 shows that the coefficients of each $|x|^{2j}\Delta^{j+1}P$ cancel in $\Delta H$, so $H$ is harmonic. Since $P-H$ is divisible by $|x|^2$, restriction to $S^2$ writes $P|_{S^2}$ as an element of $\mathcal H_n$ plus the restriction of a homogeneous degree-$(n-2)$ polynomial. Induction on degree decomposes every polynomial restriction into a finite sum of spherical harmonics. [step 1.2, given, algebra]

2.3 Fix $\ell$ and choose an orthonormal basis of its finite-dimensional space. The sum $Z_\ell$ is independent of this basis because a unitary change of basis preserves the sum of rank-one coordinate kernels. For $R\in SO(3)$ and Borel $E\subseteq S^2$, the polar-surface definition represents $\sigma(E)$ as three times the Lebesgue measure of its unit radial cone $C_E=\{r\omega:0<r\le1,\ \omega\in E\}$. Since $R$ is a homeomorphism, $RE$ is Borel, $RC_E=C_{RE}$, and $|\det R|=1$; [F7] therefore gives $\sigma(RE)=\sigma(E)$. If $P$ is homogeneous and harmonic of degree $\ell$, then $P\circ R^{-1}$ is homogeneous of the same degree and remains harmonic: the chain rule and orthogonality give $\Delta(P\circ R^{-1})(x)=\sum_{i,j}(R^{-1}(R^{-1})^T)_{ij}(\partial_{ij}P)(R^{-1}x)=\Delta P(R^{-1}x)=0$. Thus composition with $R^{-1}$ is unitary on $L^2(S^2,d\sigma)$ and preserves $\mathcal H_\ell$; the rotated basis is again orthonormal, so basis independence gives $Z_\ell(R\omega,R\eta)=Z_\ell(\omega,\eta)$. In particular $Z_\ell(\omega,\omega)$ is constant because rotations act transitively on $S^2$. Integrating the diagonal gives $\int_{S^2}Z_\ell(\omega,\omega)d\sigma=2\ell+1$. Polar coordinates applied to the unit ball and its volume $4\pi/3$ ([[cor-volume-of-a-closed-three-ball]]) give $\sigma(S^2)=4\pi$, so the diagonal constant is $(2\ell+1)/(4\pi)$. Cauchy–Schwarz for the finite coefficient vector yields the displayed evaluation bound. [F1, F6, F7, step 1.2, algebra]

3.1 Let $A$ be the restrictions of real polynomials to $S^2$; constants, sums, and products show that it is a unital real algebra, and coordinate functions separate distinct points. Fix $f\in C(S^2;\mathbb R)$ and $\varepsilon>0$. For each fixed $\eta\in S^2$, form the family of open sets $U_p:=\{\omega:p(\omega)>f(\omega)-\varepsilon/2\}$ for all $p\in A$ with $p(\eta)=f(\eta)$. This family covers $S^2$: for each $\omega$, [F8] supplies an interpolant $p$ with $p(\eta)=f(\eta)$ and $p(\omega)=f(\omega)$, using the constant polynomial when $\omega=\eta$. Compactness gives a finite subcover corresponding to $p_1,\ldots,p_s$. Their maximum $g_\eta\in\overline A$ by [F3] satisfies $g_\eta(\eta)=f(\eta)$ and $g_\eta>f-\varepsilon/2$ everywhere. This proves the existence of such a function for every $\eta$ without choosing a family indexed by $S^2$. Define the set $\mathcal G:=\{g\in\overline A:g>f-\varepsilon/2\text{ on }S^2\}$ and the open sets $V_g:=\{\omega:g(\omega)<f(\omega)+\varepsilon/2\}$ for $g\in\mathcal G$. The functions whose existence was just proved show that these sets cover $S^2$, so compactness gives a finite subcover $V_{g_1},\ldots,V_{g_t}$. The minimum $h:=\min_i g_i$ lies in $\overline A$ by [F3] and satisfies $f-\varepsilon/2<h<f+\varepsilon/2$ everywhere. Since $\varepsilon$ was arbitrary, $f\in\overline A$ and the real polynomial restrictions are dense in $C(S^2;\mathbb R)$. Applying this to real and imaginary parts gives density of complex polynomial restrictions in $C(S^2;\mathbb C)$. By [F4], $d\sigma$ is Radon and $C(S^2;\mathbb C)=C_c(S^2;\mathbb C)$ is dense in $L^2(S^2,d\sigma;\mathbb C)$. Step 2.2 therefore implies that the span of the mutually orthogonal spaces $\mathcal H_\ell$ is dense in $L^2$. [A1, F3, F4, F8, step 2.1, step 2.2]

4.1 For fixed $\eta$, rotations fixing $\eta$ leave $Z_\ell(\omega,\eta)$ invariant. Writing an invariant polynomial in coordinates parallel and perpendicular to $\eta$ shows it is a polynomial in $t=\omega\cdot\eta$ on $S^2$. Since it belongs to $\mathcal H_\ell$, the spherical-Laplacian formula in the Definition gives $(1-t^2)p''-2tp'+\ell(\ell+1)p=0$ for this polynomial $p$. If $p(t)=\sum_{j=0}^{\ell}c_jt^j$, coefficient comparison gives $(j+2)(j+1)c_{j+2}+[\ell(\ell+1)-j(j+1)]c_j=0$ for $0\le j<\ell$; downward recursion determines every coefficient from $c_\ell$, and a nonzero solution cannot have degree $d<\ell$ because its leading coefficient would be multiplied by $\ell(\ell+1)-d(d+1)\ne0$. Thus polynomial solutions of degree at most $\ell$ form a one-dimensional space of degree exactly $\ell$. By step 2.3, $p(1)=Z_\ell(\eta,\eta)=(2\ell+1)/(4\pi)>0$. Consequently $P_\ell(t):=4\pi p(t)/(2\ell+1)$ is the unique degree-$\ell$ solution with $P_\ell(1)=1$ from the Definition, and $Z_\ell(\omega,\eta)=\frac{2\ell+1}{4\pi}P_\ell(\omega\cdot\eta)$. [given, step 1.1, step 2.3, algebra] ∎
