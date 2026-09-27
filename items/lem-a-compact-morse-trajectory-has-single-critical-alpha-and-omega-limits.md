---
id: lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits
kind: lemma
title: "A negative-gradient trajectory on a compact Morse manifold has single critical alpha and omega limits"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-countable-choice, lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant, lem-a-limit-point-of-a-gradient-trajectory-is-critical, cor-every-smooth-vector-field-on-a-compact-manifold-is-complete, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Theorem 13.2"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $M$ be compact, let $f:M\to\mathbb R$ be Morse, and let $\gamma$ be a
negative-gradient trajectory. Then $\gamma$ is full and there are critical
points $\alpha(\gamma)$ and $\omega(\gamma)$ such that

$$ \lim_{t\to-\infty}\gamma(t)=\alpha(\gamma),\qquad \lim_{t\to\infty}\gamma(t)=\omega(\gamma). $$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a compact smooth manifold $M$, a Morse function $f$, and a negative-gradient trajectory $\gamma$.

[F1] Under the stated $\mathrm{AC}_\omega$ premise, a smooth vector field on a compact manifold is complete ([[cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]]). Proof 1.1 is the exact use of this choice assumption.

[F2] Precompact full tails have nonempty compact connected invariant limit sets ([[lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant]]).

[F3] Such limit sets for a negative-gradient trajectory consist of critical points ([[lem-a-limit-point-of-a-gradient-trajectory-is-critical]]).

[F4] A Morse function on a compact manifold has finitely many critical points ([[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], the negative-gradient field is complete, so $\gamma$ has domain $\mathbb R$. Both tails have compact closure because they lie in $M$. [F1, given]

2.1 By [F2] each of $\alpha(\gamma)$ and $\omega(\gamma)$ is nonempty and connected, and [F3] places it in $\operatorname{Crit}(f)$. [F2, F3, step 1.1]

3.1 By [F4], $\operatorname{Crit}(f)$ is finite and hence discrete. A connected subset of a discrete finite set is one point, so both limit sets are single critical points. [F4, step 2.1]

4.1 Let $p$ be the single point of $\omega(\gamma)$ and let $U$ be any open neighbourhood of $p$. If no positive tail lies in $U$, then every compact set $K_T=\overline{\gamma([T,\infty))}$ meets the closed set $M\setminus U$. The nested nonempty compact sets $K_T\cap(M\setminus U)$ have nonempty intersection by compactness, giving a point of $\omega(\gamma)\setminus U$, a contradiction. Thus $\gamma(t)\to p$ as $t\to\infty$; the same argument on negative tails proves convergence to the single point of $\alpha(\gamma)$. [F2, step 1.1, step 3.1] ∎
