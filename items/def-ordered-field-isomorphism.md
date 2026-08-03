---
id: def-ordered-field-isomorphism
kind: definition
title: "Ordered-field isomorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-field-homomorphism, def-ordered-field]
aliases: []
landmark: false
short: "ordered-field iso"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed."
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Wisconsin Math 521 notes: Real analysis"
      url: "https://people.math.wisc.edu/~jwrobbin/521dir/521.pdf"
pipeline_run: null
---

## Definition

Let $F$ and $G$ be ordered fields ([[def-ordered-field]]). An
**ordered-field isomorphism** $\varphi : F \to G$ is a bijective field
homomorphism ([[def-field-homomorphism]]) that is **order-preserving in both
directions**:

$$a < b \;\Longleftrightarrow\; \varphi(a) < \varphi(b) \qquad \text{for all } a, b \in F.$$

Two ordered fields are **isomorphic** if there exists an ordered-field
isomorphism between them; we write $F \cong G$.

## Remarks

- Equivalently, $\varphi$ is a field isomorphism carrying the positive cone of
  $F$ onto that of $G$ ($\varphi(P_F) = P_G$); the inverse $\varphi^{-1}$ is then
  also an ordered-field isomorphism.
- Because a field homomorphism preserves all of $+, -, \cdot, {}^{-1}, 0, 1$, an
  ordered-field isomorphism identifies $F$ and $G$ as ordered fields completely:
  every field-theoretic and order-theoretic statement transfers across it.
- For homomorphisms out of a *complete* ordered field, order-preservation is
  automatic ([[lem-of-hom-order-preserving]]); this is what makes the
  isomorphism in [[thm-uniqueness-complete-ordered-field]] unique.
