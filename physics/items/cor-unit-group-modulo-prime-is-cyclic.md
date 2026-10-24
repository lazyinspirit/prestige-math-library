---
id: cor-unit-group-modulo-prime-is-cyclic
kind: corollary
title: "For every prime $p$, the multiplicative group $(\\mathbb Z/p\\mathbb Z)^\\times$ is cyclic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-z-mod-p-is-a-field, lem-field-is-a-commutative-ring, cor-finite-subgroups-of-units-in-a-domain-are-cyclic, def-unit-group-modulo-n-and-euler-totient, cor-totient-at-one-and-at-a-prime]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory, Theorem 2.5.8"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

For every prime $p$, the group $(\mathbb Z/p)^\times$ is cyclic of order $p-1$.

## Facts & Assumptions

**Given:** A prime $p$.

[L1] $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).

[L2] Every field is an integral domain ([[lem-field-is-a-commutative-ring]]).

[L3] Every finite subgroup of the unit group of an integral domain is cyclic ([[cor-finite-subgroups-of-units-in-a-domain-are-cyclic]]).

[L4] $(\mathbb Z/p)^\times$ is finite of order $\varphi(p)$ ([[def-unit-group-modulo-n-and-euler-totient]]).

[L5] For prime $p$, $\varphi(p)=p-1$ ([[cor-totient-at-one-and-at-a-prime]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $\mathbb Z/p$ is an integral domain. [L1, L2]

2.1 By [L4], its entire unit group is a finite subgroup of its units, so [L3] makes it cyclic; [L4] and [L5] give its order. This includes $p=2$, when the group is trivial. [step 1.1, L3, L4, L5] ∎
