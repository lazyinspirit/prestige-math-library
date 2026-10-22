---
id: def-qsmx-transverse-ising-majoranas
kind: definition
title: Open transverse Ising chain and ordered Majorana operators
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-qsm-pauli-two-qubit-conventions
dependency_roles:
  def-qsm-pauli-two-qubit-conventions: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "G. B. Mbeng, A. Russomanno, and G. E. Santoro, The quantum Ising chain for beginners, arXiv:2009.09208v2, §§1–2 and 6.2"
      url: "https://arxiv.org/pdf/2009.09208"
    - title: "Pieter Claeys, Quench dynamics in the Transverse Field Ising Model, Many-body Quantum Dynamics @ TU Dresden lecture notes, §6"
      url: "https://www.pks.mpg.de/fileadmin/user_upload/MPIPKS/group_pages/DQI/TFIM_2024.pdf"
---

## Definition

Let $N\ge1$ be an integer and let $\mathcal H_N=(\mathbb C^2)^{\otimes N}$ with the product inner product linear in its first argument. At each factor use
$$
X=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad Y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad I_2=\begin{pmatrix}1&0\\0&1\end{pmatrix}.
$$
For $1\le j\le N$, $X_j,Y_j,Z_j$ denote these matrices on factor $j$ and $I_2$ on every other factor. For real $h,J$ measured in joules define the finite open-chain matrix
$$H_N(h,J)=-h\sum_{j=1}^N Z_j-J\sum_{j=1}^{N-1}X_jX_{j+1}.$$
The upper limit $N-1$ is the open-boundary convention: no term couples site $N$ to site $1$. Put $S_0=I_{\mathcal H_N}$ and $S_{j-1}=Z_1\cdots Z_{j-1}$ for $j>1$. The ordered Majorana operators are
$$\gamma_{2j-1}=S_{j-1}X_j,\qquad \gamma_{2j}=S_{j-1}Y_j\qquad(1\le j\le N).$$

## Definition references

[[def-qsm-pauli-two-qubit-conventions]]

## Facts & Assumptions

**Given:** An integer $N\ge1$, real energy parameters $h,J$, and the displayed finite tensor-product space.

[F1] [[def-qsm-pauli-two-qubit-conventions]]: $\mathbb C^2$ has its standard ordered basis and product inner product; the Pauli matrices $X,Y,Z$ are Hermitian, square to $I_2$, and act on tensor factors by the stated tensor-product convention.

## Proof

1.1 Each displayed Pauli matrix is an everywhere-defined endomorphism of $\mathbb C^2$. Its tensor embedding $X_j,Y_j,Z_j$ is therefore an everywhere-defined endomorphism of the finite-dimensional product space $\mathcal H_N$, using the fixed factor order in [F1]. [given, F1, algebra]

2.1 Every $S_{j-1}$ and $\gamma_a$ is a finite product of such endomorphisms, and both sums defining $H_N$ are finite (the second is empty when $N=1$). Thus all displayed operators are well-defined matrices on $\mathcal H_N$; the only bond terms are exactly those indexed by $j<N$. [given, step 1.1, algebra] ∎

## Remarks

For $N=4$, the following path records the open bond set and the onsite field terms. A node is one tensor factor; a solid edge labeled $-JX_jX_{j+1}$ is one interaction term, and there is no edge from site $4$ back to site $1$. The diagram records the indexing convention only; the matrix identities and later proofs are independent of the drawing.

```tikz
\begin{tikzpicture}
  \node[circle,draw] (s1) at (0,0) {$1$};
  \node[circle,draw] (s2) at (2,0) {$2$};
  \node[circle,draw] (s3) at (4,0) {$3$};
  \node[circle,draw] (s4) at (6,0) {$4$};
  \draw (s1) -- node[above] {$-JX_1X_2$} (s2);
  \draw (s2) -- node[above] {$-JX_2X_3$} (s3);
  \draw (s3) -- node[above] {$-JX_3X_4$} (s4);
  \node at (0,-0.8) {$-hZ_1$};
  \node at (2,-0.8) {$-hZ_2$};
  \node at (4,-0.8) {$-hZ_3$};
  \node at (6,-0.8) {$-hZ_4$};
\end{tikzpicture}
```
