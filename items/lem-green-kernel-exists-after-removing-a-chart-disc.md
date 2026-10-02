---
id: lem-green-kernel-exists-after-removing-a-chart-disc
kind: lemma
title: "Removing a compact chart disc gives a Greenian surface"
status: draft
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
  - thm-maximum-principle-for-plane-subharmonic-functions
  - lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity
  - def-plane-subharmonic-function
  - lem-locality-of-subharmonicity
  - def-plane-harmonic-function
  - thm-c-two-characterization-of-plane-subharmonicity
  - def-upper-semicontinuous-real-map-on-a-topological-space
  - def-connected-space
  - def-connected-r
  - def-hausdorff-space
  - def-compact-space
  - cor-euclidean-closed-balls-and-spheres-are-compact
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
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Donald E. Marshall, The Uniformization Theorem"
      url: "https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf"
      locator: "PDF pp. 4-5 (Lemma 2: the coordinate disc U0 with compact closure, the inequalities (5) and (6), the Perron solution omega on W minus rU with boundary data 1 on the inner circle and 0 on the removed circle, and the resulting uniform bound)"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 sections 2.4 and 5, printed pp. 64-68 and 115-118 (Green function on a domain with a removed disc)"
---

## Statement

Assume Countable Choice. Let $X$ be a connected Riemann surface
([[def-riemann-surface-and-holomorphic-atlas]]), let $\varphi:W\to\mathbb C$ be
a chart of $X$, let $a\in\mathbb C$ and $\rho>0$ satisfy
$\overline B(a,\rho)\subseteq\varphi(W)$, and put
$$U:=\varphi^{-1}\bigl(B(a,\rho)\bigr),\qquad \overline U=\varphi^{-1}\bigl(\overline B(a,\rho)\bigr),$$
so that $\overline U\subseteq W$ is the closure in $X$ of $U$, a closed
coordinate disc compact in $X$. Suppose $X\setminus\overline U\ne\varnothing$ and put
$$Y:=X\setminus\overline U .$$
Then $Y$ is connected, hence a Riemann surface in the complex structure
induced by the charts of $X$, and for every $p\in Y$ the canonical Perron
envelope $g_Y(\cdot,p)$ of [[def-canonical-green-kernel-riemann-surface]] is
finite on $Y\setminus\{p\}$. Equivalently: the exterior $Y=X\setminus\overline U$
admits a finite canonical Green kernel at every pole $p\in Y$.

## Facts & Assumptions
**Given:** Countable Choice; a connected Riemann surface $X$; a chart $\varphi:W\to\mathbb C$ of $X$, a point $a\in\mathbb C$ and $\rho>0$ with $\overline B(a,\rho)\subseteq\varphi(W)$, $U=\varphi^{-1}(B(a,\rho))$ and $\overline U=\varphi^{-1}(\overline B(a,\rho))\subseteq W$; the hypothesis $X\setminus\overline U\ne\varnothing$; the exterior $Y=X\setminus\overline U$; a pole $p_0\in Y$ fixed for the pole-disc construction.

[A1] Countable Choice: every at most countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] Riemann surfaces ([[def-riemann-surface-and-holomorphic-atlas]]): $X$ is nonempty, connected, Hausdorff and second countable, and carries a holomorphic atlas of compatible charts, each a homeomorphism onto an open subset of $\mathbb C$; an open subset of $X$ with the restrictions of these charts inherits a holomorphic atlas, a Hausdorff topology and second countability.

[F2] Canonical Green kernel and Perron family ([[def-canonical-green-kernel-riemann-surface]]): for a Riemann surface $V$ and a point $p\in V$, a centred chart at $p$ is a chart $z:U\to\mathbb D$ with $z(p)=0$ and $\overline U$ compact in $V$; the Perron family $\mathcal F_p(V)$ consists of the nonnegative subharmonic functions on $V\setminus\{p\}$ that vanish off a compact set $K\subseteq V$ and satisfy $\limsup_{q\to p}(v(q)+\log|z(q)|)<\infty$ for one, hence every, centred chart; the envelope $g_V(q,p)=\sup\{v(q):v\in\mathcal F_p(V)\}$ is well defined; $V$ admits a finite canonical Green kernel at $p$ when this envelope is finite everywhere on $V\setminus\{p\}$.

[F3] Dichotomy ([[lem-green-envelope-dichotomy-and-logarithmic-pole]]): if the envelope $g$ of $\mathcal F_p(V)$ is finite at one point of $V\setminus\{p\}$, then it is finite everywhere on $V\setminus\{p\}$, is harmonic and strictly positive there, and has a unit logarithmic pole at $p$; otherwise $g\equiv+\infty$.

[F4] Exhaustion and Dirichlet problem ([[lem-regular-exhaustion-and-dirichlet-on-riemann-surfaces]]): under $\mathrm{AC}_\omega$, every noncompact connected Riemann surface has a regular exhaustion by connected relatively compact smooth-bordered domains; and, in a noncompact ambient Riemann surface, every connected relatively compact domain $D$ whose boundary is a nonempty compact smooth embedded $1$-submanifold with $D=\operatorname{int}\overline D$ admits a unique continuous function harmonic on $D$ with prescribed continuous boundary datum.

[F5] Chartwise harmonic and subharmonic functions ([[def-harmonic-and-subharmonic-riemann-surface-functions]]): subharmonicity is the plane property on each connected component of every chart expression, as in [[def-plane-subharmonic-function]]; harmonicity is chartwise continuity with vanishing Euclidean Laplacian ([[def-plane-harmonic-function]]); a harmonic function is subharmonic; the restriction of a subharmonic function to an open subset is subharmonic; every chart expression of a subharmonic function is upper semicontinuous.

[F6] Plane subharmonic functions ([[def-plane-subharmonic-function]]): an upper semicontinuous function on a plane domain, not identically $-\infty$ on any component, satisfying the submean inequality at every disc centre is subharmonic; its values lie in $[-\infty,\infty)$.

[F7] Interior maximum principle ([[thm-maximum-principle-for-plane-subharmonic-functions]]): a subharmonic function on a plane domain which attains a finite maximum at an interior point is constant on the domain.

[F8] Positive combinations ([[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]]): nonnegative linear combinations of finitely many subharmonic functions on a plane domain are subharmonic.

[F9] Upper semicontinuity ([[def-upper-semicontinuous-real-map-on-a-topological-space]]): $u$ is upper semicontinuous at $x$ when $\limsup_{y\to x}u(y)\le u(x)$; for sequences with $x_j\to x$ one has $\limsup_ju(x_j)\le\limsup_{y\to x}u(y)$.

[F10] Topology of compacta (Euclidean closed discs and circles are compact by [[cor-euclidean-closed-balls-and-spheres-are-compact]]; [[def-compact-space]], [[def-hausdorff-space]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-compactness-under-continuous-maps]]): in a Hausdorff space compact subsets are closed, and continuous images of compact sets are compact.

[F11] Connectedness ([[def-connected-space]], [[def-connected-r]], [[thm-continuous-image-of-a-connected-space]]): continuous images of connected spaces are connected, and $\mathbb R$ is connected; a continuous map of $\mathbb R$ onto the boundary circle of a disc therefore has connected image.

[F12] Boundary, interior and closure ([[def-interior-closure-boundary-top]]): for a subset $W$ of a topological space, $\partial W=\overline W\setminus\operatorname{int}W$; in particular an open set $W$ has $\partial W=\varnothing$ exactly when $W=\overline W$, that is, when $W$ is closed.

[F13] The logarithm of the modulus ([[lem-log-modulus-is-harmonic-off-its-centre]]): $z\mapsto\log|z-c|$ is harmonic on $\mathbb C\setminus\{c\}$.

[F14] The $C^2$ criterion and harmonic functions ([[thm-c-two-characterization-of-plane-subharmonicity]], [[def-plane-harmonic-function]]): a $C^2$ function is subharmonic exactly when its Laplacian is nonnegative; a harmonic function has vanishing Laplacian, so it and each of its nonnegative multiples are subharmonic.

## Proof

1.1 **The exterior is an open Riemann surface.** The closed disc $\overline B(a,\rho)\subseteq\mathbb C$ is compact [F10], and $\varphi^{-1}$ is continuous on it because $\overline B(a,\rho)\subseteq\varphi(W)$; hence $\overline U=\varphi^{-1}(\overline B(a,\rho))$ is compact in $X$ [F10]. Since $X$ is Hausdorff, $\overline U$ is closed in $X$ [F10], so $Y=X\setminus\overline U$ is open in $X$ and nonempty by hypothesis. The restrictions $\varphi|_{W\cap Y}$ of the charts of the atlas of $X$ to their (open) intersections with $Y$ form an atlas of pairwise compatible charts on $Y$: each is a homeomorphism onto an open subset of $\mathbb C$, and compatibility is inherited from $X$. With this atlas $Y$ satisfies all clauses of [F1]: it is Hausdorff and second countable as a subspace of $X$, and its connectedness is proved separately below; the complex structure it carries is the one induced by $X$. [F1, F10, construct]

1.2 **The boundary circle is compact and connected.** Put $\gamma:=\partial U=\varphi^{-1}(\partial B(a,\rho))$. It is nonempty, and it is compact as the continuous image of the compact circle $\partial B(a,\rho)$ [F10]; it is also connected, being the image of the connected space $\mathbb R$ under the continuous map $t\mapsto\varphi^{-1}(a+\rho e^{it})$ [F11]. The circle lies in $\overline U$ and is disjoint from $Y=X\setminus\overline U$. [F10, F11]

1.3 **Chartwise strong maximum principle.** Let $V$ be a nonempty connected open subset of a Riemann surface and let $u$ be subharmonic on $V$. If $u$ attains a finite maximum $S$ at some point $x\in V$, then $u\equiv S$ on $V$. Indeed, choose a chart $\psi:V'\to\mathbb C$ of $V$ with $x\in V'$ [F1]; the chart expression $u_\psi$ is plane subharmonic on the plane domain $\psi(V')$ [F5] and attains the finite maximum $S$ at $\psi(x)$, so $u_\psi\equiv S$ on $\psi(V')$ by [F7]; hence the set $Z:=\{u=S\}$ is open, and it is closed in $V$ because $u$ is upper semicontinuous [F5, F9]; as $V$ is connected and $Z\ne\varnothing$, $Z=V$. [F1, F5, F7, F9]

1.4 **A pole disc with an extending coordinate.** Fix $p_0\in Y$. Restrict a chart centred at $p_0$ to a small Euclidean disc whose closure lies inside its original chart image; scale its coordinate so that this restricted disc is $U_1=\{|z|<1\}$ and the same coordinate $z$ is defined on a larger neighbourhood of $\overline U_1$ in $Y$. Thus $\overline U_1$ is compact in $Y$. Fix $0<r<1$ and put $rU_1=\{|z|<r\}$; the circles $\partial(rU_1)=\{|z|=r\}$ and $\partial U_1=\{|z|=1\}$ are now legitimate coordinate circles. [F1, F2, F12, construct]

2.1 **$Y$ is connected.** Suppose $Y=A\sqcup B$ with $A,B$ nonempty, open in $Y$; since $Y$ is open in $X$ [step 1.1], both $A$ and $B$ are open in $X$. The closed disc satisfies $\overline U=U\sqcup\gamma$, so $X=U\sqcup\gamma\sqcup A\sqcup B$ is a disjoint union. Every point $x\in\gamma$ lies in the closure of $A\cup B$: a neighbourhood of $x$ of the form $\varphi^{-1}(B(\varphi(x),\varepsilon))$ contains points of $U=\varphi^{-1}(B(a,\rho))$ and points of $\varphi^{-1}(\mathbb C\setminus\overline B(a,\rho))\subseteq Y=A\cup B$, because $\varphi(x)\in\partial B(a,\rho)$ and every disc around a boundary point of $B(a,\rho)$ meets both the open disc and its exterior. Hence $\gamma\subseteq\overline A\cup\overline B$. These two traces on $\gamma$ are disjoint: if $x$ lay in both, a sufficiently small chart neighbourhood of $x$ would have a connected exterior half-disc contained in $Y$ and meeting both $A$ and $B$, contrary to the separation $Y=A\sqcup B$. Since $\gamma$ is connected [step 1.2], the two disjoint closed traces covering it force $\gamma\subseteq\overline A$ or $\gamma\subseteq\overline B$. In the first case the open set $B$ satisfies $B=X\setminus\overline{A\cup U}$: the inclusion $B\subseteq X\setminus\overline{A\cup U}$ holds because $B$ is open and disjoint from $A\cup U$; conversely if $x\notin\overline{A\cup U}$ then $x\notin A\cup U$, while $x\in\gamma$ is impossible because $\gamma\subseteq\overline A\subseteq\overline{A\cup U}$, so $x\in B$ by the disjoint decomposition of $X$. Moreover $\overline B\cap\gamma=\varnothing$ by the disjoint-trace assertion, and $\overline B$ meets neither $A$ nor $U$, since these are open and disjoint from $B$. Hence $\overline B=B$. Thus $B$ is both open and closed in the connected space $X$ [F1] and $B\ne\varnothing$, so $B=X$ and $A=\varnothing$, a contradiction. The case $\gamma\subseteq\overline B$ is symmetric, interchanging $A$ and $B$. Therefore $Y$ is connected, and by step 1.1 it is a Riemann surface. [F1, F12, step 1.2, cases]

2.2 **Boundary maximum principle on a relatively compact domain.** Let $V\subseteq X$ be a nonempty proper open connected subset with $\overline V$ compact, and let $u:V\to[-\infty,\infty)$ be subharmonic on $V$ with $\limsup_{q\to\zeta,\,q\in V}u(q)\le0$ for every $\zeta\in\partial V$. Then $u\le0$ on $V$. For each $b>0$, the set $E_b=\{u\ge b\}$ is closed in $\overline V$ and avoids $\partial V$ by the boundary limsup hypothesis; it is compact. If $\sup_Vu=+\infty$, the nested nonempty $E_n$ have nonempty intersection by compactness, giving a forbidden $+\infty$ value. If $S:=\sup_Vu$ is finite and positive, the nested nonempty $E_b$ for $0<b<S$ give an interior point with value $S$. Step 1.3 forces $u\equiv S$, contradicting the boundary limsup bound at any point of the nonempty $\partial V$. Thus $u\le0$. [F9, F10, F12, step 1.3]

2.3 **Maximum principle with boundary values on a compactly contained disc.** Let $V$ be a nonempty proper open connected subset of $X$ with $\overline V$ compact, let $u:\overline V\to[-\infty,\infty)$ be upper semicontinuous on $\overline V$ and subharmonic on $V$. Then $\sup_{\overline V}u=\max_{\partial V}u$. Upper semicontinuity bounds $u$ above on compact $\overline V$: the open strict sublevel sets $\{u<n\}$ cover it, so a finite subcover bounds $u$. It has a finite value somewhere in $V$, as it is subharmonic there. Thus $S:=\sup_{\overline V}u$ is real, and the nonempty closed superlevel sets $\{u\ge b\}$, $b<S$, have the finite-intersection property on $\overline V$. Compactness gives a point with value $S$ [F10]. If a maximiser $x$ lies in $\partial V$, then $S=\max_{\partial V}u$. If every maximiser lies in $V$, then $u\equiv S$ on $V$ by step 1.3, and for $\zeta\in\partial V$ upper semicontinuity at $\zeta$ (which lies in the domain of $u$) gives $u(\zeta)\ge\limsup_{q\to\zeta}u(q)\ge S$; hence $S\le\max_{\partial V}u$. In both cases $S\le\max_{\partial V}u$, and the reverse inequality is trivial. [F10, step 1.3, cases]


3.1 **Inequality (5) at the pole.** Let $v\in\mathcal F_{p_0}(Y)$ and $\varepsilon>0$, and put $w:=v+(1+\varepsilon)\log|z|$ on $U_1\setminus\{p_0\}$. Then $w$ extends to a function on $\overline U_1$ that is upper semicontinuous there and subharmonic on $U_1$: on $U_1\setminus\{p_0\}$ the chart expression of $v$ is plane subharmonic [F5], the function $\log|\cdot|$ is harmonic on $\mathbb D\setminus\{0\}$ [F13], so $w$ is subharmonic on $U_1\setminus\{p_0\}$ chartwise [F5, F8, F14]; and the pole condition of [F2] gives $v_z(\zeta)\le-\log|\zeta|+C$ near $0$, whence $w_z(\zeta)\le\varepsilon\log|\zeta|+C\to-\infty$ as $\zeta\to0$, so setting $w(p_0):=-\infty$ makes $w$ upper semicontinuous at $p_0$, and the submean inequality at $p_0$ holds trivially for the value $-\infty$ [F6]; subharmonicity of this extension follows by truncation: $\max(w,-N)$ is constant near $p_0$, subharmonic elsewhere, and hence subharmonic by locality; its decreasing submean inequalities pass to $w$ by monotone convergence on circles after subtraction of a finite common upper bound. This is also the extension argument in the proof of [F3]. On $\partial U_1$ one has $|z|=1$, so $w=v$ there; step 2.3 applied to $w$ on the disc $U_1$ therefore gives $$\max_{\overline U_1}w=\max_{\partial U_1}w=\max_{\partial U_1}v=:M_v .$$ Restricting to the smaller circle $\partial(rU_1)$, where $w=v+(1+\varepsilon)\log r$, gives $$\max_{\partial(rU_1)}v+(1+\varepsilon)\log r\le M_v .$$ Letting $\varepsilon\downarrow0$ yields $$\max_{\partial(rU_1)}v+\log r\le\max_{\partial U_1}v,\qquad\text{that is}\qquad \max_{\partial(rU_1)}v\le\max_{\partial U_1}v+\log\frac1r . \tag{5}$$ [F2, F5, F6, F8, F13, F14, step 2.3]

3.2 **A fixed barrier and candidate-dependent truncations.** Fix $q_1\in\partial U_1$. If $X$ is compact, fix $a_0\in U$ and use the noncompact ambient surface $Z:=X\setminus\{a_0\}$ for all Dirichlet applications. It is connected: a punctured coordinate disc about $a_0$ is connected, so any separation of $Z$ would extend to one of $X$ by adjoining $a_0$ to the side containing that punctured disc. It is noncompact, since compactness would make $Z$ closed in the Hausdorff $X$, making $a_0$ isolated, contrary to a coordinate chart. Set $V_0:=X\setminus(\overline U\cup\overline{rU_1})$. If $X$ is noncompact, choose by [F4] a regular exhaustion $(D_n)$ and $N_0$ with $\overline U\cup\overline U_1\subseteq D_{N_0}$, and put $V_0:=D_{N_0}\setminus(\overline U\cup\overline{rU_1})$. In either case $V_0$ is a connected relatively compact smooth-bordered domain by applying the closed-disc removal argument of step 2.1 successively in the connected ambient domain. Its closure lies in $Z$ in the compact case. Solve on $V_0$ for a continuous harmonic $\eta$ with boundary values $1$ on $\partial(rU_1)$, $0$ on $\partial U$, and, when $X$ is noncompact, $1$ on $\partial D_{N_0}$ [F4]. The maximum principle step 2.2 gives $0\le\eta\le1$. Since $\partial U_1$ lies in $V_0$ and $1-\eta$ is nonnegative harmonic, the strong maximum principle step 1.3 gives $1-\eta>0$ on $\partial U_1$; hence $\delta:=\min_{\partial U_1}(1-\eta)>0$. Now fix any $v\in\mathcal F_{p_0}(Y)$. If $X$ is compact, set $V:=V_0$ and $\omega:=\eta$. If $X$ is noncompact, choose $N\ge N_0$ with the compact support of $v$ contained in $D_N$, set $V:=D_N\setminus(\overline U\cup\overline{rU_1})$. As with $V_0$, this is a nonempty connected relatively compact smooth-bordered domain: the two closed discs are disjoint and contained in $D_N$, so successive applications of step 2.1 give connectedness. Solve by [F4] for $\omega=1$ on $\partial(rU_1)$ and $\omega=0$ on $\partial U\cup\partial D_N$. Then $0\le\omega\le1$ by step 2.2. On $V_0$, $\eta-\omega$ is harmonic, vanishes on $\partial(rU_1)\cup\partial U$, and is nonnegative on $\partial D_{N_0}$ because $\eta=1$ there and $\omega\le1$; hence $\omega\le\eta$ on $V_0$. In both cases $0\le\omega\le1$ on $V$ and $\max_{\partial U_1}\omega\le1-\delta$, with $\delta$ independent of $v$. [F4, step 1.3, step 2.1, step 2.2, construct]
4.1 **Inequality (6).** Let $v\in\mathcal F_{p_0}(Y)$ and put $M_v:=\max_{\partial(rU_1)}v$, a nonnegative real number. The function $u:=v-M_v\omega$ is subharmonic on $V$: chartwise, $v$ is subharmonic on $V\subseteq Y\setminus\{p_0\}$ [F5], $\omega$ is harmonic on $V$ hence subharmonic with each nonnegative multiple [F14], and the chart expression of $-M_v\omega$ is the sum of the plane subharmonic function $v_\varphi$ and the plane subharmonic function $-M_v\omega_\varphi$, hence subharmonic [F8, F5]. At every boundary point $\zeta$ of $V$ the boundary limit of $u$ is at most $0$: for $\zeta\in\partial(rU_1)$ one has $\omega(\zeta)=1$ and $v$ is upper semicontinuous at $\zeta$ [F5, F9], so $\limsup(v-M_v\omega)\le v(\zeta)-M_v\le0$; for $\zeta\in\partial U$ the point $\zeta$ has a neighbourhood disjoint from the compact support of $v$ [F2], so $v=0$ near $\zeta$ and $\omega(\zeta)=0$, giving $\limsup u\le0$; and in the noncompact case the same argument applies at $\zeta\in\partial D_N$, because $\overline U\cup\overline U_1\subseteq D_N$ while $v$ vanishes off a compact subset of $Y$, so $v=0$ on a neighbourhood of $\partial D_N$. Step 2.2 applied on $V$ therefore gives $v-M_v\omega\le0$ on $V$, and in particular on $\partial U_1\subseteq V$: $$\max_{\partial U_1}v\le M_v\max_{\partial U_1}\omega\le(1-\delta)\max_{\partial(rU_1)}v . \tag{6}$$ [F2, F5, F8, F9, F14, step 2.2, step 3.2]

5.1 **The family is uniformly bounded at the pole.** Adding (5) and (6) gives $$\max_{\partial(rU_1)}v+\log r\le(1-\delta)\max_{\partial(rU_1)}v,\qquad\text{hence}\qquad \delta\max_{\partial(rU_1)}v\le\log\frac1r,$$ so that for every $v\in\mathcal F_{p_0}(Y)$ $$\max_{\partial(rU_1)}v\le C:=\frac1\delta\log\frac1r<+\infty . $$ [step 3.1, step 4.1, algebra]

6.1 **One finite value of the envelope.** For $v\in\mathcal F_{p_0}(Y)$, step 4.1 gives $v(q_1)\le M_v\omega(q_1)\le C$ with $C$ as in step 5.1, because $q_1\in\partial U_1\subseteq V$ and $0\le\omega\le1$; taking the supremum over $v$, $$g_Y(q_1,p_0)=\sup\{v(q_1):v\in\mathcal F_{p_0}(Y)\}\le C<+\infty . $$ [F2, step 4.1, step 5.1]

7.1 **Conclusion.** Since the envelope of $\mathcal F_{p_0}(Y)$ is finite at the point $q_1\in Y\setminus\{p_0\}$, the dichotomy [F3] shows that it is finite everywhere on $Y\setminus\{p_0\}$, harmonic and positive there, and has a unit logarithmic pole at $p_0$; that is, $Y$ admits a finite canonical Green kernel at $p_0$. The pole $p_0\in Y$ was arbitrary, so $Y$ admits a finite canonical Green kernel at every pole, and $Y$ is connected by step 2.1 and a Riemann surface by step 1.1. The countably many arbitrary choices of the construction are the exhausted domains of [F4] in the noncompact case, which uses $\mathrm{AC}_\omega$ [A1]; all other selections are finite. [A1, F3, step 1.1, step 2.1, step 6.1] ∎
