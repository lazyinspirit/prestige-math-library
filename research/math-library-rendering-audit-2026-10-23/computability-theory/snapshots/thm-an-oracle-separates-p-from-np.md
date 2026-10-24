---
id: thm-an-oracle-separates-p-from-np
kind: theorem
title: "An oracle separates p from np"
status: published
origin: pipeline
deps: [lem-oracle-diagonalization-finite-extension]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora–Barak, Computational Complexity, 2007 draft; §3.5 Theorem3.9, pp71–72."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

There is a total oracle $B$ for which $P^B\ne NP^B$. In fact $L_B=\{1^n:B\cap\{0,1\}^n\ne\varnothing\}$ lies in $NP^B\setminus P^B$.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] Let $c$ be a finite partial assignment of membership bits to binary words, and let $M$ be a deterministic oracle machine with a fixed polynomial clock $p(n)$. There exist $n\ge1$ and a finite extension $c'$ of $c$ such that every total oracle $B$ extending $c'$ makes $M^B(1^n)$ disagree with membership in $L_B=\{1^j:B\cap\{0,1\}^j\ne\varnothing\}$. ([[lem-oracle-diagonalization-finite-extension]]).


## Proof

1.1 Enumerate all deterministic oracle programs paired with clocks $(n+2)^a+a$, for positive integers $a$. Every polynomial-time oracle decider agrees with some clocked program for its oracle. Starting with no commitments, apply the finite-extension lemma once to each pair, always preserving all prior commitments. Let $B$ have precisely the words ever assigned YES; all other words receive NO. This is a consistent total extension of every stage. [F1]

2.1 At the assigned input the corresponding clocked program fails by the lemma, so no polynomial-time $B$ decider decides $L_B$. A nondeterministic machine rejects nonunary inputs, guesses one $n$-bit word on $1^n$, and asks whether it belongs to $B$. It accepts exactly $L_B$ within polynomial time; at $n=0$ it queries the empty word. Thus the separation follows. [F1, step 1.1] ∎
