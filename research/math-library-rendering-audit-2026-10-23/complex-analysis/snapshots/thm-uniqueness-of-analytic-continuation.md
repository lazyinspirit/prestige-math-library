---
id: thm-uniqueness-of-analytic-continuation
kind: theorem
title: "Analytic continuation along a fixed path is unique whenever it exists"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-analytic-continuation-along-a-path, thm-end-germ-of-path-continuation-is-independent-of-the-chain]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 8 §1.4"
      url: "https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Statement

Let $\gamma:[0,1]\to\Omega$ be a path and let $\xi_0$ be a holomorphic germ at
$\gamma(0)$. If $\xi_0$ admits analytic continuation along $\gamma$, then the
terminal germ at $\gamma(1)$ is unique.

## Facts & Assumptions

**Given:** A path $\gamma:[0,1]\to\Omega$ and a holomorphic germ $\xi_0$ at $\gamma(0)$.

[L1] Admitting analytic continuation along $\gamma$ means admitting at least one admissible continuation chain along $\gamma$ ([[def-analytic-continuation-along-a-path]]).

[L2] Any two admissible continuation chains along the same path have the same terminal germ ([[thm-end-germ-of-path-continuation-is-independent-of-the-chain]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], any analytic continuation of $\xi_0$ along $\gamma$ is represented by an admissible continuation chain whose successive representatives agree at the joining points of the subdivision. [L1, given]

2.1 If two such continuations existed with different terminal germs, their underlying admissible chains would contradict [L2]. Therefore the terminal germ is unique whenever continuation along $\gamma$ exists. [step 1.1, L2] ∎
