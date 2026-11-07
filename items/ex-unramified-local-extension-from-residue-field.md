---
id: ex-unramified-local-extension-from-residue-field
kind: example
title: "An unramified extension built from a residue-field extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-countable-choice
  - def-extension-degree-and-finite-extension
  - def-relative-frobenius-of-a-finite-field-extension
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Proposition 7.50 and Example 7.54"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "Andrew V. Sutherland, MIT 18.785 Number Theory I, Fall 2021, Lecture 10, Theorem 10.13"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
verification: {}
---

## Example

Assume the Axiom of Countable Choice. Let $K=\mathbb F_3((t))$ with its
$t$-adic valuation, let $u^2+1=0$, and set
$L=\mathbb F_9((t))=K(u)$, where
$\mathbb F_9=\mathbb F_3[u]/(u^2+1)$. Then $L/K$ is the unique unramified
quadratic extension with residue field $\mathbb F_9$. Its arithmetic
Frobenius fixes $t$ and sends $u$ to $-u$.

## Example references

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, Proposition 7.50 and Example 7.54](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

[Andrew V. Sutherland, MIT 18.785, Fall 2021, Lecture 10, Theorem 10.13](https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf)

## Facts & Assumptions

**Given:** Countable Choice, $K=\mathbb F_3((t))$, and
$L=\mathbb F_9((t))$ with $u^2=-1$.

[A1] Countable Choice selects one element from each member of a countable
family of nonempty sets. ([[def-countable-choice]])

[F1] [[def-local-field-valuation-ring-uniformizer-and-residue-field]]: A
complete discretely valued field with finite residue field is a
nonarchimedean local field.

[F2] [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]:
Under Countable Choice, a finite residue-field extension determines a unique
unramified local extension up to base-field isomorphism, and residue reduction
identifies its Galois group with the residue Galois group.

[F3] [[def-relative-frobenius-of-a-finite-field-extension]]: For a residue
field of order $q$, arithmetic Frobenius is $x\mapsto x^q$.

[F4] [[def-extension-degree-and-finite-extension]]: A finite field extension
degree is the dimension over its base field.

## Verification

**Given:** The data above.


1.1 Let $k$ be either $\mathbb F_3$ or $\mathbb F_9$. A Cauchy sequence $x_n\in k((t))$ has, after some index, a fixed finite negative part: choose the index after which $\operatorname{ord}_t(x_n-x_m)\ge0$. For every exponent $j$, the Cauchy condition also makes the coefficient of $t^j$ eventually constant. These stable coefficients define a Laurent series $x$ with a finite negative part; for any fixed exponent bound, all coefficients below that bound eventually agree with those of $x$, so $x_n\to x$. Thus both $K$ and $L$ are complete discretely valued fields with finite residue fields, and [F1] makes them local fields. [F1, given, construct]

1.2 The squares in $\mathbb F_3$ are $0$ and $1$, so $-1=2$ is not a square; hence $T^2+1$ is irreducible over $\mathbb F_3$. Every Laurent series with coefficients in $\mathbb F_9=\mathbb F_3(u)$ has a unique expression $A(t)+uB(t)$ with $A,B\in K$, so $L=K(u)$ has degree at most two. If $u$ were in $K$, it would be a unit and its residue would be a square root of $-1$ in $\mathbb F_3$, which is impossible. Therefore $[L:K]=2$ by [F4]. [F4, given, algebra]

2.1 The $t$-adic value groups of $K$ and $L$ are both $\mathbb Z$ and the valuation on $L$ restricts to that on $K$, so $e(L/K)=1$. Their residue fields are $\mathbb F_3$ and $\mathbb F_9$; this extension has degree two and is separable because $T^2+1$ has nonzero derivative at its roots. Thus $L/K$ is unramified. [F1, F4, step 1.1, step 1.2, algebra]

3.1 By [F2], $L/K$ is the unique unramified extension with this residue field. The residue Frobenius sends $\bar u$ to $\bar u^3=-\bar u$ by $u^2=-1$. The coefficientwise map fixing $t$ and sending $u\mapsto-u$ is a $K$-automorphism of $L$ that reduces to this Frobenius, so it is the unique arithmetic Frobenius lift. [A1, F2, F3, step 2.1, given, algebra] ∎