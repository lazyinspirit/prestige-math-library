---
id: thm-cell-centered-no-flux-reaction-diffusion-lie-error
kind: theorem
title: No-flux rectangular TPFA Lie error by even reflection
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
aliases: []
deps:
  - def-cell-centered-rectangular-no-flux-tpfa-grid
  - def-periodic-reaction-diffusion-grid
  - thm-periodic-reaction-diffusion-lie-error-estimate
  - alg-exact-lie-reaction-diffusion-step
  - thm-quasipositive-reaction-flow-preserves-invariant-rectangle-and-mass
  - lem-xd-finite-matrix-exponential-series
justified_by: []
proof_strategy: direct
axiom_base: No choice axiom is used; the proof is a finite reflection, matrix-power-series intertwining, and an application of the periodic error theorem.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, updated author text, 2019
      url: https://raphaeleh.github.io/PUBLI/bookevol.pdf
      locator: "Chapter 9 §§9.2–9.3, PDF pp. 38–47: orthogonal cell-centered fluxes and conservative boundary treatment."
verification:
  precheck: pass
---

## Statement

Let $\Omega=\prod_{j=1}^d(0,L_j)$ and let $u\in C^1([0,T];C^4(\overline\Omega;\mathbb R^m))$ solve $u_t=D\Delta u+F(u)$ with $D=\operatorname{diag}(d_r)$, $d_r\ge0$, and range in a compact reaction-inward rectangle $R$. Assume $F\in C^2$ near $R$, homogeneous Neumann data hold, and the coordinatewise even reflection of $u$ across every face extends to a $C^1_tC^4_x$ function on the doubled torus $\prod_j(\mathbb R/2L_j\mathbb Z)$. On the uniform cell-centered grid of [[def-cell-centered-rectangular-no-flux-tpfa-grid]], start the exact reaction-then-diffusion Lie step of [[alg-exact-lie-reaction-diffusion-step]] from cell-center samples and use uniform $\tau=T/N$. Then a constant $C_T$, independent of the mesh widths and $N$, satisfies
$$
\max_{0\le n\le N}\|U^n-P_hu(t_n)\|_\infty\le C_T(\tau+h_{\max}^2),\qquad t_n=n\tau.
$$
This result is for rectangular Cartesian TPFA grids and solutions with the stated even $C^4$ boundary compatibility; it does not assert mesh-uniform accuracy for general admissible polyhedral meshes.

## Facts & Assumptions

**Given:** The rectangular no-flux TPFA grid, the periodic centered grid on the doubled torus, a smooth even-reflectable solution in $R$, and exact reaction-then-diffusion subflows.

[F1] [[def-cell-centered-rectangular-no-flux-tpfa-grid]]: the no-flux stencil uses the actual adjacent neighbor in the interior and a reflected copy of the boundary cell for a missing neighbor; $E_h$ copies each cell value evenly to the doubled grid.

[F2] [[def-periodic-reaction-diffusion-grid]]: on the doubled grid the positive stencil is the periodic centered operator with widths $h_j$.

[F3] [[thm-periodic-reaction-diffusion-lie-error-estimate]]: for a smooth periodic solution in $R$, the exact periodic Lie iterates from sampled data have maximum-norm error at most $C_T(\tau+h_{\max}^2)$ with a mesh-independent constant.

[F4] [[alg-exact-lie-reaction-diffusion-step]]: the step is the pointwise exact reaction flow followed by the exact specieswise exponential diffusion map.

[F5] [[thm-quasipositive-reaction-flow-preserves-invariant-rectangle-and-mass]]: the reaction IVP is unique and its flow is defined for all finite nonnegative times on $R$.

[F6] [[lem-xd-finite-matrix-exponential-series]]: finite matrix exponentials are defined by a convergent power series.

[A1] The even reflection in the Statement is $C^1_tC^4_x$; in particular its derivatives through the boundary interfaces match, and it is periodic on the doubled torus.

## Proof

1.1 For each coordinate define $r_j(k_j)=k_j$ if $0\le k_j<N_j$ and $r_j(k_j)=2N_j-1-k_j$ if $N_j\le k_j<2N_j$. Then $(E_hU)_k=U_{(r_j(k_j))_j}$. At an interior original index, the doubled periodic stencil uses the same two neighbors as $A_h^N$. At the left boundary, the doubled neighbor $k_j=-1$ is represented by $2N_j-1$, whose reflected index is $0$, so its value is $U_i$; the right-boundary ghost similarly equals the last cell value. Therefore $ A_{2h}^{\rm per}E_hU=E_hA_h^NU $ for every array $U$. [F1, F2, given, algebra]

2.1 From step 1.1, $(A_{2h}^{\rm per})^kE_h=E_h(A_h^N)^k$ for every integer $k\ge0$, by induction. The exponential power series [F6] then gives $e^{-\tau d_rA_{2h}^{\rm per}}E_h=E_he^{-\tau d_rA_h^N}$ for each species. The nodewise reaction flow also commutes with $E_h$: reflected copies start from identical values and solve the same IVP, so uniqueness [F5] keeps them identical. [F4, F5, F6, step 1.1, induction, algebra]

3.1 At time zero, $E_hP_hu(0)$ is exactly the sample of the even-reflected continuous initial data on the doubled torus. Step 2.1 shows that the periodic split update of this array is the even extension of the no-flux TPFA split update. Induction over $n$ therefore identifies the periodic numerical iterates with $E_hU^n$. [F1, F2, F4, step 2.1, induction]

4.1 The even-reflected function is $C^1_tC^4_x$ by [A1]. On every reflected open subrectangle, reflection preserves the Laplacian and acts only by coordinate sign changes on first derivatives; since the PDE has constant diagonal diffusion and pointwise reaction, the reflected function satisfies the same equation there. The equality extends across each interface by continuity of the function and its time and second spatial derivatives. Thus the doubled function solves the periodic problem covered by [F3]. Its samples are $E_hP_hu(t_n)$, and step 3.1 plus reflection gives $ \|E_hU^n-E_hP_hu(t_n)\|_\infty=\|U^n-P_hu(t_n)\|_\infty. $ Apply [F3] on the doubled grid, whose counts $2N_j$ are at least four, to obtain the bound. [A1, F1, F2, F3, step 3.1, algebra] ∎
