---
id: thm-finite-hybrid-trajectory-error-under-separated-events
kind: theorem
title: "Finite separated transverse events give an event-aligned hybrid trajectory error bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 10
deps:
  - def-hybrid-mode-guard-reset-system
  - def-validated-residual-tube-certificate
  - thm-validated-residual-tube-certificate-sound
  - def-certified-hybrid-event-enclosure
  - lem-ode-flow-lipschitz-on-a-tube
  - lem-transverse-hybrid-event-time-error
  - lem-reset-error-after-a-mistimed-hybrid-event
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, 2nd ed., Chapter III"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, §2.4"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
---

## Statement

Consider exact and reported hybrid trajectories with the same initial data and a common finite sequence of transitions at exact event times $\tau_1<\cdots<\tau_N$ and reported times $\widehat\tau_1<\cdots<\widehat\tau_N$. Assume the events are separated by $\delta>0$, are transverse with margins $\nu_j>0$, and the reported event times are upper endpoints of certified root boxes, so $\tau_j\le\widehat\tau_j$. After each event, both trajectories are compared at the reported event time, when both are in the outgoing mode. Let $E_j$ bound their state discrepancy at this aligned mode-segment start, with $E_0=0$.

For mode segment $j$, let $U_j$ be the accumulated piecewise dense reconstruction from the reported start, with local residual-tube error $\eta_j^{\rm loc}$ relative to the exact mode solution from that same start. Let $L_j$ be a state-Lipschitz bound, $H_j$ the segment duration, and $L_{g,j},\varepsilon_j$ the guard state-Lipschitz and reported guard-residual bounds. Define
$$D_j:=\eta_j^{\rm loc}+e^{L_jH_j}E_j.$$
Then $D_j$ bounds the reference error on the incoming-mode prefix and
$$\Delta_{j+1}:=\frac{L_{g,j}D_j+\varepsilon_j}{\nu_{j+1}}$$
bounds $\widehat\tau_{j+1}-\tau_{j+1}$. If the reset has state and time Lipschitz constants $L_{R,j+1},L_{R,t,j+1}$, the incoming field is bounded by $M^-_j$, and the outgoing field by $M^+_{j+1}$ over the event-time bracket, then
$$E_{j+1}:=L_{R,j+1}D_j+(L_{R,j+1}M^-_j+L_{R,t,j+1}+M^+_{j+1})\Delta_{j+1}$$
bounds the state discrepancy at the next aligned mode-segment start. The terminal segment has bound $D_N=\eta_N^{\rm loc}+e^{L_NH_N}E_N$. These finite recurrences bound state errors on matched smooth-mode segments and reset states at aligned times; they make no same-clock state claim between an exact jump and its later reported jump.

## Facts & Assumptions

**Given:** The common finite event sequence, aligned initial state, local residual-tube certificates, Lipschitz and field bounds, reported upper event-box endpoints, and event residual/transversality data.

[F1] [[def-hybrid-mode-guard-reset-system]]: each trajectory follows its current smooth mode until an enabled guard event, applies the reset, and changes mode.

[F2] [[thm-validated-residual-tube-certificate-sound]]: a certified local residual-tube certificate gives an exact mode solution whose distance from the stored dense reconstruction is bounded by its radius.

[F3] [[def-certified-hybrid-event-enclosure]]: the finite ledger distinguishes the local dense error from the total reference-mode error and records the certified mode, guard, and reset constants.

[F4] [[lem-ode-flow-lipschitz-on-a-tube]]: same-mode solutions starting at a common time with state error $e$ differ over duration $H$ by at most $e^{LH}e$.

[F5] [[lem-transverse-hybrid-event-time-error]]: dense state error $D_j$ and guard residual $\varepsilon_j$ give event-time error at most $(L_{g,j}D_j+\varepsilon_j)/\nu_{j+1}$.

[F6] [[lem-reset-error-after-a-mistimed-hybrid-event]]: state and time errors at an event propagate through its reset and the outgoing mode with the stated Lipschitz and field bounds.

## Proof

1.1 At the aligned start of segment $j$, the two exact mode solutions have state discrepancy at most $E_j$ and the same initial time. Apply [F4] through duration $H_j$ to bound their discrepancy by $e^{L_jH_j}E_j$. By [F2], the reported dense reconstruction differs from the exact mode solution launched from the reported start by at most $\eta_j^{\rm loc}$. The triangle inequality gives the total incoming reference error $D_j$ in [F3]. [given, F2, F3, F4, algebra]

2.1 On the certified event bracket, use [F5] with dense-state error $D_j$, guard residual $\varepsilon_j$, and transverse margin $\nu_{j+1}$. This gives $\widehat\tau_{j+1}-\tau_{j+1}\le\Delta_{j+1}$; the left side is nonnegative because the reported time is the root-box upper endpoint. [given, F3, F5, step 1.1]

3.1 The exact incoming-mode continuation and reported reconstruction differ by at most $D_j$ on the event bracket by step 1.1 and [F3]. The report time is the root-box upper endpoint, so the lag satisfies $0\le\widehat\tau_{j+1}-\tau_{j+1}\le\Delta_{j+1}$ by step 2.1. Apply [F6]: reset-input errors contribute $L_{R,j+1}D_j+(L_{R,j+1}M^-_j+L_{R,t,j+1})\Delta_{j+1}$, and the exact trajectory's outgoing flow from its earlier reset to the report time contributes at most $M^+_{j+1}\Delta_{j+1}$. Adding these terms gives the stated $E_{j+1}$ at the aligned outgoing-mode start. [given, F1, F3, F6, step 1.1, step 2.1, algebra]

4.1 Since $N$ is finite, steps 1.1–3.1 give finite nonnegative bounds successively through all event segments. The terminal application of step 1.1 gives $D_N$. Write $\ell_j:=\widehat\tau_j-\tau_j$, so $0\le\ell_j\le\Delta_j$ by step 2.1. If every $\Delta_j<\delta/3$, then $\widehat\tau_{j+1}-\widehat\tau_j=(\tau_{j+1}-\tau_j)+\ell_{j+1}-\ell_j\ge\delta-\Delta_j>2\delta/3$, so the reported event order is unchanged. [given, step 1.1, step 2.1, step 3.1, algebra, induction] ∎
