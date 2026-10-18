---
id: lem-pe26-complementary-primal-dual-spectrum
kind: lemma
title: Complementary primal and dual projections share nonunit spectrum
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [def-pe26-scaled-averaging-and-bddc-preconditioner, def-pe26-feti-dp-dual-system-and-preconditioner]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; only finite-dimensional linear algebra is used."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jan Mandel and Bedřich Sousedík, BDDC and FETI-DP under Minimalist Assumptions, §4, Lemmas 4.1–4.2"
      url: "https://arxiv.org/pdf/0708.4031"
    - title: "Olof B. Widlund, Introduction to the Design and Theory of Domain Decomposition Algorithms, DD20 Tutorial, pp. 90–93"
      url: "https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf"
---

## Statement

Let $V,U_1,U_2$ be finite-dimensional real vector spaces, let $A:V\to V'$ be symmetric positive definite, and let $L_i:V\to U_i$, $T_i:U_i\to V$ satisfy $L_iT_i=I_{U_i}$ for $i=1,2$ and $T_1L_1+T_2L_2=I_V$. Then the operators

$$G_1=(L_1A^{-1}L_1^T)(T_1^TAT_1),\qquad G_2=(T_2^TAT_2)(L_2A^{-1}L_2^T)$$

have the same eigenvalues, with the same multiplicities, except possibly at the eigenvalue $1$.

## Facts & Assumptions

**Given:** Finite-dimensional spaces, $A$ symmetric positive definite, and the four displayed left-inverse and complementary-projection identities.

## Proof

1.1 The products $G_1$ and $G_2$ act on $U_1$ and $U_2'$, respectively. Set $X=L_1A^{-1}L_2^T:U_2'\to U_1$ and $Y=T_2^TAT_1:U_1\to U_2'$. By the given hypotheses, $L_1T_1=I$, $L_2T_2=I$, and $T_1L_1+T_2L_2=I$. Expanding the products gives $G_1-I=-XY$ and $G_2-I=-YX$. In detail, $G_1-I=L_1A^{-1}((T_1L_1)^T-I)AT_1=-L_1A^{-1}L_2^TT_2^TAT_1$; also $YX=T_2^T A(I-T_2L_2)A^{-1}L_2^T=I-G_2$. [given, algebra]

2.1 If $u\in U_1$ satisfies $G_1u=\lambda u$ with $\lambda\ne1$, then $XYu=(1-\lambda)u$, so $Yu\ne0$. The identity $G_2-I=-YX$ gives $(G_2-I)Yu=-YXYu=(\lambda-1)Yu$, hence $G_2(Yu)=\lambda Yu$. For $v\in U_2'$, the reverse map is $v\mapsto-Xv/(\lambda-1)$; the same identities show it is the inverse on the $\lambda$-eigenspaces. Thus these eigenspaces are isomorphic. [given, step 1.1, algebra]

3.1 Choose bases of the finite-dimensional spaces and their dual bases. Both operators are diagonalizable: $T_1^TAT_1$ and $L_1A^{-1}L_1^T$ are positive definite, so, writing $D_1=T_1^TAT_1$, $G_1$ is similar to the symmetric positive definite product $D_1^{1/2}(L_1A^{-1}L_1^T)D_1^{1/2}$; likewise $G_2$ is similar to $D_2^{1/2}(L_2A^{-1}L_2^T)D_2^{1/2}$, where $D_2=T_2^TAT_2$. The left-inverse identities make $T_i$ injective and $L_i$ surjective, proving each factor is positive definite. Therefore equal eigenspace dimensions from step 2.1 give equal algebraic multiplicities for every $\lambda\ne1$. [given, step 2.1, algebra] ∎

## Remarks

[[def-pe26-scaled-averaging-and-bddc-preconditioner]]: for BDDC, $L_1=E_0$, $T_1=R$, and $E_0R=I_{\widehat W}$.

[[def-pe26-feti-dp-dual-system-and-preconditioner]]: for FETI-DP, $L_2=B$, $T_2=B_D^T$, $BB_D^T=I_\Lambda$, and $B_D^TB+R E_0=I_{\widetilde W}$.
