---
id: thm-nilpotent-jordan-string-basis
kind: theorem
title: "Every finite-dimensional nilpotent endomorphism has a basis of Jordan strings"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nilpotent-endomorphism, lem-independent-initial-vectors-give-independent-jordan-strings, thm-rank-nullity, thm-dimension-of-a-linear-subspace]
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "S. Treil, Linear Algebra Done Wrong, Chapter 9, Theorem 4.2"
      url: "https://www.math.brown.edu/streil/papers/LADW/LADW_2017-09-04.pdf"
pipeline_run: null
---

## Statement

Every nilpotent endomorphism $N$ of a finite-dimensional vector space $V$ has an ordered basis that is the concatenation of Jordan strings for $N$ at $0$. For $V=0$, this is the empty basis and the empty family of strings.

## Facts & Assumptions

**Given:** A nilpotent endomorphism $N$ of a finite-dimensional vector space $V$.

[L1] Jordan strings with linearly independent initial vectors have linearly independent union ([[lem-independent-initial-vectors-give-independent-jordan-strings]]).

[L2] Rank-nullity gives $\dim V=\dim\ker N+\dim\operatorname{im}N$ ([[thm-rank-nullity]]).

[L3] In a finite-dimensional vector space, every linearly independent subset extends to a basis without a choice principle; a subspace of the same dimension as the whole space equals it ([[thm-dimension-of-a-linear-subspace]]).

## Proof

**Proof technique:** induction on $\dim\operatorname{im}N$.

1.1 If $\operatorname{im}N=0$, extend the empty independent set to a basis of $V$ by [L3]; every basis vector is then a length-one Jordan string. This includes $V=0$. [base, L3]

1.2 Put $W=\operatorname{im}N$. If $W\ne0$, its restriction $N|_W$ is nilpotent and $\dim\operatorname{im}(N|_W)<\dim W$: equality would make the restriction surjective, hence all its powers surjective, contradicting nilpotence on nonzero $W$. The induction hypothesis therefore gives a Jordan-string basis $(w_{i,1},\ldots,w_{i,m_i})$ of $W$. [ih, algebra]

2.1 For every $i$, choose $v_{i,m_i+1}\in V$ with $Nv_{i,m_i+1}=w_{i,m_i}$; adjoining it extends the $i$th string by one. The vectors $w_{i,1}$ form a basis of $\ker N\cap W$, because in the Jordan-string basis of $W$ the kernel of $N|_W$ consists exactly of the initial-vector combinations. [step 1.2, choose, algebra]

3.1 Use the finite-dimensional extension clause [L3] to extend the independent family $(w_{i,1})$ to a basis of $\ker N$; regard each added vector as a length-one string. The initial vectors of all resulting strings are independent, so [L1] makes their union independent. [step 2.1, L1, L3]

4.1 The union has $\dim W$ vectors inherited from the strings in $W$, one lift for each old string, and $\dim\ker N$ minus that same number of added kernel vectors; hence it has $\dim W+\dim\ker N=\dim V$ vectors by [L2]. Its span therefore has dimension $\dim V$, so [L3] makes it all of $V$. [step 3.1, L2, L3]

5.1 Thus the union is a basis of Jordan strings, completing the induction. [step 1.1, step 1.2, step 4.1, discharge-induction] ∎
