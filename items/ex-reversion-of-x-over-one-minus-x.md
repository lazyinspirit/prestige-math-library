---
id: ex-reversion-of-x-over-one-minus-x
kind: example
title: "The compositional inverse of $x/(1-x)$ is $x/(1+x)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-formal-compositional-inverse, thm-formal-composition-laws, thm-formal-power-series-unit-criterion, prop-coefficient-extraction-linearity-and-extensionality]
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
    - title: "Benjamin Sambale, An Invitation to Formal Power Series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
pipeline_run: null
---

## Example

Over every commutative ring,

$$f(x)=\frac{x}{1-x}=x+x^2+x^3+\cdots$$

has compositional inverse

$$g(x)=\frac{x}{1+x}=x-x^2+x^3-x^4+\cdots.$$

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] If $g$ and $h$ both have zero constant coefficient then $(f\circ g)\circ h=f\circ(g\circ h)$; also $f\circ x=f$ and $x\circ f=f$ ([[thm-formal-composition-laws]]).

[F2] A formal power series is a unit exactly when its constant coefficient is a unit ([[thm-formal-power-series-unit-criterion]]).

[F3] Two formal series are equal if and only if all their coefficients are equal ([[prop-coefficient-extraction-linearity-and-extensionality]]).

[F4] For a commutative ring $R$ and $f\in xR\llbracket x\rrbracket$, there is a unique $g\in xR\llbracket x\rrbracket$ with $f\circ g=x=g\circ f$ exactly when $[x]f$ is a unit ([[thm-formal-compositional-inverse]]).

## Verification

**Proof technique:** simplify both admissible compositions.

1.1 Both $f$ and $g$ have zero constant coefficient and unit linear coefficient. Formal substitution and ring algebra give $f\circ g=g/(1-g)=x$ because $1-g=(1+x)^{-1}$, and $g\circ f=f/(1+f)=x$ because $1+f=(1-x)^{-1}$. [given, F1, F2]

2.1 Thus $g$ is a two-sided compositional inverse of $f$, and uniqueness gives the claim. Multiplying $\sum_{n\ge0}x^n$ by $1-x$, and $\sum_{n\ge0}(-1)^nx^n$ by $1+x$, gives constant coefficient $1$ and every later coefficient $0$; extensionality and inverse uniqueness give the two displayed expansions. Equivalently, the inverse equation $(1+x)g=x$ yields $[x]g=1$ and the alternating recursion $[x^n]g=-[x^{n-1}]g$ for $n\ge2$. These calculations also hold in the zero ring. [step 1.1, given, F2, F3, F4] ∎
