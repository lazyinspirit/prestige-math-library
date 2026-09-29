---
page: fourier-multipliers-and-sobolev-characterisations
title: "Fourier Multipliers and Sobolev Characterisations"
status: published
items: [def-translation-invariant-fourier-multiplier-on-schwartz-space,
        lem-ltwo-fourier-multiplier-bound,
        def-lp-fourier-multiplier-and-multiplier-norm,
        thm-hausdorff-young-for-periodic-fourier-coefficients,
        thm-hausdorff-young-for-the-euclidean-fourier-transform,
        def-mihlin-symbol-with-more-than-half-dimension-derivatives,
        lem-weak-derivatives-are-polynomial-fourier-multipliers,
        thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces,
        thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces,
        def-japanese-bracket-bessel-potential-operator,
        lem-bessel-potentials-shift-sobolev-order-isometrically,
        cor-sobolev-duality-from-the-fourier-pairing]
examples: []
---

This page develops translation-invariant Fourier multipliers and the Fourier
characterisations of the Sobolev scale. It works with complex scalars, the
negative-sign $2\pi$-normalized Fourier transform, the unitary Plancherel
transform $\mathcal F_2$, tempered distributions with bilinear test pairing,
and the first-variable-linear complex inner product.

A measurable symbol first acts on its explicit Schwartz domain, where the
frequency product is a regular tempered distribution; the domain-qualified
operator is translation stable and commutes with translations. For essentially
bounded symbols the Plancherel isometry gives the exact $L^2$ operator norm,
the essential supremum, and the $L^p$ multiplier convention is recorded with
the finite-$p$ uniqueness caveat. Hausdorff–Young is proved at the two
endpoints on the finite-simple core and interpolated for $1<p<2$, both for
periodic Fourier coefficients and for the Euclidean transform, and the Mihlin
derivative-count convention is fixed without asserting its $L^p$ conclusion.

The Sobolev half starts from the weak-derivative/Plancherel identity
$\widehat{D^\alpha u}(\xi)=(2\pi i\xi)^\alpha\widehat u(\xi)$ and compares the
multinomial derivative weight with the Japanese bracket. This identifies the
integer-order weak Sobolev space $W^{k,2}$ with the bracket completion $H^k$,
with two-sided norm constants, and shows that the bracket-weighted, weak
derivative and Laplacian-weighted norms are equivalent but not identical. The
real-order theorem imports the batch-12 weighted tempered-distribution
characterisation verbatim: $H^s$ is exactly the set of tempered distributions
whose bracket-weighted Fourier transform is a regular $L^2$ distribution,
with its defining norm and a unique $L^2$ class, and no element is assumed to
be a function.

The bracket operator $\langle D\rangle^t$ and the Laplacian Bessel potential
$(I-\Delta)^{t/2}$ are then defined on tempered distributions by their symbols.
Their frequency weights are comparable up to positive constants; for $t\ne0$
their ratio is
$$\Bigl(\frac{1+4\pi^2|\xi|^2}{1+|\xi|^2}\Bigr)^{t/2},$$
which differs from $1$ at every nonzero frequency and tends to $(2\pi)^t$ at
high frequency.
$\langle D\rangle^t$ shifts the Sobolev order isometrically and surjectively,
while $(I-\Delta)^{t/2}$ is only a bounded isomorphism with explicit two-sided
constants and an explicit high-frequency witness against isometry for
$t\ne0$. The page also records the contractive inclusion $H^s\hookrightarrow
H^r$ for $s\ge r$, the derivative bound $\|\partial_jU\|_{H^s}\le
2\pi\|U\|_{H^{s+1}}$, and the conjugate duality of $H^s$ with $H^{-s}$ under
the weighted $L^2$ Fourier pairing.

Countable Choice is assumed on every item that consumes the completion,
Plancherel, interpolation, Riesz or polar-coordinate interfaces, and is
declared as a dependency there; the punctured-domain Mihlin symbol definition
itself is choice-free. No $L^p$ Mihlin theorem, no
Hausdorff–Young inequality beyond $p\le2$, and no unproved $L^p$
multiplier conclusion is asserted on this page.
