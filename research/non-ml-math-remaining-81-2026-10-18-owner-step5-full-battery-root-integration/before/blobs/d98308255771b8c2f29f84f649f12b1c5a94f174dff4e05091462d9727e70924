---
id: thm-daha-a1-macdonald-eigenfunctions
kind: theorem
title: "The symmetric rank-one Macdonald polynomials are DAHA eigenfunctions"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-daha-a1-symmetric-macdonald-operator, lem-daha-a1-macdonald-operator-preserves-orbit-sums, lem-daha-a1-y-sum-restricts-to-macdonald-operator]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alexander A. Kirillov Jr., Lectures on the affine Hecke algebras and Macdonald conjectures"
      url: "https://arxiv.org/pdf/math/9501219"
      locator: "Lecture 6, Theorems 6.2 and 6.6, PDF pp. 29–32; the local proof gives the type-A1 spectral construction directly."
    - title: "I. G. Macdonald, Affine Hecke algebras and orthogonal polynomials"
      url: "https://numdam.org/item/SB_1994-1995__37__189_0.pdf"
      locator: "§1, Theorem 1.5, and §6, PDF pp. 2–3 and 12–14: monic orbit-sum normalization and the DAHA eigenfunction characterization."
    - title: "Pavel Etingof and Xiaoguang Ma, Lecture Notes on Cherednik Algebras"
      url: "https://ocw.mit.edu/courses/18-735-double-affine-hecke-algebras-in-representation-theory-combinatorics-geometry-and-mathematical-physics-fall-2009/c0a79381e5494c4fd0baa1eef2356e89_MIT18_735F09_lec.pdf"
      locator: "§§7.13 and the Macdonald operator discussion, PDF pp. 58–59 and 18–19."
---

## Statement

Assume $q\in K^\times$ is not a root of unity, $t\in K^\times$, and $t^2\ne q^{-N}$ for every positive integer $N$. Let $m_0=1$ and $m_n=z^n+z^{-n}$ for $n\ge1$. The Laurent degree of a nonzero $\sum_k a_kz^k$ is $\max\{|k|:a_k\ne0\}$; the coefficient of $m_n$ is the monic normalization. For each $n\ge0$ there is a unique symmetric Laurent polynomial

$$
P_n=m_n+\sum_{0\le j<n}c_{n,j}m_j
$$

such that

$$
\mathcal D P_n=\lambda_nP_n,\qquad \lambda_n=tq^n+t^{-1}q^{-n}.
$$

The polynomials $P_n$ form a $K$-basis of the symmetric Laurent polynomials and are simultaneous eigenfunctions of every symmetric rank-one DAHA translation operator. This is the monic type-A1 symmetric Macdonald eigenfunction normalization; no inner-product norm formula or general-root-system extension is asserted here.

## Facts & Assumptions

**Given:** The type-A1 symmetric DAHA difference operator, its triangular action on the orbit sums, and its realization as the restriction of the symmetric DAHA translation algebra.

[F1] [[def-daha-a1-symmetric-macdonald-operator]]: $\mathcal D$ is the operator with coefficients $(tz^2-t^{-1})/(z^2-1)$ and $(t^{-1}z^2-t)/(z^2-1)$ acting by $q$- and $q^{-1}$-shifts.

[F2] [[lem-daha-a1-macdonald-operator-preserves-orbit-sums]]: $\mathcal Dm_n=\lambda_nm_n+\sum_{j<n}d_{n,j}m_j$ with $\lambda_n=tq^n+t^{-1}q^{-n}$.

[F3] [[lem-daha-a1-y-sum-restricts-to-macdonald-operator]]: every symmetric Laurent polynomial in the DAHA translation $Y$ restricts to the corresponding polynomial in $\mathcal D$ on the symmetric Laurent-polynomial space.

## Proof

1.1 For distinct $n,m\ge0$, $\lambda_n-\lambda_m=(q^n-q^m)\bigl(t-t^{-1}q^{-(n+m)}\bigr)$. If $n\ne m$, the first factor is nonzero because $q$ is not a root of unity. Also $n+m\ge1$, and the second factor is nonzero because $t^2\ne q^{-(n+m)}$. Thus all eigenvalues $\lambda_n$ are pairwise distinct. [given, algebra]

2.1 Write $f=\sum_{k=-r}^{r}a_kz^k\in V$. Comparing coefficients in $f(z)=f(z^{-1})$ gives $a_k=a_{-k}$, so $f=a_0m_0+\sum_{k=1}^{r}a_km_k$; uniqueness follows from the linear independence of Laurent monomials. Thus $m_0,\ldots,m_r$ form a basis of the symmetric Laurent polynomials of degree at most $r$. Construct the $P_n$ by induction: set $P_0=m_0$, an eigenvector by [F2], and suppose $P_0,\ldots,P_{n-1}$ form a basis of the degree-at-most-$n-1$ subspace. By [F2], write $(\mathcal D-\lambda_n)m_n=\sum_{j<n}r_{n,j}P_j$. Set $P_n=m_n+\sum_{j<n}\frac{r_{n,j}}{\lambda_n-\lambda_j}P_j$. The coefficient of each $P_j$ in $(\mathcal D-\lambda_n)P_n$ is $r_{n,j}+(\lambda_j-\lambda_n)r_{n,j}/(\lambda_n-\lambda_j)=0$, so $P_n$ is an eigenvector with leading term $m_n$. [F1, F2, step 1.1, algebra, construct]

3.1 If another monic eigenvector $Q$ with leading term $m_n$ existed, write $Q-P_n=\sum_{j<n}a_jP_j$. Then $0=(\mathcal D-\lambda_n)(Q-P_n)=\sum_{j<n}a_j(\lambda_j-\lambda_n)P_j$. The $P_j$ are linearly independent by their triangular leading terms, and every $\lambda_j-\lambda_n$ is nonzero by step 1.1, so each $a_j=0$ and $Q=P_n$. Since $(m_n)$ is a basis and the change to $(P_n)$ is triangular with diagonal entries $1$, the $P_n$ form a basis. Finally [F3] makes each symmetric DAHA translation polynomial act as a polynomial in $\mathcal D$; for every polynomial $r$, $r(\mathcal D)P_n=r(\lambda_n)P_n$. Thus each $P_n$ is a simultaneous eigenfunction of the full symmetric translation family. [F2, F3, step 1.1, step 2.1, algebra] ∎
