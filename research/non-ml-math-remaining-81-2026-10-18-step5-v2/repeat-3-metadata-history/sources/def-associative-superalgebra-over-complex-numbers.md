---
id: def-associative-superalgebra-over-complex-numbers
kind: definition
title: Associative superalgebra over the complex numbers
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-vector-space
  - def-linear-map
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Sigiswald Barbier, A minimal representation for the orthosymplectic Lie-superalgebra, §§2.1–2.2"
      url: https://backoffice.biblio.ugent.be/download/8560881/8560883
      locator: "Printed pp. 10–14: Z/2-grading on endomorphisms and graded algebra multiplication."
    - title: "Lauren Caston and Rita Fioresi, Mathematical Foundations of Supersymmetry, §1.1"
      url: https://arxiv.org/pdf/0710.5742
      locator: "Printed pp. 9–12: super vector spaces and superalgebras."
verification:
  precheck: n/a
---

## Definition

A **unital associative superalgebra over $\mathbb C$** is an associative unital complex algebra $A$ together with a direct-sum grading $A=A_{\bar0}\oplus A_{\bar1}$ for which $A_{\bar i}A_{\bar j}\subseteq A_{\overline{i+j}}$. Its unit belongs to $A_{\bar0}$. Elements of one graded summand are homogeneous, with parity $|a|\in\{0,1\}$. Multiplication is complex-bilinear and associative. A homomorphism of associative superalgebras is a unital algebra homomorphism preserving the grading.

The **supercommutator** of homogeneous $a,b\in A$ is $[a,b]_s:=ab-(-1)^{|a||b|}ba$. This notation is used only for the commutator induced by an associative superalgebra; a general Lie-superalgebra bracket is denoted $[a,b]$.
