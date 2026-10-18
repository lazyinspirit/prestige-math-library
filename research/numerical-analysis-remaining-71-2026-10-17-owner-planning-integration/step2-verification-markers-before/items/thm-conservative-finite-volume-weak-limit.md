---
id: thm-conservative-finite-volume-weak-limit
kind: theorem
title: Conservative finite-volume strong-limit theorem
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
aliases: []
deps: [def-conservative-finite-volume-scheme, def-finite-volume-space-time-reconstruction, lem-finite-volume-discrete-summation-by-parts, lem-conservative-fv-face-fluxes-converge-in-l1loc, def-locally-bounded-distributional-weak-solution, def-scalar-conservation-law-and-flux, def-distributional-weak-solution-of-a-scalar-conservation-law, def-countable-choice]
justified_by: []
proof_strategy: direct
axiom_use: "Assume ACω, inherited only for the local spatial-translation step in the face-flux convergence lemma. The cellwise summation and passage to the weak identity use no further choice."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "H. De Sterck and P. Ullrich, Introduction to Computational PDEs, Chapter 3, complete chapter, PDF pp. 81–106"
      url: "https://climate.ucdavis.edu/AM452.pdf"
      locator: "§3.4.1 and §3.4.3, pp. 94–99: conservative cell updates and interior-flux cancellation; Theorem 3.1 on pp. 98–99 states a Lax–Wendroff conclusion without the compactness and bounded-range hypotheses or a proof. The complete conditional proof is supplied locally."
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Lecture 19: Finite Volume Methods, complete six-page note"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/814ce5a38ea0db4c58eff0c5ad8b111a_MIT18_336S09_lec19.pdf"
      locator: "pp. 1–2: cell-average states, conservative update and Godunov flux construction; the conditional weak-limit proof is supplied locally."
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. Let $T>0$, $f\colon\mathbb R\to\mathbb R$ be continuous, $u_0\in L^\infty(\mathbb R)\cap L^1_{\mathrm{loc}}(\mathbb R)$, and $F\colon\mathbb R^2\to\mathbb R$ be continuous with $F(a,a)=f(a)$ for every $a\in\mathbb R$. For each $m$, form the conservative finite-volume scheme and space-time reconstruction of [[def-conservative-finite-volume-scheme]] and [[def-finite-volume-space-time-reconstruction]] using $h_m,\tau_m\to0$ and initial cell averages of $u_0$. Suppose reconstructions converge strongly in $L^1_{\mathrm{loc}}(\mathbb R\times(0,T))$ to $u$, and for every bounded interval $I\subset\mathbb R$ and $T'<T$ there is $M_{I,T'}<\infty$ such that $|\mathcal U_m|\le M_{I,T'}$ almost everywhere on $I\times[0,T']$ for every $m$. Then $u$ is a locally bounded distributional weak solution in the sense of [[def-locally-bounded-distributional-weak-solution]]; explicitly, for every $\varphi\in C_c^\infty(\mathbb R\times(-\infty,T))$,
$$
\int_0^T\int_{\mathbb R}\bigl(u\varphi_t+f(u)\varphi_x\bigr)\,dx\,dt +\int_{\mathbb R}u_0(x)\varphi(x,0)\,dx=0.
$$
The strong convergence and local uniform bounds are hypotheses, not conclusions. No CFL condition or entropy inequality is assumed, so the theorem proves a weak limit only; it does not claim Kruzhkov entropy admissibility. If the limit is also globally essentially bounded, this identity is the published bounded weak formulation in [[def-distributional-weak-solution-of-a-scalar-conservation-law]].

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the scalar flux $f$, initial datum $u_0$, the scheme and reconstructions, $h_m,\tau_m\to0$, local uniform bounds on the states up to $t=0$, strong $L^1_{\mathrm{loc}}$ convergence to $u$, and a compactly supported smooth test $\varphi$ whose support may meet $t=0$.

[A1] The Axiom of Countable Choice says that every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] The initial states are cell averages of $u_0$, and the update is the shared-flux difference $h_m(U_j^{m,n+1}-U_j^{m,n})+\tau_m(Q_{j+1/2}^{m,n}-Q_{j-1/2}^{m,n})=0$. ([[def-conservative-finite-volume-scheme]])

[F2] $\mathcal U_m=U_j^{m,n}$ and $\mathcal Q_m=Q_{j+1/2}^{m,n}$ on each $I_j^m\times J_n^m$, and the face flux equals $F(\mathcal U_m(x,t),\mathcal U_m(x+h_m,t))$ almost everywhere. ([[def-finite-volume-space-time-reconstruction]])

[F3] For the averaged test $\Phi_j^{m,n}$, the exact discrete identity is
$$
\sum_j h_m U_j^{m,0}\Phi_j^{m,0} +\sum_{n=1}^{N-1}\sum_j h_m U_j^{m,n}(\Phi_j^{m,n}-\Phi_j^{m,n-1}) +\sum_{n=0}^{N-1}\sum_j\tau_m Q_{j+1/2}^{m,n}(\Phi_{j+1}^{m,n}-\Phi_j^{m,n})=0
$$
when the test vanishes for $t\ge t_{N-1}^m$. ([[lem-finite-volume-discrete-summation-by-parts]])

[F4] Under strong local $L^1$ convergence and local uniform bounds up to $t=0$, $u$ is locally essentially bounded and $\mathcal Q_m\to f(u)$ in $L^1$ on every bounded interval times $(0,T')$. ([[lem-conservative-fv-face-fluxes-converge-in-l1loc]])

[F5] A locally bounded distributional weak solution is a measurable, locally essentially bounded $u$ for which the displayed weak identity with initial boundary term holds for every test meeting $t=0$. ([[def-locally-bounded-distributional-weak-solution]])

[F6] If the state is globally bounded and satisfies this initial weak identity, it meets the published bounded weak-solution definition. ([[def-distributional-weak-solution-of-a-scalar-conservation-law]])

## Proof

1.1 Fix $\varphi\in C_c^\infty(\mathbb R\times(-\infty,T))$. Its time support on $[0,T)$ is contained in $[0,T_\varphi]$ for some $T_\varphi<T$. For all sufficiently large $m$, choose $N_m\ge3$ with $T_\varphi<t_{N_m-2}^m<t_{N_m-1}^m<t_{N_m}^m<T$. By [F1] and [F2] these are precisely the scheme states and face fluxes of the reconstruction, so [F3] gives the exact summed update identity for this test. [F1, F2, F3, given, choose]

2.1 The initial term in [F3] converges to the desired boundary term. Indeed, $h_mU_j^{m,0}=\int_{I_j^m}u_0$, while $\Phi_j^{m,0}$ is the average of $\varphi$ on $I_j^m\times[0,\tau_m)$. Smoothness gives $|\Phi_j^{m,0}-\varphi(x,0)|\le C_\varphi(h_m+\tau_m)$ for $x\in I_j^m$; summing the resulting errors over the finitely many cells meeting the support bounds the total by $C_\varphi(h_m+\tau_m)\int_K|u_0|\to0$ on a fixed compact $K$. [F1, F2, F3, step 1.1, given, algebra]

2.2 For $n\ge1$, the difference $\Phi_j^{m,n}-\Phi_j^{m,n-1}$ differs from $h_m^{-1}\int_{I_j^m}\int_{J_n^m}\varphi_t$ by at most $C_\varphi\tau_m^2$, by Taylor's formula in time for the smooth function $t\mapsto h_m^{-1}\int_{I_j^m}\varphi(x,t)\,dx$. After multiplication by $h_mU_j^{m,n}$ and summation over $O(h_m^{-1})$ cells and $O(\tau_m^{-1})$ time slabs in the fixed support, the total error is $O(\tau_m)$. The missing first-slab integral is also $O(\tau_m)$ because $|\mathcal U_m|$ is uniformly bounded on the compact support and $\varphi_t$ is bounded. Hence the time sum in [F3] differs from $\int_0^T\int\mathcal U_m\varphi_t$ by a quantity tending to zero. [F2, F3, step 1.1, given, algebra]

2.3 For each $j,n$, translation of a cell interval and the fundamental theorem of calculus give $\tau_m(\Phi_{j+1}^{m,n}-\Phi_j^{m,n}) =\int_{J_n^m}\int_{I_j^m}\frac1{h_m}\int_0^{h_m}\varphi_x(x+s,t)\,ds\,dx\,dt$. Its difference from $\int_{J_n^m}\int_{I_j^m}\varphi_x$ is at most $C_\varphi h_m^2\tau_m$, by the bound on $\varphi_{xx}$. The numerical face fluxes are uniformly bounded on cells meeting the test support because $F$ is continuous on the compact state square supplied by local boundedness. Summing over the finitely many cells and time slabs meeting the test support gives total error $O(h_m)$. Thus the flux sum in [F3] differs from $\int_0^T\int\mathcal Q_m\varphi_x$ by a quantity tending to zero. [F1, F2, F3, step 1.1, given, algebra]

3.1 Strong local $L^1$ convergence gives $\int\mathcal U_m\varphi_t\to\int u\varphi_t$ on times bounded away from zero. On $I\times(0,\epsilon)$, the local uniform bound for both $\mathcal U_m$ and $u$ makes the integral difference at most a constant times $|I|\epsilon$; letting $\epsilon\downarrow0$ proves convergence on the full test support. By [F4], $\int\mathcal Q_m\varphi_x\to\int f(u)\varphi_x$ on that support. Step 2.1 gives the initial term limit, and steps 2.2–2.3 identify the limits of the discrete sums. Taking the limit in [F3] proves the weak identity. By [F4], $u$ is locally essentially bounded, and [F5] identifies it as the stated local weak solution. [A1, F3, F4, F5, F6, step 2.1, step 2.2, step 2.3, given, algebra] ∎
