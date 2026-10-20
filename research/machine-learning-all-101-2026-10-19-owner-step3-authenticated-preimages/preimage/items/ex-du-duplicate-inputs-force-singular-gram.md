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

[F2] Every defined fully connected matrix $K^{(h)}$, every residual feature second-moment matrix $S^{(h)}$ (including $S^{(0)}=K^{(0)}$), and both terminal matrices are finite, symmetric and positive semidefinite. [[lem-du-population-gram-kernels-are-finite-symmetric-psd]]

[F3] A real symmetric matrix has an orthonormal eigenbasis. [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]

[F4] A property holding at zero and preserved by successor holds for every natural-number index. [[thm-induction-principle]]

[A1] AC, DC and countable choice are assumed for the population Gram supplier. [[def-axiom-of-choice]] [[def-dependent-choice]] [[def-countable-choice]]

## Verification

**Given:** $x_i=x_j$ for distinct indices $i,j$.

**Proof technique:** induction on the layer index.

1.1 The rows $i,j$ of $K^{(0)}$ coincide because $K_{i\ell}^{(0)}=\langle x_i,x_\ell\rangle=\langle x_j,x_\ell\rangle=K_{j\ell}^{(0)}$ for every $\ell$. This is the base case. [base, A1, F1, given, algebra]

1.2 Assume rows $i,j$ of $K^{(h-1)}$ coincide. By [F2], the matrix is symmetric, so the corresponding columns coincide as well. For each $\ell$, the covariance matrices $A_{i\ell}^{(h)}$ and $A_{j\ell}^{(h)}$ are equal. Thus the Gaussian activation expectations agree for $h<H$, and for $h=H$ both the derivative expectations and prefactors $K_{i\ell}^{(H-1)}$, $K_{j\ell}^{(H-1)}$ agree. Hence rows $i,j$ of the fully connected $K^{(h)}$ coincide. [ih, F1, F2, given, algebra]

2.1 For the fixed $H$, let $P(h)$ assert that rows $i,j$ of $K^{(h)}$ coincide for $0\le h\le H$. Step 1.1 gives the base, and step 1.2 proves $P(h)$ from $P(h-1)$ for every $1\le h\le H$. By [F4], the fully connected terminal rows coincide. For $H=1$, the residual terminal matrix equals this fully connected terminal matrix by definition, so its rows also coincide. [A1, F1, F2, F4, step 1.1, step 1.2, algebra, discharge-induction]

2.2 Now assume $H\ge2$. For $1\le h<H$, let $Q(h)$ assert both that rows $i,j$ of $S^{(h)}$ coincide and that $b_i^{(h)}=b_j^{(h)}$. The base $S^{(0)}=K^{(0)}$ has equal rows by step 1.1. At layer $1$, this equality and symmetry from [F2] make the pair covariance matrices for indices $(i,\ell)$ and $(j,\ell)$ identical for every $\ell$, and give $S_{ii}^{(0)}=S_{jj}^{(0)}$. Hence the Gaussian marginal means agree, so the defining formulas give $S_{i\ell}^{(1)}=S_{j\ell}^{(1)}$ for every $\ell$ and $b_i^{(1)}=b_j^{(1)}$; this proves $Q(1)$. For $2\le h<H$, assume $Q(h-1)$. Symmetry from [F2] and equal rows of $S^{(h-1)}$ give equal columns, so the covariance matrices for $(i,\ell)$ and $(j,\ell)$ coincide and $\mu_i^{(h-1)}=\mu_j^{(h-1)}$. In the mean recursion this gives $b_i^{(h)}=b_j^{(h)}$. In the second-moment recursion, the old-row terms agree, the terms $b_i^{(h-1)}\mu_\ell^{(h-1)}+b_\ell^{(h-1)}\mu_i^{(h-1)}$ agree with their $j$-row counterparts, and the Gaussian activation expectations agree; thus $S_{i\ell}^{(h)}=S_{j\ell}^{(h)}$ for every $\ell$. This proves $Q(h)$. Finite induction gives $Q(H-1)$. The terminal residual formula then has equal prefactors $S_{i\ell}^{(H-1)}=S_{j\ell}^{(H-1)}$ and equal derivative expectations because the corresponding pair covariance matrices coincide. Therefore the terminal residual rows coincide. [A1, F1, F2, F4, step 1.1, construct, algebra, discharge-induction]

3.1 For either terminal matrix, let $v=e_i-e_j\ne0$. Symmetry and equal rows imply $K^{(H)}v=0$. By [F2]–[F3], this matrix is positive semidefinite and has a nonzero null vector, so zero is an eigenvalue and the smallest eigenvalue is zero. This proves the residual branch and completes the example. [A1, F2, F3, step 2.1, step 2.2, algebra, discharge-induction] ∎
