---
id: thm-size-structured-positivity-number-and-weighted-moment-identities
kind: theorem
title: Size characteristics, positivity, and discrete number and size-moment balances
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-size-structured-transport-and-division-kernel
  - alg-size-structured-finite-volume-flux-and-kernel-quadrature
  - thm-picard-lindelof-local-existence-and-uniqueness
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
axiom_base: No choice axiom is used; characteristic continuation uses finitely many Picard intervals, and the discrete balances use finite summation and positivity of the kernel quadrature.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Benoît Perthame, Introduction to Structured Equations in Biology, full lecture notes"
      url: "https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf"
      locator: "Chapter 1, §§1.4–1.5, PDF pp. 8–10: total-number and biomass balance identities for equal and asymmetric division."
    - title: "MATH 373 lecture notes, §8 Approximation of Integrals"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture12.pdf"
      locator: "Complete four-page Lecture 12 PDF; §8.2 composite midpoint formula, printed pp. 37–38/PDF pp. 3–4; discrete moment identities are proved locally here."
    - title: "Lecture 14: Quadrature, Introduction to Numerical Computation II, Kent State University notes"
      url: "https://www.math.kent.edu/~reichel/courses/intr.num.comp.2/lecture18/quadrature.pdf"
      locator: "Complete eight-page lecture PDF; PDF pp. 4–6: composite midpoint formula with equal positive weights and its Taylor error expansion."
---

## Statement

Under [[def-size-structured-transport-and-division-kernel]], for every initial size $y\in[0,X]$ the extended IVP specified there has a unique solution $\chi_y$ on $[0,T]$. The solution is strictly increasing and agrees with the original growth field until it first reaches $X$, so its restriction through that first hit is the model characteristic.

For [[alg-size-structured-finite-volume-flux-and-kernel-quadrature]], assume nonnegative initial masses, nonnegative quadrature coefficients $A_{j\ell}$, and the stated CFL. Then all $M_j^k$ remain nonnegative. Define the cell number and center-weighted size moment by $N_h^k=\sum_jM_j^k$ and $W_h^k=\sum_jx_j^cM_j^k$. With $k_{0,\ell}^h=\sum_jA_{j\ell}$ and $k_{1,\ell}^h=\sum_jx_j^cA_{j\ell}$, the exact balances are

$$N_h^{k+1}-N_h^k=\Delta t\left(-F_J^k-\sum_jd_jM_j^k+\sum_\ell k_{0,\ell}^hM_\ell^k\right),$$

$$W_h^{k+1}-W_h^k=\Delta t\left(\sum_{j=1}^{J-1}(x_{j+1}^c-x_j^c)F_j^k-x_J^cF_J^k-\sum_jx_j^cd_jM_j^k+\sum_\ell k_{1,\ell}^hM_\ell^k\right).$$

Thus a division kernel preserves the discrete size moment only when its first-moment production cancels the parent-removal term; this identity is not automatic for an arbitrary kernel.

## Facts & Assumptions

**Given:** The fixed-interval size model and finite-volume update in [[def-size-structured-transport-and-division-kernel]] and [[alg-size-structured-finite-volume-flux-and-kernel-quadrature]].

[F1] [[def-size-structured-transport-and-division-kernel]]: the total loss rate is $d=\mu+\gamma$, and each daughter kernel is a nonnegative measure supported on sizes no larger than its parent.

[F2] [[alg-size-structured-finite-volume-flux-and-kernel-quadrature]]: the update is $M_j^{k+1}=M_j^k-\Delta t(F_j-F_{j-1})-\Delta t d_jM_j^k+\Delta t\sum_\ell A_{j\ell}M_\ell^k$, with nonnegative $A_{j\ell}$ and the stated CFL.

[F3] [[thm-picard-lindelof-local-existence-and-uniqueness]]: a continuous vector field that is locally Lipschitz in the state variable has a unique local IVP solution; its quantitative clause gives a solution on any centered cylinder where the boundedness and contraction conditions hold, and its uniqueness clause applies on common intervals.

[A1] The initial cell masses are nonnegative.

## Proof

1.1 In [F2], the coefficient of $M_j^k$ outside the division source is $1-\Delta t(g(x_j)/h_j+d_j)$, which is nonnegative by the CFL. For $j\ge2$ the incoming transport term has coefficient $\Delta t g(x_{j-1})/h_{j-1}\ge0$; for $j=1$ the incoming flux is $F_0=0$. Every division term has coefficient $\Delta t A_{j\ell}\ge0$. Hence each new mass is a sum of nonnegative terms when [A1] holds. Induction on $k$ proves $M_j^k\ge0$. [A1, F1, F2, induction, algebra]

2.1 Sum [F2] over $j$. The finite flux sum telescopes to $F_J-F_0=F_J$ because $F_0=0$. Interchanging the finite sums in the kernel source gives $\sum_\ell(\sum_jA_{j\ell})M_\ell=\sum_\ell k_{0,\ell}^hM_\ell$. Subtracting $N_h^k$ yields the number identity. [F2, algebra]

2.2 Multiply [F2] by $x_j^c$ and sum over $j$. For the flux term, finite summation by parts gives $\sum_jx_j^c(F_j-F_{j-1})=x_J^cF_J-\sum_{j=1}^{J-1}(x_{j+1}^c-x_j^c)F_j$ since $F_0=0$. The loss term is $-\sum_jx_j^cd_jM_j$, and the source term is $\sum_\ell(\sum_jx_j^cA_{j\ell})M_\ell=\sum_\ell k_{1,\ell}^hM_\ell$. Rearranging proves the weighted-moment identity and the stated condition for cancellation. [F1, F2, step 2.1, algebra]

3.1 Let $M=\|g\|_\infty$ and let $L$ be a Lipschitz constant for $g$ on $[0,X]$. The projection $\Pi_{[0,X]}$ is $1$-Lipschitz, so the extension $\widetilde g=g\circ\Pi_{[0,X]}$ is globally bounded by $M$ and globally Lipschitz with constant $L$ on the open domain $\mathbb R$. Since $g\ge g_{\min}>0$, choose $h_0>0$ with $h_0M\le1$ and $Lh_0<1$. For every starting time $t_0\in\mathbb R$ and state $z\in\mathbb R$, the cylinder $[t_0-h_0,t_0+h_0]\times[z-1,z+1]$ lies in $\mathbb R\times\mathbb R$, and [F3] gives a unique solution through $(t_0,z)$ on that interval; the same bounds apply after every restart. Restricting and concatenating at most $\lceil T/h_0\rceil$ such forward segments gives a solution on $[0,T]$, and the uniqueness clause of [F3] makes it unique there. Along this solution $\chi_y'(s)=\widetilde g(\chi_y(s))\ge g_{\min}$, so it is strictly increasing. Starting from $y\in[0,X]$, it stays in $[0,X]$ through its first hitting of $X$, where $\widetilde g=g$; that restricted segment is the model characteristic. [F1, F3, construct, algebra] ∎
