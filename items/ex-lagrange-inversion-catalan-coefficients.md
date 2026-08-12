---
id: ex-lagrange-inversion-catalan-coefficients
kind: example
title: "Lagrange inversion gives the Catalan coefficients of the inverse of $x-x^2$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-lagrange-burmann-inversion, thm-formal-exponential-logarithm-identities, def-binomial-coefficient, thm-formal-compositional-inverse]
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

The compositional inverse $w$ of $x-x^2$ in $\mathbb Q\llbracket x\rrbracket$ is

$$w=x+x^2+2x^3+5x^4+14x^5+42x^6+\cdots,$$

and for $n\ge1$,

$$[x^n]w=\frac1n\binom{2n-2}{n-1}.$$

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] If $K$ contains $\mathbb Q$, $\phi\in K\llbracket u\rrbracket$ has nonzero constant term, $w\in xK\llbracket x\rrbracket$ is the unique solution of $w=x\phi(w)$, $H\in K\llbracket u\rrbracket$, and $n\ge1$, then $[x^n]H(w)=\frac1n[u^{n-1}]H'(u)\phi(u)^n$ ([[thm-lagrange-burmann-inversion]]).

[F2] In a commutative $\mathbb Q$-algebra, for $u\in xR\llbracket x\rrbracket$ and $c\in R$, formal binomial powers satisfy $(1+u)^c=\sum_{n\ge0}c(c-1)\cdots(c-n+1)u^n/n!$ ([[thm-formal-exponential-logarithm-identities]]).

[F3] For a commutative ring $R$ and $f\in xR\llbracket x\rrbracket$, there is a unique $g\in xR\llbracket x\rrbracket$ with $f\circ g=x=g\circ f$ exactly when $[x]f$ is a unit ([[thm-formal-compositional-inverse]]).

## Verification

**Proof technique:** put the inverse equation in Lagrange form.

1.1 The equation $x=w-w^2$ is equivalent to $w=x(1-w)^{-1}$. Lagrange inversion with $\phi(u)=(1-u)^{-1}$ and $H(u)=u$ gives $[x^n]w=\frac1n[u^{n-1}](1-u)^{-n}$. [given, F1]

2.1 Apply the generalized-binomial formula with exponent $-n$ and argument $-u$. The coefficient of $u^{n-1}$ is $(-1)^{n-1}(-n)(-n-1)\cdots(-2n+2)/(n-1)!=\binom{2n-2}{n-1}$. At $n=1,\ldots,6$ this yields $1,1,2,5,14,42$. [step 1.1, given, algebra, F2]

3.1 Direct substitution of these coefficients gives $w-w^2\equiv x\pmod{x^7}$, and uniqueness of the compositional inverse confirms the displayed initial segment. [step 2.1, given, F3] ∎
