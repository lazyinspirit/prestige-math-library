---
id: thm-qsm-local-independent-shell-equivalence
kind: theorem
title: Fixed-subsystem equivalence for independent finite energy shells
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-qsm-local-additive-spectral-ensembles
  - def-qsm-local-finite-matrix-entropy
  - def-qsm-local-finite-tensor-state
  - lem-qsm-local-tensor-gibbs-factorization
  - lem-qsm-local-subsystem-trace-tests
  - thm-tdmath-independent-microcanonical-block-limit
  - thm-cauchy-schwarz-in-an-inner-product-space
dependency_roles:
  def-qsm-local-additive-spectral-ensembles: mathematical-premise
  def-qsm-local-finite-matrix-entropy: mathematical-premise
  def-qsm-local-finite-tensor-state: mathematical-premise
  lem-qsm-local-tensor-gibbs-factorization: mathematical-premise
  lem-qsm-local-subsystem-trace-tests: mathematical-premise
  thm-tdmath-independent-microcanonical-block-limit: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: David Tong, Statistical Physics, §§1.2–1.3
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.2–4.6
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
---

## Statement

Fix $q\ge1$, real one-site levels $e_j$, finite $\beta\in\mathbb R$, and
the ensembles of [[def-qsm-local-additive-spectral-ensembles]]. Suppose for
every $N$ the band width obeys
$$\delta_N\ge q\sum_{j=1}^q|e_j|,\qquad \delta_N/N\longrightarrow0.$$
Then every band is nonempty. For each fixed integer $k\ge1$ and $N\ge k$,
define $\sigma_{N,k}$ by its product-basis entries, for
$x,x'\in\{1,\ldots,q\}^k$,
$(\sigma_{N,k})_{x,x'}=\sum_{y\in\{1,\ldots,q\}^{N-k}}(\sigma_N)_{(x,y),(x',y)}$,
with a single empty tail label when $N=k$.
Define $\gamma_k$ to be the diagonal matrix on
$V_k=(\mathbb C^q)^{\otimes k}$ with entries
$(\gamma_k)_{x,x}=\prod_{a=1}^k p_{x_a}$ and zero off the diagonal. Then
$$\|\sigma_{N,k}-\gamma_k\|_1\to0,\qquad \frac1N s_N(\sigma_N)\to -\sum_{j=1}^q p_j\log p_j.$$
Here $\|D\|_1$ for a Hermitian finite matrix is the sum of absolute values
of its eigenvalues, and $s_N$ is dimensionless spectral entropy. This is an
independent finite-alphabet result; it asserts neither global trace-norm
convergence nor an interacting or continuous-model equivalence.

## Facts & Assumptions

**Given:** The preceding finite additive ensemble data and the exact width conditions above.

[F1] [[thm-tdmath-independent-microcanonical-block-limit]]: under the stated finite alphabet, additive energies, and width hypotheses, every shell is nonempty, each fixed-$k$ shell-label marginal converges in total variation to $p^{\otimes k}$, and $N^{-1}\log|\Gamma_N|\to- \sum_jp_j\log p_j$.

[F2] [[lem-qsm-local-subsystem-trace-tests]]: reduced density expectations are partial-trace pairings, and partial trace preserves density matrices.

[F3] [[lem-qsm-local-tensor-gibbs-factorization]]: the canonical density has diagonal weights $\prod_{a=1}^N p_{j_a}$, and its first-$k$ reduction has diagonal entries $\prod_{a=1}^k p_{x_a}$ and zero off the diagonal.

[F4] [[def-qsm-local-finite-matrix-entropy]]: for eigenvalues $\lambda_i$ of a finite density, $s_N=-\sum_{\lambda_i>0}\lambda_i\log\lambda_i$.

[F5] [[def-qsm-local-finite-tensor-state]]: a bounded observable is a Hermitian matrix with operator norm $\|A\|_{\rm op}=\sup_{\|x\|=1}\|Ax\|$.

[F6] [[thm-cauchy-schwarz-in-an-inner-product-space]]: the inner-product pairing obeys $|\langle u,v\rangle|\le\|u\|\|v\|$.

## Proof

1.1 Apply [F1] to the finite alphabet, levels, $\beta$ and $\delta_N$ in the statement. It gives $\Omega_N=|\Gamma_N|>0$ and the classical $k$-label marginal convergence. Since $\sigma_N$ is diagonal with equal weight on each label in $\Gamma_N$, the coordinate formula for partial trace sums over the last $N-k$ labels and yields the diagonal density whose entries are exactly that marginal. [given, F1, algebra]

1.2 By [F4], the eigenvalues of $\sigma_N$ are $1/\Omega_N$ with multiplicity $\Omega_N$ and zero otherwise. The entropy definition therefore gives $s_N(\sigma_N)=\log\Omega_N$. Dividing by $N$ and applying the entropy limit in [F1] proves the second conclusion. [given, F1, F4, algebra]

2.1 Both $\sigma_{N,k}$ and $\gamma_k$ are diagonal. For diagonal matrices, the eigenvalues of their difference are their diagonal entry differences; therefore its trace norm is the sum of the absolute marginal differences, which is twice total variation. The convergence in [F1] gives $\|\sigma_{N,k}-\gamma_k\|_1\to0$ for each fixed $k$. [step 1.1, F1, algebra]

3.1 [F3] identifies the canonical $k$-site state as $\gamma_k$, so the trace-norm convergence already proved compares the shell reduction with the specified canonical reduction. For every Hermitian local observable $A$, diagonalizing the Hermitian difference $D=\sigma_{N,k}-\gamma_k$ gives $|\operatorname{Tr}(DA)|\le\|A\|\|D\|_1$: in that eigenbasis each diagonal expectation of $A$ has absolute value at most $\|A\|$. Thus the same conclusion controls every fixed bounded local observable, including ones not diagonal in the energy basis. By [F5] and Cauchy–Schwarz [F6], the bound uses the declared operator norm. The statement fixes $k$ before the limit and makes no claim about a global trace distance. [F2, F3, F5, F6, algebra] ∎
