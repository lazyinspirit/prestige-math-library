---
id: def-it-empirical-type-and-type-class
kind: definition
title: "Empirical types, n-types, and type classes"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-qa-35-finite-probability-entropy-and-stochastic-matrices]
justified_by: []
aliases: []
axiom_use: "No choice axiom is used."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition, Chapter 11"
      url: "https://sgfin.github.io/files/notes/Cover_and_Thomas_ch11_info_and_stats.pdf"
      locator: "§11.1, Definition of type and type class, printed pp. 349–350 (complete Chapter 11 PDF pp. 1–3)"
---

## Definition

Let $\mathcal A$ be a finite nonempty alphabet and let $n\ge1$. A word of length $n$ is $x^n=(x_1,\ldots,x_n)\in\mathcal A^n$. For $a\in\mathcal A$, define its count and empirical type by
$$N(a\mid x^n):=\#\{i\in\{1,\ldots,n\}:x_i=a\},\qquad \widehat P_{x^n}(a):=\frac{N(a\mid x^n)}n.$$
Every position contributes to exactly one count, so the coordinates of $\widehat P_{x^n}$ are nonnegative and sum to one; it is a probability vector in the sense of [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]. The **set of $n$-types** is $\mathcal P_n(\mathcal A):=\{\widehat P_{x^n}:x^n\in\mathcal A^n\}$. Thus $q\in\mathcal P_n(\mathcal A)$ exactly when every $nq(a)$ is a nonnegative integer and $\sum_a nq(a)=n$: the converse is obtained by arranging the prescribed finite number of copies of each letter. For $q\in\mathcal P_n(\mathcal A)$, its **type class** is
$$T_q:=\{x^n\in\mathcal A^n:\widehat P_{x^n}=q\}.$$
The map $x^n\mapsto\widehat P_{x^n}$ has these type classes as its fibers.

