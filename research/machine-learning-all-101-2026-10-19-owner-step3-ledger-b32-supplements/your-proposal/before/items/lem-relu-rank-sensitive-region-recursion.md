---
id: lem-relu-rank-sensitive-region-recursion
kind: lemma
title: "Rank-sensitive layer recursion for ReLU regions"
status: draft
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
    - title: "Serra, Tjandraatmadja, and Ramalingam, Bounding and Counting Linear Regions of Deep Neural Networks, proof of Theorem 1 and Appendix C"
      url: "https://proceedings.mlr.press/v80/serra18b/serra18b-supp.pdf"
      locator: "Appendix C, rank-sensitive recursion proof, pp. 1–3."
    - title: "Matus Telgarsky, Deep learning theory lecture notes, Chapter 5"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "Chapter 5, Benefits of depth; supplementary context. The exact mathematical argument is given locally and the primary source is cited separately."
---

## Statement

Let $n_0,L,n_1,\ldots,n_L\ge1$ be integers, consider a layered ReLU network of input dimension $n_0$ and hidden widths $n_1,\ldots,n_L$, and let $r\in\mathbb N_0$. Set $R_{L+1}(r)=1$ and, for $1\le\ell\le L$, define $$R_\ell(r)=\sum_{j=0}^{\min(r,n_\ell)}\binom{n_\ell}{j}R_{\ell+1}\!\left(\min\{r,n_\ell-j\}\right).$$ After layers $\ell,\ldots,L$, any activation cell whose current affine image has dimension at most $r$ produces at most $R_\ell(r)$ activation cells.

## Statement references

[Serra et al., proof of Theorem 1 and Appendix C: rank-sensitive recursion](https://proceedings.mlr.press/v80/serra18b/serra18b-supp.pdf)

[Telgarsky, Chapter 5: depth and approximation context](https://mjt.cs.illinois.edu/dlt/index.html)

## Facts & Assumptions

**Given:** A layered ReLU network with widths $n_0,n_1,\ldots,n_L$, a layer index $\ell$, and an affine image of dimension at most $r$.

[F1] An arrangement of $n$ affine hyperplanes in dimension $r$ has at most $\sum_{j=0}^{\min(r,n)}\binom nj$ full-dimensional regions ([[lem-hyperplane-arrangement-region-count]]).

[F2] Each hidden unit applies $\rho(z)=\max\{0,z\}$ to its affine preactivation ([[def-relu-network]]).

## Proof

1.1 Restrict the $n_\ell$ preactivations to the current affine image. A restriction that is identically zero is forced inactive and does not cut the image; a nonzero constant restriction also has a fixed activation bit and does not cut it. The remaining zero sets are affine hyperplanes in a space of dimension at most $r$. By [F1], their complement has at most $S=\sum_{j=0}^{\min(r,n_\ell)}\binom{n_\ell}{j}$ full-dimensional chambers. Every full-dimensional activation-pattern cell has one of these chambers as its relative interior: nonzero preactivations are strictly signed there, while identically zero restrictions contribute the fixed inactive bit. Conversely, boundary points of nonconstant zero sets are assigned inactive and do not create additional full-dimensional patterns. For a fixed active subset $A\subseteq\{1,\ldots,n_\ell\}$, its constraints are affine strict or weak half-spaces on the current image, so their intersection is convex and gives at most one full-dimensional cell. By [F2], the layer output on that cell is the diagonal projection of the affine layer output that keeps coordinates in $A$ and sets the others to zero; its next affine image therefore has dimension at most $\min(r,|A|)$. [given, F1, F2, algebra]

2.1 Backward induction in the displayed recurrence shows that $R_{\ell+1}(s)$ is nondecreasing in $s$: increasing $s$ adds nonnegative terms and does not decrease any argument. Therefore, among at most $S$ distinct active subsets its sum is maximized by choosing the $S$ subsets of largest cardinality. Those can be taken to have sizes $n_\ell-j$ with multiplicities $\binom{n_\ell}{j}$ for $0\le j\le\min(r,n_\ell)$; their total number is exactly $S$. The associated next dimensions are at most $\min(r,n_\ell-j)$, giving the displayed recurrence. Induction backward from $R_{L+1}=1$ proves the claim. [step 1.1, induction, algebra] ∎
