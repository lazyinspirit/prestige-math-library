---
id: lem-it-finite-product-law-is-iid
kind: lemma
title: "The finite product law has iid coordinate maps"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-it-finite-alphabet-product-law
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - def-finite-probability-space-and-event
  - def-measurable-function-between-measurable-spaces
  - def-random-element-and-real-random-variable
  - def-sigma-algebra-generated-by-a-function
  - def-independent-sigma-algebras-and-events
  - def-independent-families-of-event-classes
  - def-independent-random-elements
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; every sum is over a finite Cartesian product."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition, Chapter 11"
      url: "https://sgfin.github.io/files/notes/Cover_and_Thomas_ch11_info_and_stats.pdf"
      locator: "§11.1, Theorem 11.1.2, iid word probabilities and the product distribution, printed pp. 349–350 (complete Chapter 11 PDF pp. 2–3)"
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author-hosted book draft"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
      locator: "Proposition 1.5 proof, multinomial type classes under product law q^n, printed pp. 15–16"
---

## Statement

Let $\mathcal A$ be finite and nonempty, let $p$ be a probability vector on $\mathcal A$, and let $n\ge1$. The finite mass assignment $p^{\otimes n}$ of [[def-it-finite-alphabet-product-law]] is a probability law on $\mathcal A^n$, and its coordinate maps $X_i(x^n)=x_i$ are independent random elements, each with law $p$.

## Facts & Assumptions

**Given:** A finite nonempty alphabet $\mathcal A$, a probability vector $p$ on $\mathcal A$, and $n\ge1$.

[F1] [[def-it-finite-alphabet-product-law]]: $p^{\otimes n}(\{x^n\})=\prod_{i=1}^n p(x_i)$, event masses are sums of these atom weights, and $X_i(x^n)=x_i$ on the full power-set $\sigma$-algebra.

[F2] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: a probability vector has nonnegative coordinates summing to one.

[F3] [[def-finite-probability-space-and-event]]: a finite probability space is a finite outcome set with nonnegative weights summing to one, and event probabilities are the corresponding finite sums.

[F4] [[def-measurable-function-between-measurable-spaces]]: a map is measurable when the preimage of each measurable target set is measurable in the domain.

[F5] [[def-random-element-and-real-random-variable]]: a random element is a measurable map from a probability space to a measurable space.

[F6] [[def-sigma-algebra-generated-by-a-function]]: $\sigma(X_i)=\{X_i^{-1}(B):B\in\mathcal B(\mathcal A)\}$; for the finite discrete alphabet, every subset is Borel.

[F7] [[def-independent-sigma-algebras-and-events]]: sigma-algebras are independent when their event classes are independent as classes of events.

[F8] [[def-independent-families-of-event-classes]]: independence of event classes means the probability of every finite intersection, choosing one event from each selected class, equals the product of those probabilities.

[F9] [[def-independent-random-elements]]: random elements are independent when their generated sigma-algebras are independent.

## Proof

1.1 By [F1] and finite distributivity, $\sum_{x^n\in\mathcal A^n}p^{\otimes n}(\{x^n\})=\prod_{i=1}^n\sum_{a\in\mathcal A}p(a)=1$ by [F2], and all atom weights are nonnegative. Thus [F3] makes the assignment $p^{\otimes n}$ a finite probability law with the event masses defined in [F1]. [F1, F2, F3, algebra]

2.1 Each $X_i$ is measurable by [F4], because every target subset has preimage in the full power set of $\Omega_n$; it is therefore a random element by [F5]. For arbitrary subsets $B_i\subseteq\mathcal A$, put $E_i=X_i^{-1}(B_i)\in\sigma(X_i)$ by [F6]. The product-mass formula [F1] and finite distributivity give $p^{\otimes n}(\bigcap_{i=1}^nE_i)=\sum_{x^n\in B_1\times\cdots\times B_n}\prod_{i=1}^np(x_i)=\prod_{i=1}^n\sum_{a\in B_i}p(a)$. By step 1.1 and [F2], each factor is $p^{\otimes n}(E_i)$ after summing the other coordinates over $\mathcal A$. Every event in each $\sigma(X_i)$ has this form by [F6]; setting omitted coordinates to $\mathcal A$ gives the same factorization for every finite subfamily. Thus [F7] and [F8] make the coordinate sigma-algebras independent, and [F9] makes the coordinate random elements independent. Taking $B_j=\mathcal A$ for $j\ne i$ shows $X_i$ has law $p$. [F1, F2, F4, F5, F6, F7, F8, F9, step 1.1, algebra] ∎
