---
id: cor-real-valued-holomorphic-function-is-constant
kind: corollary
title: "A real-valued holomorphic function on a domain is constant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann,
       thm-zero-complex-derivative-on-a-domain-implies-constant]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Exercise 2.1.5"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

If $f:U\to\mathbb C$ is holomorphic on a domain $U$ and $f(U)\subseteq\mathbb R$, then $f$ is constant.

## Facts & Assumptions

**Given:** A domain $U$ and a holomorphic $f=u+iv:U\to\mathbb C$ with $v=0$.

[L1] A holomorphic map satisfies $u_x=v_y$, $u_y=-v_x$, and $f'=u_x+iv_x$ ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[L2] A holomorphic function with zero derivative on a domain is constant ([[thm-zero-complex-derivative-on-a-domain-implies-constant]]).

## Proof

**Proof technique:** direct.

1.1 Since $v=0$, both $v_x$ and $v_y$ vanish. The Cauchy–Riemann equations [L1] then give $u_x=u_y=0$, so $f'=0$ throughout $U$. [given, L1, algebra]

2.1 Apply [L2] to conclude that $f$ is constant on $U$. [step 1.1, L2] ∎
