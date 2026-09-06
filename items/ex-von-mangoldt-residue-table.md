---
id: ex-von-mangoldt-residue-table
kind: example
title: "The von Mangoldt residue table"
status: draft
origin: pipeline
deps: [lem-von-mangoldt-explicit-formula-residues]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kiran S. Kedlaya, Analytic Number Theory, §10.1"
      url: "https://kskedlaya.org/ant/chapter-10.html"
---

## Example

For $x>1$, the contour integrand has contributions $x$ at $1$, $-x^\rho/\rho$ at a
nontrivial zero, $-\tfrac12\log(1-x^{-2})$ from all negative even zeros, and
$-\zeta'(0)/\zeta(0)$ at $0$.

## Verification

**Given:** $x>1$ and the residue ledger.

1.1 The pole at $1$ and each nontrivial zero have the listed local residues, with zero multiplicity multiplying the second entry. [given, algebra]

2.1 Summing the geometric-logarithmic trivial family and retaining the independent pole of $1/s$ at $0$ gives the remaining two entries. [step 1.1, algebra] ∎
