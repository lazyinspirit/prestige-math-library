---
id: def-weierstrass-elliptic-p-function
kind: definition
title: "Weierstrass p function"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: true
deps:
  - def-complex-lattice-and-complex-torus
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-square-summable-family-on-an-arbitrary-index-set
justified_by: [thm-weierstrass-p-normal-convergence-and-periodicity]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms, Ch. 3, pp. 41-47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: "Ch. 3, 'The Weierstrass wp-function', printed pp. 43-44."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes, Ch. 5 §5.1, pp. 79-90"
      url: https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf
      locator: "Ch. 5 §5.1, definition and first properties of wp, printed pp. 79-81."
    - title: "NIST Digital Library of Mathematical Functions, §23.2, equations 23.2.1-23.2.17"
      url: https://dlmf.nist.gov/23.2
      locator: "§23.2(ii): the lattice sum for wp and its convergence."
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Let $\Lambda\subseteq\mathbb C$ be a full complex lattice with oriented basis
$(\omega_1,\omega_2)$ ([[def-complex-lattice-and-complex-torus]]). The
**Weierstrass $\wp$-function** of $\Lambda$ is the function

$$\wp_\Lambda(z):=\frac1{z^{2}} +\sum_{\omega\in\Lambda\setminus\{0\}} \left(\frac1{(z-\omega)^{2}}-\frac1{\omega^{2}}\right),\qquad z\in\mathbb C\setminus\Lambda ,$$

where the sum over the lattice points different from $0$ is the **unordered
(finite-subset) sum**: for the directed set of finite subsets
$F\subseteq\Lambda\setminus\{0\}$ ordered by inclusion, one forms the net of
partial sums $\sum_{\omega\in F}\bigl((z-\omega)^{-2}-\omega^{-2}\bigr)$, and
$\sum_{\omega\in\Lambda\setminus\{0\}}(\cdots)$ denotes its limit when the net
converges and the limit does not depend on the directed set — equivalently, when
the family is absolutely summable, i.e. when
$\sup_{F}\sum_{\omega\in F}\bigl|(z-\omega)^{-2}-\omega^{-2}\bigr|<\infty$ and
the partial sums converge. The following theorem of this page proves that for
every $z\in\mathbb C\setminus\Lambda$ the family is absolutely summable, with
normal (locally uniform, enumeration-free) convergence on
$\mathbb C\setminus\Lambda$; this is the sense in which $\wp_\Lambda$ is
well defined beyond the displayed formula. In particular no ordering of
$\Lambda$ is used and the value does not depend on one.

## Remarks

**The two correction terms.** The summand
$$\frac1{(z-\omega)^{2}}-\frac1{\omega^{2}} =\frac{2z\omega-z^{2}}{(z-\omega)^{2}\omega^{2}}$$
is holomorphic in $z$ on the disc $|z|<|\omega|$, so each summand is
holomorphic near the origin; at $z=0$ its value is
$(-\omega)^{-2}-\omega^{-2}=0$. The single uncorrected term $z^{-2}$ therefore
supplies the entire principal part at the lattice point $0$, and the
subtractions make the remaining series vanish at $0$: the constant term of the
Laurent expansion of $\wp_\Lambda$ at $0$ is $0$. At a general lattice point
$\lambda\in\Lambda$ the same computation after the translation $z\mapsto
z+\lambda$ shows that the principal part of $\wp_\Lambda$ at $\lambda$ is
$(z-\lambda)^{-2}$.

**Translation and parity.** Reindexing the sum by $\omega\mapsto-\omega$ — a
bijection of $\Lambda\setminus\{0\}$ — replaces $(z-\omega)^{-2}-\omega^{-2}$ by
$(z+\omega)^{-2}-\omega^{-2}$ and $z$ by $-z$, which is the same expression;
consequently the absolutely convergent sum satisfies
$\wp_\Lambda(-z)=\wp_\Lambda(z)$ once its convergence is known, and
$\wp_\Lambda$ is an even function. The sum depends only on the lattice
$\Lambda$, not on the oriented basis chosen to describe it, since the
underlying index set $\Lambda$ and every summand depend on $\Lambda$ alone.

**Finite-subset convergence and absolute summability.** For a complex family
$(a_i)_{i\in I}$, use the real and imaginary parts and modulus of
[[def-complex-conjugate-real-imaginary-part-and-modulus]]. Absolute summability
implies convergence of its finite-subset net by
[[def-square-summable-family-on-an-arbitrary-index-set]]. For the reverse
direction, suppose the finite-subset sums $s_F:=\sum_{i\in F}a_i$ converge to
$s\in\mathbb C$. Choose a finite $F_0$ such that $|s_F-s|<1$ whenever
$F\supseteq F_0$; then $|s_F|\le |s|+1$ for every such $F$. For any finite
set $P\subseteq I\setminus F_0$ on which $\operatorname{Re}(a_i)>0$,
$$\sum_{i\in P}\operatorname{Re}(a_i)=\operatorname{Re}(s_{F_0\cup P}-s_{F_0})\le |s|+1+|s_{F_0}|.$$
The same bound holds for finite sums of $-\operatorname{Re}(a_i)$ over negative
terms, and likewise for the imaginary parts. Adding the finitely many terms in
$F_0$ shows that the finite subsums of $|\operatorname{Re}(a_i)|$ and
$|\operatorname{Im}(a_i)|$ are bounded. Since
$|a_i|\le|\operatorname{Re}(a_i)|+|\operatorname{Im}(a_i)|$, the finite
subsums of $|a_i|$ are bounded, so the family is absolutely summable by the
definition in [[def-square-summable-family-on-an-arbitrary-index-set]]. This
argument uses no enumeration or choice principle.

**The cubic tail.** For $|z|\le R$ and $|\omega|\ge2R$ the displayed numerator
is bounded by $2R|\omega|+R^{2}$ and the denominator is bounded below by
$\frac14|\omega|^{4}$, so the summand is $O_{R}(|\omega|^{-3})$. The lattice
alone therefore controls the size of the terms, and the convergence proof only
has to count how many lattice vectors occur at each scale; that count and the
resulting normal convergence are proved in the next items of this page.
