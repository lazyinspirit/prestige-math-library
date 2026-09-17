---
page: orthonormal-bases-parseval-and-fourier-series-examples
title: Orthonormal Bases, Parseval and Fourier Series — Examples
status: draft
items: []
examples: [ex-standard-basis-of-ell-two, ex-legendre-polynomials-from-gram-schmidt, ex-haar-orthonormal-basis-of-l-two-zero-one, ex-fourier-series-of-a-sawtooth, ex-fourier-series-of-a-square-wave]
---

The companion works the standard orthonormal bases and two Fourier
computations. The coordinate vectors of $\ell^2(\mathbb N)$ are shown to be an
orthonormal basis, with the canonical coordinate expansion and the norm formula,
including the completeness of $\ell^2(\mathbb N)$ itself. Gram–Schmidt applied
to the monomials in $L^2([-1,1])$ gives a complete orthonormal family whose first
three members $\frac{1}{\sqrt2}$, $\sqrt{\frac32}x$ and
$\sqrt{\frac58}(3x^2-1)$ are computed explicitly, and the example records that
the classical Legendre polynomials are the unnormalised multiples with
$P_n(1)=1$. The dyadic Haar family, consisting of the constant $1$ together with
the functions $2^{j/2}$ on the left half and $-2^{j/2}$ on the right half of
each level-$j$ dyadic interval, is proved to be an orthonormal basis of
$L^2([0,1])$: orthogonality and normalisation are direct computations, the
finite levels exhaust the dyadic step functions, and Heine–Cantor makes those
step functions uniformly dense in the continuous functions.

The two Fourier series are computed from the sine and cosine forms of the
characters using the derivative rules and the second fundamental theorem of
calculus, with the bounded Riemann–Lebesgue agreement transferring the
computations to the $L^2$ integrals. For the sawtooth $f(x)=x$ on
$(-\frac12,\frac12)$ the coefficients are $\widehat f(k)=\frac{(-1)^{k+1}}{2\pi ik}$,
and Parseval yields $\sum_{k\ge1}k^{-2}=\pi^2/6$. For the square wave
$s=\operatorname{sgn}$ on $(-\frac12,\frac12)$ the coefficients are
$\widehat s(k)=\frac{1-(-1)^k}{\pi ik}$ and Parseval yields
$\sum_{k\ \text{odd}}k^{-2}=\pi^2/8$. Both examples claim only $L^2$
convergence and assign no meaning to the endpoint values.
