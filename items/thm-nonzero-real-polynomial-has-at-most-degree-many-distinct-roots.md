---
id: thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
kind: theorem
title: "A nonzero real polynomial of degree $n$ has no more than $n$ distinct real roots"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-polynomial-degree-leading-coefficient-and-monic, lem-real-polynomial-factor-at-a-root, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  repair: research/numerical-optimization-dynamics-2026-10-16-owner-step2-published-reapplication-ROOT-1035/thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots.repair.json
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 4"
      url: "https://dlmf.nist.gov/4"
pipeline_run: null
---

## Statement

A nonzero real polynomial of degree $n$ has at most $n$ distinct real roots. The conventions and prerequisite facts used below are recorded in [[def-real-polynomial-degree-leading-coefficient-and-monic]], [[lem-real-polynomial-factor-at-a-root]], [[thm-induction-principle]].

## Facts & Assumptions

**Given:** A nonzero real polynomial of degree $n$.

## Proof

**Proof technique:** induction.

1.1 At degree $0$ the polynomial is a nonzero constant and has no root. [base]

1.2 Assume the claim at degree $n$. [ih]

1.3 If a degree-$n+1$ polynomial has no root, its root count is already zero. Otherwise choose a root $a$ and write its actual coefficient list as $(c_0,\ldots,c_{n+1})$, with $c_{n+1}\ne0$. Use the explicit quotient construction in [[lem-real-polynomial-factor-at-a-root]]: its coefficient at $X^d$ is $\sum_{k=d+1}^{n+1}c_k a^{k-1-d}$ for $0\le d\le n$. The coefficient at $X^n$ is $c_{n+1}\ne0$, and there are no higher terms, so this particular formal quotient $q$ has degree exactly $n$. For any other root $b\ne a$, $0=p(b)=(b-a)q(b)$ and division by the nonzero real $b-a$ gives $q(b)=0$. [given, construct, algebra]

2.1 In the root case, the induction hypothesis in step 1.2 applied to the degree-$n$ quotient from step 1.3 gives at most $n$ distinct roots other than $a$, hence at most $n+1$ roots in all. The no-root case already satisfies the same bound. Induction proves the assertion at every degree. [step 1.1, step 1.2, step 1.3, discharge-induction] ∎
