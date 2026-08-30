---
id: thm-dirichlet-convolution-commutative-ring
kind: theorem
title: "Arithmetic functions form a commutative ring under pointwise addition and Dirichlet convolution"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dirichlet-convolution, def-dirichlet-convolution-identity, def-finite-sum-in-a-commutative-monoid, lem-finite-sum-reindexing-and-fubini, thm-complex-numbers-form-a-field]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive, Section 23.4"
      url: "https://math.gordon.edu/ntic/ntic2020/section-gen-moebius.html"
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Section 2.9"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal A$ be the set of arithmetic functions. With pointwise addition

$$
(f+g)(n):=f(n)+g(n)
$$

and Dirichlet convolution [[def-dirichlet-convolution]], $\mathcal A$ is a
commutative ring. Its additive identity is the zero function $0(n)=0$, its
additive inverse is $(-f)(n)=-f(n)$, and its multiplicative identity is
$\varepsilon$ of [[def-dirichlet-convolution-identity]].

## Facts & Assumptions

**Given:** Arithmetic functions $f,g,h$ and a positive integer $n$.

## Proof

**Proof technique:** direct.

1.1 Because $\mathbb C$ is a field by [[thm-complex-numbers-form-a-field]], the pointwise formulas for $f+g$, $0$, and $-f$ define arithmetic functions and satisfy the abelian-group laws at each positive integer. The convolution $f*g$ is also an arithmetic function by [[def-dirichlet-convolution]]. [given]

1.2 For convolution commutativity, $(f*g)(n)=\sum_{d\mid n} f(d)g(n/d)=\sum_{d\mid n} f(n/d)g(d)=(g*f)(n)$, where the middle equality reindexes the finite divisor sum by the involution $d\mapsto n/d$ using [[lem-finite-sum-reindexing-and-fubini]]. [given, algebra]

1.3 For associativity, expand both sides and rewrite them as the same finite sum over ordered factorizations $abc=n$: $(f*(g*h))(n)=\sum_{abc=n} f(a)g(b)h(c)=((f*g)*h)(n)$. The passage from nested divisor sums to the triple sum uses the finite Fubini and reindexing rules of [[lem-finite-sum-reindexing-and-fubini]]. [given, construct]

1.4 Distributivity follows by expanding a finite divisor sum termwise in $\mathbb C$. For the identity, only the divisor $d=n$ contributes in $(f*\varepsilon)(n)$ and only $d=1$ contributes in $(\varepsilon*f)(n)$, because [[def-dirichlet-convolution-identity]] makes $\varepsilon(m)=0$ for $m>1$. Thus $(f*\varepsilon)(n)=f(n)=(\varepsilon*f)(n)$. [given, algebra]

2.1 Steps 1.1, 1.2, 1.3, and 1.4 give all ring axioms, and step 1.2 also shows the multiplication is commutative. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
