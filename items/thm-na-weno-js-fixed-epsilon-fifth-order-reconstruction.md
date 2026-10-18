---
id: thm-na-weno-js-fixed-epsilon-fifth-order-reconstruction
kind: theorem
title: Fixed-epsilon WENO-JS and WENO-Z face reconstructions are fifth order
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
aliases: []
deps:
  - def-na-high-resolution-reconstruction
  - lem-na-weno5-optimal-linear-reconstruction
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Guang-Shan Jiang and Chi-Wang Shu, Efficient Implementation of Weighted ENO Schemes"
      url: "https://lsec.cc.ac.cn/lcfd/DEWENO/paper/WENO_1996.pdf"
      locator: "§§2–3, PDF pp. 3–13: Jiang–Shu indicators, normalized nonlinear weights and fifth-order smooth-region reconstruction."
    - title: "Chi-Wang Shu, Essentially Non-Oscillatory and Weighted Essentially Non-Oscillatory Schemes for Hyperbolic Conservation Laws, complete lecture notes"
      url: "https://www3.nd.edu/~zxu2/acms60790S13/Shu-WENO-notes.pdf"
      locator: "§2.2.2, PDF pp. 18–21: accuracy condition for convex WENO weights and the fifth-order cell-average construction."
    - title: "Andrew K. Henrick, Tariq D. Aslam and Joseph M. Powers, Mapped weighted essentially non-oscillatory schemes: Achieving optimal order near critical points"
      url: "https://academicweb.nd.edu/~powers/paper.list/jcp.weno5m.05.pdf"
      locator: "§4.3–4.5, printed pp. 552–554: the WENO-JS order depends on epsilon and resolution; the critical-point analysis distinguishes the fixed-epsilon limiting regime from small scale-dependent epsilon. The source studies finite-difference fluxes; this item proves the finite-volume face-state claim locally."
    - title: "Marcos Castro, Bruno Costa and Wai Sun Don, High order weighted essentially non-oscillatory WENO-Z schemes for hyperbolic conservation laws"
      url: "https://doi.org/10.1016/j.jcp.2010.11.028"
      locator: "§2 and §4: WENO-Z weights use a power parameter p and analyze critical-point accuracy; for fifth order (r=3), p=2 is the choice used here. The source treats finite differences; this item proves the finite-volume face-state estimate locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $u\in C^5$ on the five-cell stencil, let $\sup|u'''|<\infty$ and $\sup|u^{(5)}|<\infty$, and let $\epsilon_0>0$ be fixed independently of $h$. For the cell-average WENO-JS and WENO-Z states in [[def-na-high-resolution-reconstruction]], there is a constant $C$ independent of sufficiently small $h$ such that
$$|U_{i+1/2}^{-,J}-u(x_{i+1/2})|\le Ch^5,\qquad |U_{i+1/2}^{-,Z}-u(x_{i+1/2})|\le Ch^5.$$
The same result holds for the reflected right states.

## Facts & Assumptions

**Given:** The fixed positive $\epsilon_0$, uniform cell averages of a C5 scalar function, the WENO-JS/WENO-Z formulas and ideal weights, and the finite-volume candidate estimates.

[F1] [[def-na-high-resolution-reconstruction]]: each $\beta_k$ is a sum of squares, $\tau_5=|\beta_0-\beta_2|$, $\epsilon_0>0$, and both normalized weight triples are positive and sum to one.

[F2] [[lem-na-weno5-optimal-linear-reconstruction]]: $\sum d_kp_k=u(x_{i+1/2})+O(h^5)$ and each $p_k=u(x_{i+1/2})+O(h^3)$ for the stated smooth data.

## Proof

1.1 Each first-difference combination in [F1] is $O(h)$ on C1 data, and each second-difference combination is $O(h^2)$ on C2 data. Squaring shows $\beta_k=O(h^2)$ for all three stencils; consequently $\tau_5=O(h^2)$. For the constant data case all these differences vanish and both schemes return the ideal weights exactly. [given, F1, algebra]

2.1 For WENO-JS, $\alpha_k^J=d_k\epsilon_0^{-2}(1+\beta_k/\epsilon_0)^{-2}=d_k\epsilon_0^{-2}(1+O(h^2))$. Since $\sum d_k=1$, normalization gives $\omega_k^J=d_k+O(h^2)$. For WENO-Z, $\epsilon_0+\beta_k\ge\epsilon_0$, so $(\tau_5/(\epsilon_0+\beta_k))^2=O(h^4)$; hence $\alpha_k^Z=d_k(1+O(h^4))$ and normalization gives $\omega_k^Z=d_k+O(h^4)$. The positive fixed $\epsilon_0$ makes all constants uniform for sufficiently small $h$. [F1, step 1.1, algebra]

3.1 For either normalized weight vector $\omega$, $\sum_k(\omega_k-d_k)=0$. Therefore $\sum_k\omega_kp_k-\sum_kd_kp_k=\sum_k(\omega_k-d_k)(p_k-u(x_{i+1/2}))$. By [F2] the right side is $O(h^5)$ for WENO-JS and $O(h^7)$ for WENO-Z. The ideal combination has error $O(h^5)$ by [F2], so both left states have error $O(h^5)$. Reflection changes only the stencil orientation and preserves the same estimates. [F2, step 2.1, algebra] ∎


## Remarks

This is the fixed-$\epsilon_0$ asymptotic branch. The estimate does not claim fifth order for arbitrary choices $\epsilon=\epsilon(h)$; the critical-point example on the companion page computes a scale-dependent branch separately.
