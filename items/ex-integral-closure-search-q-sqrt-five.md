---
id: ex-integral-closure-search-q-sqrt-five
kind: example
title: Trace the finite-coset integral-closure search in Q(sqrt 5)
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - alg-integral-closure-by-discriminant-cosets
  - thm-integral-closure-coset-search-correct
  - thm-ring-of-integers-of-a-quadratic-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08, Proposition 2.43 and Example 2.46"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
verification: {}
---

## Example

For $K=\mathbb Q(s)$ with $s^2=5$, the power basis $1,s$ has trace Gram matrix $G=\operatorname{diag}(2,10)$ and absolute discriminant $D=20$. The finite-coset search retains exactly the cosets $0+\mathbb Z[s]$ and $(1+s)/2+\mathbb Z[s]$ in $D^{-1}\mathbb Z[s]/\mathbb Z[s]$, and its returned integral basis is $1,(1+s)/2$.

## Example references

[[alg-integral-closure-by-discriminant-cosets|finite-coset search algorithm]]

[[thm-integral-closure-coset-search-correct|correctness theorem]]

[[thm-ring-of-integers-of-a-quadratic-field|quadratic integer basis]]

[Milne, Proposition 2.43 and Example 2.46](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

## Facts & Assumptions

**Given:** The field $K=\mathbb Q(s)$ with $s^2=5$ and the finite-coset search algorithm.

[F1] The search tests representatives $D^{-1}(a+bs)$ for $0\le a,b<D$ by the characteristic polynomial of multiplication ([[alg-integral-closure-by-discriminant-cosets]]).

[F2] For squarefree $5\equiv1\pmod4$, the ring of integers is $\mathbb Z[(1+s)/2]$ ([[thm-ring-of-integers-of-a-quadratic-field]]).

[F3] The discriminant-coset search retains exactly the integral cosets and returns an integral basis ([[thm-integral-closure-coset-search-correct]]).

## Proof



1.1 The traces are $\operatorname{Tr}(1)=2$, $\operatorname{Tr}(s)=0$, and $\operatorname{Tr}(s^2)=10$, so $G=\operatorname{diag}(2,10)$ and $D=20$. By [F1], the representative list is $\{(a+bs)/20:0\le a,b<20\}$. [F1, given, algebra]

1.2 Since $\mathbb Z[s]\subseteq\mathcal O_K=\mathbb Z[(1+s)/2]$, the quotient $\mathcal O_K/\mathbb Z[s]$ has two classes: writing $\omega=(1+s)/2$, one has $\mathbb Z[s]=\mathbb Z+2\mathbb Z\omega$, so the classes are $0$ and $\omega$. [F2, algebra]

2.1 The class $0$ is represented by $0$, whose multiplication characteristic polynomial is $T^2$. The class $\omega$ is represented in the search box by $(10+10s)/20$; it satisfies $\omega^2-\omega-1=0$, so its multiplication characteristic polynomial is $T^2-T-1$. Both polynomials lie in $\mathbb Z[T]$. [F1, step 1.1, algebra]

3.1 By [F3], the retained search classes are exactly the integral classes in that quotient. Step 1.2 lists those two classes, and step 2.1 verifies their representatives pass the test. The generated lattice is therefore $\mathcal O_K=\mathbb Z+\mathbb Z\omega$, giving the stated basis. [F2, F3, step 1.2, step 2.1] ∎

