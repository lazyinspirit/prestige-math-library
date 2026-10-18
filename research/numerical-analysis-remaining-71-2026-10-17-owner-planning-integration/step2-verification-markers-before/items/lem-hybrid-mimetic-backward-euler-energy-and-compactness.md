---
id: lem-hybrid-mimetic-backward-euler-energy-and-compactness
kind: lemma
title: "Energy and computed-state compactness for hybrid mimetic backward Euler"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-hybrid-mimetic-fv-scheme, def-fv-regular-simplicial-companion-family, lem-fv-conforming-companion-and-test-recovery, def-pe12-monotone-diffusion-flux, lem-pe12-outward-zero-brouwer, lem-pe12-w1p-compact-l2-embedding, lem-pe12-space-time-gradient-weak-compactness, thm-rellich-compactness-from-w-one-p-zero-to-lp, thm-pe12-discrete-aubin-lions-compactness, thm-holder-inequality-for-integrals, thm-dominated-convergence, def-axiom-of-choice, thm-reflexivity-of-lp-for-one-less-p-less-infinity, cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
axiom_use: "Assume the Axiom of Choice for Sobolev compactness, weak subsequences and Bochner integration."
sources:
  references:
    - title: "Jérôme Droniou, Finite volume schemes for diffusion equations: introduction to and review of modern methods, 2014"
      url: https://arxiv.org/pdf/1407.1567
      locator: "Complete 38-page PDF retrieved and extracted; inspected section 1.2 and sections 4–4.1. The explicit companion construction and parabolic proof are supplied locally."
---

## Statement

Assume the Axiom of Choice. Let hybrid meshes in [[def-hybrid-mimetic-fv-scheme]] form a regular simplicial companion family, with cell points equal to volume centroids, and let $0<\underline\alpha\le\alpha_{0,K}\le\overline\alpha<\infty$ uniformly. Let $p>\max(1,2d/(d+2))$, $p'=p/(p-1)$, and let $a$ have precisely the Carathéodory, growth, coercivity and monotonicity hypotheses of [[def-pe12-monotone-diffusion-flux]]. Let $f\in L^{p'}(Q)$, $Q=(0,T)\times\Omega$, and let initial cell states obey $\Pi_hU_h^0\to u_0$ strongly in $H=L^2(\Omega)$. Each finite backward-Euler step in the hybrid Definition has a solution. Initial face values can be set arbitrarily because only initial cell values occur in the time term.

On arbitrary time partitions with maximum step $\delta_h\to0$, every selection of step solutions satisfies, uniformly in $h$,
$$\max_n\|\Pi_hU_h^n\|_2^2+\sum_n\|\Pi_h(U_h^n-U_h^{n-1})\|_2^2+\sum_n\tau_n B_{h,p}(U_h^n)^p\le C.$$
Here $B_{h,p},D_{h,p},S_{h,p},G_h$ are as in [[lem-fv-conforming-companion-and-test-recovery]]. Extend $\overline U_h$ by $U_h^n$ on $(t_{n-1},t_n]$. The piecewise affine interpolation of $\Pi_hU_h^n$ has derivative bounded in $L^{p'}(0,T;V^*)$, $V=W_0^{1,p}(\Omega)$. There are a subsequence and $u\in L^p(0,T;V)\cap L^\infty(0,T;H)$ such that
$$\Pi_h\overline U_h\to u\text{ in }L^r(0,T;H)\ (1\le r<\infty)\text{ and in }L^p(Q),$$
$$E_h\overline U_h\rightharpoonup u\text{ in }L^p(0,T;V),\qquad G_h\overline U_h\rightharpoonup\nabla u\text{ in }L^p(Q;\mathbb R^d).$$
No mesh/time coupling or time-step ratio restriction is required.

## Facts & Assumptions

**Given:** AC and exactly the geometry, coefficient, data, exponent and initial convergence hypotheses above.

[F1] [[lem-fv-conforming-companion-and-test-recovery]] gives $D_{h,p}\asymp B_{h,p}$, $\|\Pi_hv\|_p+\|\Pi_hv\|_2\le CB_{h,p}(v)$, the conforming companion error $Ch^\vartheta B_{h,p}$ in $H$, and $D_{h,p}(I_hz)\le C\|z\|_V$.

[F2] [[def-hybrid-mimetic-fv-scheme]] gives the exact discrete equation, averaged flux $b_K$, and stabilization. [[def-pe12-monotone-diffusion-flux]] supplies the one-null-set growth, coercivity and monotonicity conditions. [[lem-pe12-outward-zero-brouwer]] gives a zero of a continuous outward-pointing finite-dimensional map.

[F3] [[lem-pe12-w1p-compact-l2-embedding]] gives $V\Subset H$; [[thm-rellich-compactness-from-w-one-p-zero-to-lp]] also gives $V\Subset L^p(\Omega)$. [[lem-pe12-space-time-gradient-weak-compactness]] gives weak compactness of companions once their $H$ images converge strongly. The finite-projection compactness argument for time sequences is proved in [[thm-pe12-discrete-aubin-lions-compactness]]; its conforming-state hypothesis will be replaced explicitly below by [F1].

[F4] [[thm-holder-inequality-for-integrals]] and [[thm-dominated-convergence]] supply the integral estimates and continuity of cell averages at a fixed bounded finite-dimensional argument.

## Proof

1.1 The quantity $B_{h,p}$ is a norm on the finite zero-boundary cell-face space: if it vanishes, $G_K=0$ and $\rho_{K,F}=0$, so $v_K=v_F$; connectedness and the boundary faces force every value to zero. Coercivity in [F2] and the lower stabilization bound give $\sum_K\mathcal A_{h,K}(v;v)\ge c B_{h,p}(v)^p-\|h_0\|_1$, writing $h_0$ for the flux's coercivity datum. At a fixed step the mass term paired with $v$ is bounded below by $-C_h\|\Pi_hU^{n-1}\|_2 B_{h,p}(v)$, and the source term is at most $C\|f^n\|_{p'}B_{h,p}(v)$ by [F1]. The averaged cell flux is continuous in its finite-dimensional arguments by its growth bound and dominated convergence on bounded argument sets. Thus the equation's coordinate residual is continuous and its pairing with $v$ is positive on every sufficiently large Euclidean sphere, since finite-dimensional norm equivalence and $p>1$ make the $B_{h,p}^p$ term dominate the linear terms. Brouwer [F2] gives a solution, inductively at every step. No mesh-uniform sphere radius is needed for existence. [F1, F2, F4, given, construct, algebra]


2.1 Test each step by $U^n$ and use $2(a-b)a=a^2-b^2+(a-b)^2$ in the volume-weighted cell inner product. Hölder and [F1] bound the source by $C\|f^n\|_{p'}B_{h,p}(U^n)$, which is at most $(c/2)B_{h,p}(U^n)^p+C\|f^n\|_{p'}^{p'}$: this scalar Young bound follows by maximizing $xy-(c/2)y^p$ over $y\ge0$. Multiply by $\tau_n$ and sum to any terminal index. Jensen for the cell/time averages gives $\sum_n\tau_n\|f^n\|_{p'}^{p'}\le\|f\|_{L^{p'}(Q)}^{p'}$. Coercivity contributes at worst $T\|h_0\|_1$. The initial norms are bounded by strong initialization, giving all three displayed energy bounds and the $L^p$ bound on $B_{h,p}$. [F1, F2, F4, step 1.1, algebra]


3.1 For $z\in V$, test a time step by $I_hz$. Because its cell values are the exact cell means, the mass term is exactly $\int_\Omega D_t(\Pi_hU^n)z$ and the load is exactly $\int_\Omega f^nz$. Growth and Hölder give $|\sum_K\mathcal A_{h,K}(U^n;I_hz)|\le C(\|g\|_{p'}+B_{h,p}(U^n)^{p-1})\|z\|_V$: the flux term uses $\|G_hI_hz\|_p\le C\|z\|_V$, and the stabilization term uses its weighted Hölder bound $C S_{h,p}(U^n)^{p-1}S_{h,p}(I_hz)$. Hence $\|D_t\Pi_hU^n\|_{V^*}\le C(\|f^n\|_{p'}+\|g\|_{p'}+B_{h,p}(U^n)^{p-1})$. Since $(p-1)p'=p$, step 2.1 gives the asserted derivative bound for the affine cell-state interpolation. [F1, F2, F4, step 2.1, algebra]


4.1 Fix $\varepsilon>0$. Compactness $V\Subset H$ gives a finite-dimensional subspace $Z\subset V$ and its $H$-orthogonal projection $P_Z$ such that $\|(I-P_Z)v\|_H\le\varepsilon\|v\|_V$ for all $v\in V$: take a finite $\varepsilon$-net of the $V$ unit ball's image and span its centers. By [F1], $\|(I-P_Z)\Pi_h\overline U_h\|_{L^p(H)}\le C(h^\vartheta+\varepsilon)$. Each coefficient $(\Pi_hU^n,z)_H$, $z$ in a fixed orthonormal basis of $Z$, is bounded uniformly in $n$ by step 2.1, and its affine interpolant has derivative bounded in $L^{p'}$ by step 3.1. Hölder gives its common modulus $C|t-s|^{1/p}$. Finite-grid rounding therefore makes these finitely many coefficients totally bounded in the uniform norm. Their largest nodal jumps are at most $C\delta_h^{1/p}$, so the piecewise constant coefficients have the same compactness. The projection remainder tends to zero as first $h\to0$ and then $\varepsilon\downarrow0$. Completeness of $L^p(H)$ and AC extract strong convergence there. This proves compactness for the actual cell states without falsely applying a conforming-state theorem to them. [F1, F3, F4, step 2.1, step 3.1, choose, construct]


5.1 The companions differ from the cell states by $Ch^\vartheta$ in $L^p(H)$ and are bounded in $L^p(V)$. Thus [F3] gives $u\in L^p(V)$ and weak companion convergence. The uniform cell-state $L^\infty(H)$ bound passes to $u$ by almost-everywhere $H$ convergence along a further subsequence. It upgrades strong $L^p(H)$ convergence to every finite $L^r(H)$: finite-measure Hölder treats $r<p$, while $\|v_h-u\|_{L^r(H)}^r\le(2M)^{r-p}\|v_h-u\|_{L^p(H)}^p$ treats $r\ge p$. The bounded fields $G_h\overline U_h$ have weak $L^p$ subsequences; the weak-gradient defect in [F1], integrated in time, identifies every such limit as $\nabla u$. [F1, F3, step 2.1, step 4.1, algebra]


6.1 Compactness $V\Subset L^p$ and continuous $V\to H$ give for each $\varepsilon>0$ an Ehrling estimate $\|z\|_p\le\varepsilon\|z\|_V+C_\varepsilon\|z\|_H$. Indeed, if this failed, normalize counterexamples to $\|z_j\|_p=1$, with $\|z_j\|_V\le1/\varepsilon$ and $\|z_j\|_H\to0$. Compactness in $L^p$ gives a limit of norm one, while the $H$ convergence makes that limit zero as a distribution, a contradiction. Apply this estimate to $E_h\overline U_h-u$, whose $L^p(V)$ norm is bounded and whose $L^p(H)$ norm tends to zero. It tends to zero in $L^p(Q)$ after $h\to0$ and then $\varepsilon\downarrow0$. Its $L^p(Q)$ distance from $\Pi_h\overline U_h$ is $O(h)$ by [F1]. This proves the remaining strong convergence. All arguments used only $h\to0$ and $\delta_h\to0$ separately. [F1, F3, step 5.1, algebra] ∎

