---
id: thm-variational-fem-control-o-h2-error
kind: theorem
title: Variational control discretization has O(h2) error under primal and adjoint H2 regularity
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - cor-aubin-nitsche-h-r-plus-s-rate-under-primal-and-dual-approximation
  - cor-shape-regular-affine-fe-primal-energy-approximation
  - def-countable-choice
  - def-linear-elliptic-pde-constrained-control-problem
  - def-matching-affine-simplicial-meshes
  - thm-aubin-nitsche-l2-error-estimate-under-adjoint-regularity
  - thm-cea-quasi-optimality-for-conforming-galerkin-approximations
  - thm-first-strang-lemma-for-conforming-perturbed-galerkin
  - thm-linear-elliptic-control-existence-and-variational-inequality
  - thm-linear-elliptic-reduced-control-gradient-and-hessian
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Michael Hinze, A Variational Discretization Concept in Control Constrained Optimization
      url: "https://www.math.uni-hamburg.de/home/hinze/Psfiles/COAP0204.pdf"
      locator: "§§2–3, printed pp. 3–7: Theorem 2.4 and Theorem 3.3, including their operator consistency hypotheses and elliptic H2 assumptions."
---

## Statement

Let $q_*$ minimize the continuous distributed-control objective of [[def-linear-elliptic-pde-constrained-control-problem]] with $E=\Omega$, $U=H=L^2(\Omega)$, $Bq(v)=(q,v)_{L^2}$, and observation $J=I$. Let $q_h^v$ minimize the finite-element reduced objective over the same infinite-dimensional box $Q_{ad}$ (variational control discretization). Assume exact affine geometry and conforming P1 Galerkin state and adjoint solves on a shape-regular mesh family. Assume the actual primal and adjoint problems have uniform $H^2$ regularity and the matching primal and dual interpolation bounds of
[[cor-aubin-nitsche-h-r-plus-s-rate-under-primal-and-dual-approximation]] with $r=s=1$. Assume also that the full state and adjoint error bounds, including every Strang form/load defect and the state-error contribution to the adjoint load, satisfy
$$
\sup_{q\in Q_{ad}}\bigl(\|u_h(q)-u(q)\|_{L^2}+\|p_h(q)-p(q)\|_{L^2}\bigr)\le C h^2.
$$
The displayed uniform $L^2$ state/adjoint estimate is an explicit hypothesis here; a concrete PDE family must verify it from its actual $H^2$ regularity, matching dual approximation, and complete Strang/geometry/quadrature/load ledger. An energy error of order $h$ alone does not imply this $L^2$ bound. Then
$$
\|q_h^v-q_*\|_{L^2(E)}\le C h^2,
$$
where $C$ is independent of $h$. No such rate is asserted on a domain or coefficient class lacking the stated primal, adjoint, and defect estimates.

## Facts & Assumptions
**Given:** The continuous minimizer and variational inequality; the finite-element reduced objective and its minimizer on $Q_{ad}$; uniform control bounds; the P1 shape-regular mesh; primal and adjoint $H^2$ regularity; the matching Aubin–Nitsche hypotheses; and the full Strang defect estimates.

[F1] Under the matching primal and dual approximation bounds with $r=s=1$, the conforming state error obeys the Aubin–Nitsche $L^2$ estimate with order $h^2$ ([[cor-aubin-nitsche-h-r-plus-s-rate-under-primal-and-dual-approximation]], [[thm-aubin-nitsche-l2-error-estimate-under-adjoint-regularity]]).

[F2] Céa and the shape-regular P1 approximation supply the primal $H^1$ rate used in [F1] ([[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]], [[cor-shape-regular-affine-fe-primal-energy-approximation]]).

[F3] The Strang estimate retains every form and load defect for perturbed state and adjoint solves ([[thm-first-strang-lemma-for-conforming-perturbed-galerkin]]).

[F4] The continuous reduced gradient is strongly monotone with constant $\alpha$ ([[thm-linear-elliptic-reduced-control-gradient-and-hessian]]).

[A1] The primal and adjoint $L^2$ errors are $O(h^2)$ uniformly over $Q_{ad}$, including the adjoint-load perturbation caused by the primal state error.

## Proof

1.1 In this distributed-control setting, the adjoint gradient contribution is $B^*p=p$ under the $L^2$ pairing. Thus $g_h(q)-g(q)=p_h(q)-p(q)$. The explicit uniform $L^2$ premise [A1], including the state-error contribution to the adjoint load and every form/load defect from [F3], gives $\sup_{q\in Q_{ad}}\|g_h(q)-g(q)\|_U\le C_g h^2.$ The actual $H^2$, dual-approximation, and defect hypotheses must be used to verify [A1] for the PDE family; this proof does not infer it from an energy estimate of order $h$ alone. [A1, F1, F2, F3, given, algebra]

2.1 Put $e=q_h^v-q_*$. Strong monotonicity [F4] gives $\alpha\|e\|_U^2\le(g(q_h^v)-g(q_*),e)_U.$ The continuous variational inequality gives $(g(q_*),e)_U\ge0$. For the discrete minimizer, the feasible segment $q_h^v+t(q_*-q_h^v)$ for $0\le t\le1$ has a nonnegative right derivative at $t=0$, so $(g_h(q_h^v),e)_U\le0$. Replacing $g(q_h^v)$ by $g_h(q_h^v)$ costs at most $C_g h^2\|e\|_U$ by step 1.1. Thus $\alpha\|e\|_U^2\le C_g h^2\|e\|_U$. If $e=0$ the claim is immediate; otherwise divide by $\alpha\|e\|_U$ to get $\|e\|_U\le(C_g/\alpha)h^2$. [F4, step 1.1, given, algebra] ∎

## Remarks

The $H^2$ primal and adjoint assumptions must match the actual operator, boundary, and domain. In particular, a full-adjoint estimate is not inferred on an arbitrary Lipschitz or reentrant polygonal domain, an energy estimate of order $h$ does not replace the explicit $L^2$ estimate, and unresolved geometry or quadrature defects cannot be discarded.
