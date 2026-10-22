---
id: lem-ip-singular-gaussian-support-and-pseudoinverse
kind: lemma
title: "Support and pseudoinverse coordinates of a finite singular Gaussian"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - thm-non-negative-operator-characterisations
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-nondegenerate-multivariate-normal-law-has-density
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
proof_strategy: direct
axiom_use: "AC is inherited from the library's multivariate-normal construction and standard-normal interfaces. The finite-dimensional range, Penrose-equation, and support arguments use no stronger choice principle."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems: Lecture Notes, arXiv:2001.00617v2 (2021)"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Chapter 13, printed pp. 127–131 (PDF pp. 129–133), for the finite-dimensional Gaussian inverse-problem setting; the rank-deficient support and pseudoinverse-coordinate statement is proved locally."
    - title: "M. Dashti and A. M. Stuart, The Bayesian Approach to Inverse Problems (full lecture notes, arXiv:1302.6989)"
      url: "https://arxiv.org/pdf/1302.6989"
      locator: "§§3.1–3.2 for supplied Gaussian prior laws and the potential-weighted posterior framework; the finite singular-support calculation is proved locally."
---

## Statement

Assume the Axiom of Choice. Let $n\ge1$, $m\in\mathbb R^n$, and let
$C\in\mathbb R^{n\times n}$ be symmetric with $v^TCv\ge0$ for every
$v\in\mathbb R^n$. Let
$X$ be a random vector with law $N_n(m,C)$, and define
$\mu_X(E)=\mathbb P(X\in E)$ for Borel $E\subseteq\mathbb R^n$. Write
$\operatorname{Ran}(C)=\{Cv:v\in\mathbb R^n\}$, and put
$r=\dim\operatorname{Ran}(C)$. For a Borel probability $\mu$ on
$\mathbb R^n$, define its topological support by
$$ \operatorname{supp}(\mu)=\{x:\mu(B(x,\varepsilon))>0\text{ for every }\varepsilon>0\}, $$
where $B(x,\varepsilon)$ is the open Euclidean ball. If $r>0$, there are
$U\in\mathbb R^{n\times r}$ and a symmetric positive-definite
$\Lambda\in\mathbb R^{r\times r}$ with $U^TU=I_r$ such that
$$ C=U\Lambda U^T,\qquad \operatorname{Ran}(C)=\operatorname{Ran}(U),\qquad C^\dagger=U\Lambda^{-1}U^T. $$
Moreover, $X$ has the same law as $m+U\Lambda^{1/2}Z$, where
$Z\sim N_r(0,I_r)$, and
$$ \operatorname{supp}(\mu_X)=m+\operatorname{Ran}(C). $$
Here $C^\dagger$ is the unique matrix satisfying
$CC^\dagger C=C$, $C^\dagger CC^\dagger=C^\dagger$, and such that
$CC^\dagger$ and $C^\dagger C$ are symmetric. If $r=0$, then
$C=0$, $X=m$ almost surely, $C^\dagger=0$, and the support is $\{m\}$.

## Statement references

[[def-multivariate-normal-law|A finite Gaussian law permits singular positive-semidefinite covariance and has the corresponding square-root representation.]]

[[def-moore-penrose-pseudoinverse|The Moore–Penrose pseudoinverse is defined by the four Penrose equations.]]

## Facts & Assumptions

**Given:** AC, a finite-dimensional real inner-product space, a symmetric
positive-semidefinite covariance matrix $C$, a mean vector $m$, and a supplied
law $X\sim N_n(m,C)$.

[A1] AC is assumed by the multivariate-normal and standard-normal construction
interfaces. [[def-axiom-of-choice]]

[F1] A finite-dimensional non-negative operator has an orthonormal eigenbasis
with non-negative eigenvalues. [[thm-non-negative-operator-characterisations]]

[F2] A finite-dimensional non-negative operator has a unique non-negative
square root. [[thm-non-negative-square-root-exists-and-is-unique]]

[F3] A multivariate-normal law permits singular covariance and is the law of
its mean plus the covariance square root applied to a vector of independent
standard-normal coordinates. [[def-multivariate-normal-law]]

[F4] A positive-definite multivariate-normal covariance gives a Lebesgue
density that is strictly positive everywhere. [[thm-nondegenerate-multivariate-normal-law-has-density]]

[F5] A matrix is a Moore–Penrose pseudoinverse when it satisfies the four
Penrose equations, and every finite real matrix has a unique such matrix.
[[def-moore-penrose-pseudoinverse]], [[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]

## Proof
**Given:** The hypotheses in the Statement.

1.1 By [F1], choose an orthonormal eigenbasis of $C$ and order it so the positive eigenvalues are $\lambda_1,\ldots,\lambda_r$. Let $U$ have the corresponding eigenvectors as columns and set $\Lambda=\operatorname{diag}(\lambda_1,\ldots,\lambda_r)$. The zero eigenspace is the orthogonal complement of these columns, so $C=U\Lambda U^T$ and $\operatorname{Ran}(C)=\operatorname{Ran}(U)$. When $r=0$, the eigenbasis gives $C=0$. [given, F1, algebra]

2.1 If $r>0$, set $P=U\Lambda^{-1}U^T$. The decomposition in step 1.1 gives $CP=PC=UU^T$, hence $CPC=C$ and $PCP=P$; also $CP$ and $PC$ are symmetric. Thus $P$ satisfies all four equations in [F5], so uniqueness gives $P=C^\dagger$. If $r=0$, the zero matrix satisfies the four equations for $C=0$, and uniqueness gives $C^\dagger=0$. [F5, step 1.1, algebra]

2.2 Suppose $r>0$. By [F2], the square root is $C^{1/2}=U\Lambda^{1/2}U^T$. By [F3], $X$ has the law of $m+U\Lambda^{1/2}U^TZ_n$ for a standard-normal vector $Z_n$. For every $a\in\mathbb R^r$, the scalar $a^TU^TZ_n=(Ua)^TZ_n$ is centered normal with variance $\|Ua\|_2^2=\|a\|_2^2$, so $U^TZ_n$ has law $N_r(0,I_r)$. Therefore $X$ has the stated representation. When $r=0$, [F3] makes $X=m$ almost surely. [A1, F2, F3, step 1.1, algebra]

3.1 If $r>0$, let $x=m+U\Lambda^{1/2}z$ be any point of $m+\operatorname{Ran}(C)$. The continuous map $t\mapsto m+U\Lambda^{1/2}t$ sends $z$ to $x$, so the preimage of every open ball about $x$ contains an open ball about $z$. By [F4], $N_r(0,I_r)$ assigns positive measure to every nonempty open ball. The representation in step 2.2 therefore gives positive $\mu_X$-mass to every neighborhood of $x$. Conversely, the law in step 2.2 is concentrated on the finite-dimensional closed affine subspace $m+\operatorname{Ran}(C)$; every point outside it has a neighborhood of zero mass. Hence the support is exactly that subspace. If $r=0$, the point-mass law from step 2.2 has support $\{m\}$. [F4, step 2.2, given, construct] ∎
