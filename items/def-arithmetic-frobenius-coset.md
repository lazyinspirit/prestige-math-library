---
id: def-arithmetic-frobenius-coset
title: "Arithmetic frobenius coset"
kind: definition
status: draft
origin: pipeline
deps: [thm-decomposition-inertia-exact-sequence]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Chapter 8, Frobenius element, p.141"
      url: https://www.jmilne.org/math/CourseNotes/ANT.pdf
---

## Definition

For finite Galois L/K and nonzero $P\mid p$, the **arithmetic Frobenius coset** is the unique element of $D(P/p)/I(P/p)$ corresponding under the residue isomorphism to $x\mapsto x^{Np}$ on $\kappa(P)$, where $Np=|\kappa(p)|$. It is defined also when P is ramified. Its inverse is called geometric Frobenius. The quotient element is distinguished; a representative in D need not be unique.
