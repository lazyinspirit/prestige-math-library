---
id: rem-expander-sync-analytic-convergence
kind: remark
title: Single-point convergence for analytic gradient flows
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-energy
  - prop-expander-sync-gradient-flow
  - def-expander-sync-states
  - def-expander-sync-phase-locked
  - prop-expander-prereq-analytic-periodic-flow-convergence
  - def-expander-prereq-periodic-analytic-potentials
  - def-expander-prereq-rotation-reduction
  - math:def-countable-choice
  - lem-author-ee25311adb41-analytic-metric-transfer
  - lem-author-ee25311adb41-compact-manifold-point-limit
  - math:def-extended-riemannian-distance-on-a-disconnected-manifold
  - math:def-connected-component-and-quasicomponent
  - math:thm-components-partition-and-are-closed
  - math:thm-closed-subspace-of-a-compact-space-is-compact
  - math:cor-every-smooth-vector-field-on-a-compact-manifold-is-complete
  - math:def-riemannian-gradient-of-a-smooth-function
dependency_roles:
  def-expander-sync-energy: mathematical-premise
  prop-expander-sync-gradient-flow: mathematical-premise
  def-expander-sync-states: mathematical-premise
  def-expander-sync-phase-locked: mathematical-premise
  prop-expander-prereq-analytic-periodic-flow-convergence: mathematical-premise
  def-expander-prereq-periodic-analytic-potentials: mathematical-premise
  def-expander-prereq-rotation-reduction: mathematical-premise
  math:def-countable-choice: mathematical-premise
  lem-author-ee25311adb41-analytic-metric-transfer: mathematical-premise
  lem-author-ee25311adb41-compact-manifold-point-limit: mathematical-premise
  math:def-extended-riemannian-distance-on-a-disconnected-manifold: mathematical-premise
  math:def-connected-component-and-quasicomponent: mathematical-premise
  math:thm-components-partition-and-are-closed: mathematical-premise
  math:thm-closed-subspace-of-a-compact-space-is-compact: mathematical-premise
  math:cor-every-smooth-vector-field-on-a-compact-manifold-is-complete: mathematical-premise
  math:def-riemannian-gradient-of-a-smooth-function: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 2, Section 1, homogeneous phase-locking and rotating-frame
        paragraphs; PDF p. 3, Section 1, paragraph citing Lageman [30]
      statement: Trajectories of a gradient flow of an analytic potential on a compact
        analytic manifold converge to single critical points, as stated in the
        article via the Łojasiewicz gradient inequality. In particular,
        homogeneous Kuramoto trajectories converge to a single equilibrium in
        the rotating frame, and original-frame phase differences approach
        constants.
      hypotheses: A gradient flow of a real analytic potential on a compact analytic
        manifold; in the homogeneous graph Kuramoto application, all intrinsic
        frequencies are equal and the common rotation is removed.
      reading_limits: PDF pp. 2–3 were inspected as rendered pages and extracted text
        for the stated attribution and scope. The article supplies attribution
        only, not a proof premise. Lageman [30] and the analytic-geometry proof
        of the gradient inequality were not read here.
formulation_deps:
  - def-expander-sync-energy
  - prop-expander-sync-gradient-flow
  - def-expander-sync-states
  - def-expander-sync-phase-locked
  - def-expander-prereq-periodic-analytic-potentials
  - def-expander-prereq-rotation-reduction
  - math:def-countable-choice
  - lem-author-ee25311adb41-analytic-metric-transfer
  - math:def-riemannian-gradient-of-a-smooth-function
argument_deps:
  - def-expander-sync-energy
  - prop-expander-sync-gradient-flow
  - def-expander-sync-states
  - def-expander-sync-phase-locked
  - prop-expander-prereq-analytic-periodic-flow-convergence
  - def-expander-prereq-periodic-analytic-potentials
  - def-expander-prereq-rotation-reduction
  - math:def-countable-choice
  - lem-author-ee25311adb41-analytic-metric-transfer
  - lem-author-ee25311adb41-compact-manifold-point-limit
  - math:def-extended-riemannian-distance-on-a-disconnected-manifold
  - math:def-connected-component-and-quasicomponent
  - math:thm-components-partition-and-are-closed
  - math:thm-closed-subspace-of-a-compact-space-is-compact
  - math:cor-every-smooth-vector-field-on-a-compact-manifold-is-complete
  - math:def-riemannian-gradient-of-a-smooth-function
dependency_level: 8
---

## Statement

Assume countable choice. Let $M$ be a compact finite-dimensional real analytic manifold without boundary, equipped with a smooth positive-definite Riemannian metric $g$, and let $U:M\to\mathbb R$ be real analytic. Every maximal downward gradient trajectory $q'=-\operatorname{grad}_g U$ through an initial state at time $0$ is defined for all $t\ge0$, has finite forward length and converges to a single critical point. In particular, homogeneous Kuramoto trajectories converge to a single equilibrium in the rotating frame, and original-frame phase differences approach constants (as circle-valued phases).

## Statement references

[[math:def-countable-choice]]

[[lem-author-ee25311adb41-analytic-metric-transfer]]

[[math:def-riemannian-gradient-of-a-smooth-function]]

[[def-expander-sync-energy]]

[[prop-expander-sync-gradient-flow]]

[[def-expander-sync-states]]

[[def-expander-sync-phase-locked]]

## Facts & Assumptions

[F1] A real analytic potential is smooth under the analytic-manifold conventions of [[lem-author-ee25311adb41-analytic-metric-transfer]]. Its Riemannian gradient is a smooth vector field ([[math:def-riemannian-gradient-of-a-smooth-function]]). Under countable choice, every smooth vector field on a compact manifold is complete ([[math:def-countable-choice]], [[math:cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]]). The point-limit lemma gives finite forward length and convergence on a nonempty connected compact analytic manifold ([[lem-author-ee25311adb41-compact-manifold-point-limit]]). Components of a manifold are open and a continuous trajectory stays in one component ([[math:def-extended-riemannian-distance-on-a-disconnected-manifold]], [[math:def-connected-component-and-quasicomponent]]). Components are closed, and a closed subspace of a compact space is compact ([[math:thm-components-partition-and-are-closed]], [[math:thm-closed-subspace-of-a-compact-space-is-compact]]).

[F2] The homogeneous Kuramoto energy is an analytic finite sum of cosine terms, its rotating-frame dynamics are its downward flat gradient flow, and equilibria are precisely its critical points. The phase-torus convergence supplier applies under countable choice. Diagonal phase rotations and relative-phase coordinates preserve all phase differences, with phase locking defined by convergence of those differences.

[F9] Exact suppliers: [[def-expander-sync-energy]], [[prop-expander-sync-gradient-flow]], [[def-expander-sync-states]], [[def-expander-sync-phase-locked]], [[prop-expander-prereq-analytic-periodic-flow-convergence]], [[def-expander-prereq-periodic-analytic-potentials]], [[def-expander-prereq-rotation-reduction]], [[math:def-countable-choice]], [[lem-author-ee25311adb41-analytic-metric-transfer]], [[lem-author-ee25311adb41-compact-manifold-point-limit]], [[math:def-extended-riemannian-distance-on-a-disconnected-manifold]], [[math:def-connected-component-and-quasicomponent]], [[math:thm-components-partition-and-are-closed]], [[math:thm-closed-subspace-of-a-compact-space-is-compact]], [[math:cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]], [[math:def-riemannian-gradient-of-a-smooth-function]].

## Proof

**Given:** The data and hypotheses of the Statement.

**Goal:** Establish its conclusion.

1.1 The analytic potential $U$ is smooth by [F1], and its negative Riemannian gradient is a smooth vector field because $g$ is smooth and positive definite. Apply the completeness corollary on compact $M$ under countable choice: the maximal trajectory through any initial state at time $0$ is defined for every real time, in particular for all $t\ge0$. Its forward image lies in its connected component $C$, since a connected time interval has connected image. The component is open by local connected coordinate balls and closed by the connected-component property, hence compact as a closed subset of $M$. Restricting the atlas, metric and potential to $C$ gives the hypotheses of the manifold point-limit lemma. That lemma supplies finite forward length and convergence to one critical point. Since $C$ is open, this is also a critical point on $M$. Empty $M$ has no trajectories; a zero-dimensional component is a singleton and the conclusions hold for its constant trajectory. [F1, F9, given]

2.1 For the homogeneous Kuramoto system use the finite phase torus with its flat metric. Its energy is the analytic potential from [F2], and the rotating-frame gradient supplier identifies precisely the downward flow. The periodic convergence proposition therefore supplies one limiting critical point, equivalently an equilibrium. The general statement in step 1.1 also applies; the torus proposition is a separate direct route to this special case. [F2, F9, step 1.1]

3.1 In the original frame the common added rotation cancels in every difference. The map taking torus phases to their difference in $\mathbb R/(2\pi\mathbb Z)$ is continuous, so convergence of the rotating-frame phases makes every difference converge to a constant circle phase. This is the phase-locked long-term behavior in the declared definition. No convergence of the common original-frame rotation itself is asserted. [F2, F9, step 2.1] ∎

## Source notes

The general compact analytic-manifold convergence claim and its homogeneous Kuramoto application are attributed to the article, Section 1, PDF pp. 2–3; the paragraph beginning “Nevertheless, each trajectory for our system converges to a single critical point” on p. 3 cites Lageman [30]. The statement above makes the boundaryless-manifold and Riemannian-gradient conventions explicit; the metric may be smooth and need not be analytic. The argument uses the mathematical suppliers above. The analytic inequality enters through the independently sourced analytic-gradient input used by the metric-transfer lemma. The cited article pages were inspected in the original PDF and extracted text for attribution. Lageman's full text and the analytic-geometry proof of the gradient inequality were not read here.
