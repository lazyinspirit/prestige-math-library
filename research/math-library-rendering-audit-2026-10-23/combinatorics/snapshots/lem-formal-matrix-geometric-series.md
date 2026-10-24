---
id: lem-formal-matrix-geometric-series
kind: lemma
title: 'Formally, $(I-xA)^{-1}=\sum_{n\ge0}A^n x^n$ over every commutative coefficient ring'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-formal-power-series-and-coefficient-extraction, thm-formal-power-series-ring-and-polynomial-embedding, def-ring-matrix-product-identity-and-transpose, thm-ring-matrix-arithmetic-laws]
justified_by: []
aliases: []
landmark: true
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
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Theorem 4.7.2"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $p\in\mathbb N$, and let $A\in M_p(R)$. In the matrix ring $M_p(R\llbracket x\rrbracket)$,

$$ (I_p-xA)^{-1}=\sum_{n\ge0}A^nx^n. $$

The matrix series is defined entrywise. The identity is formal, including $p=0$, and uses no norm, convergence, or spectral-radius hypothesis.

## Facts & Assumptions

**Given:** A commutative ring $R$, a size $p\in\mathbb N$, and a matrix $A\in M_p(R)$.

[L1] Formal series are coefficient functions with Cauchy product $[x^n](fg)=\sum_{i=0}^{n}[x^i]f[x^{n-i}]g$ ([[def-formal-power-series-and-coefficient-extraction]]).

[L2] Cauchy multiplication makes $R\llbracket x\rrbracket$ a commutative ring containing $R[x]$ ([[thm-formal-power-series-ring-and-polynomial-embedding]]).

[L3] Matrix products use finite row-column sums and $I_p$ is the identity matrix ([[def-ring-matrix-product-identity-and-transpose]]).

[L4] Matrix multiplication is associative and distributive, including zero-sized shapes ([[thm-ring-matrix-arithmetic-laws]]).

## Proof

**Proof technique:** direct.

1.1 Define $S=\sum_{n\ge0}A^nx^n$ entrywise. The constant coefficient of $(I_p-xA)S$ is $I_p$, and for every $n\ge1$ its coefficient is $A^n-AA^{n-1}=0$. [given, L1, L2, L3, L4]

1.2 The same coefficient calculation on the other side gives the constant coefficient $I_p$ and positive coefficient $A^n-A^{n-1}A=0$ for $S(I_p-xA)$. [given, L1, L2, L3, L4]

2.1 Coefficient extensionality makes both products equal to $I_p$, so $S$ is the two-sided inverse of $I_p-xA$. For $p=0$ all matrices are the unique empty matrix and the same identity holds. [step 1.1, step 1.2, L1] ∎
