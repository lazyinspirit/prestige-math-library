---
id: prop-tangent-space-of-a-free-proper-quotient
kind: proposition
title: Tangent space of a free proper quotient
status: draft
origin: pipeline
deps: [thm-free-proper-action-quotient-manifold, thm-quotient-module-universal-property, lem-local-slice-for-a-free-proper-action]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Product and quotient coordinates in Theorem 21.10, printed pages 545–547
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

For a smooth free proper action and $x\in M$, the quotient differential is
surjective and

$$\ker(dq_x)=T_x(G\cdot x).$$

Consequently it induces a canonical linear isomorphism

$$T_xM/T_x(G\cdot x)\xrightarrow{\ \cong\ }T_{[x]}(M/G).$$

## Facts & Assumptions

**Given:** A smooth free proper action of $G$ on $M$, its quotient map
$q:M\to M/G$, and $x\in M$.

[F1] The quotient map is a smooth surjective submersion.
[[thm-free-proper-action-quotient-manifold]].

[F2] A slice gives product coordinates $G\times S\to G\cdot S$ around $x$.
[[lem-local-slice-for-a-free-proper-action]].

[F3] A linear map vanishing on a subspace factors uniquely through the vector
space quotient. [[thm-quotient-module-universal-property]].

## Proof

**Proof technique:** compute in slice-product coordinates.

1.1 Choose the slice $S$ through $x$ from [F2]. Under the diffeomorphism $A:G\times S\to G\cdot S$, the quotient map is the projection $(g,s)\mapsto s$, followed by the slice chart $S\cong q(G\cdot S)$. Its differential at $(e,x)$ is therefore the projection $T_eG\oplus T_xS\to T_xS$. [F1, F2]

2.1 The kernel of that projection is $T_eG\oplus0$. Its image under $dA_{(e,x)}$ is exactly the tangent space to the orbit map $g\mapsto g\cdot x$, namely $T_x(G\cdot x)$. Thus $\ker(dq_x)=T_x(G\cdot x)$, and the same coordinate projection shows that $dq_x$ is surjective. [step 1.1, F2]

3.1 By step 2.1, $dq_x$ vanishes exactly on $T_x(G\cdot x)$, so [F3] gives an injective induced linear map from $T_xM/T_x(G\cdot x)$ to $T_{[x]}(M/G)$. It is surjective because $dq_x$ is, and hence is an isomorphism. The formula holds also for a zero-dimensional group and uses no choice principle. [F3, step 2.1] ∎
