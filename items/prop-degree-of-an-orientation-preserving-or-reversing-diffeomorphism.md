---
id: "prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism"
kind: "proposition"
title: "Degree of an orientation-preserving or reversing diffeomorphism"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-degree-of-a-proper-smooth-map-by-compact-support-cohomology","thm-change-of-variables-for-oriented-manifold-diffeomorphisms"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $F:M^n\to N^n$ be a diffeomorphism between nonempty connected oriented boundaryless manifolds. If $F$ preserves orientation, then $\deg(F)=1$; if it reverses orientation, then $\deg(F)=-1$.

## Facts & Assumptions

[F1] [[def-degree-of-a-proper-smooth-map-by-compact-support-cohomology]] characterizes the degree of a proper smooth map by its integral identity.

[F2] [[thm-change-of-variables-for-oriented-manifold-diffeomorphisms]] gives the integral pullback formula with sign $1$ or $-1$ according to orientation behavior.

## Proof

**Given:** The oriented diffeomorphism $F$ in the statement.

1.1 The inverse $F^{-1}:N\to M$ is continuous, so for each compact $K\subset N$, the set $F^{-1}(K)$ is the continuous image of $K$ under that inverse and is compact. Thus $F$ is proper and [F1] defines its degree. [F1, given]

2.1 If $F$ preserves orientation, [F2] gives $\int_MF^*\omega=\int_N\omega$ for every compactly supported top form $\omega$; if it reverses orientation, it gives $\int_MF^*\omega=-\int_N\omega$. Uniqueness in [F1] yields respectively $\deg(F)=1$ and $\deg(F)=-1$. For dimension zero this compares the two supplied point-orientation signs; connectedness makes the sign constant. Empty manifolds are excluded, the zero form is harmless because an integral-one class supplies uniqueness, and no representatives or families are chosen. [F1, F2, step 1.1] ∎
