---
page: polynomial-method-and-approximate-degree
title: "Polynomial Method and Approximate Degree"
status: draft
requires:
  - reversible-arithmetic-and-oracle-conversion
  - fundamental-trigonometric-identities
  - linear-algebra-methods-in-combinatorics
  - computational-problems-promises-and-cost-models
  - the-complex-exponential-and-eulers-formula
  - uniform-circuit-families-promise-problems-and-complexity
items:
  - lem-qa-15-continuous-markov-derivative-bound
  - lem-qa-15-grid-return-derivative
  - lem-qa-15-discrete-markov-ehlich-zeller
  - def-qa-15-bit-oracle-query-model
  - def-qa-15-acceptance-polynomial
  - def-qa-15-bit-oracle-query-complexity
  - lem-qa-15-branch-density-degree
  - lem-qa-15-query-amplitude-degree
  - lem-qa-15-symmetrization
  - prop-qa-15-promise-domain-scope
  - thm-qa-15-acceptance-degree-bound
  - thm-qa-15-exact-degree-or
  - thm-qa-15-or-approximate-degree-lower-bound
  - thm-qa-15-parity-approximate-degree
examples: []
---

This page develops the polynomial method for an explicitly oracle-only bit-query model. It proves the degree bound for coherent amplitudes and for finite adaptive instrument branches, then turns acceptance probabilities into real polynomials of degree at most twice the query count. On symmetric Boolean domains, finite permutation averaging reduces approximation to a polynomial in Hamming weight. The OR lower bound is proved from a local continuous Markov inequality and its integer-grid correction; parity and exact OR degree follow by root counting.

The general QA01 query-algorithm interface fixes each protocol at encoded length $n$ and declared public data $p$: at fixed $(n,p)$, its initial state, non-oracle operations, branch control, and output rules are independent of the hidden instance, and in the ordinary oracle-only model that dependence enters through designated oracle calls. Its query cost counts calls made by one specified algorithm. The QA15 model here specializes to a fixed Boolean function or promise problem with no additional public instance data or direct input access; $Q^{\mathrm{bit}}_{\epsilon}(f;D)$ minimizes worst-branch query count over feasible local algorithms. The polynomial and query lower bounds on this page use that function-level, oracle-only quantity.
