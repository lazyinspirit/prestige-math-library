---
id: fs-maximum-modulus-principle-without-connectedness
kind: false-statement
title: "FALSE: the local maximum modulus principle needs no connectedness"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-local-maximum-modulus-principle, def-complex-domain, def-metric-topology]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "B. V. Shabat, Introduction to Complex Analysis, Theorem 1.14"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Statement

Every holomorphic function on an open subset of $\mathbb C$ whose modulus has an interior local maximum is constant on that open set, even when the open set is disconnected.

## Facts & Assumptions

**Given:** The disjoint open discs $D(-2,1)$ and $D(2,1)$ in the complex metric topology ([[def-metric-topology]]) and their union $U$.

[L1] If the modulus of a holomorphic function on a complex domain has an interior local maximum, then the function is constant ([[thm-local-maximum-modulus-principle]]).

## Refutation

**Proof technique:** direct.

1.1 The two discs are nonempty, open, and disjoint, so $U=D(-2,1)\cup D(2,1)$ is open but disconnected and therefore is not a complex domain ([[def-complex-domain]]). [given]

2.1 Define $f=0$ on $D(-2,1)$ and $f=1$ on $D(2,1)$. Every point has a neighbourhood on which $f$ is constant, so $f$ is holomorphic on $U$. [step 1.1, algebra]

3.1 At every point of the second disc, $|f|=1$ is a local maximum, but $f$ is not constant on $U$ because it is $0$ on the first disc. Thus the statement is false; the connected-domain hypothesis in [L1] is exactly what prevents this componentwise witness. [step 2.1, L1] ∎
