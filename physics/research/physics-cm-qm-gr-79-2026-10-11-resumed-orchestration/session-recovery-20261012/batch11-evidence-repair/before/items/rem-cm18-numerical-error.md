---
id: rem-cm18-numerical-error
kind: remark
title: "Numerical error in a prediction pipeline: certified velocity-Verlet bounds, additive per-step error, the analytic long-time branch, and the separation from model error"
status: draft
origin: pipeline
domain: physics
deps: [def-cm18-observable-model, def-cm-local-flow-of-an-autonomous-system, def-cm-splitting-hamiltonian-and-verlet-map, lem-cm-verlet-local-truncation-error-is-cubic, thm-cm-verlet-finite-time-error-is-quadratic, lem-cm-roundoff-accumulation-in-one-step-schemes, thm-cm-analytic-verlet-energy-on-exponential-times, lem-cm-separate-roundoff-energy-accumulation, rem-cm-scope-of-the-certified-verlet-estimates]
dependency_roles:
  def-cm18-observable-model: formulation-prerequisite
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  def-cm-splitting-hamiltonian-and-verlet-map: mathematical-premise
  lem-cm-verlet-local-truncation-error-is-cubic: mathematical-premise
  thm-cm-verlet-finite-time-error-is-quadratic: mathematical-premise
  lem-cm-roundoff-accumulation-in-one-step-schemes: mathematical-premise
  thm-cm-analytic-verlet-energy-on-exponential-times: mathematical-premise
  lem-cm-separate-roundoff-energy-accumulation: mathematical-premise
  rem-cm-scope-of-the-certified-verlet-estimates: mathematical-premise
dependency_level: 19
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope remark on the numerical phase of a prediction pipeline for an operational observable model of the force branch: the certified finite-time discretization and additive per-step error bounds for the velocity-Verlet method, the analytic long-time energy estimates under their holomorphy, step-size and compact-retention hypotheses, and the strict separation of these numerical bounds from the model-versus-nature error and the observation and sampling errors. The item asserts no numerical result for a physical system and no all-time accuracy of any method."
sources:
  references:
    - title: "E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 2 'Symplectic integrators', Sections 1-2 and 4: the Stormer-Verlet scheme, its symmetry and order, printed pages 1-9"
      url: "https://www.unige.ch/~hairer/poly_geoint/week2.pdf"
    - title: "E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 3 'Backward error analysis', Sections 1-3 and 5: local versus global error, accumulation of per-step perturbations, the modified equation and its exponential-time estimates, printed pages 1-12"
      url: "https://www.unige.ch/~hairer/poly_geoint/week3.pdf"
    - title: "A. Quillen, PHY411 Lecture notes Part 7 'Integrators' (University of Rochester), Sections 1.1-1.2: local versus global error accumulation for one-step methods, printed pages 2-7"
      url: "https://astro.pas.rochester.edu/~aquillen/phy411/lecture7.pdf"
verification:
  precheck: n/a
---

## Model error and numerical error are different

The prediction map of an operational observable model
([[def-cm18-observable-model]]) is defined from the exact maximal motions of
the force model. A numerical pipeline replaces those motions by a computed
sequence, and at least five distinct errors must be kept apart: the
**model-versus-nature error**, the difference between the model's exact
motion and a physical system, about which the framework proves nothing; the
**discretization error**, the difference between the computed sequence and
the exact flow of the same model; the **implementation error**, the per-step
residual of the arithmetic actually performed; the **observation error**
$\varepsilon$ of the protocol; and the **sampling error** of a repeated
protocol. Only the second and third admit the certified statements below,
and those statements are always about the model.

## Finite-time discretization error of velocity Verlet

Fix a splitting $H=A+B$ of a mechanical Hamiltonian and the velocity-Verlet
map $V_{h}=K_{h/2}\circ D_{h}\circ K_{h/2}$ of
[[def-cm-splitting-hamiltonian-and-verlet-map]], and let $\Phi_{t}$ be the
exact flow of the system ([[def-cm-local-flow-of-an-autonomous-system]]).
Under the hypotheses of [[thm-cm-verlet-finite-time-error-is-quadratic]] — a
bounded convex tube with the local truncation constants $h_{1},C_{1}$ of
[[lem-cm-verlet-local-truncation-error-is-cubic]], a compact set $K_{1}$
inside the tube, a step $0<\lvert h\rvert\le h_{1}$ and $n\lvert h\rvert\le
T$, with the computed iterates $z_{j}=V_{h}^{j}(z_{0})$ and the exact flow
points $y_{j}=\Phi_{jh}(z_{0})$ both retained in $K_{1}$ — the finite-time
bound
$$\lVert z_{n}-y_{n}\rVert\le C_{1}h^{2}\frac{e^{LT}-1}{L}\quad(L>0), \qquad \lVert z_{n}-y_{n}\rVert\le C_{1}Th^{2}\quad(L=0)$$
holds with $L$ the sup-norm bound on the derivative of the Hamiltonian
field over the tube. The hypothesis that the iterates remain in the compact
set is part of the statement; no first-exit claim is made here.

## Additive per-step error

The implementation error is not analysed as floating-point arithmetic.
Instead, [[lem-cm-roundoff-accumulation-in-one-step-schemes]] assumes
computed points $x_{j}$ with $\lVert x_{j+1}-V_{h}(x_{j})\rVert\le\eta$ and a
Lipschitz bound for $V_{h}$ with constant $1+Lh$, and concludes
$$\lVert x_{n}-z_{n}\rVert\le\eta\,\frac{(1+Lh)^{n}-1}{Lh} \le\eta\,e^{LT}\frac{T}{h}\quad(nh\le T,\ L>0),$$
and, for any observable $F$ Lipschitz with constant $\Lambda$,
$\lvert F(x_{n})-F(z_{n})\rvert\le\Lambda\eta\bigl((1+Lh)^{n}-1\bigr)/(Lh)$.
A Lipschitz readout of the protocol therefore converts a trajectory bound
into a bound on the difference of the computed and exact prediction maps by
multiplication with its Lipschitz constant. The number $\eta$ is a
**hypothesis on the per-step residual**, not a measurement of an arithmetic
unit, and the lemma says nothing about the distribution of rounding.

## The analytic long-time branch

For analytic splitting data on a complex neighbourhood, with the domain
radius, step-size restriction $0<h\le h_{0}$ and compact retention of the
iterates through the stated time window, there are constants $C,c>0$ with
$$|H_{h}(z_{n})-H_{h}(z_{0})|\le Cnh\,e^{-c/h},\qquad |H(z_{n})-H(z_{0})|\le Ch^{2}\quad\text{when }nh\le e^{c/(2h)},$$
where $H_{h}$ is the finite optimally truncated modified Hamiltonian of
[[thm-cm-analytic-verlet-energy-on-exponential-times]]. Adding the
implementation error, [[lem-cm-separate-roundoff-energy-accumulation]] gives
$$|H(x_{n})-H(x_{0})|\le 2C_{E}h^{2}+Cnh\,e^{-c/h}+C_{G}n\eta$$
for computed points with per-step residual at most $\eta$. Both statements
keep every hypothesis of the cited items, including the small-step bound,
the holomorphy domain and the retention of iterates in the compact set; the
first is a discrete-time energy estimate, not an estimate of the original
trajectory on exponentially long times.

## What is and is not certified

The bounds above compare the computed sequence with the exact motion of the
same model. They are silent about the difference between the model and a
physical system, and they do not certify any apparatus. Exact
symplecticity of the Verlet map is a statement about exact arithmetic
([[rem-cm-scope-of-the-certified-verlet-estimates]]); the additive residual
hypothesis is the only interface through which the arithmetic enters, and
rounded symplecticity is not claimed. Consequently a numerically computed
trajectory, fit or error budget is a computation on the model under the
stated hypotheses, not an experiment, not a measurement, and not evidence
for the model. The constants $C_{1},L,h_{1},C,C_{E},C_{G},c$ are data of
the cited statements; no numerical value of any of them for a physical
system is asserted here.
