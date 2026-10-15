---
id: def-multinomial-distribution
kind: definition
title: "Multinomial distribution"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - lem-multinomial-law-normalization
  - def-natural-numbers
  - def-factorial-and-falling-factorial
justified_by: []
proof_strategy: definition
axiom_use: "No choice axiom is used."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §3.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Gero Walter, A Technical Note on the Dirichlet-Multinomial Model, 2013"
      url: "https://epub.ub.uni-muenchen.de/14068/1/tech-rep-131_gero-walter.pdf"
---

## Definition

For $k\ge1$, $n\in\mathbb N_0$, and $p=(p_1,\ldots,p_k)$ with $p_j\ge0$ and
$\sum_jp_j=1$, the **Multinomial distribution**
$\operatorname{Multinomial}(n,p)$ is the law on count vectors
$y\in\mathbb N_0^k$ with $\sum_jy_j=n$ and masses
$$\mathbb P(Y=y)=\frac{n!}{\prod_jy_j!}\prod_jp_j^{y_j},$$
using $0^0=1$. The masses sum to one by
[[lem-multinomial-law-normalization]]. For $k=1$ or $n=0$, this law is
degenerate at its unique admissible count vector.
