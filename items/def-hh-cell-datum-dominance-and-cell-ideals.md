---
id: def-hh-cell-datum-dominance-and-cell-ideals
kind: definition
title: "Cell data, multipartition dominance, and higher-cell ideals"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 0
deps:
  - def-algebra-over-a-commutative-ring
  - def-hh-multipartitions-standard-tableaux-and-generic-contents
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete author-uploaded preliminary lecture manuscript (1998)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
    - title: "Richard Dipper, Gordon James, and Andrew Mathas, Cyclotomic q-Schur algebras, Mathematische Zeitschrift 229 (1998), 385–416"
      url: "https://pnp.mathematik.uni-stuttgart.de/iaz/iaz1/Dipper/papers/cyclo.ps"
---

## Definition

Let $R$ be a commutative ring and let $A$ be a unital associative $R$-algebra. A **cell datum** for $A$ consists of a finite poset $(\Lambda,\ge)$, finite sets $T(\lambda)$ for $\lambda\in\Lambda$, an $R$-basis $\{C^\lambda_{s,t}:\lambda\in\Lambda,\ s,t\in T(\lambda)\}$ of $A$, and an $R$-linear involutive algebra anti-automorphism $*$ satisfying $({C^\lambda_{s,t}})^*=C^\lambda_{t,s}$ and the following coefficient-independence axiom: for every $\lambda\in\Lambda$, $s,t\in T(\lambda)$, and $a\in A$, there are coefficients $r^\lambda_{t,v}(a)\in R$, independent of $s$, such that
$$C^\lambda_{s,t}a\equiv\sum_{v\in T(\lambda)}r^\lambda_{t,v}(a)C^\lambda_{s,v}\pmod{A^{>\lambda}},$$
where $A^{>\lambda}$ is the $R$-span of basis elements $C^\mu_{u,v}$ with $\mu>\lambda$. Write $A^{\ge\lambda}$ for the span with $\mu\ge\lambda$.

For multipartitions $\lambda,\mu$ of $n$ with $r$ ordered components, write $\lambda\unrhd\mu$ if for every component $1\le c\le r$ and row cutoff $j\ge0$,
$$\sum_{d<c}|\lambda^{(d)}|+\sum_{i=1}^{j}\lambda_i^{(c)} \ \ge\ \sum_{d<c}|\mu^{(d)}|+\sum_{i=1}^{j}\mu_i^{(c)},$$
with missing rows padded by zero. Write $\lambda\triangleright\mu$ when $\lambda\unrhd\mu$ and $\lambda\ne\mu$. The **row-standard initial multitableau** $t^\lambda$ fills component $1$ row by row, then component $2$ row by row, and so on, using $1,\ldots,n$ in order.

## Facts & Assumptions

**Given:** A commutative ring $R$, a unital associative $R$-algebra $A$, and the finite multipartition data described in the Definition.

[F1] An $R$-algebra has a unital ring structure with a central structural image of $R$. ([[def-algebra-over-a-commutative-ring]])

[F2] An $r$-multipartition is an $r$-tuple of partitions of total size $n$, and its standard multitableaux are the linear extensions of the componentwise box poset. ([[def-hh-multipartitions-standard-tableaux-and-generic-contents]])

## Verification

**Proof technique:** direct.

1.1 The dominance inequalities are reflexive and transitive. If they hold in both directions, all displayed cumulative sums are equal; subtracting successive row cutoffs and then successive component prefixes recovers every row length in every component, so $\lambda=\mu$. Thus $\unrhd$ is a partial order. The tableau $t^\lambda$ is standard: its entries increase left to right by construction, and every box in an earlier row or earlier component is filled before every box in a later row or component, so each column also increases top to bottom. [given, F2, algebra]

2.1 Fix $\lambda$. If $\mu>\lambda$, the cell axiom applied to $C^\mu_{u,v}a$ puts it in the span of the shape-$\mu$ basis elements plus $A^{>\mu}$. Every shape in that expression is strictly above $\lambda$ by transitivity; hence $A^{>\lambda}$ is a right ideal. Since $*$ preserves each shape and $A^{>\lambda}$, $a x=(x^*a^*)^*$ lies in $A^{>\lambda}$ whenever $x$ does, so it is also a left ideal. The same argument with $\mu\ge\lambda$ proves that $A^{\ge\lambda}$ is a two-sided ideal. [given, F1, step 1.1, algebra]

3.1 The given basis of $A^{\ge\lambda}$ is the disjoint union of the shape-$\lambda$ basis and the basis of $A^{>\lambda}$. Linear independence therefore makes the classes of $C^\lambda_{s,t}$ a basis of the quotient $A^{\ge\lambda}/A^{>\lambda}$. No choice is needed because the poset and every indexing set are finite. [given, step 2.1] ∎
