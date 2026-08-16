---
id: cor-cauchy-theorem-star-shaped-domain
kind: corollary
title: "Cauchy's theorem on a star-shaped domain: every closed rectifiable contour integral of a holomorphic function is zero"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-holomorphic-primitive-on-star-shaped-domain, cor-closed-contour-integral-of-a-derivative-is-zero, cor-complex-differentiability-implies-continuity, def-complex-primitive]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2, Theorem 2.2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb C$ be open and star-shaped, let $f:U\to\mathbb C$ be holomorphic, and let $\gamma$ be a closed rectifiable contour in $U$. Then

$$\int_\gamma f(z)\,dz=0.$$

## Facts & Assumptions

**Given:** An open star-shaped set $U$, a holomorphic $f:U\to\mathbb C$, and a closed rectifiable contour $\gamma$ in $U$.

[L1] Every holomorphic function on a star-shaped domain has a primitive ([[thm-holomorphic-primitive-on-star-shaped-domain]]).

[L2] A primitive $F$ of $f$ is holomorphic and satisfies $F'=f$ ([[def-complex-primitive]]).

[L3] A holomorphic function is continuous ([[cor-complex-differentiability-implies-continuity]]).

[L4] If $F$ is holomorphic, $F'$ is continuous, and $\gamma$ is closed and rectifiable, then $\int_\gamma F'=0$ ([[cor-closed-contour-integral-of-a-derivative-is-zero]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], there is a holomorphic $F$ on $U$ with $F'=f$; by [L3], this derivative is continuous. [L1, L2, L3]

2.1 The given $\gamma$ is closed and rectifiable, so every hypothesis of [L4] holds and $\int_\gamma f=\int_\gamma F'=0$. [given, step 1.1, L4] ∎
