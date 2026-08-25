---
id: def-catalan-generating-function
kind: definition
title: "The Catalan generating function $C(x)=\\sum_{n\\ge0}C_nx^n$ in $\\mathbb{Q}\\llbracket x\\rrbracket$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-catalan-number, def-formal-power-series-and-coefficient-extraction, prop-coefficient-extraction-linearity-and-extensionality, thm-formal-power-series-ring-and-polynomial-embedding, def-formal-exponential-logarithm-and-powers, thm-rat-field, lem-field-is-a-commutative-ring, lem-nat-embeds-int, lem-int-embeds-rat, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "A. Postnikov (notes by A. Lin), MIT 18.212 Algebraic Combinatorics, Spring 2019, Proposition 6"
      url: "https://web.stanford.edu/~lindrew/18.212.pdf"
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Definition

$\mathbb{Q}$ is a field ([[thm-rat-field]]) and therefore a commutative ring
([[lem-field-is-a-commutative-ring]]), so the formal power series
$\mathbb{Q}\llbracket x\rrbracket$ and the coefficient functionals $[x^n]$ of
[[def-formal-power-series-and-coefficient-extraction]] are available over it.

**Natural numbers as coefficients.** A natural number written where a rational is
expected denotes its image under the composite of the embedding
$\mathbb{N}\to\mathbb{Z}$, $k\mapsto[(k,0)]$, of [[lem-nat-embeds-int]] with the
embedding $\mathbb{Z}\to\mathbb{Q}$ of [[lem-int-embeds-rat]]; no symbol is
written for it. Both embeddings are injective and preserve addition and
multiplication, so the composite does too, and by induction
([[thm-induction-principle]]) it therefore carries a finite sum or product of
natural numbers to the corresponding finite sum or product of rationals. An
identity between natural numbers may therefore be read as an identity between
rationals, and conversely, the embedding being injective.

**Definition.** The **Catalan generating function** is the formal power series
$C\in\mathbb{Q}\llbracket x\rrbracket$ whose coefficient function is
$n\mapsto C_n$ ([[def-catalan-number]]), that is

$$C=\sum_{n\ge0}C_nx^n, \qquad [x^n]C=C_n \quad (n\in\mathbb{N}).$$

Two formal power series are equal exactly when all their coefficients agree
([[prop-coefficient-extraction-linearity-and-extensionality]]), so $C$ is
determined by this prescription and nothing else is asserted: the symbol $x$ is an
indeterminate, no value is substituted for it, and no convergence is claimed.

**$\mathbb{Q}\llbracket x\rrbracket$ as a commutative $\mathbb{Q}$-algebra.** The
coefficientwise sum and the Cauchy product make
$\mathbb{Q}\llbracket x\rrbracket$ a commutative ring, and the map sending a
rational to the constant series with that coefficient at $0$ is an injective
unital ring homomorphism $\mathbb{Q}\to\mathbb{Q}\llbracket x\rrbracket$
([[thm-formal-power-series-ring-and-polynomial-embedding]], applied to the
polynomials of degree at most $0$). So
$\mathbb{Q}\llbracket x\rrbracket$ is a commutative $\mathbb{Q}$-algebra in the
sense of [[def-formal-exponential-logarithm-and-powers]], and the formal
exponential, logarithm and binomial powers of that item are available in it.

## Remarks

- **Why $\mathbb{Q}$ and not $\mathbb{Z}$.** Every coefficient of $C$ is a
  natural number, so $C$ has a copy in $\mathbb{Z}\llbracket x\rrbracket$. The
  square-root and binomial-power machinery used below is stated for a commutative
  $\mathbb{Q}$-algebra, because its definitions divide by $n!$, and
  $\mathbb{Z}\llbracket x\rrbracket$ is not one. Working over $\mathbb{Q}$ from the
  start avoids moving between two rings in the middle of a computation.

- **A count read as a coefficient.** The coefficients are the counts
  $C_n=\lvert\mathcal{D}_n\rvert$, and the reading of a natural number as a
  rational is the embedding recorded above. Nothing else changes: an identity
  proved between the counts is an identity between the coefficients, and an
  identity proved between the coefficients transports back because the embedding
  is injective.
