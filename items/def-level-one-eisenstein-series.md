---
id: def-level-one-eisenstein-series
kind: definition
title: "The level-one Eisenstein series E_k and the weight-two series E_2"
status: draft
origin: pipeline
deps:
  - def-modular-group-action-on-the-upper-half-plane
  - lem-lattice-eisenstein-sums-converge
  - def-riemann-zeta-function
  - thm-p-series-rational
  - def-divisor-power-sums-sigma-k
  - thm-ratio-test
  - thm-complex-power-series-converge-locally-uniformly
  - thm-weierstrass-m-test-for-complex-function-series
  - lem-lipschitz-formula-for-the-lattice-sum
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Proposition 4.7, printed p. 50, and Proposition 4.20, pp. 56–57: the lattice sum of exponent 2k and its Fourier coefficients; E2 is supplied by Zagier."
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Equations (11)–(12), printed pp. 14–15, and equation (17), p. 19. Zagier uses half the unnormalised lattice sum used here."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Ch. 5, 'Modular forms', printed pp. 99-101: the Eisenstein construction."
---

## Definition

For even $k\ge4$ put

$$G_k(\tau)={\sum_{(m,n)\in\mathbb Z^2}}'(m\tau+n)^{-k},\qquad \tau\in\mathfrak H,$$

the prime excluding $(m,n)=(0,0)$; this is an absolutely summable family whose sum is holomorphic in $\tau$ ([[lem-lattice-eisenstein-sums-converge]]). Define the **normalised Eisenstein series**

$$E_k:=\frac{G_k}{2\zeta(k)},\qquad \zeta(k)=\sum_{n\ge1}n^{-k},$$

the Riemann zeta value ([[def-riemann-zeta-function]]). For $k>1$ the series for $\zeta(k)$ converges ([[thm-p-series-rational]]), so $2\zeta(k)>0$ and the normalisation is well defined.

**The constant term and the vanishing of the higher terms.** Splitting the absolutely convergent sum into $m=0$ and $m\ne0$, and bounding the latter with the Lipschitz formula ([[lem-lipschitz-formula-for-the-lattice-sum]]),

$$G_k(\tau)=2\zeta(k)+2\sum_{m\ge1}\frac{(-2\pi i)^k}{(k-1)!}\sum_{r\ge1}r^{k-1}q^{mr},\qquad q=e^{2\pi i\tau},$$

so $E_k(\tau)=1+O(q)$ as $\operatorname{Im}\tau\to\infty$: the correction is a power series in $q$ divisible by $q$, convergent for $|q|<1$. The same computation yields the Fourier expansion of [[thm-eisenstein-series-are-modular-forms]].

**The weight-two series.** Separately define

$$E_2(\tau):=1-24\sum_{n\ge1}\sigma_1(n)q^n,\qquad q=e^{2\pi i\tau},$$

with $\sigma_1(n)$ the sum of the positive divisors of $n$ ([[def-divisor-power-sums-sigma-k]]). Since $\sigma_1(n)\le n\cdot n=n^2$ and $\sum_{n\ge1}n^2|q|^n$ converges for $|q|<1$ by the ratio test ([[thm-ratio-test]]), the $M$-test ([[thm-weierstrass-m-test-for-complex-function-series]], [[thm-complex-power-series-converge-locally-uniformly]]) makes $E_2$ a holomorphic function of $\tau\in\mathfrak H$. It is a quasimodular comparison object used in the discriminant product proof and in the counterexample item of the companion page; it is not itself a modular form, since its transformation law carries a nonzero correction term. The half-plane conventions are [[def-modular-group-action-on-the-upper-half-plane]].
