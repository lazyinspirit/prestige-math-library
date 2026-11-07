---
id: thm-reduced-form-enumeration-correctness-and-completeness
kind: theorem
title: "Reduced-Form Enumeration Lists Exactly One Representative per Proper Class"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - alg-enumerate-reduced-forms-of-negative-fundamental-discriminant
  - lem-euclidean-gcd-procedure-computes-the-gcd-and-terminates
  - def-binary-quadratic-form-over-integers
  - def-discriminant-of-binary-quadratic-form
  - def-primitive-binary-quadratic-form
  - cor-common-divisor-divides-gcd
  - lem-divisibility-basic
  - lem-units-of-z
  - def-positive-definite-binary-quadratic-form
  - def-reduced-positive-definite-binary-quadratic-form
  - def-proper-equivalence-of-binary-quadratic-forms
  - def-binary-quadratic-form-class-number
  - prop-proper-equivalence-preserves-discriminant-and-primitivity
  - prop-positive-definite-binary-form-criterion
  - thm-reduction-of-positive-definite-binary-quadratic-forms
  - thm-unique-reduced-positive-definite-binary-quadratic-form
  - lem-leading-coefficient-bound-for-a-reduced-form
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, §§9.3–9.4"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
    - title: "Andrew Granville, Binary Quadratic Forms, Chapter 4"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
---

## Statement

Let $D<0$ be a negative fundamental discriminant: either $D$ is squarefree
with $D\equiv1\pmod4$, or $D=4d$ for a squarefree integer
$d\equiv2$ or $3\pmod4$. A squarefree integer is one not divisible by the
square of any prime. Write an integral binary quadratic form as
$q(x,y)=ax^2+bxy+cy^2$ with $a,b,c\in\mathbb Z$, and define its discriminant
to be $b^2-4ac$. Such a form is primitive when
$\gcd(a,b,c)=\gcd(\gcd(a,b),c)=1$ and positive definite when
$q(x,y)>0$ for every nonzero real pair $(x,y)$. It is reduced when
$|b|\le a\le c$ and $b\ge0$ whenever $|b|=a$ or $a=c$. Two forms are
properly equivalent when one is obtained from the other by a change of
variables with a matrix in $\mathrm{SL}_2(\mathbb Z)$, the integer matrices
of determinant $1$. The stated enumeration algorithm outputs exactly all
primitive, positive-definite, reduced forms of discriminant $D$, with exactly
one output in each proper-equivalence class. Its output length is the binary
quadratic form class number $h(D)$.

## Statement references

[[alg-enumerate-reduced-forms-of-negative-fundamental-discriminant]]

[[lem-euclidean-gcd-procedure-computes-the-gcd-and-terminates]]

[[def-binary-quadratic-form-over-integers]]

[[def-discriminant-of-binary-quadratic-form]]

[[def-primitive-binary-quadratic-form]]

[[def-positive-definite-binary-quadratic-form]]

[[def-reduced-positive-definite-binary-quadratic-form]]

[[def-proper-equivalence-of-binary-quadratic-forms]]

[[def-binary-quadratic-form-class-number]]

[[prop-proper-equivalence-preserves-discriminant-and-primitivity]]

[[prop-positive-definite-binary-form-criterion]]

[[thm-reduction-of-positive-definite-binary-quadratic-forms]]

[[thm-unique-reduced-positive-definite-binary-quadratic-form]]

[[lem-leading-coefficient-bound-for-a-reduced-form]]

[William Stein, *Elementary Number Theory and Elliptic Curves*, §§9.3–9.4](https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf)

[Andrew Granville, *Binary Quadratic Forms*, Chapter 4](https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf)

## Facts & Assumptions

**Given:** A negative fundamental discriminant $D$ as specified in the
statement, and the finite output list of the stated algorithm.

[F1] The algorithm uses integer binary search to set $A$ to the greatest
integer with $3A^2\le|D|$, then loops over $1\le a\le A$ and $-a\le b\le a$;
it retains exactly the triples satisfying the parity, divisibility,
primitive-gcd, reduced-inequality and boundary-sign tests
([[alg-enumerate-reduced-forms-of-negative-fundamental-discriminant]]).

[F2] An integral binary quadratic form is $ax^2+bxy+cy^2$ with integer
coefficients ([[def-binary-quadratic-form-over-integers]]).

[F3] Its discriminant is $b^2-4ac$
([[def-discriminant-of-binary-quadratic-form]]).

[F4] A form is primitive exactly when the only common divisors of all three
coefficients are $1$ and $-1$ ([[def-primitive-binary-quadratic-form]]).

[F5] Positive definite means positive on every nonzero real pair
([[def-positive-definite-binary-quadratic-form]]).

[F6] Reducedness means $|b|\le a\le c$ and $b\ge0$ whenever $|b|=a$ or
$a=c$ ([[def-reduced-positive-definite-binary-quadratic-form]]).

[F7] Proper equivalence is change of variables by a determinant-one integer
matrix ([[def-proper-equivalence-of-binary-quadratic-forms]]).

[L1] Every positive-definite integral binary quadratic form is properly
equivalent to a reduced form
([[thm-reduction-of-positive-definite-binary-quadratic-forms]]).

[L2] Proper equivalence preserves discriminant and primitivity
([[prop-proper-equivalence-preserves-discriminant-and-primitivity]]).

[L3] Every proper-equivalence class of positive-definite integral binary
quadratic forms contains exactly one reduced form
([[thm-unique-reduced-positive-definite-binary-quadratic-form]]).

[L4] A reduced positive-definite form of discriminant $\Delta$ has leading
coefficient $a\le\sqrt{|\Delta|/3}$
([[lem-leading-coefficient-bound-for-a-reduced-form]]).

[F8] For $D<0$ with $D\equiv0$ or $1\pmod4$, $h(D)$ is the number of
proper-equivalence classes of primitive positive-definite integral forms of
discriminant $D$ ([[def-binary-quadratic-form-class-number]]).

[F9] An integral binary quadratic form is positive definite exactly when
$a>0$ and $b^2-4ac<0$
([[prop-positive-definite-binary-form-criterion]]).

[F10] For every pair of integers, its gcd is nonnegative, is a common divisor,
and every common divisor divides it
([[cor-common-divisor-divides-gcd]]).

[F11] Integer divisibility is transitive
([[lem-divisibility-basic]]).

[F12] An integer divides $1$ exactly when it is $1$ or $-1$
([[lem-units-of-z]]).

[L5] The enumerator's Euclidean remainder subroutine terminates and returns
the mathematical greatest common divisor
([[lem-euclidean-gcd-procedure-computes-the-gcd-and-terminates]]).

## Proof

1.1 For any integers $x,y,z$, put $g_1=\gcd(x,y)$ and $g=\gcd(g_1,z)$. If $g=1$, every common divisor $d$ of $x,y,z$ divides $g_1$ by [F10], hence divides $g$ by [F10] again, and so divides $1$; [F12] gives $d=1$ or $d=-1$. Conversely, if every common divisor of $x,y,z$ is $1$ or $-1$, then $g_1$ divides both $x$ and $y$, while $g$ divides $g_1$ and $z$, by [F10]. Transitivity [F11] makes $g$ a common divisor of $x,y,z$. Thus $g=1$ or $g=-1$, and its nonnegativity from [F10] gives $g=1$ in the usual order on $\mathbb Z$. This proves that $\gcd(\gcd(x,y),z)=1$ exactly when the only common divisors of $x,y,z$ are $1$ and $-1$, including all zero cases under the gcd convention. [F10, F11, F12, algebra]

1.2 The cutoff search begins with $L=0$ and $U=|D|+1$. Since $D<0$ and $D\equiv1\pmod4$ in the squarefree branch, that branch has $|D|\ge3$; in the $D=4d$ branch, $|D|\ge4$. Thus $|D|\ge3$ and $0\le\sqrt{|D|/3}<|D|+1$. The test $3M^2\le|D|$ is equivalent to $M\le\sqrt{|D|/3}$, so each update preserves $L\le\sqrt{|D|/3}<U$. The positive integer interval length decreases at each iteration; when $U=L+1$, $L$ is the greatest integer at most the square root. Thus the algorithm computes $A=L=\lfloor\sqrt{|D|/3}\rfloor$. [F1, given, algebra]

1.3 Let $(a,b,c)$ be any output. By [F1], $a\ge1$, $c=(b^2-D)/(4a)>0$, $b^2-4ac=D$, and the Euclidean gcd tests return $1$. By [L5] these are the mathematical gcds, so [F4] and step 1.1 give primitivity. The reduced inequalities and boundary sign rule also hold, so [F2], [F3], [F5], [F6], and [F9] show this is a primitive, positive-definite, reduced form of discriminant $D$. [F1, L5, F2, F3, F4, F5, F6, F9, step 1.1, algebra]

1.4 Let $C$ be any proper-equivalence class of primitive positive-definite forms of discriminant $D$, and choose a representative $q\in C$. By [L1], $q$ is properly equivalent to a reduced form $r$. By [L2], $r$ remains primitive and has discriminant $D$. [F7, L1, L2, choose]

2.1 Write $r=(a,b,c)$. By [L4], $a\le\sqrt{|D|/3}$; step 1.2 shows the integer $a$ lies in the algorithm's range. By [F6], $|b|\le a\le c$ and the boundary sign rule holds. Its discriminant equation gives $4a\mid b^2-D$ and $b\equiv D\pmod2$; its primitivity gives the nested-gcd test by step 1.1. Thus [F1] retains $r$. [F1, F6, L4, step 1.1, step 1.2, step 1.4, algebra]

3.1 By [L3], no proper-equivalence class contains two distinct reduced forms. Step 1.3 shows every output is reduced, and step 2.1 supplies an output in every class. Therefore the algorithm outputs exactly one form per class. By [F8], the number of outputs is $h(D)$. [L3, F8, step 1.3, step 2.1, algebra] ∎
