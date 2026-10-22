---
id: ex-qsmx-ising-classical-and-field-limits
kind: example
title: Classical and strong-field endpoints of the finite open chain
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-countable-choice
  - def-qsmx-transverse-ising-majoranas
  - lem-qsm-matrix-state-calculus
  - thm-qsmx-open-ising-quadratic
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qsmx-transverse-ising-majoranas: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  thm-qsmx-open-ising-quadratic: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "G. B. Mbeng, A. Russomanno, and G. E. Santoro, The quantum Ising chain for beginners, arXiv:2009.09208v2, §§3.1.1 and 6.2"
      url: "https://arxiv.org/pdf/2009.09208"
    - title: "Pieter Claeys, Quench dynamics in the Transverse Field Ising Model, Many-body Quantum Dynamics @ TU Dresden lecture notes, §6"
      url: "https://www.pks.mpg.de/fileadmin/user_upload/MPIPKS/group_pages/DQI/TFIM_2024.pdf"
---

## Example

Let $h,J\in\mathbb R$.

For the finite open chain on $N\ge1$ sites, let $\mathcal H_N=(\mathbb C^2)^{\otimes N}$ and $H_N(h,J)=-h\sum_{j=1}^NZ_j-J\sum_{j=1}^{N-1}X_jX_{j+1}$ as in the open-chain definition. For $s_j\in\{-1,1\}$ set $x_{s_j}=2^{-1/2}(1,s_j)^{\mathsf T}$, $z_{+1}=(1,0)^{\mathsf T}$, and $z_{-1}=(0,1)^{\mathsf T}$, and define the $X$- and $Z$-product basis vectors $|s\rangle_X=\bigotimes_{j=1}^Nx_{s_j}$ and $|s\rangle_Z=\bigotimes_{j=1}^Nz_{s_j}$ for $s=(s_1,\ldots,s_N)\in\{-1,1\}^N$. These are eigenbases with $X_j|s\rangle_X=s_j|s\rangle_X$ and $Z_j|s\rangle_Z=s_j|s\rangle_Z$. When $H_N$ is diagonal in one of these product bases $B\in\{X,Z\}$, let $E_B(s)$ be its diagonal matrix entry at $|s\rangle_B$; a ground configuration in that basis is a label $s$ minimizing $E_B$ over $\{-1,1\}^N$.

When $h=0$ and $J>0$, the ground configurations in the $X$ product basis are exactly $s=(1,\ldots,1)$ and $s=(-1,\ldots,-1)$. When $J=0$ and $h\ne0$, the unique ground configuration in the $Z$ product basis has $s_j=1$ at every site if $h>0$ and $s_j=-1$ at every site if $h<0$; thus the minimizing orientation is specified for both signs of $h$. For $\beta>0$ in $\mathrm{J}^{-1}$ and $h,J$ in joules, the trace is $Z_N(\beta,h,J)=\prod_r2\cosh(\beta\epsilon_r/2)$ with the open-chain mode energies $\epsilon_r$. For each fixed finite $N$, the function $Z_N(\beta,h,J)=\operatorname{Tr}_{\mathcal H_N}(e^{-\beta H_N(h,J)})$ is strictly positive and real-analytic on $\mathbb R^3$; here real-analytic means that near every real triple $(\beta,h,J)$ it is represented by a convergent real power series in those three parameters.

## Example references

[[def-qsmx-transverse-ising-majoranas]]

[[thm-qsmx-open-ising-quadratic]]

## Facts & Assumptions

**Given:** Countable Choice; $N\ge1$; finite-chain matrices $X_j,Z_j$; real $\beta,h,J$; and the open-chain Gibbs trace formula.

[A1] Countable Choice is carried from the exact finite-trace prerequisite ([[def-countable-choice]] and [[thm-qsmx-open-ising-quadratic]]).

[F1] [[def-qsmx-transverse-ising-majoranas]]: $H_N(h,J)=-h\sum_{j=1}^NZ_j-J\sum_{j=1}^{N-1}X_jX_{j+1}$ on $(\mathbb C^2)^{\otimes N}$, with the $X_j,Z_j$ Pauli matrices on their displayed sites.

[F2] [[thm-qsmx-open-ising-quadratic]]: the finite open-chain Gibbs trace equals $\prod_r2\cosh(\beta\epsilon_r/2)$ under its stated Countable Choice and parameter hypotheses.

[F3] [[lem-qsm-matrix-state-calculus]]: every finite Hermitian matrix has real eigenvalues and an orthonormal eigenbasis, and the finite trace is basis-independent.

## Verification

1.1 At $h=0$, an $X$-basis configuration $s=(s_1,\ldots,s_N)\in\{-1,1\}^N$ has energy $-J\sum_{j=1}^{N-1}s_js_{j+1}$. Each bond contributes at least $-J$, with equality exactly when $s_j=s_{j+1}$. Since the open chain is connected, all bonds attain equality exactly for the two constant configurations; for $N=1$ the empty bond sum leaves its two basis configurations degenerate as well. [given, F1, algebra]

1.2 At $J=0$, a $Z$-basis configuration $s\in\{-1,1\}^N$ has energy $-h\sum_js_j$. If $h>0$, each site uniquely minimizes its term by taking $s_j=1$; if $h<0$, each site uniquely minimizes its term by taking $s_j=-1$. Thus the unique minimizing $Z$-configuration has the orientation stated in the Example. [given, F1, algebra]

1.3 For $\beta>0$, [F2] gives the stated product trace for the exact $H_N$ of [F1] and its open-chain energies. The trace itself is the ordinary trace of the finite matrix exponential on the $2^N$-dimensional space. [A1, F1, F2]

2.1 For an endomorphism $C$ of $\mathcal H_N$, use the operator norm $\|C\|_{\mathrm{op}}:=\sup\{\|C\psi\|_{\mathcal H_N}:\|\psi\|_{\mathcal H_N}=1\}$ from the finite product inner product. The entries of $-\beta H_N(h,J)$ are polynomials in $\beta,h,J$. On each compact set of complex parameter triples this matrix has a finite uniform operator-norm bound $C$. Define its complex-parameter exponential by $\exp(-\beta H_N)=\sum_{m=0}^{\infty}(-\beta H_N)^m/m!$; the summands have norm at most $C^m/m!$, so the series converges uniformly on each such compact set. The matrix exponential power series is holomorphic in its entries (that is, locally represented by convergent complex power series), so composing it with the polynomial matrix entries makes each matrix entry, and its finite trace, holomorphic in $(\beta,h,J)$. Their restrictions to $\mathbb R^3$ are real-analytic in the sense defined in the Statement. For real parameters, [F3]'s spectral exponential agrees with this series by applying the scalar exponential series to each real eigenvalue $\lambda_r$ of the Hermitian $H_N$; hence $Z_N=\sum_re^{-\beta\lambda_r}>0$. This proves analyticity for each fixed finite $N$ only; it gives no conclusion about the existence or analyticity of a limit as $N\to\infty$. [given, F3, step 1.3, algebra] ∎

## Remarks

The example is a finite-dimensional model calculation. The A-page band closing alone gives no conclusion about the existence or analyticity of a limit of $N^{-1}\log Z_N$ as $N\to\infty$.
