---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-iid-and-markov-source-entropy-rates.json
  precheck: pass
id: ex-iid-and-markov-source-entropy-rates
kind: example
title: "IID and two-state Markov entropy rates"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-finite-alphabet-stationary-source
  - def-finite-block-information-and-entropy
  - thm-stationary-entropy-rate-limit
  - thm-lz78-stationary-expected-rate
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all entropy calculations are finite."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected edition"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 8 §§8.2–8.4, printed pp.153–164: stationary finite-alphabet entropy rates and coding context. The IID/finite-Markov numerical entropy calculations and axiom conventions are explicit locally."
---
## Example

Computes $h=1$ bit/symbol for fair IID bits and $h=H_2(1/4)$ for the stationary symmetric two-state Markov source with switch probability 1/4; compares the stationary LZ78 expected rates.

## Facts & Assumptions

**Given:** A fair IID binary source and a stationary symmetric binary Markov source with switch probability $1/4$.

[F1] [[def-finite-alphabet-stationary-source]]: stationarity means invariance under the shift on the path law.

[F2] [[def-finite-block-information-and-entropy]]: $H_n$ is the finite-block Shannon entropy.

[F3] [[thm-stationary-entropy-rate-limit]]: for a stationary finite-alphabet source, $H_n/n\to h$.

[F4] [[thm-lz78-stationary-expected-rate]]: the expected explicit LZ78 rate converges to the stationary entropy rate without ergodicity.

## Verification

**Given:** Both source laws and [F1]–[F4].

1.1 For fair IID bits, every length-$n$ word has probability $2^{-n}$; hence $H_n=n$ and $h=1$ bit per symbol. The shift is stationary by product-law invariance, and [F4] gives expected LZ78 rate tending to one. [F1, F2, F4, given, algebra]

1.2 For the Markov source, take stationary law $\pi=(1/2,1/2)$ and transition matrix $K$ with diagonal entries $3/4$ and off-diagonal entries $1/4$; direct multiplication gives $\pi K=\pi$. Its length-$n$ block probabilities are $$P(X_0^{n-1}=x_0^{n-1})=\tfrac12\prod_{i=1}^{n-1}K_{x_{i-1},x_i}.$$ Expanding the finite entropy sum with this factorization gives $$H_n=H(X_0)+\sum_{i=1}^{n-1}H(X_i\mid X_{i-1})=1+(n-1)H_2(1/4),$$ where $H_2(p)=-p\log_2p-(1-p)\log_2(1-p)$. Thus $h=H_2(1/4)\approx0.811278$. The stationary LZ78 expected-rate theorem [F4] gives the same limiting rate without an ergodicity assumption. [F1, F2, F3, F4, algebra]

2.1 The distinct rates arise because IID entropy counts each bit without context, while the Markov transition entropy conditions on the previous state. Both examples have positive entropy, and the computed limits are consistent with $0\le h\le1$. [F2, step 1.1, step 1.2, algebra] ∎
