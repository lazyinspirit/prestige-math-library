---
id: ex-aqft-coupled-rge-linear-mixing
kind: example
title: A two-component truncated RG flow with linear mixing
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 5
deps:
  - def-aqft-scheme-and-wilson-coefficients
  - thm-aqft-truncated-coupled-rge-wellposedness
justified_by: []
forward_refs: []
dependency_roles:
  def-aqft-scheme-and-wilson-coefficients: mathematical-premise
  thm-aqft-truncated-coupled-rge-wellposedness: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references: []
verification:
  precheck: pass
---

## Example

Take a supplied fixed-weight quotient $V=\mathcal Q_6$ of complex dimension
two, with ordered basis representatives $O_1,O_2$ of engineering weight six,
a cutoff $\Lambda>0$, and a scheme whose renormalization-scale interval is
$J=(0,\infty)$. In natural units use the dimensionless coefficient vector
$C(t)=(C_1(t),C_2(t))^T$ and the formal quotient expression
$$\mathcal L_{\mathrm{trunc}}(t)=\frac{C_1(t)O_1+C_2(t)O_2}{\Lambda^2},\qquad t=\log(\mu/\mu_0).$$
Supply the constant complex-linear coefficient-flow matrix
$$A=\begin{pmatrix}-1&1\\0&-2\end{pmatrix}$$
and initial vector $C(0)=(1,1)^T$. In real coordinates the supplied vector
field is $\beta(t,\rho_2(C))=\rho_2(AC)$ on
$\mathbb R\times\mathbb R^4$. The resulting truncated system is $C'=AC$,
and its solution on all $t\in\mathbb R$ is
$$C(t)=\begin{pmatrix}2e^{-t}-e^{-2t}\\e^{-2t}\end{pmatrix}.$$
The matrix is supplied as part of this mathematical example; it is not
calculated from a QFT and gives no estimate for omitted terms.

## Example references

[[def-aqft-scheme-and-wilson-coefficients]]

[[thm-aqft-truncated-coupled-rge-wellposedness]]

## Facts & Assumptions

**Given:** The supplied two-dimensional complex coefficient quotient and basis, the RG interval $J=(0,\infty)$, matrix $A$, and initial value $C(0)=(1,1)^T$ in the Example.

[F1] [[def-aqft-scheme-and-wilson-coefficients]]: the coefficient space is $\mathbb C^N$, its realification $\rho_N$ is an isometry to $\mathbb R^{2N}$, and $t=\log(\mu/\mu_0)$ is dimensionless.

[F2] [[thm-aqft-truncated-coupled-rge-wellposedness]]: a supplied continuous vector field locally Lipschitz in the coefficient state has unique local solutions, unique agreement on common intervals, and the stated local continuous-dependence estimate.

## Verification

**Proof technique:** direct differentiation, followed by the local well-posedness theorem.

**Given:** [F1], [F2], and the supplied data in the Example.

1.1 At $t=0$, the displayed vector has components $2-1=1$ and $e^0=1$, so it satisfies the stated initial condition. [given, algebra]

2.1 Differentiating gives $C_1'(t)=-2e^{-t}+2e^{-2t}$ and $C_2'(t)=-2e^{-2t}$. The first component of $AC$ is $-C_1+C_2=-2e^{-t}+2e^{-2t}$, and the second is $-2C_2=-2e^{-2t}$. Thus the displayed curve solves $C'=AC$ for every real $t$. [given, step 1.1, algebra]

3.1 For $\Delta=C-D\in\mathbb C^2$, the triangle inequality and $(a-b)^2\ge0$ for $a,b\ge0$ give $|{-}\Delta_1+\Delta_2|^2\le(|\Delta_1|+|\Delta_2|)^2\le2(|\Delta_1|^2+|\Delta_2|^2)$. Also $|{-}2\Delta_2|^2=4|\Delta_2|^2$. Adding these bounds gives $\|A\Delta\|_2^2\le2|\Delta_1|^2+6|\Delta_2|^2\le6\|\Delta\|_2^2$. By the isometry $\rho_2$, the real vector field is globally Lipschitz with constant $\sqrt6$ and is continuous. Theorem [F2] gives uniqueness on every common interval. The displayed solution exists on all $\mathbb R$, so it is the unique global solution of this supplied system. [F1, F2, step 1.1, step 2.1, algebra] ∎
