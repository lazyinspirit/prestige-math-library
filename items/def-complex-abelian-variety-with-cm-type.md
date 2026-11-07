---
id: def-complex-abelian-variety-with-cm-type
kind: definition
title: "Complex abelian variety with a CM type"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-abelian-variety-over-a-field
  - def-cm-algebra-and-cm-type
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "AC is inherited from the abelian-variety definition and is stated explicitly."
sources:
  references:
    - title: "J. S. Milne, Complex Multiplication, Chapter II §6"
      url: "https://www.jmilne.org/math/CourseNotes/CM.pdf"
      locator: "§6, definition of an abelian variety with complex multiplication, printed pp. 46–48."
    - title: "J. S. Milne, The Fundamental Theorem of Complex Multiplication"
      url: "https://arxiv.org/pdf/0705.3446"
      locator: "§1, classification up to isogeny, printed pp. 4–5."
verification: {}
---

## Definition

Assume the Axiom of Choice. Let $A$ be a $g$-dimensional abelian variety over $\mathbb C$, let $E$ be a CM algebra with $[E:\mathbb Q]=2g$, and let $\iota:E\hookrightarrow\operatorname{End}^0(A):=\operatorname{End}(A)\otimes_{\mathbb Z}\mathbb Q$ be a unital injective $\mathbb Q$-algebra homomorphism. Suppose the action of $E$ on the tangent space $T_0A$ decomposes as a direct sum of one-dimensional embedding-character spaces and that its character set contains exactly one embedding from each complex-conjugate pair. Write $\Phi\subset\operatorname{Hom}_{\mathbb Q\text{-alg}}(E,\mathbb C)$ for this set. Then $\Phi$ is a CM type, and $(A,\iota)$ is said to have **CM type** $(E,\Phi)$.

## Definition references

[[def-abelian-variety-over-a-field]]

[[def-cm-algebra-and-cm-type]]

