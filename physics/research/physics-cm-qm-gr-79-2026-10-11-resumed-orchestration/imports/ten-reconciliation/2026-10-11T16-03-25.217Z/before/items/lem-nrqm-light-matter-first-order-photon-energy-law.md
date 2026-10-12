---
id: lem-nrqm-light-matter-first-order-photon-energy-law
aliases: [nrqm-light-matter-first-order-photon-energy-law]
kind: lemma
domain: mathematics
title: "The first-order emitted-photon energy law: factorised kernel, normalisation, concentration at the transition energy and positivity on positive-measure windows"
status: draft
origin: pipeline
dependency_level: 9
deps: [thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity, thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound, thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian, def-measure-with-density, thm-monotone-convergence-for-the-integral, cor-c-one-change-of-variables-for-l-one-functions, prop-countable-subsets-of-rn-are-lebesgue-null, def-continuity-real, def-limits-at-infinity, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-axiom-of-choice, thm-polar-coordinates-formula-for-lebesgue-measure]
dependency_roles:
  thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity: mathematical-premise
  thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound: mathematical-premise
  thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian: mathematical-premise
  def-measure-with-density: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  prop-countable-subsets-of-rn-are-lebesgue-null: mathematical-premise
  def-continuity-real: mathematical-premise
  def-limits-at-infinity: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Chapter 13 Sections 13.5-13.9 pp. 180-190 (first-order transition amplitudes, the resonance kernel and its concentration at the transition energy)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University, PHY 851/852; Internet Archive snapshot of 2024-04-21), Chapter 6 Sections 6.8-6.9 pp. 95-97 (time-dependent perturbation theory and the golden-rule limit)"
      url: "http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/pratts/phy851/lectures/lectures_full.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Fix $\hbar>0$ and let $\alpha>0$, let
$\mathfrak h=\operatorname{ran}M_{\Pi}\subseteq L^{2}(\mathbb R^{3};\mathbb
C^{3})$ be the transverse space with $\varepsilon(k)=\alpha|k|$ of
[[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]],
let $\Lambda>0$, let $g_{1},\dots,g_{J}\in\mathfrak h$ ($J\ge1$) satisfy
$$\operatorname{supp}g_{j}\subseteq\{k:\ 0<\varepsilon(k)\le\Lambda\},\qquad \frac{g_{j}}{\sqrt\varepsilon}\in\mathfrak h ,$$
let $\eta_{0}\in\mathbb R$ and let $c_{1},\dots,c_{J}\in\mathbb C$ with
$$M:=\sum_{j=1}^{J}c_{j}g_{j}\in\mathfrak h .$$
Fix $\Delta\in\mathbb R$ and define the finite Borel measure
$$\nu_{b}(B):=\int_{\mathbb R^{3}}\mathbf 1_{B}\bigl(\varepsilon(k)\bigr) \|M(k)\|_{\mathbb C^{3}}^{2}\,d^{3}k,\qquad K_{t}(x):=\frac{1}{\hbar^{2}t}\Bigl|\int_{0}^{t}e^{ixs/\hbar}\,ds\Bigr|^{2}\ \ (t>0),$$
and the vector-valued function
$$A_{b}(k,t):=-\frac{i\eta_{0}}{\hbar}M(k)\int_{0}^{t} e^{i(\varepsilon(k)-\Delta)s/\hbar}\,ds\qquad(t\ge0).$$
Clause (a) includes $M=0$ and every real $\eta_0$, including zero. Clauses (b)-(e) concern the normalized law when $M\ne0$; no nonzero assumption on $\eta_0$ is required. Then:

(a) (factorisation) for every $t>0$ and almost every $k\in\mathbb R^{3}$,
$$|A_{b}(k,t)|^{2}=\eta_{0}^{2}\,t\,K_{t}\bigl(\varepsilon(k)-\Delta\bigr) \|M(k)\|_{\mathbb C^{3}}^{2},$$
and consequently
$\|A_{b}(\cdot,t)\|_{\mathfrak h}^{2}=\eta_{0}^{2}t\int_{\mathbb R}
K_{t}(E-\Delta)\,d\nu_{b}(E)$;

(b) (normalisation) if $M\ne0$, then for every $t>0$ the denominator
$\int_{\mathbb R}K_{t}(E-\Delta)\,d\nu_{b}(E)$ is finite and strictly positive,
so
$$P_{t}(B):=\frac{\int_{B}K_{t}(E-\Delta)\,d\nu_{b}(E)} {\int_{\mathbb R}K_{t}(E-\Delta)\,d\nu_{b}(E)}$$
defines a Borel probability measure on $\mathbb R$ with
$P_{t}(\mathbb R\setminus(0,\Lambda])=0$;

(c) (concentration) if $\nu_{b}=J_{b}\lambda$ for some $J_{b}\in
L^{1}(\lambda)$ with $J_{b}=0$ $\lambda$-almost everywhere on
$\mathbb R\setminus(0,\Lambda]$, if $J_{b}$ is continuous at some $\Delta$ with
$0<\Delta<\Lambda$ and $J_{b}(\Delta)>0$, and if $f:\mathbb R\to\mathbb C$ is
continuous and bounded, then
$$\lim_{t\to\infty}\int_{\mathbb R}f\,dP_{t}=f(\Delta);$$

(d) (positivity) if $\nu_{b}=J_{b}\lambda$ with $J_{b}\ge0$
$\lambda$-almost everywhere and $J_{b}>0$ $\lambda$-almost everywhere on a
Borel set $B\subseteq\mathbb R$ of positive Lebesgue measure, then
$P_{t}(B)>0$ for every $t>0$;

(e) (tail concentration) under the hypotheses of (c), for every $\delta>0$,
$\lim_{t\to\infty}P_{t}\bigl(\{E:|E-\Delta|\ge\delta\}\bigr)=0$.

No dynamics, transition probability, rate, decay or physical identification is
asserted; the lemma computes an explicit kernel, its normalised push-forward
law and that law's limit.

## Facts & Assumptions

**Given:** $\hbar>0$, $\alpha>0$, the transverse space $\mathfrak h$, the cutoff data $\Lambda,g_{j}$, the coupling $\eta_{0}$, the coefficients $c_{j}$, the vector $M$ (nonzero only for the normalized-law claims), the number $\Delta$, the measure $\nu_{b}$, the kernel $K_{t}$ and the vectors $A_{b}(\cdot,t)$.

[F1] **Transverse space and the declared cutoff data.** The space $\mathfrak h=\{f\in L^2(\mathbb R^3;\mathbb C^3):k\cdot f(k)=0\text{ a.e.}\}$ is a closed linear subspace and $\varepsilon(k)=\alpha|k|$ is continuous ([[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]] clause (a)). The vectors $g_j$, their common energy cutoff, the arbitrary complex coefficients $c_j$ and the finite sum $M=\sum_jc_jg_j$ are the given data; no dipole-matrix or atomic-eigenvector constraint on these coefficients is assumed.

[F2] **The unchanged scalar kernel supplier.** For $\hbar>0$, $t>0$ and $x\ne0$, $K_t(x)=4\sin^2(xt/(2\hbar))/(x^2t)$ and $K_t(0)=t/\hbar^2>0$. The kernel is continuous, nonnegative and even, has mass $2\pi/\hbar$, and for $J\in L^1(\mathbb R)$ continuous at $\Delta$ one has $\int K_t(x)J(\Delta+x)\,dx\to(2\pi/\hbar)J(\Delta)$ ([[thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity]] clauses (a),(b)). Only these scalar clauses are used; its more restricted emission-coefficient clause (c) is not applied to the present arbitrary coefficients.

[F3] **Definition of the push-forward.** The set function is $\nu_b(B)=\int\mathbf1_B(\varepsilon(k))\|M(k)\|^2d^3k$. Its measure property, total mass, support and nonnegative integration identity for the present arbitrary $M$ are proved in step 1.1 directly from this definition.

[F4] **Null-set suppliers.** A countable subset of $\mathbb R^n$ is Lebesgue null under CC ([[prop-countable-subsets-of-rn-are-lebesgue-null]]). For every nonnegative Borel $g$ on $\mathbb R^3$, $\int g(k)d^3k=\int_0^\infty\int_{S^2}g(r\omega)r^2d\sigma(\omega)dr$, with finite sphere measure $\sigma$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]], Statement with $n=3$). These will prove nullity of the actual energy-level spheres, rather than inferring a null pullback from one-dimensional nullity alone.

[F5] **Measure and integration.** A measure with density $h$ satisfies $(h\lambda)(B)=\int_Bh\,d\lambda$. Nonnegative integrals and finite sums are additive, increasing nonnegative simple functions approximate nonnegative Borel functions, and monotone convergence applies ([[def-measure-with-density]], [[thm-monotone-convergence-for-the-integral]]). Translation $E=\Delta+x$ preserves Lebesgue integrals of integrable functions ([[cor-c-one-change-of-variables-for-l-one-functions]]). A nonnegative measurable function positive on a positive-measure set has positive integral: if its integral were zero, each set on which it is at least $1/n$ would be null, so their countable union could not have positive measure.

[F6] **Continuity and limits.** The declared continuity and limit conventions are those of [[def-continuity-real]] and [[def-limits-at-infinity]]. For a complex integrable function, its integral and limits can be computed by its real and imaginary parts.

## Proof

**Proof technique:** direct; prove the push-forward for arbitrary coefficients, compute the amplitude, verify nullity of the actual momentum spheres, normalize, and apply the unchanged scalar approximate identity with correctly shifted test functions.

**Given:** The data of the statement and [F1]–[F6], in particular $\hbar>0$; only the normalized-law claims assume $M\ne0$.



1.1 [Arbitrary-coefficient push-forward] Since $\mathfrak h$ is linear, the finite sum $M$ lies in it, with $\|M\|_2\le\sum_j|c_j|\|g_j\|_2<\infty$. The common cutoff gives $M=0$ a.e. outside $\{0<\varepsilon\le\Lambda\}$. The weight $\|M\|^2$ is nonnegative and integrable, and the inverse image of a Borel set under continuous $\varepsilon$ is Borel. Thus $\nu_b$ is nonnegative and finite, with $\nu_b(\mathbb R)=\|M\|_2^2$ and the stated support. For disjoint Borel $B_i$, the inverse-image indicators of their finite unions increase to the indicator of their union; monotone convergence gives countable additivity. The identity $\int f\,d\nu_b=\int f(\varepsilon(k))\|M(k)\|^2d^3k$ holds first for indicators by definition, then for nonnegative simple functions by finite additivity and then for every nonnegative Borel $f$ by monotone convergence. It also holds for integrable real or complex functions by their positive/negative or real/imaginary decompositions. All conclusions include $M=0$ and do not import the source's special matrix coefficients. [given, F1, F5, algebra]

1.2 [Exact zeros and their momentum pullback] Since $K_t(0)=t/\hbar^2>0$, its zero set is exactly $Z_t=\{2\pi\hbar n/t:n\in\mathbb Z\setminus\{0\}\}$ by [F2], and this is countable and one-dimensionally null by [F4]. The zeros of $K_t(E-\Delta)$ form $\Delta+Z_t$. For each fixed energy $E$, $\varepsilon^{-1}(\{E\})$ is empty if $E<0$, is the singleton $\{0\}$ if $E=0$, and is the sphere $\{|k|=E/\alpha\}$ if $E>0$. The singleton is null by [F4]. For a positive radius $r_0$, apply the polar formula [F4] to the indicator of $\{|k|=r_0\}$: its integral is $\sigma(S^2)\int_0^\infty\mathbf1_{\{r_0\}}(r)r^2dr=0$ because the one-dimensional singleton is null. Thus every such energy level is null in $\mathbb R^3$, and the countable union $\varepsilon^{-1}(\Delta+Z_t)$ is null by countable subadditivity. Consequently $K_t(\varepsilon(k)-\Delta)>0$ for a.e. momentum $k$. This establishes the exact needed pullback statement for arbitrary real $\Delta$. [given, F2, F4, F5, algebra]

2.1 [Amplitude and factorization including zero cases] For $t\ge0$ the time integral $I_t(E)=\int_0^te^{i(E-\Delta)s/\hbar}ds$ is continuous in $E$ and bounded by $t$. Therefore $A_b(k,t)=-(i\eta_0/\hbar)I_t(\varepsilon(k))M(k)$ is an $L^2$ vector with norm at most $|\eta_0|t\|M\|_2/\hbar$, and scalar multiplication preserves transversality, so $A_b(\cdot,t)\in\mathfrak h$. At $t=0$ it is zero. For $t>0$, the kernel definition gives $|I_t(E)|^2=\hbar^2tK_t(E-\Delta)$; hence $\|A_b(k,t)\|^2=\eta_0^2tK_t(\varepsilon(k)-\Delta)\|M(k)\|^2$ a.e. Integrating with step 1.1 proves the norm formula in (a). If $M=0$ or $\eta_0=0$, both sides are zero; no division by that norm was used. [step 1.1, F1, F2, F5, algebra]

3.1 [Normalization when M is nonzero] The defining time integral has modulus at most $t$, so $0\le K_t(x)\le t/\hbar^2$ everywhere. Thus $d_t:=\int K_t(E-\Delta)d\nu_b(E)\le(t/\hbar^2)\|M\|_2^2<\infty$. If $M\ne0$, the set on which $\|M(k)\|^2>0$ has positive Lebesgue measure. By step 1.2, the product $K_t(\varepsilon(k)-\Delta)\|M(k)\|^2$ is positive a.e. on that set, and its integral is positive by [F5]. Step 1.1 makes this integral exactly $d_t$. Hence $B\mapsto d_t^{-1}\int_BK_t(E-\Delta)d\nu_b(E)$ is a Borel probability measure, and its support is in $(0,\Lambda]$ because $\nu_b$ has that support. This proves (b). For $\eta_0=0$, $A_b=0$ but this formal normalized kernel law is still defined whenever $M\ne0$; it is not asserted to arise by normalizing the zero amplitude. If $M=0$ then $d_t=0$ and no normalized law is asserted. [step 1.1, step 2.1, step 1.2, F2, F5, algebra]

4.1 [Concentration for every bounded continuous complex test] Assume (c), and let $f$ be bounded continuous. The density equality and translation from [F5] give $\int f\,dP_t=\bigl(\int K_t(x)f(\Delta+x)J_b(\Delta+x)dx\bigr)/\bigl(\int K_t(x)J_b(\Delta+x)dx\bigr)$; both integrals are finite because $K_t$ is bounded and $J_b,fJ_b\in L^1$. The function $fJ_b$ is continuous at $\Delta$, so [F2] applied to its real and imaginary parts makes the numerator tend to $(2\pi/\hbar)f(\Delta)J_b(\Delta)$. Applied to $J_b$ it makes the denominator tend to $(2\pi/\hbar)J_b(\Delta)>0$. The denominator is also strictly positive at every time by step 3.1. The ratio therefore tends to $f(\Delta)$, proving (c), with no restriction that the test or coefficients be real. [step 3.1, F2, F5, F6, algebra]

4.2 [Positive-measure windows] Under (d), the numerator $\int_BK_t(E-\Delta)J_b(E)dE$ is nonnegative and is strictly positive a.e. on the positive-measure Borel set $B$: $J_b>0$ a.e. there, and the kernel vanishes only on the countable energy set $\Delta+Z_t$ from step 1.2. By [F5] its integral is positive, whereas step 3.1 gives a finite positive denominator. Thus $P_t(B)>0$ for every $t>0$, proving (d). [step 1.2, step 3.1, F2, F4, F5, algebra]

5.1 [Correctly shifted tail test] Under (c), fix $\delta>0$ and put $\varphi_\delta(x)=\max\{0,\min\{1,2(|x|-\delta/2)/\delta\}\}$. This is continuous, lies between zero and one, vanishes on $|x|\le\delta/2$, and equals one on $|x|\ge\delta$. Use the bounded continuous function $f_\delta(E)=\varphi_\delta(E-\Delta)$, so $f_\delta(\Delta)=\varphi_\delta(0)=0$. Pointwise $\mathbf1_{\{|E-\Delta|\ge\delta\}}\le f_\delta(E)$, whence $0\le P_t(\{|E-\Delta|\ge\delta\})\le\int f_\delta\,dP_t\to f_\delta(\Delta)=0$ by step 4.1. This proves (e) with the required energy shift. [step 4.1, F6, algebra]

6.1 [Assembly and scope] Step 2.1 proves (a) including every zero case; step 3.1 proves (b) only for $M\ne0$; steps 4.1–5.1 give the full concentration, positivity and tail claims. The arbitrary-vector push-forward was established locally in step 1.1, and the scalar kernel/approximate-identity clauses of the source were used unchanged. No dynamics, physical transition probability, rate, detector identification or normalization of a zero physical amplitude was asserted. [step 1.1, step 2.1, step 1.2, step 3.1, step 4.1, step 4.2, step 5.1] ∎

## Remarks

- **What concentrates.** Clause (c) says that the normalised energy law of the explicit single-vertex vector converges to the unit mass at the parameter $\Delta$ whenever the photon density has a continuous positive value there; clause (d) shows that at every finite time a window on which the density is positive almost everywhere still carries strictly positive probability. The two are compatible: the window probability tends to zero only for windows separated from $\Delta$, and the convergence is of the law, not of the density.
- **No physical spike.** The limit in (c) is a limit of an ideal model law as the parameter $t$ of the explicit vector grows; it is not an assertion that a physical line is sharp or that a measurement at time $t$ has a sharp outcome.

- **Zero coupling and zero vector.** When $\eta_0=0$, the explicit amplitude vanishes, but the formal kernel law $P_t$ remains well-defined for $M\ne0$. When $M=0$, only the unnormalized factorization is asserted and all amplitudes vanish; no division by $\|A_b\|$ or zero denominator is made.
