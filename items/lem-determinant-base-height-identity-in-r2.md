---
id: lem-determinant-base-height-identity-in-r2
kind: lemma
title: "$\\lVert v\\rVert_2\\,d(w,\\mathbb{R}v)=|\\det[v\\ w]|$ for $v\\ne0$ in $\\mathbb{R}^2$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-base-and-height-for-plane-figures, prop-orthogonal-projection-formula-and-linearity, thm-orthogonal-projection-is-the-unique-nearest-point, def-determinant-of-a-square-matrix, thm-of-square-roots]
justified_by: []
aliases: []
landmark: true
short: "Determinant equals base times height"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Introduction to Real Analysis, §7.3"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_REAL_ANALYSIS.PDF"
    - title: "M. E. Taylor, Introduction to Analysis in Several Variables, Proposition 3.1.10"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Statement

For $v\ne0$, $\lVert v\rVert_2\,d(w,\mathbb Rv)=|\det[v\ w]|$.

The nearest point realizing the distance is the orthogonal projection of $w$ onto $\mathbb Rv$.

## Facts & Assumptions

**Given:** Vectors $v,w\in\mathbb R^2$ with $v\ne0$, and the Euclidean base and height of [[def-base-and-height-for-plane-figures]].

[L1] For an orthonormal basis $(e_i)$ of a subspace $W$, the orthogonal projection is $P_Wu=\sum_i\langle u,e_i\rangle e_i$ ([[prop-orthogonal-projection-formula-and-linearity]]).

[L2] The vector $P_Wu$ is the unique point of $W$ nearest to $u$ ([[thm-orthogonal-projection-is-the-unique-nearest-point]]).

[L3] For a real $2\times2$ matrix, the determinant is the signed permutation sum and $|\det A|$ is its ordinary absolute value ([[def-determinant-of-a-square-matrix]]).

[L4] Every nonnegative real has a unique nonnegative square root ([[thm-of-square-roots]]).

## Proof

**Proof technique:** direct.

1.1 Put $e:=v/\lVert v\rVert_2$. Then $(e)$ is an orthonormal basis of $\mathbb Rv$, so [L1] and [L2] give $P_{\mathbb Rv}w=(\langle w,v\rangle/\lVert v\rVert_2^2)v$ and $d(w,\mathbb Rv)=\lVert w-P_{\mathbb Rv}w\rVert_2$. [L1, L2]

2.1 Writing $v=(v_1,v_2)$ and $w=(w_1,w_2)$, inner-product expansion of step 1.1 gives $\lVert v\rVert_2^2d(w,\mathbb Rv)^2=\lVert v\rVert_2^2\lVert w\rVert_2^2-\langle v,w\rangle^2=(v_1w_2-v_2w_1)^2=\det[v\ w]^2$. [step 1.1, L3, algebra]

3.1 Both $\lVert v\rVert_2d(w,\mathbb Rv)$ and $|\det[v\ w]|$ are nonnegative, so equality of their squares in step 2.1 and [L4] give the claimed identity. [step 2.1, L4, algebra] ∎
