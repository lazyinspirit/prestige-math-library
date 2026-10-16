---
id: thm-qa-shor-factoring-success
kind: theorem
title: "Bounded-error success of Shor factoring"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
deps:
  - alg-qa-shor-factoring
  - lem-qa-shor-perfect-power-precheck
  - lem-qa-shor-residue-gcd-branch
  - thm-qa-modular-order-finding-success
  - thm-qa-order-to-factor-success
  - thm-qa-order-to-factor-correctness
  - thm-qa-shor-residue-sampler-correct-and-cost
  - def-unit-group-modulo-n-and-euler-totient
  - thm-unit-criterion-modulo-n
  - def-countable-choice
  - def-dependent-choice
  - thm-countable-product-of-probability-spaces
  - def-finite-probability-space-and-event
  - def-conditional-probability
  - def-product-of-finite-probability-spaces
  - thm-product-probability-has-independent-coordinate-events
justified_by: []
proof_strategy: direct
axiom_use: "Countable choice and dependent choice are used only for the sampler's countable independent fair-bit tapes."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Peter W. Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer"
      url: "https://arxiv.org/pdf/quant-ph/9508027"
      locator: "§4, “Quantum Fourier transforms,” and §5, “Prime factorization” (order-finding and the factor reduction)."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 5, §§5.1–5.4, “Factoring,” “Reduction from factoring to period-finding,” “Shor’s period-finding algorithm,” and “Continued fractions.”"
---
## Statement

For a promised composite $N\ge4$ and rational $0<\delta<1$, the procedure [[alg-qa-shor-factoring]] returns a proper divisor with probability at least $1-\delta$ after its declared $T=\lceil\ln(1/\delta)/(-\ln(5/8))\rceil$ outer attempts. Its exact even and perfect-power preprocessing branches succeed with probability one.

## Facts & Assumptions

**Given:** The algorithm [[alg-qa-shor-factoring]] on $N,\delta$, with $T$ the least positive integer satisfying $(5/8)^T\le\delta$.

[F1] The even and perfect-power preprocessing branches return proper factors whenever they apply ([[lem-qa-shor-perfect-power-precheck]]).

[F2] A sampled nonunit residue immediately yields a proper gcd factor, and conditional on gcd one the residue is uniform in the unit group ([[lem-qa-shor-residue-gcd-branch]]).

[F3] For an odd composite that is not a perfect power, the true-order reduction succeeds on a uniform unit with probability at least $1/2$ ([[thm-qa-order-to-factor-success]]).

[F4] The rejection sampler halts almost surely and returns a uniform representative ([[thm-qa-shor-residue-sampler-correct-and-cost]]).

[F5] Every returned output is a proper divisor ([[thm-qa-order-to-factor-correctness]]).

[F6] The algorithm uses fresh independent sampler tapes and fresh order-finding randomness across attempts ([[alg-qa-shor-factoring]]). For each fixed unit input, order finding uses finitely many measurements of finite registers ([[thm-qa-modular-order-finding-success]]). Finite terminal outcome laws can therefore be combined by the finite product law, whose coordinate events are independent ([[def-product-of-finite-probability-spaces]], [[thm-product-probability-has-independent-coordinate-events]]).

[F7] In a finite probability space, conditional probability is $\mathbb P(A\mid B)=\mathbb P(A\cap B)/\mathbb P(B)$ when $\mathbb P(B)>0$ ([[def-conditional-probability]]).

[A1] Countable choice and dependent choice supply only the countable independent fair-bit tape used by [F4] ([[def-countable-choice]], [[def-dependent-choice]], [[thm-countable-product-of-probability-spaces]]).

[A2] The current body of [[thm-qa-modular-order-finding-success]] states that for every fixed unit input and integer parameter $b\ge1$, the exact-order output probability is at least $1-2^{-b}$. Setting $b=2$ gives at least $3/4$ for each fixed unit input. The actual algorithm and theorem bodies and the proof route supporting this statement were inspected; this records the current carrier, not independent acceptance.

## Proof

1.1 If $N$ is even or a perfect power, preprocessing returns a proper factor by [F1], so the theorem holds with probability one. Otherwise $N$ is odd, composite, and not a perfect power, so [F3] applies. [given, F1, F3, algebra]

1.2 By [F4], the sampler halts almost surely and has uniform finite output law. For each unit representative $a$, let $Y_a$ be the finite set of order-finding measurement transcripts and $\mu_a$ its probability mass function; for a nonunit use a singleton $Y_a$ of mass one. One attempt has finite terminal outcome space $\Omega_N=\{(a,y):1\le a<N,\ y\in Y_a\}$ with weights $w_N(a,y)=\mu_a(y)/(N-1)$: the sampler marginal is [F4], the subsequent fresh measurement law is $\mu_a$, and these weights sum to one. All conditioning here is on this finite space as in [F7]. Conditional on the unit event $U$, [F2] makes $[a]_N$ uniform in the unit group. Let $G\subseteq U$ be the representatives whose true-order reduction succeeds, so [F3] gives $\mathbb P(G\mid U)\ge1/2$. For each $a\in G$, [A2] gives exact-order probability at least $3/4$; summing its transcript weights gives $\mathbb P(G\text{ and exact order}\mid U)\ge(3/4)\mathbb P(G\mid U)\ge3/8$. On that event the algorithm returns a proper factor. This uses a pointwise order-finding bound, without assuming independence between the unit and its measurement outcome. [F2, F3, F4, F6, F7, A1, A2, algebra]

2.1 Let $p$ be the probability that a sampled residue is a unit. The attempt succeeds with probability at least $(1-p)+p(3/8)=1-5p/8\ge3/8$. Any output is correct by [F5]; a nonminimal or otherwise unsuccessful order candidate can only cause this attempt to continue. [step 1.2, F5, algebra]

3.1 Preassign $T$ independent terminal records with the finite product law $w_N^{\otimes T}$. By the fresh randomness in [F6], this is the joint terminal law of the actual attempts; stopping at the first success simply leaves subsequent records unused. The event that any of these finitely many samplers does not halt has probability zero by [F4]. Let $B_i$ be the coordinate event that attempt $i$ returns no factor. Step 2.1 gives $\mathbb P(B_i)\le5/8$, and finite coordinate independence [F6] gives $\mathbb P(\bigcap_{i=1}^T B_i)=\prod_{i=1}^T\mathbb P(B_i)\le(5/8)^T\le\delta$. Thus the probability of returning a proper factor is at least $1-\delta$. [given, step 1.2, step 2.1, F4, F6, algebra] ∎

## Remarks

The exact-order probability premise [A2] is taken from the current batch-32 carrier and checked against its stated fixed-unit hypotheses; the cited carrier remains a draft and this record is not independent acceptance. Countable choice and dependent choice are used only to supply the sampler's independent fair-bit tapes [A1].
