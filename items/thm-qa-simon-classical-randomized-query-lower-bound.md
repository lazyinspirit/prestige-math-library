---
id: thm-qa-simon-classical-randomized-query-lower-bound
kind: theorem
title: "Classical randomized Simon search needs exponential queries"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-simon-random-instance-distribution
  - def-qa-classical-query-algorithm
  - def-finite-probability-space-and-event
justified_by: []
proof_strategy: contradiction
axiom_use: "No Choice is used; all oracle, label, and random-tape spaces in the bound are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6, 2026)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 3 §3.3.2, PDF pp. 36–39: full distributional Simon classical lower-bound proof for the decision variant, using uniform hidden masks and the collision-free transcript posterior; the local item gives a direct randomized-search proof for the nonzero promise."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 5 §5.3, PDF pp. 29–32: adversarial/deterministic classical HSP query lower bound, specializing to the family of order-two subgroups of F_2^n; used as an independent comparison, not as the local randomized-search proof."
---
## Statement

Let $n\ge8$, $N=2^n$, and $m\ge n-1$. Consider algorithms that know $n,m$ and receive only classical query access to the promised oracle $f$; no truth table, description, or other information depending on $f$ is supplied. Every randomized algorithm in this model that outputs the unique nonzero Simon mask with success probability at least $2/3$ on every promised oracle must use more than $\lfloor 2^{n/2}/4\rfloor$ queries in the worst case. Consequently the classical randomized query complexity in this oracle-only model is $\Omega(2^{n/2})$. This is a query lower bound; no classical bit-time lower bound is asserted.

## Facts & Assumptions
**Given:** The random Simon-oracle distribution, a randomized classical query algorithm with worst-case query bound $q$, $n\ge8$, and output width $m\ge n-1$.

[F1] [[def-qa-simon-random-instance-distribution]]: $s$ is uniform among nonzero masks and coset labels are assigned uniformly by an injection into the $m$-bit outputs.

[F2] [[def-qa-classical-query-algorithm]]: fixing the finite random tape gives a deterministic adaptive query procedure. Under the oracle-only convention in the Statement, its address choices may depend on $n,m$ and earlier replies, but receive no additional $f$-dependent input.

[F3] [[def-finite-probability-space-and-event]]: all hidden masks, label injections, and finite random tapes are sampled in finite probability spaces.

## Proof

1.1 Assume, for contradiction, that $q\le\lfloor\sqrt N/4\rfloor$. Put $S=N-1$ and $B=\binom q2$. [given, assume-contra, algebra]

2.1 Fix one finite random tape, making the algorithm deterministic. Repeated addresses can be answered from the earlier reply and removed without changing the output, so the resulting at most $q$ queries are distinct. [given, F2, F3, step 1.1, algebra]

2.2 The assumption in step 1.1 gives $B\le q^2/2\le N/32$. Hence $S-B\ge31N/32-1>0$, since $N=2^n\ge256$. [given, step 1.1, algebra]

3.1 Consider a collision-free transcript of $t\le q$ queries. A mask is inconsistent with it only if it is the XOR difference of a pair of queried addresses, so at most $\binom t2\le B$ masks are excluded and at least $S-B$ remain. For each remaining $s$, the queried addresses lie in distinct $s$-cosets. Write $(L)_t=L(L-1)\cdots(L-t+1)$, where $L=2^m$ and $C=2^{n-1}$. For a specified ordered list of $t$ distinct replies, the number of injections extending those assignments is $(L-t)_{C-t}$ out of $(L)_C$ total injections, giving likelihood $1/(L)_t$, independent of $s$. Because the deterministic query addresses are functions of earlier replies, the transcript has the same likelihood for every consistent mask. The posterior on those masks is therefore uniform. [given, F1, F2, step 2.1, step 2.2, algebra]

4.1 At the $j$th fresh query, a collision with a previous address $x_i$ requires $s=x_j\oplus x_i$. There are at most $j-1$ candidate masks, and after any collision-free transcript at least $S-B$ masks remain equally likely by step 3.1. Thus the probability that the first collision occurs at query $j$ is at most $(j-1)/(S-B)$. Summing over $j=2,\ldots,q$ bounds the total collision probability by $\sum_{j=2}^q(j-1)/(S-B)=B/(S-B)$. [step 3.1, algebra]

5.1 On a collision-free transcript, the deterministic final guess is correct with probability at most $1/(S-B)$, since at least that many masks remain equally likely. On transcripts with a collision, success is at most one. Therefore average success under [F1] is at most $B/(S-B)+1/(S-B)=(B+1)/(S-B)$. [F1, step 3.1, step 4.1, algebra]

6.1 By steps 1.1 and 2.2, with $S-B>0$, $(B+1)/(S-B)\le(N/32+1)/(31N/32-1)<2/3$. The strict inequality is equivalent to $5<59N/32$, which holds because $N\ge256$. Thus every fixed random tape has average success strictly below $2/3$ under the finite oracle distribution. [given, F3, step 2.2, step 5.1, algebra]

7.1 Averaging over the algorithm's finite random tapes keeps its average success below $2/3$. But success at least $2/3$ on every promised function implies average success at least $2/3$ under [F1], since every function in that distribution is promised. This contradiction proves $q>\lfloor\sqrt N/4\rfloor$ and hence the stated $\Omega(2^{n/2})$ lower bound. [given, F1, F3, step 6.1, discharge-contradiction] ∎

