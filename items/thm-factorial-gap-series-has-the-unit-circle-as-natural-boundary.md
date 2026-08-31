---
id: thm-factorial-gap-series-has-the-unit-circle-as-natural-boundary
kind: theorem
title: "The factorial-gap series has the unit circle as a natural boundary"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-singular-boundary-point-and-natural-boundary, thm-pringsheim-theorem, thm-cauchy-hadamard-for-complex-power-series, def-factorial-and-falling-factorial]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  references:
    - title: "Henry Wilton, Riemann Surfaces lecture notes, Example 2.7"
      url: "https://www.scribd.com/document/833386016/II-Riemann-Surfaces-Notes-Henry-Wilton"
    - title: "Curtis T. McMullen, Riemann Surfaces, Ch. 4 Example 1"
      url: "https://abel.math.harvard.edu/~ctm/math213b/home/course/course.pdf"
---

## Statement

Let

$$F(z):=\sum_{n\ge0} z^{n!}.$$

Then $F$ has radius of convergence $1$, and the whole unit circle
$\{z:|z|=1\}$ is a natural boundary for the resulting function element on the
unit disc.

## Facts & Assumptions

**Given:** The factorial-gap series $F(z)=\sum_{n\ge0} z^{n!}$.

[L1] A natural boundary is a boundary all of whose points are singular
([[def-singular-boundary-point-and-natural-boundary]]).

[L2] Pringsheim's theorem makes the positive real boundary point singular for a
finite-radius power series with nonnegative coefficients
([[thm-pringsheim-theorem]]).

[L3] Cauchy-Hadamard computes the radius of convergence from the coefficients
([[thm-cauchy-hadamard-for-complex-power-series]]).

[L4] If $m \le n$, then $m!$ divides $n!$ by the factorial definition
([[def-factorial-and-falling-factorial]]).

## Proof

**Proof technique:** direct.

1.1 The coefficients of $F$ are $1$ at the factorial indices and $0$ elsewhere. Hence their limsup root is $1$, so [L3] gives radius of convergence $1$. Since all coefficients are nonnegative, [L2] makes the boundary point $1$ singular. [L2, L3]

1.2 Let $\omega$ be a root of unity. Choose $m\ge1$ with $\omega^{m!}=1$. By [L4], $\omega^{n!}=1$ for every $n\ge m$, so $$F(\omega z)-F(z)=\sum_{n=0}^{m-1}(\omega^{n!}-1)z^{n!},$$ a polynomial. [L4, algebra]

2.1 Suppose $\omega$ were regular. Then some holomorphic function would extend $F$ across $\omega$, so after composing with $z \mapsto \omega z$ the function $F(\omega z)$ would extend holomorphically across $1$. Step 1.2 shows that $F$ differs from that extension by a polynomial, so $F$ itself would extend holomorphically across $1$, contradicting step 1.1. Therefore every root of unity on the unit circle is singular. [step 1.1, step 1.2, assume-contra]

3.1 Roots of unity are dense on the unit circle. If some boundary point $\zeta$ were regular, a small extension disc around $\zeta$ would make every nearby boundary point regular as well, including some root of unity, contrary to step 2.1. Thus every point of the unit circle is singular, and [L1] makes the unit circle a natural boundary. [L1, step 2.1, discharge-contradiction] ∎
