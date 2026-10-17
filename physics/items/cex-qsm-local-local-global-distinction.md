---
id: cex-qsm-local-local-global-distinction
kind: counterexample
title: Fixed marginals do not determine global trace-norm convergence
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-qsm-local-finite-tensor-state
  - lem-qsm-local-subsystem-trace-tests
dependency_roles:
  def-qsm-local-finite-tensor-state: mathematical-premise
  lem-qsm-local-subsystem-trace-tests: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, §§2.1.2–2.3
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: John Preskill, Quantum Computation, Chapter 2, §§2.3–2.3.1
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
---

## Statement

For a finite Hermitian matrix $D$, write $\|D\|_1$ for its **trace norm**:
the sum of the absolute values of its eigenvalues, counted with multiplicity.

For every $N\ge2$ there are diagonal densities on $N$ binary registers whose
every proper fixed-size marginal equals the corresponding maximally mixed
marginal, while their global trace-norm distance remains one. A global
two-outcome POVM has first-effect trace pairings differing by $1/2$.

## Facts & Assumptions

**Given:** The finite tensor density and partial-trace conventions of [[def-qsm-local-finite-tensor-state]] and [[lem-qsm-local-subsystem-trace-tests]].

[F1] [[lem-qsm-local-subsystem-trace-tests]]: reduced density entries are obtained by summing over the traced product labels.

[F2] [[def-qsm-local-finite-tensor-state]]: a finite POVM is a family of positive matrices summing to the identity.

## Proof

1.1 For $N\ge2$, index each binary factor's ordered basis by $\{0,1\}$; a string $x=(x_1,\ldots,x_N)$ has even parity when $\sum_jx_j$ is even. Let $\pi_N$ be the diagonal matrix with entry $2^{-(N-1)}$ on even strings and zero on odd strings, and let $\gamma_N=I/2^N$. There are $2^{N-1}$ even strings: the first $N-1$ bits can be arbitrary and the last bit is uniquely determined. Thus both matrices are nonnegative of trace one. Fix $0\le k<N$ coordinates and their values. Among the $N-k\ge1$ unassigned coordinates, exactly half of the $2^{N-k}$ completions have the required parity, namely $2^{N-k-1}$. Summing by [F1], the marginal diagonal entry of each fixed $k$-bit string is $2^{N-k-1}/2^{N-1}=2^{-k}$; all off-diagonal entries vanish. Thus $(\pi_N)_k=I/2^k=(\gamma_N)_k$ for every proper block. [given, F1, algebra]

2.1 On an even string the diagonal difference $\pi_N-\gamma_N$ is $2^{-(N-1)}-2^{-N}=2^{-N}$; on an odd string it is $-2^{-N}$. There are $2^N$ strings in total, so the absolute eigenvalues sum to $2^N2^{-N}=1$. Therefore $\|\pi_N-\gamma_N\|_1=1$ for every $N$. [step 1.1, algebra]

3.1 Let $P_{\rm even}$ be the diagonal matrix with entry one on even strings and zero on odd strings. Both $P_{\rm even}$ and $I-P_{\rm even}$ are nonnegative and sum to $I$, so they form a two-outcome POVM by [F2]. Their first-effect trace pairings are $\operatorname{Tr}(\pi_NP_{\rm even})=1$ and $\operatorname{Tr}(\gamma_NP_{\rm even})=1/2$, a gap of $1/2$. Hence equality of all proper local marginals does not entail global trace-norm convergence or equality of global POVM trace pairings. This is a mathematical separation; no physical probability interpretation is adopted. [given, F2, step 1.1, step 2.1, algebra] ∎
