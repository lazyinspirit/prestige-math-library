---
page: continuous-functional-calculus-for-self-adjoint-and-normal-operators-examples
title: Continuous Functional Calculus for Self Adjoint and Normal Operators — Examples
status: published
items: []
examples: [ex-functional-calculus-for-a-diagonal-operator, ex-functional-calculus-for-a-multiplication-operator, ex-square-root-and-absolute-value-of-a-matrix, ex-polar-decomposition-of-the-unilateral-shift, cex-a-quasinilpotent-operator-need-not-be-zero, cex-continuous-calculus-does-not-contain-discontinuous-spectral-projections, cex-self-adjointness-cannot-be-dropped-from-the-order-calculus]
---

The companion computes the calculus in its two basic models and exhibits the
three boundary phenomena that the main page must not gloss over.

The diagonal operator $Te_n=\lambda_ne_n$ on $\ell^2$ has spectrum the closure of
its eigenvalue set — the reciprocal diagonal operator inverts $zI-T$ off that
closure, while on the closure the basis eigenvectors make $T-zI$ fail to be
bounded below — and the calculus acts diagonally, $f(T)e_n=f(\lambda_n)e_n$. The
multiplication operator $M_t$ on $L^2(0,1)$ has spectrum $[0,1]$, computed from
the continuous reciprocal outside the interval and from the continuous tents
concentrated at interior and endpoint points inside it, and every continuous $f$
acts as multiplication by $f$. On two-dimensional examples the page computes
$|T|=\operatorname{diag}(0,2)$ for the nilpotent $T=2J$, where $J$ is the
two-dimensional Jordan block with $J^2=0$, and the positive square root
$\operatorname{diag}(1,2)$ of $\operatorname{diag}(1,4)$; the polar
decomposition of the unilateral shift is computed with $|S|=I$, $S^*S=I$ and
$SS^*=I-P$ preventing the shift from being a coisometry.

The counterexamples mark the limits of the theory. The nonzero Jordan nilpotent
has spectrum $\{0\}$ and is not normal, so the hypothesis of the zero-spectrum
corollary cannot be dropped. The indicator of $(0,1/2)$ defines a projection
commuting with $M_t$ that is not $f(M_t)$ for any continuous $f$, so the
continuous calculus is strictly smaller than the Borel calculus of the next
pair. And $J$ itself, whose quadratic form takes the non-real value
$i/2$ at a unit vector, shows that nonnegativity of the spectrum does not
characterise positivity once self-adjointness is dropped.
