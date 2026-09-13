---
id: def-pbw-symbol-map-from-the-symmetric-algebra
kind: definition
title: PBW symbol map from the symmetric algebra
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [prop-the-pbw-filtration-is-multiplicative-and-its-associated-graded-algebra-is-commutative, def-associated-graded-algebra-of-a-filtered-algebra, thm-universal-property-of-the-symmetric-algebra]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, §13.1, printed pp. 74–75"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
---

## Definition

The degree-one assignment

$$x\longmapsto \iota_{\mathfrak g}(x)+F_0U(\mathfrak g)\in F_1U(\mathfrak g)/F_0U(\mathfrak g)$$

is linear. Since $\operatorname{gr}U(\mathfrak g)$ is commutative,
the symmetric-algebra universal property gives a unique algebra homomorphism

$$\sigma:S(\mathfrak g)\longrightarrow\operatorname{gr}U(\mathfrak g).$$

It is graded because generators of degree one go to degree one. This is the
**PBW symbol map**. Neither injectivity nor surjectivity is part of its
definition.
