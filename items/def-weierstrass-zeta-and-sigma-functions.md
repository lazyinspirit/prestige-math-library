---
id: def-weierstrass-zeta-and-sigma-functions
kind: definition
title: "Weierstrass $\\zeta$ and $\\sigma$ functions"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - def-complex-lattice-and-complex-torus
  - def-weierstrass-elliptic-p-function
  - def-weierstrass-elementary-factor
  - def-common-divisor-and-gcd
  - thm-bezout-identity
justified_by: [thm-weierstrass-zeta-sigma-quasi-periodicity]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms, Ch. 3, pp. 41-47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: "Ch. 3, 'The Weierstrass sigma and zeta functions', printed pp. 44-46."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes, Ch. 5 §5.1, pp. 79-90"
      url: https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf
      locator: "Ch. 5 §5.1, the zeta function and the canonical product sigma, printed pp. 82-84."
    - title: "NIST Digital Library of Mathematical Functions, §23.2, equations 23.2.1-23.2.17"
      url: https://dlmf.nist.gov/23.2
      locator: "§23.2(ii)-(iii): 23.2.9-23.2.13 for sigma, 23.2.14-23.2.17 for zeta and the quasi-periods eta_j."
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Let $\Lambda\subseteq\mathbb C$ be a full complex lattice, and let the sum over
$\Lambda\setminus\{0\}$ and the product over $\Lambda\setminus\{0\}$ be the
unordered finite-subset limits of
[[def-weierstrass-elliptic-p-function]]: the net of partial sums, respectively
partial products, over the finite subsets ordered by inclusion, when it
converges independently of the exhaustion. The **Weierstrass $\zeta$-function**
and **$\sigma$-function** of $\Lambda$ are

$$\zeta_\Lambda(z):=\frac1z+\sum_{\omega\in\Lambda\setminus\{0\}} \left(\frac1{z-\omega}+\frac1\omega+\frac{z}{\omega^{2}}\right),\qquad z\in\mathbb C\setminus\Lambda,$$

$$\sigma_\Lambda(z):=z\prod_{\omega\in\Lambda\setminus\{0\}} E_2\!\left(\frac{z}{\omega}\right) =z\prod_{\omega\in\Lambda\setminus\{0\}} \left(1-\frac{z}{\omega}\right)\exp\!\left(\frac{z}{\omega}+\frac{z^{2}}{2\omega^{2}}\right),\qquad z\in\mathbb C,$$

where $E_2(w)=(1-w)e^{w+w^{2}/2}$ is the second Weierstrass elementary factor
([[def-weierstrass-elementary-factor]]). The following theorem of this page
proves that the defining net converges normally on $\mathbb C\setminus\Lambda$
for $\zeta_\Lambda$ and on $\mathbb C$ for $\sigma_\Lambda$, so that both
functions are well defined and depend only on the set $\Lambda$.

A lattice element $\omega\in\Lambda$ is **primitive** when it is part of a
$\mathbb Z$-basis of $\Lambda$, equivalently when $\omega/n\notin\Lambda$ for
every integer $n\ge2$. For a primitive period $\omega$ put

$$\eta_\omega:=2\,\zeta_\Lambda\!\left(\frac{\omega}{2}\right).$$

The **quasi-period laws**

$$\zeta_\Lambda(z+\omega)=\zeta_\Lambda(z)+\eta_\omega,\qquad \sigma_\Lambda(z+\omega)=-\exp\!\left(\eta_\omega\left(z+\frac{\omega}{2}\right)\right)\sigma_\Lambda(z)$$

for every primitive $\omega\in\Lambda$ are proved in
[[thm-weierstrass-zeta-sigma-quasi-periodicity]], together with
$\zeta_\Lambda'=-\wp_\Lambda$, $\sigma_\Lambda'/\sigma_\Lambda=\zeta_\Lambda$,
$\sigma_\Lambda'(0)=1$, the oddness of $\zeta_\Lambda$ and $\sigma_\Lambda$,
and the fact that $\sigma_\Lambda$ is entire with simple zeros exactly at the
lattice points.

## Remarks

**Why the corrections.** The summand of $\zeta_\Lambda$,
$$\frac1{z-\omega}+\frac1\omega+\frac{z}{\omega^{2}} =\frac{z^{2}}{(z-\omega)\omega^{2}},$$
vanishes to second order at $z=0$, so the single term $1/z$ carries the whole
principal part there; at a general lattice point the translation
$z\mapsto z+\lambda$ exhibits the principal part $(z-\lambda)^{-1}$. Similarly
the factor $E_2(z/\omega)$ has a simple zero at $z=\omega$ and no other
zero, and its expansion
$\log E_2(w)=-w^{3}/3-w^{4}/4-\cdots$ shows that the correction $e^{z/\omega+z^{2}/(2\omega^{2})}$
is exactly what makes the product converge on compact sets. Both facts are
proved in the items named above.

**Normalisation.** The factor $z$ in front of $\sigma_\Lambda$ is chosen so
that $z=0$ is a simple zero and $\sigma_\Lambda'(0)=1$; the constants
$\eta_\omega$ are the analogues of the half-period values $\wp(\omega/2)$, and
for an oriented basis $(\omega_1,\omega_2)$ the **Legendre relation**
$\eta_{\omega_1}\omega_2-\eta_{\omega_2}\omega_1=2\pi i$ holds; it is proved in
[[thm-weierstrass-zeta-sigma-quasi-periodicity]]. Extend the quasi-period
constants additively from the chosen basis by
$\eta_{m\omega_1+n\omega_2}:=m\eta_1+n\eta_2$. For an arbitrary period
$\omega=m\omega_1+n\omega_2$, iteration gives
$$\zeta_\Lambda(z+\omega)=\zeta_\Lambda(z)+\eta_\omega,\qquad \sigma_\Lambda(z+\omega)=(-1)^{m+n+mn}\exp\!\left(\eta_\omega\left(z+\frac{\omega}{2}\right)\right)\sigma_\Lambda(z).$$
The sign is $-1$ when $\omega$ is primitive: then $\gcd(m,n)=1$, so $m,n$
are not both even and $m+n+mn$ is odd. For a primitive period, the additive
constant agrees with the displayed definition $\eta_\omega=2\zeta_\Lambda(\omega/2)$,
by applying the zeta translation law at $z=-\omega/2$ and using oddness.

**Primitive-period criterion.** Fix a $\mathbb Z$-basis
$(\omega_1,\omega_2)$ of $\Lambda$ and write
$\omega=a\omega_1+b\omega_2$ with $a,b\in\mathbb Z$. For $\omega=0$, both
basis membership and the no-divisor condition fail. If $\omega\ne0$, put
$d=\gcd(a,b)>0$. Uniqueness of coordinates shows that
$\omega/n\in\Lambda$ for an integer $n\ge2$ exactly when $n$ divides both
$a$ and $b$; since $d$ divides both coordinates and every positive common
divisor is at most $d$ ([[def-common-divisor-and-gcd]]), no such $n$ exists
exactly when $d=1$. By [[thm-bezout-identity]], in that case there are integers $x,y$ with
$ax+by=1$. Then $\nu=-y\omega_1+x\omega_2$ belongs to $\Lambda$, and the
coordinate matrix of $(\omega,\nu)$ has determinant $ax+by=1$, so
$(\omega,\nu)$ is a $\mathbb Z$-basis. Conversely, if $\omega$ is a member
of a $\mathbb Z$-basis and $\omega/n\in\Lambda$, writing $\omega/n$ in that
basis would make its coordinate on $\omega$ equal to $1/n$, not an integer.
