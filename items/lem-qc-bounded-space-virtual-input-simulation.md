---
id: lem-qc-bounded-space-virtual-input-simulation
kind: lemma
title: "Bounded-space simulation of a generated input"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-qc-unbounded-error-time-space-counting-model
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Van Melkebeek and Watson, Time-Space Efficient Simulations of Quantum Computations, native input queries and operand-space model"
      url: https://doi.org/10.4086/toc.2012.v008a001
    - title: "Allender et al., Time-Space Tradeoffs in the Counting Hierarchy, near-linear reductions"
      url: https://people.cs.rutgers.edu/~allender/papers/tradeoff.pdf
proof_strategy: direct
---

## Statement

Let $x$ have length $n$, and let $y(x)$ have known length $N\le(n+2)^K$. Suppose its zero-based bit $y_i(x)$ can be generated deterministically in $\log^{O(1)}(n+2)$ time and $O(\log(n+2))$ work cells, with ordinary direct indexed access to $x$. Fix a classical derived-basis machine whose run on $y(x)$ takes at most a known polynomial clock $T\le(n+2)^K$ and whose work operands, including native query endpoints, all lie below a known power of two $M\le(n+2)^K$. The dimensions and clocks have polylogarithmic-time/logspace binary generators. There is an index-only erased-index simulation on $x$ with identical branch outcomes and probabilities, time $O((n+T+1)\log^{O(1)}(n+2))$, and work-access extent $O(M+\log(n+2))$. The simulated machine has fixed finite head and tape counts; its constants may depend on that machine, the generators and $K$. This does not assert a sublinear-time simulation or normalization of unrestricted work addresses.

## Facts & Assumptions

**Given:** the generators and bounds in the Statement. A separate physical tape is available for each of a fixed finite number of simulated work tapes and auxiliary trees; the total tape/head count remains fixed.

[F1] [[def-qc-unbounded-error-time-space-counting-model]] defines the derived basis profile, its native input-query operation, the index-only erased-index profile and charged operand-space convention. An input basis query on work block $[u,v]$ reads its MSB-first address in $[u,v)$ and flips its answer at $v$ using the one-based input bit, with invalid indices giving zero.

## Proof


1.1 Store each simulated binary work tape unchanged on a physical binary tape, initially zero, and maintain its fixed finite head addresses with $O(\log(n+2))$-bit counters. Since all work accesses are below $M$, every valid work-head/index endpoint value is bounded by $M$. Accumulate a freshly emitted source index bit by shift-and-append, saturating work indices at $M$ and ordinary input-head indices at $N+T+1$. A work overflow cannot be used on the promised run; appending bits cannot undo it. An overflowing input jump remains outside the input for every remaining local step, so a FAR marker returns blank until the next jump. Index lengths and emitted contents are unread except on use; these numeric summaries and resets therefore implement exactly their observable effects. Each counter operation, short physical index emission, head read/write and input-position comparison costs polylogarithmic time and logarithmic workspace. Physical input-head read at position $i<N$ calls the generator of $y_i(x)$, using charged short erased indices for its source-input reads. Outside that range it returns blank. [F1, given, construct]

2.1 For each simulated work tape keep a second zero-initialized binary tape containing the heap representation of a complete binary OR tree with $M$ leaves. Leaf $M+a$ stores work bit $a$ for $0\le a<M$, and internal node $j$ stores the OR of nodes $2j,2j+1$. Initially every value is zero, matching the source; no initialization sweep is needed. When work bit $a$ changes, update its leaf and ascend through $\lfloor j/2\rfloor$ to the root, recomputing each OR from its two children. At most $1+\log_2M$ nodes are visited; every address is below $2M$ and takes $O(\log(n+2))$ bits to emit. Thus an update costs polylogarithmic time with only a fixed number of logarithmic counters. The invariant follows inductively because only ancestors of the changed leaf can change. Arbitrarily many zero cells require no explicit allocation or stored pointers. [step 1.1, construct, induction]

3.1 The OR of work interval $[l,r)$ is found in at most $2\log_2M+2$ tree-node reads. Initialize the accumulated OR to zero and put $L=M+l$, $R=M+r$. While $L<R$, if $L$ is odd include node $L$ and increment $L$; then if $R$ is odd decrement $R$ and include that node; finally replace both by their integer halves. Return the accumulated OR when $L=R$, in particular zero without a node read when $l=r$. At each iteration the included fringe nodes are disjoint, and the remaining uncovered interval is the union of the complete sibling pairs between the updated endpoints; halving replaces precisely those pairs by their parents. Induction proves that the included nodes partition exactly the original leaf interval. Each level includes at most two nodes, and there are at most $1+\log_2M$ levels. Their stored OR is therefore exactly the requested range OR. The procedure uses logarithmic counters and polylogarithmic time. [step 2.1, construct, induction]

4.1 Implement a native source query with $u\le v$ as follows. Put $k=\lceil\log_2(N+1)\rceil$, and inspect the last $\min(k,v-u)$ address bits immediately before $v$, using short physical addresses. Let $p=\max(u,v-k)$. Query the tree OR of $[u,p)$. If it is one, the binary input address is at least $2^k>N$, so the native query leaves its answer unchanged. Otherwise the entire numerical address is the inspected low word, padded with leading zeros to $k$ bits. For $1\le i\le N$, generate $y_{i-1}(x)$ and XOR it into work bit $v$, then update that tape's OR tree as in step 2.1. For an invalid index leave the answer unchanged. The empty address gives zero and hence no change, and reversed endpoints are omitted as specified by [F1]. Only $O(\log(n+2))$ work-bit reads, a range-OR query, one generator call and one update are needed. Every accessed physical work/tree address is $O(M)$, and only logarithmic scratch is used. The source address word can be reused indefinitely; the maintained tree avoids rescanning its long high part. [F1, step 1.1, step 2.1, step 3.1, construct]

5.1 Ordinary source local operations change only a fixed finite number of bits, so apply step 2.1 to each changed bit after taking the source's simultaneous reads and respecting its collision rule. Source input queries are exact by step 1.1 and step 4.1, and all head/index transitions are exact by step 1.1. Induction on the source clock therefore gives the identical source configurations and branch outcomes, with the harmless FAR summary of permanently blank input positions. The simulator takes exactly one designated independent fair bit per source transition and ignores all its other physical fair bits; each source choice prefix has its original mass $2^{-j}$. All auxiliary work is deterministic, so outcomes and acceptance probabilities are identical. At most a polylogarithmic amount of work is done per transition, plus the initial $O(n)$ input-length setup. Source work and OR trees have extent $O(M)$ on fixed finitely many tapes, and every generator/counter needs $O(\log(n+2))$ workspace. These are exactly the claimed time and space bounds. [F1, step 1.1, step 2.1, step 3.1, step 4.1, construct, induction] ∎

