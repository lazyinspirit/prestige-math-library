---
id: cor-prime-power-orders-admit-complete-families-of-orthogonal-latin-squares
kind: corollary
title: "Every prime power order $q$ admits $q-1$ mutually orthogonal Latin squares"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-existence-of-finite-fields,
       thm-linear-latin-squares-over-a-finite-field-are-mutually-orthogonal,
       def-orthogonal-latin-squares-and-complete-families]
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Deductive Press, Section 16.2: Latin Squares and MOLS"
      url: "https://deductivepress.ca/math3860/textbook/sect_latin-squares-mols"
---

## Statement

For every prime power $q$, there exists a complete family of $q-1$ mutually
orthogonal Latin squares of order $q$.

## Facts & Assumptions

**Given:** A prime power $q$.

[L1] There exists a field $F$ with $q$ elements ([[thm-existence-of-finite-fields]]).

[L2] For each nonzero $a\in F$, the square $L_a(i,j)=ai+j$ is Latin, and distinct nonzero $a$ give orthogonal squares ([[thm-linear-latin-squares-over-a-finite-field-are-mutually-orthogonal]]).

[L3] A complete family of order $q$ consists of $q-1$ pairwise orthogonal Latin squares ([[def-orthogonal-latin-squares-and-complete-families]]).

## Proof

**Proof technique:** direct.

1.1 Choose a field $F$ with $q$ elements by [L1]. It has exactly $q-1$ nonzero elements. [L1, choose]

2.1 By [L2], the squares $L_a$ for $a\in F^\times$ are pairwise orthogonal Latin squares of order $q$. Since there are exactly $q-1$ of them, [L3] makes this family complete. [step 1.1, L2, L3] ∎
