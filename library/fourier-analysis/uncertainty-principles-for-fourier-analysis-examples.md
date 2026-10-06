---
page: uncertainty-principles-for-fourier-analysis-examples
title: "Uncertainty Principles for Fourier Analysis — Examples"
status: draft
items: []
examples: [cex-finite-variance-is-not-the-same-as-compact-support,
           ex-gaussian-attains-heisenberg-equality,
           ex-hardy-critical-and-subcritical-gaussian-regimes,
           ex-finite-dft-delta-and-constant-extremisers,
           cex-both-supports-cannot-be-singletons-when-n-is-greater-than-one]
---

These examples execute the three localisation principles of the companion page
at explicit parameters and separate their hypothesis classes. The Gaussian
$e^{-\pi a|x|^2}$ is the running example: it attains equality in the summed
Heisenberg inequality, with spatial variance $n/(4\pi a)$ and frequency
variance $na/(4\pi)$ whose product is exactly $(n/4\pi)^2$, so every constant
in the library's $e^{-2\pi ix\cdot\xi}$ convention is checked rather than
quoted. The counterexample on the same function shows that finite variance is
not compact support: the Gaussian and its transform are strictly positive
everywhere, so neither vanishes off a set of finite measure, and the
support-measure hypothesis of the companion theorem cannot be deduced from the
variance hypotheses.

For Hardy's theorem the three parameter regimes are tabulated. At the critical
product $ab=1$ the Gaussian $e^{-\pi a|x|^2}$ satisfies both Gaussian bounds
and the theorem classifies it as a scalar multiple of itself; in the subcritical
regime $ab<1$ the interval $(a,1/b)$ supplies a nonzero Gaussian satisfying both
bounds, so no vanishing conclusion holds; in the supercritical regime $ab>1$
the two bounds force $c\ge a$ and $c\le1/b$ on any Gaussian witness, which is
impossible, matching the theorem's conclusion that $f=0$ almost everywhere.

The finite discrete Fourier transform is treated separately, because its
product bound is not the Heisenberg product. The delta and the constant
function are evaluated explicitly as two examples of extremisers of the support-product
bound at every length $N$, with the two identities coinciding at $N=1$, and the
last witness shows that both supports cannot be singletons when $N>1$: the
support-product bound would give $1\ge N$. The boundary case $N=1$, where the
delta is the constant function and the configuration does occur, is included to
show that the hypothesis $N>1$ is essential.
