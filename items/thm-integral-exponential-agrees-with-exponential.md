---
id: thm-integral-exponential-agrees-with-exponential
kind: theorem
title: "The integral exponential $E$ is the published exponential function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-integral-exponential-solves-the-normalised-ivp,
       thm-exponential-ivp-uniqueness]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
pipeline_run: null
---

## Statement

For every $x\in\mathbb R$,

$$E(x)=\exp(x).$$

## Facts & Assumptions

**Given:** The integral exponential $E$ constructed above.

[L1] The function $E:\mathbb R\to\mathbb R$ is differentiable, satisfies
$E'=E$, and has $E(0)=1$
([[thm-integral-exponential-solves-the-normalised-ivp]]).

[L2] Every differentiable $y:\mathbb R\to\mathbb R$ satisfying $y'=y$ and
$y(0)=1$ equals the published exponential function
([[thm-exponential-ivp-uniqueness]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the function $E$ is differentiable, satisfies $E'=E$, and has $E(0)=1$. [L1]

2.1 The uniqueness theorem [L2] therefore gives $E(x)=\exp(x)$ for every real $x$. [step 1.1, L2] ∎
