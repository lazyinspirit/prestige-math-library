---
id: def-smolyak-absolute-detail-summability
kind: definition
title: Absolute summability of a multi-index detail family
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: sparse-grid-cubature-and-mixed-regularity
dependency_level: 3
deps: [def-smolyak-cubature, def-finite-sum, def-complete-ordered-field]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "T. Gerstner and M. Griebel, Sparse Grids, Encyclopedia of Quantitative Finance, §Classical Sparse Grids"
      url: "https://ins.uni-bonn.de/media/public/publication-media/sparsegrids_j8NLaMi.pdf?name=sparsegrids.pdf"
    - title: "T. Gerstner and M. Griebel, Dimension-Adaptive Tensor-Product Quadrature, §2"
      url: "https://ins.uni-bonn.de/media/public/publication-media/dimadapt.pdf?pk=177"
---

## Definition

Let $A\subseteq\mathbb N_0^d$ and let $a_\ell\ge0$ for $\ell\in A$. The
nonnegative sum $\sum_{\ell\in A}a_\ell$ is defined when the set
$$\left\{\sum_{\ell\in F}a_\ell:F\subseteq A\text{ finite}\right\}$$
is bounded above; its value is the supremum of that set in the complete ordered
field $\mathbb R$ ([[def-complete-ordered-field]]). The empty finite sum is $0$.
This definition does not require an enumeration of $A$.

For the Smolyak details $\delta_\ell(f)$ of [[def-smolyak-cubature]],
**absolute detail summability** means that $\sum_{\ell\in A}|\delta_\ell(f)|$
is defined for $A=\mathbb N_0^d$. For an omitted set
$A=\mathbb N_0^d\setminus\Lambda$, the same definition gives the omitted
absolute-detail tail.
