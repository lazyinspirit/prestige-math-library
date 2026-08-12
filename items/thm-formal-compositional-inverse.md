---
id: thm-formal-compositional-inverse
kind: theorem
title: "A zero-constant formal series has a compositional inverse exactly when its linear coefficient is a unit"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-formal-composition-laws, thm-formal-power-series-unit-criterion, prop-coefficient-extraction-linearity-and-extensionality]
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

Let $R$ be a commutative ring and $f\in xR\llbracket x\rrbracket$. There is a unique $g\in xR\llbracket x\rrbracket$ such that

$$f\circ g=x=g\circ f$$

if and only if $[x]f$ is a unit in $R$. In the zero ring the assertion holds with the unique zero series; when $R$ is nonzero, a zero linear coefficient cannot satisfy the criterion.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] If $g$ and $h$ both have zero constant coefficient then $(f\circ g)\circ h=f\circ(g\circ h)$; also $f\circ x=f$ and $x\circ f=f$ ([[thm-formal-composition-laws]]).

## Proof

**Proof technique:** recursive coefficient construction.

1.1 If $f\circ g=x$, then the coefficient of $x$ is $[x]f[x]g=1$. Thus $[x]f$ is a unit. The same equation also determines $[x]g$ as its inverse. [given]

1.2 Conversely write $f=a_1x+a_2x^2+\cdots$ with $a_1$ a unit. Choose $b_1=a_1^{-1}$. After $b_1,\ldots,b_{n-1}$ have been chosen, the coefficient of $x^n$ in $f\circ(b_1x+\cdots+b_nx^n)$ is $a_1b_n+c_n$, where $c_n$ depends only on the earlier $b_j$. Set $b_n=-a_1^{-1}c_n$. The resulting $g$ has $f\circ g=x$, and the same equations show that it is the unique left inverse. [given]

2.1 Apply the construction to $g$: its linear coefficient $a_1^{-1}$ is a unit, so there is $h$ with $g\circ h=x$. Associativity gives $f=f\circ x=f\circ(g\circ h)=(f\circ g)\circ h=x\circ h=h$. Thus $g\circ f=x$ as well, and any two-sided inverse is the already unique solution of $f\circ g=x$. [step 1.2, given, F1]

3.1 In the zero ring, $x=0$ and the sole series is its own inverse. In a nonzero ring, $0$ is not a unit, so a zero linear coefficient fails necessity. Together with steps 1.1-2.1 this proves the equivalence and uniqueness. [step 1.1, step 1.2, step 2.1, given] ∎
