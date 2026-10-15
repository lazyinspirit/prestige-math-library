---
id: lem-multinomial-law-normalization
kind: lemma
title: "The Multinomial mass function is normalized"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - thm-multinomial-theorem
  - def-multinomial-coefficient
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §3.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Gero Walter, A Technical Note on the Dirichlet-Multinomial Model, 2013"
      url: "https://epub.ub.uni-muenchen.de/14068/1/tech-rep-131_gero-walter.pdf"
---

## Statement

For $k\ge1$, $n\in\mathbb N_0$, and $p_j\ge0$ with $\sum_jp_j=1$, the masses
$$\frac{n!}{\prod_{j=1}^ky_j!}\prod_{j=1}^kp_j^{y_j}, \qquad y_j\in\mathbb N_0,\quad\sum_jy_j=n,$$
sum to one, using $0^0=1$.

## Facts & Assumptions

**Given:** The finite probability vector $p$, $k\ge1$, and $n\in\mathbb N_0$.

[F1] The multinomial expansion is $(\sum_jp_j)^n=\sum_{\sum y_j=n}n!\prod_jp_j^{y_j}/\prod_jy_j!$. [[thm-multinomial-theorem]].

[F2] For nonnegative integer counts summing to $n$, the multinomial coefficient defined as a coloring count equals $n!/\prod_jy_j!$. [[def-multinomial-coefficient]] [[thm-multinomial-theorem]].

## Proof

**Given:** $p_j\ge0$, $\sum_jp_j=1$, $k\ge1$, and $n\in\mathbb N_0$.

1.1 Apply [F1] and [F2] to expand $(\sum_jp_j)^n$; each term is exactly the stated nonnegative mass. Since $\sum_jp_j=1$, the sum of all masses is one. [given, F1, F2, algebra]

2.1 When $n=0$ there is one all-zero count vector and its mass is $0!/(0!)^k$ times a product of $k$ zero-th powers, hence one. When some $p_j=0$, terms with $y_j>0$ vanish and terms with $y_j=0$ use $0^0=1$; the same expansion remains valid. [step 1.1, given, cases] ∎