---
id: thm-arnoldi-exponential-action-error-bound
kind: theorem
title: "Arnoldi action error is the semigroup-weighted residual integral"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - cor-finite-dimensional-normed-spaces-are-banach
  - def-arnoldi-process
  - def-logarithmic-norm-for-complex-matrices
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-phi-functions-by-everywhere-convergent-series
  - lem-phi-series-converges-absolutely
  - lem-exponential-series-of-a-bounded-operator
  - lem-logarithmic-norm-bounds-the-matrix-exponential
  - lem-matrix-action-defect-variation-of-constants
  - thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Nicholas J. Higham and Lijing Lin, Functions of Matrices: A Short Course"
      url: "https://eprints.maths.manchester.ac.uk/2067/01/covered/MIMS_ep2013_73.pdf"
      locator: "Section 7.1, Arnoldi projection for f(A)b, printed pp. 22–23."
    - title: "Jitse Niesen and Will M. Wright, A Krylov subspace algorithm for evaluating the phi-functions appearing in exponential integrators"
      url: "https://arxiv.org/pdf/0907.4631"
      locator: "Section 3.1, Arnoldi projection, and Section 3.2, discussion of residual estimators."
    - title: "Nicholas J. Higham, What Is the Logarithmic Norm?"
      url: "https://nhigham.com/2022/01/18/what-is-the-logarithmic-norm/"
      locator: "Theorem 3 and Theorem 6, Euclidean exponential bound."
---

## Statement

Let $A\in M_n(\mathbb C)$, $n\ge1$, $v\in\mathbb C^n$, $\beta\ge0$, $V\in M_{n\times m}(\mathbb C)$, $H\in M_m(\mathbb C)$, and $1\le m\le n$. For exact Arnoldi, $\beta=\|v\|_2$; in a certified finite-precision run, $\beta$ may be the backend's returned nonnegative scalar, with its effect included in the initial mismatch. Put $c(s):=e^{sH}\beta e_1$ and $u(s):=Vc(s)$. For every real $t$, the exact defect identity is

$$e^{tA}v-u(t)=e^{tA}(v-\beta Ve_1)+\int_0^t e^{(t-s)A}(AV-VH)c(s)\,ds,$$

where the integral is oriented. Let $I_t=[0,t]$ for $t\ge0$ and $I_t=[t,0]$ for $t<0$; let $\sigma_t=1$ for $t\ge0$ and $\sigma_t=-1$ for $t<0$. If $t=0$ the integral is zero. Suppose the Arnoldi relation is

$$AV=VH+h v_{m+1}e_m^*+D+\Omega,$$

where $h\ge0$, $\|v_{m+1}\|_2=1$ when $h>0$, $D=[d_1,\ldots,d_m]$, $\eta_j\ge0$, $\|d_j\|_2\le\eta_j$, $\eta_{\rm orth}\ge0$, and $\|\Omega\|_2\le\eta_{\rm orth}$. In exact happy breakdown, interpret the rank-one term as zero and set $D=\Omega=0$. If a reduced computation returns $\widehat c(t)$ with $\|\widehat c(t)-c(t)\|_2\le\epsilon_{\rm red}(t)$ for $\epsilon_{\rm red}(t)\ge0$ and its final projection returns $\widehat x$ with $\|\widehat x-V\widehat c(t)\|_2\le\eta_{\rm proj}$ for $\eta_{\rm proj}\ge0$, then

$$\|e^{tA}v-\widehat x\|_2\le e^{|t|\mu_2(\sigma_t A)}\|v-\beta Ve_1\|_2+\int_{I_t}e^{|t-s|\mu_2(\sigma_t A)}\left(h|e_m^*c(s)|+\left(\sqrt{\sum_{j=1}^m\eta_j^2}+\eta_{\rm orth}\right)\|c(s)\|_2\right)ds+\|V\|_2\epsilon_{\rm red}(t)+\eta_{\rm proj}.$$

For exact Arnoldi from a nonzero start with no breakdown through $m$, $D=\Omega=0$, $V$ has orthonormal columns, and $v=\beta Ve_1$, recovering the standard residual integral. Whenever $AV=VH$ and $v=\beta Ve_1$, the invariant-subspace relation gives $\varphi_k(tA)v=\beta V\varphi_k(tH)e_1$ for every $k\ge0$ and every real $t$; exact happy breakdown of Arnoldi from a nonzero start is a sufficient case.

## Facts & Assumptions

**Given:** The matrices and vectors in the Statement; for the numerical relation clause, the stated decomposition and columnwise error bounds; for the reduced term, a certified bound $\epsilon_{\rm red}(t)$ and a final projection certificate $\|\widehat x-V\widehat c(t)\|_2\le\eta_{\rm proj}$.

[F1] [[lem-matrix-action-defect-variation-of-constants]]: for a continuously differentiable approximate trajectory $u$, the exact action error is its initial error plus the oriented integral of $e^{(t-s)A}(Au-u')$.

[F2] [[lem-logarithmic-norm-bounds-the-matrix-exponential]]: for $\tau\ge0$, $\|e^{\tau B}\|_2\le e^{\tau\mu_2(B)}$ for every finite complex matrix $B$.

[F3] [[thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization]]: before breakdown, Arnoldi columns are orthonormal and $AV_m=V_mH_m+h_{m+1,m}v_{m+1}e_m^*$.

[F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: for a finite-dimensional linear map $T$, $\|T\|_2=\max_{\|x\|_2=1}\|Tx\|_2$; rescaling gives $\|Tx\|_2\le\|T\|_2\|x\|_2$ for all $x$.

[F5] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: $|\langle x,y\rangle|\le\|x\|_2\|y\|_2$ in a complex Euclidean space.

[F6] [[def-arnoldi-process]]: Arnoldi starts with $v_1=v/\|v\|_2$, defines $w_j=Av_j-\sum_{i=1}^j h_{ij}v_i$, and exact breakdown at step $j$ means $h_{j+1,j}=\|w_j\|_2=0$.

[F7] [[lem-exponential-series-of-a-bounded-operator]]: for a bounded operator on a Banach space, its exponential is differentiable with derivative $Ae^{tA}$.

[F8] [[def-phi-functions-by-everywhere-convergent-series]] and [[lem-phi-series-converges-absolutely]]: every finite-matrix phi function is defined by an absolutely convergent power series.

[F9] [[cor-finite-dimensional-normed-spaces-are-banach]]: each finite-dimensional normed space over $\mathbb C$ is complete.

[A1] For a finite-precision relation, $AV=VH+h v_{m+1}e_m^*+D+\Omega$ and all displayed norm bounds are certified data; the theorem does not infer them from a small computed subdiagonal.

[A2] The final computed projection satisfies $\|\widehat x-V\widehat c(t)\|_2\le\eta_{\rm proj}$ for a nonnegative bound $\eta_{\rm proj}$, with $\eta_{\rm proj}=0$ when the projection is exact.

## Proof

**Proof technique:** direct.

1.1 For any nonzero $x$, rescaling $x/\|x\|_2$ in [F4] shows that the finite matrix $H$ is bounded; the inequality is immediate at $x=0$. By [F9], $\mathbb C^m$ is complete, so [F7] applies and gives $c'(s)=Hc(s)$. Hence $u(s)=Vc(s)$ is continuously differentiable and its defect is $Au(s)-u'(s)=(AV-VH)c(s)$. [given, F4, F7, F9, algebra]

1.2 For $s\in I_t$, $|t-s|\ge0$ and $e^{(t-s)A}=e^{|t-s|\sigma_t A}$; the same identity gives $e^{tA}=e^{|t|\sigma_t A}$. Thus [F2] bounds the initial factor by $e^{|t|\mu_2(\sigma_t A)}$ and the integral kernel by $e^{|t-s|\mu_2(\sigma_t A)}$. [given, F2, algebra]

2.1 Apply [F1] to this $u$. It gives the displayed exact integral identity, including the initial mismatch $v-u(0)=v-\beta Ve_1$. [step 1.1, F1]

3.1 Substitute the certified relation [A1] into the defect in step 2.1. The rank-one term has norm $h|e_m^*c(s)|$ because $\|v_{m+1}\|_2=1$. For any unit vector $x\in\mathbb C^m$, Cauchy–Schwarz [F5] gives $\|Dx\|_2\le\sum_j|x_j|\eta_j\le(\sum_j\eta_j^2)^{1/2}$; hence $\|D\|_2\le(\sum_j\eta_j^2)^{1/2}$. The remaining term is at most $\eta_{\rm orth}\|c(s)\|_2$. Applying the kernel bound of step 1.2 inside the integral proves the first two terms of the claimed estimate. [given, A1, F4, F5, step 2.1, step 1.2, algebra]

3.2 Under the exact invariant-subspace hypotheses $AV=VH$ and $v=\beta Ve_1$ in the Statement, induction gives $A^jV=VH^j$ for every $j\ge0$: it holds at $j=0$, and left multiplication by $A$ gives $A^{j+1}V=AVH^j=VHH^j=VH^{j+1}$. Applying the convergent series [F8] term by term yields $\varphi_k(tA)v=\beta V\varphi_k(tH)e_1$ for every $k\ge0$. To verify the stated exact Arnoldi case, each earlier column satisfies $Av_\ell=\sum_{i=1}^{\ell+1}h_{i\ell}v_i$ by the recurrence, while the last satisfies $Av_m=\sum_{i=1}^m h_{im}v_i$ because [F6] gives $w_m=0$; hence $AV=VH$, and the initialization in [F6] gives $v=\beta Ve_1$. This proves exact invariant-space projection for every phi action; the separate $\epsilon_{\rm red}(t)$ hypothesis in this theorem concerns the exponential trajectory $c(s)$. [given, F6, F8, step 2.1, algebra, induction]

4.1 The reduced-action error satisfies $\|V(\widehat c(t)-c(t))\|_2\le\|V\|_2\epsilon_{\rm red}(t)$ by [F4]. By [A2] and the triangle inequality, replacing $V\widehat c(t)$ by $\widehat x$ adds at most $\eta_{\rm proj}$. Adding both errors to the exact projected-action error from step 3.1 proves the claimed estimate. [given, A2, F4, step 3.1, algebra]

5.1 In exact Arnoldi without breakdown, [F3] supplies the orthonormal basis and the relation $AV=VH+h v_{m+1}e_m^*$, so $D=\Omega=0$; [F6] gives $v=\beta Ve_1$. Orthonormality gives $\|V\|_2=1$, and an exact reduced action has $\epsilon_{\rm red}=0$. Substitution in the proved identity and bound leaves exactly the usual initial-zero residual integral and its semigroup-weighted estimate. [given, F3, F6, algebra] ∎

## Remarks

The residual integral is exact; its upper bound is conditional on the displayed semigroup, matvec, orthogonalization, initial-vector, reduced-action, and final-projection data. A near-zero computed Arnoldi residual without an exact-zero or relation certificate never establishes happy breakdown. No mesh-uniform estimate follows automatically from this finite-dimensional result.
