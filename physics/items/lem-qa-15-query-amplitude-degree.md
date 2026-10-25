---
id: lem-qa-15-query-amplitude-degree
kind: lemma
title: "Coherent query amplitudes have degree at most the query count"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-15-bit-oracle-query-model
  - def-qa-standard-bit-query
  - def-multivariate-polynomial-ring-by-iteration
  - def-monomials-multidegree-and-total-degree
  - thm-complex-numbers-form-a-field
justified_by: []
proof_strategy: induction
axiom_use: "No choice; the circuit and each computational basis are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025), §21.3"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415), §11.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $A$ be a local bit-query algorithm on $N$ input bits whose non-oracle steps are all fixed unitaries, and suppose every execution uses at most $T$ queries. For each computational-basis state $|a,b,w\rangle$ of its fixed register, its amplitude after every circuit prefix is represented on the Boolean input cube by a complex polynomial in $X_0,\ldots,X_{N-1}$ whose support has no monomial of total degree greater than the number of queries in that prefix (and at the end none has degree greater than $T$).

## Facts & Assumptions

**Given:** A finite coherent local bit-query circuit, an input $x\in\{0,1\}^N$, and the query convention of [[def-qa-15-bit-oracle-query-model]].

[F1] [[def-qa-15-bit-oracle-query-model]] and [[def-qa-standard-bit-query]]: non-oracle unitaries and the initial state are independent of $x$, and the oracle maps a basis address-target pair $(a,b)$ to $(a,b\oplus g_x(a))$.

[F2] [[def-multivariate-polynomial-ring-by-iteration]] and [[def-monomials-multidegree-and-total-degree]]: a complex polynomial is a finite coefficient sum of monomials; its total degree is the maximum sum of exponents in its support.

[F3] [[thm-complex-numbers-form-a-field]]: finite addition and multiplication of complex polynomial coefficients obey field arithmetic.

## Proof

1.1 Before any query, every basis amplitude is a coordinate of the fixed initial state, hence is a constant polynomial whose support has no degree above zero. Suppose at a prefix with $t$ queries every amplitude has a representative with no supported monomial of degree greater than $t$. [given, F1, base, ih]

2.1 A fixed unitary $U$ sends an amplitude vector $(\alpha_v(x))_v$ to $\alpha'_u(x)=\sum_v U_{uv}\alpha_v(x)$. This is a finite complex linear combination by [F2]–[F3], so each new amplitude has no supported monomial of degree greater than $t$. [F2, F3, step 1.1, algebra]

2.2 At a query, if the address is one-hot $e_i$, the target bit amplitude update is $\alpha'_{e_i,b,w}(x)=(1-x_i)\alpha_{e_i,b,w}(x)+x_i\alpha_{e_i,b\oplus1,w}(x)$; at a non-one-hot address the amplitude is unchanged. Each coefficient is affine in $x_i$, so the new amplitude has no supported monomial of degree greater than $t+1$. This includes $N=0$, when there are no one-hot addresses and the query leaves the target unchanged. [F1, F2, F3, step 1.1, algebra]

3.1 Traverse the finite circuit in its chronological order. A non-oracle layer preserves the support degree bound by step 2.1; each query raises that bound by at most one by step 2.2. Induction on the finite prefix length therefore gives no supported monomial above the query count at every prefix, and in particular none above $T$ at termination. [step 2.1, step 2.2, ih, discharge-induction] ∎
