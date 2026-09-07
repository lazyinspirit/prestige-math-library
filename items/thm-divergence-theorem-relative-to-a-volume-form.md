---
id: thm-divergence-theorem-relative-to-a-volume-form
title: "Divergence theorem for a volume form"
kind: theorem
status: draft
origin: pipeline
deps: ["lem-divergence-form-identity", "thm-general-stokes-theorem"]
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
    - title: "Lee Theorem 16.32 proof p.424, using arbitrary positive mu in the form identity"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $M^n$ be oriented with boundary, $n\geq1$, let $\mu$ be a positive smooth volume form, and let $X$ be a compactly supported smooth vector field. Then
$$\int_M(\operatorname{div}_\mu X)\mu=\int_{\partial M}j^*(\iota_X\mu),$$
with outward-normal-first orientation. For compact $M$ every smooth $X$ is allowed.

## Facts & Assumptions

[F1] [[lem-divergence-form-identity]]: For a positive volume form $\mu$ and smooth vector field $X$ on an oriented smooth $n$-manifold, $n\geq1$, with boundary allowed, $$d(\iota_X\mu)=(\operatorname{div}_\mu X)\mu.$$ No tangency assumption on $X$ at the boundary is needed.

[F2] [[thm-general-stokes-theorem]]: Assume $\mathrm{AC}_\omega$. Let $M$ be an oriented smooth $n$-manifold with boundary, $n\geq1$, and let $\eta\in\Omega_c^{n-1}(M)$. With $j:\partial M\hookrightarrow M$ and the outward-normal-first orientation, $$\int_M d\eta=\int_{\partial M}j^*\eta.$$ An empty boundary contributes zero; in dimension one its integral is a finite signed sum of point values.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 The form $\iota_X\mu$ is smooth and has support contained in $\operatorname{supp}X$, hence compact. Its derivative is $(\operatorname{div}_\mu X)\mu$ by the divergence-form identity. [F1, given]

2.1 Apply general Stokes to that compactly supported $(n-1)$-form. This gives the stated formula and ensures the boundary restriction is compactly supported. On compact $M$ the support of every smooth $X$ is compact; an empty boundary yields zero, as does $X=0$. For $n=1$ the right side is a signed sum of contraction values. [F2, step 1.1] ∎
