---
id: thm-hlr-separated-cauchy-block-rank-bound
kind: theorem
title: "A separated Cauchy block has a geometric rank bound"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-hlr-and-h2-block-matrix-representations
  - def-hlr-cluster-trees-and-geometric-admissibility
  - def-finite-tensor-arrays-and-frobenius-inner-product
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical
        Matrices, MiS Lecture Note 21 (2003; revised June 2006), §§1.2–1.3"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank
        Compression of Non-Local Operators” (ETH Zürich, AT’23), §2.2.2.1"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
verification:
  precheck: pass
---

## Statement

Let $0\le a<b$, $c\ge0$, and choose $m,n\ge1$ points $x_i\in[0,a]$ and $y_j\in[b,b+c]$. Put $q=a/b<1$ and define the Cauchy block $K_{ij}=1/(y_j-x_i)$. For any integer $r\ge1$, the matrix $\widetilde K$ with entries $\widetilde K_{ij}=\sum_{\ell=0}^{r-1}x_i^\ell y_j^{-(\ell+1)}$ has rank at most $r$ and satisfies $|K_{ij}-\widetilde K_{ij}|\le q^r/(b-a)$ and $\|K-\widetilde K\|_F\le\sqrt{mn}\,q^r/(b-a)$. If $b-a\ge\eta\max(a,c)$ and the H-matrix rank cap satisfies $k\ge r$, the sampled clusters are admissible and $\widetilde K$ is a permitted rank-at-most-$k$ far-block representation.

## Facts & Assumptions

**Given:** The real intervals, their sample points, and the integer truncation order $r$.

[F1] [[def-hlr-cluster-trees-and-geometric-admissibility]]: admissibility requires positive distance and $\operatorname{dist}(\tau,\sigma)\ge\eta\max(\operatorname{diam}(\tau),\operatorname{diam}(\sigma))$.

[F2] [[def-finite-tensor-arrays-and-frobenius-inner-product]]: the matrix Frobenius norm is the square root of the sum of squared entry moduli, and the rank is the dimension of the column image.

[F3] [[def-hlr-and-h2-block-matrix-representations]]: an admissible H-matrix block is stored as $UV^*$ with rank at most the declared cap.

## Proof

1.1 For $z=x/y$ one has $(1-z)\sum_{\ell=0}^{r-1}z^\ell=1-z^r$. Since $y-x>0$, division by $y(1-x/y)$ gives the exact identity $\frac1{y-x}=\sum_{\ell=0}^{r-1}\frac{x^\ell}{y^{\ell+1}}+\frac{x^r}{y^r(y-x)}$. [given, algebra]

2.1 Because $0\le x_i/y_j\le a/b=q$ and $y_j-x_i\ge b-a$, step 1.1 gives $|K_{ij}-\widetilde K_{ij}|=x_i^r/(y_j^r(y_j-x_i))\le q^r/(b-a)$. Each summand of $\widetilde K$ is the outer product of $(x_i^\ell)_{i=1}^m$ and $(y_j^{-(\ell+1)})_{j=1}^n$, so its column image lies in the span of at most $r$ vectors and its rank is at most $r$. [F2, step 1.1, algebra]

3.1 Summing the squared entrywise bound from step 2.1 over the $mn$ entries and using [F2] gives $\|K-\widetilde K\|_F\le\sqrt{mn}\,q^r/(b-a)$. The sample clusters have distance at least $b-a$ and diameters at most $a$ and $c$; since $b-a>0$, the additional inequality in the Statement implies admissibility by [F1]. The rank bound in step 2.1 and $k\ge r$ then meet the far-block representation in [F3]. [F1, F2, F3, step 2.1, algebra] ∎
