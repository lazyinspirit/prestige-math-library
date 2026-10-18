---
page: monotone-hjb-schemes-and-policy-iteration
title: "Monotone Hamilton–Jacobi–Bellman schemes and policy iteration"
status: draft
items:
  - def-na-finite-state-discounted-bellman-system
  - def-na-second-order-elliptic-semijets-and-closure
  - lem-na-convex-support-localization-and-lipschitz-dual-gradient
  - lem-na-jensen-maximum-principle-semiconvex
  - lem-na-lipschitz-critical-image-null
  - thm-na-rademacher-euclidean
  - def-na-periodic-grid-and-tensor-multilinear-interpolation
  - lem-na-discounted-bellman-policy-matrix-inverse-positive
  - lem-na-sup-convolution-semiconvexity-and-jet-transfer
  - thm-na-semiconvex-alexandrov-second-order-differentiability
  - alg-na-finite-control-howard-policy-iteration
  - def-na-first-order-hjb-cauchy-problem
  - def-na-periodic-diagonal-controlled-diffusion-hjb-problem
  - lem-na-multilinear-interpolation-positive-and-second-order-accurate
  - thm-na-elliptic-theorem-of-sums
  - alg-na-explicit-diagonal-diffusion-hjb-grid-step
  - alg-na-positive-interpolation-semilagrangian-hjb-step
  - alg-na-upwind-hjb-grid-step
  - def-na-second-order-parabolic-viscosity-solution
  - lem-na-grid-contact-localization-for-half-relaxed-limits
  - thm-na-howard-policy-iteration-monotone-improvement-termination
  - lem-na-diagonal-diffusion-discrete-initial-trace
  - lem-na-diagonal-diffusion-stencil-is-monotone
  - lem-na-elliptic-spacetime-jets-imply-parabolic-hjb-inequalities
  - lem-na-first-order-hjb-discrete-initial-trace
  - lem-na-smooth-tests-suffice-for-first-and-second-order-hjb-viscosity
  - thm-na-diagonal-diffusion-stencil-consistency
  - thm-na-positive-interpolation-hjb-step-monotone-stable-consistent
  - thm-na-upwind-hjb-grid-step-monotone-stable-consistent
  - thm-na-diagonal-diffusion-scheme-half-relaxed-limits
  - thm-na-first-order-hjb-scheme-convergence
  - cor-na-diagonal-diffusion-scheme-converges-under-comparison
  - thm-na-periodic-diagonal-hjb-second-order-comparison
  - thm-na-diagonal-diffusion-hjb-scheme-convergence
examples: []
---

This page develops three related finite-control HJB branches on the periodic unit torus and a self-contained second-order comparison chain. It imports the periodic grid and positive interpolation interfaces from [[semi-lagrangian-characteristic-transport]], the sign-reflected upwind convention from [[hyperbolic-finite-difference-methods]], and the first-order viscosity class and comparison result from [[hamilton-jacobi-equations-and-viscosity-solutions]].

## First-order Cauchy schemes

The first-order model has a nonempty compact control set, bounded jointly continuous coefficients that are uniformly Lipschitz in space and time, and continuous periodic initial data. Each numerical update uses a finite control set; a compact-control discretization must satisfy the explicit uniform Hamiltonian error on bounded momentum sets. The page defines both a positive multilinear-interpolation semi-Lagrangian Euler-footpoint update and a sign-selected upwind update. Their monotonicity, stability, smooth-test consistency, discrete initial traces, and mesh-node half-relaxed-limit passage are proved locally. The semi-Lagrangian branch requires $h^2/\tau\to0$ for its interpolation defect; the upwind branch carries its own CFL condition. The exact published first-order comparison hypotheses are checked for the periodic Hamiltonian before the relaxed limits are identified. No convergence rate is asserted.

## Discounted finite-state policy iteration

The stationary branch defines a finite state/action discounted generator Bellman system with conservative off-diagonal rates and positive discount. Each exact policy matrix is proved inverse-positive. Howard iteration uses strict improvements, retains equal-value actions, breaks maximizing ties by the least declared index, and stops within the finite number of deterministic policies when its budget is large enough. A smaller budget returns an explicit exhaustion status without a solution claim.

## Diagonal controlled diffusion

For every $d\ge1$, the second-order model has finite ordered controls, bounded periodic jointly Lipschitz $\alpha,b,f$, and uniform diagonal ellipticity $\alpha_j^a\ge\alpha_*>0$. The explicit centered-diffusion and sign-selected one-sided-drift row is admitted only under the stated diffusion-dominance and time-step CFL inequalities. In two dimensions the five-point pattern below displays its spatial neighbors; in general dimension the row uses only $i$ and $i\pm e_j$, with periodic index wrapping.

```tikz
\begin{tikzpicture}
  \draw[gray] (-1.5,0) -- (1.5,0);
  \draw[gray] (0,-1.5) -- (0,1.5);
  \fill (-1,0) circle (2pt);
  \fill (0,0) circle (2pt);
  \fill (1,0) circle (2pt);
  \fill (0,-1) circle (2pt);
  \fill (0,1) circle (2pt);
  \node[left] at (-1,0) {$U_{i-e_1}$};
  \node[above right] at (0,0) {$U_i$};
  \node[right] at (1,0) {$U_{i+e_1}$};
  \node[below] at (0,-1) {$U_{i-e_2}$};
  \node[above] at (0,1) {$U_{i+e_2}$};
\end{tikzpicture}
```

The diagram records the stencil’s five nodes in the $d=2$ case; it does not encode the coefficients or replace the row-weight proof. The page proves monotonicity, smooth consistency, and the discrete initial trace, then establishes bounded-USC/LSC comparison for the full declared coefficient class. The second-order proof uses the local semiconvex differentiability and elliptic theorem-of-sums chain, followed by a separate parabolic doubling argument. Applying this comparison to the existing conditional half-relaxed-limit corollary gives unconditional convergence and existence along an explicit admissible mesh family. General anisotropic central stencils and solution-error rates are outside the claim.

The local Alexandrov, Jensen, and theorem-of-sums arguments explicitly retain the Axiom of Choice where their selections and measure suppliers require it. The jet definition, sup-convolution transfer, and parabolic jet interface remain choice-free. All proofs remain draft authoring; native independent reviews and gates remain required.
