---
id: thm-qa-14-grover-search-upper-success
kind: theorem
title: Grover search upper-bound success guarantee
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
deps:
  - def-qa-14-search-promise
  - alg-qa-14-one-marked-search-with-verification
  - thm-qa-14-zero-completion-query-simulation-correct
  - lem-qa-14-chebyshev-recurrence-matches-grover-success
  - thm-qa-11-integer-iteration-regime
proof_strategy: direct
axiom_use: None; the proof specializes the finite integer-iteration theorem and uses exact query simulation.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
      locator: "§2, Theorem 2 (PDF pp.6–8): exact Grover-plane rotation and success probability."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§7.2, printed pp.53–56 (PDF pp.65–68): rounded Grover iteration count and success."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§19.1, printed pp.87–89 (PDF pp.96–98): unstructured search and Grover's query upper bound."
---

## Statement

On every promised input of [[def-qa-14-search-promise]], the fixed-one procedure [[alg-qa-14-one-marked-search-with-verification]] returns the correct decision and, on a one-marked input, its marked coordinate with probability at least $1-1/M$, where $M=2^{\lceil\log_2N\rceil}$ and $M=1$ when $N=1$. In particular, its one-marked success probability is at least $1-1/N$; when $N=1$ it succeeds with certainty. On $0^N$ verification always returns no.

## Facts & Assumptions

**Given:** The fixed-one schedule, its reversible simulation of the padded oracle, the exact recurrence identity, and the integer-rounding theorem.

[F1] [[alg-qa-14-one-marked-search-with-verification]]: the procedure pads to $M$, fixes its schedule count to $1$, maximizes $p_k=(1-T_{2k+1}(1-2/M))/2$ over $0\le k\le\lceil\sqrt M\rceil$, and verifies the measured candidate by initializing the XOR-query response to $0$ and measuring the resulting bit.

[F2] [[thm-qa-14-zero-completion-query-simulation-correct]]: each padded query is exactly simulated using one raw query, and padded addresses have value zero.

[F3] [[lem-qa-14-chebyshev-recurrence-matches-grover-success]]: for a dyadic domain and exact mark count $t$, the recurrence value $p_k$ equals the actual Grover marked-address probability.

[F4] [[thm-qa-11-integer-iteration-regime]]: if $0<t/M\le1/2$, some $k\le\lceil\sqrt{M/t}\rceil$ has Grover success at least $1-t/M$; for $t/M>1/2$, $k=0$ has success $t/M$.

[F5] [[def-qa-14-search-promise]]: on a one-mark input the padded length-$M$ string has exactly one marked valid address, while the zero input has no marked address.

## Proof

1.1 If $N=1$, then $M=1$ and the schedule in [F1] includes $k=0$. Its recurrence value is $p_0=(1-(-1))/2=1$, since $1-2/M=-1$ and $T_1(q)=q$. The maximizing choice in [F1] has value at least $p_0$, and [F3] identifies every list value with a probability at most $1$, so the selected success probability is $1$. If $N\ge2$, then $M\ge2$, so the padded one-mark input in [F5] has ratio $t/M=1/M\le1/2$. [F1, F3, F5, algebra]

2.1 For $N\ge2$, [F4] supplies an integer $k\le\lceil\sqrt M\rceil$ with actual marked probability at least $1-1/M$. The recurrence probabilities in [F1] equal these actual probabilities by [F3], so their finite maximizing choice has probability no smaller than that candidate. The $N=1$ case already has probability one by step 1.1. [F1, F3, F4, step 1.1]

3.1 The simulation in [F2] makes the algorithm's padded Grover evolution exactly the evolution analyzed in step 2.1. Initializing the verification response to $0$ makes its XOR output equal to the queried bit. On a one-mark input, a marked measurement is valid and the final verification returns $1$, so the algorithm returns the correct marked coordinate with probability at least the bound from step 2.1. On $0^N$, every verification query returns $0$, so it returns no with certainty. Finally $M\ge N$ implies $1-1/M\ge1-1/N$. [F2, F5, step 2.1, algebra] ∎
