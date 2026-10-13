---
id: rem-cm18-numerical-error
kind: remark
title: "Numerical error in a prediction pipeline: certified velocity-Verlet
  bounds, additive per-step error, the analytic long-time branch, and the
  separation from model error"
status: draft
origin: pipeline
domain: physics
deps:
  - def-cm18-observable-model
  - def-cm-local-flow-of-an-autonomous-system
  - def-cm-splitting-hamiltonian-and-verlet-map
  - lem-cm-verlet-local-truncation-error-is-cubic
  - thm-cm-verlet-finite-time-error-is-quadratic
  - lem-cm-roundoff-accumulation-in-one-step-schemes
  - thm-cm-analytic-verlet-energy-on-exponential-times
  - lem-cm-separate-roundoff-energy-accumulation
  - rem-cm-scope-of-the-certified-verlet-estimates
  - def-cm18-sampling-model
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
  def-cm18-sampling-model: formulation-prerequisite
dependency_level: 19
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope remark on the numerical phase of a prediction pipeline
  for an operational observable model of the force branch: the certified
  finite-time discretization and additive per-step error bounds for the
  velocity-Verlet method, the analytic long-time energy estimates under their
  holomorphy, step-size and compact-retention hypotheses, and the strict
  separation of these numerical bounds from any separately defined
  model-to-system discrepancy and
  the observation and sampling errors. The item asserts no numerical result for
  a physical system and no all-time accuracy of any method."
sources:
  references:
    - title: "E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 2
        'Symplectic integrators', Sections 1-2 and 4: the Stormer-Verlet scheme,
        its symmetry and order, printed pages 1-9"
      url: "https://www.unige.ch/~hairer/poly_geoint/week2.pdf"
    - title: "E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 3
        'Backward error analysis', Sections 1-3 and 5: local versus global
        error, accumulation of per-step perturbations, the modified equation and
        its exponential-time estimates, printed pages 1-12"
      url: "https://www.unige.ch/~hairer/poly_geoint/week3.pdf"
    - title: "A. Quillen, PHY411 Lecture notes Part 7 'Integrators' (University of
        Rochester), Sections 1.1-1.2: local versus global error accumulation for
        one-step methods, printed pages 2-7"
      url: "https://astro.pas.rochester.edu/~aquillen/phy411/lecture7.pdf"
verification:
  precheck: n/a
---

## Model error and numerical error are different

The prediction map of an operational observable model
([[def-cm18-observable-model]]) is defined from the exact maximal motions of
the force model. A numerical pipeline replaces those motions by a computed
sequence, and at least five distinct sources of discrepancy must be kept
apart. A **model-to-system discrepancy** can be defined only after an
application supplies a reconstructed physical trajectory $\chi:J\to Q$ in
the same frame and a metric $d$ on $Q$: for a model motion $x:J\to Q$, one
possible pointwise discrepancy is $t\mapsto d(x(t),\chi(t))$. This
framework supplies neither $\chi$ nor $d$ and proves no bound on that
discrepancy. The **discretization error** is the difference between a
computed sequence and the exact flow of the same model; the
**implementation error** is the per-step residual of the arithmetic
actually performed; the **observation error** is $\varepsilon$ of the
protocol; and the **sampling error** is the fluctuation of an estimator such
as $\overline Y$ around its model mean in [[def-cm18-sampling-model]], under
its adopted dependence and moment hypotheses. Only the discretization and
implementation errors admit the certified statements below, and those
statements are always about the model.

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
Instead, fix a metric state set $(X,d)$, for example a subset of phase space with the Euclidean distance, on which every Verlet stage is defined and $V_h:X\to X$. Require a positive step $h>0$, a separately established map bound $d(V_h(x),V_h(y))\le(1+L_{\mathrm{map}}h)d(x,y)$ for all $x,y\in X$, $L_{\mathrm{map}}\ge0$, and computed points $x_j\in X$ with $x_0=z_0$ and $d(x_{j+1},V_h(x_j))\le\eta$. The exact scheme iterates are $z_{j+1}=V_h(z_j)$. [[lem-cm-roundoff-accumulation-in-one-step-schemes]] then gives
$$d(x_n,z_n)\le\eta\frac{(1+L_{\mathrm{map}}h)^n-1}{L_{\mathrm{map}}h}\le\eta e^{L_{\mathrm{map}}T}\frac{T}{h}\qquad(nh\le T,\ L_{\mathrm{map}}>0),$$
with $d(x_n,z_n)\le n\eta\le\eta T/h$ if $L_{\mathrm{map}}=0$. For a readout $F:X\to\mathbb R$ with $0\le\Lambda<\infty$ and $|F(x)-F(y)|\le\Lambda d(x,y)$, multiply these bounds by $\Lambda$. The constant $L_{\mathrm{map}}$ is a bound for the numerical map, not the exact-field derivative constant $L$ of the preceding section; that flow bound does not establish the map hypothesis.
To combine discretization and implementation bounds, take $X$ to be a
subset of the declared numerical phase domain and additionally require
$y_j\in X$ for $0\le j\le n$. Require either that $d$ is the Euclidean
distance used for discretization, or a finite constant $c_d\ge0$ with
$d(u,v)\le c_d\lVert u-v\rVert$ for all $u,v\in X$; in the Euclidean case
set $c_d=1$. Let $D_n$ and $I_n$ denote the displayed discretization and
implementation upper bounds, respectively, with all their hypotheses and a
common positive step satisfied. Then the triangle inequality in $(X,d)$
gives $d(x_n,y_n)\le d(x_n,z_n)+d(z_n,y_n)\le I_n+c_dD_n$.
For the readout $F$ above, evaluated in these same numerical state
coordinates, $|F(x_n)-F(y_n)|\le\Lambda(I_n+c_dD_n)$. A multi-time
readout requires a Lipschitz bound in a declared product-state metric and
comparison bounds in that metric for the ordered state tuples. A common
underlying set alone supplies no comparison between metrics.
The number $\eta$ is a
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
for the model. The constants $C_{1},L,L_{\mathrm{map}},h_{1},C,C_{E},C_{G},c$ are data of
the cited statements; no numerical value of any of them for a physical
system is asserted here.
