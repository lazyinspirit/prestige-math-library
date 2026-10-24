---
id: lem-qa-15-branch-density-degree
kind: lemma
title: "Unnormalized branch density entries have degree at most twice the query count"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-15-bit-oracle-query-model
  - def-qa-finite-branch-output-law
  - def-qa-standard-bit-query
  - def-qc-register-and-computational-basis
  - def-qc-instrument-and-conditional-state
  - def-qc-completely-positive-map
  - def-trace-of-an-endomorphism
  - thm-non-negative-operator-characterisations
  - def-multivariate-polynomial-ring-by-iteration
  - def-monomials-multidegree-and-total-degree
  - thm-complex-numbers-form-a-field
justified_by: []
proof_strategy: induction
axiom_use: "No choice; induction is over the finite execution tree and every matrix operation is a finite sum."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025), §21.3"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415), §11.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $A$ be a local bit-query algorithm, allowing finite input-independent instrument branches, and let $h$ be any execution history containing $t(h)$ oracle calls. Write $\sigma_h(x):=w_h(x)\rho_h(x)$ for the unnormalized branch operator: $w_h$ is the probability weight of the history and $\rho_h$ its conditional density operator when $w_h>0$; set $\sigma_h=0$ when $w_h=0$. In the fixed computational basis, every matrix entry of $\sigma_h(x)$ on $x\in\{0,1\}^N$ is represented by a complex polynomial whose support has no monomial of total degree greater than $2t(h)$.

## Facts & Assumptions

**Given:** A finite local bit-query execution tree, its fixed finite register, a history $h$, and the input $x\in\{0,1\}^N$.

[F1] [[def-qa-15-bit-oracle-query-model]]: the root state is fixed independently of $x$; every non-oracle map is fixed and linear; query nodes use only the specified one-hot bit XOR oracle.

[F2] [[def-qa-finite-branch-output-law]]: unitary edges update conditional states by $\rho\mapsto U\rho U^\dagger$ without changing weight; an instrument outcome $a$ has weight factor $q_a=\operatorname{tr}(\mathcal I_a(\rho))$ and conditional state $\mathcal I_a(\rho)/q_a$ when $q_a>0$.

[F3] [[def-qa-standard-bit-query]] and [[def-qc-register-and-computational-basis]]: on basis states the query is the XOR permutation $(a,b,w)\mapsto(a,b\oplus g_x(a),w)$; a basis is fixed and finite.

[F4] [[def-multivariate-polynomial-ring-by-iteration]] and [[def-monomials-multidegree-and-total-degree]]: finite sums and products of polynomial entries have the usual coefficientwise degree bounds.

[F5] [[thm-complex-numbers-form-a-field]]: all matrix entries and the fixed linear maps use finite complex addition and multiplication.

[F6] [[def-qc-instrument-and-conditional-state]] and [[def-qc-completely-positive-map]]: an instrument outcome is a complex-linear completely positive map and therefore sends a density operator to a nonnegative operator; [[def-trace-of-an-endomorphism]] defines its trace, and [[thm-non-negative-operator-characterisations]] diagonalizes a nonnegative finite-dimensional operator with nonnegative eigenvalues.

## Proof

1.1 At the root, the branch weight is one and the state is the fixed all-zero basis-state projector, so every entry of $\sigma_\varnothing$ is constant and has no supported monomial above degree zero. [given, F1, base]

1.2 Induction hypothesis: at a history $h$ with $t(h)$ queries, each entry of $\sigma_h(x)$ has no supported monomial of degree greater than $2t(h)$. [ih]

2.1 On a fixed unitary edge, multiplying the branch weight into the conditional-state update gives $\sigma_{h'}=U\sigma_hU^\dagger$, a fixed linear map on entries, so the support degree does not increase and the query count remains $t(h)$. At instrument outcome $a$ of a positive-weight history, if $q_a>0$, then $\sigma_{ha}=w_hq_a(\mathcal I_a(\rho_h)/q_a)=\mathcal I_a(\sigma_h)$. If $q_a=0$, [F6] makes $\mathcal I_a(\rho_h)$ nonnegative with trace zero; its nonnegative eigenvalues sum to zero, so the operator is zero and $\sigma_{ha}=0=\mathcal I_a(\sigma_h)$. A zero-weight parent also maps to zero by linearity. Since all non-oracle maps are fixed independently of $x$ by [F1], every such instrument branch is a fixed linear map on entries and preserves the support degree bound in [step 1.2]. [given, F1, F2, F5, F6, step 1.2, algebra]

2.2 At an oracle node, the matrix entries of $U_{g_x}$ in the computational basis are constants, $x_i$, or $1-x_i$: a one-hot address $e_i$ toggles the target exactly when $x_i=1$, and every other address leaves it unchanged. The same holds for $U_{g_x}^\dagger$, which equals $U_{g_x}$ because an XOR query is an involution. Therefore each entry of $U_{g_x}\sigma_hU_{g_x}^\dagger$ is a finite sum of products of one affine entry, one entry with support degree at most $2t(h)$ from [step 1.2], and one affine entry. By [F4]–[F5] its support degree is at most $2t(h)+2$, and the new history has $t(h)+1$ queries. [F3, F4, F5, step 1.2, algebra]

3.1 Induct on the finite execution-tree depth from [F1]. Step 1.1 proves the root case. At each successor edge, step 2.1 preserves the degree bound when the query count is unchanged, and step 2.2 raises its upper bound by exactly two when a query is added. Therefore every history $h$ satisfies the claimed support degree bound $2t(h)$; zero-weight histories satisfy it because all their entries are zero. [F1, step 1.1, step 1.2, step 2.1, step 2.2, ih, discharge-induction] ∎
