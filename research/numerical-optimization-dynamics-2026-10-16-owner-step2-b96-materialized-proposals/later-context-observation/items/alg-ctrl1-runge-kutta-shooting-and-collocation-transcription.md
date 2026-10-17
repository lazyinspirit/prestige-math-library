---
id: alg-ctrl1-runge-kutta-shooting-and-collocation-transcription
kind: algorithm
title: "Finite-horizon shooting and Runge–Kutta collocation transcription"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [def-ctrl1-smooth-transcription-data, def-ctrl1-control-mesh-and-piecewise-constant-parameterization, def-explicit-runge-kutta-tableau-and-stage-map, def-ctrl1-runge-kutta-tableau-and-stage-collocation, alg-finite-budget-newton-for-vector-residuals, alg-bounded-adaptive-runge-kutta-controller, thm-bounded-adaptive-runge-kutta-controller-terminates, def-inequality-constrained-program-and-kkt-geometry, def-parameterized-finite-state-step-objective, thm-discrete-adjoint-gradient-recursion, thm-discrete-continuous-gradient-error-order-p]
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

**Inputs.** Supply pointwise smooth data on $[0,T]$ from [[def-ctrl1-smooth-transcription-data]], an original mesh, a piecewise-constant control parameterization, an explicit tableau from [[def-explicit-runge-kutta-tableau-and-stage-map]] or a possibly implicit tableau from [[def-ctrl1-runge-kutta-tableau-and-stage-collocation]], one of `single-shooting`, `multiple-shooting`, or `collocation` mode, finite sets of declared path-constraint times, endpoint constraints, an objective quadrature rule, an initial decision vector $z_0$ and multiplier vector $\mu_0$, a stage residual tolerance $\tau_s\ge0$, a stage Newton correction cap $M_s\in\mathbb N_0$, and a maximum number of mesh nodes. Supply also a deterministic derivative evaluator for the resulting finite NLP. It returns the objective gradient and constraint Jacobians at a queried decision vector, using ordinary differentiation for explicit stages, implicit differentiation for exact implicit-stage roots with nonsingular stage Jacobian, and differentiation of the fixed finite stage-iteration graph for an inexact stage candidate; it returns derivative-failure if neither derivative is available. An optional trajectory-estimation request supplies the inputs of [[alg-bounded-adaptive-runge-kutta-controller]].
$$X_{j,i}=X_{j,0}+h_j\sum_{k<i}a_{ik}F_{j,k},\quad t_{j,i}=t_j+c_ih_j,\quad F_{j,i}=f(t_{j,i},X_{j,i},u_j),\quad \Phi_j(X_{j,0},u_j)=X_{j,0}+h_j\sum_i b_iF_{j,i}.$$

**Mesh and constraints.** Check $0=t_0<\cdots<t_N=T$, all declared constraint and quadrature times in $[0,T]$, and all stage times $t_j+c_i h_j$ in $[0,T]$ before querying $f$ or $L$. Insert every declared path-constraint time not already a node into the mesh, unless this exceeds the supplied node cap, in which case return `mesh-budget-exhausted`. Tie each inserted subcell's control to its original containing cell, so the parameterization is unchanged. A path constraint is evaluated at its declared times, now mesh nodes; an endpoint constraint is evaluated at its declared endpoint. This is finite sampling and does not assert continuous-path feasibility.

**Stage evaluation.** On each cell write $h_j=t_{j+1}-t_j$ and $u_j$ for its tied constant control. For an explicit tableau, form the stages recursively by the displayed equations.

For an implicit tableau, do not leave the collocation stages as outer NLP decision variables. Form the coupled slope residual
$$R_j(K;X_{j,0},u_j)_i=K_i-f\!\left(t_j+c_ih_j,X_{j,0}+h_j\sum_k a_{ik}K_k,u_j\right),\quad i=1,\ldots,s.$$
Its open domain consists of stage vectors for which every state-control input is in the smooth-data tube. Use the deterministic initial guess $K_i^{(0)}=f(t_j,X_{j,0},u_j)$ after checking that this query is defined, and call [[alg-finite-budget-newton-for-vector-residuals]] on $R_j$ with tolerance $\tau_s$ and cap $M_s$. Record its iterate, residual vector, and exact status for each cell. Only `root` supplies a stage candidate; it means $\|R_j\|_2\le\tau_s$, not an exact root unless $\tau_s=0$. Any other status returns the partial result record with `nlp_status=stage-solve-failure`, the failing cell, and no objective candidate. On a returned stage vector use $X_{j,i}=X_{j,0}+h_j\sum_k a_{ik}K_k$ and $\Phi_j=X_{j,0}+h_j\sum_i b_iK_i$. A singular stage Jacobian or failed stage query is reported, not interpreted as lack of an exact solution.

**Transcription modes.** In single shooting, the decision variables are the original-cell controls; set $X_{0,0}=x_0$ and recursively compute $X_{j+1,0}=\Phi_j(X_{j,0},u_j)$. In multiple shooting, the decision variables are node states and controls; fix $X_{0,0}=x_0$ and define defects $d_j=X_{j+1,0}-\Phi_j(X_{j,0},u_j)$. In collocation mode, use the same node/control variables and solved internal stage states; the collocation equations are solved internally by the implicit-stage procedure above. Explicit stages are likewise internal deterministic evaluations. The finite objective is $\sum_j h_j\sum_i b_iL(t_{j,i},X_{j,i},u_j)+\phi(X_{N,0})$, and the finite constraints are exactly the declared node/time constraints and endpoint constraints.

**Output.** Evaluate the supplied initial candidate and return a record containing its ordered decision variables, defect residuals, per-cell implicit-stage residuals, path/endpoint constraint residuals, KKT residuals, and objective value, when available. For equality residual $h$, inequality residual $g\le0$, and multiplier pair $(\nu,\lambda)$, report $r_p=(h,[g]_+)$, $r_d=\nabla J_N+Dh^T\nu+Dg^T\lambda$, $r_\lambda=[-\lambda]_+$, and $r_c=\lambda\odot g$. Include a model that can reevaluate these quantities at a later solver candidate. Return separate `nlp_status`, per-cell `implicit_stage_status`, optional `ivp_status`, `quadrature_status`, `mesh_status`, and `budget_status` fields. The build-stage budget field is `not-run`; the solver dispatcher fills its final value. A failed derivative evaluation leaves KKT residuals unavailable with its exact status. An unevaluated optional IVP estimate is `not-requested`; if requested, report the adaptive controller's exact finite status, not an error certificate.

This direct transcription samples pointwise data; an $L^\infty$ equivalence class without a chosen representative and sampling rule is not stage-evaluable. For a single-shooting reduced objective represented as the finite state-step graph of [[def-parameterized-finite-state-step-objective]], its exact real-arithmetic reduced gradient is given by [[thm-discrete-adjoint-gradient-recursion]]. Agreement with the continuous ODE adjoint gradient is only conditional on the weighted discrete-gradient representation and the separate state, adjoint, derivative-data, endpoint, and quadrature estimates in [[thm-discrete-continuous-gradient-error-order-p]]. The optional adaptive RK estimate is separate from the fixed NLP and its embedded difference is not a certified global error bound. The algorithm makes no continuous-path feasibility, convergence-rate, global-optimality, or unconditioned discrete-adjoint accuracy claim.

