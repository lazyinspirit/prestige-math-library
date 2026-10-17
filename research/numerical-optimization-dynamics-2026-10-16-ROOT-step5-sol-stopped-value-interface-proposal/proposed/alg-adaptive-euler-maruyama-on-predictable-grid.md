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
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, Algorithm 8.1"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
    - title: "Mike Giles, Monte Carlo Methods, Module 4: Monte Carlo path simulation, Brownian bridge, pp. 27–30"
      url: "https://people.maths.ox.ac.uk/~gilesm/mc/module_4/module_4_1.pdf"
    - title: "Desmond J. Higham, Xuerong Mao, and Andrew M. Stuart, Strong Convergence of Euler-Type Methods for Nonlinear Stochastic Differential Equations, §2"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
---

## Definition

Assume AC and use the coefficient, Brownian, and initial-value conventions of
[[alg-euler-maruyama]], on a filtered space satisfying the usual conditions.
The inputs are $T>0$, the coefficients $b,\sigma$,
the Brownian path or increment source, an initial value $X_0$, a deterministic
maximum step $h_{\max}>0$, and a deterministic work budget
$B\in\mathbb N_0$. Stopped Brownian values are measurable at their stopped
sigma-algebras by the upper-grid approximation and null-completion argument
of [[lem-continuous-adapted-process-at-bounded-stopping-time]], which applies
to any filtration containing every subset of every ambient measurable null
event in $\mathcal F_0$, as guaranteed here by the usual conditions,
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

2. **Endpoint-refinement mode.** Supply a total Borel-measurable Boolean-valued
   accept/reject rule on the finite-dimensional current trial data. Initialize a queue with a finite partition
   $0=u_0<\cdots<u_J=T$ whose root intervals have lengths at most
   $h_{\max}$, together with their sampled Brownian increments. Pop the
   earliest interval $[u,u+\ell]$, form the Euler trial
   $Y^*=Y+b(u,Y)\ell+\sigma(u,Y)\Delta W$, and apply the supplied Borel
   accept/reject rule (a Borel function of the finite trial history and current
   trial data). If accepted, set $Y\leftarrow Y^*$, append the
   right-endpoint/state pair to the accepted path record, and advance to the
   interval's right endpoint. If rejected, retain its parent increment,
   split it with [[alg-dyadic-brownian-bridge-increment-tree]], and put its
   left then right children at the front of the queue; do not update $Y$ on
   the rejected parent and do not redraw the parent or either child. This
   branch preserves the sampled path tree, but an endpoint-dependent
   acceptance rule does not by itself establish the stopped-measurability
   condition of a predictable-grid controller;
   the strong-error theorem on this page makes no error claim for this branch.

For either mode, initialize `current_time=0`, `current_state=X_0`, and
`trial_count=0`. Maintain `current_time` and `current_state` as the endpoint
and Euler state of the accepted path. In endpoint-refinement mode, also
initialize the accepted path record with $(0,X_0)$; append each
right-endpoint/state pair only when its interval is accepted.
Count every trial node, accepted or rejected, as one work unit; after each
trial, increment `trial_count` by one. Before the first trial and after every
trial, first check whether the mode's completion condition holds: the supplied
grid has reached $T$ in predictable-grid mode,
or the queue is empty and the accepted path reaches $T$ in endpoint-refinement
mode. If so, return with `status: complete`. Otherwise, if the count has
reached $B$, return with `status: inconclusive`; if not, perform the next
trial. Thus a budget $B=0$ returns `inconclusive`, and a last trial that
reaches $T$ returns `complete`.

Both statuses use the output record
`(mode, status, current_time, current_state, approximation, pending_work,
trial_count)`. On completion, `current_time=T`, `current_state=Y_T`, and
`pending_work` is empty. The `approximation` is the full continuous Euler
interpolation in predictable-grid mode; in endpoint-refinement mode it is the
accepted ordered endpoint/state record together with the retained increment
tree. On an inconclusive return, `trial_count=B`, `current_state` is the state
at `current_time`, and `approximation` is the partial output through that
time: the continuous interpolation restricted to $[0,\texttt{current\_time}]$
in predictable-grid mode, and the accepted endpoint/state record and retained
tree in endpoint-refinement mode. `pending_work` is the remaining ordered grid
suffix or the current ordered tree queue, respectively. The tree assigns no
values at non-dyadic times, so endpoint-refinement mode returns its accepted
node record rather than a continuous interpolation. A finite budget never
changes an inconclusive result into a successful certificate.
