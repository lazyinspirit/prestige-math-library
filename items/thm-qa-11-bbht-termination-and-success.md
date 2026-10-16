---
id: thm-qa-11-bbht-termination-and-success
kind: theorem
title: Unknown-count search halts almost surely when a marked item exists
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
proof_strategy: direct
deps:
  - alg-qa-11-bbht-unknown-count-search
  - def-qa-11-marked-search-problem
  - lem-qa-11-bbht-stage-success-bound
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
    - title: 'Ronald de Wolf, Quantum Computing: Lecture Notes, §7.2'
      url: https://arxiv.org/pdf/1907.09415
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, §19.1
      url: https://cs.umd.edu/~amchilds/qa/qa.pdf
axiom_use: None; only finite sums, finite random choices, elementary real arithmetic, and natural-number induction are used; no choice principle is needed.
---

## Statement

For $t>0$, the BBHT algorithm halts with probability $1$ and returns an element of $M$; the probability it has not returned a marked item after $r$ rounds tends to zero. For $t=0$, it never halts and never outputs an element.

## Facts & Assumptions

**Given:** The BBHT algorithm with fresh randomness and a fresh quantum register in every round.

[F1] [[alg-qa-11-bbht-unknown-count-search]]: each round directly tests a uniform candidate, then uses $j$ uniformly distributed on $\{1,\ldots,M_\ell\}$, measures, verifies with a bit query, and continues after failure.

[F2] [[def-qa-11-marked-search-problem]]: when $t=0$, the marked set $M$ is empty; when $t>0$, a successful output is a verified element of $M$.

[F3] [[lem-qa-11-bbht-stage-success-bound]]: for $0<a<3/4$, every round with $M_\ell\ge4/\sqrt a$ has conditional quantum-search success at least $3/8$.

## Proof

1.1 If $t=0$, then $M=\varnothing$ by [F2]. Every directly sampled and every quantum-measured candidate is therefore unmarked, and [F1] verifies each before returning. Thus no round returns and the loop does not halt. [given, F1, F2]

1.2 Suppose $t>0$ and write $a=t/N$. If $a\ge3/4$, the initial uniform sample in every round is marked with probability $a\ge3/4$. Fresh independent samples imply failure through $r$ rounds is at most $(1/4)^r$, which tends to zero. [given, F1, F2, algebra]

1.3 If $0<a<3/4$, the schedule $M_\ell=\lceil(3/2)^\ell\rceil$ tends to infinity, so some finite $L$ satisfies $M_L\ge4/\sqrt a$. From round $L$ onward, conditional on reaching that round and on the direct sample having failed, [F3] gives quantum-search success at least $3/8$; fresh random labels and registers make this conditional law independent of the direct sample. Thus a round succeeds with probability at least $a+(1-a)(3/8)\ge3/8$. Fresh rounds then give failure through round $r\ge L$ at most $(5/8)^{r-L+1}$. [given, F1, F3, algebra]

2.1 The verification query returns the actual value $f(x)$, so any returned address is marked by [F1]–[F2]. The bounds in steps 1.2 and 1.3 tend to zero; therefore the algorithm returns a marked element with probability $1$ whenever $t>0$. [step 1.1, step 1.2, step 1.3, F1, F2, algebra] ∎
