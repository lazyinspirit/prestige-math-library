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

For every $N\ge2$ there are diagonal densities on $N$ binary registers whose
every proper fixed-size marginal equals the corresponding maximally mixed
marginal, while their global trace-norm distance remains one. A global
two-outcome POVM distinguishes the states with probability gap $1/2$.

## Facts & Assumptions

**Given:** The finite tensor density and partial-trace conventions of
[[def-qsm-local-finite-tensor-state]] and
[[lem-qsm-local-subsystem-trace-tests]].

[F1] [[lem-qsm-local-subsystem-trace-tests]]: reduced density entries are
obtained by summing over the traced product labels.

[F2] [[def-qsm-local-finite-tensor-state]]: a finite POVM is a family of
positive matrices summing to the identity.

## Proof

1.1 For $N\ge2$, let $\pi_N$ be the diagonal density uniform on binary
strings with even parity, and let $\gamma_N=I/2^N$. There are $2^{N-1}$
even strings: the first $N-1$ bits can be arbitrary and the last bit is
uniquely determined. Fix $k<N$ coordinates and their values. Among the
$N-k\ge1$ unassigned coordinates, exactly half of the $2^{N-k}$ completions
have the required parity, namely $2^{N-k-1}$. Summing by [F1], the marginal
probability of each fixed $k$-bit string is
$2^{N-k-1}/2^{N-1}=2^{-k}$. Thus
$(\pi_N)_k=I/2^k=(\gamma_N)_k$ for every proper block.
[given, F1, algebra]

2.1 On an even string the diagonal difference $\pi_N-\gamma_N$ is
$2^{-(N-1)}-2^{-N}=2^{-N}$; on an odd string it is $-2^{-N}$. There are
$2^N$ strings in total, so the absolute eigenvalues sum to
$2^N2^{-N}=1$. Therefore $\|\pi_N-\gamma_N\|_1=1$ for every $N$.
[step 1.1, algebra]

3.1 Let $P_{\rm even}$ be the diagonal projection onto even strings. Then
$(P_{\rm even},I-P_{\rm even})$ is a two-outcome POVM by [F2]. Its first
outcome has probability $1$ in $\pi_N$ and $1/2$ in $\gamma_N$, a gap of
$1/2$. Hence equality of all proper local marginals does not entail global
trace-norm convergence or equality of global measurement predictions.
[given, F2, step 1.1, algebra] ∎
