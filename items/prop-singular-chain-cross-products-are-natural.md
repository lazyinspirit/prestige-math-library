---
id: prop-singular-chain-cross-products-are-natural
kind: proposition
title: "Singular chain cross products are natural"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-singular-chain-cross-product-on-generators, def-induced-singular-chain-map, def-product-topology]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Haynes Miller, Algebraic Topology I, Lecture 7"
      url: "https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/9e7c0386b3c2febaa2cf58e75d9c7c32_MIT18_905F16_lec7.pdf"
pipeline_run: frontier-30
---

## Statement

If $f:X\to X'$ and $g:Y\to Y'$ are continuous maps, then for singular chains
$a\in C_p(X;\mathbb Z)$ and $b\in C_q(Y;\mathbb Z)$,
$$ (f\times g)_\#(a\times b)=f_\#(a)\times g_\#(b). $$

## Facts & Assumptions

**Given:** Continuous maps $f:X\to X'$ and $g:Y\to Y'$, and singular chains $a\in C_p(X;\mathbb Z)$ and $b\in C_q(Y;\mathbb Z)$.

[L1] The chain cross product is the alternating shuffle sum on generators ([[def-singular-chain-cross-product-on-generators]]).

[L2] The induced singular chain map is postcomposition on each singular simplex ([[def-induced-singular-chain-map]]).

## Proof

**Proof technique:** direct.

1.1 By bilinearity from [L1], it is enough to prove the identity for generators $a=\sigma$ and $b=\tau$. For each shuffle simplex $\lambda_\theta$, [L2] gives $$ (f\times g)_\#\bigl((\sigma\times\tau)\circ\lambda_\theta\bigr)=((f\circ\sigma)\times(g\circ\tau))\circ\lambda_\theta. $$ [L1, L2, given]

2.1 Summing the equality of step 1.1 over all shuffles with the same signs as in [L1] yields $$(f\times g)_\#(\sigma\times\tau)=(f_\#\sigma)\times(g_\#\tau).$$ Extending bilinearly gives the formula for arbitrary integral chains. [L1, step 1.1] ∎
