---
id: lem-compact-polar-sets-and-subharmonic-minus-infinity-loci
kind: lemma
title: "Compact capacity-zero sets and subharmonic minus-infinity loci"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-dependent-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-logarithmic-capacity-compact-set
  - def-logarithmic-potential-and-energy
  - def-polar-set-and-quasi-everywhere
  - def-probability-measure
  - def-weak-convergence-of-borel-probability-measures
  - def-plane-subharmonic-function
  - def-restriction-of-a-measure
  - thm-riesz-decomposition-subharmonic-plane
  - lem-logarithmic-potential-maximum-principle
  - lem-logarithmic-potential-distributional-laplacian
  - lem-positive-c-zero-functionals-have-finite-regular-representing-measures
  - thm-rational-points-and-boxes-in-rn
  - thm-real-stone-weierstrass-for-compact-metric-spaces
  - thm-bolzano-weierstrass
  - thm-monotone-convergence-for-the-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-log-modulus-of-a-holomorphic-function-is-subharmonic
  - thm-minus-laplacian-of-the-fundamental-solution-is-dirac
  - thm-heine-cantor-metric
  - thm-differentiation-under-the-integral-sign
  - thm-dominated-convergence
  - lem-log-modulus-is-harmonic-off-its-centre
  - lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity
  - thm-c-two-characterization-of-plane-subharmonicity
  - thm-nonnegative-weighted-sums-of-measures
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §1–3"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§1, Definition 1.8 and Theorem 1.12; §3, polar exceptional sets, printed pp. 172–186"
    - title: "W. Hansen and I. Netuka, On Evans' and Choquet's Theorems for Polar Sets"
      url: "https://arxiv.org/pdf/2002.08091"
      locator: "§1 and Theorem 1.1, printed pp. 2–4; §2.1, the construction of the Evans measure"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §3"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§3, polar sets and the Evans potential"
provenance_note: >-
  The proof replaces the inaccessible Armitage–Gardiner interface by the direct
  truncated-kernel Evans construction recorded in
  research/frontier-37-owner-30-step1-polar-green-repair.md, which was read in full.
verification:
  precheck: pass
---

## Statement

Assume Dependent Choice, hence Countable Choice
([[def-dependent-choice]], [[def-countable-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]]).

**Compact case.** Let $E\subseteq\mathbb C$ be compact. Then
$\operatorname{cap}(E)=0$ for the logarithmic capacity of
[[def-logarithmic-capacity-compact-set]] if and only if there are a complex
domain $\Omega$ with $E\subseteq\Omega$ and a function $u$ subharmonic on
$\Omega$ with

$$E\ \subseteq\ \{\,z\in\Omega:u(z)=-\infty\,\}.$$

Since subharmonicity already excludes $u\equiv-\infty$ on a component
([[def-plane-subharmonic-function]]), the witness is automatically not
identically $-\infty$; in the forward direction the witness can even be taken
subharmonic on all of $\mathbb C$.

**Compact Evans measure.** If in addition $E\ne\varnothing$ and
$\operatorname{cap}(E)=0$, the witness can be taken of the potential form
$u=p_\sigma=-U^\sigma$ with $\sigma$ a finite positive Borel measure carried by
$E$; then $U^\sigma(z)=+\infty$, equivalently $p_\sigma(z)=-\infty$, at every
$z\in E$.

**Specified $F_\sigma$ unions.** Let $(E_j)_{j\ge1}$ be a specified sequence of
compact subsets of $\mathbb C$ and $E=\bigcup_{j\ge1}E_j$. If
$\operatorname{cap}(E_j)=0$ for every $j$, then there is a function $u$
subharmonic on $\mathbb C$ with $u(z)=-\infty$ for every $z\in E$ which is not
identically $-\infty$. Conversely, if $u$ is subharmonic on a complex domain
$\Omega$ with $E\subseteq\Omega$ and $u(z)=-\infty$ for every $z\in E$, then
$\operatorname{cap}(E_j)=0$ for every $j$. Here $E$ need not be bounded, and
the sequence $(E_j)$ is part of the data: no equivalence is asserted for
arbitrary sets, for non-Borel sets, or for unions not presented as a specified
countable union of compact sets.

Moreover, if $E\ne\varnothing$ and $\operatorname{cap}(E_j)=0$ for every $j$,
then the witness can likewise be taken of the potential form
$u=p_\sigma=-U^\sigma$ with $\sigma$ a finite positive Borel measure carried by
$E$ satisfying $U^\sigma(z)=+\infty$ at every $z\in E$.

## Facts & Assumptions

**Given:** Dependent Choice, compact sets as in the statement, and the conventions of [[def-logarithmic-potential-and-energy]] and [[def-logarithmic-capacity-compact-set]].

[F1] The logarithmic kernel is $k(z,w)=\log(1/|z-w|)\in(-\infty,+\infty]$, equal to $+\infty$ exactly on the diagonal; for a finite positive Borel measure $\mu$ with compact support, $U^\mu(z)=\int k(z,w)\,d\mu(w)\in(-\infty,+\infty]$ and $p_\mu=-U^\mu=\int\log|z-w|\,d\mu(w)\in[-\infty,+\infty)$, and for $R>\operatorname{diam}(\operatorname{supp}\mu)$ the energy is $I(\mu)=\int\int k_R\,d\mu\,d\mu-\mu(\mathbb C)^2\log R$ with $k_R=k+\log R=\log\frac R{|z-w|}$, independent of $R$ ([[def-logarithmic-potential-and-energy]]).

[F2] For nonempty compact $E$, $V_E=\inf_{\nu\in P(E)}I(\nu)\in(-\infty,+\infty]$ and $\operatorname{cap}(E)=\exp(-V_E)$ when $V_E<+\infty$ and $=0$ when $V_E=+\infty$; also $\operatorname{cap}(\varnothing)=0$. Hence for nonempty compact $E$: $\operatorname{cap}(E)=0\iff V_E=+\infty\iff I(\nu)=+\infty$ for every Borel probability $\nu$ on $E$, while $\operatorname{cap}(E)>0$ if and only if some $\nu\in P(E)$ has $I(\nu)<+\infty$ ([[def-logarithmic-capacity-compact-set]], [[def-probability-measure]]).

[F3] Dependent Choice implies Countable Choice; Countable Choice selects one element from each member of any at-most-countable family of nonempty sets ([[def-dependent-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F4] For Borel probability measures on a metric space $S$, $\nu_m\Rightarrow\nu$ means $\int f\,d\nu_m\to\int f\,d\nu$ for every bounded continuous real $f$ on $S$ ([[def-weak-convergence-of-borel-probability-measures]]).

[F5] Every bounded sequence of reals has a convergent subsequence ([[thm-bolzano-weierstrass]]).

[F6] $\mathbb Q^2$ is countable and dense in $\mathbb R^2\cong\mathbb C$, and the rational open boxes form a countable basis for the topology ([[thm-rational-points-and-boxes-in-rn]]).

[F7] A unital subalgebra of $C(K;\mathbb R)$ separating points of a nonempty compact metric space $K$ is dense for the supremum metric ([[thm-real-stone-weierstrass-for-compact-metric-spaces]]).

[F8] Assume Dependent Choice; for LCH $X$ every bounded positive functional $L:C_0(X;\mathbb R)\to\mathbb R$ is integration against a unique finite regular Borel measure, with $\mu(X)=\|L\|$ ([[lem-positive-c-zero-functionals-have-finite-regular-representing-measures]]). On a compact space $X=E$ every continuous real function vanishes at infinity, so $C_0(E;\mathbb R)=C(E;\mathbb R)$.

[F9] Monotone convergence: for measurable $0\le f_1\le f_2\le\cdots$ with $f_m\uparrow f$ pointwise, $\int f_m\,d\mu\uparrow\int f\,d\mu$ ([[thm-monotone-convergence-for-the-integral]]).

[F10] Tonelli's theorem for nonnegative product-measurable integrands on $\sigma$-finite product spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F11] Subharmonic on a complex domain means upper semicontinuous, not identically $-\infty$ on any component, and satisfying the circle mean inequality at every closed disc in the domain ([[def-plane-subharmonic-function]]); for every $w$ the function $z\mapsto\log|z-w|$ is subharmonic on $\mathbb C$, being the log modulus of the holomorphic function $z\mapsto z-w$, which is not identically zero ([[thm-log-modulus-of-a-holomorphic-function-is-subharmonic]]).

[F12] Assume Countable Choice: the fundamental solution $\Phi(x)=-(2\pi)^{-1}\log|x|$ is locally integrable on $\mathbb R^2$, i.e. $\int_B|\log|u||\,dA(u)<+\infty$ for every ball $B$ ([[thm-minus-laplacian-of-the-fundamental-solution-is-dirac]]).

[F13] Assume Dependent Choice: for subharmonic $u$ on a complex domain $\Omega$, every open disc $D$ with $\overline D\subseteq\Omega$ compact admits a finite positive Borel measure $M$ carried by $D$ and a harmonic $h$ on $D$ with $u(z)=h(z)+\int\log|z-w|\,dM(w)=h(z)-U^M(z)$ for every $z\in D$ ([[thm-riesz-decomposition-subharmonic-plane]]).

[F14] Let $\mu\ne0$ be a finite positive Borel measure carried by a compact set and let $M\in\mathbb R$; if $U^\mu\le M$ on $\operatorname{supp}\mu$, then $U^\mu\le M$ on $\mathbb C$ ([[lem-logarithmic-potential-maximum-principle]]).

[F15] Finite and countable nonnegative weighted sums of measures are measures ([[thm-nonnegative-weighted-sums-of-measures]]); restriction of a measure to a measurable set is a measure ([[def-restriction-of-a-measure]]).

[F16] Assume Countable Choice: for finite positive Borel $\mu$ with compact support, $p_\mu$ is locally integrable on $\mathbb C$ and subharmonic on the domain $\mathbb C$ ([[lem-logarithmic-potential-distributional-laplacian]]).

[F17] Continuous real functions on a compact metric space are uniformly continuous ([[thm-heine-cantor-metric]]).

[F18] For an integrable parameter integrand with measurable derivatives dominated by a single integrable function, differentiation passes under the integral ([[thm-differentiation-under-the-integral-sign]]). Continuity of integrals of continuous parameter functions under a single integrable majorant follows from [[thm-dominated-convergence]].

[F19] The function $z\mapsto\log|z-w|$ is smooth and harmonic off $w$ ([[lem-log-modulus-is-harmonic-off-its-centre]]). A harmonic function is subharmonic by the $C^2$ characterization, and adding it to a subharmonic function preserves subharmonicity ([[thm-c-two-characterization-of-plane-subharmonicity]], [[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]]).

## Proof
**Proof technique:** direct.

1.1 Dependent Choice is assumed in the statement, and by [F3] it yields Countable Choice, which is the selection principle used for the countable constructions below; Dependent Choice itself is used for the successive subsequences constructed later in this proof and through the Riesz suppliers [F8] and [F13]. [F3, given]

1.2 The case $E=\varnothing$: $\operatorname{cap}(\varnothing)=0$ by [F2], and the constant function $u\equiv0$ is subharmonic on the complex domain $\mathbb C$ by [F11] with empty $-\infty$ locus, so every empty compact set is the $-\infty$ locus condition holds vacuously; conversely the condition $\operatorname{cap}(\varnothing)=0$ holds by convention. So the compact equivalence is true for $E=\varnothing$, and below $E$ is assumed nonempty. [F2, F11, given]

1.3 Now assume $E\ne\varnothing$ compact with $\operatorname{cap}(E)=0$. Choose $\rho>0$ with $E\subseteq D(0,\rho)$, put $X:=D(0,\rho)$ and $R:=2\rho+1$, so that $R>\operatorname{diam}(\overline X)$ and $G(z,w):=\log\frac R{|z-w|}\in(0,+\infty]$ is nonnegative on $X\times X$ and $+\infty$ exactly on the diagonal. For every $\nu\in P(E)$ one has, by [F1] applied with this $R> \operatorname{diam}(E)$, $\int\int G\,d\nu\,d\nu=I(\nu)+\log R$, and $I(\nu)=+\infty$ by the characterization [F2] of $\operatorname{cap}(E)=0$; hence $\int\int G\,d\nu\,d\nu=+\infty$ for every Borel probability $\nu$ on $E$. [F1, F2, given]

1.4 Let $E$ be nonempty compact and let $(\nu_m)_{m}$ be a sequence of Borel probability measures on $E$. It will be shown that some subsequence converges weakly to a probability on $E$. By [F6] enumerate the rational boxes as $B_1,B_2,\dots$; applying Countable Choice of [F3] to the at-most-countable family $X_n:=E\cap B_n$ when this is nonempty and $X_n:=\{x_0\}$ for a fixed $x_0\in E$ otherwise gives points $x_n\in X_n$, and $D:=\{x_n:n\ge1\}$ is countable. It is dense in $E$: if $U$ is open and $U\cap E\ne\varnothing$, [F6] gives a rational box $B_n$ with $x\in B_n\subseteq U$ for some $x\in U\cap E$, so $x_n\in E\cap B_n\subseteq U\cap E$. [F3, F6, given]

2.1 With $G$ and $R$ as in step 1.3, for $n\ge1$ put $G_n:=\min(G,n)$ and $I_n(\nu):=\int\int G_n\,d\nu\,d\nu\in[0,n]$ for $\nu\in P(E)$. Each $G_n$ is continuous and bounded on $E\times E$, and $I_n$ is weakly continuous: the unital algebra of finite sums $\sum_lf_l(z)h_l(w)$ separates points of the compact metric space $E\times E$, so it is uniformly dense in $C(E\times E;\mathbb R)$ by [F7]; for a product integrand the double integral factors into a product of single integrals, which converges along weakly convergent sequences by [F4]; uniform approximation handles the general integrand. Put $e_n:=\inf_{\nu\in P(E)}I_n(\nu)$. [step 1.3, F2, F4, F7]

2.2 Let $V$ be the $\mathbb Q$-algebra generated inside $C(E;\mathbb R)$ by the constant function $1$ and the functions $d(\cdot,x)$, $x\in D$; being generated by countably many elements, $V$ is countable, so fix an enumeration $V=\{g_1,g_2,\dots\}$. $V$ is uniformly dense in $C(E;\mathbb R)$: its closure $\overline V$ is a closed $\mathbb R$-subalgebra containing the generators, those generators separate points of $E$ (for $x\ne y$ choose $a\in D$ with $d(x,a)<d(x,y)/2$, then $d(y,a)\ge d(x,y)-d(x,a)>d(x,a)$), so $\overline V$ contains the unital algebra generated by the generators, which is all of $C(E;\mathbb R)$ by [F7]. [F7, step 1.4]

3.1 Successive subsequences are chosen by Dependent Choice. A state is a pair $(k,j)$ with $k\ge0$ and $j:\mathbb N\to\mathbb N$ strictly increasing, and $(k,j)$ is related to $(k+1,j')$ when $j'=j\circ i$ for a strictly increasing $i:\mathbb N\to\mathbb N$ and the real sequence $m\mapsto\int g_{k+1}\,d\nu_{j'(m)}$ converges. The relation is entire: $m\mapsto\int g_{k+1}\,d\nu_{j(m)}$ is bounded by $\|g_{k+1}\|_\infty$, so [F5] supplies a strictly increasing $i$ making it converge. Starting from $(0,\mathrm{id})$, Dependent Choice yields states $(k,j^{(k)})_{k\ge0}$ with $j^{(k+1)}$ a subsequence of $j^{(k)}$, and the diagonal $j_*(m):=j^{(m)}(m)$ is strictly increasing; for every $i$ the sequence $m\mapsto\int g_i\,d\nu_{j_*(m)}$ converges, since for $m\ge i$ it is a subsequence of the convergent sequence along $j^{(i)}$. [F3, F5, step 2.2]

4.1 For $f\in C(E;\mathbb R)$ and $\eta>0$ step 2.2 gives $i$ with $\|f-g_i\|_\infty<\eta$, and then $\bigl|\int f\,d\nu_{j_*(m)}-\int f\,d\nu_{j_*(n)}\bigr|\le2\eta+\bigl|\int g_i\,d\nu_{j_*(m)}-\int g_i\,d\nu_{j_*(n)}\bigr|$ shows that the $f$-integrals are Cauchy; define $L(f):=\lim_m\int f\,d\nu_{j_*(m)}$. Limits of integrals against probability measures give that $L$ is linear, positive, $L(1)=1$ and $|L(f)|\le\|f\|_\infty$. [step 3.1]

5.1 The compact metric space $E$ is LCH and $C_0(E;\mathbb R)=C(E;\mathbb R)$, so [F8], whose hypothesis is Dependent Choice, represents $L$ as integration against a unique Borel probability measure $\mu$ on $E$; by [F4] this says $\nu_{j_*(m)}\Rightarrow\mu$. This proves the claim of step 1.4. [F4, F8, step 4.1]

6.1 The infimum $e_n$ is attained. By Countable Choice [F3] choose $\nu_{n,j}\in P(E)$ with $I_n(\nu_{n,j})<e_n+1/j$ for all $n,j\ge1$. Fix $n$; step 5.1 applied to the sequence $(\nu_{n,j})_j$ give a weakly convergent subsequence with limit $\mu_n\in P(E)$, and weak continuity of $I_n$ from step 2.1 gives $I_n(\mu_n)=\lim_jI_n(\nu_{n,j'})=e_n$. Hence the set of minimizers of $I_n$ is nonempty for every $n$, and Countable Choice selects one minimizer $\mu_n$ for each $n$. [step 5.1, step 2.1, F3]

7.1 The sequence $e_n$ is nondecreasing and $e_n\to+\infty$. Monotonicity is immediate from $G_n\le G_{n+1}$. If $e_n\le L$ for all $n$, take minimizers $\mu_n$ from step 6.1 and apply step 5.1 to $(\mu_n)$ to obtain a weakly convergent subsequence $\mu_{n_j}\Rightarrow\mu$. For fixed $m$, whenever $n_j\ge m$ one has $I_m(\mu_{n_j})\le I_{n_j}(\mu_{n_j})=e_{n_j}\le L$, so weak continuity of $I_m$ gives $I_m(\mu)\le L$; monotone convergence [F9] for $G_m\uparrow G$ then gives $\int\int G\,d\mu\,d\mu=\lim_mI_m(\mu)\le L<+\infty$, contradicting step 1.3. [step 1.3, step 6.1, F9]

7.2 First variation at an exact minimizer. Let $n\ge1$, let $x\in E$ and let $\mu_n$ be a minimizer of $I_n$. For $0<t\le1$ the measure $\nu_t:=(1-t)\mu_n+t\delta_x$ is a probability on $E$, and expanding the double integral gives $I_n(\nu_t)=(1-t)^2I_n(\mu_n)+2t(1-t)G_n\mu_n(x)+t^2G_n(x,x)$, where $G_n\mu_n(x):=\int G_n(x,w)\,d\mu_n(w)$ and $G_n(x,x)=n$. Since $I_n(\nu_t)\ge e_n=I_n(\mu_n)$, dividing the inequality $I_n(\nu_t)-I_n(\mu_n)\ge0$ by $t$ and letting $t\downarrow0$ gives $2(G_n\mu_n(x)-e_n)\ge0$, that is $G_n\mu_n(x)\ge e_n$ for every $x\in E$. [step 6.1]

8.1 For $k\ge1$ let $n_k:=\min\{n:e_n\ge k^3\}$, finite by step 7.1, and by Countable Choice choose minimizers $\mu_{n_k}$; the measure $\sigma:=\sum_{k\ge1}k^{-2}\mu_{n_k}$ is a finite positive Borel measure on $E$ with $\sigma(E)=\sum_{k\ge1}k^{-2}<+\infty$ by [F15]. For $z\in E$ the potential of $\sigma$ against the shifted kernel satisfies $G\sigma(z)=\int G(z,w)\,d\sigma(w)=\sum_{k\ge1}k^{-2}G\mu_{n_k}(z)\ge\sum_{k\ge1}k^{-2}G_{n_k}\mu_{n_k}(z)\ge\sum_{k\ge1}k^{-2}e_{n_k}\ge\sum_{k\ge1}k=+\infty$. [step 7.2, F15]

9.1 For $z\in E$, $p_\sigma(z)=\int\log|z-w|\,d\sigma(w)=\sigma(E)\log R-G\sigma(z)=-\infty$, because $\log|z-w|=\log R-G(z,w)$ holds for $z\ne w$ and both sides are $-\infty$ at $z=w$. The measure $\sigma$ is finite with compact support $E$, so [F16], whose hypothesis Countable Choice is available by step 1.1, makes $p_\sigma$ locally integrable and subharmonic on the complex domain $\mathbb C$; in particular $p_\sigma$ is not identically $-\infty$. This proves the forward direction $\operatorname{cap}(E)=0\Rightarrow$ witness for nonempty compact $E$. [step 1.1, step 8.1, F16]

10.1 Conversely, let $E\ne\varnothing$ be compact, let $\Omega$ be a complex domain with $E\subseteq\Omega$, and let $u$ be subharmonic on $\Omega$ with $u(z)=-\infty$ for every $z\in E$. Suppose $\operatorname{cap}(E)>0$. Then $V_E<+\infty$ by [F2], so there is $\mu\in P(E)$ with $I(\mu)<+\infty$. Fix $R>1+\operatorname{diam}(E)$ and put $G(z,w):=\log\frac R{|z-w|}$ and $\widetilde U^\lambda:=U^\lambda+\lambda(\mathbb C)\log R=\int G(\cdot,w)\,d\lambda(w)$ for finite $\lambda$. Then $\int\widetilde U^\mu\,d\mu=I(\mu)+\log R<+\infty$. For $M>0$ put $G_M:=\min(M,G)$ on $E\times E$. This is continuous and bounded, and monotone convergence gives $\widetilde U^\mu(z)=\lim_{M\to\infty}\int G_M(z,w)\,d\mu(w)$ for $z\in E$. Each truncated integral is continuous on $E$, so $\widetilde U^\mu$ is lower semicontinuous there. Hence for every real $b$ the set $F_b:=\{z\in E:\widetilde U^\mu(z)\le b\}$ is closed in $E$, and for $b>I(\mu)+\log R$ it has positive measure: $\mu(E\setminus F_b)\le\frac1b\int\widetilde U^\mu\,d\mu<1=\mu(E)$, since $\widetilde U^\mu\ge0$ on $E$ and $\widetilde U^\mu>b$ on $E\setminus F_b$. Fix such a $b$ and put $\lambda:=\mu|_{F_b}$, the restriction of $\mu$ to the measurable set $F_b$ ([[def-restriction-of-a-measure]]), a nonzero finite positive measure with $\operatorname{supp}\lambda\subseteq F_b$ because $F_b$ is closed. For $z\in F_b$, $\widetilde U^\lambda(z)=\int_{F_b}G(z,w)\,d\mu(w)\le\widetilde U^\mu(z)\le b$, since $G\ge0$ on $E\times E$. Cover $E$ by finitely many open discs $D_1,\dots,D_m$ whose closures lie in $\Omega$ and whose radii are less than $1/2$: such discs cover $E$ because $\Omega$ is open and $R>1$, so compactness gives a finite subcover. Then $\operatorname{diam}\overline D_i<1<R$, and since $\lambda(E)>0$ some $i$ satisfies $\lambda(D_i)>0$. Put $\lambda_i:=\lambda|_{D_i}$, a nonzero finite positive measure with $\operatorname{supp}\lambda_i\subseteq F_b\cap\overline D_i$; for $z\in F_b$ one has $\widetilde U^{\lambda_i}(z)\le\widetilde U^\lambda(z)\le b$ because $\lambda_i\le\lambda$ and $G\ge0$. Thus $U^{\lambda_i}\le b-\lambda_i(\mathbb C)\log R$ on $\operatorname{supp}\lambda_i$, and the maximum principle [F14] (applied to the nonzero measure $\lambda_i$) gives $U^{\lambda_i}\le b-\lambda_i(\mathbb C)\log R$ on all of $\mathbb C$, that is, $\widetilde U^{\lambda_i}\le b$ everywhere. On the disc $D_i$ the Riesz decomposition [F13] gives a finite positive measure $M_i$ carried by $D_i$ and a harmonic $h_i$ on $D_i$ with $u=h_i-U^{M_i}$ there. Since $u=-\infty$ on $E\cap D_i$ and $h_i$ is finite there, $U^{M_i}(z)=+\infty$ for every $z\in E\cap D_i$, hence on $F_b\cap D_i$, which has $\lambda_i$-measure $\lambda_i(D_i)>0$; therefore $\int U^{M_i}\,d\lambda_i=+\infty$, and since $\widetilde U^{M_i}=U^{M_i}+M_i(\mathbb C)\log R\ge U^{M_i}$ also $\int\widetilde U^{M_i}\,d\lambda_i=+\infty$. Tonelli [F10] computes the same product integral in the other order: $\int\widetilde U^{M_i}\,d\lambda_i=\int\int G\,dM_i\,d\lambda_i=\int\int G\,d\lambda_i\,dM_i=\int\widetilde U^{\lambda_i}\,dM_i\le b\,M_i(\mathbb C)<+\infty$, because $\widetilde U^{\lambda_i}\le b$ everywhere and $M_i$ is finite. This contradiction gives $\operatorname{cap}(E)=0$, the converse implication. [step 9.1, F1, F2, F9, F10, F13, F14, F17, given]

10.2 For the $F_\sigma$ extension, let $(E_j)_{j\ge1}$ be a specified sequence of compact subsets of $\mathbb C$ with $\operatorname{cap}(E_j)=0$ for every $j$, and put $E:=\bigcup_{j\ge1}E_j$. For each $j$ with $E_j\ne\varnothing$, step 9.1 apply to $E_j$ and yield a finite positive measure $\sigma_j$ carried by $E_j$ with $p_{\sigma_j}(z)=-\infty$ for every $z\in E_j$; for $E_j=\varnothing$ put $\sigma_j:=0$. Countable Choice selects the family $(\sigma_j)_{j\ge1}$. [step 9.1, F3]

11.1 With $m_j:=\sigma_j(\mathbb C)$ and $r_j:=\max_{w\in E_j}|w|$ for $E_j\ne\varnothing$, and $m_j=r_j:=0$ otherwise, set $a_j:=2^{-j}\big/\bigl(1+m_j(1+\log(1+r_j))\bigr)>0$ and $\sigma:=\sum_{j\ge1}a_j\sigma_j$. Then $\sigma$ is a finite positive Borel measure with $\sigma(\mathbb C)\le\sum_{j\ge1}2^{-j}=1$ and $\int\log(1+|w|)\,d\sigma(w)\le\sum_{j\ge1}a_jm_j\log(1+r_j)\le\sum_{j\ge1}2^{-j}=1$; in particular the logarithmic moment of $\sigma$ is finite. [step 10.2, F15]

12.1 Put $u(z):=p_\sigma(z)=\int\log|z-w|\,d\sigma(w)$. If $z\in E_{j_0}$ for some $j_0$ with $E_{j_0}\ne\varnothing$, then $\int\log^+|z-w|\,d\sigma(w)\le\log(1+|z|)+\int\log(1+|w|)\,d\sigma(w)<+\infty$ because $|z-w|\le(1+|z|)(1+|w|)$, while the term $a_{j_0}\sigma_{j_0}$ contributes $a_{j_0}\int\log^-|z-w|\,d\sigma_{j_0}(w)=+\infty$: indeed $p_{\sigma_{j_0}}(z)=-\infty$ by step 10.2 and $\int\log^+|z-w|\,d\sigma_{j_0}(w)<+\infty$ since $\sigma_{j_0}$ is finite with compact support. Hence $\int\log^-|z-w|\,d\sigma(w)=+\infty$ and $u(z)=\int\log^+-\int\log^-=-\infty$; that is, $u=-\infty$ on $E$. [step 10.2, step 11.1, F1]

12.2 Local integrability: there is for every compact $Q\subseteq\mathbb C$ a constant $C_Q<\infty$ with $\int_Q|\log|z-w||\,dA(z)\le C_Q(1+\log(1+|w|))$ for every $w\in\mathbb C$. Indeed, if $|w|\le2+2\sup_{z\in Q}|z|$ then $z-w$ ranges over a fixed bounded region and the integral is bounded by $\int_{B(0,K)}|\log|v||\,dA(v)<+\infty$ for a suitable ball $B(0,K)$ by [F12]; if $|w|$ is larger then $|z-w|\ge|w|/2>1$ on $Q$, so $|\log|z-w||\le\log(2|w|)\le1+\log(1+|w|)$ and the bound follows with $\operatorname{area}(Q)$. Tonelli [F10] with the nonnegative integrand $|\log|z-w||$ and the finite measure $\sigma$ therefore gives $\int_Q\int_{\mathbb C}|\log|z-w||\,d\sigma(w)\,dA(z)\le C_Q\bigl(1+\int\log(1+|w|)\,d\sigma(w)\bigr)<+\infty$, so $u\in L^1_{\mathrm{loc}}(\mathbb C)$; in particular $u$ is finite Lebesgue-a.e. and is not identically $-\infty$ on the domain $\mathbb C$. [step 11.1, F10, F12]

13.1 Fix $N\ge1$ and split $\sigma=\sigma_N+\sigma^N$ on $D(0,N)$, where $\sigma_N$ is its restriction to $\{|w|\le2N+1\}$ and $\sigma^N$ its restriction to $\{|w|>2N+1\}$. The measure $\sigma_N$ is finite with compact support, so $p_{\sigma_N}$ is subharmonic by [F16]. For $z\in D(0,N)$ and $w$ in the tail one has $|z-w|>N+1>1$; the logarithmic moment from step 11.1 makes $\log|z-w|$ integrable against $\sigma^N$, and its first and second derivatives in $z$ are bounded on this disc by constants because the distance is bounded below by $N+1$. The kernel and all its derivatives are Borel in $w$ and smooth in $z$ away from $w$. The bounds on derivatives of orders one and two are integrable constants because $\sigma^N$ is finite. Applying [F18] along each coordinate interval inside the disc, first to the kernel and then to its first derivatives, permits differentiation under the integral twice; dominated convergence in [F18] makes those derivatives continuous. By [F19], and $\Delta p_{\sigma^N}(z)=\int\Delta_z\log|z-w|\,d\sigma^N(w)=0$. Hence $p_{\sigma^N}$ is harmonic on $D(0,N)$ and $u=p_{\sigma_N}+p_{\sigma^N}$ is subharmonic there by [F19]. Each closed disc is contained in one of these discs, which exhaust $\mathbb C$, so $u$ is upper semicontinuous and satisfies the circle mean inequality locally on $\mathbb C$; it is not identically $-\infty$ by step 12.2. Thus $u$ is subharmonic on $\mathbb C$ by [F11] and is $-\infty$ on $E$ by step 12.1. [step 11.1, step 12.1, step 12.2, F11, F16, F18, F19]

14.1 Conversely to the forward direction of steps 10.2–13.1, if $u$ is subharmonic on a complex domain $\Omega$ with $E\subseteq\Omega$ and $u=-\infty$ on $E$, then every $E_j$ is a nonempty or empty compact subset of the domain $\Omega$; for nonempty $E_j$, step 10.1 applied to $E_j$ give $\operatorname{cap}(E_j)=0$, and empty pieces have capacity zero by [F2]. [step 10.1, step 13.1, F2, given]

15.1 Assembling: step 1.2 and step 9.1 give the compact forward direction, with the witness $\sigma$ of step 8.1 and $U^\sigma=+\infty$ on $E$ by step 9.1; step 10.1 gives the compact converse; steps 10.2–13.1 give the witness $\sigma$ of step 11.1 for a specified $F_\sigma$ union of compact capacity-zero sets, with $U^\sigma=+\infty$ on $E$ by steps 12.1 and 13.1; and step 14.1 gives the converse for such unions. The potential-form clauses of the statement are thus the witnesses actually constructed, so both assertions and their Evans-measure refinements are proved. [step 1.2, step 8.1, step 9.1, step 10.1, step 11.1, step 12.1, step 13.1, step 14.1] ∎

## Remarks

**What the lemma does and does not say.** The equivalence is proved for compact sets and for sets presented in advance as a countable union of compact sets. It does not identify arbitrary non-Borel sets with capacity-polar sets, and it does not assert the local "at every point a local witness" form of subharmonic polarity of [[def-polar-set-and-quasi-everywhere]]; the witness in the forward direction is global and produced by the Evans construction above.

**Where the axiom is spent.** Dependent Choice enters through the successive subsequences of step 3.1, the positive-functional Riesz representation [F8], and the local Riesz decomposition [F13]. Countable Choice is used for the rational-box selection in step 1.4, the infimizing sequences and minimizer choices in steps 3.1 and 6.1, the family of compact witnesses in step 10.2, and through the kernel suppliers [F12] and [F16]. No form of the Axiom of Choice stronger than Dependent Choice is used, and the ordinary maximum principle [F14] and Tonelli [F10] are choice-free.
