---
id: lem-hlr-balanced-cluster-tree-size-and-depth
kind: lemma
title: "Size and depth of a balanced cluster tree"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-hlr-cluster-trees-and-geometric-admissibility]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical Matrices, MiS Lecture Note 21 (2003; revised June 2006), §§2.1.1–2.1.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank Compression of Non-Local Operators” (ETH Zürich, AT’23), §2.3.2"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
---

## Statement

Let $I$ be a finite ordered set of size $n\ge1$, and let $b$ be an integer with $1\le b\le n$. In the balanced cluster tree of [[def-hlr-cluster-trees-and-geometric-admissibility]], every cluster at depth $h$ has size at most $\lceil n/2^h\rceil$. The tree has depth at most $\lceil\log_2(n/b)\rceil$, at most $2n/b$ leaves, and at most $4n/b-1$ nodes.

## Facts & Assumptions

**Given:** The finite ordered index set $I$, its size $n$, the leaf threshold $b$, and the balanced cluster tree.

[F1] [[def-hlr-cluster-trees-and-geometric-admissibility]]: each cluster larger than $b$ splits into two disjoint children of sizes $\lfloor m/2\rfloor$ and $\lceil m/2\rceil$, and clusters of size at most $b$ are leaves.

## Proof

1.1 At depth zero the root has size $n=\lceil n/2^0\rceil$. If a cluster at depth $h$ has size at most $\lceil n/2^h\rceil$, each child has size at most $\lceil\lceil n/2^h\rceil/2\rceil=\lceil n/2^{h+1}\rceil$, since the split sizes differ by at most one. Induction proves the size bound at every depth. [given, F1, induction, algebra]

2.1 Put $H=\lceil\log_2(n/b)\rceil$. Then $2^H\ge n/b$, so $\lceil n/2^H\rceil\le b$. By step 1.1 every cluster at depth $H$ has size at most $b$ and is a leaf; hence the tree depth is at most $H$. [given, F1, step 1.1, algebra]

3.1 If a leaf is not the root, its parent has an integer size $m>b$, so the smaller child has size $\lfloor m/2\rfloor\ge\lfloor(b+1)/2\rfloor\ge b/2$. The same lower bound on leaf size holds when the root is a leaf because then there is one leaf and $n\ge b/2$. Since the leaves partition $I$, their number $L$ satisfies $Lb/2\le n$, hence $L\le2n/b$. A full binary tree with $L$ leaves has $L-1$ internal nodes, so it has $2L-1\le4n/b-1$ nodes. [given, F1, algebra] ∎

## Remarks

The bounds include $b=1$ and $b=n$. For $b=n$ the root alone is a leaf; for $b=1$ every leaf is a singleton.
