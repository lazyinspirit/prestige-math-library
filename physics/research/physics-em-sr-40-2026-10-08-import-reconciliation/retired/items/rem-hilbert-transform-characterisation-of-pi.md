---
id: rem-hilbert-transform-characterisation-of-pi
kind: remark
title: "The Hilbert-transform characterisation of $\\pi$"
status: published
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "π is the unique normalisation making the Hilbert transform a complex structure on L^2(R)"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Hilbert transform (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hilbert_transform"
    - title: "Pi (Wikipedia), section on the Cauchy distribution and the Hilbert transform"
      url: "https://en.wikipedia.org/wiki/Pi"
    - title: "E. C. Titchmarsh, Introduction to the Theory of Fourier Integrals, 2nd ed., Clarendon Press (the source the above cites for the complex-structure characterisation; only the author page is linkable here, the book is not online)"
      url: "https://en.wikipedia.org/wiki/Edward_Charles_Titchmarsh"
    - title: "E. M. Stein, Singular Integrals and Differentiability Properties of Functions, Princeton University Press 1970, Ch. II (the source the above cites for the dilation and reflection characterisation; only the author page is linkable here, the book is not freely online)"
      url: "https://en.wikipedia.org/wiki/Elias_M._Stein"
pipeline_run: null
---

## Statement

For a real-valued $f$ in $L^2(\mathbb{R})$, the **Hilbert transform** is the
singular integral taken as a Cauchy principal value,

$$Hf(t) = \frac{1}{\pi} \, \mathrm{p.v.} \int_{-\infty}^{\infty} \frac{f(x)}{x - t} \, dx.$$

**Characterisation of $\pi$.** The constant $\pi$ is the unique positive
normalising factor $c$ for which the operator
$f \mapsto \frac{1}{c}\,\mathrm{p.v.}\int f(x)/(x - t)\,dx$ satisfies $H^2 = -I$,
that is, for which $H$ defines a **linear complex structure** on the real Hilbert
space of square-integrable real-valued functions on the line. Equivalently, up to
a normalising factor $H$ is the unique bounded linear operator on
$L^2(\mathbb{R})$ that commutes with positive dilations and anticommutes with
reflection of the line, and $\pi$ is the factor that makes it unitary.

**Status: settled, but outside this library's stack.** This is classical, not
open. It is out of reach here because it needs the deferred measure and
integration track (Lebesgue measure, the space $L^2$, principal values of singular
integrals) and the deferred functional analysis track (bounded operators on a
Hilbert space, unitarity, complex structures) at the same time.

## Remarks

**Not proved in this library.** The characterisation is recorded and cited, and no
page here may use it.

**What is known, and what would prove it here.** Everything is known; the obstacle
is again purely prerequisite. Discharging this item requires both deferred
analysis tracks: Lebesgue measure and $L^p$ spaces on one side, and bounded
operators, the Plancherel theorem and the Fourier-multiplier description of $H$
on the other. On the Fourier side $H$ is multiplication by
$\pm i \,\mathrm{sgn}(\xi)$, the sign depending on which of the two standard sign
conventions is taken for the kernel (the one displayed above, with $x - t$ in the
denominator, gives $+i \,\mathrm{sgn}(\xi)$; writing the kernel as $t - x$
instead gives $-i \,\mathrm{sgn}(\xi)$, and the two operators differ by a sign).
Either way the multiplier has modulus one and squares to $-1$, so $H$ is unitary
and $H^2 = -I$ is immediate, which is why the choice of convention does not
affect the characterisation. Once those tracks exist the proof is short, which is
exactly why the item is a prerequisite problem and not a difficulty problem.

**Why it matters here.** This library treats the many equivalent characterisations
of $\pi$ as a subject in its own right: the least positive zero of the sine, half
the period of the complex exponential, the area of the unit disc, the value of
Wallis's product, and so on. That collection is supposed to be a complete answer
to "what is $\pi$", and it cannot be, because at least one of the standard
characterisations lives in a subject the library does not build. Recording this
one keeps the claim of completeness honest, and marks precisely which two tracks
would have to exist before it could be added.
