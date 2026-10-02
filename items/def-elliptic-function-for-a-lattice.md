---
id: def-elliptic-function-for-a-lattice
kind: definition
title: "Elliptic function for a lattice"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-complex-lattice-and-complex-torus
  - thm-complex-torus-quotient-is-well-defined
  - def-meromorphic-function-complex-domain
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - cor-meromorphic-functions-on-a-domain-form-a-field
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms, Ch. 3, pp. 41-47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: "Ch. 3, 'Doubly periodic functions': elliptic functions as meromorphic functions with period lattice Lambda, printed p. 44."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes, Ch. 5 §5.1, pp. 79-90"
      url: https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf
      locator: "Ch. 5 §5.1, elliptic functions as meromorphic functions on the torus, printed pp. 80-81."
    - title: "NIST Digital Library of Mathematical Functions, §23.2, equations 23.2.1-23.2.17"
      url: https://dlmf.nist.gov/23.2
      locator: "§23.2(iii): doubly periodic functions and their period lattices."
verification:
  audited: 2026-10-02
  precheck: n/a
---

## Definition

Let $\Lambda\subseteq\mathbb C$ be a full complex lattice and let
$\pi:\mathbb C\to T_\Lambda=\mathbb C/\Lambda$, $\pi(z)=[z]$, be the quotient
map ([[def-complex-lattice-and-complex-torus]]), so that $T_\Lambda$ is a
compact Riemann surface and $\pi$ is a holomorphic covering map
([[thm-complex-torus-quotient-is-well-defined]]).

A **$\Lambda$-elliptic function** is a meromorphic function $f:\mathbb C\to
\widehat{\mathbb C}$ on the plane ([[def-meromorphic-function-complex-domain]],
the Riemann-sphere convention of
[[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]) satisfying the
**periodicity** condition

$$f(z+\lambda)=f(z)\qquad\text{for all }z\in\mathbb C\text{ and all }\lambda\in\Lambda,$$

where both sides are values in $\widehat{\mathbb C}$: the equation $f(z)=
\infty$ is allowed, and it is required that $z+\lambda$ is a pole exactly when
$z$ is, with the same $f$-value $\infty$. Equivalently, $f$ is the pullback

$$f=g\circ\pi$$

of a meromorphic function $g$ on the Riemann surface $T_\Lambda$; since $\pi$ is
surjective such a $g$ is unique, and changing a representative of a class
changes $z$ by an element of $\Lambda$, under which $f$ is invariant by
periodicity. The functions $g$ and $f=g\circ\pi$ are called the
**torus form** and the **plane form** of the same elliptic function.

The **period group** of a meromorphic $f:\mathbb C\to\widehat{\mathbb C}$ is

$$\operatorname{Per}(f):=\{\,\omega\in\mathbb C: f(z+\omega)=f(z)\ \text{for all }z\in\mathbb C\,\};$$

it is a subgroup of $\mathbb C$, and $f$ is
$\Lambda$-elliptic exactly when $\Lambda\subseteq\operatorname{Per}(f)$. The
period group need not equal $\Lambda$: if $\Lambda'$ is a lattice containing
$\Lambda$ then every $\Lambda'$-elliptic function is $\Lambda$-elliptic, so the
same function can be elliptic for several lattices.

## Remarks

**Descent and compatibility.** If $f$ is $\Lambda$-elliptic, the formula
$g([z]):=f(z)$ is well defined because a different representative is
$z+\lambda$, and the local expressions of $g$ in the quotient charts are local
expressions of $f$, which are holomorphic or have a pole; since $\pi$ is a
covering map, every point of $T_\Lambda$ has a chart inverse to a bijective
restriction of $\pi$, so $g$ is holomorphic as a map $T_\Lambda\to\widehat{\mathbb C}$ away
from the image of the poles and has poles there. Conversely $g\circ\pi$ is
$\Lambda$-periodic, and $f\mapsto g$ and $g\mapsto g\circ\pi$ are mutually
inverse, so the two descriptions coincide.

**Field structure.** Sums, products, quotients with denominator not identically zero
and constant multiples of $\Lambda$-elliptic functions are again
$\Lambda$-elliptic, and the $\Lambda$-elliptic functions form a subfield of the
field of all meromorphic functions on $\mathbb C$
([[cor-meromorphic-functions-on-a-domain-form-a-field]]); equivalently they are
the meromorphic functions on the compact torus $T_\Lambda$. Constants are
elliptic, and they are the only $\Lambda$-elliptic functions with no poles: a
holomorphic (pole-free) $\Lambda$-periodic function is bounded on the compact
fundamental domain and hence constant, by Liouville's theorem. This last
statement is proved with the divisor laws in the next items of the page.

**Zeros and poles.** For a $\Lambda$-elliptic function $f\not\equiv0$, its zeros and poles are
$\Lambda$-invariant: $f(z+\lambda)=f(z)$ shows that $z$ is a zero or pole of a
given order exactly when $z+\lambda$ is. Since their classes form closed, isolated subsets of the compact
torus $T_\Lambda$, only finitely many classes of zeros and poles occur; this
finiteness is used when the divisor of a nonzero elliptic function is formed. The allowed zero function has every point as a zero and has no divisor of isolated zeros.
