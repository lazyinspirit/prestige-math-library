---
id: "prop-degree-is-multiplicative-under-composition"
kind: "proposition"
title: "Degree is multiplicative under composition"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-degree-of-a-proper-smooth-map-by-compact-support-cohomology","prop-compactly-supported-de-rham-cohomology-is-contravariant-for-proper-smooth-maps","thm-regular-value-formula-for-degree","prop-manifold-degree-is-functorial-and-detected-by-top-cohomology"]
verification:
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

For proper smooth maps $F:M^n\to N^n$ and $G:N^n\to P^n$ between nonempty connected oriented boundaryless manifolds,
$$\deg(G\circ F)=\deg(F)\deg(G).$$
The identity map has degree $1$. On closed manifolds these are the same integers and the same composition law as the homological degree.

## Facts & Assumptions

[F1] [[def-degree-of-a-proper-smooth-map-by-compact-support-cohomology]] characterizes degree by integration of every compactly supported top form.

[F2] [[prop-compactly-supported-de-rham-cohomology-is-contravariant-for-proper-smooth-maps]] gives $(G\circ F)_c^*=F_c^*G_c^*$ and identity pullback.

[F3] [[thm-regular-value-formula-for-degree]] identifies this degree with integral homological degree when the manifolds are closed.

[F4] [[prop-manifold-degree-is-functorial-and-detected-by-top-cohomology]] gives the choice-free homological identity and composition laws on closed manifolds.

## Proof

**Given:** The maps and orientations in the statement.

1.1 The composite is proper because for compact $K\subset P$, first $G^{-1}(K)$ and then $F^{-1}(G^{-1}(K))$ are compact. For $\omega\in\Omega_c^n(P)$, [F2] and [F1] give $$\int_M(G\circ F)^*\omega=\int_MF^*(G^*\omega)=\deg(F)\int_NG^*\omega=\deg(F)\deg(G)\int_P\omega.$$ The uniqueness clause of [F1] proves the displayed composition formula, including when either factor is zero. [F1, F2, given]

2.1 For the identity, $\int_M\operatorname{id}^*\omega=\int_M\omega$, so [F1] gives degree $1$. If all three manifolds are closed, [F3] identifies each scalar in step 1.1 with its homological degree, and the resulting equality is precisely the choice-free clause of [F4]; its separate AC-dependent top-cohomology clause is not used. In dimension zero the formula multiplies the source/intermediate and intermediate/target orientation signs, so the intermediate sign squares to $1$. Empty manifolds are excluded, degree-zero maps and identity endpoints were included above, and the proof makes no choice of forms because [F1] is an identity for every supplied form. [F1, F3, F4, step 1.1] ∎
