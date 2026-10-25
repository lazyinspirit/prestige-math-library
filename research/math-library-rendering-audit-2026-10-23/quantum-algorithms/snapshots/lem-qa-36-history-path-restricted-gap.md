---
id: lem-qa-36-history-path-restricted-gap
kind: lemma
title: Restricted history-path gap
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - alg-qa-36-five-local-history-path
  - lem-qa-36-history-state-ground-and-output
  - thm-qa-36-finite-cheeger-bound
  - lem-qa-36-history-path-ground-vector-monotonicity
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
axiom_use: None; the proof uses finite-dimensional variational principles and finite reversible-chain Cheeger inequality only.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Dorit Aharonov, Wim van Dam, Julia Kempe, Zeph Landau, Seth Lloyd, and Oded Regev, Adiabatic Quantum Computation is Equivalent to Standard Quantum Computation
      url: https://arxiv.org/pdf/quant-ph/0405098
      locator: Lemma 3.5 and Claims 3.7–3.8, PDF pp. 12–14; path gap through a monotone reversible clock chain.
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapter 33, printed pp. 171–176; legal-clock path spectral gap.
---

## Statement

Let $N\ge1$ be the number of propagation steps. On the legal-clock block with the zero data input, remove the input penalty and conjugate by the prefix unitaries as in [[lem-qa-36-history-state-ground-and-output]]. The resulting clock matrix is
$$H_0(s)=(1-s)\operatorname{diag}(0,1,\ldots,N)+\frac{s}{2}L_N,$$
where $L_N$ is the path Laplacian. Its ground eigenvalue is simple and its spectral gap is at least $1/(48N^2)$ for every $s\in[0,1]$. In particular, the restricted clock gap is $\Omega(N^{-2})$ uniformly along the path.

## Facts & Assumptions

**Given:** The five-local path and its legal-clock restriction from [[alg-qa-36-five-local-history-path]].

[F1] For every $s>0$, the normalized ground vector $v$ of $H_0(s)$ is strictly positive and nonincreasing in its clock index ([[lem-qa-36-history-path-ground-vector-monotonicity]]).

[F2] For a finite irreducible reversible row-stochastic chain with stationary distribution $\pi$, conductance $\phi$ gives the algebraic spectral-gap estimate $1-\lambda_2\ge\phi^2/2$ ([[thm-qa-36-finite-cheeger-bound]]).

[F3] The finite-dimensional spectral theorem gives an orthonormal eigenbasis for $H_0(s)$ ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

## Proof

1.1 On legal clock $c_i$, $H_{\rm clock0}$ has eigenvalue $i$; the propagation terms have diagonal entries $1/2$ at the endpoints, $1$ internally, and adjacent entries $-1/2$. Therefore the clock matrix is the displayed $H_0(s)=aD+tL_N$, where $a=1-s$, $t=s/2$, and $D=\operatorname{diag}(0,1,\ldots,N)$. [given, F3, algebra]

2.1 If $0\le s\le1/6$, the Rayleigh quotient at $e_0$ gives the ground eigenvalue $E_0\le t$. On the codimension-one subspace $e_0^\perp$, $D\ge I$ and $L_N\ge0$, so every Rayleigh quotient there is at least $a$. If the second eigenvalue $E_1$ were below $a$, the span of eigenvectors for the two lowest eigenvalues would have dimension at least two and would contain a nonzero vector orthogonal to $e_0$; its quotient, as an eigenbasis expansion supported on eigenvalues at most $E_1$, would be at most $E_1<a$, a contradiction. Hence $E_1\ge a$, and $E_1-E_0\ge a-t=1-3s/2\ge3/4$. [F3, step 1.1, algebra]

2.2 Now suppose $s\ge1/6$, so $t\ge1/12$, and let $v$ be the normalized positive ground vector from [F1], with eigenvalue $E_0$. Set $\pi_i=v_i^2$, so $\sum_i\pi_i=1$ and $\pi_0\ge\pi_1\ge\cdots\ge\pi_N>0$. For a vector $f=(f_i)$ with $\sum_i\pi_i f_i=0$, set $x_i=v_if_i$; then $x\perp v$ and $\|x\|^2=\sum_i\pi_i|f_i|^2$. The eigenvalue equation $H_0v=E_0v$, expanded edge by edge, gives the ground-state identity $\displaystyle \langle x,(H_0-E_0I)x\rangle=t\sum_{i=0}^{N-1}v_iv_{i+1}|f_i-f_{i+1}|^2.$ Indeed, the diagonal coefficient at vertex $i$ after subtracting $E_0$ is $t$ times the sum of neighboring ratios $v_j/v_i$; multiplying by $v_i^2|f_i|^2$ assigns $t v_iv_j|f_i|^2$ to each incident edge, and the off-diagonal term supplies $-2t v_iv_j\operatorname{Re}(\overline f_i f_j)$. [F1, F3, step 1.1, algebra]

3.1 Since $v_i\ge v_{i+1}$, each edge weight satisfies $v_iv_{i+1}\ge\pi_{i+1}$. Define a continuous-time reversible path chain with stationary masses $\pi_i$ and symmetric edge conductances $c_i=\pi_{i+1}$: its rate from $i$ to $i+1$ is $c_i/\pi_i=\pi_{i+1}/\pi_i\le1$, and its reverse rate is $c_i/\pi_{i+1}=1$. Each total exit rate is at most $2$. Let $Q$ be its generator and $P=I+Q/2$. Then $P$ is row-stochastic, reversible with stationary law $\pi$, and irreducible, and its Dirichlet form is $\langle f,(I-P)f\rangle_\pi=\frac12\sum_i c_i|f_i-f_{i+1}|^2$. [F1, step 2.2, construct, algebra]

4.1 For any set $S$ with $0<\pi(S)\le1/2$, if $0\in S$, choose the largest $k$ for which $\{0,\ldots,k\}\subseteq S$. Then $k<N$, edge $(k,k+1)$ crosses the cut, and the tail mass is at least $1/2$. Monotonicity gives $\sum_{j=k+1}^N\pi_j\le N\pi_{k+1}$, so $\pi_{k+1}\ge1/(2N)$. The chain flow across the edge is $c_k/2=\pi_{k+1}/2$, hence $Q_P(S,S^c)/\pi(S)\ge1/(2N)$. If $0\notin S$, put $k=\min S-1$; then $S\subseteq\{k+1,\ldots,N\}$ and $\pi(S)\le N\pi_{k+1}$, while the crossing flow is again $\pi_{k+1}/2$, giving the same ratio bound. Thus $\phi(P)\ge1/(2N)$. [F1, step 3.1, choose, algebra]

5.1 By [F2], $1-\lambda_2(P)\ge1/(8N^2)$. The generator gap is twice this number because $P=I+Q/2$, so its Dirichlet-form Poincaré constant is at least $1/(4N^2)$. For any $x\perp v$, set $f_i=x_i/v_i$; then $\sum_i\pi_i f_i=0$. The ground-state identity in step 2.2 and $v_iv_{i+1}\ge c_i$ give $\langle x,(H_0-E_0I)x\rangle\ge t/(4N^2)\|x\|^2$. By [F3], expand $x$ in an orthonormal eigenbasis of $H_0$ with $v$ as its simple ground vector; choose $x$ to be a unit eigenvector for $E_1$, orthogonal to $v$. Its quotient is exactly $E_1-E_0$, so the established lower bound applies to this $x$. Thus $E_1-E_0\ge t/(4N^2)\ge1/(48N^2)$ for $s\ge1/6$. Together with step 2.1, this proves the uniform bound. [F2, F3, step 2.1, step 2.2, step 3.1, step 4.1, algebra] ∎
