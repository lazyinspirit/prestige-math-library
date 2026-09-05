---
id: def-domain-of-definition-rational-map
kind: definition
title: "The maximal domain of definition of a rational map to an affine variety"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-rational-map-varieties, lem-morphism-equality-on-dense-open, lem-rational-map-equivalence-transitive]
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, paragraph before Proposition 5.38"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "J. S. Milne, Algebraic Geometry, Proposition 5.8"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $\eta:X \dashrightarrow Y$ be a rational map between classical affine
varieties. Its **domain of definition** is the subset
$$ \operatorname{Dom}(\eta):=\bigcup U, $$
where the union runs over all affine opens $U \subseteq X$ for which $\eta$ has
a representative morphism $U \to Y$.

The previous items guarantee that this is well defined: transitivity of the
equivalence relation is provided by
[[lem-rational-map-equivalence-transitive]], and
[[lem-morphism-equality-on-dense-open]] gives uniqueness of representatives on
overlaps.
