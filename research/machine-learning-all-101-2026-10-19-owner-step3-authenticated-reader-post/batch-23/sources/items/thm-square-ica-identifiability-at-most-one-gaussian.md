---
id: thm-square-ica-identifiability-at-most-one-gaussian
kind: theorem
title: "Square ICA is identifiable up to signs and permutation with at most one Gaussian source"
status: draft
dependency_level: 2
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-square-ica-model, lem-orthogonal-independent-mixing-shared-columns-gaussian]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, second edition, corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
      locator: "§14.7.2, printed pp. 560–561; identifiability statement, proof not supplied"
    - title: "Aapo Hyvärinen, Juha Karhunen, and Erkki Oja, Independent Component Analysis"
      url: "https://www.cs.helsinki.fi/u/ahyvarin/papers/bookfinal_ICA.pdf"
      locator: "§7.2.2, printed pp. 153–154, proof omitted; §7.5–7.6, printed p. 163, exact at-most-one-Gaussian boundary"
---

## Statement

Let a probability law on $\mathbb R^p$ admit two square independent-component representations $X\overset d=AS$ and $X\overset d=A'S'$, with invertible $A,A'\in\mathbb R^{p\times p}$. Suppose that the components of $S$ and $S'$ are mutually independent, centered, and have unit variance, and that at most one component of $S$ is Gaussian. Then there is a signed-permutation matrix $Q$—a matrix with exactly one nonzero entry, equal to $1$ or $-1$, in each row and each column—such that $A'=AQ$ and $S'=Q^TS$ in distribution.

## Statement references

[Hastie, Tibshirani, and Friedman, §14.7.2, pp. 560–561 (non-Gaussian condition; proof not supplied)](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Hyvärinen, Karhunen, and Oja, §7.2.2, pp. 153–154 (model; proof omitted) and §§7.5–7.6, p. 163 (at-most-one-Gaussian boundary)](https://www.cs.helsinki.fi/u/ahyvarin/papers/bookfinal_ICA.pdf)

## Facts & Assumptions

**Given:** The two standardized square independent-component representations in the Statement, with at most one Gaussian coordinate of $S$.

[F1] [[def-square-ica-model]] gives independence, centering, unit variances, invertibility and the equality-in-law convention.

[F2] [[lem-orthogonal-independent-mixing-shared-columns-gaussian]] shows that a non-Gaussian source column of an orthogonal matrix preserving coordinate independence has exactly one nonzero entry, equal to $1$ or $-1$.

## Proof

1.1 Work on the probability space of $S$ and define $T=A'^{-1}AS$. The given equality $AS\overset d=A'S'$ implies $T\overset d=S'$ by applying the fixed invertible linear map $A'^{-1}$ to both laws. In particular the coordinates of $T$ are mutually independent, centered and have unit variance. Write $O=A'^{-1}A$, so $T=OS$ on this probability space. Independence and centering give $\operatorname{Cov}(S)=\operatorname{Cov}(T)=I_p$, and covariance under this linear map yields $OO^T=I_p$. Since $O$ is square and invertible, also $O^TO=I_p$; it is orthogonal. This covariance calculation is the relative whitening reduction and requires neither a density nor moments beyond the given second moments. [given, F1, construct, algebra]

2.1 By [F2], every non-Gaussian column of $O$ is a signed coordinate vector. Distinct such columns occupy distinct rows, because they are orthogonal. There are at least $p-1$ such columns. If there are $p$ they occupy all rows and $O$ is already a signed-permutation matrix. Otherwise there are exactly $p-1$, leaving one row $r$ and the one possible Gaussian column $i$. Its inner product with each occupied signed coordinate column is zero, so $O_{ji}=0$ on every occupied row $j$. Its norm is one, so $O_{ri}=1$ or $-1$. Thus $O$ is a signed-permutation matrix also in this case. For $p=1$ the same argument has zero occupied rows and its single norm-one column is $1$ or $-1$. [given, F2, step 1.1, algebra]

3.1 Put $Q=O^T$, again a signed-permutation matrix. From $O=A'^{-1}A$ and $O^{-1}=O^T$ we get $A'=AO^T=AQ$. Also $S'\overset d=T=OS=Q^TS$. These are exactly the asserted matrix and source-law conclusions. [step 1.1, step 2.1, construct, algebra] ∎

## Remarks

The proof uses the finite-variance orthogonal characterization supplied locally, rather than the general Darmois–Skitovich theorem for arbitrary pairs of linear forms. No extra regularity, higher-moment, density or global characteristic-function nonvanishing assumption is imposed on either source representation. HKO §7.5–7.6, printed p. 163, states the precise at-most-one-Gaussian boundary but omits its proof; it serves as source documentation, not a proof premise.
