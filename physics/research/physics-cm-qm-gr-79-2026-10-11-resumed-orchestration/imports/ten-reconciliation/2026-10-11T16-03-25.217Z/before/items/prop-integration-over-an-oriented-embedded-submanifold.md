---
id: prop-integration-over-an-oriented-embedded-submanifold
title: "Integration on an oriented embedded submanifold"
kind: proposition
status: published
origin: pipeline
deps: ["thm-change-of-variables-for-oriented-manifold-diffeomorphisms", "def-embedded-smooth-submanifold-with-boundary", "def-pullback-of-a-differential-form", "lem-finite-chart-localization-for-compactly-supported-forms-on-manifolds-with-boundary"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (prop-integration-over-an-oriented-embedded-submanifold). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Lee submanifold paragraph p.406"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Let $j:S\hookrightarrow M$ be an oriented embedded smooth $k$-submanifold, with boundary allowed. For a smooth $k$-form $\omega$ on $M$ such that $j^*\omega$ has compact support on $S$, define $\int_S\omega:=\int_Sj^*\omega$. If $F:T\to S$ is an orientation-preserving diffeomorphism, this equals $\int_T(jF)^*\omega$. Compact support is required on $S$ itself.

## Facts & Assumptions

[F1] [[thm-change-of-variables-for-oriented-manifold-diffeomorphisms]] gives the orientation-preserving compact-support pullback identity in every dimension, with the integral defined by finite charts, including boundary charts.

[F2] [[def-embedded-smooth-submanifold-with-boundary]]: An embedded smooth submanifold with boundary of $M$ is a subset $S\subseteq M$ supplied with a manifold-with-boundary smooth structure for which $S\hookrightarrow M$ is a smooth embedding. In particular this definition does not assert $S\cap\partial M=\partial S$.

[F3] [[def-pullback-of-a-differential-form]]: Let $F:M\to N$ be smooth, and let $\omega\in\Omega^k(N)$. The **pullback** $F^*\omega$ is the pullback of $\omega$ viewed as an alternating covariant $k$-tensor field: $$ (F^*\omega)_p(v_1,\ldots,v_k)=\omega_{F(p)}(dF_pv_1,\ldots,dF_pv_k). $$

[F4] [[lem-finite-chart-localization-for-compactly-supported-forms-on-manifolds-with-boundary]] defines a choice-free finite-chart integral for every compactly supported top form on an oriented manifold with boundary, agreeing with the partition integral when countable choice is available.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 The specified embedding is smooth, so the pointwise formula $j^*\omega(v_1,\ldots,v_k)=\omega(djv_1,\ldots,djv_k)$ defines a smooth top form on the oriented manifold $S$. Its assumed compact support makes its intrinsic finite-chart integral available, including when $S$ has genuine boundary. This works for empty $S$, the zero form, and $k=0$. [F2, F3, F4]

2.1 The pointwise pullback formula gives $(jF)^*\omega=F^*(j^*\omega)$. Its support is compact because $F$ is a diffeomorphism. Change of variables gives $\int_TF^*(j^*\omega)=\int_Sj^*\omega$. A nonproper inclusion does not supply compact support by itself; that condition was explicitly assumed. [F1, F3, step 1.1] ∎
