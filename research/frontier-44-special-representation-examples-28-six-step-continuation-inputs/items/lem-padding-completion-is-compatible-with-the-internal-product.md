---
id: lem-padding-completion-is-compatible-with-the-internal-product
kind: lemma
title: "The Jacobi–Trudi completion is compatible with the internal product"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [def-first-row-padding-completion-and-the-stabilization-operator,
       lem-vertex-operator-series-for-padded-schur-functions,
       lem-sigma-series-cauchy-adjoint-and-reproducing-kernel-identities,
       lem-schur-specialization-coproduct-and-plethysm-identities,
       prop-power-sums-diagonalize-the-internal-product,
       cor-power-sums-are-orthogonal-for-the-hall-inner-product,
       thm-cauchy-kernel-has-power-complete-and-schur-expansions,
       def-kronecker-coefficient-and-internal-tensor-product,
       def-internal-product-on-symmetric-functions,
       def-hall-inner-product-on-symmetric-functions,
       thm-schur-functions-form-an-orthonormal-integral-basis,
       def-iterated-schur-coefficients,
       thm-littlewood-richardson-schur-product-expansion,
       def-littlewood-richardson-tableau-and-coefficient,
       prop-power-sums-form-a-rational-not-integral-stable-basis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emmanuel Briand, Rosa Orellana and Mercedes Rosas, The stability of the Kronecker product of Schur functions, arXiv:0907.4652v2 (2009); Lemma 2.1 and Littlewood's identity (9), pp. 7-8 (the element R_{alpha,beta}, the operator U_n, and the Littlewood sum)"
      url: "https://arxiv.org/pdf/0907.4652"
    - title: "Emmanuel Briand, Amarpreeet Rattan and Mercedes Rosas, On the growth of the Kronecker coefficients, arXiv:1607.02887v1 (2016); section 2.4, identity (6), p. 7 (vertex operator series)"
      url: "https://arxiv.org/pdf/1607.02887"
---

## Statement

For partitions $\alpha,\beta$ put $a=|\alpha|$, $b=|\beta|$ and define
$$R_{\alpha,\beta}[Z]:=\langle s_\alpha[A]s_\beta[B]\,|\,\sigma[ZAB+ZA+ZB+AB]\rangle_{A,B},$$
the Hall pairing in the alphabet variables $A,B$
([[def-hall-inner-product-on-symmetric-functions]],
[[def-lambda-ring-specializations-and-the-sigma-series]]).

1. $R_{\alpha,\beta}$ is a finite symmetric-function polynomial in $Z$ of
   degree at most $a+b$.
2. For every integer $n\ge0$,
   $$(U_ns_\alpha)*(U_ns_\beta)=U_nR_{\alpha,\beta},$$
   where $U_n$ is the Jacobi–Trudi completion and $*$ the internal product
   ([[def-first-row-padding-completion-and-the-stabilization-operator]],
   [[def-internal-product-on-symmetric-functions]]); this holds for every
   $n\ge0$, including those $n$ for which the padded sequences $\alpha[n]$,
   $\beta[n]$ are not partitions. Equivalently, with $t$ a one-letter formal
   alphabet,
   $$\sum_{n\ge0}(U_ns_\alpha)*(U_ns_\beta)\,t^n =\sigma[tX]\,R_{\alpha,\beta}[tX-1].$$
3. The same polynomial is the finite Littlewood expression
   $$R_{\alpha,\beta}=\sum_{\delta,\epsilon,\tau} \bigl((s_\delta s_\tau)^{\perp}s_\alpha\bigr) \bigl((s_\epsilon s_\tau)^{\perp}s_\beta\bigr) \bigl(s_\delta*s_\epsilon\bigr),$$
   the sum over all triples of partitions, all factors evaluated at $Z$.

## Facts & Assumptions

**Given:** Partitions $\alpha,\beta$ with $a=|\alpha|$, $b=|\beta|$; specializations $A,B,X,Z$; a formal variable $t$.

[F1] $U_n$ is the $\mathbb Z$-linear endomorphism with $U_n(s_\lambda)=s_{\lambda[n]}$ on the Schur basis, where $s_{\lambda[n]}$ is the Jacobi–Trudi determinant of the integer sequence $\lambda[n]$; $s_{\lambda[n]}\in\Lambda^n$ for $n\ge0$ and $s_{\lambda[n]}=0$ for $n<0$ ([[def-first-row-padding-completion-and-the-stabilization-operator]]).

[F2] $\sigma[tA]=\sum_nt^nh_n[A]$, the Cauchy identity $\sigma[XY]=\sum_\lambda s_\lambda[X]s_\lambda[Y]=\sum_\lambda z_\lambda^{-1}p_\lambda[X]p_\lambda[Y]$, the adjunction $\sigma[AX^{\perp}]f[X]=f[X+A]$, and the reproducing kernel $\langle\sigma[AX]|f[X]\rangle_X=f[A]$ hold for all specializations ([[lem-sigma-series-cauchy-adjoint-and-reproducing-kernel-identities]]).

[F3] $\sum_{n\in\mathbb Z}s_{\alpha[n]}[A]t^n=\sigma[tA]s_\alpha[tA-1]$ for every partition $\alpha$; the identity is linear in the Schur index, so for every $f\in\Lambda$ with finite degree: the degree-$n$ component of $\sigma[A]f[A-1]$ is $U_nf$, and $[t^n]\bigl(\sigma[tX]f[tX-1]\bigr)=U_nf$ ([[lem-vertex-operator-series-for-padded-schur-functions]]).

[F4] $s_\alpha[U+V]=\sum_{\mu,\nu}c^\alpha_{\mu\nu}s_\mu[U]s_\nu[V]$ and $s_\alpha[UV]=\sum_{\mu,\nu}g^\alpha_{\mu\nu}s_\mu[U]s_\nu[V]$ for all specializations; $c^\alpha_{\delta,\sigma,\tau}=\langle s_\alpha,s_\delta s_\sigma s_\tau\rangle_H=[s_\alpha]s_\delta s_\sigma s_\tau$ and $\langle(s_\delta s_\tau)^{\perp}s_\alpha,s_\sigma\rangle_H=c^\alpha_{\delta,\sigma,\tau}$ ([[lem-schur-specialization-coproduct-and-plethysm-identities]], [[def-iterated-schur-coefficients]], [[thm-littlewood-richardson-schur-product-expansion]]).

[F5] For $f=\sum_\rho a_\rho p_\rho$ and $g=\sum_\rho b_\rho p_\rho$ of equal degree one has $\langle f,p_\rho\rangle_H=a_\rho z_\rho$, $p_\rho*p_\sigma=\delta_{\rho\sigma}z_\rho p_\rho$ and $f*g=\sum_\rho a_\rho b_\rho z_\rho p_\rho$ ([[prop-power-sums-diagonalize-the-internal-product]], [[cor-power-sums-are-orthogonal-for-the-hall-inner-product]], [[def-internal-product-on-symmetric-functions]]).

[F6] $s_\mu*s_\nu=\sum_\lambda g^\lambda_{\mu\nu}s_\lambda$ and $\langle s_\lambda,s_\mu\rangle_H=\delta_{\lambda\mu}$ ([[def-kronecker-coefficient-and-internal-tensor-product]], [[thm-schur-functions-form-an-orthonormal-integral-basis]]).

[F7] All elements are $\mathbb Q$-linear combinations of the power-sum basis of $\Lambda_{\mathbb Q}$ ([[prop-power-sums-form-a-rational-not-integral-stable-basis]]).

## Proof

**Proof technique:** generating functions and Hall adjunction.

1.1 *Internal-product kernel.* For $f,g\in\Lambda^d_{\mathbb Q}$ and all specializations $U,V,W$ one has $\langle f[U]g[V]\,|\,\sigma[UVW]\rangle_{U,V}=(f*g)[W]$. Indeed, by the power form of the Cauchy identity [F2], $\sigma[UVW]=\sum_{\rho\vdash d}z_\rho^{-1}p_\rho[U]p_\rho[V]p_\rho[W]$ in the relevant degree and the pairing is a finite sum, since only $\rho\vdash d$ matches the bidegree $(d,d)$ of $f[U]g[V]$. Writing $f=\sum_\rho a_\rho p_\rho$ and $g=\sum_\rho b_\rho p_\rho$, [F5] gives $\langle f[U]g[V],p_\rho[U]p_\rho[V]p_\rho[W]\rangle_{U,V}=a_\rho z_\rho\cdot b_\rho z_\rho\cdot p_\rho[W]$, so the left side is $\sum_{\rho\vdash d}a_\rho b_\rho z_\rho p_\rho[W]=(f*g)[W]$ by [F5]. [F2, F5, F7]

2.1 *The generating function $F(t)=\sum_{n\ge0}(U_ns_\alpha)*(U_ns_\beta)t^n$.* By [F1] and [F3], the degree-$n$ part of $\sigma[A]s_\alpha[A-1]$ is $U_ns_\alpha$, and likewise for $\beta$; the bidegree-$(n,n)$ part of the product $\sigma[A]s_\alpha[A-1]\,\sigma[B]s_\beta[B-1]$ is therefore $(U_ns_\alpha)[A](U_ns_\beta)[B]$. Pairing against $\sigma[tXAB]=\sum_nt^nh_n[XAB]$ and applying step 1.1 in each degree gives $F(t)=\langle\sigma[A]s_\alpha[A-1]\,\sigma[B]s_\beta[B-1]\,|\,\sigma[tXAB]\rangle_{A,B}$, a formula in which the coefficient of $t^n$ is finite by [F1]. [F1, F2, F3, step 1.1]

3.1 *Hall adjunction.* For every specialization $W$ and every $h\in\Lambda$, the adjunction of [F2] with the one-letter alphabet $1$ reads $\sigma[A^{\perp}]h[A]=h[A+1]$; equivalently $\langle\sigma[A]u[A],W[A]\rangle_A=\langle u[A],W[A+1]\rangle_A$ and, in the reverse direction, $\langle u[A-1],W[A]\rangle_A=\langle u[A],\sigma[-A]W[A]\rangle_A$. Applying this in the $A$-variable and then in the $B$-variable to the identity of step 2.1 turns $\sigma[A]\sigma[B]$ into the translation $A\mapsto A+1$, $B\mapsto B+1$ of the kernel and moves the shifts $-1$ of $s_\alpha,s_\beta$ onto the kernel: $F(t)=\langle s_\alpha[A]s_\beta[B]\,|\,\sigma[tX(A+1)(B+1)-A-B]\rangle_{A,B}$. [F2, step 2.1]

4.1 *Factorization and the coefficient identity.* Expanding $tX(A+1)(B+1)-A-B=tX+(tX-1)AB+(tX-1)A+(tX-1)B+AB$ and using $\sigma[C+D]=\sigma[C]\sigma[D]$ from the product formula [F2], the kernel of step 3.1 is $\sigma[tX]$ times $\sigma[(tX-1)AB+(tX-1)A+(tX-1)B+AB]$, so $F(t)=\sigma[tX]R_{\alpha,\beta}[tX-1]$. By [F3], the coefficient of $t^n$ in $\sigma[tX]h[tX-1]$ is $U_nh$ for every finite-degree $h$, and $R_{\alpha,\beta}[tX-1]$ is the specialization of the element $R_{\alpha,\beta}\in\Lambda_Z$ introduced in the statement, so comparing the coefficient of $t^n$ gives $(U_ns_\alpha)*(U_ns_\beta)=U_nR_{\alpha,\beta}$ for every $n\ge0$; for $n<0$ one has $U_n=0$ by [F1], so no negative index is asserted. [F1, F2, F3, step 3.1]

4.2 *Finiteness of $R$.* Factor the kernel of $R$ as $\sigma[ZAB]\sigma[ZA]\sigma[ZB]\sigma[AB]$. In the $(a,b)$-bidegree of the pairing, the four factors contribute bidegrees $(j,j)$, $(m,0)$, $(0,n)$, $(l,l)$ with $j+m+l=a$ and $j+n+l=b$, so $0\le j,m,n,l\le a+b$ and the $Z$-degree is $j+m+n=b+m-l\le a+b$. For each fixed $Z$-degree only finitely many such $(j,m,n,l)$ occur, and each homogeneous component of $\sigma$ is a finite sum over partitions; hence $R_{\alpha,\beta}$ is a finite polynomial in $Z$ of degree at most $a+b$, with coefficients extracted from finitely many bidegree pieces of $\sigma$. No infinite sum of symmetric functions is evaluated. [F2, step 3.1]

5.1 *The Littlewood expression.* Expand the four factors of the kernel of $R$ with the Cauchy identity and the product-alphabet identity [F2] and [F4]: $\sigma[ZAB]=\sum_{\zeta,\delta,\epsilon}s_\zeta[Z]g^\zeta_{\delta\epsilon}s_\delta[A]s_\epsilon[B]$, $\sigma[ZA]=\sum_\sigma s_\sigma[Z]s_\sigma[A]$, $\sigma[ZB]=\sum_\rho s_\rho[Z]s_\rho[B]$ and $\sigma[AB]=\sum_\tau s_\tau[A]s_\tau[B]$. Pairing with $s_\alpha[A]s_\beta[B]$ and using the orthonormality of the Schur basis gives $R_{\alpha,\beta}=\sum g^\zeta_{\delta\epsilon}s_\zeta[Z]s_\sigma[Z]s_\rho[Z]\langle s_\delta s_\sigma s_\tau,s_\alpha\rangle_H\langle s_\epsilon s_\rho s_\tau,s_\beta\rangle_H$. By [F4] the two pairings are $c^\alpha_{\delta,\sigma,\tau}$ and $c^\beta_{\epsilon,\rho,\tau}$, and re-summing over $\sigma$ with $\rho$ fixed gives $\sum_\sigma c^\alpha_{\delta,\sigma,\tau}s_\sigma[Z]=(s_\delta s_\tau)^{\perp}s_\alpha$ by adjointness; similarly for $\beta$. Finally $\sum_\zeta g^\zeta_{\delta\epsilon}s_\zeta[Z]=s_\delta*s_\epsilon[Z]$ by [F6]. This is exactly the displayed Littlewood expression, and the sum is finite because $c$- and $g$-coefficients vanish outside the size constraints. [F4, F5, F6, step 4.2] ∎
