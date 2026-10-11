---
page: mixed-hodge-structures-and-strictness
title: "Mixed Hodge Structures And Strictness"
status: draft
requires:
  - double-complexes-exact-couples-and-convergence
  - linear-independence-bases-and-dimension
items:
  - def-rational-mixed-hodge-structure
  - lem-deligne-splitting-of-a-mixed-hodge-structure
  - def-cohomological-mixed-hodge-complex
  - lem-morphisms-of-mixed-hodge-structures-are-strict
  - lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights
examples: []
---

This page develops rational mixed Hodge structures as three opposed filtrations
and proves the two structural results the rest of the mixed-Hodge track uses:
the Deligne splitting and the strictness of morphisms. It opens with the
definition of [[def-rational-mixed-hodge-structure]]: a finite-dimensional
rational vector space with a finite increasing weight filtration $W$ and a
finite decreasing Hodge filtration $F$ on the complexification, opposed on
every weight-graded piece, together with the morphism condition and the
pure, Tate, tensor, dual and polarizability conventions.
[[lem-deligne-splitting-of-a-mixed-hodge-structure]] constructs Deligne's
canonical bigrading $I^{p,q}$: each piece projects isomorphically onto a Hodge
summand of $\operatorname{Gr}^W_{p+q}$, the weight filtration and both Hodge
filtration and its conjugate are the corresponding partial sums, and the
construction is functorial; the formula is deliberately not asserted to be
conjugate-symmetric. Two-filtration bookkeeping inside that proof also supplies
the equivalence between the decomposed, vanishing and spanning forms of
opposition.

[[lem-morphisms-of-mixed-hodge-structures-are-strict]] then derives the basic
category-theoretic behaviour from that splitting: every morphism is strict for
$W$ and for $F$, kernels, images and cokernels carry induced or quotient
structures, $\operatorname{Gr}^W_n$ is exact, and a morphism from weights at
least $n$ to weights at most $n$ has pure image. The second half of the page
moves to complexes. [[def-cohomological-mixed-hodge-complex]] records the
cohomological mixed Hodge complex datum: a rational complex and a complex with
both filtrations, joined by a filtered comparison quasi-isomorphism, subject
to the axiom that each weight-graded complex has finite-dimensional cohomology,
$F$-strict differentials and pure cohomology of weight $r+w$, with the shifted
weight filtration on $H^n$ stated explicitly.
[[lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights]]
establishes the weight spectral sequence, the purity of its $E_1$- and
$E_2$-terms, degeneration at $E_2$ and the identification of the graded pieces
$\operatorname{Gr}^W_mH^n\cong E_2^{n-m,m}$, and transfers the construction to
cosimplicial systems of weight-zero Hodge complexes, where the degree-$n$
cohomology has weights at most $n$. The Hodge-filtration half of the
identification is recorded there as an open obligation: it needs the
comparison of the recurrent filtration on the stable page with the filtration
induced on the abutment by a second filtration (Deligne II (1.3.15)-(1.3.17)),
which is not yet available in the library. The companion page
[[mixed-hodge-structures-and-strictness-examples]] carries the worked
non-splitting extension that shows mixed structures are not automatically
split over $\mathbb Q$.
