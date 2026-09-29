---
page: jensen-theory-and-nevanlinnas-first-main-theorem-examples
title: "Jensen Theory and Nevanlinna's First Main Theorem: Examples and Counterexamples"
status: published
items: []
examples: [ex-poisson-jensen-with-a-repeated-zero,
           ex-nevanlinna-regularisation-when-f-zero-equals-a,
           ex-nevanlinna-characteristics-of-elementary-functions,
           ex-nevanlinna-characteristic-under-target-mobius-map,
           ex-nevanlinna-characteristic-of-reciprocal-gamma,
           ex-rational-degree-as-logarithmic-characteristic]
---

These computations make the normalisations and constants of the companion page
concrete. A repeated zero is carried twice through the disc Green kernel, and a
centre $a$-point shows why the integrated count is regularised by the leading
Laurent coefficient rather than by the vanishing expression $\log|f(0)-a|$.

Monomials, the exponential and the tangent then receive their exact
characteristics: $T(r,z^d)=d\log r+O(1)$, $T(r,e^z)=r/\pi+O(1)$ and
$T(r,\tan z)=2r/\pi+O(1)$, with orders $0,1,1$. A target Möbius change
$M_a(w)=(1+\overline aw)/(w-a)$ exhibits the exact chordal identity
$\delta(M_a(w),\infty)=\delta(w,a)$ and the $O(1)$ invariance of $T$.

The last two examples connect the finite and the infinite: rational degree
appears as the coefficient of $\log r$, checked for the degree-two map
$(z^2+1)/(z-1)$, while the reciprocal Gamma function has simple zeros exactly
at $0,-1,-2,\ldots$ and characteristic $\Theta(r\log r)$, using the published
reciprocal-Gamma product, meromorphic continuation and sectorial Stirling
estimates with their exact hypotheses. The companion page requires
[[the-gamma-function]] for these three statements.
