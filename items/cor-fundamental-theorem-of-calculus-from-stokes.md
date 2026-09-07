---
id: cor-fundamental-theorem-of-calculus-from-stokes
title: "Stokes agrees with the fundamental theorem of calculus"
kind: corollary
status: draft
origin: pipeline
deps: ["thm-general-stokes-theorem", "thm-newton-leibniz-with-interior-derivative"]
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
    - title: "Lee Example 16.12, p.414"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Assume $\mathrm{AC}_\omega$. For $a<b$, orient $[a,b]$ increasingly. Every smooth $f$ on this interval satisfies
$$\int_{[a,b]}df=f(b)-f(a),$$
where the boundary point signs are $-1$ at $a$ and $+1$ at $b$. This agrees with the Riemann fundamental theorem of calculus.

## Facts & Assumptions

[F1] [[thm-general-stokes-theorem]]: Assume $\mathrm{AC}_\omega$. Let $M$ be an oriented smooth $n$-manifold with boundary, $n\geq1$, and let $\eta\in\Omega_c^{n-1}(M)$. With $j:\partial M\hookrightarrow M$ and the outward-normal-first orientation, $$\int_M d\eta=\int_{\partial M}j^*\eta.$$ An empty boundary contributes zero; in dimension one its integral is a finite signed sum of point values.

[F2] [[thm-newton-leibniz-with-interior-derivative]]: Let $a<b$. Suppose $G:[a,b]\to\mathbb R$ is continuous on $[a,b]$ and differentiable on $(a,b)$. If $f:[a,b]\to\mathbb R$ is Riemann integrable and $$f(x)=G'(x)\qquad(a<x<b),$$ then $$\int_a^b f=G(b)-G(a).$$ No derivative of $G$ at either endpoint is assumed, and the two endpoint values assigned to the integrable extension $f$ do not enter the conclusion.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 The interval is compact, and the outward directions are $-\partial_t$ at $a$ and $+\partial_t$ at $b$. Outward-first gives the point signs $-1,+1$. Stokes therefore yields the difference $f(b)-f(a)$, including constant and zero functions. [F1]

2.1 In its increasing coordinate, $df=f^{\prime}(t)dt$, so the left side is the ordinary Riemann integral of $f^{\prime}$. The published FTC applies: $f$ is continuous on the closed interval and differentiable inside, and its smooth derivative is Riemann integrable. It gives the same endpoint difference. The condition $a<b$ avoids treating a point as a one-manifold. [F2, step 1.1] ∎
