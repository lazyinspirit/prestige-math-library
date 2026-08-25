---
id: cor-finite-variable-polynomial-ring-noetherian
kind: corollary
title: "If $R$ is Noetherian then $R[x_1,\\ldots,x_n]$ is Noetherian for every $n\\in\\mathbb N$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-hilbert-basis-theorem, def-multivariate-polynomial-ring-by-iteration]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "B. Totaro, Commutative Algebra (Michaelmas 2011), notes by Z. Norwood, §8 Corollary 8.4"
      url: "https://pi.math.cornell.edu/~zbnorwood/partiii/files/commalgnotes.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., (16.12)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a Noetherian commutative ring. Then the iterated polynomial ring
$R[x_1,\ldots,x_n]$ of [[def-multivariate-polynomial-ring-by-iteration]] is
Noetherian for every $n\in\mathbb N$.

The index starts at $0$, where the published definition sets
$R[x_1,\ldots,x_0]=R$ and the assertion is the hypothesis itself.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$.

[L1] Polynomial rings in finitely many commuting indeterminates are defined recursively by $R[x_1,\ldots,x_0]:=R$ and $R[x_1,\ldots,x_{n+1}]:=R[x_1,\ldots,x_n][x_{n+1}]$ ([[def-multivariate-polynomial-ring-by-iteration]]).

[L2] If $R$ is a Noetherian commutative ring then $R[x]$ is a Noetherian commutative ring ([[thm-hilbert-basis-theorem]]).

## Proof

**Proof technique:** induction.

1.1 At $n=0$ the recursive definition gives $R[x_1,\ldots,x_0]=R$, which is Noetherian by hypothesis; this is the base of the induction and is not skipped. [base, L1, given]

1.2 Let $n\in\mathbb N$ and assume $R[x_1,\ldots,x_n]$ is Noetherian. [ih]

2.1 The recursive definition gives $R[x_1,\ldots,x_{n+1}]=R[x_1,\ldots,x_n][x_{n+1}]$, a polynomial ring in one indeterminate over the ring assumed Noetherian in step 1.2; the Hilbert basis theorem applied to that ring makes $R[x_1,\ldots,x_{n+1}]$ Noetherian. [L1, L2, step 1.2]

3.1 The base case of step 1.1 and the passage of step 2.1 give, by induction on $n$, that $R[x_1,\ldots,x_n]$ is Noetherian for every $n\in\mathbb N$. [step 1.1, step 2.1, discharge-induction] ∎

## Remarks

- **Finitely many indeterminates is essential.** The induction produces a proof for each $n\in\mathbb N$ separately and says nothing about a ring of polynomials in infinitely many indeterminates; the companion examples page carries a witness that the conclusion fails there.

- **The converse holds too**, by iterating [[cor-polynomial-ring-noetherian-implies-coefficient-ring-noetherian]] down the tower of coefficient rings.
