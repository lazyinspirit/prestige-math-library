---
id: def-normalized-sinc-function
kind: definition
title: "The normalised sinc function"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
design_row: FR-19
deps: [def-complex-exponential, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-sine-and-cosine-derivatives, thm-sine-cosine-zero-sets-and-fundamental-period, cor-trigonometric-parity-and-pythagorean-identity, cor-sine-and-cosine-are-one-lipschitz, cor-sin-x-over-x-limit, thm-composition-of-function-limits, thm-algebra-of-continuous-functions, thm-composition-of-continuous-functions]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "ch. 22, Theorem 22.3 and Remark 22.4: the kernel $\\operatorname{sinc}(\\omega x_j-\\pi n_j)$ vanishes at the other sampling locations; with the substitution $\\omega/\\pi=1/h$ this is the normalised sinc $\\operatorname{sinc}(x/h-k)$ used here, printed pp. 130-132"
    - title: "Lior Silberman, Fourier series and the Poisson summation formula (Math 604/613 notes, UBC)"
      url: "https://personal.math.ubc.ca/~lior/teaching/1011/613D_F10/Fourier+PoissonSum.pdf"
      locator: "§3, Exercise 13 and §4, Exercise 16: the character exponential normalisation $e(z)=e^{2\\pi iz}$ behind the $\\pi t$ normalisation, PDF pp. 3-5"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

The **normalised sinc function** is
$\operatorname{sinc}:\mathbb R\to\mathbb C$, given for $t\ne0$ by the quotient
and at the origin by continuity,

$$\operatorname{sinc}(t):=\frac{\sin(\pi t)}{\pi t}\quad(t\ne0),\qquad \operatorname{sinc}(0):=1.$$

The values displayed show that $\operatorname{sinc}$ is real-valued: the sine
and the identity of [[thm-sine-and-cosine-derivatives]] are real functions
there, and the quotient of real numbers is real.

**Well-definedness.** At every $t\ne0$ the numerator and denominator are
defined and $\pi t\ne0$, so the quotient of real numbers is defined
([[def-complex-exponential]] is needed only to fix the ambient convention in
which $\pi$, $\sin$ and the real numbers are embedded in $\mathbb C$). The
value at $t=0$ is assigned separately; it is the correct limit,
$\lim_{t\to0}\operatorname{sinc}(t)=1$, because $\pi t\to0$ as $t\to0$ and
$\lim_{u\to0}\sin(u)/u=1$ ([[cor-sin-x-over-x-limit]]), the substitution
$u=\pi t$ being the case of [[thm-composition-of-function-limits]] in which the
inner function $\pi t$ does not take the value $0$ away from $t=0$; with this value
$\operatorname{sinc}$ is continuous at $0$, and it is continuous at every
$t\ne0$ because $t\mapsto\sin(\pi t)$ is a composite of continuous functions
([[thm-sine-and-cosine-derivatives]] gives differentiability, hence continuity,
and [[thm-composition-of-continuous-functions]]) and $t\mapsto1/(\pi t)$ is a
quotient with nonvanishing denominator, so [[thm-algebra-of-continuous-functions]]
gives the quotient.

**Symmetry and integer values.** Sine is odd
([[cor-trigonometric-parity-and-pythagorean-identity]]), so for $t\ne0$,
$\operatorname{sinc}(-t)=\sin(-\pi t)/(-\pi t)=\sin(\pi t)/(\pi t)=\operatorname{sinc}(t)$,
and the same identity holds at $t=0$; thus $\operatorname{sinc}$ is even. For
an integer $k\ne0$, $\sin(\pi k)=0$ by the zero set of sine
([[thm-sine-cosine-zero-sets-and-fundamental-period]]), so
$\operatorname{sinc}(k)=0$, while $\operatorname{sinc}(0)=1$. Hence
$\operatorname{sinc}(k)=0$ for every nonzero integer $k$, and the kernel
vanishes at every sampling point except its own.

**Bounds.** For every real $t$, $|\operatorname{sinc}(t)|\le1$: at $t=0$ this
is an equality, and for $t\ne0$ the one-Lipschitz estimate
$|\sin u-\sin0|\le|u|$ ([[cor-sine-and-cosine-are-one-lipschitz]]) with
$u=\pi t$ and $\sin0=0$ ([[thm-sine-and-cosine-derivatives]]) gives
$|\sin(\pi t)|\le\pi|t|$, which proves the bound after division by
$|\pi t|$. For every $t\ne0$ one also has
$|\operatorname{sinc}(t)|\le1/(\pi|t|)$, since
$|\sin(\pi t)|\le1$ ([[cor-trigonometric-parity-and-pythagorean-identity]])
and division by $|\pi t|$ gives this tail estimate.

This is the normalisation used by the sampling theorem on this page: the
reconstruction series is $f(x)=\sum_kf(hk)\operatorname{sinc}(x/h-k)$, and the
kernel vanishes at every sampling point except its own, as proved above. The
Fourier identity
$\operatorname{sinc}(t)=\int_{-1/2}^{1/2}e^{-2\pi it\xi}\,d\xi$ is **not**
asserted by this definition; it is proved directly where the sampling theorem
consumes it, from the complex primitive of the exponential. The complex
exponential convention
$e^{2\pi it}=\exp(2\pi it)$ underlying that display is
[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]].

No choice principle is used in this item.
