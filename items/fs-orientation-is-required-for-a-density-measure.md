---
id: fs-orientation-is-required-for-a-density-measure
title: "False: density measures require an orientation"
kind: false-statement
status: draft
origin: pipeline
deps: ["thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure", "prop-every-smooth-manifold-admits-a-positive-smooth-density", "fs-a-smooth-density-is-the-same-thing-as-a-top-form-on-a-nonorientable-manifold", "def-oriented-smooth-manifold-and-oriented-chart"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Lee Proposition 16.37 and following explanation p.430"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: direct
---

## Statement

False assertion: a nonorientable smooth manifold cannot carry a positive smooth density measure.

A counterexample is the open Möbius strip $(\mathbb R\times(-1,1))/\langle(s,t)\mapsto(s+1,-t)\rangle$: it is a smooth nonorientable surface carrying the descended positive smooth density $|ds\,dt|$.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Manifolds are Hausdorff, second countable and smooth, with boundary allowed; $n=0$ is allowed unless excluded. Densities are pointwise Borel, $0\cdot\infty=0$, and $\lambda_0(\mathbb R^0)=1$. Explicit nonorientable Möbius witness, with the source used at its Refutation rather than its weaker Statement.

[F1] [[def-oriented-smooth-manifold-and-oriented-chart]]: An orientation is a smooth choice of a determinant ray at every point.

[F2] [[thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure]]: A finite positive smooth density gives a Radon measure.

[F3] [[prop-every-smooth-manifold-admits-a-positive-smooth-density]]: Positive smooth densities exist also on nonorientable manifolds.

## Refutation

1.1 Let $T(s,t)=(s+1,-t)$ act on $X=\mathbb R\times(-1,1)$ and let $q:X\to M=X/\langle T\rangle$ be the quotient. It is open since $q^{-1}q(V)=\bigcup_{k\in\mathbb Z}T^kV$ is open for every open $V$. Rectangles of $s$-width less than one have disjoint translates, so $q$ restricts to a homeomorphism from each such rectangle onto an open chart. The quotient is Hausdorff: for two inequivalent points, first choose bounded neighborhoods; only finitely many integer translates can intersect them because their $s$-coordinates are bounded, and shrink the neighborhoods to exclude each of these finitely many intersections. Their quotient images then separate the two orbits. Images of rational rectangles form a countable base. Transition maps are restrictions of powers of $T$, hence smooth. If M had an orientation, its pullback to X would be a smooth sign $\sigma:X\to\{+1,-1\}$ relative to the coordinate frame. This sign is constant because X is connected (any two points are joined by a straight segment). But $DT=\operatorname{diag}(1,-1)$ implies $\sigma(Tp)=-\sigma(p)$, contradicting constancy. Thus M is a smooth nonorientable surface. [F1]

2.1 The explicit local coefficient one gives $|ds\,dt|$. Since $DT=\operatorname{diag}(1,-1)$ has absolute determinant one, all transition powers preserve this density. It descends to a positive smooth density on $M$, an explicit instance of the general existence theorem. Its coefficients are finite, so it defines a Radon measure. This nonorientable witness refutes the assertion. [F2, F3, step 1.1] ∎
