---
id: ex-conjugate-gradients-can-terminate-at-a-relative-grade-smaller-than-the-dimension
kind: example
title: "CG can terminate at a relative grade strictly smaller than the ambient dimension"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-conjugate-gradient-terminates-by-the-relative-grade-in-exact-arithmetic,
       def-grade-and-relative-minimal-polynomial-of-a-start-vector]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Magnus R. Hestenes and Eduard Stiefel, Methods of Conjugate Gradients for Solving Linear Systems"
      url: "https://math.nist.gov/mcsd/Reports/2002/hestenes-steifel-52.pdf"
---

## Example

Let

$$A=\operatorname{diag}(1,1,2),\qquad b=\begin{pmatrix}1\\1\\0\end{pmatrix},\qquad x_0=\begin{pmatrix}0\\0\\0\end{pmatrix}.$$

Then the initial residual is $r_0=b$, its grade is $1$, and CG reaches the
exact solution in one step although the ambient dimension is $3$.

## Facts & Assumptions

**Given:** The displayed Hermitian positive-definite system.

[F1] The grade $\nu(A,r_0)$ is the degree of the relative minimal polynomial of
$r_0$
([[def-grade-and-relative-minimal-polynomial-of-a-start-vector]]).

[L1] Exact-arithmetic CG terminates no later than the relative grade
([[thm-conjugate-gradient-terminates-by-the-relative-grade-in-exact-arithmetic]]).

## Verification
**Proof technique:** direct calculation.

1.1 Since $Ar_0=r_0$, the polynomial $q(z)=z-1$ annihilates $r_0$. The vector $r_0$ is nonzero, so no constant polynomial can annihilate it. Therefore $q_{A,r_0}(z)=z-1$ and $\nu(A,r_0)=1$ by [F1]. In particular, $1<3=\dim\mathbb R^3$. [F1, algebra]

2.1 The exact solution is $x_*=A^{-1}b=(1,1,0)^T=r_0$. Because $p_0=r_0$ and $$\alpha_0=\frac{r_0^Tr_0}{p_0^TAp_0}=\frac{2}{2}=1,$$ the first CG update gives $x_1=x_0+\alpha_0p_0=r_0=x_*$. Thus the method stops at step $1=\nu(A,r_0)$, exactly as [L1] allows. [L1, step 1.1, algebra] ∎
