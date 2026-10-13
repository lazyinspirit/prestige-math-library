---
id: pthm-cm17-linear-elastic-equation-of-motion
kind: physics-theorem
title: "The displacement equation of the linear elastic branch: rho_0 partial_t^2 xi = rho_0 b + mu_s Laplacian xi + (lambda + mu_s) grad div xi"
status: published
origin: session
domain: physics
dependency_level: 15
deps: [post-cm17-linear-elastic-constitutive, post-cm17-momentum-balance, pthm-cm17-momentum-equation, pthm-cm17-stress-matrix-and-symmetry, def-cm-linear-elastic-constitutive-law, lem-cm-isotropic-elastic-strain-energy-positivity, def-cm-euclidean-spatial-calculus, thm-clairaut-schwarz-mixed-partials, thm-algebra-of-derivatives, def-trace-of-a-square-matrix, def-matrix-product-and-identity-matrix, def-ck-euclidean-maps-and-diffeomorphisms, def-countable-choice, def-cm17-density-and-mass, def-cm17-continuum-body-and-units]
dependency_roles:
  post-cm17-linear-elastic-constitutive: physical-assumption
  post-cm17-momentum-balance: formulation-prerequisite
  pthm-cm17-momentum-equation: physical-result
  pthm-cm17-stress-matrix-and-symmetry: physical-result
  def-cm-linear-elastic-constitutive-law: mathematical-premise
  lem-cm-isotropic-elastic-strain-energy-positivity: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-trace-of-a-square-matrix: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-countable-choice: mathematical-premise
  def-cm17-density-and-mass: formulation-prerequisite
  def-cm17-continuum-body-and-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Conditional on the adopted reference-coordinate balance and small-strain isotropic linear constitutive law: their stress divergence is exactly mu_s Laplacian xi plus (lambda+mu_s) grad div xi. This yields the displacement equation on the reference region; no exact finite-deformation identification, approximation error bound, measured modulus or solution existence is asserted."
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 11.2 (the Navier equations of linearized elasticity)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Sections 7.3 and 7.7 (Hooke's law and the 3D elastic wave equation)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) and the reference-coordinate branch of [[post-cm17-linear-elastic-constitutive]] on $I\times O$: $\xi$ is $C^2$, $\rho_0>0$ is constant, $b:=b_{\mathrm{ref}}$ is continuous, and $\lambda,\mu_s$ are constant with $\mu_s>0$ and $\lambda+2\mu_s/3>0$. Its stress is $\sigma=\lambda(\operatorname{tr}e)I_3+2\mu_s e$, $e=\tfrac12(D_X\xi+D_X\xi^{\mathsf T})$.

Then the adopted reference momentum balance

$$\rho_0\partial_t^2\xi=\rho_0b+\operatorname{div}_X\sigma\tag{M}$$

is equivalent to the **displacement equation**

$$\rho_0\,\partial_t^2\xi=\rho_0\,b+\mu_s\,\Delta\xi+(\lambda+\mu_s)\,\nabla(\operatorname{div}\xi), \tag{E}$$

equivalently componentwise
$\rho_0\partial_t^2\xi_i=\rho_0b_i+\mu_s\Delta\xi_i+(\lambda+\mu_s)\partial_i(\operatorname{div}\xi)$
for $i=1,2,3$, where $\Delta=\sum_j\partial_j^2$ and
$\operatorname{div}\xi=\sum_j\partial_j\xi_j$
([[def-cm-euclidean-spatial-calculus]]). In particular, for $b\equiv0$
equation (E) is linear with constant coefficients. The statement asserts no
solution existence, no boundary conditions and no measured modulus.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; the reference-coordinate fields and adopted linear balance (M).

[F1] Reference balance ([[post-cm17-linear-elastic-constitutive]] clause (iv)): $\rho_0\partial_t^2\xi=\rho_0b+g$, with $g_i=\sum_j\partial_{X_j}\sigma_{ij}$ on $I\times O$.

[F2] Reference constitutive law ([[post-cm17-linear-elastic-constitutive]] clauses (i)-(iii), [[def-cm-linear-elastic-constitutive-law]]): $\sigma=\lambda(\operatorname{tr}e)I_3+2\mu_s e$, $e=\tfrac12(D_X\xi+D_X\xi^{\mathsf T})$, with the stated constant coefficients and $\xi\in C^2$.

[F3] Symmetry of mixed partials ([[thm-clairaut-schwarz-mixed-partials]]): for a function of class $C^2$ on an open set of $\mathbb R^3$, the second partial derivatives commute, $\partial_j\partial_i\xi_k=\partial_i\partial_j\xi_k$.

[F4] Algebra of derivatives and matrix identities ([[thm-algebra-of-derivatives]], [[def-trace-of-a-square-matrix]], [[def-matrix-product-and-identity-matrix]], [[def-cm-euclidean-spatial-calculus]]): $\operatorname{tr}e=\operatorname{div}\xi$, $\sum_j\partial_j^2\xi_i=\Delta\xi_i$, and the product rule for the derivatives of the matrix-valued field $\sigma$.

## Proof

**Proof technique:** direct; write the adopted reference momentum equation and compute the divergence of the linear elastic stress with the commuting mixed partials.

1.1 By [F1], the adopted reference equation (M) reads $\rho_0\partial_t^2\xi=\rho_0b+g$ with $g_i=\sum_j\partial_j\sigma_{ij}$, with all derivatives taken in $X$. [given, F1, F2]

1.2 Compute the divergence of the stress: from $\sigma_{ij}=\lambda(\operatorname{tr}e)\delta_{ij}+2\mu_s e_{ij}$ of [F2], the product rule of [F4] gives $\sum_j\partial_j\sigma_{ij}=\lambda\,\partial_i(\operatorname{tr}e)+2\mu_s\sum_j\partial_j e_{ij}$. Since $\operatorname{tr}e=\sum_j\partial_j\xi_j=\operatorname{div}\xi$ by [F4], the first term is $\lambda\,\partial_i(\operatorname{div}\xi)$. For the second, $2\sum_j\partial_j e_{ij}=\sum_j\partial_j(\partial_j\xi_i+\partial_i\xi_j)=\Delta\xi_i+\partial_i(\operatorname{div}\xi)$, where the interchange of $\partial_j$ and $\partial_i$ on $\partial_i\xi_j$ uses the commuting mixed partials of [F3]. Hence $g_i=\mu_s\Delta\xi_i+(\lambda+\mu_s)\partial_i(\operatorname{div}\xi)$. [given, F2, F3, F4, algebra]

2.1 Substituting step 1.2 into step 1.1 gives the componentwise form of (E), equivalently the vector identity $\rho_0\partial_t^2\xi=\rho_0b+\mu_s\Delta\xi+(\lambda+\mu_s)\nabla(\operatorname{div}\xi)$; the equivalence with (M) follows by substituting the same stress divergence in either direction, and for $b\equiv0$ the displayed operator is linear with constant coefficients, while no solution, boundary condition or measured modulus is asserted. [step 1.1, step 1.2, algebra] ∎

## Remarks

- **Approximation status.** The reference balance is adopted in [[post-cm17-linear-elastic-constitutive]] clause (iv). A rigorous passage from a finite-strain model with an error bound is a separate approximation problem.

- **Divergence of a symmetric matrix.** The row divergence used in (M)
  coincides with the column divergence because $\sigma$ is symmetric by direct construction in this branch, so writing $\operatorname{div}\sigma$ in (E) is unambiguous.

- **Dimensions.** With $[\xi]=\ell$ and $[\rho_0]=\mu\ell^{-3}$, both sides of
  (E) have dimension $\mu\ell^{-2}\tau^{-2}$ (force per volume); the moduli
  carry $[\lambda]=[\mu_s]=\mu\ell^{-1}\tau^{-2}$
  ([[def-cm17-continuum-body-and-units]]).
