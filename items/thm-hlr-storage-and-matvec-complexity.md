---
id: thm-hlr-storage-and-matvec-complexity
kind: theorem
title: "Balanced H and H² storage and matvec complexity"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-hlr-cluster-trees-and-geometric-admissibility
  - lem-hlr-balanced-cluster-tree-size-and-depth
  - lem-hlr-block-cluster-leaves-partition-index-pairs
  - def-hlr-and-h2-block-matrix-representations
  - def-h2-nested-cluster-bases-and-interaction-lists
  - alg-hlr-block-matvec
  - alg-h2-matrix-vector-multiplication
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical
        Matrices, MiS Lecture Note 21 (2003; revised June 2006), §§1.6, 7.1,
        9.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank
        Compression of Non-Local Operators” (ETH Zürich, AT’23), §§2.3.5, 2.4"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
verification:
  precheck: pass
---

## Statement

Let $I=J$ have size $n$, let $1\le k\le n$, and use balanced cluster trees with leaf threshold $b=k$. Let $s\ge1$ be independent of $n,k$. Assume:

1. at each level of the block-cluster tree, the far leaves satisfy $\sum_{(\tau,\sigma)}(|\tau|+|\sigma|)\le2sn$;
2. the total number of near leaves is at most $s\lceil n/k\rceil$;
3. the total number of admissible H² coupling blocks is at most $s\lceil n/k\rceil$.

Count scalar storage entries and exact scalar arithmetic operations, with constants allowed to depend on $s$ but not on $n,k$. Then an H-matrix with far-block ranks at most $k$ has storage and matvec work $O(sk n\log_2(2n/k))$. An H²-matrix with nested bases of ranks at most $k$ has storage and matvec work $O(sk n)$. The bounds depend on the stated block-count assumptions; geometric admissibility alone does not imply them.

## Facts & Assumptions

**Given:** The balanced cluster trees, block-cluster partition, H/H² representations, rank cap $k$, and the three stated counting hypotheses.

[F1] [[def-hlr-cluster-trees-and-geometric-admissibility]]: each internal cluster splits into two children whose sizes differ by at most one, and the block-cluster recursion splits one cluster at a time until admissibility or two leaf clusters.

[F2] [[lem-hlr-balanced-cluster-tree-size-and-depth]]: a threshold-$k$ cluster tree has depth at most $\lceil\log_2(n/k)\rceil$, at most $2n/k$ leaves, and at most $4n/k-1$ nodes.

[F3] [[def-hlr-and-h2-block-matrix-representations]]: each admissible H block stores at most $k$ columns in each factor, and each near block is stored densely.

[F4] [[def-h2-nested-cluster-bases-and-interaction-lists]]: H² stores at most $k$ columns for each leaf basis, at most $k\times k$ entries for each transfer and coupling matrix, and dense near blocks.

[F5] [[alg-hlr-block-matvec]] and [[alg-h2-matrix-vector-multiplication]]: H matvec applies each far factor through two rank-sized products and each near block densely; H² matvec uses leaf basis products, transfer products, coupling products, and dense near products.

## Proof

1.1 Let $h=\lceil\log_2(n/k)\rceil$. By [F1], each split descends one level in either the row tree or the column tree, whose depths are each at most $h$ by [F2]. Hence the block tree has depth at most $2h$. At each level, the first counting hypothesis bounds the total participating far-block side sizes by $2sn$. [F1, F2, algebra]

2.1 Each far H block stores at most $k(|\tau|+|\sigma|)$ scalar factor entries. Summing over at most $2h+1$ levels gives $O(sk n(h+1))$ far storage. Every near block has both cluster sizes at most $k$ by [F1], so it stores at most $k^2$ entries; the second counting hypothesis bounds total near storage by $s\lceil n/k\rceil k^2=O(sk n)$ because $k\le n$. This proves the H storage bound. [F1, F3, step 1.1, algebra]

3.1 In [F5], a far-block product first multiplies an $r_b\times|\sigma|$ factor by $x|_\sigma$ and then a $|\tau|\times r_b$ factor by the result, so it costs $O(k(|\tau|+|\sigma|))$. A near-block product costs $O(|\tau||\sigma|)\le O(k^2)$. The same level and near-block counts used in step 2.1 therefore give H matvec work $O(sk n(h+1))=O(sk n\log_2(2n/k))$. [F1, F3, F5, step 1.1, step 2.1, algebra]

3.2 By the storage convention in [F4], the leaf row and column bases require at most $2kn$ entries because the leaves partition $I$ and each basis rank is at most $k$. By [F2], each tree has $O(n/k)$ nodes, so all $k\times k$ transfer matrices require $O(kn)$ entries. The third counting hypothesis gives $O(kn)$ entries for all coupling matrices, and step 2.1 bounds dense near blocks by $O(sk n)$. Thus H² storage is $O(sk n)$. [F2, F3, F4, step 2.1, algebra]

4.1 The leaf basis products in [F5] cost $O(kn)$ because their index sets partition $I$ and $J$. Each transfer product costs at most $O(k^2)$ and there are $O(n/k)$ internal clusters by [F2]; each coupling product costs at most $O(k^2)$ and the third hypothesis bounds their number by $s\lceil n/k\rceil$. Dense near products cost $O(sk n)$ by step 2.1. Summing gives H² matvec work $O(sk n)$. [F2, F4, F5, step 2.1, algebra] ∎

## Remarks

This theorem gives storage and matrix-vector costs. It does not assert that formatted H-matrix addition or multiplication is uniformly $O(kn\log n)$ in the variable rank $k$; their recompression work has additional rank-dependent factors.
