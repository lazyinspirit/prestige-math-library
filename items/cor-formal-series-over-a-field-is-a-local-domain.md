---
id: cor-formal-series-over-a-field-is-a-local-domain
kind: corollary
title: "For a field $K$, $K\\llbracket x\\rrbracket$ is a domain and its nonunits form the unique maximal ideal $xK\\llbracket x\\rrbracket$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-formal-order-laws, thm-formal-power-series-unit-criterion, prop-coefficient-extraction-linearity-and-extensionality, def-field, def-prime-and-maximal-ideals]
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

If $K$ is a field, then $K\llbracket x\rrbracket$ is an integral domain. Its set of nonunits is exactly

$$xK\llbracket x\rrbracket=\{f\in K\llbracket x\rrbracket:[x^0]f=0\},$$

which is the unique maximal ideal of $K\llbracket x\rrbracket$.

## Facts & Assumptions

**Given:** A field $K$ as in [[def-field]], exact order additivity from [[lem-formal-order-laws]], the unit criterion [[thm-formal-power-series-unit-criterion]], and the shift and extensionality clauses of [[prop-coefficient-extraction-linearity-and-extensionality]].

The definition [[def-prime-and-maximal-ideals]] says that a maximal ideal is a proper ideal with no proper ideal strictly between it and the whole ring.

## Proof

**Proof technique:** identify the nonunits and test maximality.

1.1 A field is a nonzero integral domain, so exact order additivity shows that a product of two nonzero series is nonzero. Thus $K\llbracket x\rrbracket$ is a domain. [given]

1.2 The unit criterion says that a series is a nonunit exactly when its constant coefficient is $0$. The shift formula says these are exactly the multiples of $x$: for such $f$, define $g$ by $[x^n]g=[x^{n+1}]f$ and obtain $f=xg$. This set is a proper ideal because $1$ has constant coefficient $1\ne0$. [given]

2.1 If an ideal strictly contains $xK\llbracket x\rrbracket$, it contains a series with nonzero constant coefficient, hence a unit, and therefore is the whole ring. Thus $xK\llbracket x\rrbracket$ is maximal. Conversely, every proper ideal contains no unit, so every maximal ideal is contained in the set of nonunits $xK\llbracket x\rrbracket$ and hence equals it by maximality. [step 1.2, given]

3.1 Steps 1.1-2.1 prove the domain claim and identify the unique maximal ideal, including the zero series and constant-series cases. [step 1.1, step 1.2, step 2.1] ∎
