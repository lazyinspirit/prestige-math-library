---
id: thm-infinite-fixed-pivot-sectional-grid-error
kind: theorem
title: The unbounded fixed-pivot flow has first-order grid error
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-continuous-size-coagulation-fragmentation-weak-model
  - def-infinite-fixed-pivot-sectional-dynamics
  - def-bounded-lipschitz-discrepancy-for-measures
  - lem-fixed-pivot-barycentric-identities
  - lem-fixed-pivot-coagulation-fragmentation-quadrature-error
  - thm-continuous-coagulation-fragmentation-moment-bounds
  - thm-infinite-fixed-pivot-sectional-global-wellposedness-and-bl-stability
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the projected initial condition and Gronwall estimate are explicit.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Jitendra Kumar, Numerical approximations of population balance equations in particulate systems, Chapter 2, §2.2
      url: https://www.iitrpr.ac.in/jkumar/pub/Kumar_Dissertation_web.pdf
    - title: Philippe Laurençot, Weak compactness techniques and coagulation equations, §§3.1–3.4
      url: https://arxiv.org/pdf/1801.08312
---

## Statement

Let $\mu_t$ be the continuous solution of [[def-continuous-size-coagulation-fragmentation-weak-model]] on $[0,T]$, and let $\eta_t$ be the no-cutoff pivot solution of [[def-infinite-fixed-pivot-sectional-dynamics]] on a grid of maximum spacing $\Delta\le1$, initialized by $\eta_0=P_\Delta\mu_0$. Then for $0\le t\le T$,
$$d_{BL}(\eta_t,\mu_t)\le e^{C_Tt}\,C_QT\Delta+\frac{\Delta}{2}M_0(\mu_t),$$
where $C_Q$ is the quadrature constant in [[lem-fixed-pivot-coagulation-fragmentation-quadrature-error]] evaluated at the uniform number bound for $\mu_t$, and $C_T$ is the vector-field stability constant for the projected continuous paths and pivot solutions. Both constants are finite and independent of $\Delta$.

## Facts & Assumptions

**Given:** Bounded-kernel moment bounds, first-order fixed-pivot quadrature consistency, and grid-field bounded-Lipschitz stability.

[F1] [[def-continuous-size-coagulation-fragmentation-weak-model]]: the continuous path satisfies $\dot\mu=F(\mu)$ in integral form.

[F2] [[def-infinite-fixed-pivot-sectional-dynamics]]: $P_\Delta$ is a linear map from continuous measures to grid measures and $\dot\eta=F_\Delta(\eta)$.

[F3] [[lem-fixed-pivot-coagulation-fragmentation-quadrature-error]]: $\|F_\Delta(P_\Delta\mu)-P_\Delta F(\mu)\|_{BL}\le C_Q\Delta$ on the bounded-number set.

[F4] [[thm-continuous-coagulation-fragmentation-moment-bounds]]: $M_1(\mu_t)$ is constant and $M_0(\mu_t)$ is bounded on $[0,T]$.

[F5] [[thm-infinite-fixed-pivot-sectional-global-wellposedness-and-bl-stability]]: the pivot vector field is bounded-Lipschitz in $d_{BL}$ on positive paths with bounded number, and $P_\Delta$ preserves $M_0$ and $M_1$.

[F6] [[lem-fixed-pivot-barycentric-identities]]: each pivot projection has expected displacement at most $\Delta/2$.

## Proof

1.1 For every $z\ge a$, [F6] gives $\int w(u)P_\Delta(z)(du)\le w(z)+\Delta^2/4\le(5/4)w(z)$, so the linear projection $P_\Delta$ is bounded on $\mathcal M_w(E)$. Set $q_t=P_\Delta\mu_t$; applying this bounded linear map to the integral equation [F1] gives $\dot q_t=P_\Delta F(\mu_t)$. The total-number-one and first-moment identities in [F2] and [F6] give $M_0(q_t)=M_0(\mu_t)$ and $M_1(q_t)=M_1(\mu_t)$, so [F5] supplies a $\Delta$-independent number bound for both $q_t$ and $\eta_t$. [F1, F2, F4, F5, F6]

1.2 Subtract the equations for $\eta_t$ and $q_t$ and add and subtract $F_\Delta(q_t)$. The vector-field term is bounded by $C_Td_{BL}(\eta_t,q_t)$ using [F5]; the residual is at most $r:=C_Q\Delta$ by [F3]. Therefore $d(t)\le C_T\int_0^td(s)ds+rt$, with $d(0)=0$. Set $g(t)=rt+C_T\int_0^td(s)ds$. Then $d\le g$ and $g'\le r+C_Tg$. If $C_T>0$, integrating $(e^{-C_Tt}g(t))'\le r e^{-C_Tt}$ gives $g(t)\le r(e^{C_Tt}-1)/C_T\le rt e^{C_Tt}$; if $C_T=0$, $g(t)=rt$. Since $t\le T$, this is at most $e^{C_Tt}C_QT\Delta$. [F2, F3, F5, step 1.1, algebra]

2.1 For any test admissible in [F3], its expected pivot value differs from its original value by at most its Lipschitz constant times the expected displacement. [F6] therefore yields $d_{BL}(q_t,\mu_t)\le(\Delta/2)M_0(\mu_t)$. The triangle inequality with step 1.2 proves the Statement. [F3, F4, F6, step 1.2, algebra] ∎
