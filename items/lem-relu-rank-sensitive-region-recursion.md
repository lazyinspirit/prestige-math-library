---
id: lem-relu-rank-sensitive-region-recursion
kind: lemma
title: "Rank-sensitive layer recursion for ReLU regions"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-relu-network, def-relu-linear-region, lem-hyperplane-arrangement-region-count]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Serra, Tjandraatmadja, and Ramalingam, Bounding and Counting Linear Regions of Deep Neural Networks, Appendix C"
      url: "https://proceedings.mlr.press/v80/serra18b/serra18b-supp.pdf"
      locator: "Appendix C, proof of Lemma 4, supplement p. 4: rank reduction for affine hyperplane arrangements."
    - title: "Serra, Tjandraatmadja, and Ramalingam, Bounding and Counting Linear Regions of Deep Neural Networks, proof of Theorem 1"
      url: "https://proceedings.mlr.press/v80/serra18b/serra18b.pdf"
      locator: "Section 3.1, Lemmas 5–6 and complete proof of Theorem 1: rank-sensitive recursion. The boundary-pattern extension is proved locally."
    - title: "Matus Telgarsky, Deep learning theory lecture notes, Chapter 5"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "Chapter 5, Benefits of depth; supplementary context. The exact mathematical argument is given locally and the primary source is cited separately."
---

## Statement

Let $n_0,L,n_1,\ldots,n_L\ge1$ be integers, consider a layered ReLU network of input dimension $n_0$ and hidden widths $n_1,\ldots,n_L$, and let $r\in\mathbb N_0$. Set $R_{L+1}(r)=1$ and, for $1\le\ell\le L$, define $$R_\ell(r)=\sum_{j=0}^{\min(r,n_\ell)}\binom{n_\ell}{j}R_{\ell+1}\!\left(\min\{r,n_\ell-j\}\right).$$ After layers $\ell,\ldots,L$, any activation cell whose current affine image has dimension at most $r$ produces at most $R_\ell(r)$ activation cells.

## Statement references

[Serra et al., Appendix C, Lemma 4: rank reduction](https://proceedings.mlr.press/v80/serra18b/serra18b-supp.pdf)

[Serra et al., Section 3.1, proof of Theorem 1: rank-sensitive recursion](https://proceedings.mlr.press/v80/serra18b/serra18b.pdf)

[Telgarsky, Chapter 5: depth and approximation context](https://mjt.cs.illinois.edu/dlt/index.html)

## Facts & Assumptions

**Given:** A layered ReLU network with widths $n_0,n_1,\ldots,n_L$, a layer index $\ell$, and an affine image of dimension at most $r$.

[F1] An arrangement of $n$ affine hyperplanes in dimension $r$ has at most $\sum_{j=0}^{\min(r,n)}\binom nj$ full-dimensional regions ([[lem-hyperplane-arrangement-region-count]]).

[F2] Each hidden unit applies $\rho(z)=\max\{0,z\}$ to its affine preactivation ([[def-relu-network]]).

## Proof

1.1 An empty current cell has no descendants. Otherwise let $E$ be the affine hull of the current cell's image, with $\dim E=s\le r$, and write the restricted preactivations as $a_1,\ldots,a_{n_\ell}$. There are finitely many realized active subsets $A$; choose one image point $y_A$ for each. Choose $\delta>0$ smaller than every positive number among the $a_i(y_A)$, taking any positive $\delta$ if there are none. At each witness, $a_i(y_A)-\delta$ is strictly positive exactly for $i\in A$ and strictly negative otherwise. Thus every original pattern, including a boundary-only pattern, occurs in a distinct full-dimensional chamber of the shifted affine functions on $E$. Constant restrictions have fixed strict signs and add no hyperplanes. By [F1], there are at most $S=\sum_{j=0}^{\min(r,n_\ell)}\binom{n_\ell}{j}$ such patterns; for $s=0$ there is at most one. For a fixed $A$, the original pattern constraints are affine strict or weak half-spaces on the current cell, so they define at most one convex subcell. By [F2], the layer output there keeps the coordinates in $A$ and sets the others to zero, so its affine image dimension is at most $\min(r,|A|)$. [given, F1, F2, choose, algebra]

2.1 Backward induction in the displayed recurrence shows that $R_{\ell+1}(s)$ is nondecreasing in $s$: increasing $s$ adds nonnegative terms and does not decrease any argument. Therefore, among at most $S$ distinct active subsets its sum is maximized by choosing the $S$ subsets of largest cardinality. Those can be taken to have sizes $n_\ell-j$ with multiplicities $\binom{n_\ell}{j}$ for $0\le j\le\min(r,n_\ell)$; their total number is exactly $S$. The associated next dimensions are at most $\min(r,n_\ell-j)$, giving the displayed recurrence. Induction backward from $R_{L+1}=1$ proves the claim. [step 1.1, induction, algebra] ∎
