---
id: thm-quadratic-order-formula-verifies-discriminant
kind: theorem
title: The Quadratic Order Formula Has Discriminant D
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-quadratic-order-of-discriminant
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-order-in-a-number-field
  - def-discriminant-of-a-number-field-basis-and-order
  - def-field-norm-and-trace
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Manjul Bhargava, Higher Composition Laws I, §3.1"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v159-n1-p03.pdf"
    - title: "J. S. Milne, Algebraic Number Theory v3.08, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
verification:
  precheck: pass
---

## Statement

For every nonzero nonsquare integer $D\equiv0$ or $1\pmod4$, the element
$\tau_D=(\delta+\sqrt D)/2$, with $\delta\in\{0,1\}$ congruent to $D$ modulo
$2$, is an algebraic integer, $\mathbb Z[\tau_D]$ is a rank-two order in
$\mathbb Q(\sqrt D)$ with ordered basis $(1,\tau_D)$, and its order
discriminant is $D$.

## Statement references

[Bhargava, “Higher Composition Laws I,” §3.1, Theorem 8, pp. 230–232](https://annals.math.princeton.edu/wp-content/uploads/annals-v159-n1-p03.pdf)

[Milne, *Algebraic Number Theory*, §4.29, pp. 81–83](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

## Facts & Assumptions

**Given:** A nonzero nonsquare integer $D\equiv0$ or $1\pmod4$, with $\delta$ and $\tau_D$ as in the Statement.

[F1] [[def-quadratic-order-of-discriminant]]: $\mathbb Z[\tau_D]=\mathbb Z+\mathbb Z\tau_D$, $\tau_D^2=\delta\tau_D+q_D$, and $\overline{\tau_D}=\delta-\tau_D$.

[F2] [[def-number-field]]: a number field is a finite extension of $\mathbb Q$.

[F3] [[def-ring-of-integers-of-a-number-field]]: the ring of integers is the integral closure of $\mathbb Z$ in the number field.

[F4] [[def-order-in-a-number-field]]: an order is a unital subring of the ring of integers whose additive group is free of rank equal to the field degree.

[F5] [[def-discriminant-of-a-number-field-basis-and-order]]: the discriminant of an ordered basis is the determinant of its trace-pairing matrix.

[F6] [[def-field-norm-and-trace]]: field trace is the trace of the multiplication operator.

## Proof

1.1 If $\sqrt D=p/r$ for relatively prime integers $p,r$ with $r>0$, then $p^2=Dr^2$ forces $r=1$ and $D=p^2$, contrary to the hypothesis. Thus $X^2-D$ is irreducible over $\mathbb Q$, so $K_D$ has degree two. The integer $q_D$ satisfies $\tau_D^2-\delta\tau_D-q_D=0$, a monic polynomial in $\mathbb Z[X]$; hence $\tau_D$ is integral. [given, F2, F3, algebra]

2.1 The relation in [F1] reduces every power of $\tau_D$ to an integer combination of $1$ and $\tau_D$. These two elements are $\mathbb Q$-linearly independent because $\sqrt D\notin\mathbb Q$, so they form a $\mathbb Z$-basis of $\mathbb Z[\tau_D]$. Since this ring is unital and lies in the ring of integers, [F4] makes it an order. [F1, F2, F3, F4, step 1.1, algebra]

3.1 The conjugates of $\tau_D$ are $\tau_D$ and $\delta-\tau_D$. Therefore $\operatorname{Tr}(1)=2$, $\operatorname{Tr}(\tau_D)=\delta$, and $\operatorname{Tr}(\tau_D^2)=\delta^2+2q_D$. The trace-pairing matrix in the ordered basis $(1,\tau_D)$ is $\begin{pmatrix}2&\delta\\ \delta&\delta^2+2q_D\end{pmatrix}$, whose determinant is $\delta^2+4q_D=D$. By [F5], the order discriminant is $D$. [F1, F5, F6, given, algebra] ∎
