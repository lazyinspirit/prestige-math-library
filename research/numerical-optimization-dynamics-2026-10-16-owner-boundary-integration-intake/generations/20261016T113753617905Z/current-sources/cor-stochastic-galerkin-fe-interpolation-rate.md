---
id: cor-stochastic-galerkin-fe-interpolation-rate
kind: corollary
title: Conditional spatial finite-element rate for stochastic Galerkin
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - thm-stochastic-galerkin-coercivity-and-cea
  - thm-local-finite-element-interpolation-estimates
  - def-matching-affine-simplicial-meshes
  - thm-independent-polynomial-chaos-tensors-are-orthonormal
  - def-uniformly-elliptic-affine-random-diffusion
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: Countable Choice is used by the local finite-element interpolation and stochastic Galerkin Céa suppliers.
verification: {}
sources:
  references:
    - title: Ivo Babuška, Fabio Nobile, and Raúl Tempone, A Stochastic Collocation Method for Elliptic Partial Differential Equations with Random Input Data, §§1–2
      url: https://www.ices.utexas.edu/media/reports/2005/0547.pdf
    - title: Bruno Sudret, Polynomial Chaos Expansions and Stochastic Finite Element Methods, Chapter 6
      url: https://ethz.ch/content/dam/ethz/special-interest/baug/ibk/risk-safety-and-uncertainty-dam/publications/reports/RSUQ-2015-008.pdf
---

## Statement

Assume the hypotheses of the stochastic Galerkin theorem with
$D\subset\mathbb R^d$, $d\ge2$, and suppose the
exact solution has the exact finite expansion
$$u(y)=\sum_{\alpha\in\Lambda}u_\alpha\psi_\alpha(y),\qquad u_\alpha\in H^r(D)\cap H_0^1(D),$$
for integers $k\ge0$ and $1\le\ell\le r\le k+1$. Choose a fixed
reference finite element whose polynomial space contains $\mathbb P_k$ and
whose unisolvent degrees of freedom are bounded on $W^{\ell,2}$ of the
reference cell; let its reference interpolant reproduce $\mathbb P_k$ and
define local interpolants by affine pullback as in
[[thm-local-finite-element-interpolation-estimates]]. Let
$\{\mathcal T_h\}$ be a shape-regular family of matching affine simplicial
meshes as in [[def-matching-affine-simplicial-meshes]], with maximum cell
diameter $h$, and assume for each mesh that a globally conforming spatial
interpolant $I_h$ maps these coefficients into its finite-element space,
restricts cellwise to those local interpolants, and preserves the zero boundary
condition. These are the generic bounded-degree-of-freedom hypotheses of the
local estimate. Then for the stochastic Galerkin solution
$U_{\Lambda,h}$,
$$\|u-U_{\Lambda,h}\|_{L^2_\rho(H_0^1(D))} \le \frac{a^*}{a_*}\,C h^{r-1} \left(\sum_{\alpha\in\Lambda}|u_\alpha|_{H^r(D)}^2\right)^{1/2}.$$
The regularity and finite-expansion assumptions are explicit; this is not a
general spatial rate for arbitrary random solutions.

## Facts & Assumptions

**Given:** Uniform ellipticity, the exact finite expansion and coefficient regularity above, a shape-regular mesh, and a globally conforming interpolant with the stated cell restrictions.

[F1] [[thm-stochastic-galerkin-coercivity-and-cea]] gives the Galerkin error bounded by $(a^*/a_*)$ times best approximation in the tensor space.

[F2] [[thm-local-finite-element-interpolation-estimates]] with $p=2$, $m=1$, the fixed reference space containing $\mathbb P_k$, bounded degrees of freedom on $W^{\ell,2}$, and $\ell\le r\le k+1$ gives $|v-I_Kv|_{W^{1,2}(K)}\le Ch_K^{r-1}|v|_{W^{r,2}(K)}$. The generic theorem uses the boundedness hypothesis directly; the corollary does not infer nodal boundedness from point evaluation.

[F3] [[thm-independent-polynomial-chaos-tensors-are-orthonormal]] gives the orthonormal finite random basis.

## Proof

1.1 Define $W_h(y)=\sum_{\alpha\in\Lambda}\psi_\alpha(y)I_hu_\alpha$. Each interpolated coefficient belongs to the spatial finite-element subspace, so $W_h\in\mathcal V_{\Lambda,h}$. By [F3], orthogonality in the random variable gives $\|u-W_h\|_{L^2_\rho(V)}^2 =\sum_{\alpha\in\Lambda}\|u_\alpha-I_hu_\alpha\|_V^2.$ [F3, given]

1.2 For each coefficient and cell $K$, [F2] gives $|u_\alpha-I_Ku_\alpha|_{W^{1,2}(K)} \le C h_K^{r-1}|u_\alpha|_{W^{r,2}(K)}$. Square, sum over the mesh cells, and use $h_K\le h$ to obtain $\|u_\alpha-I_hu_\alpha\|_V \le C h^{r-1}|u_\alpha|_{H^r(D)}$. This uses the assumed cellwise conformity and disjoint cell interiors. [F2, given, algebra]

2.1 Square the bounds from step 1.2, sum over the finite $\Lambda$, and use step 1.1 to get $\|u-W_h\|_{L^2_\rho(V)} \le Ch^{r-1}(\sum_\alpha|u_\alpha|_{H^r(D)}^2)^{1/2}$. Then [F1] bounds the Galerkin error by $(a^*/a_*)$ times this particular approximation error, proving the claim. [F1, step 1.1, step 1.2, algebra] ∎
