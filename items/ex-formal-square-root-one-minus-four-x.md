---
id: ex-formal-square-root-one-minus-four-x
kind: example
title: "The constant-one square root of $1-4x$ and its first coefficients"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-unique-formal-root-with-constant-one, prop-coefficient-extraction-linearity-and-extensionality, def-formal-order-and-x-adic-topology]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Benjamin Sambale, An Invitation to Formal Power Series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
pipeline_run: null
---

## Example

In $\mathbb Q\llbracket x\rrbracket$, the unique square root of $1-4x$ with constant coefficient $1$ begins

$$\sqrt{1-4x}=1-2x-2x^2-4x^3-10x^4-28x^5+O(x^6),$$

where $O(x^6)$ means a series of order at least $6$.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] For a commutative $\mathbb Q$-algebra $R$, $u\in xR\llbracket x\rrbracket$, and $k\ge1$, $1+u$ has the unique root in $1+xR\llbracket x\rrbracket$, namely $(1+u)^{1/k}$ ([[cor-unique-formal-root-with-constant-one]]).

[F2] Product coefficients satisfy $[x^n](fg)=\sum_{i=0}^{n}[x^i]f[x^{n-i}]g$ ([[prop-coefficient-extraction-linearity-and-extensionality]]).

[F3] The formal order of a nonzero series is its least nonzero coefficient index, and $\operatorname{ord}_x(0)=+\infty$ ([[def-formal-order-and-x-adic-topology]]).

## Verification

**Proof technique:** square the truncation.

1.1 Let $q=1-2x-2x^2-4x^3-10x^4-28x^5$. Cauchy convolution gives $[x^0]q^2=1$, $[x]q^2=-4$, and coefficients $4-4$, $-8+8$, $-20+16+4$, and $-56+40+16$, all $0$, in degrees $2,3,4,5$ respectively. Hence $q^2\equiv1-4x\pmod{x^6}$. [given, F2, F3]

2.1 The unique constant-one square root has coefficients determined successively by the equation $v^2=1-4x$ because its unknown degree-$n$ coefficient occurs as $2[x^n]v$. Step 1.1 therefore gives its coefficients through degree $5$. [step 1.1, given, F1] ∎
