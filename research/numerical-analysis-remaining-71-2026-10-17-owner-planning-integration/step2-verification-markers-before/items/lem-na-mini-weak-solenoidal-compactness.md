---
id: lem-na-mini-weak-solenoidal-compactness
kind: lemma
title: "Strong L2 compactness for weakly solenoidal MINI trajectories"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 9
deps: [def-na-discrete-weak-and-exact-divergence-free-spaces, def-na-stokes-zero-mean-pressure-and-velocity-spaces, lem-na-zero-mean-of-zero-boundary-divergence, lem-na-scott-zhang-boundary-preserving-p1-interpolant, thm-na-mini-element-fortin-stability, lem-na-mini-fortin-l2-approximation, thm-pe12-discrete-aubin-lions-compactness, cor-bounded-map-into-h-one-zero-followed-by-rellich-is-compact-on-ltwo, lem-parabolic-zero-boundary-sobolev-space-is-separable, lem-separable-hilbert-bounded-sequence-weak-subsequence, thm-poincare-inequality-for-w-one-p-zero, lem-weak-lower-semicontinuity-of-the-sobolev-norm, thm-pe12-bochner-lp-completeness, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Endre Süli and Tabea Tscherpel, Fully discrete finite element approximation of unsteady flows of implicitly constituted incompressible fluids, arXiv:1804.02264v1"
      url: https://arxiv.org/pdf/1804.02264
      locator: "§4, discrete weak-compactness argument for mixed velocities; this item proves the Newtonian finite-probe version."
    - title: "Xiaoming He, Introduction and Basic Implementation for Finite Element Methods, Chapter 9: Finite elements for 2D unsteady Navier–Stokes equations"
      url: https://bpb-us-e2.wpmucdn.com/sites.mst.edu/dist/a/189/files/2023/09/Finite_Elements_Chapter_9.pdf
      locator: "§2, semidiscrete compactness context; the MINI weak-kernel and three-dimensional coefficient estimates are proved locally."
---

## Statement

Assume the Axiom of Choice. Let $D\subset\mathbb R^d$ be bounded, connected and polyhedral, $d=2$ or $3$. Let $\mathcal T_j$ be matching shape-regular meshes with $h_j\to0$, let $Z_j$ be the weak MINI divergence kernels, and let $0=t_0^j<\cdots<t_{N_j}^j=T$ have maximum step tending to zero. Suppose $U_j^n\in Z_j$, their piecewise-constant reconstructions $\overline U_j$ satisfy
$$\sup_j\left(\max_n\|U_j^n\|_{L^2}+\|\overline U_j\|_{L^2(0,T;H^1_0)}\right)<\infty,$$
and the following coefficient condition holds: for every finite $L^2$-orthonormal family $e_1,\ldots,e_m\in V_\sigma$, the $E$-valued piecewise-constant functions
$$Y_j(t)=\sum_{i=1}^m(U_j^n,\Pi_je_i)_{L^2}e_i\quad(t\in(t_{n-1}^j,t_n^j])$$
have uniformly bounded $L^2(0,T;E)$ norms and their backward difference quotients are bounded in $L^{4/3}(0,T;E)$; here $\Pi_j$ is the MINI Fortin map and $E=\operatorname{span}\{e_i\}$. Then $(\overline U_j)$ is relatively compact in $L^2(0,T;L^2(D)^d)$.

## Facts & Assumptions

**Given:** The shape-regular matching mesh family, $Z_j$, the energy bounds, the coefficient condition, and the Axiom of Choice.

[F1] $H^1_0(D)^d$ embeds compactly into $L^2(D)^d$ on bounded $D$. ([[cor-bounded-map-into-h-one-zero-followed-by-rellich-is-compact-on-ltwo]])

[F2] $\int_D\operatorname{div}z=0$ for $z\in H^1_0(D)^d$, and $b(z,q_h)=0$ for $z\in Z_j$, $q_h\in Q_j$. ([[lem-na-zero-mean-of-zero-boundary-divergence]], [[def-na-discrete-weak-and-exact-divergence-free-spaces]])

[F3] For $q\in H^1(D)$, the face-average interpolant approximates it in $L^2$; subtracting the mean gives a continuous piecewise-affine zero-mean pressure approximation. ([[lem-na-scott-zhang-boundary-preserving-p1-interpolant]], [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]])

[F4] The MINI Fortin map satisfies $b(\Pi_jv,q_h)=b(v,q_h)$ and $\|v-\Pi_jv\|_2\le Ch_j\|v\|_V$. ([[thm-na-mini-element-fortin-stability]], [[lem-na-mini-fortin-l2-approximation]])

[F5] The piecewise-constant discrete Aubin–Lions theorem gives compactness in $L^2(0,T;E)$ from a uniform $L^2(E)$ bound and an $L^{4/3}(E)$ difference-quotient bound when the time steps vanish. ([[thm-pe12-discrete-aubin-lions-compactness]])

[F6] The scalar space $H^1_0(D)$ with its Sobolev norm is a separable real Hilbert space; its finite vector product is therefore also separable and Hilbert. ([[lem-parabolic-zero-boundary-sobolev-space-is-separable]])

[F7] Poincare makes the gradient norm on $H^1_0(D)^d$ equivalent to its Sobolev norm, so a sequence bounded in $V$ is bounded in the separable Hilbert norm and weak convergence is the same for both norms. Every bounded sequence in a separable real Hilbert space has a weakly convergent subsequence. ([[thm-poincare-inequality-for-w-one-p-zero]], [[lem-separable-hilbert-bounded-sequence-weak-subsequence]])

[F8] The Sobolev norm is weakly lower semicontinuous; the equivalent gradient norm on $V$ is also weakly lower semicontinuous. ([[lem-weak-lower-semicontinuity-of-the-sobolev-norm]], [[thm-poincare-inequality-for-w-one-p-zero]])

[F9] The Bochner space $L^2(0,T;L^2(D)^d)$ is complete. ([[thm-pe12-bochner-lp-completeness]])

[A1] The compactness and subsequence extractions use the Axiom of Choice. ([[def-axiom-of-choice]])

## Proof

1.1 Consider any sequence $z_j\in Z_j$ with $\|z_j\|_V\le R$ and $h_j\to0$. By [F1], a subsequence converges strongly in $L^2$ and weakly in $H^1_0$ to some $z\in H^1_0$. For any $q\in C^\infty_c(D)$, put $q^0=q-|D|^{-1}\int_Dq$, interpolate $q^0$ by [F3], and subtract the interpolant's mean to obtain $q_j\in Q_j$ with $q_j\to q^0$ in $L^2$. Since $b(z_j,q_j)=0$ and $\int_D\operatorname{div}z_j=0$ by [F2], $\int_Dq\,\operatorname{div}z_j=\int_D(q^0-q_j)\operatorname{div}z_j\to0$. Weak convergence of the gradients gives $\operatorname{div}z=0$, hence $z\in V_\sigma$. [A1, F1, F2, F3, given, algebra]

1.2 For an $L^2$-orthonormal basis $e_1,\ldots,e_m$ of $E$, [F4] and the uniform $L^\infty L^2$ bound imply $\|P_E\overline U_j-Y_j\|_{L^\infty(0,T;E)}^2=\sum_i|(U_j^n,e_i-\Pi_je_i)_{L^2}|^2\le C_Eh_j^2.$ The coefficient condition and [F5], applied to the finite-dimensional evolution triple $E\hookrightarrow E\hookrightarrow E$, make $(Y_j)$ relatively compact in $L^2(0,T;E)$. [A1, F4, F5, given, algebra]

2.1 For each $R>0$, $K_R=\{z\in V_\sigma:\|z\|_V\le R\}$ is totally bounded in $L^2$ by [F1], so choose a finite $\epsilon/2$-net with centers $e_i\in K_R$ and let $E$ be their span. If arbitrarily fine meshes had $z_j\in Z_j$, $\|z_j\|_V\le R$, and distance at least $\epsilon$ from $E$, [A1, F1, F6, F7] would give a subsequence strongly convergent in $L^2$ and weakly in $H^1_0$. Step 1.1 puts its limit in $K_R$, and [F8] retains the norm bound; this contradicts the $\epsilon/2$-net. Thus every such $z_j$ is within $\epsilon$ of $E$ for all sufficiently large $j$. [A1, F1, F6, F7, F8, step 1.1, choose]

3.1 Let $P_E$ be the $L^2$-orthogonal projection. On times when $\|\overline U_j(t)\|_V\le R$, step 2.1 gives $\|\overline U_j-P_E\overline U_j\|_2\le\epsilon$. The measure of the remaining times is at most $R^{-2}\|\overline U_j\|_{L^2V}^2$, and there $\|\overline U_j-P_E\overline U_j\|_2\le2\sup_{j,n}\|U_j^n\|_2$. First choose $R$ large, then $\epsilon$ small; this makes the $L^2(0,T;L^2)$ projection remainder uniformly small for sufficiently large $j$. [given, step 2.1, algebra]

4.1 Given any tolerance, steps 3.1 and 1.2 approximate the tail of $(\overline U_j)$ within that tolerance by a relatively compact family $Y_j$ in $L^2(0,T;E)$. Hence the tail is totally bounded in $L^2(0,T;L^2)$; adjoining finitely many initial terms preserves total boundedness. Completeness [F9] gives relative compactness. [F5, F9, step 3.1, step 1.2, algebra] ∎
