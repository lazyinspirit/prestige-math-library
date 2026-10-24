---
id: ex-cusp-puiseux-y-two-equals-x-five
kind: example
title: "The plane branch y²=x⁵ has Puiseux parameter (t²,t⁵)"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-units-in-a-polynomial-ring-over-a-domain
  - def-complex-analytic-hypersurface-germ-and-reduced-equation
  - def-irreducible-and-prime-elements-in-a-domain
  - def-irreducible-hypersurface-germ
  - def-reduced-holomorphic-germ-for-hypersurface
  - def-regular-singular-point-analytic-hypersurface
  - def-weierstrass-polynomial
  - lem-prepared-factorizations-and-irreducibility
  - lem-vanishing-ideal-of-a-reduced-hypersurface-germ
  - prop-units-in-the-holomorphic-germ-ring
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
  - thm-local-irreducible-decomposition-hypersurface-germ
  - thm-puiseux-parametrisation-plane-curve-germ
  - thm-weierstrass-preparation-theorem
  - thm-zero-order-factorization-holomorphic-function
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "Theorem 6.7.6 Puiseux parametrisation f(ξ^k,g(ξ))=0 with convergent g (p. 195); Exercise 6.7.5 injectivity and surjectivity for an irreducible Weierstrass polynomial f(z,w)=0 (p. 196); §6.3 the discriminant determines the number of distinct roots (p. 178)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "Exercise 11.8 Puiseux expansions y = g_j(x^{1/q_j}) with q_j the sheet number of the branch (p. 128); II (6.6) zero sets of Weierstrass polynomials (pp. 106–107)."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Example

In $\mathbb C^2$ with coordinates $(x,y)$, the equation $f=y^2-x^5$ defines an
irreducible plane curve germ $X=Z(f)$ at the origin. Its only singular point
near the origin is the origin itself, and

$$\gamma(t)=(t^2,t^5),\qquad h(t)=t^5=\sum_{k>2}a_kt^k,$$

is a convergent injective Puiseux parametrisation of $X$ whose exponent $2$ is
minimal among the exponents of holomorphic parametrisations of this germ in the
standard coordinates. The associated Puiseux exponent $y=x^{5/2}$ differs from
the exponent $3/2$ of the cusp $y^2=x^3$.

## Facts & Assumptions

**Given:** The germ $f=y^2-x^5\in\mathcal O_{\mathbb C^2,0}$ and its zero germ $X=(Z(f),0)$.

[F1] $f$ is a Weierstrass polynomial of degree $2$ in $y$: it is monic of degree $2$ with coefficients in $\mathcal O_{\mathbb C,0}$ vanishing at the origin, and $f(0,y)=y^2$; it is regular in $y$ of order $2$ and is its own Weierstrass preparation ([[def-weierstrass-polynomial]], [[thm-weierstrass-preparation-theorem]]).

[F2] If $f=gh$ in the germ ring, then $g$ and $h$ are regular in $y$ and the product of their Weierstrass polynomials is the Weierstrass polynomial of $f$; conversely a factorisation $W=GH$ into Weierstrass polynomials of positive degree makes $f$ reducible. Hence $f$ is irreducible in $\mathcal O_{\mathbb C^2,0}$ if and only if its Weierstrass polynomial is irreducible in $\mathcal O_{\mathbb C,0}[y]$ ([[lem-prepared-factorizations-and-irreducibility]]).

[F3] The units of a polynomial ring over a domain are exactly the constant polynomials whose value is a unit in the coefficient ring; a nonunit can therefore be constant. In a factorization of a monic polynomial, the leading coefficients of the factors multiply to $1$, so each is a unit ([[cor-units-in-a-polynomial-ring-over-a-domain]]). The units of the one-variable germ ring are the germs with nonzero value at $0$ ([[prop-units-in-the-holomorphic-germ-ring]]).

[F4] A nonzero holomorphic germ of one variable has finite order $k$ and equals $t^ku$ with $u$ a unit; order is additive under multiplication, so the square of a germ of order $m$ has order $2m$. In particular the germ $x^5$ has order $5$ and has no holomorphic square root ([[thm-zero-order-factorization-holomorphic-function]]).

[F5] An irreducible germ is reduced, and for a reduced germ $h$ the vanishing ideal of $Z(h)$ is $(h)$; the sum of the branches of a reduced germ is the union of the zero germs of its irreducible factors, and these are exactly the irreducible components, so a reduced germ with a single irreducible factor defines an irreducible hypersurface germ ([[def-reduced-holomorphic-germ-for-hypersurface]], [[def-irreducible-and-prime-elements-in-a-domain]], [[lem-vanishing-ideal-of-a-reduced-hypersurface-germ]], [[thm-local-irreducible-decomposition-hypersurface-germ]], [[def-irreducible-hypersurface-germ]]).

[F6] A point $q$ of a reduced hypersurface germ is singular exactly when the differential of the local reduced equation vanishes at $q$ ([[def-regular-singular-point-analytic-hypersurface]]).

[F7] Every irreducible complex-analytic plane curve germ $X$ with reduced defining germ $f$ admits, after an invertible complex-linear change of coordinates, parameters $m\ge1$, $\delta>0$ and a holomorphic $h$ with $h(t)=\sum_{k>m}a_kt^k$ such that $t\mapsto(t^m,h(t))$ is injective with image germ exactly $X$; the exponent $m$ of such a parametrisation is by definition primitive when it is minimal among the exponents $k\ge1$ of all parametrisations $s\mapsto(s^k,j(s))$ of the germ in the same coordinates, and the germ in the present example is already in the coordinates in which this applies ([[thm-puiseux-parametrisation-plane-curve-germ]]).

[F8] A nonzero polynomial of degree $k\ge1$ over $\mathbb C$ has exactly $k$ roots counted with multiplicity, hence at most $k$ distinct roots ([[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]).

**Proof technique:** direct — factor the monic quadratic, compute the image and injectivity of the explicit map, and compare the two branches over a nonzero base value to force minimality of the exponent.

## Verification

1.1 $f$ is irreducible in $\mathcal O_{\mathbb C^2,0}$. By [F1] and [F2] it suffices to show that the monic quadratic $f=y^2-x^5\in\mathcal O_{\mathbb C,0}[y]$ is irreducible. Suppose $f=GH$ with $G,H$ nonunits. Their leading coefficients multiply to the leading coefficient $1$, so both are units by [F3]. Neither factor can have degree $0$, since a degree-zero factor is its leading coefficient and would be a unit. Since their degrees sum to $2$, both have degree $1$; rescaling by their unit leading coefficients, we may write $G=y-a$, $H=y-b$ with $a,b\in\mathcal O_{\mathbb C,0}$. Comparing coefficients gives $a+b=0$ and $ab=-x^5$, hence $a^2=x^5$, contradicting [F4]. Thus $f$ is irreducible in the polynomial ring and, by [F2], in the germ ring; by [F5] $f$ is reduced and $I_0(X)=(f)$. [given, F1, F2, F3, F4]

1.2 $\gamma(t)=(t^2,t^5)$ is injective. Indeed $\gamma(t_1)=\gamma(t_2)$ means $t_1^2=t_2^2$ and $t_1^5=t_2^5$. The first equation gives $t_2=\pm t_1$; if $t_2=-t_1$, then $t_1^5=t_2^5=-t_1^5$, so $2t_1^5=0$ and $t_1=0=t_2$; otherwise $t_2=t_1$. [given, algebra]

1.3 The image of $\gamma$ on $\Delta_\delta=\{|t|<\delta\}$ is exactly the full representative $Z(f)\cap\{|x|<\delta^2\}$ of the germ $X$. First, $f(\gamma(t))=t^{10}-t^{10}=0$, so the image lies in $Z(f)$, and $|t^2|=|t|^2<\delta^2$. Conversely, let $(x,y)\in Z(f)$ with $|x|<\delta^2$; choose $t$ with $t^2=x$, so $|t|<\delta$. If $x=0$, then $y^2=0$ and $y=0=\gamma(0)$. If $x\ne0$, then $y^2=x^5=x\cdot(x^2)^2$ gives $(y/x^2)^2=x=t^2$, so $y/x^2=\pm t$ and $y=\pm t^5$; replacing $t$ by $-t$ if necessary, we get $(x,y)=(t^2,t^5)=\gamma(t)$ with $t^2=x$. Hence every point of the representative is attained, and $h(t)=t^5=\sum_{k>2}a_kt^k$ with $a_5=1$ has order $5>2$. [given, F1, algebra]

1.4 Every holomorphic parametrisation $s\mapsto(s^k,j(s))$ of the germ $X$ in these coordinates has $k\ge2$. Such a parametrisation has image containing a full representative $X\cap U$ of the germ for some neighbourhood $U$ of $0$. Choose $\varepsilon>0$ with $(\varepsilon^2,\pm\varepsilon^5)\in U$; both points lie in $X$, because $(\pm\varepsilon^5)^2=\varepsilon^{10}=(\varepsilon^2)^5$. So there are $s_1\ne s_2$ with $s_i^k=\varepsilon^2$ and $j(s_1)=\varepsilon^5$, $j(s_2)=-\varepsilon^5$; the two parameters are distinct since their images are. Thus the polynomial $T^k-\varepsilon^2$ of degree $k$ has at least two distinct roots, so $k\ge2$ by [F8]. [given, F8, choose, algebra]

2.1 $X$ is an irreducible hypersurface germ and its only singular point near $0$ is the origin. By step 1.1 the reduced defining germ $f$ is irreducible, so by [F5] the germ $X=Z(f)$ is irreducible: its decomposition has the single component $Z(f)=X$. The differential $df=(-5x^4,\,2y)$ vanishes at the origin and at no other point of $X$, because $x=0$ forces $y^2=x^5=0$ and then $y=0$. At a point $q\in X$ with $q\ne0$ the translate of $f$ is a germ with nonzero differential, hence is not a product of two nonunits, that is, it is an irreducible and therefore reduced germ vanishing on $X$ near $q$; so it is a local reduced equation of $X$ at $q$ and [F6] makes $q$ a regular point. [step 1.1, F5, F6, algebra]

3.1 Consequently $\gamma(t)=(t^2,t^5)$ is an injective convergent Puiseux parametrisation of $X$ in the standard coordinates: it is holomorphic on $\Delta_\delta$, it is injective by step 1.2, the holomorphic function $h(t)=t^5$ satisfies $h(t)=\sum_{k>2}a_kt^k$, and by step 1.3 its image germ is exactly $X=Z(f)$, matching the conclusion of [F7]. [step 1.2, step 1.3, step 2.1, F7]

4.1 Steps 1.4, 2.1 and 3.1 prove all the assertions: $X$ is irreducible and singular only at the origin, $\gamma(t)=(t^2,t^5)$ is an injective convergent parametrisation of its germ, and since every parametrisation in the same coordinates has exponent $k\ge2$ by step 1.4 while $\gamma$ has exponent $2$, the exponent is primitive (minimal). Over a base value $x_0\ne0$ the two branch values are $\pm x_0^{5/2}$, so the Puiseux exponent of this branch is $5/2$, which differs from the exponent $3/2$ of the cusp $y^2=x^3$. [step 1.4, step 2.1, step 3.1, F7] ∎
