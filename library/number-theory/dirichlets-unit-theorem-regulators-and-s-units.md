---
page: dirichlets-unit-theorem-regulators-and-s-units
title: "Dirichlets Unit Theorem Regulators and S Units"
status: draft
items: [lem-roots-of-unity-in-a-number-field-are-finite, thm-kronecker-root-of-unity-criterion, lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one, thm-product-formula-for-number-fields, def-logarithmic-unit-embedding, lem-unit-logarithms-lie-in-the-product-formula-hyperplane, lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity, lem-discrete-subgroups-of-real-vector-spaces-are-lattices, lem-logarithmic-unit-image-is-discrete, thm-logarithmic-unit-image-is-a-full-lattice, thm-dirichlet-unit-theorem, def-fundamental-units, def-number-field-regulator, lem-deleted-row-minors-of-a-matrix-with-zero-column-sums, thm-number-field-regulator-is-well-defined, cor-unit-ranks-by-number-field-signature, def-s-integers-and-s-units-of-a-number-field, thm-s-unit-theorem]
examples: []
---

The unit group of a number field is finite at rank zero and otherwise a finite
torsion group times a free abelian group. This page proves that structure from
the arithmetic of the maximal order: only finitely many roots of unity lie in
$K$, Kronecker's criterion converts bounded conjugates into torsion, and a unit
of $\mathcal O_K$ is exactly an element of norm $\pm1$. The product formula is
stated in the normalization the argument needs, with finite absolute values
$N\mathfrak p^{-v_{\mathfrak p}}$, real ones $|\sigma(x)|$ and complex ones
$|\tau(x)|^2$; its ideal-factorization step assumes Choice. The full-lattice
argument also states Choice for its Minkowski and measure inputs, and the unit
and S-unit results carry the hypotheses of their dependencies.

The logarithmic embedding $\lambda$ doubles the complex coordinates, so that
the product-formula identity becomes the literal coordinate-sum-zero
hyperplane $H$; mixing the doubled and undoubled conventions silently rescales
regulators by powers of two. On units, $\lambda$ has kernel exactly the roots
of unity, its image is discrete, and the central theorem of the page, after
Stein, shows that image is a full lattice in $H$: the equality case of the
Minkowski convex-body theorem produces a small element of $\mathcal O_K$, the
boundedly many principal ideals of bounded norm reduce it to a unit, and the
two-sided bound forces the span to fill $H$. Dirichlet's unit theorem then
reads $\mathcal O_K^\times\cong\mu(K)\times\mathbb Z^{r_1+r_2-1}$, with the
rank $r_1+r_2-1$ recorded as a signature corollary covering the rank-zero
fields $\mathbb Q$ and the imaginary quadratic fields, and the real quadratic
case of rank one.

The regulator is defined by the absolute value of a deleted-row minor of the
logarithmic matrix, with the empty determinant set to $1$ at rank zero. The
deleted-row minors of a matrix with zero column sums are independent of the
deleted row up to sign, and a unimodular change of generating system multiplies
every minor by $\pm1$, so the regulator of a fundamental system is well
defined; the definition and the well-definedness theorem are stated for the
fundamental systems of the unit theorem, and the deletion normalization is
made explicit. The page closes with $S$-integers and $S$-units for a finite set
$S$ of finite primes. The valuation map to $\mathbb Z^S$ has kernel
$\mathcal O_K^\times$ and finite-index image, since the class number kills the
classes of primes in $S$; this gives
$\mathcal O_{K,S}^\times\cong\mu(K)\times\mathbb Z^{r_1+r_2-1+|S|}$.
