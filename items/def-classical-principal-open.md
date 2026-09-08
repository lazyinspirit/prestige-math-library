---
id: "def-classical-principal-open"
kind: "definition"
title: "A principal open subset of a classical affine variety"
status: "draft"
origin: "pipeline"
deps: ["thm-classical-affine-zero-loci-form-zariski-closed-sets", "def-classical-affine-coordinate-ring", "thm-classical-polynomial-functions-equal-coordinate-ring"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, §2i p. 49"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
---

## Definition

For an affine algebraic set $X$ and $f\in k[X]$, the principal open is $$D_X(f)=\{x\in X:f(x)\ne0\}.$$ Evaluation is independent of a polynomial representative by [[thm-classical-polynomial-functions-equal-coordinate-ring]]. The complement is the relatively closed zero locus of that representative. In particular $D_X(0)=\varnothing$ and $D_X(1)=X$. The notation applies to reducible and empty algebraic sets as well as varieties.

## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §2i p. 49. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
