---
id: lem-it-type-probability-identity
kind: lemma
title: "Exact probability of an empirical type class"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-it-empirical-type-and-type-class, def-qa-35-finite-probability-entropy-and-stochastic-matrices, def-it-finite-alphabet-product-law, lem-it-finite-product-law-is-iid]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all calculations are finite."
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
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition, Chapter 11"
      url: "https://sgfin.github.io/files/notes/Cover_and_Thomas_ch11_info_and_stats.pdf"
      locator: "Theorem 11.1.2, printed pp. 349–350 (complete Chapter 11 PDF pp. 2–3)"
---

## Statement

Let $\mathcal A$ be a finite alphabet, let $p$ be a probability vector on $\mathcal A$, and let $q\in\mathcal P_n(\mathcal A)$. Under the product law $p^{\otimes n}$,
$$p^{\otimes n}(T_q)=|T_q|\exp\!\bigl(-n[H(q)+D(q\|p)]\bigr),$$
where $H$ and $D$ are the finite entropy and relative entropy in [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]. The expression is $0$ when $q$ has positive mass outside $\operatorname{supp}(p)$, using $D(q\|p)=+\infty$ and $e^{-\infty}=0$.

## Facts & Assumptions

**Given:** The finite alphabet $\mathcal A$, $n\ge1$, a product law $p^{\otimes n}$, and an attainable type $q$.

[F1] [[def-it-empirical-type-and-type-class]]: each $x^n\in T_q$ has $N(a\mid x^n)=nq(a)$, and $T_q$ contains exactly the words with that count vector.

[F2] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(q)=-\sum_a q(a)\ln q(a)$ with $0\ln0=0$, and $D(q\|p)=\sum_{a:q(a)>0}q(a)\ln(q(a)/p(a))$, equal to $+\infty$ when $q(a)>0=p(a)$.

[F3] [[def-it-finite-alphabet-product-law]]: $p^{\otimes n}(\{x^n\})=\prod_{i=1}^n p(x_i)$, with event masses given by summing these atom weights.

[F4] [[lem-it-finite-product-law-is-iid]]: this mass assignment is a probability law on $\mathcal A^n$.

## Proof

1.1 If $q(a)>0=p(a)$ for some $a$, every word in $T_q$ contains $nq(a)>0$ copies of $a$, so each word has product mass zero by [F3] and the event mass is zero by [F4]. The right-hand side is also zero because $D(q\|p)=+\infty$. [given, F1, F2, F3, F4]

2.1 Otherwise $p(a)>0$ whenever $q(a)>0$. Every $x^n\in T_q$ has mass $\prod_{a:q(a)>0}p(a)^{nq(a)}=\exp(n\sum_{a:q(a)>0}q(a)\ln p(a))$ by [F1, F3]. Expanding the finite sums in [F2] gives $H(q)+D(q\|p)=\sum_{a:q(a)>0}q(a)\ln(1/p(a))$, so each word has mass $\exp(-n[H(q)+D(q\|p)])$. Summing over the finite class proves the identity. [F1, F2, F3, F4, algebra] ∎

