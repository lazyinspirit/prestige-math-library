---
id: ex-degree-one-green-pairing-normalization-of-jordan-fock-action
kind: example
title: "Degree-one normalization for the Jordan Hall Green pairing and Fock action"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - thm-jordan-quiver-hall-module-realizes-normalized-heisenberg-fock-action
  - thm-jordan-hall-pairing-and-hall-littlewood-basis
  - def-hall-inner-product-on-symmetric-functions
  - cor-power-sums-are-orthogonal-for-the-hall-inner-product
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2, §2.4, equation (2.9)"
      url: "https://arxiv.org/pdf/math/0611617v2"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §4, equations (4.5)–(4.7) and Remark 8"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
---

## Example

For $p_1^r$ ($r\ge0$), the ordinary symmetric-function Hall form has norm
$\langle p_1^r,p_1^r\rangle_H=r!$, while the transported Jordan Green
pairing has norm $(p_1^r,p_1^r)_G=r!(t-1)^{-r}$. If $X_1$ is multiplication
by $p_1$, its adjoints therefore satisfy
$$X_1^{\dagger,H}p_1^r=r p_1^{r-1},\qquad X_1^{\dagger,G}p_1^r=\frac{r}{t-1}p_1^{r-1}\quad(r\ge1),$$
and the normalized Fock operator $P_1=(t-1)X_1^{\dagger,G}$ has the usual
derivative action $P_1p_1^r=r p_1^{r-1}$; both adjoints kill $1$.
Here $X_1^\dagger$ denotes the adjoint characterized by
$\langle X_1f,g\rangle=\langle f,X_1^\dagger g\rangle$ for the indicated
bilinear form; the diagonal nonzero power-sum norms make these adjoints
well-defined degree by degree.

## Facts & Assumptions

**Given:** The standard Hall form, the transported Green pairing, and the
normalized positive mode from the A-page Fock representation.

[F1] [[def-hall-inner-product-on-symmetric-functions]] and
[[cor-power-sums-are-orthogonal-for-the-hall-inner-product]]:
$\langle p_\lambda,p_\mu\rangle_H=\delta_{\lambda\mu}z_\lambda$ for all
partitions $\lambda,\mu$, so $\langle p_1^r,p_1^r\rangle_H=r!$.

[F2] [[thm-jordan-hall-pairing-and-hall-littlewood-basis]]: the transported
Green pairing is diagonal,
$(p_\lambda,p_\mu)_G=\delta_{\lambda\mu}z_\lambda\prod_i(t^{\lambda_i}-1)^{-1}$,
so $(p_1^r,p_1^r)_G=r!(t-1)^{-r}$.

[F3] [[thm-jordan-quiver-hall-module-realizes-normalized-heisenberg-fock-action]]:
$P_1=(t-1)X_1^{\dagger,G}=\partial/\partial p_1$.

## Verification

1.1 The Hall norm formula in [F1] gives $\langle p_1^r,p_1^r\rangle_H=r!$ because $z_{(1^r)}=r!$; the Green norm in [F2] gives $(p_1^r,p_1^r)_G=r!(t-1)^{-r}$. At $r=0$ both are $1$ by the empty-product convention. [F1, F2, algebra]

1.2 For either form and any power-sum monomial $p_\mu$ of degree $r-1$, orthogonality makes the pairing of $p_1p_\mu$ with $p_1^r$ vanish unless $\mu=(1^{r-1})$. Nondegenerate diagonal norms then force each adjoint image of $p_1^r$ to be a multiple of $p_1^{r-1}$. Comparing against that monomial gives $X_1^{\dagger,H}p_1^r=rp_1^{r-1}$ and $X_1^{\dagger,G}p_1^r=\frac{r}{t-1}p_1^{r-1}$. [F1, F2, algebra]

2.1 By [F3], $P_1=(t-1)X_1^{\dagger,G}$, so $P_1p_1^r=rp_1^{r-1}$, the same as the standard Hall adjoint. At $r=0$ the degree-lowering adjoints send $1$ to zero. [F2, F3, step 1.2, algebra] ∎

