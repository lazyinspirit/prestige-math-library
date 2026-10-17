---
id: alg-certified-exponential-euler-etd2-step
kind: algorithm
title: Certified-action implementation of exponential Euler and ETD2
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-exponential-euler-and-etd2-step-maps
  - def-certified-matvec-and-vector-arithmetic
  - def-inner-product-norm
  - prop-standard-coordinate-inner-products
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-logarithmic-norm-for-complex-matrices
  - def-real-exponential-function-and-e
  - lem-exponential-phi-integral-representations
  - thm-phi-recurrence-and-augmented-matrix-actions
  - alg-arnoldi-exponential-and-phi-actions
  - thm-arnoldi-exponential-action-error-bound
  - thm-scaled-taylor-exponential-action-error-and-work
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Jitse Niesen and Will M. Wright, A Krylov Subspace Algorithm for Evaluating the Phi-Functions Appearing in Exponential Integrators, arXiv:0907.4631v2"
      url: "https://arxiv.org/pdf/0907.4631"
      locator: "§3.1, Arnoldi projection and matrix-vector product counts, PDF pp. 4–5; error estimates in §3.2 are not used as certified bounds."
    - title: "Marlis Hochbruck and Alexander Ostermann, Exponential Integrators, Acta Numerica 19 (2010)"
      url: "https://publikationen.bibliothek.kit.edu/1000024914/1910360"
      locator: "§4, implementation issues for matrix-function actions, PDF pp. 57–73, printed pp. 264–280."
verification:
  precheck: n/a
---

## Definition

**Inputs:** $T>0$, $d\ge1$, $A\in M_d(\mathbb C)$, a state $y\in U\subseteq\mathbb C^d$, a step $(t,h)$ with $0\le t<t+h\le T$, a method choice $E$ or $2$, a field $g:[0,T]\times U\to\mathbb C^d$, a nonnegative state-Lipschitz bound $L$ on an admitted tube containing the input and, when method $2$ is selected, the exact and computed ETD2 predictor stages, a certified semigroup bound $\|e^{sA}\|_2\le M e^{\omega s}$ for $0\le s\le h$ with $M\ge1$ and $\omega\in\mathbb R$, finite Arnoldi budgets $1\le m_0\le d$, $1\le m_1\le d+1$, $1\le m_2\le d+2$, certified field-evaluation, membership, scalar-enclosure, and vector-arithmetic providers, and a finite integer cap $C_{\max}\ge0$ for all nested backend/provider calls in this step. Each service call must terminate for the supplied finite budgets, supply a finite pre-call upper bound for its total nested call count, and return its actual call count and work counters. The step is admissible only when the initial state and every evaluated stage have certified membership in $U$ and, for method $2$, the exact ETD2 predictor also has certified membership in $U$; every needed service-call bound must fit within the remaining $C_{\max}$.

For each nonzero Arnoldi action request with matrix $B$, positive time $\tau$, and input $u$, the backend must certify a relation $BV_j=V_jH_j+\gamma v_{j+1}e_j^*+D+\Omega$ with $\beta,\gamma,\eta_i,\eta_{\rm orth},\eta_{\rm init},\nu_V,\epsilon_{\rm red},\eta_{\rm proj}\ge0$, $\|v_{j+1}\|_2=1$ when $\gamma>0$, $\|d_i\|_2\le\eta_i$, $\|\Omega\|_2\le\eta_{\rm orth}$, $\|u-\beta V_je_1\|_2\le\eta_{\rm init}$, $\|V_j\|_2\le\nu_V$, $\mu_2(B)\le\rho_B$ with $\rho_B\ge0$, and $\|H_j\|_2\le\rho_H$ with $\rho_H\ge0$. Its reduced-action certificate $\epsilon_{\rm red}$ may be used only when the reduced scaled-Taylor call has `success`: [[thm-scaled-taylor-exponential-action-error-and-work]] then bounds that call's error, and any subsequent scaling error is included. The backend also returns a final-projection error $\eta_{\rm proj}$, an actual work record, and its total nested-call count. Missing or uncertified bounds, work counters, or call counts make that request inconclusive. In exact Arnoldi, the exact relation, initial representation, and orthonormal basis supply the corresponding relation bounds.

For each positive-time request, compute the full action-error bound from [[thm-arnoldi-exponential-action-error-bound]] using
$$\epsilon_{\rm act}:=e^{\rho_B\tau}\eta_{\rm init}+\beta\tau e^{\tau\max(\rho_B,\rho_H)}\left(\gamma+\sqrt{\sum_{i=1}^j\eta_i^2}+\eta_{\rm orth}\right)+\nu_V\epsilon_{\rm red}+\eta_{\rm proj}.$$
If any required quantity or its upward-rounded arithmetic enclosure is missing, return inconclusive. Define an action request $\operatorname{Act}(k,v)$ for $k=0,1,2$ as follows. If $v=0$, return the exact zero vector with bound zero and zero action work before constructing any augmented matrix. For $k=0$ and $v\ne0$, call [[alg-arnoldi-exponential-and-phi-actions]] with matrix $A$, time $h$, input $v$, index $0$, and budget $m_0$. For $k=1,2$ and $v\ne0$, use [[thm-phi-recurrence-and-augmented-matrix-actions]]: let $J_k$ have ones on its superdiagonal, let $e_1,e_k$ be the first and last coordinate vectors in $\mathbb C^k$, set
$$B_k(hA,v):=\begin{bmatrix}hA&ve_1^*\\0&J_k\end{bmatrix},\qquad w_k:=\begin{bmatrix}0\\e_k\end{bmatrix},$$
and call [[alg-arnoldi-exponential-and-phi-actions]] with matrix $B_k(hA,v)$, time $1$, input $w_k$, index $0$, and budget $m_k$. Here $w_k\ne0$; the zero-phi-input shortcut was applied to $v$ before forming this augmented request. By [[thm-phi-recurrence-and-augmented-matrix-actions]], the top $d$ coordinates of $e^{B_k(hA,v)}w_k$ equal $\varphi_k(hA)v$. In either nonzero case compute the full action-error bound using its certified Arnoldi relation and successful reduced-action certificate, then project to the requested vector; coordinate projection cannot increase the Euclidean error. Here $\varphi_0(hA)=e^{hA}$.

The calling implementation instruments each [[alg-arnoldi-exponential-and-phi-actions]] request and its nested providers, then returns the actual work counters and total nested-call count with that action result. The work record is $W=(N_A,N_{\rm other},W_{\rm dense})$: $N_A$ counts actual products with $A$, including the upper-left $hA$ multiplication inside each augmented $B_k$ product; $N_{\rm other}$ counts products with every other matrix, including augmented and reduced matrices and final projection matrices; $W_{\rm dense}$ records the backend's declared matrix-function work for dense implementations. These are type-specific counters rather than a sum. The algorithm sums each field across every service call and returns the totals. Each backend/provider call contributes its actual nested-call count to $C$; a call may begin only when its certified pre-call upper count fits in $C_{\max}-C$. If a count is missing, inconsistent, or exceeds its pre-call bound, return inconclusive with the accrued counters. Set
$$B_h:=M e^{\max(\omega,0)h};$$
the integral representations in [[lem-exponential-phi-integral-representations]] give $\|\varphi_1(hA)\|_2\le B_h$ and $\|\varphi_2(hA)\|_2\le B_h/2$.

**Outputs:** a candidate next state when available, a nonnegative one-step action-error bound $\delta_n$ only with certified status, the actual work counters described above, total nested-call count $C$, and status `certified`, `inconclusive`, or `invalid-input`.

**Procedure:**

1. Initialize all work counters and $C$ to zero. Reject malformed dimensions, budgets, method choice, time step, semigroup/evaluation/arithmetic configuration, or a certified-false membership check for the input state or, when method $2$ is selected, the exact ETD2 predictor with `invalid-input`. If any needed membership check or service-call upper bound cannot be certified, or the global call budget cannot fit a required service call, return `inconclusive`. A failed provider response with no sound bound is `inconclusive`.
2. Evaluate $g(t,y)$ as $\widetilde q_0$ with a certified error $\eta_0$, reserving its pre-call upper count first and then adding its actual count to $C$. Request $\operatorname{Act}(0,y)$ and $\operatorname{Act}(1,\widetilde q_0)$, reserving and accumulating their call/work counters. A zero phi input is handled by $\operatorname{Act}$ before any Arnoldi call. If a request is inconclusive, return inconclusive without accepting a step. Denote the candidates by $\widehat E y$ and $\widehat P_1$ and their bounds by $\epsilon_0,\epsilon_1$.
3. For method $E$, form $\widetilde y^+=\widehat E y+h\widehat P_1$. If $\alpha_E$ bounds the scalar/vector arithmetic error in this combination and its provider call fits the remaining call cap, accumulate its counters and set
$$\delta_n=\epsilon_0+h(\epsilon_1+B_h\eta_0)+\alpha_E.$$
4. For method $2$, first form the predictor candidate $\widetilde a=\widehat E y+h\widehat P_1$ using a certified arithmetic provider and accumulate its work/call counters. Check $(t+h,\widetilde a)$ for certified membership in the domain and admitted tube before evaluating $g(t+h,\widetilde a)$. A certified-false membership result returns `invalid-input`; an inconclusive membership result returns `inconclusive`. If $\alpha_a$ bounds the predictor arithmetic error, set $\eta_a:=\epsilon_0+h(\epsilon_1+B_h\eta_0)+\alpha_a$. Evaluate $g(t+h,\widetilde a)$ as $\widetilde q_a$ with a certified error $\eta_a^g$, reserving and accumulating its service counters. Request $\operatorname{Act}(2,\widetilde q_0)$ and $\operatorname{Act}(2,\widetilde q_a)$; if either request is inconclusive, return inconclusive without accepting a step. With their action-error bounds $\epsilon_{20},\epsilon_{2a}$, form
$$\widetilde y^+=\widehat E y+h(\widehat P_1-\widehat P_{20}+\widehat P_{2a}),$$
where $\widehat P_{20}$ and $\widehat P_{2a}$ are the two $\varphi_2$ candidates. If $\alpha_2$ bounds the final combination arithmetic error and its provider call fits the remaining call cap, accumulate its counters and set
$$\delta_n=\epsilon_0+h\left(\epsilon_1+B_h\eta_0+\epsilon_{20}+\frac{B_h}{2}\eta_0+\epsilon_{2a}+\frac{B_h}{2}(L\eta_a+\eta_a^g)\right)+\alpha_2.$$
5. Before returning `certified`, verify all action calls have certified Arnoldi relations, reduced-action status `success`, and certified final projections; all field-evaluation and arithmetic bounds are finite; all returned work/call counters are present and within their pre-call bounds; and the displayed scalar calculations have certified upward enclosures. If any check fails, return `inconclusive` and do not accept the step. Return the accrued work record and $C$ with every status.

Every scalar bound computation, including $\epsilon_{\rm act}$, $B_h$, and $\delta_n$, is rounded upward with a certified enclosure; if its enclosure is missing or fails to dominate the exact expression, return inconclusive. The returned work record is the sum of the actual counts supplied by the services for the action requests and arithmetic/evaluation operations. The finite call cap and each finite nested-action budget are checked before calls; the exact mathematical map is not a zero-cost oracle.
