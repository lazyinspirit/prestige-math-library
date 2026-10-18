---
id: thm-monotone-finite-volume-entropy-convergence
kind: theorem
title: Strong entropy convergence of monotone finite-volume schemes
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
aliases: []
deps: [def-bounded-bv-data-on-line, def-monotone-finite-volume-entropy-scheme, def-piecewise-linear-fv-time-interpolant, lem-monotone-fv-update-preserves-range-and-tvd, lem-monotone-fv-discrete-kruzhkov-inequality, lem-monotone-fv-local-compactness-and-trace, thm-conservative-finite-volume-weak-limit, def-kruzhkov-entropy-solution, thm-kruzhkov-local-l1-contraction, thm-existence-of-bounded-kruzhkov-entropy-solutions, thm-extreme-value-metric, cor-mean-value-theorem, def-countable-choice, def-dependent-choice]
justified_by: []
proof_strategy: direct
axiom_use: "Assume ACω for the imported strong-limit weak formulation, Kruzhkov local contraction, and their measure-theoretic interfaces. If u0 is in L1(R), also assume DC for the published entropy-existence theorem; DC is not assumed or used on the nonintegrable BV branch. No full Axiom of Choice is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jérôme Droniou, A beginner’s course in finite volume approximation of scalar conservation laws, complete lecture note"
      url: "https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf"
      locator: "§§2.2–2.3.3, PDF pp. 13–23: monotone fluxes, invariant bounds, TVD/time increments, the discrete entropy inequality and convergence under a CFL condition. The local compactness and initial-trace proofs are supplied here."
    - title: "Siddhartha Mishra, Ulrik S. Fjordholm and Rémi Abgrall, Numerical Methods for Conservation Laws, ETH lecture notes"
      url: "https://metaphor.ethz.ch/x/2019/hs/401-4671-00L/literature/mishra_hyperbolic_pdes.pdf"
      locator: "§§4.4.4–4.6, PDF pp. 49–57, especially Proposition 4.10, Lemmas 4.13–4.14, Theorem 4.18 and Theorem 4.19. The book proof covers L1 data and uses a global-tail argument; the nonintegrable BV branch is proved locally here."
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. Let $T>0$,
$f\in C^1(\mathbb R)$, and $u_0\in\mathrm{BV}_b(\mathbb R)$ in the sense of
[[def-bounded-bv-data-on-line]]. Put
$I=[\operatorname*{ess\,inf}u_0,\operatorname*{ess\,sup}u_0]$. Let
$F\colon\mathbb R^2\to\mathbb R$ be locally Lipschitz, consistent with $f$,
nondecreasing in its first coordinate and nonincreasing in its second on
$I^2$, with coordinate Lipschitz bounds $L_1,L_2$ as in
[[def-monotone-finite-volume-entropy-scheme]]. For a family of meshes
$(h_m,\tau_m)$ assume
$$h_m,\tau_m\to0,\qquad \frac{\tau_m}{h_m}(L_1+L_2)\le1,\qquad \frac{\tau_m}{h_m}\ge c_*>0.$$
For each mesh, initialize by cell averages and update with the shared flux $F$.
Let $W_m$ be the piecewise-linear time interpolant and $\mathcal U_m$ the
piecewise-constant state reconstruction. If $u_0\in L^1(\mathbb R)$, assume
Dependent Choice $\mathrm{DC}$ in addition to $\mathrm{AC}_\omega$; no DC
assumption is made when $u_0\notin L^1(\mathbb R)$.

Then there is a unique bounded Kruzhkov entropy solution $u$ on
$\mathbb R\times(0,T)$ with initial datum $u_0$, and
$$W_m\longrightarrow u\quad\text{in }C([0,T];L^1_{\mathrm{loc}}(\mathbb R)),\qquad \mathcal U_m\longrightarrow u\quad\text{strongly in }L^1_{\mathrm{loc}}(\mathbb R\times(0,T)).$$
For nonintegrable bounded BV data, existence is obtained from the local
finite-volume limit in the proof before local contraction gives uniqueness.
The theorem claims local convergence; global $L^1$ convergence requires
additional uniform tail control. The time-to-space lower bound $c_*$ is retained
from the approved convergence interface, and no system-valued or non-BV
entropy-process conclusion is asserted.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; $T>0$; $f\in C^1(\mathbb R)$; bounded BV initial class $u_0$; a locally Lipschitz, consistent, coordinatewise monotone two-point flux $F$ on the invariant interval $I$; coordinate constants $L_1,L_2$; a family $h_m,\tau_m\to0$ with $c_*\le\tau_m/h_m$ and $(\tau_m/h_m)(L_1+L_2)\le1$; and the cell-average finite-volume recurrences and reconstructions.

[A1] $\mathrm{AC}_\omega$ is the assertion that every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[A2] On the branch $u_0\in L^1(\mathbb R)$, $\mathrm{DC}$ is additionally assumed; it is not part of the nonintegrable-data branch ([[def-dependent-choice]]).

[F1] The scheme uses cell-average data and the shared-flux recurrence for a locally Lipschitz consistent monotone flux on $I$, with the full invariant-interval CFL bound ([[def-monotone-finite-volume-entropy-scheme]]).

[F2] $W_m$ interpolates affinely between consecutive scheme states on each cell and slab, and $\mathcal U_m$ is the piecewise-constant space-time state ([[def-piecewise-linear-fv-time-interpolant]]).

[F3] Every scheme state stays in $I$, its spatial discrete variation is at most $\operatorname{TV}(u_0)$, and the discrete time-increment sum is bounded by $(L_1+L_2)\operatorname{TV}(u_0)$ ([[lem-monotone-fv-update-preserves-range-and-tvd]]).

[F4] Every mesh subsequence has a further subsequence whose linear interpolants converge uniformly in local $L^1$ to a continuous local-$L^1$ map with initial value $u_0$; the piecewise-constant reconstructions converge strongly to the same limit in space-time $L^1_{\mathrm{loc}}$ ([[lem-monotone-fv-local-compactness-and-trace]]).

[F5] If the finite-volume state reconstructions converge strongly in local $L^1$ and are uniformly locally bounded up to $t=0$, their limit satisfies the weak conservation-law identity with initial boundary term; this theorem assumes $\mathrm{AC}_\omega$ and makes no entropy assertion ([[thm-conservative-finite-volume-weak-limit]]).

[F6] A bounded Kruzhkov entropy solution is characterized by all inequalities $\int(|u-k|\varphi_t+q_k(u)\varphi_x)\ge0$ for nonnegative interior tests, together with the strong local $L^1$ initial trace ([[def-kruzhkov-entropy-solution]]).

[F7] Under $\mathrm{AC}_\omega$, two bounded Kruzhkov entropy solutions for the same $C^1$ flux satisfy the local $L^1$ contraction estimate, so equal initial data give equality almost everywhere ([[thm-kruzhkov-local-l1-contraction]]).

[F8] Under $\mathrm{AC}_\omega+\mathrm{DC}$, if $u_0\in L^1(\mathbb R)\cap L^\infty(\mathbb R)$ and $f$ is locally Lipschitz and $C^1$, a bounded Kruzhkov entropy solution with the stated strong local trace exists ([[thm-existence-of-bounded-kruzhkov-entropy-solutions]]).

[F9] For every real $k$, the scheme satisfies the one-step inequality with numerical entropy flux $G_k(a,b)=F(a\vee k,b\vee k)-F(a\wedge k,b\wedge k)$, and $G_k(s,s)=q_k(s)$ ([[lem-monotone-fv-discrete-kruzhkov-inequality]]).

[F10] On every compact interval $J\subset\mathbb R$, continuity of $f'$ gives a finite derivative bound, and the mean value theorem then makes $f$ Lipschitz on $J$; a singleton interval needs no derivative estimate ([[thm-extreme-value-metric]], [[cor-mean-value-theorem]]).

## Proof

1.1 Start with any subsequence of meshes. By [F4] it has a further subsequence along which $W_m$ converges in $C([0,T];L^1_{\mathrm{loc}})$ to a map $u(t)$ with $u(0)=u_0$, values in $I$, and $\mathcal U_m\to u$ strongly in space-time $L^1_{\mathrm{loc}}$. The range condition gives the uniform local state bound required below. [F1, F2, F4, given, choose]

1.2 Fix $k\in\mathbb R$ and a nonnegative $\varphi\in C_c^\infty(\mathbb R\times(0,T))$. Let $\Phi_j^n$ be the average of $\varphi$ on $I_j\times[t_n,t_{n+1}]$, and choose $N$ so that $\varphi$ vanishes on and after the last time slab. Multiply the one-step inequality [F9] by $h\Phi_j^n$, sum over the finitely many relevant $j,n$, telescope in time, and reindex the shared entropy fluxes in space. The resulting exact inequality is $\sum_{n=1}^{N-1}\sum_j h|U_j^n-k|(\Phi_j^n-\Phi_j^{n-1})+\sum_{n=0}^{N-1}\sum_j\tau G_k(U_j^n,U_{j+1}^n)(\Phi_{j+1}^n-\Phi_j^n)\ge0.$ There is no initial term because $\varphi$ is supported away from $t=0$. [F2, F3, F9, given, choose, algebra]

2.1 The hypotheses of [F5] hold along this further subsequence: $f$ is continuous, the cell data and shared-flux recurrence are those of [F1], the mesh widths vanish, the states are bounded by $I$, and the strong local convergence is from step 1.1. Therefore $u$ satisfies the distributional weak equation with the prescribed initial boundary term. [A1, F1, F4, F5, step 1.1, given]

2.2 On the compact state interval $J$ spanned by $I\cup\{k\}$, local Lipschitz continuity of $F$ gives a finite constant $C_k$ for which $|G_k(a,b)-G_k(a,a)|\le C_k|b-a|$. By [F3], the local space-time $L^1$ difference between the face entropy flux $G_k(U_j^n,U_{j+1}^n)$ and $q_k(U_j^n)=G_k(U_j^n,U_j^n)$ is at most $C_k T h_m\operatorname{TV}(u_0)$, which tends to zero. Also $q_k$ is Lipschitz on $I$ because $f\in C^1$, so strong convergence in step 1.1 gives $q_k(\mathcal U_m)\to q_k(u)$ in local $L^1$. [F1, F3, F6, step 1.1, algebra]

3.1 The finite-sum expression in step 1.2 converges to $\int_0^T\!\int_{\mathbb R}\bigl(|u-k|\varphi_t+q_k(u)\varphi_x\bigr)\,dx\,dt.$ Writing $\overline{\varphi_t}{}_j^n$ for the average of $\varphi_t$ on $I_j\times[t_n,t_{n+1}]$, Taylor's formula in time gives $|\Phi_j^n-\Phi_j^{n-1}-\tau_m\overline{\varphi_t}{}_j^n|\le C_\varphi\tau_m^2$. After multiplication by $h_m|U_j^n-k|$ and summing the $O(h_m^{-1})$ cells and $O(\tau_m^{-1})$ slabs in the compact support, the error is $O(\tau_m)$. For the flux term, translation of adjacent cell averages gives $\tau_m(\Phi_{j+1}^n-\Phi_j^n)=\int_{t_n}^{t_{n+1}}\int_{I_j}h_m^{-1}\int_0^{h_m}\varphi_x(x+s,t)\,ds\,dx\,dt$; replacing the averaged derivative by $\varphi_x$ has total error $O(h_m)$ because $\varphi_{xx}$ and the numerical entropy fluxes are uniformly bounded on the compact support. The face-flux replacement in step 2.2 and strong state convergence supply the remaining limit. Passing to the limit in step 1.2 proves the Kruzhkov inequality for this $k,\varphi$. Since both were arbitrary, all interior Kruzhkov inequalities hold. [F2, F3, step 1.2, step 2.2, given, algebra]

4.1 The initial value and continuity from [F4] imply the strong local $L^1$ trace: for every compact interval $K$, $\|u(t)-u_0\|_{L^1(K)}\to0$ as $t\downarrow0$, hence the essential supremum over $0<t<\delta$ also tends to zero. Together with the entropy inequalities of step 3.1, [F6] makes $u$ a bounded Kruzhkov entropy solution. [F4, F6, step 3.1, algebra]

5.1 Put $M_0:=\max\{|a_-|,|a_+|\}$. By [F10], $f$ is Lipschitz on $[-M_0,M_0]$, which contains the range $I$ of every limit from step 4.1. Thus the range and flux hypotheses of [F7] hold for any pair of such limits. If $u_0\in L^1(\mathbb R)$, [A2] and [F8] supply a bounded Kruzhkov solution, and [F7] makes it unique and identifies it with the limit of step 4.1. If $u_0\notin L^1(\mathbb R)$, step 4.1 itself supplies existence and [F7] supplies uniqueness. Thus in either branch there is a unique target entropy solution, without applying the global existence theorem outside its $L^1$ domain. [A1, A2, F7, F8, F10, step 4.1, given]

6.1 Every convergent subsequence from step 1.1 has an entropy-solution limit with the same initial data; by [F7] all such limits agree with the unique target from step 5.1 as space-time $L^1_{\mathrm{loc}}$ classes. If the full sequence failed to converge strongly on some compact space-time set, a subsequence would stay at distance at least $\varepsilon>0$ from that target; [F4] would give a further subsequence converging strongly there to an entropy solution, contradicting uniqueness. Therefore $\mathcal U_m\to u$ strongly in local space-time $L^1$. For the uniform-in-time conclusion, Fubini in [F6] turns this space-time equality into equality of the $L^1(K)$ sections for almost every $t$, for each compact interval $K$. The two local-$L^1$ limit maps are continuous, so they agree for every $t$: if their distance were positive at one time, continuity would make it positive on an interval of positive measure. Uniform-in-time local convergence of $W_m$ then follows by the same subsequence contradiction using [F4]. [F4, F6, F7, step 1.1, step 4.1, step 5.1, algebra] ∎
