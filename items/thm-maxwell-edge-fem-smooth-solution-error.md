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
  - def-na-zero-tangential-hcurl
  - lem-na-whitney-moments-commute-with-grad-curl-div
  - thm-dominated-convergence
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - cor-vector-valued-ftc-and-lipschitz-bound
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

Fix $T\ge0$. Let $\Omega$ be a bounded contractible Lipschitz polyhedron with a shape-regular family of matching affine tetrahedral meshes, maximum diameter $h\to0$, and mesh-aligned material interfaces. Let $\epsilon,\mu$ be time-independent symmetric uniformly positive definite bounded coefficients. In the lossless branch $\sigma=0$, let $(E,B)$ be a PEC solution of [[def-transient-maxwell-system-with-material-interfaces]] with $J_{\rm src}\in C^1([0,T];L^2(\Omega)^3)$, satisfying the stated current continuity and magnetic divergence constraints. Assume $E,E_t,E_{tt}$ are piecewise $C^1$ in space, their curls are piecewise $C^1$, and their tangential traces match across interior mesh faces and vanish on the exterior PEC boundary; assume $B(0)$ is piecewise $C^1$ with matching normal traces and $\operatorname{div}B(0)=0$. These bounds are uniform in time on $[0,T]$.

Take the semidiscrete solution of [[def-maxwell-edge-fem-semidiscretization]] with exact load moments, initialize $E_h(0)=R_hE(0)$ using the Maxwell Ritz map of [[def-maxwell-edge-ritz-projection]], and initialize $B_h(0)=B_h^0$ by [[lem-maxwell-magnetic-compatible-initial-projection]]. Write $\theta_h(t)=E_h(t)-R_hE(t)$. The Countable Choice assumption required by that projection interface is in force. Then the semidiscrete solution exists uniquely (at $T=0$, as the initialized singleton map with the unique constant-load local continuation, without a derivative assertion on the singleton) and
$$\sup_{0\le t\le T}\left(\|E_h(t)-E(t)\|_{L^2(\Omega)}+\|\operatorname{curl}(E_h(t)-E(t))\|_{L^2(\Omega)}+\|B_h(t)-B(t)\|_{L^2(\Omega)}\right)\le C_T h.$$
The constant depends on $T$, the coefficient bounds, the shape-regularity and projection bounds, and the stated piecewise smooth norms, but not on $h$. The initial magnetic projection preserves the discrete divergence constraint, and its error $B_h^0-B(0)$ is $\mu^{-1}$-orthogonal to all discrete curls. The result is a PEC semidiscrete estimate for smooth mesh-aligned data; it does not claim a rate across unresolved jumps or for nonsmooth fields.

## Facts & Assumptions


**Given:** A shape-regular PEC tetrahedral family, time-independent uniformly positive coefficients, a smooth compatible Maxwell solution and source, the edge-face semidiscrete equations, and the stated initial projections.

[A1] Countable Choice is the only choice axiom required by the bounded commuting projection interface; the proof makes no stronger choice assumption. ([[def-countable-choice]])

[F1] For $T>0$, the finite-dimensional source-driven Maxwell ODE has a unique global $C^1$ solution for continuous load moments. For $T=0$, it has a unique initialized singleton map with a unique local continuation when the load is held constant. ([[lem-maxwell-finite-dimensional-ode-existence-uniqueness]])

[F2] The exact weak PEC equations are $m(E_t,v)-(\mu^{-1}B,\operatorname{curl}v)=-(J_{\rm src},v)$ and $B_t+\operatorname{curl}E=0$; the semidiscrete equations are their edge-face Galerkin rows. ([[def-transient-maxwell-system-with-material-interfaces]], [[def-maxwell-edge-fem-semidiscretization]])

[F3] The time-independent symmetric form $a_+(u,v)=m(u,v)+a(u,v)$ defines $R_h$; it is orthogonal and best approximating in its graph norm. ([[def-maxwell-edge-ritz-projection]], [[lem-maxwell-edge-ritz-projection-well-defined]])

[F4] For the stated piecewise smooth fields, the canonical lowest-order edge interpolant gives a uniform $O(h)$ approximation in the $L^2$ and curl norms. ([[lem-maxwell-nedelec-smooth-interpolation-estimate]])

[F5] The initial magnetic field $B_h^0$ has $\operatorname{div}B_h^0=0$, is $\mu^{-1}$-orthogonal to every discrete curl after subtracting $B(0)$, and satisfies $\|B_h^0-B(0)\|_{\mu^{-1}}\le C h$. ([[lem-maxwell-magnetic-compatible-initial-projection]])

[F6] The electric and magnetic weighted $L^2$ norms are equivalent to ordinary $L^2$ under the uniform coefficient bounds. ([[def-transient-maxwell-system-with-material-interfaces]])

[F7] The relative degree-one Whitney space with zero boundary edge moments is exactly $N_h^1\cap H_0(\operatorname{curl};\Omega)$, and boundary tangential polynomial traces are determined by the boundary edge moments. ([[lem-na-whitney-averaged-pullback-moment-bounds]], [[lem-na-whitney-moments-commute-with-grad-curl-div]])

[F8] Compactly supported smooth vector tests are dense in real $L^2$; dominated convergence passes uniformly dominated difference quotients under scalar integrals. A real or finite-dimensional differentiable function with bounded derivative is Lipschitz, by the mean-value bound. ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]], [[thm-dominated-convergence]], [[cor-vector-valued-ftc-and-lipschitz-bound]])

[F9] $H_0(\operatorname{curl};\Omega)$ is a closed subspace of $H(\operatorname{curl};\Omega)$, by its definition as a graph-norm closure. ([[def-na-zero-tangential-hcurl]])

## Proof

1.1 If $T=0$, [F1] supplies the unique initialized map; Ritz best approximation [F3] and interpolation [F4] give the electric and curl error at zero, and [F5] gives the magnetic error and divergence compatibility. Norm equivalence [F6] proves the stated estimate on the singleton. Hence assume $T>0$. We first justify the closure and time derivatives; $E_t,E_{tt}$ denote the classical time derivatives. For each $u=E(t),E_t(t),E_{tt}(t)$, zero boundary tangential trace makes the boundary edge moments of $I_h^1u$ zero, so [F7] gives $I_h^1u\in V_h$. By [F4], $I_h^1u\to u$ in $H(\operatorname{curl})$ as $h\to0$, and [F9] gives $u\in H_0(\operatorname{curl})$. Uniform bounds on $E_{tt}$ give $L^2$-Lipschitz continuity of $E_t$ by the pointwise mean-value bound [F8]. For a compact smooth vector test $\psi$, dominated differentiation gives $\frac d{dt}(\operatorname{curl}E_t,\psi)=\frac d{dt}(E_t,\operatorname{curl}\psi)=(E_{tt},\operatorname{curl}\psi)=(\operatorname{curl}E_{tt},\psi)$. The uniform bound on $\operatorname{curl}E_{tt}$ and [F8], followed by $L^2$ density, therefore give $\|\operatorname{curl}E_t(t)-\operatorname{curl}E_t(s)\|_2\le K|t-s|$. The same test identities for $E$ show $E$ is graph-norm $C^1$ with derivative $E_t$: subtract the value of $E_t(s)$ from its difference quotient and use the just-proved Lipschitz bound, first in test pairings and then by density. Difference quotients of $E_t$ are uniformly graph bounded; their $L^2$ parts converge to $E_{tt}$ by dominated convergence, and their curls converge distributionally to $\operatorname{curl}E_{tt}$. Density and uniform boundedness upgrade the latter to weak $L^2$ convergence. Consequently every bounded graph-linear functional of $E_t$ is differentiable with derivative its value on $E_{tt}$. In particular the finite Ritz Gram equations give $(R_hE)_t=R_hE_t$ and $(R_hE)_{tt}=R_hE_{tt}$, with a bounded second derivative; continuity of $E_{tt}$ in the graph norm is unnecessary. [A1, F1, F3, F4, F5, F6, F7, F8, F9, given, algebra]


1.2 The initialization gives $\theta_h(0)=0$. Test the semidiscrete Ampere row at $t=0$ and subtract the exact weak row. By the curl orthogonality in [F5], $(\mu^{-1}(B_h^0-B(0)),\operatorname{curl}v_h)=0$ for every $v_h$, so $\dot E_h(0)$ is the $\epsilon$-orthogonal projection of $E_t(0)$ onto $V_h$. The zero tangential boundary trace gives zero boundary edge moments for $I_h^1E_t(0)$; [F7] therefore places this interpolant in $V_h$. Its best-approximation error is at most $\|E_t(0)-I_h^1E_t(0)\|_\epsilon\le Ch$ by [F4]. Also $\|R_hE_t(0)-E_t(0)\|_\epsilon\le Ch$ by [F3,F4]. Hence $\|\dot\theta_h(0)\|_\epsilon\le Ch$. [A1, F2, F3, F4, F5, F7, given, algebra]


2.1 Differentiate the exact weak Ampere equation in [F2] and use $B_t=-\operatorname{curl}E$. Since $\mu$ is time-independent, this gives, for every $v\in H_0(\operatorname{curl};\Omega)$, $(\epsilon E_{tt},v)+(\mu^{-1}\operatorname{curl}E,\operatorname{curl}v)=-(\partial_tJ_{\rm src},v).$ Differentiating the finite-dimensional Ampere row and using $\dot b+Ce=0$ gives the identical Galerkin equation for $E_h$: $(\epsilon \ddot E_h,v_h)+(\mu^{-1}\operatorname{curl}E_h,\operatorname{curl}v_h)=-(\partial_tJ_{\rm src},v_h).$ The solution exists by [F1]; the exact time pairings are differentiable by step 1.1, and the discrete differentiation is valid because $J_{\rm src}$ is $C^1$. [F1, F2, step 1.1, given, algebra]


3.1 Let $R_h$ be fixed in time and put $\theta_h=E_h-R_hE$. Step 1.1 justifies $(R_hE)_{tt}=R_hE_{tt}$ for its time-independent Gram matrix. Subtract the two equations in step 2.1 and use Ritz orthogonality [F3], namely $a(E-R_hE,v_h)=-m(E-R_hE,v_h)$. For every $v_h\in V_h$ this yields $m(\ddot\theta_h,v_h)+a(\theta_h,v_h)=m((I-R_h)(E_{tt}-E),v_h).$ The zero tangential boundary trace gives zero boundary edge moments for $I_h^1(E_{tt}-E)$, so [F7] places this interpolant in $V_h$. Best approximation [F3] and the canonical estimate [F4] then show uniformly in time that $\|(I-R_h)(E_{tt}-E)\|_\epsilon\le C h$. [F3, F4, F7, step 1.1, step 2.1, algebra]


4.1 Define $Q_h(t)=\tfrac12(\|\dot\theta_h(t)\|_\epsilon^2+\|\operatorname{curl}\theta_h(t)\|_{\mu^{-1}}^2)$. Test the equation in step 3.1 with $v_h=\dot\theta_h$. Symmetry gives $Q_h'(t)=m((I-R_h)(E_{tt}-E),\dot\theta_h),\qquad |Q_h'(t)|\le\|(I-R_h)(E_{tt}-E)\|_\epsilon\sqrt{2Q_h(t)}.$ For $\delta>0$, the derivative of $\sqrt{Q_h+\delta}$ has absolute value at most $Ch/\sqrt2$ by step 3.1. The scalar mean-value bound [F8], the initial estimate in step 1.2 and then $\delta\downarrow0$ give $\sqrt{Q_h(t)}\le Ch$ on $[0,T]$. The finite-dimensional mean-value bound and $\theta_h(0)=0$ also give $\sup_t\|\theta_h(t)\|_\epsilon\le T\sup_t\|\dot\theta_h(t)\|_\epsilon\le Ch$. [F4, F8, step 1.1, step 3.1, step 1.2, algebra]


5.1 By step 4.1, $\theta_h$ is $O(h)$ in the electric $L^2$ norm and its curl norm. The Ritz best-approximation estimate [F3] and interpolation estimate [F4] give $\|R_hE-E\|_{L^2}+\|\operatorname{curl}(R_hE-E)\|_{L^2}\le Ch$. The triangle inequality therefore gives the asserted electric and curl error bound. [F3, F4, step 4.1, algebra]


6.1 Subtract the exact Faraday equation from the semidiscrete magnetic row and integrate in time: $B_h(t)-B(t)=B_h^0-B(0)-\int_0^t\operatorname{curl}(E_h(s)-E(s))\,ds.$ The initial difference is $O(h)$ by [F5], and the curl error is $O(h)$ uniformly by step 5.1, so the magnetic $L^2$ error is at most $Ch+TCh$. Also $D B_h(t)=D B_h^0-\int_0^t D C e_h(s)\,ds=0$ by [F5] and the discrete identity $DC=0$ in [F2]. Norm equivalence [F6] completes the result. [F2, F5, F6, step 5.1, algebra] ∎

