---
id: prop-pullback-connections-intertwine-parallel-transport
kind: proposition
title: "Pullback connections intertwine parallel transport"
status: published
origin: pipeline
deps: ["thm-pullback-connection-is-well-defined-and-functorial","thm-existence-and-uniqueness-of-parallel-sections","def-parallel-transport-along-a-piecewise-smooth-curve"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

For $f:N\to M$ smooth and $\gamma:[a,b]\to N$ piecewise smooth, let $J_t:(f^*E)_{\gamma(t)}\to E_{f(\gamma(t))}$ be the canonical fibre identification. Then
$$J_bP^{f^*\nabla}_\gamma=P^\nabla_{f\circ\gamma}J_a.$$

## Facts & Assumptions

**Given:** A connection on $E$, the map $f$ and the curve $\gamma$.

[F1] Pullback connections are functorial under the canonical bundle identifications ([[thm-pullback-connection-is-well-defined-and-functorial]]).

[F2] Parallel sections with an initial value are unique ([[thm-existence-and-uniqueness-of-parallel-sections]]).

[F3] Transport is endpoint evaluation of that section ([[def-parallel-transport-along-a-piecewise-smooth-curve]]).

## Proof

1.1 The fibre identifications give the canonical isomorphism $\gamma^*(f^*E)\cong(f\circ\gamma)^*E$. Functoriality identifies their connections and hence their derivatives in direction $\partial_t$. Thus they identify parallel sections, piecewise and continuously at all corners. Explicitly, both coefficient equations use $\omega_{f(\gamma(t))}(df_{\gamma(t)}\dot\gamma(t))$. [F1]

2.1 A parallel section on the left with initial vector $v$ corresponds to one on the right with initial vector $J_av$. Uniqueness and endpoint evaluation give the asserted identity on every $v$. Constant $f$ gives zero matrix in a fixed target fibre frame; no injectivity of $f$ or nonzero curve velocity is required. For $a=b$ the two sides are $J_a$, and rank-zero bundles have the unique maps. The identifications are canonical, not selected trivializations. [F2, F3, step 1.1] ∎
