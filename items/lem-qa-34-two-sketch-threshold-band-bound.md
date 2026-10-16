---
id: lem-qa-34-two-sketch-threshold-band-bound
kind: lemma
title: A deterministic threshold-band bound for two Gram sketches
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-qa-34-threshold-band-svd-target
  - thm-singular-value-decomposition
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Ewin Tang, A quantum-inspired classical algorithm for recommendation systems, version 3
      url: https://arxiv.org/pdf/1807.04271v3
---

## Statement

Let $A\in\mathbb R^{m\times n}$ be nonzero, $F=\|A\|_F$, $0<\sigma\le F$, $K=F^2/\sigma^2$, and $0<\eta\le1$. Suppose $S\in\mathbb R^{q\times n}$ and $W\in\mathbb R^{q\times q}$ satisfy $\|W\|_F=F$ and
$$\|A^TA-S^TS\|_F\le tF^2,\qquad \|SS^T-WW^T\|_F\le tF^2,\qquad 0<tK\le\tfrac12.$$
Let $U$ be the orthonormal left singular vectors of $W$ with singular values strictly greater than $\sigma$, and let $\Sigma$ contain those singular values. Write $k$ for their number, $V=S^TU\Sigma^{-1}$, and $M=VV^T$, using empty matrices when $k=0$. Then $k<K$, the eigenvalues of $V^TV$ lie in $[1-tK,1+tK]$, and some threshold-band target of [[def-qa-34-threshold-band-svd-target]] obeys
$$\|AM-A_{\sigma,\eta}\|_F\le F\left(tK+\sqrt{77tK/\eta}\right).$$

## Facts & Assumptions

**Given:** The matrices and bounds in the Statement. Matrices are real and all projections below are orthogonal.

[F1] The [[thm-singular-value-decomposition]] identifies the nonzero eigenvalues of $S^TS$ and $SS^T$. The [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]] diagonalizes every real symmetric matrix used below.

[F2] [[thm-cauchy-schwarz-and-the-euclidean-norm]] applies to matrix entries, giving $|\operatorname{tr}(X^TY)|\le\|X\|_F\|Y\|_F$ and $\|X\|_{\rm op}\le\|X\|_F$.

[F3] A [[def-qa-34-threshold-band-svd-target]] is $A(P_1+Q)$, where $P_1$ projects onto singular values at least $\sigma(1+\eta)$ and $Q$ is any projection supported in the band $[\sigma(1-\eta),\sigma(1+\eta))$.

## Proof


1.1 Set $H=A^TA$, $G=S^TS$, $B=SS^T$, $C=WW^T$, and $a=\sigma^2$. Since $\operatorname{tr}C=F^2$ and each retained eigenvalue exceeds $a$, $ka<F^2$, so $k<K$. For $k>0$, $T=U^TBU\ge\Sigma^2-tF^2I\ge(a-tF^2)I>0$. Therefore $P=S^TUT^{-1}U^TS$ is the projection onto the range of $V$. Also $V^TV-I=\Sigma^{-1}U^T(B-C)U\Sigma^{-1}$ has Frobenius norm at most $tK$. By the SVD, the nonzero eigenvalues of $M-P$ are those of $V^TV-I$, giving $\|M-P\|_F\le tK$. For $k=0$, use $P=M=0$ and the same bounds with empty matrices. [given, F1, F2, algebra, cases]

1.2 We record the spectral comparisons explicitly. For a symmetric $J$ with decreasing eigenvalues, $\lambda_j(J)=\max_{\dim E=j}\min_{x\in E,\|x\|=1}x^TJx$: the span of its first $j$ eigenvectors attains the value, and every $j$-dimensional $E$ intersects the span of the eigenvectors numbered $j$ onward. Thus $|\lambda_j(J)-\lambda_j(J')|\le\|J-J'\|_{\rm op}$. Moreover $\sum_{j\le k}\lambda_j(J)=\max_{\operatorname{rank}R=k}\operatorname{tr}(RJ)$ over projections $R$: in an eigenbasis the diagonal entries of $R$ are in $[0,1]$ and sum to $k$, so moving their weight to the first $k$ indices maximizes the sum. By [F2] the top-$k$ sums for $J,J'$ differ by at most $\sqrt{k}\|J-J'\|_F$. Pad matrices by zero blocks when dimensions differ. Applying these comparisons to $H,G$ and $B,C$, and using [F1] between $G,B$, gives $|\lambda_j(H)-\lambda_j(C)|\le2tF^2$ and a top-$k$ sum difference at most $2\sqrt{k}tF^2$. [given, F1, F2, algebra]

2.1 If $k>0$, $U^TB^2U-T^2=U^TB(I-UU^T)BU$ is positive semidefinite. Hence $\operatorname{tr}(PG)=\operatorname{tr}[(U^TB^2U)T^{-1}]\ge\operatorname{tr}T\ge\sum_{j\le k}\lambda_j(C)-\sqrt{k}tF^2$. Also $\operatorname{tr}(PH)\ge\operatorname{tr}(PG)-\sqrt{k}tF^2$. Combining these inequalities with the top-$k$ comparisons in step 1.2 gives $\Delta:=\sum_{j\le k}\lambda_j(H)-\operatorname{tr}(PH)\le4\sqrt{k}tF^2$. The variational formula gives $\Delta\ge0$. If $k=0$, $\Delta=0$. [step 1.1, step 1.2, F1, F2, algebra, cases]

3.1 Let $r$ count eigenvalues of $H$ strictly greater than $a$. Between indices $k$ and $r$, every crossing eigenvalue lies within $2tF^2$ of $a$, by step 1.2 and the strict threshold rule for $C$. There are at most $K$ crossing indices: if $r>k$, then $r<K$ since each of its first $r$ eigenvalues exceeds $a$ and $\operatorname{tr}H=F^2$; if $k>r$, then $k<K$. Thus the difference between the sums of the largest $k$ values of $\lambda_j(H)-a$ and all positive values of $\lambda_j(H)-a$ is at most $2KtF^2$ . Put $p_j=\langle e_j,Pe_j\rangle$ in an eigenbasis of $H$. Since $\sum_jp_j=k$, the nonnegative threshold deficit is $$\Delta_a=\sum_{\lambda_j>a}(\lambda_j-a)(1-p_j)+\sum_{\lambda_j\le a}(a-\lambda_j)p_j\le\Delta+2KtF^2\le6KtF^2.$$ For $k=0$ the same crossing argument applies, and zero eigenvalues can be padded without changing the sums. [step 1.1, step 1.2, step 2.1, algebra]

4.1 Let $P_1,P_2,P_3$ project onto eigenvalues respectively in $[a(1+\eta)^2,\infty)$, $[a(1-\eta)^2,a(1+\eta)^2)$, and $[0,a(1-\eta)^2)$. Write $E$ for the part of $\Delta_a$ on the first and third sets, and $L=\operatorname{tr}[P_1(I-P)]+\operatorname{tr}(P_3P)$. Both outside gaps from $a$ are at least $\eta a$, so $L\le E/(\eta a)$ and $E\le6KtF^2\le7KtF^2$. This uses no strict separation of eigenvalues within the band. [step 3.1, algebra]

5.1 On the band space, $R=P_2PP_2$ is a positive contraction. Let $Q$ be its spectral projection onto eigenvalues at least $1/2$. In an eigenbasis of $R$, $\|P_2P-Q\|_F^2=\sum_s\min(s,1-s)\le2\sum_s s(1-s)=2\|P_2P(I-P_2)\|_F^2\le2L$. For the last inequality, the high cross block satisfies $\|P_2PP_1\|_F=\|P_2(I-P)P_1\|_F\le\|(I-P)P_1\|_F$ and the low block satisfies $\|P_2PP_3\|_F\le\|PP_3\|_F$. These squares sum to at most $L$. [F1, step 4.1, algebra, construct]

6.1 Evaluate $\|A(P-P_1-Q)\|_F^2$ by summing its rows in an eigenbasis of $H$. Its high contribution is $\sum_{P_1}\lambda_j(1-p_j)\le2E/\eta$, because $\lambda/(\lambda-a)\le2/\eta$ there. Its low contribution is at most $aL$, and its band contribution is at most $a(1+\eta)^2\|P_2P-Q\|_F^2\le8aL$. Thus the sum is at most $11E/\eta\le77tKF^2/\eta$. By [F3], $A(P_1+Q)$ is a permitted target. Finally $\|A(M-P)\|_F\le\|A\|_{\rm op}\|M-P\|_F\le FtK$; the triangle inequality gives the result. The same block formulas cover empty high, band or low spaces, $k=0$, repeated eigenvalues, $\eta=1$, and both endpoint conventions. [F2, F3, step 1.1, step 4.1, step 5.1, algebra] ∎

