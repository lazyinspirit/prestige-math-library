---
page: orthonormal-bases-parseval-and-fourier-series
title: Orthonormal Bases, Parseval and Fourier Series
status: published
items: [def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, lem-finite-bessel-inequality, def-square-summable-family-on-an-arbitrary-index-set, thm-bessel-inequality-for-an-arbitrary-orthonormal-family, lem-only-countably-many-fourier-coefficients-are-nonzero, lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums, thm-parseval-equivalences-for-a-complete-orthonormal-family, thm-hilbert-space-fourier-expansion, thm-existence-of-a-maximal-orthonormal-family, thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set, thm-separable-hilbert-space-has-a-countable-orthonormal-basis, cor-separable-infinite-dimensional-hilbert-space-is-ell-two, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-the-one-dimensional-torus-and-normalized-haar-integral, lem-finite-tori-are-compact-hausdorff-character-spaces, def-fourier-coefficients-and-trigonometric-polynomials, lem-trigonometric-characters-are-orthonormal, cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions, lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori, thm-trigonometric-system-is-complete-in-l-two-of-the-torus, thm-l-two-fourier-series-converges-in-mean-square, thm-parseval-identity-for-fourier-series, thm-riesz-fischer-for-fourier-coefficients, thm-fourier-basis-and-parseval-on-the-n-torus]
examples: []
---

The pair continues the Hilbert-space geometry of the previous page with
orthonormal families on arbitrary index sets. Orthonormality and completeness
are defined through the closed linear span, and finite Bessel bounds the finite
partial sums of a family; the nonnegative square sum over an arbitrary index set
is the supremum of its finite subsums, which is the convention used throughout.
The finite-subset net of partial sums replaces any global ordering of the index
set, and the small-tail criterion derived from the supremum makes the synthesis
of square-summable orthogonal families a matter of Pythagoras together with the
completeness of the ambient Hilbert space; the Axiom of Countable Choice is
spent there, once, in selecting one finite tail-control set per natural number.

Completeness of an orthonormal family, the vanishing of its orthogonal
complement, Parseval's equality and the convergence of the finite-subset net of
partial sums are proved equivalent, and the expansion of an arbitrary vector as
the unconditional sum of its coefficients follows. Under the Axiom of Choice
Zorn's lemma produces a maximal orthonormal family, and maximality is
equivalent to completeness; with an orthonormal basis in hand the coefficient
map is a surjective linear isometry onto $\ell^2$ of the index set. When a dense
sequence is supplied, Gram–Schmidt elimination constructs a countable basis
deterministically, and a separable infinite-dimensional Hilbert space is shown,
in ZF, to be $\ell^2(\mathbb N)$.

The second half works out the classical Fourier case. The torus
$\mathbb T=\mathbb R/\mathbb Z$ carries its quotient topology and the normalized
translation-invariant Borel measure represented on $[0,1)$, with the finite
torus $\mathbb T^n$ treated by finite products; the trigonometric characters are
orthonormal in $L^2(\mathbb T)$, the trigonometric polynomials are uniformly
dense in the continuous functions by complex Stone–Weierstrass, and these two
facts together with the density of continuous functions give completeness of the
trigonometric system. Fourier series therefore converge in mean square,
Parseval's identity holds in both its norm and its sesquilinear form, the
coefficient map is an isometry onto $\ell^2(\mathbb Z)$, and the same
constructions apply on every finite torus without any tensor-product
identification. Only $L^2$ statements are made; pointwise convergence and
Dirichlet–Jordan theory belong to the later Fourier-analysis pages.
