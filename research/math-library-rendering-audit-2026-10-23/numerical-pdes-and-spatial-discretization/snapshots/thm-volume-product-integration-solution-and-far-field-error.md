---
id: thm-volume-product-integration-solution-and-far-field-error
kind: theorem
title: Fredholm convergence and far-field error for cell-volume product integration
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-volume-integral-scattering-model, def-volume-product-integration-scheme, lem-dyadic-cell-average-projections-converge-in-l2, thm-volume-integral-operator-is-compact, thm-volume-integral-scattering-fredholm-stability, lem-volume-far-field-map-is-bounded, thm-collectively-compact-operator-stability-and-error, def-axiom-of-choice, def-countable-choice, def-dependent-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, thm-complex-lp-completeness-and-almost-everywhere-subsequences, def-banach-space, def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, thm-compact-subset-is-closed-and-bounded, thm-metric-compactness-equivalences]
justified_by: []
proof_strategy: direct
axiom_use: "AC is used for L2 completeness, compact-metric sequential arguments, and the actual collectively compact stability theorem. The projection convergence and finite matrix representation are otherwise explicit."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and Boundary Value Problems, §3.3"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Printed pp. 60–65, collectively compact stability and Nyström solution error. Their specific quadrature rule is on C([0,1]); this theorem separately verifies every generic hypothesis for the L2 volume projections."
    - title: "Habib Ammari, Brian Fitzpatrick, and Sanghyeon Yu, Mathematical and Computational Methods in Photonics: Tutorial Notes, §1.3"
      url: "https://people.math.ethz.ch/~grsam/HS16/MCMP/Mathematical%20and%20Computational%20Methods%20in%20Photonics%20-%20Tutorial%20Notes.pdf"
      locator: "Printed pp. 12–13, generic collectively compact Fredholm solution-stability framework."
verification:
  precheck: pass
---

## Statement

Assume AC and the data of [[def-volume-integral-scattering-model]] with $0<|D|<\infty$. Let $f\in L^2(D;\mathbb C)$, let $P_N,K_N=P_NK_k,f_N=P_Nf$ and the exact cell-pair matrices be as in [[def-volume-product-integration-scheme]], and suppose $I-K_k$ is injective. Then there is $N_0$ such that for all $N\ge N_0$ the matrix $I-A^{(N)}$ is nonsingular and its reconstruction $u_N\in V_N$ is the unique solution of $(I-K_N)u_N=f_N$. If $u\in L^2(D;\mathbb C)$ solves $(I-K_k)u=f$, then for a constant $C<\infty$ independent of $N$ and $f$,
$$\|u_N-u\|_2\le C\bigl(\|(P_N-I)K_ku\|_2+\|(P_N-I)f\|_2\bigr).$$
Writing $C_F:=\|q\|_\infty\sqrt{|D|}/(4\pi)$, the exact far-field outputs obey
$$\|\mathcal F_k[u_N]-\mathcal F_k[u]\|_{C(S^2)}\le C_F C\bigl(\|(P_N-I)K_ku\|_2+\|(P_N-I)f\|_2\bigr)\longrightarrow0.$$
This gives eventual solvability and convergence for the stated cell-volume product rule; it does not assert operator-norm convergence $K_N\to K_k$ or finite-precision error bounds.

## Facts & Assumptions

**Given:** AC, $D,q,k$ as in the Statement, $f\in L^2(D;\mathbb C)$, the dyadic projections and exact product-cell rule, injectivity of $I-K_k$, and any $u\in L^2(D;\mathbb C)$ solving $(I-K_k)u=f$.

[F1] [[lem-dyadic-cell-average-projections-converge-in-l2]]: $P_N$ is an orthogonal projection, $\|P_N\|\le1$, and $P_Nv\to v$ for each $v\in L^2(D)$.

[F2] [[thm-volume-integral-operator-is-compact]]: $K_k$ is compact and bounded on $L^2(D)$ under AC.

[F3] [[thm-collectively-compact-operator-stability-and-error]]: on a nonzero Banach space, for compact $K$, bounded $K_N$ with compact closure of $\bigcup_NK_N(B_X)$, pointwise norm convergence $K_Nx\to Kx$, and injective $I-K$, all sufficiently late $I-K_N$ are invertible with a uniform inverse bound, and the solution error is $C(\|(K_N-K)u\|+\|f_N-f\|)$.

[F4] [[def-volume-product-integration-scheme]]: $K_N=P_NK_k$, $f_N=P_Nf$, and $I-K_N$ on $V_N$ has the displayed matrix $I-A^{(N)}$ in the normalized cell-indicator basis.

[F5] [[lem-volume-far-field-map-is-bounded]]: $\|\mathcal F_kv\|_\infty\le C_F\|v\|_2$.

[F6] AC supplies Countable Choice and Dependent Choice ([[def-axiom-of-choice]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]); complex $L^2(D)$ is complete under Countable Choice ([[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]), and under Countable Choice and Dependent Choice a metric space is compact exactly when it is complete and totally bounded ([[thm-metric-compactness-equivalences]]).

## Proof

**Given:** The data in the Statement.

1.1 Let $X=L^2(D;\mathbb C)$. Since $|D|>0$, $X\ne\{0\}$ (a normalized indicator of any positive-measure cell or subset is nonzero). By [F6] and AC, $X$ is a Banach space. [F2] gives compactness of $K_k$, and the assumed injectivity makes the Fredholm premise of [F3] applicable once the approximation hypotheses are checked. [F2, F3, F6, given]

1.2 By [F1] and [F4], $K_N=P_NK_k$ is bounded linear and $\|K_N\|\le\|K_k\|$. For every $v\in X$, [F1] applied to $K_kv$ gives $K_Nv=P_NK_kv\to K_kv$ in norm. [F1, F2, F4]

2.1 Let $B_X$ be the closed unit ball and $C=\overline{K_k(B_X)}$. Compactness in [F2] makes $C$ compact. Strong convergence $P_Nz\to z$ from [F1] is uniform for $z\in C$: given $\epsilon>0$, cover $C$ by finitely many $\epsilon/3$ balls with centers $z_1,\ldots,z_s$, choose $N_0$ so that $\|P_Nz_j-z_j\|<\epsilon/3$ for every center and $N\ge N_0$, then use $\|P_N\|\le1$ to get $\sup_{z\in C}\|P_Nz-z\|<\epsilon$. To show the tail union is totally bounded, start with any radius $\delta>0$, apply this uniform estimate with $\epsilon=\delta/3$, and cover $C$ by finitely many $\delta/3$ balls; each $P_Nz$ with $N\ge N_0$ then lies within $2\delta/3$ of one of their centers. Thus $\bigcup_{N\ge N_0}P_N(C)$ is totally bounded. Each of the finitely many earlier sets $P_N(C)$ is compact as a continuous image of $C$, hence totally bounded. Their union $U:=\bigcup_{N\ge1}P_N(C)$ is totally bounded. Its closure is totally bounded too: for any $\delta>0$, take a finite $\delta/2$-net of $U$; every point of $\overline U$ is within $\delta/2$ of some point of $U$, which is within $\delta/2$ of a net center. The closure is complete: every Cauchy sequence in $\overline U$ converges in the Banach space $X$ from step 1.1, and closedness of $\overline U$ keeps that limit in $\overline U$. By [F6], $\overline U$ is compact. Since $K_N(B_X)=P_NK_k(B_X)\subset P_N(C)$, the family $(K_N)$ is collectively compact in the precise sense required by [F3]. [F1, F2, F3, F6, step 1.1, algebra]

3.1 Now all hypotheses of [F3] hold by steps 1.1, 1.2, and 2.1. Therefore there are $N_0$ and a uniform $C$ such that $I-K_N$ is invertible for $N\ge N_0$ and its solutions satisfy $\|u_N-u\|_2\le C\bigl(\|(K_N-K_k)u\|_2+\|f_N-f\|_2\bigr)=C\bigl(\|(P_N-I)K_ku\|_2+\|(P_N-I)f\|_2\bigr)$. The right side tends to zero by [F1]. [F1, F3, step 1.1, step 1.2, step 2.1]

4.1 For $N\ge N_0$, the full-space solution satisfies $u_N=f_N+P_NK_ku_N\in V_N$. In the normalized cell-indicator basis of [F4], its equation is exactly $(I-A^{(N)})c=b^{(N)}$. If that finite matrix had a nonzero null vector, its corresponding nonzero element of $V_N$ would be in the kernel of $I-K_N$, contradicting invertibility; thus the matrix is nonsingular and its reconstruction is the unique operator solution. Finally [F5] gives the stated far-field bound, and step 3.1 makes its right side tend to zero. [F4, F5, step 3.1, algebra] ∎
