---
id: thm-pe05-strong-limit-satisfies-smooth-bed-balance-law
kind: theorem
title: A strong limit of hydrostatic HLL updates solves the smooth-bed balance law weakly
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-pe05-shallow-water-balance-law
  - def-pe05-hydrostatic-hll-scheme
  - def-countable-choice
  - lem-pe05-strong-l1-limit-preserves-dry-admissibility
  - lem-pe05-source-quadrature-consistency
  - lem-pe05-discrete-weak-identity-with-source
  - lem-pe05-hll-flux-reconstruction-converges-under-strong-primitive-l1
justified_by: []
proof_strategy: direct
axiom_use: "Assume only AC_omega, inherited through the spatial translation and bounded-set measure suppliers in the face-flux lemma. The discrete summation and source limit use no further choice; no DC or full AC is used."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "H. De Sterck and P. Ullrich, Introduction to Computational PDEs, Chapter 3"
      url: "https://climate.ucdavis.edu/AM452.pdf"
      locator: "Full 143-page course-note PDF; complete Chapter 3, especially §3.4.1 and §3.4.3, PDF pp. 94–99. The stated Lax–Wendroff theorem lacks the strong-convergence hypotheses and proof used here."
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Lecture 19: Finite Volume Methods"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/814ce5a38ea0db4c58eff0c5ad8b111a_MIT18_336S09_lec19.pdf"
      locator: "Complete six-page lecture; pp. 1–2, cell-average states and shared-flux update. It does not prove a source-bearing system weak-limit theorem."
    - title: "E. Audusse, F. Bouchut, M.-O. Bristeau, R. Klein, and B. Perthame, A Fast and Stable Well-Balanced Scheme with Hydrostatic Reconstruction for Shallow Water Flows"
      url: "https://publications.imp.fu-berlin.de/478/1/file_2004_siam.pdf"
      locator: "Complete 16-page paper; balance law (1.1), source-consistency proof of Theorem 2.1(iii), §2.1, printed pp. 2050 and 2054–2055."
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $b\in C^2(\mathbb R)$ and consider a sequence of full-line uniform hydrostatic HLL grids from [[def-pe05-hydrostatic-hll-scheme]] with widths $d_k\to0$ and time steps $\tau_k\to0$. Set $I_i^k=[id_k,(i+1)d_k)$, $x_i^k=(i+\tfrac12)d_k$, $t_n^k=n\tau_k$, and $J_n^k=[t_n^k,t_{n+1}^k)$, and sample $b_i^k=b(x_i^k)$. On $I_i^k\times J_n^k$, let $\mathcal U_k=(h_k,m_k)$ and $u_k$ be the piecewise-constant state and primitive-velocity reconstructions, with $m_k=h_ku_k$, $u_k=0$ on dry cells, and $U_i^{k,n}\in K$. Define $\mathcal F_k=\widehat F_{i+1/2}^{k,n}$ and $\mathcal S_k=S_i^{k,n}$ on that same slab, using the sampled bed. Assume that on every compact rectangle in $\mathbb R\times[0,T)$, including the initial layer, the depths and velocities are uniformly bounded; that on every compact rectangle in $\mathbb R\times(0,T)$, $h_k\to h$ and $u_k\to u$ strongly in $L^1$ and $m_k\to m=hu$ strongly in $L^1$; that $u=0$ almost everywhere where $h=0$; and that the initial reconstructions converge locally in $L^1$ to $U_0=(h_0,m_0)$. Then $U=(h,m)$ satisfies, for every $\varphi\in C_c^\infty(\mathbb R\times[0,T);\mathbb R^2)$,
$$\int_0^T\int_{\mathbb R}\left(U\cdot\varphi_t+F(U)\cdot\varphi_x+(0,-ghb_x)\cdot\varphi\right)\,dx\,dt+\int_{\mathbb R}U_0(x)\cdot\varphi(x,0)\,dx=0.$$
Thus the limit is a locally bounded distributional weak solution of the shallow-water balance law in [[def-pe05-shallow-water-balance-law]]. Strong convergence, primitive-velocity convergence and the source-quadrature hypotheses are assumptions; this theorem proves no compactness, entropy inequality or convergence rate.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the discrete scheme on a vanishing uniform space-time grid, local uniform depth/velocity bounds, strong local $L^1$ convergence of depths, velocities and conserved states, the initial trace convergence, a $C^2$ stationary bed, and a compactly supported smooth vector test $\varphi$.

[A1] The only choice axiom is $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] Rewriting the corrected fluxes gives the exact recurrence $d_k(U_i^{n+1}-U_i^n)+\tau_k(\widehat F_{i+1/2}^n-\widehat F_{i-1/2}^n)=d_k\tau_k S_i^n$ ([[def-pe05-hydrostatic-hll-scheme]]).

[F2] Testing that recurrence by space-time cell averages gives the exact initial, time, face-flux and source identity ([[lem-pe05-discrete-weak-identity-with-source]]).

[F3] Strong depth convergence and $b\in C^2$ imply the discrete source reconstruction converges strongly in $L^1_{\rm loc}$ to $(0,-ghb_x)$ ([[lem-pe05-source-quadrature-consistency]]).

[F4] Under the stated strong state/velocity convergence, local bounds, bed regularity and $\mathrm{AC}_\omega$, the reconstructed HLL face flux converges strongly in $L^1_{\rm loc}$ to $F(U)$ ([[lem-pe05-hll-flux-reconstruction-converges-under-strong-primitive-l1]]).

[F5] Strong local $L^1$ limits of nonnegative bulk and initial depths remain nonnegative; the relations $m=hu$, zero dry velocity and a locally uniform initial velocity bound put both limiting states in $K$ ([[lem-pe05-strong-l1-limit-preserves-dry-admissibility]]).

[F6] On compact spatial sets, the source quadrature estimate gives $|S_i^{(2)}+g h_i b'(x_i)|\le Cd$ for bounded cell depths and $0<d\le1$ ([[lem-pe05-source-quadrature-consistency]]).

## Proof

1.1 By [F5], applied to the nonnegative bulk and initial depths, the strong local convergences, $m=hu$, the dry-velocity convention and the local initial velocity bound, both $U$ and $U_0$ belong to $K$ almost everywhere. Thus $F(U)$ in the weak formulation is defined. [F5, given]

1.2 Fix $\varphi$ and choose $N_k$ so that $\varphi$ vanishes for $t\ge t_{N_k-1}^k$ for all sufficiently large $k$. Apply [F2] to the actual states, shared face fluxes and source terms of the scheme; its exact finite sum is zero for each such $k$. [F1, F2, given, choose]

1.3 The initial term in [F2] tends to $\int_{\mathbb R}U_0(x)\cdot\varphi(x,0)\,dx$. Indeed, on each cell-time slab touching $t=0$, the averaged test differs from $\varphi(x,0)$ by at most $C_\varphi(d_k+\tau_k)$, and the uniform state bound including the initial layer makes the sum of these quadrature errors tend to zero on the fixed compact support. The initial reconstruction convergence then gives the claimed limit. [F2, given, algebra]

1.4 The time-difference sum in [F2] differs from $\int_0^T\int \mathcal U_k\cdot\varphi_t$ by $O(\tau_k)$. Taylor's formula in time makes each difference of adjacent cell-time test averages equal to the integral of $\varphi_t$ over the current slab, up to $C_\varphi\tau_k^2$ after spatial averaging; the uniform state bound and the $O(d_k^{-1}\tau_k^{-1})$ cells/slabs meeting the support give total error $O(\tau_k)$. The omitted initial-slab integral is also $O(\tau_k)$. [F2, given, algebra]

1.5 The face-flux sum in [F2] differs from $\int_0^T\int\mathcal F_k\cdot\varphi_x$ by $O(d_k)$. For each cell, the difference of adjacent test averages is the spatial average of $\int_0^{d_k}\varphi_x(x+s,t)\,ds$; replacing this average by $\varphi_x(x,t)$ has error at most $C_\varphi d_k^2\tau_k$ per cell-time slab. The local depth and velocity bounds give $h^*\le H$, $|u^*|\le M$, and wave speeds at most $M+\sqrt{gH}$. The physical fluxes and reconstructed states are bounded; in the middle HLL branch its equivalent convex-combination formula has coefficient $\alpha\beta/(\alpha+\beta)\le\max(\alpha,\beta)$, so the face fluxes are uniformly bounded as well. The number of cells/slabs meeting the support then gives the stated total error. The source sum in [F2] is exactly $\int_0^T\int\mathcal S_k\cdot\varphi$ because $\mathcal S_k$ is constant on each slab. [F1, F2, given, algebra]

2.1 Choose a compact spatial interval containing the test support and all cells meeting it for sufficiently large $k$, and choose $T_0<T$ beyond the temporal support. On this compact rectangle the hypotheses give uniform bounds for $h_k,u_k$ through $t=0$; the interior strong limits inherit the same essential bounds. Hence $\mathcal U_k$, $U$, $F(U)$ and the products with the fixed test derivatives are uniformly bounded. Step 1.5 supplies a uniform bound for $\mathcal F_k$. For sufficiently large $k$, $d_k\le1$, and [F6] together with the local bounds on $b'$ and the depths gives a uniform bound for $\mathcal S_k$; the limit source $(0,-ghb_x)$ is bounded too. Thus the contributions of all state, flux and source integrals from the initial layer $[0,\varepsilon]$ are bounded by $C\varepsilon$, uniformly in sufficiently large $k$ and for the limit integrands. On the remaining compact rectangle with $t\ge\varepsilon$, the assumed strong convergence gives convergence of the state integral, [F4] gives convergence of the face-flux integral, and [F3] gives convergence of the source integral. Taking $k\to\infty$ for fixed $\varepsilon>0$ and then $\varepsilon\downarrow0$ proves convergence of these full integrals. Step 1.3 supplies the initial term, steps 1.4–1.5 identify the limits of the discrete sums, step 1.2 supplies the exact discrete identity, and step 1.1 its state admissibility. Passing to the limit proves the displayed weak formulation. [A1, F2, F3, F4, F5, F6, step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, given, algebra] ∎
