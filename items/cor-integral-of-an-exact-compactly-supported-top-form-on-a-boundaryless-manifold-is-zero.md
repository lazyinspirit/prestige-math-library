---
id: cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero
title: "A compactly supported primitive has zero total derivative integral"
kind: corollary
status: draft
origin: pipeline
deps: ["thm-general-stokes-theorem"]
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
    - title: "Lee Corollary 16.13, p.414 (compact-support version from Theorem 16.11)"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Assume $\mathrm{AC}_\omega$. If $M^n$ is oriented and boundaryless, $n\geq1$, and $\eta\in\Omega_c^{n-1}(M)$, then $\int_Md\eta=0$. In particular, on a compact such manifold every exact smooth top form has zero integral. The compact-support assumption is on the primitive $\eta$, not merely on $d\eta$.

## Facts & Assumptions

[F1] [[thm-general-stokes-theorem]]: Assume $\mathrm{AC}_\omega$. Let $M$ be an oriented smooth $n$-manifold with boundary, $n\geq1$, and let $\eta\in\Omega_c^{n-1}(M)$. With $j:\partial M\hookrightarrow M$ and the outward-normal-first orientation, $$\int_M d\eta=\int_{\partial M}j^*\eta.$$ An empty boundary contributes zero; in dimension one its integral is a finite signed sum of point values.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 View $M$ as a manifold with empty boundary. General Stokes applies to the compactly supported primitive and gives $\int_Md\eta=\int_{\varnothing}\eta=0$, including the zero primitive. [F1]

2.1 If $M$ is compact, the closed support of any smooth primitive is a compact subset of $M$, so the first conclusion applies to every exact top form. This holds for n=1 as well; no negative-degree form or dimension-zero Stokes assertion is used. [step 1.1, algebra] ∎
