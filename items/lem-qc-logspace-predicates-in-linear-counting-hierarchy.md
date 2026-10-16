---
id: lem-qc-logspace-predicates-in-linear-counting-hierarchy
kind: lemma
title: "Logspace predicates in a fixed linear counting hierarchy level"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-qc-unbounded-error-time-space-counting-model
  - lem-qc-unbounded-error-tie-normalization
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Allender et al., Time-Space Tradeoffs in the Counting Hierarchy, proof of Lemma 5, step 2"
      url: https://people.cs.rutgers.edu/~allender/papers/tradeoff.pdf
proof_strategy: direct
---

## Statement

Every language in conventional deterministic logarithmic space lies in $\mathrm{LCH}_{\mathrm{seq},k}$ and $\mathrm{LCH}_{\mathrm{basis},k}$ for some fixed integer $k$. Here logarithmic space has its standard uniformity meaning: the read-only input positions are bounded by endmarkers, and any input-address register counts toward workspace. The level may depend on the fixed predicate machine. This statement is used for the standard logspace wiring predicate of polynomial-size circuits.


## Facts & Assumptions

**Given:** a fixed conventional deterministic logarithmic-space predicate machine, with bounded read-only input positions and any explicit input-address registers charged to workspace.

[F1] [[def-qc-unbounded-error-time-space-counting-model]] fixes the oracle and input-access conventions for each LCH level.

## Proof


1.1 Fix the machine. Its input-head positions, finite state and logarithmic workspace have at most $n^c$ configurations, for a fixed integer $c$. A halting deterministic computation cannot repeat a configuration, so increase $c$ to bound its running time by $n^c$. Make both halting states absorbing. A configuration has $O(\log n)$ bits, including the conventional bounded input positions, charged input-address registers if used, finite state and work symbols. Small input lengths can be decided separately. [F1, given, construct]

2.1 Put $b=\lfloor\sqrt n\rfloor$ for sufficiently large $n$. To assert that configuration $u$ reaches $v$ in exactly $\ell$ steps, existentially specify $b-1$ intermediate configurations. Divide $\ell$ into $b$ consecutive intervals whose lengths differ by at most one. Universally select one interval and assert the corresponding endpoint reachability for that shorter length. This equivalence follows by taking the actual intermediate configurations in the forward direction and concatenating all verified segments in the reverse direction. Iterate for a fixed $r>2c$ levels; continue until the selected interval has bounded constant length. Indeed the recurrence $\ell_{j+1}\le\ell_j/b+1$ gives $\ell_r\le n^c/b^r+2$, bounded by three for a sufficiently large fixed $r>2c$. At each level the existential list uses $O(\sqrt n\log n)$ bits, and the universal index uses $O(\log n)$ bits. Zero-length intervals demand equal endpoints. [step 1.1, construct, induction]

3.1 A fixed-level verification takes $O(n)$ sequential time. The machine reads/copies $x$ and checks the short configuration list by sequential scans. To pass a selected subproblem to its next level it writes $x$, the two selected endpoints and the interval length, using $O(n)$ symbols. At a leaf it initializes the fixed simulated tapes from the endpoint and moves the input head to its specified position by a scan of length at most $n$; it then simulates at most three transitions and checks the endpoint in $O(n)$ total time. If the conventional logspace predicate uses bounded random-access input queries, each of these constantly many queries can be performed by a sequential scan of $x$ of length $O(n)$. This makes no near-linear sequential simulation claim for an entire random-access computation. Arithmetic on the $O(\log n)$-bit interval lengths costs a fixed polylogarithmic amount, absorbed by $O(n)$. [step 2.1, F1, construct]

4.1 Convert the constant alternating sequence to a fixed finite number of linear probabilistic oracle levels. For an existential block of $s=O(n)$ guessed bits with oracle-verifiable predicate $B$, use one extra fair bit: on branch 0 accept unconditionally; on branch 1 guess those $s$ bits and accept exactly when $B$ holds. Padding both branches to $s$ bits gives acceptance probability $1/2+\#B/2^{s+1}$, strictly above half precisely when a witness exists. Universal blocks are complements of existential blocks with complemented predicates. Complement is available with linear overhead by [[lem-qc-unbounded-error-tie-normalization]]: for a machine with exactly $R$ fair bits and acceptance probability $p$, first reject on the all-zero $(R+2)$-bit selector and otherwise run that machine. Its new acceptance probability $(1-2^{-(R+2)})p$ has the original strict-majority decision and never ties, since an original positive gap is at least $2^{-R}$. Exchanging accepting and rejecting labels therefore decides the complement. The same proof uses exact oracle answers and relativizes. Query lengths and per-level work are $O(n)$ by step 3.1; a fixed tagged union of the needed oracle predicates lies at their maximum level, after padding lower levels by dummy queries. Thus finitely many levels suffice. Finally existentially select the accepting endpoint at time $n^c$ and apply the reachability predicate. This decides the original machine's language in sequential $\mathrm{LCH}_k$ for some fixed $k$. Sequential fixed-tape machines embed into the published binary multihead profile with a fixed number of interleaved tracks: neighboring cells are a fixed stride apart, so local moves take constant time. This embeds each sequential hierarchy level into the corresponding published-profile level as well. [step 1.1, step 2.1, step 3.1, construct, induction] ∎

