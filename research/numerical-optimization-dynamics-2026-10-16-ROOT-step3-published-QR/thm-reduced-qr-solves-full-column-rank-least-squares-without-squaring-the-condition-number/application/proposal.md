---
id: thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number
kind: theorem
title: "Reduced QR over the reals solves full-column-rank least squares without squaring the condition number"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-full-reduced-and-column-pivoted-computational-qr-factorisations, thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts, thm-least-squares-solutions-and-normal-equation, thm-normal-equations-square-the-spectral-condition-number, def-condition-number-of-a-nonsingular-linear-system, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison, thm-dimension-of-a-linear-subspace, thm-gram-schmidt-orthonormalisation]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 3.3.3"
      url: "https://fncbook.com/qr/"
    - title: "David Bindel, CS 4220: Numerical Analysis, Least squares and QR"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-23.html"
---

## Statement

Let $A\in M_{m\times n}(\mathbb R)$ with $m\ge n\ge 1$ and full column rank.
Let

$$A=\widehat Q\widehat R$$

be a reduced QR factorisation, with
$$\widehat Q^{\mathsf T}\widehat Q=I_n$$
and
$\widehat R$ upper triangular. Then:

1. The least-squares minimiser of $\|Ax-b\|_2$ is the unique solution of
   $$\widehat R x=\widehat Q^{\mathsf T}b.$$
2. The spectral condition number of $\widehat R$ equals that of $A$, whereas
   the normal-equation matrix satisfies
   $$\kappa_2(A^{\mathsf T}A)=\kappa_2(A)^2.$$
   Thus the QR route solves with a factor of condition $\kappa_2(A)$ rather
   than the squared factor $\kappa_2(A)^2$.

## Facts & Assumptions

**Given:** A full-column-rank matrix $A\in M_{m\times n}(\mathbb R)$, a reduced QR factorisation $A=\widehat Q\widehat R$, and a vector $b\in\mathbb R^m$.

[L1] Reduced QR factorisation means $\widehat Q^{\mathsf T}\widehat Q=I_n$ and $\widehat R$ upper triangular ([[def-full-reduced-and-column-pivoted-computational-qr-factorisations]]).

[L2] Successive Householder or Givens transformations produce reduced QR ([[thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts]]).

[L3] Least-squares minimisers are exactly the solutions of the normal equation $A^{\mathsf T}Ax=A^{\mathsf T}b$ ([[thm-least-squares-solutions-and-normal-equation]]).

[L4] For full-column-rank $A$, the normal equations square the spectral condition number ([[thm-normal-equations-square-the-spectral-condition-number]]).

[L5] Spectral norm is unitarily invariant and is determined by singular values ([[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]).

[L6] Every independent set in a finite-dimensional vector space extends to a basis, without a choice principle ([[thm-dimension-of-a-linear-subspace]], claim 3).

[L7] Gram–Schmidt applied to a finite independent list gives an orthonormal list with the same successive spans, by the displayed projection and normalization recursion ([[thm-gram-schmidt-orthonormalisation]]).

## Proof

**Proof technique:** orthogonal decomposition of the residual.

1.1 Use the given reduced factorisation, with the orthonormal columns of $\widehat Q$ as in [L1]. They are independent, since $\widehat Qc=0$ implies $c=\widehat Q^{\mathsf T}\widehat Qc=0$. By [L6], extend them to a basis of $\mathbb R^m$, listed with these given columns first. Apply the recursion of [L7] to that list. Each of its first $n$ steps subtracts zero projections and divides a unit vector by its norm $1$, so these columns remain exactly the given $\widehat Q$. The resulting orthogonal matrix is $Q=[\widehat Q\ \widehat Q_\perp]$, with the terminal block empty when $m=n$. Then $$ \|Ax-b\|_2 =\|Q^{\mathsf T}(Ax-b)\|_2 =\left\|\binom{\widehat R x-\widehat Q^{\mathsf T}b}{-\widehat Q_\perp^{\mathsf T}b}\right\|_2, $$ so $$ \|Ax-b\|_2^2 =\|\widehat R x-\widehat Q^{\mathsf T}b\|_2^2+\|\widehat Q_\perp^{\mathsf T}b\|_2^2. $$ The second term is independent of $x$, so minimising $\|Ax-b\|_2$ is equivalent to solving $\widehat R x=\widehat Q^{\mathsf T}b$. [L1, L5, L6, L7, algebra, construct]

2.1 For every $v\in\mathbb R^n$, $\widehat Rv=0$ implies $Av=\widehat Q\widehat Rv=0$, and $Av=0$ implies $\widehat Rv=\widehat Q^{\mathsf T}Av=0$. Thus $\ker\widehat R=\ker A=\{0\}$. If an upper-triangular $\widehat R$ had a zero diagonal entry, using indices $0,\ldots,n-1$, let $j$ be its first such index. Set $v_j=1$ and $v_i=0$ for $i>j$, and solve the rows $i=j-1,\ldots,0$ backwards for $v_i$ (an empty recursion when $j=0$), dividing only by the preceding nonzero diagonal entries. Row $j$ and all later rows then also vanish, giving $\widehat Rv=0$ with $v_j=1$, a contradiction. Hence every diagonal entry is nonzero. Backward substitution therefore gives a unique solution of the triangular system of step 1.1. Thus the least-squares minimiser is unique and equals that solution. This agrees with the normal equation of [L3]. [step 1.1, L1, L3, algebra]

3.1 Since $Q$ is orthogonal and $A=Q\binom{\widehat R}{0}$, [L5] implies that $A$ and $\widehat R$ have the same positive singular values, hence the same spectral condition number. By [L4], the normal-equation matrix has condition number $\kappa_2(A)^2$. Therefore the QR solve uses a factor with condition $\kappa_2(A)$, not the squared condition of the normal equations. [step 2.1, L4, L5, algebra]

4.1 Steps 1.1-2.1 prove claim 1, and step 3.1 proves claim 2. [step 1.1, step 2.1, step 3.1] ∎
