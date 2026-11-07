---
id: alg-exact-prime-valuation-in-number-field-by-ideal-membership
kind: algorithm
title: "Exact prime-ideal valuation by bounded ideal-power membership"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - cor-norm-of-a-prime-ideal
  - def-absolute-norm-of-an-ideal
  - def-field-norm-and-trace
  - def-p-adic-valuation
  - def-prime-above-and-residue-degree
  - def-prime-ideal-valuations-on-fractional-ideals
  - def-product-and-colon-of-fractional-ideals
  - lem-bounded-coset-search-for-integer-lattice-membership
  - lem-matrix-rank-detected-by-nonzero-minors
  - lem-nonzero-number-field-ideal-has-finite-quotient
  - thm-ideal-norm-is-multiplicative
  - thm-integral-closure-coset-search-correct
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-prime-ideal-decomposition-algorithm-correct
  - thm-principal-ideal-norm-is-absolute-field-norm
  - thm-ring-of-integers-free-of-rank-degree
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Chapter 4, ideal norms and factorization"
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "Algorithms 4.3.7–4.3.9, pp. 57–59"
verification: {}
---

## Statement

Given a number field with an explicit integral basis and exact multiplication table, a rational prime $p$, a prime ideal $P\mid p$ with an exact basis, and a nonzero fraction $\alpha=a/b$ with integral numerator and denominator, the algorithm described below terminates and returns the exponent of $P$ in the principal fractional ideal $(\alpha)$.

## Statement references

[J. S. Milne, *Algebraic Number Theory*, Chapter 4, §§1–2](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

[William A. Stein, *Algebraic Number Theory: A Computational Approach*, Algorithms 4.3.7–4.3.9](https://wstein.org/books/ant/ant.pdf)

## Algorithm

Input a number field $K$ of degree $d$ with an explicit integral basis $\omega_1,\ldots,\omega_d$ and exact multiplication table, a rational prime $p$, a prime ideal $P\mid p$ given by a $\mathbb Z$-basis $\beta_1,\ldots,\beta_d$, and a nonzero fraction $\alpha=a/b$ with $a,b\in\mathcal O_K\setminus\{0\}$. For $z\in\{a,b\}$, compute the positive integer $N_z=|N_{K/\mathbb Q}(z)|$ as the absolute determinant of its multiplication matrix, compute the residue degree $f=[\mathcal O_K/P:\mathbb F_p]$, and set $B_z=\lfloor v_p(N_z)/f\rfloor$. For each $e=1,\ldots,B_z$, form the integer matrix whose columns are the coordinates in the integral basis of all products $\beta_{i_1}\cdots\beta_{i_e}$, with $1\le i_1,\ldots,i_e\le d$. These columns generate the $\mathbb Z$-lattice $P^e$. Select the first lexicographic set of $d$ columns with nonzero determinant, and decide $z\in P^e$ by the finite residue search in the lattice-membership lemma. Return $r_P(z)$ equal to the largest tested $e$ with $z\in P^e$, or $0$ if no positive $e$ passes. The algorithm returns
$$v_P(\alpha)=r_P(a)-r_P(b).$$
Here $v_P((\alpha))$ is the fractional-ideal valuation defined by the exponent of $P$ in the factorization of the principal fractional ideal.

## Algorithm references

[J. S. Milne, *Algebraic Number Theory*, Chapter 4, §§1–2](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

[William A. Stein, *Algebraic Number Theory: A Computational Approach*, Algorithms 4.3.7–4.3.9](https://wstein.org/books/ant/ant.pdf)

## Facts & Assumptions

**Given:** An explicit maximal order, its integral basis and multiplication table, a rational prime $p$, a prime $P\mid p$, and a nonzero fraction $a/b$ with integral numerator and denominator.

[F1] The integral-closure algorithm returns an integral basis of the maximal order, and the prime-decomposition algorithm returns exactly the prime ideals above $p$ with their bases. [[thm-integral-closure-coset-search-correct]] [[thm-prime-ideal-decomposition-algorithm-correct]]

[F2] Every nonzero integral ideal has a unique finite prime-ideal factorization. [[thm-number-field-integral-ideal-factorisation-in-zf]]

[F3] For a prime ideal $P\mid p$, its norm is $p^f$ for the positive residue degree $f$. [[cor-norm-of-a-prime-ideal]] [[def-prime-above-and-residue-degree]]

[F4] The absolute ideal norm is quotient cardinality, is multiplicative, and for $(z)$ equals $|N_{K/\mathbb Q}(z)|$. [[def-absolute-norm-of-an-ideal]] [[thm-ideal-norm-is-multiplicative]] [[thm-principal-ideal-norm-is-absolute-field-norm]]

[F5] $v_p(N_z)$ is the exponent of $p$ in the nonzero integer $N_z$. [[def-p-adic-valuation]]

[F6] $v_P((a/b))=v_P((a))-v_P((b))$ for nonzero integral $a,b$. [[def-prime-ideal-valuations-on-fractional-ideals]]

[F7] Every nonzero integral ideal has finite index in the free rank-$d$ additive group $\mathcal O_K$, so its integer-coordinate lattice has full row rank. [[lem-nonzero-number-field-ideal-has-finite-quotient]] [[thm-ring-of-integers-free-of-rank-degree]]

[F8] A real matrix has row rank $d$ exactly when some $d$-rowed minor is nonzero. [[lem-matrix-rank-detected-by-nonzero-minors]]

[F9] The bounded finite-residue test decides membership in a full-rank integer column lattice using exact rational arithmetic. [[lem-bounded-coset-search-for-integer-lattice-membership]]

[F10] The product of fractional ideals is generated by finite sums of products of their elements. [[def-product-and-colon-of-fractional-ideals]]

[F11] The field norm is the determinant of multiplication by the element on the number-field vector space. [[def-field-norm-and-trace]]

## Verification

**Given:** The inputs in the Algorithm.

1.1 For nonzero integral $z$, [F2] writes $(z)=\prod_Q Q^{e_Q}$ uniquely. If $z\in P^e$, then $(z)\subseteq P^e$, so $e\le e_P$; conversely the prime factorization shows $z\in P^e$ for every $e\le e_P$. Thus the successful membership exponents are exactly $0,1,\ldots,e_P$.[F2, given, algebra]

1.2 By [F11] and [F4], $N((z))=N_z$. From [F3]–[F4], the rational prime exponent in $N((z))$ is
$$v_p(N((z)))=\sum_{Q\mid p} f_Qe_Q,$$
so $e_P\le\lfloor v_p(N((z)))/f_P\rfloor=B_z$. Every membership test up to this bound is therefore finite and the last successful test returns exactly $e_P$.[F2, F3, F4, F5, F11, step 1.1, algebra]

2.1 By repeated use of the ideal-product definition [F10], every element of $P^e$ is a finite sum of products of $e$ elements of $P$. Expanding each factor in the given $\mathbb Z$-basis $\beta_1,\ldots,\beta_d$ and distributing shows that the products $\beta_{i_1}\cdots\beta_{i_e}$ generate $P^e$ as a $\mathbb Z$-lattice. By [F7] this lattice has full row rank; [F8] gives a nonzero $d$-column determinant, so a finite lexicographic scan finds the first such block. By [F9], each bounded residue search decides exactly whether $z\in P^e$. The norm bound proved in step 1.2 makes every scan finite. The output difference is the fractional-ideal valuation by [F6]. No choice principle is used because the input bases are explicit and every search is finite.[F6, F7, F8, F9, F10, step 1.2, algebra] ∎