---
id: thm-formal-power-series-ring-and-polynomial-embedding
kind: theorem
title: "Cauchy multiplication makes $R\\llbracket x\\rrbracket$ a commutative ring containing $R[x]$ as the finitely supported subring"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-formal-power-series-and-coefficient-extraction, lem-finite-sum-reindexing-and-fubini, thm-polynomial-ring-is-a-commutative-ring, def-ring-homomorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Benjamin Sambale, An Invitation to Formal Power Series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
pipeline_run: null
---

## Statement

For every commutative ring $R$, the coefficientwise sum and Cauchy product make $R\llbracket x\rrbracket$ a commutative ring. The coefficientwise inclusion

$$j:R[x]\longrightarrow R\llbracket x\rrbracket$$

is an injective unital ring homomorphism, and its image is exactly the finitely supported formal series.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] Cauchy multiplication is the finite convolution $[x^n](fg)=\sum_{i=0}^{n}[x^i]f[x^{n-i}]g$ ([[def-formal-power-series-and-coefficient-extraction]]).

[F2] A finite sum over $S\times T$ equals either iterated finite sum, and finite sums are invariant under bijective reindexing ([[lem-finite-sum-reindexing-and-fubini]]).

[F3] Polynomial coefficientwise addition and convolution make $R[x]$ a commutative ring, and the constant-polynomial map is an injective unital ring homomorphism ([[thm-polynomial-ring-is-a-commutative-ring]]).

## Proof

**Proof technique:** coefficientwise verification.

1.1 Coefficientwise addition inherits associativity, commutativity, zero, and additive inverses from $R$. For multiplication, the coefficient of both $(fg)h$ and $f(gh)$ at $n$ is the finite sum $\sum_{i+j+k=n}[x^i]f[x^j]g[x^k]h$ by finite Fubini. Reindexing $(i,j)$ as $(j,i)$ gives commutativity, and splitting finite sums gives both distributive laws. The constant series $1$ is a multiplicative identity, since the only nonzero summand involving it occurs at index $0$. [given, F1, F2]

2.1 A product of finitely supported series is finitely supported, and its coefficient formula is exactly the published polynomial convolution. Hence $j$ preserves $0,1,+,$ and multiplication, so it is a unital ring homomorphism; it is injective because equality of coefficient functions is literal equality. Its image consists precisely of the finitely supported functions. [step 1.1, given, F3]

3.1 Therefore $R\llbracket x\rrbracket$ is a commutative ring and $j$ identifies $R[x]$ with its finitely supported subring. [step 1.1, step 2.1] ∎
