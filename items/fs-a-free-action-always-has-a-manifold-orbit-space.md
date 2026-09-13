---
id: fs-a-free-action-always-has-a-manifold-orbit-space
kind: false-statement
title: A free action need not have a manifold quotient
status: draft
origin: pipeline
deps: [def-free-and-proper-lie-group-actions, thm-free-proper-action-quotient-manifold, lem-irrational-torus-flow-is-free-with-dense-orbits, def-topological-manifold-without-boundary]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Example 21.3, printed page 542; Theorem 21.10, printed pages 544–547
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: counterexample
---

## Statement

**False claim:** every free smooth action of a Lie group on a smooth manifold
has a manifold orbit space.

Properness cannot be omitted from the quotient-manifold theorem.

## Facts & Assumptions

**Given:** An irrational number $\alpha$ and the corresponding smooth left
action of $\mathbb R$ on $\mathbb T^2$.

[F1] That action is free, every orbit is dense, and its identity orbit is the
image of an injective immersion.
[[lem-irrational-torus-flow-is-free-with-dense-orbits]].

[F2] A topological manifold in the library convention is Hausdorff.
[[def-topological-manifold-without-boundary]].

[F3] A free **proper** smooth action does have a smooth manifold quotient;
thus the sufficient theorem uses both hypotheses.
[[def-free-and-proper-lie-group-actions]],
[[thm-free-proper-action-quotient-manifold]].

## Refutation

**Proof technique:** counterexample.

1.1 Fix an irrational number $\alpha$ and let $\mathbb R$ act on $\mathbb T^2$ by $$t\mathbin{\cdot}(z,w)=\left(e^{2\pi i t}z,e^{2\pi i\alpha t}w\right).$$ By [F1], this is a smooth free action. [given, F1]

2.1 Its orbit quotient $\mathbb T^2/\mathbb R$ is not Hausdorff. Indeed, the identity orbit is proper because its intersection with $\{1\}\times S^1$ is the countable set $\{(1,e^{2\pi i\alpha n}):n\in\mathbb Z\}$ rather than the whole circle, while it is dense by [F1]. If the quotient were Hausdorff, its singleton orbit classes would be closed, and continuity of the quotient map would make every orbit closed, a contradiction. [F1, step 1.1, algebra]

3.1 By [F2], a non-Hausdorff space is not a topological manifold and therefore cannot be a smooth manifold. Hence the free action in step 1.1 has no manifold orbit space, refuting the claim. The contrast with [F3] identifies properness, not freeness, as the missing hypothesis. No choice principle is used. [F2, F3, step 1.1, step 2.1, discharge-construct: counterexample] ∎
