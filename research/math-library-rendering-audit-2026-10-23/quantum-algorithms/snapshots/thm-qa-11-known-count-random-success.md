---
id: thm-qa-11-known-count-random-success
kind: theorem
title: Nine-round randomized known-count search succeeds with probability at least two-thirds
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
proof_strategy: direct
deps:
  - alg-qa-11-known-count-random-iteration-search
  - lem-qa-11-random-iteration-average
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation, §2
      url: https://arxiv.org/pdf/quant-ph/0005055
axiom_use: None; only finite sums, finite random choices, elementary real arithmetic, and natural-number induction are used; no choice principle is needed.
---
 
## Statement
 
For every exact known count $t>0$, the randomized known-count procedure returns a marked item with probability at least $2/3$. If $0<t\le N/2$, each round succeeds with probability at least $1/8$ and nine-round failure is at most $(7/8)^9<1/3$. If $t>N/2$, each direct-sampling round succeeds with probability greater than $1/2$, so nine-round failure is less than $1/512$. For $t=0$ the procedure returns none exactly.
 
## Facts & Assumptions
 
**Given:** The nine-round algorithm with its exact $K$, rejection sampling, and candidate verification.
 
[F1] [[alg-qa-11-known-count-random-iteration-search]]: for $0<t\le N/2$, each round draws $b$ fair bits, accepts $j<K$, applies $j$ Grover iterates, and verifies the measured candidate; for $t>N/2$ it makes a direct uniform sample; for $t=0$ it returns none.
 
[F2] [[lem-qa-11-random-iteration-average]]: conditional on a uniform $J\in\{0,\ldots,K-1\}$, average Grover success is at least $1/4$.

## Proof

1.1 If $0<t\le N/2$, the algorithm's accepted labels are exactly $0,\ldots,K-1$. If $K=1$, then $b=0$ and acceptance has probability $1$. If $K>1$, minimality of $b$ gives $2^{b-1}<K\le2^b$, so acceptance probability $K/2^b>1/2$ and, conditional on acceptance, each accepted $j$ is equally likely. [given, F1, algebra]

2.1 By [F2], an accepted round succeeds with probability at least $1/4$. Multiplying by the acceptance probability gives per-round success at least $1/8$. Fresh random bits, registers, and measurements make the nine rounds independent conditional on the fixed oracle, so total failure is at most $(7/8)^9$. Since $3\cdot7^9=121060821<134217728=8^9$, this is less than $1/3$. [step 1.1, F1, F2, algebra]

3.1 If $t>N/2$, a uniform address is marked with probability $t/N>1/2$. Nine fresh direct samples therefore fail with probability $(1-t/N)^9<(1/2)^9=1/512<1/3$. If $t=0$, the algorithm's explicit branch returns none. Every returned item in the other branches is verified by a standard bit query, so no unmarked item is returned. [given, F1, algebra] ∎
