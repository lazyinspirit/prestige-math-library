---
id: ex-real-form-classes-discriminant-twelve-narrow-versus-ordinary
kind: example
title: Discriminant Twelve Distinguishes Narrow and Ordinary Ideal Classes
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - thm-primitive-forms-correspond-to-proper-ideal-classes-of-quadratic-orders
  - cor-real-form-classes-are-narrow-ideal-classes
  - thm-proper-invertible-ideal-classes-form-abelian-group
  - def-proper-invertible-ideal-class-group-of-a-quadratic-order
  - def-quadratic-order-of-discriminant
  - def-field-norm-and-trace
  - def-binary-quadratic-form-over-integers
  - def-primitive-binary-quadratic-form
  - def-discriminant-of-binary-quadratic-form
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
---

## Example

In $\mathcal O_{12}=\mathbb Z[\sqrt3]$, the primitive form $Q=(2,2,-1)$ has
discriminant $12$ and corresponds, with positive basis orientation, to
$I_Q=2\mathbb Z+(1+\sqrt3)\mathbb Z=(1+\sqrt3)\mathcal O_{12}$. Its ordinary
ideal class is principal. Its narrow class is nontrivial: a totally positive
generator would be $x+y\sqrt3$ with $x,y\in\mathbb Z$ and
$x^2-3y^2=2$, which is impossible modulo $3$.

## Facts & Assumptions

**Given:** $D=12$, $\mathcal O_{12}=\mathbb Z[\sqrt3]$, and $Q=(2,2,-1)$.

[F1] [[def-quadratic-order-of-discriminant]]: for $D=12$, $\delta=0$, $\tau_D=\sqrt3$, and $\mathcal O_{12}=\mathbb Z[\sqrt3]$.

[F2] [[thm-primitive-forms-correspond-to-proper-ideal-classes-of-quadratic-orders]]: for a positive discriminant, $Q$ maps to its oriented ideal class using the sign of its leading coefficient.

[F3] [[cor-real-form-classes-are-narrow-ideal-classes]]: when $a>0$, the standard narrow class is $[I_Q]$.

[F4] [[def-proper-invertible-ideal-class-group-of-a-quadratic-order]]: ordinary classes quotient by all principal ideals, while narrow classes quotient only by totally positive principal ideals.

[F5] [[def-field-norm-and-trace]]: norm and trace are the determinant and trace of multiplication by $\lambda$.

## Verification

1.1 The form is primitive because $\gcd(2,2,-1)=1$, and its discriminant is $2^2-4\cdot2\cdot(-1)=12$. Here $\theta_Q=(2+\sqrt{12})/2=1+\sqrt3$, so $I_Q=2\mathbb Z+(1+\sqrt3)\mathbb Z$. [F1, F2, given, algebra]

2.1 The ideal $(1+\sqrt3)\mathcal O_{12}$ is generated over $\mathbb Z$ by $1+\sqrt3$ and $3+\sqrt3$. Their difference is $2$, hence this ideal equals $I_Q$ and its ordinary ideal class is the identity. [F1, F4, step 1.1, algebra]

2.2 If the narrow class were the identity, there would be a totally positive $\lambda=x+y\sqrt3$ with $I_Q=\lambda\mathcal O_{12}$. Since $\lambda\in I_Q\subseteq\mathcal O_{12}$, $x,y\in\mathbb Z$. The basis matrix of $I_Q$ in $(1,\sqrt3)$ is $\begin{pmatrix}2&1\\0&1\end{pmatrix}$ with determinant $2$. Multiplication by $\lambda$ has matrix $\begin{pmatrix}x&3y\\y&x\end{pmatrix}$, and its columns are another basis of the same ideal, so its determinant has absolute value $2$. The product of the two real embedding values of a totally positive $\lambda$ is positive; therefore $x^2-3y^2=N(\lambda)=2$. [F1, F4, F5, step 1.1, algebra]

3.1 Reducing $x^2-3y^2=2$ modulo $3$ gives $x^2\equiv2\pmod3$, but the only square residues modulo $3$ are $0$ and $1$. This contradiction proves that $[I_Q]$ is nontrivial narrowly. Since the leading coefficient is positive, [F3] identifies it with the form's narrow class. [F3, step 2.2, algebra] ∎
