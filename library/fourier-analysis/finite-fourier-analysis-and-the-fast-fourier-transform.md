---
page: finite-fourier-analysis-and-the-fast-fourier-transform
title: "Finite Fourier Analysis and the Fast Fourier Transform"
status: draft
items: [def-counting-inner-product-on-complex-functions-on-z-mod-n,
        def-cyclic-convolution-on-z-mod-n,
        def-unitary-discrete-fourier-transform-on-z-mod-n,
        lem-orthogonality-of-characters-on-a-finite-cyclic-group,
        lem-dft-squares-to-reflection-and-has-fourth-power-identity,
        lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product,
        thm-finite-fourier-inversion,
        thm-finite-parseval-and-plancherel,
        def-unnormalised-engineering-dft-and-conversion,
        lem-radix-two-even-odd-dft-factorisation,
        def-recursive-radix-two-fast-fourier-transform,
        thm-radix-two-fft-arithmetic-complexity,
        thm-radix-two-fft-correctness]
examples: []
---

This page develops the discrete Fourier transform on the finite cyclic group
$\mathbb Z/N\mathbb Z$ from finite sums alone, with no convergence, regularity
or topological hypothesis anywhere. It fixes the counting inner product on
complex functions on the group, the unnormalised cyclic convolution, and the
negative-sign, $N^{-1/2}$-normalised unitary transform. The orthogonality of the
characters $x\mapsto e^{2\pi ikx/N}$ is proved directly from the recursion for
finite sums, including the length-one case, and it drives inversion,
Parseval–Plancherel, and the convolution law, in which the unnormalised
convolution costs one explicit factor $\sqrt N$. The square of the transform is
reflection and its fourth power is the identity.

The second half converts the unitary convention into the unnormalised
engineering convention $X_k=\sum_x f_xe^{-2\pi ikx/N}=\sqrt N\,(\mathcal F_Nf)(k)$,
in which the convolution law has no extra factor and the inverse formula carries
the visible $1/N$. The radix-two step then splits an even length into the even
and odd coefficient lists and combines their shorter transforms with twiddle
factors $e^{-2\pi ik/N}$; the recursive algorithm built from that step is defined
for lengths $N=2^{m}$, proved to compute the unnormalised transform, and shown
to use at most $2m\,2^{m}=2N\log_2N$ complex additions and multiplications in an
explicitly stated operation model that excludes twiddle evaluation, index
arithmetic and bit complexity. This recursive algorithm and its bound apply
to the specified power-of-two lengths. The companion
page executes the small cases: the transforms at $N=1$ and $N=2$, a four-point
cyclic convolution computed through the transform, the full four-point radix-two
recursion, and two counterexamples showing the wrap of an unpadded product and
the failure of the even/odd split for odd lengths.
