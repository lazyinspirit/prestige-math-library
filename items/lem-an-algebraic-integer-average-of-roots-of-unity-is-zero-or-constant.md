---
id: lem-an-algebraic-integer-average-of-roots-of-unity-is-zero-or-constant
kind: lemma
title: "An algebraic-integer average of roots of unity is either $0$ or a common root of unity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-rational-algebraic-integers-are-integers, def-complex-conjugate-real-imaginary-part-and-modulus, def-integral-element-and-algebraic-integer]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Lemma 4.22"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
verification:
  audited: 2026-08-30
  precheck: pass
---

## Statement

Let $\zeta_1,\dots,\zeta_n$ be roots of unity, and put
$\alpha=(\zeta_1+\cdots+\zeta_n)/n$. If $\alpha$ is an algebraic integer, then
either $\alpha=0$ or $\zeta_1=\cdots=\zeta_n$.

## Facts & Assumptions

**Given:** Roots of unity $\zeta_1,\dots,\zeta_n$ and their average
$\alpha=(\zeta_1+\cdots+\zeta_n)/n$, with $\alpha$ an algebraic integer.

[F1] A rational algebraic integer is an integer
([[cor-rational-algebraic-integers-are-integers]]).

[F2] The modulus $|z|$ is the usual complex absolute value
([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F3] An algebraic integer is a complex number integral over $\mathbb Z$
([[def-integral-element-and-algebraic-integer]]).

[A1] Every algebraic conjugate of a root of unity is again a root of unity.

[A2] The average of complex numbers of modulus $1$ has modulus at most $1$, with
equality only when all of them are equal.

## Proof

**Proof technique:** direct.

1.1 If $\zeta_1=\cdots=\zeta_n$, then $\alpha=\zeta_1$ and the conclusion holds. [given]

2.1 Assume now that the $\zeta_i$ are not all equal. By [A2], $|\alpha|<1$. Every algebraic conjugate $\alpha'$ of $\alpha$ has the form $(\zeta_1'+\cdots+\zeta_n')/n$ with each $\zeta_i'$ a root of unity by [A1], so $|\alpha'|\le 1$ by [A2]. [F2, step 1.1, given, assume-contra]

3.1 Suppose also that $\alpha\ne0$. Let $m(X)=X^d+a_{d-1}X^{d-1}+\cdots+a_0$ be the monic minimal polynomial of $\alpha$ over $\mathbb Q$; then $(-1)^d a_0$ is the product of the algebraic conjugates of $\alpha$. Because $\alpha$ is an algebraic integer by [F3], that product is a rational algebraic integer, hence an integer by [F1]. But step 2.1 gives its modulus strictly between $0$ and $1$, impossible. So $\alpha=0$. [F1, F3, step 2.1, assume-contra, discharge-contradiction]

4.1 Under the assumption that the roots are not all equal, step 3.1 forces $\alpha=0$. Together with step 1.1, this proves that $\alpha$ is either $0$ or a common root of unity. [step 1.1, step 3.1, discharge-contradiction] ∎
