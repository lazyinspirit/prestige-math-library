---
id: def-purely-inseparable-extension
kind: definition
title: "Purely inseparable algebraic extensions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-algebraic-and-transcendental-elements, thm-frobenius-endomorphism-and-finite-field-automorphism]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Definition

Let $K/F$ be algebraic ([[def-algebraic-and-transcendental-elements]]). If
$\operatorname{char}F=p>0$, the extension is **purely inseparable** when for
every $\alpha\in K$ there is $n\in\mathbb N$ such that
$\alpha^{p^n}\in F$. The exponent $n=0$ is allowed. If
$\operatorname{char}F=0$, the term purely inseparable is reserved for the
trivial extension $K=F$.

The powers in positive characteristic are governed by the Frobenius
endomorphism of [[thm-frobenius-endomorphism-and-finite-field-automorphism]].
