---
id: thm-formal-power-series-unit-criterion
kind: theorem
title: "A formal power series is a unit exactly when its constant coefficient is a unit"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-formal-power-series-ring-and-polynomial-embedding, prop-coefficient-extraction-linearity-and-extensionality, lem-ring-units-form-a-group]
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
    - title: "Herbert S. Wilf, generatingfunctionology"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and $f=\sum_{n\ge0}a_nx^n\in R\llbracket x\rrbracket$. Then $f$ is a unit in $R\llbracket x\rrbracket$ if and only if $a_0$ is a unit in $R$.

When $a_0$ is a unit, the inverse $g=\sum_{n\ge0}b_nx^n$ is unique and is determined by

$$b_0=a_0^{-1},\qquad b_n=-a_0^{-1}\sum_{i=1}^{n}a_i b_{n-i}\quad(n\ge1).$$

The criterion also holds in the zero ring.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] Product coefficients satisfy $[x^n](fg)=\sum_{i=0}^{n}[x^i]f[x^{n-i}]g$ ([[prop-coefficient-extraction-linearity-and-extensionality]]).

[F2] Two formal series are equal if and only if all their coefficients are equal ([[prop-coefficient-extraction-linearity-and-extensionality]]).

[F3] An element $u$ is a unit exactly when there is $v$ with $uv=1=vu$ ([[lem-ring-units-form-a-group]]).

[F4] Zero is a unit exactly in the zero ring ([[lem-ring-units-form-a-group]]).

## Proof

**Proof technique:** solve the inverse equations recursively.

1.1 If $fg=1$, constant-coefficient extraction gives $a_0[x^0]g=1$. Commutativity gives the reverse product too, so $a_0$ is a unit. [given, F1, F3]

1.2 Conversely suppose $a_0$ is a unit and define $b_n$ by the displayed recursion. The coefficient of $fg$ at $0$ is $a_0b_0=1$. For $n\ge1$ it is $a_0b_n+\sum_{i=1}^{n}a_i b_{n-i}=0$. Hence $fg=1$ by extensionality, and commutativity gives $gf=1$. [given, F1, F2]

2.1 Any inverse must satisfy the same constant equation and then, successively, the same equation for each $b_n$; multiplication by $a_0^{-1}$ makes every coefficient unique. In the zero ring, $0=1$ and the unit theorem makes the same recursion and equivalence valid. [step 1.1, step 1.2, given, F3, F4]

3.1 Steps 1.1 and 1.2 prove both directions, while step 2.1 proves uniqueness and the boundary case. [step 1.1, step 1.2, step 2.1] ∎
