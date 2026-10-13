---
id: pthm-cm14-adiabatic-invariance
kind: physics-theorem
title: "Adiabatic invariance of the action of a slowly varying one-frequency
  model: an order-$\\varepsilon$ drift bound on the $O(1/\\varepsilon)$ time
  scale"
status: draft
origin: pipeline
domain: physics
dependency_level: 27
deps:
  [
    cor-cm-action-angle-radian-scaling,
    pthm-cm14-action-angle,
    def-cm14-complete-integrability,
    def-cm13-two-form,
    pthm-cm13-two-form-is-symplectic,
    def-cm13-canonical-form,
    def-cm13-hamiltonian-field,
    pthm-cm13-hamiltonian-field-integrates-the-model-equations,
    def-cm12-hamiltonian,
    pthm-cm12-mechanical-hyperregularity,
    def-cm12-cotangent-momentum,
    def-cm07-action-and-mechanical-lagrangian,
    def-cm07-generalized-coordinates-and-forces,
    def-cm03-potential-and-mechanical-energy,
    post-cm02-force-superposition,
    def-cm01-configuration,
    def-cm01-units,
    def-cm02-newtonian-flow,
    thm-cm-adiabatic-invariant-drift-bound,
    def-cm-parameter-dependent-action-angle-branch,
    prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart,
    def-hamiltonian-vector-field-and-hamiltonian-function,
    def-ck-euclidean-maps-and-diffeomorphisms,
    def-directional-and-partial-derivatives,
    def-jacobian-matrix-and-gradient,
    def-metric-topology,
    def-interval,
    pthm-cm12-hamilton-equivalence
  ]
dependency_roles:
  cor-cm-action-angle-radian-scaling: mathematical-premise
  pthm-cm14-action-angle: physical-result
  def-cm14-complete-integrability: formulation-prerequisite
  def-cm13-two-form: formulation-prerequisite
  pthm-cm13-two-form-is-symplectic: physical-result
  def-cm13-canonical-form: formulation-prerequisite
  def-cm13-hamiltonian-field: formulation-prerequisite
  pthm-cm13-hamiltonian-field-integrates-the-model-equations: physical-result
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
  def-cm12-cotangent-momentum: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  thm-cm-adiabatic-invariant-drift-bound: mathematical-premise
  def-cm-parameter-dependent-action-angle-branch: mathematical-premise
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-hamiltonian-vector-field-and-hamiltonian-function: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-metric-topology: mathematical-premise
  def-interval: mathematical-premise
  pthm-cm12-hamilton-equivalence: physical-result
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Adiabatic invariance of the action coordinate of a declared
  hyperregular potential presentation of the framework's force branch when the
  model carries a slow real parameter: if in a one-degree-of-freedom radian
  action-angle chart the branch Hamiltonian is $h(I,s)+\\varepsilon
  k(I,\\theta,s)$ with nonvanishing frequency $|\\partial_Ih|\\ge\\omega_0$ and
  the parameter runs as $s(t)=s_0+\\varepsilon t$, then along every model
  solution that stays in the compact chart region the action changes by at most
  the displayed order-$\\varepsilon$ bound on $0\\le t\\le A/\\varepsilon$. The
  statement uses a dimensionless slow parameter, an inverse-time slow rate,
  energy-dimension h and action-dimension k; it is conditional on C2 open
  extension data, a uniform fixed canonical chart for the parameter-dependent
  Hamiltonian on the zero-residual-force branch, the frequency bound and the trapping of the
  solution; it asserts no exact invariance, no statement across a separatrix or
  a chart boundary, and no empirical content."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015
        printing), Section 4.6, Eqs. (4.148)-(4.158), printed pages 113-115 (PDF
        pages 119-121): the slow-parameter action calculation and the author's
        explicit remark that stricter proofs are deferred to the literature"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics
        (title page last edited September 1, 2026), Section 10.2, Eqs.
        (10.39)-(10.42), chapter pages 5-8 (PDF pages 241-244): the averaged
        energy-change identity and the adiabatic invariance of the action
        variable, with stricter proofs of the final statement referred to the
        literature in the source's footnote"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014
        course text), Chapter 5, Sections 5.2-5.3, Eqs. (5.23)-(5.28), printed
        pages 96-98 (PDF pages 99-101): secular versus periodic first-order
        effects after averaging over one period, with no general convergence or
        remainder theorem"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac3\
        3f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with
the momentum charts and canonical coordinates of [[def-cm13-two-form]],
[[pthm-cm13-two-form-is-symplectic]] and [[def-cm13-canonical-form]], the
Hamiltonian fields of [[def-cm13-hamiltonian-field]] and the branch
Hamiltonian $H$ of [[def-cm12-hamiltonian]]. Fix one momentum chart and
let $(I,\theta)$ be a fixed, time-independent one-degree-of-freedom canonical chart of the presentation on an open set
$U$ of that phase domain, with radian angles and
$\omega=d\theta\wedge dI$ there, obtained from the period-one chart of [[pthm-cm14-action-angle]] by
$\theta^{\mathrm{rad}}=2\pi\theta^{\mathrm{one}}$,
$I^{\mathrm{rad}}=I^{\mathrm{one}}/(2\pi)$ as in
[[cor-cm-action-angle-radian-scaling]], suppressing the radian superscripts; $I$ has the
action dimension of clause 2 of that theorem. Use the dimensions of
[[def-cm01-units]]: $[t]=\tau$, $[I]=\mu\ell^2\tau^{-1}$,
$[\theta]=[s]=[s_0]=[A]=1$, $[\varepsilon]=[\omega_0]=\tau^{-1}$,
$[h]=[K_s]=\mu\ell^2\tau^{-2}$ and $[k]=\mu\ell^2\tau^{-1}$.
Thus $\varepsilon$ is the prescribed slow parameter rate, $A$ is the
dimensionless parameter excursion, and $A/\varepsilon$ is a duration.
Let $\varepsilon,A,\omega_0>0$ have these dimensions. Let
$\widehat J,\widehat S\subseteq\mathbb R$ be open intervals, and let
$J\subseteq\widehat J$ and $S\subseteq\widehat S$ be intervals with nonempty interiors
([[def-interval]]), let $K\subseteq J$ and $S_{0}\subseteq S$ be compact
intervals, let $s_{0}\in S_{0}$, and let

$$h:\widehat J\times\widehat S\longrightarrow\mathbb R,\qquad k:\widehat J\times\mathbb R\times\widehat S\longrightarrow\mathbb R$$
be of class $C^{2}$ on these open domains, with $k$ $2\pi$-periodic in its second variable on $J\times\mathbb R\times S$
([[def-ck-euclidean-maps-and-diffeomorphisms]]). Suppose:

1. **(slow datum)** for every parameter value $s\in S$ and every
   $(I,\theta)\in J\times\mathbb R$ in the chart, the branch Hamiltonian
   of the model restricted to the chart is
   $$K_{s}(I,\theta)=h(I,s)+\varepsilon\,k(I,\theta,s);$$
2. **(nonvanishing frequency)** $|\partial_{I}h(I,s)|\ge\omega_{0}$ for
   all $(I,s)\in K\times S_{0}$;
3. **(parameter path and solution)** $s(t):=s_{0}+\varepsilon t$, and
   $t\mapsto(I(t),\theta(t))$ on $[0,A/\varepsilon]$ is the chart
   expression of a motion of the model (on the potential branch, under
   the identification of clause 4 of [[pthm-cm14-action-angle]]) satisfying
   $I(t)\in K$ and $s(t)\in S_{0}$ for every $t\in[0,A/\varepsilon]$.

Then for every $t\in[0,A/\varepsilon]$,

$$|I(t)-I(0)|\le\varepsilon\Bigl[2\sup_{K\times[0,2\pi]\times S_{0}}|g|+A\sup_{K\times[0,2\pi]\times S_{0}}\bigl|\partial_{I}g\,\partial_{\theta}k-\partial_{\theta}g\,\partial_{I}k-\partial_{s}g\bigr|\Bigr],$$
where $g=(k-\langle k\rangle)/\partial_{I}h$ is the drift generator and
$\langle k\rangle(I,s)=\frac1{2\pi}\int_{0}^{2\pi}k(I,\theta,s)\,d\theta$
the angle average of $k$ ([[def-cm-parameter-dependent-action-angle-branch]]).
All partial derivatives are those of the ambient open extensions. The
generator has dimension $[g]=\mu\ell^2$; each term inside the second
supremum has that same dimension, so both terms multiplied by
$\varepsilon$ have action dimension. At the included time endpoints,
derivatives are relative to the nondegenerate interval $[0,A/\varepsilon]$.

The statement is conditional on the adopted force branch, the declared
presentation, the existence of the uniform action-angle chart, the
frequency bound and the trapping hypothesis; it asserts no exact
invariance of the action, no statement for parameter paths that leave the
chart, cross a separatrix or make the frequency vanish, and no empirical
content. In particular the order-$\varepsilon$ bound is a bound on the
stated horizon $[0,A/\varepsilon]$ and is not an asymptotic equivalence.

## Facts & Assumptions

**Given:** The presentation, the canonical chart $(I,\theta)$ with $\omega=d\theta\wedge dI$, the reals $\varepsilon,A,\omega_{0}$, the open extension intervals $\widehat J,\widehat S$, their subintervals $J,S$ and compact sets $K,S_{0}$, the point $s_{0}$, the $C^{2}$ functions $h,k$ with $k$ $2\pi$-periodic in $\theta$, the parameter path $s(t)=s_{0}+\varepsilon t$ and the solution $(I,\theta)$ with the stated trapping.

[F1] Chart data and dimension ([[pthm-cm14-action-angle]] clauses 1, 2 and 4, [[def-cm13-canonical-form]] clause (a), [[def-cm01-units]]): by [[cor-cm-action-angle-radian-scaling]], on $U$ the presentation's two-form is $\omega=d\theta\wedge dI$ with radian dimensionless angles and action coordinates of dimension $\mu\ell^{2}\tau^{-1}$; in these coordinates the Hamiltonian field of a $C^{2}$ function $K$ has components $X_{K}=(-\partial K/\partial\theta,\,\partial K/\partial I)$ in the ordered coordinates $(I,\theta)$, so the model's motions in the chart satisfy $\dot I=-\partial_{\theta}K$, $\dot\theta=\partial_{I}K$.

[F2] The datum of the branch ([[def-cm-parameter-dependent-action-angle-branch]]): with $K(I,\theta,s)=h(I,s)+\varepsilon k(I,\theta,s)$, the branch vector field is $(I,\theta,s)'=(-\varepsilon\partial_{\theta}k,\, \partial_{I}h+\varepsilon\partial_{I}k,\,\varepsilon)$, and a branch solution on an interval is a differentiable curve solving that system.

[F3] The mathematical drift bound ([[thm-cm-adiabatic-invariant-drift-bound]]): for the $C^{2}$ datum $h,k$ with $k$ $2\pi$-periodic in $\theta$, compact intervals $K\subseteq J$, $S_{0}\subseteq S$, $s_{0}\in S_{0}$, reals $\varepsilon,A,\omega_{0}>0$ with $|\partial_{I}h|\ge\omega_{0}$ on $K\times S_{0}$, and a branch solution on $[0,A/\varepsilon]$ with $s(0)=s_{0}$ that stays in $K\times S_{0}$, the action obeys the displayed order-$\varepsilon$ estimate with the drift generator $g=(k-\langle k\rangle)/\partial_{I}h$.

[F4] Model reading of the chart evolution ([[pthm-cm13-hamiltonian-field-integrates-the-model-equations]] clause 1, [[pthm-cm12-hamilton-equivalence]] clause 1, [[def-cm02-newtonian-flow]]): when $d\equiv0$, the Cartesian momentum-phase curves of model motions are exactly the integral curves of the branch Hamiltonian field; in a generalized-coordinate immersion, Hamiltonian curves instead correspond to the substituted Lagrange equations, and any reconstructed ambient motion satisfies those equations; in the chart $(I,\theta)$ these are the curves of [F1].

## Proof

**Proof technique:** direct; identify the model's motion in the fixed canonical chart with a branch solution of the abstract datum, then invoke the mathematical drift bound.

1.1 By [F1] and [F4], the chart expression $(I(t),\theta(t))$ of the model's motion satisfies $\dot I=-\partial_{\theta}K_{s(t)}$ and $\dot\theta=\partial_{I}K_{s(t)}$ for the branch Hamiltonian of hypothesis 1; substituting $K=h+\varepsilon k$ gives $\dot I=-\varepsilon\,\partial_{\theta}k(I,\theta,s(t))$ and $\dot\theta=\partial_{I}h(I,s(t))+\varepsilon\,\partial_{I}k(I,\theta,s(t))$. With the parameter path $s(t)=s_{0}+\varepsilon t$ from hypothesis 3, the triple $(I,\theta,s)$ therefore solves the branch system of [F2] on $[0,A/\varepsilon]$. [F1, F2, F4, given, algebra]

2.1 For the branch solution of step 1.1, the chain-rule calculation in [F3] gives $\frac{d}{dt}(I+\varepsilon g)=-\varepsilon^2(\partial_Ig\,\partial_\theta k-\partial_\theta g\,\partial_Ik-\partial_sg)$. The sign disappears upon taking absolute values. The compact trapping of hypothesis 3 gives $I(t)\in K$ and $s(t)\in S_{0}$ for every $t\in[0,A/\varepsilon]$, and hypothesis 2 gives $|\partial_{I}h|\ge\omega_{0}$ on $K\times S_{0}$; hence all hypotheses of [F3] are met for the branch solution of step 1.1. [given, step 1.1]

3.1 Applying [F3] to the branch solution of step 1.1 yields the displayed estimate for every $t\in[0,A/\varepsilon]$, with the drift generator $g=(k-\langle k\rangle)/\partial_{I}h$ of the datum; the hypotheses of [F3] were checked in step 2.1. [F2, F3, step 1.1, step 2.1]

4.1 The estimate of step 3.1 is the conclusion; collecting, the model's action coordinate drifts by at most order $\varepsilon$ on the $O(1/\varepsilon)$ horizon under the stated hypotheses. [step 1.1, step 3.1] ∎

## Remarks

- **What the bound does and does not say.** The right-hand side is $\varepsilon$ times a constant depending only on the datum through the suprema over the compact set $K\times[0,2\pi]\times S_{0}$ and on the rescaled horizon length $A$; it grows linearly in $A$ and is uniform in $\varepsilon$. It is not an exact conservation statement: the exact drift of the action is generally nonzero, and the theorem only bounds it.

- **Hypotheses are physical model assumptions.** The existence of the uniform fixed canonical chart for the parameter-dependent Hamiltonian with nonvanishing frequency and the trapping of the solution are hypotheses about the model family, not consequences of complete integrability of a single Hamiltonian: a family can pass through a separatrix or a critical frequency, where the estimate does not apply and the action need not be approximately constant. The companion mathematical page records the same qualification for the abstract bound.
