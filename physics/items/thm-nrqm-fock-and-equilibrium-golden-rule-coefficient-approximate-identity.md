---
id: thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity
aliases: [nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity]
kind: theorem
domain: mathematics
title: "Golden-rule coefficient approximate identity"
status: draft
origin: pipeline
dependency_level: 8
deps: [cor-primitives-of-a-continuous-function, thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound, thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian, thm-plancherel, def-fourier-transform-on-l-one-of-rn, thm-l-one-l-two-agreement-of-fourier-transform, thm-lebesgue-measure-of-a-box-of-every-kind, cor-c-one-change-of-variables-for-l-one-functions, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-sine-and-cosine-derivatives, def-measure-with-density, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, thm-monotone-convergence-for-the-integral, cor-additivity-of-the-nonnegative-lebesgue-integral, thm-linearity-of-the-lebesgue-integral-on-l-one, def-integrable-real-and-complex-functions-and-their-integrals, thm-cauchy-schwarz-in-an-inner-product-space, def-l-p-space-as-a-quotient-by-null-functions, def-continuity-real, def-limits-at-infinity, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  cor-primitives-of-a-continuous-function: mathematical-premise
  thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound: mathematical-premise
  thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian: mathematical-premise
  thm-plancherel: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  thm-l-one-l-two-agreement-of-fourier-transform: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-measure-with-density: mathematical-premise
  thm-indefinite-integral-of-a-nonnegative-function-is-a-measure: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  cor-additivity-of-the-nonnegative-lebesgue-integral: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-continuity-real: mathematical-premise
  def-limits-at-infinity: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Chapter 13 Sections 13.5-13.9 pp. 180-190 (perturbation expansion, harmonic perturbations and spontaneous emission)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University, PHY 851/852; retrieved via the Internet Archive snapshot of 2024-04-21), Chapter 6 Sections 6.8-6.9 pp. 95-97 (time-dependent perturbation theory and Fermi's golden rule)"
      url: "http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/pratts/phy851/lectures/lectures_full.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 5.1 pp. 123-126 (Stone's theorem and unitary dynamics)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\hbar>0$.

**(a) The golden-rule kernel.** For $t>0$ define
$$K_t(x):=\frac1{\hbar^2t}\Bigl|\int_0^te^{ixs/\hbar}\,ds\Bigr|^2,\qquad x\in\mathbb R .$$
Then $K_t$ is continuous, nonnegative and even, and for $x\ne0$
$$K_t(x)=\frac{4\sin^2\bigl(xt/(2\hbar)\bigr)}{x^2t},\qquad K_t(0)=\frac t{\hbar^2};$$
moreover for every $\delta>0$ and every $x$ with $|x|\ge\delta$,
$$K_t(x)\le\frac4{x^2t}\le\frac4{\delta^2t},\qquad\text{and}\qquad \int_{\mathbb R}K_t(x)\,dx=\frac{2\pi}{\hbar}.$$

**(b) Approximate identity.** Let $J\in L^1(\mathbb R;\mathbb C)$ (including real-valued functions)
([[def-integrable-real-and-complex-functions-and-their-integrals]],
[[def-l-p-space-as-a-quotient-by-null-functions]]) and let $\Delta\in\mathbb R$.
Choose a measurable representative $J:\mathbb R\to\mathbb C$. Continuity at $\Delta$ means that for every $\epsilon>0$ there is $\delta>0$ such that $|J(y)-J(\Delta)|<\epsilon$ whenever $|y-\Delta|<\delta$; for real-valued $J$ this is [[def-continuity-real]], and for complex-valued $J$ it is equivalent to continuity of its real and imaginary parts. If this condition holds, then
$$\lim_{t\to\infty}\int_{\mathbb R}K_t(x)J(\Delta+x)\,dx=\frac{2\pi}{\hbar}J(\Delta)$$
(For a complex-valued function $Q:(0,\infty)\to\mathbb C$, $Q(t)\to L$ means that for every $\epsilon>0$ there is $T>0$ with $|Q(t)-L|<\epsilon$ for all $t>T$; equivalently its real and imaginary parts have the real limits in [[def-limits-at-infinity]].)

**(c) First-order emission coefficient.** Adopt the objects and hypotheses of
[[thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound]]: $\alpha>0$, the
transverse space $\mathfrak h=\operatorname{ran}M_\Pi$ of
[[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]]
with $\varepsilon(k)=\alpha|k|$, the cutoff $\Lambda>0$, the vectors
$g_1,\dots,g_J\in\mathfrak h$ ($J\ge1$) with
$$\operatorname{supp}g_j\subseteq\{k:\ 0<\varepsilon(k)\le\Lambda\},\qquad \frac{g_j}{\sqrt\varepsilon}\in\mathfrak h,$$
the Hermitian $d\times d$ matrices $H_a,D_1,\dots,D_J$ and the coupling
$\eta_0\in\mathbb R$. Let $v_a,v_b$ be orthonormal eigenvectors of $H_a$ with
real eigenvalues $E_a,E_b$ satisfying $H_av_a=E_av_a$, $H_av_b=E_bv_b$, and
let $\Delta:=E_a-E_b>0$. Put
$$c_j:=\langle D_jv_a,v_b\rangle\ (\mathbb C^d\text{ inner product}),\qquad M:=\sum_{j=1}^Jc_jg_j\in\mathfrak h,$$
and define the finite Borel measure
$$\nu_b(A):=\int_{\mathbb R^3}\mathbf 1_A(\varepsilon(k))\,\|M(k)\|^2\,d^3k, \qquad A\subseteq\mathbb R\ \text{Borel},$$
and for $t\ge0$ the amplitude
$$A_b(k,t):=-\frac{i\eta_0}{\hbar}M(k)\int_0^te^{i(\varepsilon(k)-\Delta)s/\hbar}\,ds .$$
Then:

(i) $\nu_b$ is a finite Borel measure on $\mathbb R$ with
$\nu_b(\mathbb R\setminus(0,\Lambda])=0$, and
$$\int_{\mathbb R}f\,d\nu_b=\int_{\mathbb R^3}f(\varepsilon(k))\,\|M(k)\|^2\,d^3k$$
for every Borel $f\ge0$;

(ii) $A_b(\cdot,t)\in\mathfrak h$ for every $t\ge0$, and
for $t>0$,
$$\|A_b(\cdot,t)\|_{\mathfrak h}^2 =\eta_0^2t\int_{\mathbb R}K_t(E-\Delta)\,d\nu_b(E).$$
At $t=0$ the amplitude is zero, so its squared norm is zero; no $K_0$ is used.

(iii) if $\nu_b=J_b\lambda$ for some $J_b\in L^1(\lambda)$ with $J_b=0$
$\lambda$-a.e. on $\mathbb R\setminus(0,\Lambda]$ and the representative $J_b$
continuous at $\Delta$, then for $0<\Delta<\Lambda$
$$\lim_{t\to\infty}\frac1t\|A_b(\cdot,t)\|_{\mathfrak h}^2 =\frac{2\pi\eta_0^2}{\hbar}J_b(\Delta);$$
if instead $\Delta>\Lambda$, then the same limit exists and equals $0$. The
boundary case $\Delta=\Lambda$ is not asserted.

*Motivation and scope.* In the cutoff dipole model of
[[thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound]] the vector
$A_b(\cdot,t)$ is the explicit single-vertex amplitude with the atom passing
from $v_a$ to $v_b$ and one photon emitted; $\|A_b(\cdot,t)\|^2$ is the
corresponding first-order photon coefficient, and (iii) is the golden-rule
limit of that coefficient divided by $t$. This item computes only the limit of
the explicit coefficient, under the stated hypotheses on the spectral density
$J_b$. It asserts no approximation of the exact model evolution, no all-time or
weak-coupling limit, no Markov property and no exact exponential decay, and it
reports no measurement or empirical rate. The parameter $\hbar$, the coupling
$\eta_0$ and the matrices $D_j$ enter as mathematical normalisation data of the
model; their physical identification is a separate assumption.

## Facts & Assumptions
**Given:** the coupling data $(\hbar,\alpha,\Lambda,\eta_0,g_j,H_a,D_j,v_a,v_b)$ of the cutoff model, the kernel $K_t$, a function $J\in L^1(\lambda)$ continuous at $\Delta$, and the pushforward measure $\nu_b$ with its possible density $J_b$.

[F1] For real $\theta$, $|e^{i\theta}-1|^2=4\sin^2(\theta/2)$, $|e^{i\theta}|=1$, and $|\sin|\le1$; the derivative of $\sin$ at $0$ gives $\lim_{a\to0}\sin(a)/a=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-sine-and-cosine-derivatives]]).

[F2] Fourier/Plancherel package: for $g\in L^1(\mathbb R)$ the integral transform $\widehat g(\xi)=\int g(u)e^{-2\pi i\xi u}\,du$ is defined, on $L^1\cap L^2$ it agrees with the $L^2$ transform, and $\mathcal F_2:L^2\to L^2$ is a unitary isometry preserving the norm ([[def-fourier-transform-on-l-one-of-rn]], [[thm-l-one-l-two-agreement-of-fourier-transform]], [[thm-plancherel]]).

[F3] Every interval $[0,T]$, $T\ge0$, has Lebesgue measure $T$, so $\|\mathbf 1_{[0,T]}\|_2^2=T$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F4] Change of variables: if $U,V\subseteq\mathbb R$ are open, $T:U\to V$ is a $C^1$ diffeomorphism and $f\in L^1(\lambda)$, then $\int_Vf\,d\lambda=\int_U(f\circ T)|T'|\,d\lambda$ ([[cor-c-one-change-of-variables-for-l-one-functions]]); this applies in particular to the translations $x\mapsto\Delta+x$ and the dilations $x\mapsto-2\pi x$ of $\mathbb R$ (both with $|T'|$ constant). The primitive $-1/x$ and monotone convergence on bounded intervals give $\int_{|x|\ge\delta}x^{-2}dx=2/\delta$ for $\delta>0$ ([[cor-primitives-of-a-continuous-function]], [[thm-monotone-convergence-for-the-integral]]).

[F5] Measure and integral calculus: monotone convergence; additivity and linearity of the Lebesgue integral ($L^1$ linearity, nonnegative additivity); for a nonnegative measurable $f$ the set function $A\mapsto\int_Af\,d\mu$ is a measure; a measure with density $h$ is given by $(h\mu)(A)=\int_Ah\,d\mu$ ([[thm-monotone-convergence-for-the-integral]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]], [[def-measure-with-density]]).

[F6] Model objects: $\mathfrak h=\{f\in L^2(\mathbb R^3;\mathbb C^3):k\cdot f(k)=0\ \text{a.e.}\}$ is a closed linear subspace, $\varepsilon(k)=\alpha|k|$ is continuous, $g_j\in\mathfrak h$ with $\operatorname{supp}g_j\subseteq\{0<\varepsilon\le\Lambda\}$ and $g_j/\sqrt\varepsilon\in\mathfrak h$; $H_a,D_j$ are Hermitian with $v_a,v_b$ orthonormal eigenvectors ([[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]], [[thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound]]).

[F7] Cauchy-Schwarz in the finite-dimensional Hilbert space $\mathbb C^J$ gives $|\sum_jc_jg_j(k)|^2\le(\sum_j|c_j|^2)(\sum_j\|g_j(k)\|^2)$ for a.e. $k$, hence $\|M\|_{L^2}^2\le(\sum_j|c_j|^2)(\sum_j\|g_j\|^2)<\infty$ ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F8] Use the modulus definitions of continuity and limits stated in (b); they agree with [[def-continuity-real]] and [[def-limits-at-infinity]] for real functions. For complex functions the inequalities $|\operatorname{Re}z|,|\operatorname{Im}z|\le|z|\le|\operatorname{Re}z|+|\operatorname{Im}z|$ prove equivalence with the two real-component conditions.







## Proof

1.1 [Explicit kernel and pointwise bounds] For $x\ne0$, integrating the exponential gives $\int_0^te^{ixs/\hbar}ds=\hbar(e^{ixt/\hbar}-1)/(ix)$, so by [F1] $K_t(x)=\hbar^2|e^{ixt/\hbar}-1|^2/(x^2\hbar^2t)=4\sin^2(xt/(2\hbar))/(x^2t)$; at $x=0$ the defining integral equals $t$ and $K_t(0)=t/\hbar^2$. With $a=xt/(2\hbar)$ the identity $4\sin^2(xt/(2\hbar))/(x^2t)=(t/\hbar^2)(\sin a/a)^2$ and [F1] give continuity at $0$ and on $\mathbb R$; $K_t\ge0$ and $K_t$ is even by [F1]. For $|x|\ge\delta>0$ the same formula and $|\sin|\le1$ give $K_t(x)\le4/(x^2t)\le4/(\delta^2t)$. [F1, algebra]

1.2 [Kernel mass] Put $T:=t/\hbar$ and $g:=\mathbf 1_{[0,T]}\in L^1\cap L^2$, $\|g\|_2^2=T$ by [F3]. By [F2], $\widehat g(\xi)=\int_0^Te^{-2\pi i\xi u}du$ satisfies $\int_{\mathbb R}|\widehat g|^2=\|g\|_2^2=T$. For every real $x$, $\int_0^Te^{ixu}du=\widehat g(-x/(2\pi))$; applying [F4] to the dilation $\xi\mapsto-2\pi\xi$ of the $L^1$ function $\xi\mapsto|\widehat g(\xi)|^2$ gives $\int_{\mathbb R}|\widehat g(-x/(2\pi))|^2dx=2\pi\int_{\mathbb R}|\widehat g(\xi)|^2d\xi=2\pi T$. Substituting $s=\hbar u$ in the elementary integral gives $\int_0^te^{ixs/\hbar}ds=\hbar\int_0^Te^{ixu}du$, hence $\int_{\mathbb R}K_t\,dx=(1/(\hbar^2t))\cdot\hbar^2\cdot2\pi T=2\pi/\hbar$. [F1, F2, F3, F4, algebra]

1.3 [The pushforward measure] With $c_j:=\langle D_jv_a,v_b\rangle$ and $M=\sum_jc_jg_j$, [F7] gives $\|M\|_{L^2}^2<\infty$ and $M\in\mathfrak h$ by [F6], and $\operatorname{supp}M\subseteq\{0<\varepsilon\le\Lambda\}$. Hence for every Borel $A\subseteq\mathbb R$ the function $k\mapsto\mathbf 1_A(\varepsilon(k))\|M(k)\|^2$ is nonnegative and measurable, so $A\mapsto\nu_b(A):=\int_{\mathbb R^3}\mathbf 1_A(\varepsilon(k))\|M(k)\|^2d^3k$ is a finite measure by [F5], with $\nu_b(\mathbb R)=\|M\|_{L^2}^2<\infty$ and $\nu_b(\mathbb R\setminus(0,\Lambda])=0$. The identity $\int fd\nu_b=\int f(\varepsilon(k))\|M(k)\|^2d^3k$ holds for indicators by definition, for nonnegative simple $f$ by additivity, and for all Borel $f\ge0$ by monotone convergence [F5]. This proves (i). [F5, F6, F7, algebra]

2.1 [Approximate identity] Let $J\in L^1(\lambda;\mathbb C)$ have the representative continuous at $\Delta$ specified in (b). For fixed $t>0$, $K_t\le t/\hbar^2$ by the defining time integral, so $K_t(x)J(\Delta+x)$ is integrable by translation invariance, and the subtraction below is licensed by $L^1$ linearity [F5]. Fix $\delta>0$. By step 1.2, $\int K_t(x)J(\Delta+x)dx-(2\pi/\hbar)J(\Delta)=\int K_t(x)(J(\Delta+x)-J(\Delta))dx$, and we split the right side at $\{|x|\ge\delta\}$. On $|x|<\delta$ the bound $K_t\ge0$ and step 1.2 give at most $(2\pi/\hbar)\sup_{|x|<\delta}|J(\Delta+x)-J(\Delta)|$; on $|x|\ge\delta$, separate the two terms to obtain at most $(4/(\delta^2t))\int_{|x|\ge\delta}|J(\Delta+x)|dx+|J(\Delta)|\int_{|x|\ge\delta}4/(x^2t)dx\le4\|J\|_1/(\delta^2t)+8|J(\Delta)|/(\delta t)$, since $\int_{|x|\ge\delta}x^{-2}dx=2/\delta$, where $\int_{\mathbb R}|J(\Delta+x)|dx=\|J\|_1$ by [F4] applied to the translation $x\mapsto\Delta+x$. Given $\varepsilon>0$, continuity of $J$ at $\Delta$ [F8] yields $\delta>0$ with $(2\pi/\hbar)\sup_{|x|<\delta}|J(\Delta+x)-J(\Delta)|\le\varepsilon/3$, and then $t$ large enough that $4\|J\|_1/(\delta^2t)+8|J(\Delta)|/(\delta t)<\varepsilon/3$; hence the modulus of the displayed difference is $<\varepsilon$ for all large $t$, which is the asserted limit $\frac{2\pi}{\hbar}J(\Delta)$ [F8]. [F4, F5, F8, step 1.1, step 1.2, algebra]

2.2 [Coefficient computation] For $t=0$ the defining time integral is zero and $A_b(\cdot,0)=0$. For $t>0$ let $\varphi_t(E):=\int_0^te^{i(E-\Delta)s/\hbar}ds$, so that $A_b(k,t)=-(i\eta_0/\hbar)M(k)\varphi_t(\varepsilon(k))$ and $|\varphi_t|\le t$. The function $k\mapsto- (i\eta_0/\hbar)\varphi_t(\varepsilon(k))$ is bounded and measurable, so $A_b(\cdot,t)\in L^2(\mathbb R^3;\mathbb C^3)$ with $|A_b(k,t)|\le(|\eta_0|t/\hbar)\|M(k)\|$, and pointwise scalar multiplication preserves the transversality condition $k\cdot f(k)=0$ a.e.; hence $A_b(\cdot,t)\in\mathfrak h$ by [F6]. Then $\|A_b(\cdot,t)\|_{\mathfrak h}^2=(\eta_0^2/\hbar^2)\int_{\mathbb R^3}\|M(k)\|^2|\varphi_t(\varepsilon(k))|^2d^3k=(\eta_0^2/\hbar^2)\int_{\mathbb R}|\varphi_t(E)|^2d\nu_b(E)$ by step 1.3 with $f=|\varphi_t|^2$, and $|\varphi_t(E)|^2=|\int_0^te^{i(E-\Delta)s/\hbar}ds|^2=\hbar^2tK_t(E-\Delta)$ for every $E$ by the definition of $K_t$ in (a) and step 1.1; this proves (ii). [step 1.1, step 1.3, F6, algebra]

3.1 [Density and the limit] Assume $\nu_b=J_b\lambda$ with $J_b\in L^1(\lambda)$, $J_b=0$ $\lambda$-a.e. on $\mathbb R\setminus(0,\Lambda]$, and $J_b$ continuous at $\Delta$. As in step 1.3, the identity $\int fd\nu_b=\int fJ_bd\lambda$ holds for every Borel $f\ge0$ (indicators are the hypothesis, simple functions additivity, general $f$ monotone convergence, [F5]). Hence by step 2.2, for every $t>0$, $\frac1t\|A_b(\cdot,t)\|_{\mathfrak h}^2=\eta_0^2\int K_t(E-\Delta)d\nu_b(E)=\eta_0^2\int K_t(E-\Delta)J_b(E)dE=\eta_0^2\int K_t(x)J_b(\Delta+x)dx$, the last equality by the change of variables $E=\Delta+x$ [F4], the integrand $K_t(\cdot-\Delta)J_b$ being bounded times $L^1$. If $0<\Delta<\Lambda$, then step 2.1 gives $\lim_t\frac1t\|A_b(\cdot,t)\|^2=\eta_0^2\frac{2\pi}{\hbar}J_b(\Delta)=\frac{2\pi\eta_0^2}{\hbar}J_b(\Delta)$. If instead $\Delta>\Lambda$, then $J_b(\Delta+x)\ne0$ for $\lambda$-a.e. $x$ only when $\Delta+x\le\Lambda$, i.e. $x\le\Lambda-\Delta<0$; on the support up to a null set one has $|x|\ge\Delta-\Lambda=:\delta>0$, so step 1.1 and $\int|J_b(\Delta+x)|dx=\|J_b\|_1$ [F4] give $|\int K_t(x)J_b(\Delta+x)dx|\le(4/(\delta^2t))\|J_b\|_1\to0$, and the limit is $0$. This proves (iii); the case $\Delta=\Lambda$ is excluded, consistently with the statement. [F4, F5, step 1.1, step 2.1, step 1.3, step 2.2, algebra]

4.1 [Conclusion and scope] Steps 1.1 and 1.2 prove (a), step 2.1 proves (b), and steps 1.3, 2.2 and 3.1 prove (i)-(iii). The scope paragraph of the statement records that only the explicit single-vertex coefficient is treated and that no all-time, Markov, exponential-decay or empirical claim is made. This completes the proof. [step 1.1, step 1.2, step 2.1, step 1.3, step 2.2, step 3.1] ∎
