---
id: def-it-finite-alphabet-product-law
kind: definition
title: "Finite product mass on words"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-qa-35-finite-probability-entropy-and-stochastic-matrices]
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; the construction is on a finite Cartesian power."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition, Chapter 11"
      url: "https://sgfin.github.io/files/notes/Cover_and_Thomas_ch11_info_and_stats.pdf"
      locator: "§11.1, Theorem 11.1.2, iid word probabilities and the product distribution, printed pp. 349–350 (complete Chapter 11 PDF pp. 2–3)"
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author-hosted book draft"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
      locator: "Proposition 1.5 proof, multinomial type classes under product law q^n, printed pp. 15–16"
---

## Definition

Let $\mathcal A$ be a finite nonempty alphabet with its full power-set $\sigma$-algebra (equivalently, with the discrete Borel $\sigma$-algebra), let $p$ be a probability vector on $\mathcal A$, and let $n\ge1$. On $\Omega_n:=\mathcal A^n$ equip the set of all subsets with its full power-set $\sigma$-algebra. Assign each word $x^n=(x_1,\ldots,x_n)$ the weight
$$w_{p,n}(x^n):=\prod_{i=1}^n p(x_i),$$
and for $E\subseteq\Omega_n$ define $\mu_{p,n}(E):=\sum_{x^n\in E}w_{p,n}(x^n)$. Write $\mu_{p,n}$ as the product mass assignment $p^{\otimes n}$. For $1\le i\le n$, the coordinate map is $X_i(x^n):=x_i$.
