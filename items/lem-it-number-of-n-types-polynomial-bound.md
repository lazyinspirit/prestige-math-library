---
id: lem-it-number-of-n-types-polynomial-bound
kind: lemma
title: "The type classes partition the word space and have polynomial count"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-it-empirical-type-and-type-class]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; a type is determined by finite integer counts."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
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
      locator: "Theorem 11.1.1, printed p. 349 (complete Chapter 11 PDF p. 2)"
---

## Statement

Let $\mathcal A$ be a finite nonempty alphabet with $k=|\mathcal A|\ge1$, and let $n\ge1$. The type classes $T_q$, $q\in\mathcal P_n(\mathcal A)$, form a disjoint partition of $\mathcal A^n$, and
$$|\mathcal P_n(\mathcal A)|\le(n+1)^{k-1}.$$

## Facts & Assumptions

**Given:** The finite alphabet $\mathcal A$, the positive integer $n$, and the definitions of empirical type and type class.

[F1] [[def-it-empirical-type-and-type-class]]: $\widehat P_{x^n}(a)=N(a\mid x^n)/n$, $\mathcal P_n(\mathcal A)$ is the set of attainable empirical types, and $T_q$ is the set of words with empirical type $q$.

## Proof

1.1 Every $x^n\in\mathcal A^n$ has the single type $\widehat P_{x^n}$ from [F1], hence lies in $T_{\widehat P_{x^n}}$. If $x^n\in T_q\cap T_r$, its empirical vector equals both $q$ and $r$, so $q=r$. Thus the type classes are a disjoint cover of $\mathcal A^n$. [given, F1, algebra]

2.1 Fix a listing $a_1,\ldots,a_k$ of $\mathcal A$. A type is determined by the first $k-1$ counts $N(a_i\mid x^n)\in\{0,\ldots,n\}$, since the final count is $n-\sum_{i<k}N(a_i\mid x^n)$. There are at most $(n+1)^{k-1}$ such tuples; for $k=1$ the tuple is empty and determines the unique type. [F1, given, algebra] ∎

