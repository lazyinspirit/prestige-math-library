---
id: rem-easton-singular-cardinal-caveat
kind: remark
title: Easton's theorem does not prescribe singular-cardinal powers
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-regular-continuum-function-constraints, cor-cofinality-of-a-cardinal-power, def-easton-function, thm-eastons-theorem-for-regular-cardinals, def-aleph-and-beth-hierarchies]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Thomas Jech, Set Theory, Chapter 15, the theorem is about regular cardinal values; Silver's theorem is cited for singular cardinals, printed pp.232 and 235"
      url: "https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/15-applications_of_forcing.pdf"
    - title: "Kameryn J. Williams, Math 655 Lecture Notes 2.2, Theorem 77 statement, PDF p.16"
      url: "https://juliakw.net/teaching/2019/math655/part2.2.pdf"
verification:
  precheck: n/a
---

## Remark

Easton's realization theorem ([[thm-eastons-theorem-for-regular-cardinals]]) is
a statement about the continuum function at **regular** cardinals: its
conditions $\kappa<2^{\kappa}$, monotonicity and
$\operatorname{cf}(2^{\kappa})>\kappa$
([[thm-regular-continuum-function-constraints]]) are exactly the constraints
that the construction can meet there. It makes no assignment of $2^{\kappa}$
for singular $\kappa$ and gives no licence to read one off from a prescribed
behaviour on regular cardinals.

At a singular cardinal $\kappa$ the same general constraints remain in force
for the value: monotonicity gives $2^{\kappa}\ge 2^{\mu}$ for every
$\mu<\kappa$, Cantor's theorem gives $\kappa<2^{\kappa}$, and König's theorem
gives $\operatorname{cf}(2^{\kappa})>\kappa$
([[thm-regular-continuum-function-constraints]], [[cor-cofinality-of-a-cardinal-power]]).
In the GCH case $2^{<\kappa}=\kappa$, so Cantor's strict inequality gives
$2^{\kappa}\ge(2^{<\kappa})^{+}$. The values at singular cardinals are
governed by further theorems not proved on this page, and the page states
nothing about them: in particular it does not claim that an arbitrary
prescription on regular cardinals extends to a singular cardinal, and it does
not claim the Singular Cardinal Hypothesis or its failure.

The Easton function of [[def-easton-function]] is therefore used only on its
class of infinite regular cardinals, and the class-generic construction of
[[thm-eastons-theorem-for-regular-cardinals]] is only asserted to realize the
prescription there.
