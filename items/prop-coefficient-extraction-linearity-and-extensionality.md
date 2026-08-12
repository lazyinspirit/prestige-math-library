---
id: prop-coefficient-extraction-linearity-and-extensionality
kind: proposition
title: "Coefficient extraction is $R$-linear, separates formal series, shifts under multiplication by $x^k$, and converts products to finite convolution"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-formal-power-series-and-coefficient-extraction, thm-formal-power-series-ring-and-polynomial-embedding]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Herbert S. Wilf, generatingfunctionology"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, $f,g\in R\llbracket x\rrbracket$, $r\in R$, and $n,k\in\mathbb N$. Then

$$[x^n](f+g)=[x^n]f+[x^n]g,\qquad [x^n](rf)=r[x^n]f,$$

and $f=g$ if and only if $[x^n]f=[x^n]g$ for every $n$. Moreover,

$$[x^n](x^kf)=\begin{cases}[x^{n-k}]f,&k\le n,\\0,&k>n,\end{cases}$$

and

$$[x^n](fg)=\sum_{i=0}^{n}[x^i]f[x^{n-i}]g.$$

These formulas include $n=0$, $k=0$, and $k>n$.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] For $f=\sum a_nx^n$, coefficient extraction is evaluation: $[x^n]f=a_n$ ([[def-formal-power-series-and-coefficient-extraction]]).

[F2] The series $x$ is supported at degree $1$, and $x^n$ is supported at degree $n$ ([[def-formal-power-series-and-coefficient-extraction]]).

[F3] Cauchy multiplication is the finite convolution $[x^n](fg)=\sum_{i=0}^{n}[x^i]f[x^{n-i}]g$ ([[def-formal-power-series-and-coefficient-extraction]]).

## Proof

**Proof technique:** unfold the definitions.

1.1 The two linearity identities are the pointwise definitions of addition and scalar multiplication. Equality of all extracted coefficients is equality of the underlying functions $\mathbb N\to R$, proving both directions of extensionality. [given, F1]

1.2 In the convolution for $x^kf$, the first factor has one nonzero coefficient, at $k$. It contributes $[x^{n-k}]f$ when $k\le n$ and there is no contributing index when $k>n$; for $k=0$ this says $1f=f$. [given, F2]

1.3 The last display is the defining finite convolution, whose $n=0$ instance is $[x^0](fg)=[x^0]f[x^0]g$. [given, F3]

2.1 Steps 1.1-1.3 establish every asserted clause and every listed boundary case. [step 1.1, step 1.2, step 1.3] ∎
