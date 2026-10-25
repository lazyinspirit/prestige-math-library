---
id: cor-distinct-characteristic-roots-imply-diagonalisability
kind: corollary
title: "A characteristic polynomial that splits into distinct linear factors forces diagonalisability"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-minimal-polynomial-divides-characteristic-polynomial, thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots, def-polynomials-that-split-and-splitting-fields, thm-polynomial-ring-over-a-field-is-a-ufd]
aliases: []
landmark: false
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
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §5D'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

If the characteristic polynomial of a finite-dimensional endomorphism splits over $F$ into distinct linear factors, then the endomorphism is diagonalisable over $F$.

## Facts & Assumptions

**Given:** An endomorphism $T$ whose characteristic polynomial is a product of distinct linear factors over $F$.

[L1] The minimal polynomial divides the characteristic polynomial ([[cor-minimal-polynomial-divides-characteristic-polynomial]]).

[L2] An endomorphism is diagonalisable exactly when its minimal polynomial is a product of distinct linear factors ([[thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots]]).

[L3] Splitting means factorisation into linear factors over the stated field, with repetitions allowed ([[def-polynomials-that-split-and-splitting-fields]]).

[L4] The polynomial ring over a field is a unique factorisation domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\mu_T$ is a monic divisor of the split squarefree polynomial $\chi_T$. Unique factorisation from [L4] and the meaning of splitting in [L3] therefore make $\mu_T$ a product of a subset of the same distinct linear factors. [L1, L3, L4, algebra]

2.1 Apply [L2] to step 1.1. The zero-dimensional case has $\chi_T=\mu_T=1$ and is included. [step 1.1, L2] ∎
