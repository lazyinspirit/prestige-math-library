---
id: cor-holomorphic-function-with-holomorphic-conjugate-is-constant
kind: corollary
title: "If both $f$ and $\\bar f$ are holomorphic on a domain, then $f$ is constant"
status: draft
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
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Exercise 2.2.9"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $U$ be a complex domain. If $f$ and $\bar f$ are both holomorphic on $U$, then $f$ is constant.

## Facts & Assumptions

**Given:** A domain $U$ and a function $f=u+iv$ such that both $f$ and $\bar f=u-iv$ are holomorphic on $U$.

[L1] A holomorphic map $p+iq$ satisfies $p_x=q_y$ and $p_y=-q_x$, with derivative $p_x+iq_x$ ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[L2] A holomorphic function with zero derivative on a domain is constant ([[thm-zero-complex-derivative-on-a-domain-implies-constant]]).

## Proof

**Proof technique:** direct.

1.1 Applying [L1] to $f$ gives $u_x=v_y$ and $u_y=-v_x$, while applying it to $\bar f=u+i(-v)$ gives $u_x=-v_y$ and $u_y=v_x$. [given, L1]

2.1 The paired equations imply $u_x=u_y=v_x=v_y=0$, so [L1] gives $f'=0$ throughout $U$. [step 1.1, L1, algebra]

3.1 The domain theorem [L2] now makes $f$ constant. [step 2.1, L2] ∎
