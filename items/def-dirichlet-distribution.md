---
id: def-dirichlet-distribution
kind: definition
title: "Dirichlet distribution, including the one-category case"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-dirichlet-density-kernel
  - thm-dirichlet-density-normalization
  - def-countable-choice
justified_by: []
proof_strategy: definition
axiom_use: "For k>=2, normalization inherits Countable Choice from [[thm-dirichlet-density-normalization]]."
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

Assume Countable Choice. For $k\ge2$ and $\alpha_j>0$, the **Dirichlet distribution**
$\operatorname{Dirichlet}(\alpha_1,\ldots,\alpha_k)$ is the probability law
on the open probability simplex with density
$$\frac{\Gamma(\alpha_+)}{\prod_j\Gamma(\alpha_j)} \prod_jp_j^{\alpha_j-1}$$
relative to $dp_1\cdots dp_{k-1}$, with $p_k=1-\sum_{j<k}p_j$. Its
normalization is [[thm-dirichlet-density-normalization]]. For $k=1$, define
the law to be the point mass at $p_1=1$. All coordinates of the parameter
vector must be strictly positive.
