---
id: lem-padded-irreducible-characters-have-character-polynomials
kind: lemma
title: "Padded irreducible characters are eventually given by character polynomials"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-character-polynomial-in-cycle-counts,
       cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients,
       def-hall-inner-product-on-symmetric-functions,
       def-stable-schur-function-by-bialternants,
       def-power-sum-and-complete-homogeneous-symmetric-polynomials,
       def-stable-graded-ring-of-symmetric-functions,
       def-first-row-padding-of-a-partition,
       thm-complex-specht-modules-are-irreducible,
       def-free-fi-module-generated-by-an-sm-module,
       lem-branching-rule-for-specht-induction-and-coinvariants,
       def-trace-of-a-square-matrix]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (author-hosted full text, 486 pp.)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §7, formula (7.8) (Frobenius formula) and Example 14, printed pp. 122–124: $\\chi^{(N,\\lambda)}(w)$ is the coefficient of $x_0^N$ in $\\Delta(x_0,\\dots,x_n)\\prod_rp_r(x_0,\\dots,x_n)^{a_r(w)}$; the $x_0=1$ homogeneity reduction gives $\\chi^{(N,\\lambda)}=\\langle E\\cdot P,s_\\lambda\\rangle$ with $E=\\prod_i(1-x_i)$ and $P=\\prod_r(1+p_r)^{a_r(w)}$, valid as functions on $S_{N+n}$ for all $N\\ge\\lambda_1$"
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, “FI-modules and stability for representations of symmetric groups”, arXiv:1204.4533v4 (2014); published in Duke Math. J. 164 (2015) 1833–1910"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "The reference to [Mac, Example I.7.14] as the classical input of Theorem 3.3.4, printed p. 23"
---

## Statement

For every partition $\lambda$ with $|\lambda|=m$ there is a character polynomial
$P_\lambda\in\mathbb Q[X_1,X_2,\dots]$ of weighted degree at most $m$
([[def-character-polynomial-in-cycle-counts]]) such that for every
$n\ge m+\lambda_1$ and every $\sigma\in S_n$

$$\chi^{\lambda[n]}(\sigma)=P_\lambda\bigl(X_1(\sigma),X_2(\sigma),\dots\bigr),$$

where $\lambda[n]=(n-m,\lambda_1,\lambda_2,\dots)$ is the first-row padding
([[def-first-row-padding-of-a-partition]]) and $\chi^{\lambda[n]}$ is the
character of the irreducible Specht module $S^{\lambda[n]}$
([[thm-complex-specht-modules-are-irreducible]]). No choice principle is used.

## Facts & Assumptions

**Given:** A partition $\lambda$ of size $m$; characters and representations in this proof are over $\mathbb C$.

[F1] Specht characters have integer values, and $\chi^\lambda(\rho)$ is determined by the cycle type $\rho\vdash m$ ([[cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients]]).

[F2] The free FI-module on $S^\lambda$ has $M(\lambda)_S=\bigoplus_{T\subseteq S,\,|T|=m}S^\lambda(T)$, with an injection acting by its restrictions on subsets; for $n\ge m$ it is $\operatorname{Ind}_{S_m\times S_{n-m}}^{S_n}(S^\lambda\boxtimes\mathbb C)$ ([[def-free-fi-module-generated-by-an-sm-module]]).

[F3] This induction is the multiplicity-one sum of the $S^\nu$ with $\nu/\lambda$ a horizontal $(n-m)$-strip ([[lem-branching-rule-for-specht-induction-and-coinvariants]]).

[F4] Padding is $\eta[n]=(n-|\eta|,\eta_1,\eta_2,\dots)$, defined for $n\ge|\eta|+\eta_1$, with the empty-tail convention ([[def-first-row-padding-of-a-partition]]). Character polynomials have weighted degree $\deg X_r=r$ and are determined by their values in all sufficiently large ranks ([[def-character-polynomial-in-cycle-counts]]).

[F5] Trace is the sum of the diagonal matrix entries ([[def-trace-of-a-square-matrix]]). Consequently a permutation of direct summands contributes to trace only at the summands it fixes, and trace is additive on an invariant direct sum. It is invariant under isomorphism: $\operatorname{tr}(AB)=\sum_{i,j}a_{ij}b_{ji}=\operatorname{tr}(BA)$ implies $\operatorname{tr}(B^{-1}AB)=\operatorname{tr}(A)$.

## Proof

**Proof technique:** direct, with induction on $m$.

1.1 Define $B_\lambda:=\sum_{\sum_{r=1}^m r k_r=m}\chi^\lambda(\rho_k)\prod_{r=1}^m\binom{X_r}{k_r}$, where each $k_r\ge0$, $\rho_k$ has $k_r$ parts equal to $r$, and $\binom{X}{q}:=X(X-1)\cdots(X-q+1)/q!$ with $\binom{X}{0}=1$. For $m=0$ use the empty tuple and $B_\varnothing=1$. The sum is finite and has rational coefficients and weighted degree at most $m$, since each term has degree at most $\sum_r r k_r=m$. [F1, F4, construct, algebra]

1.2 Let $\mathcal E_\lambda$ be the finite set of partitions $\eta$ with $\lambda_i\ge\eta_i\ge\lambda_{i+1}$ for every $i$, padding both with zeros. For $n\ge m+\lambda_1$, a shape $\nu\vdash n$ has $\nu/\lambda$ horizontal exactly when $\nu_i\ge\lambda_i\ge\nu_{i+1}$ for all $i$: column heights increase by at most one precisely under these interlacing inequalities. Writing $\nu=\eta[n]$, the inequalities for $i\ge2$ and the upper bounds on $\nu_{i+1}$ say exactly $\eta\in\mathcal E_\lambda$; the remaining condition $\nu_1=n-|\eta|\ge\lambda_1$ holds because $|\eta|\le m$. Every such $\eta[n]$ is a partition, since $n-|\eta|\ge\lambda_1\ge\eta_1$. Therefore [F3] gives $M(\lambda)_n\cong\bigoplus_{\eta\in\mathcal E_\lambda}S^{\eta[n]}$ on this whole range. The set contains $\lambda$, and every other member has $|\eta|<m$, because $\eta_i\le\lambda_i$ and equality of the total sizes would force equality in every coordinate. [F2, F3, F4, given, algebra]

2.1 For $\sigma\in S_n$, a subset $T$ is fixed setwise by $\sigma$ exactly when it is a union of cycles. The number of fixed $m$-subsets containing $k_r$ cycles of length $r$ for each $r$ is $\prod_r\binom{X_r(\sigma)}{k_r}$. On such a summand $S^\lambda(T)$ the restriction of $\sigma$ has cycle type $\rho_k$, so its trace is $\chi^\lambda(\rho_k)$; moving summands have zero diagonal blocks. Thus $\chi_{M(\lambda)_n}(\sigma)=B_\lambda(X(\sigma))$ for every $n$, by summing the fixed-block traces. [F1, F2, F5, step 1.1]

3.1 Induct on $m$. For $m=0$, step 1.2 has only the empty tail and step 2.1 gives $P_\varnothing=1$. For $m>0$, assume that each smaller tail $\eta$ has its claimed polynomial $P_\eta$ and range. Define $P_\lambda:=B_\lambda-\sum_{\eta\in\mathcal E_\lambda\setminus\{\lambda\}}P_\eta$. This is a finite sum of rational polynomials of weighted degree at most $m$. For $n\ge m+\lambda_1$, every smaller tail in the sum satisfies $n\ge|\eta|+\eta_1$, since $|\eta|\le m$ and $\eta_1\le\lambda_1$. Subtracting their character identities from the direct-sum identity in step 1.2 and using step 2.1 proves $\chi^{\lambda[n]}(\sigma)=P_\lambda(X(\sigma))$ throughout the required range. This establishes the induction. [F4, F5, step 1.1, step 2.1, step 1.2, construct]

4.1 The polynomial from step 3.1 has weighted degree at most $m$ and the claimed identity in every rank $n\ge m+\lambda_1$. Its uniqueness follows from the uniqueness of character polynomials agreeing in infinitely many ranks. All sums and choices in the argument are finite. [F4, step 3.1] ∎
