---
id: pthm-rpm-h-massive-and-null-time-motion
kind: physics-theorem
title: "Massive and null free particles in inertial time"
status: published
origin: pipeline
domain: physics
library: physics
empirical_premises: []
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-rpm-h-background-and-model-quantities, post-rpm-h-free-test-particle-action, post-rpm-h-massless-shell-action, thm-rpm-h-inertial-time-reduced-hamiltonian]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-rpm-h-background-and-model-quantities: formulation-prerequisite
  post-rpm-h-free-test-particle-action: physical-assumption
  post-rpm-h-massless-shell-action: physical-assumption
  thm-rpm-h-inertial-time-reduced-hamiltonian: mathematical-premise
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete lecture notes (arXiv:gr-qc/9712019v1)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Complete 238-page notes; Chapter 1, printed pp. 25–27, and Chapter 3, printed pp. 68–72; full relevant sections inspected."
    - title: "Andrew Hanson, Tullio Regge and Claudio Teitelboim, Constrained Hamiltonian Systems, 35-page excerpt"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0e1d11ee-2741-4da4-83ed-b7cabc0cd7d6/download"
      locator: "Chapter II, printed pp. 27–30."
physical_scope: "Conditional flat-spacetime kinematic prediction of the two adopted free models; no empirical speed measurement is claimed."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

In the flat inertial-time model of [[thm-rpm-h-inertial-time-reduced-hamiltonian]], the coordinate velocity is $\dot{\mathbf q}=c^2\mathbf p/E$. For $m>0$, its Euclidean magnitude is strictly less than $c$; for the separate massless model $m=0$ with $\mathbf p\ne0$, its magnitude is exactly $c$. Spatial momentum is constant in both cases. These are deductions from the adopted free actions, not experimental measurements.

## Facts & Assumptions

**Given:** Flat inertial coordinates, $c>0$, either the massive model with $m>0$ or the separately postulated nonzero-null model.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] [[post-rpm-h-free-test-particle-action]]: the massive square-root action is the adopted free model.

[F2] [[post-rpm-h-massless-shell-action]]: the massless branch is separately postulated with nonzero spatial momentum.

[F3] [[thm-rpm-h-inertial-time-reduced-hamiltonian]]: $E=\sqrt{m^2c^4+c^2|\mathbf p|^2}$, $\dot q=c^2\mathbf p/E$, and $\dot p=0$.


## Proof

1.1 Carry the inherited bundle-construction hypothesis [A1] when invoking the positive-energy shell supplier [F3]. By [F3], $\lvert\dot{\mathbf q}\rvert^2=c^4|\mathbf p|^2/(m^2c^4+c^2|\mathbf p|^2)=c^2\,c^2|\mathbf p|^2/(m^2c^4+c^2|\mathbf p|^2)$. For $m>0$, the positive term $m^2c^4$ makes the last fraction strictly less than one, giving speed below $c$. [given, A1, F3, algebra]

1.2 For $m=0$ with $\mathbf p\ne0$, $E=c|\mathbf p|$, so [F3] gives $\lvert\dot{\mathbf q}\rvert=c^2|\mathbf p|/(c|\mathbf p|)=c$. In either case [F3] gives $\dot{\mathbf p}=0$, so momentum is constant. [given, F2, F3, algebra]

2.1 The massive speed statement is a deduction within the [F1] model; the null statement uses its own separate premise [F2]. No step used or asserted an empirical observation. [F1, F2, step 1.1, step 1.2] ∎
