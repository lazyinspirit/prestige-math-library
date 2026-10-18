---
id: lem-it-type-class-cardinality-bounds
kind: lemma
title: "Polynomially sharp bounds for type-class cardinality"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-it-empirical-type-and-type-class, lem-it-number-of-n-types-polynomial-bound, def-qa-35-finite-probability-entropy-and-stochastic-matrices, def-it-finite-alphabet-product-law, lem-it-finite-product-law-is-iid]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the multinomial-mode argument concerns one finite distribution."
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author-hosted book draft"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
      locator: "Proposition 1.5 (Method of types), printed pp. 15–16 / author PDF pp. 15–16"
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition, Chapter 11"
      url: "https://sgfin.github.io/files/notes/Cover_and_Thomas_ch11_info_and_stats.pdf"
      locator: "Theorem 11.1.3, printed pp. 350–352 (complete Chapter 11 PDF pp. 3–5)"
---

## Statement

Let $\mathcal A$ be a finite alphabet of size $k\ge1$, let $n\ge1$, and let $q\in\mathcal P_n(\mathcal A)$. With natural logarithms,
$$(n+1)^{-(k-1)}e^{nH(q)}\le |T_q|\le e^{nH(q)}.$$

## Facts & Assumptions

**Given:** The finite alphabet $\mathcal A$, the positive integer $n$, an attainable type $q$, and the finite entropy convention.

[F1] [[def-it-empirical-type-and-type-class]]: $\mathcal P_n(\mathcal A)$ consists of attainable empirical vectors, and $T_q$ is the fiber of type $q$.

[F2] [[lem-it-number-of-n-types-polynomial-bound]]: the type classes partition $\mathcal A^n$, and there are at most $(n+1)^{k-1}$ of them.

[F3] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(q)=-\sum_{a:q(a)>0}q(a)\ln q(a)$, omitting zero coordinates.

[F4] [[lem-it-finite-product-law-is-iid]]: for any probability vector $q$, $q^{\otimes n}$ is a probability law whose word mass is $\prod_iq(x_i)$.

## Proof

1.1 Put $m_a=nq(a)$. The class $T_q$ consists of the arrangements of $m_a$ copies of each $a$, so it has $n!/\prod_a m_a!$ words: there are $n!$ position orders before dividing by the $m_a!$ permutations of identical copies for each letter. Under $q^{\otimes n}$ each word has mass $\prod_{a:m_a>0}q(a)^{m_a}=e^{-nH(q)}$ by [F3, F4]. [F1, F3, F4, algebra]

1.2 For any nonnegative integer count vector $r=(r_a)$ summing to $n$, its class has $n!/\prod_a r_a!$ arrangements, obtained by permuting $n$ labeled copies and dividing by the $r_a!$ permutations of identical letters; each word has product mass $\prod_{a:r_a>0}q(a)^{r_a}$ by [F4]. Thus its multinomial probability is $\frac{n!}{\prod_a r_a!}\prod_{a:r_a>0}q(a)^{r_a}$. It is zero if $r_a>0$ where $m_a=0$. Otherwise its ratio to the positive probability of count vector $m$ is $\prod_{a:m_a>0}\frac{m_a!}{r_a!}m_a^{r_a-m_a}$, since the powers of $n$ cancel using $\sum_a(r_a-m_a)=0$. For $r_a>m_a$ the factor is $\prod_{j=m_a+1}^{r_a}m_a/j\le1$; for $0\le r_a<m_a$ it is $\prod_{j=r_a+1}^{m_a}j/m_a\le1$; for equality it is $1$. Hence $m$ is a mode. [F1, F3, F4, algebra]

2.1 Since $q^{\otimes n}$ is a probability law by [F4], $q^{\otimes n}(T_q)=|T_q|e^{-nH(q)}\le1$ by step 1.1. Rearranging gives $|T_q|\le e^{nH(q)}$. [F1, F3, F4, step 1.1, algebra]

2.2 The count-vector events are exactly the type classes in [F1], so they partition the sample space under the probability law $q^{\otimes n}$ from [F4]. By [F2] there are at most $(n+1)^{k-1}$ such vectors. Since $m$ is modal by step 1.2, its class has probability at least the average of the class probabilities, so $q^{\otimes n}(T_q)\ge(n+1)^{-(k-1)}$. [F1, F2, F4, step 1.2, algebra]

3.1 Step 1.1 gives $q^{\otimes n}(T_q)=|T_q|e^{-nH(q)}$. Combining this equality with step 2.2 and rearranging proves the lower bound. [step 1.1, step 2.2, algebra] ∎

