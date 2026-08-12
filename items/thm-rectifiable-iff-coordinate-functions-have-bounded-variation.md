---
id: thm-rectifiable-iff-coordinate-functions-have-bounded-variation
kind: theorem
title: "A path in $\\mathbb{R}^n$ is rectifiable exactly when every coordinate has bounded variation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-path-polygonal-length-and-rectifiability-in-rn, def-bounded-variation-and-total-variation, def-euclidean-inner-product, lem-standard-basis-of-f-n, thm-cauchy-schwarz-and-the-euclidean-norm]
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

Let $n\ge1$, let $a\le b$, and let $\gamma:[a,b]\to\mathbb R^n$ be a path, with coordinate functions $\gamma_j(t):=\gamma(t)(j)$ for $j<n$, so that $\gamma=(\gamma_0,\ldots,\gamma_{n-1})$ ([[def-euclidean-inner-product]]). Then $\gamma$ is rectifiable if and only if every coordinate function $\gamma_j$ has bounded variation. When these conditions hold,

$$\max_{j<n}\operatorname{Var}_{[a,b]}(\gamma_j)\le L_{[a,b]}(\gamma)\le\sum_{j<n}\operatorname{Var}_{[a,b]}(\gamma_j).$$

For $a=b$, every term in this display is zero.

## Facts & Assumptions

**Given:** The path $\gamma$.

[L1] The standard unit vectors are indexed by $j<n$ and satisfy $z=\sum_{j<n} z_je_j$, $\langle z,e_j\rangle=z_j$, and $\lVert e_j\rVert_2=1$; the Euclidean norm satisfies Cauchy--Schwarz, homogeneity, and the triangle inequality ([[def-euclidean-inner-product]], [[lem-standard-basis-of-f-n]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[L2] Total variation is the supremum over partition sums $\sum|f(t_{i+1})-f(t_i)|$, with singleton variation defined as zero ([[def-bounded-variation-and-total-variation]]).

[L3] Arc length is the supremum over the corresponding sums of Euclidean chord lengths; rectifiability means that set is bounded ([[def-path-polygonal-length-and-rectifiability-in-rn]]).

## Proof

**Proof technique:** comparison.

1.1 Cauchy--Schwarz in [L1] gives $|z_j|=|\langle z,e_j\rangle|\le\lVert z\rVert_2$. Applying this to every chord of every partition gives $V(\gamma_j,P)\le\ell_P(\gamma)$. [given, L1, L2, L3]

1.2 Conversely, $z=\sum_{j<n}z_je_j$ and the norm axioms in [L1] give $\lVert z\rVert_2\le\sum_{j<n}|z_j|$. Applying this to every chord gives $\ell_P(\gamma)\le\sum_{j<n}V(\gamma_j,P)\le\sum_{j<n}\operatorname{Var}(\gamma_j)$ for every partition. [given, L1, L2, L3]

2.1 If $\gamma$ is rectifiable, taking suprema in step 1.1 gives $\operatorname{Var}(\gamma_j)\le L(\gamma)$ for every $j$, so all coordinates have bounded variation and the left displayed bound holds. [step 1.1, L2, L3]

2.2 If every coordinate has bounded variation, the final real number in step 1.2 bounds all polygonal sums. Hence $\gamma$ is rectifiable, and taking the supremum gives the right displayed bound. [step 1.2, L3]

3.1 If $a=b$, the singleton conventions in [L2] and [L3] make all quantities zero, so both directions and both bounds remain valid. [L2, L3] ∎
