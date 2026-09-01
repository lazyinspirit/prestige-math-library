---
id: ex-prime-counting-theta-and-psi-table
kind: example
title: "A table of pi(x), theta(x), and psi(x)"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-prime-counting-function,
       def-chebyshev-theta-function,
       def-chebyshev-psi-function,
       lem-chebyshev-psi-prime-power-expansion,
       lem-chebyshev-functions-prime-power-comparison]
justified_by: []
proof_strategy: direct
verification:
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

For $x=10,20,30$ one has

$$\begin{array}{c|c|c|c|c} x & \pi(x) & \theta(x) & \psi(x) & \psi(x)-\theta(x) \\ \hline 10 & 4 & 5.347108 & 7.832014 & 2.484907 \\ 20 & 8 & 16.087604 & 19.265658 & 3.178054 \\ 30 & 10 & 22.590395 & 28.476499 & 5.886104 \end{array}$$

and the jumps of $\psi$ up to $30$ occur exactly at the prime powers
$2,3,4,5,7,8,9,11,13,16,17,19,23,25,27,29$.

## Facts & Assumptions

**Given:** The cutoffs $x=10,20,30$.

[L1] $\pi(x)$ counts primes, $\theta(x)$ sums $\log p$ over primes, and
$\psi(x)$ sums $\Lambda(n)$ over integers $n\le x$
([[def-prime-counting-function]], [[def-chebyshev-theta-function]],
[[def-chebyshev-psi-function]]).

[L2] The function $\psi$ is the sum of $\log p$ over prime powers $p^k\le x$
([[lem-chebyshev-psi-prime-power-expansion]]).

[L3] The difference $\psi(x)-\theta(x)$ is carried entirely by prime powers
$p^k$ with $k\ge2$ ([[lem-chebyshev-functions-prime-power-comparison]]).

## Verification

**Proof technique:** direct.

1.1 For $x=10$, the primes are $2,3,5,7$, so $\pi(10)=4$ and $ \theta(10)=\log2+\log3+\log5+\log7. $ By [L2], the prime powers at most $10$ are $2,3,4,5,7,8,9$, so $ \psi(10)=3\log2+2\log3+\log5+\log7. $ These are exactly the first row entries in the displayed table. [L1, L2, given, algebra]

2.1 The same calculation at $x=20$ and $x=30$ gives the remaining table rows. Up to $30$, the extra contribution in $\psi-\theta$ comes exactly from $4,8,9,16,25,27$, which is the prime-power layer described in [L3]. [L1, L2, L3, step 1.1, algebra]

3.1 The table illustrates two qualitative points from the A page: $\psi$ and $\theta$ stay close, but $\psi$ jumps at every prime power while $\theta$ jumps only at the primes. [L3, step 1.1, step 2.1] ∎
