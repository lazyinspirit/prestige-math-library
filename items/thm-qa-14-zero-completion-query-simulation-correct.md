---
id: thm-qa-14-zero-completion-query-simulation-correct
kind: theorem
title: Zero-completed query simulation is exact and uses one raw query
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - alg-qa-14-zero-completion-query-simulation
  - def-qa-14-boolean-search-query-model
  - def-qa-standard-bit-query
  - alg-qc-reversible-embedding
  - thm-qc-reversible-embedding-cost
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-toffoli-and-fredkin
  - def-qc-register-and-computational-basis
proof_strategy: direct
axiom_use: None; the proof checks finitely many computational-basis states and extends by linearity.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 1, §1.4, PDF pp.10–11: reversible computation and clean oracle conversion."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 2, §§2.1.2–2.4, PDF pp.22–33: standard XOR query convention."
---

## Statement

For $N\ge1$ and $M=2^m$ with $N\le M<2N$, the procedure of [[alg-qa-14-zero-completion-query-simulation]] implements exactly one zero-completed XOR query per raw $N$-address query, restores all scratch registers, and uses no controlled oracle call.

## Facts & Assumptions

**Given:** The finite address registers, the raw XOR action on addresses $0,\ldots,N-1$, the procedure instructions, and clean scratch registers.

[F1] [[alg-qa-14-zero-completion-query-simulation]]: for $N=M$ it makes one direct raw query and returns; for $N<M$ it computes $v=[j<N]$, routes a clean $N$-level raw-address register $Q_N$ to $q=j$ if valid and $q=0$ otherwise by a finite controlled basis permutation, prepares a fresh response helper in $|+\rangle$ from $|0\rangle$, swaps it with the caller's response only when valid, makes one raw query, reverses the response swap, applies $H$ to return the helper to $|0\rangle$, and reverses the routing and comparison operations.

[F2] [[def-qa-14-boolean-search-query-model]]: on a valid raw address $q$, $O_x|q,b\rangle=|q,b\oplus x_{q+1}\rangle$.

[F3] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: $H|0\rangle=|+\rangle$.

[F4] [[def-qc-toffoli-and-fredkin]]: a Fredkin gate swaps its two target bits exactly when its control bit is $1$.

[F5] [[alg-qc-reversible-embedding]] and [[thm-qc-reversible-embedding-cost]]: the finite Boolean comparison circuit computes the validity bit reversibly into a clean target and restores its work bits by reversing its explicit gate list. The $N$-level raw-address routing is the finite basis permutation specified directly in [F1].

## Proof

1.1 If $N=M$, the procedure returns after one direct raw oracle call, which has the required action. Suppose $N<M$. The comparison recurrence maintains $E_r=1$ exactly when the first $r$ bits of $j$ and $N$ agree, and $L_r=1$ exactly when the first differing bit has $j$-bit $0$ and $N$-bit $1$. Induction on $r$ therefore gives $v=L_m=1$ iff $j<N$. The controlled transpositions in [F1] preserve $j$ and $v$ and send a clean $Q_N$ basis state $|0\rangle$ to $|j\rangle$ when $v=1$ and $j<N$, and leave it at $|0\rangle$ otherwise. Thus the raw query address is an $N$-level basis state that equals $j$ on valid padded addresses and $0$ on invalid ones. [given, F1, F5, induction, algebra]

1.2 In the $N<M$ branch, when $v=1$, [F4] swaps the caller's response $b$ into $r$; the raw oracle then changes it to $b\oplus x_{j+1}$, and reversing the swap returns exactly this bit to the caller and leaves $r=|+\rangle$, which the final $H$ maps to $|0\rangle$. When $v=0$, the route sets $q=0$, which is valid because $N\ge1$, while $r=|+\rangle$; the raw query applies either $I$ or $X$ to $r$, both of which fix $|+\rangle$, and the caller's response is unchanged. The final $H$ again returns $r$ to $|0\rangle$. [F1, F2, F3, F4, algebra]

2.1 The raw oracle preserves its address, so the inverse controlled routing permutation clears $Q_N$ after the response swap is undone. By step 1.2 the helper response is then $|+\rangle$, so the prescribed $H$ has returned it to $|0\rangle$. Reversing the comparison circuit clears $v$ and its work registers. In both branches the resulting action on each padded-address basis state is $|j,b\rangle\mapsto|j,b\oplus x_{j+1}\rangle$ for $j<N$ and $|j,b\rangle\mapsto|j,b\rangle$ for $j\ge N$; linearity gives the same zero-completed action on every superposition. Exactly one raw oracle call occurred in either branch, and no controlled call was used. [F1, F2, F3, F4, F5, step 1.1, step 1.2, algebra] ∎
