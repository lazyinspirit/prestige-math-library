---
id: thm-stabilizers-are-closed-embedded-lie-subgroups
kind: theorem
title: Stabilizers are closed embedded Lie subgroups
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, def-orbit-stabilizer-and-orbit-map-of-a-smooth-action, thm-cartans-closed-subgroup-theorem, def-topological-manifold-without-boundary]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Stabilizer discussion and Closed Subgroup Theorem application, printed pages 541 and 551
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Definition 4.5 and Proposition 4.7, printed page 29
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. For a smooth action of a Lie group $G$ on a
Hausdorff smooth manifold $M$, every stabilizer $G_x$ is a closed embedded Lie
subgroup of $G$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth left action of $G$ on a Hausdorff
smooth manifold $M$, and $x\in M$.

[A1] The stabilizer is a subgroup and the orbit map $\Phi_x(g)=g\cdot x$ is
smooth. [[def-orbit-stabilizer-and-orbit-map-of-a-smooth-action]].

[A2] A closed subgroup has its unique embedded Lie-subgroup structure under
countable choice. [[def-countable-choice]],
[[thm-cartans-closed-subgroup-theorem]].

[F1] The manifold convention is Hausdorff, so singletons are closed.
[[def-topological-manifold-without-boundary]].

## Proof

**Proof technique:** realize the stabilizer as a closed fibre.

1.1 By [F1], $\{x\}$ is closed in $M$. Since $\Phi_x$ is continuous by [A1], $$G_x=\Phi_x^{-1}(\{x\})$$ is closed in $G$. It is a subgroup by the action laws in [A1]. [A1, F1]

2.1 Apply [A2] to the closed subgroup from step 1.1. It receives its unique embedded Lie-subgroup structure. If the action is trivial then $G_x=G$; if it is free then $G_x=\{e\}$. No properness, transitivity, connectedness, or effectiveness is used. Countable choice is used only through [A2]. [A2, step 1.1] ∎
