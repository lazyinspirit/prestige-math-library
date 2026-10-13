---
id: rem-the-full-ext-version-requires-the-koszul-grading-of-category-o
kind: remark
title: "The full Ext version requires the Koszul grading of category O"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-projective-verma-multiplicities-are-kazhdan-lusztig-values-at-one, thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values, thm-the-kazhdan-lusztig-character-formula-in-regular-integral-category-o, thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules]
justified_by: []
aliases: []
landmark: false
dependency_level: 18
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46, complete German text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 1.2, Remark 2 after Theorem 4 (printed p. 6): the graded D_x induce a grading on their endomorphism algebra, called the mixed structure of category O; this observation alone is not a proof of Koszulity."
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46, complete German text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 1.2 (printed p. 5), Remark 1 after Theorem 4: End_C of the direct sum of the D_x is the finite-dimensional algebra of category O, a description of the ungraded category."
---

## Remark

**Scope warning.** The grading used on this page is the auxiliary grading of the
polynomial Soergel lifts: it is what makes the character theorem read off graded
standard-support ranks, and it is forgotten by the Soergel functor, which is an
ungraded equivalence on projectives
([[thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules]]).
Consequently the results proved here are the ordinary (ungraded) Verma-flag,
composition and character statements, together with the exact shift-to-$q=1$
conversion
([[thm-projective-verma-multiplicities-are-kazhdan-lusztig-values-at-one]],
[[thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values]],
[[thm-the-kazhdan-lusztig-character-formula-in-regular-integral-category-o]]);
they do NOT construct a grading on category $\mathcal O$, and in particular they
assert nothing about graded multiplicities, about the $\mathrm{Ext}$-algebra of
$\mathcal O$, or about Koszul duality. Individual coefficients of the
Kazhdan–Lusztig polynomials need not be ordinary category-$\mathcal O$
multiplicities: their value at $q=1$ is the ordinary multiplicity. This does
not rule out a graded refinement whose graded multiplicities sum to that value. The graded version (a Koszul grading, graded BGG
reciprocity and the $\mathrm{Ext}$ form of the multiplicity theorem, in the
sense of the Beilinson–Ginzburg–Soergel programme) remains reserved for the
separate Koszul-duality frontier of this library and is deliberately not
smuggled into this page.
