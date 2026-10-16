---
page: exact-oracle-algorithms
title: Exact Oracle Algorithms
status: draft
items:
  - lem-qa-hadamard-f2-kernel
  - def-qa-deutsch-promise
  - def-qa-deutsch-jozsa-promise
  - def-qa-bernstein-vazirani-promise
  - thm-qa-deutsch-classical-query-lower-bound
  - thm-qa-deutsch-jozsa-deterministic-query-lower-bound
  - thm-qa-deutsch-jozsa-randomized-constant-query-upper-bound
  - thm-qa-bernstein-vazirani-classical-query-lower-bound
  - alg-qa-deutsch-query
  - alg-qa-deutsch-jozsa-query
  - alg-qa-bernstein-vazirani-query
  - thm-qa-deutsch-query-correct
  - thm-qa-deutsch-jozsa-query-correct
  - thm-qa-bernstein-vazirani-query-correct
examples: []
requires:
  - reversible-arithmetic-and-oracle-conversion
  - qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates
  - registers-tensor-products-and-partial-trace
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - computational-problems-promises-and-cost-models
  - finite-probability-spaces-and-random-variables
---

This page fixes the constant-versus-balanced Deutsch promise, the Deutsch–Jozsa promise on $n$-bit addresses (encoded by an $N=2^n$-bit truth table), and the no-offset Bernstein–Vazirani promise. It defines the exact one-query circuits with their $X$ and Hadamard preparation gates and proves the measured output laws from the finite $\mathbb F_2^n$ Hadamard character sum. The classical results distinguish deterministic exact query complexity from randomized bounded-error cost; in particular, the Deutsch–Jozsa exact deterministic lower bound is not a bounded-error exponential lower bound because three independent uniform random samples with replacement already achieve success at least $3/4$ ([[thm-qa-deutsch-classical-query-lower-bound]], [[thm-qa-deutsch-jozsa-deterministic-query-lower-bound]], [[thm-qa-deutsch-jozsa-randomized-constant-query-upper-bound]], [[thm-qa-bernstein-vazirani-classical-query-lower-bound]]).
