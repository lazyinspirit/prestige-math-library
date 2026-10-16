---
id: thm-qa-16-general-adversary-tightness
kind: theorem
title: General adversary bound characterizes Boolean quantum query complexity
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 27
deps:
  - thm-qa-16-general-adversary-lower-bound
  - thm-qa-16-filtered-gamma-adversary-equality
  - thm-qa-16-dual-evaluator-query-cost
  - thm-qa-16-dual-evaluator-success
  - def-qa-16-boolean-query-domain
  - def-qa-quantum-query-complexity
  - thm-qa-16-dual-vector-characterization
  - lem-qa-16-nonconstant-adversary-at-least-one
  - def-qa-16-general-adversary-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Troy Lee, Rajat Mittal, Ben Reichardt, Robert Špalek, and Mario Szegedy, Quantum Query Complexity of State Conversion, arXiv:1011.3020"
      url: "https://arxiv.org/pdf/1011.3020"
    - title: "Ben W. Reichardt, Span programs and quantum query complexity: The general adversary bound is nearly tight for every Boolean function, 2009"
      url: "https://arxiv.org/pdf/0904.2759"
---

## Statement


For every finite partial Boolean function f:D→{0,1}, bounded-error quantum query complexity at error at most 1/3 satisfies
$$Q_{1/3}(f)=\Theta(\operatorname{Adv}^{\pm}(f)).$$
For nonconstant f, the lower coefficient is $1/2-\sqrt2/3$ and the reflection evaluator gives an upper bound below $2048\operatorname{Adv}^{\pm}(f)$. For constant f both quantities are zero.

## Facts & Assumptions

**Given:** A finite partial Boolean function with the standard XOR query model.



[F1] [[thm-qa-16-general-adversary-lower-bound]]: Q_ε(f)≥(1/2−√(ε(1−ε)))Adv±(f).

[F2] [[thm-qa-16-filtered-gamma-adversary-equality]]: for nonconstant finite partial Boolean functions, the Boolean filtered factorization value is exactly Adv±.

[F3] [[thm-qa-16-dual-evaluator-query-cost]]: a supplied balanced dual certificate of cost A≥1 gives an evaluator using fewer than 2048A queries.

[F4] [[def-qa-quantum-query-complexity]]: the general query-cost coordinate is the worst-case number of designated oracle calls, excluding nonoracle gates.

[F5] [[thm-qa-16-dual-vector-characterization]]: for nonconstant f the certificate minimum equals Adv± and is attained.

[F6] [[lem-qa-16-nonconstant-adversary-at-least-one]]: nonconstant f has Adv±≥1.

[F7] [[def-qa-16-boolean-query-domain]]: $Q_{1/3}(f)$ is the least worst-case standard XOR query count for success probability at least $2/3$ on every promised input.

[F8] [[def-qa-16-general-adversary-bound]]: for constant f, Adv±(f) is defined to be zero.

[F9] [[thm-qa-16-dual-evaluator-success]]: for every supplied finite dual certificate with class costs at most A≥1, the reflection evaluator outputs f(x) with probability at least 2/3 on every promised input x.

## Proof

1.1 If f is nonconstant, apply [F1] with ε=1/3 to obtain Q_{1/3}(f)≥(1/2−√2/3)Adv±(f), whose coefficient is positive. [given, F1, F7, algebra]

1.2 Still assuming f is nonconstant, [F2] identifies the Boolean filtered factorization value with Adv±(f). By [F5] the dual certificate optimum is attained with cost A=Adv±(f); reciprocal rescaling balances C_0,C_1 without increasing their maximum. By [F6], A≥1. For this certificate and bound A, [F9] gives success probability at least 2/3 on every promised input, while [F3] bounds the same evaluator's query count by fewer than 2048A. It therefore qualifies in the minimization [F7], giving Q_{1/3}(f)<2048Adv±(f). [given, F2, F3, F5, F6, F7, F9, algebra]

2.1 If f is constant, the algorithm that outputs its fixed value without queries computes it exactly, so Q_{1/3}(f)=0 by [F7]. By [F8], Adv±(f)=0 as well. Combining this case with steps 1.1–1.2 proves the claimed uniform constant-factor bounds at error at most 1/3. Nonoracle gates are excluded from query cost by [F4]. [given, F4, F7, F8, step 1.1, step 1.2] ∎
