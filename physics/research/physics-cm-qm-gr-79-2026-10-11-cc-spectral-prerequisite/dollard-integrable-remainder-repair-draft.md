---
id: thm-nrqm-controlled-dynamics-dollard-integrable-remainder
aliases: [nrqm-controlled-dynamics-dollard-integrable-remainder]
kind: theorem
domain: mathematics
title: "Dollard integrable remainder"
status: draft
origin: pipeline
dependency_level: 4
deps: [thm-dominated-convergence, cor-vector-forms-of-the-divergence-theorem, lem-schwartz-cutoffs-from-the-standard-smooth-step, thm-minkowski-inequality-for-integrals, cor-cauchy-schwarz-inequality-for-l-two, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces, lem-schwartz-functions-and-all-derivatives-are-integrable, cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space, cor-schwartz-convolution-and-product-transform-laws, cor-c-one-change-of-variables-for-l-one-functions, def-fourier-transform-on-l-one-of-rn, thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel, thm-nrqm-coulomb-infinitesimal-kinetic-bound, thm-nrqm-coulomb-essential-spectrum, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, thm-plancherel, lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, def-schwartz-space-and-its-seminorms, def-projection-valued-measure, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice, thm-existence-of-the-lebesgue-stieltjes-measure, thm-lebesgue-stieltjes-measures-are-regular-on-r, thm-orthogonal-decomposition-by-a-closed-subspace, thm-self-adjoint-resolvent-estimate, thm-riesz-representation-for-hilbert-space, thm-nrqm-intervals-regular-ivp-parameter-series, thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, def-sobolev-space-wkp-and-its-norm, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, lem-weak-derivatives-are-polynomial-fourier-multipliers, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, thm-fatou-lemma, thm-nrqm-orbital-and-spin-sphere-onb, lem-nrqm-composites-complex-gaussian-continuation, lem-schwartz-space-is-dense-in-l-two, def-complex-logarithms-principal-logarithm-and-complex-powers]
dependency_roles:
  thm-dominated-convergence: mathematical-premise
  cor-vector-forms-of-the-divergence-theorem: mathematical-premise
  lem-schwartz-cutoffs-from-the-standard-smooth-step: mathematical-premise
  thm-minkowski-inequality-for-integrals: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  lem-schwartz-functions-and-all-derivatives-are-integrable: mathematical-premise
  cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space: mathematical-premise
  cor-schwartz-convolution-and-product-transform-laws: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel: mathematical-premise
  thm-nrqm-coulomb-infinitesimal-kinetic-bound: mathematical-premise
  thm-nrqm-coulomb-essential-spectrum: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-plancherel: mathematical-premise
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-existence-of-the-lebesgue-stieltjes-measure: mathematical-premise
  thm-lebesgue-stieltjes-measures-are-regular-on-r: mathematical-premise
  thm-orthogonal-decomposition-by-a-closed-subspace: mathematical-premise
  thm-self-adjoint-resolvent-estimate: mathematical-premise
  thm-riesz-representation-for-hilbert-space: mathematical-premise
  thm-nrqm-intervals-regular-ivp-parameter-series: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  thm-fatou-lemma: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  lem-nrqm-composites-complex-gaussian-continuation: mathematical-premise
  lem-schwartz-space-is-dense-in-l-two: mathematical-premise
  def-complex-logarithms-principal-logarithm-and-complex-powers: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. D. Dollard, Asymptotic convergence and the Coulomb interaction, Journal of Mathematical Physics 5 (1964) 729-738 (modified Coulomb wave operators; primary source)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 12 pp. 245-256 (long-range modifications of Cook's criterion)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$\gamma>0$, $H_0=-\Delta$ on $L^2(\mathbb R^3;\mathbb C)$ and
$H_\gamma:=-\Delta-\gamma/|\cdot|$ on $D(H_\gamma)=H^2(\mathbb R^3)$, the
self-adjoint Coulomb operator of
[[thm-nrqm-coulomb-infinitesimal-kinetic-bound]] with essential spectrum
$[0,\infty)$ ([[thm-nrqm-coulomb-essential-spectrum]]). Use the physical-momentum Fourier transform $\mathcal F_pf(p)=(2\pi)^{-3/2}\mathcal F_2f(p/(2\pi))$, unitary by the dilation change of variables, equivalently $(2\pi)^{-3/2}\int e^{-ip\cdot x}f(x)dx$ on Schwartz functions. Let $P_j=\mathcal F_p^*M_{p_j}\mathcal F_p=-i\partial_j$ on its maximal weak-derivative domain; thus $H_0=\mathcal F_p^*M_{|p|^2}\mathcal F_p$. Set $a(p)=\gamma/(2|p|)$ for $p\ne0$ and $a(0)=0$, and $a(P)=\mathcal F_p^*M_a\mathcal F_p$ on the maximal multiplier domain. For $|t|\ge1$ define the
Dollard-modified free evolution
$$U_D(t):=e^{-itH_0}e^{i\,\operatorname{sign}(t)\,a(P)\log|t|}$$
(the two factors commute, being functions of $P$; extend to $|t|\le1$ by
$U_D(t):=e^{-itH_0}$). Then:

(a) $U_D(t)$ is unitary for every $t$ and strongly continuous in $t$ away from $t=0$; on the dense set of momentum $C_c^\infty$ vectors supported in an annulus $0<a_0\le|p|\le b_0<\infty$ it is differentiable for $|t|>1$, with the exterior one-sided derivatives at $t=\pm1$, and
$$i\,U_D'(t)=\Bigl[H_0-\frac{\gamma}{2|t|\,|P|}\Bigr]U_D(t)\qquad(|t|>1).$$

(b) *Integrable remainder.* For every vector $\psi$ in that dense set one has
$$\int_1^\infty\Bigl\|\Bigl[\frac{\gamma}{|\cdot|}-\frac{\gamma}{2|t|\,|P|}\Bigr]U_D(t)\psi\Bigr\|_2dt<\infty,$$
and the same integral with $|t|$ in the comparison denominator over $(-\infty,-1]$ is finite. More precisely, for each such $\psi$ there are $T_\psi\ge1$ and $C_\psi<\infty$ such that for both signs of $t$, $|t|\ge T_\psi$ implies $\|[\gamma/|\cdot|-\gamma/(2|t|\,|P|)]U_D(t)\psi\|_2\le C_\psi(1+\log|t|)/|t|^2$.

No empirical claim, no Rutherford cross-section and no photon interpretation is
asserted; the logarithmic phase is a comparison construction for the
long-range generator.

## Facts & Assumptions

**Given:** Countable choice; the exact complex Lebesgue Hilbert spaces, momentum normalization, and Coulomb differential operators in the Statement. All spectral constructions below use the fixed rational simple-function dense sequences, and all channel sums have countable index sets.

[F1] Plancherel, weak Fourier differentiation, Schwartz calculus, Sobolev density, Cauchy–Schwarz, Tonelli/Fubini and dominated convergence apply with their CC contracts. The Hardy estimate and exact Coulomb self-adjointness are proved locally below; no AC-bearing version of Kato–Rellich is used.

[F2] The specified countable spherical-harmonic ONB and its sphere-Laplacian eigenvalues $l(l+1)$ supply the angular calculus. The regular scalar IVP has its CC contract; any holomorphic parameter dependence used below is obtained from its explicit Picard series ([[thm-nrqm-orbital-and-spin-sphere-onb]], [[thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain]], [[thm-nrqm-intervals-regular-ivp-parameter-series]]).

[F3] Stieltjes measure extension, its real-line regularity, orthogonal projection, Hilbert Riesz, the nonreal self-adjoint resolvent bound and the Banach-valued fundamental theorem have the exact local uses given below ([[thm-existence-of-the-lebesgue-stieltjes-measure]], [[thm-lebesgue-stieltjes-measures-are-regular-on-r]], [[thm-orthogonal-decomposition-by-a-closed-subspace]], [[thm-riesz-representation-for-hilbert-space]], [[thm-self-adjoint-resolvent-estimate]], [[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]). The Stieltjes regularity proof's countable approximations are made under the stated CC assumption. Generic nonseparable spectral or DC measure-representation theorems are not premises.

[F4] The free kernel is derived in step 9.1 from explicit Fourier multipliers and the CC Gaussian formulas; for Schwartz $g$, $e^{-itH_0}g(x)=(4\pi it)^{-3/2}\int e^{i|x-y|^2/(4t)}g(y)dy$ for $t\ne0$ ([[thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel]]). For a smooth compact momentum profile $\phi$ in $a_0\le|p|\le b_0$, use a smooth radial $F$ supported away from zero with $F(v)=1/|v|$ on $a_0/2\le|v|\le2b_0$ and $F(v)=0$ for $|v|>4b_0$. Such a cutoff follows from the explicit smooth step. Write $\tau=|t|$, $\sigma=\operatorname{sign}t$, $L=\log\tau$.

## Proof

1.1 The Hilbert spaces below have fixed countable dense sequences of rational complex simple functions on rational boxes or intervals. Their density follows by simple-function approximation and Lebesgue regularity; CC selects countable approximation sequences for each fixed input. Closed subspaces use their orthogonal projections of these sequences. For a real measurable multiplier $M_a$, truncation to $|a|\le n$ proves dense domain, and testing its adjoint against all vectors supported in $|a|\le n$ identifies the adjoint as $M_a$ on exactly $\{h:ah\in L^2\}$. Thus the explicit Fourier multiplier gives self-adjoint $H_0$ on $H^2$. Hardy's inequality follows by integrating $\operatorname{div}(x/|x|^2)|u|^2$ for smooth $u$ away from zero and using Cauchy–Schwarz: $\|u/r\|_2^2\le2\|u/r\|_2\|\nabla u\|_2$. Smooth cutoffs remove the puncture, and Sobolev density extends $\|u/r\|_2\le2\|\nabla u\|_2$ to $H^1$. Fourier Cauchy–Schwarz gives $\|\nabla u\|_2^2\le\|u\|_2\|H_0u\|_2$. For $z=\pm i\mu$, the explicit $R_0(z)=(H_0-z)^{-1}$ has $\|R_0\|\le\mu^{-1}$ and $\|H_0R_0\|\le1$, hence $\|\gamma r^{-1}R_0(z)\|\le2\gamma/\sqrt\mu<1$ when $\mu>4\gamma^2$. The factorization $C-z=(I-\gamma r^{-1}R_0(z))(H_0-z)$, $C=H_0-\gamma/r$ on $H^2$, gives onto-ness for both signs by the norm-convergent Neumann inverse. For $y\in D(C^*)$ solve $(C-i\mu)x=(C^*-i\mu)y$; then $y-x\in\ker(C^*-i\mu)=\operatorname{ran}(C+i\mu)^\perp=0$. Thus $C=C^*$ on exactly $H^2$. Also $\langle Cu,u\rangle\ge-\gamma^2\|u\|_2^2$. This uses the explicit Hardy and Fourier calculation, rather than general Kato–Rellich. [given, F1, F2, F3, F4, algebra]

2.1 For a unitary $Q$ and vector $x$ in a Hilbert space with that fixed dense sequence, put $q_N(\theta)=\|\sum_{j=0}^Ne^{-ij\theta}Q^jx\|^2/[2\pi(N+1)]$. Its integral is $\|x\|^2$ and finite expansion gives $\int e^{in\theta}q_N(\theta)d\theta=(1-|n|/(N+1))\langle Q^nx,x\rangle$ for $|n|\le N$. The cumulative functions of $q_Nd\theta$, supported in $[0,2\pi]$, have a subsequence converging at every rational argument: enumerate the rationals and successively apply a specified convergent-subsequence operation to each bounded scalar sequence. That operation bisects an initial bounded interval, always keeps the first closed half containing infinitely many terms, and selects the least eligible increasing indices; diagonalize these nested subsequences. This recursion is specified and requires no dependent choice. If $G(q)$ are the rational limits, $F(t)=\inf_{q>t,\ q\in\mathbb Q}G(q)$ is nondecreasing and right-continuous, zero for $t<0$ and $\|x\|^2$ for $t\ge2\pi$. The CC Stieltjes extension supplies its finite regular measure. Rational bounds yield convergence of the cumulative functions at every continuity point of $F$; monotonicity makes the discontinuities countable. Finite partitions at continuity points and uniform continuity then give convergence of all continuous integrals. Push this measure forward by $\theta\mapsto e^{i\theta}$ to obtain $\mu_x$ with integer moments $\langle Q^nx,x\rangle$. [step 1.1, F1, F2, F3, F4, algebra]

3.1 This circle measure is unique. Fejér convolution with $K_N(\theta)=(N+1)^{-1}|\sum_{j=0}^Ne^{ij\theta}|^2$ approximates every continuous periodic function uniformly: its normalized mass is one, and outside any fixed neighborhood of zero it is bounded by a constant times $(N+1)^{-1}$; split the convolution error into that tail and the uniformly small continuity error. Equal moments therefore give equal integrals of all continuous functions. The distance cutoffs $\max(0,1-n\operatorname{dist}(z,K))$ for compact $K$ and regularity give equality on all Borel sets. Laurent polynomials are dense in $L^2(\mu_x)$: regularity and distance cutoffs approximate indicators by continuous functions, truncation approximates general $L^2$ functions by simple functions, and Fejér handles the continuous functions. Consequently $p\mapsto p(Q)x$ extends from Laurent polynomials to a unitary from $L^2(\mu_x)$ onto $K_x=\overline{\operatorname{span}\{Q^nx:n\in\mathbb Z\}}$, taking $M_z$ to $Q|K_x$. [step 2.1, F1, F2, F3, F4, algebra]

4.1 Construct countably many reducing cyclic spaces, with no maximal-family argument: $S_0=0$, $x_j=(I-P_{S_{j-1}})d_j$, $K_j=K_{x_j}$ and $S_j=S_{j-1}\oplus K_j$. Orthogonal projections exist under CC, and uniqueness makes this a specified recursion. Each $S_j$ reduces $Q$, and $d_j\in S_j$; hence the countable orthogonal sum of the $K_j$ is the whole space. Use the zero summand when $x_j=0$. In the resulting countable multiplication representation the projections $F(B)=\bigoplus_jM_{\mathbf1_B}$ form a PVM: strong countable additivity follows from scalar dominated convergence and the orthogonal norm sum. Scalar measures are regular, since finite initial sums are regular and the remaining total mass is small. Integer-moment uniqueness for each vector, followed by polarization, makes this PVM unique. Thus arbitrary spectral resolutions and nonseparable spectral theorems are unnecessary. [step 3.1, F1, F2, F3, F4, algebra]

5.1 For any self-adjoint $A$ on these spaces, the symmetry identity $\|(A-a-ib)u\|^2=\|(A-a)u\|^2+b^2\|u\|^2$, closedness and $\operatorname{ran}(A-z)^\perp=\ker(A-\overline z)$ give onto nonreal resolvents with norm at most $|\operatorname{Im}z|^{-1}$. Put $Q=(A-i)(A+i)^{-1}$. Resolvent adjoints show it is unitary, $\ker(I-Q)=0$ and $\operatorname{ran}(I-Q)=D(A)$. The circle construction gives $F(\{1\})=0$. In its multiplication representation this range is exactly $\{h:h/(1-z)\in L^2\}$, which equals $\{h:\lambda(z)h\in L^2\}$ for $\lambda(z)=i(1+z)/(1-z)$, since $1/(1-z)=(\lambda+i)/(2i)$. The Cayley identity identifies $A$ with $M_\lambda$ on precisely that domain. Transport by this Borel bijection constructs its unique regular real-line PVM $E_A$ and bounded Borel calculus. Uniqueness follows by inverse Cayley transport; scalar regularity follows by compact truncations away from $z=1$. In particular $e^{itA}$ is the multiplier $e^{it\lambda}$: it is strongly continuous by dominated convergence, has derivative $iA$ on $D(A)$, and Fatou applied to difference quotients at $t=1/n$ proves that existence of that derivative forces $\lambda h\in L^2$. All generator domains are exact. [step 4.1, F1, F2, F3, F4, algebra]

6.1 For this Coulomb operator, $r^{-1}R_0(z)$ is compact under CC. The free resolvent multiplier $m_z(p)=(|p|^2-z)^{-1}$ belongs to $L^2(\mathbb R^3)$, so Fourier Cauchy–Schwarz gives $\|R_0(z)f\|_\infty\le(2\pi)^{-3/2}\|m_z\|_2\|f\|_2$. Its convolution kernel is $g_z=(2\pi)^{-3/2}\mathcal F_p^*m_z\in L^2$. For bounded compactly supported $\chi$, the kernel $\chi(x)g_z(x-y)$ is in product $L^2$. Finite rational rectangular simple kernels approximate it there and give finite-rank operators; Cauchy–Schwarz bounds the operator norm by the kernel norm. Truncate $r^{-1}$ to $\varepsilon<r<R$: the near-origin norm error is at most $\sqrt{4\pi\varepsilon}(2\pi)^{-3/2}\|m_z\|_2$, and the tail error at most $R^{-1}|\operatorname{Im}z|^{-1}$. Thus $r^{-1}R_0$ is a norm limit of compact operators. The resolvent identity makes $(C-z)^{-1}-R_0(z)=\gamma(C-z)^{-1}r^{-1}R_0(z)$ compact. [step 5.1, F1, F2, F3, F4, algebra]

7.1 The essential-spectrum inference also has a specified countable construction. A real $\lambda$ is essential exactly when every spectral neighborhood has infinite rank. If it does, project the fixed dense sequence onto $E_A((\lambda-1/n,\lambda+1/n))H$ intersected with the orthogonal complement of previously constructed vectors, take the least nonzero projection and normalize. This yields an orthonormal sequence $u_n$ with $\|(A-\lambda)u_n\|\le1/n$, weakly null by the elementary finite Bessel inequality. Conversely, for a unit weakly null sequence with $(A-\lambda)u_n\to0$, a finite-rank spectral neighborhood would give $E_\varepsilon u_n\to0$ and $\|(I-E_\varepsilon)u_n\|\le\|(A-\lambda)u_n\|/\varepsilon\to0$, a contradiction. If $K=(C-z)^{-1}-(A-z)^{-1}$ is compact, $v_n=(C-z)^{-1}(A-z)u_n=u_n+K(A-z)u_n$ satisfies $v_n-u_n\to0$ and $(C-\lambda)v_n=(A-\lambda)u_n+(z-\lambda)(v_n-u_n)\to0$. Compact operators send bounded weakly null sequences to norm-null sequences: otherwise a subsequence with image norm bounded below has a norm-convergent image subsequence by compactness and CC, but its weak limit is zero, a contradiction. Normalize $v_n$ and reverse roles to get essential-spectrum equality. Explicit momentum shells give infinite-rank neighborhoods at every $\lambda\ge0$ for $H_0$ and zero projections below zero, so $\sigma_{\mathrm{ess}}(C)=[0,\infty)$. Below zero finite-rank neighborhoods have finite-dimensional self-adjoint restrictions and finite sets of eigenvalues; every negative spectral point is isolated of finite multiplicity. Least rational isolating intervals make these points countable. The other negative points have zero-projection neighborhoods and a countable rational subcover, so the negative PVM is exhausted by the countable eigenprojections. [step 6.1, F1, F2, F3, F4, algebra]

8.1 If $a_0=b_0$, the smooth profile is zero and all conclusions are immediate; otherwise $a_0<b_0$. Under the explicit Fourier multiplier, $U_D(t)$ for $\tau\ge1$ is the multiplier $e^{-it|p|^2+i\sigma a(p)L}$ and is unitary. It agrees at $t=\pm1$ with the free branch, so strong continuity follows from dominated convergence on the Fourier classes. For $|t|>1$, $d(\sigma\log|t|)/dt=1/|t|$, so on the annular class differentiation gives $iU_D'(t)=[H_0-a(P)/|t|]U_D(t)$; the exterior derivatives at the join have the same value. The annular Fourier class stays Schwartz, with the same momentum support, for each fixed time. [step 7.1, F1, F2, F3, F4, algebra]

9.1 For $\varepsilon>0$, the Fourier multiplier $e^{-(\varepsilon+it)|p|^2}$ has kernel $(4\pi(\varepsilon+it))^{-3/2}e^{-|x-y|^2/[4(\varepsilon+it)]}$. To obtain it, continue the real Gaussian Fourier formula into the right half-plane: the integral is holomorphic by a Gaussian majorant on compact parameter sets, and the identity theorem gives the same principal-power formula there ([[lem-nrqm-composites-complex-gaussian-continuation]], [[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]). For Schwartz $g$, dominated convergence against $|g(y)|$ gives the pointwise limit $(4\pi it)^{-3/2}\int e^{i|x-y|^2/(4t)}g(y)dy$, since the kernels have modulus bounded by $(4\pi|t|)^{-3/2}$. Fourier dominated convergence also gives $L^2$ convergence to the explicit $e^{-itH_0}g$; an a.e.-convergent subsequence of this $L^2$ limit identifies the pointwise kernel limit. The damped multipliers are contractions, not isometries; the limit is unitary because its momentum multiplier has modulus one. All principal powers use $\exp(-\tfrac32\operatorname{Log}(4\pi it))$. Define $m_t(x)=e^{i|x|^2/(4t)}$, $M_tg=m_tg$, and $(D_th)(x)=(2it)^{-3/2}e^{i|x|^2/(4t)}h(x/(2t))$, using the branch of the free Gaussian formula. $D_t$ is unitary because its modulus is $(2\tau)^{-3/2}$ and its dilation has absolute Jacobian $(2\tau)^3$. Expanding $|x-y|^2$ in the free Gaussian formula gives the exact identity $e^{-itH_0}=D_t\mathcal F_pM_t$ on Schwartz functions and then on $L^2$. For the bounded multiplier $F(P)=\mathcal F_p^*M_F\mathcal F_p$, it follows that $[F(x/(2t))-F(P)]e^{-itH_0}g=D_t\mathcal F_p[F(P),M_t]g$. [step 8.1, F1, F2, F3, F4, algebra]

10.1 For $\tau$ large, the inverse Fourier representative is $(2\pi)^{-3/2}\int e^{i\theta_{t,x}(p)}\phi(p)dp$, with $\theta_{t,x}(p)=p\cdot x-t|p|^2+\sigma a(p)L$. If $|x|<a_0\tau$ or $|x|>4b_0\tau$, then on a fixed neighborhood of the compact support of $\phi$, $|\nabla_p\theta|=|x-2tp+\sigma L\nabla a(p)|\ge c(\tau+|x|)$ for sufficiently large $\tau$, since $L/\tau\to0$. Every derivative of order at least two of $\theta$ is bounded by $C_\beta\tau$ there. The quotient rule consequently gives $|\partial_p^\beta(\nabla\theta/|\nabla\theta|^2)|\le C_\beta/(\tau+|x|)$ for each fixed multi-index: each differentiated numerator or denominator contributes at most a factor $C\tau$, and $\tau/(\tau+|x|)\le1$. The integration-by-parts operator $\mathcal L=(\nabla\theta/(i|\nabla\theta|^2))\cdot\nabla_p$ satisfies $\mathcal Le^{i\theta}=e^{i\theta}$. Repeating its formal adjoint $N$ times on the fixed smooth compact amplitude gives an $L^1$ norm at most $C_{N,\psi}(\tau+|x|)^{-N}$, by the derivative bounds and induction on the product rule. No boundary term occurs by the cutoff construction. Thus $|U_D(t)\psi(x)|\le C_{N,\psi}(\tau+|x|)^{-N}$ on this complement for both signs, with no extra logarithmic factor. [step 9.1, F1, F2, F3, F4, algebra]

11.1 The Schwartz convolution kernel of $F(P)$ is $k_F(y)=(2\pi)^{-3}\int e^{ip\cdot y}F(p)dp$, by the Fourier convolution identity. Thus $[F(P),M_t]g(x)=\int k_F(y)[m_t(x-y)-m_t(x)]g(x-y)dy$. The phase difference satisfies $|m_t(x-y)-m_t(x)|\le[2|x-y||y|+|y|^2]/(4\tau)$. If $w\in L^1$ is nonnegative and $h\in L^2$, Cauchy–Schwarz gives $|\int w(y)h(x-y)dy|^2\le\|w\|_1\int w(y)|h(x-y)|^2dy$, and Tonelli then gives the convolution norm bound $\|w*h\|_2\le\|w\|_1\|h\|_2$. Apply this with $w=|y||k_F(y)|$ and $w=|y|^2|k_F(y)|$, both integrable, and use the $L^2$ triangle inequality to obtain $\|[F(P),M_t]g\|_2\le C_F(\||x|g\|_2+\|g\|_2)/\tau$. Every exchange is absolutely integrable by these same bounds. [step 10.1, F1, F2, F3, F4, algebra]

12.1 The position difference $\gamma/|x|-\gamma F(x/(2t))/(2\tau)$ vanishes on $a_0\tau\le|x|\le4b_0\tau$, by the cutoff construction. On the complement, the nonstationary-phase calculation bounds the squared norm of its $|x|^{-1}$ part by $C_N\int_0^\infty(\tau+r)^{-2N}dr\le C_N\tau^{1-2N}$, since the three-dimensional volume factor $r^2$ cancels $r^{-2}$. The bounded $F$ part has support $|x|\le8b_0\tau$, and its squared norm is at most $C_N\tau^{-2}\int_0^{8b_0\tau}(\tau+r)^{-2N}r^2dr\le C_N\tau^{1-2N}$. Taking square roots and choosing $N=3$ gives a norm at most $C_\psi\tau^{-5/2}$. [step 11.1, F1, F2, F3, F4, algebra]

13.1 Put $g_t=\mathcal F_p^*(e^{i\sigma aL}\phi)$. Integration by parts in the compact momentum support gives $\mathcal F_p(x_jg_t)=i\partial_{p_j}(e^{i\sigma aL}\phi)$; hence $\||x|g_t\|_2\le\|\nabla\phi\|_2+L\|\phi\nabla a\|_2\le C_\psi(1+L)$. Also $\|g_t\|_2=\|\psi\|_2$. On its support $F(P)g_t=|P|^{-1}g_t$, and this equality is preserved by free evolution. The factorization and commutator calculations therefore give $\|[F(x/(2t))-|P|^{-1}]U_D(t)\psi\|_2\le C_\psi(1+L)/\tau$. This uses the convolution identity, not a functional-calculus assertion about noncommuting position and momentum. [step 12.1, F1, F2, F3, F4, algebra]

14.1 Split $[\gamma/|x|-\gamma/(2\tau|P|)]U_D(t)\psi$ into the position complement of the singular-complement calculation and $\gamma[ F(x/(2t))-|P|^{-1}]U_D(t)\psi/(2\tau)$. The moment and singular-complement calculations give norm at most $C_\psi(1+\log\tau)/\tau^2+C_\psi\tau^{-5/2}\le C'_\psi(1+\log\tau)/\tau^2$ for both signs and large $\tau$. On each compact exterior time interval $1\le\tau\le T$, the Fourier profile is Schwartz with bounded Schwartz seminorms, so its spatial representative is bounded near zero and rapidly decreasing at infinity, uniformly in that interval; $|x|^{-1}$ is locally square integrable in three dimensions, and $|P|^{-1}$ is bounded by $a_0^{-1}$ on the momentum support. Thus the remainder norm is bounded there. Integration over both half-lines is finite because $\int_T^\infty(1+\log\tau)\tau^{-2}d\tau<\infty$. This proves (a) and (b), including the original full annular class and the required single logarithm. [step 13.1, F1, F2, F3, F4, algebra] ∎

## Remarks

This is an unaccepted research carrier. The original CC Statement and normalization are retained. The local spectral, self-adjoint and essential-spectrum proofs replace the stronger assumptions of the named legacy suppliers; their original AC-bearing Statements are not invoked as CC theorems. Proposed dependency additions require the owning reviewer's ordinary manifest and level reconciliation before any production integration. No original Dollard article or additional source retrieval is claimed.
