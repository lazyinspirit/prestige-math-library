---
id: alg-adaptive-euler-maruyama-on-predictable-grid
kind: algorithm
title: Euler–Maruyama on a predictable grid with bridge-refinement status
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-dyadic-brownian-bridge-increment-tree
  - thm-dyadic-brownian-bridge-tree-increment-laws
  - def-predictable-stopping-time-grid
  - lem-continuous-adapted-process-at-bounded-stopping-time
  - def-continuous-time-stopping-time
  - lem-stopping-time-ito-step-interval-sum
  - alg-euler-maruyama
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, Algorithm 8.1 and §8.8, Algorithm 8.23"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
    - title: "Desmond J. Higham, Xuerong Mao, and Andrew M. Stuart, Strong Convergence of Euler-Type Methods for Nonlinear Stochastic Differential Equations, §2"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
---

## Definition

Assume AC and use the coefficient, Brownian, and initial-value conventions of
[[alg-euler-maruyama]]. The inputs are $T>0$, the coefficients $b,\sigma$,
the Brownian path or increment source, an initial value $X_0$, a deterministic
maximum step $h_{\max}>0$, and a deterministic work budget
$B\in\mathbb N_0$. Stopped Brownian values are measurable at their stopped
sigma-algebras by [[lem-continuous-adapted-process-at-bounded-stopping-time]],
and each stopping time $\tau_n$ is $\mathcal F_{\tau_n}$-measurable by the
event tests of [[def-continuous-time-stopping-time]]. Since $h_n$ is
$\mathcal F_{\tau_n}$-measurable, Borel coefficient evaluation and the
predictable-grid update keep $Y_n$ measurable at $\mathcal F_{\tau_n}$ by
induction. The continuous interpolation is adapted as well: at each fixed
$t$, the active-interval events are in $\mathcal F_t$ by the stopping-time
tests, and each term uses stopped values restricted to $\{\tau_n\le t\}$. Choose
one of the following modes.

1. **Predictable-grid mode.** Supply a finite predictable grid
   [[def-predictable-stopping-time-grid]] with
   $h_n\le h_{\max}$ on every active interval. Initialize $Y_0=X_0$ and
   process its intervals in order until the grid reaches $T$ or the budget
   is exhausted. Each interval uses the actual Brownian increment and update
   $$Y_{n+1}=Y_n+b(\tau_n,Y_n)h_n+ \sigma(\tau_n,Y_n)(W_{\tau_{n+1}}-W_{\tau_n}).$$
   The continuous interpolation on the interval is
   $$Y_t=Y_n+b(\tau_n,Y_n)(t-\tau_n)+ \sigma(\tau_n,Y_n)(W_t-W_{\tau_n}).$$
   This is the Euler–Maruyama update of [[alg-euler-maruyama]] with the
   supplied interval length; the fixed-grid supplier itself makes no
   variable-grid convergence assertion.

2. **Endpoint-refinement mode.** Supply a total Boolean-valued
   accept/reject rule on the current trial data. Initialize a queue with a finite partition
   $0=u_0<\cdots<u_J=T$ whose root intervals have lengths at most
   $h_{\max}$, together with their sampled Brownian increments. Pop the
   earliest interval $[u,u+\ell]$, form the Euler trial
   $Y^*=Y+b(u,Y)\ell+\sigma(u,Y)\Delta W$, and apply the supplied
   accept/reject rule. If accepted, set $Y\leftarrow Y^*$ and advance to the
   interval's right endpoint. If rejected, retain its parent increment,
   split it with [[alg-dyadic-brownian-bridge-increment-tree]], and put its
   left then right children at the front of the queue; do not update $Y$ on
   the rejected parent and do not redraw the parent or either child. This
   branch preserves the sampled path tree, but an endpoint-dependent
   acceptance rule is not a predictable-grid controller;
   the strong-error theorem on this page makes no error claim for this branch.

Count every trial node, accepted or rejected, as one work unit. In
predictable-grid mode, stop with `status: complete` after the supplied grid
reaches $T$. In endpoint-refinement mode, stop with `status: complete` when
the queue is empty and the accepted path reaches $T$. If $B$ units are used
first, stop with `status: inconclusive` and return the current time, state,
pending grid or tree nodes, trial count, and branch label. A finite budget
never changes an inconclusive result into a successful certificate.
