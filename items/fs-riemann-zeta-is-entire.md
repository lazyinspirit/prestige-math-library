---
id: fs-riemann-zeta-is-entire
kind: false-statement
title: "FALSE: the Riemann zeta function is entire"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-riemann-zeta-continuation-to-the-right-half-plane]
proof_strategy: direct
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Theorem 2.4"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-02-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

**False claim:** the Riemann zeta function is entire.

## Facts & Assumptions

**Given:** The right-half-plane continuation theorem for zeta.

[L1] The defining Dirichlet series extends meromorphically to $\operatorname{Re}s>0$ with a simple residue-one pole at $s=1$ ([[thm-riemann-zeta-continuation-to-the-right-half-plane]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], any global extension of zeta still has a pole at $1$, because it agrees with this local meromorphic function near $1$. Therefore it is not holomorphic there. [L1, given]

2.1 An entire function is holomorphic on all of $\mathbb C$, so step 1.1 rules that out. Hence zeta is not entire. [step 1.1, algebra] ∎
