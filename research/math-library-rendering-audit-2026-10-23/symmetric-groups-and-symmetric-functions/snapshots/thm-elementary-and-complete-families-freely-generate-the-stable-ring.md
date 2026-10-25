---
id: thm-elementary-and-complete-families-freely-generate-the-stable-ring
kind: theorem
title: Elementary and complete families freely generate the stable ring
status: published
origin: pipeline
deps:
  - def-stable-graded-ring-of-symmetric-functions
  - def-partition-young-diagram-and-conjugate-partition
  - thm-monomial-symmetric-functions-form-the-integral-stable-basis
  - def-monomial-symmetric-polynomials
  - thm-monomial-symmetric-polynomials-form-a-basis
  - def-elementary-symmetric-polynomials
  - def-power-sum-and-complete-homogeneous-symmetric-polynomials
  - def-dominance-order-on-partitions
  - prop-elementary-and-complete-generating-series-identity
justified_by: []
landmark: false
proof_strategy: triangularity
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §§2–3
      url: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
    - title: Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics, §§9.4–9.5
      url: https://jeremymartinmath.github.io/CombinatoricsNotes.pdf
---

## Statement

For each $r\ge0$, let $e_r,h_r\in\Lambda^r$ be the stable sequences obtained
from the finite elementary and complete homogeneous symmetric polynomials
([[def-elementary-symmetric-polynomials]],
[[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]) by setting
each added variable to zero. Set $e_0=h_0=1$, and for a partition
$\lambda=(\lambda_1,\lambda_2,\ldots)$ write
$e_\lambda=\prod_i e_{\lambda_i}$ and $h_\lambda=\prod_i h_{\lambda_i}$.
Then
$$\Lambda=\mathbb Z[e_1,e_2,\ldots]=\mathbb Z[h_1,h_2,\ldots],$$
each family of generators is algebraically independent over $\mathbb Z$, and
for every $d\ge0$ the families $\{e_\lambda:\lambda\vdash d\}$ and
$\{h_\lambda:\lambda\vdash d\}$ are $\mathbb Z$-bases of $\Lambda^d$.

## Facts & Assumptions

**Given:** The degreewise stable ring, its monomial basis, and the finite-rank elementary, complete, dominance, and generating-series conventions.

[F1] Multiplication of degree-$a$ and degree-$b$ sequences is coordinatewise and lies in $\Lambda^{a+b}$; elements of $\Lambda$ have finite degree support ([[def-stable-graded-ring-of-symmetric-functions]]).

[F2] For $d\ge0$ and each partition $\lambda\vdash d$, the stable orbit sum $m_\lambda\in\Lambda^d$ projects to the finite orbit sum $m_\lambda(x_1,\ldots,x_N)$ when $\ell(\lambda)\le N$, and the family indexed by $\lambda\vdash d$ is a $\mathbb Z$-basis of $\Lambda^d$ ([[thm-monomial-symmetric-functions-form-the-integral-stable-basis]]).

[F10] For $N\ge d$, each stable orbit sum $m_\mu$ projects to the corresponding rank-$N$ orbit sum ([[thm-monomial-symmetric-functions-form-the-integral-stable-basis]]).

[F3] Conjugation sends a partition $\lambda$ to a partition $\lambda'$ of the same integer, and $\lambda\mapsto\lambda'$ is an involution ([[def-partition-young-diagram-and-conjugate-partition]]).

[F4] In finite rank, $e_k(x_1,\ldots,x_N)$ is the sum of the squarefree monomials indexed by the $k$-element subsets of $\{1,\ldots,N\}$, with $e_0=1$ ([[def-elementary-symmetric-polynomials]]).

[F5] In finite rank, $h_k$ is the sum of all monomials $x_1^{a_1}\cdots x_N^{a_N}$ with $a_1+\cdots+a_N=k$, and $h_0=1$ ([[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]).

[F6] The dominance relation $\lambda\unrhd\mu$ means $\sum_{i=1}^r\lambda_i\ge\sum_{i=1}^r\mu_i$ for every $r\ge1$ ([[def-dominance-order-on-partitions]]).

[F7] In each finite rank, the generating series satisfy $E(-t)H(t)=1$ ([[prop-elementary-and-complete-generating-series-identity]]).

[F8] At rank $N$, $m_\lambda$ is the sum of the distinct monomials whose exponent tuples lie in the variable-permutation orbit of $\lambda$ ([[def-monomial-symmetric-polynomials]]).

[F9] At rank $N$, the polynomials $m_\lambda$ indexed by partitions of length at most $N$ form a $\mathbb Z$-basis of the symmetric polynomials ([[thm-monomial-symmetric-polynomials-form-a-basis]]).

## Proof

**Proof technique:** triangularity.

1.1 For each fixed $r$, specializing an added variable to zero sends the finite $e_r$ and $h_r$ to their lower-rank polynomials: terms involving that variable vanish, and the remaining subset or exponent tuples are unchanged. They therefore define homogeneous compatible sequences in $\Lambda^r$ by [F1], [F4], and [F5]. [F1, F4, F5]

1.2 Fix $\lambda\vdash d$ and a rank $N\ge d$. In expanding $e_{\lambda'}=\prod_j e_{\lambda'_j}$, regard each factor as a column of height $\lambda'_j$ and record the distinct variable labels selected by [F4]. For any resulting monomial, relabel variables so its exponents are weakly decreasing and call that exponent partition $\mu$. Among the first $r$ variable labels each column contributes at most $\min(r,\lambda'_j)$ occurrences. Hence $$\sum_{i=1}^r\mu_i\le\sum_j\min(r,\lambda'_j)=\sum_{i=1}^r\lambda_i,$$ so $\lambda\unrhd\mu$ by [F3] and [F6]. Since the factors are symmetric, relabeling does not change the coefficient of the orbit sum. [F3, F4, F6]

2.1 Fix $n\ge1$. At every finite rank $N\ge0$, the coefficient of $t^n$ in [F7] gives the recurrence among the rank-$N$ components of $e_i$ and $h_{n-i}$. By [F1], [F4], [F5], and step 1.1, these are the rank-$N$ projections of the corresponding stable products. Since the recurrence holds at every rank, it is the zero sequence in $\Lambda^n$; the constant coefficient is $e_0h_0=1$. Thus $E(-t)H(t)=1$ coefficientwise in the stable ring. [F1, F4, F5, F7, step 1.1]

2.2 Consider the monomial $x_1^{\lambda_1}x_2^{\lambda_2}\cdots$ in rank $N\ge d$. Its first-$r$ exponent sum is $\sum_{i=1}^r\lambda_i=\sum_j\min(r,\lambda'_j)$ for each $r$. In a selection contributing this monomial, each column contributes at most $\min(r,\lambda'_j)$ to that prefix, so equality of the total forces equality in every column for every $r$. A column of height $h$ must therefore select precisely labels $1,\ldots,h$; this is one selection. Hence the coefficient of the monomial, and therefore of the orbit sum $m_\lambda$, in $e_{\lambda'}$ is one. [F3, F4, F6, step 1.2]

3.1 Fix $d>0$ and project to rank $N=d$. By [F10], each stable basis element $m_\mu$ projects to the rank-$d$ orbit sum; [F8] identifies its distinct monomial terms, and [F9] says these projections form a $\mathbb Z$-basis. Thus the projection identifies stable and finite monomial coefficients. The rank-$d$ expansion of each $e_{\lambda'}$ therefore gives the stable transition matrix. Its entries are integers, vanish unless $\lambda\unrhd\mu$ by step 1.2, and have diagonal entries one by step 2.2. Ordering the finite dominance poset by a linear extension makes this matrix unitriangular, hence invertible over $\mathbb Z$. The degree $d=0$ case is the single basis element $e_\varnothing=m_\varnothing=1$. By [F2], the $m_\mu$ are an integral basis; by the conjugation bijection [F3], the products $e_\kappa$ are also an integral basis. [F2, F3, F6, F8, F9, F10, step 1.2, step 2.2]

4.1 Give a variable $E_r$ weight $r$. The degree-$d$ monomials in the polynomial ring $\mathbb Z[E_1,E_2,\ldots]$ are exactly $E_\lambda$ for $\lambda\vdash d$. Sending $E_r$ to $e_r$ sends these degree-$d$ monomials to the basis $e_\lambda$ from step 3.1, so the map is bijective in every degree. Since every polynomial and every element of $\Lambda$ has finite degree support by [F1], it is an isomorphism of graded rings. Thus the $e_r$ freely generate $\Lambda$. [F1, step 3.1]

5.1 Because the $e_r$ freely generate $\Lambda$ by step 4.1, the assignment $\omega(e_r)=h_r$ extends to a graded ring homomorphism. The coefficient recurrence in step 2.1 and the same identity with $t$ replaced by $-t$ give, for each $n\ge1$, $h_n-e_1h_{n-1}+e_2h_{n-2}-\cdots+(-1)^ne_n=0$ and $e_n-h_1e_{n-1}+h_2e_{n-2}-\cdots+(-1)^nh_n=0$. Apply $\omega$ to the first recurrence and induct on $n$, starting from $\omega(h_0)=1=e_0$. If $\omega(h_j)=e_j$ for $j<n$, the resulting equation and the second recurrence have identical terms except for $\omega(h_n)$ and $e_n$, so $\omega(h_n)=e_n$. Hence $\omega^2$ fixes each generator $e_n$, and so $\omega$ is an automorphism. It carries the basis $e_\lambda$ from step 3.1 to $h_\lambda$, proving that the $h_\lambda$ form an integral basis and that the $h_r$ are algebraically independent. [step 2.1, step 3.1, step 4.1] ∎
