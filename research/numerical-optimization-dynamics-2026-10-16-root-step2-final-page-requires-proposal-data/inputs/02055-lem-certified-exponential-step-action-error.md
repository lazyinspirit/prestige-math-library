---
id: lem-certified-exponential-step-action-error
kind: lemma
title: Certified action bounds control one exponential-integrator step
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-exponential-euler-and-etd2-step-maps
  - alg-certified-exponential-euler-etd2-step
  - alg-arnoldi-exponential-and-phi-actions
  - lem-exponential-phi-integral-representations
  - thm-phi-recurrence-and-augmented-matrix-actions
  - thm-arnoldi-exponential-action-error-bound
  - def-logarithmic-norm-for-complex-matrices
  - def-real-exponential-function-and-e
  - thm-exponential-is-strictly-increasing
  - lem-exponential-series-of-a-bounded-operator
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - def-inner-product-norm
  - prop-standard-coordinate-inner-products
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-scaled-taylor-exponential-action-error-and-work
  - thm-complex-numbers-are-the-real-coordinate-plane
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-linearity-of-the-integral
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jitse Niesen and Will M. Wright, A Krylov Subspace Algorithm for Evaluating the Phi-Functions Appearing in Exponential Integrators, arXiv:0907.4631v2"
      url: "https://arxiv.org/pdf/0907.4631"
      locator: "§3.1, Arnoldi action formula, PDF pp. 4–5."
    - title: "Marlis Hochbruck and Alexander Ostermann, Exponential Integrators, Acta Numerica 19 (2010)"
      url: "https://publikationen.bibliothek.kit.edu/1000024914/1910360"
      locator: "§4, matrix-function actions and implementation errors, PDF pp. 57–73, printed pp. 264–280."
---

## Statement

Suppose [[alg-certified-exponential-euler-etd2-step]] returns certified status with per-action, field-evaluation, arithmetic, and semigroup bounds as in its Definition. Let $\Psi_h^E$ or $\Psi_h^2$ be the corresponding exact map of [[def-exponential-euler-and-etd2-step-maps]], and let $\widetilde\Psi_h$ be the returned candidate map. Then the algorithm's reported value satisfies
$$\|\widetilde\Psi_h(y)-\Psi_h(y)\|_2\le\delta_n.$$

For the algorithm's semigroup data, $B_h:=M e^{\max(\omega,0)h}$ satisfies
$$\|\varphi_1(hA)\|_2\le B_h,\qquad \|\varphi_2(hA)\|_2\le B_h/2.$$
For every admissible input whose services obey the declared finite-termination, pre-call upper-count, and valid returned-count/work-record contracts, the algorithm terminates with one of its stated statuses. It returns a total nested-call count $0\le C\le C_{\max}$, and each component of its work record is the sum of the actual corresponding service counters accrued before return. These are counts of the declared work, without a wall-clock bound.

## Facts & Assumptions

**Given:** A certified algorithm run and the exact method map with the same input data. For the termination and accounting clause, take any admissible input with the finite-service, pre-call upper-count, and valid returned-count/work-record contracts in the Statement.

[F1] [[thm-phi-recurrence-and-augmented-matrix-actions]]: for $k=1,2$, the top block of $e^{B_k(hA,v)}w_k$ is exactly $\varphi_k(hA)v$.

[F2] [[thm-arnoldi-exponential-action-error-bound]]: for positive action time $\tau$, a certified relation bounds the action error by an initial-mismatch term, the residual integral, the reduced-action error multiplied by $\|V\|_2$, and the final-projection error.

[F3] [[alg-certified-exponential-euler-etd2-step]], [[def-logarithmic-norm-for-complex-matrices]]: each nonzero action request supplies $\rho_B\ge\max(0,\mu_2(B))$, $\rho_H\ge\|H\|_2$, $\eta_{\rm init}$, $\nu_V\ge\|V\|_2$, and certified Arnoldi/reduced/projection data; its action bound is $e^{\rho_B\tau}\eta_{\rm init}+\beta\tau e^{\tau\max(\rho_B,\rho_H)}(\gamma+\sqrt{\sum_i\eta_i^2}+\eta_{\rm orth})+\nu_V\epsilon_{\rm red}+\eta_{\rm proj}$. Here $\mu_2$ is the logarithmic norm. For $k\ge1$, the candidate’s top $d$ coordinates approximate $\varphi_k(hA)v$ and coordinate projection cannot increase Euclidean error.

[F4] [[def-exponential-euler-and-etd2-step-maps]]: the exact maps are $\Psi_h^E=e^{hA}y+h\varphi_1(hA)g(t,y)$ and $\Psi_h^2=e^{hA}y+h[(\varphi_1-\varphi_2)g(t,y)+\varphi_2g(t+h,a_h)]$.

[F5] [[lem-exponential-phi-integral-representations]]: $\varphi_1(hA)=\int_0^1e^{(1-\theta)hA}d\theta$ and $\varphi_2(hA)=\int_0^1\theta e^{(1-\theta)hA}d\theta$, with componentwise matrix integrals.

[F7] [[def-inner-product-norm]], [[prop-standard-coordinate-inner-products]], [[def-operator-norm-on-a-finite-dimensional-inner-product-space]], and [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: $\|Vw\|_2\le\|V\|_2\|w\|_2$, and induced matrix norms bound actions on vectors.

[F8] [[lem-exponential-series-of-a-bounded-operator]]: $\|e^{sH}\|_2\le e^{s\|H\|_2}$ for $s\ge0$.

[F9] [[thm-exponential-is-strictly-increasing]]: the scalar exponential is increasing, so certified upper bounds on exponents give upper bounds on their exponentials.

[F10] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: coordinate functionals satisfy $|e_j^*w|\le\|w\|_2$ for unit coordinate vectors.

[F11] [[thm-scaled-taylor-exponential-action-error-and-work]] and [[alg-arnoldi-exponential-and-phi-actions]]: `reduced_action_status=success` requires a successful scaled-Taylor call; its returned error bound is valid by the theorem, and for $k\ge1$ the certified scaling error is added to form $\epsilon_{\rm red}$. Thus the reduced-action premise required by [F2] is met whenever the outer algorithm accepts a request.

[F12] [[thm-complex-numbers-are-the-real-coordinate-plane]], [[prop-standard-coordinate-inner-products]], and [[def-inner-product-norm]]: the componentwise map $\Phi_d(v)=(\operatorname{Re}v_0,\operatorname{Im}v_0,\ldots,\operatorname{Re}v_{d-1},\operatorname{Im}v_{d-1})$ is real-linear and satisfies $\|\Phi_d(v)\|_{\mathbb R^{2d}}^2=\sum_{j<d}|v_j|^2=\|v\|_2^2$. Thus [[thm-norm-inequality-for-the-vector-valued-integral]] applies to continuous complex-vector curves through this norm-preserving realification. Componentwise linearity ([[thm-linearity-of-the-integral]]) permits a fixed matrix/vector action to pass through these integrals. The exponential curves are continuous by [[lem-exponential-series-of-a-bounded-operator]].

[F13] [[alg-certified-exponential-euler-etd2-step]]: the procedure has a finite sequence of method branches, initializes its work record and nested-call counter to zero, starts each service only when its pre-call upper count fits the remaining cap, adds each returned actual count and work record, and returns the accrued counters with every status.

[A1] The field-evaluation errors, Lipschitz constant, semigroup bound, and arithmetic errors used by the algorithm are valid upper bounds; for ETD2, the exact and computed predictors lie in the common admitted tube where the Lipschitz bound applies.

## Proof

1.1 For a nonzero action request, [F11] makes the scaled-Taylor output certificate a valid $\epsilon_{\rm red}$; put $c(s)=e^{sH}\beta e_1$ in [F2]. By [F8] and $\rho_H\ge\|H\|_2$, $\|c(s)\|_2\le\beta e^{s\rho_H}$; [F10] gives $|e_j^*c(s)|\le\|c(s)\|_2$. Since $\rho_B\ge\mu_2(B)$, [F9] bounds the initial term in [F2] by $e^{\rho_B\tau}\eta_{\rm init}$ and its integral by $\beta\tau e^{\tau\max(\rho_B,\rho_H)}(\gamma+\sqrt{\sum_i\eta_i^2}+\eta_{\rm orth})$. The reduced and final projection terms are at most $\nu_V\epsilon_{\rm red}+\eta_{\rm proj}$ by [F7]. Thus [F3]'s $\epsilon_{\rm act}$ bounds the full exponential-action error. For a zero input, the algorithm returns the exact zero action with bound zero. [A1, F2, F3, F7, F8, F9, F10, F11, algebra]

1.2 For $0\le\theta\le1$, put $s=(1-\theta)h$. Then $0\le s\le h$ and $\omega s\le\max(\omega,0)h$: for $\omega\ge0$ this follows from $s\le h$, and for $\omega<0$ it follows from $s\ge0$. The semigroup bound in [A1] and scalar monotonicity [F9] therefore give $\|e^{(1-\theta)hA}\|_2\le M e^{\omega s}\le B_h$. For each unit vector $v\in\mathbb C^d$, [F5] and componentwise linearity in [F12] yield $\varphi_1(hA)v=\int_0^1e^{(1-\theta)hA}v\,d\theta$ and the analogous identity with weight $\theta$ for $\varphi_2$. These curves are continuous by [F12]. Apply the norm inequality in [F12] and the matrix-action inequality in [F7]: the two norms are at most $B_h\int_0^1d\theta=B_h$ and $B_h\int_0^1\theta d\theta=B_h/2$. Taking the operator-norm maximum over unit vectors in [F7], valid since $d\ge1$ is an input condition, proves both asserted phi bounds. [A1, F5, F7, F9, F12, algebra]

2.1 For exponential Euler, the exact formula [F4] applies $e^{hA}$ to $y$ and $h\varphi_1(hA)$ to $g(t,y)$. [F3] supplies action-error bounds for $e^{hA}y$ and the full augmented action whose top block is $\varphi_1(hA)\widetilde q_0$ by [F1]; coordinate projection cannot increase its error. Replacing $g(t,y)$ by $\widetilde q_0$ changes the phi action by at most $B_h\eta_0$ by step 1.2 and [A1]. Multiplication by $h$ and the certified combination error $\alpha_E$ give the exponential-Euler $\delta_n$. [F1, F3, F4, A1, step 1.2, algebra]

3.1 For ETD2, the predictor's difference from the exact predictor $a_h(t,y)$ is at most $\epsilon_0+h(\epsilon_1+B_h\eta_0)+\alpha_a=\eta_a$ by the triangle inequality, using the exponential-Euler estimate from step 2.1. Therefore the exact stage forcing differs from the evaluated $\widetilde q_a$ by at most $L\eta_a+\eta_a^g$, using [A1]. [A1, F3, F4, step 2.1, algebra]

4.1 Using the phi bounds proved in step 1.2, in the final ETD2 update, the $\varphi_1$ action at $g(t,y)$ contributes at most $\epsilon_1+B_h\eta_0$; the $\varphi_2$ action at $g(t,y)$ contributes at most $\epsilon_{20}+(B_h/2)\eta_0$; and the stage $\varphi_2$ action contributes at most $\epsilon_{2a}+(B_h/2)(L\eta_a+\eta_a^g)$. Each phi action certificate follows from [F1] and step 1.1. The exponential action contributes $\epsilon_0$. Multiplying the three phi terms by $h$, adding the certified final arithmetic error $\alpha_2$, and applying the triangle inequality gives exactly the ETD2 $\delta_n$ in [F3]. [F1, F3, F4, A1, step 1.2, step 3.1, algebra]


5.1 Under the stated service contracts, each started backend/provider call terminates, including every call nested inside an Arnoldi or reduced-action request. Outside these services the procedure has a fixed finite sequence of branches: at most two action requests for method $E$ and four for method $2$, together with finitely many field, membership, enclosure, and vector-arithmetic requests. A missing certificate or insufficient pre-call allowance returns immediately, and every started service returns in finite time by its contract, so the entire algorithm terminates. For the counters, begin with $C=0$ and $W=0$. Before a service starts, its certified upper count $b$ satisfies $b\le C_{\max}-C$; its valid returned actual count $c$ obeys $0\le c\le b$, so the update gives $0\le C+c\le C_{\max}$. Induction over the finitely many completed top-level services proves the count bound, with their nested work already included in their returned records. At each such update, the algorithm also adds the actual service work record componentwise to $W$. The same finite induction makes each component exactly the sum of its accrued actual counters; an early return retains these accrued totals. Zero-input action shortcuts contribute zero action work. This proves termination and the advertised accounting without adding calls or presuming that a missing mathematical certificate succeeds. [given, F13, induction, algebra] ∎
