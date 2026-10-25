---
id: ex-cg-denominator-failure-and-minres-on-an-indefinite-system
kind: example
title: "CG's positive-denominator hypothesis fails on an indefinite system while MINRES can start"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cg-recursive-residual-gap-and-attainable-accuracy,
       def-conjugate-gradient-recurrence,
       def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix,
       def-minres-iterate-from-the-lanczos-tridiagonalization,
       def-krylov-subspace-of-a-matrix-and-start-vector]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Youcef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §§6.6–6.8, printed pp. 194–204"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
      locator: "Lanczos, MINRES, and conjugate-gradient recurrences; all small-system calculations are direct."
    - title: "David Bindel, Matrix Computations (CS 6210), Cornell University, Fall 2012, Lecture 35: Some minimization problems"
      url: "https://www.cs.cornell.edu/~bindel/class/cs6210-f12/notes/lec35.pdf"
      locator: "Complete five-page lecture; CG's SPD minimization conditions and Lanczos recurrence; the indefinite example is verified locally."
---

## Example

For $A_- =\operatorname{diag}(1,-1)$, $b=(1,1)^{\mathsf T}$, and $x_0=0$,
evaluate the formal first CG denominator expression $b^{\mathsf T}A_-b$ outside
the CG definition's SPD domain, and compute the first MINRES least-squares problem and
the exact solution's membership in $K_2(A_-,b)$. Contrast this with the first
CG denominator for $A_+=\operatorname{diag}(1,2)$ and the same $b,x_0$, and
verify that one exact CG step decreases the $A_+$-energy error norm from
$\sqrt{3/2}$ to $1/\sqrt6$.

## Facts & Assumptions

**Given:** The two real diagonal systems and starting data in the Example.

[F1] [[def-conjugate-gradient-recurrence]]: for real SPD $A$, $x_0=0$, and $b\ne0$, one has $p_0=r_0=b$ and the first CG step uses $\alpha_0=(b^{\mathsf T}b)/(p_0^{\mathsf T}A p_0)$. Substitution of an indefinite matrix into this formula is only a formal attempt to extend it beyond its defined domain.

[F2] [[thm-cg-recursive-residual-gap-and-attainable-accuracy]]: its hypotheses require a symmetric positive-definite matrix; it makes no claim for the indefinite system $A_-$.

[F3] [[def-minres-iterate-from-the-lanczos-tridiagonalization]]: MINRES step $1$ minimizes $\|\beta e_1-\bar T_1y\|_2$, where $\beta=\|r_0\|_2$, when Lanczos completes its first column without breakdown.

[F4] [[def-krylov-subspace-of-a-matrix-and-start-vector]]: $K_2(A,b)=\operatorname{span}\{b,Ab\}$.

[F5] [[def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix]]: for real SPD $A$, $\|e\|_A^2=e^{\mathsf T}Ae$.

## Verification

1.1 Formally setting $p_0=b$ for $A_-$ gives $A_-p_0=(1,-1)^{\mathsf T}$, so $p_0^{\mathsf T}A_-p_0=1-1=0$ while $b^{\mathsf T}b=2$. Thus attempting the first CG update formula would divide by zero. Since $A_-$ is indefinite, [F1] does not define a CG step for it, and the SPD theorem [F2] does not apply. [given, F1, F2, algebra]

1.2 The normalized first Lanczos vector is $q_1=b/\sqrt2$. Then $q_1^{\mathsf T}A_-q_1=0$ and $A_-q_1=(1,-1)^{\mathsf T}/\sqrt2$ has norm $1$, so the first subdiagonal coefficient is $\beta_1=1>0$. Hence [F3] applies at step $1$, with $\beta=\|r_0\|_2=\sqrt2$ and $\bar T_1=(0,1)^{\mathsf T}$. The squared objective is $\|(\sqrt2,0)^{\mathsf T}-(0,y)^{\mathsf T}\|_2^2=2+|y|^2$, uniquely minimized at $y=0$ even over $\mathbb C$. Also $b$ and $A_-b=(1,-1)^{\mathsf T}$ are linearly independent, so [F4] gives $K_2(A_-,b)=\mathbb R^2$. The exact solution $A_-^{-1}b=(1,-1)^{\mathsf T}$ therefore lies in $K_2$; no step-$2$ MINRES claim is needed after the invariant-subspace breakdown. [given, F3, F4, algebra]

2.1 For $A_+$, the first CG denominator is $b^{\mathsf T}A_+b=1+2=3>0$ and $\alpha_0=2/3$. The exact solution is $x_*=A_+^{-1}b=(1,1/2)^{\mathsf T}$, so $e_0=x_*-x_0=(1,1/2)^{\mathsf T}$ and [F5] gives $\|e_0\|_{A_+}^2=1+2(1/2)^2=3/2$. The first iterate is $x_1=x_0+\alpha_0b=(2/3,2/3)^{\mathsf T}$, hence $e_1=x_*-x_1=(1/3,-1/6)^{\mathsf T}$ and $\|e_1\|_{A_+}^2=(1/3)^2+2(1/6)^2=1/6$. Thus the energy-error norm decreases from $\sqrt{3/2}$ to $1/\sqrt6$, a factor of $1/3$. The recursive residual is $r_1=b-\alpha_0A_+b=(1/3,-1/3)^{\mathsf T}\ne0$. This verifies the positive first denominator and energy decrease in this SPD instance, contrasting with step 1.1. [given, F1, F5, algebra] ∎
