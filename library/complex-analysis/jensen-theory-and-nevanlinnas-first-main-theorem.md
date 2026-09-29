---
page: jensen-theory-and-nevanlinnas-first-main-theorem
title: "Jensen Theory and Nevanlinna's First Main Theorem"
status: draft
items: [thm-poisson-jensen-formula-meromorphic-function,
        def-nevanlinna-counting-proximity-and-characteristic,
        thm-nevanlinna-quantities-well-defined,
        lem-meromorphic-jensen-formula-with-centre-divisor,
        thm-ahlfors-shimizu-characteristic-identity,
        thm-nevanlinna-first-main-theorem,
        thm-nevanlinna-characteristic-elementary-laws,
        def-order-of-growth-meromorphic-function,
        prop-nevanlinna-order-agrees-with-entire-maximum-modulus-order,
        thm-rational-functions-characterized-by-logarithmic-characteristic]
examples: []
---

The Poisson–Jensen formula is the exact pointwise identity behind value
distribution: on a disc, $\log|f|$ is the Poisson average of its boundary
values, corrected by the zeros and poles through the disc Green kernel
$G_R(z,a)=\log|(R^2-\overline az)/(R(z-a))|$. The page proves it for a
meromorphic $f$ on a neighbourhood of the closed disc, first at radii free of
divisor points and then at a divisor radius through the angular $L^1$ limit.

The second half builds the counting, chordal proximity and characteristic
functions of Nevanlinna theory. Counts use closed discs with local
multiplicity; the integrated count regularises a divisor at the centre by
$n(0,a)\log r$; and the chordal distance is normalised to diameter one, so it
is half the Euclidean chord of the unit sphere's stereographic projection.
Well-definedness, finiteness and the continuity of $N$ and $m$ across divisor
radii are proved rather than assumed, including the $a=\infty$ convention that
counts poles with their orders and the exact base-radius shift.

The centre-divisor Jensen identity turns the pointwise chordal identity
$\log(1/\delta(f,a))=\tfrac12\log(1+|f|^2)+\tfrac12\log(1+|a|^2)-\log|f-a|$
into Nevanlinna's First Main Theorem
$m(r,a;f)+N(r,a;f)=T(r,f)+C(f,a)$, with the exact constant
$C(f,a)=\tfrac12\log(1+|a|^2)-\log|c_a|$ at a finite target and $C(f,\infty)=0$;
the first nonzero Laurent coefficient $c_a$ of $f-a$ at the centre replaces the
undefined expression $\log|f(0)-a|$. The Ahlfors–Shimizu area identity
$T=T_{\rm AS}+C_\infty$ is derived from the pole-corrected spherical potential,
which also supplies monotonicity and log-radius convexity of the characteristic.

The final items derive the elementary characteristic laws for products, sums,
inverses and fixed rational compositions, define order and lower order by
$\log T(r,f)/\log r$, prove that the Nevanlinna order of an entire function
agrees with its maximum-modulus order, and characterise rational functions as
exactly the nonconstant meromorphic functions with $T(r,f)=O(\log r)$.

Every argument on this page is choice-free: divisor lists on bounded discs are
finite, and the only nontrivial selection principle used is the well-ordering
principle for the natural numbers.
