---
id: thm-implicit-restart-polynomial-subspace-and-residual-identity
kind: theorem
title: "Exact implicit Arnoldi restart applies its shift polynomial and preserves an Arnoldi residual identity"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-thick-and-implicitly-restarted-arnoldi-with-locking
  - thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization
  - def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift
  - prop-shifted-qr-preserves-upper-hessenberg-form
  - def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices
  - def-real-and-complex-givens-transformations
  - def-full-reduced-and-column-pivoted-computational-qr-factorisations
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Yousef Saad, Numerical Methods for Large Eigenvalue Problems, second edition, §7.3"
      url: "https://www-users.cse.umn.edu/~saad/eig_book_2ndEd.pdf"
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §11.2"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
---

## Statement

Let $A\in\mathbb C^{n\times n}$, and suppose an exact $m$-step Arnoldi
factorization without breakdown is
$$AV_m=V_mH_m+\beta_m v_{m+1}e_m^*,\qquad V_m^*V_m=I_m,$$
where $H_m$ is upper Hessenberg and $\beta_m>0$. Let $1\le r<m$,
$p=m-r$, and let $H_{j-1}-\mu_jI=Q_jR_j$ be exact shifted QR factorizations
using the ordered top-down adjacent-row Givens eliminations on pairs
$(1,2),(2,3),\ldots,(m-1,m)$, with $R_j$ upper triangular. Put
$$Q=Q_1\cdots Q_p,\qquad H^+=Q^*H_mQ,\qquad q(z)=\prod_{j=1}^p(z-\mu_j).$$
Assume $q(A)v_1\ne0$, the exact filtered Krylov space
$K_r(A,q(A)v_1)$ has dimension $r$, and $\rho\ne0$ in the factorization
$q(H_m)=QR$ with $R$ upper triangular. Then
$$\operatorname{range}(V_mQ(:,1:r))=K_r(A,q(A)v_1).$$
Writing $H_r^+=H^+(1:r,1:r)$, $h^+=H^+_{r+1,r}$, and
$$g=h^+V_mQe_{r+1}+\beta_m(e_m^*Qe_r)v_{m+1},$$
the truncated restart has the exact residual identity
$$AV_mQ(:,1:r)=V_mQ(:,1:r)H_r^++g e_r^*.$$
If $g\ne0$, then $v_{r+1}^+=g/\|g\|_2$ is orthogonal to the retained
columns and the new Arnoldi residual coefficient is $\beta_r^+=\|g\|_2$;
if $g=0$, the retained subspace is exactly invariant.

## Facts & Assumptions

**Given:** The no-breakdown Arnoldi factorization, dimensions and shifts in the
Statement, with the stated nonannihilation and filtered-dimension hypotheses.

[F1] [[thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization]]: before breakdown, $AQ_m=Q_{m+1}\bar H_m$, the Arnoldi vectors are orthonormal, and $H_m$ is upper Hessenberg; the present item writes this basis as $V_m$.

[F2] [[def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift]]: a shifted QR step factors $H-\mu I=QR$ with $Q$ unitary and $R$ upper triangular, then sets $H_+=RQ+\mu I=Q^*HQ$.

[F3] [[prop-shifted-qr-preserves-upper-hessenberg-form]]: an exact shifted QR step built from adjacent-row Givens eliminations preserves upper Hessenberg form.

[F4] [[def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices]]: upper Hessenberg means $H_{ij}=0$ whenever $i>j+1$.

[F5] [[def-real-and-complex-givens-transformations]] and [[def-full-reduced-and-column-pivoted-computational-qr-factorisations]]: the QR factorization in the Statement is formed by successive adjacent-row Givens rotations, with the unitary factor given by their ordered product.

## Proof

**Proof technique:** direct.

1.1 For $0\le j\le m-1$, $A^jv_1=V_mH_m^je_1$: the claim holds at $j=0$, and if it holds at $j<m-1$, [F1] gives $A^{j+1}v_1=V_mH_m^{j+1}e_1+\beta_m v_{m+1}e_m^*H_m^je_1$. By [F4], $H_m^je_1$ is supported in rows $1$ through $j+1$, so $e_m^*H_m^je_1=0$ when $j<m-1$; induction proves the identity through degree $m-1$. [F1, F4, algebra]

2.1 Since $\deg q=p<m$, step 1.1 gives $q(A)v_1=V_mq(H_m)e_1$. Put $P_j=Q_1\cdots Q_j$ and $P_0=I$; the cumulative similarities give $H_{j-1}=P_{j-1}^*H_mP_{j-1}$. Thus $H_m-\mu_jI=P_{j-1}(H_{j-1}-\mu_jI)P_{j-1}^*=P_{j-1}Q_jR_jP_{j-1}^*=P_jR_jP_{j-1}^*$. Because scalar factors commute, order the product as $q(H_m)=(H_m-\mu_pI)\cdots(H_m-\mu_1I)$; substituting these factorizations cancels every adjacent $P_{j-1}^*P_{j-1}$ and gives $q(H_m)=P_p(R_p\cdots R_1)=QR$. The product $R_p\cdots R_1$ is upper triangular, and $Re_1=\rho e_1$, so $q(A)v_1=\rho V_mQe_1$. [given, F2, step 1.1, algebra]

3.1 For $0\le j<r$, $p+j\le m-1$, so applying step 1.1 to each monomial of $z^jq(z)$ gives $A^jq(A)v_1=V_mH_m^jq(H_m)e_1=\rho V_mQ(H^+)^je_1$. By [F3], $H^+$ is upper Hessenberg, so $(H^+)^je_1$ is supported in its first $j+1$ coordinates and the resulting vector lies in $\operatorname{range}(V_mQ(:,1:r))$. Thus $K_r(A,q(A)v_1)$ is contained in the retained range; both have dimension $r$, the former by hypothesis and the latter because $V_mQ$ has orthonormal columns, so they are equal. [given, F3, step 1.1, step 2.1, algebra]

3.2 In each shifted QR step the top-down left eliminations use row pairs $(1,2),(2,3),\ldots,(m-1,m)$; by [F5] the unitary factor is the ordered product of their adjoints. In $Q_i e_j$, rotations with index greater than $j$ act first and fix $e_j$, rotation $j$ adds at most row $j+1$, and rotations with smaller indices add only rows less than $j$; by [F4], each $Q_i$ is upper Hessenberg. If $C$ has lower bandwidth $a$ and $D$ lower bandwidth $b$, a nonzero term in $(CD)_{ij}=\sum_k C_{ik}D_{kj}$ requires $k\ge i-a$ and $k\le j+b$, so $CD$ has lower bandwidth at most $a+b$. Hence $Q=Q_1\cdots Q_p$ has lower bandwidth $p$ and $e_m^*Qe_j=0$ for $j<m-p=r$. Multiplying the Arnoldi factorization in [F1] by $Q$ yields $AV_mQ=V_mQH^++\beta_m v_{m+1}e_m^*Q$; since $H^+$ is upper Hessenberg, restricting to columns 1 through $r$ gives $AV_mQ(:,1:r)=V_mQ(:,1:r)H_r^++(h^+V_mQe_{r+1}+\beta_m(e_m^*Qe_r)v_{m+1})e_r^*$, the stated identity with residual vector $g$. [F1, F3, F4, F5, step 2.1, algebra]

4.1 The vector $V_mQe_{r+1}$ is orthogonal to the first $r$ columns of $V_mQ$, and [F1] makes $v_{m+1}$ orthogonal to the range of $V_m$; hence $g$ is orthogonal to the retained columns. If $g\ne0$, normalization gives the next Arnoldi residual direction with coefficient $\|g\|_2$; if $g=0$, step 3.2 says $A$ maps the retained range into itself. [F1, step 3.2, algebra] ∎
