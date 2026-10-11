---
id: lem-padded-irreducible-characters-have-character-polynomials
kind: lemma
title: "Padded irreducible characters are eventually given by character polynomials"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-character-polynomial-in-cycle-counts,
       cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients,
       def-hall-inner-product-on-symmetric-functions,
       def-stable-schur-function-by-bialternants,
       def-power-sum-and-complete-homogeneous-symmetric-polynomials,
       def-stable-graded-ring-of-symmetric-functions,
       def-first-row-padding-of-a-partition,
       thm-complex-specht-modules-are-irreducible]
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

**Given:** A partition $\lambda$ with $|\lambda|=m$; for each $n\ge m+\lambda_1$ the padded partition $\lambda[n]\vdash n$ ([[def-first-row-padding-of-a-partition]]) and the irreducible complex character $\chi^{\lambda[n]}$ of $S_n$ ([[thm-complex-specht-modules-are-irreducible]]).

[F1] For partitions $\mu,\rho\vdash d$, $\chi^\mu(\rho)=\langle s_\mu,p_\rho\rangle_H$, the coefficient of $p_\rho/z_\rho$ in the power-sum expansion of $s_\mu$; here $\rho$ also denotes an element of $S_d$ of cycle type $\rho$ ([[cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients]]).

[F2] $\Lambda$ is a graded commutative ring of symmetric functions, $s_\mu$ is homogeneous of degree $|\mu|$, and the Hall inner product is graded with homogeneous components of unequal degrees orthogonal, so $\langle f,s_\mu\rangle_H=\langle f_{|\mu|},s_\mu\rangle_H$ depends only on the degree-$|\mu|$ component of $f$ ([[def-stable-graded-ring-of-symmetric-functions]], [[def-stable-schur-function-by-bialternants]], [[def-hall-inner-product-on-symmetric-functions]]).

[F3] The power sums $p_r$ (degree $r$), the elementary symmetric functions $e_j=\sum_{i_1<\dots<i_j}x_{i_1}\cdots x_{i_j}$ (degree $j$) and the complete homogeneous symmetric functions generate $\Lambda$; for an integer $a\ge0$, $(1+p_r)^a=\sum_{k=0}^{a}\binom{a}{k}p_r^{k}$ ([[def-power-sum-and-complete-homogeneous-symmetric-polynomials]], [[def-stable-graded-ring-of-symmetric-functions]]).

[F4] Character polynomials and their weighted degree ($\deg X_i=i$), their evaluation on each $S_n$, and their uniqueness in the limit: if two character polynomials agree as functions on $S_n$ for all $n\ge N$, they are equal ([[def-character-polynomial-in-cycle-counts]]).

## Proof

**Proof technique:** direct.

1.1 Use Macdonald's padding identity, which combines the Frobenius formula with the $x_0=1$ homogeneity reduction (Macdonald, *Symmetric Functions and Hall Polynomials*, Chapter I §7, printed pp. 122–124; the classical input recorded in the sources): for every $N\ge\lambda_1$ and every $w\in S_{N+m}$, $\chi^{(N,\lambda)}(w)=\langle E\cdot P(w),s_\lambda\rangle_H$, where $E:=\prod_i(1-x_i)=\sum_{j\ge0}(-1)^je_j$ and $P(w):=\prod_{r\ge1}(1+p_r)^{X_r(w)}$; the pairing is read on the degree-$m$ component, where only finitely many terms occur, so no infinite sum is used. [F1, given, algebra]

1.2 Expanding $E=\sum_j(-1)^je_j$ and each $(1+p_r)^{X_r(w)}=\sum_{k=0}^{X_r(w)}\binom{X_r(w)}{k}p_r^{k}$ shows that the degree-$m$ component of $E\cdot P(w)$ is the finite sum of $(-1)^j\binom{X_1(w)}{k_1}\cdots\binom{X_s(w)}{k_s}\,e_jp_{r_1}^{k_1}\cdots p_{r_s}^{k_s}$ over all tuples with $j+\sum_ir_ik_i=m$; the finiteness follows because $j\le m$ and $r_ik_i\le m$. [F2, F3, algebra]

2.1 Define $P_\lambda\in\mathbb Q[X_1,X_2,\dots]$ as the finite sum $\sum_{j+\sum_irk_i=m}(-1)^j\langle e_jp_{r_1}^{k_1}\cdots p_{r_s}^{k_s},s_\lambda\rangle_H\prod_r\binom{X_r}{k_r}$. Its coefficients are integers, it involves finitely many variables, and its weighted degree is $\sum_rr k_r\le m$. Substituting $\sigma\in S_n$ with $n\ge m+\lambda_1$ and using steps 1.1 and 1.2 with $N=n-m\ge\lambda_1$, together with the gradedness of the Hall pairing [F2], gives $\chi^{\lambda[n]}(\sigma)=\langle E\cdot P(\sigma),s_\lambda\rangle_H=\langle(E\cdot P(\sigma))_m,s_\lambda\rangle_H=P_\lambda(X_1(\sigma),X_2(\sigma),\dots)$. [F2, F4, given, step 1.1, step 1.2]

3.1 The polynomial $P_\lambda$ produced in step 2.1 satisfies the required identity for all $n\ge m+\lambda_1$ and all $\sigma\in S_n$; it is unique with this property, since two character polynomials agreeing on all $S_n$ for all sufficiently large $n$ are equal [F4]. Hence for every partition $\lambda$ there is a character polynomial of weighted degree at most $|\lambda|$ representing the padded irreducible characters $\chi^{\lambda[n]}$ on the stated range. [F4, step 2.1] ∎
