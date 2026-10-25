---
id: cex-a-proper-action-with-stabilizers-whose-quotient-is-not-a-principal-bundle
kind: counterexample
title: A proper nonfree action is not a principal bundle
status: published
origin: pipeline
deps: [prop-compact-lie-group-actions-are-proper, def-free-and-proper-lie-group-actions, def-principal-g-bundle-and-associated-fiber-bundle]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Example 21.2(e), printed pages 541–542; Corollary 21.6, printed page 544
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: constructive
---

## Statement refuted

**False claim:** every smooth proper Lie-group action makes its orbit
projection a principal bundle for that action.

## Facts & Assumptions

**Given:** The standard rotation action of $SO(2)$ on $\mathbb R^2$.

[F1] Every continuous action of a compact Lie group on a manifold is proper. [[prop-compact-lie-group-actions-are-proper]].

[F2] Freeness means that every stabilizer is trivial. [[def-free-and-proper-lie-group-actions]].

[F3] The group action in a principal bundle is free and transitive on every fibre. [[def-principal-g-bundle-and-associated-fiber-bundle]].

## Counterexample

**Proof technique:** constructive.

1.1 Let $SO(2)$ act on $\mathbb R^2$ by matrix multiplication. This is a smooth action, and $SO(2)$ is compact, so [F1] makes the action proper. [given, F1, construct]

2.1 Every rotation fixes the origin. Thus the stabilizer of $0$ is all of $SO(2)$ rather than the trivial group, and the action is not free by [F2]. [F2, step 1.1]

3.1 If the orbit projection $\mathbb R^2\to\mathbb R^2/SO(2)$ were a principal $SO(2)$-bundle for this action (or for the equivalent right action $x\cdot g=g^{-1}x$), [F3] would make the action free on the fibre over the orbit of $0$. Step 2.1 contradicts this. Hence properness without freeness does not yield a principal bundle. No choice principle is used. [F3, step 1.1, step 2.1, discharge-construct: counterexample complete] ∎
