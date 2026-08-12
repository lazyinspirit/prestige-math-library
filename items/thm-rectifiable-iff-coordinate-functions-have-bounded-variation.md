---
id: thm-rectifiable-iff-coordinate-functions-have-bounded-variation
kind: theorem
title: "A path in $\\mathbb{R}^n$ is rectifiable exactly when every coordinate has bounded variation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-path-polygonal-length-and-rectifiability-in-rn, def-bounded-variation-and-total-variation, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm]
justified_by: []
aliases: []
landmark: true
proof_strategy: comparison
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. R. Shastri, Metric Spaces, Section 5"
      url: "https://www.math.iitb.ac.in/~ars/ma403.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$, let $a\le b$, and let $\gamma=(\gamma_1,\ldots,\gamma_n):[a,b]\to\mathbb R^n$ be a path. Then $\gamma$ is rectifiable if and only if every coordinate function $\gamma_j$ has bounded variation. When these conditions hold,

$$\max_{1\le j\le n}\operatorname{Var}_{[a,b]}(\gamma_j)\le L_{[a,b]}(\gamma)\le\sum_{j=1}^n\operatorname{Var}_{[a,b]}(\gamma_j).$$

For $a=b$, every term in this display is zero.

## Facts & Assumptions

**Given:** The path $\gamma$.

[L1] For every vector $z\in\mathbb R^n$, $|z_j|\le\lVert z\rVert_2$ for each coordinate, and $\lVert z\rVert_2\le\sum_{j=1}^n|z_j|$ ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[L2] Total variation is the supremum over partition sums $\sum|f(t_{i+1})-f(t_i)|$, with singleton variation defined as zero ([[def-bounded-variation-and-total-variation]]).

[L3] Arc length is the supremum over the corresponding sums of Euclidean chord lengths; rectifiability means that set is bounded ([[def-path-polygonal-length-and-rectifiability-in-rn]]).

## Proof

**Proof technique:** comparison.

1.1 For every partition $P$ and every $j$, the first inequality in [L1] gives $V(\gamma_j,P)\le\ell_P(\gamma)$. [given, L1, L2, L3]

1.2 Conversely, the second inequality in [L1] gives $\ell_P(\gamma)\le\sum_{j=1}^nV(\gamma_j,P)\le\sum_{j=1}^n\operatorname{Var}(\gamma_j)$ for every partition. [given, L1, L2, L3]

2.1 If $\gamma$ is rectifiable, taking suprema in step 1.1 gives $\operatorname{Var}(\gamma_j)\le L(\gamma)$ for every $j$, so all coordinates have bounded variation and the left displayed bound holds. [step 1.1, L2, L3]

2.2 If every coordinate has bounded variation, the final real number in step 1.2 bounds all polygonal sums. Hence $\gamma$ is rectifiable, and taking the supremum gives the right displayed bound. [step 1.2, L3]

3.1 If $a=b$, the singleton conventions in [L2] and [L3] make all quantities zero, so both directions and both bounds remain valid. [L2, L3] ∎
