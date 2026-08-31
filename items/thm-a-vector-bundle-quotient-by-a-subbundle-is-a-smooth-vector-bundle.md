---
id: thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle
kind: theorem
title: "A vector bundle quotient by a subbundle is a smooth vector bundle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-quotient-vector-bundle-by-a-subbundle, def-vector-subbundle, prop-local-frames-and-local-trivializations-are-equivalent-data]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
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

If $S\subseteq E$ is a smooth rank-$k$ subbundle of a smooth rank-$r$ vector
bundle $E\to M$, then the fibrewise quotient $E/S\to M$ is a smooth rank-$(r-k)$
vector bundle.

## Facts & Assumptions

**Given:** A smooth vector bundle $E\to M$ and a smooth rank-$k$ subbundle
$S\subseteq E$.

[L1] Locally, a subbundle is spanned by part of a frame of the ambient bundle
([[def-vector-subbundle]]).

## Proof

**Proof technique:** direct.

1.1 Around each point of $M$, choose a local frame $(e_1,\dots,e_r)$ of $E$ such that $(e_1,\dots,e_k)$ is a local frame of $S$. Then the quotient classes of $e_{k+1},\dots,e_r$ form a basis of each quotient fibre $E_p/S_p$. [L1, given, choose]

2.1 Using the basis from step 1.1, identify the quotient fibre over $p$ with $\mathbb R^{r-k}$ by reading the coefficients of the classes of $e_{k+1},\dots,e_r$. If one changes to another adapted frame, the change-of-frame matrix has block upper-triangular form $\begin{bmatrix}A&B\\0&C\end{bmatrix}$, so the quotient coordinates transform by $C$. Hence the quotient charts are smoothly compatible and define a smooth rank-$(r-k)$ vector bundle. [step 1.1, algebra] ∎