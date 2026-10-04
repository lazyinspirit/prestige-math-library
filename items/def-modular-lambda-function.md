---
id: def-modular-lambda-function
kind: definition
title: "The modular lambda function"
status: published
origin: pipeline
deps:
  - def-complex-lattice-and-complex-torus
  - def-weierstrass-elliptic-p-function
  - lem-weierstrass-p-degree-two-and-half-periods
  - thm-weierstrass-lattice-discriminant-is-nonzero
  - def-cross-ratio-riemann-sphere
  - def-unit-disc-upper-half-plane-and-blaschke-factor
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Section 5.3, printed p. 95: the labelled half-period cross-ratio lambda=(e3-e2)/(e1-e2)."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Ch. 3, the half-period and branch-point theory, printed pp. 44-47."
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Section 1.1, printed p. 4: lattices and complex-torus moduli background. This is not a theta-quotient formula for lambda."
---

## Definition

For $\tau\in\mathfrak H$ let $\Lambda_\tau:=\mathbb Z+\mathbb Z\tau$
([[def-complex-lattice-and-complex-torus]]) and let $\wp_{\Lambda_\tau}$ be its
Weierstrass function ([[def-weierstrass-elliptic-p-function]]). Put

$$e_1:=\wp_{\Lambda_\tau}\Bigl(\frac12\Bigr),\qquad e_2:=\wp_{\Lambda_\tau}\Bigl(\frac{\tau}{2}\Bigr),\qquad e_3:=\wp_{\Lambda_\tau}\Bigl(\frac{1+\tau}{2}\Bigr),$$

the three finite branch values of $\wp_{\Lambda_\tau}$
([[lem-weierstrass-p-degree-two-and-half-periods]], clause 3). Those values are
pairwise distinct: the discriminant $\Delta(\Lambda_\tau)=g_2^3-27g_3^2$ is
nonzero and $4x^3-g_2x-g_3$ has the three distinct roots $e_1,e_2,e_3$
([[thm-weierstrass-lattice-discriminant-is-nonzero]]). The **modular lambda
function** is

$$\lambda(\tau):=\frac{e_3-e_2}{e_1-e_2}\in\mathbb C\setminus\{0,1\}.$$

The value lies in $\mathbb C\setminus\{0,1\}$ because $e_1,e_2,e_3$ are
pairwise distinct, so numerator $e_3-e_2$ and difference $e_1-e_2$ are nonzero
and $e_3-e_2\ne e_1-e_2$. Equivalently, in the cross-ratio convention of
[[def-cross-ratio-riemann-sphere]],

$$\lambda(\tau)=[\infty,e_2;e_1,e_3]=\frac{e_2-e_3}{e_2-e_1},$$

matching the displayed formula: the ordered quadruple
$(\infty,e_1,e_2,e_3)$ of branch points of the associated Weierstrass cubic
determines $\lambda(\tau)$ up to the Möbius transformations fixing $\infty$.
The half-plane conventions are those of
[[def-unit-disc-upper-half-plane-and-blaschke-factor]].
