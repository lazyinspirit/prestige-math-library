---
id: thm-chain-rule-for-complex-derivatives
kind: theorem
title: "The chain rule for complex derivatives"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann,
       thm-chain-rule-for-total-derivatives]
aliases: []
landmark: true
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
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Proposition 2.2.2"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "J. Orloff, MIT 18.04 Topic 2, §2.6.1"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/330e301bd727c7bdaa679cf44cb75fe3_MIT18_04S18_topic2.pdf"
pipeline_run: null
---

## Statement

Let $f:U\to V$ and $g:V\to\mathbb C$, where $U,V\subseteq\mathbb C$ are open. If $f$ is complex differentiable at $a\in U$ and $g$ is complex differentiable at $f(a)$, then $g\circ f$ is complex differentiable at $a$ and

$$ (g\circ f)'(a)=g'(f(a))f'(a). $$

## Facts & Assumptions

**Given:** The maps, domains, point, and differentiability hypotheses in the Statement.

[L1] Complex differentiability at a point is equivalent to real total differentiability with total derivative given by multiplication by the complex derivative ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[L2] If $f$ is totally differentiable at $a$ and $g$ is totally differentiable at $f(a)$, then $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $Df(a)$ is multiplication by $f'(a)$ and $Dg(f(a))$ is multiplication by $g'(f(a))$. [given, L1]

2.1 By [L2], $g\circ f$ is real totally differentiable and its derivative is the composite of the maps in step 1.1, namely multiplication by $g'(f(a))f'(a)$. [step 1.1, L2, algebra]

3.1 Applying the reverse implication of [L1] gives complex differentiability of $g\circ f$ and the asserted derivative. [step 2.1, L1] ∎
