---
id: lem-qc-counting-time-space-to-linear-hierarchy
kind: lemma
title: "Counting time space to linear hierarchy"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-qc-unbounded-error-time-space-counting-model
  - thm-qc-uniform-threshold-iterated-integer-arithmetic
  - lem-qc-logspace-predicates-in-linear-counting-hierarchy
  - lem-qc-unbounded-error-tie-normalization
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Allender et al., Time-Space Tradeoffs in the Counting Hierarchy, Lemma 5"
      url: https://people.cs.rutgers.edu/~allender/papers/tradeoff.pdf
    - title: "Hesse, Allender, and Barrington, Uniform Threshold Circuits for Division"
      url: https://www.cs.rutgers.edu/~allender/papers/division.pdf
proof_strategy: direct
---

## Statement

For constants $\alpha>1$ and $0<\beta<1$ there is a finite integer $\tau(\alpha,\beta)$ such that $\mathrm{PrTISP}_P(n^\alpha,n^{1-\beta})\subseteq\mathrm{LCH}_{P,\tau}$ for either fixed profile $P\in\{\mathrm{seq},\mathrm{basis}\}$. The basis profile is the explicitly derived full-basis comparison, with native queries and charged operand endpoints.

## Facts & Assumptions

**Given:** fixed constants $\alpha>1$, $0<\beta<1$ and a fixed source machine in one declared profile with the stated asymptotic time and space bounds.

[F1] [[def-qc-unbounded-error-time-space-counting-model]] fixes both profiles, charged erased index emission and the strict machine threshold.

[F2] [[thm-qc-uniform-threshold-iterated-integer-arithmetic]] supplies DLOGTIME-uniform addition and logspace-uniform multiplication, with explicit bit-array encodings.

[F3] [[lem-qc-logspace-predicates-in-linear-counting-hierarchy]] puts the fixed logspace multiplication wiring predicate in a fixed level of either hierarchy.

[F4] [[lem-qc-unbounded-error-tie-normalization]] permits linear-overhead complement of strict-majority machines and relativizes to exact oracles.

## Proof


1.1 Choose fixed rational $a>\alpha$ and $0<\gamma<\beta$. Outside finitely many lengths, the source time and space are bounded by the computable integers $T=\lceil n^a\rceil$ and $S=\lceil n^{1-\gamma}\rceil$; fixed machine constants are absorbed by these strict exponent margins. Decide the finitely many remaining strings by a hardwired finite table. Pad every random branch to the common clock $T$, consuming suffix bits in its halted state without changing its outcome. Time-stamp configurations. In the basis profile, keep each unread write-only index only through its numeric prefix saturated at $S+1$ for any work-head or native-query endpoint target. Appending a bit cannot decrease an overflowing value, and such a value is never used on a true $S$-space computation. For an input target saturate at $n+T+1$; an overflowing input jump stays beyond the input during every remaining local step, so a FAR marker returns blank until the next jump. Index tapes cannot read their emitted length or contents before use; leading zeroes and discarded overflow bits therefore have no other observable effect. Their reset returns the numeric prefix to zero. Current input positions up to $n+T+1$ and FAR markers use logarithmic length. The fixed number of indices contributes only $O(\log T+\log n)$ bits. Their descriptions have $O(S+\log T+\log n)$ bits and there are $2^{O(S+\log T+\log n)}$ of them. The accepting probability is the sum of path counts from the initial configuration to all accepting clock-$T$ configurations divided by $2^T$. The strict threshold is therefore comparison with $2^{T-1}$. [F1, given, construct]

2.1 Put $q=\lceil n^\gamma\rceil$. For a segment of length $\ell$, split its time interval into $q$ consecutive intervals differing in length by at most one, sum over the $q-1$ checkpoint configurations, and multiply the corresponding segment path counts. Concatenation of the component paths bijects with the original paths, so this arithmetic identity counts each path exactly once, including parallel fair-bit edges. Each checkpoint tuple has $O(q(S+\log T+\log n))=O(n)$ bits. At each stage the sum fan-in is at most $2^{O(n)}$ and each product fan-in is $q$, polynomial in $n$. After a fixed $r>a/\gamma$ stages, segment lengths are bounded by a constant because the recurrence $\ell'\le\ell/q+1$ has bounded rounding sum. Count the constantly many bottom transitions directly by enumerating their constantly many bit strings. Sum the top counts over accepting endpoint configurations. This gives constant-depth arithmetic circuits of size $2^{O(n)}$. Every count and every padded input/output word needed in a fixed number of arithmetic substitutions has polynomially many bits. [step 1.1, construct, algebra]

3.1 Substitute the arithmetic circuits of [F2]. Addition subcircuits may have exponentially many polynomial-width operands: DLOGTIME uniformity in their own size decides their local wiring in $O(n)$ time on $O(n)$-bit addresses. Multiplication subcircuits have only $q$ polynomial-width operands, so their own input size is polynomial in $n$; their logspace gate-address predicate uses $O(\log n)$ space. By [F3] that predicate lies in a fixed sequential $\mathrm{LCH}_k$. Arithmetic-level checkpoint wiring and the bottom transition predicates are decidable in $O(n)$ sequential time from the full labels and $x$: each configuration has sublinear length. To check a native query transition, scan its work-address block, cap its numerical input index at n+1 and scan x at the indicated valid position; this costs O(S+n)=O(n). Only a constant number of transitions are checked at a bottom leaf. Thus the resulting constant-depth Boolean circuit has $2^{O(n)}$ gates with $O(n)$-bit labels and a fixed-$\mathrm{LCH}$ adjacency/type/input predicate. The exact output comparison with $2^{T-1}$ is an additional constant-depth Boolean layer: test the highest bit or the indicated lower bits lexicographically, using their known threshold word. [F2, F3, step 2.1, construct]

4.1 Evaluate these circuits by induction on their constant depth. Sample uniformly an $O(n)$-bit candidate predecessor label. For a strict-majority gate, a nonedge contributes an independent unbiased acceptance bit and an edge contributes the predecessor value. The acceptance probability is above half exactly when strictly more than half of the actual predecessors are true; neutral nonedges cancel exactly. For an ordinary at-least-half MAJ gate, instead use complemented predecessor values in this procedure, then apply [F4] and exchange the outcomes; this accepts exactly when at least half of actual predecessors are true. OR is existential truth of an adjacent true predecessor: branch 0 accepts unconditionally and branch 1 samples a label and accepts exactly on an adjacent true predecessor, giving strict majority exactly when such a label exists. For AND, form the analogous OR test for a false predecessor, apply [F4] to remove its possible tie when no such predecessor exists, and exchange the outcomes. NOT queries and inverts its unique predecessor. These formulas also give the correct empty AND/OR conventions if such gates occur. All oracle query strings and random choices have $O(n)$ length; no rank-selected predecessor enumeration is assumed. Tagged unions of the adjacency and lower-depth predicates fit in the maximum of their fixed levels, since a lower-level machine can be padded by an unused query. Tie normalization relativizes because it treats every oracle answer as exact. Thus each depth adds only a fixed finite number of hierarchy levels. [F1, F3, F4, step 3.1, construct, induction]

5.1 The depth bound depends only on $\alpha,\beta$ and the fixed arithmetic constructions. The multiplication adjacency predicate and its hierarchy level are fixed independently of the simulated machine; its transition table changes only the constants in deterministic linear-time local checks. Hence a fixed finite $\tau(\alpha,\beta)$ works for the class containment. Its output gate decides the strict acceptance threshold in step 1.1. This proves the containment. [step 1.1, step 3.1, step 4.1] ∎

