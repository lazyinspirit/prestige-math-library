---
page: finite-fourier-analysis-and-the-fast-fourier-transform-examples
title: "Finite Fourier Analysis and the Fast Fourier Transform — Examples"
status: draft
items: []
examples: [cex-linear-and-cyclic-convolution-are-not-the-same-without-zero-padding,
           ex-unitary-dft-for-n-equals-one-and-two,
           ex-cyclic-convolution-via-the-dft,
           cex-radix-two-recursion-does-not-directly-apply-to-odd-length,
           ex-four-point-radix-two-fft]
---

These examples exercise the conventions of the companion page at the smallest
lengths. The unitary transform is written out completely for $N=1$ and $N=2$,
with the identity at length one and the real symmetric self-inverse matrix
$\frac1{\sqrt2}\bigl(\begin{smallmatrix}1&1\\1&-1\end{smallmatrix}\bigr)$ at
length two, and both cases are reconciled with inversion and the fourth-power
identity.

On $\mathbb Z/4\mathbb Z$ the transform converts a four-point cyclic convolution
into a pointwise product, computed in both the unitary and the unnormalised
conventions, and the result agrees with direct summation; the companion
counterexample shows what goes wrong without zero padding, where the coefficient
of $z^{2}$ wraps back into degree $0$ at length two. The odd-length witness tests
the algorithm's length hypothesis: the even/odd split does not partition
$\mathbb Z/3\mathbb Z$, because doubling permutes the three classes and $3/2$
is not an integer. The four-point recursion checks correctness and the operation
count by executing both levels and counting sixteen complex arithmetic
operations in the stated model. None of these leaves claims that odd-length
transforms are difficult or that the transform is numerically stable.
