---
id: def-repeated-root-and-separable-polynomial
kind: definition
title: 'Repeated roots in extension fields and separable polynomials'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-subfield, def-polynomial-evaluation-and-root, cor-factor-theorem-over-a-commutative-ring, thm-universal-property-of-a-polynomial-ring]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Brian Conrad, Differential Criterion and Primitivity, Section 1'
      url: 'https://math.stanford.edu/~conrad/210BPage/handouts/sepfield.pdf'
pipeline_run: null
---

## Definition

Let $F$ be a field, let $E$ be an extension field in which $F$ is a subfield ([[def-subfield]]), and let $0\ne f\in F[x]$. The coefficient inclusion induces a homomorphism $F[x]\to E[x]$ by the universal property ([[thm-universal-property-of-a-polynomial-ring]]).

An element $a\in E$ is a **repeated root** of $f$ in $E$ when $(x-a)^2$ divides the image of $f$ in $E[x]$. It is a root in the ordinary sense of [[def-polynomial-evaluation-and-root]], and [[cor-factor-theorem-over-a-commutative-ring]] identifies divisibility by $x-a$ with vanishing at $a$.

The polynomial $f$ is **separable over $F$** when it has no repeated root in any extension field of $F$. A nonzero constant polynomial is therefore separable. The zero polynomial is not called separable under this convention.
