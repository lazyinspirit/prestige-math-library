---
id: fs-diagonalisability-requires-distinct-characteristic-roots
kind: false-statement
title: "FALSE: A diagonalisable endomorphism must have a characteristic polynomial with distinct roots"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-diagonalisable-endomorphism, lem-standard-basis-of-f-n, def-characteristic-polynomial-of-an-operator]
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
    - title: 'Anthony W. Knapp, Basic Algebra, 2nd ed., Ch. V, §3, examples and Theorem 5.14'
      url: 'https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf'
pipeline_run: null
---

## Statement

**False claim.** A diagonalisable endomorphism must have a characteristic polynomial with distinct roots.

## Facts & Assumptions

**Given:** The identity endomorphism of $F^2$.

[L1] The standard unit vectors form an ordered basis of $F^2$ ([[lem-standard-basis-of-f-n]]).

[L2] An endomorphism is diagonalisable when it has a basis of eigenvectors ([[def-diagonalisable-endomorphism]]).

[L3] The characteristic polynomial of an operator is that of any matrix representation ([[def-characteristic-polynomial-of-an-operator]]).

## Refutation

**Proof technique:** direct.

1.1 Both standard basis vectors are eigenvectors of $I_2$ with eigenvalue $1$, so [L1] and [L2] make $I_2$ diagonalisable. [L1, L2]

2.1 Its matrix is diagonal with two entries $1$, so [L3] gives $\chi_{I_2}=(x-1)^2$, which has a repeated root. [L3, algebra] ∎
