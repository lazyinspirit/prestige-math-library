---
id: ex-lanczos-repeated-top-zero-component-and-invariant-breakdown
kind: example
title: "Lanczos handles repeated top eigenvalues, absent top components, and exact breakdown"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-lanczos-largest-ritz-value-chebyshev-bound-with-degenerate-cases,
       def-krylov-subspace-of-a-matrix-and-start-vector,
       def-arnoldi-process,
       def-lanczos-process-as-hermitian-arnoldi]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Youcef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §§6.6 and 6.11.1, printed pp. 194–195 and 209–210"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
      locator: "Lanczos breakdown and extremal Ritz-value convergence; examples verified directly."
    - title: "David Bindel, Matrix Computations (CS 6210), Cornell University, Fall 2012, Lectures 38–39"
      url: "https://www.cs.cornell.edu/~bindel/class/cs6210-f12/notes/lec38-39.pdf"
      locator: "PDF pp. 3–6: Lanczos Ritz values and invariant-subspace behavior."
---

## Example

Check four branches of
[[thm-lanczos-largest-ritz-value-chebyshev-bound-with-degenerate-cases]]:
(i) $A=5I_1$ and $b=1$; (ii) $A=\operatorname{diag}(5,5,1)$ with
$b=(1,0,1)^{\mathsf T}/\sqrt2$; (iii)
$A=\operatorname{diag}(5,2,1)$ with $b=e_2$; and (iv) the same $A$ with
$b=(e_1+e_2)/\sqrt2$. Verify the Rayleigh–Ritz values, top-eigenspace
components, and exact invariant-subspace breakdown dimensions.

## Facts & Assumptions

**Given:** The matrices, vectors, Krylov spaces, and Rayleigh–Ritz values in the Example.

[F1] [[thm-lanczos-largest-ritz-value-chebyshev-bound-with-degenerate-cases]]: if the top eigenvalue has multiplicity $r=n$, every Rayleigh–Ritz value is $\lambda_1$; if $Pb=0$, every $\theta_m\le\lambda_{r+1}$; if the unwanted interval collapses and $Pb\ne0$, then $\theta_m=\lambda_1$ for $m\ge2$; and exact breakdown at dimension $d$ with $Pb\ne0$ gives $\theta_d=\lambda_1$.

[F2] [[def-krylov-subspace-of-a-matrix-and-start-vector]]: $K_m(A,b)=\operatorname{span}\{b,Ab,\ldots,A^{m-1}b\}$.

[F3] [[def-arnoldi-process]]: exact breakdown at a column means its orthogonalized residual is zero.

[F4] [[def-lanczos-process-as-hermitian-arnoldi]]: for a real symmetric matrix, exact Lanczos is the corresponding exact Arnoldi process specialized to the Hermitian three-term recurrence.

## Verification

1.1 In case (i), take $b=1$. Then $P=I$, $Pb=b\ne0$, and $K_1=\mathbb R$ is invariant under $A=5I_1$. The first Arnoldi residual is zero, so Lanczos breaks down at $d=1$; every nonzero vector has Rayleigh quotient $5$, giving $\theta_m=5$ for all $m\ge1$ by [F1]. In case (ii), $P$ projects onto $\operatorname{span}\{e_1,e_2\}$, so $Pb=e_1/\sqrt2\ne0$. Here $Ab=(5,0,1)^{\mathsf T}/\sqrt2$ and $Ab-b=(4,0,0)^{\mathsf T}/\sqrt2$, so $K_2(A,b)=\operatorname{span}\{e_1,e_3\}$, an invariant subspace. The first Arnoldi residual is nonzero, while $Aq_2\in K_2=\operatorname{span}\{q_1,q_2\}$ makes the second residual zero; hence Lanczos breaks down at $d=2$. Since $e_1\in K_2$ has Rayleigh quotient $5$, the maximum is $\theta_2=5$, as [F1] predicts for the collapsed interval branch. [given, F1, F2, F3, F4, algebra]

1.2 In case (iii), $P$ projects onto $e_1$, so $Pb=0$; $A e_2=2e_2$ gives $K_m(A,e_2)=\operatorname{span}\{e_2\}$ for every $m$, and therefore $\theta_m=2=\lambda_{r+1}$, in agreement with [F1]. At the first Arnoldi column, $Ae_2$ already lies in $K_1=\operatorname{span}\{e_2\}$, so subtracting its projection leaves zero residual. Thus [F3]–[F4] give exact Lanczos breakdown at $d=1$ without a top component. [given, F1, F2, F3, F4, algebra]

2.1 In case (iv), $b$ and $Ab=(5e_1+2e_2)/\sqrt2$ are independent, so $K_2=\operatorname{span}\{e_1,e_2\}$; this space is invariant under $A$. At the second Arnoldi column, $Aq_2\in K_2=\operatorname{span}\{q_1,q_2\}$, so subtracting its two orthogonal projections leaves zero residual. Thus [F3]–[F4] give exact Lanczos breakdown at $d=2$. Since $Pb=e_1/\sqrt2\ne0$, [F1] gives $\theta_2=5$; directly, $Ab-2b=3e_1/\sqrt2\in K_2$, so $e_1\in K_2$ and its Rayleigh quotient is $5$. [given, F1, F2, F3, F4, algebra] ∎
