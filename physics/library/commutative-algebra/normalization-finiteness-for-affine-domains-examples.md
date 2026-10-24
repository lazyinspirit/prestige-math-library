---
page: normalization-finiteness-for-affine-domains-examples
title: "Normalization Finiteness for Affine Domains: Examples"
status: published
requires: [normalization-finiteness-for-affine-domains]
items: []
examples: [ex-integral-closure-cusp-semigroup-affine-domain,
           ex-normalization-nodal-coordinate-domain,
           ex-integral-closure-monomial-curve-t3-t4-t5]
---

These three examples carry out the normalisation computation of the companion
page in concrete coordinate rings, in each case by exhibiting the normalisation
as a finite module of explicit elements. The cusp
$k[t^2,t^3]$ has normalisation $k[t]=A+At$, reached through the element
$t=t^3/t^2$ of the fraction field and the monic equation $T^2-t^2=0$. The
nodal plane cubic $k[x,y]/(y^2-x^2(x+1))$ over a field of characteristic not
$2$ is parametrised by $x\mapsto t^2-1$, $y\mapsto t(t^2-1)$, and the
parametrisation is shown to be injective by splitting the quotient ring along
even and odd powers of $t$; its normalisation is again $k[t]=A+At$, and the
origin has the two distinct preimages $t=1$ and $t=-1$. The third example, the
monomial curve $k[t^3,t^4,t^5]$, has normalisation $k[t]=A+At+At^2$; the
companion page's Noether normalisation route applies to all of them, and each
argument here stays choice-free and finite.

The examples also record what is *not* computed. The conductor ideal
$(t^3,t^4,t^5)$ of the monomial curve is a proper ideal of the ring and is
strictly smaller than its normalisation, so it is not the integral closure; it
is mentioned only to be excluded from the identification. In each example the
integrality direction comes from an explicit monic equation over the
coordinate ring, and the reverse containment comes from the integral normality
of the polynomial ring $k[t]$, which the companion page proves for every field
and every finite number of variables.
