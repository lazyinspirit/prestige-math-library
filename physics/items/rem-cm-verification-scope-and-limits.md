---
id: rem-cm-verification-scope-and-limits
kind: remark
title: "Scope and limits of the verification items on this page"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [def-cm-second-variation-of-the-action, lem-cm-second-variation-formula, prop-cm-oscillator-second-variation-signs, prop-cm-oscillator-boundary-value-nonuniqueness, def-cm-inertia-tensor-about-a-point, lem-cm-inertia-tensor-about-a-point-is-finite, thm-cm-parallel-axis-theorem, prop-cm-two-mass-spring-modes, prop-cm-pendulum-small-angle-linearization-bound]
dependency_roles:
  def-cm-second-variation-of-the-action: mathematical-premise
  lem-cm-second-variation-formula: mathematical-premise
  prop-cm-oscillator-second-variation-signs: mathematical-premise
  prop-cm-oscillator-boundary-value-nonuniqueness: mathematical-premise
  def-cm-inertia-tensor-about-a-point: mathematical-premise
  lem-cm-inertia-tensor-about-a-point-is-finite: mathematical-premise
  thm-cm-parallel-axis-theorem: mathematical-premise
  prop-cm-two-mass-spring-modes: mathematical-premise
  prop-cm-pendulum-small-angle-linearization-bound: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), §3.2.1, printed pp. 52-53: the parallel-axis claim is stated for a body of total mass M with the sum of the linear terms vanishing in the centre-of-mass frame"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), Section 2.1, printed page 12: the stationary path may be a minimum or a saddle point, so stationarity alone certifies neither minimisation nor maximisation"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Chapter 3 Section 3.2, printed pages 3-4 of Chapter 3 (PDF pages 36-37): linearisation about a fixed point is an analysis of the linearised equation, with the nonlinear equation retained as the actual model"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: n/a
---

## Scope of the verification items

Every item on this page is mathematics: the oscillator, the two-mass spring system, the pendulum
field and the mass distributions are mathematical objects with explicit parameters, and no item
asserts a physical law, a unit convention or a measured value. The following limits belong to the
claims and must be carried by any consumer.

- **The second-variation sign results are finite-time statements about the action.** The definition
  [[def-cm-second-variation-of-the-action]] and the formula of
  [[lem-cm-second-variation-formula]] concern the fixed-endpoint family $q+\varepsilon\eta$ of a
  $C^2$ Lagrangian chart on a compact interval and produce one real number per pair $(q,\eta)$. The
  saddle computation of [[prop-cm-oscillator-second-variation-signs]] is a statement about the
  action functional of the quadratic Lagrangian on $[0,T]$; it does not assert that any physical
  motion extremises a physical action, and it does not contradict any minimum principle, because
  stationarity and minimisation are distinct conditions (the scope note of Tong, Section 2.1).
  For $T>\pi/\omega$ both signs occur; the quantitative statement is
  exactly the one displayed, with the variations $\eta_n=\sin(n\pi t/T)$ and the exact identity
  $S(\varepsilon\eta_n)=\frac{\varepsilon^2}{2}\delta^2S(q_0)[\eta_n,\eta_n]$.

- **Endpoint degeneracy at $T=\pi/\omega$ is not a failure of the model.** At this value the
  displayed second-variation value in direction $\eta_1$ is zero and the Dirichlet problem of
  [[prop-cm-oscillator-boundary-value-nonuniqueness]] has the one-dimensional solution space
  $\{A\sin(\omega t)\}$, while initial-value problems remain uniquely solvable. More generally,
  the Dirichlet problem is non-unique exactly at $T=n\pi/\omega$ for positive integers $n$.
  This non-uniqueness is an underdetermination of a boundary-value problem, not a contradiction
  between the differential equation and its solutions. At $T=\pi/\omega$, the item also computes
  positive second-variation values in directions $\eta_n$ for $n\ge2$; it makes no claim about all
  remaining directions or about overall extremality at this duration.

- **The parallel-axis theorem is the centred positive-mass case.** [[thm-cm-parallel-axis-theorem]] assumes
  $\mu(\nu)=0$, that is, coordinates whose origin is the centre of mass, together with finite
  second moments, which for a bounded finite Borel measure are proved in
  [[lem-cm-inertia-tensor-about-a-point-is-finite]] and in the finiteness lemma of
  [[def-cm-mass-distribution-and-inertia-matrix]]. The theorem covers point, line, surface and
  volume measures, but only the centred identity
  $I_\nu(a)=I(\nu)+m(\lVert a\rVert_2^2I_3-aa^{\mathsf T})$; for a non-centred distribution the
  additional first-moment terms displayed in the proof of that theorem are present, and no
  physical assertion about any body is made.

- **The coupled-oscillator proposition is an exact statement about a linear system.**
  [[prop-cm-two-mass-spring-modes]] identifies the eigenmodes of the constant matrix
  $K=\begin{pmatrix}k+c&-c\\-c&k+c\end{pmatrix}$ and proves the decoupling bijection; it claims
  exactness for all times for the linear system with the stated parameter ranges. The degenerate
  case $k=0$ produces affine motion of the in-phase mode and is reported as such; no oscillatory
  frequency is attached to a vanishing eigenvalue.

- **The pendulum bound is finite-time, conditional and of order $\delta^2$.**
  [[prop-cm-pendulum-small-angle-linearization-bound]] is a conditional consequence of the
  explicit field $F(\theta,v)=(v,-\omega^2\sin\theta)$, the smallness condition
  $\delta e^{LT}<r$ and the cubic remainder $\lvert\sin\theta-\theta\rvert\le\lvert\theta\rvert^3/6$.
  It is not an assertion that the nonlinear pendulum is exactly harmonic, not a global or
  long-time statement, and not a report about any measured pendulum; the exactly harmonic system
  is the linearised equation $y_1''=-\omega^2y_1$ alone.
