---
id: lem-qa-36-history-path-full-gap
kind: lemma
title: Full-space history-path gap
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - lem-qa-36-history-path-restricted-gap
  - lem-qa-36-clock-penalty-gap-perturbation
  - alg-qa-36-five-local-history-path
  - lem-qa-36-history-state-ground-and-output
  - lem-qa-36-history-path-ground-vector-monotonicity
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
axiom_use: None; finite-dimensional spectral and block-matrix arguments only.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Dorit Aharonov, Wim van Dam, Julia Kempe, Zeph Landau, Seth Lloyd, and Oded Regev, Adiabatic Quantum Computation is Equivalent to Standard Quantum Computation
      url: https://arxiv.org/pdf/quant-ph/0405098
      locator: Lemmas 3.11–3.19, PDF pp. 15–20; input-sector decomposition and clock-penalty transfer.
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapter 33, printed pp. 171–176; legal and illegal clock subspaces.
---

## Statement

For the path in [[alg-qa-36-five-local-history-path]], put $N=L+K$, $K_0=n+3N$, and
$$\Delta_0=\frac1{216(N+1)^3},\qquad J=2K_0+\frac{4K_0^2}{\Delta_0}+1.$$
For every $s\in[0,1]$, the full Hamiltonian has a unique ground state and its gap is greater than $3\Delta_0/4$. Consequently the minimum gap is $\Omega(N^{-3})$.

## Facts & Assumptions

**Given:** The five-local path, its input/propagation/clock terms, and the chosen $J$ from [[alg-qa-36-five-local-history-path]].

[F1] The zero-input legal clock block has gap at least $1/(48N^2)$ ([[lem-qa-36-history-path-restricted-gap]]).

[F2] Its normalized ground vector $v$ is nonnegative and nonincreasing, and its ground state is unique ([[lem-qa-36-history-path-ground-vector-monotonicity]]).

[F3] The ideal final history state is the unique kernel vector of $H_{\rm input}+H_{\rm prop}+JH_{\rm clock}$ ([[lem-qa-36-history-state-ground-and-output]]).

[F4] The large clock-penalty lemma bounds the first two full eigenvalues by those of the legal compression with additive error $K^2/(J-2K)$ ([[lem-qa-36-clock-penalty-gap-perturbation]]).

[F5] Finite self-adjoint matrices have an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

## Proof

1.1 Let $\mathcal S$ be the subspace of legal unary clocks. The prefix conjugation from [[lem-qa-36-history-state-ground-and-output]] preserves each clock basis state and makes $H_{\rm prop}$ equal to $L_N/2$ on the clock. Since the input penalty acts only at $c_0$ and the prefix at $c_0$ is the identity, the compression of $H_1(s):=H(s)-JH_{\rm clock}$ to $\mathcal S$ decomposes, in the computational basis $x\in\{0,1\}^n$, as $\displaystyle H_x(s)=H_0(s)+|x|\,|c_0\rangle\langle c_0|,$ where $H_0(s)$ is the zero-input clock block and $|x|$ is Hamming weight. [given, F3, construct, algebra]

2.1 The $x=0$ block has simple ground energy $E_0$ and gap $\Delta\ge1/(48N^2)$ by [F1]–[F2]. Write $p=|v_0|^2$. Since $0\le v_i\le v_0$ and $\sum_i|v_i|^2=1$, $p\ge1/(N+1)>0$. Also $\Delta\le2$: the compression of $H_0(s)$ to $S=\operatorname{span}\{e_0,e_1\}$ is positive and has trace at most $2$ (for $N=1$ its trace is $a+2t=1$, and for $N\ge2$ it is $a+3t=1+s/2\le3/2$). If $u_0$ is a normalized ground vector, the two-dimensional space $S$ contains a nonzero vector $z\perp u_0$. Its Rayleigh quotient is at least $E_1$ by expansion in an orthonormal eigenbasis, while the quotient is at most the largest eigenvalue of the compression to $S$, hence at most its trace $2$. Thus $E_1\le2$ and, since $E_0\ge0$, $\Delta=E_1-E_0\le2$. [F1, F2, F5, step 1.1, algebra]

3.1 For any $x\ne0$, put $r=|x|\ge1$ and $R=|c_0\rangle\langle c_0|$. The spectral gap of the zero-input block gives $H_0-E_0I\ge\Delta(I-|v\rangle\langle v|)$, and $rR\ge R$. Thus $\displaystyle H_x-E_0I\ge B:=\Delta(I-|v\rangle\langle v|)+R.$ If $p<1$, set $w=(c_0-\sqrt p\,v)/\sqrt{1-p}$. On the two-dimensional span of $v$ and $c_0$, the matrix of $B$ in the orthonormal basis $v,w$ has trace $1+\Delta$ and determinant $p\Delta$. Its smaller eigenvalue is at least its determinant divided by its trace, hence at least $p\Delta/(1+\Delta)$. On the orthogonal complement, $B=\Delta I$, so this bound applies to the whole space. If $p=1$, then $c_0=v$ and $B$ has eigenvalues $1$ on $v$ and $\Delta$ on $v^\perp$, so $B\ge\min\{1,\Delta\}I\ge\Delta/(1+\Delta)I$. Thus in either case $B\ge p\Delta/(1+\Delta)I$. By $\Delta\le2$, every nonzero-input block has ground energy at least $E_0+\Delta p/3\ge E_0+1/[144N^2(N+1)]$. [F1, F2, F5, step 2.1, algebra]

4.1 The legal compression therefore has unique ground in the $x=0$ block and gap at least $\displaystyle \min\left\{\frac1{48N^2},\frac1{144N^2(N+1)}\right\}=\frac1{144N^2(N+1)}\ge\Delta_0.$ The last inequality is equivalent to $3(N+1)^2\ge2N^2$, which holds for every $N\ge1$. [step 2.1, step 3.1, algebra]

5.1 On the full register, $H_2=H_{\rm clock}$ is positive, vanishes exactly on $\mathcal S$, and is at least $I$ on $\mathcal S^\perp$: every illegal binary clock string contains at least one adjacent $01$ pair. To bound $H_{\rm prop}$, fix an assignment of all clock bits outside the local support of a term $h_\ell$. On the two local pattern states $a_\ell,b_\ell$, the block is $\frac12\begin{pmatrix}I&-U_\ell^*\\-U_\ell&I\end{pmatrix}$; it has eigenvalues $0$ and $1$ because $U_\ell$ is unitary, and $h_\ell$ is zero on the other local patterns. Thus $0\le h_\ell\le I$, $\|h_\ell\|\le1$, and $0\le H_{\rm prop}\le NI$. Also $\|H_{\rm input}\|\le n$ and $\|H_{\rm clock0}\|\le N$, by their sums of $n$ and $N$ projections. Hence $H_1(s)=H_{\rm input}+(1-s)H_{\rm clock0}+sH_{\rm prop}$ is self-adjoint and $\|H_1(s)\|\le n+(1-s)N+sN=n+N\le K_0$. The legal dimension is $2^n(N+1)\ge2$, so [F4] applies to its first two eigenvalues with $K=K_0$. [given, F4, F5, step 4.1, algebra]

6.1 For this $J$, $J>2K_0$ and $\displaystyle \epsilon_J=\frac{K_0^2}{J-2K_0}<\frac{\Delta_0}{4}.$ The perturbation bounds in [F4] give $\lambda_1(H(s))\le\mu_1$ and $\lambda_2(H(s))\ge\mu_2-\epsilon_J$, where $\mu_2-\mu_1\ge\Delta_0$ by step 4.1. Thus the full gap is at least $\Delta_0-\epsilon_J>3\Delta_0/4$ for every $s$. Its positivity makes the ground state unique, and $\Delta_0=\Theta(N^{-3})$ gives the stated asymptotic gap. [F4, step 4.1, step 5.1, algebra] ∎
