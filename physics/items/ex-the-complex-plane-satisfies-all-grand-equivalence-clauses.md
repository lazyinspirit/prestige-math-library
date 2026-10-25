---
id: ex-the-complex-plane-satisfies-all-grand-equivalence-clauses
kind: example
title: "The complex plane satisfies all of the grand-equivalent simple connectivity clauses"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-grand-equivalence-for-simply-connected-plane-domains]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4, §4.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Example

The complex plane $\mathbb C$ satisfies every clause of
[[thm-grand-equivalence-for-simply-connected-plane-domains]].

## Facts & Assumptions

**Given:** The complex plane $\mathbb C$.

[L1] The grand theorem makes connected spherical complement, homological simple connectivity, trivial fundamental group, primitives, holomorphic logarithms, harmonic conjugates, conformal plane-or-disc alternative, and contractibility equivalent for plane domains ([[thm-grand-equivalence-for-simply-connected-plane-domains]]).

## Verification

**Proof technique:** direct.

1.1 The spherical complement of $\mathbb C$ is the singleton $\{\infty\}$, hence connected. [given]

2.1 By [L1], the connected complement from step 1.1 forces all remaining clauses. In particular, every cycle in $\mathbb C$ is null-homologous, every entire function has a primitive, and $\mathbb C$ is contractible. [step 1.1, L1] ∎
