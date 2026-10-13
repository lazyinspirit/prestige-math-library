---
id: rem-cm18-qm-bridge
kind: remark
title: "The quantum bridge: a separate framework and requirements for a specified quantization and semiclassical correspondence result"
status: draft
origin: pipeline
domain: physics
deps: [def-cm18-observable-model, post-cm01-spacetime, post-cm01-frames, post-cm01-worldlines, rem-cm01-model-limit, post-cm02-force-superposition, def-cm02-newtonian-flow, pthm-cm02-ivp, rem-cm-inference-and-uncertainty-scope]
dependency_roles:
  def-cm18-observable-model: formulation-prerequisite
  post-cm01-spacetime: physical-assumption
  post-cm01-frames: physical-assumption
  post-cm01-worldlines: physical-assumption
  rem-cm01-model-limit: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
  pthm-cm02-ivp: physical-result
  rem-cm-inference-and-uncertainty-scope: mathematical-premise
dependency_level: 12
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope remark on the relation between this particle framework and a non-relativistic quantum framework: the point-particle idealization that the framework adopts, the ingredients a specified quantization and semiclassical-limit result would need (a reconstruction construction plus limit theorems with explicit domains and hypotheses), and the explicit absence of any such result from this framework. The item derives no quantum statement, predicts no quantum phenomenon, and attaches no quantum interpretation to the probability space of its observable models."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 4.8-4.8.1, printed pages 126-129: canonical quantization as a prescription between Poisson brackets and commutators, the one-dimensional Schrödinger equation and the phase-amplitude substitution leading formally to the Hamilton-Jacobi equation. Equation (4.204) displays an inequality that omits a square."
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Tong, Advanced Quantum Mechanics lecture notes, equation (6.13): the local WKB condition hbar |d2W/dx2| << |dW/dx|^2"
      url: "https://www.damtp.cam.ac.uk/user/tong/aqm/aqmsix.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.1 point (vi), chapter page 3 (PDF page 7): classical mechanics neglects the quantum-mechanical uncertainties, which is why the position of a particle is modelled by a single point; and Section 1.2, chapter page 3: Newton's laws are experimental in nature and cannot be derived from purely theoretical arguments"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: n/a
---

## Two distinct frameworks

This framework describes a physical system by labels with $C^{2}$ worldlines
parametrized by frame time, fixed masses ([[post-cm01-worldlines]]) and a
declared force map whose maximal motions are deterministic objects
([[post-cm02-force-superposition]], [[def-cm02-newtonian-flow]],
[[pthm-cm02-ivp]]). The point-particle idealization itself is an adopted
description: the cited treatment records that it neglects the
quantum-mechanical uncertainties of the position. A quantum framework is a
**different model** whose state space, measurement structure and probability
rule must be specified in that model; this item chooses none of them. The
probability space of an operational observable model
([[def-cm18-observable-model]]) is attached to the declared error random
element of a coordinate readout; it is not a state, not an observable
algebra, and not a probability rule for a physical system, as
[[rem-cm-inference-and-uncertainty-scope]] already records for the
mathematical interface.

## What a semiclassical correspondence theorem would require

One common type of relation, a semiclassical correspondence theorem, requires
at least two separately specified parts:

1. a **reconstruction or quantization construction**: a declared map from
   data of the mechanical model to the objects of the quantum framework, with
   its domain, its algebraic consistency conditions and its treatment of
   ordering ambiguities. The cited treatment presents canonical quantization
   as exactly such a prescription between Poisson brackets and commutators;
   it is an additional rule, not a theorem of this framework, and the
   replacement of a classical phase-space variable by an operator is not a
   deduction inside it.
2. **limit theorems with explicit hypotheses**: statements that specified
   quantum predictions converge, in a stated topology and under stated
   regularity and small-parameter conditions, to specified classical
   predictions, with an error estimate. For the cited one-dimensional model,
   let $J\subseteq\mathbb R$ be an open position interval, let
   $I\subseteq\mathbb R$ be an open time interval, let $m>0$ and $\hbar>0$ be constants, and let
   $V:J\to\mathbb R$ be a continuous potential in energy units. The wavefunction
   $\psi:J\times I\to\mathbb C$ satisfies the Schrödinger equation
   $$i\hbar\,\partial_t\psi=-\frac{\hbar^2}{2m}\,\partial_q^2\psi+V(q)\psi.$$
   On an open subregion where $\psi\ne0$ and a phase is chosen, assume
   $\psi,A,W$ have one continuous time derivative and two continuous position
   derivatives, and write $\psi(q,t)=A(q,t)e^{iW(q,t)/\hbar}$ with real
   amplitude $A$ and phase $W$. Here $[W]=[\hbar]$ is action and
   $[q]=\ell$. Where
   $\partial_qW\ne0$, define the dimensionless ratio
   $$r(q,t):=\frac{\hbar\lvert\partial_q^2W(q,t)\rvert}{\lvert\partial_qW(q,t)\rvert^2}.$$
   This ratio records the phase-curvature comparison, but alone does not
   control the amplitude derivatives. With $A\ne0$, the real part of the
   substituted equation gives the exact identity
   $$\partial_tW+\frac{1}{2m}(\partial_qW)^2+V(q)=\frac{\hbar^2}{2m}\frac{\partial_q^2A}{A}.$$
   Indeed, differentiating twice gives
   $$e^{-iW/\hbar}\partial_q^2\psi=\partial_q^2A+\frac{2i}{\hbar}(\partial_qA)(\partial_qW)+\frac{iA}{\hbar}\partial_q^2W-\frac{A}{\hbar^2}(\partial_qW)^2,$$
   while $e^{-iW/\hbar}\partial_t\psi=\partial_tA+iA\partial_tW/\hbar$;
   taking real parts yields the identity. Thus, on a region where
   $\partial_qW\ne0$, an additional explicit bound
   $$\eta(q,t):=\frac{\hbar^2|\partial_q^2A/A|}{|\partial_qW|^2}\le\epsilon,\qquad 0\le\epsilon<1,$$
   makes the Hamilton-Jacobi residual at most
   $\epsilon|\partial_qW|^2/(2m)$ in absolute value. Neglecting that bounded
   residual gives the local Hamilton-Jacobi approximation; convergence of
   solutions requires a separate theorem and is not established by this
   comparison. Both $r$ and $\eta$ are dimensionless. The Classical Dynamics
   PDF's equation (4.204) prints a comparison without the square on
   $|\partial_qW|$; since $[W]$ is action and $[q]$ is length, that comparison
   is dimensionally inconsistent. The squared phase-curvature comparison
   appears in Advanced Quantum Mechanics, equation (6.13), in its stationary
   exponential ansatz. It does not by itself supply the amplitude bound for
   the real phase-amplitude representation used here.

## What is not claimed

No quantization construction, no semiclassical limit theorem, no
correspondence principle, no derivation of quantum mechanics from this
framework and no derivation of this framework from a quantum one is
asserted. No quantum phenomenon is predicted, explained or excluded here;
this classical item assigns no trajectory between preparation and detection in a quantum experiment and makes no universal claim about trajectories in other quantum models; and the error random element of an observable
model is not identified with a quantum measurement outcome. A bridge
between the frameworks would be a separate development stating its own
construction, hypotheses and error control, and would not change the status
of any statement on this page.
