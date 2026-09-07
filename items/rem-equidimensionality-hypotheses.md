---
id: "rem-equidimensionality-hypotheses"
kind: "remark"
title: "Hypotheses and conventions in dimension theory"
deps: ["thm-fibre-dimension-lower-bound", "thm-generic-fibre-dimension", "thm-upper-semicontinuity-fibre-dimension-projective", "cor-dimension-of-image-plus-generic-fibre", "lem-dimension-local-ring-codimension-closure", "thm-dominant-equal-dimension-generically-finite"]
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne §§5j, 9b; qualifications explained in the local theorems"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
    - title: "Arapura Chapter 4, §§4.1–4.2"
      url: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf
status: published
origin: "pipeline"
---

## Remark

All varieties in this page are classical varieties over algebraically closed $k$, under Choice. The lower fibre bound and the pure generic fibre theorem require irreducible source and target. For reducible sources the image-dimension formula is a maximum over components, with separate image closures and generic dimensions. Projective upper semicontinuity permits reducible sources, reducible targets and empty fibres. It is not asserted here for arbitrary morphisms. Local dimension at a closed point counts dimensions of components through that point; it is not the dimension of its residue field, nor the dimension of a local ring at a generic scheme point. A generically finite map may induce an inseparable field extension; the number of reduced fibre points need not equal that field degree.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.
