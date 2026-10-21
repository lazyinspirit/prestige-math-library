---
id: def-ip-pde-solver-admissibility-contract
kind: definition
title: Finite-element PDE solver admissibility and certificate contract
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-nonlinear-forward-map
  - def-ip-nonlinear-tikhonov-functional
  - def-matching-affine-simplicial-meshes
  - def-reference-finite-element-and-unisolvent-dofs
  - def-euclidean-inner-product
  - thm-riesz-representation-in-finite-dimensions
  - thm-nearest-point-in-a-nonempty-closed-convex-set
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Hannes Meinlschmidt, Optimization with Partial Differential Equations, complete lecture notes"
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
    - title: "Michael Hinze, A Variational Discretization Concept in Control Constrained Optimization: The Linear-Quadratic Case"
      url: "https://www.math.uni-hamburg.de/home/hinze/Psfiles/COAP0204.pdf"
    - title: "Fernando Gaspoz, Christian Kreuzer, Andreas Veeser, and Winnifried Wollner, A Posteriori Error Analysis for Optimization with PDE Constraints"
      url: "https://arxiv.org/pdf/2503.13170"
verification:
  precheck: n/a
---

## Definition

Fix an integer $d\ge2$, a bounded polyhedral open set $\Omega\subset\mathbb R^d$, a finite matching affine simplicial mesh $\mathcal T_h$ of $\Omega$, and unisolvent reference finite elements assembled on that mesh. Thus the mesh is a finite face-to-face cover by nondegenerate affine simplices with disjoint interiors, and each local finite-element degree-of-freedom map is bijective on its polynomial space. Fix coefficient spaces $\Theta_h=\mathbb R^m$, $V_h=\mathbb R^n$, and $Y_h=\mathbb R^s$ with their standard Euclidean inner products, where $m,n,s\ge1$. Let $Q_h\subseteq\Theta_h$ be nonempty, closed, and convex, and let $O_h\subseteq\Theta_h$ be open with $Q_h\subseteq O_h$.

A **finite-element PDE model** in this contract consists of a continuously differentiable residual map $R_h:O_h\times V_h\to V_h$ and a continuously differentiable observation map $G_h:O_h\times V_h\to Y_h$. It must supply a continuously differentiable state branch $S_h:O_h\to V_h$ satisfying $R_h(q,S_h(q))=0$ for every $q\in O_h$. For every $q\in Q_h$, this branch must be the specified unique admissible state and the matrix $D_uR_h(q,S_h(q))$ must be invertible. The discrete forward map is $F_h(q):=G_h(q,S_h(q))$. The unisolvent finite-element degrees of freedom identify $V_h$ with its coefficient space; all matrix transposes below are in the fixed Euclidean coefficient inner products.

For data $y^\delta\in Y_h$, reference parameter $q_0\in\Theta_h$, and $\alpha>0$, the discrete nonlinear Tikhonov objective is
$$
\Phi_h(q):=\frac12\|F_h(q)-y^\delta\|_{Y_h}^2+\frac\alpha2\|q-q_0\|_{\Theta_h}^2\qquad(q\in Q_h).
$$
Define the finite-dimensional objective before eliminating the state by
$$
J_h(q,u):=\frac12\|G_h(q,u)-y^\delta\|_{Y_h}^2+\frac\alpha2\|q-q_0\|_{\Theta_h}^2.
$$
The symbols $\nabla_uJ_h$ and $\nabla_qJ_h$ denote the Euclidean gradient vectors representing the two partial derivative functionals. At an admissible $q$, the **exact discrete adjoint** $p_h(q)\in V_h$ is the unique solution of
$$
\bigl(D_uR_h(q,S_h(q))\bigr)^T p_h(q)=\nabla_uJ_h(q,S_h(q)).
$$
The associated discrete-adjoint gradient vector is
$$
g_h(q):=\nabla_qJ_h(q,S_h(q))-\bigl(D_qR_h(q,S_h(q))\bigr)^T p_h(q).
$$
The next lemma proves that this vector is the gradient of $\Phi_h$; the definition itself asserts no minimizer exists and no gradient iteration converges.

An **admissibility predicate** is a specified finite-time test $\operatorname{adm}_h(q)$ that decides whether $q\in Q_h$ and checks the model's stated coefficient, boundary, mesh, and time-step hypotheses before a PDE solve. For an explicit time discretization, a Courant–Friedrichs–Lewy condition (CFL condition) is a method-specific bound relating the time step to the mesh and the discrete evolution operator; no universal CFL threshold is part of this definition. A true predicate result certifies that the declared model hypotheses hold for that input, not merely that a heuristic check passed.

The model must also supply an exact finite-dimensional projection routine which returns $P_{Q_h}(z)$ for a queried $z\in\Theta_h$ in finite time or reports failure only when its declared finite call budget is exhausted. The unique nearest point exists because $Q_h$ is nonempty, closed, and convex, but an operational routine for computing it is an additional part of this contract.

A solver routine with declared nonnegative state and adjoint tolerances $\tau_u,\tau_p$ and a finite solve budget must return either `failure` or approximate state and adjoint vectors $\widetilde u,\widetilde p$ together with certified finite bounds $\rho_u,\rho_p,\eta_u,\eta_p,P,L_{J,u},L_{R,u},M_q,L_{G,u}$. The residual bounds have the exact-system meaning $\|R_h(q,\widetilde u)\|_{V_h}\le\rho_u$ and $\|(D_uR_h(q,u))^T\widetilde p-\nabla_uJ_h(q,u)\|_{V_h}\le\rho_p$, where $u=S_h(q)$; both must satisfy $\rho_u\le\tau_u$ and $\rho_p\le\tau_p$. In particular, an adjoint residual evaluated at $\widetilde u$ alone does not certify $\rho_p$ unless the model also bounds the resulting state and derivative-data defects. With $u=S_h(q)$ and $p=p_h(q)$, the model must certify
$$
\|u-\widetilde u\|_{V_h}\le\eta_u,\qquad \|p-\widetilde p\|_{V_h}\le\eta_p,\qquad \|p\|_{V_h}\le P,
$$
$$
\|\nabla_qJ_h(q,u)-\nabla_qJ_h(q,\widetilde u)\|_{\Theta_h}\le L_{J,u}\eta_u,
$$
$$
\|(D_qR_h(q,u))^T-(D_qR_h(q,\widetilde u))^T\|\le L_{R,u}\eta_u,\qquad \|(D_qR_h(q,\widetilde u))^T\|\le M_q,
$$
and $\|G_h(q,u)-G_h(q,\widetilde u)\|_{Y_h}\le L_{G,u}\eta_u$. It then returns
$$
\widetilde g:=\nabla_qJ_h(q,\widetilde u)-(D_qR_h(q,\widetilde u))^T\widetilde p,\qquad \widetilde F:=G_h(q,\widetilde u),
$$
All constants and state/adjoint error bounds must be justified for the chosen model with every derivative-data, geometry, quadrature, and algebraic-solve defect retained. Certified residual bounds $\rho_u,\rho_p$ do not by themselves imply $\eta_u,\eta_p$; a separate model-valid stability estimate is required. The proposition below derives the resulting $\varepsilon_g$ and $\varepsilon_F$ bounds. An objective-evaluation routine must return in its finite budget either `failure` or an interval $[\ell_h(q),u_h(q)]$ containing the exact value $\Phi_h(q)$; `failure` is permitted only when a required state/adjoint solve fails its contract or the evaluation-call budget is exhausted. Exact evaluation is the degenerate-interval case. Projection and objective-evaluation calls consume the algorithm's finite evaluation budget. Each routine must return within its declared budget or report failure.

If a continuous model $F$ is also supplied, an optional mesh certificate $\varepsilon_{\rm mesh}$ must separately bound the claimed continuous-to-discrete error, such as $\|F_h(q)-F(q)\|$ or $\|\nabla\Phi_h(q)-\nabla\Phi(q)\|$. The state and adjoint algebraic residual certificates do not imply this mesh certificate.

## Definition references

[[def-ip-nonlinear-forward-map|Nonlinear forward maps on an open real Hilbert-space domain]]

[[def-ip-nonlinear-tikhonov-functional|Nonlinear Tikhonov functional and its domain]]

[[def-matching-affine-simplicial-meshes|Matching affine simplicial meshes and shape regularity]]

[[def-reference-finite-element-and-unisolvent-dofs|Reference finite elements and unisolvent degrees of freedom]]

[[def-euclidean-inner-product|Standard Euclidean inner product and coefficient norm]]

[[thm-nearest-point-in-a-nonempty-closed-convex-set|Existence and uniqueness of Euclidean nearest-point projections]]

[[thm-riesz-representation-in-finite-dimensions|Finite-dimensional Riesz representation]]

[[lem-ip-linear-finite-element-solve-residual-controls-state-error|Linear finite-element residual-to-state and adjoint error estimate]]

[[thm-discrete-adjoint-gradient-recursion|Exact discrete adjoint on a finite state-step graph]]

[[thm-elliptic-adjoint-reduced-gradient|Continuous elliptic PDE adjoint gradient]]

[[lem-fem-control-gradient-residual-bound|Finite-element state and adjoint error bounds for a linear elliptic control model]]

[Hannes Meinlschmidt, *Optimization with Partial Differential Equations*, complete lecture notes](https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf)

[Michael Hinze, *A Variational Discretization Concept in Control Constrained Optimization: The Linear-Quadratic Case*](https://www.math.uni-hamburg.de/home/hinze/Psfiles/COAP0204.pdf)

[Fernando Gaspoz, Christian Kreuzer, Andreas Veeser, and Winnifried Wollner, *A Posteriori Error Analysis for Optimization with PDE Constraints*](https://arxiv.org/pdf/2503.13170)

## Remarks

The algorithmic wrapper below is finite-dimensional and uses only supplied finite returns. No axiom of choice is used by its projection or finite-dimensional Riesz steps. A model-specific elliptic state/adjoint theorem may require Countable Choice, and that branch must retain its own hypotheses. The nonlinear tangential-cone and Tikhonov existence/stability results are not convergence theorems for this finite-budget procedure.
