---
id: lem-space-diagonal-machine-halts
kind: lemma
title: "The space-diagonal machine halts"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-space-bounded-universal-simulation, def-dtime-ntime-dspace-and-nspace]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local proof and prerequisite repair; not independent review or a whole-closure audit"
    delegated_by: owner
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, §3.2 and §4.1"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $s:\mathbb N\to\mathbb N$ satisfy $s(n)\ge1$ and $n=O(s(n))$.
Assume $s$ is space constructible: some fixed deterministic machine on $1^n$
halts with the binary numeral of $s(n)$ using $O(s(n))$ all-tapes space.
Here resource bounds have the meaning of
[[def-dtime-ntime-dspace-and-nspace]].

An all-tapes diagonal procedure on a coded description/input of length $n$
can be made total in $O(s(n))$ space as follows: run the fixed universal
simulator of [[lem-space-bounded-universal-simulation]] with its entire
encoded simulation workspace capped at $s(n)$, and stop it after a
configuration bound for that fixed capped simulator. If the simulated
machine halts without a cap abort, its answer is seen before this timeout.
On an abort, malformed input, or timeout give a fixed default answer;
on a simulated halting answer the diagonal procedure may invert that answer.

The cap is on the fixed simulator's encoded configuration and scratch, not
on raw symbols of a variable-alphabet machine.

## Facts & Assumptions

**Given:** the function $s$, its fixed constructor, and the capped universal
simulator from [[lem-space-bounded-universal-simulation]].

## Proof

1.1 Determine $n$, form $1^n$, and run the constructor to obtain $B=s(n)$. This halts and uses $O(n+s(n))=O(s(n))$ space. Thereafter use the fixed capped simulator, excluding the timeout counter for now. Its coded input and binary bound, cap bookkeeping, representation, and scratch fit in $K=C(n+B+1)$ cells for a fixed integer $C$, by the simulator's cap interface. The integer $K$ itself can be computed in $O(n+B+1)$ space. [given, construct]

2.1 Let $q,k,a$ be respectively the number of states, tapes, and tape symbols of this fixed capped simulator. On its fixed input, each head is in a position below $K+1$, and each tape can be represented by its first $K+1$ symbols; all later input symbols are fixed and all later work symbols are blank. Thus it has at most $q(K+1)^k a^{k(K+1)}$ configurations. Since $K\ge1$ and $K+1\le2^K$, fix an integer $d$ large enough that this number is strictly below $2^{dK}$ for every $K\ge1$. All these constants belong to the fixed simulator, independently of the decoded adversary. [step 1.1, algebra]

3.1 Simulate at most $2^{dK}$ transitions of that capped simulator, checking halting or a cap abort at every stage. A binary counter of $dK+1$ bits suffices. If a deterministic computation repeats a configuration, its future repeats and it cannot first halt later. Consequently any halting capped computation halts before this clock expires; otherwise the procedure returns its default answer. This counts transitions of the fixed simulator itself, including its scans and scratch updates, rather than transitions of the decoded machine. [step 2.1, construct]

4.1 The constructor halts by hypothesis, and the later clock forces termination. Its counter uses $O(K)=O(n+s(n))=O(s(n))$ cells, as do the capped simulation and retained input. Therefore the resulting diagonal procedure is total in the asserted space, preserving every non-aborted simulated halting answer for inversion. [step 1.1, step 3.1, algebra] ∎
