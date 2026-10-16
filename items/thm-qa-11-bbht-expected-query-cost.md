---
id: thm-qa-11-bbht-expected-query-cost
kind: theorem
title: Expected bit-query cost of unknown-count BBHT search
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 25
proof_strategy: direct
deps:
  - alg-qa-11-bbht-unknown-count-search
  - def-qa-expected-query-cost
  - def-qa-quantum-query-complexity
  - lem-ceiling-and-least-positive-integer-threshold
  - lem-of-square-monotone
  - lem-qa-11-bbht-stage-success-bound
  - thm-of-square-roots
  - thm-qa-11-bbht-termination-and-success
  - thm-qa-11-grover-iterate-query-cost
provenance:
  statement: literature-derived
  proof: ai-generated
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

For $t>0$, the BBHT algorithm has expected standard bit-query cost $O(\sqrt{N/t})$. The bound includes the direct membership test and a separate verification query in each attempted round, plus one query per Grover iterate through phase kickback. If $t=0$, it never halts and the expected query cost from finite execution prefixes is infinite.

## Facts & Assumptions

**Given:** The BBHT algorithm with $c=3/2$, the expected-query definition, and $t>0$.

[F1] [[alg-qa-11-bbht-unknown-count-search]]: stage $\ell$ uses $M_\ell=\lceil(3/2)^\ell\rceil$, one direct sample query, at most $M_\ell$ iterate queries, and one verification query.

[F2] [[lem-qa-11-bbht-stage-success-bound]]: when $0<a=t/N<3/4$ and $M_\ell\ge4/\sqrt a$, conditional stage success is at least $3/8$.

[F3] [[thm-qa-11-bbht-termination-and-success]]: for $t>0$ the algorithm returns a verified marked element almost surely.

[F4] [[thm-qa-11-grover-iterate-query-cost]]: every Grover iterate uses one standard bit query.

[F5] [[def-qa-expected-query-cost]]: expected cost is the supremum of expected query counts over finite execution prefixes; no infinite-history measure is assumed.

[F6] [[lem-ceiling-and-least-positive-integer-threshold]] and [[thm-of-square-roots]]: ceilings are least integer upper bounds and $\sqrt a$ is the nonnegative root.

[F7] [[lem-of-square-monotone]]: for $0<a\le1$, $1\le1/\sqrt a$.

[F8] [[def-qa-quantum-query-complexity]]: query calls are a separate resource coordinate from gates and classical bit operations.

## Proof

1.1 In a round with stage size $M_\ell$, there is one direct test, at most $M_\ell$ iterate queries by [F4], and one candidate verification. Thus the round makes at most $M_\ell+2\le(3/2)^\ell+3$ bit queries. [given, F1, F4, F6, algebra]

1.2 Now let $0<a<3/4$ and let $L$ be the first stage with $M_L\ge4/\sqrt a$, which exists because $(3/2)^\ell\to\infty$. Minimality gives $(3/2)^{L-1}<4/\sqrt a$ and $$M_L\le(3/2)^L+1<6/\sqrt a+1\le7/\sqrt a.$$ Also $(3/2)^m\ge1+m/2$ by induction, so the threshold is reached by $m=\lceil8/\sqrt a\rceil$; thus $L=O(1/\sqrt a)$. The absorptions of the additive constants use [F7]. [given, F1, F2, F6, F7, algebra]

2.1 First suppose $a\ge3/4$. Each round succeeds at least on its direct uniform sample, with probability at least $3/4$ by [F1]. The probability of reaching round $\ell$ is at most $(1/4)^{\ell-1}$. Hence the expected total query count over any finite number of rounds is bounded by $$\sum_{\ell\ge1}(1/4)^{\ell-1}((3/2)^\ell+3),$$ a convergent geometric series because $(3/2)/4=3/8<1$. It is an absolute constant, hence $O(1/\sqrt a)$ by [F7]. [step 1.1, F1, F5, F7, algebra]

2.2 Before stage $L$, bound every reach probability by $1$. The geometric sum of $(3/2)^\ell$ over $\ell<L$ is at most $3(3/2)^{L-1}<12/\sqrt a$, while the additive $3$ per round contributes $3(L-1)=O(1/\sqrt a)$ by step 1.2. Thus the early-stage expected query count is $O(1/\sqrt a)$. [step 1.1, step 1.2, algebra]

2.3 At every stage $\ell\ge L$, [F2] bounds the conditional failure probability by $5/8$. Therefore the probability of reaching $L+k$ is at most $(5/8)^k$. Since $$M_{L+k}\le(3/2)^kM_L+1,$$ the tail expected query count is at most $$\sum_{k\ge0}(5/8)^k((3/2)^kM_L+3),$$ which is $16M_L+8=O(1/\sqrt a)$ because $(5/8)(3/2)=15/16<1$, $M_L\le7/\sqrt a$ by step 1.2, and $8=O(1/\sqrt a)$ by [F7]. [step 1.1, step 1.2, F2, F5, F7, algebra]

3.1 Any finite $M$-step execution prefix can begin at most $M$ rounds because each attempted round starts with a direct sample query; if the prefix ends inside a round, its query count is bounded by that completed round's bound in step 1.1. Summing the reach-probability-weighted round bounds through the prefix is therefore at most the full sums in steps 1.2 and 2.2–2.3, uniformly in $M$. The supremum over finite prefixes in [F5] is bounded by those convergent geometric sums. [F3] gives almost-sure termination for $t>0$; the expected bound is for bit queries only, with other coordinates separate by [F8]. Since $1/\sqrt a=\sqrt{N/t}$, the expected bit-query cost is $O(\sqrt{N/t})$. If $t=0$, every round issues a direct sample query and continues, so a finite prefix after $R$ completed rounds has expected query count at least $R$; the supremum is infinite. [step 1.1, step 1.2, step 2.1, step 2.2, step 2.3, F1, F3, F5, F6, F7, F8, algebra] ∎
