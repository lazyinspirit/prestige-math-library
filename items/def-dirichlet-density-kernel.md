---
id: def-dirichlet-density-kernel
kind: definition
title: "Dirichlet simplex density kernel"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-real-gamma-function-by-the-euler-integral
  - thm-real-gamma-euler-integral-convergence
justified_by: []
proof_strategy: definition
axiom_use: "No axiom is used in defining the nonnegative density kernel."
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

For $k\ge2$ and positive coordinates $\alpha_1,\ldots,\alpha_k$, write
$\Delta_{k-1}=\{(p_1,\ldots,p_{k-1})\in(0,\infty)^{k-1}:
\sum_{j<k}p_j<1\}$ and set $p_k=1-\sum_{j<k}p_j$. The **Dirichlet density
kernel** is the nonnegative function
$$q_\alpha(p_1,\ldots,p_{k-1}) =\frac{\Gamma(\alpha_+)}{\prod_{j=1}^k\Gamma(\alpha_j)} \prod_{j=1}^kp_j^{\alpha_j-1},\qquad \alpha_+=\sum_{j=1}^k\alpha_j,$$
relative to coordinate Lebesgue measure $dp_1\cdots dp_{k-1}$. This item
defines the density function.

## Remarks

[[thm-dirichlet-density-normalization]] proves that this kernel integrates to
one.
