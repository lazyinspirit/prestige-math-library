---
id: fs-simply-connected-plane-domains-are-star-shaped
kind: false-statement
title: "FALSE: every simply connected plane domain is star-shaped"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-a-dumbbell-domain-is-simply-connected-but-not-star-shaped]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Ch. 4, §4.3"
      url: "https://www.jirka.org/ca/ca.pdf"
---

## Statement

**False claim.** Every simply connected plane domain is star-shaped.

## Facts & Assumptions

**Given:** The dumbbell witness from [[ex-a-dumbbell-domain-is-simply-connected-but-not-star-shaped]].

[L1] There is a simply connected dumbbell domain that is not star-shaped ([[ex-a-dumbbell-domain-is-simply-connected-but-not-star-shaped]]).

## Refutation

**Proof technique:** direct.

1.1 Apply [L1]. It gives a plane domain that is simply connected and simultaneously not star-shaped. [given, L1]

2.1 Hence the universal claim is false. [step 1.1] ∎
