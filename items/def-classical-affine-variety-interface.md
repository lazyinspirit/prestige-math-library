---
id: "def-classical-affine-variety-interface"
kind: "definition"
title: "A classical affine variety"
status: "draft"
origin: "pipeline"
deps: ["thm-classical-affine-zero-loci-form-zariski-closed-sets", "thm-classical-affine-nullstellensatz-correspondence"]
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
    - title: "J. S. Milne, Algebraic Geometry v6.10, §2h p. 45"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
---

## Definition

Over an algebraically closed field $k$, a classical affine variety is a nonempty affine algebraic set $X\subseteq k^n$ which is irreducible in its Zariski topology: if $X=C\cup D$ with $C,D$ closed in $X$, then $C=X$ or $D=X$. The empty algebraic set is not a variety; a singleton, including $k^0$, is irreducible. This convention reserves “algebraic set” for the possibly reducible or empty case.

## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §2h p. 45. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
