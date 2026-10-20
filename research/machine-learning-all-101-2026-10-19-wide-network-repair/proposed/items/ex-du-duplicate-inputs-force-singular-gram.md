---
id: ex-du-duplicate-inputs-force-singular-gram
kind: example
title: "Duplicate inputs force the population Gram matrix to be singular"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
  - def-du-overparameterized-network-architectures-and-gram-kernels
  - lem-du-population-gram-kernels-are-finite-symmetric-psd
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-induction-principle
justified_by: []
proof_strategy: induction
axiom_use: "AC, DC and countable choice are inherited from the population Gram supplier. Conditional on the matrices and their positive semidefiniteness, the finite equal-row calculation uses no further choice."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Du et al., Definition 5.1 and Appendix F.1"
      url: "https://proceedings.mlr.press/v97/du19c.html"
---

## Example

Assume AC, DC and countable choice, as in the population Gram lemma. Suppose two distinct training indices $i\ne j$ have the same input $x_i=x_j$. Then rows $i$ and $j$ of the population Gram matrix $K^{(H)}$ coincide, so $K^{(H)}$ has a nonzero null vector and its smallest eigenvalue is zero. Thus the strict-positivity hypothesis in the convergence theorems is substantive.

## Example references

[Du et al., Definition 5.1 and Appendix F.1](https://proceedings.mlr.press/v97/du19c.html)

[[def-du-overparameterized-network-architectures-and-gram-kernels|Population Gram recursion]]

[[lem-du-population-gram-kernels-are-finite-symmetric-psd|Positive semidefiniteness of the population Gram matrix]]

## Facts & Assumptions

**Given:** The population Gram recursion, repeated input indices $i\ne j$, and the finite Gram-matrix lemma.

[F1] The initial Gram matrix is the input inner-product matrix. The fully connected entries depend on the corresponding bivariate covariance matrices; residual entries additionally depend on the corresponding means. [[def-du-overparameterized-network-architectures-and-gram-kernels]]

[F2] The terminal matrix $K^{(H)}$ is symmetric and positive semidefinite. [[lem-du-population-gram-kernels-are-finite-symmetric-psd]]

[F3] A real symmetric matrix has an orthonormal eigenbasis. [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]

[F4] A property holding at zero and preserved by successor holds for every natural-number index. [[thm-induction-principle]]

[A1] AC, DC and countable choice are assumed for the population Gram supplier. [[def-axiom-of-choice]] [[def-dependent-choice]] [[def-countable-choice]]

## Verification

**Given:** $x_i=x_j$ for distinct indices $i,j$.

**Proof technique:** induction on the layer index.

1.1 The rows $i,j$ of $K^{(0)}$ coincide because $K_{i\ell}^{(0)}=\langle x_i,x_\ell\rangle=\langle x_j,x_\ell\rangle=K_{j\ell}^{(0)}$ for every $\ell$. This is the base case. [base, A1, F1, given, algebra]

2.1 Assume the rows $i,j$ of $K^{(h-1)}$ coincide. By [F2], $K^{(h-1)}$ is symmetric, so the corresponding columns also coincide. For each $\ell$, the covariance matrices $A_{i\ell}^{(h)}$ and $A_{j\ell}^{(h)}$ are equal; when $h<H$ their activation expectations therefore agree, and at $h=H$ both the derivative expectations and prefactors $K_{i\ell}^{(H-1)}$, $K_{j\ell}^{(H-1)}$ agree. Thus rows $i,j$ of the fully connected $K^{(h)}$ coincide. For the residual recursion, the first-layer means also agree because the initial variances agree. Assuming equal rows of $S^{(h-1)}$ and equal means $b_i^{(h-1)}=b_j^{(h-1)}$, the Gaussian marginal means satisfy $\mu_i^{(h-1)}=\mu_j^{(h-1)}$. Substitution in both residual recurrences gives equal rows of $S^{(h)}$ and equal new means. The terminal derivative formula then gives equal terminal rows as well. This supplies the same finite induction for the residual case; at $H=1$ the kernels coincide by definition. [ih, F1, F2, given, step 1.1, algebra]

3.1 For the fixed $H$, let $P(h)$ assert that rows $i,j$ of $K^{(h)}$ coincide for $0\le h\le H$. The base case is step 1.1; step 2.1 proves $P(h)$ from $P(h-1)$ for each $1\le h\le H$. Applying [F4] by finite induction therefore gives equal terminal rows, including the case $H=1$. Let $v=e_i-e_j\ne0$. Equal rows and symmetry imply $K^{(H)}v=0$. By [F2]–[F3], all eigenvalues are nonnegative and zero is an eigenvalue, so the smallest eigenvalue is zero. This proves the example and discharges the induction. [A1, F2, F3, F4, step 1.1, step 2.1, algebra, discharge-induction] ∎
