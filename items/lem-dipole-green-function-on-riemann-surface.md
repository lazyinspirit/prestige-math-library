---
id: lem-dipole-green-function-on-riemann-surface
kind: lemma
title: "A dipole Green function exists on a Riemann surface"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - def-countable-choice
  - thm-second-countable-implies-lindelof
  - thm-connected-and-locally-path-connected-implies-path-connected
  - def-riemann-surface-and-holomorphic-atlas
  - def-harmonic-and-subharmonic-riemann-surface-functions
  - def-canonical-green-kernel-riemann-surface
  - def-plane-harmonic-function
  - def-plane-subharmonic-function
  - thm-c-two-characterization-of-plane-subharmonicity
  - lem-green-envelope-dichotomy-and-logarithmic-pole
  - lem-green-kernel-exists-after-removing-a-chart-disc
  - lem-green-kernel-symmetry-on-riemann-surfaces
  - lem-weak-harmonic-limits-on-riemann-surfaces
  - lem-locality-of-subharmonicity
  - thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions
  - thm-maximum-principle-for-plane-subharmonic-functions
  - thm-harmonic-majorant-characterization-of-plane-subharmonicity
  - lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity
  - thm-harnack-inequality-on-a-disc
  - cor-nonnegative-harmonic-function-with-an-interior-zero-vanishes
  - thm-plane-harmonic-functions-are-smooth-and-real-analytic
  - def-upper-semicontinuous-real-map-on-a-topological-space
  - def-connected-space
  - def-connected-r
  - def-hausdorff-space
  - def-compact-space
  - def-interior-closure-boundary-top
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - thm-compactness-under-continuous-maps
  - thm-continuous-image-of-a-connected-space
  - lem-log-modulus-is-harmonic-off-its-centre
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
      locator: "PDF pp. 9-13 (Lemma 5: the exterior surfaces W_t, estimates (18) and (19), the Harnack comparison of u_t, the one-sided maximum-principle bounds for G_t, the normal-family limit and the removable extension at p0); PDF p. 10 (Corollary 6, symmetry)"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 section 5, printed pp. 115-118 (Green and dipole functions, normal families)"
---

## Statement

Assume Countable Choice. Let $X$ be a connected Riemann surface
([[def-riemann-surface-and-holomorphic-atlas]]) and let $p,q\in X$ be distinct.
Then there is a real function $G:X\setminus\{p,q\}\to\mathbb R$ with the
following properties.

1. $G$ is harmonic on $X\setminus\{p,q\}$
   ([[def-harmonic-and-subharmonic-riemann-surface-functions]]).
2. There are disjoint coordinate discs $U_p\ni p$ and $U_q\ni q$ with compact
   closures on which the pole normalisations hold: for centred coordinates
   $z_p:U_p\to\mathbb D$ and $z_q:U_q\to\mathbb D$ the functions
   $$G+\log|z_p|\quad\text{and}\quad G-\log|z_q|$$
   extend to harmonic functions on $U_p$ and $U_q$ respectively.
3. $G$ is bounded on the complement of $U_p\cup U_q$:
   $\sup_{X\setminus(U_p\cup U_q)}|G|<+\infty$.

## Facts & Assumptions
**Given:** Countable Choice; a connected Riemann surface $X$; distinct points $p_1,p_2\in X$; a third point $p_0\in X\setminus\{p_1,p_2\}$ with a coordinate disc $U_0$; pairwise disjoint coordinate discs $U_0,U_1,U_2$ with centred coordinates $z_j:U_j\to\mathbb D$, $z_j(p_j)=0$ for $j=0,1,2$ (so $p_0=z_0^{-1}(0)$); $tU_0:=z_0^{-1}(D(0,t))$ for $0<t<1$; $rU_1:=z_1^{-1}(D(0,r))$ for a fixed $0<r<1$; the exterior surfaces $Y_t:=X\setminus\overline{tU_0}$.

[A1] Countable Choice ([[def-countable-choice]]): every at most countable family of nonempty sets has a choice function.

[F1] Riemann surfaces ([[def-riemann-surface-and-holomorphic-atlas]]): $X$ is nonempty, connected, Hausdorff and second countable with a holomorphic atlas; an open connected subset carries the restricted structure; coordinate discs as above exist around every point and can be shrunk to have pairwise disjoint compact closures.

[F2] Canonical Green kernel and Perron family ([[def-canonical-green-kernel-riemann-surface]]): centred charts, the Perron family $\mathcal F_p(V)$ of nonnegative subharmonic functions on $V\setminus\{p\}$ vanishing off a compact set $K\subseteq V$ and having at most a unit logarithmic pole at $p$, the envelope $g_V(\cdot,p)$, and the finite canonical kernel of a Greenian surface.

[F3] Removing a coordinate disc ([[lem-green-kernel-exists-after-removing-a-chart-disc]]): if $U=\varphi^{-1}(B(a,\rho))$ in a connected Riemann surface, with $\rho>0$ and $\overline B(a,\rho)\subseteq\varphi(\operatorname{dom}\varphi)$, and the exterior is nonempty, the exterior $X\setminus\overline U$ is connected and admits a finite canonical Green kernel at every pole.

[F4] Symmetry and exhaustion kernels ([[lem-green-kernel-symmetry-on-riemann-surfaces]]): finite canonical kernels at two distinct poles satisfy $g_X(a,b)=g_X(b,a)$.

[F5] Weak harmonic limits ([[lem-weak-harmonic-limits-on-riemann-surfaces]]): under $\mathrm{AC}_\omega$, a locally uniformly bounded sequence of real harmonic functions on a Riemann surface has a subsequence converging uniformly on every compact subset to a harmonic function.

[F6] Removable singularity for bounded harmonic functions ([[thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions]]): a function harmonic on a punctured disc and bounded there extends harmonically across the puncture; chartwise this gives the same statement on a Riemann surface.

[F7] Chartwise notions ([[def-harmonic-and-subharmonic-riemann-surface-functions]], [[def-plane-harmonic-function]], [[def-plane-subharmonic-function]], [[thm-c-two-characterization-of-plane-subharmonicity]]): harmonicity and subharmonicity are chartwise; a harmonic function is subharmonic and has smooth chart expressions; restrictions to open subsets preserve subharmonicity; nonnegative linear combinations of subharmonic functions are subharmonic; the interior maximum principle holds ([[thm-maximum-principle-for-plane-subharmonic-functions]]). Subharmonicity is equivalent to comparison against continuous harmonic majorants on closed discs ([[thm-harmonic-majorant-characterization-of-plane-subharmonicity]]).

[F8] Kernel properties ([[lem-green-envelope-dichotomy-and-logarithmic-pole]]): under Countable Choice a finite canonical kernel is harmonic and strictly positive off its pole, and in every centred chart its sum with $\log|z|$ extends harmonically across the pole.

[F14] Under Countable Choice a second-countable space is Lindelöf ([[thm-second-countable-implies-lindelof]]); a connected locally path-connected space is path-connected ([[thm-connected-and-locally-path-connected-implies-path-connected]]). Coordinate discs supply local path connectedness.

[F9] Nonnegative harmonic functions with an interior zero ([[cor-nonnegative-harmonic-function-with-an-interior-zero-vanishes]]): a nonnegative harmonic function on a connected plane domain which has a zero vanishes identically; chartwise, a nonnegative harmonic function on a connected surface domain has an open zero set and is either positive everywhere or identically zero.

[F10] Harnack's inequality on a disc ([[thm-harnack-inequality-on-a-disc]]): a positive harmonic function $u$ near $\overline{D(a,R)}$ satisfies $\frac{R-\rho}{R+\rho}u(a)\le u(z)\le\frac{R+\rho}{R-\rho}u(a)$ for $|z-a|=\rho<R$; in particular its values on a smaller concentric disc are bounded above and below by fixed multiples of $u(a)$.

[F11] Topology ([[def-compact-space]], [[def-hausdorff-space]], [[def-interior-closure-boundary-top]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-compactness-under-continuous-maps]]): compact subsets of a Hausdorff space are closed, continuous images of compacta are compact, and $\partial V=\overline V\setminus\operatorname{int}V$.

[F12] Connectedness ([[def-connected-space]], [[def-connected-r]], [[thm-continuous-image-of-a-connected-space]]): continuous images of connected spaces are connected; $\mathbb R$ and its images are connected.

[F13] Upper semicontinuity ([[def-upper-semicontinuous-real-map-on-a-topological-space]]): chart expressions of subharmonic functions are upper semicontinuous.

[F15] The logarithm of the modulus ([[lem-log-modulus-is-harmonic-off-its-centre]]): $\log|z-c|$ is harmonic off $c$.

## Proof
1.1 **The coordinate discs.** Around any point of the surface $X$ there is a chart whose image is the unit disc; shrinking and shrinking again, and using that $X$ is Hausdorff, one obtains a point $p_0\in X\setminus\{p_1,p_2\}$ and centred coordinate discs $z_j:U_j\to\mathbb D$, $j=0,1,2$, with $z_j(p_j)=0$ and pairwise disjoint compact closures. Choose each $U_j$ inside a larger coordinate chart, so that its coordinate $z_j$ extends to a neighbourhood of $\overline U_j$. Put $tU_0:=z_0^{-1}(D(0,t))$ for $0<t<1$ and fix $0<r<1$ with $\overline{rU_1}\subseteq U_1$; here $rU_1:=z_1^{-1}(D(0,r))$. [F1, construct]

1.2 **The exterior surfaces.** For $0<t<1$ the set $Y_t:=X\setminus\overline{tU_0}$ is a nonempty connected Riemann surface by [F3] (applied to the coordinate disc $tU_0$, whose closure is compact and whose exterior contains $p_1$, $p_2$ and $p_0$-free regions), and it admits a finite canonical Green kernel $g_t(\cdot,y)$ at every pole $y\in Y_t$. The points $p_1,p_2$ lie in every $Y_t$, and by [F4] the kernels of $Y_t$ are symmetric: $g_t(p_1,p_2)=g_t(p_2,p_1)$ for every $t$. [F2, F3, F4]

1.3 **The complement of a closed disc in a connected surface is connected.** Let $S$ be a connected Riemann surface and $C=\psi^{-1}(\overline B(b,\sigma))$ for a chart of $S$, with $\sigma>0$, $\overline B(b,\sigma)\subseteq\psi(\operatorname{dom}\psi)$ and $S\setminus C\ne\varnothing$. Then $S\setminus C$ is connected: writing $\gamma=\partial C$, a compact connected circle in $S$ [F11, F12], a separation $S\setminus C=A\sqcup B$ into nonempty open sets gives $S=C^\circ\sqcup\gamma\sqcup A\sqcup B$, every point of $\gamma$ lies in $\overline A\cup\overline B$; the traces are disjoint because a sufficiently small exterior half-disc at a boundary point is connected and cannot meet both sides of the separation. The two traces are closed in the connected circle $\gamma$, so $\gamma$ lies in one closure, say $\gamma\subseteq\overline A$, and then $\overline B$ meets neither $\gamma$ (the traces are disjoint) nor the open sets $A,C^\circ$. Thus $\overline B=B$, so $B$ is open and closed in $S$, so $B=S$ and $A=\varnothing$, a contradiction; the other case is symmetric. Consequently each region $R_t:=Y_t\setminus\overline{rU_1}=X\setminus(\overline{tU_0}\cup\overline{rU_1})$ is connected, since it is obtained from the connected surface $X$ by removing the two closed discs $\overline{tU_0}$ and $\overline{rU_1}$ in succession, both with nonempty complement. [F11, F12, cases]

1.4 **Harnack chains on a compact connected subset of a surface domain.** Let $S$ be a connected Riemann surface, $K\subseteq S$ compact and connected, and let $u>0$ be harmonic on $S$. Then there is a constant $C_K$, depending only on $K$ and $S$, with $\sup_Ku\le C_K\inf_Ku$. Indeed, cover $K$ by finitely many chart discs $B_1,\dots,B_N$ whose doubles are contained in chart domains and which meet $K$; the union $\bigcup B_i$ is an open set containing the connected set $K$, so each $B_i$ meets the component of $\bigcup B_i$ containing $K$, and those balls form a family with connected overlap graph. On each chart, [F10] on the double of $B_i$ compares any two values inside $B_i$ by a fixed factor; at an overlap point this transports the comparison to a neighbouring ball; multiplying these finitely many constants along the connected graph gives $u(x)\le C_Ku(y)$ for all $x,y\in K$, i.e. $\sup_Ku\le C_K\inf_Ku$. [F7, F10, construct]

2.1 **Compact-support maximum principle on an exterior.** Let $S$ be a connected Riemann surface, let $C$ be a closed coordinate disc contained in a larger chart as in step 1.3, with $R:=S\setminus C$ nonempty, and let $u$ be subharmonic on $R$ and upper semicontinuous up to $\partial C$; $R$ is connected by step 1.3. Assume $\limsup_{x\to\zeta,\,x\in R}u(x)\le0$ for every $\zeta\in\partial C$, and that $u\le0$ on $R\setminus K$ for some compact $K\subseteq S$. Then $u\le0$ on $R$. If $u(x_0)>0$, choose $a$ with $0<a<u(x_0)$. The set $E:=\{x\in R:u(x)\ge a\}$ lies in $K$; upper semicontinuity makes it closed at points of $K\cap R$, and the boundary limsup condition prevents its closure in $K$ from meeting $\partial C$. It cannot accumulate in $C^\circ$, so $E$ is compact and contained in $R$. The extended-valued upper-semicontinuous maximum on $E$ is finite and attained at an interior point of $R$. It is a positive global maximum of $u$, so the strong maximum principle makes $u$ constant on connected $R$, contradicting the boundary limsup bound at any point of the nonempty circle $\partial C$. [F1, F7, F11, F13, step 1.3]

3.1 **Estimates (18) and (19).** Fix $0<t<1$ and write $g:=g_t(\cdot,p_1)$ and $M_1(t):=\max_{\partial(rU_1)}g$. For (18), let $v\in\mathcal F_{p_1}(Y_t)$ and choose its compact support set $K\subseteq Y_t$. The function $u:=v-M_1(t)$ is subharmonic on $R_t:=Y_t\setminus\overline{rU_1}$, which is connected by step 1.3. On $\partial(rU_1)$ its boundary limsup is at most $0$, because $v\le g$ and $g\le M_1(t)$ there; off $K$ it equals $-M_1(t)\le0$. Step 2.1 gives $v\le M_1(t)$ throughout $R_t$. Taking the supremum over candidates yields $g_t(x,p_1)\le M_1(t)$ for every $x\in Y_t\setminus\overline{rU_1}$; no estimate inside the pole disc is asserted. For (19), every $v\in\mathcal F_{p_1}(Y_t)$ and $\varepsilon>0$ gives a subharmonic extension of $v+(1+\varepsilon)\log|z_1|$ to $U_1$, with value $-\infty$ at $p_1$ [F7, F15]. The maximum principle on $U_1$ gives $\max_{\partial(rU_1)}v+(1+\varepsilon)\log r\le\max_{\partial U_1}v\le\max_{\partial U_1}g$; taking the supremum over $v$ and letting $\varepsilon\downarrow0$ gives $M_1(t)\le\max_{\partial U_1}g+\log(1/r)$. [F2, F7, F15, step 2.1, algebra]

4.1 **A uniform Harnack bound for the outer parts of the kernels.** Fix a compact connected set $K\subseteq R_1:=X\setminus(\overline{U_0}\cup\overline{rU_1})$ containing $\{p_2\}\cup\partial U_1\cup\partial U_2$; such a set exists because $R_1$ is connected and path-connected and these three sets are compact. For every $0<t<1$, $u_t:=M_1(t)-g_t(\cdot,p_1)$ is nonnegative and harmonic on $R_t\supseteq K$ by (18) and [F8]. If $u_t$ has a zero, then its zero set is open and closed by [F9], so $u_t\equiv0$ on connected $R_t$ and $g_t(\cdot,p_1)$ is constant on $K$. Otherwise $u_t>0$ on $R_t$, and step 1.4, applied on the fixed surface $R_1\subseteq R_t$, gives $\sup_Ku_t\le C_Ku_t(q_t)$ at a point $q_t\in\partial U_1$ where $g_t$ attains its maximum on $\partial U_1$. By (19), $u_t(q_t)=M_1(t)-\max_{\partial U_1}g_t\le\log(1/r)$. Thus $\sup_{x\in K}|g_t(x,p_1)-g_t(p_2,p_1)|\le C_1$ for a constant $C_1$ independent of $t$. The same argument with the poles reversed, applying Harnack on the fixed surface $R'_1$ and using a compact connected set $K'\subseteq R'_1:=X\setminus(\overline{U_0}\cup\overline{rU_2})$ containing $\{p_1\}\cup\partial U_1\cup\partial U_2$, gives $C_2$ independent of $t$ with $\sup_{x\in K'}|g_t(x,p_2)-g_t(p_1,p_2)|\le C_2$. [F7, F9, F10, step 1.4, step 3.1, algebra]

5.1 **The dipole difference and its uniform bound.** Put $G_t:=g_t(\cdot,p_1)-g_t(\cdot,p_2)$ on $Y_t\setminus\{p_1,p_2\}$. For $x\in K\cap K'\supseteq\partial U_1\cup\partial U_2$, step 4.1 and symmetry give $|G_t(x)|\le C:=C_1+C_2$. For a candidate $v\in\mathcal F_{p_1}(Y_t)$, the function $\psi:=v-g_t(\cdot,p_2)$ extends subharmonically across $p_2$ with value $-\infty$. Near $p_2$, $-g_t(\cdot,p_2)=\log|z_2|-h$ for a harmonic $h$. The function $\log|z_2|$, extended by $-\infty$ at $p_2$, is subharmonic: to check [F7] harmonic comparison, let $k$ be continuous on a closed disc and harmonic inside, with $k\ge\log|z_2|$ on the circle. Away from $0$, $\log|z_2|-k$ is harmonic; near $0$ it tends to $-\infty$. If positive anywhere inside, its positive superlevel sets are compact and avoid $0$ and the boundary, so it attains a positive interior maximum, contradicting the maximum principle and boundary limsup. Thus $\log|z_2|\le k$ inside; upper semicontinuity at $0$ and finiteness elsewhere finish the harmonic-majorant criterion. Thus $-g_t(\cdot,p_2)$ is subharmonic across $p_2$, and adding the subharmonic $v$ shows that $\psi$ is subharmonic there. Hence $\psi$ is subharmonic on the exterior $Y_t\setminus\overline{U_1}$, which is connected by step 1.3. On $\partial U_1$, $\psi\le g_t(\cdot,p_1)-g_t(\cdot,p_2)\le C$ by step 4.1; off the compact support of $v$, $\psi=-g_t(\cdot,p_2)\le0$. Applying step 2.1 to $\psi-C$ gives $\psi\le C$ on $Y_t\setminus\overline{U_1}$. Taking the supremum over $v$ yields $G_t\le C$ there. Reversing the poles gives $G_t\ge-C$ on $Y_t\setminus\overline{U_2}$, hence $|G_t|\le C$ on $Y_t\setminus(U_1\cup U_2)$ for every $t$. [F2, F7, step 1.2, step 1.3, step 2.1, step 4.1, algebra]

6.1 **Bounds on the pole discs.** The function $G_t+\log|z_1|$ extends to a harmonic function on $U_1$: on $U_1\setminus\{p_1\}$ it equals $(g_t(\cdot,p_1)+\log|z_1|)-g_t(\cdot,p_2)$, the first summand is harmonic on $U_1$ and the second is harmonic on $U_1$ because $p_2\notin U_1$ and $U_1\subseteq Y_t$ [F8]. Since it is harmonic on the disc $U_1$ and continuous on $\overline U_1$, the maximum principle gives $\sup_{U_1}|G_t+\log|z_1||=\sup_{\partial U_1}|G_t+\log|z_1||=\sup_{\partial U_1}|G_t|\le C$ by step 5.1. Similarly $\sup_{U_2}|G_t-\log|z_2||\le C$. [F7, F8, step 5.1]

7.1 **A limit on the increasing domains.** For $n\ge0$, set $t_n=1/(n+2)$ and $\Omega=X\setminus\{p_0,p_1,p_2\}$. It is connected: a separation would extend across each deleted point by assigning a small connected punctured coordinate disc to one side, producing a separation of $X$. Cover $\Omega$ by relatively compact coordinate discs and use [A1], [F14] to fix a countable subcover. Enumerate the inverse images of rational coordinate points in these discs as $a_1,a_2,\ldots$; they form a dense subset. At each $a_l$ the numerical sequence $G_{t_n}(a_l)$ is eventually defined and bounded by steps 5.1 and 6.1; give its finitely many undefined terms value zero. Select nested subsequences deterministically: for a bounded numerical sequence, start with the least integer symmetric interval containing its values, repeatedly take the left closed half when it contains infinitely many terms and the right half otherwise, and at each stage take the least later index in that half. The nested interval lengths tend to zero, so this defines a convergent subsequence without dependent choices. Apply this rule recursively at $a_l$ and take the diagonal. The diagonal converges at every $a_l$. On every relatively compact chart disc avoiding the three points, all sufficiently late $G_{t_n}$ are harmonic and uniformly bounded by steps 5.1 and 6.1. Harnack's inequality [F10], applied to the positive shifted functions $M+1+G_{t_n}$ on smaller discs, gives uniform equicontinuity there: its upper and lower factors tend to $1$ as the distance from the centre tends to zero, and the centre values are bounded. On any compact subset of $\Omega$, take finitely many such neighbourhoods and dense points within them. The triangle inequality, equicontinuity and convergence at these finitely many dense points give the uniform Cauchy property. Thus the diagonal converges locally uniformly to a continuous $G$. On each coordinate disc, [F5] applies to its harmonic bounded tail; any subsequential harmonic limit equals this already determined limit. Hence $G$ is harmonic on $\Omega$. [A1, F5, F8, F10, F14, step 5.1, step 6.1, construct]

8.1 **The logarithmic poles.** For $x\in U_1\setminus\{p_1\}$ the pointwise convergence of step 7.1 gives $G(x)+\log|z_1(x)|=\lim_k(G_{t_{n_k}}(x)+\log|z_1(x)|)$, and by step 6.1 the absolute value of each term is at most $C$. Hence $G+\log|z_1|$ is a bounded harmonic function on the punctured disc $U_1\setminus\{p_1\}$ and extends harmonically across $p_1$ by [F6]. The identical argument on $U_2$ gives that $G-\log|z_2|$ extends harmonically across $p_2$. [F6, step 6.1, step 7.1]

9.1 **Extension across $p_0$ and boundedness.** For $x\in U_0\setminus\{p_0\}$ and $n$ large enough that $t_n<|z_0(x)|$ one has $x\in Y_{t_n}\setminus(U_1\cup U_2)$, so $|G_{t_n}(x)|\le C$ by step 5.1; passing to the limit along the subsequence of step 7.1 gives $|G(x)|\le C$. Thus $G$ is a bounded harmonic function on the punctured disc $U_0\setminus\{p_0\}$ and extends harmonically across $p_0$ by [F6]. After this extension $G$ is harmonic on $X\setminus\{p_1,p_2\}$, satisfies the pole normalisations of steps 8.1 at $p_1$ and $p_2$, and satisfies $\sup_{X\setminus(U_1\cup U_2)}|G|\le C<+\infty$, since $|G|\le C$ on $(X\setminus\{p_0\})\setminus(U_1\cup U_2)$ and $|G(p_0)|\le C$ by continuity. [F6, step 5.1, step 7.1, step 8.1]

10.1 **Conclusion.** Renaming $p_1,p_2$ as $p,q$ and taking $U_p:=U_1$, $U_q:=U_2$ yields a real function $G$ harmonic off $p$ and $q$, with $G+\log|z_p|$ harmonic at $p$, $G-\log|z_q|$ harmonic at $q$, and $G$ bounded off the two discs. Countable Choice supplies the countable chart cover and the invoked kernel and harmonic-limit results. Step 7.1 selects numerical subsequences deterministically, so no Dependent Choice is used; the remaining geometric selections are finite. [A1, F5, step 9.1] ∎
