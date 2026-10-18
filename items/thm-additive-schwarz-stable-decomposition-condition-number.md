---
id: thm-additive-schwarz-stable-decomposition-condition-number
kind: theorem
title: "Additive Schwarz condition bound from stable decomposition and synthesis"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-overlapping-schwarz-subspace-correction-data
  - lem-schwarz-local-matrices-are-well-defined
  - lem-schwarz-local-corrections-are-energy-orthogonal-projections
  - lem-schwarz-additive-inverse-is-local-energy-minimum
  - thm-cauchy-schwarz-in-an-inner-product-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jinchao Xu, Iterative Methods by Space Decomposition and Subspace
        Correction, SIAM Review 34(4) (1992)"
      url: https://numerik.mi.fu-berlin.de/wiki/SS_2020/NumericsIII_Dokumente/Xu92.pdf
      locator: "Section 4.1, Theorem 4.1 and proof, printed pp. 591–592: stable
        splitting and strengthened Cauchy–Schwarz bound the spectrum of the
        additive preconditioner."
    - title: "Peter Bastian, Lecture Notes on Parallel Solution of Large Sparse Linear
        Systems, University of Heidelberg (2015)"
      url: https://conan.iwr.uni-heidelberg.de/data/scripts/num3.pdf
      locator: "Chapter 4 §4.2, Lemmas 4.5 and 4.7 and Theorem 4.8, printed pp. 60–63."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Use the data of [[def-overlapping-schwarz-subspace-correction-data]] and
assume the local spaces span $V$. Suppose $0<C_0,C_1<\infty$ satisfy:

- for every $x\in V$, there are local vectors $z_i$ such that
  $x=\sum_iR_i z_i$ and $\sum_i z_i^{\mathsf T}A_i z_i\le C_0\|x\|_A^2$;
- for every tuple $(z_i)$,
  $\|\sum_iR_i z_i\|_A^2\le C_1\sum_i z_i^{\mathsf T}A_i z_i$.

For an $A$-self-adjoint positive operator $T$, define
$$ \lambda_{\min}^A(T)=\inf_{x\ne0}\frac{a(Tx,x)}{a(x,x)},\qquad \lambda_{\max}^A(T)=\sup_{x\ne0}\frac{a(Tx,x)}{a(x,x)},\qquad \kappa_A(T)=\frac{\lambda_{\max}^A(T)}{\lambda_{\min}^A(T)}. $$
Then the exact additive Schwarz operator $T=BA$ is $A$-self-adjoint positive and
$$ \lambda_{\min}^A(BA)\ge C_0^{-1},\qquad \lambda_{\max}^A(BA)\le C_1,\qquad \kappa_A(BA)\le C_0C_1. $$
If the inexact local matrices satisfy
$\alpha A_i\preceq\widetilde A_i\preceq\beta A_i$ for
$0<\alpha\le\beta$, then
$$ \lambda_{\min}^A(\widetilde BA)\ge(\beta C_0)^{-1},\qquad \lambda_{\max}^A(\widetilde BA)\le C_1/\alpha,\qquad \kappa_A(\widetilde BA)\le(\beta/\alpha)C_0C_1. $$

## Facts & Assumptions

**Given:** The real SPD matrix $A$, the prolongations $R_i$, stable-decomposition
constant $C_0$, synthesis constant $C_1$, and, for the inexact branch,
uniform local spectral-equivalence constants $\alpha,\beta$.

[F1] The exact additive preconditioner is
$B=\sum_iR_iA_i^{-1}R_i^{\mathsf T}$, with
$\Pi_i=R_iA_i^{-1}R_i^{\mathsf T}A$ and $BA=\sum_i\Pi_i$
([[def-overlapping-schwarz-subspace-correction-data]]).

[F2] Each $\Pi_i$ is an $A$-orthogonal projection and
$a(\Pi_i x,x)=\|\Pi_i x\|_A^2$
([[lem-schwarz-local-corrections-are-energy-orthogonal-projections]]).

[F3] If the local spaces span $V$, $B$ is SPD and
$x^{\mathsf T}B^{-1}x$ is the minimum summed local energy over decompositions
([[lem-schwarz-additive-inverse-is-local-energy-minimum]]).

[F4] The exact local matrices $A_i$ are SPD
([[lem-schwarz-local-matrices-are-well-defined]]).

[F5] In every real inner-product space,
$|a(u,v)|\le\|u\|_A\|v\|_A$
([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof

1.1 The stable-decomposition hypothesis implies that the local spaces span $V$, so [F3] makes $B$ SPD. Each $\Pi_i$ is $A$-self-adjoint by [F2], hence $T=BA=\sum_i\Pi_i$ is $A$-self-adjoint. Moreover $a(Tx,x)=\sum_i\|\Pi_i x\|_A^2\ge0$; if this is zero, then every $\Pi_i x=0$. For any $v_i\in V_i$, [F2] gives $\Pi_i v_i=v_i$, so $a(x,v_i)=a(\Pi_i x,v_i)=0$. The spaces span $V$, hence $x=0$ and $T$ is positive. [F1, F2, F3, given]

1.2 Fix $x\ne0$ and choose the decomposition $x=\sum_iR_i z_i$ from the stable-decomposition hypothesis. Orthogonal projection gives $\|x\|_A^2 =\sum_i a(x,R_i z_i) =\sum_i a(\Pi_i x,R_i z_i) \le \left(\sum_i\|\Pi_i x\|_A^2\right)^{1/2} \left(\sum_i z_i^{\mathsf T}A_i z_i\right)^{1/2}.$ The last inequality is [F5] in the product inner product on the finite tuple space. The assumed bound on the second factor yields $a(Tx,x)=\sum_i\|\Pi_i x\|_A^2\ge C_0^{-1}\|x\|_A^2$, proving the lower Rayleigh bound. [F1, F2, F5, given, algebra]

1.3 For each $x$, write $\Pi_i x=R_i y_i$ with $y_i=A_i^{-1}R_i^{\mathsf T}Ax$. The synthesis hypothesis and [F2] give $\|Tx\|_A^2 =\left\|\sum_iR_i y_i\right\|_A^2 \le C_1\sum_i\|\Pi_i x\|_A^2 =C_1a(Tx,x).$ Set $q=a(Tx,x)/\|x\|_A^2$. [F5] gives $q\|x\|_A\le\|Tx\|_A$, while the displayed inequality gives $\|Tx\|_A^2\le C_1q\|x\|_A^2$. If $q>0$, these imply $q\le C_1$; if $q=0$, the same upper bound is immediate. [F1, F2, F5, given, algebra]

1.4 By [F4] and the assumed lower order bound, every $\widetilde A_i$ is SPD. For every SPD matrix $M$ and vector $y$, $y^{\mathsf T}M^{-1}y =\max_z\bigl(2y^{\mathsf T}z-z^{\mathsf T}Mz\bigr),$ because completing the square subtracts $(z-M^{-1}y)^{\mathsf T}M(z-M^{-1}y)$. Since $\widetilde A_i\preceq\beta A_i$, this maximum for $\widetilde A_i$ is at least the maximum for $\beta A_i$, namely $\beta^{-1}y^{\mathsf T}A_i^{-1}y$; since $\alpha A_i\preceq\widetilde A_i$, it is at most the maximum for $\alpha A_i$, namely $\alpha^{-1}y^{\mathsf T}A_i^{-1}y$. Thus $\beta^{-1}A_i^{-1}\preceq\widetilde A_i^{-1}\preceq\alpha^{-1}A_i^{-1}$. Summing after congruence by $R_i$ yields $\beta^{-1}B\preceq\widetilde B\preceq\alpha^{-1}B$. [F4, given, algebra]

2.1 Step 1.4 establishes that each inverse in $\widetilde B$ is SPD. By the stable-decomposition hypothesis, the local spaces span $V$; hence if $x\ne0$ then $R_i^{\mathsf T}x\ne0$ for some $i$, since otherwise $x$ would be Euclidean-orthogonal to their span $V$. Therefore $x^{\mathsf T}\widetilde Bx=\sum_i(R_i^{\mathsf T}x)^{\mathsf T}\widetilde A_i^{-1}(R_i^{\mathsf T}x)>0$, so $\widetilde B$ is symmetric positive definite. It follows that $\widetilde BA$ is $A$-self-adjoint and positive, because $A\widetilde BA$ is symmetric positive definite; the inexact Rayleigh quotient and condition number are therefore defined. The matrix comparison in step 1.4 bounds $a(\widetilde BAx,x)=x^{\mathsf T}A\widetilde BAx$ below by $\beta^{-1}x^{\mathsf T}ABAx$ and above by $\alpha^{-1}x^{\mathsf T}ABAx$. The exact bounds in steps 1.2 and 1.3 therefore give the stated inexact minimum, maximum, and condition-ratio bounds. [given, step 1.1, step 1.2, step 1.3, step 1.4, algebra] ∎
