---
id: lem-ip-interior-neumann-modes-and-kernel-forward-continuity
kind: lemma
title: Interior decay of Neumann modes and kernel forward continuity
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-ip-ntd-boundary-smoothing-for-fixed-background-collar
  - lem-ip-meyers-higher-integrability-for-interior-conductivity-solutions
  - lem-ip-mean-zero-neumann-problem-wellposedness
  - lem-ip-boundary-spectral-counting-and-sobolev-scale
  - thm-lax-milgram
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Luca Rondi, On the regularization of the inverse conductivity problem with discontinuous conductivities"
      url: "https://www.aimsciences.org/data/article/export-pdf?id=7c8383c4-b707-45b0-982e-e57301ee9e2f"
      locator: "Full Theorem 4.2 proof and Remark 4.5, printed pp.405–406; the fixed-collar spectral argument below supplies the stronger kernel-norm conclusion locally."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Fix a smooth bounded connected domain $\Omega$, an open $\Omega'\Subset\Omega$, and $0<m\le1\le M<\infty$. Let $\gamma,\gamma_0$ range over all measurable conductivities between $m$ and $M$ equal to one outside $\Omega'$. Let $(e_j,\lambda_j)$ be the mean-zero boundary spectral basis and put $w_j=1+\lambda_j$. There is $p\in(2,4)$ such that for every $L>0$,
$$\|\nabla u_{\gamma,e_j}\|_{L^p(\Omega')}\le C_Lw_j^{-L}.$$
Put $q=p/(p-2)>2$. For any fixed smoothing exponent $r\ge0$, the difference $(\mathscr R_\gamma-\mathscr R_{\gamma_0})(1-\Delta_{\partial\Omega})^{-r/2}$, extended to kill constants, is Hilbert–Schmidt and satisfies
$$\| (\mathscr R_\gamma-\mathscr R_{\gamma_0})(1-\Delta_{\partial\Omega})^{-r/2}\|_{\mathrm{HS}}\le C_r\|\gamma-\gamma_0\|_{L^q(\Omega)}.$$
It also satisfies the same bound with the coefficient $L^\infty$ norm in place of $L^q$. Constants depend only on the displayed fixed geometry, ellipticity and exponents.

## Statement references

[[lem-ip-ntd-boundary-smoothing-for-fixed-background-collar|The fixed-collar boundary estimates.]]

[[lem-ip-meyers-higher-integrability-for-interior-conductivity-solutions|Uniform interior higher integrability.]]

## Facts & Assumptions

**Given:** the fixed domain, collar, conductivity bounds and basis in the Statement.

[F1] A harmonic function with zero normal derivative in a fixed smooth collar has every integer boundary Sobolev norm bounded by its collar $H^1$ norm, by the explicit boundary difference-quotient induction in step 1.2 of the collar lemma. The spectral and chart half-order norms are equivalent. ([[lem-ip-ntd-boundary-smoothing-for-fixed-background-collar]])

[F2] The interior higher-integrability estimate is uniform for measurable conductivities: on nested fixed domains, $\|\nabla u\|_{L^p(U)}\le C\|\nabla u\|_{L^2(V)}$ for some $p>2$; the proof permits $p<4$. ([[lem-ip-meyers-higher-integrability-for-interior-conductivity-solutions]])

[F3] Weak Neumann solutions obey the uniform energy estimate, and bounded coercive energy forms solve every bounded volume-gradient functional by Lax–Milgram. ([[lem-ip-mean-zero-neumann-problem-wellposedness]], [[thm-lax-milgram]])

[F4] For every $a>(d-1)/2$, $\sum_jw_j^{-a}<\infty$. ([[lem-ip-boundary-spectral-counting-and-sobolev-scale]])

[A1] The Axiom of Choice and Countable Choice are assumed at those weak-solution, spectral, Sobolev and harmonic-analysis interfaces. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** the fixed data in the Statement.

1.1 Cover $\overline{\Omega'}$ by finitely many balls $B_\ell$ whose concentric doubled balls $2B_\ell$ have closure in $\Omega$, and put $V=\bigcup_\ell2B_\ell$. Let $v\in L^2(V;\mathbb R^d)$. On the volume-mean-zero $H^1$ space, [F3] solves $\int_\Omega\nabla z\cdot\nabla\varphi=\int_Vv\cdot\nabla\varphi$, with $\|z\|_{H^1}\le C\|v\|_2$. This solution is harmonic with zero Neumann data in the fixed boundary collar. By [F1], its boundary trace has spectral $H^k_\Delta$ norm at most $C_k\|v\|_2$ for every integer $k$. Testing this equation with the background Neumann solution $u_{1,e_j}$, and that solution's equation with $z$, yields $|\int_Vv\cdot\nabla u_{1,e_j}|=|\langle e_j,z|_{\partial\Omega}\rangle|\le C_kw_j^{-k/2}\|v\|_2$. Taking the $L^2$ dual supremum proves $\|\nabla u_{1,e_j}\|_{L^2(V)}\le C_kw_j^{-k/2}$. No boundary regularity for a negative-order prescribed flux has been assumed in this argument. [A1, F1, F3, given, construct]

2.1 The correction $w=u_{\gamma,e_j}-u_{1,e_j}$ satisfies $\int\gamma\nabla w\cdot\nabla\varphi=\int_{\Omega'}(1-\gamma)\nabla u_{1,e_j}\cdot\nabla\varphi$. Coercivity and step 1.1 give $\|\nabla w\|_{L^2(\Omega)}\le C\|\nabla u_{1,e_j}\|_{L^2(\Omega')}\le C_kw_j^{-k/2}$. Adding the background gradient on $V$ gives $\|\nabla u_{\gamma,e_j}\|_{L^2(V)}\le C_kw_j^{-k/2}$. Apply [F2] on each smooth ball $2B_\ell$, restricted to $B_\ell$, and sum the finitely many bounds to obtain the stated rapid $L^p(\Omega')$ decay, choosing $k\ge2L$. All domains and constants were fixed before choosing $\gamma$ or $j$. [F2, step 1.1, given, algebra]

3.1 The two weak Neumann equations, tested with the opposite solutions and subtracted, give $b_{ij}=\langle(\mathscr R_\gamma-\mathscr R_{\gamma_0})e_j,e_i\rangle=\int_{\Omega'}(\gamma_0-\gamma)\nabla u_{\gamma,e_j}\cdot\overline{\nabla u_{\gamma_0,e_i}}$. Hölder with $1/q+2/p=1$ and step 2.1 imply $|b_{ij}|\le C_L\|\gamma-\gamma_0\|_q(w_iw_j)^{-L}$. Alternatively, the two rapid $L^2(V)$ bounds from that step and the coefficient supremum norm imply the identical bound with $\|\gamma-\gamma_0\|_\infty$. The conjugates and sign are consistent with the self-adjoint weak energy form; only the absolute value is used. [step 2.1, given, algebra]

4.1 In the boundary basis the smoothed matrix is $b_{ij}w_j^{-r/2}$. Choose $L$ with $2L>(d-1)/2$. By [F4], $\sum_{i,j}|b_{ij}|^2w_j^{-r}\le C_L^2\|\gamma-\gamma_0\|_q^2(\sum_iw_i^{-2L})(\sum_jw_j^{-2L-r})<\infty$, with the asserted bound after taking the square root. A matrix with this sum finite defines its Hilbert–Schmidt operator: finite column sums converge in squared Hilbert–Schmidt norm and coincide with the given bounded operator on every finite spectral sum, hence on the dense span. The same proof uses the supremum-norm version of step 3.1. Extending by zero on constants preserves these norms. [F4, step 3.1, algebra] ∎
