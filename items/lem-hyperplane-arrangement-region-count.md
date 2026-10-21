---
id: lem-hyperplane-arrangement-region-count
kind: lemma
title: "Hyperplane arrangement upper count and general-position count"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Serra, Tjandraatmadja, and Ramalingam, Bounding and Counting Linear Regions of Deep Neural Networks, Lemma 5"
      url: "https://proceedings.mlr.press/v80/serra18b/serra18b.pdf"
      locator: "Lemma 5 and proof, pp. 5–6; hyperplane cuts in an affine space."
    - title: "Matus Telgarsky, Deep learning theory lecture notes, Chapter 5"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "Chapter 5, Benefits of depth; supplementary context. The exact mathematical argument is given locally and the primary source is cited separately."
---

## Statement

For integers $m\ge0$ and $d\ge1$, the complement of any $m$ affine hyperplanes in $\mathbb R^d$ has at most $\sum_{j=0}^{d}\binom mj$ connected components, with $\binom mj=0$ for $j>m$. If the hyperplanes are in general position, meaning every $q\le d$ of them meet in codimension $q$ and no $d+1$ have a common point, the number of components is exactly this sum; such arrangements exist for every $m,d$. On a zero-dimensional affine image there is at most one full-dimensional activation cell.

## Statement references

[Serra et al., Lemma 5 and proof: hyperplane arrangement bound](https://proceedings.mlr.press/v80/serra18b/serra18b.pdf)

[Telgarsky, Chapter 5: depth and approximation context](https://mjt.cs.illinois.edu/dlt/index.html)

## Facts & Assumptions

**Given:** Integers $m\ge0$, $d\ge0$, and an arrangement of $m$ affine hyperplanes in $\mathbb R^d$, where for $d=0$ the arrangement is interpreted as sign conditions on a single point.

## Proof

1.1 Let $R(m,d)$ be the largest possible number of complementary regions. With no hyperplanes or in dimension zero, $R(0,d)=R(m,0)=1$. Adding the last hyperplane $H$ splits only old regions that meet $H$; each old region is convex, so its intersection with $H$ contributes at most one region of the arrangement induced on $H\cong\mathbb R^{d-1}$. Hence $R(m,d)\le R(m-1,d)+R(m-1,d-1)$. [given, construct]

2.1 Induction on $m+d$ and Pascal's identity give $R(m,d)\le\sum_{j=0}^d\binom{m-1}{j}+\sum_{j=0}^{d-1}\binom{m-1}{j}=\sum_{j=0}^{d}\binom mj$. If the arrangement is in general position, its restriction to $H$ is also in general position and has $m-1$ hyperplanes in dimension $d-1$; every one of its regions lies in one old region and cuts that region into two, so the recurrence is equality. Such arrangements exist: choose distinct $t_1,\ldots,t_m$ and use $H_i:\sum_{k=1}^d t_i^{k-1}x_k=t_i^d$. Any $q\le d$ normals are independent by the Vandermonde determinant, while no $d+1$ equations have a common solution because their augmented Vandermonde matrix is invertible. The same induction gives the claimed exact sum. [step 1.1, algebra, construct] ∎
