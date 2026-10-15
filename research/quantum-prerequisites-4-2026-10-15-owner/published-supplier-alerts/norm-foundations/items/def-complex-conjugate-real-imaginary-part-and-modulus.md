---
id: def-complex-conjugate-real-imaginary-part-and-modulus
kind: definition
title: 'Real and imaginary parts, complex conjugation, and modulus'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-complex-numbers-form-a-field, thm-of-square-roots, cor-cauchy-reals-lub-complete]
justified_by: []
aliases: []
landmark: true
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: frontier-11
---

## Definition

Every $z\in\mathbb C$ has unique coordinates $z=a+bi$
([[thm-complex-numbers-form-a-field]]). Define
$$\operatorname{Re}z=a,\qquad \operatorname{Im}z=b,\qquad \overline z=a-bi,$$
and define its **modulus** by
$$|z|=\sqrt{a^2+b^2}.$$
The real numbers are least-upper-bound complete
([[cor-cauchy-reals-lub-complete]]), so the nonnegative square root exists and
is unique by [[thm-of-square-roots]].
## Remarks

The radicand is in the square-root domain. In the real ordered field supplied by [[cor-cauchy-reals-lub-complete]], distributivity and additive cancellation give $0t=0$, and hence $0^2=0$. If $t\ne0$, then either $t>0$ or $-t>0$; positive-cone closure gives $t^2>0$ in the first case and $(-t)^2=t^2>0$ in the second. Thus $a^2,b^2\ge0$. If either square is zero, their sum is the other nonnegative square; if both are positive, their sum is positive by positive-cone closure. Therefore $a^2+b^2\ge0$, so [[thm-of-square-roots]] applies with exactly the radicand in the Definition.
