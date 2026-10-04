---
page: "the-heat-kernel-and-the-cauchy-problem-examples"
title: "The Heat Kernel and the Cauchy Problem — Examples"
status: published
items: []
examples: ["ex-gaussian-data-remain-gaussian-under-heat-flow", "ex-heat-flow-of-an-indicator-function", "ex-self-similar-heat-kernel-solution", "cex-linfinity-approximate-identity-need-not-converge-in-supremum-norm", "cex-heat-equation-does-not-have-finite-propagation", "ex-fourier-transform-of-the-heat-kernel", "ex-heat-evolution-of-affine-and-quadratic-polynomials", "ex-heat-lp-to-lq-time-exponent-is-forced-by-parabolic-scaling"]
---

These companions compute the heat kernel and its flow in closed form and mark
the limits of the main page's theorems. The Fourier transform of the kernel is
$e^{-4\pi^2t|\xi|^2}$ in the library's $2\pi$-normalised convention, which is
the same computation as $e^{-t|\xi|^2}$ in the unnormalised convention, and
the evolution of a centred Gaussian density is again centred Gaussian with
the covariance shifted by $2tI$. The kernel is exhibited as the self-similar
profile with conserved unit mass, the flow of an interval indicator is written
as a difference of Gaussian tails, and the affine and quadratic polynomial
data are evaluated directly as absolutely convergent Gaussian moment
integrals. The Laplacian of the flow at time zero is computed on compactly
supported smooth data, and the time exponent of any uniform $L^p$ to $L^q$
estimate is shown by parabolic rescaling to be forced to
$\frac n2(1/p-1/q)$. Two counterexamples record sharpness: at the
$p=\infty$ endpoint the flow of a bounded datum need not converge in
supremum norm, so the continuity hypothesis of the bounded-data theorem is
not redundant; and a compactly supported nonnegative heat datum becomes
strictly positive everywhere at every positive time, so the heat equation has
no finite propagation speed. Countable Choice is carried by the cited
evolution, moment and integration interfaces in each construction.
