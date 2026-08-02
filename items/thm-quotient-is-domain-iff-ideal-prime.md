---
id: thm-quotient-is-domain-iff-ideal-prime
kind: theorem
title: '$R/P$ is an integral domain if and only if $P$ is a prime ideal'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prime-and-maximal-ideals, thm-quotient-ring-laws, def-zero-divisor-and-integral-domain, prop-canonical-quotient-ring-map]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Ernst, An Inquiry-Based Approach to Abstract Algebra, Maximal and Prime Ideals"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/08%3A_An_Introduction_to_Rings/8.04%3A_Maximal_and_Prime_Ideals"
pipeline_run: null
---

## Statement

$R/P$ is an integral domain if and only if $P$ is a prime ideal.

Here $R$ is commutative and $P\mathrel{\trianglelefteq}R$ is an ideal.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a two-sided ideal $P\mathrel{\trianglelefteq}R$.

[L1] A prime ideal is proper and satisfies $ab\in P\Rightarrow a\in P$ or $b\in P$ ([[def-prime-and-maximal-ideals]]).

[L2] Products in $R/P$ are $(a+P)(b+P)=ab+P$ ([[thm-quotient-ring-laws]]).

[L3] An integral domain is a nonzero commutative ring without zero divisors ([[def-zero-divisor-and-integral-domain]]).

[L4] The canonical projection $R\to R/P$ has kernel $P$; equivalently, $a+P=0+P$ exactly when $a\in P$ ([[prop-canonical-quotient-ring-map]]).

## Proof

**Proof technique:** direct.

1.1 If $P$ is prime, then $P$ is proper, so $1+P\ne0+P$ by [L4]; and $(a+P)(b+P)=0+P$ gives $ab\in P$, hence $a+P=0+P$ or $b+P=0+P$, while commutativity of $R$ makes the quotient commutative. [L1, L2, L3, L4, given, algebra]

2.1 If $R/P$ is a domain and $ab\in P$, then $(a+P)(b+P)=0+P$, so [L3] and [L4] give $a\in P$ or $b\in P$; its nonzero identity gives $1\notin P$, hence $P\subsetneq R$. [step 1.1, L1, L2, L3, L4, given, algebra]

3.1 These implications prove the equivalence. [step 2.1] ∎
