---
id: op-slice-ribbon-conjecture
kind: open-problem
title: "The slice-ribbon conjecture"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-smooth-knot-concordance
  - def-locally-flat-topological-knot-concordance
  - def-smooth-and-topological-slice-genus
  - def-ribbon-disk-and-ribbon-knot
  - def-countable-choice
justified_by: []
aliases: []
axiom_use: "The explicit disk formulation is choice-free; ACω remains in the planned interface through the library's minimum slice-genus convention."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://aru-ray.github.io/documents/slicenotes.pdf"
      locator: "§1.1, Conjecture 1.7 and partial-status discussion, printed pp.4–5"
    - title: "Jennifer Hom and JungHwan Park, Ribbon knots and iterated cables of fibered knots, arXiv:2507.20455v1; published in Mathematische Zeitschrift 313 (2026)"
      url: "https://arxiv.org/pdf/2507.20455"
      locator: "Complete 16-page v1 PDF, §1, printed pp.1–3, lines identifying the general converse as open; publisher version dated 18 June 2026"
    - title: "Charles Livingston, A Survey of Classical Knot Concordance, Handbook of Knot Theory, Chapter 7"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§10, Problem 1, printed p.342"
    - title: "A Reduction of the Slice–Ribbon Conjecture: Certified Quenching and a Single Completion Condition, Zenodo record 21752847, attached PDF"
      url: "https://zenodo.org/api/records/21752847/files/cdj%20(4).pdf/content"
      locator: "Abstract; Definition 0.1; Assumption 10.5; Remarks 10.11–10.12; Theorem 10.26; Corollary 10.27; Conclusion, PDF pp.1, 9, 60–64, 67–70"
---

## Open problem

For every smooth oriented knot $K\subset S^3$ that bounds a smooth properly embedded disk in $B^4$, must there also exist a smooth immersion $f:D^2\to S^3$ whose boundary is $K$ and whose only self-intersections are finitely many transverse double arcs, each with one properly embedded preimage arc and one preimage arc contained in the interior of $D^2$?

## Open problem references

[[def-ribbon-disk-and-ribbon-knot|The ribbon-immersion formulation and banded-link movie convention]]

[Ray, *Slice Knots and Knot Concordance*, Conjecture 1.7](https://aru-ray.github.io/documents/slicenotes.pdf)

[Hom and Park, *Ribbon knots and iterated cables of fibered knots*, §1](https://link.springer.com/article/10.1007/s00209-026-04050-3)

[Hom and Park, author-hosted full-text version, arXiv:2507.20455v1](https://arxiv.org/pdf/2507.20455)

[Livingston, *A Survey of Classical Knot Concordance*, §10](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf)

[Attached PDF to Zenodo record 21752847, *A Reduction of the Slice–Ribbon Conjecture*](https://zenodo.org/api/records/21752847/files/cdj%20(4).pdf/content)

## Status

Status reviewed 2026-10-19. Hom and Park's peer-reviewed article, published 18 June 2026, still identifies the general converse from smooth sliceness to ribbonness as an open problem and proves only restricted ribbon classifications. Ray's lecture notes record positive results for 2-bridge knots and most 3-strand pretzel knots. The 71-page PDF attached to Zenodo record 21752847 is a conditional reduction: its Theorem 10.26 assumes the completion condition $H_Q$, and Corollary 10.27 says the projected-disk recovery, clean-core reduction, and Milnor-applicability clauses remain unproved. The attached PDF explicitly disclaims an unconditional proof of $H_Q$, so it does not resolve this problem. The Zenodo record metadata and an aggregator description give a different title/author claim than the attached PDF; the status assessment uses the inspected attachment and the current peer-reviewed article.
