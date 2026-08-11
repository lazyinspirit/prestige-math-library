---
id: thm-eisenstein-irreducibility-criterion
kind: theorem
title: 'Eisenstein criterion over the integers'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-gauss-lemma-for-integer-polynomials, thm-polynomial-ring-over-a-field-is-a-ufd, thm-universal-property-of-a-polynomial-ring, prop-integers-modulo-n-as-a-quotient-ring, def-prime, thm-z-mod-p-is-a-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Thomas W. Judson, Abstract Algebra: Theory and Applications, Theorem 17.17'
      url: 'https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials'
    - title: 'Keith Conrad, Irreducibility Tests in Q[T], Appendix A.4'
      url: 'https://kconrad.math.uconn.edu/blurbs/ringtheory/irredtestsoverQ.pdf'
pipeline_run: null
---

## Statement

Let $f=a_nx^n+\cdots+a_0\in\mathbb Z[x]$ be primitive with $n\ge1$. If there is a prime $p$ such that

$$ p\nmid a_n,\qquad p\mid a_i\ \text{for every }i<n,\qquad p^2\nmid a_0, $$

then $f$ is irreducible in $\mathbb Q[x]$.

## Facts & Assumptions

**Given:** A primitive polynomial $f=a_nx^n+\cdots+a_0$ and a prime $p$ satisfying the displayed divisibility conditions.

[L1] A rational factorization of a primitive integer polynomial clears to a primitive integer factorization ([[thm-gauss-lemma-for-integer-polynomials]]).

[L2] Polynomial rings over fields are unique factorisation domains, hence domains ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

[L3] Reduction of coefficients modulo $p$ is a polynomial-ring homomorphism ([[thm-universal-property-of-a-polynomial-ring]]).

[L4] The ring $\mathbb Z/p$ is the quotient $\mathbb Z/p\mathbb Z$ ([[prop-integers-modulo-n-as-a-quotient-ring]]).

[L5] A prime $p$ is greater than $1$ and its only positive divisors are $1,p$ ([[def-prime]]).

[L6] The ring $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose for contradiction that $f$ is reducible over $\mathbb Q$; [L1] gives $f=GH$ with primitive integer polynomials $G,H$ of positive degree. [assume-contra, given, L1]

2.1 By [L3] and [L4], reduction modulo $p$ gives $\bar G\bar H=\bar a_nx^n$ in the domain $(\mathbb Z/p)[x]$ of [L6] and [L2]. Because $p\nmid a_n$, the leading coefficients of $G$ and $H$ both survive reduction: their product is $a_n$, so neither is divisible by $p$. Thus $\deg\bar G=\deg G>0$ and $\deg\bar H=\deg H>0$. Comparing the least nonzero terms in the product $\bar a_nx^n$ now shows that both reductions are monomials of positive degree, so the constant coefficients of $G$ and $H$ are divisible by $p$. [step 1.1, L2, L3, L4, L5, L6, algebra]

3.1 The constant coefficient $a_0$ is the product of those two constant coefficients, so step 2.1 gives $p^2\mid a_0$, contradicting the hypothesis; hence $f$ is irreducible over $\mathbb Q$. [step 2.1, L5, discharge-contradiction] ∎
