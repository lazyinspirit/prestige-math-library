---
title: Radiation, spin and code interfaces
description: Supply the regulated photon model, thermal moments, spectral
  kernels and conditional ULE contracts together with angular-momentum and
  dipole identities. Use the same spin conventions for absorption-emission code
  criteria, and specify the bosonic, inner/outer encoding and
  continuous-monitoring interfaces needed for platform comparisons.
status: published
dependency_level: 1
---

**Purpose:** Supply the regulated photon model, thermal moments, spectral kernels and conditional ULE contracts together with angular-momentum and dipole identities. Use the same spin conventions for absorption-emission code criteria, and specify the bosonic, inner/outer encoding and continuous-monitoring interfaces needed for platform comparisons.

## Finite spin blocks, spherical tensors and Clebsch–Gordan phases

[Open item](item-def-qec-prereq-spin-tensor-cg-conventions) · level 0


### Definition

A **spin label** is $j\in\{0,\tfrac12,1,\tfrac32,\ldots\}$. Its magnetic labels are $m=-j,-j+1,\ldots,j$. The **spin-$j$ block** is $V_j=\mathbb C^{2j+1}$ with orthonormal basis $e_{j,m}$ and operators $J_z^{(j)}e_{j,m}=m e_{j,m}$ and $J_\pm^{(j)}e_{j,m}=\sqrt{(j\mp m)(j\pm m+1)}e_{j,m\pm1}$, with the out-of-range endpoint vector interpreted as zero. Put $J_x^{(j)}=(J_+^{(j)}+J_-^{(j)})/2$, $J_y^{(j)}=(J_+^{(j)}-J_-^{(j)})/(2i)$ and $J^{(j)2}=(J_x^{(j)})^2+(J_y^{(j)})^2+(J_z^{(j)})^2$.

For an **ordered coupling** of spin labels $s,t$, use the ordered tensor product $V_s\otimes V_t$, its orthonormal product basis $e_{s,m}\otimes e_{t,n}$, and total operators $J_a^{\mathrm{tot}}=J_a^{(s)}\otimes I+I\otimes J_a^{(t)}$ for $a=x,y,z$, with $J_\pm^{\mathrm{tot}}=J_x^{\mathrm{tot}}\pm iJ_y^{\mathrm{tot}}$. For each $j=|s-t|,|s-t|+1,\ldots,s+t$, choose and record a unit highest-weight vector $u_j$ in the spin-$j$ summand: it has $J_z^{\mathrm{tot}}u_j=ju_j$ and $J_+^{\mathrm{tot}}u_j=0$. Set $v_{j,M}=(r!(2j)(2j-1)\cdots(2j-r+1))^{-1/2}(J_-^{\mathrm{tot}})^r u_j$ for $M=j-r$ and $r=0,1,\ldots,2j$, using the empty product $1$ for $r=0$.

The **Clebsch–Gordan coefficient** $C^{j,M}_{s,m;t,n}$ is the coefficient of $e_{s,m}\otimes e_{t,n}$ in $v_{j,M}$, so $v_{j,M}=\sum_{m,n}C^{j,M}_{s,m;t,n}e_{s,m}\otimes e_{t,n}$. Equivalently, with the supplier's inner product linear in its first argument, $C^{j,M}_{s,m;t,n}=\langle v_{j,M},e_{s,m}\otimes e_{t,n}\rangle$. The coupling order and the choice of each $u_j$ are part of this convention. Replacing $u_j$ by $e^{i\theta_j}u_j$ multiplies every coefficient for that $j$ by $e^{i\theta_j}$; comparison with a table therefore requires matching its order and phases.

Let $H=\bigoplus_{\alpha\in A}V_{j_\alpha}$ and $K=\bigoplus_{\beta\in B}V_{\ell_\beta}$ be finite direct sums of specified spin blocks over $\mathbb C$, with finite copy-index sets $A,B$; repeated spin labels designate distinct copies. The vector operations are coordinatewise, and the inner products are the sums of the block inner products. For $a=x,y,z$, define $J_a^H(h_\alpha)_{\alpha\in A}=(J_a^{(j_\alpha)}h_\alpha)_{\alpha\in A}$ and $J_a^K(g_\beta)_{\beta\in B}=(J_a^{(\ell_\beta)}g_\beta)_{\beta\in B}$. Set $J_\pm^H=J_x^H\pm iJ_y^H$ and $J_\pm^K=J_x^K\pm iJ_y^K$. For an integer $k\geq0$, a **rank-$k$ spherical tensor family from $H$ to $K$** is a family of linear maps $T_q:H\to K$ indexed by $q=-k,-k+1,\ldots,k$ satisfying $J_z^K T_q-T_qJ_z^H=qT_q$ and $J_\pm^K T_q-T_qJ_\pm^H=\sqrt{(k\mp q)(k\pm q+1)}T_{q\pm1}$. Here $T_{k+1}=T_{-k-1}=0$. When $H=K$, these differences are ordinary commutators. No nonzero reduced matrix element or physical interpretation is included in this definition.

### Justification

The finite-spin supplier constructs the stated matrices on each block and proves their ladder relations and $J^{(j)2}=j(j+1)I$. The ordered-register supplier supplies the product inner product and basis. The tensor-spin composition supplier gives one invariant spin-$j$ summand for each listed $j$ and a normalized ladder basis from a chosen unit highest-weight vector. Thus the finite choices and displayed positive normalization factors define every $v_{j,M}$ and its unique product-basis coefficients. Multiplying the chosen highest-weight vector by a unit complex scalar gives the stated phase change by linearity. The direct-sum supplier gives coordinatewise vector operations by taking $R=\mathbb C$ and the indicated finite families, while the linear-map supplier defines the maps $T_q$. The blockwise operators preserve each coordinate space and are linear because the spin-block operators are linear; therefore $J_a^KT_q$ and $T_qJ_a^H$ are linear maps from $H$ to $K$, so each tensor-family equation is well typed. The sum of the block inner products is sesquilinear and positive definite because it is a finite sum of such pairings and is positive on every nonzero tuple. The zero family satisfies the equations, including at the endpoints. [physics:prop-nrqm-orbital-and-spin-finite-spin-matrices](https://alphabetamath.cc/physics/item/prop-nrqm-orbital-and-spin-finite-spin-matrices) [physics:thm-nrqm-orbital-and-spin-tensor-spin-composition](https://alphabetamath.cc/physics/item/thm-nrqm-orbital-and-spin-tensor-spin-composition) [math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation) [math:def-direct-sum-of-a-family-of-modules](https://alphabetamath.cc/item/def-direct-sum-of-a-family-of-modules) [math:def-linear-map](https://alphabetamath.cc/item/def-linear-map)


## Transverse projector and isotropic angular contraction

[Open item](item-lem-qec-prereq-transverse-angular-average) · level 0


### Statement

Assume Countable Choice. Let $S^2=\{x\in\mathbb R^3:|x|=1\}$ carry polar surface measure $\sigma$. For $n\in S^2$, let $n^\perp=\{v\in\mathbb C^3:\sum_i v_i n_i=0\}$ and let $\varepsilon_1,\varepsilon_2$ be an orthonormal complex basis of $n^\perp$ for the standard inner product $\langle u,v\rangle=\sum_i u_i\overline{v_i}$. Then, for $i,j\in\{1,2,3\}$, $$\sum_{a=1}^2\varepsilon_{a,i}\overline{\varepsilon_{a,j}}=\delta_{ij}-n_i n_j,\qquad \int_{S^2}(\delta_{ij}-n_i n_j)\,d\sigma(n)=\frac{8\pi}{3}\delta_{ij}.$$ Here $\delta_{ij}$ is $1$ if $i=j$ and $0$ otherwise. Real orthonormal transverse vectors are a special case.

### Statement references

[math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space)

[math:def-orthogonal-vectors-sets-and-orthonormal-bases](https://alphabetamath.cc/item/def-orthogonal-vectors-sets-and-orthonormal-bases)

[math:def-orthogonal-projection](https://alphabetamath.cc/item/def-orthogonal-projection)

[physics:def-polar-surface-measure-on-the-unit-sphere](https://alphabetamath.cc/physics/item/def-polar-surface-measure-on-the-unit-sphere)

[physics:lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates](https://alphabetamath.cc/physics/item/lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

### Facts & Assumptions

**Given:** Countable Choice, $n$, the transverse basis and indices as in the statement.

**Goal:** Prove the projection identity and its surface integral.

[F1] In a finite-dimensional inner product space the orthogonal projection onto a subspace gives the unique subspace component whose residual is orthogonal to that subspace. The inner product is linear in its first argument and conjugate-linear in its second. [math:def-orthogonal-projection](https://alphabetamath.cc/item/def-orthogonal-projection) [math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space) An orthonormal basis is a spanning basis with pairwise orthogonal unit vectors; thus $\langle\varepsilon_a,\varepsilon_b\rangle=\delta_{ab}$. [math:def-orthogonal-vectors-sets-and-orthonormal-bases](https://alphabetamath.cc/item/def-orthogonal-vectors-sets-and-orthonormal-bases)

[F2] Under Countable Choice, polar surface measure $\sigma$ on $S^2$ has total mass $4\pi$, and for an integrable function its integral is the integral over $(0,\pi)\times(0,2\pi)$ of its value at $\Phi(\theta,\varphi)=(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$ times $\sin\theta$. [physics:def-polar-surface-measure-on-the-unit-sphere](https://alphabetamath.cc/physics/item/def-polar-surface-measure-on-the-unit-sphere) [physics:lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates](https://alphabetamath.cc/physics/item/lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F3] Fubini's theorem computes an $L^1$ integral on a product of sigma-finite measure spaces by iterated integrals. [math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces)

[F4] Sine and cosine have derivatives $\cos$ and $-\sin$, obey their addition formulas and $\sin^2 t+\cos^2 t=1$; the fundamental theorem evaluates the integral of an integrable derivative by its endpoint values. [math:thm-sine-and-cosine-derivatives](https://alphabetamath.cc/item/thm-sine-and-cosine-derivatives) [math:thm-sine-and-cosine-addition-formulas](https://alphabetamath.cc/item/thm-sine-and-cosine-addition-formulas) [math:cor-trigonometric-parity-and-pythagorean-identity](https://alphabetamath.cc/item/cor-trigonometric-parity-and-pythagorean-identity) [math:thm-ftc-second-part](https://alphabetamath.cc/item/thm-ftc-second-part)

[F5] A differentiable real function is continuous; a continuous real function on a closed bounded interval is bounded and Riemann integrable. Under Countable Choice, a bounded Riemann integrable function on that interval is Lebesgue integrable with the same integral. [math:cor-differentiable-implies-continuous](https://alphabetamath.cc/item/cor-differentiable-implies-continuous) [math:thm-continuous-implies-integrable](https://alphabetamath.cc/item/thm-continuous-implies-integrable) [math:thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral](https://alphabetamath.cc/item/thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral)

[F6] The quarter-turn and shift formulas give $\sin\pi=0$ and $\cos\pi=-1$. The sum, scalar-multiple and product rules differentiate polynomials in differentiable functions. [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas) [math:thm-algebra-of-derivatives](https://alphabetamath.cc/item/thm-algebra-of-derivatives)

[F7] Under Countable Choice, a closed or open interval has Lebesgue measure its length, and a degenerate closed interval has measure zero. Integrable functions equal almost everywhere have equal integrals over every measurable set. [math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind) [math:thm-the-lebesgue-integral-respects-almost-everywhere-equality](https://alphabetamath.cc/item/thm-the-lebesgue-integral-respects-almost-everywhere-equality)

[F8] Continuous real maps are Borel measurable. A measurable real function is Lebesgue integrable when its absolute integral is finite. The nonnegative integral is monotone, agrees with the simple integral on nonnegative simple functions, and the simple integral of a constant $M\ge0$ on a finite measure space is $M\mu(X)$. The Lebesgue integral is linear on integrable functions. [math:thm-continuous-preimages-of-borel-sets-are-borel](https://alphabetamath.cc/item/thm-continuous-preimages-of-borel-sets-are-borel) [math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals) [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral) [math:prop-the-nonnegative-integral-agrees-with-the-simple-integral](https://alphabetamath.cc/item/prop-the-nonnegative-integral-agrees-with-the-simple-integral) [math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function) [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one)

[F9] Under Countable Choice, $\lambda_1\times\lambda_1$ and $\lambda_2$ agree on every Borel subset of $\mathbb R^2$, and $\mathcal B(\mathbb R)\otimes\mathcal B(\mathbb R)=\mathcal B(\mathbb R^2)$. [math:thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets](https://alphabetamath.cc/item/thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets) [math:thm-borel-products-of-euclidean-spaces-are-euclidean-borel](https://alphabetamath.cc/item/thm-borel-products-of-euclidean-spaces-are-euclidean-borel)

### Proof

**Given:** Countable Choice, $n$, the transverse basis and indices as in the statement.

**Goal:** Prove the projection identity and its surface integral.

1.1 For any $v\in\mathbb C^3$, put $w=\sum_a\langle v,\varepsilon_a\rangle\varepsilon_a$. Orthonormality gives $w\in n^\perp$ and $\langle v-w,\varepsilon_b\rangle=0$ for both $b$; since the two vectors span $n^\perp$, $v-w$ is orthogonal to that space. Thus $w$ is its orthogonal projection by [F1]. Also $v-\langle v,n\rangle n\in n^\perp$ and $\langle v,n\rangle n$ is orthogonal to $n^\perp$, so uniqueness gives $\sum_a\langle v,\varepsilon_a\rangle\varepsilon_a=v-\langle v,n\rangle n$. Taking $v$ to be the $j$th standard basis vector and comparing $i$th coordinates proves the first identity. [given, F1, algebra]

1.2 Every one-variable integrand used below is a polynomial in $\sin t$ and $\cos t$, so is differentiable by [F4] and [F6], continuous by [F5], and bounded and Riemann integrable on the relevant closed interval by [F5]. Under the assumed Countable Choice, [F5] identifies its Riemann integral with its Lebesgue integral. For any such integrand $f$ on $[a,b]$, [F7] makes $\{a,b\}$ null. Both $f$ and $f\mathbf 1_{(a,b)}$ are bounded measurable functions on this finite measure space; if $|f|\le M$, [F8] gives $\int|f\mathbf 1_{(a,b)}|\le M(b-a)<\infty$, and likewise for $f$. They agree almost everywhere, so [F7] identifies the closed-interval integral with the open-interval Lebesgue integral. All one-dimensional integrals below may therefore be evaluated by the Darboux FTC in [F4] and used on the open angular intervals. [given, F4, F5, F6, F7, F8]

2.1 The addition formulas in [F4] at $\pi+\pi$, using [F6], give $\sin(2\pi)=0$ and $\cos(2\pi)=1$; [F4] gives the values at zero. The derivatives of $t$ and of a constant are $1$ and $0$, directly from their difference quotients. The product rules in [F6] and $\cos^2t+\sin^2t=1$ in [F4] show that primitives for $\cos^2t$, $\sin^2t$, $\sin t$, $\cos t$, $\sin t\cos t$, and $1$ are, respectively, $(t+\sin t\cos t)/2$, $(t-\sin t\cos t)/2$, $-\cos t$, $\sin t$, $\sin^2t/2$, and $t$. These primitives are differentiable on all of $\mathbb R$, so their restrictions have the one-sided endpoint derivatives required by [F4]. Applying [F4] and step 1.2 on $[0,2\pi]$ gives $\int_0^{2\pi}\cos^2\varphi\,d\varphi=\int_0^{2\pi}\sin^2\varphi\,d\varphi=\pi$ and $\int_0^{2\pi}1\,d\varphi=2\pi$, whereas the integrals of $\sin\varphi$, $\cos\varphi$ and $\sin\varphi\cos\varphi$ are zero. [F4, F6, step 1.2, algebra]

2.2 The product rules in [F6] give $(-\cos t+\cos^3t/3)'=\sin t-\cos^2t\sin t=\sin^3t$ by [F4], and $(-\cos^3t/3)'=\cos^2t\sin t$. The endpoint values $\cos0=1$ and $\cos\pi=-1$ from [F4] and [F6], together with the FTC and step 1.2, therefore give $\int_0^\pi\sin^3\theta\,d\theta=4/3$ and $\int_0^\pi\cos^2\theta\sin\theta\,d\theta=2/3$. [F4, F6, step 1.2, algebra]

3.1 The sphere functions $n_i n_j$ are bounded by $1$ and continuous: for $n,m\in S^2$, $|n_i n_j-m_i m_j|\le |n_i-m_i|+|n_j-m_j|\le2|n-m|$. They are Borel measurable by [F8] and have absolute integral at most $\sigma(S^2)=4\pi$ by [F2] and [F8]. Their angular integrands $g(\theta,\varphi)=n_i(\Phi(\theta,\varphi))n_j(\Phi(\theta,\varphi))\sin\theta$ are continuous and bounded by $1$ on $R=(0,\pi)\times(0,2\pi)$, whose planar Lebesgue measure is $2\pi^2$ by [F7]. Hence they are Borel and $\lambda_2$-integrable by [F8]. By [F9] with $m=n=1$, the Borel sigma-algebra on this open rectangle is the product of its one-dimensional Borel sigma-algebras, and planar Lebesgue measure there agrees with the product of the one-dimensional Lebesgue measures restricted to Borel sets. Thus the integrals of $g$ and $|g|$ agree for these measures, and $g$ is also integrable for the product measure. Each angular interval has finite measure by [F7], so the two factor spaces are sigma-finite, as required by [F3]. The sphere formula [F2] and Fubini [F3] now give the diagonal moments as $(4/3)\pi$, $(4/3)\pi$, and $(2/3)(2\pi)$ by steps 2.1 and 2.2. For the $12$, $13$ and $23$ off-diagonal moments, the respective $\varphi$ factors are $\cos\varphi\sin\varphi$, $\cos\varphi$ and $\sin\varphi$, whose integrals vanish by step 2.1; the reversed indices have the same products. Thus $\int_{S^2}n_i n_j\,d\sigma=(4\pi/3)\delta_{ij}$. Linearity in [F8] and the total mass in [F2] give $\int_{S^2}(\delta_{ij}-n_i n_j)\,d\sigma=(8\pi/3)\delta_{ij}$, completing the second identity. [F2, F3, F7, F8, F9, step 2.1, step 2.2, algebra] ∎


## Regularized transverse photon dipole bath model

[Open item](item-post-qec-prereq-regularized-photon-dipole-model) · level 0


### Postulate

Adopt the transverse radiation sector and frequency assignment $\omega(k)=c|k|$ of [physics:def-nrqm-photons-framework-radiation-sector-and-quantum-assignments](https://alphabetamath.cc/physics/item/def-nrqm-photons-framework-radiation-sector-and-quantum-assignments), with $c>0$ and $\hbar>0$. Thus its one-photon space is $\mathfrak h=\{f\in L^2(\mathbb R^3;\mathbb C^3):k\cdot f(k)=0\text{ a.e.}\}$, its radiation space is the symmetric Fock space $\mathcal F(\mathfrak h)$, and its free energy is $H_f=d\Gamma(\varepsilon)$ with $\varepsilon(k)=\hbar c|k|$.

For the continuum regulator take a finite matter space $\mathbb C^d$, a Hermitian matter Hamiltonian $H_a$, Hermitian dipole components $D_1,\ldots,D_J$, a real coupling $\eta$, and transverse form factors $g_j\in\mathfrak h$ supported where $0<\varepsilon\leq\Lambda$ for a finite $\Lambda>0$, with $g_j/\sqrt\varepsilon\in\mathfrak h$. Write $A_-(g)$ and $A_+(g)$ for annihilation and creation operators and $\phi(g)=A_-(g)+A_+(g)$. Postulate the total Hamiltonian $H=H_a\otimes I+I\otimes H_f+\eta\sum_{j=1}^J D_j\otimes\phi(g_j)$ on $\mathbb C^d\otimes D(H_f)$. The form factors include the chosen field normalization, fixed emitter position and ultraviolet regularization. This is a regulated dipole coupling: it models the interaction of the matter dipole with the electric field evaluated at the emitter, rather than an unregularized point field.

Alternatively, a finite positive-frequency mode regulator uses $m\geq1$ independent bosonic oscillator modes with $\omega_r>0$ and $\varepsilon_r=\hbar\omega_r$. Its bath space is the iterated completed Hilbert tensor product $\mathcal H_B=\widehat\bigotimes_{r=1}^m F(\mathbb C)$, with inner product linear in the first argument and complete occupation basis $e_{\mathbf n}=e_{n_1}\otimes\cdots\otimes e_{n_m}$, $\mathbf n\in\mathbb N_0^m$. Write $x=\sum_{\mathbf n}x_{\mathbf n}e_{\mathbf n}$. The mode operators are the maximal weighted shifts $a_re_{\mathbf n}=\sqrt{n_r}e_{\mathbf n-\mathbf e_r}$ and $a_r^\dagger e_{\mathbf n}=\sqrt{n_r+1}e_{\mathbf n+\mathbf e_r}$, with the lowering expression zero when $n_r=0$; here $\mathbf e_r$ is the $r$th coordinate unit vector. Their domains are respectively $\{x:\sum_{\mathbf n}n_r|x_{\mathbf n}|^2<\infty\}$ and $\{x:\sum_{\mathbf n}(n_r+1)|x_{\mathbf n}|^2<\infty\}$. The number operator $N_r=a_r^\dagger a_r$ is multiplication by $n_r$ on $D(N_r)=\{x:\sum_{\mathbf n}n_r^2|x_{\mathbf n}|^2<\infty\}$. The free energy is the self-adjoint diagonal sum $H_f=\sum_r\varepsilon_rN_r$, with $E_{\mathbf n}=\sum_r\varepsilon_r n_r$, $H_fx=\sum_{\mathbf n}E_{\mathbf n}x_{\mathbf n}e_{\mathbf n}$ and $D(H_f)=\{x:\sum_{\mathbf n}E_{\mathbf n}^2|x_{\mathbf n}|^2<\infty\}$.

The finite-mode interaction is any finite sum $V=\sum_{\ell=1}^L M_\ell\otimes L_\ell$, where the $M_\ell$ are Hermitian matter matrices and $L_\ell=\sum_{r=1}^m(z_{\ell r}a_r+\overline{z_{\ell r}}a_r^\dagger)$ for specified complex coefficients. These field combinations are symmetric on the common dense domain $D(H_f)$; the total Hamiltonian $H=H_a\otimes I+I\otimes H_f+V$ is self-adjoint and bounded below on $\mathbb C^d\otimes D(H_f)$, as justified below. Real overall coupling constants may be included in the matrices or coefficients. The mode frequencies and coupling coefficients are part of that regulator and need not reproduce a continuum spectrum exactly. The empty-mode case uses $\mathcal H_B=\mathbb C$, $H_f=V=0$ and its unique normalized bath state.

A bath preparation is an additional choice, stationary under the chosen free bath dynamics. The vacuum is one such choice. For finitely many positive-frequency modes, a thermal choice at inverse temperature $\beta>0$ is the normalized Gibbs state $\rho_B=Z^{-1}e^{-\beta H_f}$, where $Z=\operatorname{Tr}(e^{-\beta H_f})$. A continuum thermal preparation, if used, must instead be specified with its state and correlation functions; no trace-class infinite-volume Gibbs operator is asserted. A weak-coupling approximation is also an additional modeling choice: retaining leading interaction contributions or taking a limit requires separately stated scaling and error or convergence hypotheses. Neither that approximation nor removal of either regulator follows from this postulate. A regulator-free correlation or spectrum requires its own convergent or distributional contract and normalization.

### Facts & Assumptions

[F1] The radiation-sector supplier specifies the transverse one-photon space, bosonic Fock space, free energy and frequency assignment, under the Axioms of Choice, Countable Choice and Dependent Choice. [physics:def-nrqm-photons-framework-radiation-sector-and-quantum-assignments](https://alphabetamath.cc/physics/item/def-nrqm-photons-framework-radiation-sector-and-quantum-assignments)

[F2] For the stated continuum cutoff, weighted integrability and finite Hermitian matter matrices, the cutoff dipole relative-bound theorem gives a self-adjoint, bounded-below total Hamiltonian on $\mathbb C^d\otimes D(H_f)$. [physics:thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound](https://alphabetamath.cc/physics/item/thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound)

[F3] For a one-mode Fock space with complete occupation basis, positive energy spacing $\varepsilon$ and $\beta>0$, the diagonal Gibbs operator is trace class and $\sum_{n\geq0}e^{-\beta\varepsilon n}=(1-e^{-\beta\varepsilon})^{-1}$. The result assumes Countable Choice and Choice; its frequency parameter is here applied to the energy spacing $\varepsilon=\hbar\omega$. [physics:thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace](https://alphabetamath.cc/physics/item/thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace)

[F4] Under Countable Choice, completed Hilbert tensor products exist and products of complete orthonormal families form a complete orthonormal family. The pairing is linear in the first argument. [physics:lem-nrqm-composites-hilbert-tensor-construction](https://alphabetamath.cc/physics/item/lem-nrqm-composites-hilbert-tensor-construction)

[F5] Under Countable Choice, any real sequence on a specified countable complete orthonormal family defines a self-adjoint diagonal operator on its squared-weight domain; the finite span is a graph core, and nonnegative entries give a nonnegative operator. [physics:lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma](https://alphabetamath.cc/physics/item/lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma)

[F6] Under Countable Choice, a finite or countable orthonormal family with nonnegative weights summing to one defines a density operator by a trace-norm convergent sum of rank-one projections. [physics:lem-nrqm-composites-density-and-scalar-spectral-probability](https://alphabetamath.cc/physics/item/lem-nrqm-composites-density-and-scalar-spectral-probability)

[F7] Under Choice, a symmetric perturbation with relative bound less than one of a self-adjoint operator gives a self-adjoint sum on the same domain; if the unperturbed operator is bounded below, so is the sum. [math:thm-kato-rellich](https://alphabetamath.cc/item/thm-kato-rellich)

[F8] Under the choice assumptions A1, the continuum free energy for $\varepsilon(k)=\alpha|k|$, $\alpha>0$, is the self-adjoint direct sum $H_f=\bigoplus_{n\geq0}T_n$, with $T_0=0$ on $\mathbb C$ and $D(H_f)=\{\psi:\psi_n\in D(T_n)\text{ for every }n,\ \sum_n\|T_n\psi_n\|^2<\infty\}$. Its sectorwise spectral representation has zero-sector PVM $E_0(B)=\mathbf1_B(0)I_{\mathbb C}$ (Statement and Proof, step 5.1 of the supplier). [physics:thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian](https://alphabetamath.cc/physics/item/thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian)

[A1] Assume the Axioms of Choice, Countable Choice and Dependent Choice for the cited constructions. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)

### Justification

**Given:** The stated continuum cutoff or finite list of positive mode energies, the finite Hermitian matter matrices and coefficients, $\beta>0$ when a Gibbs state is chosen, and the choice assumptions A1. The following argument establishes mathematical well-definedness and stationarity, not the physical adoption of a bath or dipole approximation.

1.1 The transverse space, Fock space and $H_f$ have the meanings fixed by F1. The symbols $d\Gamma(\varepsilon)$, $A_\pm(g)$ and $D(H_f)$ denote, respectively, the free energy obtained by summing the one-particle energy over boson sectors, the creation and annihilation operators, and the free Hamiltonian's domain. The finite matrices are bounded, and F2 applies because $\varepsilon=\hbar c|k|$ has positive coefficient and the stated support and weighted-integrability conditions match its hypotheses. This justifies the continuum Hamiltonian as an operator; the physical identification of its interaction remains the postulate. [F1, F2, A1]

1.2 F3 supplies each one-mode Hilbert space with its complete occupation basis. Iterating F4 a finite number of times supplies $\mathcal H_B$ and the complete product basis in the Postulate. Enumerate $\mathbb N_0^m$ by increasing $\sum_r n_r$ and lexicographic order within each finite level. Apply F5 to this enumeration, first with entries $n_r$ and then with entries $E_{\mathbf n}$. This gives self-adjoint $N_r$ and nonnegative self-adjoint $H_f$ on exactly the displayed domains, with the stated eigenvalues and common finite-support core. Since $\varepsilon_rn_r\leq E_{\mathbf n}$ and $E_{\mathbf n}^2\leq m\sum_r\varepsilon_r^2n_r^2$, $D(H_f)=\bigcap_rD(N_r)$ and the finite sum of the $\varepsilon_rN_r$ there equals $H_f$. Countable Choice is used through F4 and F5; Choice is inherited from F3, and the continuum convention retains the additional Dependent Choice assumption in F1. [F1, F3, F4, F5, A1, algebra]

2.1 The maximal lowering shift has coordinates $(a_rx)_{\mathbf n}=\sqrt{n_r+1}x_{\mathbf n+\mathbf e_r}$ and squared norm $\sum_{\mathbf n}n_r|x_{\mathbf n}|^2$; the maximal raising shift has the corresponding shifted coordinates and squared norm $\sum_{\mathbf n}(n_r+1)|x_{\mathbf n}|^2$. Thus the displayed domains are exact, and both contain the finite span. Testing the adjoint identity on every basis vector forces the coordinates of the adjoint of lowering to be those of raising; the forced vector is square summable exactly on the displayed raising domain. Conversely, on that domain the identity holds first on finite sums and then on the whole lowering domain by coordinate truncation and the two norm identities. Interchanging raising and lowering gives mutual adjointness. Applying the shifts successively shows that $a_r^\dagger a_r$ has domain $D(N_r)$ and value $N_r$ (the extra requirement is $\sum_{\mathbf n}n_r^2|x_{\mathbf n}|^2<\infty$). On the invariant finite span, shifts of different coordinates commute, while $a_ra_r^\dagger-a_r^\dagger a_r=I$; these are the independent bosonic oscillator relations. [F4, F5, step 1.2, algebra]

2.2 For the finite-mode thermal construction set $q_r=e^{-\beta\varepsilon_r}\in(0,1)$. For the increasing finite boxes $C_N=\{0,\ldots,N\}^m$, finite distributivity gives $\sum_{\mathbf n\in C_N}e^{-\beta E_{\mathbf n}}=\prod_r\sum_{n_r=0}^Nq_r^{n_r}$. Every finite subset of $\mathbb N_0^m$ lies in a box, so the supremum of the nonnegative finite subsums is the limit of these box sums. F3 and finiteness of $m$ give $Z=\sum_{\mathbf n}e^{-\beta E_{\mathbf n}}=\prod_r(1-e^{-\beta\varepsilon_r})^{-1}<\infty$, with $Z\geq1$. Hence $p_{\mathbf n}=Z^{-1}e^{-\beta E_{\mathbf n}}$ are nonnegative and sum to one. F6, applied to the enumerated product basis, supplies the density operator $\rho_B=\sum_{\mathbf n}p_{\mathbf n}P_{\mathbf n}$ in trace norm, where $P_{\mathbf n}x=x_{\mathbf n}e_{\mathbf n}$. The diagonal bounded operator denoted $e^{-\beta H_f}$ multiplies this basis by $e^{-\beta E_{\mathbf n}}$, so it equals $Z\rho_B$ and is trace class with trace $Z$. This proves the stated Gibbs formula without presupposing a trace identity for an infinite tensor product. The cited single-mode thermal convention is extended here to finitely many independent modes; no continuum limit is inferred. [F3, F4, F5, F6, A1, step 1.2, algebra]

3.1 Put $T=I\otimes H_f$ on $\mathbb C^d\otimes D(H_f)$. In the finite matter basis it is the direct sum of $d$ copies of $H_f$; its adjoint acts componentwise, so it is self-adjoint and nonnegative. For $x\in D(H_f)$, step 2.1 and $\varepsilon_rn_r\leq E_{\mathbf n}$ give $\|a_rx\|^2\leq\varepsilon_r^{-1}\langle H_fx,x\rangle$ and $\|a_r^\dagger x\|^2=\|a_rx\|^2+\|x\|^2$. The same estimates hold componentwise with $T$. Consequently, for a finite $C\geq0$, $\|V\Psi\|\leq C(\langle T\Psi,\Psi\rangle^{1/2}+\|\Psi\|)\leq C(\|T\Psi\|^{1/2}\|\Psi\|^{1/2}+\|\Psi\|)$. The scalar inequality $\sqrt{uv}\leq\delta u+(4\delta)^{-1}v$, $\delta>0$, shows that $V$ has $T$-bound zero. Mutual adjointness in step 2.1, conjugate coefficient pairs and Hermitian matrices make $V$ symmetric on this domain (verify on finite occupation sums, then pass in the $T$ graph norm using the estimate). The bounded Hermitian operator $H_a\otimes I$ also has $T$-bound zero. Apply F7 to $T$ and $H_a\otimes I+V$ to obtain the asserted self-adjoint, bounded-below finite-mode Hamiltonian on the specified domain. [F4, F7, A1, step 1.2, step 2.1, algebra]

3.2 Define the free dynamics by $U(t)e_{\mathbf n}=e^{-itE_{\mathbf n}/\hbar}e_{\mathbf n}$ and bounded extension. Modulus-one coefficients give unitarity and $U(s+t)=U(s)U(t)$. For a fixed vector the tail of its squared coefficients is arbitrarily small; the finitely many remaining phases are continuous, while $|e^{-itE/\hbar}-1|\leq2$ bounds the tail, proving strong continuity. On $D(H_f)$, the same finite-part and tail argument, now using $|(e^{-itE/\hbar}-1)/t|\leq E/\hbar$, gives the norm derivative at zero $-iH_f/\hbar$; conversely existence of that derivative forces square summability of $E_{\mathbf n}x_{\mathbf n}$ by its coordinates, hence this is exactly its generator domain. Thus $U(t)=e^{-itH_f/\hbar}$ is the free evolution for the stated Hamiltonian. Each $P_{\mathbf n}$ is fixed by conjugation with $U(t)$; the trace-norm series in step 2.2 has the same diagonal coefficients after conjugation, so $U(t)\rho_BU(t)^*=\rho_B$. Also $E_{\mathbf0}=0$ gives $U(t)e_{\mathbf0}=e_{\mathbf0}$, so the vacuum projector is stationary. For no modes the same conclusions hold on $\mathbb C$ with $Z=1$. These arguments concern free bath dynamics; stationary preparation, dipole interpretation and any weak-coupling approximation remain separate modeling choices. [F4, F5, F6, step 1.2, step 2.2, algebra]

4.1 For the continuum regulator, F1 identifies the unit vacuum as $\Omega=\iota_0(1)=(1,0,0,\ldots)$ in the Fock direct sum. Apply F8 with $\alpha=\hbar c>0$. Every component of $\Omega$ lies in its sector domain, and $\sum_n\|T_n\Omega_n\|^2=0$ because $T_0=0$ and all other components vanish. Thus $\Omega\in D(H_f)$ and $H_f\Omega=0$. For the adopted free bath evolution $U(t)=e^{-itH_f/\hbar}$, the zero-sector spectral representation in F8 gives $U(t)\Omega=e^{-it0/\hbar}\Omega=\Omega$. Write $P_\Omega x=\langle x,\Omega\rangle\Omega$, using the inner product linear in the first argument. Unitarity then gives $U(t)P_\Omega U(t)^*x=\langle U(t)^*x,\Omega\rangle U(t)\Omega=\langle x,U(t)\Omega\rangle\Omega=P_\Omega x$ for every $x$. This proves continuum vacuum stationarity under the chosen free bath dynamics; it asserts neither stationarity under the coupled Hamiltonian nor a continuum Gibbs density. [F1, F8, A1, algebra] ∎

### External input

The dipole approximation evaluates the field at the emitter and uses an interaction of the form $-\mathbf d\cdot\mathbf E$; the cutoff form factors and finite-dimensional truncation above are additional model choices. The cited thermal convention is the positive-frequency single-mode Gibbs state, used here in the finite-mode construction.


## Finite-mode bosonic Gibbs occupations and moments

[Open item](item-lem-qec-prereq-bosonic-thermal-moment-contract) · level 0


### Statement

Assume the Axiom of Choice and Countable Choice. Let $m\geq1$, let $e_1,\ldots,e_m$ be the standard orthonormal basis of $\mathbb C^m$, and let $a_j=a(e_j)$ and $a_j^\dagger=a^\dagger(e_j)$ be the bosonic annihilation and creation operators on symmetric Fock space. For $\omega_j>0$ and $\beta>0$, let $H$ be the self-adjoint closure of $\sum_{j=1}^m\omega_j a_j^\dagger a_j$ on the finite-particle subspace, $Z=\operatorname{Tr}(e^{-\beta H})$, and $\rho_\beta=Z^{-1}e^{-\beta H}$. Then $Z=\prod_{j=1}^m(1-e^{-\beta\omega_j})^{-1}$ and, with $\langle X\rangle_\beta:=\operatorname{Tr}(X\rho_\beta)$,

$$\langle a_i^\dagger a_j\rangle_\beta=\delta_{ij}(e^{\beta\omega_j}-1)^{-1},\qquad \langle a_i a_j^\dagger\rangle_\beta=\delta_{ij}\bigl[1+(e^{\beta\omega_j}-1)^{-1}\bigr].$$

Both $\langle a_i a_j\rangle_\beta$ and $\langle a_i^\dagger a_j^\dagger\rangle_\beta$ are zero. Each displayed product composed with $\rho_\beta$ is a well-defined trace-class operator. This finite-mode trace construction does not itself supply an infinite-volume state or correlation limit.

For $\mathbf n\in\mathbb N^m$, put $N=\sum_jn_j$ and let $P_{s,N}$ be the symmetric-sector projection. The vectors $|\mathbf n\rangle=\sqrt{N!/\prod_jn_j!}\,P_{s,N}(e_1^{\otimes n_1}\otimes\cdots\otimes e_m^{\otimes n_m})$, with $|\mathbf0\rangle$ the vacuum, form a complete orthonormal basis. In this basis $H|\mathbf n\rangle=(\sum_j\omega_jn_j)|\mathbf n\rangle$ and $\rho_\beta|\mathbf n\rangle=p_{\mathbf n}|\mathbf n\rangle$, where $p_{\mathbf n}=\prod_j(1-q_j)q_j^{n_j}$ and $q_j=e^{-\beta\omega_j}\in(0,1)$; in particular $\sum_{\mathbf n}p_{\mathbf n}=1$.

### Facts & Assumptions

**Given:** The choice assumptions, finite mode number, positive frequencies and inverse temperature in the Statement.

[F1] The symmetric Fock space, finite-particle subspace, vacuum and sector creation and annihilation maps use the conventions of [physics:def-qft-fock-and-test-spaces](https://alphabetamath.cc/physics/item/def-qft-fock-and-test-spaces). The maximal bosonic maps are closed and mutually adjoint, with the stated finite-particle core and canonical commutator relations. [physics:lem-qft-fock-ccr-car](https://alphabetamath.cc/physics/item/lem-qft-fock-ccr-car)

[F2] Splitting off a unit vector gives a unitary one-mode Fock tensor factor, on which creation and annihilation have the raising and lowering coefficients $\sqrt{n+1}$ and $\sqrt n$. [physics:lem-qft-fock-one-mode-splitting](https://alphabetamath.cc/physics/item/lem-qft-fock-one-mode-splitting)

[F3] Under Full Choice, the operator $\int\lambda\,dP$ of a regular PVM on $\mathbb R$, with domain specified by its finite second spectral moment, is self-adjoint and has spectral PVM $P$. [physics:thm-spectral-theorem-for-unbounded-self-adjoint-operators](https://alphabetamath.cc/physics/item/thm-spectral-theorem-for-unbounded-self-adjoint-operators)

[F4] Under Full Choice, for a nonzero separable complex Hilbert space and a self-adjoint lower-bounded operator whose exponential is trace class on an open positive-temperature interval, the normalized exponential is a density operator. [physics:thm-qsm-trace-gibbs-variational](https://alphabetamath.cc/physics/item/thm-qsm-trace-gibbs-variational)

[F5] Trace class and trace use [physics:def-trace-class-operator](https://alphabetamath.cc/physics/item/def-trace-class-operator) and [physics:def-trace-of-a-trace-class-operator](https://alphabetamath.cc/physics/item/def-trace-of-a-trace-class-operator). A compact operator with an absolutely summable rank-one expansion converging in operator norm is trace class by [physics:lem-nuclear-series-characterizes-trace-norm](https://alphabetamath.cc/physics/item/lem-nuclear-series-characterizes-trace-norm). Its trace is the absolutely convergent sum of diagonal entries in any supplied orthonormal basis by [physics:thm-trace-is-absolutely-convergent-and-basis-independent](https://alphabetamath.cc/physics/item/thm-trace-is-absolutely-convergent-and-basis-independent).

[F6] For real $0<q<1$, $\sum_{n\ge0}q^n=(1-q)^{-1}$. [math:thm-geometric-series](https://alphabetamath.cc/item/thm-geometric-series)

[F7] The projection, multiplicativity and strong countable additivity requirements for a PVM, and its scalar-measure regularity requirement, are those of [physics:def-projection-valued-measure](https://alphabetamath.cc/physics/item/def-projection-valued-measure) and [physics:def-regular-borel-measure-on-an-lch-space](https://alphabetamath.cc/physics/item/def-regular-borel-measure-on-an-lch-space). When applying the spectral and trace suppliers, use their first-variable-linear pairing $(u,v)_1=\langle v,u\rangle_2$; this has the same norm, adjoints and quadratic projection measures as the Fock convention, and $(Tu,u)_1=\langle u,Tu\rangle_2$.

[F8] Under Countable Choice, bounded Borel functions of a PVM on a nonzero complex Hilbert space have bounded operator integrals obtained by uniform simple approximation. [physics:thm-bounded-borel-pvm-integral](https://alphabetamath.cc/physics/item/thm-bounded-borel-pvm-integral)

[F9] Under Countable Choice, $f(P)$ has domain $\{\psi:\int|f|^2dP_\psi<\infty\}$ and acts by the norm limit of bounded truncation integrals. Functions agreeing outside a $P$-null set define the same operator and domain. [physics:def-unbounded-integral-against-a-pvm](https://alphabetamath.cc/physics/item/def-unbounded-integral-against-a-pvm)

[A1] Full Choice and Countable Choice are assumed for the cited spectral and Fock constructions. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

### Proof

**Goal:** Establish the normalization, the four families of moments, and the stated domains.

1.1 For $\mathbf n\in\mathbb N^m$ put $N=\sum_jn_j$, $t_{\mathbf n}=e_1^{\otimes n_1}\otimes\cdots\otimes e_m^{\otimes n_m}$, $C_{\mathbf n}=N!/\prod_j n_j!$, and $|\mathbf n\rangle=\sqrt{C_{\mathbf n}}P_{s,N}t_{\mathbf n}$, with the vacuum at $N=0$. There are $C_{\mathbf n}$ distinct tensor words with these occupations, each occurring $\prod_jn_j!$ times in the permutation average, so $P_{s,N}t_{\mathbf n}$ is their average. These words are orthonormal by the tensor inner product; hence $\|P_{s,N}t_{\mathbf n}\|^2=C_{\mathbf n}^{-1}$. Distinct occupations give orthogonal vectors, and all symmetrized elementary basis tensors occur this way, so these vectors span the symmetric $N$-particle sector. Thus the occupation vectors form an orthonormal basis of Fock space, and their finite span is the finite-particle subspace, because every fixed-particle sector is finite-dimensional. These are also the vectors obtained from successive applications of the explicit maps in [F2], whose binomial normalization factors multiply to $\sqrt{C_{\mathbf n}}$. This identification uses only the splitting maps, without assuming any intertwining for complementary modes. [F1, F2, A1, construct, algebra]

1.2 Put $q_j=e^{-\beta\omega_j}\in(0,1)$ and $w_{\mathbf n}=\prod_jq_j^{n_j}$. For $0<q<1$, finite summation gives $(1-q)\sum_{n=0}^M n q^n=\sum_{n=1}^Mq^n-Mq^{M+1}$. To see $Mq^{M+1}\to0$, choose $q<r<1$; the ratio of successive positive terms is $q(1+1/M)\le r$ for sufficiently large $M$, and a geometric bound applies. Therefore [F6] gives $\sum_{n\ge0}nq^n=q/(1-q)^2$ and $\sum_{n\ge0}(n+1)q^n=(1-q)^{-2}$. Taking finite rectangular sums and then their increasing limits shows $\sum_{\mathbf n}w_{\mathbf n}(2+\sum_jn_j)<\infty$. [F6, algebra]

2.1 The sector creation formula in [F1] and invariance of the full permutation average under prior symmetrization give $a_j^\dagger|\mathbf n\rangle=\sqrt{N+1}\sqrt{C_{\mathbf n}/C_{\mathbf n+\mathbf e_j}}|\mathbf n+\mathbf e_j\rangle=\sqrt{n_j+1}|\mathbf n+\mathbf e_j\rangle$, where $\mathbf e_j$ is the unit occupation vector. For $N>0$ and $n_j>0$, exactly the fraction $n_j/N$ of the words in step 1.1 have first factor $e_j$; contraction by $e_j$ leaves the uniform average of the words with occupation $\mathbf n-\mathbf e_j$. Thus $a_j|\mathbf n\rangle=\sqrt N(n_j/N)\sqrt{C_{\mathbf n}/C_{\mathbf n-\mathbf e_j}}|\mathbf n-\mathbf e_j\rangle=\sqrt{n_j}|\mathbf n-\mathbf e_j\rangle$. It is zero if $n_j=0$, including the vacuum. This proves both ladder formulas on the same basis for every $j$ directly from the sector definitions. Consequently $\sum_j\omega_j a_j^\dagger a_j$ has eigenvalue $E_{\mathbf n}=\sum_j\omega_j n_j$ on that finite span. [step 1.1, F1, algebra]

3.1 For a Borel set $B\subseteq\mathbb R$, define $P(B)\psi=\sum_{E_{\mathbf n}\in B}c_{\mathbf n}|\mathbf n\rangle$, where $c_{\mathbf n}=\langle\mathbf n|\psi\rangle$. These are coordinate orthogonal projections, $P(\mathbb R)=I$, $P(\varnothing)=0$, and $P(B)P(C)=P(B\cap C)$. For pairwise disjoint Borel sets, the corresponding coordinate selections are orthogonal and their squared norms sum to at most $\|\psi\|^2$, proving strong countable additivity. The scalar measure is $P_\psi(B)=\sum_{E_{\mathbf n}\in B}|c_{\mathbf n}|^2$. It is finite and regular: given $\varepsilon>0$, choose a finite set of occupation indices whose omitted squared coefficients sum to less than $\varepsilon$. For any Borel $B$, the energies in $B$ of these selected indices form a finite compact subset $K\subseteq B$ with $P_\psi(B\setminus K)<\varepsilon$. The open set obtained by deleting their finitely many energies outside $B$ contains $B$ and has excess measure less than $\varepsilon$. This proves compact inner and open outer approximation for every Borel set; finiteness gives local finiteness as well. Hence $P$ is a regular PVM on $\mathbb R$, supported on $[0,\infty)$. [step 1.1, step 2.1, F7, A1, construct, algebra]

4.1 For any bounded Borel $f$, first evaluate simple integrals on an occupation vector, obtaining $f(E_{\mathbf n})|\mathbf n\rangle$; uniform approximation in [F8] proves the same formula for $f(P)$. Thus [F9] gives $D(\int\lambda\,dP)=\{\psi:\sum_{\mathbf n}E_{\mathbf n}^2|c_{\mathbf n}|^2<\infty\}$ and the coordinate action $c_{\mathbf n}\mapsto E_{\mathbf n}c_{\mathbf n}$. By [F3] this operator is self-adjoint with spectral PVM $P$. Truncating occupation coordinates, for example to $\sum_j n_j\le M$, converges in its graph norm, so by step 2.1 it is exactly the closure $H$ in the Statement. It is nonnegative, since its quadratic form on its operator domain is $\sum_{\mathbf n}E_{\mathbf n}|c_{\mathbf n}|^2\ge0$. Because $P((-\infty,0))=0$, [F9] permits replacing the exponential function by the bounded Borel function $f_\beta(\lambda)=e^{-\beta\max(\lambda,0)}$. Its integral therefore is $e^{-\beta H}$ and acts on $|\mathbf n\rangle$ by $w_{\mathbf n}$. [step 1.1, step 2.1, step 1.2, step 3.1, F3, F8, F9, A1, algebra]

5.1 Repeated finite rectangular sums, their increasing limits, and [F6] give $\sum_{\mathbf n}w_{\mathbf n}=\prod_j(1-q_j)^{-1}<\infty$. The diagonal expansion of $e^{-\beta H}$ has rank-one norms $w_{\mathbf n}$, so its finite sums converge in operator norm. The limit is compact: for each positive tolerance, a finite-rank approximation maps the unit ball into a bounded finite-dimensional set with a finite net, and the norm error supplies a finite net for the image under the limit; its closure is complete in the Hilbert space. It is trace class by [F5], with trace the displayed positive sum. Step 1.1 supplies a countable orthonormal basis, hence a nonzero separable complex Hilbert space. The same argument holds for every $\beta>0$, so [F4] applies on the open interval $(0,\infty)$ and gives the density operator $\rho_\beta$. [step 1.1, step 1.2, step 4.1, F4, F5, F6, A1, algebra]

6.1 Write a product of two ladder operators as $X=BC$, with $C$ acting first. Each maps an occupation vector to a single occupation vector or zero. If $N=\sum_jn_j$, the first coefficient has modulus at most $\sqrt{N+1}$ and, after this operation, total occupation is at most $N+1$, so the second coefficient is at most $\sqrt{N+2}$. Thus $\|X|\mathbf n\rangle\|\le\sqrt{(N+1)(N+2)}\le N+2$. For $\psi=\sum c_{\mathbf n}|\mathbf n\rangle$, let $u_M=Z^{-1}\sum_{N\le M}w_{\mathbf n}c_{\mathbf n}|\mathbf n\rangle$. Then $u_M\to\rho_\beta\psi$. Both $Cu_M$ and $BCu_M$ converge absolutely in norm: $|c_{\mathbf n}|\le\|\psi\|$, the first coefficient is at most $\sqrt{N+1}\le N+2$, and $\sum_{\mathbf n}w_{\mathbf n}(N+2)<\infty$ by step 1.2. Closedness of $C$ first gives $\rho_\beta\psi\in D(C)$ and $Cu_M\to C\rho_\beta\psi$; closedness of $B$ then gives $C\rho_\beta\psi\in D(B)$ and the required image. Hence $X\rho_\beta$ is defined on all of Fock space. Its occupation expansion has sum of rank-one norms at most $Z^{-1}\sum_{\mathbf n}w_{\mathbf n}(2+\sum_jn_j)<\infty$, and thus converges in operator norm. It is compact by the finite-net argument of step 5.1, trace class by [F5], and its trace is the sum of its diagonal occupation matrix elements. [step 2.1, step 1.2, step 5.1, F1, F5, algebra]

7.1 For $i\ne j$, both normal and antinormal products change the occupation vector, so their diagonal matrix elements vanish. For $i=j$, they are respectively $n_j$ and $n_j+1$. Products of two annihilations or two creations always change total particle number by two and therefore have zero diagonal matrix elements. Using step 1.2 and the product normalization gives $\langle a_j^\dagger a_j\rangle_\beta=q_j/(1-q_j)=(e^{\beta\omega_j}-1)^{-1}$ and $\langle a_j a_j^\dagger\rangle_\beta=(1-q_j)^{-1}=1+(e^{\beta\omega_j}-1)^{-1}$. Absolute convergence and the trace-class domains are supplied by step 6.1. These are all the claimed moments; no infinite-volume limit has been invoked. [step 2.1, step 1.2, step 5.1, step 6.1, algebra] ∎


## Stationary correlation spectra and ULE kernel regularity

[Open item](item-def-qec-prereq-stationary-spectrum-kernel-contract) · level 0


### Definition

Fix a positive integer $n$ and use entrywise Lebesgue integrals over the real line. A stationary matrix correlation is here a function $C:\mathbb R\to\mathbb C^{n\times n}$ of a time difference; stationarity alone imposes no integrability or positivity conclusion in this definition. Suppose every entry of $C$ is integrable. Its spectral density in this convention is $J(\omega)=(2\pi)^{-1}\int_{\mathbb R}C(t)e^{i\omega t}\,dt$. When Fourier inversion applies, the inverse convention is $C(t)=\int_{\mathbb R}J(\omega)e^{-i\omega t}\,d\omega$ at the points covered by the inversion theorem. In particular this equality holds for every $t$ if all entries of $C$ are Schwartz functions, assuming countable choice.

For the jump-kernel contract additionally require that $J(\omega)$ is Hermitian positive semidefinite for every real $\omega$: $J(\omega)^*=J(\omega)$ and $v^*J(\omega)v\geq0$ for every $v\in\mathbb C^n$. Define $g(\omega)$ to be the unique Hermitian positive semidefinite matrix whose square is $J(\omega)/(2\pi)$. Require its entries to be integrable and set $g(t)=\int_{\mathbb R}g(\omega)e^{-i\omega t}\,d\omega$. For a matrix $A$, put $\|A\|_{2,1}=\sum_{b=1}^n(\sum_{a=1}^n|A_{ab}|^2)^{1/2}$. Kernel regularity means $0<\int_{\mathbb R}\|g(t)\|_{2,1}\,dt<\infty$ and $\int_{\mathbb R}|t|\|g(t)\|_{2,1}\,dt<\infty$.

For an integrand $h$ with a singularity at a real point $a$, the symmetric Cauchy principal value is $\operatorname{PV}\int_{\mathbb R}h(x)\,dx=\lim_{\varepsilon\downarrow0}\int_{\{|x-a|>\varepsilon\}}h(x)\,dx$, provided those integrals and the limit exist; convergence at infinity is also required. A Dirac mass at $a$ is a measure assigning mass one to sets containing $a$ and zero to other sets. It is not an ordinary density with respect to Lebesgue measure, so its pointwise matrix square root is not defined by the density construction above.

### Definition references

[math:def-schwartz-space-and-its-seminorms](https://alphabetamath.cc/item/def-schwartz-space-and-its-seminorms)

[math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)

[math:prop-countable-subsets-of-rn-are-lebesgue-null](https://alphabetamath.cc/item/prop-countable-subsets-of-rn-are-lebesgue-null)

[math:cor-integral-over-a-null-set-vanishes](https://alphabetamath.cc/item/cor-integral-over-a-null-set-vanishes)

### Facts & Assumptions

[F1] The finite-dimensional complex spectral theorem supplies an orthonormal eigenbasis for a normal endomorphism. [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)

[F2] Fourier inversion holds pointwise for Schwartz functions, with absolutely convergent inverse integral, under countable choice. [math:thm-fourier-inversion-on-schwartz-space](https://alphabetamath.cc/item/thm-fourier-inversion-on-schwartz-space)

[A1] Countable choice means that a choice can be made from each member of every sequence of nonempty sets; assume it for the Fourier and Lebesgue-null suppliers. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F3] Under [A1], every singleton in $\mathbb R$ is Lebesgue measurable with measure zero; write $\lambda$ for Lebesgue measure on $\mathbb R$. [math:prop-countable-subsets-of-rn-are-lebesgue-null](https://alphabetamath.cc/item/prop-countable-subsets-of-rn-are-lebesgue-null)

[F4] If $p$ is nonnegative and measurable and $E$ is measurable with $\lambda(E)=0$, then $\int_E p\,d\lambda=0$. [math:cor-integral-over-a-null-set-vanishes](https://alphabetamath.cc/item/cor-integral-over-a-null-set-vanishes)

### Justification

The entrywise integrability assumptions make the displayed Fourier integrals finite. Hermitian matrices are normal, so [F1] diagonalizes $J(\omega)$ in an orthonormal basis. Its eigenvalues are real and nonnegative by the stated quadratic-form condition. Taking their nonnegative square roots, after division by $2\pi$, gives a Hermitian positive semidefinite square root. It is unique: any such root commutes with its square and preserves each eigenspace of that square; diagonalizing the root on each eigenspace forces its eigenvalues to be the nonnegative square root of the corresponding eigenvalue. Thus the construction is independent of the eigenbasis.

Apply [F2] entrywise to $C$ in the stated Schwartz special case, changing variables from the supplier's $2\pi$ Fourier convention to angular frequency and reversing the sign. The moment conditions explicitly ensure that the denominator used in the kernel correlation-time ratio is finite and nonzero and its numerator is finite. For the Dirac mass at $a$, [F3] gives $\lambda(\{a\})=0$. If a nonnegative measurable function $p$ were a Lebesgue density for that mass, [F4] would give $\int_{\{a\}}p\,d\lambda=0$, whereas the mass of $\{a\}$ is one. This contradiction excludes a Lebesgue density. The principal value is only a definition when the indicated limit exists; no existence follows merely from writing the symbol.

### Source notes

The jump-kernel normalization and mixed matrix norm follow the cited source's definitions. The separate hypotheses above make the domain and convergence requirements explicit; no physical interpretation or microscopic bath assertion is made by this mathematical contract.


## Bosonic loss, Kerr shifts and finite-code comparison scope

[Open item](item-def-qec-prereq-bosonic-kerr-scope) · level 0


### Definition

Assume Countable Choice. A single bosonic mode is represented here by the symmetric Fock space over a one-dimensional complex Hilbert space with a chosen unit vector. Its occupation basis is $\{|n\rangle:n=0,1,2,\ldots\}$, where $n$ is the occupation number. On the finite linear span of these vectors, define the annihilation operator $a$ by $a|0\rangle=0$ and $a|n\rangle=\sqrt n|n-1\rangle$ for $n\ge1$, and define the number operator by $N|n\rangle=n|n\rangle$. In this model a single-loss event is represented by $a$ on vectors in its domain; this specifies an error operator, not a normalized channel or a loss rate.

In units with $\hbar=1$, prescribe the diagonal Kerr Hamiltonian $H=\omega N+\frac K2N(N-1)$, with real parameters $\omega,K$, initially on the finite occupation span. Its energy assigned to $|n\rangle$ is $E_n=\omega n+\frac K2n(n-1)$; the adjacent downward transition frequency in this model is $E_n-E_{n-1}=\omega+K(n-1)$ for $n\ge1$. Here Kerr anharmonicity means the occupation-dependent quadratic term; no sign or stability condition on $K$ is assumed.

For a finite-dimensional logical Hilbert space $L$, an oscillator encoding is a linear isometry $V:L\to\mathcal F_s(\mathbb C)$: it preserves inner products and its image is the code subspace. It has finite mean occupation when every normalized $V\psi=\sum_{n\ge0}c_n|n\rangle$ satisfies $\sum_{n\ge0}n|c_n|^2<\infty$. Normalizability alone means only $\sum_{n\ge0}|c_n|^2<\infty$ and does not impose this energy condition. The ideal comb states in the Gottesman–Kitaev–Preskill construction are nonnormalizable; their use as actual encoded states requires an approximation or a separately specified limiting prescription.

Fix the dimensionless position representation by the complex-linear unitary $U:\mathcal F_s(\mathbb C)\to L^2(\mathbb R,dq)$ with $U|n\rangle=h_n$. Here $h_0(q)=\pi^{-1/4}e^{-q^2/2}$ and $h_{n+1}=(q-\partial_q)h_n/\sqrt{2(n+1)}$ for $n\ge0$ are the normalized Hermite functions. Thus $U(\sum_{n\ge0}c_n|n\rangle)=\sum_{n\ge0}c_nh_n$, with convergence in $L^2$. On $L^2$ use $\langle f,g\rangle_2=\int_{\mathbb R}\overline{f(q)}g(q)\,dq$, matching the Fock convention. The Hermite suppliers use the conjugate, first-variable-linear pairing; conjugating it leaves norms and completeness unchanged. On the finite Hermite span, $UaU^{-1}=(q+\partial_q)/\sqrt2$ and $(UNU^{-1})h_n=nh_n$. Only these finite-span differential identities are asserted.

For the GKP qubit family used here, use this dimensionless position coordinate $q\in\mathbb R$ and a spacing $\alpha>0$. Its ideal code is the formal span of $\psi_j(q)=\sum_{s\in\mathbb Z}\delta(q-\alpha(2s+j))$ for $j\in\{0,1\}$, where $\delta(q-x)$ is the unit point mass at $x$. These combs are distributions, not normalizable oscillator vectors. A Gaussian approximation uses

$$\widetilde\psi_j(q)=C_j\sum_{s\in\mathbb Z}\exp\!\left(-\frac{\kappa^2\alpha^2(2s+j)^2}{2}\right)\exp\!\left(-\frac{(q-\alpha(2s+j))^2}{2\Delta^2}\right),\qquad j\in\{0,1\},\quad\Delta,\kappa>0.$$

Here $C_j>0$ normalizes each wavefunction, $\Delta$ specifies peak width, and $\kappa^{-1}$ specifies the width of the envelope weighting the peak centers. The corresponding normalized oscillator vectors are $U^{-1}\widetilde\psi_j$. The two approximate vectors need not be orthogonal; an encoding still must meet the isometry condition above. Approximating an ideal comb refers to narrow peaks and a broad envelope, not Hilbert-norm convergence to a normalizable ideal vector.

A comparison of logical lifetimes as mean occupation varies must specify an encoding family, a time-indexed physical noise family, a decoding or recovery procedure, a logical fidelity functional and a target value. Given these, take the time domain to be $[0,\infty)$, write $F(t)$ for the chosen real-valued logical fidelity and $f_*$ for its real target, and put $S=\{t\in[0,\infty):F(t)<f_*\}$. Define the lifetime by $\tau=\inf S$ when $S\ne\varnothing$, and by $\tau=+\infty$ when $S=\varnothing$; here $+\infty$ denotes the no-crossing convention. The infimum need not belong to $S$, and no continuity or monotonicity of $F$ is required. This contract by itself asserts no monotonic relation between occupation and lifetime.

### Facts & Assumptions

[F1] Under Countable Choice the Fock operators have the stated domains and their finite-particle domain is dense. [physics:lem-qft-fock-ccr-car](https://alphabetamath.cc/physics/item/lem-qft-fock-ccr-car) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F2] The one-mode Fock occupation vectors have the stated lowering action on finite-particle vectors. [physics:lem-qft-fock-one-mode-splitting](https://alphabetamath.cc/physics/item/lem-qft-fock-one-mode-splitting)

[F3] The symmetric Fock space is the square-summable direct sum of its symmetric occupation sectors, and the finite-particle subspace consists of vectors supported in finitely many sectors. [physics:def-qft-fock-and-test-spaces](https://alphabetamath.cc/physics/item/def-qft-fock-and-test-spaces)

[F4] An infimum is a greatest lower bound. Every nonempty subset of $\mathbb R$ bounded below has a real infimum. [math:def-infimum](https://alphabetamath.cc/item/def-infimum) [math:thm-infimum-property](https://alphabetamath.cc/item/thm-infimum-property)

[F5] Under Countable Choice, the recursively defined Hermite functions form a complete orthonormal family in complex $L^2(\mathbb R,dq)$, and $(q+\partial_q)h_n/\sqrt2=\sqrt n\,h_{n-1}$ for $n\ge1$, with $(q+\partial_q)h_0=0$. [physics:thm-nrqm-oscillator-hermite-recurrence](https://alphabetamath.cc/physics/item/thm-nrqm-oscillator-hermite-recurrence) [physics:thm-nrqm-oscillator-hermite-completeness](https://alphabetamath.cc/physics/item/thm-nrqm-oscillator-hermite-completeness)

[F6] For real $p$, $\sum_{n\ge1}n^{-p}$ converges exactly when $p>1$; in particular it converges for $p=2$ and diverges for $p=1$. [math:thm-p-series-real-exponents](https://alphabetamath.cc/item/thm-p-series-real-exponents)

### Justification

**Given:** The stated definitions, hypotheses and cited interfaces.

**Goal:** Justify the stated construction and its scope.

1.1 The finite occupation span is invariant under the displayed ladder and diagonal maps, so the formulas define linear maps there. [given, F1, F2, F3]

2.1 By [F3] the occupation coordinates are square-summable, and by [F5] the Hermite functions are an orthonormal basis of $L^2$. The finite-sum map $\sum_nc_n|n\rangle\mapsto\sum_nc_nh_n$ preserves inner products; square-summable coordinates give Cauchy partial sums, so completeness of $L^2$ extends it uniquely to an isometry $U$ on the Fock space. Every $f\in L^2$ has a Hermite expansion with square-summable coefficients by [F5]; those coefficients define a Fock vector by [F3] mapping to $f$, so $U$ is onto. Conjugating the supplier's pairing gives exactly the second-variable-linear pairing specified above, and preserves this calculation. The lowering relation in [F5] agrees with [F2] on each occupation vector, while the number identity follows from $N|n\rangle=n|n\rangle$; linearity proves both stated identities on the finite Hermite span. [given, F1, F2, F3, F5, step 1.1]

2.2 The assigned energies follow by substitution, and subtracting consecutive values gives the stated gap. The Fock construction supplies the occupation basis and the domain of the loss operator; no unbounded-operator identity is asserted outside the specified domains. For example, the isometry from $\mathbb C$ sending $1$ to a normalized multiple of $\sum_{n\ge1}n^{-1}|n\rangle$ is normalizable but has divergent mean occupation, so the additional finite-occupation requirement is substantive. Indeed, [F6] gives $0<Z:=\sum_{n\ge1}n^{-2}<\infty$, so $v=Z^{-1/2}\sum_{n\ge1}n^{-1}|n\rangle$ has norm one by [F3], whereas its mean occupation is $Z^{-1}\sum_{n\ge1}n^{-1}=+\infty$ by [F6]. Thus $z\mapsto zv$ is the claimed isometry. [F1, F2, F3, F6, step 1.1]

3.1 If $S\ne\varnothing$, it is a subset of $\mathbb R$ bounded below by $0$, so [F4] gives its real infimum. This infimum is nonnegative because $0$ is a lower bound. If $S=\varnothing$, the explicit value $+\infty$ applies instead. Thus the lifetime is defined even when there is no least below-target time, without asserting a crossing or a monotonic relation between occupation and lifetime. [given, F4] ∎

### External input

The GKP combs and Gaussian approximate wavefunctions above are imported from Gottesman, Kitaev and Preskill, Section IV, Eq. (27) with $n=2$, and Section V, Eqs. (30)–(31). The ideal combs are nonnormalizable, whereas the normalized approximate vectors can overlap, as reported there. This construction is an external definition, not a local proof of approximation quality or a lifetime law. The preceding local justification concerns the Fock/Kerr model, the position-representation identification and the lifetime convention only.


## Continuous monitoring versus pulsed syndrome protocols

[Open item](item-def-qec-prereq-continuous-monitoring-interface) · level 0


### Definition

Fix a nonzero finite-dimensional complex inner-product system space $H$ and a finite time horizon $[0,T]$, where $T>0$. A pulsed syndrome protocol specifies separated checking times. At checking time $t_j$, for every earlier outcome history $h$, it specifies a finite-dimensional output space $K_{j,h}$, a finite instrument with outcome maps $\mathcal I_{j,h,a}:\mathcal L(H)\to\mathcal L(K_{j,h})$, and decoder channels $\mathcal D_{j,h,a}:\mathcal L(K_{j,h})\to\mathcal L(H)$ selected using $h$ and the newly observed outcome $a$. Thus the branch operation $\mathcal D_{j,h,a}\circ\mathcal I_{j,h,a}$ returns an operator on $H$, the input space for the next checking operation; any intervening evolution in the protocol must also accept and return operators on $H$. The instrument outcome is called a syndrome record; a zero-probability outcome has no assigned conditional state.

For this interface, a continuous-monitoring protocol specifies an effective conditional evolution together with a time-indexed measurement record. For a specified initial density operator, the model supplies a probability space $(\Omega,\mathcal F,P)$ and, at each $t\in[0,T]$, a measurable record value space $(E_t,\mathcal E_t)$ and a random element $Y_t:(\Omega,\mathcal F)\to(E_t,\mathcal E_t)$. The record may be accumulated continuous-current values or a jump record listing detected event times and their labels up to $t$; the chosen record value spaces and measurable structures are part of the model. Define the available record history by

$$\mathcal G_t=\sigma_\Omega\bigl(\{Y_s^{-1}(B):0\le s\le t,\ B\in\mathcal E_s\}\bigr).$$

This increasing family of sub-sigma-algebras of $\mathcal F$ is the history used here, without completion or right-continuous augmentation. Write $\mathcal D(H)$ for the density operators on $H$ and equip it with the sigma-algebra $\Sigma_D$ generated by preimages of real Borel sets under the real and imaginary matrix-entry maps in a fixed basis of $H$. The conditional-state rule supplies maps $\rho_t:\Omega\to\mathcal D(H)$ measurable from $\mathcal G_t$ to $\Sigma_D$. Feedback, when present, supplies measurable control value spaces $(U_t,\mathcal U_t)$ and maps $u_t:\Omega\to U_t$ measurable from $\mathcal G_t$ to $\mathcal U_t$. These measurability requirements mean that states and controls are adapted to the available record history, rather than to unobserved future outcomes. The model specifies the law, initial state and evolution rule linking these objects, the measured coupling, its strength, and the detection efficiency (the modeled fraction of the monitored signal registered). Any additional regularity or stochastic-integration convention needed by that evolution or feedback law is also a model input. A no-feedback model specifies the absence of feedback. This definition asserts neither existence nor uniqueness of a solution of any proposed evolution rule.

Engineered dissipative stabilization is a separate specification of additional generator terms intended to influence the evolution without requiring a measurement record. In the finite GKSL model these terms are specified by their additional coupling matrices and the resulting dissipators. A model may combine stabilization with either protocol.

A comparison as the pulsed interval tends to zero must separately specify a family of pulsed models, the proposed continuous model, a common set $X$ of comparison objects with assignments $x_\delta,x_{\mathrm c}\in X$ representing the pulsed model at interval $\delta>0$ and the continuous model, a topology $\mathcal T$ on $X$, and an error observable or performance functional with its domain and codomain specified. No convergence of $x_\delta$ to $x_{\mathrm c}$ or equality of performance is part of this definition.

### Facts & Assumptions

[F1] A finite instrument has specified input and output spaces and completely positive outcome maps whose sum preserves trace; the supplier defines outcome weights and conditional states only for positive weights. [math:def-qc-instrument-and-conditional-state](https://alphabetamath.cc/item/def-qc-instrument-and-conditional-state)

[F2] A finite-dimensional quantum channel has specified input and output spaces and is a completely positive, trace-preserving linear map on the full operator space. [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)

[F3] A finite GKSL generator is specified by a Hermitian Hamiltonian and finitely many coupling matrices; its definition alone asserts neither existence nor uniqueness of a propagator. [physics:def-qsm-dt-gksl-definition](https://alphabetamath.cc/physics/item/def-qsm-dt-gksl-definition)

[F4] A probability space carries a measure of total mass one, and a random element is a measurable map to its specified measurable value space. [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure) [math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)

[F5] A density operator on a nonzero finite-dimensional complex inner-product space is a nonnegative endomorphism of trace one. [math:def-qc-density-operator](https://alphabetamath.cc/item/def-qc-density-operator)

[F6] Every family of subsets of a set generates a unique smallest sigma-algebra containing it; hence that sigma-algebra lies in any ambient sigma-algebra containing the generators. [math:thm-generated-sigma-algebra-exists-and-is-minimal](https://alphabetamath.cc/item/thm-generated-sigma-algebra-exists-and-is-minimal)

[F7] A topology on a set contains the empty set and the whole set and is closed under arbitrary unions and finite intersections; the Borel sigma-algebra is generated by its open sets. [math:def-topological-space](https://alphabetamath.cc/item/def-topological-space) [math:def-borel-sigma-algebra](https://alphabetamath.cc/item/def-borel-sigma-algebra)

### External input

Ahn, Doherty and Landahl describe weak-measurement unravellings of a master equation, a conditioned state and measurement record, and record-dependent feedback in their stated Born–Markov setting. Their diffusive example uses one coupling operator. This is an input to the terminology and model distinction above, not a proof that a particular pulsed protocol has a continuous limit.

### Justification

**Given:** The stated model data and the mathematical interfaces in F1–F7. The independent monitoring citation supplies terminology, not a general stochastic existence theorem.

**Goal:** Justify the compatibility and information structure of the specifications without asserting a physical realization or a limiting theorem.

1.1 The output operator space of each $\mathcal I_{j,h,a}$ is exactly the input operator space of $\mathcal D_{j,h,a}$, whose output is $\mathcal L(H)$. Their composition therefore has the required input for the next operation. Decoder selection uses only recorded outcomes, and conditional states retain the instrument's positive-weight convention. [given, F1, F2]

1.2 Every generating set $Y_s^{-1}(B)$ belongs to $\mathcal F$ by record measurability, so F6 gives $\mathcal G_t\subseteq\mathcal F$. For $s\le t$ the generators at $s$ are included among those at $t$, and minimality gives $\mathcal G_s\subseteq\mathcal G_t$. The same generated-sigma-algebra construction defines $\Sigma_D$ on the density-operator set using real Borel coordinate tests. Measurability of the supplied $\rho_t$ and $u_t$ relative to $\mathcal G_t$ is the stipulated information constraint; no conditional-expectation construction or solution theorem is inferred. [given, F4, F5, F6, F7]

2.1 The stabilization clause names additional terms within the finite GKSL definition; it does not claim that an arbitrary added linear map is a physical generator. The comparison data put both represented objects in the same set $X$ with a specified topology, so the proposed limiting claim has a defined setting. Neither this specification nor the monitoring citation proves convergence or equality of performance. [given, F3, F7, step 1.1, step 1.2] ∎


## Finite-preparation residual budget and its remote-boundary limit

[Open item](item-lem-qec-author-4e9f1886ce3e-remote-preparation-limit) · level 0


### Statement

Fix arbitrary finite real constants $\Gamma>0$ and $\tau\geq0$. Fix positive integers $m,n$, a field $\mathbb F\in\{\mathbb R,\mathbb C\}$ with its usual absolute value, and the matrix space $E=M_{m\times n}(\mathbb F)$ with any fixed norm $\|\cdot\|:E\to\mathbb R_{\geq0}$. Let $B(t):E\to E$ be a fixed family of maps, defined for all real $t$; linearity is not required. Let $(t_\nu)_{\nu\geq1}$ be a real sequence with $t_\nu\to-\infty$, and let $\rho_\nu:(t_\nu,\infty)\to E$ be differentiable curves. Derivatives are taken with respect to real time in real coordinates, using the real and imaginary entries when $\mathbb F=\mathbb C$, and are reassembled as matrices in $E$. Suppose $\|\dot\rho_\nu(t)-B(t)[\rho_\nu(t)]\|\leq\Gamma^2\tau+\Gamma\tau/(t-t_\nu)$ for every $t>t_\nu$.

For every fixed finite observation interval $[u,v]$ with $u\leq v$, choose $\nu_0$ such that $t_\nu<u$ for all $\nu\geq\nu_0$. For these indices define $R_\nu=\sup_{t\in[u,v]}\|\dot\rho_\nu(t)-B(t)[\rho_\nu(t)]\|$ and $\delta_\nu=\Gamma\tau/(u-t_\nu)$. Then $0\leq R_\nu\leq\Gamma^2\tau+\delta_\nu$, $\delta_\nu\to0$, and $\limsup_{\nu\geq\nu_0}R_\nu\leq\Gamma^2\tau$. The limit superior is taken on this tail, reindexed as a sequence. This is a limit of error budgets; it asserts no convergence, existence or uniqueness of the matrix curves themselves.

### Facts & Assumptions

[F2] Matrices in $E=M_{m\times n}(\mathbb F)$ have entrywise vector-space operations. [math:def-matrix-space](https://alphabetamath.cc/item/def-matrix-space)

[F3] The chosen norm on $E$ is a nonnegative real-valued function, definite, absolutely homogeneous and subadditive. [math:def-normed-vector-space-over-an-absolutely-valued-field](https://alphabetamath.cc/item/def-normed-vector-space-over-an-absolutely-valued-field)

[F4] The real-coordinate derivative is the limit of the difference quotient; it exists exactly when all real coordinate derivatives exist. Applying this definition to the list of real entries, or real and imaginary entries, specifies the matrix derivative used here. [math:def-vector-valued-derivative-and-integral](https://alphabetamath.cc/item/def-vector-valued-derivative-and-integral)

[F5] The condition $t_\nu\to-\infty$ means that for each real $a$, eventually $t_\nu<a$. Convergence of a real sequence to zero means that for every positive rational $\varepsilon$, eventually its absolute value is less than $\varepsilon$. [math:def-divergence-to-infinity](https://alphabetamath.cc/item/def-divergence-to-infinity) [math:def-real-limit](https://alphabetamath.cc/item/def-real-limit)

[F6] Every nonempty real set bounded above has a real supremum, which is at most each of its upper bounds. [math:def-complete-ordered-field](https://alphabetamath.cc/item/def-complete-ordered-field)

[F7] For a real sequence $(x_k)$, $\limsup_k x_k=\inf_N\sup_{k\geq N}x_k$ in the extended real line. [math:def-limsup-liminf](https://alphabetamath.cc/item/def-limsup-liminf)

### Proof

**Given:** The stated matrix space, norm, maps, curves and pointwise residual bound. **Goal:** Bound the residual uniformly on each fixed observation interval and then bound its tail limit superior.

1.1 By $t_\nu\to-\infty$, there is $\nu_0$ with $t_\nu<u$ for all $\nu\geq\nu_0$. Fix such an index. The derivative and $B(t)[\rho_\nu(t)]$ both lie in $E$, so their difference has a nonnegative real norm. For $t\in[u,v]$, $t-t_\nu\geq u-t_\nu>0$. Since $\Gamma\tau\geq0$, the pointwise residual bound is at most $\Gamma^2\tau+\delta_\nu$. The interval is nonempty, so the set of residual norms is nonempty and bounded above. Its real supremum therefore exists and satisfies $0\leq R_\nu\leq\Gamma^2\tau+\delta_\nu$. [given, F2, F3, F4, F5, F6]

2.1 If $\Gamma\tau=0$, then $\delta_\nu=0$ on the chosen tail. Otherwise, for every positive real $\varepsilon$, divergence to $-\infty$ gives $t_\nu<u-\Gamma\tau/\varepsilon$ eventually. Hence $u-t_\nu>\Gamma\tau/\varepsilon$ and $0\leq\delta_\nu<\varepsilon$ eventually. In either case $\delta_\nu\to0$ by the real-sequence limit definition. [given, F5, step 1.1]

3.1 Fix a positive real $\varepsilon$ and choose $N\geq\nu_0$ so that $\delta_\nu<\varepsilon$ for every $\nu\geq N$. Step 1.1 gives $R_\nu\leq\Gamma^2\tau+\varepsilon$ throughout that tail. Thus $\sup_{\nu\geq N}R_\nu\leq\Gamma^2\tau+\varepsilon$, and the tail-infimum definition gives $\limsup_{\nu\geq\nu_0}R_\nu\leq\Gamma^2\tau+\varepsilon$. This holds for every positive real $\varepsilon$, so $\limsup_{\nu\geq\nu_0}R_\nu\leq\Gamma^2\tau$. The argument imposes no relation between different curves and therefore asserts no convergence of them. [F5, F6, F7, step 1.1, step 2.1] ∎


## Wigner–Eckart with explicit magnetic-label contract

[Open item](item-thm-qec-prereq-wigner-eckart-contract) · level 1


### Statement

Let $H$ and $K$ be finite direct sums of specified spin blocks, and let $(T_q)_{q=-k}^{k}$ be a rank-$k$ spherical tensor family from $H$ to $K$, with integer $k\geq0$. Fix an input copy of $V_J$ and an output copy of $V_{J'}$. Write $A_{m',m,q}$ for the coefficient of $e_{J',m'}$ in the projection of $T_q e_{J,m}$ onto the chosen output copy. Here projection means the coordinate projection in the specified direct sum: it retains the chosen output coordinate and sets every other output coordinate to zero. Use the ordered coupling $V_J\otimes V_k$ and its chosen Clebsch–Gordan coefficients $C^{J',m'}_{J,m;k,q}$. If $J'$ is not among $|J-k|,|J-k|+1,\ldots,J+k$, set these coefficients to zero. There is a complex number $R$, depending on the two copies, $J,J',k$, the tensor family and the coupling convention but independent of $m,m',q$, such that $A_{m',m,q}=R C^{J',m'}_{J,m;k,q}$. This number is a reduced matrix element in this convention. In particular, $A_{m',m,q}=0$ unless $m'=m+q$ and $J'$ is in the displayed coupling list. No parity selection rule or nonvanishing of $R$ is asserted.

### Statement references

[def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[physics:thm-nrqm-orbital-and-spin-tensor-spin-composition](https://alphabetamath.cc/physics/item/thm-nrqm-orbital-and-spin-tensor-spin-composition)

### Facts & Assumptions

[F1] Spin blocks, their ladder operators, the tensor-family equations, and the ordered coupled-basis coefficients are as defined in [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions).

[F2] The ordered product $V_J\otimes V_k$ decomposes as one orthogonal spin-$j$ summand for each $j$ in the coupling list, with the normalized coupled ladder basis described in [physics:thm-nrqm-orbital-and-spin-tensor-spin-composition](https://alphabetamath.cc/physics/item/thm-nrqm-orbital-and-spin-tensor-spin-composition).

### Proof

**Given:** The specified block copies and rank-$k$ tensor family, with the conventions in F1.

**Goal:** Establish the stated factorization and selection rules.

1.1 Write $K=\bigoplus_{\beta\in B}V_{\ell_\beta}$ and let $\beta_0$ index the chosen output copy, so $\ell_{\beta_0}=J'$. Define $P:K\to K$ by $P(g_\beta)_{\beta\in B}=(h_\beta)_{\beta\in B}$, where $h_{\beta_0}=g_{\beta_0}$ and $h_\beta=0$ for $\beta\ne\beta_0$. This linear map satisfies $P^2=P$ and has the chosen output copy as its range. For $a=z,+,-$, both $PJ_a^K g$ and $J_a^K Pg$ have chosen coordinate $J_a^{(J')}g_{\beta_0}$ and every other coordinate zero, by the blockwise definition in F1. Hence $PJ_a^K=J_a^K P$. Identify the range of $P$ with $V_{J'}$ and embed each $e_{J,m}$ in the chosen input coordinate, with zeros elsewhere. Define the linear map $F:V_J\otimes V_k\to V_{J'}$ by $F(e_{J,m}\otimes e_{k,q})=P T_q e_{J,m}$ under this identification. Applying the tensor-family equations and the ladder formulas to each product-basis vector gives $J_a^{(J')}F=FJ_a^{\mathrm{tot}}$ for $a=z,+,-$. [F1, algebra, construct]

1.2 Suppose $J'$ is in the coupling list. The product-basis matrices of $J_z^{\mathrm{tot}}$ and $J_+^{\mathrm{tot}}$ are real. The highest-weight line of the $J'$ summand is therefore spanned by a real vector: the real and imaginary parts of any vector in that line satisfy the same real equations, and at least one is nonzero. Choose a normalized real highest-weight vector temporarily. Its coupled ladder vectors have real product-basis coefficients. The recorded highest-weight vector differs from this temporary choice by one unit scalar $\lambda$, so all recorded coefficients $C^{J',M}_{J,m;k,q}$ equal $\lambda$ times real coefficients and their complex conjugates equal $\lambda^{-2}C^{J',M}_{J,m;k,q}$. [F1, F2, algebra, choose]

2.1 For a coupled highest-weight vector $u_j$, the intertwining equations show that $F u_j$ has $J_z$ weight $j$ and is killed by $J_+$. In the output spin block the ladder formulas show that a nonzero vector killed by $J_+$ has weight $J'$; hence $F u_j=0$ if $j\ne J'$, while for $j=J'$ it is a scalar multiple $a e_{J',J'}$. Applying $J_-$ and the identical normalized ladder formulas gives $Fv_{J',M}=a e_{J',M}$ for every $M$, and $F$ vanishes on all other coupled summands. If $J'$ is absent from the coupling list, $F=0$. [F1, F2, step 1.1]

3.1 Expanding a product-basis vector in the orthonormal coupled basis and applying step 2.1 gives $A_{m',m,q}=a\overline{C^{J',m'}_{J,m;k,q}}=a\lambda^{-2}C^{J',m'}_{J,m;k,q}$. Set $R=a\lambda^{-2}$; if $J'$ is absent set $R=0$. The total $J_z$ eigenvalue of $v_{J',m'}$ is $m'$, whereas that of $e_{J,m}\otimes e_{k,q}$ is $m+q$, so its coefficient is zero unless these weights agree. The coupling list gives the other selection rule, and $R$ can be zero, for example for the zero tensor family. This proves the contract. [F1, F2, step 2.1, step 1.2, algebra] ∎


## Rotational scalars on multiplicity-resolved spin blocks

[Open item](item-lem-qec-prereq-isotropic-scalar-block-contract) · level 1


### Statement

Let $H$ be a finite direct sum over $\mathbb C$ of spin blocks $V_j$, with $n_j$ explicitly indexed copies of each occurring spin $j$. Write $e_{j,a,m}$ for magnetic label $m=-j,-j+1,\ldots,j$ in copy $a=1,\ldots,n_j$, and let $J_x,J_y,J_z,J_\pm$ act by the specified spin matrices on every copy. Give $H$ the sum of the block inner products, so these basis vectors are orthonormal, and equip it with the induced norm $\|\sum_{j,a,m}z_{j,a,m}e_{j,a,m}\|=(\sum_{j,a,m}|z_{j,a,m}|^2)^{1/2}$. Define the axis rotations $U_k(t)=\exp(-itJ_k)$ for $k=x,y,z$ and real $t$ by the operator exponential series.

If a complex-linear operator $T:H\to H$ commutes with all these axis rotations, then there are unique complex matrices $A^{(j)}=(A^{(j)}_{ba})_{b,a=1}^{n_j}$ such that $T e_{j,a,m}=\sum_{b=1}^{n_j}A^{(j)}_{ba}e_{j,b,m}$ for every $j,a,m$. Thus $T$ is the identity in the magnetic index and may mix copies of equal spin; in particular, on a spin occurring once it is a scalar multiple of the identity.

More generally, let $D_1,D_2,D_3,F:H\to H$ be complex-linear maps, and suppose a family of invertible complex-linear maps $U:H\to H$ includes all the axis rotations. For each $U$ suppose there is a real orthogonal $3\times3$ matrix $R$ such that $UD_iU^{-1}=\sum_{k=1}^3 R_{ki}D_k$ for $i=1,2,3$. If $F$ commutes with every such $U$, then $T=\sum_{i=1}^3D_iFD_i$ commutes with every such $U$ and has the block form above. An isotropic coefficient $\delta_{ij}$ in a contraction alone does not imply the covariance and commutation hypotheses just stated.

### Statement references

[def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[math:cor-inner-product-induces-a-norm](https://alphabetamath.cc/item/cor-inner-product-induces-a-norm)

[math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)

[math:def-linear-map](https://alphabetamath.cc/item/def-linear-map)

[physics:def-cm-special-orthogonal-group](https://alphabetamath.cc/physics/item/def-cm-special-orthogonal-group)

### Facts & Assumptions

**Given:** The finite indexed complex direct sum with its displayed norm, spin matrices and complex-linear operator $T:H\to H$, or the complex-linear maps $D_i,F:H\to H$ and family of invertible complex-linear maps $U:H\to H$, under the hypotheses of the Statement.

**Goal:** Establish the displayed block form and the conditional contraction conclusion.

[F1] On each copy $J_z e_{j,a,m}=m e_{j,a,m}$ and $J_-e_{j,a,m}=\sqrt{(j+m)(j-m+1)}e_{j,a,m-1}$, with the endpoint vector zero. The coefficient is nonzero for $m>-j$. The Casimir $C=J_x^2+J_y^2+J_z^2$ acts on that copy as $j(j+1)I$. [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions) [physics:prop-nrqm-orbital-and-spin-finite-spin-matrices](https://alphabetamath.cc/physics/item/prop-nrqm-orbital-and-spin-finite-spin-matrices)

[F2] The spin convention supplies the direct-sum complex inner product. Its induced length, displayed in the Statement, is a norm. Order the finite basis by $j$, then $a$, then $m$; the finite-dimensional completeness corollary therefore makes $H$ a complex Banach space. The boundedness corollary, with domain and codomain both $H$, makes every complex-linear endomorphism of $H$ bounded, including $T$ and $-iJ_k$. [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions) [math:cor-inner-product-induces-a-norm](https://alphabetamath.cc/item/cor-inner-product-induces-a-norm) [math:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/item/cor-finite-dimensional-normed-spaces-are-banach) [math:cor-linear-maps-with-finite-dimensional-domain-are-bounded](https://alphabetamath.cc/item/cor-linear-maps-with-finite-dimensional-domain-are-bounded)

[F3] For a bounded operator on a complex Banach space, the exponential series is norm differentiable and $(\exp(tA)-I)/t\to A$ as real $t\to0$. It defines invertible operators with $\exp(tA)^{-1}=\exp(-tA)$. By [F2] this applies to $A=-iJ_k$ on $H$. [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)

[F4] For bounded endomorphisms of $H$, use the induced operator norm $\|S\|_{\mathrm{op}}=\sup_{\|v\|\le1}\|Sv\|$. It is a norm, and composition satisfies $\|SB\|_{\mathrm{op}}\le\|S\|_{\mathrm{op}}\|B\|_{\mathrm{op}}$. These facts permit multiplication by a fixed bounded map in an operator-norm limit. [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm) [math:lem-operator-norm-is-a-norm](https://alphabetamath.cc/item/lem-operator-norm-is-a-norm) [math:lem-composition-operator-norm-inequality](https://alphabetamath.cc/item/lem-composition-operator-norm-inequality)

[F5] All maps in the contraction act complex-linearly from $H$ to $H$. The inverse of an invertible complex-linear map is complex-linear: apply that map to $aU^{-1}x+bU^{-1}y$ and use its injectivity. Sums and compositions of these maps are complex-linear, and composition distributes over finite linear combinations by the defining linearity equation. [math:def-linear-map](https://alphabetamath.cc/item/def-linear-map)

[F6] For a real $3\times3$ matrix, orthogonality means $R^{\mathsf T}R=I_3$. The orthogonal-group supplier also derives $R^{-1}=R^{\mathsf T}$ and $RR^{\mathsf T}=I_3$; in entries the latter equation is $\sum_{i=1}^3R_{ki}R_{\ell i}=\delta_{k\ell}$, where $\delta_{k\ell}=1$ for $k=\ell$ and $0$ otherwise. [physics:def-cm-special-orthogonal-group](https://alphabetamath.cc/physics/item/def-cm-special-orthogonal-group)

### Proof

1.1 Put $A=-iJ_k$ and $Q_k(t)=(U_k(t)-I)/t$ for $t\ne0$. Since $T$ commutes with $U_k(t)$, it commutes with $Q_k(t)$. By [F2] $T$ is bounded, and by [F3] $Q_k(t)\to A$ in operator norm. Thus $\|TA-AT\|_{\mathrm{op}}=\|T(A-Q_k(t))-(A-Q_k(t))T\|_{\mathrm{op}}\le2\|T\|_{\mathrm{op}}\|A-Q_k(t)\|_{\mathrm{op}}\to0$ by [F4]. Hence $[T,J_k]=0$ for $k=x,y,z$. Consequently $T$ commutes with $J_-=J_x-iJ_y$ and with $C$. [given, F2, F3, F4, algebra]

2.1 For a basis vector $e_{j,a,m}$, the equation $CTe_{j,a,m}=j(j+1)Te_{j,a,m}$ and the direct-sum basis expansion show that only spin labels $\ell$ satisfying $\ell(\ell+1)=j(j+1)$ can occur. As $j,\ell\ge0$, this equality implies $(\ell-j)(\ell+j+1)=0$, hence $\ell=j$. Commutation with $J_z$ similarly leaves only magnetic label $m$. Thus $Te_{j,a,m}=\sum_b c_{ba}^{(j,m)}e_{j,b,m}$. [F1, step 1.1, algebra]

3.1 For $m>-j$, applying $TJ_-=J_-T$ to $e_{j,a,m}$ and using the same nonzero ladder coefficient in every copy gives $c_{ba}^{(j,m-1)}=c_{ba}^{(j,m)}$ for all $a,b$. Iterating through the finite ladder, including the single-label case $j=0$, makes these coefficients independent of $m$. Their values are unique because the displayed vectors form a basis. For $n_j=1$ the resulting matrix is one complex scalar. [F1, step 2.1, algebra]

4.1 Under the additional contraction hypotheses, [F5] makes $T$ a complex-linear endomorphism of $H$. Conjugation distributes over the finite sum and compositions by [F5]; using $UFU^{-1}=F$ gives $UTU^{-1}=\sum_{i,k,\ell}R_{ki}R_{\ell i}D_kFD_\ell=\sum_kD_kFD_k=T$, since [F6] gives $\sum_iR_{ki}R_{\ell i}=\delta_{k\ell}$. The axis rotations belong to the family, so step 3.1 applies. The coefficient $\delta_{ij}$ by itself specifies only the summation: for example, take $D_1=J_z$, $D_2=D_3=0$, and $F=I$ on a spin-one block. The resulting $T=J_z^2$ has unequal eigenvalues on the magnetic basis and hence is not scalar, showing why covariance cannot be omitted. [given, F1, F5, F6, step 3.1, algebra] ∎


## Downward dipole coefficient normalization contract

[Open item](item-lem-qec-prereq-dipole-strength-sum-contract) · level 1


### Statement

Let $J\geq1$ be an integer. In the ordered coupling $V_1\otimes V_J$, let $c_{m,q}=C^{J-1,m+q}_{1,q;J,m}$ for $m=-J,\ldots,J$ and $q=-1,0,1$, with $c_{m,q}=0$ when $|m+q|>J-1$. The coefficients are those of the normalized coupled basis, with any allowed common phase choice for the spin-$(J-1)$ summand. Then $\sum_{q=-1}^1|c_{m,q}|^2=(2J-1)/(2J+1)$ for every $m$. Equivalently, defining $T_q:V_J\to V_{J-1}$ by $T_q e_{J,m}=c_{m,q}e_{J-1,m+q}$, with an out-of-range output interpreted as zero, gives $\sum_{q=-1}^1T_q^\dagger T_q=((2J-1)/(2J+1))I_{V_J}$. The $J=0$ block is excluded.

### Facts & Assumptions

**Given:** An integer $J\geq1$, the ordered coupling $V_1\otimes V_J$, and the coefficients and maps in the Statement.

**Goal:** Prove the coefficient sum and the equivalent operator identity.

[F1] The spin blocks have orthonormal magnetic bases, with $J_z^{(J)}e_{J,m}=m e_{J,m}$ and $J_+^{(J)}e_{J,m}=\sqrt{(J-m)(J+m+1)}e_{J,m+1}$. The coupled coefficients are the product-basis coordinates of the normalized coupled vectors; their coupling order and common phase are specified in the Statement. [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[F2] The ordered product $V_1\otimes V_J$ is an orthogonal direct sum of invariant spin blocks. Its spin-$(J-1)$ block has dimension $2J-1$ and an orthonormal basis $v_M$, $M=-(J-1),\ldots,J-1$, of total $J_z$ eigenvectors of eigenvalue $M$. The total spin operators are $J_a^{(1)}\otimes I+I\otimes J_a^{(J)}$. [physics:thm-nrqm-orbital-and-spin-tensor-spin-composition](https://alphabetamath.cc/physics/item/thm-nrqm-orbital-and-spin-tensor-spin-composition)

[F3] All matrix entries and products are in the specified orthonormal bases. For a map $T:H\to K$ between these finite complex coordinate spaces, $T^\dagger:K\to H$ is its adjoint, satisfying $\langle Tx,y\rangle_K=\langle x,T^\dagger y\rangle_H$ for the inner products linear in the first argument; its matrix is the conjugate transpose. The finite-coordinate construction in the supplier verifies this identity and supplies existence. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F4] If $W$ is a subspace of a finite-dimensional inner-product space with orthogonal decomposition $W\oplus W^\perp$, its orthogonal projection takes $w+z$ to $w$ for $w\in W$ and $z\in W^\perp$. We regard this as an endomorphism of the ambient space by the inclusion of $W$. [math:def-orthogonal-projection](https://alphabetamath.cc/item/def-orthogonal-projection)

[F5] The trace of a square matrix is the sum of its diagonal entries. Every trace below is taken in the specified magnetic or product basis. [math:def-trace-of-a-square-matrix](https://alphabetamath.cc/item/def-trace-of-a-square-matrix)

### Proof

1.1 Let $W$ be the spin-$(J-1)$ block and let $P$ be its orthogonal projection, viewed as an endomorphism of $V_1\otimes V_J$. Thus $P(w+z)=w$ for $w\in W$ and $z\in W^\perp$. The block and its orthogonal complement are invariant under each self-adjoint total operator, so $P$ commutes with every total operator. Indeed, if $S$ is such an operator, both $PS(w+z)$ and $SP(w+z)$ equal $Sw$. Since $(v_M)_M$ is an orthonormal basis of $W$, taking inner products with each $v_M$ gives $Px=\sum_M\langle x,v_M\rangle v_M$. Define $A$ on $V_J$ by $A_{mn}=\sum_{q=-1}^1P_{(q,m),(q,n)}$ in the product basis. These finite matrix entries specify a linear endomorphism. [F1, F2, F3, F4, algebra]

2.1 Fix $a\in\{x,y,z\}$, and write $B=J_a^{(1)}$ and $D=J_a^{(J)}$. Expanding the first-factor contribution gives $\sum_q[P,B\otimes I]_{(q,m),(q,n)}=\sum_{q,r}(P_{(q,m),(r,n)}B_{rq}-B_{qr}P_{(r,m),(q,n)})=0$, because exchanging the finite indices $q,r$ in the second sum makes it identical to the first. The other contribution is $\sum_q[P,I\otimes D]_{(q,m),(q,n)}=\sum_k(A_{mk}D_{kn}-D_{mk}A_{kn})=[A,D]_{mn}$. Step 1.1 gives $[P,B\otimes I+I\otimes D]=0$, so $[A,J_a^{(J)}]=0$ for each $a$. [step 1.1, F1, F2, F3, algebra]

3.1 Since $A$ commutes with $J_z^{(J)}$, its entries between distinct magnetic labels vanish. Write $Ae_{J,m}=a_m e_{J,m}$. Commutation with $J_+^{(J)}=J_x^{(J)}+iJ_y^{(J)}$ and its nonzero ladder coefficient for $-J\leq m<J$ give $a_{m+1}=a_m$. Thus $A=aI_{V_J}$. Put $d_{M;q,m}=\langle v_M,e_{1,q}\otimes e_{J,m}\rangle$, the product-basis coordinate of $v_M$. The projection formula from step 1.1 gives $P_{(q,m),(q,m)}=\sum_M|d_{M;q,m}|^2$. Consequently the diagonal-sum definition of trace gives $\operatorname{tr}A=\sum_{m,q}P_{(q,m),(q,m)}=\operatorname{tr}P=\sum_M\sum_{q,m}|d_{M;q,m}|^2=\sum_M1=2J-1$, using normalization of each $v_M$. Also $\operatorname{tr}A=(2J+1)a$, hence $a=(2J-1)/(2J+1)$. No change of basis for the trace is required. [step 1.1, step 2.1, F1, F2, F3, F5, algebra]

4.1 Since $v_M$ has total magnetic label $M$, its product-basis coordinate $d_{M;q,m}$ vanishes unless $M=m+q$. Thus $P_{(q,m),(q,m)}$ is $|C^{J-1,m+q}_{1,q;J,m}|^2$ when $|m+q|\leq J-1$ and is zero otherwise. Therefore $\sum_q|c_{m,q}|^2=A_{mm}=(2J-1)/(2J+1)$. By the conjugate-transpose formula, $(T_q^\dagger T_q)_{mn}=\sum_{\ell=-(J-1)}^{J-1}\overline{(T_q)_{\ell m}}(T_q)_{\ell n}$. For fixed $q$, distinct $m$ give distinct output labels $m+q$, so this matrix is diagonal with entry $|c_{m,q}|^2$ at $m$; summing proves the operator identity. A common phase change of the coupled basis does not affect either identity. [step 3.1, F1, F2, F3, algebra] ∎


## Order-one absorption–emission tensor error span

[Open item](item-def-qec-prereq-ae-error-span-contract) · level 1


### Definition

Fix a spin label $J$ and its finite spin block $V_J$, with magnetic basis and spherical tensor families as in [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions). Choose a finite set $S$ of spin labels containing $J$, with $|J'-J|\leq 1$ for every $J'\in S$. Let $H=\bigoplus_{J'\in S}V_{J'}$, using one labelled copy of each block, and let $\iota_{J'}:V_{J'}\to H$ be its inclusion and $\pi_J:H\to V_J$ the orthogonal projection onto the input block.

For each $J'\in S$ and $k\in\{0,1\}$, take every component $T_q:V_J\to V_{J'}$, $-k\leq q\leq k$, of every rank-$k$ spherical tensor family in the cited convention. The **order-one absorption–emission tensor error span** for these selected blocks is the complex linear span in $\mathcal L(H)$ of $I_H$ and all $\iota_{J'}T_q\pi_J$. The selected target blocks and the tensor-family equations are part of the contract. Tensor rank here means $k$, not matrix rank. A component is one coherent linear map over its magnetic labels; an individually resolved matrix unit $|J',m'\rangle\langle J,m|$ is a distinct operator and is included only if it actually lies in the stated span.

Let $V:H_L\to V_J$ be an isometry from a nonzero finite-dimensional logical space and regard it as a map into $H$. Its code projector is $P=VV^*$ on $H$, as in [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel). The code **detects** the span when, for every $E$ in it, $PEP=c_E P$ for some complex scalar $c_E$. It satisfies the **pair-product Knill–Laflamme correction condition** for the span when, for every $E,F$ in it, $PE^*FP=c_{E,F}P$ for some complex scalar $c_{E,F}$. These conditions concern the complete selected span; no particular channel or physical recovery is specified by this definition.

### Justification

The tensor supplier defines each $T_q$ as a linear map between the named finite blocks, so $\iota_{J'}T_q\pi_J$ is an endomorphism of $H$. The complex span of these endomorphisms and $I_H$ is therefore a well-defined subspace of the finite-dimensional space $\mathcal L(H)$, even if some tensor families are zero. The code-restriction supplier gives the orthogonal projector $P$ from the isometry. Consequently $PEP$ and $PE^*FP$ are endomorphisms of $H$, and both displayed scalar-multiple conditions are well typed. Checking them on any spanning family suffices: the first condition is linear in $E$, and the second is conjugate-linear in $E$ and linear in $F$. [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions) [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

### Source notes

The cited paper gives the pair-product and single-operator conditions and coherent dipole operators for its fixed-$J$ model. The general finite choice of target blocks and the span convention above make the scope explicit for this collection; they do not assert that every such operator is a realized physical error.


## Inner and outer codes and resource-overhead data

[Open item](item-def-qec-prereq-inner-outer-resource-interface) · level 1


### Definition

Let $H_L,H_P,H_O$ be nonzero finite-dimensional complex inner-product spaces, each with a specified ordered orthonormal basis. Write $\mathcal L(H)$ for the complex-linear endomorphisms of $H$, and use the inner product linear in its first argument. For vectors $u,v$, write $|u\rangle\langle v|$ for the operator $x\mapsto\langle x,v\rangle u$; ket basis labels refer to the specified bases. An **inner code** consists of a linear isometry $V:H_L\to H_P$; regard $H_P$ as a one-factor physical register unless a finer ordered finite nonempty register is specified. Fix quantum channels $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ and $\mathcal R:\mathcal L(H_O)\to\mathcal L(H_L)$, describing one noise cycle and its decoder, and a positive cycle duration $\tau$. A quantum channel is a complex-linear, completely positive, trace-preserving map. The **decoded inner channel** is $\mathcal E=\mathcal R\circ\mathcal N\circ\operatorname{Ad}_V$, where $\operatorname{Ad}_V(Y)=VYV^*$.

An **outer code** is a linear isometry $W:K_L\to B$, where $K_L$ is a nonzero finite-dimensional complex inner-product space and $B=\bigotimes_{b=1}^n K_b$ is an ordered register with $n\ge1$ and nonzero finite-dimensional complex inner-product factors, all with specified ordered orthonormal bases. For every outer factor implemented by an inner block, specify its inner-code data and a unitary identification $J_b:H_{L,b}\to K_b$. The effective channel on that factor is $\mathcal E_b=\operatorname{Ad}_{J_b}\circ\mathcal E^{\mathrm{inner}}_b\circ\operatorname{Ad}_{J_b^*}$. Thus the decoded channel of an inner block is the one-cycle noise interface supplied to its outer physical factor.

For one cycle on the full register, specify a joint channel $\Phi:\mathcal L(B)\to\mathcal L(B)$. Write $\operatorname{Tr}_{\ne b}$ for the partial trace over all factors except $K_b$, using their specified order and wire permutations. A **local marginal channel** $\Phi_b:\mathcal L(K_b)\to\mathcal L(K_b)$ exists in the input-independent sense used here only if $\operatorname{Tr}_{\ne b}\Phi(Y)=\Phi_b(\operatorname{Tr}_{\ne b}Y)$ for every $Y\in\mathcal L(B)$. When local marginals exist, their consistency with the inner-block interface is an additional requirement $\Phi_b=\mathcal E_b$ on implemented factors. **Cross-block independence** for this joint channel means that channels $\Phi_b$ exist with $\Phi=\bigotimes_b\Phi_b$; failure of this factorization is called **cross-block correlation** here. An arbitrary joint channel need not have input-independent local marginals. This definition concerns the joint channel for the declared cycle or protocol; later cycles also require the memory data below.

For a finite horizon of $N\ge1$ cycles, a **sequential noise process** is specified by nonzero finite-dimensional complex inner-product memory spaces $M_0,\ldots,M_N$ with ordered orthonormal bases, a unit vector $m_0\in M_0$, and channels $\mathcal T_t:\mathcal L(M_{t-1}\otimes B)\to\mathcal L(M_t\otimes B)$ for $1\le t\le N$. Initialize memory by the isometry $v\mapsto m_0\otimes v$, apply the channels in time order, and trace out the final memory. Memory can include a shared environment. The process also specifies the response to interventions: for any nonzero finite-dimensional complex inner-product ancillary space $A$ with a specified ordered orthonormal basis, carry its identity channel through each $\mathcal T_t$, allow an arbitrary channel on $B\otimes A$ between successive cycles, and trace out memory at any prefix of the sequence. **Temporal independence** means that there exist fixed channels $\Lambda_1,\ldots,\Lambda_N$ on $B$ whose memory-free sequence gives the same reduced output map at every prefix for every $A$ and every such intervention sequence. Failure of this equality is called **temporal correlation** here. A one-block, one-cycle channel does not determine either the joint channel or this intervention response.

A **resource-overhead record** fixes a target logical task, an error criterion and target tolerance, an architecture and noise process, and a counting convention. It records the physical degrees of freedom, operation counts, and elapsed time used to perform that task under those choices; any ratio called an overhead must also state its reference task and a positive reference resource count. An inner-code comparison fixes the encoding, noise, decoder, cycle duration, and the joint and sequential noise data along with the task and counting convention.

For a one-cycle error comparison, write $\mathsf C(H_L)$ for the set of channels on $\mathcal L(H_L)$. Explicitly supply a reference channel $\Psi\in\mathsf C(H_L)$ and a formula for an error functional $\epsilon:\mathsf C(H_L)\times\mathsf C(H_L)\to[0,1]$ with $\epsilon(\Theta,\Theta)=0$ for every $\Theta\in\mathsf C(H_L)$. The value compared is $\epsilon(\mathcal E,\Psi)$, using the same functional and reference for both channels on the same logical space, or after a declared unitary identification. If this value is called **one-cycle infidelity**, the record must specify its fidelity convention and the resulting formula for $\epsilon$; no particular fidelity is implicit. Lower one-cycle infidelity means a smaller such value. It is one datum in a resource comparison and by itself specifies no quantitative overhead law.

### Facts & Assumptions

[F1] The restricted logical-channel interface defines the decoded channel as the composition of encoding, noise, and decoder, and establishes that this composition is a channel under its nonzero finite-dimensional complex inner-product-space hypotheses. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[F2] A finite-dimensional quantum channel is a complex-linear, completely positive, trace-preserving map on operator spaces. [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)

[F3] A quantum code is an isometric encoding of a nonzero finite-dimensional logical space into an ordered finite nonempty physical register. [math:def-qc-quantum-code-isometry-and-code-projector](https://alphabetamath.cc/item/def-qc-quantum-code-isometry-and-code-projector)

[F4] Ordered tensor registers have the product inner product, product orthonormal bases and specified wire permutations. [math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation)

[F5] Tracing out a first tensor factor sums its diagonal matrix blocks and preserves the order of the remaining factors; other factors can be traced out after the specified wire permutation. [math:def-qc-first-factor-partial-trace](https://alphabetamath.cc/item/def-qc-first-factor-partial-trace)

[F6] In finite dimensions a map is a quantum channel exactly when it has a finite Kraus expression $Y\mapsto\sum_a L_aYL_a^*$ with $\sum_a L_a^*L_a=I$. [math:thm-qc-finite-kraus-choi-stinespring-equivalence](https://alphabetamath.cc/item/thm-qc-finite-kraus-choi-stinespring-equivalence)

[F7] Tensor products of operator matrix units form a basis of the endomorphisms of a tensor register, so a linear identity checked on elementary operator tensors holds everywhere. [math:lem-qc-tensor-products-of-operator-matrix-units-form-a-basis](https://alphabetamath.cc/item/lem-qc-tensor-products-of-operator-matrix-units-form-a-basis)

[F8] For finite ordered families of finite-dimensional complex vector spaces and linear maps $T_k:H_k\to K_k$, the tensor map is the unique linear map satisfying $(\bigotimes_k T_k)(\bigotimes_k x_k)=\bigotimes_k T_kx_k$. [math:def-qc-tensor-map](https://alphabetamath.cc/item/def-qc-tensor-map)

### Justification

**Given:** The spaces, bases, isometries, channels, memory data, error functional and resource conventions in the Definition.

**Goal:** Verify typing and show explicitly why one-cycle channels do not determine spatial or temporal correlations or an overhead law.

1.1 The hypotheses of [F1] now apply to each inner block, so its decoded map is a channel. Unitary identifications and their inverses are isometries, hence their conjugation maps are channels by [F1]. Their composition gives the displayed channel on $K_b$. The outer encoding satisfies [F3] because its logical space is nonzero and its physical register is finite and nonempty with the structure in [F4]. [given, F1, F2, F3, F4]

1.2 The local-marginal equality is a stated compatibility condition, not a conclusion for arbitrary joint channels. By [F8], tensor products of linear maps act factorwise on elementary tensors. For finite spaces $H,K$, [F7] identifies $\mathcal L(H)\otimes\mathcal L(K)$ with $\mathcal L(H\otimes K)$ by sending tensors of matrix units to the corresponding tensor operators: these are bases on both sides, so this map is a linear isomorphism. Under this identification, $\Phi\otimes\Psi$ is the unique linear map satisfying $(\Phi\otimes\Psi)(A\otimes C)=\Phi(A)\otimes\Psi(C)$; iterate this construction for more factors, including identity maps on ancillas. All process operations are channels: tensor products of channels with Kraus families $(L_a)$ and $(Q_c)$ have Kraus family $(L_a\otimes Q_c)$, whose normalization follows from $\sum_{a,c}(L_a^*L_a)\otimes(Q_c^*Q_c)=I\otimes I$. This Kraus map agrees with the tensor channel on elementary operator tensors by [F8], hence everywhere by [F7]. The adjoint and multiplication rules used here follow by evaluating on product vectors with [F4] and [F8]. Tracing out $M$ has Kraus maps $C_s(m\otimes v)=\langle m,e_s\rangle v$ in its supplied basis; [F5] gives the trace formula and $\sum_s C_s^*C_s=I$. Memory initialization is conjugation by an isometry. By [F6] these maps, their ancillary extensions and the declared interventions are channels; composition is a channel by [F1]. The resulting reduced maps are therefore well-typed at every prefix. [given, F1, F4, F5, F6, F7, F8]

2.1 For a spatial example let $K_1=K_2=\mathbb C^2$, let $S|0\rangle=|1\rangle$ and $S|1\rangle=|0\rangle$, and set $D(Y)=(Y+SYS^*)/2$. Define $\Phi_{\mathrm{ind}}=D\otimes D$ and $\Phi_{\mathrm{corr}}(Y)=(Y+(S\otimes S)Y(S\otimes S)^*)/2$. The Kraus families $I/\sqrt2,S/\sqrt2$ for $D$, and $I\otimes I/\sqrt2,S\otimes S/\sqrt2$ for $\Phi_{\mathrm{corr}}$, are normalized, so these are channels by [F6] and step 1.2. On $A\otimes C$, tracing out the second factor gives $D(A)\operatorname{tr}C$ for both joint channels, because conjugation by $S$ permutes the diagonal entries and preserves trace; the first-factor calculation is identical. By [F5] and [F7], both have local channel $D$ on all input operators, including entangled inputs. Yet on $|00\rangle\langle00|$, the independent output assigns diagonal weight $1/4$ to each of $00,01,10,11$, whereas the correlated output assigns weight $1/2$ to each of $00,11$ and zero to the others. Thus the channels are distinct with the same local marginals. [F4, F5, F6, F7, step 1.2, construct, algebra]

3.1 For two temporal uses of $B=\mathbb C^2$, initialize a memory qubit in $m_0=(|0\rangle+|1\rangle)/\sqrt2$ and in each cycle apply the unitary $U=|0\rangle\langle0|\otimes I+|1\rangle\langle1|\otimes S$ on memory and system. It is unitary since its two orthogonal memory sectors carry the unitaries $I,S$. Tracing the memory after one use gives $D$ by [F5]. For an initial system operator of trace one, replacing the system input with a fresh input before the second use also gives $D$: the memory's diagonal weights remain $1/2,1/2$, and tracing memory removes its off-diagonal blocks. With no intervention, two uses give the identity channel since $U^2=I$. Compare the memory-free sequence $D,D$: it has the same fresh-input one-use channels, but its two-use channel is $D\circ D=D$, which differs from the identity on $|0\rangle\langle0|$. Replacement by a unit vector $\psi$ is the channel $Y\mapsto\operatorname{tr}(Y)|\psi\rangle\langle\psi|$, with normalized Kraus maps $|\psi\rangle\langle j|$. Varying $\psi$ determines a linear map on all operators, since the projectors onto basis vectors and their real and imaginary two-vector superpositions span the matrix units. The shared-memory process cannot be temporal-independent as defined: its first prefix forces $\Lambda_1=D$, and fresh-input replacement interventions force $\Lambda_2=D$, contradicting the no-intervention output. This proves temporal nonuniqueness within the declared process type. [F1, F4, F5, F6, F7, step 1.2, step 2.1, construct, algebra]

4.1 The error functional and reference are separately supplied data with the domain of the decoded channel from step 1.1; a smaller value is meaningful only under that fixed choice. The resource record likewise separately supplies task, tolerance, architecture, process and counts, and requires a positive denominator for any ratio. None of these definitions supplies a numerical relation from one error value to resource counts. Steps 2.1 and 3.1 explicitly show why marginal one-cycle data cannot replace the joint and sequential process specifications. No physical realization or empirical performance follows from these mathematical constructions. [given, F1, F2, F3, step 1.1, step 2.1, step 3.1] ∎


## Tensor-family components equal coherent Clebsch–Gordan transition maps

[Open item](item-lem-author-11a9fe6cf386-tensor-cg-identification) · level 1


### Statement

For $J=4$, $k\in\{0,1\}$ and $J'\in\{3,4,5\}$, let $T_q:V_4\to V_{J'}$ be a rank-$k$ spherical tensor family. Write $S_0=\{4\}$ and $S_1=\{3,4,5\}$ for the permitted spins in $V_4\otimes V_k$. If $J'\notin S_k$, then $T_q=0$ for every $q$.

If $J'\in S_k$, define linear maps $A_q:V_4\to V_{J'}$ on every input basis vector, for $m=-4,-3,\ldots,4$ and $q=-k,-k+1,\ldots,k$, by

$$A_qe_{4,m}=\begin{cases}C^{J',m+q}_{4,m;k,q}e_{J',m+q},& |m+q|\le J',\\0,& |m+q|>J'.\end{cases}$$

The coefficient in the first branch uses the ordered coupled-basis convention; the second branch is the zero vector of $V_{J'}$ and uses no out-of-range coefficient or basis vector. There is a single scalar $\lambda\in\mathbb C$ such that $T_q=\lambda A_q$ for all $q$. Replacing the chosen highest-weight vector of the $J'$ summand by $e^{i\theta}$ times itself multiplies every $A_q$ by $e^{i\theta}$ and replaces $\lambda$ by $e^{-i\theta}\lambda$.

### Facts & Assumptions

[F1] Finite spin matrices, ordered coupled bases and tensor-family equations are fixed. [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[F2] The ordered product splits into one copy of each permitted spin, with the normalized ladder bases. [physics:thm-nrqm-orbital-and-spin-tensor-spin-composition](https://alphabetamath.cc/physics/item/thm-nrqm-orbital-and-spin-tensor-spin-composition)

### Proof

**Given:** The finite objects and conventions in the Statement.

**Goal:** Establish the stated identities and implications.

1.1 Define a linear map $\Phi:V_4\otimes V_k\to V_{J'}$ by $\Phi(x\otimes e_{k,q})=T_qx$. The tensor-family equations say exactly that $J_a^{(J')}\Phi=\Phi J_a^{\rm tot}$ for $a=z,+,-$: the second tensor-factor ladder coefficient is the coefficient appearing in the tensor-family equation. Thus $\Phi$ also intertwines the Casimir, the sum of squares of the three Cartesian generators. [F1, algebra]

2.1 On the spin-$j$ summand from [F2], Casimir intertwining gives $(J'(J'+1)-j(j+1))\Phi=0$. Distinct nonnegative spin labels have distinct Casimir values, so only the $j=J'$ summand can survive. On that summand, weight intertwining maps its unit top vector to $c e_{J',J'}$; intertwining the lowering operator and using equal ladder normalization maps every coupled basis vector to $c e_{J',M}$. This proves uniqueness up to $c$, and zero when the summand is absent. [F1, F2, step 1.1, algebra]

3.1 Suppose $J'\in S_k$ and $M=m+q$ lies in $[-J',J']$. In the orthonormal coupled basis, the coordinate of $e_{4,m}\otimes e_{k,q}$ along $v_{J',M}$ is $\overline{C^{J',M}_{4,m;k,q}}$. Other weights have zero coordinate by weight orthogonality. The highest-weight equations at weight $J'$ have real matrices and a one-dimensional complex solution space by [F2], so they admit a real unit solution: the real or imaginary part of any nonzero solution is a nonzero real solution and can be normalized. The lowering matrices and their normalization factors are real. Hence one phase choice gives real coefficients at every weight, and every other allowed choice multiplies all these coefficients by one common phase. Their conjugates are therefore one common scalar times the coefficients themselves. Applying step 2.1 gives $T_qe_{4,m}=\lambda C^{J',M}_{4,m;k,q}e_{J',M}$ with a single $\lambda$ for all in-range pairs $(m,q)$. [F1, F2, step 2.1, algebra]

4.1 For $|m+q|>J'$, step 1.1 gives $J_z^{(J')}T_qe_{4,m}=(m+q)T_qe_{4,m}$. Since the diagonal matrix $J_z^{(J')}$ has only the weights $-J',-J'+1,\ldots,J'$, this forces $T_qe_{4,m}=0$, exactly the second branch defining $A_q$. For $J'\notin S_k$, step 2.1 already gives $T_q=0$ without using a Clebsch–Gordan coefficient. Together with step 3.1 this proves every asserted component identity. The phase law for the coefficients in [F1] multiplies all the maps $A_q$ by $e^{i\theta}$, so their common multiplier changes to $e^{-i\theta}\lambda$. [F1, step 1.1, step 2.1, step 3.1, algebra] ∎


## Real coefficient arrays for the signed spin-four isometry

[Open item](item-lem-author-11a9fe6cf386-signed-spin-four-coefficients) · level 1


### Statement

In $V_4$ set $u_0=\sqrt{1/3}e_{4,-4}+\sqrt{2/3}e_{4,2}$ and $u_1=\sqrt{2/3}e_{4,-2}-\sqrt{1/3}e_{4,4}$. Let $e_0,e_1$ be the standard orthonormal basis of $\mathbb C^2$, and define $V:\mathbb C^2\to V_4$ on every input by $V(z_0e_0+z_1e_1)=z_0u_0+z_1u_1$ for $z_0,z_1\in\mathbb C$. This is the unique complex-linear map with $Ve_\mu=u_\mu$ for $\mu=0,1$, and it is an isometry: $\|Vx\|=\|x\|$ for every $x\in\mathbb C^2$, where $\|w\|=\sqrt{\langle w,w\rangle}$ for the standard coordinate inner products. Under $j=m+4$, its real coefficient arrays are $\alpha_0=1/\sqrt3$, $\alpha_6=\sqrt{2/3}$, $\beta_2=\sqrt{2/3}$, $\beta_8=-1/\sqrt3$, and zero elsewhere. In particular $\sum_{j=0}^8\alpha_j\beta_j=0$ and $\sum\alpha_j^2=\sum\beta_j^2=1$.

### Facts & Assumptions

[F1] The magnetic basis of a spin block is orthonormal and indexed from minus spin to spin. [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[F2] A map between vector spaces over $\mathbb C$ is complex-linear when it preserves $ax+by$ for every pair of vectors $x,y$ and scalars $a,b\in\mathbb C$. [math:def-linear-map](https://alphabetamath.cc/item/def-linear-map)

[F3] In the specified orthonormal bases of finite coordinate spaces, $\langle x,y\rangle=\sum_i x_i\overline{y_i}$, and the adjoint of a linear map is represented by its conjugate-transpose matrix. Here $V^*$ denotes this adjoint and $I_2$ the identity matrix on $\mathbb C^2$. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

### Proof

**Given:** The vectors, coordinate spaces and map in the Statement.

**Goal:** Prove complex-linearity, uniqueness, isometry and the coefficient identities.

1.1 The substitution $j=m+4$ sends magnetic labels $-4,2,-2,4$ to $0,6,2,8$. Reading the two displayed vectors in the orthonormal basis gives exactly the listed arrays, including the negative coefficient at $j=8$. Their supports $\{0,6\}$ and $\{2,8\}$ are disjoint, so every summand of $\sum\alpha_j\beta_j$ vanishes. [F1, algebra]

1.2 Each $x\in\mathbb C^2$ has unique coordinates $x=z_0e_0+z_1e_1$, so the stated formula defines $V$ on its entire domain. If $y=w_0e_0+w_1e_1$ and $a,b\in\mathbb C$, then $V(ax+by)=(az_0+bw_0)u_0+(az_1+bw_1)u_1=aVx+bVy$. Thus $V$ is complex-linear. Any other complex-linear map $W$ with the same two basis values satisfies $Wx=z_0We_0+z_1We_1=z_0u_0+z_1u_1=Vx$, proving uniqueness. [F2, F3, given, algebra]

2.1 The squared norm of each column is $1/3+2/3=1$, and their inner product is zero by disjoint support. Therefore $\sum_{j=0}^8\alpha_j^2=\sum_{j=0}^8\beta_j^2=1$. The conjugate-transpose product of the two-column matrix with itself has these two sums on the diagonal and zero off the diagonal, so $V^*V=I_2$. [F1, F3, step 1.1, step 1.2, algebra]

3.1 For arbitrary $x=z_0e_0+z_1e_1$, the four supported coordinates give $\|Vx\|^2=|z_0|^2(1/3+2/3)+|z_1|^2(2/3+1/3)=|z_0|^2+|z_1|^2=\|x\|^2$. Taking nonnegative square roots proves norm preservation, hence the stated isometry. Together with steps 1.1 and 2.1 this proves all three coefficient identities. [F1, F3, step 1.1, step 1.2, step 2.1, algebra] ∎


## ULE kernel adjoint symmetry and rate identities

[Open item](item-lem-qec-author-42f4c98e5e20-ule-normalization) · level 1


### Statement

Use the spectral density $J$ and kernel $g$ of [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract). Put $h(\omega)=g(\omega)$ and $h(t)=g(t)$. Then $h(\omega)=\sqrt{J(\omega)/(2\pi)}$ and $h(t)=\int h(\omega)e^{-i\omega t}\,d\omega$. Write $G=\int\|h(t)\|_{2,1}dt$ and $H=\int |t|\|h(t)\|_{2,1}dt$. For $\gamma>0$, set $\Gamma=4\gamma G^2$ and $\tau=H/G$. These quantities are finite, $G>0$, and $\Gamma\tau=4\gamma GH$. Also $h(-t)=h(t)^\dagger$.

### Facts & Assumptions

[F1] The kernel contract defines $g(\omega)^2=J(\omega)/(2\pi)$, entrywise integrals and the mixed norm, and imposes finite zeroth and first time moments. Each $g(\omega)$ is Hermitian, and each frequency entry is integrable. [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[F2] For a real integrable function $v$, the integral is $\int v=\int v^+-\int v^-$, with both terms finite. For a complex integrable function $f=u+iv$, the integral is $\int f=\int u+i\int v$. [math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)

[F3] Real scalar multiples of measurable real-valued functions are measurable. [math:prop-closure-properties-of-measurable-functions-used-by-the-integral](https://alphabetamath.cc/item/prop-closure-properties-of-measurable-functions-used-by-the-integral)

[F4] A finite-valued complex function $f=u+iv$ on a measure space is measurable exactly when its real and imaginary parts $u,v$ are measurable. For such functions, integrability of $|f|$ is equivalent to integrability of both components. [math:def-complex-lp-and-euclidean-test-function-conventions](https://alphabetamath.cc/item/def-complex-lp-and-euclidean-test-function-conventions)

### Proof

**Given:** The kernel contract and $\gamma>0$. **Goal:** Establish the kernel and moment identities.

1.1 The positive square root and Fourier integral defining $h=g$ are those supplied by the kernel contract. Its hypotheses give $G>0$ and finite $G,H$. Thus $\tau=H/G$ and $\Gamma=4\gamma G^2$ are well-defined and finite; direct cancellation gives $\Gamma\tau=4\gamma GH$. [F1]

1.2 Let $f=u+iv$ be any complex integrable scalar function. By [F4], its real and imaginary parts $u,v$ are measurable and integrable. The function $-v$ is measurable by [F3], and $(-v)^+=v^-$ and $(-v)^-=v^+$. Thus the real-integral definition gives $\int(-v)=\int v^- -\int v^+=-\int v$. Applying the complex measurability criterion in [F4] to $u$ and $-v$ shows that $\overline f=u-iv$ is measurable. It has the same modulus as $f$, so it is integrable. The complex-integral definition now gives $\int\overline f=\int u+i\int(-v)=\int u-i\int v=\overline{\int f}$. This proves the conjugation rule from the integral definitions and the declared measurability criterion. [F2, F3, F4, algebra]

2.1 Fix real $t$ and indices $a,b$. The scalar Fourier integrand $f(\omega)=h_{ba}(\omega)e^{-i\omega t}$ is integrable: its modulus is $|h_{ba}(\omega)|$, which is integrable by [F1]. Here $A^\dagger$ means the conjugate transpose, so $(A^\dagger)_{ab}=\overline{A_{ba}}$. Apply step 1.2 to this integrand. Since $h(\omega)$ is Hermitian, $\overline{h_{ba}(\omega)}=h_{ab}(\omega)$, and hence $(h(t)^\dagger)_{ab}=\overline{\int h_{ba}(\omega)e^{-i\omega t}\,d\omega}=\int h_{ab}(\omega)e^{i\omega t}\,d\omega=h_{ab}(-t)$. This holds for every entry, proving $h(-t)=h(t)^\dagger$; the rate identities were proved in step 1.1. [F1, step 1.2, step 1.1] ∎


## Spaced-support moment criterion for order-one AE correction

[Open item](item-thm-qec-prereq-spaced-ae-moment-criterion) · level 2


### Statement

Use the order-one absorption–emission tensor error span of [def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract), with input block $V_J$, selected target blocks, and code projector $P$ onto the span of two normalized codewords $|0_L\rangle=\sum_m a_m e_{J,m}$ and $|1_L\rangle=\sum_m b_m e_{J,m}$. Suppose their supports are disjoint and any two distinct magnetic labels in their union differ by at least three. Suppose also that $\sum_m |a_m|^2m^r=\sum_m |b_m|^2m^r$ for $r=0,1,2$. Then the pair-product Knill–Laflamme condition $PE^*FP=c_{E,F}P$ holds for every $E,F$ in that span. The conclusion concerns coherent tensor components; it does not assert correction of independently resolved matrix-unit transitions.

### Facts & Assumptions

[F1] The error-span contract defines the selected blocks, coherent tensor components and pair-product condition; checking a spanning family suffices by sesquilinearity. [def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract)

[F2] The spin convention defines the magnetic basis, rank-$k$ tensor families and ordered Clebsch–Gordan coefficients. [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[F3] For each fixed input and output spin block, the Wigner–Eckart contract expresses every rank-$k$ tensor component as one reduced scalar times the corresponding coherent Clebsch–Gordan component, with the selection rules stated there. [thm-qec-prereq-wigner-eckart-contract](item-thm-qec-prereq-wigner-eckart-contract)

[F4] The independent coherent-operator formulas, correction criterion and ordered coefficient identification are recorded in External input below.

[F5] Each ordered product of two spin blocks contains exactly one summand of each spin in its coupling list, with the normalized highest-weight and lowered bases. This is a mathematical statement about the explicit spin matrices. [physics:thm-nrqm-orbital-and-spin-tensor-spin-composition](https://alphabetamath.cc/physics/item/thm-nrqm-orbital-and-spin-tensor-spin-composition)

### External input

For the fixed-$J$ coherent operators $E_q$, $G_q$ and $L_q$ in Eq. (3) of Jain, Hudson, Campbell and Albert, the cited passage states that spacing the supported magnetic labels by at least three and satisfying the diagonal Knill–Laflamme conditions for $\{I,J_z\}$ suffices for correction of those operators. This imported criterion concerns the listed coherent operators on valid target branches; adjoining the ambient identity is proved below.

Eq. (3) maps each input magnetic label $m$ to $m+q$, with target spin $J-1$, $J+1$ or $J$, respectively, and $L_0$ is proportional to $J_z$ on the input block. The paragraph immediately following Eq. (3) identifies each nonzero component's coefficients as a nonzero, magnetic-label-independent scalar times $C^{J',m+q}_{1,q;J,m}$, in the coupling order spin one then $J$. Component normalizations may depend on the branch and $q$. Invalid target branches are omitted. The comparison with the opposite coupling order in the Wigner–Eckart contract is proved below.

### Proof

**Given:** The selected finite blocks and the two codewords, supports, spacing and moment equalities in the Statement.

**Goal:** Prove the pair-product condition for their full order-one tensor error span.

1.1 The two codewords are orthogonal because their supports are disjoint. For each $r=0,1,2$, the operator $J_z^r$ is diagonal in the magnetic basis, so its cross matrix element between the codewords is zero and its two diagonal matrix elements agree by the given moment equality. Thus the code satisfies the pair-product conditions for $\{I,J_z\}$. [F2, given, algebra]

1.2 Define the linear flip $S:V_J\otimes V_1\to V_1\otimes V_J$ on the product basis by $S(e_{J,m}\otimes e_{1,q})=e_{1,q}\otimes e_{J,m}$. It preserves the inner product because it sends an orthonormal basis bijectively to an orthonormal basis. Applying both sides to each product-basis vector gives $S J_a^{\mathrm{tot},(J,1)}=J_a^{\mathrm{tot},(1,J)}S$ for $a=z,+,-$. For any allowed output spin $J'$, the joint conditions of weight $J'$ and annihilation by the raising operator define a one-dimensional line in either ordered product: by F5 and the ladder formula, only the unique spin-$J'$ summand contributes to that joint space. Thus the flip sends the recorded unit highest-weight vector in order $(J,1)$ to $\lambda_{J'}$ times the unit highest-weight vector in order $(1,J)$, with $|\lambda_{J'}|=1$. Use the source's coefficient phases for the latter order. Commuting $S$ through every power of the lowering operator, with the identical normalization in F2, gives the same scalar for every lowered vector. Comparing product-basis coefficients yields $C^{J',M}_{J,m;1,q}=\lambda_{J'}C^{J',M}_{1,q;J,m}$ for all $m,q,M$. In particular the proportionality is independent of both magnetic labels and component index. [F2, F4, F5, construct, algebra]

1.3 For rank zero, F3 permits only the input block as target. On that block the rank-zero tensor equation says that its sole component commutes with $J_z$ and $J_\pm$. The distinct magnetic eigenvalues of $J_z$ force it to be diagonal, and commuting with $J_+$ forces adjacent diagonal entries to be equal because its ladder coefficient is nonzero between consecutive magnetic labels. Thus it is a scalar multiple of the identity on $V_J$, including the one-dimensional case. Extended to $H$, it is a scalar multiple of the input-block projection $Q=\iota_J\pi_J$, and $QP=PQ=P$. [F1, F2, F3, algebra]

2.1 The spacing and step 1.1 meet the hypotheses of the explicit-operator criterion. Consequently the pair-product condition holds for the coherent Eq. (3) operators on the valid selected target branches, extended by zero outside the input block. Removing branches preserves that condition. [F4, step 1.1]

2.2 Fix a selected target block and a rank-one tensor family. By F3 each component is a common reduced scalar times the coherent component with coefficients $C^{J',m+q}_{J,m;1,q}$. If $J'$ is absent from the coupling list the family is zero. Otherwise step 1.2 converts these coefficients to the source's coupling order by one nonzero scalar. The nonzero component identification in F4 then makes each tensor component a scalar multiple of the corresponding Eq. (3) component; the scalar may depend on $q$, which does not affect membership in the linear span. Zero components need no additional generator. [F3, F4, step 1.2, algebra]

3.1 Each such extended operator $K_q$ also has scalar compression $PK_qP$. If its target spin differs from $J$, this compression is zero because the target block is orthogonal to the code. In the same block, a component with $q=\pm1$ has zero compression: a nonzero matrix element between supported magnetic labels would require their difference to be $q$, contrary to spacing. The remaining component is $L_0$, proportional to $J_z$, whose compression is scalar by step 1.1. Taking adjoints also gives scalar $PK_q^*P$. Since $PI_HP=P$, all pair products involving the ambient identity and these components are scalar, so adjoining $I_H$ to the family in step 2.1 preserves the pair-product condition. [F1, F2, F4, step 1.1, step 2.1, algebra]

4.1 The ambient identity and the valid Eq. (3) components satisfy the pair-product condition by step 3.1. Adjoining $Q$ preserves it: $PQ^*QP=P$, and for each operator $K$ of that family, $PQ^*KP=PKP$ and $PK^*QP=PK^*P$, which are scalar by pairing $K$ with $I_H$. Steps 2.2 and 1.3 place every generator of the stated tensor error span inside the span of this enlarged family. Sesquilinearity therefore gives $PE^*FP=c_{E,F}P$ for every $E,F$ in the full stated span. [F1, step 3.1, step 2.2, step 1.3, algebra] ∎


## Finite spanning-list compression and channel qualification

[Open item](item-lem-author-11a9fe6cf386-finite-span-kl) · level 2


### Statement

Let $H$ and $\mathcal E\subseteq\mathcal L(H)$ be the finite-dimensional space and error span of the tensor-span contract. Let $V:\mathbb C^2\to H$ be any isometry and put $P=VV^*$. For any linear subspace $\mathcal S\subseteq\mathcal L(H)$, the **pair-product condition for $(V,\mathcal S)$** means that for every $E,F\in\mathcal S$ there is a complex scalar $c_{E,F}$ with $PE^*FP=c_{E,F}P$. For $\mathcal S=\mathcal E$ and $\operatorname{im}V\subseteq V_J$, this agrees with the tensor-span contract's condition; the algebraic formulation here also applies to arbitrary isometries into $H$.

For any spanning list $T_1,\ldots,T_N$ of $\mathcal E$, the pair-product condition for $(V,\mathcal E)$ is equivalent to every $V^*T_a^*T_bV$ being a scalar matrix. If this condition holds, every quantum channel $\mathcal N:\mathcal L(H)\to\mathcal L(H)$ with a finite Kraus representation whose Kraus operators lie in $\mathcal E$ is exactly recoverable on this code. Conversely, exact recovery of a finite Kraus channel on $H$ implies the pair-product condition for its Kraus span; it implies that condition for $\mathcal E$ when the Kraus span equals $\mathcal E$. Exact recovery means that a decoded recovery channel $\mathcal R:\mathcal L(H)\to\mathcal L(\mathbb C^2)$ satisfies $\mathcal R(\mathcal N(VXV^*))=X$ for every $X\in\mathcal L(\mathbb C^2)$. A bare list with no trace-preserving channel is only an algebraic test.

### Facts & Assumptions

[F1] The tensor-span contract supplies a finite-dimensional $H$ and error span $\mathcal E$. Its pair-product condition on codes in the input block is the scalar-compression condition used in the Statement. [def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract)

[F2] Exact recovery of a finite trace-preserving Kraus channel implies its pair-product identities. [math:thm-qc-knill-laflamme-necessity](https://alphabetamath.cc/item/thm-qc-knill-laflamme-necessity)

[F3] A finite trace-preserving Kraus channel satisfying those identities has an exact decoded recovery. [math:thm-qc-knill-laflamme-explicit-recovery](https://alphabetamath.cc/item/thm-qc-knill-laflamme-explicit-recovery)

[F4] A quantum channel is a completely positive trace-preserving complex-linear map on the full operator space; a finite Kraus representation is $\mathcal N(X)=\sum_a K_aXK_a^*$. [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel) [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

[F5] Exact correction is the decoded-channel identity $\mathcal R\circ\mathcal N\circ\operatorname{Ad}_V=\operatorname{id}$ on the full logical operator space, with $\operatorname{Ad}_V(X)=VXV^*$. [math:def-qc-exact-recovery-of-a-quantum-code](https://alphabetamath.cc/item/def-qc-exact-recovery-of-a-quantum-code)

[F6] Adjoints are additive and conjugate-homogeneous and reverse compatible compositions. [math:prop-adjoint-algebra](https://alphabetamath.cc/item/prop-adjoint-algebra)

[F7] For a finite-dimensional isometric encoding into $H$, $P=VV^*$ is the code projector and $V^*V=I$; the encoding and decoded recovery have the types used here. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

### Proof

**Given:** The finite-dimensional objects, isometry, and pair-product formulation in the Statement.

**Goal:** Establish the spanning-list equivalence and the qualified channel implications.

1.1 By [F7], $P=VV^*$ and $V^*V=I_2$. Thus $PT_a^*T_bP=c_{ab}P$ and $V^*T_a^*T_bV=c_{ab}I_2$ are equivalent by multiplying respectively by $V^*,V$ or $V,V^*$. If the latter identities hold and $E=\sum_a x_aT_a$, $F=\sum_b y_bT_b$, [F6] gives $V^*E^*FV=\sum_{a,b}\overline{x_a}y_bc_{ab}I_2$, so multiplication by $V,V^*$ gives the pair-product condition for $(V,\mathcal E)$. Conversely, that condition applies to every $T_a,T_b\in\mathcal E$. This proves the spanning-list equivalence, using no restriction of $\operatorname{im}V$ to the input spin block. The same expansion applies to the linear span of any finite operator family on $H$. [given, F1, F6, F7, algebra]

2.1 For a finite Kraus channel with Kraus family inside $\mathcal E$, step 1.1 gives all scalar pair-product identities. The finite-dimensional channel and encoding meet [F3]'s hypotheses: the channel is trace preserving on the full operator space by [F4], and the logical space is the nonzero space $\mathbb C^2$. Hence [F3] gives a completely positive trace-preserving decoded recovery, which is exact in the sense of [F5]. Conversely [F2] gives the scalar identities for the Kraus family of any exactly recoverable finite Kraus channel on $H$. The expansion in step 1.1 extends them to its Kraus span, and hence to $\mathcal E$ if the two spans agree. None of these implications assigns a channel to an arbitrary spanning list. [F2, F3, F4, F5, F7, step 1.1] ∎


## Signed mixed binomial sums cancel at order one

[Open item](item-lem-author-11a9fe6cf386-mixed-binomial-cancellation) · level 2


### Statement

For the real arrays $\alpha,\beta$ of the signed spin-four isometry, define $w_{j,a,b}=\binom6j/\sqrt{\binom8{j+a}\binom8{j+b}}$ for integers $j,a,b$ with $0\leq j\leq6$ and $0\leq a,b\leq2$. Then $M_{ab}=\sum_{j=0}^6w_{j,a,b}\alpha_{j+a}\beta_{j+b}=0$ for every $a,b$. Equivalently one may sum to $8$, declaring the terms with $j>6$ zero before taking any quotient.

### Facts & Assumptions

[F1] The coefficient arrays, supports and negative amplitude are those of the signed spin-four isometry. [lem-author-11a9fe6cf386-signed-spin-four-coefficients](item-lem-author-11a9fe6cf386-signed-spin-four-coefficients)

[F2] For natural numbers $n,k$, the binomial coefficient $\binom nk$ counts the $k$-element subsets of an $n$-element set; in particular $\binom n0=\binom nn=1$ and $\binom nk=0$ for $k>n$. [math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)

### Proof

**Given:** The real coefficient arrays, integer index ranges and zero-term convention in the Statement.

**Goal:** Establish the stated identities and implications.

1.1 For $0\leq k\leq8$, an eight-element set has a $k$-element subset, so $\binom8k>0$. The stated integer ranges give $0\leq j+a,j+b\leq8$, hence all weights in the sum to $6$ are defined. A nonzero summand requires $j+a\in\{0,6\}$ and $j+b\in\{2,8\}$. Their difference $b-a$ must belong to $\{2,8,-4\}$ and also to $[-2,2]$. Thus $b-a=2$, forcing $(a,b)=(0,2)$. There are then exactly two possible indices, $j=0$ and $j=6$, both inside the summation range. All other eight sums are termwise zero. [F1, F2, given, algebra]

2.1 Empty and full subsets give $\binom60=\binom66=1$ and $\binom80=\binom88=1$. In an eight-element set, each two-element subset is counted twice among the $8\cdot7$ ordered pairs of distinct elements, so $\binom82=8\cdot7/2=28$. Complementation is a bijection between its six-element and two-element subsets, so $\binom86=28$ as well. Therefore $M_{02}=\alpha_0\beta_2/\sqrt{28}+\alpha_6\beta_8/\sqrt{28}=\sqrt2/(3\sqrt{28})-\sqrt2/(3\sqrt{28})=0$. This uses the sign before adding contributions. The omitted $j=7,8$ terms have zero numerator weight and contribute zero under the stated convention. [F1, F2, step 1.1, algebra] ∎


## Signed diagonal binomial moments agree at order one

[Open item](item-lem-author-11a9fe6cf386-diagonal-binomial-moments) · level 2


### Statement

For the real arrays $\alpha,\beta$ of the signed spin-four isometry, define $w_{j,a,b}=\binom6j/\sqrt{\binom8{j+a}\binom8{j+b}}$ for integers $j,a,b$ with $0\leq j\leq6$ and $0\leq a,b\leq2$. Then $D_{ab}=\sum_{j=0}^6w_{j,a,b}(\alpha_{j+a}\alpha_{j+b}-\beta_{j+a}\beta_{j+b})=0$ for all nine pairs $(a,b)\in\{0,1,2\}^2$. The common diagonal weighted norms at $a=0,1,2$ are $5/14,1/7,5/14$, respectively. Equivalently one may sum to $8$, declaring each term with $j>6$ to be zero before taking any quotient.

### Statement references

[lem-author-11a9fe6cf386-signed-spin-four-coefficients](item-lem-author-11a9fe6cf386-signed-spin-four-coefficients)

[math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)

### Facts & Assumptions

[F1] The real arrays have supports $\{0,6\}$ and $\{2,8\}$, respectively, with $\alpha_0^2=\beta_8^2=1/3$ and $\alpha_6^2=\beta_2^2=2/3$. Each individual support has its two indices separated by six. [lem-author-11a9fe6cf386-signed-spin-four-coefficients](item-lem-author-11a9fe6cf386-signed-spin-four-coefficients)

[F2] For natural numbers $n,k$, $\binom nk$ is the number of $k$-element subsets of an $n$-element set. In particular $\binom n0=\binom nn=1$, $\binom n1=n$, and $\binom nk=0$ for $k>n$. [math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)

### Proof

**Given:** The real arrays, integer index ranges and zero-term convention in the Statement.

**Goal:** Prove all nine diagonal-difference identities and the three common weighted norms.

1.1 For each integer $0\leq k\leq8$, an eight-element set has a $k$-element subset, so $\binom8k>0$ by [F2]. The index ranges give $0\leq j+a,j+b\leq8$, hence all displayed weights in the sum to $6$ are defined. If $a\ne b$, a nonzero product from one array would require two supported indices to differ by $b-a$, whose nonzero absolute value is at most two. By [F1] its distinct supported indices differ by six. Thus no such product exists, and both weighted sums vanish for all $a\ne b$. [given, F1, F2, algebra]

1.2 Count the needed binomial values from [F2]. Each two-element subset of an $n$-element set occurs twice among the $n(n-1)$ ordered pairs of distinct elements. Each three-element subset of a six-element set occurs six times among its $6\cdot5\cdot4$ ordered triples of distinct elements. Thus $\binom62=15$, $\binom63=20$ and $\binom82=28$. Complementation bijects $k$-element subsets with $(n-k)$-element subsets, so together with the boundary and singleton values of [F2] this gives $(\binom6j)_{j=0}^6=(1,6,15,20,15,6,1)$ and $\binom80=\binom88=1$, $\binom86=28$. [F2, algebra]

2.1 For $a=b=0$, the alpha sum is $1/3+(2/3)/28=5/14$, while the beta sum is $(2/3)15/28=5/14$. For $a=b=1$, the alpha sum is $(2/3)6/28=1/7$, and the beta sum is the same. For $a=b=2$, the alpha sum is $(2/3)15/28=5/14$, while the beta sum is $(2/3)/28+1/3=5/14$. These are all supported contributions by [F1], and the binomial values are those of step 1.2. Taking differences proves all remaining $D_{aa}=0$. If the sum is extended to $8$, its additional terms are zero by the stated convention, which never evaluates a quotient outside the original range. Together with step 1.1 this proves every claim. [given, F1, F2, step 1.1, step 1.2, algebra] ∎


## Convergent jump integrals and Hermitian Lamb operators

[Open item](item-lem-qec-author-42f4c98e5e20-ule-kernel-operators) · level 2


### Statement

Assume countable choice. All integrals are entrywise Lebesgue integrals, and matrix measurability means measurability of every entry. Use $h,G,\gamma$ from the normalization lemma. On a finite-dimensional system let $X_\alpha(s)$ be measurable Hermitian matrices with operator norm at most one, $1\leq\alpha\leq n$. The jumps $K_\lambda(t)=\sqrt\gamma\sum_\alpha\int h_{\lambda\alpha}(t-s)X_\alpha(s)\,ds$ exist absolutely and satisfy $\|K_\lambda(t)\|\leq\sqrt{\gamma n}G$. Define $\phi(u,v)=h(u)h(-v)\operatorname{sgn}(u-v)$ and $Q(t)=\frac{\gamma}{2i}\sum_{\alpha\beta}\int\!\int X_\alpha(t+u)X_\beta(t+v)\phi_{\alpha\beta}(u,v)\,du\,dv$. This integral is absolutely convergent and $Q(t)$ is Hermitian. Here $A^\dagger$ is the conjugate transpose and $\|A\|=\sup_{\|z\|_2=1}\|Az\|_2$ is the operator norm on the finite-dimensional complex system space.

### Facts & Assumptions

[F1] The normalized kernel has finite mixed-norm integral $G$ and satisfies $h(-u)=h(u)^\dagger$. Its defining contract gives $\|A\|_{2,1}=\sum_b(\sum_a|A_{ab}|^2)^{1/2}$ and integrable frequency entries $h_{ab}(\omega)$ with $h_{ab}(t)=\int h_{ab}(\omega)e^{-i\omega t}d\omega$. [lem-qec-author-42f4c98e5e20-ule-normalization](item-lem-qec-author-42f4c98e5e20-ule-normalization) [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[A1] Assume the Axiom of Countable Choice for the product-integration and change-of-variables suppliers. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F2] For two sigma-finite measure spaces, under countable choice, Tonelli applies to nonnegative functions measurable for the completed product, and Fubini applies to its integrable complex functions; the iterated and product integrals agree, with section assertions outside null sets. [math:thm-tonelli-and-fubini-for-completed-product-measures](https://alphabetamath.cc/item/thm-tonelli-and-fubini-for-completed-product-measures)

[F3] Under countable choice, a $C^1$ diffeomorphism $T:U\to V$ of open Euclidean sets preserves Lebesgue measurability and satisfies $\int_V f=\int_U(f\circ T)|\det DT|$ for nonnegative Lebesgue measurable $f$. In particular translations and reflections on $\mathbb R$ have absolute Jacobian one. [math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions](https://alphabetamath.cc/item/thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions)

[F4] The Fourier transform of a complex $L^1(\mathbb R)$ function, in the convention $\widehat f(\xi)=\int f(\omega)e^{-2\pi i\omega\xi}d\omega$, is bounded and uniformly continuous. [math:thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions](https://alphabetamath.cc/item/thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions)

[F5] Complex integrability means finite integral of the modulus, and the integral is defined through real and imaginary parts. The integral is complex-linear on $L^1$ and satisfies $|\int f|\leq\int|f|$. [math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals) [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one) [math:thm-integral-triangle-inequality](https://alphabetamath.cc/item/thm-integral-triangle-inequality)

[F6] For $x,y\in\mathbb R^n$, the finite Euclidean Cauchy–Schwarz inequality is $|\sum_{a=1}^n x_a y_a|\leq(\sum_{a=1}^n x_a^2)^{1/2}(\sum_{a=1}^n y_a^2)^{1/2}$. [math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm)

[F7] A map between measurable spaces is measurable when inverse images of all measurable codomain sets are measurable. For measurable spaces $(X,\mathcal A)$ and $(Y,\mathcal B)$, $\mathcal A\otimes\mathcal B$ is the sigma-algebra generated by the rectangles $A\times B$ with $A\in\mathcal A$ and $B\in\mathcal B$. [math:def-measurable-function-between-measurable-spaces](https://alphabetamath.cc/item/def-measurable-function-between-measurable-spaces) [math:def-product-sigma-algebra-and-finite-product-sigma-algebras](https://alphabetamath.cc/item/def-product-sigma-algebra-and-finite-product-sigma-algebras)

[F8] On any measurable space, finite real-valued measurable functions are closed under scalar multiplication, sums and products. A finite-valued complex function $f=p+iq$ is measurable exactly when $p,q$ are real measurable; complex products and moduli preserve measurability, using $fg=(pr-qs)+i(ps+qr)$ for $g=r+is$ and $|f|=\sqrt{p^2+q^2}$. [math:thm-arithmetic-and-lattice-operations-preserve-measurability](https://alphabetamath.cc/item/thm-arithmetic-and-lattice-operations-preserve-measurability) [math:def-complex-lp-and-euclidean-test-function-conventions](https://alphabetamath.cc/item/def-complex-lp-and-euclidean-test-function-conventions)

### Proof

**Given:** Countable choice, the normalized kernel, and the stated measurable norm-bounded Hermitian matrices. **Goal:** Prove absolute convergence, the jump bound, and Hermiticity.

1.1 The frequency entries in [F1] are in $L^1(\mathbb R)$, so [F4] with $\xi=t/(2\pi)$ makes every time-kernel entry continuous. Its real and imaginary parts have open inverse images of open sets, hence are Borel and therefore Lebesgue measurable by [F7] and [F8]. Translations and reflections in [F3] preserve measurability of the stated $X_\alpha$ entries and of the kernel entries. Lebesgue measure on $\mathbb R$ is sigma-finite, using the finite-measure intervals $[-m,m]$, $m\geq1$. [given, F1, F3, F4, F7, F8]

2.1 Write $\mathcal L$ for the Lebesgue sigma-algebra on $\mathbb R$. If $f:\mathbb R\to\mathbb R$ is Lebesgue measurable and $B\subseteq\mathbb R$ is Borel, then $\{(u,v):f(u)\in B\}=f^{-1}(B)\times\mathbb R$ and $\{(u,v):f(v)\in B\}=\mathbb R\times f^{-1}(B)$. These are rectangles in $\mathcal L\otimes\mathcal L$ by [F7], proving the coordinate-pullback assertion directly. Apply this to the real and imaginary parts of the translated and reflected entries from step 1.1; [F8] then gives their complex measurability on this product sigma-algebra. [F7, F8, step 1.1]

3.1 In particular the coordinate functions $u,v$ are product-measurable, and [F8] makes $d(u,v)=u-v$ measurable. The sets $E_+=\{d>0\}$ and $E_-=\{d<0\}$ are measurable. For a measurable set $E$, every inverse image under its indicator $\mathbf1_E$ is one of $\varnothing,E,E^c,\mathbb R^2$, so [F7] makes the indicator measurable. Thus $\operatorname{sgn}(u-v)=\mathbf1_{E_+}-\mathbf1_{E_-}$ is measurable by [F8]. The same fact supplies finite sums and products of the lifted complex entries. Nonnegative square roots are measurable as well: for measurable $r\geq0$, $\{\sqrt r>c\}=\{r>c^2\}$ when $c\geq0$, and this set is the whole space when $c<0$. Consequently the mixed norm $a(u)=\|h(u)\|_{2,1}$, the majorants used below, every entry of the jump integrand, and every entry of the Lamb integrand are measurable on their stated one-variable or product spaces. Product-measurable functions are measurable for the completion, as the latter sigma-algebra contains the former. Fixing either variable gives the same finite arithmetic constructions on measurable one-variable functions, so every section is measurable too. This establishes the measurability hypotheses needed for [F2]. [F2, F7, F8, step 1.1, step 2.1]

4.1 Put $a(u)=\|h(u)\|_{2,1}$ and $S(A)=\sum_{a,b}|A_{ab}|$. Apply [F6] in each column $b$ to the real vectors $x_a=|A_{ab}|$ and $y_a=1$, $1\leq a\leq n$. This gives $\sum_a|A_{ab}|\leq\sqrt n(\sum_a|A_{ab}|^2)^{1/2}$; summing over $b$ yields $S(A)\leq\sqrt n\|A\|_{2,1}$. Hence $\sum_\alpha|h_{\lambda\alpha}(t-s)|\leq\sqrt n\,a(t-s)$. By [F3] with $s\mapsto t-s$, $\int a(t-s)ds=G$. The jump integrand has norm at most $\sqrt{\gamma n}\,a(t-s)$, so every entry is integrable. For a matrix-valued integrable function $M$ and unit vectors $z,w$, [F5] gives $|w^\dagger(\int M)z|=|\int w^\dagger Mz|\leq\int\|M\|$; taking the supremum over $z,w$ yields $\|\int M\|\leq\int\|M\|$. This proves absolute convergence and $\|K_\lambda(t)\|\leq\sqrt{\gamma n}G$. [given, F1, F3, F5, F6, step 3.1]

5.1 The entrywise product estimate is $S(AB)\leq S(A)S(B)$, by expanding each entry and applying the finite triangle inequality. Since $\|X_\alpha X_\beta\|\leq1$ directly from the operator-norm definition, the norm of the numerator integrand $\sum_{\alpha\beta}X_\alpha(t+u)X_\beta(t+v)\phi_{\alpha\beta}(u,v)$ is at most $S(h(u)h(-v))\leq n a(u)a(-v)$. Apply the nonnegative part of [F2] to this measurable majorant. Its iterated integral is $n(\int a(u)du)(\int a(-v)dv)=nG^2<\infty$, with the second factor evaluated by reflection in [F3]. This proves absolute convergence before any complex Fubini interchange. Each section is also integrable, since fixing either variable leaves a finite value of one factor times an integrable function of the other. [given, A1, F1, F2, F3, step 3.1, step 4.1]

6.1 By the integrable part of [F2], applied entrywise using step 5.1, either order of integration gives the same numerator matrix $N(t)$ of $Q(t)$. By [F5], conjugation commutes with an absolutely convergent scalar integral: write $f=p+iq$ with real integrable $p,q$, and use $\int\overline f=\int p-i\int q=\overline{\int f}$. Linearity handles finite matrix sums, so adjoints can be taken inside $N(t)$. [A1, F2, F5, step 5.1]

7.1 The adjoint symmetry in [F1] and the real antisymmetric sign function give $\phi(v,u)^\dagger=(h(v)h(-u))^\dagger\operatorname{sgn}(v-u)=-h(u)h(-v)\operatorname{sgn}(u-v)=-\phi(u,v)$. Taking the adjoint of $N(t)$ reverses the two Hermitian $X$ factors. Fubini as justified in step 6.1 permits exchanging integration order; then relabel $u,v$ and $\alpha,\beta$. The resulting scalar coefficient is $\overline{\phi_{\beta\alpha}(v,u)}=-\phi_{\alpha\beta}(u,v)$, so $N(t)^\dagger=-N(t)$. Since $\gamma$ is real, $(\gamma N(t)/(2i))^\dagger=\gamma N(t)/(2i)$, proving that $Q(t)$ is Hermitian, with the asserted convergence and jump bound already established. [given, F1, F2, step 4.1, step 5.1, step 6.1] ∎


## A first-moment bound for the bath correlation convolution

[Open item](item-lem-qec-author-42f4c98e5e20-ule-correlation-moment) · level 2


### Statement

Use $h,G,H,\Gamma,\tau$ from the normalization lemma. Suppose the stationary correlation is represented almost everywhere by $C(u)=\int h(u-v)h(v)\,dv$. For a matrix $A$ put $\|A\|_{\mathrm{ent}}=\sum_{ij}|A_{ij}|$. Then $M=4\gamma\int_0^\infty u\|C(u)\|_{\mathrm{ent}}du$ is finite and $M\leq\Gamma\tau$. The convolution identity is an explicit premise, not a consequence of stationarity alone.

### Facts & Assumptions

[F1] The normalized kernel obeys $h(-u)=h(u)^\dagger$, with $G=\int_{\mathbb R}\|h(v)\|_{2,1}dv<\infty$, $H=\int_{\mathbb R}|v|\|h(v)\|_{2,1}dv<\infty$ and $\Gamma\tau=4\gamma GH$. Its frequency entries are integrable and its time entries are their Fourier integrals. [lem-qec-author-42f4c98e5e20-ule-normalization](item-lem-qec-author-42f4c98e5e20-ule-normalization)

[F2] The kernel contract fixes a positive integer $n$, $C:\mathbb R\to\mathbb C^{n\times n}$ with integrable entries, entrywise Lebesgue integration, and $\|A\|_{2,1}=\sum_b(\sum_a|A_{ab}|^2)^{1/2}$. [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[F3] For vectors in a complex inner product space, $|\langle x,y\rangle|\leq\|x\|\|y\|$. We apply this to finite rows and columns with the Euclidean norm. [math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces](https://alphabetamath.cc/item/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces)

[F4] Tonelli applies to nonnegative product-measurable functions on sigma-finite measure spaces before finiteness is known. We use the real line with Borel Lebesgue measure in each factor, exhausted by the finite-measure intervals $(-m,m)$ for positive integers $m$. [math:thm-tonelli-theorem-for-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-tonelli-theorem-for-sigma-finite-product-spaces)

[F5] The Fourier transform of an $L^1(\mathbb R)$ function is bounded and uniformly continuous. In the supplier's convention, the time kernel is $h_{ab}(t)=\widehat{h_{ab}}(t/(2\pi))$, with the transform taken in the frequency variable. [math:thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions](https://alphabetamath.cc/item/thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions)

[F6] Translations preserve Lebesgue measurability and measure. Two measures agreeing on a generating pi-system are equal if that pi-system has an increasing common finite-measure exhaustion. Integral invariance under a measure-preserving self-map holds for nonnegative measurable functions, allowing infinity, and for integrable complex functions. These inputs also establish reflection invariance on the Borel line in step 1.2. [math:thm-lebesgue-outer-measure-and-measurability-are-translation-invariant](https://alphabetamath.cc/item/thm-lebesgue-outer-measure-and-measurability-are-translation-invariant) [math:thm-measure-uniqueness-on-a-sigma-finite-pi-system](https://alphabetamath.cc/item/thm-measure-uniqueness-on-a-sigma-finite-pi-system) [math:thm-integrals-are-invariant-under-measure-preserving-maps](https://alphabetamath.cc/item/thm-integrals-are-invariant-under-measure-preserving-maps)

[F7] For an integrable complex function $f$, $|\int f|\leq\int|f|$, and the integral is complex-linear on $L^1$. We apply these facts entrywise, commuting only finite sums with integrals. [math:thm-integral-triangle-inequality](https://alphabetamath.cc/item/thm-integral-triangle-inequality) [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one)

### Proof

**Given:** The convolution identity and kernel conditions. **Goal:** Bound $M$.

1.1 Apply the Fourier continuity theorem to each frequency entry supplied by the kernel contract. Thus every time entry of $h$ is continuous, and $k(v)=\|h(v)\|_{2,1}$ is a nonnegative continuous function with moments $G,H$. In particular $(u,v)\mapsto k(v-u)k(v)$ is continuous and is measurable for the product of the Borel sigma-algebras. All uses of Tonelli below therefore have product-measurable integrands and sigma-finite factors; no completed-product theorem is needed. [F1, F2, F4, F5]

1.2 Translations preserve the Borel restriction $\lambda$ of Lebesgue measure. Reflection $R(v)=-v$ is a Borel bijection, so $\nu(E)=\lambda(R^{-1}E)$ is another Borel measure. For every bounded open interval $(a,b)$, its reflection $(-b,-a)$ is its translate by $-(a+b)$; hence $\nu((a,b))=\lambda((a,b))$. The bounded open intervals together with the empty set form a generating pi-system, with common finite-measure exhaustion $(-m,m)$. Measure uniqueness gives $\nu=\lambda$. Thus reflection, translations and their compositions preserve the Borel measure, and integral invariance justifies substitution by any of these maps, including for nonnegative integrals that may be infinite. [F6]

2.1 For finite compatible matrices, $|(AB)_{ij}|\leq(\sum_a|A_{ia}|^2)^{1/2}(\sum_a|B_{aj}|^2)^{1/2}$ by Cauchy–Schwarz. Summing over $i,j$ gives $\|AB\|_{\mathrm{ent}}\leq\|A^\dagger\|_{2,1}\|B\|_{2,1}$. Put $q(u)=\int_{\mathbb R}k(v-u)k(v)dv$. By $h(u-v)^\dagger=h(v-u)$, the matrix product in the convolution has entry norm at most $k(v-u)k(v)$. The convolution premise and the entrywise integral triangle inequality therefore give $\|C(u)\|_{\mathrm{ent}}\leq q(u)$ almost everywhere. Tonelli and the substitution $w=v-u$, with $v$ fixed, give $\int_{\mathbb R}q(u)du=\int_{\mathbb R}k(v)\int_{\mathbb R}k(w)dw\,dv=G^2<\infty$. Thus $q$ is measurable and finite almost everywhere; in particular the majorant also proves absolute convergence of the matrix convolution almost everywhere. [given, F1, F3, F4, F7, step 1.1, step 1.2]

3.1 Substitution $z=v+u$ gives $q(-u)=\int_{\mathbb R}k(z)k(z-u)dz=q(u)$. Hence reflection invariance identifies $\int_0^\infty u q(u)du$ with half of $\int_{\mathbb R}|u|q(u)du$, including when these integrals are infinite. By the almost-everywhere majorant, $\int_0^\infty u\|C(u)\|_{\mathrm{ent}}du\leq\frac12\int_{\mathbb R}|u|q(u)du$. [F4, step 1.2, step 2.1]

4.1 Apply Tonelli and, at each fixed $v$, substitute $w=v-u$ using step 1.2. Since $|v-w|\leq|v|+|w|$, this gives $\int_{\mathbb R}|u|q(u)du=\int_{\mathbb R}\int_{\mathbb R}|v-w|k(w)k(v)dw\,dv\leq HG+GH=2GH$. All integrands interchanged here are nonnegative and product-measurable; Tonelli factors the last two terms using the finite moments $G,H$. Together with step 3.1 this yields $\int_0^\infty u\|C(u)\|_{\mathrm{ent}}du\leq GH$. Multiplication by $4\gamma$ proves finiteness of $M$ and $M\leq4\gamma GH=\Gamma\tau$. [F1, F4, step 1.1, step 1.2, step 3.1] ∎


## Mass and first moment of the ULE scalar envelope

[Open item](item-lem-qec-author-4e9f1886ce3e-ule-envelope-moments) · level 2


### Statement

Assume the Axiom of Countable Choice and let $\gamma>0$. Use the kernel $g$ and rate identities, put $k(u)=\|g(u)\|_{2,1}$, $K=\int k(u)du$, $H=\int|u|k(u)du$, $\Gamma=4\gamma K^2$ and $\tau=H/K$. Define the nonnegative envelope $q(u)=4\gamma k(-u)\int_{-\infty}^u k(-v)dv$. Then $\int q(u)du=\Gamma/2$ and $\int|u|q(u)du\leq\Gamma\tau$.

### Facts & Assumptions

[F1] Kernel regularity gives $0<K<\infty$, $H<\infty$ and $\Gamma\tau=4\gamma KH$. [lem-qec-author-42f4c98e5e20-ule-normalization](item-lem-qec-author-42f4c98e5e20-ule-normalization)

[F2] The kernel contract defines $g$, the mixed norm $\|A\|_{2,1}=\sum_b(\sum_a|A_{ab}|^2)^{1/2}$ and the Lebesgue integration convention, with measurable nonnegative $k(u)=\|g(u)\|_{2,1}$ and finite zeroth and first moments. [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[F3] Tonelli applies to every nonnegative product-measurable function on a product of sigma-finite measure spaces, equates its product integral with either iterated integral, and gives measurability of the marginal integrals; finiteness need not be known in advance. [math:thm-tonelli-theorem-for-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-tonelli-theorem-for-sigma-finite-product-spaces)

[A1] Assume the Axiom of Countable Choice: every sequence of nonempty sets admits a choice function. It is used for the change-of-variables theorem in [F4] and singleton nullity in [F6], and is already assumed by the kernel contract for its Lebesgue-null inputs. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F4] Under [A1], the nonnegative Lebesgue change-of-variables theorem applies to a $C^1$ diffeomorphism $T:U\to V$ of open subsets of $\mathbb R^n$: $\int_V f(y)dy=\int_U f(T(x))|\det DT(x)|dx$ for nonnegative Lebesgue-measurable $f$. For reflection $T(u)=-u$ on $\mathbb R$, $T^{-1}=T$ and $|T'(u)|=1$, so reflected functions are Lebesgue measurable and their nonnegative integrals are preserved. [math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions](https://alphabetamath.cc/item/thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions)

[F5] On any measure space, if $0\leq f\leq h$ are measurable, then $\int f\leq\int h$; for a positive finite scalar $c$, $\int cf=c\int f$, and the integral of the zero function is zero. [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)

[F6] Under [A1], every singleton in $\mathbb R$ is Lebesgue measurable with Lebesgue measure zero. [math:prop-countable-subsets-of-rn-are-lebesgue-null](https://alphabetamath.cc/item/prop-countable-subsets-of-rn-are-lebesgue-null)

[F7] On any measure space $(X,\mathcal A,\mu)$, if $f:X\to[0,\infty]$ is measurable and $E$ is measurable with $\mu(E)=0$, then $\int_E f\,d\mu=0$. [math:cor-integral-over-a-null-set-vanishes](https://alphabetamath.cc/item/cor-integral-over-a-null-set-vanishes)

[F8] On any measure space, nonnegative measurable functions $f,h$ satisfy $\int(f+h)=\int f+\int h$, including infinite values. Applying this twice gives additivity for three such functions. [math:cor-additivity-of-the-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/cor-additivity-of-the-nonnegative-lebesgue-integral)

[F9] A product sigma-algebra is generated by measurable rectangles, and a map between measurable spaces is measurable when the preimage of every measurable target set is measurable. [math:def-product-sigma-algebra-and-finite-product-sigma-algebras](https://alphabetamath.cc/item/def-product-sigma-algebra-and-finite-product-sigma-algebras) [math:def-measurable-function-between-measurable-spaces](https://alphabetamath.cc/item/def-measurable-function-between-measurable-spaces)

[F10] On any measurable space, the pointwise product of two measurable extended-real functions is measurable, with the total function-product convention assigning zero if either factor is zero. On finite-valued functions this is ordinary multiplication. Real scalar multiples are measurable as well. [math:thm-arithmetic-and-lattice-operations-preserve-measurability](https://alphabetamath.cc/item/thm-arithmetic-and-lattice-operations-preserve-measurability)

[F11] For positive integers $m,n$, $\mathcal B(\mathbb R^m)\otimes\mathcal B(\mathbb R^n)=\mathcal B(\mathbb R^{m+n})$. We use $m=n=1$. [math:thm-borel-products-of-euclidean-spaces-are-euclidean-borel](https://alphabetamath.cc/item/thm-borel-products-of-euclidean-spaces-are-euclidean-borel)

### Proof

**Given:** Countable choice [A1], the kernel and rate conventions, $\gamma>0$, the nonnegative measurable $k$ with the moments in [F1], and the displayed definition of $q$. **Goal:** Prove measurability, finiteness and the asserted mass and first-moment bounds for $q$.

1.1 Put $a(u)=k(-u)$. Apply [F4] with $U=V=\mathbb R$, $T(u)=-u$, first to $f(u)=k(u)$ and then to $f(u)=|u|k(u)$. Since $|T(u)|=|u|$ and $|T'(u)|=1$, $a$ is nonnegative Lebesgue measurable, $\int a=K$ and $\int|u|a(u)du=H$. [given, A1, F1, F2, F4]

2.1 Write $\mathcal L$ for the Lebesgue sigma-algebra on $\mathbb R$. For every Borel target set $B\subseteq\overline{\mathbb R}$, the preimages under $(u,v)\mapsto a(u)$ and $(u,v)\mapsto a(v)$ are respectively $a^{-1}(B)\times\mathbb R$ and $\mathbb R\times a^{-1}(B)$. These are measurable rectangles because $a$ is measurable; [F9] therefore proves that both coordinate pullbacks are $\mathcal L\otimes\mathcal L$-measurable. Their nonnegative product $p(u,v)=a(u)a(v)$ is measurable by [F10]. Also, $\mathcal B(\mathbb R)\subseteq\mathcal L$, so the rectangle-generated definition in [F9] gives $\mathcal B(\mathbb R)\otimes\mathcal B(\mathbb R)\subseteq\mathcal L\otimes\mathcal L$. By [F11], every Borel subset of $\mathbb R^2$ is consequently product-measurable. In particular the closed half-plane $\{v\leq u\}$, the two open strict half-planes and the closed diagonal $D=\{u=v\}$ are product-measurable. The indicator of each such set $E$ is measurable, since every target preimage of its two-valued indicator is one of $\varnothing,E,E^c,\mathbb R^2$. Applying [F10] to $p$ and each indicator proves measurability of every restricted integrand used below, and also of $\mathbf1_D$. [F9, F10, F11, step 1.1]

3.1 The real line is sigma-finite: the intervals $[-m,m]$ have finite measure and cover it. Apply [F3] to the nonnegative product-measurable function $p(u,v)\mathbf1_{\{v\leq u\}}$ from step 2.1. Since $a(u)$ is finite and $\int a=K<\infty$, [F5] identifies its $v$-section integral with $a(u)\int_{-\infty}^u a(v)dv$, including when $a(u)=0$. Tonelli makes this marginal measurable and identifies its integral with the product integral, without presupposing integrability of $q$. Multiplication by $4\gamma>0$ preserves measurability by [F10], so $q$ is measurable. [given, F2, F3, F5, F10, step 1.1, step 2.1]

4.1 Write $\lambda$ for Lebesgue measure on $\mathbb R$ and $\mu=\lambda\otimes\lambda$ for its product measure. Tonelli gives $\int_{\mathbb R^2}a(u)a(v)\,d\mu(u,v)=K^2$. The diagonal $D=\{u=v\}$ is product-measurable by step 2.1; its sections are singletons, which are null by [F6] under [A1]. Tonelli applied to $\mathbf1_D$ therefore gives $\mu(D)=0$, and [F7] applied to the nonnegative product-measurable function $a(u)a(v)$ gives $\int_D a(u)a(v)\,d\mu=0$. Let $I_{<}$ and $I_{>}$ denote the integrals of $a(u)a(v)$ over $\{v<u\}$ and $\{u<v\}$, respectively. Tonelli applied to $a(u)a(v)\mathbf1_{\{v<u\}}$, exchanging the order of integration and relabelling the two variables, gives $I_{<}=I_{>}$ because the factors commute. The two strict half-planes and $D$ form a measurable partition of $\mathbb R^2$. Apply [F8] twice to the pointwise decomposition of $a(u)a(v)$ into its restrictions to those three sets: $K^2=I_{<}+I_{>}+0$. Thus $I_{<}=I_{>}=K^2/2$; applying [F8] once more shows that including $D$ changes neither value. Consequently $\int q=4\gamma K^2/2=\Gamma/2$. [A1, F1, F2, F3, F5, F6, F7, F8, step 1.1, step 2.1, step 3.1]

5.1 For every $u$, the inner integral in $q(u)$ is at most $\int a=K$. The product $|u|q(u)$ is measurable by [F10]. Hence $0\leq q(u)\leq4\gamma K a(u)$, and monotonicity and positive homogeneity from [F5] give $\int |u|q(u)du\leq4\gamma K\int|u|a(u)du=4\gamma KH=\Gamma\tau$. The mass from step 4.1 and this first-moment bound are finite. [F1, F5, F10, step 1.1, step 3.1, step 4.1] ∎


## Finite signed-code KL product test

[Open item](item-lem-qec-prereq-signed-ae-code-product-test) · level 3


### Statement

For any two-column isometry $V$ into a fixed finite input spin block and a finite spanning list $T_a$ of the selected order-one tensor error span (including the identity restriction), the pair-product condition holds precisely when all $V^*T_a^*T_bV$ are scalar multiples of $I_2$. For a finite trace-preserving Kraus channel whose Kraus span equals the tested span, this is equivalent to exact decoded correction; containment suffices for the forward correction implication. Retain signed amplitudes before summing cross terms.

In particular, the signed $J=4$ isometry $Ve_0=\sqrt{1/3}e_{4,-4}+\sqrt{2/3}e_{4,2}$, $Ve_1=\sqrt{2/3}e_{4,-2}-\sqrt{1/3}e_{4,4}$ satisfies the pair-product condition for the complete order-one span with every selected target block in $\{3,4,5\}$, as defined in [def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract). No separation of its error supports is assumed. Consequently every finite trace-preserving Kraus channel inside that span is exactly correctable on this code.

### Facts & Assumptions

[F1] The complete selected tensor span includes coherent rank-zero and rank-one families, with targets separated as orthogonal labelled blocks. [def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract)

[F2] Necessity applies to finite trace-preserving Kraus channels. [math:thm-qc-knill-laflamme-necessity](https://alphabetamath.cc/item/thm-qc-knill-laflamme-necessity)

[F3] Sufficiency supplies an exact decoded channel for finite trace-preserving Kraus errors satisfying scalar pair products. [math:thm-qc-knill-laflamme-explicit-recovery](https://alphabetamath.cc/item/thm-qc-knill-laflamme-explicit-recovery)

[F4] Every tensor family in the spin-four contract is a common scalar times the coherent Clebsch–Gordan family. [lem-author-11a9fe6cf386-tensor-cg-identification](item-lem-author-11a9fe6cf386-tensor-cg-identification)

[F5] The finite spanning-list test and its exact channel qualification hold. [lem-author-11a9fe6cf386-finite-span-kl](item-lem-author-11a9fe6cf386-finite-span-kl)

[F6] The signed spin-four vectors give real orthonormal coefficient arrays. [lem-author-11a9fe6cf386-signed-spin-four-coefficients](item-lem-author-11a9fe6cf386-signed-spin-four-coefficients)

[F7] Every mixed weighted coefficient sum C3 is zero, including the signed cancellation. [lem-author-11a9fe6cf386-mixed-binomial-cancellation](item-lem-author-11a9fe6cf386-mixed-binomial-cancellation)

[F8] Every diagonal-difference weighted coefficient sum C4 is zero. [lem-author-11a9fe6cf386-diagonal-binomial-moments](item-lem-author-11a9fe6cf386-diagonal-binomial-moments)

### Proof

**Given:** The finite objects and conventions in the Statement.

**Goal:** Establish the stated identities and implications.

1.1 For the generic finite test, [F5] equates scalar two-by-two compressions with the span pair-product condition and gives precisely the channel qualifications in the Statement. Thus an arbitrary unnormalized spanning list is not itself asserted to be a channel. [F1, F2, F3, F5]

1.2 For the displayed signed code, [F6] gives conditions C1 and C2 of the imported Theorem III.1. The arrays are real and $J=8/2=4$, $t=1$. Facts [F7] and [F8] give C3 and C4 for every one of the nine ordered pairs $(a,b)\in\{0,1,2\}^2$, with the same zero-weight convention as the source. All hypotheses of the independent sufficient condition in External input are therefore met. It supplies scalar pair products for the coherent Eq. (3) error family with all $J'=3,4,5$ and the rank-zero identity. [F6, F7, F8]

2.1 By [F4], the tensor-family equations admit no additional components outside common scalar multiples of that coherent family. For the contract's operators on $H$, their restrictions to the code are exactly those maps embedded into orthogonal target blocks; $I_H$ restricts to the rank-zero identity on the input. Distinct target-block pair products vanish, and the source's same-target pair products are scalar by step 1.2. Linear expansion as in [F5] now covers every operator in the complete selected span, every subset of selected target blocks, and every finite spanning list. In particular every compressed pair product for this signed code is scalar. [F1, F4, F5, step 1.2, algebra]

3.1 For a finite trace-preserving Kraus channel inside that span, step 2.1 supplies the scalar identities required by [F3], and hence an exact decoded recovery. Conversely [F2] and [F5] give necessity for the Kraus span and for any equal tested span. These are the stated algebraic and channel conclusions, with no separated-support assumption. [F2, F3, F5, step 1.1, step 2.1] ∎

### External input

Imported sufficient condition: for $n=8$, $t=1$, real arrays $\alpha_j,\beta_j$ in the spin-$n/2$ magnetic basis satisfy order-one absorption–emission pair-product correction if (C1) $\sum_{j=0}^8\alpha_j\beta_j=0$, (C2) $\sum\alpha_j^2=\sum\beta_j^2=1$, and, for every $0\leq a,b\leq2$, (C3) $\sum_{j=0}^6\binom6j\alpha_{j+a}\beta_{j+b}/\sqrt{\binom8{j+a}\binom8{j+b}}=0$ and (C4) the same weighted sum with numerator $\alpha_{j+a}\alpha_{j+b}-\beta_{j+a}\beta_{j+b}$ vanishes. The error family is the coherent Clebsch–Gordan sum in Eq. (3) with $r=0,1$, $|\delta J|,|\delta m|\leq r$, including its rank-zero identity. Zero numerator-binomial terms are omitted. This is the $n=8,t=1$ specialization of Aydin–Barg, Theorem III.1 (PDF pp. 3–4), using §II Eqs. (1)–(3) for the basis and errors.

Source: [Aydin and Barg, Class of codes correcting absorptions and emissions](https://arxiv.org/pdf/2410.03562v1), §II and Theorem III.1, PDF pp. 2–4. The hypotheses and honest reading limits are given in the source record.

### Source notes

This proof applies the imported sufficient coefficient criterion after the five local intermediates; it does not reconstruct Appendix C or identify the source’s displayed code examples with this code. The result concerns coherent tensor components, not individually resolved magnetic-label matrix units.


## Static Bohr-frequency evaluation of the jump integral

[Open item](item-lem-qec-author-42f4c98e5e20-ule-bohr-reduction) · level 3


### Statement

Assume Countable Choice. Work on $\mathbb C^d$, $d\geq1$, with its standard complex inner product, conjugate-transpose adjoint $\dagger$, and induced operator norm. Let $H_S=H_S^\dagger$ have an orthonormal eigenbasis $|m\rangle$, $1\leq m\leq d$, with real eigenvalues $E_m$. Let $X_\alpha=X_\alpha^\dagger$ and $\|X_\alpha\|\leq1$, $1\leq\alpha\leq N$. Use the normalized $N\times N$ frequency and time kernels $h$ and the positive parameter $\gamma$ of the normalization lemma. Assume the entrywise Fourier identities $\int_{\mathbb R}h(u)e^{i\omega u}\,du=2\pi h(\omega)$ at every Bohr frequency $\omega=E_n-E_m$. For real $s,t$, define $U(t,s)=e^{-iH_S(t-s)}$ by the finite-dimensional matrix-exponential series. For $1\leq\lambda\leq N$, the Schrödinger-picture jump $L_\lambda(t)=\sqrt\gamma\sum_{\alpha=1}^N\int_{\mathbb R}h_{\lambda\alpha}(t-s)U(t,s)X_\alpha U(t,s)^\dagger\,ds$ exists absolutely, is independent of $t$, and equals $2\pi\sqrt\gamma\sum_{m,n=1}^d\sum_{\alpha=1}^Nh_{\lambda\alpha}(E_n-E_m)(X_\alpha)_{mn}|m\rangle\langle n|$, where $(X_\alpha)_{mn}$ denotes the matrix entry in the given eigenbasis.

### Facts & Assumptions

[F1] The normalized time kernel $h$ has finite zeroth and first mixed-norm moments, and $\gamma>0$. [lem-qec-author-42f4c98e5e20-ule-normalization](item-lem-qec-author-42f4c98e5e20-ule-normalization)

[F2] Assuming Countable Choice, on a finite-dimensional system, measurable Hermitian couplings of operator norm at most one give absolutely convergent jump integrals for this kernel. [lem-qec-author-42f4c98e5e20-ule-kernel-operators](item-lem-qec-author-42f4c98e5e20-ule-kernel-operators)

[F3] For matrices on $\mathbb C^d$ with the standard complex inner product, the adjoint is the conjugate transpose, the operator norm is the unit-ball supremum, and $e^{zA}=\sum_{k=0}^\infty z^kA^k/k!$ converges absolutely in operator norm for every complex $z$. [physics:def-nrqmx-finite-hermitian-matrix-exponential](https://alphabetamath.cc/physics/item/def-nrqmx-finite-hermitian-matrix-exponential)

[F4] If $A=A^\dagger$ on $\mathbb C^d$ and $r\in\mathbb R$, then $e^{-irA}$ is unitary and depends differentiably, hence continuously, on $r$ in operator norm. This is the supplier with $\hbar=1$. [physics:lem-nrqmx-finite-hermitian-matrix-exponential](https://alphabetamath.cc/physics/item/lem-nrqmx-finite-hermitian-matrix-exponential)

[A1] Assume Countable Choice for the convergence supplier [F2] and the change-of-variables theorem [F7]. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F5] For a measurable real function $p$, its positive and negative parts are $p^+=\max\{p,0\}$ and $p^-=\max\{-p,0\}$. For integrable $p$, both parts have finite integral and $\int p=\int p^+-\int p^-$. For a complex integrable $f=p+iq$, the integral is $\int f=\int p+i\int q$, and integrability means finite integral of $|f|$. [math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)

[F6] The space $L^1(\mu)$ is a complex vector space and its Lebesgue integral is complex-linear. Thus finite sums and constant complex factors commute with the integral of integrable functions. [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one)

[F7] Assume Countable Choice. For open $U,V\subseteq\mathbb R^n$, a $C^1$ diffeomorphism $T:U\to V$, and nonnegative Lebesgue measurable $a$, the change-of-variables formula is $\int_V a(y)\,dy=\int_U a(T(x))|\det DT(x)|\,dx$. We use $U=V=\mathbb R$ and $T_t(u)=t-u$, for which $T_t^{-1}=T_t$ and $|T_t'|=1$. [math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions](https://alphabetamath.cc/item/thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions)

### Proof

**Given:** Countable Choice, the finite-dimensional complex system, Hermitian $H_S$, real times, bounded Hermitian couplings, normalized kernel, and pointwise inversion identities in the Statement. **Goal:** Prove absolute convergence and evaluate $L_\lambda(t)$.

1.1 Put $u=t-s$. Since $H_S^k|m\rangle=E_m^k|m\rangle$, apply the norm-convergent series in [F3] to each eigenvector to obtain $U(t,s)|m\rangle=e^{-iE_mu}|m\rangle$. As $E_m,u$ are real, its adjoint is diagonal with entries $e^{iE_mu}$. By [F4], $U(t,s)$ is unitary for every real $s,t$. [given, F3, F4]

1.2 Fix real $t$ and put $T_t(u)=t-u$. For any complex $f=p+iq\in L^1(\mathbb R)$, apply [F7] to $|f|$ to obtain $\int|f\circ T_t|=\int|f|<\infty$. Apply [F7] separately to the four nonnegative measurable functions $p^+,p^-,q^+,q^-$ in [F5]. Their integrals are finite, and composition with $T_t$ commutes with taking positive and negative parts. Subtract the two real-part identities and the two imaginary-part identities, then combine them by [F5]. This proves $\int_{\mathbb R}f(s)\,ds=\int_{\mathbb R}f(t-u)\,du$ for complex integrable $f$. In particular, reflection introduces no sign in a Lebesgue integral because the Jacobian is used in absolute value. [A1, F5, F7, algebra]

2.1 For each fixed real $t$, put $Y_\alpha^{(t)}(s)=U(t,s)X_\alpha U(t,s)^\dagger$. By [F4] its matrix entries are continuous in $s$, hence measurable. Conjugate-transpose multiplication gives $(Y_\alpha^{(t)}(s))^\dagger=Y_\alpha^{(t)}(s)$. Unitarity gives $\|Uv\|=\|v\|=\|U^\dagger v\|$ for every vector $v$; consequently $\|UX_\alpha U^\dagger v\|\leq\|X_\alpha\|\|v\|$, so the unit-ball supremum in [F3] gives $\|Y_\alpha^{(t)}(s)\|\leq1$. Together with [A1], these meet the hypotheses needed to apply [F2], with the kernel from [F1], proving absolute convergence of each $L_\lambda(t)$. [given, A1, F1, F2, F3, F4, step 1.1]

3.1 Step 1.1 gives $(Y_\alpha^{(t)}(s))_{mn}=(X_\alpha)_{mn}e^{i(E_n-E_m)(t-s)}$. The entrywise integrands are integrable by step 2.1. Apply step 1.2 to each such entry and use [F6] to extract the constant $(X_\alpha)_{mn}$ and commute the finite matrix and coupling sums with their entrywise integrals. The functions $u\mapsto h_{\lambda\alpha}(u)e^{i(E_n-E_m)u}$ are integrable: their modulus is $|h_{\lambda\alpha}(u)|$, bounded by the mixed norm whose integral is finite in [F1]. Thus the coefficient multiplying $|m\rangle\langle n|$ is $\sqrt\gamma\sum_{\alpha=1}^N(X_\alpha)_{mn}\int_{\mathbb R}h_{\lambda\alpha}(u)e^{i(E_n-E_m)u}\,du$. [F1, F5, F6, step 1.1, step 2.1, step 1.2, algebra]

4.1 Apply the stated entrywise Fourier identity at each real $E_n-E_m$ to the coefficient in step 3.1. This gives exactly the finite sum in the Statement, containing no $t$, and proves time independence as well as the claimed formula. The Fourier identities remain explicit hypotheses; no pointwise inversion conclusion is inferred from integrability alone. [given, step 3.1] ∎



## Quantitative preparation-tail and waiting-time condition

[Open item](item-lem-qec-author-42f4c98e5e20-ule-preparation-tail) · level 3


### Statement

Use the normalized kernel and correlation-moment lemma under their hypotheses. Assume countable choice for the scalar change-of-variables theorem used below. Fix an integer $d\geq1$ and put $V=M_d(\mathbb C)$, with spectral operator norm $\|A\|=\sup_{\|x\|_2\leq1}\|Ax\|_2$. Let $E$ be the space of complex-linear maps $V\to V$, with induced norm $\|T\|=\sup_{\|A\|\leq1}\|T(A)\|$. Fix $t>t_0$. Assume that $s\mapsto\Delta(t,s)\in E$ is strongly measurable on $(-\infty,t_0]$ with respect to Lebesgue measure, and that $\|\Delta(t,s)\|\leq4\gamma\|C(t-s)\|_{\mathrm{ent}}$ almost everywhere there. Retain the convolution hypothesis of the moment lemma. Then the preparation-tail map $D_T(t)=-\int_{-\infty}^{t_0}\Delta(t,s)\,ds$ exists as a Bochner integral in $E$ and obeys $\|D_T(t)\|\leq\Gamma\tau/(t-t_0)$.

For any density operator $\rho$ on $\mathbb C^d$, identified with its matrix in the standard orthonormal basis, and any $\varepsilon>0$, the condition $t-t_0\geq1/(\varepsilon\Gamma)$ implies $\|D_T(t)(\rho)\|\leq\varepsilon\Gamma^2\tau$.

### Facts & Assumptions

[F1] The normalization lemma defines $\Gamma>0$ and $\tau\geq0$. [lem-qec-author-42f4c98e5e20-ule-normalization](item-lem-qec-author-42f4c98e5e20-ule-normalization)

[F2] Under the convolution premise, the nonnegative measurable function $u\mapsto\|C(u)\|_{\mathrm{ent}}$ satisfies $4\gamma\int_0^\infty u\|C(u)\|_{\mathrm{ent}}du\leq\Gamma\tau$. [lem-qec-author-42f4c98e5e20-ule-correlation-moment](item-lem-qec-author-42f4c98e5e20-ule-correlation-moment)

[F3] A real or complex normed space with an ordered finite basis is Banach. The space $E$ above has the $d^4$ coordinate maps that send one standard matrix unit to one standard matrix unit and all other matrix units to zero as an ordered basis. [math:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/item/cor-finite-dimensional-normed-spaces-are-banach)

[F4] Strong measurability means almost-everywhere norm convergence of measurable simple functions. A Bochner integral is the norm limit of the integrals of integrable simple approximants converging in $L^1$. [math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function) [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function)

[F5] For a strongly measurable Banach-valued function $f$, finiteness of $\int\|f\|$ is equivalent to Bochner integrability, and $\|\int f\|\leq\int\|f\|$. [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion) [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality)

[F6] A density operator on a nonzero finite-dimensional complex inner-product space is a non-negative endomorphism of trace one; in an orthonormal basis its matrix is Hermitian positive semidefinite. [math:def-qc-density-operator](https://alphabetamath.cc/item/def-qc-density-operator)

[F7] The nonnegative integral is monotone and positively homogeneous. Under countable choice, a $C^1$ diffeomorphism $T:U\to W$ between open subsets of Euclidean space satisfies $\int_W f(u)du=\int_U f(T(s))|\det DT(s)|ds$ for nonnegative Lebesgue measurable $f$. [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral) [math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions](https://alphabetamath.cc/item/thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions)

[F8] A normal endomorphism of a finite-dimensional complex inner-product space admits an orthonormal eigenbasis. [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)

[A1] Assume countable choice: every sequence of nonempty sets has a choice function. It is used here in the scalar change-of-variables supplier in [F7]. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

### Proof

**Given:** The stated kernel, correlation and strong-measurability hypotheses, countable choice, and $D=t-t_0>0$. **Goal:** Establish existence of the tail map and both quantitative bounds.

1.1 Apply [F7] to $T(s)=t-s$ from $(-\infty,t_0)$ to $(D,\infty)$; it is a $C^1$ diffeomorphism with $|\frac{dT}{ds}(s)|=1$. Endpoints have Lebesgue measure zero. Domination, substitution and monotonicity therefore give $\int_{-\infty}^{t_0}\|\Delta(t,s)\|ds\leq4\gamma\int_D^\infty\|C(u)\|_{\mathrm{ent}}du\leq(4\gamma/D)\int_0^\infty u\|C(u)\|_{\mathrm{ent}}du\leq\Gamma\tau/D<\infty$, using $1\leq u/D$ for $u\geq D$. The norm integrand is measurable up to a null set by strong measurability, as in [F5]. [given, F2, F7, A1, F5]

2.1 By [F3], $E$ is Banach. Strong measurability and the finite norm integral in step 1.1 allow [F5] to be applied in $E$, so the Bochner integral defining $D_T(t)$ exists in the sense of [F4]. Its norm is at most $\int_{-\infty}^{t_0}\|\Delta(t,s)\|ds\leq\Gamma\tau/D$. [given, F3, F4, F5, step 1.1]

3.1 By [F6], $\rho$ is Hermitian positive semidefinite with trace one. Apply [F8] to this normal matrix. Its eigenvalues $\lambda_j$ are nonnegative, since its quadratic form on a unit eigenvector is $\lambda_j$, and their sum is its trace, namely one. Thus $0\leq\lambda_j\leq1$. For a vector with coordinates $x_j$ in the orthonormal eigenbasis, $\|\rho x\|_2^2=\sum_j\lambda_j^2|x_j|^2\leq\sum_j|x_j|^2=\|x\|_2^2$, giving $\|\rho\|\leq1$. By the induced map norm, $\|D_T(t)(\rho)\|\leq\|D_T(t)\|\|\rho\|\leq\Gamma\tau/D$. If $D\geq1/(\varepsilon\Gamma)$, this is at most $\varepsilon\Gamma^2\tau$, also when $\tau=0$. This bounds the stated transient map and does not assert a uniform bound between evolved trajectories. [given, F1, F6, F8, step 2.1, algebra] ∎


## Bounded quadrant modification and generator norms

[Open item](item-lem-qec-author-4e9f1886ce3e-ule-modification-bound) · level 3


### Statement

Assume the Axiom of Countable Choice. Let $V=\mathbb C^{d\times d}$ for a positive integer $d$, with spectral norm $\|X\|_{\rm sp}=\sup_{\|z\|_2\leq1}\|Xz\|_2$, where $\|z\|_2=(\sum_j|z_j|^2)^{1/2}$. Give the space $E$ of complex-linear maps $T:V\to V$ the induced norm $\|T\|=\sup_{\|X\|_{\rm sp}\leq1}\|T(X)\|_{\rm sp}$. Let $q:\mathbb R\to[0,\infty)$ be the measurable scalar envelope, with $\int_{\mathbb R}q(v)dv=\Gamma/2<\infty$ and $\int_{\mathbb R}|v|q(v)dv\leq\Gamma\tau<\infty$. All scalar integrals use Lebesgue measure $\lambda$ on its sigma-algebra $\mathcal L$; all $E$-valued integrals are Bochner integrals, equivalently entrywise integrals in the matrix-unit coordinates of $E$.

Require $\mathcal G:\mathbb R^2\to E$ to be measurable from $\mathcal L\otimes\mathcal L$ to the norm-Borel sigma-algebra of $E$, with $\|\mathcal G(s,u)\|\leq q(s-u)$ for every $s,u$. In particular every fixed-time section is measurable. For every real $t$, define $B(t)=\int_{\mathbb R}\mathcal G(t,u)du$, $L(t)=\int_{\mathbb R}\mathcal G(s,t)ds$ and $M(t)=\int_t^\infty ds\int_{-\infty}^t du\,[\mathcal G(s,u)-\mathcal G(u,s)]$. These integrals converge absolutely in induced norm, and $\|B(t)\|,\|L(t)\|\leq\Gamma/2$ and $\|M(t)\|\leq\Gamma\tau$.



### Facts & Assumptions

[F1] The mass and first-moment bounds on the nonnegative measurable envelope are hypotheses of this lemma. Under its additional kernel and rate hypotheses and Countable Choice, the ULE envelope construction supplies an instance of these bounds; no such kernel representation is required for the present conditional estimate. [lem-qec-author-4e9f1886ce3e-ule-envelope-moments](item-lem-qec-author-4e9f1886ce3e-ule-envelope-moments)

[F2] For bounded linear maps between normed spaces the operator norm is the supremum over the unit ball, and is a norm. We use this twice: for matrices acting on Euclidean vectors and for maps acting on spectrally normed matrices. [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm) [math:lem-operator-norm-is-a-norm](https://alphabetamath.cc/item/lem-operator-norm-is-a-norm)

[F3] A real or complex normed space with a specified finite ordered basis is Banach. [math:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/item/cor-finite-dimensional-normed-spaces-are-banach)

[F4] Strong measurability means almost-everywhere pointwise norm approximation by measurable finite-valued simple functions. A strongly measurable Banach-valued function is Bochner integrable exactly when its norm has finite integral; its integral is the norm limit of the integrals of an integrable-simple approximation. [math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function) [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function) [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)

[F5] For a Bochner-integrable function, the norm of its integral over a measurable set is at most the integral of its norm over that set. [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality)

[F6] Every real-valued product-measurable function has measurable sections at every parameter. On sigma-finite measure spaces, Tonelli equates the product and both iterated integrals of any nonnegative product-measurable function, without assuming finiteness first. Fubini equates the integrals of a complex product-integrable function, with integrable sections almost everywhere and measurable integrable section-integral representatives. [math:thm-tonelli-theorem-for-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-tonelli-theorem-for-sigma-finite-product-spaces) [math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces) [math:thm-sections-of-product-measurable-functions-are-measurable](https://alphabetamath.cc/item/thm-sections-of-product-measurable-functions-are-measurable)

[F7] Translation preserves Lebesgue measurability and measure. Lebesgue outer measure is the infimum of elementary covering costs, and Lebesgue measurability is its Caratheodory criterion. These definitions also permit the elementary reflection argument below. [math:thm-lebesgue-outer-measure-and-measurability-are-translation-invariant](https://alphabetamath.cc/item/thm-lebesgue-outer-measure-and-measurability-are-translation-invariant) [math:def-lebesgue-outer-measure](https://alphabetamath.cc/item/def-lebesgue-outer-measure) [math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra](https://alphabetamath.cc/item/def-lebesgue-measure-and-the-lebesgue-sigma-algebra)

[A1] Assume the Axiom of Countable Choice: every sequence of nonempty sets admits a choice function. It supplies the hypothesis of the Lebesgue-measure theorem in F8 and of the ULE envelope construction when that instance is used. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F8] Under Countable Choice, the Caratheodory family $\mathcal L(\mathbb R)$ is a sigma-algebra and the restriction $\lambda$ of Lebesgue outer measure is a complete measure extending elementary interval length. In particular every bounded interval has its usual finite length. [math:thm-lebesgue-measure-is-a-complete-measure](https://alphabetamath.cc/item/thm-lebesgue-measure-is-a-complete-measure)

[F9] The nonnegative integral is the supremum of the integrals of nonnegative simple minorants. For a simple function $s=\sum_jc_j\mathbf1_{A_j}$ with disjoint measurable $A_j$ and $c_j\geq0$, its integral is $\sum_jc_j\mu(A_j)$. Nonnegative integrals are monotone, positively homogeneous and additive, allowing infinite values; the zero function has integral zero. [math:def-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/def-nonnegative-lebesgue-integral) [math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function) [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral) [math:cor-additivity-of-the-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/cor-additivity-of-the-nonnegative-lebesgue-integral)

[F10] Scalar integration is complex-linear on integrable functions, and $|\int h\,d\mu|\leq\int|h|\,d\mu$ for every integrable scalar $h$. [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one) [math:thm-integral-triangle-inequality](https://alphabetamath.cc/item/thm-integral-triangle-inequality)

[F11] The length induced by a real or complex inner product is a norm. [math:cor-inner-product-induces-a-norm](https://alphabetamath.cc/item/cor-inner-product-induces-a-norm)


[F12] The product sigma-algebra $\mathcal L\otimes\mathcal L$ is generated by measurable rectangles. The norm-Borel sigma-algebra of $E$ is generated by its norm-open sets. A map between measurable spaces is measurable when the inverse image of every measurable target set is measurable. [math:def-product-sigma-algebra-and-finite-product-sigma-algebras](https://alphabetamath.cc/item/def-product-sigma-algebra-and-finite-product-sigma-algebras) [math:def-borel-sigma-algebra](https://alphabetamath.cc/item/def-borel-sigma-algebra) [math:def-measurable-function-between-measurable-spaces](https://alphabetamath.cc/item/def-measurable-function-between-measurable-spaces)

[F13] For sigma-finite measure spaces, their product measure on the product sigma-algebra assigns a measurable set the integral of its section measures, in either order. Here the factors are $(\mathbb R,\mathcal L,\lambda)$; the bounded intervals $[-m,m]$ give sigma-finiteness. The product integrals below use $\lambda\times\lambda$ on $\mathcal L\otimes\mathcal L$. [math:def-product-measure-on-sigma-finite-spaces](https://alphabetamath.cc/item/def-product-measure-on-sigma-finite-spaces)

[F14] For positive integers $m,n$, under the Euclidean identification $\mathbb R^{m+n}=\mathbb R^m\times\mathbb R^n$, one has $\mathcal B(\mathbb R^m)\otimes\mathcal B(\mathbb R^n)=\mathcal B(\mathbb R^{m+n})$. We use $m=n=1$. [math:thm-borel-products-of-euclidean-spaces-are-euclidean-borel](https://alphabetamath.cc/item/thm-borel-products-of-euclidean-spaces-are-euclidean-borel)

[F15] On a measurable space, real scalar multiples, maxima, minima, absolute values and positive and negative parts of measurable real or extended-real functions are measurable. A pointwise sum is measurable when it is defined everywhere. Products are measurable with the total function-product convention assigning zero when either factor is zero; on finite-valued functions these are ordinary products. [math:thm-arithmetic-and-lattice-operations-preserve-measurability](https://alphabetamath.cc/item/thm-arithmetic-and-lattice-operations-preserve-measurability)


### Proof

**Given:** Countable Choice, the measurable dominated map kernel and finite envelope moments in the Statement. **Goal:** Establish the absolute convergence and bounds at every fixed time.

1.1 Under [A1], [F8] makes $(\mathbb R,\mathcal L,\lambda)$ a complete measure space with the usual interval lengths. The coordinate pairing $\langle z,w\rangle=\sum_jz_j\overline{w_j}$ is linear in its first variable and conjugate symmetric by finite sum algebra, and its diagonal is $\sum_j|z_j|^2$, which is nonnegative and vanishes exactly at zero. Its induced length is the displayed Euclidean norm by [F11]. The spaces $V$ and $E$ have their ordered matrix-unit bases. For a matrix unit $e_{ij}$, $\|e_{ij}\|_{\rm sp}=1$ and $|X_{ij}|\leq\|X\|_{\rm sp}$, so $\|T(X)\|_{\rm sp}\leq\sum_{ij}|X_{ij}|\|T(e_{ij})\|_{\rm sp}\leq(\sum_{ij}\|T(e_{ij})\|_{\rm sp})\|X\|_{\rm sp}$. Matrices themselves are bounded on Euclidean space by their finite entry sums. Thus the norms in the Statement are finite operator norms, and [F2] and [F3] make $E$ a finite-dimensional Banach space. Its coordinates $T\mapsto (T(e_{ij}))_{kl}$ are continuous, since their absolute values are at most $\|T\|$. For a continuous real coordinate functional $h$ on $E$, the family of Borel target sets whose inverse images under $h$ are norm-Borel is a sigma-algebra containing every open set; hence $h$ is Borel measurable by [F12]. The inverse-image identity for a composition therefore makes every real and imaginary coordinate of $\mathcal G$ product-measurable. The coordinate bounds just proved and the finite-basis estimate $\|\sum_a c_aH_a\|\leq\sum_a|c_a|\|H_a\|$ from [F2] identify the norm topology of $E$ with its finite real coordinate topology. Every norm-open set is therefore a union of the countably many rational coordinate boxes it contains. Its inverse image under a map with measurable coordinates is a countable union of finite intersections of coordinate preimages. Thus every such map into $E$ is norm-Borel measurable. The swap $S(s,u)=(u,s)$ is measurable because the preimage of a measurable rectangle is the rectangle with its two factors reversed, and these rectangles generate the product sigma-algebra in [F12]. Thus $\mathcal G\circ S$ also has measurable coordinates. The finite coordinate sums, differences, products and positive and negative parts used here and below are measurable by [F15]. Apply the section theorem in [F6] to the real and imaginary coordinates of the product-measurable kernel to obtain measurability of each section coordinate at every parameter. For any map into $E$ with measurable coordinates, round every real and imaginary coordinate to a grid of mesh $1/n$ on the coordinate box $[-n,n]$, and set the approximant to zero outside that box. These are measurable finite-valued simple functions; at each point the coordinates eventually lie in the box and converge, hence converge in norm by the finite basis bound $\|\sum_a c_a H_a\|\leq\sum_a|c_a|\|H_a\|$. This proves strong measurability of $\mathcal G$, its transposed kernel and all their fixed-time sections, without a separate measurability theorem for Banach-valued maps. Coordinate integration agrees with Bochner integration: for simple functions it is the same finite sum, and for an integrable-simple approximation each coordinate's integral error is bounded by the integral of the norm error. [given, F2, F3, F4, F6, A1, F8, F9, F10, F11, F12, F15]

2.1 Besides translation from [F7], reflection preserves Lebesgue measure on the line. Indeed, reflect a half-open interval covering to intervals of the same lengths, and enlarge the reflected intervals to half-open intervals with total extra length less than any prescribed $\varepsilon>0$ (use extra lengths at most $\varepsilon 2^{-j-1}$ in an enumeration of all component intervals). The elementary-cover definition then gives $\lambda^*(-A)\leq\lambda^*(A)+\varepsilon$ for every set with finite outer measure; reflecting twice gives equality, also covering the infinite case. Substituting $-C$ for the test set $C$ in the Caratheodory criterion proves that reflection preserves measurable sets and their measure. Therefore translations and reflection preserve integrals of nonnegative measurable functions: their inverse images preserve indicator integrals, then finite nonnegative simple integrals, and finally the supremum defining the nonnegative integral. Consequently, for every $t$, $\int_{\mathbb R}q(t-u)du=\int_{\mathbb R}q(s-t)ds=\int_{\mathbb R}q=\Gamma/2$. The sections in $B(t),L(t)$ are strongly measurable by step 1.1, so [F4] gives their Bochner integrability, and [F5] gives both asserted marginal bounds. [given, F1, F4, F5, F7, step 1.1, A1, F8, F9]

3.1 For any nonnegative Lebesgue-measurable $f$ and fixed $s>t$, the one-dimensional substitution $v=s-u$ justified in step 2.1 gives $\int_{-\infty}^t f(s-u)du=\int_{s-t}^\infty f(v)dv$. The coordinate pullback $(s,v)\mapsto f(v)$ is product-measurable: the inverse image of a Borel target set $B$ is the measurable rectangle $\mathbb R\times f^{-1}(B)$. Lebesgue measurability contains the one-dimensional Borel sigma-algebra: by [F8] it contains elementary intervals and is a sigma-algebra; every open subset of the line is the countable union of the rational half-open intervals contained in it. Consequently [F12] and [F14] give $\mathcal B(\mathbb R^2)=\mathcal B(\mathbb R)\otimes\mathcal B(\mathbb R)\subseteq\mathcal L\otimes\mathcal L$. The region $D_t=\{(s,v):t<s<t+v\}$ is open and hence product-measurable. Its indicator is measurable because its target preimages are among $\varnothing,D_t,D_t^c,\mathbb R^2$. By [F15], $(s,v)\mapsto\mathbf1_{D_t}(s,v)f(v)$ is nonnegative and product-measurable, with value zero outside $D_t$ also if $f(v)$ is infinite. The two real-line Lebesgue spaces are sigma-finite, as they are covered by the finite-measure intervals $[-m,m]$. Tonelli therefore yields $\int_t^\infty ds\int_{-\infty}^t du\,f(s-u)=\int_0^\infty dv\int_t^{t+v}ds\,f(v)=\int_0^\infty vf(v)dv$. This identity permits infinite values and was obtained without presupposing finiteness or a two-dimensional change of variables. [given, F6, step 2.1, F8, F9, F12, F13, F14, F15]

4.1 Reflection from step 2.1 and the sum rule in [F15] make $f(v)=q(v)+q(-v)$ measurable. The coordinate differences of $A(s,u)=\mathcal G(s,u)-\mathcal G(u,s)$ are measurable by step 1.1 and [F15]. The norm is continuous, since $|\|T\|-\|U\||\leq\|T-U\|$ follows from [F2]. Using the same continuous-map inverse-image argument as in step 1.1, its composition with $A$ is product-measurable. Multiplication by the quadrant indicator and the coordinate positive and negative parts preserve measurability by [F15]. Put $A(s,u)=\mathcal G(s,u)-\mathcal G(u,s)$ and $f(v)=q(v)+q(-v)$. Then $\|A(s,u)\|\leq f(s-u)$, and the identity in step 3.1 gives $\int_t^\infty ds\int_{-\infty}^t du\,\|A(s,u)\|\leq\int_0^\infty v(q(v)+q(-v))dv=\int_{\mathbb R}|v|q(v)dv\leq\Gamma\tau$. The scalar norm of $A$ restricted to the quadrant is product-measurable, so Tonelli identifies this finite iterated integral with its product integral. Each fixed-$s$ inner section is integrable, since its norm integral is bounded by $\int_{\mathbb R}(q(s-u)+q(u-s))du=\Gamma$. By step 1.1 and [F4], the inner sections and the product kernel are Bochner integrable. Each coordinate has absolute value at most $\|A\|$. Its real and imaginary positive and negative parts are nonnegative product-measurable; Tonelli makes their section integrals measurable. All are finite for every $s$ by the section bound, so their differences give measurable coordinates of the actual inner-integral map at every $s$. Scalar Fubini applies to these integrable coordinates and identifies their product and iterated integrals. Step 1.1 gives its strong measurability; [F5] bounds its norm by the inner norm integral, and the finite estimate above and [F4] give its outer Bochner integrability. Applying [F5] once more gives $\|M(t)\|\leq\Gamma\tau$. Coordinate Fubini also identifies this iterated integral with the quadrant product integral. Together with step 2.1, this proves all the absolute-convergence and norm claims for every $t$. [given, F1, F4, F5, F6, step 1.1, step 2.1, step 3.1, F9, F10, F12, F13, F2, F15] ∎


## ULE jump construction under independent bath hypotheses

[Open item](item-pthm-qec-prereq-ule-jump-and-lamb-contract) · level 4


### Statement

Assume Countable Choice for the cited kernel-operator and static-jump constructions. For a finite-dimensional system, take $H=H_S(t)+H_B+\sqrt\gamma\sum_{\alpha=1}^nX_\alpha B_\alpha$, with Hermitian $X_\alpha,B_\alpha$, $\|X_\alpha\|\leq1$, $\gamma>0$, and units $\hbar=1$. Assume a centered stationary Gaussian bath: $[H_B,\rho_B]=0$, $\operatorname{Tr}(\rho_BB_\alpha)=0$, and bath correlation functions are determined by two-point correlations by Wick pairings. The preparation is $\rho_{SB}(t_0)=\rho_S(t_0)\otimes\rho_B$. For the ULE approximation use the source's remote-past formulation $t_0\to-\infty$, not arbitrary newly factorized preparation. Set $C_{\alpha\beta}(t-s)=\operatorname{Tr}_B(\widetilde B_\alpha(t)\widetilde B_\beta(s)\rho_B)$, with $\widetilde B_\alpha(t)=e^{iH_Bt}B_\alpha e^{-iH_Bt}$. Require the spectral and time-kernel regularity of the named kernel contract. Write its kernel as $h=g$, so $h(\omega)=\sqrt{J(\omega)/(2\pi)}$, $\Gamma=4\gamma(\int\|h(t)\|_{2,1}dt)^2$ and $\tau=\int|t|\|h(t)\|_{2,1}dt/\int\|h(t)\|_{2,1}dt$, and assume $\Gamma\tau\ll1$ as the weak Markov approximation regime.

With $U(t)$ the system propagator and $\widetilde X_\alpha(s)=U(s)^\dagger X_\alpha U(s)$, the imported ULE coefficients are $\widetilde L_\lambda(t)=\sqrt\gamma\sum_\alpha\int h_{\lambda\alpha}(t-s)\widetilde X_\alpha(s)ds$ and $\widetilde\Lambda(t)=\frac\gamma{2i}\sum_{\alpha\beta}\int\!\int\widetilde X_\alpha(s)\widetilde X_\beta(s')\phi_{\alpha\beta}(s-t,s'-t)ds\,ds'$, where $\phi(u,v)=h(u)h(-v)\operatorname{sgn}(u-v)$. These are the coefficients of a Lindblad-form approximation; this statement does not assert exact reduced dynamics satisfy a residual-free Lindblad equation.

For static $H_S|m\rangle=E_m|m\rangle$, assume the Fourier identities at the required Bohr frequencies and the principal values below exist. Then $L_\lambda=2\pi\sqrt\gamma\sum_{m,n,\alpha}h_{\lambda\alpha}(E_n-E_m)(X_\alpha)_{mn}|m\rangle\langle n|$. With the erratum's corrections, $\Lambda=\sum_{\alpha\beta,lmn}f_{\alpha\beta}(E_l-E_m,E_n-E_l)(X_\alpha)_{ml}(X_\beta)_{ln}|m\rangle\langle n|$, where $f(E_1,E_2)=-2\pi\gamma\operatorname{PV}\int_{-\infty}^{\infty}\omega^{-1}h(\omega-E_1)h(\omega+E_2)d\omega$.

For finite $t_0$ and $t>t_0$, the source separately bounds the BR preparation-tail correction acting on the reduced density matrix by $\|D_T(t)(\rho(t))\|\leq\Gamma\tau/(t-t_0)$, where the norm is the spectral operator norm and $D_T$ is the tail map defined in External input. For any $\varepsilon>0$, on an observation window $t\geq t_*>t_0$, the explicit sufficient condition $t_*-t_0\geq1/(\varepsilon\Gamma)$ ensures $\|D_T(t)(\rho(t))\|\leq\varepsilon\Gamma^2\tau$. This identifies a preparation condition; it does not transfer the source's exact remote-past ULE residual constant to finite preparation or provide an all-time trajectory error bound.

### Facts & Assumptions

[F1] Use the spectral matrix, principal-value definition and explicit convergence conditions. [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[F2] Use the kernel adjoint symmetry and rate identities in the source normalization. [lem-qec-author-42f4c98e5e20-ule-normalization](item-lem-qec-author-42f4c98e5e20-ule-normalization)

[F3] The operator convolutions exist and their Lamb operator is Hermitian. [lem-qec-author-42f4c98e5e20-ule-kernel-operators](item-lem-qec-author-42f4c98e5e20-ule-kernel-operators)

[F4] Static jumps reduce to the stated Bohr-frequency sum under pointwise inversion. [lem-qec-author-42f4c98e5e20-ule-bohr-reduction](item-lem-qec-author-42f4c98e5e20-ule-bohr-reduction)

[F5] The convolution correlation has first moment bounded by the normalized kernel moments. [lem-qec-author-42f4c98e5e20-ule-correlation-moment](item-lem-qec-author-42f4c98e5e20-ule-correlation-moment)

[F6] Use the density-matrix tail bound imported in External input 1, under that source model. For $\varepsilon>0$, $\Gamma>0$, $\tau\geq0$ and $t\geq t_*>t_0$ with $t_*-t_0\geq1/(\varepsilon\Gamma)$, it gives $\|D_T(t)(\rho(t))\|\leq\Gamma\tau/(t-t_0)\leq\Gamma\tau/(t_*-t_0)\leq\varepsilon\Gamma^2\tau$. This scalar comparison uses the imported bound directly and remains valid when $\tau=0$. [Universal Lindblad equation for open quantum systems](https://arxiv.org/pdf/2004.01469), Appendix A6, (A38)–(A41).

[F7] For the finite-dimensional system, $\rho_S(t_0)$ and the reduced $\rho(t)$ are density operators: non-negative endomorphisms with trace one. This finite-dimensional definition applies to the system states, without imposing a finite-dimensional restriction on the bath state $\rho_B$. [math:def-qc-density-operator](https://alphabetamath.cc/item/def-qc-density-operator)

[A1] Assume Countable Choice for the kernel-operator construction in [F3] and the static Bohr reduction in [F4]. The imported microscopic model and its finite-preparation tail bound are retained under their stated hypotheses. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [lem-qec-author-42f4c98e5e20-ule-kernel-operators](item-lem-qec-author-42f4c98e5e20-ule-kernel-operators) [lem-qec-author-42f4c98e5e20-ule-bohr-reduction](item-lem-qec-author-42f4c98e5e20-ule-bohr-reduction)

### External input

Imported input 1: Nathan–Rudner's stationary Gaussian, normalized finite-channel model in its remote-past preparation formulation yields the coefficients (28)–(29) and static formula (33). Define $\Delta_B(t,s)$ by importing exactly the Born superoperator's defining expression in Appendix A4, Eq. (A25). The conventions included in this definition are left/right multiplication $\widehat A^l(M)=AM$, $\widehat A^r(M)=MA$ from (A2), $\nu_l=1$, $\nu_r=-1$ following (A6), and the bath superoperator correlations $J^{mn}_{\alpha\beta}(t-s)$ defined in (A9). The source's time-domain $J(t-s)$ is our $C(t-s)$, its system and bath operators in Appendix A are our interaction-picture $\widetilde X_\alpha$ and $\widetilde B_\alpha$, and its $g$ is our $h$. The definition retains the same system–bath model, normalized couplings, Gaussian correlations and factorized preparation hypotheses stated above; it does not infer this map from a norm bound. All superoperator norms here mean (A3), namely $\|T\|=\sup_{\|M\|\leq1}\|T(M)\|$ with spectral operator norms on matrices, and $\|A\|_{\mathrm{ent}}=\sum_{\alpha\beta}|A_{\alpha\beta}|$ is the source's entrywise norm. For finite $t_0$ and $t>t_0$, (A38) defines $D_T(t)=-\int_{-\infty}^{t_0}\Delta_B(t,s)ds$, and Appendix A6 gives $\|\Delta_B(t,s)\|\leq4\gamma\|C(t-s)\|_{\mathrm{ent}}$ and $\|D_T(t)(\rho(t))\|\leq\Gamma\tau/(t-t_0)$, the latter after (A41) using (B2). This imports the source-defined map and density-matrix estimate, including its existence in that model. The convolution identity immediately before (B4), the resulting norm inequality (B4), and moment relation (B2) apply in this model. Source: [Universal Lindblad equation for open quantum systems](https://arxiv.org/pdf/2004.01469), Sec. IIIC, (24)–(29), Sec. IVA, (33), Appendix A opening and A1–A2, (A2)–(A3), signs following (A6), (A9), Appendix A4, (A25), Appendix A6, (A38)–(A41), and Appendix B, (B2)–(B4). The microscopic derivation and finite-preparation tail bound are imported, not reconstructed here.

Imported input 2: The static Lamb formula and coefficient above use the corrected energy ordering, sign and coupling factor. Source: [Erratum](https://journals.aps.org/prb/pdf/10.1103/PhysRevB.104.119901), p. 1, corrected expressions (1)–(2), and the time-kernel correction (5). Principal-value existence remains an explicit hypothesis.

### Source notes

The four cited local lemmas establish kernel symmetry and rate identities, coefficient well-definedness, static evaluation and the correlation-moment estimate. The finite-preparation tail bound is imported directly from Appendix A6, and [F6] gives its scalar waiting-time consequence. They do not reconstruct the microscopic ULE derivation. The supplier and source use the same convention, $h(\omega)=g(\omega)=\sqrt{J(\omega)/(2\pi)}$; the new letter only distinguishes frequency and time-kernel notation in these intermediate lemmas. The static Lamb formula follows the independently read erratum. No Gaussianity, factorization, memory bound or weak-coupling regime for a particular photon model follows merely from its vocabulary or spectral cutoff.


## Derivative of the quadrant modification

[Open item](item-lem-qec-author-4e9f1886ce3e-ule-modification-derivative) · level 4


### Statement

Assume the Axiom of Countable Choice. Under the dominated-kernel hypotheses and definitions of the quadrant-modification lemma, assume $B(t)$ and $L(t)$ are continuous in induced norm. Then $M$ is continuously differentiable and $\dot M(t)=L(t)-B(t)$.

For an $E$-valued curve $H$, continuity in induced norm means that for every $t\in\mathbb R$ and $\varepsilon>0$ there exists $\delta>0$ such that $\|H(v)-H(t)\|<\varepsilon$ whenever $|v-t|<\delta$. Its derivative $\dot H(t)=D\in E$ means that $\|(H(t+h)-H(t))/h-D\|\to0$ as the nonzero real number $h$ tends to zero. Continuously differentiable means that this derivative exists at every real $t$ and that $t\mapsto\dot H(t)$ is continuous in the same sense.

### Facts & Assumptions

[F1] Use the quadrant-modification supplier's spaces $V,E$, induced norm, product-measurable kernel $\mathcal G$, Lebesgue measure, envelope $q$ and absolutely convergent maps $B,L,M$. All map integrals agree with their finite matrix-unit coordinate integrals. [lem-qec-author-4e9f1886ce3e-ule-modification-bound](item-lem-qec-author-4e9f1886ce3e-ule-modification-bound)

[F2] On sigma-finite measure spaces, a nonnegative product-measurable function has measurable section integrals, and its product and both iterated integrals agree, including before finiteness is known. [math:thm-tonelli-theorem-for-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-tonelli-theorem-for-sigma-finite-product-spaces)

[F3] On sigma-finite measure spaces, a complex product-measurable function with integrable absolute value has equal product and iterated integrals, using integrable section-integral representatives and the usual almost-everywhere convention. [math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces)

[F4] Complex $L^1$ functions form a vector space and their integral is linear; $|\int f|\leq\int|f|$ for $f\in L^1$; the nonnegative integral is monotone and homogeneous for nonnegative scalars. Apply these scalar results to the coordinates of maps. [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one) [math:thm-integral-triangle-inequality](https://alphabetamath.cc/item/thm-integral-triangle-inequality) [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)

[F5] Assume the Axiom of Countable Choice. Under this hypothesis, the box-measure theorem with $n=1$ makes every bounded interval with endpoints $a\leq b$, with any endpoint convention, Lebesgue measurable of measure $b-a$. In particular $\lambda([-m,m])=2m$ for positive integers $m$ and $\lambda(\{c\})=0$ for every real $c$. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind)

[F6] The simple-integral definition and its agreement with the nonnegative integral give $\int\mathbf1_D\,d\mu=\mu(D)$ for every measurable set $D$. A nonnegative measurable function has integral zero over a measurable null set. These statements apply both to $\lambda$ and to its product measure. [math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function) [math:prop-the-nonnegative-integral-agrees-with-the-simple-integral](https://alphabetamath.cc/item/prop-the-nonnegative-integral-agrees-with-the-simple-integral) [math:cor-integral-over-a-null-set-vanishes](https://alphabetamath.cc/item/cor-integral-over-a-null-set-vanishes)

[F7] Assume Countable Choice. If $U,V\subseteq\mathbb R^n$ are open, $T:U\to V$ is a $C^1$ diffeomorphism and $h\in L^1(V,\lambda_n)$, then $\int_V h(y)dy=\int_U h(T(x))|\det DT(x)|dx$. We use only affine bijections of the real line with slopes $1$ or $-1$, whose inverses are affine and whose derivatives and inverse derivatives are constant, so the Jacobian modulus is $1$. [Change of variables for integrable functions](https://alphabetamath.cc/item/cor-c-one-change-of-variables-for-l-one-functions)

### Proof

**Given:** Countable Choice, the stated kernel, spaces and continuous $B,L$. **Goal:** Differentiate $M$ in induced norm.

1.1 Put $A(s,u)=\mathcal G(s,u)-\mathcal G(u,s)$, so $A(u,s)=-A(s,u)$. For a matrix unit $e_{ij}$, the coordinate $c_{ij,kl}(T)=(T(e_{ij}))_{kl}$ satisfies $|c_{ij,kl}(T)|\leq\|T\|$, because $\|e_{ij}\|_{\rm sp}=1$ and every matrix entry is bounded by the spectral norm. Conversely, let $H_{ij,kl}(X)=X_{ij}e_{kl}$. Then $\|H_{ij,kl}\|=1$ and $T=\sum_{ij,kl}c_{ij,kl}(T)H_{ij,kl}$, so $\|T\|\leq\sum_{ij,kl}|c_{ij,kl}(T)|$. There are $N=d^4$ such coordinates. The coordinate-swap map is measurable on the product sigma-algebra (inverse images of rectangles are rectangles), hence $A$, its coordinates and its norm are product-measurable. Apply [F7] to $q\in L^1(\mathbb R)$ with the affine maps $s\mapsto s-v$ and $s\mapsto v-s$. Both transformed integrals equal $\int q=\Gamma/2$; thus for every $v$, $\int_{\mathbb R}\|A(s,v)\|ds\leq\int_{\mathbb R}(q(s-v)+q(v-s))ds=\Gamma$. The same bound holds for the other section orientation by these same two substitutions. [given, F1, F4, F7]

2.1 By [F5], the intervals $[-m,m]$ of finite measure cover $\mathbb R$, so both Lebesgue spaces are sigma-finite. For a fixed $c\in\mathbb R$, the sets $\mathbb R\times\{c\}$ and $\{c\}\times\mathbb R$ are product-measurable. Tonelli [F2] applied to their indicators, integrating first in the singleton coordinate, gives product measure zero: each inner integral is $\lambda(\{c\})=0$ by [F5] and [F6], and the outer integral of the zero function is zero by [F4]. This avoids multiplying zero by infinite measure. By [F6], the integral of $\|A\|$ over either line is zero; the coordinate bound in step 1.1 and [F4] then show that every coordinate integral over either line is zero. The same holds over finite unions of these lines by splitting into disjoint measurable pieces. Also [F5] and [F6] give $\int_J1\,d\lambda=b-a$ for every interval $J$ with finite endpoints $a<b$, independently of its endpoint convention; [F4] supplies the corresponding constant-integrand formulas. [F2, F4, F5, F6, step 1.1]

3.1 Put $f(r)=q(r)+q(-r)$. By [F7] and scalar linearity [F4], $f$ is measurable and integrable with $\int f=\Gamma$. Applying [F7] to the integrable function $|r|q(r)\mathbf1_{\{r<0\}}$ with reflection, and splitting its first moment by [F4], gives $\int_0^\infty rf(r)dr=\int_{\mathbb R}|r|q(r)dr\leq\Gamma\tau$. Fix $t$ and set $Q_t=\{(s,u):s>t,\ u<t\}$. For each $s>t$, apply [F7] with $u\mapsto s-u$ to the integrable function $f(r)\mathbf1_{\{r>s-t\}}$ to obtain $\int_{-\infty}^t f(s-u)du=\int_{s-t}^\infty f(r)dr$. Since $\|A(s,u)\|\leq f(s-u)$, Tonelli [F2] applied to the product-measurable function $\mathbf1_{\{t<s<t+r\}}f(r)$ yields $\int_t^\infty ds\int_{-\infty}^t du\,\|A(s,u)\|\leq\int_0^\infty dr\int_t^{t+r}ds\,f(r)=\int_0^\infty rf(r)dr\leq\Gamma\tau$. The last equality uses the constant-integrand formula of step 2.1. Apply [F2] also to $\mathbf1_{Q_t}\|A\|$, which is product-measurable by step 1.1. Its product integral is finite by the preceding iterated bound. Each coordinate of $\mathbf1_{Q_t}A$ is therefore absolutely product-integrable. Its actual inner section integrals are finite at every parameter by step 1.1 and measurable by applying [F2] to the positive and negative real and imaginary coordinate parts. Thus [F3] identifies their product and iterated integrals, and the definition of $M$ in [F1] gives $M(t)=\int_{Q_t}A\,d(\lambda\times\lambda)$ coordinatewise for every $t$. This derives the needed quadrant identity locally. [F1, F2, F3, F4, F7, step 1.1, step 2.1]

4.1 Fix $a<b$ and put $I=(a,b)$. Use the sigma-finiteness and interval-integral formulas from step 2.1. Apply [F2] to the product-measurable function $\mathbf1_I(v)\|A(s,v)\|$; step 1.1 and monotonicity give $\int_{\mathbb R\times I}\|A(s,v)\|\,d(\lambda\times\lambda)\leq\Gamma(b-a)<\infty$. Thus each coordinate of $A$ restricted to this strip, its measurable subsets, and the square $I\times I$ has integrable absolute value. The quadrant restrictions are also absolutely integrable by step 3.1. Apply [F3] coordinatewise on these regions whenever changing integration order. Every section needed here is integrable by step 1.1; [F2] applied to the positive and negative parts of its real and imaginary coordinates gives measurable actual section integrals. Thus the almost-everywhere convention in [F3] does not affect the outer integrals or substitute for any fixed-time marginal. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1]

5.1 Write $Q_t=\{(s,u):s>t,\ u<t\}$ and $\int_D A=\int_D A\,d(\lambda\times\lambda)$, interpreted coordinatewise. Use the locally derived product-integral identity in step 3.1. Subtract the absolutely convergent quadrant integrals and split their indicators using [F4]. Up to null boundary lines, the gained region is $(b,\infty)\times I$ and the lost region is $I\times(-\infty,a)$. Consequently $M(b)-M(a)=\int_I dv\int_b^\infty A(s,v)ds-\int_I dv\int_{-\infty}^a A(v,u)du=\int_I dv\int_{\mathbb R\setminus I}A(s,v)ds$, where antisymmetry changes the second minus sign to plus. The square integral $S=\int_I dv\int_I A(s,v)ds$ equals $-S$ by [F3] and antisymmetry, so $S=0$. Adding it gives $M(b)-M(a)=\int_a^b dv\int_{\mathbb R}A(s,v)ds$. Every split and change of order is among the integrable restrictions established in step 4.1; step 2.1 supplies the zero product measures and zero coordinate integrals of all boundary lines. [F1, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1]

6.1 By the definitions in [F1] and scalar linearity [F4], $\int_{\mathbb R}A(s,v)ds=L(v)-B(v)$ for every $v$. Put $F=L-B$. For each $t$ and $\varepsilon>0$, choose a continuity radius for each of $L,B$ with tolerance $\varepsilon/2$ and take their minimum. The triangle inequality gives $\|F(v)-F(t)\|\leq\|L(v)-L(t)\|+\|B(v)-B(t)\|<\varepsilon$ within this radius, so $F$ is continuous in the sense defined in the Statement. Step 5.1 gives $M(b)-M(a)=\int_a^b F(v)dv$ for every $a<b$. Therefore for every nonzero real $h$, $(M(t+h)-M(t))/h-F(t)=h^{-1}\int_t^{t+h}(F(v)-F(t))dv$, with $\int_t^{t+h}=-\int_{t+h}^t$ when $h<0$. All these integrals are coordinate integrals of integrable functions; the interval-integral formula in step 2.1 gives $hF(t)$ for the constant term, with the stated orientation when $h<0$. [given, F1, F4, step 2.1, step 5.1]

7.1 Fix $t$ and $\varepsilon>0$. Continuity of $F$ gives $\delta>0$ such that $\|F(v)-F(t)\|<\varepsilon/N$ whenever $|v-t|<\delta$. If $0<|h|<\delta$, each coordinate of the last expression in step 6.1 has modulus at most $|h|^{-1}\int_{\min(t,t+h)}^{\max(t,t+h)}|c_{ij,kl}(F(v)-F(t))|dv\leq\varepsilon/N$ by [F4], the coordinate bound in step 1.1 and the interval-integral formula in step 2.1. Summing the $N$ coordinate estimates gives $\|(M(t+h)-M(t))/h-F(t)\|\leq\varepsilon$. This proves the two-sided derivative $\dot M(t)=F(t)=L(t)-B(t)$ at every $t$; it is continuous since $F$ is continuous. [given, F4, step 1.1, step 2.1, step 6.1] ∎


## Modified-operator distance and residual composition

[Open item](item-lem-qec-author-4e9f1886ce3e-ule-residual-composition) · level 4


### Statement

Assume the Axiom of Countable Choice, as required by the quadrant-modification construction. Let $V=\mathbb C^{d\times d}$ for a positive integer $d$, with spectral norm $\|X\|_{\rm sp}=\sup_{\|z\|_2\leq1}\|Xz\|_2$, where $\|z\|_2=(\sum_j|z_j|^2)^{1/2}$. Use the quadrant maps $B(t),L(t),M(t):V\to V$, which are complex-linear, with induced norm $\|T\|=\sup_{\|X\|_{\rm sp}\leq1}\|T(X)\|_{\rm sp}$. Fix $\Gamma>0$, $\tau\geq0$ and $R\geq0$. On an open real time interval $J$, assume $M$ is differentiable in induced norm and $\dot M=L-B$, $\|M\|\leq\Gamma\tau$, $\|L\|\leq\Gamma/2$. The derivative identity is a hypothesis of this composition estimate.

Let $\rho:J\to V$ be differentiable in spectral norm, with each $\rho(t)$ a density operator on $\mathbb C^d$, and let $\xi:J\to V$ satisfy $\dot\rho=B\rho+\xi$, $\|\xi\|_{\rm sp}\leq R$ and $\|\dot\rho\|_{\rm sp}\leq\Gamma/2$. Products such as $B\rho$ denote evaluation $B(t)[\rho(t)]$, $LM\rho=L(t)[M(t)[\rho(t)]]$, and $I$ is the identity map on $V$. All identities and bounds are pointwise on $J$.

Then $\sigma=(I+M)\rho$ satisfies $\|\sigma-\rho\|_{\rm sp}\leq\Gamma\tau$ and $\dot\sigma=L\sigma+\eta$ with $\eta=\xi+M\dot\rho-LM\rho$ and $\|\eta\|_{\rm sp}\leq R+\Gamma^2\tau$. For $R=\Gamma^2\tau$ this is $2\Gamma^2\tau$; for the finite-preparation budget $R=\Gamma^2\tau+\delta\geq0$ it is $2\Gamma^2\tau+\delta$. Positivity or exact trace normalization of $\sigma$ is not required for these operator estimates.

### Facts & Assumptions

[F1] The preparation-budget lemma retains the finite tail and shows only convergence of residual budgets, not of the states. [lem-qec-author-4e9f1886ce3e-remote-preparation-limit](item-lem-qec-author-4e9f1886ce3e-remote-preparation-limit)

[F2] Under Countable Choice and their defining dominated-kernel hypotheses, the quadrant maps act on this same matrix space and obey the stated induced-norm bounds. [lem-qec-author-4e9f1886ce3e-ule-modification-bound](item-lem-qec-author-4e9f1886ce3e-ule-modification-bound)

[F3] Differentiation is the real-time difference-quotient limit in the indicated norm. To identify it with real-coordinate differentiation, regard the matrix and map spaces as real vector spaces. Let $E_{jk}$ have entry $1$ at $(j,k)$ and zero elsewhere, for $0\leq j,k<d$. The matrices $E_{jk},iE_{jk}$ form a real basis of $V$: their coefficients are precisely the real and imaginary entries. For the complex-linear map space use $H_{jk,ab}(X)=X_{ab}E_{jk}$ and $iH_{jk,ab}$, with $0\leq j,k,a,b<d$. Their coefficients are the real and imaginary entries of $T(E_{ab})$, so they form a real basis. Each map is bounded: $|X_{ab}|\leq\|X\|_{\rm sp}$ gives $\|T(X)\|_{\rm sp}\leq\sum_{a,b}|X_{ab}|\|T(E_{ab})\|_{\rm sp}\leq(\sum_{a,b}\|T(E_{ab})\|_{\rm sp})\|X\|_{\rm sp}$. Thus [F6] supplies norms on these real spaces. Over the complete field $\mathbb R$, finite-dimensional norm equivalence compares each indicated norm above and below with its real-coordinate maximum norm by positive constants. Applied to difference quotients minus a candidate limit, those comparisons identify norm convergence with coordinate convergence, hence identify the derivatives with the real-coordinate definition. The assumed identity $\dot M=L-B$ is used directly; no continuity of $B$ or $L$ is invoked here. [math:def-vector-valued-derivative-and-integral](https://alphabetamath.cc/item/def-vector-valued-derivative-and-integral) [math:thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field](https://alphabetamath.cc/item/thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field)

[F4] A density operator is a non-negative endomorphism with trace one. Non-negative means self-adjoint with nonnegative quadratic form, and trace is computed in any ordered basis. [math:def-qc-density-operator](https://alphabetamath.cc/item/def-qc-density-operator) [math:def-non-negative-and-positive-operator](https://alphabetamath.cc/item/def-non-negative-and-positive-operator) [math:def-trace-of-an-endomorphism](https://alphabetamath.cc/item/def-trace-of-an-endomorphism)

[F5] A normal endomorphism of a finite-dimensional complex inner-product space has an orthonormal eigenbasis. In particular this applies to a self-adjoint endomorphism, since it commutes with its adjoint. [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)

[F6] The operator norm satisfies $\|T(X)\|_{\rm sp}\leq\|T\|\|X\|_{\rm sp}$ and is a norm on the space of bounded maps. The spectral norm is itself the operator norm for matrices acting on Euclidean vectors. [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm) [math:lem-operator-norm-is-a-norm](https://alphabetamath.cc/item/lem-operator-norm-is-a-norm)

[F7] Matrix addition and scalar multiplication in $V=M_{d\times d}(\mathbb C)$ are entrywise; addition and scalar multiplication of the maps are pointwise in their matrix outputs. [math:def-matrix-space](https://alphabetamath.cc/item/def-matrix-space) [math:lem-operator-norm-is-a-norm](https://alphabetamath.cc/item/lem-operator-norm-is-a-norm)

[A1] Assume the Axiom of Countable Choice inherited from the quadrant-modification supplier. It is used to invoke that supplier's Lebesgue-measure construction and the quadrant-map bounds in [F2]; the local product differentiation and norm estimates require no additional choice principle. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [lem-qec-author-4e9f1886ce3e-ule-modification-bound](item-lem-qec-author-4e9f1886ce3e-ule-modification-bound)

### Proof

**Given:** Countable Choice, the matrix space, quadrant maps, differentiable curves, derivative identity and bounds in the Statement. **Goal:** Establish the modified-operator distance and residual estimates.

1.1 Fix $t\in J$. By [F4] and [F5], $\rho(t)$ has an orthonormal eigenbasis $e_1,\ldots,e_d$ with eigenvalues $\lambda_j$. Nonnegativity gives $\lambda_j=\langle\rho(t)e_j,e_j\rangle\geq0$, and the trace computed in that basis gives $\sum_j\lambda_j=1$. Hence $0\leq\lambda_j\leq1$. For $z=\sum_j c_j e_j$, orthonormality gives $\|\rho(t)z\|_2^2=\sum_j\lambda_j^2|c_j|^2\leq\sum_j|c_j|^2=\|z\|_2^2$. Taking the unit-ball supremum shows $\|\rho(t)\|_{\rm sp}\leq1$. [given, F4, F5, F6]

1.2 The product differentiation needed here follows directly from difference quotients. For fixed $t$ and nonzero sufficiently small real $h$, put $Q_M(h)=(M(t+h)-M(t))/h$ and $Q_\rho(h)=(\rho(t+h)-\rho(t))/h$. By differentiability these converge in their respective norms to $\dot M(t)$ and $\dot\rho(t)$; in particular they are bounded for small $h$, and $\rho(t+h)-\rho(t)=hQ_\rho(h)\to0$. The difference quotient of $M\rho$ equals $Q_M(h)[\rho(t+h)]+M(t)[Q_\rho(h)]$. By [F6], the difference of its first term from $\dot M(t)[\rho(t)]$ is bounded by $\|Q_M(h)\|\|\rho(t+h)-\rho(t)\|_{\rm sp}+\|Q_M(h)-\dot M(t)\|\|\rho(t)\|_{\rm sp}$, which tends to zero; the second term converges to $M(t)[\dot\rho(t)]$. Thus $\dot\sigma=\dot\rho+\dot M\rho+M\dot\rho$. Substitution of the two assumed differential identities gives $\dot\sigma=L\rho+\xi+M\dot\rho=L\sigma+\xi+M\dot\rho-LM\rho$. [given, F3, F6, F7]

2.1 Therefore $\|\sigma-\rho\|_{\rm sp}=\|M\rho\|_{\rm sp}\leq\|M\|\|\rho\|_{\rm sp}\leq\Gamma\tau$. [given, A1, F2, F6, step 1.1]

3.1 The three residual summands have spectral norms at most $R$, $(\Gamma\tau)(\Gamma/2)$ and $(\Gamma/2)(\Gamma\tau)\|\rho\|_{\rm sp}$, respectively. By the triangle inequality and step 1.1, $\|\eta\|_{\rm sp}\leq R+\Gamma^2\tau$. Substituting each stated value of $R$ proves both specializations, retaining the finite-preparation tail as in [F1]. No positivity or trace claim for the modified operator entered these estimates. They bound a differential residual, rather than the distance between residual-free trajectories, and assert no convergence of preparation families. [given, A1, F1, F2, F6, step 1.1, step 1.2] ∎


## ULE residual bound and the modified-state distinction

[Open item](item-pthm-qec-prereq-ule-modified-state-error-contract) · level 5


### Statement

Under the independent ULE hypotheses define $\Gamma=4\gamma(\int\|g(t)\|_{2,1}dt)^2$ and $\tau_B=\int|t|\|g(t)\|_{2,1}dt/\int\|g(t)\|_{2,1}dt$. The source constructs a modified interaction-picture state within spectral-norm distance $\Gamma\tau_B$ of the exact reduced state; its ULE differential equation has residual bounded by $2\Gamma^2\tau_B$. Small $\Gamma\tau_B$ controls this approximation. A residual bound is not an all-time uniform bound between two trajectories obtained by dropping the residual.

### Facts & Assumptions

[F1] Retain exactly the independent ULE model and its remote-past preparation scope. [pthm-qec-prereq-ule-jump-and-lamb-contract](item-pthm-qec-prereq-ule-jump-and-lamb-contract)

[F2] Use the original spectral-kernel convention and finite moments. [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[F3] Finite preparation retains its tail; only the residual budget tends to its remote-boundary value. [lem-qec-author-4e9f1886ce3e-remote-preparation-limit](item-lem-qec-author-4e9f1886ce3e-remote-preparation-limit)

[F4] The scalar envelope has mass Γ/2 and first moment at most Γτ. [lem-qec-author-4e9f1886ce3e-ule-envelope-moments](item-lem-qec-author-4e9f1886ce3e-ule-envelope-moments)

[F5] The quadrant modification has norm at most Γτ and generator marginals at most Γ/2. [lem-qec-author-4e9f1886ce3e-ule-modification-bound](item-lem-qec-author-4e9f1886ce3e-ule-modification-bound)

[F6] Continuous marginals give the derivative identity L−B. [lem-qec-author-4e9f1886ce3e-ule-modification-derivative](item-lem-qec-author-4e9f1886ce3e-ule-modification-derivative)

[F7] The analytical modification gives residual R+Γ²τ, in particular 2Γ²τ when R=Γ²τ. [lem-qec-author-4e9f1886ce3e-ule-residual-composition](item-lem-qec-author-4e9f1886ce3e-ule-residual-composition)

### External input

Imported contract 1: Under the same stationary Gaussian, finite normalized coupling, finite kernel-moment and remote-past preparation model as the jump supplier, Appendix C constructs $\sigma=(I+M)\rho$ with $M(t)=\int_t^\infty ds\int_{-\infty}^t du[\mathcal G(s,u)-\mathcal G(u,s)]$, using the map kernel in (C2),(C4). It proves $\|\sigma-\rho\|\leq\Gamma\tau$ and $\dot\sigma=L\sigma+\eta$, $\|\eta\|\leq2\Gamma^2\tau$, where $L=\int\mathcal G(s,t)ds$ is the ULE generator. The source envelope is $q(v)=4\gamma k(-v)\int_{-\infty}^v k(-w)dw$, with $k(v)=\|g(v)\|_{2,1}$ and $\|\mathcal G(t,s)\|\leq q(t-s)$. Exact source: [Nathan–Rudner](https://arxiv.org/pdf/2004.01469), PDF p.23 opening and (C1)–(C8); p.24 (C9)–(C22); p.25 residual conclusion; pp.25–26 (C23)–(C31). The microscopic bath-to-map interface and the remote-past BR input are imported rather than reconstructed.

Imported contract 2: The [erratum](https://journals.aps.org/prb/pdf/10.1103/PhysRevB.104.119901), PDF p.1 opening paragraph, states that its corrections do not affect the ULE derivation or error bounds. Corrections (4)–(6) fix the adjoint jump and Lamb conventions used for the generator identification.

### Source notes

The approved Statement is preserved verbatim. The five local analytical lemmas explicate the finite-preparation budget, envelope moments, modification norm, derivative identity and residual composition; they do not assert that any arbitrary preparation family converges. In particular, the source's remote-past idealization is retained as the imported contract's applicability condition. Appendix A6's tail estimate alone is not a proof of existence or uniqueness of a limiting exact state, and no additional $C^1$ convergence premise is silently imposed on the imported statement. The finite-preparation composition instead retains a residual budget $2\Gamma^2\tau+\Gamma\tau/(t-t_0)$ when the same analytical interface applies; the smaller constant is not asserted unchanged at finite $t_0$. The source calls its auxiliary operator a modified density matrix; these estimates use only its operator distance and residual and do not add positivity or trace-normalization claims. No defect in the article under study is asserted.
