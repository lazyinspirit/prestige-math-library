---
id: lem-formal-order-laws
kind: lemma
title: "Formal order is non-Archimedean under sums and additive under products over a domain"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-formal-order-and-x-adic-topology, thm-formal-power-series-ring-and-polynomial-embedding, def-zero-divisor-and-integral-domain]
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
pipeline_run: null
---

## Statement

For formal series over a commutative ring,

$$\operatorname{ord}_x(f+g)\ge\min(\operatorname{ord}_x f,\operatorname{ord}_x g),$$

and

$$\operatorname{ord}_x(fg)\ge\operatorname{ord}_x f+\operatorname{ord}_x g.$$

If $f,g\ne0$ have orders $p,q$ and $[x^p]f[x^q]g\ne0$, then equality holds in the product inequality and $[x^{p+q}](fg)=[x^p]f[x^q]g$. Consequently, over an integral domain,

$$\operatorname{ord}_x(fg)=\operatorname{ord}_x f+\operatorname{ord}_x g$$

with the $+\infty$ convention, and $R\llbracket x\rrbracket$ is an integral domain whenever $R$ is.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] The formal order of a nonzero series is its least nonzero coefficient index, and $\operatorname{ord}_x(0)=+\infty$ ([[def-formal-order-and-x-adic-topology]]).

[F2] The product on $R\llbracket x\rrbracket$ is the Cauchy product ([[thm-formal-power-series-ring-and-polynomial-embedding]]).

[F3] An integral domain is a commutative ring with $1\ne0$ and no zero divisors ([[def-zero-divisor-and-integral-domain]]).

## Proof

**Proof technique:** inspect the first possible nonzero coefficient.

1.1 Below the smaller of the two orders, both summand coefficients vanish, so the sum coefficient vanishes. This proves the sum inequality; if one order is strictly smaller, its leading coefficient cannot be cancelled by the other series. [given, F1]

1.2 If $p=\operatorname{ord}_x f$ and $q=\operatorname{ord}_x g$ are finite, every convolution summand in degree below $p+q$ has one zero factor. In degree $p+q$, only the pair $(p,q)$ can be nonzero, so the coefficient there is $[x^p]f[x^q]g$. If either series is zero, the stated inequality follows from the $+\infty$ conventions. [given, F1, F2]

2.1 Over a domain the product of the two nonzero leading coefficients is nonzero, so step 1.2 gives exact additivity. In particular two nonzero series have a nonzero product; $R\llbracket x\rrbracket$ also has $1\ne0$ because its constant coefficients are those of $R$. [step 1.2, given, F3]

3.1 Steps 1.1-2.1 prove all order laws and the domain conclusion, including zero factors. [step 1.1, step 2.1] ∎
