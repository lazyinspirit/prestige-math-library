---
page: logarithmic-potential-capacity-and-riesz-decomposition-examples
title: "Logarithmic Potential, Capacity, and Riesz Decomposition: Examples and Counterexamples"
status: published
requires: [logarithmic-potential-capacity-and-riesz-decomposition, infinite-products-and-weierstrass-factorisation, hausdorff-measure-and-hausdorff-dimension]
items: []
examples:
  - ex-logarithmic-capacity-of-disc-and-equilibrium-circle
  - ex-logarithmic-capacity-of-a-real-interval
  - ex-chebyshev-extremal-polynomials-and-capacity
  - ex-chebyshev-extremal-nodes-and-arcsine-measure
  - ex-finite-and-countable-sets-are-logarithmically-polar
  - ex-cantor-sets-with-positive-and-zero-logarithmic-capacity
  - ex-riesz-measure-of-log-modulus-is-zero-divisor
  - ex-green-function-of-a-circular-conductor
---

These examples compute the page's central objects in settings where the
formulas can be checked explicitly. Normalized arclength on a circle is the
unique equilibrium measure of the closed disc, with constant potential
$\log(1/r)$ and capacity $r$; pushing the uniform angle measure through
$x=\cos\theta$ gives the arcsine equilibrium measure of $[-1,1]$ and capacity
$(b-a)/4$. The unit disc also exhibits the exact Fekete configuration: the
$n$-th roots of unity maximize the Vandermonde product, with
$\delta_n=n^{1/(n-1)}$ and Fekete polynomial $F_n(z)=z^n-1$, while the
Chebyshev columns describe the corresponding extremal nodes and alternating
extrema on $[-1,1]$ in terms of the arcsine measure.

The remaining examples separate capacity from more familiar notions. Every
finite or countable set is capacity-polar, and on the real line two compact
null sets can have positive and zero logarithmic capacity; a Cantor measure
with energy at most $3\log 3$ gives capacity at least $1/27$, while a thin
Cantor set whose every probability has infinite energy has capacity zero. For a
holomorphic function, the Riesz measure of $\log|f|$ is the weighted zero
divisor. Finally, the Green function with pole at infinity of the exterior of a
circular conductor is $\log(|z-a|/r)$ in the stated normalization.
