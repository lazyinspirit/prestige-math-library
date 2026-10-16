---
id: lem-qa-18-symmetric-compressed-walk-bound
kind: lemma
title: "Spectral bound for a symmetric lazy walk killed on a marked set"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps:
  - def-qa-18-marked-set-and-stationary-mass
  - def-qa-17-finite-stochastic-kernel
  - def-self-adjoint-and-normal-endomorphism
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
justified_by: []
proof_strategy: direct
axiom_use: "None; the proof uses finite-dimensional spectral decomposition and Cauchy–Schwarz."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 18, §18.4, Lemma 18.2"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 8, §8.1"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Frédéric Magniez, Ashwin Nayak, Jérémie Roland, and Miklos Santha, Search via Quantum Walk, Proposition 1 and §3"
      url: "https://arxiv.org/pdf/quant-ph/0608026"
---
## Statement

Let $X$ be a finite set of size $n\ge2$, and let $P=(I+Q)/2$ where $Q$ is a symmetric row-stochastic matrix. Let $\mathbf u=n^{-1/2}\mathbf 1_X$. Assume the second-largest eigenvalue of $P$ is at most $1-\delta$, where $0<\delta\le1$. For $\mathcal M\subseteq X$, put $\varepsilon=|\mathcal M|/n$, $U=X\setminus\mathcal M$, and let $\Pi_U$ be the coordinate orthogonal projection defined by $\Pi_Ue_x=e_x$ for $x\in U$ and $\Pi_Ue_x=0$ for $x\notin U$. Let $P_U=\Pi_UP\Pi_U$ restricted to vectors supported on $U$. Then $P$ has spectrum in $[0,1]$ and

$$\|P_U\|\le 1-\delta\varepsilon.$$

The empty compression has norm $0$ by convention.

## Facts & Assumptions

**Given:** The finite symmetric lazy transition matrix $P=(I+Q)/2$, its uniform unit vector $\mathbf u$, the marked set $\mathcal M$, and the second-eigenvalue bound.

[F1] [[def-qa-17-finite-stochastic-kernel]]: $Q_{xy}\ge0$ and $\sum_y Q_{xy}=1$ for every row.

[F2] [[def-qa-18-marked-set-and-stationary-mass]]: in the uniform case $\varepsilon=|\mathcal M|/n$.

[F3] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-dimensional self-adjoint endomorphism has an orthonormal eigenbasis.

[F4] [[def-self-adjoint-and-normal-endomorphism]]: a self-adjoint endomorphism equals its adjoint.

[F5] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: on a nonzero domain, $\|T\|=\max_{\|z\|=1}\|Tz\|$; the zero-domain norm is $0$.

[F6] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: $|\langle v,w\rangle|\le\|v\|\|w\|$ in a real or complex inner-product space.

## Proof


1.1 For any vector $z\in\mathbb C^X$, weighted Cauchy–Schwarz, obtained by applying [F6] to $(\sqrt{Q_{xy}})_y$ and $(\sqrt{Q_{xy}}z_y)_y$, gives $|(Qz)_x|^2\le\sum_y Q_{xy}|z_y|^2$. Summing over $x$ and using symmetry, so that every column sum is also $1$, yields $\|Qz\|^2\le\|z\|^2$. Since $Q$ is self-adjoint by its real symmetric matrix and [F4], [F3] gives a real orthonormal eigenbasis; the contraction inequality forces every eigenvalue of $Q$ into $[-1,1]$. Thus $P=(I+Q)/2$ is self-adjoint with spectrum in $[0,1]$. Its row sums are $1$, so $P\mathbf u=\mathbf u$. [F1, F3, F4, F6, algebra]

1.2 If $U=\varnothing$, then $P_U=0$ and the conclusion follows from [F5]. Otherwise choose a unit vector $z$ supported on $U$ and write $z=\alpha\mathbf u+v$ with $v\perp\mathbf u$. [F6] applied to $\langle z,\mathbf u\rangle=\langle z,\Pi_U\mathbf u\rangle$ gives $|\alpha|^2\le\|\Pi_U\mathbf u\|^2=|U|/n=1-\varepsilon$, so $\|v\|^2=1-|\alpha|^2$. [F2, F6, given, algebra]

2.1 The orthogonal complement $\mathbf u^\perp$ is invariant under $P$ by self-adjointness and $P\mathbf u=\mathbf u$. Its eigenvalues are at most $1-\delta$ by the stated second-eigenvalue hypothesis. Therefore $\langle z,Pz\rangle=|\alpha|^2+\langle v,Pv\rangle\le |\alpha|^2+(1-\delta)\|v\|^2\le1-\delta\varepsilon$. [F3, given, step 1.2, algebra]

3.1 The compression $P_U$ is positive semidefinite because $\langle z,P_Uz\rangle=\langle z,Pz\rangle\ge0$ for every vector supported on $U$, by the nonnegative spectrum in step 1.1. It is self-adjoint, so its operator norm is its largest eigenvalue; equivalently it is the maximum of its unit-vector Rayleigh quotients. Step 2.1 bounds each such quotient by $1-\delta\varepsilon$, proving the result. [F3, F4, F5, step 1.1, step 2.1] ∎

