---
id: thm-symmetric-principal-part-has-a-signature-normal-form
kind: theorem
title: "A symmetric second-order principal part has a coordinate-invariant signature normal form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-elliptic-hyperbolic-and-parabolic-principal-symbols,
       cor-real-spectral-theorem-for-self-adjoint-endomorphisms,
       thm-sylvesters-law-of-inertia]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
---

## Statement

Fix a point $x_0$ of a scalar second-order operator whose principal part is

$$\sum_{i,j=1}^n a_{ij}(x_0)\,\partial_{x_i x_j},\qquad a_{ij}(x_0)=a_{ji}(x_0).$$

Then there is a linear change of coordinates near $x_0$ in which the frozen
principal quadratic form becomes

$$\xi_1^2+\cdots+\xi_p^2-\xi_{p+1}^2-\cdots-\xi_{p+q}^2,$$

with the remaining $r=n-p-q$ directions absent. The triple $(p,q,r)$ depends
only on the quadratic form, not on the chosen coordinates.

## Facts & Assumptions

**Given:** The symmetric coefficient matrix
$A=(a_{ij}(x_0))_{1\le i,j\le n}$ of the frozen principal part at $x_0$.

[L1] The order-$2$ principal symbol is the quadratic polynomial associated to
the symmetric coefficient matrix ([[def-elliptic-hyperbolic-and-parabolic-principal-symbols]]).

[L2] A self-adjoint endomorphism of a finite-dimensional real inner product
space has an orthonormal eigenbasis
([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[L3] A real symmetric bilinear form is congruent to exactly one diagonal form
$\operatorname{diag}(I_p,-I_q,0_r)$
([[thm-sylvesters-law-of-inertia]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the frozen principal symbol is $p_2(\xi)=\xi^T A\xi$, and because $A$ is symmetric, [L2] gives an orthonormal eigenbasis in which $A$ is diagonal with real eigenvalues $\lambda_1,\ldots,\lambda_n$. [L1, L2]

2.1 Rescaling each coordinate with $\lambda_i\neq0$ by $|\lambda_i|^{1/2}$ changes the nonzero diagonal entries to $1$ or $-1$ and leaves the zero eigenvalues unchanged, so the principal form becomes $\operatorname{diag}(I_p,-I_q,0_r)$; by [L3], the numbers of positive, negative, and zero directions are intrinsic. [L3, step 1.1]

3.1 Therefore the frozen symmetric principal part has the stated signature normal form, and its signature triple is invariant under further invertible linear coordinate changes. [step 2.1] ∎
