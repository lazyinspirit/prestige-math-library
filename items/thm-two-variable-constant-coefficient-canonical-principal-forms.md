---
id: thm-two-variable-constant-coefficient-canonical-principal-forms
kind: theorem
title: "Constant-coefficient second-order equations in two variables have canonical principal forms"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-symmetric-principal-part-has-a-signature-normal-form,
       def-two-variable-second-order-discriminant,
       thm-two-variable-type-and-characteristic-directions-are-coordinate-invariant]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-pde/"
---

## Statement

Let

$$A u_{xx}+2B u_{xy}+C u_{yy}+\text{lower-order terms}=0$$

have constant real coefficients in its principal part.

If $B^2-AC<0$, an invertible linear change of variables and multiplication by a
nonzero scalar reduce the principal part to $u_{\xi\xi}+u_{\eta\eta}$.

If $B^2-AC>0$, such a change reduces it to $u_{\xi\xi}-u_{\eta\eta}$.

If $B^2-AC=0$ but $(A,B,C)\neq(0,0,0)$, such a change reduces it to
$u_{\xi\xi}$.

## Facts & Assumptions

**Given:** The constant symmetric matrix
$M=\begin{pmatrix}A&B\\ B&C\end{pmatrix}$ of the principal quadratic form.

[L1] A symmetric second-order principal part has a signature normal form whose
signature is coordinate invariant
([[thm-symmetric-principal-part-has-a-signature-normal-form]]).

[L2] In two variables the sign of $B^2-AC$ is coordinate invariant
([[thm-two-variable-type-and-characteristic-directions-are-coordinate-invariant]]).

[L3] The discriminant is $B^2-AC$
([[def-two-variable-second-order-discriminant]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], an invertible linear change of variables diagonalizes the constant principal matrix to $\operatorname{diag}(1,1)$, $\operatorname{diag}(1,-1)$, $\operatorname{diag}(1,0)$, or the negative of one of these matrices, and multiplying the equation by a nonzero scalar removes the global sign. [L1]

2.1 By [L3], these three normal forms have discriminants $-1$, $1$, and $0$, and [L2] says that the sign of the discriminant is the invariant datum distinguishing them; therefore the principal part reduces to the Laplace, wave, or rank-one parabolic form listed in the statement. [L2, L3, step 1.1] ∎
