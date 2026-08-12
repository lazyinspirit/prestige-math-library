---
id: thm-formal-composition-laws
kind: theorem
title: "Admissible formal composition is associative and substitution by a zero-constant series is a ring homomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-formal-series-composition, thm-summable-families-and-rearrangement, thm-formal-power-series-ring-and-polynomial-embedding]
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

## Statement

Let $g\in R\llbracket x\rrbracket$ have zero constant coefficient. Then

$$S_g:R\llbracket x\rrbracket\to R\llbracket x\rrbracket,\qquad S_g(f)=f\circ g,$$

is a unital ring homomorphism. Thus

$$(f+h)\circ g=f\circ g+h\circ g,\qquad (fh)\circ g=(f\circ g)(h\circ g),\qquad 1\circ g=1.$$

Whenever all displayed compositions are admissible,

$$(f\circ g)\circ h=f\circ(g\circ h).$$

Also $f\circ x=f$ and $x\circ f=f$. Composition need not be commutative.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] Formal composition is $f\circ g=\sum_{n\ge0}[x^n]f\,g^n$, defined when $f$ is a polynomial or when $g(0)=0$ ([[def-formal-series-composition]]).

[F2] A summable family may be bijectively reindexed or partitioned and regrouped without changing its sum ([[thm-summable-families-and-rearrangement]]).

[F3] Multiplication by a fixed formal series distributes over a summable family ([[thm-summable-families-and-rearrangement]]).

## Proof

**Proof technique:** compare finite coefficient sums.

1.1 Linearity follows by splitting the locally finite defining sum. For multiplication, expand $(fh)\circ g$ using the Cauchy coefficients of $fh$ and regroup the locally finite double family to obtain $(\sum_i[x^i]f\,g^i)(\sum_j[x^j]h\,g^j)$. Constants give $1\circ g=1$. [given, F1, F2, F3]

1.2 For associativity, expand either side as the same locally finite sum of monomials after substituting the defining series. Admissibility guarantees that below each degree only finitely many terms occur, so the rearrangement theorem applies. [given, F1, F2]

1.3 Substituting $x$ leaves every coefficient in place, while substituting into the polynomial $x$ returns the inner series. Finally, $x^2\circ(x+x^2)=x^2+2x^3+x^4$ whereas $(x+x^2)\circ x^2=x^2+x^4$ over $\mathbb Z$, so composition is not commutative. [given, F1]

2.1 Steps 1.1-1.3 give the homomorphism, associativity, identity, and noncommutativity claims. [step 1.1, step 1.2, step 1.3] ∎
