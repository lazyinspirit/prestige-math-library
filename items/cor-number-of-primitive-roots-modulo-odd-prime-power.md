---
id: cor-number-of-primitive-roots-modulo-odd-prime-power
kind: corollary
title: "An odd prime power $p^k$ has exactly $\\varphi(\\varphi(p^k))$ primitive roots"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-unit-group-modulo-odd-prime-power-is-cyclic, prop-primitive-root-iff-unit-group-generator, cor-generators-of-a-finite-cyclic-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory, Proposition 2.5.12"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

If $p$ is an odd prime and $k\ge1$, then there are exactly $\varphi(\varphi(p^k))$ primitive roots modulo $p^k$.

## Facts & Assumptions

**Given:** An odd prime $p$ and $k\ge1$.

[L1] $(\mathbb Z/p^k)^\times$ is cyclic of order $\varphi(p^k)$ ([[thm-unit-group-modulo-odd-prime-power-is-cyclic]]).

[L2] Primitive roots are exactly generators of the unit group ([[prop-primitive-root-iff-unit-group-generator]]).

[L3] A cyclic group of order $m$ has $\varphi(m)$ generators ([[cor-generators-of-a-finite-cyclic-group]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], the primitive roots modulo $p^k$ are the generators of a cyclic group of order $\varphi(p^k)$. [L1, L2]

2.1 Applying [L3] to step 1.1 gives $\varphi(\varphi(p^k))$ primitive roots. [step 1.1, L3] ∎
