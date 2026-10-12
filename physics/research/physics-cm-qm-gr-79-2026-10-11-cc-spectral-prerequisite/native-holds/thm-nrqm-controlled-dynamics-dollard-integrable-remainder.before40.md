---
id: thm-nrqm-controlled-dynamics-dollard-integrable-remainder
aliases: [nrqm-controlled-dynamics-dollard-integrable-remainder]
kind: theorem
domain: mathematics
title: "Dollard integrable remainder"
status: draft
origin: pipeline
dependency_level: 4
deps: [thm-dominated-convergence, cor-vector-forms-of-the-divergence-theorem, lem-schwartz-cutoffs-from-the-standard-smooth-step, thm-minkowski-inequality-for-integrals, cor-cauchy-schwarz-inequality-for-l-two, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces, lem-schwartz-functions-and-all-derivatives-are-integrable, cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space, cor-schwartz-convolution-and-product-transform-laws, cor-c-one-change-of-variables-for-l-one-functions, def-fourier-transform-on-l-one-of-rn, thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel, thm-nrqm-coulomb-infinitesimal-kinetic-bound, thm-nrqm-coulomb-essential-spectrum, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, thm-plancherel, lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, def-schwartz-space-and-its-seminorms, def-projection-valued-measure, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice]
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

**Given:** $\gamma>0$, $H_0=-\Delta$, the physical-momentum transform $\mathcal F_p$, $a(p)=\gamma/(2|p|)$ away from zero, and $\phi=\mathcal F_p\psi\in C_c^\infty$ supported in $a_0\le|p|\le b_0$ with $0<a_0\le b_0<\infty$. Write $\tau=|t|$, $\sigma=\operatorname{sign}t$ and $L=\log\tau$ when $\tau\ge1$.

[F1] Plancherel and dilation give unitary $\mathcal F_p$; $\mathcal F_2$ uses $e^{-2\pi ix\cdot\xi}$ and $H_0$ has its unchanged multiplier $4\pi^2|\xi|^2$ there, hence $|p|^2$ under $\mathcal F_p$. Real multipliers are self-adjoint on maximal domains and multiplication by a unit-modulus measurable function is unitary ([[thm-plancherel]], [[def-fourier-transform-on-l-one-of-rn]], [[cor-c-one-change-of-variables-for-l-one-functions]], [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]).

[F2] For Schwartz $g$, $e^{-itH_0}g(x)=(4\pi it)^{-3/2}\int e^{i|x-y|^2/(4t)}g(y)dy$ for $t\ne0$ ([[thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel]]). The Fourier transform and inverse preserve Schwartz space; products and convolutions obey their transform identities, and all polynomially weighted Schwartz functions are integrable ([[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]], [[cor-schwartz-convolution-and-product-transform-laws]], [[lem-schwartz-functions-and-all-derivatives-are-integrable]], [[def-schwartz-space-and-its-seminorms]]).

[F3] Tonelli permits nonnegative product integration and complex Fubini permits absolutely integrable product integration; dominated convergence applies to squared Fourier differences bounded by $4|\widehat\psi|^2\in L^1$; Cauchy–Schwarz and the $L^2$ triangle inequality hold ([[thm-dominated-convergence]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-minkowski-inequality-for-integrals]]).

[F4] The explicit smooth cutoffs equal one on a ball and zero off its doubled ball; using two scaled cutoffs produces a real radial $F\in C_c^\infty(\mathbb R^3\setminus\{0\})$ with $F(v)=1/|v|$ for $a_0/2\le|v|\le2b_0$ ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]]). For compactly supported smooth vector fields the integral of their divergence is zero, giving repeated integration by parts without boundary terms ([[cor-vector-forms-of-the-divergence-theorem]]).

## Proof

1.1 [Conventions and both time signs] If $a_0=b_0$, the smooth profile is zero and all conclusions are immediate; otherwise $a_0<b_0$. Under [F1], $U_D(t)$ for $\tau\ge1$ is the multiplier $e^{-it|p|^2+i\sigma a(p)L}$ and is unitary. It agrees at $t=\pm1$ with the free branch, so strong continuity follows from dominated convergence on the Fourier classes. For $|t|>1$, $d(\sigma\log|t|)/dt=1/|t|$, so on the annular class differentiation gives $iU_D'(t)=[H_0-a(P)/|t|]U_D(t)$; the exterior derivatives at the join have the same value. The annular Fourier class stays Schwartz, with the same momentum support, for each fixed time. [F1, F2, F3, given, algebra]

1.2 [Exact free factorization] Define $m_t(x)=e^{i|x|^2/(4t)}$, $M_tg=m_tg$, and $(D_th)(x)=(2it)^{-3/2}e^{i|x|^2/(4t)}h(x/(2t))$, using the branch of [F2]. $D_t$ is unitary because its modulus is $(2\tau)^{-3/2}$ and its dilation has absolute Jacobian $(2\tau)^3$. Expanding $|x-y|^2$ in [F2] gives the exact identity $e^{-itH_0}=D_t\mathcal F_pM_t$ on Schwartz functions and then on $L^2$. For the bounded multiplier $F(P)=\mathcal F_p^*M_F\mathcal F_p$, it follows that $[F(x/(2t))-F(P)]e^{-itH_0}g=D_t\mathcal F_p[F(P),M_t]g$. [F1, F2, F4, algebra]

1.3 [Complementary-position nonstationary phase] For $\tau$ large, the inverse Fourier representative is $(2\pi)^{-3/2}\int e^{i\theta_{t,x}(p)}\phi(p)dp$, with $\theta_{t,x}(p)=p\cdot x-t|p|^2+\sigma a(p)L$. If $|x|<a_0\tau$ or $|x|>4b_0\tau$, then on a fixed neighborhood of the compact support of $\phi$, $|\nabla_p\theta|=|x-2tp+\sigma L\nabla a(p)|\ge c(\tau+|x|)$ for sufficiently large $\tau$, since $L/\tau\to0$. Every derivative of order at least two of $\theta$ is bounded by $C_\beta\tau$ there. The quotient rule consequently gives $|\partial_p^\beta(\nabla\theta/|\nabla\theta|^2)|\le C_\beta/(\tau+|x|)$ for each fixed multi-index: each differentiated numerator or denominator contributes at most a factor $C\tau$, and $\tau/(\tau+|x|)\le1$. The integration-by-parts operator $\mathcal L=(\nabla\theta/(i|\nabla\theta|^2))\cdot\nabla_p$ satisfies $\mathcal Le^{i\theta}=e^{i\theta}$. Repeating its formal adjoint $N$ times on the fixed smooth compact amplitude gives an $L^1$ norm at most $C_{N,\psi}(\tau+|x|)^{-N}$, by the derivative bounds and induction on the product rule. No boundary term occurs by [F4]. Thus $|U_D(t)\psi(x)|\le C_{N,\psi}(\tau+|x|)^{-N}$ on this complement for both signs, with no extra logarithmic factor. [F2, F4, given, algebra]

2.1 [A bounded commutator with a linear moment] The Schwartz convolution kernel of $F(P)$ is $k_F(y)=(2\pi)^{-3}\int e^{ip\cdot y}F(p)dp$, by [F2]. Thus $[F(P),M_t]g(x)=\int k_F(y)[m_t(x-y)-m_t(x)]g(x-y)dy$. The phase difference satisfies $|m_t(x-y)-m_t(x)|\le[2|x-y||y|+|y|^2]/(4\tau)$. If $w\in L^1$ is nonnegative and $h\in L^2$, Cauchy–Schwarz gives $|\int w(y)h(x-y)dy|^2\le\|w\|_1\int w(y)|h(x-y)|^2dy$, and Tonelli then gives the convolution norm bound $\|w*h\|_2\le\|w\|_1\|h\|_2$. Apply this with $w=|y||k_F(y)|$ and $w=|y|^2|k_F(y)|$, both integrable, and use the $L^2$ triangle inequality to obtain $\|[F(P),M_t]g\|_2\le C_F(\||x|g\|_2+\|g\|_2)/\tau$. Every exchange is absolutely integrable by these same bounds. [F2, F3, step 1.2, algebra]

2.2 [The singular complement is integrable in three dimensions] The position difference $\gamma/|x|-\gamma F(x/(2t))/(2\tau)$ vanishes on $a_0\tau\le|x|\le4b_0\tau$, by [F4]. On the complement, step 1.3 bounds the squared norm of its $|x|^{-1}$ part by $C_N\int_0^\infty(\tau+r)^{-2N}dr\le C_N\tau^{1-2N}$, since the three-dimensional volume factor $r^2$ cancels $r^{-2}$. The bounded $F$ part has support $|x|\le8b_0\tau$, and its squared norm is at most $C_N\tau^{-2}\int_0^{8b_0\tau}(\tau+r)^{-2N}r^2dr\le C_N\tau^{1-2N}$. Taking square roots and choosing $N=3$ gives a norm at most $C_\psi\tau^{-5/2}$. [F3, F4, step 1.3, algebra]

3.1 [Only one logarithm from the modifier] Put $g_t=\mathcal F_p^*(e^{i\sigma aL}\phi)$. Integration by parts in the compact momentum support gives $\mathcal F_p(x_jg_t)=i\partial_{p_j}(e^{i\sigma aL}\phi)$; hence $\||x|g_t\|_2\le\|\nabla\phi\|_2+L\|\phi\nabla a\|_2\le C_\psi(1+L)$. Also $\|g_t\|_2=\|\psi\|_2$. On its support $F(P)g_t=|P|^{-1}g_t$, and this equality is preserved by free evolution. Steps 1.2 and 2.1 therefore give $\|[F(x/(2t))-|P|^{-1}]U_D(t)\psi\|_2\le C_\psi(1+L)/\tau$. This uses the convolution identity, not a functional-calculus assertion about noncommuting position and momentum. [F1, F2, F4, step 1.2, step 2.1, algebra]

4.1 [All-sign remainder and finite integrals] Split $[\gamma/|x|-\gamma/(2\tau|P|)]U_D(t)\psi$ into the position complement of step 2.2 and $\gamma[ F(x/(2t))-|P|^{-1}]U_D(t)\psi/(2\tau)$. Steps 3.1 and 2.2 give norm at most $C_\psi(1+\log\tau)/\tau^2+C_\psi\tau^{-5/2}\le C'_\psi(1+\log\tau)/\tau^2$ for both signs and large $\tau$. On each compact exterior time interval $1\le\tau\le T$, the Fourier profile is Schwartz with bounded Schwartz seminorms, so its spatial representative is bounded near zero and rapidly decreasing at infinity, uniformly in that interval; $|x|^{-1}$ is locally square integrable in three dimensions, and $|P|^{-1}$ is bounded by $a_0^{-1}$ on the momentum support. Thus the remainder norm is bounded there. Integration over both half-lines is finite because $\int_T^\infty(1+\log\tau)\tau^{-2}d\tau<\infty$. This proves (a) and (b), including the original full annular class and the required single logarithm. [F1, F2, step 1.1, step 3.1, step 2.2, algebra] ∎


## Remarks

The analytic comparison and remainder bound above use explicit Fourier multipliers. Passing to modified wave operators requires the Coulomb evolution and its spectral suppliers with their actual choice hypotheses; the separate CC-only completeness closure remains an owner-recorded prerequisite hold. The AC+CC consequence and a complete proposed channel argument are recorded in the focused-review evidence without treating that proposal as acceptance of a stronger CC-only theorem.
