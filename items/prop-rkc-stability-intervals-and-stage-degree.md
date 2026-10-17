---
id: prop-rkc-stability-intervals-and-stage-degree
kind: proposition
title: "RKC stability polynomials and certified negative-real intervals"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-rkc1-chebyshev
  - alg-rkc2-linear-chebyshev
  - alg-rkc2-nonlinear
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-chebyshev-polynomials-first-and-second-kind
  - def-euclidean-inner-product
  - def-linear-map
  - def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
  - def-polynomial-evaluation-at-an-endomorphism
  - def-real-and-complex-inner-product-space
  - def-self-adjoint-and-normal-endomorphism
  - lem-chebyshev-rkc-bounds-and-endpoint-derivatives
  - thm-algebra-of-derivatives
  - thm-chain-rule
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ibrahim Almuslimani and Gilles Vilmart, Explicit Stabilized Integrators for Stiff Optimal Control Problems, §§2.2.1–2.2.2"
      url: "https://www.unige.ch/~vilmart/paper_optimal_control_alm_vil.pdf"
    - title: "B.P. Sommeijer, L.F. Shampine, and J.G. Verwer, RKC: An explicit solver for parabolic PDEs, §2"
      url: "https://ir.cwi.nl/pub/109/0109D.pdf"
---

## Statement

On the scalar test equation $y'=\lambda y$, write $z=h\lambda$ and let $R(z)$ be the factor by which a successful method step multiplies $y$.

For first-order RKC with $s\ge1$ stages,
$$R_{1,s}(z)=T_s(1+z/s^2).$$
It has degree $s$, satisfies $R_{1,s}(0)=R'_{1,s}(0)=1$, and its real absolute stability set $\{z\in\mathbb R:|R_{1,s}(z)|\le1\}$ is exactly $[-2s^2,0]$.

For second-order RKC with $s\ge2$ stages, both the linear algorithm and the scalar-linear specialization of the nonlinear algorithm have
$$R_{2,s}(z)=a_s+b_sT_s(1+w_1z),\qquad w_1=\frac{3}{s^2-1},\quad b_s=\frac{s^2-1}{3s^2},\quad a_s=1-b_s.$$
This polynomial has degree $s$ and satisfies $R_{2,s}(0)=R'_{2,s}(0)=R''_{2,s}(0)=1$. It is absolutely stable on the real interval $[-2(s^2-1)/3,0]$; this is a certified interval and is not claimed to be the maximal real stability set.

Let $d\ge1$, let $A$ be a self-adjoint endomorphism of $\mathbb R^d$ with its Euclidean inner product, and assume $\langle Av,v\rangle\le0$ for every $v$. Let $\rho=\max_i(-\lambda_i)$, where $\lambda_i$ are the eigenvalues of $A$. If $h\rho\le2s^2$, first-order RKC is nonexpansive in the Euclidean norm; if $h\rho\le2(s^2-1)/3$, linear second-order RKC is nonexpansive. The same linear contraction statement holds for the nonlinear RKC method when applied to $f(y)=Ay$. No corresponding claim is made for nonnormal matrices.

## Facts & Assumptions

**Given:** The stated RKC recurrences, $s\ge1$ for first-order RKC, $s\ge2$ for second-order RKC, and the self-adjoint nonpositive operator hypotheses in the matrix clause.

[F1] [[alg-rkc1-chebyshev]]: $Y_0=y$, $Y_1=(I+hA/s^2)Y_0$, and $Y_j=2(I+hA/s^2)Y_{j-1}-Y_{j-2}$ for $j\ge2$ when $f(y)=Ay$.

[F2] [[alg-rkc2-linear-chebyshev]]: $V_0=y$, $V_1=(I+w_1hA)V_0$, $V_j=2(I+w_1hA)V_{j-1}-V_{j-2}$, and the output is $a_sV_0+b_sV_s$.

[F3] [[alg-rkc2-nonlinear]]: the nonlinear stage recurrence uses $b_0=b_1=b_2=1/4$, $a_j=1-b_j$, and the displayed $\mu_j,\nu_j,m_j,g_j$ coefficients.

[F4] [[def-chebyshev-polynomials-first-and-second-kind]]: $T_{n+2}(x)=2xT_{n+1}(x)-T_n(x)$ and $U_{n+2}(x)=2xU_{n+1}(x)-U_n(x)$.

[F5] [[lem-chebyshev-rkc-bounds-and-endpoint-derivatives]]: $|T_n(x)|\le1$ on $[-1,1]$, $|T_n(x)|>1$ for $|x|>1$ when $n\ge1$, the degrees/leading coefficients are $n,2^{n-1}$ for $T_n$, and $T_s'(1)=s^2$, $T_s''(1)=s^2(s^2-1)/3$.

[F6] [[def-polynomial-evaluation-at-an-endomorphism]]: for a finite polynomial $p(x)=\sum_k a_kx^k$, $p(A)=\sum_k a_kA^k$ with $A^0=I$.

[F7] [[def-self-adjoint-and-normal-endomorphism]]: self-adjoint means $A^*=A$ on the stated real inner-product space.

[F8] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a self-adjoint endomorphism on a finite-dimensional real inner-product space has an orthonormal eigenbasis.

[F9] [[def-real-and-complex-inner-product-space]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], and [[def-euclidean-inner-product]]: the Euclidean inner product is a real inner product; in an orthonormal basis, squared length is the sum of squared coordinates and $\|v\|_2^2=\sum_i v_i^2$.

[F10] [[thm-chain-rule]] and [[thm-algebra-of-derivatives]]: a differentiable polynomial composed with an affine function obeys the chain rule; products and sums differentiate by their usual rules.

[A1] $A$ is self-adjoint and $\langle Av,v\rangle\le0$ for every $v$; $h>0$ and the stated spectral-radius inequality holds in the applicable branch.

## Proof

1.1 For $f(y)=Ay$, put $X=I+hA/s^2$ in [F1]. The Chebyshev recurrence [F4] and the definition of polynomial evaluation [F6] give $Y_j=T_j(X)y$ by induction from $T_0(X)y=y$ and $T_1(X)y=Xy$. Hence the output factor is $R_{1,s}(z)=T_s(1+z/s^2)$. Its degree is $s$ because [F5] gives nonzero leading coefficient $2^{s-1}$ and the affine argument has nonzero slope. [F1, F4, F5, F6, induction, algebra]

1.2 In [F3], specialize to $f(y)=\lambda y$. Define the scalar polynomial $P_j$ by $Y_j=P_j(z)y$ for every initial scalar $y$; the linear recurrence makes this definition valid even when $y=0$. Then $P_0=1$, $P_1=1+b_1w_1z$, and for $j\ge2$, $P_j=(1-\mu_j-\nu_j)+\mu_jP_{j-1}+\nu_jP_{j-2}+m_jzP_{j-1}+g_jz.$ Set $x=1+w_1z$. The base values satisfy $P_0=a_0+b_0T_0(x)$ and $P_1=a_1+b_1T_1(x)$. If $P_{j-1}=a_{j-1}+b_{j-1}T_{j-1}(x)$ and $P_{j-2}=a_{j-2}+b_{j-2}T_{j-2}(x)$, the coefficient of $T_{j-1}$ is $\mu_jb_{j-1}+m_jzb_{j-1}=2b_j(1+w_1z)=2b_jx$, and the coefficient of $T_{j-2}$ is $\nu_jb_{j-2}=-b_j$. The constant part is $1-\mu_j-\nu_j+\mu_ja_{j-1}+\nu_ja_{j-2}+m_jza_{j-1}+g_jz =1-\mu_jb_{j-1}-\nu_jb_{j-2}+z(m_ja_{j-1}+g_j)=1-b_j=a_j,$ because $g_j=-a_{j-1}m_j$, $\mu_jb_{j-1}=2b_j$, and $\nu_jb_{j-2}=-b_j$. Thus $P_j=a_j+b_jT_j(x)$ by [F4]. The same coefficient induction with $z$ replaced by $hA$ proves that the nonlinear recurrence specialized to $f(v)=Av$ has update $a_sI+b_sT_s(I+w_1hA)$. The linear algorithm [F2] has that same shifted-Chebyshev recurrence and final weights, so its final factor is the same $R_{2,s}$. The degree is $s$, since $b_s>0$, $w_1>0$, and [F5] gives degree $s$ with nonzero leading coefficient. [F2, F3, F4, F5, induction, algebra]

2.1 By [F5], $T_s(1)=1$, $T_s'(1)=s^2$, and $T_s''(1)=s^2(s^2-1)/3$. The scalar chain rule and product rule [F10] applied to the polynomials in steps 1.1–1.2 therefore give $R_{1,s}(0)=1$ and $R'_{1,s}(0)=T_s'(1)/s^2=1$. For second-order RKC, $a_s+b_s=1$, $b_sw_1s^2=1$, and $b_sw_1^2T_s''(1)=\frac{s^2-1}{3s^2}\frac{9}{(s^2-1)^2}\frac{s^2(s^2-1)}{3}=1.$ Differentiating the polynomial in step 1.2 gives the stated values of $R_{2,s}(0)$, $R'_{2,s}(0)$, and $R''_{2,s}(0)$. [F5, F10, step 1.1, step 1.2, algebra]

2.2 For first-order RKC, $|R_{1,s}(z)|\le1$ exactly when $x=1+z/s^2$ lies in $[-1,1]$, by [F5]; solving these two inequalities gives $-2s^2\le z\le0$. For second-order RKC, $b_s>0$ and $a_s=1-b_s>0$ for $s\ge2$. If $-2/w_1\le z\le0$, then $x=1+w_1z\in[-1,1]$, so [F5] gives $|a_s+b_sT_s(x)|\le a_s+b_s|T_s(x)|\le a_s+b_s=1$. Since $2/w_1=2(s^2-1)/3$, the claimed interval follows. [F5, step 1.1, step 1.2, algebra]

3.1 By [F8], choose an orthonormal eigenbasis $e_i$ with $Ae_i=\lambda_i e_i$. The nonpositive premise [A1] gives $\lambda_i\le0$ by applying it to $e_i$. For any vector $v=\sum_i\alpha_i e_i$, polynomial evaluation gives $R(hA)v=\sum_i\alpha_iR(h\lambda_i)e_i$. Under the first-order spectral bound, every $h\lambda_i\in[-2s^2,0]$, so step 2.2 gives $|R_{1,s}(h\lambda_i)|\le1$; orthonormality then yields $\|R_{1,s}(hA)v\|^2=\sum_i\alpha_i^2R_{1,s}(h\lambda_i)^2\le\sum_i\alpha_i^2=\|v\|^2$. Under the second-order spectral bound, the same calculation uses the interval from step 2.2 for $R_{2,s}$. The scalar specialization in step 1.2 shows it also applies to nonlinear RKC on this linear field. [A1, F2, F6, F7, F8, F9, step 1.2, step 2.2, algebra] ∎

## Remarks

The matrix conclusion uses an orthonormal eigenbasis and therefore does not follow from eigenvalue inclusion alone for a nonnormal matrix. For RKC2, the interval proved above is a guaranteed stability interval; the statement does not claim that it is the largest real interval in the absolute stability set.
