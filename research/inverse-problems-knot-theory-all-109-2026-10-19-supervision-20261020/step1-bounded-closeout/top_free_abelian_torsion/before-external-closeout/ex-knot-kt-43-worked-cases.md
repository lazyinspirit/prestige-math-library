---
id: ex-knot-kt-43-worked-cases
kind: example
title: "Trefoil and 5_2 knot Floer genus and fibering cases"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-top-alexander-grading-of-knot-floer-homology
  - thm-knot-floer-detects-seifert-genus
  - thm-rank-one-top-knot-floer-detects-fiberedness
  - thm-fibered-knot-has-rank-one-top-knot-floer-homology
  - lem-knot-exterior-is-irreducible
  - def-oriented-seifert-surface-and-knot-genus
  - def-countable-choice
  - def-axiom-of-choice
dependency_level: 12
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Peter Ozsvath, Andras Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, Chapter 4"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Printed pp.65–82; explicit grid complexes and trefoil calculations"
    - title: "Peter Ozsvath and Zoltan Szabo, Heegaard Floer homology and alternating knots, arXiv:math/0209149v3, Theorem 1.3"
      url: "https://arxiv.org/pdf/math/0209149v3"
      locator: "Printed pp.5–8; integral HFK of alternating knots from the symmetrized Alexander polynomial and signature"
    - title: "Ciprian Manolescu, An Introduction to Knot Floer Homology, Theorems 2.3 and 2.5"
      url: "https://web.stanford.edu/~cm5/hfk.pdf"
      locator: "Printed p.5; genus and S3 fiberedness criteria"
verification:
  precheck: n/a
---

## Example

For the right-handed trefoil $T(2,3)$, the symmetrized Alexander polynomial is $t-1+t^{-1}$, the maximum Alexander grading is $1$, the integral top knot Floer group is $\mathbb Z$, and the knot is fibered. For the standard alternating knot $5_2$, the symmetrized Alexander polynomial is $2t-3+2t^{-1}$, the maximum Alexander grading is $1$, the integral top knot Floer group is $\mathbb Z^2$, and the knot is not fibered. The $5_2$ rank calculation uses the alternating-knot formula; its signature determines the Maslov grading shift.

## Example references

[[thm-knot-floer-detects-seifert-genus|The maximum Alexander grading is the Seifert genus]]

[[thm-rank-one-top-knot-floer-detects-fiberedness|The irreducible-exterior rank-one implication]]

[[thm-fibered-knot-has-rank-one-top-knot-floer-homology|The converse rank-one implication used for the S3 examples]]

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Chapter 4](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

[Ozsvath and Szabo, *Heegaard Floer homology and alternating knots*, Theorem 1.3](https://arxiv.org/pdf/math/0209149v3)

[Manolescu, *An Introduction to Knot Floer Homology*, Theorems 2.3 and 2.5](https://web.stanford.edu/~cm5/hfk.pdf)
