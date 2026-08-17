---
id: thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain
kind: theorem
title: "A continuous function holomorphic away from one point on a star-shaped domain has a primitive and zero closed-contour integrals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-goursat-theorem-one-exceptional-point, prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain, cor-closed-contour-integral-of-a-derivative-is-zero, def-complex-primitive]
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
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2, Theorem 1.4"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb C$ be open and star-shaped, let $p\in U$, and let $f:U\to\mathbb C$ be continuous and holomorphic on $U\setminus\{p\}$. Then $f$ has a primitive on $U$, and for every closed rectifiable contour $\gamma$ in $U$,

$$\int_\gamma f(z)\,dz=0.$$

## Facts & Assumptions

**Given:** An open star-shaped set $U$, a point $p\in U$, and a continuous function $f:U\to\mathbb C$ holomorphic away from $p$.

[L1] Under these hypotheses, the integral of $f$ around every filled triangle contained in $U$ is zero ([[thm-goursat-theorem-one-exceptional-point]]).

[L2] Vanishing triangle integrals construct a primitive for a continuous function on a star-shaped domain ([[prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain]]).

[L3] A primitive $F$ of $f$ is holomorphic and has $F'=f$ ([[def-complex-primitive]]).

[L4] If $F$ is holomorphic, $F'$ is continuous, and $\gamma$ is closed and rectifiable, then the integral of $F'$ around $\gamma$ is zero ([[cor-closed-contour-integral-of-a-derivative-is-zero]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every contained triangle integral vanishes. [L1]

2.1 Since $f$ is continuous and $U$ is star-shaped, [L2] gives a primitive $F$, and [L3] makes explicit that $F$ is holomorphic and $F'=f$. [given, step 1.1, L2, L3]

3.1 The derivative $F'=f$ is continuous by hypothesis; for any given closed rectifiable contour $\gamma$ in $U$, all hypotheses of [L4] are therefore satisfied, and $\int_\gamma f=0$. [given, step 2.1, L4] ∎
