---
id: cex-raw-neural-operator-local-term-needs-input-reconstruction
kind: counterexample
title: A raw neural-operator local term cannot be reconstructed exactly from finitely many samples
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps:
  - def-neural-operator
  - def-discretization-invariant-operator-family
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement refuted

The raw volume-weighted quadrature rule for every continuous-function neural operator, with the original local term evaluated at arbitrary output queries, is exactly a map of finitely many prescribed input point samples alone. In particular the raw rule is asserted to factor through its sample vector without any input reconstruction.

This assertion is false even on $D=(0,1)$ with input and output space $C([0,1])$, identity lifting and projection, and one layer with local matrix $W=1$, zero kernel and bias, and identity activation. It concerns exact factorization of the raw rule, not the existence of convergent reconstructed approximations.

## Statement references

[[def-neural-operator]]

[[def-discretization-invariant-operator-family]]

## Facts & Assumptions

**Given:** The operator and normed spaces in the Statement, and any finite set of prescribed sampling points $\xi_1,\ldots,\xi_N\in[0,1]$.

[F1] A local neural-operator layer may have zero integral kernel, zero bias and identity activation, leaving its local matrix term ([[def-neural-operator]]).

[F2] Factorization through a sampling map gives the same output to any two inputs with the same sample vector ([[def-discretization-invariant-operator-family]]).

## Counterexample

1.1 For the specified layer, the continuum operator and every raw quadrature map are $H(a)=H_n(a)=a$: the integral term is zero, so replacing it by any tagged sum changes nothing. In particular, an arbitrary output query still asks for $a(x)$ in the local term. [given, F1, algebra]

2.1 The zero function and the polynomial $a(x)=\prod_{j=1}^N(x-\xi_j)^2$ have the same zero sample vector. The polynomial is not identically zero: any point of the interval outside the finite sampling set has strictly positive value. For $N=0$ use the empty product $a=1$. Thus their raw outputs differ by step 1.1. Any output reconstruction of the common finite vector would give them the same output by [F2], a contradiction. This disproves exact factorization of the raw rule. It asserts no obstruction to a reconstruction that only approximates the input, or to the separate compact-uniform quadrature convergence theorem. [given, F2, step 1.1, construct, contradiction] ∎
