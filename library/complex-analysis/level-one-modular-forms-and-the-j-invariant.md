---
page: level-one-modular-forms-and-the-j-invariant
title: Level-One Modular Forms and the j-Invariant
status: draft
requires: [the-argument-principle-and-rouche, infinite-products-and-weierstrass-factorisation, the-riemann-zeta-function, group-actions-and-cayleys-theorem, subspaces-products-and-quotients, elliptic-functions-and-complex-tori, riemann-surfaces-branched-maps-and-differentials]
items: [def-modular-group-action-on-the-upper-half-plane, lem-modular-group-reduction-to-the-standard-domain, thm-standard-fundamental-domain-for-the-modular-group, lem-modular-quotient-local-charts, lem-level-one-cusp-chart-and-compactness, def-compactified-level-one-modular-curve, thm-q-expansion-principle-at-the-cusp, def-level-one-modular-form-and-cusp-form, lem-lattice-eisenstein-sums-converge, def-divisor-power-sums-sigma-k, def-level-one-eisenstein-series, lem-lipschitz-formula-for-the-lattice-sum, thm-eisenstein-series-are-modular-forms, lem-valence-boundary-arc-computation, thm-level-one-valence-formula, cor-zeros-of-e4-and-e6-at-the-elliptic-points, cor-dimension-of-level-one-modular-forms, lem-e2-transformation-law, lem-discriminant-is-a-nonvanishing-cusp-form, def-modular-discriminant-and-j-invariant, thm-ring-of-level-one-modular-forms, thm-j-invariant-classifies-complex-tori, thm-j-uniformizes-the-level-one-modular-curve, thm-jacobi-theta-triple-product, lem-jacobi-theta-transformation-laws, lem-jacobi-product-formula-for-the-discriminant, cor-integrality-of-the-j-invariant-fourier-coefficients]
examples: []
---

This page builds the classical theory of level-one modular forms from the
action of the modular group. The group $PSL_2(\mathbb Z)$ acts on the upper
half-plane by Möbius transformations, and the reduction argument produces the
standard fundamental domain $D$ with its boundary identifications and its
two elliptic classes, represented by $i$, $\omega$ and $\omega+1$ in its closure; the quotient chart lemma then gives
$\Gamma\backslash\mathfrak H$ a Riemann surface structure, with the
$\nu$-th-power chart at an elliptic point, and the cusp chart and compactness
lemma adjoin the orbit of $\infty$ so that
$X(1)=PSL_2(\mathbb Z)\backslash\mathfrak H^*$ is a compact Riemann surface.
On this curve a modular form of weight $k$ is defined as a holomorphic
function on $\mathfrak H$ transforming by the factor $(c\tau+d)^k$ and bounded
at the cusp; equivalently its $q$-expansion has no negative powers, and the
$q$-expansion principle records how the growth condition descends to the
quotient.

The supply of forms comes from the lattice sums. The Eisenstein series
$G_k(\tau)=\sum'(m\tau+n)^{-k}$ converge absolutely and normally for even
$k\ge4$, uniformly on compact subsets of the half-plane, and the Lipschitz
formula turns the sum into $2\zeta(k)$ plus an explicit power series in
$q=e^{2\pi i\tau}$, so that the normalised series $E_k=G_k/(2\zeta(k))$ has
$q$-expansion beginning $1+O(q)$ with coefficients $-\frac{2k}{B_k}\sigma_{k-1}(n)$.
The transformation law $G_k(\gamma\tau)=(c\tau+d)^kG_k(\tau)$ then makes
$E_4$ and $E_6$ modular forms of weights four and six, while the weight-two
series is treated separately: its regularisation satisfies a transformation
law with a non-vanishing correction term, so it is quasimodular rather than
modular, and it is used in the discriminant computation.

The analytic heart of the page is the valence formula. Subtracting the
contributions of the cusp and of the elliptic points from the boundary term of
the argument principle gives
$\sum_P\operatorname{ord}_P(f)/\nu_P+\operatorname{ord}_\infty(f)=k/12$ for
every nonzero weight-$k$ form, and the boundary arc computation is what
produces the $k/12$. The valence formula yields the location of the zeros of
$E_4$ and $E_6$, the dimension formula
$\dim M_k=\lfloor k/12\rfloor+1$ for even $k\ge0$ with $k\not\equiv2\pmod{12}$ and
$\dim M_k=\lfloor k/12\rfloor$ for $k\equiv2\pmod{12}$, with
$\dim S_k=\dim M_k-1$ for even $k\ge4$, and the fact that
$\Delta=(E_4^3-E_6^2)/1728$ is a cusp form of weight twelve with no zeros on
$\mathfrak H$. The logarithmic derivative of the infinite product and the $E_2$ transformation law give the product formula
$\Delta=q\prod_{n\ge1}(1-q^n)^{24}$ and the integrality of its Fourier
coefficients.

The final block assembles the graded ring and the invariant. The monomials
$E_4^aE_6^b$ with $4a+6b=k$ form a basis of $M_k$, so
$M_*=\mathbb C[E_4,E_6]$ with $E_4$ and $E_6$ algebraically independent; the
function $j=E_4^3/\Delta$ is holomorphic on $\mathfrak H$, invariant under the
modular group, and has a simple pole at the cusp, and the $q$-expansion
$j=q^{-1}+744+196884q+\cdots$ has integral coefficients. The resulting map
$\bar j:X(1)\to\widehat{\mathbb C}$ is a biholomorphism, and through it the
$j$-invariant classifies complex tori up to biholomorphism, with the square
and hexagonal tori realising the values $1728$ and $0$.
