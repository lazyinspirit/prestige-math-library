---
id: lem-it-n-type-approximation
kind: lemma
title: "Every probability vector is approximated by n-types"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-it-empirical-type-and-type-class]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the rounding rule selects finitely many coordinates from a fixed listing."
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
      locator: "Exercise III.23(d)–(e), finite-alphabet Sanov proof via attainable n-types, printed pp. 334–335"
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition, Chapter 11"
      url: "https://sgfin.github.io/files/notes/Cover_and_Thomas_ch11_info_and_stats.pdf"
      locator: "Theorem 11.4.1 proof, density of attainable types, printed pp. 362–363 (complete Chapter 11 PDF pp. 15–16)"
---

## Statement

Let $\mathcal A$ be a finite nonempty alphabet of size $k$, and let $q$ be any probability vector on $\mathcal A$. For every $n\ge1$, there is an $n$-type $q_n\in\mathcal P_n(\mathcal A)$ such that
$$\|q_n-q\|_1:=\sum_{a\in\mathcal A}|q_n(a)-q(a)|\le\frac{k}{n}.$$

## Facts & Assumptions

**Given:** The finite alphabet $\mathcal A$, its size $k$, a probability vector $q$ on $\mathcal A$, and $n\ge1$.

[F1] [[def-it-empirical-type-and-type-class]]: an $n$-type is exactly a probability vector whose coordinates are integer counts divided by $n$, with counts summing to $n$.

## Proof

1.1 Fix a listing $a_1,\ldots,a_k$ of $\mathcal A$. Set $m_i=\lfloor nq(a_i)\rfloor$ and $r=n-\sum_i m_i=\sum_i(nq(a_i)-m_i)$. Thus $r$ is an integer with $0\le r<k$. If $r>0$, at least $r$ fractional parts are positive, since fewer than $r$ positive terms, each below $1$, cannot sum to $r$. Add $1$ to the first $r$ positive fractional-part coordinates in the fixed listing; if $r=0$, add nothing. The resulting integers $m_i'$ are nonnegative and sum to $n$. If $k=1$, then $q(a_1)=1$ and $r=0$, so this gives the unique type exactly. [given, F1, construct]

2.1 Put $q_n(a_i)=m_i'/n$. This is an $n$-type by [F1]. Each coordinate changes from $q(a_i)$ by less than $1/n$: it is rounded down when not selected and rounded up when selected. Summing the $k$ coordinate errors gives $\|q_n-q\|_1<k/n$, hence the stated weak bound. The construction also applies when some $q(a_i)=0$. [F1, step 1.1, algebra] ∎

