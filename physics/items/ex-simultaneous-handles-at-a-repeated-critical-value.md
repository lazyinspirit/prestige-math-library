---
id: "ex-simultaneous-handles-at-a-repeated-critical-value"
kind: "example"
title: "Simultaneous handles at a repeated critical value"
deps: ["prop-simultaneous-attachment-at-a-morse-critical-value"]
provenance:
  statement: "ai-generated"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      title: "Nicolaescu, An Invitation to Morse Theory"
status: published
origin: "pipeline"
proof_strategy: "coordinate Hessians and disjoint charts"
generation:
  role: "example"
---

## Example

Assume $\mathrm{AC}_\omega$. On $T^2$ let $f(\theta,\phi)=-\cos\theta-\cos\phi$. Its two index-one critical points both have value zero. For every $0<\varepsilon<2$, crossing the closed band $[-\varepsilon,\varepsilon]$ attaches two disjoint $1$-handles simultaneously.

## Facts & Assumptions

[F1] [[prop-simultaneous-attachment-at-a-morse-critical-value]]: Assume $\mathrm{AC}_\omega$. Let $f$ be smooth on a boundaryless manifold and let $a<b$ be regular values. Suppose the closed band is compact and its critical points are finitely many nondegenerate points $p_1,\ldots,p_m$, all at the same value $c\in(a,b)$. Then $M^b$ is obtained from $M^a$, up to diffeomorphism and corner rounding, by attaching disjoint handles of indices $\operatorname{ind}(p_j)$. If $m=0$, no handles are attached and the regular-band conclusion applies.

## Verification

**Given:** The objects and hypotheses in the example.

1.1 The critical equations are $\sin\theta=\sin\phi=0$. The Hessian is $\operatorname{diag}(\cos\theta,\cos\phi)$. At $(0,0)$ it is positive definite with value $-2$; at $(\pi,\pi)$ it is negative definite with value $2$. At $(\pi,0)$ and $(0,\pi)$ it has one negative entry and value zero. [given, algebra]

2.1 For $0<\varepsilon<2$, both endpoints are regular and the compact band contains precisely the two saddle points. The simultaneous-attachment proposition gives two disjoint index-one handles, with no need to perturb their equal values. The restrictions on epsilon exclude both the collapsed band and endpoints through the extrema. [F1, step 1.1] ∎
