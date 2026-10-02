---
id: lem-weak-harmonic-limits-on-riemann-surfaces
kind: lemma
title: "Locally bounded harmonic families have harmonic subsequential limits"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - def-countable-choice
  - def-riemann-surface-and-holomorphic-atlas
  - def-smooth-manifold
  - cor-holomorphic-functions-are-real-analytic-and-smooth
  - lem-every-manifold-has-a-compact-exhaustion
  - def-compact-exhaustion-of-a-manifold
  - def-harmonic-and-subharmonic-riemann-surface-functions
  - def-plane-harmonic-function
  - thm-poisson-representation-for-disc-harmonic-functions
  - thm-differentiation-under-the-integral-sign-on-a-compact-rectangle
  - thm-spherical-mean-value-property-for-harmonic-functions
  - thm-uniform-limit-interchanges-riemann-integration
  - thm-converse-mean-value-property-for-plane-functions
  - def-mean-value-property-for-plane-functions
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - def-distributional-harmonicity-and-poisson-equation-in-rn
  - def-locally-integrable-function-as-a-regular-distribution
  - def-weak-derivative-of-a-locally-integrable-function
  - lem-classical-derivatives-are-weak-derivatives
  - thm-weyl-lemma-for-the-laplacian
  - thm-bolzano-weierstrass
  - lem-compactness-of-a-subspace-is-ambient
  - lem-finite-choice
  - thm-compactness-under-continuous-maps
  - thm-uniform-cauchy-criterion-real-functions
  - def-pointwise-uniform-and-uniformly-cauchy-convergence
  - def-compact-space
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Donald E. Marshall, The Uniformization Theorem"
      url: "https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf"
      locator: "PDF pp. 12-13 (Case 2 of the uniformization proof): the dipole approximations G_t are uniformly bounded on the complement of the pole discs and 'By normal families, there exists a sequence t_n -> 0 so that G_{t_n} converges uniformly on compact subsets of W minus {p_0,p_1,p_2} to a function G ... The function G extends to be harmonic at p_0 because it is bounded in a punctured neighborhood of p_0.' This item supplies exactly that compactness step, with its proof."
    - title: "John K. Hunter, Notes on Partial Differential Equations"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 2 (harmonic functions): Poisson formula, mean value properties and maximum principles; the interior radial-derivative estimate for a harmonic function bounded on a circle is derived here from the Poisson kernel and is not quoted from the source."
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 section 5 (Uniformization Theorem), printed pp. 115-118: normal-family selection of locally uniformly convergent subsequences of holomorphic maps (used at printed p. 117 in the proof of Theorem 5.5); Ch. 1 section 4, printed pp. 110-116, develops normality."
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $X$ be a Riemann surface
([[def-riemann-surface-and-holomorphic-atlas]]) and let $(u_n)_{n\ge1}$ be a
sequence of real harmonic functions
([[def-harmonic-and-subharmonic-riemann-surface-functions]]) on $X$. Call the
sequence **locally uniformly bounded** when every $x\in X$ has an open
neighbourhood $V$ and a real number $M$ with
$$|u_n(y)|\le M\qquad\text{for all }n\ge1\text{ and all }y\in V .$$

1. **Subsequential limit.** If $(u_n)$ is locally uniformly bounded, then
   there are a strictly increasing sequence $n_1<n_2<\cdots$ of natural
   numbers and a harmonic function $u$ on $X$ such that $u_{n_k}\to u$
   uniformly on every compact subset of $X$; the function $u$ is the
   pointwise limit of the subsequence $(u_{n_k})$.

2. **Distributional limits in charts.** Let $\Omega\subseteq\mathbb C$ be
   open and let $v_n$ be real harmonic on $\Omega$ for every $n$. Suppose the
   regular distributions $T_{v_n}$
   ([[def-locally-integrable-function-as-a-regular-distribution]]) converge
   in $\mathcal D'(\Omega)$ to a distribution $T$, that is
   $T_{v_n}(\varphi)\to T(\varphi)$ for every
   $\varphi\in C_c^\infty(\Omega)$. Then $\Delta T=0$, and by Weyl's lemma
   there is a unique smooth harmonic $h$ on $\Omega$ with $T=T_h$: a
   chartwise distributional limit of harmonic functions is represented by a
   smooth harmonic function, with no convergence of derivatives and no
   locally uniform convergence assumed.

## Facts & Assumptions
**Given:** Countable Choice; a Riemann surface $X$ and a locally uniformly bounded sequence $(u_n)$ of real harmonic functions on $X$; an open set $\Omega\subseteq\mathbb C$, real harmonic functions $v_n$ on $\Omega$ and a distribution $T$ with $T_{v_n}\to T$ for part 2.

[A1] Countable Choice: every at most countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] A Riemann surface is a nonempty connected Hausdorff second countable space with a holomorphic atlas; its charts are homeomorphisms onto open subsets of $\mathbb C$, holomorphic transition maps are smooth, and finite selections over a finite index set need no choice ([[def-riemann-surface-and-holomorphic-atlas]], [[lem-finite-choice]]).

[F2] The holomorphic atlas of $X$ is in particular a smooth atlas, so $X$ is a smooth $2$-manifold; under $\mathrm{AC}_\omega$ every smooth manifold admits a compact exhaustion, that is, a sequence $K_1\subseteq K_2\subseteq\cdots$ of compact subsets with $K_n\subseteq\operatorname{int}(K_{n+1})$ for every $n$ and $X=\bigcup_nK_n$ ([[def-smooth-manifold]], [[cor-holomorphic-functions-are-real-analytic-and-smooth]], [[lem-every-manifold-has-a-compact-exhaustion]], [[def-compact-exhaustion-of-a-manifold]]).

[F3] Chartwise harmonicity: a continuous function $u$ on an open $W\subseteq X$ is harmonic exactly when every chart expression $u\circ(\varphi|_{U\cap W})^{-1}$ is plane harmonic, and a real function on an open plane domain is plane harmonic exactly when it is of class $C^2$ with vanishing Laplacian $u_{xx}+u_{yy}=0$; so a harmonic function on $X$ restricts to a harmonic function on every open subset and is of class $C^2$ in charts ([[def-harmonic-and-subharmonic-riemann-surface-functions]], [[def-plane-harmonic-function]]).

[F4] Poisson representation on a disc: if $u$ is harmonic on an open set containing the closed disc $\overline{B(a,R)}$ and $z=a+\rho e^{i\phi}$ with $0\le\rho<R$, then $u(z)=\frac{1}{2\pi}\int_0^{2\pi}P(\rho,\phi-t)u(a+Re^{it})\,dt$, where $P(\rho,\theta)=(R^2-\rho^2)/(R^2-2R\rho\cos\theta+\rho^2)$ ([[thm-poisson-representation-for-disc-harmonic-functions]]).

[F5] Differentiation under the integral sign on a compact rectangle: if $g,h:[a,b]\times[c,d]\to\mathbb R$ are continuous and for every fixed $t$ the map $x\mapsto g(x,t)$ is differentiable on $(a,b)$ with derivative $h(x,t)$, then $G(x):=\int_c^dg(x,t)\,dt$ is differentiable on $[a,b]$ with $G'(x)=\int_c^dh(x,t)\,dt$ ([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]).

[F6] Under $\mathrm{AC}_\omega$ the spherical mean value property holds: if $u\in C^2(\Omega)$ with $\Delta u=0$ and $B_r(x)\Subset\Omega$, then $u(x)=M_u(x,r)$, the normalized average of $u$ over the circle $\partial B_r(x)$ ([[thm-spherical-mean-value-property-for-harmonic-functions]]).

[F7] Uniform convergence interchanges Riemann integration: if $f_k:[a,b]\to\mathbb R$ are Riemann integrable and $f_k\to f$ uniformly on $[a,b]$, then $f$ is Riemann integrable and $\int_a^bf_k\to\int_a^bf$ ([[thm-uniform-limit-interchanges-riemann-integration]]).

[F8] A continuous real function on an open plane set with the local circle and disc mean-value properties of [[def-mean-value-property-for-plane-functions]] is harmonic ([[thm-converse-mean-value-property-for-plane-functions]]). The disc mean is $\frac{2}{r^2}\int_0^r M_u(y,s)s\,ds$, where $M_u(y,s)$ is the normalized circle mean.

[F9] Distributions on an open $\Omega\subseteq\mathbb R^n$ are the continuous linear functionals on $C_c^\infty(\Omega)$, with $\partial_iT(\varphi):=-T(\partial_i\varphi)$ and $\Delta T:=\sum_i\partial_i^2T$, so that in particular $(\Delta T)(\varphi)=T(\Delta\varphi)$ for every test function $\varphi$; for $f\in L^1_{\mathrm{loc}}(\Omega)$ the regular distribution is $T_f(\varphi)=\int_\Omega f\varphi$ ([[def-distributional-harmonicity-and-poisson-equation-in-rn]], [[def-locally-integrable-function-as-a-regular-distribution]]).

[F10] Under $\mathrm{AC}_\omega$, classical derivatives of $C^k$ functions are weak derivatives, the weak test identity is equivalent to the distributional identity $\partial^\alpha T_u=T_{\partial^\alpha u}$, and for a $C^2$ function $f$ one therefore has $\Delta T_f=T_{\Delta f}$ ([[def-weak-derivative-of-a-locally-integrable-function]], [[lem-classical-derivatives-are-weak-derivatives]]).

[F11] Weyl's lemma: under $\mathrm{AC}_\omega$, if $T\in\mathcal D'(\Omega)$ satisfies $\Delta T=0$, then there is a unique smooth harmonic $h$ on $\Omega$ with $T=T_h$ ([[thm-weyl-lemma-for-the-laplacian]]).

[F12] Bolzano-Weierstrass: every bounded sequence of reals has a convergent subsequence ([[thm-bolzano-weierstrass]]).

[F13] Compactness read in the ambient space: if $K\subseteq X$ is compact and $(V_i)_{i\in I}$ is a family of open subsets of $X$ with $K\subseteq\bigcup_iV_i$, then finitely many of them cover $K$ ([[lem-compactness-of-a-subspace-is-ambient]]).

[F14] A continuous image of a compact set is compact, and a compact subset of a Hausdorff space is closed ([[thm-compactness-under-continuous-maps]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

[F15] A sequence of real functions on a set converges uniformly if and only if it is uniformly Cauchy ([[thm-uniform-cauchy-criterion-real-functions]], [[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

## Proof

1.1 By [F2] the holomorphic atlas of $X$ is a smooth atlas, so $X$ is a smooth $2$-manifold and, under [A1], admits a compact exhaustion $K_1\subseteq K_2\subseteq\cdots$ with every $K_n$ compact, $K_n\subseteq\operatorname{int}(K_{n+1})$ and $X=\bigcup_nK_n$; fix such a sequence. [A1, F2, choose]

1.2 For every compact $K\subseteq X$ there is a finite bound $M_K$ for all $|u_n|$ on $K$. Use the family of all open neighbourhoods furnished by local uniform boundedness, with their bounds, rather than choosing one for every point. A finite subcover exists by [F13]; the maximum of its finitely many bounds works. [given, F13, algebra]

1.3 **Chartwise Poisson setup.** Fix a holomorphic chart $\psi:U\to\mathbb C$ of the atlas, a point $a\in\psi(U)$, a radius $R>0$ with $\overline{B(a,R)}\subseteq\psi(U)$, and suppose $M$ satisfies $|u_n|\le M$ on $\psi^{-1}(\overline{B(a,R)})$ for all $n$. Put $w_n:=u_n\circ\psi^{-1}$ on $\psi(U)$; then each $w_n$ is plane harmonic on $\psi(U)$ by [F3] and, by [F4], satisfies $w_n(a+\rho e^{i\phi})=\frac{1}{2\pi}\int_0^{2\pi}P(\rho,\phi-t)w_n(a+Re^{it})\,dt$ for every $\phi$ and every $0\le\rho<R$, with $P(\rho,\theta)=(R^2-\rho^2)/(R^2-2R\rho\cos\theta+\rho^2)$ and $|w_n(a+Re^{it})|\le M$ on the boundary circle. [F3, F4, given]

1.4 **Kernel bound.** For $0<\rho\le r<R$ and every $\theta$, writing $D:=R^2-2R\rho\cos\theta+\rho^2\ge(R-\rho)^2>0$, one computes $\partial_\rho P=-\bigl(2\rho D+(R^2-\rho^2)\cdot 2(\rho-R\cos\theta)\bigr)/D^2$, hence $|\partial_\rho P|\le 2\rho/D+2(R+\rho)(R^2-\rho^2)/D^2\le 2r/(R-r)^2+2(R+r)^2/(R-r)^3=:C(R,r)<\infty$, a finite constant depending only on $R$ and $r$. [algebra]

1.5 **Part 2.** Let $\Omega\subseteq\mathbb C$ be open, let $v_n$ be real harmonic on $\Omega$ for every $n$, and let $T$ be a distribution with $T_{v_n}(\varphi)\to T(\varphi)$ for every $\varphi\in C_c^\infty(\Omega)$. By [F3] each $v_n$ is of class $C^2$ on $\Omega$, hence locally integrable, so that $T_{v_n}$ is a regular distribution for every $n$ by [F9]. [given, F3, F9]

2.1 **Differentiating in the radius.** Fix $n$, $\phi$ and $0<r<R$, and define $g(\rho,t):=P(\rho,\phi-t)w_n(a+Re^{it})$ and $h(\rho,t):=(\partial_\rho P)(\rho,\phi-t)w_n(a+Re^{it})$ on $[0,r]\times[0,2\pi]$. On this rectangle the denominator $R^2-2R\rho\cos\theta+\rho^2$ is bounded below by $(R-r)^2>0$, so $P$ and its $\rho$-derivative are continuous there; hence $g$ and $h$ are continuous, and for each fixed $t$ the map $\rho\mapsto g(\rho,t)$ is differentiable on $(0,r)$ with derivative $h(\rho,t)$. By [F5], applied with the parameter $\rho$ in the first slot, the function $G(\rho):=\int_0^{2\pi}g(\rho,t)\,dt$ is differentiable on $(0,r]$ with $G'(\rho)=\int_0^{2\pi}h(\rho,t)\,dt$. Since $G(\rho)=2\pi\,w_n(a+\rho e^{i\phi})$ by step 1.3, this gives $\frac{d}{d\rho}w_n(a+\rho e^{i\phi})=\frac{1}{2\pi}\int_0^{2\pi}(\partial_\rho P)(\rho,\phi-t)w_n(a+Re^{it})\,dt$. [F4, F5, step 1.3, algebra]

2.2 For every $n$ one has $\Delta T_{v_n}=0$. Indeed, since $v_n$ is of class $C^2$, its classical second partial derivatives are its weak second partial derivatives by [F10], and the weak test identity is equivalent to the distributional identity $\partial_i^2T_{v_n}=T_{\partial_i^2v_n}$; summing over $i$ gives $\Delta T_{v_n}=T_{\Delta v_n}$, and $\Delta v_n=0$ pointwise on $\Omega$ makes the right side the zero distribution. [F9, F10, step 1.5]

3.1 **Radial Lipschitz bound.** Combining steps 2.1 and 1.4 with $|w_n(a+Re^{it})|\le M$ gives $\bigl|\frac{d}{d\rho}w_n(a+\rho e^{i\phi})\bigr|\le C(R,r)M$ for every $n$, $\phi$ and $0<\rho\le r$; integrating this radial derivative along the segment from $a$ to $z=a+\rho e^{i\phi}$ gives $|w_n(z)-w_n(a)|\le C(R,r)M|z-a|$ whenever $|z-a|\le r$, and for $z=a$ both sides vanish. [step 1.3, step 2.1, step 1.4, algebra]

3.2 $\Delta T=0$. For every test function $\varphi$, the definition of the distributional Laplacian in [F9] gives $(\Delta T)(\varphi)=T(\Delta\varphi)$, the distributional convergence in step 1.5 applied to the test function $\Delta\varphi$ gives $T(\Delta\varphi)=\lim_nT_{v_n}(\Delta\varphi)$, and again by [F9] one has $T_{v_n}(\Delta\varphi)=(\Delta T_{v_n})(\varphi)=0$ for every $n$ by step 2.2; hence $(\Delta T)(\varphi)=0$ for every $\varphi\in C_c^\infty(\Omega)$. [F9, step 1.5, step 2.2]

4.1 **Oscillation neighbourhoods.** For every $x\in X$ and every $\varepsilon>0$ there is an open neighbourhood $V$ of $x$ with compact closure such that $|u_n(y)-u_n(x)|\le\varepsilon$ for all $n$ and all $y\in V$. Indeed, local uniform boundedness gives an open $W\ni x$ and $M_x$ with $|u_n|\le M_x$ on $W$ for all $n$; choose a holomorphic chart $\psi:U_0\to\mathbb C$ with $x\in U_0$ and replace it by its restriction to $U:=U_0\cap W$, a chart with $x\in U$ and $|u_n|\le M_x$ on $U$ for all $n$; put $a:=\psi(x)$ and choose $R>0$ with $\overline{B(a,R)}\subseteq\psi(U)$, which is possible because $\psi(U)$ is open in $\mathbb C$ and contains $a$. If $M_x=0$ then $u_n=0$ on $U$ for all $n$ and any open $V\ni x$ with compact closure inside $U$ works. Otherwise set $r:=R/2$, $C:=C(R,r)$ from step 1.4 and $\delta:=\min\{r,\varepsilon/(CM_x)\}>0$, and put $V:=\psi^{-1}(B(a,\delta))$; then $V$ is open with $x\in V$, its closure lies in the compact set $\psi^{-1}(\overline{B(a,r)})$ by [F14] (a continuous image of a compact set is compact), and step 3.1 gives $|u_n(y)-u_n(x)|\le C M_x|\psi(y)-a|<\varepsilon$ for all $n$ and all $y\in V$. [given, F3, F14, step 3.1, choose, cases]

5.1 **Finite oscillating covers.** For every pair $j,k\ge1$, step 4.1 and [F13] give finitely many centres $c_{j,k,i}\in K_j$ and neighbourhoods $V_{j,k,i}$ covering $K_j$ such that $|u_n(y)-u_n(c_{j,k,i})|<1/k$ for all $y\in K_j\cap V_{j,k,i}$ and all $n$. Use step 4.1 with $1/(2k)$ and take a finite subcover of the family of all admissible neighbourhood-centre pairs. Empty $K_j$ needs no centres. [F13, step 4.1, choose]

6.1 **Fixing the countable data.** For each pair $(j,k)$ the set of finite cover data in step 5.1 is nonempty. Apply [A1] to this fixed countable family, and fix one finite cover with its centres for every pair. Enumerate all those centres as $p_1,p_2,\ldots$ in a fixed ordering of $(j,k,i)$; pad by repetition if there are finitely many. There is at least one centre because $X$ is nonempty and the $K_j$ exhaust it. Every numerical sequence $(u_n(p_l))_n$ is bounded by local uniform boundedness. [A1, F1, F2, step 5.1, choose]

7.1 **Canonical nested subsequences.** We give an explicit selection rule for the numerical subsequence in [F12]. A bounded real sequence $(a_l)$ has a deterministically selected convergent subsequence. Let $M$ be the least positive integer with $|a_l|\le M$ for all $l$, and start with $I_0=[-M,M]$. Bisect each closed interval $I_{r-1}$, taking its left closed half if that half contains infinitely many terms of the sequence, and its right closed half otherwise. The selected $I_r$ contains infinitely many terms and has length $2M/2^r$. Let $\tau(r)$ be the least index greater than $\tau(r-1)$ with $a_{\tau(r)}\in I_r$, starting with $\tau(0)=0$. Nested intervals give a unique common point, to which $a_{\tau(r)}$ converges. Both recursions use uniquely specified choices. Starting with $\sigma_0$ the identity, apply this rule to $a_l=u_{\sigma_{r-1}(l)}(p_r)$ and put $\sigma_r=\sigma_{r-1}\circ\tau$. Recursion on the natural numbers therefore defines all the $\sigma_r$ without Dependent Choice or an additional use of [A1]. [F12, step 6.1, construct, algebra]

8.1 **Diagonal extraction.** Put $n_k:=\sigma_k(k)$. Since each $\sigma_{k+1}$ is a subsequence of $\sigma_k$ and its indexing map satisfies $\tau(l)\ge l$, one has $n_{k+1}>n_k$. For fixed $r$, the tail $k\ge r$ lies in the range of $\sigma_r$, so $(u_{n_k}(p_r))_k$ converges. [step 7.1, algebra]

9.1 **Uniform convergence on every exhaustion compact.** Fix $j,k$. For every $y\in K_j$, choose one of the finitely many $V_{j,k,i}$ containing $y$. For any subsequence indices $p,q$, $$|u_{n_p}(y)-u_{n_q}(y)|<2/k+|u_{n_p}(c_{j,k,i})-u_{n_q}(c_{j,k,i})|.$$ By step 8.1, the last term is less than $1/k$ for all sufficiently large $p,q$, uniformly over the finitely many centres of this cover. Thus $(u_{n_k}|_{K_j})_k$ is uniformly Cauchy and converges uniformly by [F15]. [F15, step 5.1, step 6.1, step 8.1]

10.1 **One global subsequence.** The fixed cover data include every $K_j$, so the single subsequence constructed in step 8.1 converges uniformly on every $K_j$ by step 9.1. No second recursive extraction is needed. [step 8.1, step 9.1]

11.1 Set $m_k:=n_k$. This sequence is strictly increasing and $(u_{m_k})_k$ converges uniformly on every $K_j$. [step 8.1, step 10.1]

12.1 Every compact $L\subseteq X$ lies in some $K_J$: the open sets $\operatorname{int}K_j$ cover $X$ by [F2], so a finite subcover of $L$ and nesting give such a $J$. Thus $(u_{m_k})$ converges uniformly on every compact subset of $X$, and pointwise everywhere. [F2, F13, step 11.1]

13.1 Define $u(x):=\lim_{k\to\infty}u_{m_k}(x)$ for $x\in X$, a well-defined real function on $X$ by step 12.1. Then $(u_{m_k})$ converges to $u$ uniformly on every compact subset of $X$ and $u$ is its pointwise limit; this completes everything in part 1 except harmonicity and continuity of $u$. [step 11.1, step 12.1]

13.2 $u$ is continuous. Let $x\in X$ and $\varepsilon>0$; step 4.1 provides an open neighbourhood $V$ of $x$ with compact closure and $|u_n(y)-u_n(x)|\le\varepsilon/3$ for all $n$ and all $y\in V$. Since $(u_{m_k})$ converges uniformly on the compact set $\overline V$ by step 12.1, for all sufficiently large $k$ one has $\sup_{y\in V}|u_{m_k}(y)-u(y)|<\varepsilon/3$ and $|u_{m_k}(x)-u(x)|<\varepsilon/3$, so $|u(y)-u(x)|<\varepsilon$ for every $y\in V$. Hence $u$ is continuous at every point of $X$. [step 4.1, step 12.1]

13.3 **Spherical mean property of the limit.** Let $\psi:U\to\mathbb C$ be a holomorphic chart and put $\Omega:=\psi(U)$, $w_k:=u_{m_k}\circ\psi^{-1}$ and $w:=u\circ\psi^{-1}$ on $\Omega$. Each $w_k$ is plane harmonic by [F3], and $w_k\to w$ uniformly on every compact subset of $\Omega$: if $L\subseteq\Omega$ is compact then $\psi^{-1}(L)$ is a compact subset of $X$ by [F14], and $\sup_L|w_k-w|=\sup_{\psi^{-1}(L)}|u_{m_k}-u|\to0$ by step 12.1. Let $b\in\Omega$ and $r>0$ with $\overline{B(b,r)}\subseteq\Omega$; by [F6] each $w_k$ satisfies $w_k(b)=\frac{1}{2\pi}\int_0^{2\pi}w_k(b+re^{is})\,ds$, and the integrands converge uniformly in $s\in[0,2\pi]$ to $s\mapsto w(b+re^{is})$ because the circle is a compact subset of $\Omega$; [F7] and $w_k(b)\to w(b)$ therefore give $w(b)=\frac{1}{2\pi}\int_0^{2\pi}w(b+re^{is})\,ds$. [F3, F6, F7, F14, step 12.1]

14.1 Hence $w$ has the local spherical mean value property on $\Omega$: given $b\in\Omega$ choose $r_b>0$ with $\overline{B(b,r_b)}\subseteq\Omega$; then for every $y\in B(b,r_b)$ and every $0<r<r_b-|y-b|$ one has $\overline{B(y,r)}\subseteq\Omega$, so step 13.3 gives $w(y)=\frac{1}{2\pi}\int_0^{2\pi}w(y+re^{is})\,ds$, the normalized circle average $M_w(y,r)$. Integrating this identity over the concentric radii gives the disc mean $\frac{2}{r^2}\int_0^r M_w(y,s)s\,ds=\frac{2}{r^2}\int_0^r w(y)s\,ds=w(y)$; the integrand extends continuously at $s=0$ because $w$ is continuous. Thus both local mean identities of [F8] hold. The chart expression $w$ is continuous by step 13.2, so [F8] and [A1] make $w$ plane harmonic on $\Omega$. As the holomorphic chart was arbitrary, [F3] makes $u$ harmonic on $X$; with steps 13.1 and 13.2 this proves part 1. [A1, F3, F8, step 13.2, step 13.3]

15.1 By [F11] and [A1] there is a unique smooth harmonic $h$ on $\Omega$ with $T=T_h$. This is exactly the representation asserted in part 2, so the proof is complete. [A1, F11, step 3.2] ∎
