---
id: prop-parallel-transport-under-reparametrization-reversal-and-concatenation
kind: proposition
title: "Parallel transport under reparametrization reversal and concatenation"
status: published
origin: pipeline
deps: ["thm-parallel-transport-is-a-linear-isomorphism","prop-local-frame-formula-for-covariant-differentiation-along-a-curve","thm-existence-and-uniqueness-of-parallel-sections"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-12
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

An increasing smooth surjective reparametrization $h:[c,d]\to[a,b]$, allowing $h'=0$, leaves endpoint transport unchanged. A decreasing one reverses it. If $\gamma_1$ ends where $\gamma_2$ starts, their concatenation, traversing $\gamma_1$ first, satisfies
$$P_{\gamma_2*\gamma_1}=P_{\gamma_2}\circ P_{\gamma_1},\qquad P_{\bar\gamma}=P_\gamma^{-1}.$$
These assertions include piecewise smooth reparametrizations when the composed curves admit finite smooth subdivisions, as well as inserted constant pauses.

## Facts & Assumptions

**Given:** The stated curves and time changes, with the displayed endpoint conditions.

[F1] The local derivative is $v'+\omega(\dot\gamma)v$ ([[prop-local-frame-formula-for-covariant-differentiation-along-a-curve]]).

[F2] Parallel initial-value sections are unique ([[thm-existence-and-uniqueness-of-parallel-sections]]).

[F3] Reverse transport is the inverse isomorphism ([[thm-parallel-transport-is-a-linear-isomorphism]]).

## Proof

1.1 On a smooth frame segment the chain rule gives $D_u(V\circ h)=h'(u)(D_tV)(h(u))$ from the two terms in [F1]. Thus a reparametrized parallel section is parallel even where $h'=0$. Continuity past corners and a common finite refinement give the same result piecewise. By uniqueness, the transported endpoint vector is the value of this section, so increasing endpoint-preserving time changes leave $P$ unchanged. A pause has constant section and makes no change. [F1, F2]

2.1 A decreasing time change exchanges endpoints; the same calculation gives backward transport, which equals the inverse by [F3]. To concatenate, first take the parallel section with input $v$ along $\gamma_1$, then the one with input $P_{\gamma_1}v$ along $\gamma_2$. They agree at the joining point, hence give a continuous piecewise parallel section on the concatenation. Uniqueness identifies its endpoint with $P_{\gamma_2*\gamma_1}v$, proving the composition order. A singleton or constant piece has identity transport; zero-rank fibres have the unique identity map. All refinements and concatenations here have finitely many pieces. [F2, F3, step 1.1] ∎
