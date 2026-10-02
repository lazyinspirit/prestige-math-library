---
page: riemann-roch-for-curves-via-euler-characteristics-examples
title: "Riemann Roch for Curves via Euler Characteristics — Examples"
status: draft
requires: [riemann-roch-for-curves-via-euler-characteristics]
items: []
examples:
  - ex-riemann-roch-projective-line-divisor
  - ex-genus-zero-conic-with-rational-point
  - cex-genus-zero-without-rational-point-not-p1
  - ex-adding-point-section-dimension-jump
  - cex-riemann-inequality-not-equality-special-divisor
  - ex-degree-zero-principal-divisor
  - ex-linear-system-poles-at-one-point
  - ex-nonspecial-large-divisor
  - cex-negative-degree-rr-right-side-negative
  - ex-empty-divisor-euler-characteristic
---

These examples and counterexamples exercise the Euler-characteristic form of
Riemann–Roch on explicit curves and divisors, and record the failure modes
that the page's deliberately one-sided statements leave open.

On the projective line the theorem is an identity between computed numbers.
For $D = d[\infty]$ the divisor spaces are $L(d[\infty])$ with dimensions
$\ell(D) = \max(d+1,0)$ and $i(D) = \max(-d-1,0)$, so
$\ell(D)-i(D) = d+1 = \deg_k(D)+1-g$ for every integer $d$, including the
negative range where the left-hand side is the negative of the index of
speciality. A negative right-hand side is therefore not a contradiction:
for $D=-d[\infty]$ with $d\ge2$ the identity reads $0-(d-1) = -d+1$, and
the negative lower bound cannot count or ensure nonzero sections. At $d=1$
both cohomology dimensions are zero: the equality and the count of zero
independent sections are consistent, while the bound $\ell(D)\ge0$ still
ensures no nonzero section. On the
same curve, principal divisors of degree zero are computed from rational
functions: the divisor of $(t-a)/(t-b)$ is $[a]-[b]$, its class is trivial
by the classification of divisors on $\mathbb P^1$, and $\ell = 1$,
$i = 0$ on both sides of Riemann–Roch.

The genus-zero boundary cases separate the geometric and arithmetic
behaviour. A smooth plane conic with a rational point has arithmetic genus
zero and a divisor of degree one, so it is isomorphic to the projective line
and the projection from the rational point computes its divisor spaces; the
conic $x^2+y^2+z^2 = 0$ over $\mathbb R$ has the same arithmetic genus and no
rational point, so it carries no divisor of degree one and is not isomorphic
to $\mathbb P^1_{\mathbb R}$, although it becomes a projective line after
base change to $\mathbb C$. The empty divisor exhibits the normalization at
the heart of the definitions: $\ell(0) = h^0(\mathcal O_C) = 1$ and
$i(0) = h^1(\mathcal O_C) = g$, so $\chi(\mathcal O_C) = 1-g$, the system
$|0|$ is a single point in every genus, and the zero divisor is nonspecial
exactly in genus zero.

The remaining examples test the point-addition and positivity statements. The
jump satisfies $0\le\ell(D+p)-\ell(D)\le[\kappa(p):k]$; both endpoints
occur on the projective line, and intermediate values can occur: over
$\mathbb R$, the point $p=V(t^2+1)$ has residue degree two, while
$D=-2[\infty]$ gives a jump of one; the zero divisor of a curve of positive
genus, for instance a smooth plane quartic, shows that the Riemann inequality
is strict for special divisors by exactly $i(D)$; a pencil spanned by $1$ and
a function with poles only at one point realizes the finite morphism to the
projective line constructed on the main page, with the fibre over infinity
equal to the pole divisor; and a sufficiently positive divisor in a fixed
ample direction is nonspecial, so Riemann–Roch counts its sections exactly.
The example keeps the fixed-direction threshold of the vanishing theorem and
does not assert the universal bound above degree $2g-2$, which requires the
duality pair that follows.
