---
page: solvable-and-nilpotent-lie-algebras
title: Solvable and Nilpotent Lie Algebras
status: draft
items:
  - def-derived-series-and-solvable-lie-algebra
  - lem-derived-series-terms-are-characteristic-ideals
  - def-solvable-length-of-a-lie-algebra
  - def-lower-central-series-and-nilpotent-lie-algebra
  - lem-lower-central-series-terms-are-characteristic-ideals
  - def-nilpotency-class-of-a-lie-algebra
  - def-upper-central-series-of-a-lie-algebra
  - thm-lower-and-upper-central-series-characterize-nilpotence
  - prop-nilpotent-lie-algebras-are-solvable
  - prop-subalgebras-quotients-and-extensions-of-solvable-lie-algebras
  - prop-subalgebras-quotients-and-finite-products-of-nilpotent-lie-algebras
  - prop-a-central-extension-of-a-nilpotent-lie-algebra-is-nilpotent
  - prop-a-nonzero-nilpotent-lie-algebra-has-nonzero-center
  - def-nilpotent-linear-transformation-and-nil-representation
  - lem-engel-common-zero-vector
  - thm-engels-triangularization-theorem
  - thm-engels-theorem
  - cor-a-lie-algebra-with-nilpotent-adjoint-representation-has-a-central-series
  - cor-a-finite-dimensional-nilpotent-lie-algebra-has-a-codimension-one-ideal-containing-any-given-proper-subalgebra
  - lem-a-finite-dimensional-solvable-lie-algebra-has-a-codimension-one-ideal-over-an-algebraically-closed-characteristic-zero-field
  - thm-lies-theorem
  - cor-simultaneous-upper-triangularization-of-solvable-lie-algebra-representations
  - cor-finite-dimensional-irreducible-representations-of-a-solvable-complex-lie-algebra-are-one-dimensional
  - thm-derived-algebra-of-a-solvable-linear-lie-algebra-is-nilpotent
  - cor-the-derived-algebra-of-a-finite-dimensional-solvable-lie-algebra-is-nilpotent-in-characteristic-zero
  - thm-lies-criterion-for-solvability-by-the-derived-algebra
  - def-radical-of-a-finite-dimensional-lie-algebra
  - thm-sum-of-solvable-ideals-is-solvable
  - prop-the-radical-is-characteristic-and-the-radical-quotient-has-zero-radical
  - def-nilradical-of-a-finite-dimensional-lie-algebra
  - thm-existence-and-characteristicity-of-the-nilradical-in-characteristic-zero
  - thm-the-commutator-of-a-lie-algebra-with-its-radical-lies-in-the-nilradical
  - cor-the-derived-algebra-of-the-radical-lies-in-the-nilradical
  - prop-derivations-preserve-the-nilradical-in-characteristic-zero
  - def-semisimple-lie-algebra-by-vanishing-radical
  - def-reductive-lie-algebra-by-semisimple-derived-algebra-and-center
  - fs-every-solvable-lie-algebra-is-nilpotent
  - fs-an-extension-of-a-nilpotent-lie-algebra-by-a-nilpotent-lie-algebra-is-always-nilpotent
  - fs-it-is-enough-that-a-chosen-basis-act-nilpotently-in-engels-theorem
  - fs-lies-theorem-holds-over-every-field-and-in-every-characteristic
  - fs-every-irreducible-representation-of-a-solvable-real-lie-algebra-is-one-dimensional
  - fs-the-nilradical-is-defined-as-the-set-of-all-ad-nilpotent-elements
examples: []
---

The derived series measures solvability, while the lower and upper central
series measure nilpotence. Their indexing here gives the zero algebra length
and class zero and a nonzero abelian algebra length and class one. Nilpotence
implies solvability, but the two closure theories differ: solvability is stable
under arbitrary extensions, whereas the nilpotent extension result requires a
central kernel. Subalgebras, quotients, and finite nonempty products preserve
nilpotence, and the empty product is handled separately as the zero algebra.

Engel's theorem turns elementwise nilpotence in a finite-dimensional
representation into a common zero vector and a strictly upper triangular
basis. Applied to the adjoint representation, it characterizes nilpotent Lie
algebras and supplies central-series and codimension-one consequences. Lie's
theorem is kept on its precise branch: the acting algebra and module are
finite-dimensional over an algebraically closed field of characteristic zero.
It yields simultaneous upper triangularization and the nilpotence of the
derived algebra; scalar descent proves the corresponding abstract
characteristic-zero result without assuming the original field algebraically
closed.

For a finite-dimensional algebra, the radical is the largest solvable ideal.
In characteristic zero the nilradical is the largest nilpotent ideal; its
existence, characteristicity, behavior under derivations, and the containment
$[\mathfrak g,\operatorname{rad}(\mathfrak g)]\subseteq
\operatorname{nilrad}(\mathfrak g)$ are proved rather than built into the
terminology. The final definitions fix the vanishing-radical convention for
semisimplicity and the direct-sum convention for reductivity, preparing the
next structure-theory page.

All arguments on this page are carried out in ZF. Characteristic zero is
declared exactly where division, triangularization, scalar descent, or the
nilradical theorem requires it; no axiom of choice is invoked. The closing
false statements isolate failures of nilpotent-extension closure, basis-only
Engel hypotheses, unrestricted Lie-theorem fields, real one-dimensionality,
and the tempting but incorrect set-theoretic description of the nilradical.
Concrete computations appear on
[[solvable-and-nilpotent-lie-algebras-examples]].
