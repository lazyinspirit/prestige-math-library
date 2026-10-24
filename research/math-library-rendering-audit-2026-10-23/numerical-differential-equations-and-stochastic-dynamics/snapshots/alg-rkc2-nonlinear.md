---
id: alg-rkc2-nonlinear
kind: algorithm
title: "Second-order nonlinear stabilized Runge–Kutta–Chebyshev step"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-chebyshev-polynomials-first-and-second-kind
  - def-explicit-runge-kutta-tableau-and-stage-map
  - def-first-order-ode-initial-value-problem-and-solution
  - def-one-step-ode-method-local-defect-order-and-stability
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ibrahim Almuslimani and Gilles Vilmart, Explicit Stabilized Integrators for Stiff Optimal Control Problems, §2.2.2"
      url: "https://www.unige.ch/~vilmart/paper_optimal_control_alm_vil.pdf"
    - title: "B.P. Sommeijer, L.F. Shampine, and J.G. Verwer, RKC: An explicit solver for parabolic PDEs, §2"
      url: "https://ir.cwi.nl/pub/109/0109D.pdf"
---

## Definition

Input a first-order right-hand side $f:D\to\mathbb R^d$ on an open time-state domain $D\subseteq\mathbb R\times\mathbb R^d$, an admitted pair $(t,y)\in D$, a step $h>0$, an integer stage count $s\ge2$, and a right-hand-side evaluator that returns either $f(\tau,u)$ or an evaluation-failure status at each queried $(\tau,u)\in D$. In the exact mathematical model the evaluator returns $f$ at every point of $D$; the failure status records only an unavailable numerical evaluation. Set
$$w_1=\frac{3}{s^2-1},\qquad b_0=b_1=b_2=\frac14,\qquad b_j=\frac{j^2-1}{3j^2}\ (3\le j\le s),\qquad a_j=1-b_j\ (0\le j\le s).$$
For the stages define $c_0=0$, $c_1=b_1w_1$, and $c_j=b_jw_1j^2$ for $2\le j\le s$. Put $Y_0=y$. Before each query check that its time-state input belongs to the declared domain; if not, return domain-failure with that stage index. If the right-hand-side evaluator reports failure, return evaluation-failure with that stage index. Query $k_0=f(t,Y_0)$ and on success set $Y_1=Y_0+b_1w_1h k_0$. For each $j=2,\ldots,s$, define
$$\mu_j=\frac{2b_j}{b_{j-1}},\qquad \nu_j=-\frac{b_j}{b_{j-2}},\qquad m_j=\frac{2b_jw_1}{b_{j-1}},\qquad g_j=-a_{j-1}m_j,$$
query $k_{j-1}=f(t+c_{j-1}h,Y_{j-1})$, and on success set
$$Y_j=(1-\mu_j-\nu_j)y+\mu_jY_{j-1}+\nu_jY_{j-2}+m_jh k_{j-1}+g_jh k_0.$$
If $(t+h,Y_s)$ is outside the declared domain, return output-domain-failure; otherwise return success with $(t+h,Y_s)$. All stages use only the initial state and already computed values, so the procedure contains no implicit solve.

For an autonomous field, omit the time arguments. Order, stability, and stage-amplification properties are established separately.

The coefficient $b_2$ agrees with the displayed formula at $j=2$; it is listed among the base values to make the recurrence unambiguous. The Chebyshev identities used to derive these coefficients are supplied by [[def-chebyshev-polynomials-first-and-second-kind]].

