---
id: lem-number-field-degree-bounded-by-discriminant
kind: lemma
title: "A linear bound on degree from an absolute-discriminant bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-minkowski-bound-for-ideal-classes
  - def-absolute-norm-of-an-ideal
  - lem-nonzero-number-field-ideal-has-finite-quotient
  - def-discriminant-of-a-number-field-basis-and-order
  - thm-number-field-discriminant-is-well-defined-and-nonzero
  - def-archimedean-embeddings-and-number-field-signature
  - thm-gregory-leibniz-series-for-pi-from-a-finite-remainder
  - lem-integral-elementary-bounds
  - lem-bernoulli-inequality
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08, Chapter 4, Theorem 4.3 proof; Chapter 8, Theorem 8.43 proof"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter III, Section 2, Proposition (2.14) and Theorem (2.16)"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field of degree
$n=[K:\mathbb Q]\ge1$, let $B\ge1$ be an integer, and let
$D=|d_K|$, where $d_K$ is the determinant of the trace Gram matrix of an
integral basis of the ring of integers of $K$. If $D\le B$, then
$$n\le 6B-3.$$

## Statement references

[J. S. Milne, *Algebraic Number Theory* v3.08, Chapter 4, Theorem 4.3 proof and Chapter 8, Theorem 8.43 proof](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

[Jürgen Neukirch, *Algebraic Number Theory*, Chapter III, Section 2, Proposition (2.14) and Theorem (2.16)](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$, its degree $n\ge1$, an
integer $B\ge1$, and $D=|d_K|\le B$.

[A1] The Axiom of Choice is the assertion that every family of nonempty sets
has a choice function ([[def-axiom-of-choice]]).

[F1] Under the Axiom of Choice, every ideal class of a number field $K$ of
degree $n$ and signature $(r_1,r_2)$ contains an integral ideal $\mathfrak a$
with
$$N\mathfrak a\le (4/\pi)^{r_2}\frac{n!}{n^n}\sqrt{|d_K|}$$
([[thm-minkowski-bound-for-ideal-classes]]).

[F2] For a nonzero integral ideal $\mathfrak a\subseteq\mathcal O_K$, its
absolute norm is $N\mathfrak a=|\mathcal O_K/\mathfrak a|$
([[def-absolute-norm-of-an-ideal]]).

[F3] Every nonzero integral ideal of $\mathcal O_K$ has finite additive
quotient ([[lem-nonzero-number-field-ideal-has-finite-quotient]]), so the
integer $N\mathfrak a$ in [F2] is positive.

[F4] The signature satisfies $n=r_1+2r_2$
([[def-archimedean-embeddings-and-number-field-signature]]).

[F5] For $N=0,1$, the finite remainder formula gives
$$\frac\pi4=1-\int_0^1\frac{x^2}{1+x^2}\,dx,
\qquad
\frac\pi4=\frac23+\int_0^1\frac{x^4}{1+x^2}\,dx$$
([[thm-gregory-leibniz-series-for-pi-from-a-finite-remainder]]).

[F6] If $m\le f(x)\le M$ on $[a,b]$, the integral is between
$m(b-a)$ and $M(b-a)$ when it exists
([[lem-integral-elementary-bounds]]).

[F7] For $x\ge-1$ and a natural number $n$,
$(1+x)^n\ge1+nx$ ([[lem-bernoulli-inequality]]).

[F8] Integral bases give the same nonzero signed integer $d_K$; in particular
$D=|d_K|$ is a positive integer
([[def-discriminant-of-a-number-field-basis-and-order]],
[[thm-number-field-discriminant-is-well-defined-and-nonzero]]).

## Proof


1.1 Apply [F1] to the identity class of $\mathcal O_K$. Under [A1], it gives an integral ideal $\mathfrak a$ in that class such that $N\mathfrak a\le(4/\pi)^{r_2}\frac{n!}{n^n}\sqrt D.$ [A1, F1, given, choose]

1.2 On $[1/2,1]$, $x^2/(1+x^2)\ge1/8$. By [F5] and [F6], $\frac\pi4\le1-\frac1{16}<1.$ [F5, F6, algebra]

1.3 On $[1/2,1]$, $x^4/(1+x^2)\ge1/32$. By [F5] and [F6], $\frac\pi4\ge\frac23+\frac1{64}>\frac23.$ [F5, F6, algebra]

1.4 The product identity $\frac{n^n}{n!}=\prod_{j=1}^n\frac nj$ has its first $\lfloor n/2\rfloor$ factors at least $2$ and all remaining factors at least $1$. Hence $\frac{n^n}{n!}\ge2^{\lfloor n/2\rfloor}.$ [given, algebra]

2.1 By [F2] and [F3], $N\mathfrak a$ is a positive integer, hence $N\mathfrak a\ge1$. By [F8], $D>0$. Combining these with step 1.1 gives $1\le(4/\pi)^{r_2}\frac{n!}{n^n}\sqrt D.$ [F2, F3, F8, step 1.1, algebra]

2.2 Since $2r_2\le n$ by [F4] and $0<\pi/4<1$ by steps 1.2 and 1.3, $ (\pi/4)^{2r_2}\ge(\pi/4)^n>(2/3)^n.$ [F4, step 1.2, step 1.3, algebra]

3.1 All factors are positive, so rearranging step 2.1 gives $D\ge(\pi/4)^{2r_2}\left(\frac{n^n}{n!}\right)^2.$ [F8, step 2.1, algebra]

4.1 For even $n$, $4^{\lfloor n/2\rfloor}=2^n$; for odd $n$ it is $2^{n-1}$. Combining steps 3.1, 2.2, and 1.4 therefore gives $D\ge(2/3)^n4^{\lfloor n/2\rfloor}\ge\frac12(4/3)^n.$ [step 3.1, step 2.2, step 1.4, algebra]

5.1 Applying [F7] with $x=1/3$ yields $(4/3)^n\ge1+n/3$. Thus step 4.1 implies $D\ge\frac12(1+n/3)$. [F7, step 4.1, algebra]

6.1 Since $D\le B$, step 5.1 gives $1+n/3\le2B$, and hence $n\le6B-3$. [given, step 5.1, algebra] ∎
