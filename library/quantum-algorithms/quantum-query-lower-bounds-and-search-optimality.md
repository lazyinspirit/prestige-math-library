---
page: quantum-query-lower-bounds-and-search-optimality
title: "Quantum Query Lower Bounds and Search Optimality"
status: published
requires:
  - grover-search-and-invariant-plane-rotations
  - computational-problems-promises-and-cost-models
  - reversible-arithmetic-and-oracle-conversion
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - registers-tensor-products-and-partial-trace
  - uniform-circuit-families-promise-problems-and-complexity
items:
  - lem-qa-14-coherent-query-normal-form
  - def-qa-14-boolean-search-query-model
  - alg-qa-14-zero-completion-query-simulation
  - def-qa-14-query-mismatch-projectors
  - def-qa-14-search-promise
  - lem-qa-14-state-distance-from-acceptance-gap
  - lem-qa-14-one-query-hybrid-bound
  - thm-qa-14-zero-completion-query-simulation-correct
  - alg-qa-14-one-marked-search-with-verification
  - lem-qa-14-cumulative-hybrid-bound
  - lem-qa-14-aggregate-hybrid-squared-distance
  - lem-qa-14-chebyshev-recurrence-matches-grover-success
  - thm-qa-14-grover-search-upper-query-cost
  - thm-qa-14-bbbv-search-lower-bound
  - thm-qa-14-grover-search-upper-success
  - thm-qa-14-optimal-search-query-complexity
---

This page fixes the standard XOR bit-query model, the empty-versus-singleton promise, and the query-address projectors. It proves the BBBV lower bound directly for this bit oracle: a one-query perturbation estimate, a telescoping hybrid bound, a complete address-probability budget, and a bounded-error acceptance gap yield an explicit square-root lower bound. A finding algorithm is reduced to decision by one charged verification query.

The matching upper bound uses a fixed-one Grover schedule even though the promise allows zero marked items. For non-dyadic domains, a reversible validity test and zero-completed oracle simulate a padded power-of-two query using one raw query. Every measured candidate is verified, so the empty input never produces a false positive. The page separates oracle queries from comparator, recurrence, gate, and state-preparation costs and makes no end-to-end polynomial-time claim.

## Sources

- Charles H. Bennett, Ethan Bernstein, Gilles Brassard, and Umesh Vazirani, *Strengths and Weaknesses of Quantum Computing*, §3.1, Theorem 3.3 and Corollary 3.4. [Full text](https://arxiv.org/pdf/quant-ph/9701001). The local proof specializes the query-magnitude argument to empty-versus-singleton search; it does not substitute the paper's random-oracle Theorem 3.5.
- Andrew M. Childs, *Lecture Notes on Quantum Algorithms*, Chapter 23, §§23.2–23.3. [Full lecture notes](https://cs.umd.edu/~amchilds/qa/qa.pdf). The adversary derivation and unstructured-search example independently support the query-address and square-root lower-bound context.
- Ronald de Wolf, *Quantum Computing: Lecture Notes*, §§7.2 and 11.1–11.3. [Full lecture notes](https://arxiv.org/pdf/1907.09415). The Grover rotation and query model are cross-checked against the local exact arguments.
- Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, *Quantum Amplitude Amplification and Estimation*, §2.1, Theorem 2. [Full text](https://arxiv.org/pdf/quant-ph/0005055). The exact integer schedule is supported by the local recurrence and rounding suppliers.
