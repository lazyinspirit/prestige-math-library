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
sources:
  references:
    - title: "G. B. Mbeng, A. Russomanno, and G. E. Santoro, The quantum Ising chain for beginners, arXiv:2009.09208v2, §§3.1.1 and 6.2"
      url: "https://arxiv.org/pdf/2009.09208"
    - title: "Pieter Claeys, Quench dynamics in the Transverse Field Ising Model, Many-body Quantum Dynamics @ TU Dresden lecture notes, §6"
      url: "https://www.pks.mpg.de/fileadmin/user_upload/MPIPKS/group_pages/DQI/TFIM_2024.pdf"
---

## Example

For the finite open chain on $N\ge1$ sites with $H_N(h,J)=-h\sum_jZ_j-J\sum_{j=1}^{N-1}X_jX_{j+1}$, when $h=0$ and $J>0$ the ground configurations in the $X$ basis are exactly the two fully aligned configurations. When $J=0$ and $h\ne0$, there is a unique $Z$-polarized ground configuration. For $\beta>0$ in $\mathrm{J}^{-1}$ and $h,J$ in joules, the trace is $Z_N(\beta,h,J)=\prod_r2\cosh(\beta\epsilon_r/2)$ with the open-chain mode energies $\epsilon_r$, and for every fixed finite $N$ the function $Z_N$ is strictly positive and real-analytic for all real $\beta,h,J$.

## Statement references

[[def-qsmx-transverse-ising-majoranas]]

[[thm-qsmx-open-ising-quadratic]]

## Facts & Assumptions

**Given:** Countable Choice; $N\ge1$; finite-chain matrices $X_j,Z_j$; real $\beta,h,J$; and the open-chain Gibbs trace formula.

[A1] Countable Choice is carried from the exact finite-trace prerequisite ([[def-countable-choice]] and [[thm-qsmx-open-ising-quadratic]]).

[F1] [[def-qsmx-transverse-ising-majoranas]]: $H_N(h,J)=-h\sum_{j=1}^NZ_j-J\sum_{j=1}^{N-1}X_jX_{j+1}$ on $(\mathbb C^2)^{\otimes N}$, with the $X_j,Z_j$ Pauli matrices on their displayed sites.

[F2] [[thm-qsmx-open-ising-quadratic]]: the finite open-chain Gibbs trace equals $\prod_r2\cosh(\beta\epsilon_r/2)$ under its stated Countable Choice and parameter hypotheses.

[F3] [[lem-qsm-matrix-state-calculus]]: every finite Hermitian matrix has real eigenvalues and an orthonormal eigenbasis, and the finite trace is basis-independent.

## Proof

1.1 At $h=0$, an $X$-basis configuration $s=(s_1,\ldots,s_N)\in\{-1,1\}^N$ has energy $-J\sum_{j=1}^{N-1}s_js_{j+1}$. Each bond contributes at least $-J$, with equality exactly when $s_j=s_{j+1}$. Since the open chain is connected, all bonds attain equality exactly for the two constant configurations; for $N=1$ the empty bond sum leaves its two basis configurations degenerate as well. [given, F1, algebra]

1.2 At $J=0$, a $Z$-basis configuration $s\in\{-1,1\}^N$ has energy $-h\sum_js_j$. If $h\ne0$, each site uniquely minimizes its term by taking $s_j=\operatorname{sgn}(h)$, giving the unique polarized ground configuration. [given, F1, algebra]

1.3 For $\beta>0$, [F2] gives the stated product trace for the exact $H_N$ of [F1] and its open-chain energies. The trace itself is the ordinary trace of the finite matrix exponential on the $2^N$-dimensional space. [A1, F1, F2]

2.1 The entries of $-\beta H_N(h,J)$ are polynomials in $\beta,h,J$. On every compact set of complex parameter triples their matrix norm is bounded by some $C<\infty$, so the exponential series is dominated termwise by $C^m/m!$ and converges uniformly there. Each matrix entry, and therefore its finite trace, is entire in the complexified parameters and real-analytic on $\mathbb R^3$. For real parameters $H_N$ is Hermitian; by [F3] its eigenvalues $\lambda_1,\ldots,\lambda_{2^N}$ are real and $Z_N=\sum_re^{-\beta\lambda_r}>0$. This finite-volume analyticity makes no assertion about a thermodynamic-limit singularity or uniqueness of an infinite-volume spin ground state. [given, F3, step 1.3, algebra] ∎

## Remarks

The example is a finite-dimensional model calculation. The one-particle band closing in the A-page theorem is not, by itself, a proof of a nonanalytic thermodynamic limit or of any infinite-volume ground-state uniqueness claim.
