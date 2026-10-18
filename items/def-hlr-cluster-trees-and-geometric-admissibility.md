---
id: def-hlr-cluster-trees-and-geometric-admissibility
kind: definition
title: "Finite cluster trees and geometric admissibility"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical Matrices, MiS Lecture Note 21 (2003; revised June 2006), §§1.3–1.6, 2.1–2.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank Compression of Non-Local Operators” (ETH Zürich, AT’23), §§2.3.2–2.3.3"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
---

## Definition

Let $I$ be a nonempty finite totally ordered set, let $d\ge1$, and assign a point $\xi_i\in\mathbb R^d$ to each $i\in I$. A **cluster** is a nonempty subset of $I$. For a cluster $\tau$, write $X_\tau=\{\xi_i:i\in\tau\}$, $\operatorname{diam}(\tau)=\max_{i,j\in\tau}\|\xi_i-\xi_j\|_2$, and $\operatorname{dist}(\tau,\sigma)=\min_{i\in\tau,j\in\sigma}\|\xi_i-\xi_j\|_2$. These extrema exist because the index sets are finite and nonempty; repeated geometric points are allowed.

A **balanced cluster tree with leaf threshold $b$**, where $1\le b\le |I|$, is the rooted binary tree whose root is $I$, whose children of an internal cluster $\tau$ are its first $\lfloor|\tau|/2\rfloor$ and last $\lceil|\tau|/2\rceil$ indices in the fixed order, and which stops splitting at clusters of size at most $b$. Its two children are disjoint and their union is $\tau$.

For the column side, let $J$ be a nonempty finite totally ordered set, assign points $\zeta_j\in\mathbb R^d$ for $j\in J$, and build its balanced cluster tree by the same rule with its own threshold $1\le b_J\le|J|$. Column clusters are nonempty subsets $\sigma\subseteq J$, with $X_\sigma=\{\zeta_j:j\in\sigma\}$ and $\operatorname{diam}(\sigma)=\max_{j,j'\in\sigma}\|\zeta_j-\zeta_{j'}\|_2$. For a row cluster $\tau\subseteq I$ and a column cluster $\sigma\subseteq J$, set $\operatorname{dist}(\tau,\sigma)=\min_{i\in\tau,j\in\sigma}\|\xi_i-\zeta_j\|_2$. Row and column roles distinguish the assignments even when the index sets overlap. In the square case with a common point assignment, take $J=I$ and $\zeta_i=\xi_i$.

Fix an admissibility parameter $\eta>0$. A pair of clusters $(\tau,\sigma)$ is **admissible** when $\operatorname{dist}(\tau,\sigma)>0$ and $\operatorname{dist}(\tau,\sigma)\ge\eta\max(\operatorname{diam}(\tau),\operatorname{diam}(\sigma))$. The strict positive-distance condition keeps coincident or intersecting clusters in the near field, including diagonal singleton blocks.

The **block-cluster tree** starts at $(I,J)$. It stops at a pair if that pair is admissible or if both clusters are leaves. Otherwise, if only one cluster is nonleaf, it splits that cluster. If both are nonleaf, it splits the cluster of larger cardinality; ties are resolved by splitting the row cluster. The children of a split are the corresponding child-cluster pairs. Its terminal pairs are called **block-cluster leaves**. Admissible leaves are **far blocks**; nonadmissible leaves, which have two leaf clusters, are **near blocks**.
