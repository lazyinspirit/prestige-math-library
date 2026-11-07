---
id: def-global-field-modulus
kind: definition
title: "Number-field modulus"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-archimedean-embeddings-and-number-field-signature
  - def-left-right-and-two-sided-ideal
  - def-prime-ideal-valuations-on-fractional-ideals
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter V §1, Definition 1.3, printed pp.148–149."
verification:
  precheck: n/a

---

## Definition

Let $K$ be a number field. A **modulus** for $K$ is a pair $\mathfrak m=(\mathfrak m_0,S_\infty)$ where $\mathfrak m_0$ is a nonzero ideal of the ring of integers $\mathcal O_K$ and $S_\infty$ is a finite set of real embeddings $K\hookrightarrow\mathbb R$. The unit ideal $\mathcal O_K$ is allowed as $\mathfrak m_0$, and the empty set is allowed as $S_\infty$. Complex embeddings are never included in $S_\infty$. For each nonzero prime ideal $\mathfrak p$ dividing $\mathfrak m_0$, write $n_{\mathfrak p}=v_{\mathfrak p}(\mathfrak m_0)$.

## Definition references

[[def-number-field|Number fields]]

[[def-ring-of-integers-of-a-number-field|Ring of integers]]

[[def-archimedean-embeddings-and-number-field-signature|Real embeddings]]

[[def-left-right-and-two-sided-ideal|Ideals]]

[[def-prime-ideal-valuations-on-fractional-ideals|Prime-ideal exponents]]

[J. S. Milne, Definition 1.3](https://www.jmilne.org/math/CourseNotes/CFT.pdf)
