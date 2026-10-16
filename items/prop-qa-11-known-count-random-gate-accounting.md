---
id: prop-qa-11-known-count-random-gate-accounting
kind: proposition
title: Gate and reflection accounting for randomized known-count search
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
proof_strategy: direct
deps:
  - alg-qa-11-known-count-random-iteration-search
  - def-qc-circuit-cost-model
  - def-qc-elementary-circuit-resources
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-reflection
  - lem-ceiling-and-least-positive-integer-threshold
  - thm-of-square-roots
  - thm-qc-reflection-unitary-involution
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: 'Ronald de Wolf, Quantum Computing: Lecture Notes, §7.2'
      url: https://arxiv.org/pdf/1907.09415
axiom_use: None; only finite sums, finite random choices, elementary real arithmetic, and natural-number induction are used; no choice principle is needed.
---

## Statement

Each uniform-state preparation uses exactly $n$ Hadamard gates. Write $R_0=2|0^n\rangle\langle0^n|-I$ and let $C(R_0)$ be its declared gate cost if implemented or supplied as a named reflection. Conjugation gives $R_s=H^{\otimes n}R_0H^{\otimes n}$, so an iterate uses $2n$ Hadamards, cost $C(R_0)$, and one bit-oracle query. For the $0<t\le N/2$ branch, the total nonoracle gate cost is at most
$$9\bigl[n+2+(K-1)(2n+C(R_0))\bigr],\qquad K=\lceil\sqrt{N/t}\rceil,$$
up to measurement and output handling. For $t>N/2$ it is at most $9n$ Hadamards plus measurement/output handling. The reflection is not a free oracle.

## Facts & Assumptions

**Given:** The nine-round known-count algorithm, the exact one-qubit gate alphabet, and the declared circuit resource model.

[F1] [[alg-qa-11-known-count-random-iteration-search]]: each accepted randomized round prepares a fresh uniform state, uses at most $K-1$ iterates when $t\le N/2$, and the direct branch uses only uniform preparation before verification.

[F2] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: $H$ is the exact Hadamard matrix with $H|0\rangle=(|0\rangle+|1\rangle)/\sqrt2$ and $H^2=I$.

[F3] [[def-qc-reflection]]: a prepared-state reflection is $UR_0U^\dagger$, and its cost includes the preparation, reflection, and inverse preparation unless a different declared primitive is supplied.

[F4] [[thm-qc-reflection-unitary-involution]]: both reflection signs are unitary involutions with the declared signs.

[F5] [[def-qc-elementary-circuit-resources]]: gate occurrences, queries, and classical bit operations are separate resource coordinates.

[F6] [[def-qc-circuit-cost-model]]: a cost record keeps gate and query coordinates separate and assigns no zero cost to an unspecified oracle or controlled access.

## Proof

1.1 Applying $H$ to each of the $n$ address wires sends $|0^n\rangle$ to $2^{-n/2}\sum_x|x\rangle=|s\rangle$ by the tensor-product action, using exactly $n$ occurrences of $H$ by [F2] and [F5]. The $n=0$ case has no such occurrences. [given, F1, F2, F5]

2.1 Since $H^{\otimes n}|0^n\rangle=|s\rangle$ and $(H^{\otimes n})^\dagger=H^{\otimes n}$, conjugating $R_0$ gives $H^{\otimes n}R_0H^{\otimes n}=2|s\rangle\langle s|-I=R_s$. This costs $2n$ Hadamards plus the declared $C(R_0)$; [F3]–[F4] do not make the all-zero reflection free. [step 1.1, F2, F3, F4, F6, algebra]

3.1 In the $t\le N/2$ branch each round has at most one fresh preparation, two gates $X,H$ for the response qubit, and at most $K-1$ iterates. Each iterate has the nonoracle cost in step 2.1; its query is excluded from this gate total by [F5]–[F6]. Multiplying the per-round bound by nine gives the stated upper bound, including rejected rounds as zero-cost cases. [given, F1, step 1.1, step 2.1, F5, F6, algebra]

4.1 When $t>N/2$, each of at most nine direct rounds only prepares $|s\rangle$ and measures/verifies, so there are at most $9n$ Hadamards and no diffusion reflection. The t=0 branch returns before preparation. [given, F1, step 1.1, F5, F6] ∎
