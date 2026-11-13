---
id: prop-se-negative-resolvent-duality
kind: proposition
domain: mathematics
title: Negative resolvent bounds and the retarded Fourier argument
status: draft
proof_strategy: direct
deps:
  - lem-author-03489e9088b7-spectral-cutoff-scale-identifications
  - math:thm-pe12-bochner-lp-completeness
  - math:thm-dominated-convergence
  - prop-se-2-1
  - def-se-dirichlet-scale
  - prop-se-import-bgt-cutoff-resolvent
  - lem-se-cutoff-resolvent-negative-extension
  - lem-se-positive-spectral-scale-contract
  - lem-se-spectral-cutoff-duality
  - math:lem-smooth-bump-between-concentric-euclidean-balls
  - math:thm-plancherel
  - math:def-axiom-of-choice
  - def-se-foundation-time-function-spaces
  - math:def-bochner-integrable-function
  - lem-author-9e2ffff7db46-free-continuous-convolution
  - math:thm-holder-inequality-for-integrals
  - math:lem-laplace-resolvents-of-a-unitary-group
  - physics:lem-nrqm-autonomous-dynamics-flow-calculus
  - math:thm-tonelli-theorem-for-sigma-finite-product-spaces
  - math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - math:thm-bounded-linear-maps-commute-with-bochner-integration
  - math:thm-l-one-l-two-agreement-of-fourier-transform
dependency_roles:
  lem-author-03489e9088b7-spectral-cutoff-scale-identifications: mathematical-premise
  math:thm-pe12-bochner-lp-completeness: mathematical-premise
  math:thm-dominated-convergence: mathematical-premise
  prop-se-2-1: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  prop-se-import-bgt-cutoff-resolvent: mathematical-premise
  lem-se-cutoff-resolvent-negative-extension: mathematical-premise
  lem-se-positive-spectral-scale-contract: mathematical-premise
  lem-se-spectral-cutoff-duality: mathematical-premise
  math:lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  math:thm-plancherel: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  math:def-bochner-integrable-function: mathematical-premise
  lem-author-9e2ffff7db46-free-continuous-convolution: mathematical-premise
  math:thm-holder-inequality-for-integrals: mathematical-premise
  math:lem-laplace-resolvents-of-a-unitary-group: mathematical-premise
  physics:lem-nrqm-autonomous-dynamics-flow-calculus: mathematical-premise
  math:thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  math:thm-bounded-linear-maps-commute-with-bochner-integration: mathematical-premise
  math:thm-l-one-l-two-agreement-of-fourier-transform: mathematical-premise
formulation_deps:
  - prop-se-2-1
  - def-se-dirichlet-scale
  - lem-se-cutoff-resolvent-negative-extension
  - lem-se-positive-spectral-scale-contract
  - lem-se-spectral-cutoff-duality
  - math:def-axiom-of-choice
  - def-se-foundation-time-function-spaces
  - math:def-bochner-integrable-function
argument_deps:
  - lem-author-03489e9088b7-spectral-cutoff-scale-identifications
  - math:thm-pe12-bochner-lp-completeness
  - math:thm-dominated-convergence
  - prop-se-2-1
  - def-se-dirichlet-scale
  - prop-se-import-bgt-cutoff-resolvent
  - lem-se-cutoff-resolvent-negative-extension
  - lem-se-positive-spectral-scale-contract
  - lem-se-spectral-cutoff-duality
  - math:lem-smooth-bump-between-concentric-euclidean-balls
  - math:thm-plancherel
  - math:def-axiom-of-choice
  - def-se-foundation-time-function-spaces
  - math:def-bochner-integrable-function
  - lem-author-9e2ffff7db46-free-continuous-convolution
  - math:thm-holder-inequality-for-integrals
  - math:lem-laplace-resolvents-of-a-unitary-group
  - physics:lem-nrqm-autonomous-dynamics-flow-calculus
  - math:thm-tonelli-theorem-for-sigma-finite-product-spaces
  - math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - math:thm-bounded-linear-maps-commute-with-bochner-integration
  - math:thm-l-one-l-two-agreement-of-fourier-transform
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 9
---

## Statement

Assume the Axiom of Choice. Let $n\ge2$ and let $\Theta\subset\mathbb R^n$ be a nonempty compact obstacle with smooth boundary and connected exterior $\Omega=\mathbb R^n\setminus\Theta$. Assume the obstacle is nontrapping in the generalized-ray sense of [[prop-se-2-1]]. Let $H_D^s(\Omega)$ be the Dirichlet spectral scale of $A=I-\Delta_D$, with negative orders interpreted by pivot antiduality as in [[def-se-dirichlet-scale]], and write $W(t)=e^{it\Delta_D}$.

Let $\eta,\eta_1\in C_c^\infty(\mathbb R^n)$ be real and suppose $\eta_1=1$ on $\operatorname{supp}\eta$. Put $K_z=\eta_1(-\Delta_D-z)^{-1}\eta_1$ whenever the resolvent exists. Its $L^2$ adjoint is $K_z^*=K_{\overline z}$. The squared-parameter family $z=(\kappa\pm i\varepsilon)^2$, with $\kappa\in\mathbb R$ and sufficiently small $\varepsilon>0$, and the half-plane $\operatorname{Re}z<0$ are invariant under conjugation. Uniform $H_D^1\to H_D^2$ estimates yield $H_D^{-2}\to H_D^{-1}$ estimates by pivot duality; interpolating with order $-1$ yields uniform $K_z:H_D^s\to H_D^{s+1}$ bounds for every $s\in[-2,-1]$ on these parameter families.

Consequently, for every $T>0$ and $s\in[-2,-1]$ there is $C_{T,s,\eta}$ such that, whenever $g=\eta f\in L^2(0,T;H_D^s)$, the retarded integral $u(t)=\int_0^t W(t-r)g(r)\,dr$ satisfies $\|\eta u\|_{L^2(0,T;H_D^{s+1})}\le C_{T,s,\eta}\|g\|_{L^2(0,T;H_D^s)}$. The integral is a Bochner integral in $H_D^s$; multiplication by the cutoffs is understood through the bounded scale extensions.

## Statement references

[[prop-se-2-1]]

[[def-se-dirichlet-scale]]

[[math:def-axiom-of-choice]]

[[def-se-foundation-time-function-spaces]]

[[math:def-bochner-integrable-function]]

## Facts & Assumptions

[F1] The Dirichlet scale is a Hilbert scale with common dense spectral core, pivot antiduals at negative orders, and a strongly continuous unitary group $W(t)$ on every level [[def-se-dirichlet-scale]].

[F2] For a real compactly supported cutoff, the squared-parameter estimate holds from $H_D^{-1}$ to $H_D^0$ under the stated geometry and nontrapping hypotheses [[prop-se-2-1]].

[F3] For a nonnegative compactly supported smooth cutoff, the imported negative-real-part estimate holds from $H_D^{-1}$ to $H_D^0$, with norm bounded by a constant times $(1+|\operatorname{Re}z|)^{-1/2}$ [[prop-se-import-bgt-cutoff-resolvent]].

[F4] The real-cutoff adjoint argument supplies the $H_D^{-2}\to H_D^{-1}$ estimates on both stated parameter families, including negative-real-part decay [[lem-se-cutoff-resolvent-negative-extension]].

[F5] Consistent operators bounded at two spectral-scale endpoints interpolate with the usual geometric-mean norm bound [[lem-se-positive-spectral-scale-contract]]. Multiplication by a smooth compactly supported cutoff is bounded on each scale level between $-2$ and $2$ [[lem-se-spectral-cutoff-duality]]. A nonnegative smooth compactly supported function equal to one on a prescribed compact set can be chosen using [[math:lem-smooth-bump-between-concentric-euclidean-balls]].

[F6] Scalar Fourier transformation is an $L^2$ isometry [[math:thm-plancherel]]. For $L^1\cap L^2$ inputs its integral and Plancherel transforms agree almost everywhere [[math:thm-l-one-l-two-agreement-of-fourier-transform]]. We use the unitary angular-frequency convention $\widehat h(\tau)=(2\pi)^{-1/2}\int e^{-it\tau}h(t)\,dt$; it is obtained from the suppliers' negative-sign $2\pi$ convention by $\tau=2\pi\xi$ and multiplication by $(2\pi)^{-1/2}$, preserving the $L^2$ norm. The assumed [[math:def-axiom-of-choice]] includes the choice hypotheses of the scale and Fourier suppliers, the Countable Choice and Dependent Choice hypotheses of the Laplace lemma, and the choices of orthonormal coordinates in the Hilbert-valued extension.

[F7] The time spaces use strongly measurable almost-everywhere classes and Lebesgue time measure [[def-se-foundation-time-function-spaces]]. A Bochner integral means the norm limit of the integrals of integrable simple functions converging in integral norm [[math:def-bochner-integrable-function]].

[F8] For a strongly continuous bounded group on a Banach space and an $L^1$ forcing on a finite interval, the retarded Bochner convolution is continuous and has supremum norm at most the group bound times the forcing's $L^1$ norm [[lem-author-9e2ffff7db46-free-continuous-convolution]]. Scalar Holder with exponents $2,2$ gives $\int_0^T\|g(r)\|_s\,dr\le\sqrt T\|g\|_{L^2(0,T;H_D^s)}$ [[math:thm-holder-inequality-for-integrals]].

[F9] For a self-adjoint operator $T$ on a complex Hilbert space, the spectral group $e^{itT}$ has infinitesimal generator $iT$ with domain exactly $D(T)$ [[physics:lem-nrqm-autonomous-dynamics-flow-calculus]]. This supplier has domain mathematics. For a strongly continuous unitary group $U$ with generator $G$ and $\delta>0$, the Bochner integral $\int_0^\infty e^{-\delta a}U(a)x\,da$ is $(\delta-G)^{-1}x$ and its operator norm is at most $1/\delta$ [[math:lem-laplace-resolvents-of-a-unitary-group]].

[F10] Tonelli applies to nonnegative product-measurable functions and Fubini to integrable complex functions on sigma-finite products [[math:thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]. Bounded complex-linear maps, including the coordinate functionals of a Hilbert space, commute with Bochner integration [[math:thm-bounded-linear-maps-commute-with-bochner-integration]].

[F11] The compatible spectral-scale embeddings are contractive and injective, and $E_N=E_A([1,N])$ converges strongly to the identity at every scale level [[lem-author-03489e9088b7-spectral-cutoff-scale-identifications]]. Its spectral norm formulas give $\|E_N x\|_{H_D^{s+1}}\le\sqrt N\|x\|_{H_D^s}$ for $N\ge1$.

[F12] Under Countable Choice, Bochner $L^p(0,b;E)$ is complete for a real Banach space $E$, $0<b<\infty$ and $1\le p<\infty$ [[math:thm-pe12-bochner-lp-completeness]]. We use $p=2$ on the realification of a complex Hilbert space; neither its norm nor strong measurability changes. Scalar dominated convergence applies on arbitrary measure spaces [[math:thm-dominated-convergence]]. The assumed AC supplies Countable Choice.

## Proof

[F1] The Dirichlet scale is a Hilbert scale with common dense spectral core, pivot antiduals at negative orders, and a strongly continuous unitary group $W(t)$ on every level [[def-se-dirichlet-scale]].

[F2] For a real compactly supported cutoff, the squared-parameter estimate holds from $H_D^{-1}$ to $H_D^0$ under the stated geometry and nontrapping hypotheses [[prop-se-2-1]].

[F3] For a nonnegative compactly supported smooth cutoff, the imported negative-real-part estimate holds from $H_D^{-1}$ to $H_D^0$, with norm bounded by a constant times $(1+|\operatorname{Re}z|)^{-1/2}$ [[prop-se-import-bgt-cutoff-resolvent]].

[F4] The real-cutoff adjoint argument supplies the $H_D^{-2}\to H_D^{-1}$ estimates on both stated parameter families, including negative-real-part decay [[lem-se-cutoff-resolvent-negative-extension]].

[F5] Consistent operators bounded at two spectral-scale endpoints interpolate with the usual geometric-mean norm bound [[lem-se-positive-spectral-scale-contract]]. Multiplication by a smooth compactly supported cutoff is bounded on each scale level between $-2$ and $2$ [[lem-se-spectral-cutoff-duality]]. A nonnegative smooth compactly supported function equal to one on a prescribed compact set can be chosen using [[math:lem-smooth-bump-between-concentric-euclidean-balls]].

[F6] Scalar Fourier transformation is an $L^2$ isometry [[math:thm-plancherel]]. For $L^1\cap L^2$ inputs its integral and Plancherel transforms agree almost everywhere [[math:thm-l-one-l-two-agreement-of-fourier-transform]]. We use the unitary angular-frequency convention $\widehat h(\tau)=(2\pi)^{-1/2}\int e^{-it\tau}h(t)\,dt$; it is obtained from the suppliers' negative-sign $2\pi$ convention by $\tau=2\pi\xi$ and multiplication by $(2\pi)^{-1/2}$, preserving the $L^2$ norm. The assumed [[math:def-axiom-of-choice]] includes the choice hypotheses of the scale and Fourier suppliers, the Countable Choice and Dependent Choice hypotheses of the Laplace lemma, and the choices of orthonormal coordinates in the Hilbert-valued extension.

[F7] The time spaces use strongly measurable almost-everywhere classes and Lebesgue time measure [[def-se-foundation-time-function-spaces]]. A Bochner integral means the norm limit of the integrals of integrable simple functions converging in integral norm [[math:def-bochner-integrable-function]].

[F8] For a strongly continuous bounded group on a Banach space and an $L^1$ forcing on a finite interval, the retarded Bochner convolution is continuous and has supremum norm at most the group bound times the forcing's $L^1$ norm [[lem-author-9e2ffff7db46-free-continuous-convolution]]. Scalar Holder with exponents $2,2$ gives $\int_0^T\|g(r)\|_s\,dr\le\sqrt T\|g\|_{L^2(0,T;H_D^s)}$ [[math:thm-holder-inequality-for-integrals]].

[F9] For a self-adjoint operator $T$ on a complex Hilbert space, the spectral group $e^{itT}$ has infinitesimal generator $iT$ with domain exactly $D(T)$ [[physics:lem-nrqm-autonomous-dynamics-flow-calculus]]. This supplier has domain mathematics. For a strongly continuous unitary group $U$ with generator $G$ and $\delta>0$, the Bochner integral $\int_0^\infty e^{-\delta a}U(a)x\,da$ is $(\delta-G)^{-1}x$ and its operator norm is at most $1/\delta$ [[math:lem-laplace-resolvents-of-a-unitary-group]].

[F10] Tonelli applies to nonnegative product-measurable functions and Fubini to integrable complex functions on sigma-finite products [[math:thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]. Bounded complex-linear maps, including the coordinate functionals of a Hilbert space, commute with Bochner integration [[math:thm-bounded-linear-maps-commute-with-bochner-integration]].



[F11] The compatible spectral-scale embeddings are contractive and injective, and $E_N=E_A([1,N])$ converges strongly to the identity at every scale level [[lem-author-03489e9088b7-spectral-cutoff-scale-identifications]]. Its spectral norm formulas give $\|E_N x\|_{H_D^{s+1}}\le\sqrt N\|x\|_{H_D^s}$ for $N\ge1$.

[F12] Under Countable Choice, Bochner $L^p(0,b;E)$ is complete for a real Banach space $E$, $0<b<\infty$ and $1\le p<\infty$ [[math:thm-pe12-bochner-lp-completeness]]. We use $p=2$ on the realification of a complex Hilbert space; neither its norm nor strong measurability changes. Scalar dominated convergence applies on arbitrary measure spaces [[math:thm-dominated-convergence]]. The assumed AC supplies Countable Choice.

**Given:** The obstacle, scale, cutoffs, $T$, $s$, and $g=\eta f$ in the Statement.

**Goal:** Establish the negative-order resolvent estimates and the retarded estimate.

1.1 By the self-adjoint resolvent identity and real multiplication, $K_z^*=K_{\overline z}$ on $L^2$. The conjugate of $(\kappa+i\varepsilon)^2$ is $(\kappa-i\varepsilon)^2$, and conjugation preserves $\operatorname{Re}z<0$. The pivot-adjoint construction in [F4] applies the $H_D^1\to H_D^2$ bound at $\overline z$ to obtain the $H_D^{-2}\to H_D^{-1}$ bound at $z$. The negative-real-part bound has the decay stated in [F4]. [F1, F4, given]

1.2 Put $X=H_D^s$ and extend $g$ by zero outside $(0,T)$. By Holder, $g\in L^1(0,T;X)$ with norm at most $B=\sqrt T\|g\|_{L^2(0,T;X)}$. Apply the continuous-convolution supplier to the realification of the complex Hilbert space $X$, the group $W$, group bound $M=1$, and base time zero. Its simple-integral construction is the same Bochner integral over the complex space. Thus $u(t)=\int_0^tW(t-r)g(r)\,dr$ exists and is continuous on $[0,T]$, with $\|u(t)\|_X\le B$. For $t>T$ put $u(t)=W(t-T)u(T)$, which agrees with the same retarded formula by the group law and commutation with integration; put $u(t)=0$ for $t<0$. Strong continuity gives continuity at $T$ and zero. For any $\delta>0$, set $h(t)=e^{-\delta t}g(t)$ and $v(t)=e^{-\delta t}u(t)$. The zero extension of $g$ makes $h\in L^1(\mathbb R;X)\cap L^2(\mathbb R;X)$, while $\|v(t)\|_X\le B e^{-\delta t}$ for $t\ge0$ makes $v$ belong to both spaces as well. [F1, F7, F8, F10, given]

1.3 Let $J_s:X\to L^2(\Omega)$ be the onto unitary scale identification $J_s=A^{s/2}$ supplied by the spectral-scale contract, and let $D_s=J_s^{-1}\Delta_DJ_s$ with domain $J_s^{-1}D(\Delta_D)$. It is self-adjoint on $X$ by unitary transport; the scale commutation gives $W(a)=J_s^{-1}e^{ia\Delta_D}J_s$. Thus, for each real $\tau$, $U_\tau(a)=e^{-ia\tau}W(a)$ is the spectral group of the self-adjoint $D_s-\tau I$. The flow-calculus supplier identifies its generator as $G_\tau=i(D_s-\tau I)$ on exactly $D(D_s)$. Apply the positive-damping Laplace lemma on $X$: $Q_\tau x=\int_0^\infty e^{-\delta a}e^{-ia\tau}W(a)x\,da=(\delta-G_\tau)^{-1}x=-i(-D_s+\tau-i\delta)^{-1}x$. Indeed $\delta-G_\tau=i(-D_s+\tau-i\delta)$, which fixes the sign. By unitary transport and agreement on the common spectral core, the last inverse is the consistent $H_D^s$ realization of $(-\Delta_D+\tau-i\delta)^{-1}$. The assumed AC supplies both choice assumptions of the Laplace lemma. [F1, F5, F6, F9, given]

1.4 For any complex Hilbert space $E$, the space $L^2(\mathbb R;E)$ is complete: apply [F12] after translation on each $(-m,m)$ to a Cauchy sequence, use uniqueness of the restricted limits to glue them, and take the supremum over $m$ of the squared restricted-norm bounds to obtain a global $L^2$ limit and norm convergence. Finite sums $\sum_j a_j(t)e_j$ with scalar $a_j\in L^2(\mathbb R)$ and fixed $e_j\in E$ are dense. Indeed, for a strongly measurable $f\in L^2(\mathbb R;E)$ choose finite-range simple $S_n\to f$ almost everywhere and put $T_n=\mathbf1_{[-n,n]}\mathbf1_{\{\|S_n\|_E\le2\|f\|_E\}}S_n$. These are finite-range simple maps supported on finite-measure sets; $T_n\to f$ almost everywhere and $\|T_n-f\|_E^2\le9\|f\|_E^2$, so [F12] gives convergence in $L^2$. On finite sums define $\mathcal F_E(\sum_j a_je_j)=\sum_j(\mathcal F_2a_j)e_j$, using the angular-frequency normalization of [F6]. Choosing an orthonormal basis of their finite-dimensional vector span and applying scalar Plancherel shows that this definition is independent of representation and isometric. Scalar inverse Plancherel defines an isometric inverse on the same finite-sum space. Density and completeness extend both maps to mutually inverse unitaries on $L^2(\mathbb R;E)$. This construction requires no higher-scale regularity of $u$. [F6, F7, F12, given]

2.1 Fix real $\tau$ and a bounded complex-linear coordinate functional $\ell$ on $X$. The scalar integrand obtained by pairing $e^{-it\tau}e^{-\delta t}\mathbf1_{0\le r\le t}W(t-r)g(r)$ with $\ell$ is product-measurable: simple approximants to $g(r)$ and continuity of each group orbit give pointwise scalar limits outside the null set in the $r$ coordinate. Its absolute value is bounded by $\|\ell\|e^{-\delta t}\mathbf1_{0\le r\le t}\|g(r)\|_X$. Tonelli computes the integral of this bound as $\|\ell\|\delta^{-1}\int_0^T e^{-\delta r}\|g(r)\|_X\,dr<\infty$. Scalar Fubini therefore interchanges $t,r$. In the inner integral put $a=t-r\ge0$; commuting $\ell$ with Bochner integrals and using step 1.3 gives $\widehat v(\tau)=Q_\tau\widehat h(\tau)=-i(-\Delta_D+\tau-i\delta)^{-1}\widehat h(\tau)$ in $X$. These integral transforms exist since $h,v\in L^1$; equality follows from all coordinate functionals separating vectors. Scalar $L^1\cap L^2$ agreement in [F6], applied to orthonormal coordinates and then finite-coordinate $L^2$ limits, identifies them almost everywhere with the Hilbert-valued Plancherel transforms. This argument applies directly to the general strongly measurable input in the Statement: the simple approximations establish measurability, and the displayed absolute-integrability bound justifies Fubini without assuming smooth time dependence or spectral-core values. [F6, F7, F10, step 1.2, step 1.3, given]

2.2 On the squared-parameter family, [F2] gives the $H_D^{-1}\to H_D^0$ endpoint for $K_z$. For $\operatorname{Re}z<0$, choose a nonnegative smooth compactly supported $\rho$ equal to one on $\operatorname{supp}\eta_1$. The identity $K_z=M_{\eta_1}[\rho(-\Delta_D-z)^{-1}\rho]M_{\eta_1}$ holds on $L^2$; [F3] and the multiplier bounds extend it to $H_D^{-1}\to H_D^0$, with the same negative-real-part decay up to a cutoff-dependent constant. The negative endpoint from step 1.1 and this order-minus-one endpoint are consistent extensions of the same $L^2$ operator. Interpolation therefore gives the claimed uniform $H_D^s\to H_D^{s+1}$ bounds for $-2\le s\le-1$, with negative-real-part decay retained. [F2, F3, F4, F5, step 1.1, given]

2.3 If $B:E\to E'$ is bounded and complex-linear between Hilbert spaces, its pointwise action preserves strong measurability and has $L^2$ norm at most $\|B\|$. On finite sums, scalar Fourier linearity gives $\mathcal F_{E'}(Bf)=B\mathcal F_E f$; density from step 1.4 extends this identity to every $f\in L^2(\mathbb R;E)$. Set $Y=H_D^{s+1}$ and retain $X=H_D^s$. By [F11] the canonical embedding $\iota:Y\to X$ is contractive and injective, so in particular $\mathcal F_X(\iota y)=\iota\mathcal F_Y y$ for all $y\in L^2(\mathbb R;Y)$. [F7, F11, step 1.4]

3.1 Choose $\delta>0$ sufficiently small that $\sqrt{\delta/2}$ lies in the allowed $\varepsilon$ range of step 2.2. For every real $\tau$, set $z=-\tau+i\delta$. If $\operatorname{Re}z<0$, the half-plane estimate applies. Otherwise write $z=(\kappa+i\varepsilon)^2$ with $\kappa>0$ and $2\kappa\varepsilon=\delta$; since $\kappa^2\ge\varepsilon^2$, one has $\varepsilon\le\sqrt{\delta/2}$. Thus $K_{-\tau+i\delta}$ is uniformly bounded from $H_D^s$ to $H_D^{s+1}$ for all real $\tau$. [step 2.2, given]

4.1 Put $w=e^{-\delta t}\eta u=M_\eta v\in L^2(\mathbb R;X)$, as follows from step 1.2 and the multiplier bound. Since $\eta_1g=g$ and $\eta\eta_1=\eta$, step 2.1 and step 2.3 give, in $X$ almost everywhere, $\mathcal F_X w=\iota q$, where $q(\tau)=-iM_\eta K_{-\tau+i\delta}\widehat h(\tau)$ is a vector in $Y$ by step 3.1. The bound is $\|q(\tau)\|_Y\le C\|\widehat h(\tau)\|_X$. To establish strong measurability in $Y$, rather than assume it from the $X$ identity, apply the bounded maps $E_N:X\to Y$ of [F11] to a strongly measurable representative of $\mathcal F_Xw$. Consistency gives $E_N\mathcal F_Xw=E_N q$ in $Y$ almost everywhere, and $E_N q\to q$ in $Y$ by [F11]. Thus $q$ has a strongly measurable $Y$-valued representative and belongs to $L^2(\mathbb R;Y)$, with $\|q\|_{L^2(Y)}\le C\|h\|_{L^2(X)}$ by step 1.4. [F5, F7, F11, step 1.2, step 2.1, step 3.1, step 1.4, step 2.3]

5.1 Use surjectivity in step 1.4 to define $y=\mathcal F_Y^{-1}q\in L^2(\mathbb R;Y)$. Step 2.3 yields $\mathcal F_X(\iota y)=\iota q=\mathcal F_Xw$; injectivity of the $X$-valued unitary transform gives $\iota y=w$ in $L^2(\mathbb R;X)$. Hence $w$ has the $Y$-valued $L^2$ representative $y$, with $\|y\|_{L^2(Y)}=\|q\|_{L^2(Y)}\le C\|h\|_{L^2(X)}$. On $(0,T)$ removing the weight costs at most $e^{\delta T}$, and $\|h\|_{L^2(\mathbb R;X)}\le\|g\|_{L^2(0,T;X)}$. This proves the retarded estimate with the claimed spatial regularity. [step 1.4, step 2.3, step 4.1, given] ∎

## Source notes

The article is cited for the proposition's attribution and its use in the proof of Lemma 4.1. The resolvent inputs and their independent source limits are recorded in the cited suppliers. The fixed-damping Fourier argument above is a local derivation; it does not claim an independent reconstruction of the proof cited by the article.
