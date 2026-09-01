---
id: ex-chebyshev-binomial-coefficient-estimate
kind: example
title: "Factoring a central binomial coefficient to detect interval primes"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-central-binomial-coefficient-bounds,
       lem-central-binomial-coefficient-prime-valuation]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Version 2"
      url: "https://shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Example

At $n=10$,

$$
\binom{20}{10}=184756=2^2\cdot11\cdot13\cdot17\cdot19.
$$

Thus every prime in $(10,20]$ appears, exactly as the valuation lemma predicts.

## Facts & Assumptions

**Given:** The value $n=10$.

[L1] The central binomial coefficient satisfies
$$
\frac{4^{10}}{21}\le\binom{20}{10}\le4^{10}
$$
([[lem-central-binomial-coefficient-bounds]]).

[L2] Every prime $p$ with $10<p\le20$ divides $\binom{20}{10}$ exactly once
([[lem-central-binomial-coefficient-prime-valuation]]).

## Verification

**Proof technique:** direct.

1.1 A direct factorization gives $ \binom{20}{10}=184756=2^2\cdot11\cdot13\cdot17\cdot19. $ The primes in $(10,20]$ are precisely $11,13,17,19$, and each appears with valuation $1$. [L2, given, algebra]

2.1 The bound in [L1] reads $ \frac{4^{10}}{21}\le184756\le4^{10}, $ so this concrete value sits comfortably inside the abstract central-binomial window used in Chebyshev's proof. [L1, step 1.1, algebra]

3.1 This example shows exactly how the factorization of $\binom{2n}{n}$ detects the interval primes: the large primes appear once, while only small primes contribute higher powers. [L2, step 1.1, step 2.1] ∎
