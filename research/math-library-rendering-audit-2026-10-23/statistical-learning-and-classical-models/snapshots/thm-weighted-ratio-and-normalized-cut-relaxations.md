---
id: thm-weighted-ratio-and-normalized-cut-relaxations
kind: theorem
title: "Weighted RatioCut and Ncut spectral relaxations"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-finite-weighted-graph-laplacian
  - def-ratio-cut-and-normalized-cut
  - lem-weighted-graph-laplacian-quadratic-form-and-kernel
  - lem-ratio-cut-indicator-trace-identities
  - lem-finite-trace-minimization
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ulrike von Luxburg, A Tutorial on Spectral Clustering, Statistics and Computing 17(4), 2007"
      url: "https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf"
    - title: "Jean Gallier, Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts, 2013"
      url: "https://arxiv.org/pdf/1311.2492"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Statement

Let $n\ge1$, $V=\{1,\ldots,n\}$, and let $W=(w_{ij})\in\mathbb R^{n\times n}$ be symmetric, entrywise nonnegative, and zero-diagonal. Put $d_i=\sum_jw_{ij}$, $D=\operatorname{diag}(d_1,\ldots,d_n)$, $L=D-W$, and $V_+=\{i:d_i>0\}$. If $V_+\ne\varnothing$, let $D_+$ and $L_+$ be the principal submatrices indexed by $V_+$ and set $L_{\mathrm{sym},+}=D_+^{-1/2}L_+D_+^{-1/2}$. The matrices $L$ and, when defined, $L_{\mathrm{sym},+}$ are positive semidefinite. For square $B$, define $\operatorname{tr}(B)=\sum_iB_{ii}$. For $1\le k\le n$, let $R_k$ be the minimum of $\sum_r\operatorname{cut}(A_r,A_r^c)/|A_r|$ over partitions of $V$ into $k$ nonempty sets. Then $$\min_{H\in\mathbb R^{n\times k},\ H^TH=I_k}\operatorname{tr}(H^TLH)=\sum_{i=1}^k\lambda_i(L),$$ where the eigenvalues, repeated with multiplicity, are ordered increasingly, and a minimizer consists of orthonormal eigenvectors for the $k$ smallest eigenvalues. This relaxed minimum is a lower bound for $R_k$. When $1\le k\le|V_+|$, let $N_k$ be the minimum of $\sum_r\operatorname{cut}(A_r,A_r^c)/\operatorname{vol}(A_r)$ over partitions of $V_+$ into $k$ nonempty sets. Then $$\min_{H\in\mathbb R^{|V_+|\times k},\ H^TD_+H=I_k}\operatorname{tr}(H^TL_+H)=\sum_{i=1}^k\lambda_i(L_{\mathrm{sym},+}),$$ attained at $H=D_+^{-1/2}Q$ for bottom-$k$ orthonormal eigenvectors $Q$ of $L_{\mathrm{sym},+}$. The corresponding columns $u=D_+^{-1/2}q$ satisfy $L_+u=\lambda D_+u$, and the relaxed minimum is a lower bound for $N_k$. These lower bounds make no approximation guarantee for a subsequent rounding. Isolated vertices are excluded from the Ncut objective and may be reported separately as singleton outputs.

## Statement references

[Ulrike von Luxburg, A Tutorial on Spectral Clustering, Statistics and Computing 17(4), 2007](https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf)

[Jean Gallier, Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts, 2013](https://arxiv.org/pdf/1311.2492)

## Facts & Assumptions

**Given:** A finite weighted graph with $W=W^T\ge0$, zero diagonal, $D=\operatorname{diag}(d_i)$, $L=D-W$, positive-degree set $V_+$, and an integer $k$ in the admissible range for the partition objective under consideration.

[F1] [[def-finite-weighted-graph-laplacian]]: $d_i=\sum_jw_{ij}$, $L=D-W$, $V_+=\{i:d_i>0\}$, and $L_{\mathrm{sym},+}=D_+^{-1/2}L_+D_+^{-1/2}$ on $V_+$ when it is nonempty.

[F2] [[def-ratio-cut-and-normalized-cut]]: RatioCut partitions all of $V$ and sums $\operatorname{cut}(A_r,A_r^c)/|A_r|$; Ncut partitions only $V_+$ and sums $\operatorname{cut}(A_r,A_r^c)/\operatorname{vol}(A_r)$.

[F3] [[lem-weighted-graph-laplacian-quadratic-form-and-kernel]]: $L$ is positive semidefinite and $f^TLf=\frac12\sum_{i,j}w_{ij}(f_i-f_j)^2$.

[F4] [[lem-ratio-cut-indicator-trace-identities]]: RatioCut partitions yield $H_R^TH_R=I_k$ and $\operatorname{RatioCut}=\operatorname{tr}(H_R^TLH_R)$; positive-volume Ncut partitions yield $H_N^TDH_N=I_k$ and $\operatorname{Ncut}=\operatorname{tr}(H_N^TLH_N)$.

[F5] [[lem-finite-trace-minimization]]: for a real symmetric matrix $A$, the minimum of $\operatorname{tr}(Q^TAQ)$ over $Q^TQ=I_k$ is the sum of its $k$ smallest eigenvalues, attained by bottom-$k$ orthonormal eigenvectors.

## Proof

1.1 By [F1] and [F3], $L$ is symmetric positive semidefinite. If $x\in\mathbb R^{|V_+|}$, extend it by zero on isolates to $\widetilde x\in\mathbb R^n$; then $x^TL_+x=\widetilde x^TL\widetilde x\ge0$, so $L_+$ is positive semidefinite. Since $D_+^{-1/2}$ is a real diagonal matrix, $y^TL_{\mathrm{sym},+}y=(D_+^{-1/2}y)^TL_+(D_+^{-1/2}y)\ge0$. Thus both Laplacians in the Statement are positive semidefinite. [given, F1, F3, algebra, construct]

1.2 For every partition of $V$ into $k$ nonempty sets, [F4] supplies a feasible $H_R$ for the real constraint $H^TH=I_k$ with trace equal to that partition's RatioCut. The relaxed feasible set therefore contains every discrete indicator matrix, so the infimum over the relaxed feasible set is at most the minimum over the finite nonempty family of partitions. [given, F2, F4, algebra]

1.3 Let $A_1,\ldots,A_k$ partition $V_+$. By [F4], their normalized indicators, restricted to $V_+$, satisfy $H^TD_+H=I_k$ and have trace objective equal to Ncut. Indeed, if $i$ is isolated then $d_i=0$ and $\sum_jw_{ij}=0$ with $w_{ij}\ge0$ forces every $w_{ij}=0$, so row and column $i$ of $L$ vanish; extending $H$ by zero on isolates leaves the active trace unchanged. Thus the active real feasible set contains every discrete Ncut indicator, and the infimum over the active real feasible set is at most $N_k$. [given, F1, F2, F4, algebra]

2.1 The matrix $L$ is real symmetric by [F1]. Applying [F5] with $A=L$ gives $\min_{H^TH=I_k}\operatorname{tr}(H^TLH)=\sum_{i=1}^k\lambda_i(L)$, attained by orthonormal eigenvectors for the $k$ smallest eigenvalues. Together with step 1.2 this is the claimed RatioCut lower bound. [given, F1, F5, step 1.2, algebra]

2.2 The diagonal entries of $D_+$ are strictly positive, so $Q=D_+^{1/2}H$ is a bijection from $H^TD_+H=I_k$ to $Q^TQ=I_k$. It also gives $\operatorname{tr}(H^TL_+H)=\operatorname{tr}(Q^TD_+^{-1/2}L_+D_+^{-1/2}Q)=\operatorname{tr}(Q^TL_{\mathrm{sym},+}Q)$. Applying [F5] to $L_{\mathrm{sym},+}$ gives the stated Ncut relaxed minimum and optimizer $H=D_+^{-1/2}Q$; with step 1.3 this is the claimed lower bound. [given, F1, F5, step 1.3, algebra, construct]

3.1 If $L_{\mathrm{sym},+}q=\lambda q$ and $u=D_+^{-1/2}q$, multiplying by $D_+^{1/2}$ gives $L_+u=\lambda D_+u$. Conversely, if $L_+u=\lambda D_+u$, then $q=D_+^{1/2}u$ satisfies $L_{\mathrm{sym},+}q=\lambda q$. Thus the symmetric normalized problem is equivalent to the generalized eigenproblem stated. [F1, step 2.2, algebra]

4.1 Every Ncut part is a nonempty subset of $V_+$, so its volume is positive; an isolate has zero volume but is excluded from $N_k$ and can only be reinserted as a separately reported singleton. Steps 1.2, 1.3, 2.1, and 2.2 compare feasible sets and compute the lower bounds; they do not bound the RatioCut or Ncut value after an arbitrary rounding. [F1, F2, step 1.2, step 1.3, step 2.1, step 2.2, algebra] ∎
