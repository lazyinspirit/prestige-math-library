---
id: rem-improper-riemann-not-lebesgue
kind: remark
title: "An improper Riemann integral that no Lebesgue integral reproduces: the sine integral"
status: draft
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral]
justified_by: []
forward_refs: []
aliases: [rem-dirichlet-integral-not-lebesgue]
landmark: false
short: "The Dirichlet integral converges conditionally, so sin(x)/x is not in L^1(0, infinity)"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. R. Gelbaum and J. M. H. Olmsted, Counterexamples in Analysis, Ch. 8, Example 36"
      url: "https://faculty.ksu.edu.sa/sites/default/files/_olmsted_1.pdf"
    - title: "Dirichlet integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_integral"
pipeline_run: null
---

## Statement

Let $f(x) = \dfrac{\sin x}{x}$ for $x > 0$ and $f(0) = 1$. Then the improper
Riemann integral converges,

$$\int_0^{\infty} \frac{\sin x}{x} \, dx := \lim_{T \to \infty} \int_0^{T} \frac{\sin x}{x} \, dx = \frac{\pi}{2},$$

while

$$\int_0^{\infty} \left| \frac{\sin x}{x} \right| dx = +\infty ,$$

because on $[k\pi, (k+1)\pi]$ the integrand is at least
$\frac{|\sin x|}{(k+1)\pi}$, whose integral is $\frac{2}{(k+1)\pi}$, and the
harmonic series diverges. Since the Lebesgue integral is absolute, $|f|$ not
being integrable means $f \notin L^{1}(0, \infty)$: the Lebesgue integral of $f$
over $(0,\infty)$ does not exist, although the improper Riemann integral does.

## Remarks

**Not proved in this library.** The divergence of $\int_0^\infty |f|$ and the
convergence of the improper integral are both in scope; what is recorded here is
the conclusion about the Lebesgue integral
([[rem-lebesgue-measure-and-integral]]), which cannot be stated without it.

**What would prove it.** The comparison with the harmonic series shown above, the
Dirichlet test for the convergence of the improper integral, and the definition
of the Lebesgue integral as an absolute integral, that is
$f \in L^1 \iff |f| \in L^1$. The value $\pi/2$ needs a separate argument, by
Feynman's trick, by contour integration, or by the Dirichlet kernel.

**Which page it serves.** The improper integrals page, which will prove
convergence of exactly this integral and the divergence of the integral of the
absolute value, and can therefore state that the integral is conditionally
convergent. The observation that no Lebesgue integral reproduces it belongs here,
and it is the standard warning against the belief that the Lebesgue integral
extends every integral in use.

**The right repair, which is not deferred.** The Henstock-Kurzweil integral is a
non-absolute integral and integrates $f$ over $(0,\infty)$ with value $\pi/2$; see
[[rem-henstock-kurzweil-vs-lebesgue]]. The HK integral is in scope in this
library, so the pair of statements can eventually be made here in full, with only
the Lebesgue half quoted.
