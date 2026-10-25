---
page: calderon-zygmund-decomposition-and-singular-integrals-examples
title: "Calderón–Zygmund Decomposition and Singular Integrals — Examples"
status: published
requires: [calderon-zygmund-decomposition-and-singular-integrals]
items: []
examples:
  - ex-calderon-zygmund-decomposition-of-an-interval-indicator
  - ex-riesz-transform-as-a-standard-calderon-zygmund-operator
  - cex-calderon-zygmund-strong-lone-bound-fails
  - cex-calderon-zygmund-operators-need-not-map-linfinity-to-linfinity
  - cex-size-without-cancellation-does-not-give-a-principal-value-operator
  - ex-second-derivative-newtonian-kernels-fit-the-cz-framework
---

These examples and counterexamples anchor the strict-range theory of the
companion page and mark the endpoints it leaves open. All of them assume
Countable Choice where a choice is made.

The decomposition of the interval indicator $\mathbf 1_{(0,1]}$ at height
$1/4$ is computed completely on the all-generation half-open dyadic grid: the
unique maximal bad interval is $(0,2]$ with average $2\lambda$, the parent
$(0,4]$ has average exactly $\lambda$ and is good, and the bad and good parts
read off from the formulas satisfy the $2\lambda$ average bound, the mean-zero
property and the measure bound with equality in spirit. The Riesz kernel
$c_nx_j/|x|^{n+1}$ is verified to be a standard $1$-Hölder Calderón–Zygmund
kernel with the published size, first-difference and spherical-mean estimates,
and the Newtonian Hessian is analysed the same way: twice differentiating
$|x|^{2-n}/((n-2)\sigma_{n-1})$ gives an off-origin kernel of degree $-n$ whose
principal value is $L^2$-bounded with symbol $-\xi_i\xi_j/|\xi|^2+\delta_{ij}/n$,
after the local delta term of $\partial_{ij}\Gamma$ is removed.

The two Hilbert-transform counterexamples use the same explicit interval
transform $\pi^{-1}\log|x/(x-1)|$: its $1/|x|$ tail at infinity is not
integrable, so no compatible strong type $(1,1)$ extension exists, and its
logarithmic divergence at $0$ and $1$ rules out a compatible bounded action on
$L^\infty$. Neither computation refutes the weak $(1,1)$ bound or a BMO
endpoint. Finally, the positive kernel $|x|^{-n}$ shows that the pointwise size
condition alone produces no principal value and no finite maximal truncation,
isolating cancellation as an essential hypothesis of the theory.
