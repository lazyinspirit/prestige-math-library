---
id: lem-space-bounded-universal-simulation
kind: lemma
title: "Space-bounded universal simulation"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-effective-encoding-of-turing-machines, def-dtime-ntime-dspace-and-nspace]
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
    - title: "Arora and Barak, Computational Complexity, §1.2.2, Claims 1.8--1.9"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

There is a fixed deterministic universal simulator $U$ with the following
space bound. Given a machine description and input of total binary length
$n$, if the simulated machine $M$ uses at most $S$ all-tapes cells, then $U$
uses
$$O\bigl(n+S\lceil\log_2(|\Gamma_M|+1)\rceil\bigr)$$
all-tapes cells, with an absolute constant for the fixed coding below.
Consequently, for each fixed $M$ its bound is $O_M(n+S)$; the constant may
depend on $M$. It is uniformly $O(n+S)$ for machines over one fixed alphabet.

The machine description uses the explicit finite transition-table encoding
of [[def-effective-encoding-of-turing-machines]], extended to multitape
machines by listing the tape count and every transition on a tuple of scanned
symbols. Input symbols are listed in binary with delimiters.
Space counts cells on all tapes as in
[[def-dtime-ntime-dspace-and-nspace]]. No constructibility or halting-time
bound is needed.

For hierarchy applications a supplied cell limit $B$ may instead cap the
entire encoded simulation workspace of this fixed simulator, including its
temporary scratch. Its bounded version aborts before exceeding that limit
and uses $O(n+B+1)$ all-tapes space. For each fixed $M$, if
$n+S=o(B)$, the bounded version eventually completes every simulated
transition without a space abort. No uniform $O(S)$ encoding of arbitrary
variable-alphabet symbols is asserted.

## Facts & Assumptions

**Given:** an explicitly coded deterministic multitape machine $M$, its input,
and a simulated run visiting at most $S$ cells in total.

## Proof

1.1 Decode and retain the description and input using $O(n)$ space. Write $b=\lceil\log_2(|\Gamma_M|+1)\rceil$. Represent each simulated tape by the consecutive cells from its left boundary to its furthest visited cell, storing a $b$-bit symbol and a head-marker bit in each cell block. Separate tapes by delimiters. Every tape has at least its initial cell visited, so their number is at most $S$. Store the current state by its binary index, of length at most $n$. Unvisited input symbols can be recovered from the retained input when a tape block first reaches them. Thus the complete representation has length $O(n+Sb)$. [given, construct]

2.1 For a simulated transition, scan the tape blocks to collect the marked symbols, look up the unique matching transition in the retained explicit table, and scan again to update symbols and markers. Keep old and new marker tracks distinct until the update is finished, so a head moving along a sweep is updated only once. A new rightmost cell is appended when necessary; at a left boundary clamp a left move. The scanned-symbol tuple and update tuple use $O(Sb+n)$ bits, and counters or copies of the current representation use at most the same order. Reuse all scratch after each update. Induction on simulated transitions gives the correct represented configuration at each completed update, without retaining the history. [step 1.1, construct]

3.1 This is an algorithm on a fixed finite alphabet and a fixed finite number of simulator tapes: variable simulated tape blocks reside on those tapes as delimited data. Every stage uses $O(n+Sb)$ cells, with a constant independent of $M$. For fixed $M$, $b$ is constant, giving $O_M(n+S)$; if the alphabet is fixed in advance, the same constant works uniformly for its machines. [step 1.1, step 2.1, algebra]

4.1 To cap the encoding, maintain a binary counter for the number of cells allocated to its tapes, including update scratch, and abort before that count exceeds $B$. The counter and supplied binary limit use $O(\log(B+2))$ additional cells, so the bounded version uses $O(n+B+1)$ space. For each fixed $M$ there is a constant $C_M$ bounding all workspace in steps 1.1--2.1 by $C_M(n+S)$; when $n+S=o(B)$ this lies below $B$ eventually. Hence the cap does not truncate those simulations. [step 3.1, construct, algebra] ∎
