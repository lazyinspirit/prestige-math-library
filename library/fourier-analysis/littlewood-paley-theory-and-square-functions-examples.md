---
page: littlewood-paley-theory-and-square-functions-examples
title: "Littlewood Paley Theory and Square Functions — Examples"
status: published
requires: [littlewood-paley-theory-and-square-functions]
items: []
examples: [ex-square-function-of-one-frequency-localised-function,
        ex-dyadic-square-function-of-two-separated-frequency-packets,
        cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels,
        ex-sobolev-weight-on-a-single-dyadic-annulus]
---

These examples anchor the strict-range theory
of the companion page and display the exact places where its constants and its
hypotheses are used. All of them work with a fixed admissible partition in the
sense of the companion page.

A Schwartz function whose Fourier transform is supported in the unit ball exercises the
low-frequency block: every $\Delta_j$ with $j\ge1$ kills it, the square
function degenerates to $|\Delta_0f|=|f|$, and $\|Sf\|_p=\|f\|_p$. For a
nonzero function in that class, the coefficients in
$c_p\|f\|_p\le\|Sf\|_p\le C_p\|f\|_p$ must satisfy $c_p\le1\le C_p$.
Two Schwartz frequency packets supported in the dyadic annuli of nonnegative
integer levels $0\le j<k$ with $k\ge j+3$ illustrate the almost
orthogonality behind the $L^2$ theory: at every level at most one of the two
packets sees a nonzero piece, the pointwise square functions add in Euclidean
square rather than in absolute value, and Plancherel makes the two packets
orthogonal. The Sobolev example computes the weight on a single dyadic annulus,
where exactly one piece equals $1$: the $H^s$ norm is comparable to
$2^{js}\|f\|_2$, with the correct low-frequency weight $2^{0}=1$ at $j=0$.

The counterexample shows that the smoothness of the partition is used
essentially: for the sharp interval cutoffs the inverse Fourier transforms are
$e^{3\pi ix}\sin(\pi x)/(\pi x)$ up to scaling, whose modulus is not
integrable, so the uniform $L^1$ kernel bound of the smooth theory fails
already in one dimension.
