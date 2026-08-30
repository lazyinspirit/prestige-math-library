---
id: ex-every-convex-plane-domain-is-simply-connected
kind: example
title: "Every convex plane domain is simply connected"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-grand-equivalence-for-simply-connected-plane-domains,
       thm-convex-subsets-have-trivial-fundamental-group]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "A. Hatcher, Algebraic Topology, Example 1.4"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Example

Every convex complex domain is simply connected.

## Facts & Assumptions

**Given:** A convex complex domain $\Omega\subseteq\mathbb C$.

[L1] Every nonempty convex subset of $\mathbb R^n$ is simply connected ([[thm-convex-subsets-have-trivial-fundamental-group]]).

[L2] Trivial fundamental group is one of the clauses equivalent to simple connectivity for plane domains ([[thm-grand-equivalence-for-simply-connected-plane-domains]]).

## Verification

**Proof technique:** direct.

1.1 Regard $\Omega$ as a convex subset of $\mathbb R^2$. Then [L1] gives trivial fundamental group. [given, L1]

2.1 By [L2], clause 3 from step 1.1 implies that $\Omega$ is simply connected. [step 1.1, L2] ∎
