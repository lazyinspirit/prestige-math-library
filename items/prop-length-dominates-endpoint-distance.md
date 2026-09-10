---
id: "prop-length-dominates-endpoint-distance"
kind: "proposition"
title: "Length dominates endpoint distance"
deps: ["def-riemannian-distance-on-a-connected-manifold"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For every piecewise $C^1$ curve $\gamma:[a,b]\to M$, $d_g(\gamma(a),\gamma(b))\le L_g(\gamma)$.

## Facts & Assumptions

**Given:** A connected Riemannian manifold and a piecewise $C^1$ curve.

[F1] [[def-riemannian-distance-on-a-connected-manifold]]: On a connected Riemannian manifold define $d_g(p,q)=\inf\{L_g(\gamma):\gamma\text{ is piecewise }C^1\text{ from }p\text{ to }q\}$. Lengths are those of def-riemannian-speed-and-length. For each pair $p,q$, lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve supplies a curve, so the set of lengths is nonempty, contains a finite real number and is bounded below by zero. Applying the least-upper-bound property cor-cauchy-reals-lub-complete to the negatives gives a finite nonnegative infimum. On the empty connected manifold this defines the empty distance function; there are no pairs to evaluate. No minimizing curve is part of this definition.

## Proof

**Proof technique:** direct.

1.1 The curve $\gamma$ itself belongs to the family defining $d_g(\gamma(a),\gamma(b))$, so its finite length is an element of that nonempty set. [F1, given]

2.1 An infimum is a lower bound for every element of its defining set. Applying this to $L_g(\gamma)$ proves the inequality, including a constant curve or singleton interval, when both sides are zero. [F1, step 1.1] ∎

## Source locator

Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.
