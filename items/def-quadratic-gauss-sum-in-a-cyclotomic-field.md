---
id: def-quadratic-gauss-sum-in-a-cyclotomic-field
kind: definition
title: Quadratic Gauss sum in a prime cyclotomic field
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-legendre-symbol
  - def-cyclotomic-extension
  - def-integral-element-and-algebraic-integer
  - def-ring-of-integers-of-a-number-field
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jerry Shurman, Math 361 Ninth Lecture, sections 2-3"
      url: "https://people.reed.edu/~jerry/361/lectures/lec09.pdf"
      locator: "Lecture 9 section 2, pp. 5-6: the quadratic Gauss sum tau_p = sum_a (a/p) zeta_p^a attached to a chosen primitive p-th root."
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 8, Example 8.19"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Ch. 8, Example 8.19, p. 144: the Gauss sum, its square, and the quadratic field it generates."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Let $p$ be an odd prime, let $\zeta_p$ be a fixed primitive $p$-th root of
unity ([[def-cyclotomic-extension]]), and let $(\cdot/p)$ be the Legendre
symbol ([[def-legendre-symbol]]). The **quadratic Gauss sum** attached to
$\zeta_p$ is

$$\tau_p:=\sum_{a\bmod p}\left(\frac{a}{p}\right)\zeta_p^{\,a}=\sum_{a=1}^{p-1}\left(\frac{a}{p}\right)\zeta_p^{\,a}\ \in\ \mathbb Z[\zeta_p].$$

**The sum lies in $\mathbb Z[\zeta_p]$ and is an algebraic integer.** The term
$a=0$ vanishes because $(0/p)=0$, so the sum is finite over the classes
$a=1,\dots,p-1$; each $\zeta_p^a$ is a root of $t^{p}-1$ and hence integral over
$\mathbb Z$ ([[def-integral-element-and-algebraic-integer]]), and the integral
elements of $\mathbb C$ form a subring, so $\tau_p$ is an algebraic integer
lying in $\mathbb Z[\zeta_p]\subseteq\mathcal O_{\mathbb Q(\zeta_p)}$
([[def-ring-of-integers-of-a-number-field]]).

**The chosen root is part of the data.** The notation $\tau_p$ always refers to
the sum built from the explicitly chosen $\zeta_p$. Replacing $\zeta_p$ by
another primitive $p$-th root changes $\tau_p$ up to a sign: indeed
$\sigma_b(\zeta_p)=\zeta_p^{\,b}$ gives
$\sum_a(a/p)\zeta_p^{\,ab}=(b/p)\tau_p$ for every $b\not\equiv0\pmod p$. The
square $\tau_p^2=p^{*}=(-1)^{(p-1)/2}p$ and the field $\mathbb Q(\tau_p)$ are
unchanged by that replacement ([[thm-quadratic-gauss-sum-square]],
[[thm-quadratic-subfield-of-a-prime-cyclotomic-field]]), but the sign of
$\tau_p$ is not fixed until the primitive root (equivalently, a complex
embedding) is fixed.
