---
id: alg-ctrl1-runge-kutta-shooting-and-collocation-transcription
kind: algorithm
title: "Finite-horizon shooting and Runge–Kutta collocation transcription"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [def-ctrl1-smooth-transcription-data, def-ctrl1-control-mesh-and-piecewise-constant-parameterization, def-explicit-runge-kutta-tableau-and-stage-map, def-ctrl1-runge-kutta-tableau-and-stage-collocation, alg-bounded-adaptive-runge-kutta-controller, thm-bounded-adaptive-runge-kutta-controller-terminates, def-inequality-constrained-program-and-kkt-geometry, def-parameterized-finite-state-step-objective, thm-discrete-adjoint-gradient-recursion, thm-discrete-continuous-gradient-error-order-p]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "S. Gros and M. Diehl, Numerical Optimal Control, draft course manuscript, Chapter 13 §§13.1–13.4"
      url: "https://www.syscop.de/files/2019ss/NOC/book-NOCSE.pdf"
      locator: "Printed pp. 229–248: direct single and multiple shooting, direct collocation, quadrature costs, and path/terminal constraints."
    - title: "W. W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, Numerische Mathematik 87 (2000)"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
      locator: "Printed pp. 249–257, §§2–3: Runge–Kutta optimal-control transcription and discrete adjoint conditions."
---

## Definition

Take a mesh $0=t_0<\cdots<t_N=T$, a pointwise-defined smooth-data model from [[def-ctrl1-smooth-transcription-data]], a control parameterization from [[def-ctrl1-control-mesh-and-piecewise-constant-parameterization]], an explicit tableau from [[def-explicit-runge-kutta-tableau-and-stage-map]], and a possibly implicit tableau as defined by [[def-ctrl1-runge-kutta-tableau-and-stage-collocation]]. For each interval $[t_j,t_{j+1}]$, let $h_j=t_{j+1}-t_j$ and write $u_j\in U_c$ for its constant control. For any proposed start $X_{j,0}$, an explicit tableau forms the stages recursively:
$$X_{j,i}=X_{j,0}+h_j\sum_{k<i}a_{ik}F_{j,k},\quad t_{j,i}=t_j+c_ih_j,\quad F_{j,i}=f(t_{j,i},X_{j,i},u_j),\quad \Phi_j(X_{j,0},u_j)=X_{j,0}+h_j\sum_i b_iF_{j,i}.$$
Return one of the following finite-dimensional nonlinear programs, with the same chosen node constraints and quadrature objective in each form.

**Single shooting:** set $X_{0,0}=x_0$ and recursively impose $X_{j+1,0}=\Phi_j(X_{j,0},u_j)$; the decision variables are the $u_j$.

**Multiple shooting:** use $X_{j,0}$ and $u_j$ as decision variables, fix $X_{0,0}=x_0$, and impose $X_{j+1,0}-\Phi_j(X_{j,0},u_j)=0$.

**RK collocation:** introduce stage variables $X_{j,i}$ and impose the general collocation stage equations and endpoint equation from [[def-ctrl1-runge-kutta-tableau-and-stage-collocation]]. This includes implicit tableaus such as Gauss collocation: their stages remain coupled equality constraints in the NLP and are not required to be solved while constructing the transcription. Approximate the objective by $\sum_j h_j\sum_i b_iL(t_{j,i},X_{j,i},u_j)+\phi(X_{N,0})$; include path constraints only at their explicitly declared nodes.

For single or multiple shooting, check the pointwise domain before evaluating an explicit stage map; an unavailable stage evaluation returns a domain or evaluation failure and supplies no NLP candidate. For collocation, the stage values are decision variables, so construct the finite NLP and check each queried stage domain whenever its objective or constraint functions are evaluated; a failed query returns a failure status. This direct transcription samples actual pointwise data; an $L^\infty$ equivalence class without a specified representative is not stage-evaluable. For a single-shooting reduced objective represented as the finite state-step graph of [[def-parameterized-finite-state-step-objective]], its exact real-arithmetic reduced gradient is given by [[thm-discrete-adjoint-gradient-recursion]]. Agreement of that gradient with the continuous ODE adjoint gradient is only conditional on the weighted discrete-gradient representation and the separate state, adjoint, derivative-data, endpoint, and quadrature estimates in [[thm-discrete-continuous-gradient-error-order-p]]. An embedded adaptive RK controller may be used to produce a separate trajectory estimate, but its embedded difference is not a certified global error bound and does not define the fixed smooth NLP map above. The algorithm makes no continuous-path feasibility, convergence-rate, global-optimality, or unconditioned discrete-adjoint accuracy claim.
