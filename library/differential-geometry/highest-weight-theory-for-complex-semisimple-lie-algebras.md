---
page: highest-weight-theory-for-complex-semisimple-lie-algebras
title: Highest Weight Theory for Complex Semisimple Lie Algebras
status: draft
items:
  - prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system
  - def-weight-and-weight-space-of-a-lie-algebra-representation
  - prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces
  - lem-simple-reflections-preserve-weight-multiplicities
  - prop-root-vectors-shift-weight-spaces
  - def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra
  - thm-triangular-decomposition-of-a-complex-semisimple-lie-algebra
  - def-partial-order-on-weights
  - def-highest-weight-vector-and-highest-weight-module
  - lem-highest-weight-modules-have-weights-below-the-top-weight
  - lem-every-finite-dimensional-irreducible-representation-has-a-highest-weight-vector
  - prop-a-finite-dimensional-irreducible-module-is-generated-by-any-highest-weight-vector
  - prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional
  - def-integral-dominant-and-strictly-dominant-weights
  - prop-dominant-integral-weights-are-nonnegative-combinations-of-fundamental-weights
  - lem-highest-weight-of-a-finite-dimensional-module-is-dominant-integral
  - lem-integrability-relations-for-a-dominant-highest-weight
  - def-dominant-integrable-highest-weight-cyclic-module
  - lem-pbw-shows-the-dominant-cyclic-highest-weight-generator-survives
  - lem-simple-root-integrability-bounds-the-dominant-cyclic-module
  - lem-a-dominant-cyclic-highest-weight-module-has-a-unique-simple-quotient
  - thm-finite-dimensionality-of-lambda-highest-weight-simple-modules-for-dominant-integral-lambda
  - thm-simple-highest-weight-modules-are-classified-by-their-highest-weight
  - thm-highest-weight-classification-of-finite-dimensional-irreducible-representations
  - cor-every-finite-dimensional-representation-is-a-direct-sum-of-highest-weight-modules
  - prop-highest-weight-of-the-dual-representation
  - prop-top-highest-weight-summand-in-a-tensor-product
  - prop-the-adjoint-representation-has-highest-weight-the-highest-root
  - def-weyl-vector-rho
  - prop-weyl-vector-is-the-sum-of-fundamental-weights
  - prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one
  - rem-harish-chandra-isomorphism-and-category-o
  - fs-every-weight-vector-is-a-highest-weight-vector
  - fs-every-verma-module-is-finite-dimensional
  - fs-every-highest-weight-lambda-gives-a-finite-dimensional-simple-module
  - fs-dominance-is-defined-without-choosing-positive-roots
  - fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition
  - fs-the-weyl-character-formula-is-an-ordinary-quotient-of-functions-before-formal-cancellation-is-justified
---

This page develops the finite-dimensional representation theory of a complex
semisimple Lie algebra $\mathfrak g$ up to the theorem of the highest weight:
irreducible finite-dimensional representations are classified by the dominant
integral weights of a fixed choice of Cartan subalgebra, positive system and
base of simple roots.

It begins by relating the Lie-theoretic root data to the abstract Euclidean
root-system theory, so that positive systems, the root order, fundamental
weights and the Weyl group may be used on the root system of $\mathfrak g$
itself. The first half then fixes a Cartan subalgebra: it defines weights and
weight spaces, proves the weight decomposition of a finite-dimensional module,
transfers the Weyl-invariance of weight multiplicities from the rank-one
$\mathfrak{sl}_2$ theory, and produces the triangular decomposition
$\mathfrak g=\mathfrak n^-\oplus\mathfrak h\oplus\mathfrak n^+$,
the root order, highest weight vectors and the one-dimensionality of the
highest line.

The second half proves the classification. Necessity is the rank-one test on
every simple root; sufficiency builds on the cyclic quotient
$M_{\mathrm{int}}(\lambda)$: PBW shows its canonical generator survives, the
simple-root integrability relations make it finite-dimensional, the
one-dimensional top line gives a unique simple quotient $L(\lambda)$, and
highest weight is a complete invariant. Consequences follow: complete
reducibility rephrased as a sum of highest weight modules, the dual highest
weight $-w_0\lambda$, the multiplicity-one top summand in a tensor product,
the adjoint highest weight as the highest root, the Weyl vector and the
extremal Weyl-orbit weights. A closing remark records that Verma modules,
category $\mathcal O$, the Harish–Chandra isomorphism and geometric
representation theory lie beyond this page and are not used here, and six
false statements delimit the theory from natural-but-wrong strengthenings.
