---
id: ex-xd-reducible-absorbing-class-weights
kind: example
title: "Two absorbing classes retain initial-law-dependent weights"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-finite-markov-closed-class-decomposition
  - thm-finite-chain-closed-class-cesaro-weight-decomposition
  - lem-dobrushin-zero-sum-l1-coefficient
  - alg-corrected-stationary-residual-certificate
  - thm-finite-markov-closed-class-decomposition-correctness
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Charles M. Grinstead and J. Laurie Snell, Introduction to Probability, Chapter 11"
      url: "https://math.dartmouth.edu/~prob/prob/OLD/prob.pdf"
      locator: "§11.2, absorbing chains and canonical form, printed pp. 415–420."
verification:
  precheck: pass
---

## Example

Let $P=I_2$. Its two states are separate absorbing closed classes. Every probability vector is stationary, and the Cesàro limit is the initial law. The global column-overlap coefficient equals one, so a global residual accuracy certificate is unavailable even though the stationary linear system is exactly solvable once an initial-law or class-weight convention is supplied.

## Verification

**Given:** $P=I_2$ and an initial row law $u=(3/5,2/5)$.

[F1] [[alg-finite-markov-closed-class-decomposition]]: the algorithm returns the strongly connected components and identifies a component as closed exactly when it has no outgoing transition.

[F2] [[thm-finite-chain-closed-class-cesaro-weight-decomposition]]: all stationary laws are mixtures of the unique laws on closed classes, and initial-law weights are their first-entry probabilities.

[F3] [[lem-dobrushin-zero-sum-l1-coefficient]]: $\delta(P)=1-\min_{j,k}\sum_i\min(P_{ij},P_{ik})$.

[F4] [[alg-corrected-stationary-residual-certificate]]: a coefficient at least one produces `certificate-unavailable`.

[F5] [[thm-finite-markov-closed-class-decomposition-correctness]]: the graph procedure returns exactly the strongly connected components and identifies as closed exactly those with no outgoing positive transition.

**Proof technique:** direct exact calculation.

1.1 The graph has no edge between its distinct vertices, so [F5] shows the decomposition in [F1] returns $C_1=\{1\}$ and $C_2=\{2\}$, with no transient states. Each class law is its point mass. [given, F1, F5, construct]

2.1 Since $uP^k=u$ for every $k$, every Cesàro average is u. By [F2], the weights are $\alpha_1=u(C_1)=3/5$ and $\alpha_2=u(C_2)=2/5$. The full stationary family is $\{(a,1-a)^{\mathsf T}:0\le a\le1\}$, so no unique stationary vector is selected. [F2, step 1.1, algebra]

3.1 The columns of P are $e_1$ and $e_2$, whose overlap is zero. Hence [F3] gives $\delta(P)=1$, and [F4] returns `certificate-unavailable` for every $m\ge1$. This is consistent with the continuum of stationary laws: the strict-contraction hypothesis fails. [F3, F4, step 2.1, algebra] ∎
