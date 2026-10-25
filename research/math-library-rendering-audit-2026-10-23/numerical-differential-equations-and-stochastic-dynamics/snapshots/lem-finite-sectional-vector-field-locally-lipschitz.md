---
id: lem-finite-sectional-vector-field-locally-lipschitz
kind: lemma
title: The finite sectional reaction vector field is locally Lipschitz
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-finite-sectional-coagulation-fragmentation-balance
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the field is a finite polynomial plus a linear term.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Jitendra Kumar, Numerical approximations of population balance equations in particulate systems, Chapter 2, §2.2
      url: https://www.iitrpr.ac.in/jkumar/pub/Kumar_Dissertation_web.pdf
---

## Statement

For fixed grid, aggregation rates, fragmentation rates, and daughter measures, the augmented right-hand side $F$ in [[alg-finite-sectional-coagulation-fragmentation-balance]] is locally Lipschitz on the full finite-dimensional state space.

## Facts & Assumptions

**Given:** The finite grid, rates, and event formulas of [[alg-finite-sectional-coagulation-fragmentation-balance]].

[F1] [[alg-finite-sectional-coagulation-fragmentation-balance]]: every retained coordinate and the reservoir derivative are finite sums of constant multiples of linear or quadratic monomials in the retained concentrations.

## Proof

1.1 Define the extension $F$ on all real augmented states by evaluating the same finite event polynomials, without the algorithm's population-validity test. On nonnegative states it agrees with the algorithm's right-hand side; the extension need not describe physical events off that orthant. On a ball $\|n\|_\infty,\|\tilde n\|_\infty\le R$, every quadratic monomial obeys $|n_in_j-\tilde n_i\tilde n_j|\le R|n_i-\tilde n_i|+R|n_j-\tilde n_j|$ by adding and subtracting $n_i\tilde n_j$. Linear monomials obey the same bound with coefficient $1$. [given, F1, algebra]

2.1 Each coordinate of $F(n,L)-F(\tilde n,\tilde L)$ is a finite weighted sum of these differences; the reservoir coordinate is independent of $L$. Summing the finitely many coefficient bounds gives a finite constant $C_R$ with $\|F(n,L)-F(\tilde n,\tilde L)\|_2\le C_R\|(n,L)-(\tilde n,\tilde L)\|_2$ on the ball. [F1, step 1.1, algebra] ∎

