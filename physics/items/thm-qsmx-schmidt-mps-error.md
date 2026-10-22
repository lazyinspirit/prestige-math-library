---
id: thm-qsmx-schmidt-mps-error
kind: theorem
title: Finite sweep termination and computable norm error
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - alg-qsmx-schmidt-mps-truncation
  - def-qsmx-mps-and-transfer
  - thm-qc-schmidt-decomposition
  - thm-singular-value-decomposition
  - def-qsmx-information-conventions
  - cor-mean-value-theorem
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
dependency_roles:
  alg-qsmx-schmidt-mps-truncation: mathematical-premise
  def-qsmx-mps-and-transfer: mathematical-premise
  thm-qc-schmidt-decomposition: mathematical-premise
  thm-singular-value-decomposition: mathematical-premise
  def-qsmx-information-conventions: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: D. Pérez-García, F. Verstraete, M. M. Wolf, and J. I. Cirac, Matrix Product State Representations, §3.1 Theorem 1 (successive-SVD OBC construction)
      url: https://arxiv.org/pdf/quant-ph/0608197
    - title: Grégoire Misguich, Introduction to matrix-product states and tensor networks, §2.4.4 and Appendix A.1
      url: https://arxiv.org/pdf/2606.24803
---

## Statement

Let $N\ge1$, let $H_j=\mathbb C^{d_j}$ be nonzero finite-dimensional complex inner-product spaces with fixed ordered orthonormal bases, and let $\psi\in H_1\otimes\cdots\otimes H_N$ have norm one. For integer caps $D_k\ge1$ at cuts $1\le k<N$, run the exact sequential Schmidt truncation algorithm on $\psi$ and let $\phi$ be its unnormalized output and $\delta_k$ the discarded squared singular-value sum measured from the current unnormalized remainder at cut $k$. The sweep uses exactly $N-1$ SVDs and

$$\|\psi-\phi\|^2=\sum_{k=1}^{N-1}\delta_k.$$

In particular, $\|\psi-\phi\|^2\le\sum_k\delta_k$. This is a current-sweep error statement; the $\delta_k$ are not asserted to be the Schmidt tails of the original input at the same cuts. If $\psi$ is represented exactly as an open MPS with bond dimension $D_k$ at cut $k$, then its Schmidt rank at that cut is at most $D_k$, and the dimensionless von Neumann entropy in nats of the reduced density $\rho_{1\cdots k}:=\operatorname{Tr}_{k+1,\ldots,N}|\psi\rangle\langle\psi|$ satisfies

$$S(\rho_{1\cdots k})=-\operatorname{tr}(\rho_{1\cdots k}\log\rho_{1\cdots k})\le\log D_k,$$

with zero eigenvalues contributing $0\log0:=0$ and the natural logarithm convention.

## Statement references

[[alg-qsmx-schmidt-mps-truncation]]

[[def-qsmx-mps-and-transfer]]

[[thm-qc-schmidt-decomposition]]

[[thm-singular-value-decomposition]]

[[def-qsmx-information-conventions]]

[[cor-mean-value-theorem]]

[[thm-logarithm-derivative-and-integral]]

[[thm-natural-logarithm-laws]]

## Facts & Assumptions

**Given:** The normalized finite tensor, its ordered product basis, integer caps $D_k\ge1$, and the exact truncation procedure of the Statement.

[F1] [[alg-qsmx-schmidt-mps-truncation]]: at cut $k$, the current coefficient matrix is decomposed exactly, its first $m_k$ positive singular directions are retained, and $\delta_k$ is the sum of squares of the discarded singular values of that current remainder.

[F2] [[def-qsmx-mps-and-transfer]]: an open MPS coefficient factors across each bond through its finite virtual space $\mathbb C^{D_k}$; normalization is used only for a nonzero vector.

[F3] [[thm-qc-schmidt-decomposition]]: a finite bipartite coefficient matrix has positive singular coefficients giving the Schmidt decomposition; these coefficients are the positive singular values, and the squared norm is their squared sum.

[F4] [[thm-singular-value-decomposition]]: the number of positive singular values of a finite-dimensional linear map equals its rank; the proof identifies the range as the span of the positive left singular vectors and annihilates the zero-singular-value domain basis.

[F5] [[def-qsmx-information-conventions]]: for a finite density matrix $\rho$, $S(\rho)=-\sum_{j:\lambda_j>0}\lambda_j\log\lambda_j$ in nats, with $0\log0:=0$; the partial trace contracts the stated tensor factors.

[F6] [[thm-natural-logarithm-laws]]: $\log$ is continuous and increasing on $(0,\infty)$ and $\log 1=0$, with $\log(xy)=\log x+\log y$ for positive $x,y$.

[F7] [[thm-logarithm-derivative-and-integral]]: $\log'(x)=1/x$ for every $x>0$.

[F8] [[cor-mean-value-theorem]]: a function continuous on $[a,b]$ and differentiable on $(a,b)$ has $c\in(a,b)$ with $f(b)-f(a)=f'(c)(b-a)$.

## Proof

1.1 Since $\|\psi\|=1$ and every cap $D_k\ge1$, each current remainder has a positive singular value and the algorithm retains at least one; hence all subsequent remainders are nonzero and all retained bond dimensions are positive. The loop makes one SVD for each $k=1,\ldots,N-1$, exactly $N-1$ in total. Put $\mathcal H_{\le k}:=H_1\otimes\cdots\otimes H_k$ and $\mathcal R_k:=H_{k+1}\otimes\cdots\otimes H_N$, with $\mathcal H_{\le0}=\mathbb C$. Let $U_k:S_k\to S_{k-1}\otimes H_k$ have the retained left singular columns, so $U_k^*U_k=I_{S_k}$ and $\psi^{(k)}=(U_k^*\otimes I_{\mathcal R_k})\psi^{(k-1)}$. Define $W_0=I_{\mathbb C}$ and $W_k=(W_{k-1}\otimes I_{H_k})U_k:S_k\to\mathcal H_{\le k}$. Each $W_k$ is an isometry by induction. Under the canonical $\mathbb C\otimes\mathcal H\cong\mathcal H$ identification, set $x_0=\psi$, $P_0=I$, and, for $k\ge1$, $x_k=(W_k\otimes I_{\mathcal R_k})\psi^{(k)}$ and $P_k=(W_kW_k^*)\otimes I_{\mathcal R_k}$ on the full chain. The range of $W_k$ lies in $\operatorname{ran}W_{k-1}\otimes H_k$, so $\operatorname{ran}P_k\subseteq\operatorname{ran}P_{k-1}$ and $P_kP_{k-1}=P_{k-1}P_k=P_k$. The remainder recurrence gives $x_k=P_kx_{k-1}=P_k\psi$ inductively. Expanding $W_{N-1}$ in the stored site tensors shows that $x_{N-1}$ is exactly their contraction with the final remainder, hence is the returned unnormalized $\phi$ in algorithm instruction 3. For $N=1$, $x_0=\phi=\psi$. [given, F1, F2, F3, construct, algebra]

1.2 Across cut $k$, the coefficient matrix of an exact MPS factors as $L_kR_k$ by summing over its $D_k$-dimensional virtual index. Its matrix rank is therefore at most $D_k$. By [F3]–[F4], the Schmidt rank is the number of positive singular values, so it is at most $D_k$. Writing the Schmidt expansion as $\psi=\sum_{j=1}^q s_j u_j\otimes v_j$ gives $q\le D_k$, $p_j:=s_j^2>0$, and $\sum_jp_j=1$. Expanding the partial trace in [F5] gives $\rho_{1\cdots k}=\sum_jp_j|u_j\rangle\langle u_j|$, so these $p_j$ are exactly its positive eigenvalues. [given, F2, F3, F4, F5]

2.1 Put $\varepsilon_k:=x_{k-1}-x_k=(P_{k-1}-P_k)\psi$ in the full chain. This vector lies in $\operatorname{ran}P_{k-1}$ and is orthogonal to $\operatorname{ran}P_k$. For $j>k$, nesting gives $\varepsilon_j\in\operatorname{ran}P_{j-1}\subseteq\operatorname{ran}P_k$, so $\langle\varepsilon_k,\varepsilon_j\rangle=0$. Thus the embedded discarded components from different cuts are pairwise orthogonal. [step 1.1, algebra]

3.1 At cut $k$, $\varepsilon_k=(W_{k-1}\otimes I_{H_k\otimes \mathcal R_k})(\psi^{(k-1)}-(U_k\otimes I_{\mathcal R_k})\psi^{(k)})$. The map outside the parentheses is an isometry by step 1.1, and the vector in parentheses is the discarded Schmidt part of the current compressed remainder. Hence [F3] and [F1] give $\|\varepsilon_k\|^2=\delta_k$. Since $x_0=\psi$ and $x_{N-1}=\phi$, telescoping gives $\psi-\phi=\sum_{k=1}^{N-1}\varepsilon_k$; orthogonality from step 2.1 yields $\|\psi-\phi\|^2=\sum_k\|\varepsilon_k\|^2=\sum_k\delta_k$. For $N=1$ both sides are zero, so the equality also covers the empty sweep. [given, F1, F3, step 1.1, step 2.1, algebra]

4.1 For every $x>1$, apply [F8] to $\log$ on $[1,x]$; [F6]–[F7] give $\log x=(x-1)/c\le x-1$ for some $c\in(1,x)$. For $0<x<1$, apply [F8] on $[x,1]$ to get $-\log x=(1-x)/c$ for some $c\in(x,1)$, hence $\log x\le x-1$; equality holds at $x=1$. Apply this inequality to $x=(q p_j)^{-1}$, multiply by $p_j>0$, and sum: $\sum_jp_j\log((q p_j)^{-1})\le\sum_j(1/q-p_j)=0$. The logarithm product law [F6] then gives $\log q-S(\rho_{1\cdots k})=\sum_jp_j\log(qp_j)\ge0$. Since $q\le D_k$ and $\log$ is increasing, $S(\rho_{1\cdots k})\le\log q\le\log D_k$. The zero-eigenvalue convention in [F5] includes rank-deficient reductions. [given, F5, F6, F7, F8, step 1.2, algebra] ∎
