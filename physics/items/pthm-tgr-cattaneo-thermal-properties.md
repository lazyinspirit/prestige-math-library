---
id: pthm-tgr-cattaneo-thermal-properties
kind: physics-theorem
title: "Conditional thermal entropy, stability, and finite propagation"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 7
proof_strategy: direct
deps:
  - post-tgr-cattaneo-thermal-model
  - lem-tgr-cattaneo-stability-causality
  - def-countable-choice
  - def-schwartz-space-and-its-seminorms
dependency_roles:
  post-tgr-cattaneo-thermal-model: physical-assumption
  lem-tgr-cattaneo-stability-causality: mathematical-premise
  def-countable-choice: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
physical_scope: "Consequences of the adopted supported-rest linear Cattaneo subsystem while its fields remain in the declared near-equilibrium domain; PDE evolution is conditional on the exact draft mathematical supplier, and relativistic causality requires the derived speed inequality."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "N. Andersson and G. L. Comer, Variational multifluid dynamics and causal heat conductivity, arXiv:0908.1707v1 (2009), §4, equations (4.2)–(4.12)"
      url: "https://arxiv.org/pdf/0908.1707"
      locator: "Full 15-page paper; PDF pp. 5–7: the rigid-solid near-equilibrium reduction and constant-parameter Cattaneo law. It does not prove the local entropy, Lyapunov, or PDE existence claims here."
    - title: "S. K. Lander and N. Andersson, Heat conduction in rotating relativistic stars, arXiv:1804.01520 (2018), §2.1"
      url: "https://arxiv.org/pdf/1804.01520"
      locator: "Full 13-page paper; PDF pp. 1–2, equations (1)–(3): phenomenological Cattaneo relaxation and its telegrapher-equation consequence in relativistic thermal context."
    - title: "MIT OpenCourseWare, 2.57 Nano-to-Macro Transport Processes, complete 2004 lecture notes, Lecture 21"
      url: "https://ocw.mit.edu/courses/2-57-nano-to-macro-transport-processes-spring-2012/2e4ecaa5cf55f03bcefbc8ccce79aed6_MIT2_57S12_lec_notes_2004.pdf"
      locator: "Full 177-page course notes; Lecture 21, PDF pp. 153–154: the rigid-conductor law and hyperbolic equation, together with a historical caution about the limited experimental applicability discussed in those notes."
---

## Statement

For the global-evolution and forward-time clauses below, assume that the postulate's open time interval $I$ contains $0$. The local identities and telegrapher equation hold on any open interval on which a smooth solution is defined.

Let $C,\kappa,\tau,T_0,c,L>0$ and let $\Sigma$ be $\mathbb R^3$ or $\mathbb T_L^3$. If $\Sigma=\mathbb T_L^3$, use the periodic-lift convention of [[post-tgr-cattaneo-thermal-model]]: torus fields represent smooth spatially $L$-periodic fields on the rest slices of $M=\mathbb R^4$. Adopt the supported-rest Cattaneo equations and effective current of [[post-tgr-cattaneo-thermal-model]]. The equations are $C\vartheta_t+\operatorname{div}q=0$ and $\tau q_t+q=-\kappa\nabla\vartheta$, with Euclidean spatial derivatives. For any smooth solution on an open time interval, the exact effective entropy-production and quadratic Lyapunov identities are

$$\partial_t s_{\mathrm{eff}}+\operatorname{div}j_s=\frac{|q|^2}{\kappa T_0^2}\geq0,\qquad \partial_t e_L+\operatorname{div}(\vartheta q)=-\frac{|q|^2}{\kappa},\qquad e_L:=\frac12\left(C\vartheta^2+\frac{\tau}{\kappa}|q|^2\right).$$

The associated telegrapher equation is $\tau\vartheta_{tt}+\vartheta_t-(\kappa/C)\Delta\vartheta=0$, where $\Delta:=\operatorname{div}\nabla=\sum_{i=1}^3\partial_{x^i}^2$ on the Euclidean rest space, and its characteristic propagation speed is $v_h:=\sqrt{\kappa/(C\tau)}$. Put $U_0=(\vartheta_0,q_0):=(\vartheta(0,\cdot),q(0,\cdot))$. For Schwartz data on $\mathbb R^3$ or smooth periodic data on $\mathbb T_L^3$, the unique global smooth evolution, weighted-norm contraction, and finite propagation at $v_h$ follow conditionally from the exact mathematical interface in [F1]. Here Schwartz data mean componentwise $C^\infty$ data for which every $x^\alpha\partial^\beta U_0$ is bounded for multi-indices $\alpha,\beta\in\mathbb N^3$, as specified in [F2]. Since the spacetime model uses light speed $c$, the heat subsystem is relativistically causal exactly when

$$v_h\leq c\quad\Longleftrightarrow\quad\kappa\leq C\tau c^2.$$

On $\mathbb T_L^3$, for each integer $r>3/2$, the periodic solution supplied conditionally by [F1] obeys $T_0+\vartheta(t,x)>0$ for all $t\geq0$ whenever $K_{r,L,C}\|U_0\|_{H^r_M(\mathbb T_L^3)}<T_0$, with $K_{r,L,C}$ and $H^r_M$ exactly as defined there. This bound ensures positive temperature but does not by itself ensure that the solution stays in the selected domain $D$ of the postulate. The global linear PDE statement concerns the mathematical extension of the subsystem; its physical interpretation is restricted to times when $(\vartheta,q)\in D$. No empirical coefficient or material-specific validity is asserted.

## Facts & Assumptions

**Given:** $C,\kappa,\tau,T_0,c,L>0$, the supported-rest Minkowski conventions and effective equations of [[post-tgr-cattaneo-thermal-model]], and the spatial setting stated above. For the conditional global-evolution and propagation conclusions, assume that the postulate's open time interval $I$ contains $0$, so the initial data $U_0=(\vartheta(0,\cdot),q(0,\cdot))$ are defined, as well as the $\mathrm{AC}_\omega$ and exact constant-coefficient supplier hypotheses carried by [F1]. Physical interpretation is limited to the postulate's declared state domain $D$.

[A1] [[post-tgr-cattaneo-thermal-model]]: on fixed supported Minkowski rest space, $C\vartheta_t+\operatorname{div}q=0$ and $\tau q_t+q=-\kappa\nabla\vartheta$; it adopts $s_{\mathrm{eff}}=s_0+C\vartheta/T_0-C\vartheta^2/(2T_0^2)-\tau|q|^2/(2\kappa T_0^2)$ and $j_s=q/T_0-\vartheta q/T_0^2$ on its open state neighborhood.

[F1] [[lem-tgr-cattaneo-stability-causality]]: for every smooth solution with the stated positive thermal coefficients, its Statement gives $\partial_t s_{\mathrm{eff}}+\operatorname{div}j_s=|q|^2/(\kappa T_0^2)$ and $\partial_t e_L+\operatorname{div}(\vartheta q)=-|q|^2/\kappa$ for the specified effective current and quadratic form.

[F2] [[lem-tgr-cattaneo-stability-causality]]: its Statement defines $v_h=\sqrt{\kappa/(C\tau)}$ and states that the system's characteristic speeds are $0$ (twice) and $\pm v_h$; it also gives the comparison-speed equivalence.

[F3] [[lem-tgr-cattaneo-stability-causality]]: for Schwartz data on $\mathbb R^3$ or smooth periodic data on $\mathbb T_L^3$, its global evolution, contraction, and finite-propagation conclusions are conditional on its separately stated constant-coefficient symmetric-system supplier. Its torus small-data estimate gives $T_0+\vartheta>0$ when $K_{r,L,C}\|U_0\|_{H^r_M}<T_0$. The carrier and its proof remain draft, not independently accepted.

[F4] [[def-schwartz-space-and-its-seminorms]]: $\mathcal S(\mathbb R^3)$ consists of smooth functions for which every seminorm $\sup_x|x^\alpha\partial^\beta f(x)|$ is finite for multi-indices $\alpha,\beta\in\mathbb N^3$; for the vector-valued data here this condition is componentwise.

[F5] [[def-countable-choice]]: $\mathrm{AC}_\omega$ means that every countable family of nonempty sets has a choice function. This is the choice strength assumed by [F3]'s conditional global-evolution supplier.

## Proof

1.1 The equations, coefficients, state functions, and spatial derivatives in [A1] match the hypotheses and definitions of [F1]. Applying its exact identities gives $\partial_t s_{\mathrm{eff}}+\operatorname{div}j_s=|q|^2/(\kappa T_0^2)$ and $\partial_t e_L+\operatorname{div}(\vartheta q)=-|q|^2/\kappa$. Since $\kappa,T_0,C,\tau$ are positive, the production is nonnegative and $e_L$ is positive definite in $(\vartheta,q)$. These are deductions for the adopted effective current and linear subsystem. [given, A1, F1]

1.2 Differentiate the first equation of [A1] in time and take the divergence of its second equation. Substituting $\operatorname{div}q=-C\vartheta_t$ and $\operatorname{div}q_t=-C\vartheta_{tt}$ gives $\tau\vartheta_{tt}+\vartheta_t-(\kappa/C)\Delta\vartheta=0$. By [F2] its characteristic speed is $v_h=\sqrt{\kappa/(C\tau)}$. All coefficients and $c$ are positive, so squaring the nonnegative quantities preserves order: $v_h\leq c$ is equivalent to $\kappa/(C\tau)\leq c^2$, and multiplication by $C\tau>0$ gives $\kappa\leq C\tau c^2$. Reversing these steps proves the converse. [given, A1, F2, algebra]

2.1 Since $0\in I$, the stated Schwartz or smooth-periodic initial data are defined. [F3] supplies the unique global smooth evolution, weighted-norm contraction, and finite propagation at $v_h$, conditional on its exact generic linear-supplier hypotheses and $\mathrm{AC}_\omega$ assumption [F5]. In the periodic case [F3] also gives $|\vartheta(t,x)|\leq K_{r,L,C}\|U(t)\|_{H^r_M}\leq K_{r,L,C}\|U_0\|_{H^r_M}$ for the stated $r$; if the last quantity is less than $T_0$, then $T_0+\vartheta(t,x)>0$. The data class is the componentwise class defined in [F4]. This proves the stated positivity qualification without claiming that the solution remains in $D$. [given, F3, F4, F5] ∎
