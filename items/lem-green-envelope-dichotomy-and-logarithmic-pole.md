---
id: lem-green-envelope-dichotomy-and-logarithmic-pole
kind: lemma
title: "Green envelope dichotomy, logarithmic pole and leastness on a Riemann surface"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - def-countable-choice
  - def-canonical-green-kernel-riemann-surface
  - def-riemann-surface-and-holomorphic-atlas
  - def-harmonic-and-subharmonic-riemann-surface-functions
  - lem-puncturing-connected-open-subset-of-rn-preserves-path-connectedness
  - cor-rn-is-polygonally-connected-and-locally-path-connected
  - thm-harnack-convergence-principle-for-plane-harmonic-functions
  - def-poisson-modification-of-a-subharmonic-function
  - thm-poisson-modification-preserves-subharmonicity-and-majorizes
  - lem-gluing-lemma-for-plane-subharmonic-functions
  - lem-locality-of-subharmonicity
  - thm-harmonic-majorant-characterization-of-plane-subharmonicity
  - thm-maximum-principle-for-plane-subharmonic-functions
  - cor-nonnegative-harmonic-function-with-an-interior-zero-vanishes
  - thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions
  - lem-log-modulus-is-harmonic-off-its-centre
  - thm-conformal-invariance-of-plane-harmonicity
  - thm-c-two-characterization-of-plane-subharmonicity
  - def-plane-harmonic-function
  - def-plane-subharmonic-function
  - lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity
  - thm-removable-singularity-characterizations
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Donald E. Marshall, The Uniformization Theorem"
      url: "https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf"
      locator: "PDF p. 2 (Perron family (a)-(b), the envelope (1), and the two cases by Harnack's Theorem); PDF pp. 2-3 (Lemma 1: positivity, the (1+epsilon)log|z| maximum-principle bound, and the removable singularity of g+log|z|); PDF p. 3 (the disc example, where every candidate is bounded by (1+epsilon)g_D); PDF p. 15 (Comment 3 on continuous candidates)"
    - title: "Charles Favre, Riemann surfaces"
      url: "https://perso.pages.math.cnrs.fr/users/charles.favre/media/current-version.pdf"
      locator: "Section 2.3.3: Def. 2.3.3 (Perron families: max-stability and stability under Poisson modification), Lemma 2.3.11, and Prop. 2.3.12 with its proof (increasing harmonic balayage, Harnack, and the maximum-principle comparison identifying the supremum)"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 section 5, printed pp. 115-118: the Green-function normalization in the hyperbolic case and the Greenian/non-Greenian alternative"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. Let $X$ be a Riemann
surface, let $p\in X$, let $\mathcal F_p$ be the Perron family of
[[def-canonical-green-kernel-riemann-surface]] and let
$$g(q):=\sup\{v(q):v\in\mathcal F_p\}\qquad(q\in X\setminus\{p\})$$
be its envelope, so that $0\le g\le+\infty$ on $X\setminus\{p\}$.

1. **Dichotomy.** Either $g(q)=+\infty$ for every $q\in X\setminus\{p\}$, or
   $g(q)<+\infty$ for every $q\in X\setminus\{p\}$. In the second case $g$ is
   harmonic on $X\setminus\{p\}$ and $g(q)>0$ for every
   $q\in X\setminus\{p\}$.
2. **Logarithmic pole.** In the finite case, for every centred chart
   $z:U\to\mathbb D$ at $p$ the function $g+\log|z|$ is harmonic on
   $U\setminus\{p\}$ and extends to a harmonic function on $U$; thus, in a
   centred chart, $g=-\log|z|+h$ with $h$ harmonic on $U$.
3. **Leastness.** In the finite case, let $H:X\setminus\{p\}\to(0,\infty)$ be
   harmonic on $X\setminus\{p\}$ such that $H+\log|z|$ extends harmonically
   across $p$ for some centred chart $z$ at $p$; see step 1.7, the same then
   holds for every centred chart. Then $g\le H$ on $X\setminus\{p\}$.

In particular, if the envelope is finite everywhere then it is the least
positive harmonic function on $X\setminus\{p\}$ with a unit logarithmic pole at
$p$, and if it is not finite then it is identically $+\infty$.

## Facts & Assumptions
**Given:** Countable Choice; a Riemann surface $X$ with a point $p\in X$; the Perron family $\mathcal F_p$ of the canonical Green kernel definition and its envelope $g$; a point $x_0\in X\setminus\{p\}$ fixed for the local alternative; an arbitrary centred chart $z:U\to\mathbb D$ at $p$, fixed for the analysis at the pole (the argument for it is uniform, so it applies to every centred chart); when leastness is studied, a positive harmonic function $H$ on $X\setminus\{p\}$ with a unit logarithmic pole at $p$ in that chart.

[A1] Countable Choice: every family $(X_n)_{n\ge1}$ of nonempty sets has a choice function; equivalently, every at most countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] The Perron family and its envelope ([[def-canonical-green-kernel-riemann-surface]]): a centred chart at $p$ is a chart $z:U\to\mathbb D$ with $z(p)=0$ and $\overline U$ compact in $X$; $\mathcal F_p$ is the set of nonnegative subharmonic functions on $X\setminus\{p\}$ that vanish off a compact set $K\subseteq X$ and satisfy $\limsup_{q\to p}(v(q)+\log|z(q)|)<\infty$ for one, hence every, centred chart; on compact $X$, $K=X$ is allowed; this membership condition is chart-independent because for two centred charts $z,w$ the transition $\tau=w\circ z^{-1}$ satisfies $\tau(0)=0$ and $\tau'(0)\ne0$; the envelope is $g=\sup\{v(q):v\in\mathcal F_p\}$, it is well defined and nonnegative, and the centred-chart candidate $v_0$ belongs to $\mathcal F_p$, so the family is nonempty; finite maxima of members of $\mathcal F_p$ belong to $\mathcal F_p$; if $g<\infty$ everywhere then $g$ is called the canonical Green kernel.

[F2] Riemann surfaces ([[def-riemann-surface-and-holomorphic-atlas]]): $X$ is nonempty, connected, Hausdorff and second countable, and carries a holomorphic atlas whose charts are homeomorphisms onto open subsets of $\mathbb C$.

[F3] Chartwise harmonic and subharmonic functions on a Riemann surface ([[def-harmonic-and-subharmonic-riemann-surface-functions]]): a function is subharmonic on an open $W\subseteq X$ exactly when each connected component of every chart expression is plane subharmonic; harmonicity is chartwise continuity together with $\Delta u_\varphi=0$; both notions are independent of the atlas; restrictions of such functions to open subsets are of the same type; a harmonic function is subharmonic, since in charts $\Delta u_\varphi=0$ gives $\Delta u_\varphi\ge0$.

[F4] Puncturing a connected plane domain ([[lem-puncturing-connected-open-subset-of-rn-preserves-path-connectedness]]): if $\Omega\subseteq\mathbb R^n$, $n\ge2$, is nonempty, open and connected and $y\in\Omega$, then $\Omega\setminus\{y\}$ is nonempty, open, connected and path-connected.

[F5] Harnack's convergence principle ([[thm-harnack-convergence-principle-for-plane-harmonic-functions]]): for an increasing sequence of harmonic functions on a complex domain $\Omega$, exactly one of the following holds: the sequence tends to $+\infty$ at every point of $\Omega$, or it converges locally uniformly on $\Omega$ to a harmonic limit.

[F6] Poisson modification, definition ([[def-poisson-modification-of-a-subharmonic-function]]): for a subharmonic function $u$ on a complex domain $\Omega$ and an open disc $D=D(a,r)\Subset \Omega$, a boundary approximation is a decreasing sequence of continuous functions $\phi_n:\partial D\to\mathbb R$ with $\phi_n\downarrow u|_{\partial D}$; the associated $h_n$ are harmonic on $D$, continuous on $\overline D$ with $h_n|_{\partial D}=\phi_n$; and the Poisson modification is $P_Du=\inf_nh_n$ on $D$, $P_Du=u$ on $\Omega\setminus D$.

[F7] Poisson modification, theorem ([[thm-poisson-modification-preserves-subharmonicity-and-majorizes]]): in the situation of [F6], $P_Du$ is well defined, subharmonic on $\Omega$, harmonic on $D$, and $P_Du\ge u$ on $\Omega$.

[F8] Gluing subharmonic functions ([[lem-gluing-lemma-for-plane-subharmonic-functions]]): if $u$ is subharmonic on a complex domain $\Omega$, $D\subseteq\Omega$ is open, $v$ is subharmonic on every connected component of $D$, and $\limsup_{z\to\zeta,\,z\in D}v(z)\le u(\zeta)$ for every $\zeta\in\partial D\cap\Omega$, then the function equal to $\max\{u,v\}$ on $D$ and to $u$ on $\Omega\setminus D$ is subharmonic on $\Omega$.

[F9] Locality of subharmonicity ([[lem-locality-of-subharmonicity]]): a function on an open subset of a Riemann surface is subharmonic if every point has an open neighbourhood on which it is subharmonic.

[F10] Harmonic-majorant characterization ([[thm-harmonic-majorant-characterization-of-plane-subharmonicity]]): a function $u:\Omega\to[-\infty,\infty)$ on a complex domain is subharmonic if and only if it is upper semicontinuous, is not identically $-\infty$ on any component, and for every closed disc $\overline{D(a,r)}\subseteq\Omega$ and every $h$ continuous on $\overline{D(a,r)}$, harmonic on $D(a,r)$, with $h\ge u$ on $\partial D(a,r)$, one has $h\ge u$ on $D(a,r)$.

[F11] Maximum principle ([[thm-maximum-principle-for-plane-subharmonic-functions]]): a subharmonic function on a complex domain which attains a finite maximum at an interior point is constant on the domain.

[F12] Nonnegative harmonic functions with an interior zero ([[cor-nonnegative-harmonic-function-with-an-interior-zero-vanishes]]): for $n\ge2$ and a domain $\Omega\subseteq\mathbb R^n$, a harmonic function $u\ge0$ on $\Omega$ satisfies either $u\equiv0$ or $u(x)>0$ for every $x\in\Omega$.

[F13] Removable singularity for bounded harmonic functions ([[thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions]]): a function harmonic on a punctured disc $0<|z-a|<R$ and bounded there extends to a harmonic function on the full disc.

[F14] The logarithm of the modulus ([[lem-log-modulus-is-harmonic-off-its-centre]]): $z\mapsto\log|z-a|$ is smooth and harmonic on $\mathbb C\setminus\{a\}$.

[F15] Conformal invariance of harmonicity ([[thm-conformal-invariance-of-plane-harmonicity]]): precomposition of a harmonic function with a holomorphic map is harmonic.

[F16] The $C^2$ criterion ([[thm-c-two-characterization-of-plane-subharmonicity]], [[def-plane-harmonic-function]]): a $C^2$ function on an open set is subharmonic exactly when its Laplacian is nonnegative; a harmonic function has zero Laplacian, hence is subharmonic, and sums and real multiples of harmonic functions are harmonic.

[F17] Plane subharmonic functions ([[def-plane-subharmonic-function]]): an upper semicontinuous function $u:\Omega\to[-\infty,\infty)$ that is not identically $-\infty$ on any connected component and satisfies the submean inequality at every disc centre is subharmonic; the value $-\infty$ is allowed and the submean inequality at a point where the value is $-\infty$ holds automatically.

[F18] Stability under nonnegative combinations ([[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]]): nonnegative linear combinations and finite maxima of subharmonic functions on a plane domain are subharmonic.

[F19] Removable singularity for holomorphic functions ([[thm-removable-singularity-characterizations]]): a function holomorphic on a punctured disc with a finite limit at the puncture extends holomorphically across the puncture.

[F20] The plane is connected ([[cor-rn-is-polygonally-connected-and-locally-path-connected]]): $\mathbb R^n$ is polygonally connected and connected for every $n\ge1$.

## Proof


1.1 **Compact case and the punctured surface.** If $X$ is compact, take the candidate $v_0$ of [F1]. For every $c\ge0$, $v_0+c$ is a candidate: it is nonnegative and subharmonic, its compact support may be $X$, and $(v_0+c)+\log|z|=c$ near $p$. Thus $g(q)=+\infty$ for every $q\ne p$. In the rest of the proof assume $X$ is noncompact. A chart at $p$ is injective on a neighbourhood of $p$ and maps it onto an open subset of $\mathbb C$ [F2], so $X$ has more than one point and $X\setminus\{p\}\ne\varnothing$. Suppose $X\setminus\{p\}=A\sqcup B$ with $A,B$ nonempty and open in $X\setminus\{p\}$; fix open sets $U_A,U_B\subseteq X$ with $A=U_A\setminus\{p\}$ and $B=U_B\setminus\{p\}$, so that $X=U_A\cup U_B\cup\{p\}$. Choose a chart $\varphi:W\to\mathbb C$ at $p$ [F2] and $\rho>0$ with $\overline{B(\varphi(p),\rho)}\subseteq\varphi(W)$, and put $V:=\varphi^{-1}(B(\varphi(p),\rho))$. Then $V\setminus\{p\}$ is homeomorphic to the punctured disc $B(\varphi(p),\rho)\setminus\{\varphi(p)\}$, which is connected by [F4], and it is covered by the disjoint open sets $A$ and $B$, so $V\setminus\{p\}\subseteq A$ or $V\setminus\{p\}\subseteq B$. In the first case $A\cup\{p\}=U_A\cup V$ is open in $X$: indeed $U_A\subseteq A\cup\{p\}$ and $V\subseteq A\cup\{p\}$, while $A\subseteq U_A$ and $p\in V$; moreover $p\notin U_B$, because if $p\in U_B$ then the open neighbourhood $U_B\cap V$ of $p$ contains a point $q\ne p$, giving $q\in(U_B\setminus\{p\})\cap(V\setminus\{p\})\subseteq B\cap A=\varnothing$, a contradiction; hence $B=U_B$ is open in $X$ and $X=(A\cup\{p\})\sqcup B$ is a separation of the connected space $X$ [F2], which is impossible. The second case is symmetric, interchanging $A$ and $B$. Therefore $X\setminus\{p\}$ is connected. [F1, F2, F4, F16, F18, given, algebra, cases]

1.2 **Chart discs avoiding the pole.** For every $x\in X\setminus\{p\}$ there are a chart $\varphi:W\to\mathbb C$ with $x\in W$ and a radius $r>0$ such that, with $D:=\varphi^{-1}(B(\varphi(x),r))$, one has $\overline B(\varphi(x),r)\subseteq\varphi(W)$ and $\overline D\subseteq X\setminus\{p\}$. Indeed, choose any chart $\varphi$ around $x$ [F2]; shrink its domain so that $\varphi(W)$ is a disc around $\varphi(x)$, and choose $r>0$ so that $\overline B(\varphi(x),r)\subseteq\varphi(W)$ and, in case $p\in W$, so that $r<|\varphi(x)-\varphi(p)|$; then $p\notin D$ and $\overline D$ is compact in the open set $X\setminus\{p\}$. [F2, construct]

1.3 **The surface Poisson modification stays in the family.** Let $D=\varphi^{-1}(B(a,r))$ be a disc in a chart $\varphi:W\to\mathbb C$ with $\overline B(a,r)\subseteq\varphi(W)$ and $\overline D\subseteq X\setminus\{p\}$, and let $v\in\mathcal F_p$. Define $P_Dv$ by $P_Dv=v$ on $(X\setminus\{p\})\setminus D$ and by $P_Dv:=\varphi^{-1}$-transport of the plane Poisson modification $P_{B(a,r)}(v\circ\varphi^{-1})$ on $D$. Then $P_Dv$ belongs to $\mathcal F_p$, is harmonic on $D$, and $P_Dv\ge v$. To see this, put $u:=v\circ\varphi^{-1}$ on $\varphi(W)$, subharmonic on each connected component by [F3], and $h:=P_{B(a,r)}u$, which is harmonic on $B(a,r)$ and satisfies $h\ge u$ there by [F7], hence is subharmonic on $B(a,r)$ by [F16]. For $\zeta\in\partial B(a,r)$ the definition [F6] writes $h=\inf_nh_n$ with $h_n$ continuous on $\overline B(a,r)$ and $h_n=\phi_n\ge u$ on the boundary circle, so $\limsup_{z\to\zeta,\,z\in B(a,r)}h(z)\le\phi_n(\zeta)$ for every $n$, hence at most $\inf_n\phi_n(\zeta)=u(\zeta)$; the gluing lemma [F8], applied with $\Omega$ equal to the connected component of $\varphi(W)$ containing $B(a,r)$ and with $D:=B(a,r)$, therefore makes the function equal to $\max\{u,h\}=h$ on $B(a,r)$ and to $u$ outside it subharmonic on that component, while on every other component of $\varphi(W)$ the same function equals $u$ and is subharmonic there as a restriction of $u$ [F3]; transporting back, $P_Dv$ is subharmonic on $W$ [F3]. On the open set $(X\setminus\{p\})\setminus\overline D$ the function $P_Dv=v$ is subharmonic as a restriction of the subharmonic function $v$ [F3], and $W\cup((X\setminus\{p\})\setminus\overline D)=X\setminus\{p\}$ because $D\subseteq W$, so locality [F9] makes $P_Dv$ subharmonic on $X\setminus\{p\}$. The function $P_Dv$ is harmonic on $D$ by [F7]; it satisfies $P_Dv\ge v$ because $h\ge u$ on $B(a,r)$ and $P_Dv=v$ outside $D$; it is nonnegative because $v\ge0$ and $h\ge u\ge0$; it vanishes outside the compact set $K\cup\overline D$, where $K$ is a compact set with $v=0$ off $K$ [F1], because $P_Dv=v$ on the complement of $D$; and since $p\notin\overline D$, the function $P_Dv$ equals $v$ on the neighbourhood $X\setminus\overline D$ of $p$, so the pole condition of [F1] transfers. Hence $P_Dv\in\mathcal F_p$. [F1, F3, F6, F7, F8, F9, F16, construct]

1.4 **Boundary maximum principle.** Let $\Omega\subseteq\mathbb C$ be a bounded domain, let $u$ be subharmonic on $\Omega$, and let $B\in\mathbb R$ satisfy $\limsup_{z\to\zeta,\,z\in\Omega}u(z)\le B$ for every $\zeta\in\partial\Omega$. Then $u\le B$ on $\Omega$. Suppose not and put $S:=\sup_\Omega u>B$; choose $z_j\in\Omega$ with $u(z_j)\to S$ and, $\Omega$ being bounded, pass to a subsequence with $z_j\to z_*\in\overline\Omega$. If $z_*\in\partial\Omega$ then $S=\limsup_ju(z_j)\le\limsup_{z\to z_*,\,z\in\Omega}u(z)\le B$, a contradiction; so $z_*\in\Omega$. Then upper semicontinuity gives $u(z_*)\ge\limsup_ju(z_j)=S$; since subharmonic functions take values in $[-\infty,\infty)$ [F17], this forces $S<\infty$ and $u(z_*)=S$, so $u$ attains its finite maximum $S$ at the interior point $z_*$ and is constant $S$ on the domain $\Omega$ by [F11]. But $\partial\Omega\ne\varnothing$: otherwise $\Omega$ would be a nonempty proper subset of $\mathbb C$ that is both open and closed, contradicting connectedness of the plane [F20]. For $\zeta\in\partial\Omega$ the boundary hypothesis would then give the contradiction $S=\limsup_{z\to\zeta}u(z)\le B$. Hence $S\le B$. [F11, F17, F20, cases]

1.5 **A maximizing sequence.** For $n\ge0$, let $t_n$ be an increasing sequence of real numbers with $t_n<g(x_0)$ for every $n$ and $t_n\to g(x_0)$ when $g(x_0)<+\infty$, and put $t_n:=n$ when $g(x_0)=+\infty$. Since $g(x_0)=\sup\{v(x_0):v\in\mathcal F_p\}$ and $\mathcal F_p\ne\varnothing$ [F1], every set $\{v\in\mathcal F_p:v(x_0)>t_n\}$ is nonempty, so Countable Choice [A1] gives a sequence $(v_n)\subseteq\mathcal F_p$ with $v_n(x_0)>t_n$. Setting $u_n:=\max\{v_0,\dots,v_n\}$ gives an increasing sequence $(u_n)\subseteq\mathcal F_p$ by finite-max stability [F1]; its support is contained in the finite union of the compact supports of $v_0,\dots,v_n$. Also $u_n(x_0)\to g(x_0)$ because $u_n(x_0)\ge v_n(x_0)>t_n$ and $u_n(x_0)\le g(x_0)$. [A1, F1, choose]

1.6 **A subharmonic comparison function at the pole.** Let $v\in\mathcal F_p$ and $\varepsilon>0$, and put $w:=v+(1+\varepsilon)\log|z|$ on $U\setminus\{p\}$. Then $w$ extends to a subharmonic function on $U$ with value $-\infty$ at $p$. Indeed, in the coordinate $z$ the chart expression $v_z=v\circ z^{-1}$ is plane subharmonic on $\mathbb D\setminus\{0\}$ [F3] and $\log|\cdot|$ is harmonic on $\mathbb D\setminus\{0\}$ [F14], hence subharmonic [F16], so $w_z:=v_z+(1+\varepsilon)\log|\cdot|$ is subharmonic on $\mathbb D\setminus\{0\}$ by [F18]. By clause 3 of [F1] there are $\delta>0$ and a constant $C_1$ with $v_z(\zeta)\le-\log|\zeta|+C_1$ for $0<|\zeta|<\delta$, so $w_z(\zeta)\le\varepsilon\log|\zeta|+C_1\to-\infty$ as $\zeta\to0$. Setting $w_z(0):=-\infty$ gives an upper semicontinuous function. For each positive integer $N$, the function $\max(w_z,-N)$ equals the constant $-N$ near $0$ and is subharmonic elsewhere by finite-max stability; locality [F9] makes it subharmonic on the full disc. These functions decrease to $w_z$. On each circle their integrals decrease to the extended integral of $w_z$ by monotone convergence after subtracting a common finite upper bound, so their submean inequalities pass to $w_z$. The latter is not identically $-\infty$, hence is subharmonic by [F17], and transporting back gives the assertion. [F1, F3, F14, F16, F17, F18]

1.7 **The competitor condition is chart-independent.** Let $z$ and $w$ be centred charts at $p$. The transition $\tau:=w\circ z^{-1}$ is a biholomorphism between neighbourhoods of $0$ with $\tau(0)=0$ and $\tau'(0)\ne0$ [F1]. The quotient $\zeta\mapsto\tau(\zeta)/\zeta$ is holomorphic on a punctured neighbourhood of $0$ and has the finite limit $\tau'(0)$ at $0$, so it extends holomorphically across $0$ by [F19]; the extension does not vanish near $0$ because its value there is $\tau'(0)\ne0$. Hence the function $w/z$, whose expression in the chart $z$ is $\zeta\mapsto\tau(\zeta)/\zeta$, is holomorphic and zero-free on a punctured neighbourhood of $p$, and $\log|w/z|$ is harmonic there by [F14] and [F15]. Therefore, if $H+\log|z|$ extends harmonically across $p$, then $H+\log|w|=(H+\log|z|)+\log|w/z|$ extends harmonically across $p$ too. So the hypothesis on $H$ in part 3 holds for some centred chart if and only if it holds for every centred chart. [F1, F14, F15, F19]

2.1 **Monotonicity of the Poisson modification.** If $u,w$ are subharmonic on $X\setminus\{p\}$ with $u\le w$, and $D=\varphi^{-1}(B(a,r))$ is a chart disc as in step 1.3, then $P_Du\le P_Dw$ on $D$. Work in the chart: with $U:=u\circ\varphi^{-1}$, $W_0:=w\circ\varphi^{-1}$ on $\varphi(W)$, let $(\psi_m)$ be a boundary approximation for $W_0$ and $k_m$ the associated harmonic functions, so that the chart expression of $P_Dw$ on $B(a,r)$ is $\inf_mk_m$ [F6], and the chart expression of $P_Du$ is subharmonic on $\varphi(W)$ (step 1.3). On $\partial B(a,r)$ one has $k_m=\psi_m\ge W_0\ge U$ and the chart expression of $P_Du$ equals $U$, while $k_m$ is continuous on $\overline B(a,r)$ and harmonic on $B(a,r)$; the harmonic-majorant characterization [F10], applied on the connected component of $\varphi(W)$ containing $\overline B(a,r)$, gives $k_m\ge(P_Du)_\varphi$ on $B(a,r)$. Taking the infimum over $m$ gives $(P_Du)_\varphi\le(P_Dw)_\varphi$ on $B(a,r)$, that is, $P_Du\le P_Dw$ on $D$. [F6, F10, step 1.3]

2.2 **The chart disc at the given point.** By step 1.2 applied to the given point $x_0\in X\setminus\{p\}$ there is a chart disc $D=\varphi^{-1}(B(a,r))$ with $x_0\in D$ and $\overline D\subseteq X\setminus\{p\}$; fix such a disc and chart. [step 1.2, choose]

2.3 **An upper bound on a smaller pole disc.** Fix $0<r<1$. The circle $|z|=r$ lies entirely inside the chart domain, and $v$ is upper semicontinuous on its compact inverse image. Thus $B_r:=\sup_{|z|=r}v+(1+\varepsilon)\log r$ is finite. Apply the boundary maximum principle of step 1.4 to $w_z=v\circ z^{-1}+(1+\varepsilon)\log|\cdot|$ on $0<|\zeta|<r$: at the outer circle its limsup is at most $B_r$ by upper semicontinuity inside the chart, and at $0$ it tends to $-\infty$ by step 1.6. Therefore $w_z\le B_r$ for $0<|\zeta|<r$. No value of $z^{-1}$ on the unit circle is used. [F3, step 1.4, step 1.6]

3.1 Set $P_n:=P_Du_n$ for the disc $D$ of step 2.2 and the sequence $(u_n)$ of step 1.5. By steps 1.3 and 2.1 the sequence $(P_n)$ is increasing, each $P_n$ lies in $\mathcal F_p$ and is harmonic on $D$, and $P_n\ge u_n$. [step 1.3, step 1.5, step 2.1, step 2.2]

3.2 **The sandwich on a smaller pole disc.** Fix $0<r<1$. Taking the supremum over $v$ in step 2.3, then letting $\varepsilon\downarrow0$, gives
$g(q)+\log|z(q)|\le\sup_{|z|=r}g+\log r$ when $0<|z(q)|<r$; an infinite right side is harmless. For the lower bound, the explicit candidate supported in $|z|<r$ has value $-\log(|z|/r)$ there: it is a finite maximum of two harmonic functions in the larger chart and is locally zero outside that closed subdisc, hence belongs to $\mathcal F_p$ by [F1], [F9] and [F18]. Consequently
$\log r\le g(q)+\log|z(q)|$ for $0<|z(q)|<r$. [F1, F9, F18, step 2.3, algebra]

4.1 **Case $g(x_0)=+\infty$.** Then $P_n(x_0)\ge u_n(x_0)\to+\infty$, so the increasing sequence $(P_n)$ of harmonic functions on the disc $D$ cannot converge locally uniformly to a finite harmonic function; by [F5] it tends to $+\infty$ at every point of $D$. Since $P_n\le g$ on $D$ by [F1], it follows that $g(y)=+\infty$ for every $y\in D$. [F1, F5, step 3.1]

4.2 **Case $g(x_0)<+\infty$.** Then $P_n(x_0)\le g(x_0)<+\infty$, so [F5] provides a harmonic function $H$ on $D$ with $P_n\to H$ locally uniformly. Hence $H\le g$ on $D$, and $H(x_0)=\lim_nP_n(x_0)\ge\lim_nu_n(x_0)=g(x_0)$ together with $H(x_0)\le g(x_0)$ gives $H(x_0)=g(x_0)$. [F1, F5, step 3.1]

5.1 **Comparison with an arbitrary candidate.** Assume $g(x_0)<+\infty$ and fix $v\in\mathcal F_p$. For every $m$ the function $W_m:=P_D\max\{v,u_m\}$ lies in $\mathcal F_p$ and is harmonic on $D$ by step 1.3, and the sequence $(W_m)$ is increasing by step 2.1 because $m\mapsto\max\{v,u_m\}$ is increasing. Also $W_m(x_0)\le g(x_0)<+\infty$ by [F1], so [F5] gives a harmonic $H^{(v)}$ on $D$ with $W_m\to H^{(v)}$ locally uniformly. Then $H^{(v)}\ge v$ on $D$, since $W_m\ge\max\{v,u_m\}\ge v$; $H^{(v)}\le g$ on $D$, since every $W_m\le g$; and $H^{(v)}(x_0)=\lim_mW_m(x_0)\ge\lim_mu_m(x_0)=g(x_0)$ while $H^{(v)}(x_0)\le g(x_0)$, so $H^{(v)}(x_0)=g(x_0)$. Moreover $W_m\ge P_m$ for every $m$ by monotonicity, step 2.1, so $H^{(v)}\ge H$ on $D$; the function $H^{(v)}-H$ is harmonic and nonnegative on the plane disc $\varphi(D)$ and vanishes at the interior point $\varphi(x_0)$, so [F12] gives $H^{(v)}=H$ on $D$. Hence $v\le H$ on $D$. [F1, F5, F12, step 1.3, step 2.1, step 4.2]

6.1 In the case $g(x_0)<+\infty$, taking the supremum over $v\in\mathcal F_p$ in step 5.1 gives $g\le H$ on $D$, and comparison with step 4.2 gives $g|_D=H$: the envelope is finite and harmonic on $D$. [step 4.2, step 5.1]

7.1 **Global dichotomy.** Let $A:=\{x\in X\setminus\{p\}:g(x)=+\infty\}$ and $B:=\{x\in X\setminus\{p\}:g(x)<+\infty\}$. Given $x\in X\setminus\{p\}$, apply the construction of steps 2.2, 1.5, 3.1, 4.1, 4.2, 5.1 and 6.1 with $x_0:=x$; step 4.1 shows that a chart disc around $x$ lies in $A$ when $g(x)=+\infty$, and step 6.1 shows that a chart disc around $x$ lies in $B$ when $g(x)<+\infty$. Hence $A$ and $B$ are open; they are disjoint and cover the connected nonempty set $X\setminus\{p\}$ of step 1.1, so one of them is empty. If $B=\varnothing$ then $g\equiv+\infty$ on $X\setminus\{p\}$. Otherwise $g$ is finite everywhere and harmonic on a neighbourhood of every point by step 6.1, hence harmonic on $X\setminus\{p\}$ by [F3]. [F3, step 1.1, step 2.2, step 1.5, step 3.1, step 4.1, step 6.1]

8.1 **Strict positivity in the finite case.** Assume $g<+\infty$ on $X\setminus\{p\}$. By [F1] there is a centred chart $z_0:U_0\to\mathbb D$ at $p$ and a function $v_0\in\mathcal F_p$ equal to $-\log|z_0|$ on $U_0\setminus\{p\}$ and $0$ outside $U_0$; hence $g\ge v_0\ge0$ everywhere on $X\setminus\{p\}$, and $g>0$ on $U_0\setminus\{p\}$ because there $v_0=-\log|z_0|>0$ (as $|z_0|<1$ on $U_0$). Let $Z:=\{q\in X\setminus\{p\}:g(q)=0\}$. Then $Z$ is closed in $X\setminus\{p\}$ because $g$ is continuous there (step 7.1), and $Z$ is open: if $q_0\in Z$, choose a chart $\psi$ whose domain $W_0$ is a connected neighbourhood of $q_0$ contained in $X\setminus\{p\}$ (possible because $g$ is defined and harmonic on the open set $X\setminus\{p\}$); the chart expression of $g$ is harmonic and nonnegative on the plane domain $\psi(W_0)$ [F3] and vanishes at $\psi(q_0)$, so it is identically $0$ by [F12] and $W_0\subseteq Z$. Since $X\setminus\{p\}$ is connected by step 1.1, the clopen set $Z$ is empty or all of $X\setminus\{p\}$; the second alternative is impossible because $g>0$ on the nonempty set $U_0\setminus\{p\}$. Hence $Z=\varnothing$ and $g>0$ on $X\setminus\{p\}$. [F1, F3, F12, step 1.1, step 7.1]

8.2 **The logarithmic pole is removable.** Assume $g<+\infty$ on $X\setminus\{p\}$. Step 7.1 makes $g$ continuous on $X\setminus\{p\}$, so for a fixed $0<r<1$ its supremum on the compact circle $|z|=r$ is finite. Step 3.2 bounds $g+\log|z|$ above and below on $0<|z|<r$. The function $g+\log|z|$ is harmonic on $U\setminus\{p\}$: $g$ is harmonic there by step 7.1, $\log|z|$ is harmonic on $U\setminus\{p\}$ because its expression in the chart $z$ is $\log|\cdot|$ on $\mathbb D\setminus\{0\}$ [F14], and sums of harmonic functions are harmonic in charts [F3, F16]. Being bounded, its chart expression in the chart $z$ has a removable singularity at $0$ by [F13] and extends harmonically over $0$ on $|z|<r$. This extension agrees with the original harmonic function off $0$, hence gives a harmonic function on all of $\mathbb D$; transporting back by [F3], $g+\log|z|$ extends to a harmonic function on $U$. This proves part 2 of the statement for the arbitrary centred chart $z$. [F3, F13, F14, F16, step 3.2, step 7.1]

8.3 **The auxiliary function for leastness.** Assume $g<+\infty$ on $X\setminus\{p\}$, and let $H:X\setminus\{p\}\to(0,\infty)$ be harmonic there with a unit logarithmic pole at $p$ in the centred chart $z$, meaning that $H+\log|z|$ extends to a harmonic function $h_H$ on $U$. Fix $v\in\mathcal F_p$ and $\varepsilon>0$ and put $W:=v-(1+\varepsilon)H$. Then: $W$ is subharmonic on $X\setminus\{p\}$, because in every chart $W_\varphi=v_\varphi+(1+\varepsilon)(-H_\varphi)$ is a nonnegative linear combination of the subharmonic functions $v_\varphi$ and $-H_\varphi$ [F3, F16, F18]; $W\le0$ on $X\setminus K$, where $K$ is a compact support of $v$ [F1], since there $W=-(1+\varepsilon)H<0$; by step 1.1, $X$ is noncompact in this finite case, so $X\setminus K$ is nonempty; and $W(q)\to-\infty$ as $q\to p$, because near $p$ one has $v\le-\log|z|+C_1$ by clause 3 of [F1] and $H=h_H-\log|z|$ with $h_H$ bounded near $p$, whence $W\le C_1-(1+\varepsilon)h_H+\varepsilon\log|z|\to-\infty$. [F1, F3, F16, F18, step 7.1]

9.1 **Consequence: $W\le0$.** Suppose $M:=\sup_{X\setminus\{p\}}W>0$. For every $b>0$, the superlevel set $E_b:=\{q\in X\setminus\{p\}:W(q)\ge b\}$ lies in the compact support $K$ of step 8.3 and avoids a neighbourhood of $p$ because $W(q)\to-\infty$ there. Upper semicontinuity makes $E_b$ closed in $K$, hence compact. If $M=+\infty$, the nested nonempty compact sets $E_n$ for positive integers $n$ have the finite-intersection property; a point in their intersection would have $W\ge n$ for every $n$, impossible since $W$ is finite on $X\setminus\{p\}$. Thus $M<+\infty$. The nonempty nested sets $E_b$ for $0<b<M$ again have the finite-intersection property, so some $q_*\in K\setminus\{p\}$ satisfies $W(q_*)\ge b$ for every $b<M$, hence $W(q_*)=M$. In a chart around $q_*$, the subharmonic chart expression of $W$ attains its finite maximum at an interior point, so it is constant on a neighbourhood by [F11]; therefore $Z:=\{W=M\}$ is open. It is closed in the connected domain $X\setminus\{p\}$ because $W$ is upper semicontinuous and bounded above by $M$. Hence $W\equiv M>0$ there, contradicting $W<0$ on the nonempty set $X\setminus K$ from step 8.3. Therefore $M\le0$. [F1, F2, F3, F11, step 1.1, step 8.3, cases]

10.1 **Leastness.** Step 9.1 gives $v\le(1+\varepsilon)H$ on $X\setminus\{p\}$ for every $v\in\mathcal F_p$ and every $\varepsilon>0$. Taking the supremum over $v\in\mathcal F_p$ gives $g\le(1+\varepsilon)H$, and letting $\varepsilon\downarrow0$ gives $g\le H$ on $X\setminus\{p\}$. Since $H$ was an arbitrary positive harmonic unit-pole function for the centred chart $z$, this proves part 3 for that chart. [step 9.1, algebra]

11.1 **Conclusion.** Part 1 is steps 7.1 and 8.1: either $g\equiv+\infty$ on $X\setminus\{p\}$, or $g$ is finite, harmonic and strictly positive there. Part 2 is step 8.2. Part 3 is steps 10.1 and 1.7, which show that in the finite case $g$ is least among all positive harmonic functions on $X\setminus\{p\}$ with a unit logarithmic pole at $p$. This proves all three assertions of the statement. [step 1.7, step 7.1, step 8.1, step 8.2, step 10.1] ∎
