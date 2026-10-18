---
id: thm-tpfa-discrete-rellich-and-physical-gradient-closure
kind: theorem
title: "Discrete TPFA Rellich compactness and physical weak gradients"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-tpfa-harmonic-face-scheme, def-fv-regular-simplicial-companion-family, lem-fv-conforming-companion-and-test-recovery, lem-pe12-w1p-compact-l2-embedding, lem-pe12-space-time-gradient-weak-compactness, thm-reflexivity-of-lp-for-one-less-p-less-infinity, cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence, def-axiom-of-choice]
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

Assume the Axiom of Choice. Let TPFA-admissible meshes also form a regular simplicial companion family, with homogeneous Dirichlet data and fixed $0<\lambda_*\le\lambda_K\le\lambda^*$. If cell vectors $v_h$ satisfy $\sup_h\|v_h\|_{E_h}<\infty$, there are a subsequence and $v\in H_0^1(\Omega)$ such that $\Pi_hv_h\to v$ strongly in $L^2(\Omega)$, and the gradients of the conforming companions converge weakly to $\nabla v$ in $L^2$.

There is also an explicit physical weak-gradient reconstruction. Let $P_{K,F}$ be the pyramid with vertex $x_K$ and base $\overline F$, ignoring its measure-zero boundary. For $F=K|L$ put $\mathcal D_F=P_{K,F}\cup P_{L,F}$, fix the normal $n=n_{K,F}$, and define
$$\mathcal G_hv=d\frac{v_L-v_K}{d_F}n\quad\hbox{on }\mathcal D_F.$$
On a boundary pyramid put $\mathcal G_hv=-dv_Kn_{K,F}/d_{K,F}$. These regions partition $\Omega$ up to null sets. Along the same subsequence $\mathcal G_hv_h\rightharpoonup\nabla v$ in $L^2(\Omega;\mathbb R^d)$, and
$$\|\mathcal G_hv_h\|_2^2=d\left(\sum_{F=K|L}\frac{|F|}{d_F}|v_L-v_K|^2+\sum_{F\in\mathcal F_{\rm bdy}}\frac{|F|}{d_{K,F}}|v_K|^2\right)\le\frac d{\lambda_*}\|v_h\|_{E_h}^2.$$
The dimension factor $d$ is essential. This physical gradient differs from the face-copy bookkeeping gradient in the TPFA Definition; no identification of that separate copy space with $\Omega$ is asserted.

## Facts & Assumptions

**Given:** AC, the stated refining meshes, positive coefficient bounds, and energy-bounded zero-boundary cell states.

[F1] [[def-tpfa-harmonic-face-scheme]] gives $d_F=d_{K,F}+d_{L,F}$ and $\lambda_*\le\lambda_F^{\rm harm}\le\lambda^*$, so its energy is uniformly equivalent to the unweighted face energy.

[F2] [[lem-fv-conforming-companion-and-test-recovery]] bounds companions in $W_0^{1,2}$ and their $L^2$ distance from cell states by $ChD_{h,2}$. [[lem-pe12-w1p-compact-l2-embedding]] gives compactness of $H_0^1\to L^2$; reflexive weak subsequences are supplied by [[thm-reflexivity-of-lp-for-one-less-p-less-infinity]] and [[cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence]]. The gradient-closed-range argument is also proved in [[lem-pe12-space-time-gradient-weak-compactness]].

[F3] [[def-fv-regular-simplicial-companion-family]] gives convex cells, fans, a uniformly bounded face count and $\operatorname{diam}K\le h$.

## Proof

1.1 Assign the interior face value $v_F=(d_{L,F}v_K+d_{K,F}v_L)/d_F$ and the boundary face value zero. Then $v_F-v_K=d_{K,F}(v_L-v_K)/d_F$ and $v_F-v_L=-d_{L,F}(v_L-v_K)/d_F$. Summing both incident terms gives $D_{h,2}(v)^2=\sum_{F=K|L}|F||v_L-v_K|^2/d_F+\sum_{F\in\mathcal F_{\rm bdy}}|F||v_K|^2/d_{K,F}$. Thus [F1] bounds $D_{h,2}$ by $\lambda_*^{-1/2}\|v\|_{E_h}$. [F1, given, construct, algebra]


2.1 By [F2], the companions are bounded in $H_0^1$, and hence have a subsequence weakly converging there and strongly converging in $L^2$ to some $v\in H_0^1$. Their gradients weakly converge to $\nabla v$: integration against smooth tests passes the weak derivative identity to the limit, or equivalently the gradient is a bounded linear map on $H_0^1$. Their $L^2$ distance from $\Pi_hv_h$ tends to zero by $h\to0$ and step 1.1. This proves the claimed strong state convergence and companion-gradient assertion. [F2, step 1.1, given]


2.2 Convexity and the cell point in the interior make each cell the union of its face pyramids with disjoint interiors. Orthogonality makes their volumes $|P_{K,F}|=|F|d_{K,F}/d$, so $|\mathcal D_F|=|F|d_F/d$. Multiplying each squared reconstruction value by its physical region volume gives exactly the displayed norm identity, and [F1] proves its bound. [F1, F3, step 1.1, algebra]


3.1 Let $\phi$ be any smooth vector field on a neighborhood of $\overline\Omega$, and write $\phi_F$ for its face mean. The face-oriented finite sum $\sum_{F=K|L}|F|(v_L-v_K)n_{K,F}\cdot\phi_F-\sum_{F\in\mathcal F_{\rm bdy}}|F|v_Kn_{K,F}\cdot\phi_F$ is exactly $-\int_\Omega\Pi_hv\,\operatorname{div}\phi$, by the divergence formula in each cell and face cancellation. Replacing each $\phi_F$ by the mean of $\phi$ over the corresponding diamond or boundary pyramid changes this sum by at most $Ch\|\nabla\phi\|_\infty\sum_F|F||\Delta_Fv|$. Cauchy–Schwarz bounds that last face sum by $D_{h,2}(v)(\sum_F|F|d_F)^{1/2}$, taking boundary $d_F=d_{K,F}$. The second factor equals $(d|\Omega|)^{1/2}$. By step 2.2 the modified sum is $\int\mathcal G_hv\cdot\phi$. Hence the weak-gradient defect tends to zero. [F1, F3, step 1.1, step 2.2, algebra]


4.1 The norm bound in step 2.2 supplies a weakly convergent subsequence of physical gradients. Steps 2.1 and 3.1 identify its distributional limit as $\nabla v$. Smooth compactly supported tests determine the $L^2$ field uniquely, so every weak subsequence on the extracted state subsequence has that limit, giving the asserted weak convergence. [F2, step 2.1, step 2.2, step 3.1] ∎

