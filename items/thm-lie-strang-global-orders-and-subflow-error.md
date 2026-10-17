---
id: thm-lie-strang-global-orders-and-subflow-error
kind: theorem
title: "Lie and Strang splitting have global orders one and two, with separate subflow errors"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - cor-exponential-reciprocal-and-positivity
  - cor-mean-value-theorem
  - def-additive-ode-and-partition
  - def-exact-split-flows-lie-strang-and-bracket
  - lem-lie-strang-local-error-expansions
  - thm-derivative-of-exponential
  - thm-exponential-is-strictly-increasing
  - thm-global-error-from-one-step-defect-and-stability
  - thm-gronwall-integral-inequality
  - prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation
  - thm-norm-inequality-for-the-vector-valued-integral
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer, Geometric Numerical Integration, Lecture 2: Symplectic Integrators"
      url: "https://www.unige.ch/~hairer/poly_geoint/week2.pdf"
      locator: "§5, Lie–Trotter and Strang splitting and their global orders, PDF pp. 12–14."
    - title: "Gilbert Strang, On the Construction and Comparison of Difference Schemes"
      url: "https://epubs.siam.org/doi/pdf/10.1137/0705041"
      locator: "The symmetric product's second-order accuracy and comparison of splitting methods, printed pp. 509–513 (PDF pp. 3–7)."
---

## Statement

Let $a,b\in C^3(U,\mathbb R^d)$ define the additive IVP of [[def-additive-ode-and-partition]] and have exact subflows on a common compact convex tube over $[0,T]$. Assume $a,b$ are Lipschitz there with constants $L_a,L_b$, and the exact solution, all split stages, and all numerical states remain in that tube with positive margin. For all sufficiently small $h=T/N$ and exact initial data, the exact Lie and Strang split maps of [[def-exact-split-flows-lie-strang-and-bracket]] satisfy
$$\max_{0\le n\le N}\|y_n^{\rm Lie}-y(t_n)\|_2\le C_1h,\qquad \max_{0\le n\le N}\|y_n^{\rm Strang}-y(t_n)\|_2\le C_2h^2.$$
The constants may depend on the tube, the fields, and $T$. For approximate subflows, suppose $\|\widehat\Phi_c^s(u)-\Phi_c^s(u)\|_2\le\epsilon_c(s)$ for $c\in\{a,b\}$ and every admitted starting state $u$. If all approximate compositions stay in the tube, their composed one-step maps are Lipschitz with constant $1+\widehat Lh$ for some $\widehat L\ge0$, and
$$\epsilon_b(h)+\exp(L_bh)\epsilon_a(h)=O(h^2)$$
for Lie and
$$\epsilon_a(h/2)+\exp(L_ah/2)\epsilon_b(h)+\exp((L_a/2+L_b)h)\epsilon_a(h/2)=O(h^3)$$
for Strang, then the same respective global orders hold. These additional conditions keep subflow-solver errors separate from splitting errors.

## Facts & Assumptions

**Given:** The finite-dimensional fields, interval, exact and numerical paths, and tube hypotheses in the Statement.

[F1] [[lem-lie-strang-local-error-expansions]]: the exact Lie split has a uniform one-step defect $O(h^2)$ and the exact Strang split has a uniform one-step defect $O(h^3)$ on the stated tube.

[F2] [[def-exact-split-flows-lie-strang-and-bracket]]: the Lie and Strang maps are the compositions $\Phi_b^h\circ\Phi_a^h$ and $\Phi_a^{h/2}\circ\Phi_b^h\circ\Phi_a^{h/2}$.

[F3] [[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]: a solution of $x'=c(x)$ satisfies $x(t)=x(0)+\int_0^t c(x(s))\,ds$.

[F4] [[thm-norm-inequality-for-the-vector-valued-integral]]: $\|\int_0^t g(s)\,ds\|_2\le\int_0^t\|g(s)\|_2\,ds$ for continuous vector functions and $t\ge0$.

[F5] [[thm-gronwall-integral-inequality]]: if $u(t)\le A+K\int_0^t u(s)\,ds$ with continuous $u\ge0$ and constants $A,K\ge0$, then $u(t)\le A\exp(Kt)$.

[F6] [[thm-derivative-of-exponential]] and [[cor-exponential-reciprocal-and-positivity]]: the real exponential is positive and has derivative $\exp(x)$.

[F7] [[thm-exponential-is-strictly-increasing]] and [[cor-mean-value-theorem]]: on a bounded interval, the exponential mean-value estimate gives $\exp(Kh)\le1+K\exp(Kh_0)h$ for $0\le h\le h_0$ and $K\ge0$.

[F8] [[thm-global-error-from-one-step-defect-and-stability]]: a uniform one-step defect $Ch^{p+1}$ and one-step Lipschitz bound $1+Lh$ on a common compact tube imply fixed-time global error $O(h^p)$ for exact initial data.

[A1] Exact and approximate subflow stages are defined and remain in the tube; for the approximate case the pointwise subflow errors and the composed-map stability bounds stated in the Statement hold uniformly in the step and starting state.

## Proof

1.1 Let $K=L_a+L_b$. For either field $c\in\{a,b\}$, let $x(t)$ and $z(t)$ start at $u$ and $v$. By [F3] and [F4], $\|x(t)-z(t)\|_2\le\|u-v\|_2+L_c\int_0^t\|x(s)-z(s)\|_2\,ds.$ The constant case of [F5] yields $\|\Phi_c^t(u)-\Phi_c^t(v)\|_2\le\exp(L_ct)\|u-v\|_2$. Composing these bounds according to [F2] shows both exact split maps are Lipschitz with factor $\exp(Kh)$. [A1, F2, F3, F4, F5, algebra]

2.1 Fix $h_0>0$ within the admitted step range. For $0\le h\le h_0$, [F6] and the mean value theorem give $\exp(Kh)-1=Kh\exp(\xi)\le K h\exp(Kh_0)$ for some $\xi\in[0,Kh]$, using monotonicity from [F7]. Thus both exact split maps satisfy a one-step bound $1+Lh$, with $L=K\exp(Kh_0)$ (and $L=0$ when $K=0$). [F6, F7, step 1.1, algebra]

2.2 Fix a starting state $u$ in the tube. For Lie, insert the exact $b$ flow between the two compositions and use its Lipschitz bound from step 1.1: $\|\widehat\Phi_b^h(\widehat\Phi_a^h(u))-\Phi_b^h(\Phi_a^h(u))\|_2\le\epsilon_b(h)+\exp(L_bh)\epsilon_a(h).$ For Strang, inserting the exact outer $a$ and middle $b$ maps in sequence gives $\|\widehat\Phi_a^{h/2}(\widehat\Phi_b^h(\widehat\Phi_a^{h/2}(u)))-\Phi_a^{h/2}(\Phi_b^h(\Phi_a^{h/2}(u)))\|_2\le\epsilon_a(h/2)+\exp(L_ah/2)\epsilon_b(h)+\exp((L_a/2+L_b)h)\epsilon_a(h/2).$ The inequalities hold uniformly over all starting states in the tube. [A1, F2, step 1.1, algebra]

3.1 The local defects are uniformly $O(h^2)$ for Lie and $O(h^3)$ for Strang by [F1]. Combine these defects with the stability bounds from step 2.1 and apply [F8] with $p=1$ and $p=2$, respectively. The exact-root Lie and Strang global estimates follow. [F1, F8, step 2.1]

4.1 Under the stated $O(h^2)$ Lie and $O(h^3)$ Strang perturbation budgets, step 2.2 and [F1] give the same respective local-defect orders for the approximate compositions. Their one-step Lipschitz constants are assumed to be $1+\widehat Lh$ in [A1], so [F8] applies with $p=1$ and $p=2$ and proves the approximate-subflow global bounds. This does not assert that local subflow accuracy alone implies stability. [A1, F1, F8, step 2.2] ∎

