---
id: thm-holomorphic-primitive-on-star-shaped-domain
kind: theorem
title: "Every holomorphic function on a star-shaped domain has a primitive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-goursat-triangle-theorem, prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain, cor-complex-differentiability-implies-continuity]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2, Theorem 2.1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb C$ be open and star-shaped with respect to $a\in U$. Every holomorphic function $f:U\to\mathbb C$ has the primitive

$$F(z)=\int_{\ell_{az}}f(\zeta)\,d\zeta.$$

## Facts & Assumptions

**Given:** An open set $U$ star-shaped with respect to $a\in U$, and a holomorphic $f:U\to\mathbb C$.

[L1] A holomorphic function is continuous ([[cor-complex-differentiability-implies-continuity]]).

[L2] Goursat's theorem makes the integral of a holomorphic function around every filled triangle in its domain zero ([[thm-goursat-triangle-theorem]]).

[L3] Vanishing triangle integrals construct the displayed primitive for a continuous function on a star-shaped domain ([[prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $f$ is continuous, and by [L2] its integral around every filled triangle contained in $U$ is zero. [L1, L2]

2.1 The hypotheses of [L3] now hold, so the displayed function is holomorphic on $U$ and has derivative $f$. [step 1.1, L3] ∎
