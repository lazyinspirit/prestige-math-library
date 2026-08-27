---
id: fs-a-locally-uniform-limit-of-injective-holomorphic-functions-is-injective
kind: false-statement
title: "FALSE: a locally uniform limit of injective holomorphic functions is always injective"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-hurwitz-injective-limit]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.4, Corollary 5.4.9"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

**False claim:** a locally uniform limit of injective holomorphic functions is
always injective.

## Facts & Assumptions

**Given:** The sequence $f_n(z)=z/(n+1)$ on $\mathbb C$.

[L1] The correct theorem says that the limit is injective or constant
([[thm-hurwitz-injective-limit]]).

## Refutation

**Proof technique:** direct.

1.1 Each $f_n(z)=z/(n+1)$ is injective, entire, and converges locally uniformly to the constant function $0$. [given, algebra]

2.1 The limit $0$ is not injective. Therefore the claim is false, and [L1] identifies the missing clause exactly. [step 1.1, L1] ∎
