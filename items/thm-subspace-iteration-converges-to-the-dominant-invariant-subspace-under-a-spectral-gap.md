---
id: thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap
kind: theorem
title: "Subspace iteration converges to the dominant invariant subspace when a spectral gap separates the wanted and unwanted eigenvalues"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-diagonalisable-endomorphism,
       def-subspace-iteration-and-the-dominant-invariant-subspace]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Stuart and Jochen Voss, Matrix Analysis and Algorithms"
      url: "https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf"
---

## Statement

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$, let $n\ge2$, let
$p\in\{1,\dots,n-1\}$, let $A\in M_n(\mathbb F)$ be diagonalisable with
eigenvalues ordered by
$|\lambda_1|\ge\cdots\ge|\lambda_p|>|\lambda_{p+1}|\ge\cdots\ge|\lambda_n|$.
Let $Q_0\in M_{n\times p}(\mathbb F)$ have orthonormal columns.
Write $A=V\operatorname{diag}(\Lambda_1,\Lambda_2)V^{-1}$ in the ordered
eigenbasis and write
$V^{-1}Q_0=\begin{bmatrix}C_1\\C_2\end{bmatrix}$ with $C_1\in M_p(\mathbb F)$.
Assume $C_1$ is invertible. Then the column space of $Q_k$ converges to that
dominant invariant subspace. More precisely, in the ordered eigenbasis it is
the graph of
$$Z_k:=\Lambda_2^kC_2C_1^{-1}\Lambda_1^{-k},$$
and
$$\|Z_k\|_2=O(|\lambda_{p+1}/\lambda_p|^k).$$

## Facts & Assumptions

**Given:** The field, dimensions, diagonalisable matrix $A$, spectral gap,
initial orthonormal frame $Q_0$, and valid subspace iteration $(Q_k)$ from the
statement, for which
the leading coefficient block $C_1$ in the statement is invertible.

[L1] A diagonalisable matrix admits an eigenbasis ([[def-diagonalisable-endomorphism]]).

[L2] Subspace iteration is the repeated QR orthonormalisation of $AQ_k$ ([[def-subspace-iteration-and-the-dominant-invariant-subspace]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], use the decomposition from the statement, where $\Lambda_1=\operatorname{diag}(\lambda_1,\dots,\lambda_p)$ and $\Lambda_2=\operatorname{diag}(\lambda_{p+1},\dots,\lambda_n)$. The hypothesis states exactly that $C_1$ is invertible. [L1, given]

2.1 The spectral gap implies $\lambda_p\neq0$, so $\Lambda_1^kC_1$ is invertible for every $k$. Hence $A^kQ_0$ has full column rank, every reduced QR step in [L2] is defined, and the column space of $Q_k$ equals that of $A^kQ_0$. Now $$ A^kQ_0= V \begin{bmatrix} \Lambda_1^k C_1 \\ \Lambda_2^k C_2 \end{bmatrix}. $$ Multiplying on the right by $C_1^{-1}\Lambda_1^{-k}$ shows that the same column space is the graph of $\Lambda_2^k C_2 C_1^{-1}\Lambda_1^{-k}$ over the dominant invariant subspace. [L2, step 1.1, algebra]

3.1 The spectral gap implies $$ \|\Lambda_2^k C_2 C_1^{-1}\Lambda_1^{-k}\|_2 =O\!\left(\left|\frac{\lambda_{p+1}}{\lambda_p}\right|^k\right). $$ Hence the graph in step 2.1 converges to the dominant invariant subspace at that rate. [step 2.1, algebra]

4.1 Therefore the column space of $Q_k$ converges to the dominant invariant subspace, with the precise graph-norm rate stated above. [step 3.1] ∎
