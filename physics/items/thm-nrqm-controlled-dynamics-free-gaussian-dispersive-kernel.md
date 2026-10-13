---
id: thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel
aliases: [nrqm-controlled-dynamics-free-gaussian-dispersive-kernel]
kind: theorem
domain: mathematics
title: "Free Gaussian dispersive kernel"
status: draft
origin: pipeline
dependency_level: 1
deps: [lem-weak-derivatives-are-polynomial-fourier-multipliers, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, lem-nrqm-composites-complex-gaussian-continuation, lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, thm-plancherel, def-fourier-transform-on-l-one-of-rn, thm-dominated-convergence, lem-schwartz-space-is-dense-in-l-two, def-schwartz-space-and-its-seminorms, def-hilbert-space, def-countable-choice, def-complex-logarithms-principal-logarithm-and-complex-powers, thm-identity-theorem-holomorphic-functions, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces]
dependency_roles:
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  lem-nrqm-composites-complex-gaussian-continuation: mathematical-premise
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  thm-plancherel: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  lem-schwartz-space-is-dense-in-l-two: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-complex-logarithms-principal-logarithm-and-complex-powers: mathematical-premise
  thm-identity-theorem-holomorphic-functions: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 7.2 pp. 167-171 (the free Schrodinger operator, its propagator kernel and the resolvent)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Evolution of Wave Packets pp. 29-32 (the spreading Gaussian free packet)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$H_0=-\Delta$ on $L^2(\mathbb R^3;\mathbb C)$ with $D(H_0)=W^{2,2}(\mathbb R^3;\mathbb C)$
([[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]]),
let $\mathcal F_2$ be the Plancherel transform with
$\widehat f(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}dx$ on $L^1$
([[def-fourier-transform-on-l-one-of-rn]], [[thm-plancherel]]), so that
$H_0=\mathcal F_2^*M_{4\pi^2|\xi|^2}\mathcal F_2$, and let $t\in\mathbb R\setminus\{0\}$. Define, for
$\psi\in L^1\cap L^2(\mathbb R^3)$ and a.e. $x$,
$$(K_t\psi)(x):=(4\pi it)^{-3/2}\int_{\mathbb R^3}e^{i|x-y|^2/(4t)}\psi(y)\,dy,$$
where $(4\pi it)^{-3/2}:=\exp\bigl(-\tfrac32\operatorname{Log}(4\pi it)\bigr)$
is the principal branch ([[def-complex-logarithms-principal-logarithm-and-complex-powers]]).
Then:

(a) $K_t\psi\in L^2$ and $\|K_t\psi\|_2=\|\psi\|_2$; consequently $K_t$ extends
uniquely to a unitary operator $\widehat U_t$ on $L^2$, and
$\widehat U_t=e^{-itH_0}$ in the sense of the functional calculus of the free
operator.

(b) For every $\psi\in L^1\cap L^2$ the representative $K_t\psi$ is
everywhere defined and bounded with
$$\|K_t\psi\|_\infty\le(4\pi|t|)^{-3/2}\|\psi\|_1.$$

(c) For every $\psi\in D(H_0)$ one has $e^{-itH_0}\psi\in D(H_0)$ and
$\|H_0e^{-itH_0}\psi\|_2=\|H_0\psi\|_2$.

No physical interpretation and no point-particle trajectory is asserted.

## Facts & Assumptions

**Given:** the free operator $H_0=-\Delta$, the time $t\in\mathbb R\setminus\{0\}$, $\psi\in L^1\cap L^2$,
and the branch normalization of the display.

[F1] For $u\in W^{2,2}(\mathbb R^3;\mathbb C)$, the weak second derivative $\partial_j^2u\in L^2$ satisfies $\mathcal F_2(\partial_j^2u)=(2\pi i\xi_j)^2\mathcal F_2u=-4\pi^2\xi_j^2\mathcal F_2u$ almost everywhere, by [[lem-weak-derivatives-are-polynomial-fourier-multipliers]] with the multi-index having $2$ in coordinate $j$ and $0$ elsewhere. Since $-\Delta u=-\sum_{j=1}^3\partial_j^2u$, linearity gives $\mathcal F_2(H_0u)=q\mathcal F_2u$, $q(\xi)=4\pi^2|\xi|^2$. The Sobolev identification in [[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]] (including the weighted-domain converse proved in its steps 1.3 and 4.1) gives $u\in W^{2,2}$ if and only if $(1+|\xi|^2)\mathcal F_2u\in L^2$. Because $\mathcal F_2u\in L^2$, this is equivalent to $q\mathcal F_2u\in L^2$. Thus, with $M_qh:=qh$ on $D(M_q):=\{h\in L^2:qh\in L^2\}$, Plancherel unitarity yields $H_0=\mathcal F_2^*M_q\mathcal F_2$ with equality of domains ([[thm-plancherel]]). The real multiplier is self-adjoint directly: bounded-support truncations give density, and testing an adjoint identity against all functions supported in $\{q\le n\}$ identifies the adjoint vector with $q$ times the input; exhaustion gives exactly the same domain. Its free PVM is indicator multiplication $E(B)=\mathcal F_2^*M_{\mathbf1_{q\in B}}\mathcal F_2$, with countable additivity by dominated convergence. Thus bounded Borel $g$ gives the scalar multiplier $g(q)$ with norm at most $\sup_{E\ge0}|g(E)|$, and $e^{-itH_0}=\mathcal F_2^*M_{e^{-itq}}\mathcal F_2$. The Statement's operator-domain citation only identifies this independently established Fourier domain; no generic AC-bearing composite calculus is used.

[F2] Complex Gaussian integral: for $\operatorname{Re}z>0$ and $d\ge1$, $\int_{\mathbb R^d}e^{-z|x|^2}dx=(\pi/z)^{d/2}$ with the principal branch, and $z\mapsto(\pi/z)^{d/2}$ is holomorphic on the right half-plane ([[lem-nrqm-composites-complex-gaussian-continuation]]).

[F3] Euclidean Gaussian Fourier transform: $\int_{\mathbb R^d}e^{-a|\xi|^2}e^{2\pi ix\cdot\xi}d\xi=(a/\pi)^{-d/2}e^{-\pi^2|x|^2/a}$ for $a>0$, by [[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]. For fixed $x$, both sides are holomorphic in $a$ on $\operatorname{Re}a>0$: on a compact subset with $\operatorname{Re}a\ge\delta>0$, differentiating the integral is dominated by $|\xi|^2e^{-\delta|\xi|^2/2}$, integrable by the same Gaussian supplier, and the principal-power expression is holomorphic by the branch convention in [[lem-nrqm-composites-complex-gaussian-continuation]]. Agreement for positive $a$ therefore extends throughout the right half-plane by [[thm-identity-theorem-holomorphic-functions]]. This continuation is a local deduction, not an extra assertion of the real Gaussian interface. Absolutely integrable Fourier exchanges use [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], and integration of nonnegative squared-error sums uses [[thm-tonelli-theorem-for-sigma-finite-product-spaces]].

[F4] Dominated convergence and the fact that Schwartz functions are dense in $L^2$, with $\mathcal F_2$ unitary ([[thm-dominated-convergence]], [[lem-schwartz-space-is-dense-in-l-two]], [[thm-plancherel]], [[def-schwartz-space-and-its-seminorms]]).

## Proof

1.1 [Damped kernel] Fix $\varepsilon>0$, put $z_\varepsilon=\varepsilon+it$, and consider the multiplier $g_\varepsilon(\xi):=e^{-4\pi^2z_\varepsilon|\xi|^2}$, i.e. the operator $T_\varepsilon:=\mathcal F_2^*M_{g_\varepsilon}\mathcal F_2$. By [F3] with $a=4\pi^2z_\varepsilon$, applied fiberwise in the three coordinates through the product structure and [F2], its integral kernel is $(4\pi z_\varepsilon)^{-3/2}e^{-|x-y|^2/(4z_\varepsilon)}$, where the power is the principal branch of [F2]; hence for Schwartz $\psi$ one has $(T_\varepsilon\psi)(x)=(4\pi z_\varepsilon)^{-3/2}\int e^{-|x-y|^2/(4z_\varepsilon)}\psi(y)dy$. [F2, F3, F4, algebra]

2.1 [Removing the damping] Let $\psi$ be Schwartz and $x\in\mathbb R^3$. As $\varepsilon\downarrow0$ one has $z_\varepsilon\to it$, $(4\pi z_\varepsilon)^{-3/2}\to(4\pi it)^{-3/2}$ by continuity of the principal branch on the closed right half-plane away from $0$, and $e^{-|x-y|^2/(4z_\varepsilon)}\to e^{-|x-y|^2/(4it)}$ pointwise in $y$; the uniform domination $|(4\pi z_\varepsilon)^{-3/2}e^{-|x-y|^2/(4z_\varepsilon)}|\le(4\pi|z_\varepsilon|)^{-3/2}\le(4\pi|t|)^{-3/2}$ holds for all $y$ and $0<\varepsilon<1$ because $|z_\varepsilon|\ge|t|$ and the exponential factor has modulus at most $1$. Since $\psi\in L^1$, dominated convergence [F4] gives $(T_\varepsilon\psi)(x)\to(K_t\psi)(x)$ for every $x$, and $|(T_\varepsilon\psi)(x)|\le(4\pi|t|)^{-3/2}\|\psi\|_1$ for all $x,\varepsilon$. [step 1.1, F2, F4, algebra]

3.1 [Identification with free evolution] For Schwartz $\psi$, Plancherel gives $\|T_\varepsilon\psi\|_2\le\|\psi\|_2$, because $|g_\varepsilon|\le1$; the damped operator is a contraction, not an isometry. Moreover $g_\varepsilon\mathcal F_2\psi\to e^{-itq}\mathcal F_2\psi$ in $L^2$ by dominated convergence with squared majorant $4|\mathcal F_2\psi|^2$. Hence $T_\varepsilon\psi\to e^{-itH_0}\psi$ in $L^2$. For integers $n\ge1$, define recursively $m_0=1$ and let $m_n$ be the least integer $m>m_{n-1}$ with $m\ge n$ and $\|T_{1/m}\psi-e^{-itH_0}\psi\|_2^2<2^{-n}$. The $L^2$ convergence just proved makes the eligible integer set nonempty. Thus $\varepsilon_n:=1/m_n\downarrow0$ and the squared errors are summable; this prescribed integer selection needs no choice principle. Integrating the sum of these squared errors makes that sum finite almost everywhere, so the selected sequence converges almost everywhere to $e^{-itH_0}\psi$. Its pointwise limit from step 2.1 is $K_t\psi$ everywhere; therefore $K_t\psi=e^{-itH_0}\psi$ almost everywhere and $\|K_t\psi\|_2=\|\psi\|_2$. The scalar unit-modulus free multiplier is unitary and preserves the dense Schwartz class, so this kernel operator on that class has the unique unitary extension $e^{-itH_0}$. [step 2.1, F1, F4, algebra]

4.1 [The full intersection class and domain preservation] For $\psi\in L^1\cap L^2$, choose Schwartz $\psi_n\to\psi$ jointly in $L^1$ and $L^2$: first truncate the input in support and value, then convolve each bounded compactly supported truncation with a smooth compact approximate identity and choose a small enough radius for both norm errors. Translation continuity in each $L^p$, $p=1,2$, follows first for finite box-step functions by the volume of symmetric differences and then by their elementary density; thus the convolution errors tend to zero in both norms. Each approximant is compactly supported smooth and hence Schwartz; at most countable choices are used. The uniform kernel bound gives $\|K_t\psi_n-K_t\psi\|_\infty\le(4\pi|t|)^{-3/2}\|\psi_n-\psi\|_1\to0$, while the unitary extension of step 3.1 converges in $L^2$ to $e^{-itH_0}\psi$. The squared-error subsequence argument of step 3.1 identifies these two limits almost everywhere, proving (a) on the full $L^1\cap L^2$ class. The absolutely convergent integral is everywhere defined and directly bounded by $(4\pi|t|)^{-3/2}\|\psi\|_1$, proving (b). Finally multiplication by $e^{-itq}$ preserves exactly the domain $q\mathcal F_2\psi\in L^2$ and its weighted norm, so $H_0e^{-itH_0}\psi=e^{-itH_0}H_0\psi$ and $\|H_0e^{-itH_0}\psi\|_2=\|H_0\psi\|_2$. This proves (c) and all assertions. [step 3.1, F1, F4, algebra] ∎
