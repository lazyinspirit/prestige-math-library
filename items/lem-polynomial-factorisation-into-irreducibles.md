---
id: lem-polynomial-factorisation-into-irreducibles
kind: lemma
title: 'Every nonzero nonunit polynomial over a field factors into irreducible polynomials'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-irreducible-and-prime-elements-in-a-domain, thm-polynomial-degree-of-a-product-over-a-domain, cor-units-in-a-polynomial-ring-over-a-domain, thm-strong-induction]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, Theorem 23.7'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement

Every nonzero nonunit polynomial over a field is a finite product of irreducible polynomials.

## Facts & Assumptions

**Given:** A field $F$ and a nonzero nonunit polynomial $f\in F[x]$.

[L1] A nonzero nonunit is irreducible when every factorization has a unit factor ([[def-irreducible-and-prime-elements-in-a-domain]]).

[L2] Degrees add under multiplication of nonzero polynomials over a field ([[thm-polynomial-degree-of-a-product-over-a-domain]]).

[L3] The units of $F[x]$ are exactly its nonzero constant polynomials ([[cor-units-in-a-polynomial-ring-over-a-domain]]).

[L4] Strong induction proves a natural-number property once the case at $n$ follows from all smaller cases ([[thm-strong-induction]]).

## Proof

**Proof technique:** induction.

1.1 Use strong induction on $n=\deg f$; by [L3], a nonzero nonunit has $n\ge1$. [base, given, L3, L4]

2.1 If $f$ is irreducible, it is already a one-factor product; otherwise [L1] gives $f=gh$ with $g,h$ nonunits, and neither is zero because $f\ne0$. [step 1.1, ih, L1, construct]

3.1 By [L2], $\deg g$ and $\deg h$ are positive and strictly below $n$, so the induction hypotheses factor both into irreducibles; concatenating those factorizations gives one for $f$, and [L4] completes the induction. [step 2.1, ih, L2, L3, L4, discharge-induction] ∎
