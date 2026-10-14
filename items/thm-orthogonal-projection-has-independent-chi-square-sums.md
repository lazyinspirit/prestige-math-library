---
id: thm-orthogonal-projection-has-independent-chi-square-sums
kind: theorem
title: "Orthogonal projections split a standard Gaussian into independent chi-square sums"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - cor-continuous-functions-are-borel-measurable
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-axiom-of-choice
  - def-chi-square-law
  - def-countable-choice
  - def-independent-random-elements
  - def-orthogonal-projection
  - lem-axiom-of-choice-implies-countable-choice
  - lem-measurable-functions-preserve-independence
  - thm-grouping-independent-sigma-algebras
  - thm-orthogonal-transform-preserves-standard-normal-product-law
  - thm-self-adjoint-idempotents-are-exactly-orthogonal-projections
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Aditya Guntuboyina, UC Berkeley Stat 201A Fall 2019, Lecture Notes, §5.6"
      url: "https://www.stat.berkeley.edu/~aditya/resources/FullLectureNotes201AFall2019.pdf"
    - title: "Yen-Chi Chen, UW STAT 512 Lecture 8: Linear Models and Multivariate Normal Distributions"
      url: "https://faculty.washington.edu/yenchic/20A_stat512/Lec8_Linear.pdf"
---

## Statement

Assume the Axiom of Choice. Let $n\ge1$, let $Z\sim N_n(0,I_n)$, and let $P\in\mathbb R^{n\times n}$ be an orthogonal projection of rank $r$, where $0\le r\le n$. Then the random vectors $PZ$ and $(I_n-P)Z$ are independent, and
$$
\|PZ\|^2\sim\chi_r^2,\qquad \|(I_n-P)Z\|^2\sim\chi_{n-r}^2.
$$
The two squared norms are independent. The cases $r=0$ and $r=n$ are included, with $\chi_0^2=\delta_0$.

## Facts & Assumptions

**Given:** The Axiom of Choice, $Z\sim N_n(0,I_n)$, and an orthogonal projection $P$ of rank $r$.

[A1] The Axiom of Choice is assumed for the standard-normal construction and the finite-Borel uniqueness argument in the orthogonal-invariance theorem. [[def-axiom-of-choice]]

[A2] The Axiom of Choice implies Countable Choice in the sequence-selection form required by the continuous-map measurability corollary. [[def-countable-choice]] [[lem-axiom-of-choice-implies-countable-choice]] [[cor-continuous-functions-are-borel-measurable]]

[F1] A real self-adjoint endomorphism of a finite-dimensional inner-product space has an orthonormal eigenbasis. [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]

[F2] A matrix is an orthogonal projection exactly when it is idempotent and self-adjoint. [[thm-self-adjoint-idempotents-are-exactly-orthogonal-projections]] [[def-orthogonal-projection]]

[F3] An orthogonal change of coordinates preserves the independent standard-normal product law. [[thm-orthogonal-transform-preserves-standard-normal-product-law]]

[F4] The law of a sum of $k$ independent squared standard normals is $\chi_k^2$, with $\chi_0^2=\delta_0$. [[def-chi-square-law]]

[F5] Disjoint groups from an independent sigma-algebra family remain independent, and measurable functions of independent random elements remain independent. [[thm-grouping-independent-sigma-algebras]] [[def-independent-random-elements]] [[lem-measurable-functions-preserve-independence]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Regard $P$ as a self-adjoint idempotent by [F2]. By [F1] it has an orthonormal eigenbasis. If $v$ is an eigenvector with eigenvalue $\lambda$, then $P^2v=Pv$ gives $\lambda^2=\lambda$, so $\lambda\in\{0,1\}$. Exactly $r$ eigenvalues are $1$, since the image of $P$ is spanned by precisely those eigenvectors. Reorder the basis so its first $r$ vectors have eigenvalue $1$, and let $U$ be the orthogonal matrix with these eigenvectors as columns. Then $P=U\operatorname{diag}(I_r,0)U^T$. [A1, F1, F2, algebra]

2.1 By [A2], the continuous-map measurability corollary applies. The maps $x\mapsto U^Tx$, the two coordinate-block maps with zero-padding, and $x\mapsto Ux$ are continuous and therefore Borel measurable. Their compositions with the Borel random vector $Z$ are Borel random vectors; in particular, $W=U^TZ$, $PZ=U(W_1,\ldots,W_r,0,\ldots,0)^T$, and $(I_n-P)Z=U(0,\ldots,0,W_{r+1},\ldots,W_n)^T$ are random vectors. By [F3], $W_1,\ldots,W_n$ are independent standard normals. The first $r$ coordinates and the last $n-r$ coordinates generate independent sigma-algebras by [F5]; applying their measurable coordinate-block maps and then $U$ preserves independence. Thus $PZ$ and $(I_n-P)Z$ are independent. [step 1.1, A2, F3, F5]

3.1 Orthogonality of $U$ preserves Euclidean norm. Therefore $\|PZ\|^2=\sum_{j=1}^r W_j^2$ and $\|(I_n-P)Z\|^2=\sum_{j=r+1}^n W_j^2$. The squared-norm maps are continuous, hence Borel measurable by [A2]. By [F4] their laws are $\chi_r^2$ and $\chi_{n-r}^2$, and their independence follows from step 2.1 because measurable functions of independent random vectors remain independent by [F5]. When a block is empty its sum is $0$, so its law is $\chi_0^2=\delta_0$; the constant zero vector is independent of every random vector by [F5]. [step 2.1, A2, F4, F5, algebra] ∎
