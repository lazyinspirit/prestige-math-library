---
id: thm-ip-2d-tv-level-set-convergence
kind: theorem
title: Two-dimensional TV level-set convergence under a source condition
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-ip-tv-dual-source-certificate
  - def-ip-tv-level-set-representatives-and-boundaries
  - def-ip-tv-variational-curvature
  - lem-ip-tv-dual-attainment-and-certificate-limit
  - lem-ip-tv-vanishing-noise-primal-compactness
  - lem-ip-tv-level-set-uniform-density-and-hausdorff
  - lem-ip-neumann-bv-sobolev-poincare
  - def-countable-choice
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-bolzano-weierstrass
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: José A. Iglesias, Gwenael Mercier, and Otmar Scherzer, A note on
        convergence of solutions of total variation regularized linear inverse
        problems, Theorems 1–2 and complete proof of Theorem 2
      url: https://arxiv.org/pdf/1711.06495
      locator: Theorem 2 and §3.1 proof architecture, with density estimates in §4
    - title: Antonin Chambolle, Vincent Duval, Gabriel Peyré, and Clarice Poon,
        Geometric properties of solutions to the total variation denoising
        problem, Theorem 1
      url: https://arxiv.org/pdf/1602.00087
      locator: Theorem 1 and complete proof for the full-space denoising case
    - title: Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes,
        version 1.6
      url: https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf
      locator: §§5.3 and 7.3–7.5, coarea, trace, and compactness
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume Countable Choice. Let $A:L^2(\Omega;\mathbb R)\to L^2(\Sigma,\mu;\mathbb R)$ be bounded and real-linear, let $f=Au^\dagger$, and suppose $u^\dagger$ is a minimum-TV exact solution with a dual source certificate $p^\dagger$, meaning $A^*p^\dagger\in\partial R(u^\dagger)$. Use $R=TV_2$ on $L^2(\mathbb R^2)$ for full-space TV; for a nonempty bounded connected Lipschitz domain use either Dirichlet TV of the zero extension or Neumann TV relative to $\Omega$. Let $\alpha_n>0$ tend to zero, let $w_n\in L^2(\Sigma,\mu;\mathbb R)$ satisfy $\|A^*\|\|w_n\|_2/\alpha_n\le\eta$, and suppose a global minimizer $u_n$ is supplied for each functional
$$u\longmapsto\tfrac12\|Au-(f+w_n)\|_2^2+\alpha_nR(u).$$
For full-space or Dirichlet TV, assume $\eta<2\sqrt\pi$; for bounded Dirichlet TV also assume $\Omega$ has global obstacle curvature $\kappa_\Omega\in L^1(\mathbb R^2;\mathbb R)$ with $\kappa_\Omega\ge g$ almost everywhere outside $\Omega$ for some real-valued $g\in L^2(\mathbb R^2\setminus\Omega;\mathbb R)$. For Neumann TV, let $C_\Omega$ be a constant satisfying $\|u-u_\Omega\|_2\le C_\Omega TV(u;\Omega)$ on $BV(\Omega)$ and assume $\eta<1/C_\Omega$. In the Neumann case with $A\mathbf1_\Omega=0$, choose the minimizers after subtracting their means.

There is a subsequence $(u_{n_k})$ and a selected minimum-TV exact solution $u_0$ such that $Au_0=f$ and, for almost every nonzero $t$, the canonical level sets of $u_{n_k}$ converge in measure to the canonical level set of $u_0$, while their canonical ambient boundaries converge in Hausdorff distance. The limit $u_0$ need not equal the initially named truth $u^\dagger$ unless the minimum-TV exact solution is unique.

## Statement references

[[def-ip-tv-dual-source-certificate|The source condition is $A^*p^\dagger\in\partial R(u^\dagger)$ at a minimum-TV exact solution.]]

[[def-ip-tv-functional-on-l2-distributional-variation|Full-space TV on L² uses the extended distributional test-field functional.]]

[[def-ip-tv-level-set-representatives-and-boundaries|Canonical levels use density-one representatives and ambient boundaries.]]

[[def-ip-tv-variational-curvature|The obstacle and relative curvature conditions use the selected boundary convention.]]

[[lem-ip-neumann-bv-sobolev-poincare|The Neumann threshold uses a specified BV Sobolev–Poincaré constant.]]

## Facts & Assumptions

**Given:** Countable Choice, the bounded linear forward map, a minimum-TV exact source-certified truth, the branch-specific parameter threshold, and supplied global regularized minimizers.

[A1] Countable Choice supplies the subsequence selections in primal compactness and the level-integral diagonal argument. ([[def-countable-choice]])

[F1] [[lem-ip-tv-vanishing-noise-primal-compactness]]: after a subsequence, $u_n$ converges weakly in $L^2$ and strongly in $L^1$ on bounded domains or locally in $L^1$ in full space to a selected minimum-TV exact solution $u_0$; any certificate at $u^\dagger$ remains a subgradient at $u_0$.

[F2] [[def-ip-tv-level-set-representatives-and-boundaries]]: use $\{u>t\}$ for $t>0$ and $\{u<t\}$ for $t<0$, with their canonical density-one representatives and ambient topological boundaries.

[F3] [[thm-tonelli-and-fubini-for-completed-product-measures]]: the layer-cake representation of $|u_n-u_0|$ may be integrated over space and levels.

[F4] [[thm-bolzano-weierstrass]]: every bounded scalar real sequence has a convergent subsequence. Applying it successively to the two coordinates gives the needed subsequence in $\mathbb R^2$, retaining the first coordinate convergence when selecting for the second.

[F5] The density supplier now proves uniform ambient two-sided density and common support for all regularized and source-certified selected exact-limit level sets, including full-space radial support and both bounded-domain boundary conventions. [[lem-ip-tv-level-set-uniform-density-and-hausdorff]]

## Proof

1.1 Apply [F1] to the supplied minimizers, retaining its subsequence, and call its limit $u_0$. Then $Au_0=f$, $R(u_0)$ is minimal among exact solutions, and $A^*p^\dagger\in\partial R(u_0)$. In bounded domains the subsequence already converges strongly in $L^1(\Omega)$. In full space, [F5] supplies a common ball containing the regularized and limit level sets for almost every nonzero level. By [F2] and the positive and negative layer-cake identities, for each fixed $n$ the integral of $|u_n|$ outside that ball is the integral over levels of the measures of those level sets outside it; Tonelli [F3] makes this integral zero. The same argument applies to $u_0$, so local $L^1$ convergence from [F1] is global $L^1$ convergence. [F5, F1, F2, F3, given, algebra]

2.1 By [F2], for each real-valued $u$ the positive and negative level sets use $\{u>t\}$ for $t>0$ and $\{u<t\}$ for $t<0$. They satisfy the pointwise layer-cake identity $$|u(x)-u_0(x)|=\int_0^\infty|\mathbf1_{\{u>t\}}-\mathbf1_{\{u_0>t\}}|\,dt+\int_{-\infty}^0|\mathbf1_{\{u<t\}}-\mathbf1_{\{u_0<t\}}|\,dt.$$ Integrating and applying [F3] gives $$\|u_n-u_0\|_1=\int_0^\infty|E_n^+(t)\mathbin\triangle E_0^+(t)|\,dt+\int_{-\infty}^0|E_n^-(t)\mathbin\triangle E_0^-(t)|\,dt.$$ The right side tends to zero by step 1.1. [F1, F2, F3, step 1.1, algebra]

3.1 Let $g_n(t)$ denote the symmetric-difference measure of the positive level sets for $t>0$ and of the negative level sets for $t<0$. Step 2.1 says $g_n\to0$ in $L^1(\mathbb R\setminus\{0\})$. Choose a further subsequence with $\sum_k\|g_{n_k}\|_1<\infty$; Tonelli implies $\sum_k g_{n_k}(t)<\infty$ for almost every nonzero $t$, hence the level sets converge in measure there. [A1, F3, step 2.1, choose, construct]

4.1 Fix a nonzero level for which step 3.1 gives measure convergence. If the limit level set is empty and infinitely many regularized level sets are nonempty, [F5] gives compact common support, so each such set has a boundary point; choose one for each index using [A1]. Its two-sided density estimate at a fixed radius $r<r_0$ forces symmetric-difference measure at least $c\pi r^2$, contradicting convergence to the empty limit. If the limit set is nonempty, it has positive measure because it is a nonempty density-one representative; measure convergence therefore rules out infinitely many empty regularized sets. Hence empty status agrees eventually, and the empty boundaries have Hausdorff distance zero by [F2]. For the remaining nonempty sets, [F5] supplies the two-sided density and support bounds. If boundary points of $E_{n_k}(t)$ stayed a fixed distance from $\partial E_0(t)$, choose them using [A1]; bounded support and [F4] give a convergent subsequence. A ball around its limit lies on one side of $E_0(t)$, while the two-sided density bound forces a fixed positive symmetric-difference measure, contradicting step 3.1. Conversely, if a boundary point of $E_0(t)$ stayed a fixed distance from every $\partial E_{n_k}(t)$, choose these points using [A1]; compact support and [F4] give a subsequence converging to $y\in\partial E_0(t)$. A connected ball around $y$ misses those boundaries for all large $k$, so each $E_{n_k}(t)$ is either full or empty there. A subsequence with one fixed status and measure convergence would make $E_0(t)$ full or empty almost everywhere on a smaller ball, contradicting that $y$ lies on the boundary of its canonical density-one representative. Thus the canonical boundaries converge in Hausdorff distance. The limit is the selected solution from [F1]; if the exact minimum-TV solution is unique it equals $u^\dagger$, and otherwise no such identification is asserted. [A1, F5, F1, F2, F4, step 3.1, choose, construct, contradiction] ∎
