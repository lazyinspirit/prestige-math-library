---
id: thm-maxwell-edge-fem-smooth-solution-error
kind: theorem
title: Smooth PEC edge finite element Maxwell error from compatible projections
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps:
  - def-transient-maxwell-system-with-material-interfaces
  - def-maxwell-edge-fem-semidiscretization
  - lem-maxwell-finite-dimensional-ode-existence-uniqueness
  - def-maxwell-edge-ritz-projection
  - lem-maxwell-edge-ritz-projection-well-defined
  - lem-maxwell-nedelec-smooth-interpolation-estimate
  - lem-maxwell-magnetic-compatible-initial-projection
  - lem-na-whitney-averaged-pullback-moment-bounds
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
      locator: "§§1.1–1.3, printed pp. 1–6: lowest-order edge and face spaces, commuting moments, and smooth interpolation estimates; the transient Ritz-energy argument is proved locally."
    - title: "Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element exterior calculus: from Hodge theory to numerical stability"
      url: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf
      locator: "§§3.3 and 5.2–5.5, printed pp. 22–24 and 50–57: bounded cochain projections and lowest-order Whitney spaces; §5.5 is only an outline and is not treated as a completed proof."
verification:
  precheck: pass
---

## Statement

Let $\Omega$ be a bounded contractible Lipschitz polyhedron with a shape-regular family of matching affine tetrahedral meshes, maximum diameter $h\to0$, and mesh-aligned material interfaces. Let $\epsilon,\mu$ be time-independent symmetric uniformly positive definite bounded coefficients. Let $(E,B)$ be a PEC solution of [[def-transient-maxwell-system-with-material-interfaces]] with $J_{\rm src}\in C^1([0,T];L^2(\Omega)^3)$, satisfying the stated current continuity and magnetic divergence constraints. Assume $E,E_t,E_{tt}$ are piecewise $C^1$ in space, their curls are piecewise $C^1$, and their tangential traces match across interior mesh faces and vanish on the exterior PEC boundary; assume $B(0)$ is piecewise $C^1$ with matching normal traces and $\operatorname{div}B(0)=0$. These bounds are uniform in time on $[0,T]$. Assume also that $E\in C^2([0,T];H_0(\operatorname{curl};\Omega))$, where the PEC space is the closure-defined space in [[def-na-zero-tangential-hcurl]].

Take the semidiscrete solution of [[def-maxwell-edge-fem-semidiscretization]] with exact load moments, initialize $E_h(0)=R_hE(0)$ using the Maxwell Ritz map of [[def-maxwell-edge-ritz-projection]], and initialize $B_h(0)=B_h^0$ by [[lem-maxwell-magnetic-compatible-initial-projection]]. Write $\theta_h(t)=E_h(t)-R_hE(t)$. The Countable Choice assumption required by that projection interface is in force. Then the semidiscrete solution exists uniquely and
$$\sup_{0\le t\le T}\left(\|E_h(t)-E(t)\|_{L^2(\Omega)}+\|\operatorname{curl}(E_h(t)-E(t))\|_{L^2(\Omega)}+\|B_h(t)-B(t)\|_{L^2(\Omega)}\right)\le C_T h.$$
The constant depends on $T$, the coefficient bounds, the shape-regularity and projection bounds, and the stated piecewise smooth norms, but not on $h$. The initial magnetic projection preserves the discrete divergence constraint, and its error $B_h^0-B(0)$ is $\mu^{-1}$-orthogonal to all discrete curls. The result is a PEC semidiscrete estimate for smooth mesh-aligned data; it does not claim a rate across unresolved jumps or for nonsmooth fields.

## Facts & Assumptions


**Given:** A shape-regular PEC tetrahedral family, time-independent uniformly positive coefficients, a smooth compatible Maxwell solution and source, the edge-face semidiscrete equations, and the stated initial projections.

[A1] Countable Choice is the only choice axiom required by the bounded commuting projection interface; the proof makes no stronger choice assumption. ([[def-countable-choice]])

[F1] The finite-dimensional source-driven Maxwell ODE has a unique global solution for continuous load moments. ([[lem-maxwell-finite-dimensional-ode-existence-uniqueness]])

[F2] The exact weak PEC equations are $m(E_t,v)-(\mu^{-1}B,\operatorname{curl}v)=-(J_{\rm src},v)$ and $B_t+\operatorname{curl}E=0$; the semidiscrete equations are their edge-face Galerkin rows. ([[def-transient-maxwell-system-with-material-interfaces]], [[def-maxwell-edge-fem-semidiscretization]])

[F3] The time-independent symmetric form $a_+(u,v)=m(u,v)+a(u,v)$ defines $R_h$; it is orthogonal and best approximating in its graph norm. ([[def-maxwell-edge-ritz-projection]], [[lem-maxwell-edge-ritz-projection-well-defined]])

[F4] For the stated piecewise smooth fields, the canonical lowest-order edge interpolant gives a uniform $O(h)$ approximation in the $L^2$ and curl norms. ([[lem-maxwell-nedelec-smooth-interpolation-estimate]])

[F5] The initial magnetic field $B_h^0$ has $\operatorname{div}B_h^0=0$, is $\mu^{-1}$-orthogonal to every discrete curl after subtracting $B(0)$, and satisfies $\|B_h^0-B(0)\|_{\mu^{-1}}\le C h$. ([[lem-maxwell-magnetic-compatible-initial-projection]])

[F6] The electric and magnetic weighted $L^2$ norms are equivalent to ordinary $L^2$ under the uniform coefficient bounds. ([[def-transient-maxwell-system-with-material-interfaces]])

[F7] The relative degree-one Whitney space with zero boundary edge moments is exactly $N_h^1\cap H_0(\operatorname{curl};\Omega)$, and boundary tangential polynomial traces are determined by the boundary edge moments. ([[lem-na-whitney-averaged-pullback-moment-bounds]], [[lem-na-whitney-moments-commute-with-grad-curl-div]])

## Proof

1.1 Differentiate the exact weak Ampere equation in [F2] and use $B_t=-\operatorname{curl}E$. Since $\mu$ is time-independent, this gives, for every $v\in H_0(\operatorname{curl};\Omega)$, $(\epsilon E_{tt},v)+(\mu^{-1}\operatorname{curl}E,\operatorname{curl}v)=-(\partial_tJ_{\rm src},v).$ Differentiating the finite-dimensional Ampere row and using $\dot b+Ce=0$ gives the identical Galerkin equation for $E_h$: $(\epsilon \ddot E_h,v_h)+(\mu^{-1}\operatorname{curl}E_h,\operatorname{curl}v_h)=-(\partial_tJ_{\rm src},v_h).$ The solution exists by [F1], and the differentiation is valid because $J_{\rm src}$ is $C^1$. [F1, F2, given, algebra]

1.2 The initialization gives $\theta_h(0)=0$. Test the semidiscrete Ampere row at $t=0$ and subtract the exact weak row. By the curl orthogonality in [F5], $(\mu^{-1}(B_h^0-B(0)),\operatorname{curl}v_h)=0$ for every $v_h$, so $\dot E_h(0)$ is the $\epsilon$-orthogonal projection of $E_t(0)$ onto $V_h$. The zero tangential boundary trace gives zero boundary edge moments for $I_h^1E_t(0)$; [F7] therefore places this interpolant in $V_h$. Its best-approximation error is at most $\|E_t(0)-I_h^1E_t(0)\|_\epsilon\le Ch$ by [F4]. Also $\|R_hE_t(0)-E_t(0)\|_\epsilon\le Ch$ by [F3,F4]. Hence $\|\dot\theta_h(0)\|_\epsilon\le Ch$. [A1, F2, F3, F4, F5, F7, given, algebra]

2.1 Let $R_h$ be fixed in time and put $\theta_h=E_h-R_hE$. Its linearity and time-independent coefficients imply $(R_hE)_{tt}=R_hE_{tt}$. Subtract the two equations in step 1.1 and use Ritz orthogonality [F3], namely $a(E-R_hE,v_h)=-m(E-R_hE,v_h)$. For every $v_h\in V_h$ this yields $m(\ddot\theta_h,v_h)+a(\theta_h,v_h)=m((I-R_h)(E_{tt}-E),v_h).$ The zero tangential boundary trace gives zero boundary edge moments for $I_h^1(E_{tt}-E)$, so [F7] places this interpolant in $V_h$. Best approximation [F3] and the canonical estimate [F4] then show uniformly in time that $\|(I-R_h)(E_{tt}-E)\|_\epsilon\le C h$. [F3, F4, F7, step 1.1, algebra]

3.1 Define $Q_h(t)=\tfrac12(\|\dot\theta_h(t)\|_\epsilon^2+\|\operatorname{curl}\theta_h(t)\|_{\mu^{-1}}^2)$. Test the equation in step 2.1 with $v_h=\dot\theta_h$. Symmetry gives $Q_h'(t)=m((I-R_h)(E_{tt}-E),\dot\theta_h),\qquad |Q_h'(t)|\le\|(I-R_h)(E_{tt}-E)\|_\epsilon\sqrt{2Q_h(t)}.$ For $\delta>0$, divide by $2\sqrt{Q_h+\delta}$ and integrate. Step 2.1 and the initial bound in step 1.2 yield $\sqrt{Q_h(t)}\le Ch$ on $[0,T]$ after letting $\delta\downarrow0$. Since $\theta_h(0)=0$, integration of $\dot\theta_h$ also gives $\sup_t\|\theta_h(t)\|_\epsilon\le Ch$. [F4, step 2.1, step 1.2, algebra]

4.1 By step 3.1, $\theta_h$ is $O(h)$ in the electric $L^2$ norm and its curl norm. The Ritz best-approximation estimate [F3] and interpolation estimate [F4] give $\|R_hE-E\|_{L^2}+\|\operatorname{curl}(R_hE-E)\|_{L^2}\le Ch$. The triangle inequality therefore gives the asserted electric and curl error bound. [F3, F4, step 3.1, algebra]

5.1 Subtract the exact Faraday equation from the semidiscrete magnetic row and integrate in time: $B_h(t)-B(t)=B_h^0-B(0)-\int_0^t\operatorname{curl}(E_h(s)-E(s))\,ds.$ The initial difference is $O(h)$ by [F5], and the curl error is $O(h)$ uniformly by step 4.1, so the magnetic $L^2$ error is at most $Ch+TCh$. Also $D B_h(t)=D B_h^0-\int_0^t D C e_h(s)\,ds=0$ by [F5] and the discrete identity $DC=0$ in [F2]. Norm equivalence [F6] completes the result. [F2, F5, F6, step 4.1, algebra] ∎
