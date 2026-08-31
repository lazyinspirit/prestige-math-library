---
id: prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components
kind: proposition
title: "Smoothness of a section is equivalent to smooth local components"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-section-local-section-and-support, def-local-frame-and-global-frame-of-a-vector-bundle, prop-local-frames-and-local-trivializations-are-equivalent-data, prop-smoothness-is-local-on-the-source]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

Let $E\to M$ be a smooth vector bundle, let $U\subseteq M$ be open, and let
$(s_1,\dots,s_r)$ be a local frame on $U$. A local section $\sigma$ on $U$ is
smooth if and only if there are smooth functions $f_1,\dots,f_r:U\to\mathbb R$
with

$$\sigma(p)=\sum_{i=1}^r f_i(p)s_i(p)\qquad(p\in U).$$

## Facts & Assumptions

**Given:** A local frame $(s_1,\dots,s_r)$ on $U$ and a local section
$\sigma:U\to E|_U$.

[L1] A local frame determines a local trivialization, and conversely
([[prop-local-frames-and-local-trivializations-are-equivalent-data]]).

[L2] Smoothness is local on the source ([[prop-smoothness-is-local-on-the-source]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the chosen frame gives a bundle chart $\Phi:E|_U\to U\times\mathbb R^r$ in which $s_i(p)$ corresponds to the $i$-th standard basis vector. Therefore $\Phi(\sigma(p))=(p,f_1(p),\dots,f_r(p))$ exactly when $\sigma(p)=\sum_i f_i(p)s_i(p)$. [L1, given]
2.1 In this chart, $\sigma$ is smooth exactly when the coordinate map $p\mapsto(f_1(p),\dots,f_r(p))$ is smooth. Equivalently, each component $f_i$ is smooth, and the criterion is local on $U$ by [L2]. [L2, step 1.1, algebra] ∎