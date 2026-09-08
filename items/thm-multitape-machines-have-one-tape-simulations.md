---
id: thm-multitape-machines-have-one-tape-simulations
kind: theorem
title: "Every fixed multitape Turing machine has an equivalent one-tape simulation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-multitape-and-nondeterministic-machines, def-language-recognized-and-decided, def-partial-function-computed-by-a-machine]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local one-tape stay-put elimination and direct prerequisite audit; not independent review"
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 6: TM Variants, Church-Turing Thesis"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/7405f6112c8ca7242e1edd9a021c1e63_MIT18_404f20_lec6.pdf"
    - title: "Charles Brubaker and Lance Fortnow, Church-Turing Thesis lesson notes"
      url: "https://s3.amazonaws.com/content.udacity-data.com/courses/gt-cs6505/churchturing.html"
---

## Statement

Fix $k\ge 1$. For every deterministic $k$-tape Turing machine $M$, there is a
deterministic one-tape Turing machine $S_M$ that, on every input, has the same
accept, reject, diverge, and output behavior as $M$.

## Facts & Assumptions

**Given:** A fixed integer $k\ge 1$ and a deterministic $k$-tape Turing machine $M$.

[L1] A deterministic $k$-tape Turing machine has $k$ right-infinite tapes, $k$ head positions, and one simultaneous move on each tape at each step, by [[def-multitape-and-nondeterministic-machines]].

[F1] For this theorem, extend the standard terminology to a deterministic multitape machine by using its accept, reject, and divergence behavior for recognition and decision, and by treating its first tape as the output tape for partial-function computation. These are exactly the clauses of [[def-language-recognized-and-decided]] and [[def-partial-function-computed-by-a-machine]], with "tape" replaced by "first tape" in the output clause.

## Proof

**Proof technique:** direct.

1.1 Enlarge the simulator's finite tape alphabet by fresh delimiters and marked copies of the simulated symbols. On its ordinary input, $S_M$ first makes finitely many sweeps to write $k$ blocks separated by `#_1,\dots,#_{k-1}`. A block records the simulated tape prefix from cell $0$ through at least both its head and its rightmost nonblank cell, and exactly one recorded symbol is marked to indicate the head. The first block initially records the input (or one marked blank for empty input), and every other block initially consists of one marked blank. Thus initialization terminates and the encoding invariant represents the entire finite-support contents and head position of every simulated tape. [L1, given, construct]

2.1 In one simulation cycle, the one-tape machine $S_M$ first scans once from left to right, reads the $k$ marked symbols, and stores in its finite control the unique transition of $M$ determined by the current state and those symbols. [L1, step 1.1, construct]

3.1 The machine then makes finitely many return sweeps, rewrites each old marked symbol, and places its new mark at the simulated successor head position. A left move from simulated cell $0$ leaves the mark at that cell, matching the library's clamped left boundary. If a right move leaves the recorded prefix, $S_M$ shifts the delimiter and the entire encoded suffix following that block one cell right (or extends the last block into the blank suffix) and inserts a marked blank cell. These operations preserve all later blocks and restore the invariant from step 1.1. [L1, step 2.1, construct]

4.1 After the passes from steps 2.1 and 3.1, the encoding represents precisely the next $k$-tape configuration of $M$. If the simulated state is halting, $S_M$ postpones entering its own halting state while it copies the first block cell-for-cell, with the mark removed and internal blank cells preserved, to tape cells beginning at $0$, and erases every later cell, delimiter, and auxiliary symbol. It then enters the corresponding halting state. Hence its final tape is exactly the simulated first tape, not merely a compaction of its nonblank symbols. Induction on simulated steps now proves identical acceptance, rejection, divergence, and first-tape output on every original input. [step 1.1, step 2.1, step 3.1, construct]

4.2 Eliminate any temporary stay-put motion in the one-tape bookkeeping as follows. Replace each instruction that writes $b$, stays, and enters state $p$ by an instruction that writes $b$, moves right, and enters a fresh auxiliary state remembering $p$. For every symbol $c$ read in that state, write $c$ unchanged, move left, and enter $p$. The intermediate head position is at least $1$, so the left move returns to the original cell even when that cell was $0$. The tape contents and original head position are restored after the two-step macro; if $p$ is halting, it is entered only on the second step. The finite set of source instructions gives finitely many new states, and every macro terminates, preserving divergence as well as both halting outcomes and the final tape. [L1, step 3.1, construct]

5.1 Hence the matching behavior in step 4.1 means, by [F1], that $S_M$ recognizes and decides the same languages and computes the same partial functions as $M$. [F1, step 4.1, step 4.2] ∎
