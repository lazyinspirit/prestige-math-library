---
id: prop-integration-over-an-oriented-embedded-submanifold
title: "Integration on an oriented embedded submanifold"
kind: proposition
status: draft
origin: pipeline
deps: ["thm-change-of-variables-for-oriented-manifold-diffeomorphisms", "def-embedded-smooth-submanifold-with-boundary", "def-pullback-of-a-differential-form"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee submanifold paragraph p.406"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Let $j:S\hookrightarrow M$ be an oriented embedded smooth $k$-submanifold, with boundary allowed. For a smooth $k$-form $\omega$ on $M$ such that $j^*\omega$ has compact support on $S$, define $\int_S\omega:=\int_Sj^*\omega$. If $F:T\to S$ is an orientation-preserving diffeomorphism, this equals $\int_T(jF)^*\omega$. Compact support is required on $S$ itself.

## Facts & Assumptions

[F1] [[thm-change-of-variables-for-oriented-manifold-diffeomorphisms]]: Let $F:M\to N$ be a diffeomorphism of oriented smooth $n$-manifolds and $\omega\in\Omega_c^n(N)$. If $F$ preserves orientation everywhere, $\int_MF^*\omega=\int_N\omega$; if it reverses orientation everywhere, $\int_MF^*\omega=-\int_N\omega$. If the sign varies between components, apply the appropriate signed equality on each component and add.

[F2] [[def-embedded-smooth-submanifold-with-boundary]]: An embedded smooth submanifold with boundary of $M$ is a subset $S\subseteq M$ supplied with a manifold-with-boundary smooth structure for which $S\hookrightarrow M$ is a smooth embedding. In particular this definition does not assert $S\cap\partial M=\partial S$.

[F3] [[def-pullback-of-a-differential-form]]: Let $F:M\to N$ be smooth, and let $\omega\in\Omega^k(N)$. The **pullback** $F^*\omega$ is the pullback of $\omega$ viewed as an alternating covariant $k$-tensor field: $$ (F^*\omega)_p(v_1,\ldots,v_k)=\omega_{F(p)}(dF_pv_1,\ldots,dF_pv_k). $$

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 The specified embedding is smooth, so the pointwise formula $j^*\omega(v_1,\ldots,v_k)=\omega(djv_1,\ldots,djv_k)$ defines a smooth top form on the oriented manifold $S$. Its assumed compact support makes its intrinsic integral available. This works for empty $S$, the zero form, and $k=0$. [F2, F3]

2.1 The pointwise pullback formula gives $(jF)^*\omega=F^*(j^*\omega)$. Its support is compact because $F$ is a diffeomorphism. Change of variables gives $\int_TF^*(j^*\omega)=\int_Sj^*\omega$. A nonproper inclusion does not supply compact support by itself; that condition was explicitly assumed. [F1, F3, step 1.1] ∎
