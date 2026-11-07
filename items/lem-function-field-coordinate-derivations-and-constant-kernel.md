---
dependency_level: 0
id: lem-function-field-coordinate-derivations-and-constant-kernel
kind: lemma
title: Coordinate derivations and their constant kernel in a function field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-derivation-algebra
  - thm-ag-separating-transcendence-basis-perfect-field
  - thm-primitive-element-theorem-for-finite-separable-extensions
  - thm-evaluation-kernel-and-minimal-polynomial
  - thm-polynomial-is-separable-iff-coprime-to-its-derivative
  - thm-tower-law-for-finite-field-extensions
  - thm-binomial-theorem-over-a-commutative-ring
  - lem-prime-divides-intermediate-binomial-coefficients
  - thm-finitely-generated-algebraic-extensions-are-finite
  - thm-perfect-field-characterizations
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Algebra, Sections 10.44–10.45; finite separating-coordinate derivation formulation"
      url: https://stacks.math.columbia.edu/download/algebra.pdf
    - title: "P. Samuel, Lectures On Old And New Results On Algebraic Curves, Chapter III §3, printed pp. 71–75"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf
verification: {}
---

## Statement

Let $k$ be perfect and $L/k$ a finitely generated field extension of
transcendence degree $d\ge0$. Choose a separating transcendence basis
$u_1,\ldots,u_d$, so $L/k(u_1,\ldots,u_d)$ is finite separable.
The coordinate derivations $\partial_i(u_j)=\delta_{ij}$ extend uniquely
to $k$-derivations of $L$. They commute, and every $k$-derivation of $L$
is uniquely an $L$-linear combination of them.

If $\operatorname{char}k=p>0$, the monomials
$u_1^{e_1}\cdots u_d^{e_d}$ with $0\le e_i<p$ form an $L^p$-basis of
$L$, the common kernel of all $k$-derivations is exactly $L^p$, and
$\partial_i^p=0$. If $\operatorname{char}k=0$, the common kernel is the
relative algebraic closure of $k$ in $L$. The empty derivation family when
$d=0$ has kernel $L$, consistently with both conclusions.

## Facts & Assumptions

**Given:** A perfect field $k$, a finitely generated field $L/k$, and a
separating transcendence basis as in the Statement.

[F1] Such a separating transcendence basis exists over a perfect field.
[[thm-ag-separating-transcendence-basis-perfect-field]]

[F2] A finite separable extension is simple. For an algebraic element
its minimal polynomial generates the evaluation kernel; a separable
minimal polynomial $P$ satisfies $P'(a)\ne0$ at its root.
[[thm-primitive-element-theorem-for-finite-separable-extensions]]
[[thm-evaluation-kernel-and-minimal-polynomial]]
[[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]

[F3] Derivations satisfy linearity, the product rule and the quotient
rule, and their commutator is again a derivation. In characteristic $p$,
the iterated product formula makes the $p$th iterate of a derivation a
derivation because all intermediate binomial coefficients vanish.
[[def-derivation-algebra]] [[thm-binomial-theorem-over-a-commutative-ring]]
[[lem-prime-divides-intermediate-binomial-coefficients]]

[F4] Degrees multiply in finite field towers. Perfectness in positive
characteristic means $k=k^p$; characteristic-zero fields are perfect.
[[thm-tower-law-for-finite-field-extensions]]
[[thm-perfect-field-characterizations]]
A finitely generated algebraic field extension is finite.
[[thm-finitely-generated-algebraic-extensions-are-finite]]

## Proof

**Proof technique:** direct; differentiate the separable minimal
polynomial and then count and differentiate restricted monomials.

1.1 Put $F=k(u_1,\ldots,u_d)$ and write $L=F(a)$ with separable monic minimal polynomial $P(T)=\sum_j c_jT^j$ by [F2]. A derivation $D:F\to L$ has exactly one possible extension to $L$, namely $D(a)=-\sum_jD(c_j)a^j/P'(a)$. This extension exists: define a derivation from $F[T]$ to $L$ using that assigned value on $T$ and evaluation at $a$. It kills $P$ and therefore its entire ideal by the product rule, so descends to $F[T]/(P)=L$. Apply this to the coordinate derivations on the rational field $F$, defined by differentiating polynomials and then using the quotient rule. If a $k$-derivation of $L$ is given, subtract $\sum_i D(u_i)\partial_i$; the difference kills $F$ and hence kills $L$ by the uniqueness just proved. Evaluating on the $u_i$ also proves uniqueness of the linear combination. Since a commutator of two coordinate derivations kills every $u_j$ and $k$, it kills $F$ and then $L$ by the same uniqueness. [F1, F2, F3, given, algebra]

2.1 Suppose the characteristic is $p>0$. Write $m=[L:F]$. The rational field $F$ has degree $p^d$ over $F^p=k(u_1^p,\ldots,u_d^p)$: reduce polynomial exponents modulo $p$ and use $g^{-1}=g^{p-1}/g^p$ to span it by the restricted monomials; their independence follows by clearing denominators and comparing distinct exponent classes in the algebraically independent variables. Frobenius is a field isomorphism $L\to L^p$ carrying $F$ onto $F^p$, so $[L^p:F^p]=m$. The two degree computations in [F4] give $[L:L^p]m=mp^d$, hence $[L:L^p]=p^d$. All the coordinate derivations kill $L^p$. To prove the $p^d$ restricted monomials independent over $L^p$, take a nonzero relation and its lexicographically largest exponent tuple $e$ with nonzero coefficient. Apply $\partial_1^{e_1}\cdots\partial_d^{e_d}$. Every earlier tuple is killed at its first smaller exponent, while the chosen tuple yields its coefficient times $\prod_i e_i!\ne0$. This contradicts the relation. Degree equality now proves that these monomials are a basis. [F3, F4, algebra, step 1.1]

3.1 Expanding $b\in L$ in that basis and differentiating shows that $\partial_i b=0$ forces all coefficients with $e_i>0$ to vanish: the differentiated monomials are distinct basis monomials and the factors $e_i$ are nonzero. Thus the common kernel is precisely the coefficient field $L^p$. By [F3], $\partial_i^p$ is a derivation; it kills $k$ and every $u_j$, so kills $L$ by step 1.1. This proves all positive-characteristic assertions, without claiming that the rational field $F$ is perfect. [F3, F4, algebra, step 1.1, step 2.1]

4.1 In characteristic zero, an element algebraic over $k$ is separable, and differentiating its minimal polynomial over $k$ shows it is killed by every $k$-derivation, as in step 1.1. Conversely, if $b$ is transcendental over $k$, extend $\{b\}$ to a transcendence basis by running through finitely many field generators and adjoining each still-transcendental generator. The remaining extension is finite and, in characteristic zero, separable by [F4]. Step 1.1 applied to this basis gives a derivation taking $b$ to $1$, so $b$ is not in the common kernel. When $d=0$, in positive characteristic the degree computation gives $L=L^p$, and in characteristic zero every element is algebraic over $k$. Both agree with the kernel of the empty family. [F2, F4, algebra, step 1.1] ∎
