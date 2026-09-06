---
id: lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits
kind: lemma
title: "A negative-gradient trajectory on a compact Morse manifold has single critical alpha and omega limits"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant, lem-a-limit-point-of-a-gradient-trajectory-is-critical, cor-every-smooth-vector-field-on-a-compact-manifold-is-complete, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Theorem 13.2"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
---

## Statement

Let $M$ be compact, let $f:M\to\mathbb R$ be Morse, and let $\gamma$ be a
negative-gradient trajectory. Then $\gamma$ is full and there are critical
points $\alpha(\gamma)$ and $\omega(\gamma)$ such that

$$ \lim_{t\to-\infty}\gamma(t)=\alpha(\gamma),\qquad \lim_{t\to\infty}\gamma(t)=\omega(\gamma). $$

## Facts & Assumptions

**Given:** A compact smooth manifold $M$, a Morse function $f$, and a negative-gradient trajectory $\gamma$.

[F1] A smooth vector field on a compact manifold is complete ([[cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]]).

[F2] Precompact full tails have nonempty compact connected invariant limit sets ([[lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant]]).

[F3] Such limit sets for a negative-gradient trajectory consist of critical points ([[lem-a-limit-point-of-a-gradient-trajectory-is-critical]]).

[F4] A Morse function on a compact manifold has finitely many critical points ([[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], the negative-gradient field is complete, so $\gamma$ has domain $\mathbb R$. Both tails have compact closure because they lie in $M$. [F1, given]

2.1 By [F2] each of $\alpha(\gamma)$ and $\omega(\gamma)$ is nonempty and connected, and [F3] places it in $\operatorname{Crit}(f)$. [F2, F3, step 1.1]

3.1 By [F4], $\operatorname{Crit}(f)$ is finite and hence discrete. A connected subset of a discrete finite set is one point, so both limit sets are single critical points. [F4, step 2.1]

4.1 A trajectory with singleton tail-limit set converges to that point: otherwise a sequence of tail times outside a fixed neighbourhood would have a limit point in the same tail-limit set. Thus the two displayed limits hold. [step 2.1, step 3.1] ∎
