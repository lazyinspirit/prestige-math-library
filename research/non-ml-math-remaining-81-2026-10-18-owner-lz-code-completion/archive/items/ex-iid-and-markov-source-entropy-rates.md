---
id: ex-iid-and-markov-source-entropy-rates
kind: example
title: "IID and two-state Markov entropy rates"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-finite-alphabet-stationary-source
  - def-finite-block-information-and-entropy
  - thm-stationary-entropy-rate-limit
  - thm-lz78-stationary-expected-rate
  - def-axiom-of-choice
  - cor-stationary-irreducible-markov-shift-is-ergodic
justified_by: []
proof_strategy: direct
axiom_use: "Assume AC only for the published stationary irreducible Markov shift ergodicity corollary; all entropy calculations are finite."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
---
## Statement

Computes h=1 bit/symbol for fair IID bits and h=H2(1/4) for the stationary symmetric two-state Markov source with switch probability 1/4; compares the stationary LZ78 expected rates.

## Facts & Assumptions

**Given:** A fair IID binary source and a stationary symmetric binary Markov source with switch probability $1/4$.

[F1] [[def-finite-alphabet-stationary-source]]: stationarity means invariance under the shift on the path law.

[F2] [[def-finite-block-information-and-entropy]]: $H_n$ is the finite-block Shannon entropy.

[F3] [[thm-stationary-entropy-rate-limit]]: for a stationary finite-alphabet source, $H_n/n\to h$.

[F4] [[thm-lz78-stationary-expected-rate]]: the expected explicit LZ78 rate converges to the stationary entropy rate without ergodicity.

[F5] [[cor-stationary-irreducible-markov-shift-is-ergodic]]: under AC, a stationary irreducible positive-recurrent chain has an ergodic shift.

[A1] [[def-axiom-of-choice]]: AC is assumed only for the Markov-shift ergodicity claim in [F5].

## Proof

**Given:** Both source laws and [F1]–[F5].

1.1 For fair IID bits, every length-$n$ word has probability $2^{-n}$; hence $H_n=n$ and $h=1$ bit per symbol. The shift is stationary by product-law invariance, and [F4] gives expected LZ78 rate tending to one. [F1, F2, F4, given, algebra]

1.2 For the Markov source, take stationary initial law $(1/2,1/2)$ and transition matrix with diagonal entries $3/4$ and off-diagonal entries $1/4$. Its block entropy is
$$H_n=H(X_0)+\sum_{i=1}^{n-1}H(X_i\mid X_{i-1})=1+(n-1)H_2(1/4),$$
where $H_2(p)=-p\log_2p-(1-p)\log_2(1-p)$. Thus $h=H_2(1/4)\approx0.811278$. The chain is irreducible and positive recurrent on its two states, so under [A1], [F5] gives ergodicity; [F4] gives the same limiting expected LZ78 rate. [A1, F1, F2, F3, F4, F5, algebra]

1.3 The distinct rates arise because IID entropy counts each bit without context, while the Markov transition entropy conditions on the previous state. Both examples have positive entropy, and the computed limits are consistent with $0\le h\le1$. [F2, step 1.1, step 1.2, algebra] ∎
