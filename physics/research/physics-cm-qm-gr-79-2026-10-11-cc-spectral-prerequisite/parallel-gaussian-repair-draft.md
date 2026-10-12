---
id: thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel
aliases: [nrqm-controlled-dynamics-free-gaussian-dispersive-kernel]
kind: theorem
domain: mathematics
title: "Free Gaussian dispersive kernel"
status: draft
origin: pipeline
deps: [lem-nrqm-composites-complex-gaussian-continuation, lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, thm-plancherel, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, lem-weak-derivatives-are-polynomial-fourier-multipliers, cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space, thm-identity-theorem-holomorphic-functions, thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn, def-fourier-transform-on-l-one-of-rn, thm-dominated-convergence, thm-fatou-lemma, def-schwartz-space-and-its-seminorms, def-hilbert-space, def-countable-choice, def-complex-logarithms-principal-logarithm-and-complex-powers]
dependency_roles:
  lem-nrqm-composites-complex-gaussian-continuation: mathematical-premise
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space: mathematical-premise
  thm-identity-theorem-holomorphic-functions: mathematical-premise
  thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-fatou-lemma: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-complex-logarithms-principal-logarithm-and-complex-powers: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, free Schrödinger propagator"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics, Evolution of Wave Packets"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $H_0=-\Delta$ on
$L^2(\mathbb R^3;\mathbb C)$ with $D(H_0)=W^{2,2}(\mathbb R^3;\mathbb C)$.
Let $\mathcal F_2$ be the unitary Plancherel transform with
$\widehat f(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}dx$ on $L^1$
([[def-fourier-transform-on-l-one-of-rn]], [[thm-plancherel]]), so that
$H_0=\mathcal F_2^*M_{4\pi^2|\xi|^2}\mathcal F_2$; this free operator and
its evolution are established directly below under CC. For $t\ne0$ and
$\psi\in L^1\cap L^2(\mathbb R^3)$ define

$$K_t\psi(x)=(4\pi it)^{-3/2}\int_{\mathbb R^3}e^{i|x-y|^2/(4t)}\psi(y)dy,$$

where $(4\pi it)^{-3/2}=\exp(-\tfrac32\operatorname{Log}(4\pi it))$
uses the principal branch
([[def-complex-logarithms-principal-logarithm-and-complex-powers]]).
Then:

(a) $K_t\psi\in L^2$ and $\|K_t\psi\|_2=\|\psi\|_2$; $K_t$ extends
uniquely to a unitary $\widehat U_t$ on $L^2$, and
$\widehat U_t=e^{-itH_0}$ in the explicit free multiplication calculus.

(b) Its representative is everywhere defined and bounded, with

$$\|K_t\psi\|_\infty\le(4\pi|t|)^{-3/2}\|\psi\|_1.$$

(c) For every $\psi\in D(H_0)$, $e^{-itH_0}\psi\in D(H_0)$ and
$\|H_0e^{-itH_0}\psi\|_2=\|H_0\psi\|_2$.

All nonzero real times, both signs, are included. The integral in (b) also
defines a bounded function for $\psi\in L^1$ alone, but its $L^2$ membership
and the unitary extension in (a) concern $L^1\cap L^2$ and $L^2$, respectively.
No physical interpretation or point-particle trajectory is asserted.

## Facts & Assumptions

**Given:** CC, the $2\pi$ Fourier convention, $t\in\mathbb R\setminus\{0\}$,
$\psi\in L^1\cap L^2$, and the displayed principal branch.

[F1] [[thm-plancherel]] supplies the CC unitary extension of Fourier transformation on Schwartz functions. [[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]] supplies Fourier inversion there. [[lem-weak-derivatives-are-polynomial-fourier-multipliers]] and [[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]] give, under CC, $D(-\Delta)=\{\psi:|\xi|^2\mathcal F_2\psi\in L^2\}=W^{2,2}$ and the multiplier $4\pi^2|\xi|^2$. The AC-bearing composite real-multiplier/bounded-potential supplier is not a premise.

[F2] The real Gaussian supplier [[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]] proves, under CC, $\int e^{-a|\xi|^2}e^{2\pi ix\cdot\xi}d\xi=(a/\pi)^{-3/2}e^{-\pi^2|x|^2/a}$ for real $a>0$, with polynomial-Gaussian integrability. [[lem-nrqm-composites-complex-gaussian-continuation]] supplies the principal Gaussian branch on $\operatorname{Re}a>0$; [[thm-identity-theorem-holomorphic-functions]] identifies holomorphic extensions that agree on the positive real axis. The shifted Gaussian continuation actually needed is proved below.

[F3] [[thm-dominated-convergence]] applies to pointwise almost-everywhere convergent measurable sequences with one integrable majorant; [[thm-fatou-lemma]] applies to nonnegative measurable sequences. The countable approximation and Fourier interfaces carry only CC.

[F4] Rational box step functions are dense in $L^p(\mathbb R^3)$ for $p=1,2$ under the stated CC convention ([[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]]). This gives translation continuity separately in $L^1$ and $L^2$; the simultaneous smooth approximation is constructed below, rather than inferred from $L^2$ density alone.

## Proof

1.1 Direct free operator: put $a(\xi)=4\pi^2|\xi|^2$ and define $M_a$ on $\{f:af\in L^2\}$. The cutoff vectors $1_{a\le n}f$ belong to this domain and converge to every $f\in L^2$, so it is dense. The operator is symmetric because $a$ is real. If $g\in D(M_a^*)$ and $h=M_a^*g$, testing the adjoint identity against every $L^2$ vector supported on $\{a\le n\}$ gives $1_{a\le n}h=a1_{a\le n}g$; those sets exhaust the space, so $ag=h\in L^2$. Conversely $ag\in L^2$ gives the adjoint identity by Cauchy-Schwarz. Thus $M_a=M_a^*$ including domains. Unitary transport by [F1] gives $H_0$ self-adjoint, with exactly the weak Laplacian and $W^{2,2}$ domain. Define $E_0(B)=\mathcal F_2^*M_{1_{a\in B}}\mathcal F_2$ and $b(H_0)=\mathcal F_2^*M_{b(a)}\mathcal F_2$ for bounded Borel $b$; countable additivity follows by integration of disjoint indicators. In particular $U_t=\mathcal F_2^*M_{e^{-ita}}\mathcal F_2$ is unitary and $U_tU_s=U_{t+s}$, with $U_0=I$. Dominated convergence against $4|\mathcal F_2\psi|^2$ gives strong continuity. For $\psi\in D(H_0)$ the quotient bound $|(e^{-ita}-1)/t|\le a$ gives the strong derivative $-iH_0\psi$. Conversely, if the strong derivative exists, the quotients at $t=1/n$ are norm bounded; Fatou gives $\int a^2|\mathcal F_2\psi|^2<\infty$, hence precisely $\psi\in D(H_0)$. This explicitly identifies the free generator and calculus under CC, without a general spectral or Stone premise. [F1, F3, given, construct, algebra]

1.2 Actual complex shifted Gaussian: fix $x\in\mathbb R^3$. On each compact subset of $\{a:\operatorname{Re}a>0\}$, the integrand $e^{-a|\xi|^2}e^{2\pi ix\cdot\xi}$ and its $a$ derivatives have polynomial times $e^{-c|\xi|^2}$ majorants with $c>0$. Difference quotients and dominated convergence [F3] therefore show that its integral is holomorphic in $a$. The expression $(a/\pi)^{-3/2}e^{-\pi^2|x|^2/a}$ is holomorphic there with the branch of [F2], and equals that integral for every real $a>0$. The identity theorem [F2] gives equality throughout the right half-plane. With $z_\varepsilon=\varepsilon+it$, $\varepsilon>0$, substituting $a=4\pi^2z_\varepsilon$ gives $\int e^{-4\pi^2z_\varepsilon|\xi|^2}e^{2\pi ix\cdot\xi}d\xi=(4\pi z_\varepsilon)^{-3/2}e^{-|x|^2/(4z_\varepsilon)}$. For Schwartz $\psi$, Fourier inversion and Fubini apply, since $e^{-4\pi^2\varepsilon|\xi|^2}\psi(y)$ is absolutely integrable over $\xi,y$, and identify $T_\varepsilon=\mathcal F_2^*M_{e^{-z_\varepsilon a}}\mathcal F_2$ with convolution by that damped kernel. [F1, F2, F3, construct, algebra]

1.3 Joint approximation in $L^1$ and $L^2$: fix a measurable representative of $\psi\in L^1\cap L^2$ and set $v_n=1_{|x|\le n}1_{|\psi|\le n}\psi$. Dominated convergence shows $v_n\to\psi$ in both norms. Let $\rho\in C_c^\infty$ be the explicit nonnegative normalized function proportional to $\exp(-1/(1-|x|^2))$ for $|x|<1$, zero elsewhere, and set $\rho_\delta(x)=\delta^{-3}\rho(x/\delta)$. Translation continuity in each $L^p$, $p=1,2$, follows from [F4]: for box indicators the symmetric-difference volume tends to zero as the translation tends to zero, finite sums inherit continuity, and approximating an arbitrary function by such sums gives it by the triangle inequality and translation invariance of the norm. Consequently $\|\rho_\delta*v_n-v_n\|_p\le\int\rho_\delta(y)\|v_n(\cdot-y)-v_n\|_pdy\to0$ for both $p$; the inequality is the integral triangle inequality (for $p=2$ it also follows by Cauchy-Schwarz in the probability density and integration). Choose the least integer $m_n$ making both norms for $\delta=1/m_n$ smaller than $1/n$. Then $\psi_n=\rho_{1/m_n}*v_n$ is smooth and compactly supported, hence Schwartz, and converges to $\psi$ simultaneously in $L^1$ and $L^2$. This also verifies the Fourier compatibility on the intersection: the $L^1$ bound $\|\widehat\psi_n-\widehat\psi\|_\infty\le\|\psi_n-\psi\|_1$ gives uniform convergence to the integral Fourier transform, while Plancherel gives $\mathcal F_2\psi_n\to\mathcal F_2\psi$ in $L^2$; a squared-norm-summable subsequence identifies those limits almost everywhere. The construction uses CC only through the density interfaces and representative conventions; no assertion that arbitrary $L^2$ approximants converge in $L^1$ occurs. [F1, F3, F4, construct, algebra]

2.1 Removing damping with the correct norm statement: $|e^{-z_\varepsilon a}|\le1$, so $\|T_\varepsilon\psi\|_2\le\|\psi\|_2$, a contraction, with no asserted equality for $\varepsilon>0$. For any $\psi\in L^2$, dominated convergence with integrable majorant $4|\mathcal F_2\psi|^2$ gives $T_\varepsilon\psi\to U_t\psi$ in $L^2$ as $\varepsilon\downarrow0$. For Schwartz $\psi$ the kernel from step 1.2 has modulus at most $(4\pi|t|)^{-3/2}$, since $|z_\varepsilon|\ge|t|$ and $\operatorname{Re}(1/z_\varepsilon)>0$. Thus dominated convergence against $(4\pi|t|)^{-3/2}|\psi(y)|$ gives $T_\varepsilon\psi(x)\to K_t\psi(x)$ for every $x$. To reconcile these two limits, choose the least increasing integers $n_j$ with $\|T_{1/n_j}\psi-U_t\psi\|_2<2^{-j}$. Tonelli gives $\int\sum_j|T_{1/n_j}\psi-U_t\psi|^2\le\sum_j4^{-j}<\infty$, so this subsequence converges almost everywhere to $U_t\psi$. Its everywhere pointwise limit is $K_t\psi$, hence $K_t\psi=U_t\psi$ a.e. and $\|K_t\psi\|_2=\|\psi\|_2$ on the Schwartz class. The branch limit is the one in the Statement for either sign of $t$: $(4\pi it)^{-3/2}=(4\pi|t|)^{-3/2}e^{-3\pi i\operatorname{sgn}(t)/4}$, and $-|x-y|^2/(4it)=i|x-y|^2/(4t)$. [F3, step 1.1, step 1.2, construct, algebra]



3.1 Identifying the full integral domain: for any $\psi\in L^1$, the defining kernel has constant modulus $(4\pi|t|)^{-3/2}$, so its integral is absolutely defined for every $x$, independent of the almost-everywhere representative, and bounded by $(4\pi|t|)^{-3/2}\|\psi\|_1$. For $\psi\in L^1\cap L^2$, use step 1.3. The same inequality gives uniform convergence $K_t\psi_n\to K_t\psi$ on all $\mathbb R^3$, whereas unitarity of $U_t$ gives $U_t\psi_n\to U_t\psi$ in $L^2$. A norm-summable subsequence, exactly as in step 2.1, converges almost everywhere; $K_t\psi_n=U_t\psi_n$ there by step 2.1, so $K_t\psi=U_t\psi$ a.e. Thus (a) and (b) hold on the complete stated intersection, and the unique bounded extension to $L^2$ is the already constructed unitary $U_t$ because the Schwartz class is $L^2$ dense. Its inverse is $U_{-t}$, and the opposite-time kernel has the conjugate principal prefactor and conjugate phase. The convolution integral for general $L^2$ input is not asserted to converge absolutely; the extension is the Fourier multiplier operator. [F1, F3, step 1.1, step 2.1, step 1.3, algebra]

4.1 Domain invariance: the identity $|e^{-ita(\xi)}|=1$ gives $ae^{-ita}\mathcal F_2\psi\in L^2$ exactly when $a\mathcal F_2\psi\in L^2$, so $U_t$ preserves $D(H_0)=W^{2,2}$ in both directions. Multiplication commutes pointwise, hence $H_0U_t\psi=U_tH_0\psi$ on this exact domain, and unitarity gives $\|H_0U_t\psi\|_2=\|H_0\psi\|_2$. This proves (c); all parts retain the displayed normalization and every nonzero real time. [step 1.1, step 3.1, algebra] ∎

## Remarks

Research-only support draft for the sole spectral successor. The inspected production source raw SHA-256 was `a6c1593269842383e48037e456a8c49db29dcfcdf8c023011da1655a4482ed16`. No production carrier, mirror, readiness, plan or import was edited. This replaces the false damped norm equality with contraction and actual $L^2$ convergence plus an explicit a.e. subsequence; it supplies simultaneous $L^1$/$L^2$ approximation and proves the free generator independently of the AC-bearing composite supplier. The exact free phase and principal branch are checked for both signs. No remaining analytic obligation is intentionally hidden behind a construction label in this candidate, but the successor retains mathematical review, prerequisite/consumer closure and acceptance; mechanical checks alone confer none of those.
