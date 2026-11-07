---
id: thm-fixed-degree-field-enumeration-correct-and-terminates
kind: theorem
title: "The fixed-degree coefficient search is sound, complete up to duplicates, and terminating"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - alg-enumerate-number-field-presentations-of-bounded-discriminant
  - thm-integral-closure-coset-search-correct
  - lem-hermite-minkowski-bounded-primitive-integral-element
  - lem-bounded-conjugates-give-finitely-many-integral-polynomials
  - cor-algebraic-integer-minimal-polynomial-criterion
  - thm-gauss-lemma-for-integer-polynomials
  - def-number-field
  - def-axiom-of-choice
  - def-ring-of-integers-of-a-number-field
  - def-discriminant-of-a-number-field-basis-and-order
  - def-field-norm-and-trace
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08, Chapter 8, Theorem 8.43 proof, pp. 151–152"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter III, §2, Theorem (2.16), pp. 205–206"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. For integers $n,B\ge1$, the fixed-degree coefficient-box algorithm returns only monic irreducible degree-$n$ polynomials whose number fields have absolute discriminant at most $B$. Every $\mathbb Q$-isomorphism class of degree-$n$ number fields with absolute discriminant at most $B$ is represented by at least one returned polynomial. The algorithm terminates; distinct returned polynomials may represent isomorphic fields.

## Statement references

[Milne, *Algebraic Number Theory* v3.08, Chapter 8, Theorem 8.43 proof, pp. 151–152](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

[Neukirch, *Algebraic Number Theory*, Chapter III, §2, Theorem (2.16), pp. 205–206](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

## Facts & Assumptions


**Given:** The Axiom of Choice and integers $n,B\ge1$.

[A1] The Axiom of Choice asserts that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] The coefficient-box procedure enumerates finitely many candidates, tests possible factors in explicit finite boxes, and applies the discriminant-coset integral-closure algorithm ([[alg-enumerate-number-field-presentations-of-bounded-discriminant]]).

[F2] For a monic irreducible polynomial of degree $n$, the discriminant-coset algorithm returns an integral basis of its number field and its search is exact ([[thm-integral-closure-coset-search-correct]]).

[F3] Under AC, every degree-$n\ge2$ number field with $|d_K|\le B$, $B\ge1$, has an integral primitive element whose conjugates all have modulus at most $\sqrt{B+2}$ ([[lem-hermite-minkowski-bounded-primitive-integral-element]]).

[F4] For integers $n\ge1$ and real $R\ge1$, only finitely many monic integer polynomials of degree at most $n$ have all complex roots of modulus at most $R$ ([[lem-bounded-conjugates-give-finitely-many-integral-polynomials]]).

[F5] An algebraic integer has a monic minimal polynomial in $\mathbb Z[X]$, and its degree equals the degree of the field it generates ([[cor-algebraic-integer-minimal-polynomial-criterion]]).

[F6] A primitive integer polynomial is reducible over $\mathbb Q$ exactly when it has a positive-degree integer factorization ([[thm-gauss-lemma-for-integer-polynomials]]).

[F7] A number field is a finite extension of $\mathbb Q$ ([[def-number-field]]).

[F8] The ring of integers of $\mathbb Q$ is $\mathbb Z$ ([[def-ring-of-integers-of-a-number-field]]), and the discriminant of the basis $1$ is the trace-Gram determinant ([[def-discriminant-of-a-number-field-basis-and-order]], [[def-field-norm-and-trace]]).

## Proof

1.1 Suppose $f$ is returned. Its degree is $n$ by the coefficient box. If $n=1$, the only output is $X$, which is irreducible. Now suppose $n\ge2$. If $f$ were reducible over $\mathbb Q$, [F6] would give an integer factorization; because the leading coefficient of $f$ is $1$, the two integer leading coefficients are each $\pm1$, and changing signs makes both factors monic. Choose a factor $g$ of degree $r$ with $1\le r\le n/2$. Put $C=\max_k|c_k|$ and $R=1+C$. For $|z|>R$, $$\left|\sum_{k=1}^n c_kz^{n-k}\right|\le C\frac{|z|^n-1}{|z|-1}<|z|^n,$$ so every root of $f$ has modulus at most $R$. The roots of $g$ are among those of $f$; expanding $g$ as their product bounds its coefficient at distance $j$ below its leading term by $\binom rjR^j$. The algorithm tests every such integer coefficient vector, so it would find $g$ and reject $f$, a contradiction. Thus $f$ is irreducible. By [F7], $\mathbb Q[X]/(f)$ is a number field of degree $n$. [F1, F6, F7, given, algebra]

1.2 First take $n\ge2$ and a number field $K$ with $[K:\mathbb Q]=n$ and $|d_K|\le B$. By [F3] and [A1], choose an integral primitive element $\alpha$ with all conjugates of modulus at most $R=\sqrt{B+2}$. Its minimal polynomial $f=X^n+c_1X^{n-1}+\cdots+c_n$ is monic with integer coefficients and degree $n$ by [F5]. [A1, F3, F5, given, choose]

1.3 If $n=1$, every number field of degree one is $\mathbb Q$ by its one-dimensional vector-space structure, and the algorithm returns $X$, whose quotient is $\mathbb Q$. Its ring of integers is $\mathbb Z$, with basis $1$; [F8] gives trace Gram determinant $\operatorname{Tr}_{\mathbb Q/\mathbb Q}(1)=1$, so its discriminant is $1\le B$. [F1, F7, F8, given, algebra]

2.1 The returned integral basis is correct by [F2]. Its exact trace-Gram determinant is therefore the field discriminant; the final filter accepted $f$ only when its absolute value is at most $B$. This proves soundness of every returned presentation. [F1, F2, step 1.1, algebra]

2.2 Write the roots of $f$ as $\alpha_1,\ldots,\alpha_n$, counted with multiplicity. Expanding $f=\prod_i(X-\alpha_i)$ shows that $c_k$ is a signed sum of $\binom nk$ products of $k$ roots. Each product has modulus at most $(B+2)^{k/2}$ by step 1.2, so $|c_k|\le\binom nk(B+2)^{k/2}$. Since $c_k$ is an integer, $|c_k|\le\lfloor\sqrt{\binom nk^2(B+2)^k}\rfloor=A_k$. Thus $f$ occurs in the algorithm's coefficient box. It is irreducible by definition of a minimal polynomial, so no factor test rejects it. [F5, step 1.2, algebra]

3.1 The integral-closure filter computes the exact maximal-order discriminant of $\mathbb Q[X]/(f)$ by [F2]. This quotient is $\mathbb Q$-isomorphic to $K$, so its absolute discriminant is $|d_K|\le B$ and the algorithm retains $f$. Thus every eligible degree-$n$ field class is represented when $n\ge2$. [F1, F2, step 1.2, step 2.2, algebra]

4.1 The algorithm has finite coefficient and factor boxes by [F1]; [F4] independently confirms that the bounded-root coefficient set used for factor checks is finite. For each candidate, all arithmetic is exact and the integral-closure subroutine terminates by [F2]. Hence the complete wrapper terminates. Its output is a list of polynomials, so isomorphic number fields may occur more than once; no uniqueness or deduplication was asserted. [F1, F2, F4, step 1.1, step 2.2, step 3.1, step 1.3, algebra] ∎
