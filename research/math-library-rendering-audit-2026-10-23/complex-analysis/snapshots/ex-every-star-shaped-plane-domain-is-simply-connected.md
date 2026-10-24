---
id: ex-every-star-shaped-plane-domain-is-simply-connected
kind: example
title: "Every star-shaped plane domain is simply connected"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-grand-equivalence-for-simply-connected-plane-domains,
       prop-star-shaped-plane-domains-are-homologically-simply-connected]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Exercise 4.3.1"
      url: "https://www.jirka.org/ca/ca.pdf"
---

## Example

Every star-shaped complex domain is simply connected.

## Facts & Assumptions

**Given:** A star-shaped complex domain $\Omega\subseteq\mathbb C$.

[L1] Every star-shaped plane domain is homologically simply connected ([[prop-star-shaped-plane-domains-are-homologically-simply-connected]]).

[L2] Homological simple connectivity is equivalent to simple connectivity for plane domains ([[thm-grand-equivalence-for-simply-connected-plane-domains]]).

## Verification

**Proof technique:** direct.

1.1 Fact [L1] makes the given domain $\Omega$ homologically simply connected. [given, L1]

2.1 By [L2], step 1.1 implies that $\Omega$ is simply connected. [step 1.1, L2] ∎
