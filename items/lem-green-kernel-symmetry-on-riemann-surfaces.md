---
id: lem-green-kernel-symmetry-on-riemann-surfaces
kind: lemma
title: "Symmetry of the canonical surface Green kernel"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - def-countable-choice
  - def-riemann-surface-and-holomorphic-atlas
  - def-harmonic-and-subharmonic-riemann-surface-functions
  - def-canonical-green-kernel-riemann-surface
  - lem-green-envelope-dichotomy-and-logarithmic-pole
  - lem-regular-exhaustion-and-dirichlet-on-riemann-surfaces
  - lem-surface-green-identity-on-smooth-bordered-domain
  - lem-locality-of-subharmonicity
  - thm-maximum-principle-for-plane-subharmonic-functions
  - lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity
  - def-plane-subharmonic-function
  - def-plane-harmonic-function
  - thm-c-two-characterization-of-plane-subharmonicity
  - thm-plane-harmonic-functions-are-smooth-and-real-analytic
  - def-upper-semicontinuous-real-map-on-a-topological-space
  - def-connected-space
  - def-connected-r
  - def-hausdorff-space
  - def-compact-space
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - lem-compactness-of-a-subspace-is-ambient
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
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
      locator: "PDF pp. 4-5 (Lemma 2, its barrier inequalities (5) and (6)); PDF pp. 7-8 (Theorem 4, symmetry (11)); PDF pp. 5-6 (Lemma 3, exhaustion by compact pieces and the role of the zero boundary values)"
    - title: "David Gilbarg and Neil S. Trudinger, Elliptic Partial Differential Equations of Second Order, 2nd ed."
      url: "https://djvu.online/file/jxRRleAzbYjsl"
      locator: "§6.4, paragraph following Theorem 6.19, printed p. 112: local C^{k+2,α} regularity up to a C^{k+2,α} boundary portion for a solution continuous there with C^{k+2,α} boundary values; apply k=0 to a harmonic function with zero boundary data."
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 sections 2.3 and 5, printed pp. 64-68 and 115-118 (Green function of a subdomain, monotone exhaustion, and symmetry)"
---

## Statement

Assume Countable Choice. Let $X$ be a Riemann surface
([[def-riemann-surface-and-holomorphic-atlas]]) with canonical Perron
envelopes as in [[def-canonical-green-kernel-riemann-surface]]. For a connected
relatively compact smooth-bordered domain $\Omega\subseteq X$ and a point
$p\in\Omega$, call the Perron envelope $g_\Omega(\cdot,p)$ of the surface
$\Omega$ with pole $p$ the **finite-domain zero-boundary kernel** of $\Omega$ at
$p$.

1. **Symmetry.** If $X$ admits finite canonical Green kernels at two distinct
   points $p,q\in X$, then
   $$g_X(p,q)=g_X(q,p).$$
2. **Exhaustion approximation.** Suppose $X$ is noncompact and
   $\Omega_1\subsetneqq\Omega_2\subsetneqq\cdots$ is a regular exhaustion of $X$
   by connected relatively compact smooth-bordered domains
   ([[lem-regular-exhaustion-and-dirichlet-on-riemann-surfaces]]), with the
   indices shifted so that $p,q\in\Omega_1$. Then:
   - each finite-domain zero-boundary kernel $g_{\Omega_n}(\cdot,p)$ is finite
     on $\Omega_n\setminus\{p\}$, harmonic there, has a unit logarithmic pole at
     $p$, and satisfies $\lim_{x\to\zeta,\,x\in\Omega_n}g_{\Omega_n}(x,p)=0$ for
     every $\zeta\in\partial\Omega_n$;
   - the sequence increases: $g_{\Omega_m}\le g_{\Omega_n}$ on
     $\Omega_m\setminus\{p\}$ whenever $m\le n$;
   - if $X$ admits a finite canonical Green kernel at $p$, then
     $g_{\Omega_n}(x,p)\to g_X(x,p)$ for every $x\in X\setminus\{p\}$ as
     $n\to\infty$.

## Facts & Assumptions
**Given:** Countable Choice; a Riemann surface $X$; two distinct points $p,q\in X$ at which the canonical envelopes are finite, in part 1; in part 2 a noncompact $X$ with a regular exhaustion $\Omega_1\subsetneqq\Omega_2\subsetneqq\cdots$ satisfying $p,q\in\Omega_1$; the notation $g_n:=g_{\Omega_n}(\cdot,p)$ for the finite-domain zero-boundary kernels.

[A1] Countable Choice: every at most countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] Riemann surfaces ([[def-riemann-surface-and-holomorphic-atlas]]): $X$ is nonempty, connected, Hausdorff and second countable with a holomorphic atlas; a nonempty connected open subset with the restricted charts is again a Riemann surface, and the boundary of a nonempty proper open subset of the connected space $X$ is nonempty.

[F2] Canonical Green kernel and Perron family ([[def-canonical-green-kernel-riemann-surface]]): centred charts, the Perron family $\mathcal F_p(V)$ of nonnegative subharmonic functions on $V\setminus\{p\}$ vanishing off a compact set $K\subseteq V$ (so $K=V$ is allowed when $V$ is compact) and having at most a unit logarithmic pole at $p$, and the envelope $g_V(\cdot,p)$; $V$ admits a finite canonical Green kernel at $p$ when the envelope is finite everywhere.

[F3] Dichotomy ([[lem-green-envelope-dichotomy-and-logarithmic-pole]]): the envelope of $\mathcal F_p(V)$ is either $+\infty$ everywhere on $V\setminus\{p\}$ or finite, harmonic and strictly positive there with a unit logarithmic pole at $p$.

[F4] Exhaustion and Dirichlet problem ([[lem-regular-exhaustion-and-dirichlet-on-riemann-surfaces]]): under $\mathrm{AC}_\omega$ every noncompact connected Riemann surface has a regular exhaustion by connected relatively compact smooth-bordered domains $\Omega_n$ with $\overline{\Omega_n}\subseteq\Omega_{n+1}$ and $X=\bigcup_n\Omega_n$; and, in a noncompact ambient Riemann surface, every connected relatively compact domain whose closure is a compact bordered domain with nonempty smooth boundary and which equals the interior of its closure admits a unique continuous function harmonic on it with prescribed continuous boundary datum.

[F5] Chartwise harmonic and subharmonic functions ([[def-harmonic-and-subharmonic-riemann-surface-functions]]): subharmonicity is plane subharmonicity on each connected component of every chart expression, and harmonicity is the chartwise plane notion; restrictions to open subsets preserve subharmonicity; a harmonic function is subharmonic; chart expressions of subharmonic functions are upper semicontinuous.

[F6] Second Green identity on bordered domains ([[lem-surface-green-identity-on-smooth-bordered-domain]]): for a compact bordered domain $\Omega'\subseteq X$ and functions $u,v$ with $C^2$ chart expressions near $\Omega'$ one has $\int_{\Omega'}(u\Delta v-v\Delta u)\,dA=\int_{\partial\Omega'}(u\partial_\nu v-v\partial_\nu u)\,ds$ with the outward conormal $\nu$; and for a connected domain $\Omega$ with compact bordered closure, pairwise disjoint closed coordinate discs $D_1,\dots,D_m\subseteq\Omega$ and $u,v$ harmonic on $\Omega\setminus(D_1\cup\cdots\cup D_m)$ with $C^2$ chart expressions near the closure and $u=v=0$ on $\partial\Omega$, one has $\sum_j\int_{\partial D_j}(u\partial_\nu v-v\partial_\nu u)\,ds=0$ with each $\partial D_j$ carrying the outward conormal of the punctured domain.

[F7] Locality of subharmonicity ([[lem-locality-of-subharmonicity]]): a function on an open subset of a Riemann surface is subharmonic as soon as every point has an open neighbourhood on which it is subharmonic.

[F8] Interior maximum principle ([[thm-maximum-principle-for-plane-subharmonic-functions]]) and its chartwise consequence for surfaces: a subharmonic function on a connected surface domain which attains a finite maximum at an interior point is constant.

[F9] Positive combinations ([[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]]): nonnegative linear combinations of finitely many subharmonic functions on a plane domain are subharmonic.

[F10] Plane subharmonic functions ([[def-plane-subharmonic-function]]) and the $C^2$ criterion ([[thm-c-two-characterization-of-plane-subharmonicity]], [[def-plane-harmonic-function]]): a harmonic function has vanishing Laplacian and is subharmonic, as is every nonnegative multiple of it; the value $-\infty$ is allowed for subharmonic functions.

[F11] Upper semicontinuity ([[def-upper-semicontinuous-real-map-on-a-topological-space]]): $u$ is upper semicontinuous at $x$ when $\limsup_{y\to x}u(y)\le u(x)$.

[F12] Topology (Euclidean closed discs and circles are compact by [[cor-euclidean-closed-balls-and-spheres-are-compact]]; ambient finite subcovers are licensed by [[lem-compactness-of-a-subspace-is-ambient]]; [[def-compact-space]], [[def-hausdorff-space]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-compactness-under-continuous-maps]]): compact subsets of a Hausdorff space are closed, continuous images of compacta are compact.

[F13] Connectedness ([[def-connected-space]], [[def-connected-r]], [[thm-continuous-image-of-a-connected-space]]): continuous images of connected spaces are connected; $\mathbb R$ and its images are connected.

[F14] Boundary and closure ([[def-interior-closure-boundary-top]]): $\partial V=\overline V\setminus\operatorname{int}V$.

[F15] The logarithm of the modulus ([[lem-log-modulus-is-harmonic-off-its-centre]]): $\log|z-c|$ is harmonic off $c$.

[F16] Interior smoothness of harmonic functions ([[thm-plane-harmonic-functions-are-smooth-and-real-analytic]]): a harmonic function has $C^\infty$ chart expressions on its open domain. This alone gives no regularity at the boundary of that domain.

[F17] Smooth-boundary Dirichlet regularity: a continuous harmonic function with zero boundary values on a smooth boundary arc is $C^{2,\alpha}$ up to every smaller arc, by the local boundary-portion regularity statement following Theorem 6.19 of Gilbarg--Trudinger, *Elliptic Partial Differential Equations of Second Order*, 2nd ed., §6.4, printed p. 112. Here the boundary is smooth, the interior equation is $\Delta u=0$, and the zero boundary datum is smooth. Each resulting $C^2$ chart function extends to a $C^2$ function across the arc: after flattening to $y\ge0$, use $6f(x,-y)-8f(x,-2y)+3f(x,-3y)$ for $y<0$; normal derivatives of orders $0,1,2$ match at $y=0$. To combine local extensions near the compact punctured closure, take finitely many smaller chart neighbourhoods whose compact closures lie in their extension domains. Use [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]] to obtain smooth bumps supported in those domains and equal to $1$ on the smaller closures. Their sum is positive near the compact set; dividing each bump by that sum and adding the weighted local extensions gives a $C^2$ function on a neighbourhood, equal to the original function on the punctured closure. This supplies the global neighbourhood extensions required in [F6].

## Proof

1.1 **A compact bordered domain is connected after removing a closed disc.** Let $S$ be a connected surface, that is, a nonempty connected open subset of a Riemann surface $X$ carrying the restricted complex structure and topology [F1], and let $C\subseteq S$ be a closed disc, that is, $C=\psi^{-1}(\overline B(b,\sigma))$ for a chart $\psi$ of $S$ and a radius $\sigma>0$ with $\overline B(b,\sigma)\subseteq\psi(\operatorname{dom}\psi)$, and suppose $S\setminus C\ne\varnothing$. Then $S\setminus C$ is connected. Indeed, put $\gamma:=\partial C=\psi^{-1}(\partial B(b,\sigma))$, a compact connected subset of $S$ [F12, F13]; if $S\setminus C=A\sqcup B$ with $A,B$ nonempty open in $S\setminus C$, then $S=C^\circ\sqcup\gamma\sqcup A\sqcup B$, every point of $\gamma$ lies in $\overline A\cup\overline B$ (a chart disc around it meets both the inside $C^\circ$ and the outside $A\cup B$), and these two traces are disjoint: at each boundary point a sufficiently small exterior half-disc is connected and lies entirely in one side of the separation. Since the traces are closed and cover the connected circle $\gamma$, one of them is all of $\gamma$; if $\gamma\subseteq\overline A$ then $\overline B$ meets neither $\gamma$ (the traces are disjoint) nor the open sets $A,C^\circ$. Hence $\overline B=B$, so $B$ is open and closed in $S$, and $B\ne\varnothing$ forces $B=S$, hence $A=\varnothing$, a contradiction; the other case is symmetric. Hence $S\setminus C$ is connected. [F1, F13, F14, cases]


1.2 **Monotonicity in the exhaustion.** Let $m\le n$ and let $v\in\mathcal F_p(\Omega_m)$. The function $v$ vanishes off a compact set $K\subseteq\Omega_m$ with $K\cap\partial\Omega_m=\varnothing$, so its extension $\tilde v$ by $0$ outside $\Omega_m$ is subharmonic on $X\setminus\{p\}$ by locality [F7]; it is nonnegative, vanishes off the same compact $K\ne X$, and keeps the unit logarithmic pole at $p$, so $\tilde v\in\mathcal F_p(\Omega_n)$ after restriction to $\Omega_n$. Hence $v(x)\le g_{\Omega_n}(x,p)$ for $x\in\Omega_m\setminus\{p\}$, and taking the supremum over $v$ gives $g_{\Omega_m}\le g_{\Omega_n}$ on $\Omega_m\setminus\{p\}$. [F2, F7, construct]

2.1 **Compact surfaces have no finite canonical kernel.** Suppose first that $X$ is compact and that $p_0\in X$ has a finite canonical Green kernel $g:=g_X(\cdot,p_0)$. Fix a centred chart $z:U\to\mathbb D$ at $p_0$ and for $0<s<1$ put $D_s:=\{x\in U:|z(x)|<s\}$ and $\Omega'_s:=X\setminus D_s$, a nonempty connected compact bordered domain with boundary $\partial\Omega'_s=\partial D_s$ (connectedness is the complement-of-a-closed-disc argument of step 1.1 applied in the compact surface $X$). The functions $u:=g$ on $X\setminus\{p_0\}$ and $v:=1$ have $C^\infty$ chart expressions near $\Omega'_s$ [F16], $v$ is harmonic, and $g$ is harmonic on $X\setminus\{p_0\}\supseteq\Omega'_s$ with $g+\log|z|$ harmonic on $U$ [F3]. Part 1 of [F6] applied to $\Omega'_s$ gives $0=\int_{\Omega'_s}(g\Delta 1-1\Delta g)\,dA=\int_{\partial D_s}(g\partial_\nu 1-1\partial_\nu g)\,ds=-\int_{\partial D_s}\partial_\nu g\,ds$, where $\nu$ is the outward conormal of $\Omega'_s$ at $\partial\Omega'_s$, pointing into the removed disc $D_s$, that is, in the direction of decreasing $s=|z|$. Write $g=-m\log|z|+h$ with $m=1$ and $h$ harmonic on all of $U$ [F3], so that on the circle $|z|=s$ one has $\partial_\nu g=-\partial_s g=1/s-\partial_s h$. Therefore, with $ds=s\,d\theta$ on the circle, $0=\int_{\partial D_s}\partial_\nu g\,ds=\int_0^{2\pi}\bigl(1/s-\partial_s h(se^{i\theta})\bigr)s\,d\theta=2\pi-s\int_0^{2\pi}\partial_s h(se^{i\theta})\,d\theta$ for every $0<s<1$. Since $h$ is $C^\infty$ near $0$ [F16], $\partial_s h$ is bounded near $0$, so the last term tends to $0$ as $s\downarrow0$, while the left-hand side is the constant $0$; taking the limit gives $0=2\pi$, a contradiction. Hence no compact $X$ admits a finite canonical Green kernel, and by [F3] the envelope of every compact $X$ is identically $+\infty$. [F3, F6, F16, algebra]

2.2 **The zero-boundary kernel of a compact bordered domain exists.** Let $\Omega\subseteq X$ be a connected relatively compact smooth-bordered domain with $\Omega=\operatorname{int}\overline\Omega$ and $\partial\Omega\ne\varnothing$, and let $p\in\Omega$. We show that $g_\Omega(\cdot,p)$ is finite on $\Omega\setminus\{p\}$, harmonic there with a unit logarithmic pole at $p$, and tends to $0$ at $\partial\Omega$. Choose a centred coordinate $z$ on a neighbourhood of a closed disc $\overline U_1\subseteq\Omega$, scaled so that $U_1=\{|z|<1\}$, and fix $0<r<1$, put $rU_1:=\{x\in U_1:|z(x)|<r\}$ and $V:=\Omega\setminus\overline{rU_1}$, a nonempty connected relatively compact smooth-bordered domain with boundary $\partial V=\partial\Omega\sqcup\partial(rU_1)$: connectedness follows from step 1.1 applied in the connected surface $\Omega$ to the closed disc $\overline{rU_1}$, whose complement in $\Omega$ is nonempty because $\overline{rU_1}\subseteq U_1\subseteq\overline U_1\subsetneqq\Omega$. If $X$ is compact, choose $a_0\in X\setminus\overline\Omega$; this set is nonempty since $\Omega=\operatorname{int}\overline\Omega$ has nonempty boundary. The punctured surface $X\setminus\{a_0\}$ is connected by the punctured-disc separation argument and noncompact since $a_0$ is not isolated; it contains $\overline V$ compactly. Apply [F4] in that ambient surface in the compact case, and in $X$ otherwise. There is a continuous $\omega:\overline V\to\mathbb R$, harmonic on $V$, with $\omega=1$ on $\partial(rU_1)$ and $\omega=0$ on $\partial\Omega$. [F2, F4, step 1.1, construct]

2.3 **The exhaustion kernels increase to the canonical kernel.** Assume now that $X$ admits a finite canonical Green kernel at $p$, so that $g_X(\cdot,p)<\infty$ on $X\setminus\{p\}$ and, by [F3], $g_X(\cdot,p)$ is harmonic there with a unit logarithmic pole at $p$. Each $g_{\Omega_n}(\cdot,p)$ is dominated by $g_X(\cdot,p)$ on $\Omega_n\setminus\{p\}$: by step 1.2 the extension by zero of any $v\in\mathcal F_p(\Omega_n)$ lies in $\mathcal F_p(X)$, so $v\le g_X(\cdot,p)$ and hence $g_{\Omega_n}(\cdot,p)\le g_X(\cdot,p)$. Conversely, let $x\in X\setminus\{p\}$ and let $v\in\mathcal F_p(X)$; its support $K$ is compact, so $K\subseteq\Omega_N$ for some $N$ because the exhaustion is increasing with union $X$, and then $v$ restricts to a member of $\mathcal F_p(\Omega_N)$ (it is subharmonic on $\Omega_N\setminus\{p\}$, nonnegative, vanishes off $K\subseteq\Omega_N$ with $K\ne\Omega_N$, and has the unit pole), so $v(x)\le g_{\Omega_N}(x,p)\le\sup_n g_{\Omega_n}(x,p)$. Taking the supremum over $v\in\mathcal F_p(X)$ gives $g_X(x,p)\le\sup_ng_{\Omega_n}(x,p)\le g_X(x,p)$, so the increasing sequence $g_{\Omega_n}(x,p)$ converges to $g_X(x,p)$ for every $x\in X\setminus\{p\}$. [F2, F3, step 1.2]

3.1 **The hypothesis of part 1 forces noncompactness and produces an exhaustion.** If $X$ admits finite canonical Green kernels at the distinct points $p$ and $q$, then $X$ is not compact by step 2.1, so $\mathrm{AC}_\omega$ and [F4] provide a regular exhaustion $\Omega_1\subseteq\Omega_2\subseteq\cdots$ with $\overline{\Omega_n}\subseteq\Omega_{n+1}$, $X=\bigcup_n\Omega_n$, and each $\Omega_n$ connected, relatively compact, smooth-bordered with $\Omega_n=\operatorname{int}\overline{\Omega_n}$ and $\partial\Omega_n\ne\varnothing$. Since $\{p,q\}$ is compact and the $\Omega_n$ increase to $X$, some index $N$ has $p,q\in\Omega_N$; discarding the first $N-1$ domains and relabelling gives an exhaustion with $p,q\in\Omega_1$. Fix such an exhaustion for the rest of the proof; it exists in part 1 whenever the symmetry hypothesis holds, and in part 2 it is assumed. [A1, F4, step 2.1]

3.2 **Basic properties of the barrier and of the candidates.** With $\omega$ as in step 2.2, the functions $\omega$ and $1-\omega$ are subharmonic on $V$ [F5, F10], so the boundary maximum principle (proved as in the companion argument of this batch: a subharmonic function on a nonempty proper connected open subset of $X$ with compact closure and boundary limsup at most $0$ is at most $0$, by the chartwise strong maximum principle [F8] applied to a maximising sequence) gives $0\le\omega\le1$ on $V$. Moreover $\omega$ is harmonic on the connected $V$ and satisfies $0\le\omega\le1$. If $1-\omega(x)=0$ for some $x\in\partial U_1$, then $\omega$ attains its finite maximum $1$ at the interior point $x\in V$ (because $\partial U_1\subseteq V$: indeed $\partial U_1\cap\overline{rU_1}=\varnothing$ and $\partial U_1\subseteq\overline U_1\subseteq\Omega$), so $\omega\equiv1$ on $V$ by [F8]; by continuity $\omega=1$ on $\partial\Omega$, contradicting $\omega=0$ there. Hence $\max_{\partial U_1}\omega\le1-\delta$ for $\delta:=\min_{\partial U_1}(1-\omega)>0$. Second, for every $v\in\mathcal F_p(\Omega)$ and every $\varepsilon>0$ the modified function $x\mapsto v(x)+(1+\varepsilon)\log|z(x)|$ on $U_1\setminus\{p\}$ extends to an upper semicontinuous subharmonic function on $U_1$ with the value $-\infty$ at $p$: subharmonicity on $U_1\setminus\{p\}$ follows from [F5], [F9], [F10] and [F15], and upper semicontinuity at $p$ from the unit pole condition of [F2], which gives $v_z(\zeta)\le-\log|\zeta|+C$, hence $v_z(\zeta)+(1+\varepsilon)\log|\zeta|\le\varepsilon\log|\zeta|+C\to-\infty$. Subharmonicity across the centre follows by the decreasing finite-max truncation argument in the proof of [F3]. [F2, F5, F8, F9, F10, F15, step 2.2]

3.3 **Symmetry on a compact bordered domain.** Fix $n$ and put $G_p:=g_{\Omega_n}(\cdot,p)$ and $G_q:=g_{\Omega_n}(\cdot,q)$. By step 2.2 both extend continuously with value zero to the boundary, are harmonic off their poles and zero on $\partial\Omega_n$. Smooth-boundary Dirichlet regularity [F17] gives $C^2$ chart expressions up to $\partial\Omega_n$; away from that boundary, harmonicity gives interior $C^\infty$ regularity [F16]. Choose small disjoint closed coordinate discs $D_p,D_q$ about $p,q$. The functions therefore meet the $C^2$-near-closure hypothesis in the punctured second Green identity [F6] on $\Omega_K:=\Omega_n\setminus(D_p^\circ\cup D_q^\circ)$, and both vanish on $\partial\Omega_n$. Thus [F6] gives $$\int_{\partial D_p}(G_p\partial_\nu G_q-G_q\partial_\nu G_p)\,ds+ \int_{\partial D_q}(G_p\partial_\nu G_q-G_q\partial_\nu G_p)\,ds=0,$$ with the conormal outward from $\Omega_K$. Near $p$, write $G_p=-\log|z_p|+h_p$ with $h_p$ harmonic and bounded, while $G_q=G_q(p)+O(s)$ and $\partial_\nu G_q=O(1)$ on $|z_p|=s$. Since $\partial_\nu G_p=1/s-\partial_s h_p$, the first integral is $-2\pi G_q(p)+O(s\log(1/s))$. The same computation with $p,q$ interchanged shows that the second integral is $2\pi G_p(q)+O(s\log(1/s))$. Letting $s\downarrow0$ yields $g_{\Omega_n}(p,q)=g_{\Omega_n}(q,p)$. [F2, F3, F6, F15, F16, F17, algebra]

4.1 **The two elementary inequalities.** Let $v\in\mathcal F_p(\Omega)$, put $M_v:=\max_{\partial(rU_1)}v$ and define $w:=v+(1+\varepsilon)\log|z|$ on $U_1$ as in step 3.2. Applying the boundary-value maximum principle (a subharmonic function on a compactly contained nonempty proper domain, extended upper semicontinuously to the closure, has $\sup_{\overline U_1}w=\max_{\partial U_1}w$; this is step 3.2's maximum principle applied to $w$ and to sequences maximising $w$ on $\overline U_1$) to $w$ on the disc $U_1$, and using $w=v$ on $\partial U_1$ and $w=v+(1+\varepsilon)\log r$ on $\partial(rU_1)$, gives $\max_{\partial(rU_1)}v+(1+\varepsilon)\log r\le\max_{\partial U_1}v$; letting $\varepsilon\downarrow0$, $\max_{\partial(rU_1)}v\le\max_{\partial U_1}v+\log(1/r)$. On the other hand the subharmonic function $u:=v-M_v\omega$ on $V$ satisfies $\limsup_{x\to\zeta}u(x)\le0$ at every $\zeta\in\partial V$ (the limsup being that of the upper semicontinuity definition [F11]): at $\zeta\in\partial(rU_1)$ one has $\omega(\zeta)=1$ and $v$ is upper semicontinuous at $\zeta$ with $v(\zeta)\le M_v$, while at $\zeta\in\partial\Omega$ the candidate $v$ vanishes on a neighbourhood of $\zeta$ by its compact support [F2] and $\omega(\zeta)=0$; hence the boundary maximum principle of step 3.2 gives $v\le M_v\omega$ on $V$, and evaluating on $\partial U_1\subseteq V$ gives $\max_{\partial U_1}v\le(1-\delta)\max_{\partial(rU_1)}v$. Adding the two inequalities gives $\delta\max_{\partial(rU_1)}v\le\log(1/r)$, so that $M_v\le C:=\delta^{-1}\log(1/r)$ for every $v\in\mathcal F_p(\Omega)$. [F2, F5, F9, F10, F11, step 3.2, algebra]

5.1 **Conclusion of step 2.2.** Fix $q_1\in\partial U_1\subseteq V$. For $v\in\mathcal F_p(\Omega)$, step 4.1 gives $v(q_1)\le M_v\omega(q_1)\le C$, hence $g_\Omega(q_1,p)\le C<+\infty$; the dichotomy [F3] now shows that the envelope is finite everywhere on $\Omega\setminus\{p\}$, harmonic and positive there, with a unit logarithmic pole at $p$. Moreover for $x\in V$ the comparison $v(x)\le M_v\omega(x)\le C\omega(x)$ gives $g_\Omega(x,p)\le C\omega(x)$, and $\omega$ is continuous on $\overline V$ with $\omega=0$ on $\partial\Omega$, so $\lim_{x\to\zeta,\,x\in\Omega}g_\Omega(x,p)=0$ for every $\zeta\in\partial\Omega$ because the envelope is nonnegative and bounded above by a function tending to $0$. [F3, step 4.1, algebra]

6.1 **Symmetry on $X$.** Under the hypothesis of part 1, steps 3.1 and 2.3 give $g_X(p,q)=\lim_ng_{\Omega_n}(p,q)=\lim_ng_{\Omega_n}(q,p)=g_X(q,p)$, the middle equality by step 3.3. This proves the symmetry assertion for any Riemann surface with finite canonical kernels at two distinct poles, and step 2.3 proves the exhaustion approximation. [F3, step 3.1, step 2.3, step 3.3] ∎
