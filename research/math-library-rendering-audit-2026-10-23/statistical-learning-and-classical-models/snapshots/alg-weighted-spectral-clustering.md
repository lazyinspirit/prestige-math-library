---
id: alg-weighted-spectral-clustering
kind: algorithm
title: "Deterministic weighted spectral clustering with explicit isolate and eigenspace conventions"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-finite-weighted-graph-laplacian
  - def-ratio-cut-and-normalized-cut
  - lem-weighted-graph-laplacian-quadratic-form-and-kernel
  - thm-weighted-ratio-and-normalized-cut-relaxations
  - alg-lloyd-k-means
  - thm-lloyd-objective-monotonicity-and-termination
  - lem-deterministic-eigenspace-basis
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ulrike von Luxburg, A Tutorial on Spectral Clustering, Statistics and Computing 17(4), 2007"
      url: "https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf"
    - title: "Jean Gallier, Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts, 2013"
      url: "https://arxiv.org/pdf/1311.2492"
    - title: "Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

**Inputs.** Integers $n,p\ge1$, data $x_1,\ldots,x_n\in\mathbb R^p$, a fixed deterministic graph-construction procedure $G:(\mathbb R^p)^n\to\mathbb R^{n\times n}$, mode $\texttt{ratio}$ or $\texttt{normalized}$, and cluster count $k\ge1$. In normalized mode also supply a Boolean row-normalization option, defaulting to false.

1. Compute $W=G(x_1,\ldots,x_n)$. Reject the input unless $W$ is symmetric, entrywise nonnegative, and zero-diagonal. Set $d_i=\sum_jw_{ij}$, $D=\operatorname{diag}(d_i)$, $L=D-W$, and $V_+=\{i:d_i>0\}$.

2. In ratio mode require $k\le n$, use all vertices in increasing index order, and set $M=L$. In normalized mode, if $V_+=\varnothing$, return every vertex as a separately reported singleton with status $\texttt{no-positive-degree-vertices}$. Otherwise require $k\le|V_+|$, use only $V_+$ in increasing index order, and set $M=D_+^{-1/2}L_+D_+^{-1/2}$.

3. Compute the exact real eigenspaces of $M$ and order its eigenvalues increasingly with multiplicity. For each eigenspace $E_\lambda$, use the deterministic projected-coordinate basis rule: for $\lambda=0$, first use $n^{-1/2}\mathbf1$ in ratio mode or $D_+^{1/2}\mathbf1/\sqrt{\sum_{i\in V_+}d_i}$ in normalized mode; then process the standard coordinate vectors in vertex order, project each onto $E_\lambda$, orthogonalize against accepted vectors, skip zero residuals, and normalize each nonzero residual. Take the first $k$ eigenvectors as columns of $U$.

4. In normalized mode, if row normalization is true, replace each row $u_i$ by $u_i/\|u_i\|_2$, where $\|v\|_2=\sqrt{\sum_{j=1}^k v_j^2}$. The prescribed first zero-mode vector has positive entries on every active vertex, so every active row norm is positive.

5. Treat the rows of $U$ as points in $\mathbb R^k$ with Euclidean distance $\|a-b\|_2$. Initialize the first Lloyd center at the row whose vertex index is smallest among the vertices selected in Step 2. For each subsequent center, choose an unused row maximizing its minimum distance to previously chosen centers, breaking ties by smallest vertex index. Assign each row initially to a nearest center, breaking ties by smallest center index. At each later assignment retain its current label when it is among the nearest centers; otherwise choose the smallest nearest-center index. Replace each nonempty center by the mean of its assigned rows, leave empty-cluster centers unchanged, and repeat until both labels and centers stop changing.

6. Return the nonempty label sets. In normalized mode append every isolate as a separately reported singleton. Graph rule, edge weights, bandwidth, kNN symmetrization, and cluster count are modeling inputs; this procedure makes no rounding, approximation, graph-consistency, or manifold-recovery guarantee.

## Definition references

[[def-finite-weighted-graph-laplacian]]

[[def-ratio-cut-and-normalized-cut]]

[[lem-weighted-graph-laplacian-quadratic-form-and-kernel]]

[[thm-weighted-ratio-and-normalized-cut-relaxations]]

[[alg-lloyd-k-means]]

[[thm-lloyd-objective-monotonicity-and-termination]]

[[lem-deterministic-eigenspace-basis]]

[Ulrike von Luxburg, A Tutorial on Spectral Clustering, Statistics and Computing 17(4), 2007](https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf)

[Jean Gallier, Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts, 2013](https://arxiv.org/pdf/1311.2492)

[Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)
