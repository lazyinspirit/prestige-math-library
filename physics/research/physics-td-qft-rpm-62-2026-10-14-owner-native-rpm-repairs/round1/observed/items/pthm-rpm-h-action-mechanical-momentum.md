---
id: pthm-rpm-h-action-mechanical-momentum
kind: physics-theorem
title: "Square-root action momentum equals massive mechanical momentum"
status: draft
origin: pipeline
domain: physics
library: physics
empirical_premises: []
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-rpm-h-background-and-model-quantities, thm-rpm-h-homogeneous-massive-shell, thm-sr-proper-time-and-observer-decomposition, post-rpm-h-free-test-particle-action, thm-rpm-h-first-order-action-and-geodesics, post-sr-massive-particle-dynamics, pthm-sr-momentum-and-four-force, def-gr-timelike-worldline-and-proper-time]
dependency_roles:
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  pthm-sr-momentum-and-four-force: physical-result
  post-sr-massive-particle-dynamics: physical-assumption
  thm-rpm-h-first-order-action-and-geodesics: mathematical-premise
  post-rpm-h-free-test-particle-action: physical-assumption
  def-countable-choice: mathematical-premise
  def-rpm-h-background-and-model-quantities: formulation-prerequisite
  thm-rpm-h-homogeneous-massive-shell: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete lecture notes (arXiv:gr-qc/9712019v1)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Complete 238-page notes; Chapter 1, printed pp. 25–27, and Chapter 3, printed pp. 68–72; full relevant sections inspected."
physical_scope: "Identity in the adopted massive point-particle model; the SR supplier is used only for the explicitly flat consistency check."
---

## Statement

For the massive square-root Lagrangian $L=-mc\sqrt{-g(V,V)}$ on a prescribed smooth Lorentzian background, its fibre derivative is $p=mc\,V^\flat/\sqrt{-g(V,V)}$. If τ is proper time along the timelike curve, $U=dx/d\tau=cV/\sqrt{-g(V,V)}$, so the raised momentum is $p^\sharp=mU$. In flat spacetime this agrees with the adopted special-relativistic mechanical momentum convention. This is a model identity, not a measurement.

## Facts & Assumptions

**Given:** A future timelike $C^1$ worldline on a smooth Lorentzian background, $m>0$, $c>0$, and the square-root action model.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] [[def-gr-timelike-worldline-and-proper-time]] supplies $d\tau=\sqrt{-g(V,V)}d\lambda/c$ on a future-timelike curve, and $U=dx/d\tau$. The parameter and SI quantity conventions are those of [[def-rpm-h-background-and-model-quantities]].

[F2] [[thm-rpm-h-homogeneous-massive-shell]]: fibre derivative of $L=-mc\sqrt{-g(V,V)}$ is $p=mcV^\flat/s$.

[F3] [[post-sr-massive-particle-dynamics]] adopts the flat massive-particle mechanical momentum $P=mU$, with its component identities supplied by [[pthm-sr-momentum-and-four-force]]. The geometric four-velocity and proper-time relation are supplied by [[thm-sr-proper-time-and-observer-decomposition]].

[F4] [[post-rpm-h-free-test-particle-action]]: the massive square-root action is the adopted free-particle model.

[F5] [[thm-rpm-h-first-order-action-and-geodesics]]: on the massive branch the canonical covector from the first-order model equals the square-root fibre derivative.

## Proof

1.1 Use the inherited smooth tangent bundle structure under [A1], adopt the square-root model [F4], and use the proper-time convention [F1]. Put $s=\sqrt{-g(V,V)}>0$. The proper-time definition gives $d\tau/d\lambda=s/c$, so $U=V/(d\tau/d\lambda)=cV/s$. [given, A1, F1, F4, algebra]

2.1 By [F2], $p^\sharp=mcV/s=mU$. This derives the mechanical-momentum identity from the adopted action by differentiation; it is not inferred merely from matching units. It agrees with the canonical covector in [F5]. [given, F2, F5, step 1.1, algebra]

3.1 In the flat specialization, [F3] uses the same mass-times-four-velocity convention, so the expression in step 2.1 agrees componentwise there. The curved statement itself used only the metric and proper-time definitions, not the flat theorem. [F3, step 2.1] ∎

