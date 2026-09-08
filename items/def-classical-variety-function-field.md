---
id: "def-classical-variety-function-field"
kind: "definition"
title: "The function field of an irreducible classical affine variety"
status: published
origin: "pipeline"
deps: ["thm-classical-affine-variety-prime-coordinate-ring", "def-field-of-fractions", "thm-field-of-fractions-is-a-field-and-the-domain-embeds", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, §2i p. 49 and §3k p. 74"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
---

## Definition

Assume AC for the domain-coordinate interface used here. For a classical affine variety $X$, its function field is $$k(X)=\operatorname{Frac}(k[X]).$$ The coordinate ring is a nonzero integral domain by [[thm-classical-affine-variety-prime-coordinate-ring]], so [[def-field-of-fractions]] and [[thm-field-of-fractions-is-a-field-and-the-domain-embeds]] give a field and the injective map $a\mapsto a/1$. Elements have the form $a/b$ with $b\ne0$; they are called rational functions. Equality is $a/b=c/d$ iff $ad=bc$. Fractions are field elements, not initially functions defined at every point.

## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §2i p. 49 and §3k p. 74. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
