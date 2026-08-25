---
id: thm-catalan-generating-function-satisfies-a-quadratic-equation
kind: theorem
title: "$C(x)=1+x\\,C(x)^2$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-catalan-generating-function, thm-catalan-recurrence, prop-coefficient-extraction-linearity-and-extensionality, thm-formal-power-series-ring-and-polynomial-embedding, def-catalan-number]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Postnikov (notes by A. Lin), MIT 18.212 Algebraic Combinatorics, Spring 2019, Proposition 6"
      url: "https://web.stanford.edu/~lindrew/18.212.pdf"
pipeline_run: null
---

## Statement

In $\mathbb{Q}\llbracket x\rrbracket$ the Catalan generating function
([[def-catalan-generating-function]]) satisfies

$$C=1+x\,C^{2}.$$

## Facts & Assumptions

**Given:** the Catalan generating function $C\in\mathbb{Q}\llbracket x\rrbracket$.

[F1] For every $n\ge0$, $[x^n]C=C_n$, and a natural number written where a rational is expected denotes its image under an injective embedding preserving addition, multiplication and finite sums ([[def-catalan-generating-function]]).

[F2] $C_0=1$ ([[def-catalan-number]]).

[L1] $C_{n+1}=\sum_{i=0}^{n}C_i\,C_{n-i}$ in $\mathbb{N}$ for every $n\in\mathbb{N}$ ([[thm-catalan-recurrence]]).

[L2] $[x^n](f+g)=[x^n]f+[x^n]g$; $f=g$ if and only if $[x^n]f=[x^n]g$ for every $n$; $[x^n](x^kf)=[x^{n-k}]f$ for $k\le n$ and $0$ for $k>n$; and $[x^n](fg)=\sum_{i=0}^{n}[x^i]f\,[x^{n-i}]g$ ([[prop-coefficient-extraction-linearity-and-extensionality]]).

[L3] The coefficientwise sum and Cauchy product make $\mathbb{Q}\llbracket x\rrbracket$ a commutative ring, and the constant series form an isomorphic copy of $\mathbb{Q}$ inside it ([[thm-formal-power-series-ring-and-polynomial-embedding]]).

## Proof

**Proof technique:** direct.

1.1 The constant coefficients agree: $[x^0](1+xC^{2})=[x^0]1+[x^0](xC^{2})=1+0=1$, the second term vanishing by the clause of [L2] for $k=1>0$, and $[x^0]C=C_0=1$ by [F1] and [F2]. [F1, F2, L2, L3]

1.2 The coefficients at every positive index agree. Let $n\in\mathbb{N}$. Then $[x^{n+1}](1+xC^{2})=[x^{n+1}](xC^{2})=[x^{n}](C^{2})$ by [L2], and the Cauchy product clause of [L2] evaluates $[x^{n}](C^{2})$ as $\sum_{i=0}^{n}C_iC_{n-i}$, which is $C_{n+1}$ by [L1], read in $\mathbb{Q}$ through the embedding of [F1]. And $[x^{n+1}]C=C_{n+1}$. [F1, L1, L2, L3]

2.1 The two series have the same coefficient at every index by steps 1.1 and 1.2, so they are equal by the extensionality clause of [L2]. [L2, step 1.1, step 1.2] ∎

## Remarks

- **This is the recurrence, transcribed.** The equation carries exactly the content of the convolution recurrence together with the initial value $C_0=1$; the passage between the two is the Cauchy product formula and nothing else. What the equation buys is that it can be solved, which a recurrence cannot be.

- **No division occurs.** The equation is stated in the cleared form $C=1+xC^{2}$. Solving it below produces the closed form by identifying a square root, not by dividing by $2x$, which is not a unit of $\mathbb{Q}\llbracket x\rrbracket$.
