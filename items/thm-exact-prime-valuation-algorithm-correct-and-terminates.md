---
id: thm-exact-prime-valuation-algorithm-correct-and-terminates
kind: theorem
title: "Correctness and termination of exact prime-ideal valuation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - alg-exact-prime-valuation-in-number-field-by-ideal-membership
  - cor-norm-of-a-prime-ideal
  - def-prime-ideal-valuations-on-fractional-ideals
  - thm-ideal-norm-is-multiplicative
  - thm-integral-closure-coset-search-correct
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-prime-ideal-decomposition-algorithm-correct
  - thm-principal-ideal-norm-is-absolute-field-norm
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

For every number field $K$, rational prime $p$, prime ideal $P\mid p$ supplied by the integral-basis prime-decomposition algorithm, and nonzero $\alpha=a/b\in K$ supplied with $a,b\in\mathcal O_K\setminus\{0\}$, the bounded ideal-power membership algorithm terminates and returns the exponent $v_P((\alpha))$ of $P$ in the principal fractional ideal $(\alpha)$.

## Statement references

[J. S. Milne, *Algebraic Number Theory*, Chapter 4, §§1–2](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

[William A. Stein, *Algebraic Number Theory: A Computational Approach*, Algorithms 4.3.7–4.3.9](https://wstein.org/books/ant/ant.pdf)

## Facts & Assumptions

**Given:** The algorithm input and exact current supplier bodies.

[F1] The integral-closure search returns the maximal order basis, and the prime-decomposition algorithm returns exactly the primes above $p$ with their bases. [[thm-integral-closure-coset-search-correct]] [[thm-prime-ideal-decomposition-algorithm-correct]]

[F2] Every nonzero integral ideal factors uniquely into prime ideals. [[thm-number-field-integral-ideal-factorisation-in-zf]]

[F3] The ideal-power scan is bounded by $v_p(N((z)))/f_P$ and tests exact lattice membership. [[alg-exact-prime-valuation-in-number-field-by-ideal-membership]]

[F4] The fractional-ideal valuation is additive under products and is the exponent in the unique prime-ideal factorization. [[def-prime-ideal-valuations-on-fractional-ideals]]

[F5] For $P\mid p$, $N(P)=p^{f_P}$, ideal norms are multiplicative, and $N((z))=|N_{K/\mathbb Q}(z)|$. [[cor-norm-of-a-prime-ideal]] [[thm-ideal-norm-is-multiplicative]] [[thm-principal-ideal-norm-is-absolute-field-norm]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F1], the supplied algorithms give the actual maximal order and prime ideal $P$, rather than a prime of a nonmaximal power order.[F1, given]

1.2 For each nonzero integral numerator or denominator $z$, unique factorization [F2] gives $(z)=P^{e_P(z)}I$ with $I$ not divisible by $P$. The membership test in [F3] succeeds exactly for exponents at most $e_P(z)$, and [F5] bounds $e_P(z)$ by the finite integer $\lfloor v_p(N((z)))/f_P\rfloor$. Hence the scan terminates and returns $e_P(z)$.[F2, F3, F5, step 1.1]

2.1 Since $(a/b)=(a)(b)^{-1}$, additivity of prime-ideal exponents [F4] gives $v_P((a/b))=e_P(a)-e_P(b)$. This is exactly the algorithm output, so it is correct and terminates.[F4, step 1.2, algebra] ∎