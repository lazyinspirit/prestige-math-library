---
id: lem-space-bounded-machines-have-exponentially-many-configurations
kind: lemma
title: "A machine using space s(n) has at most exponentially many configurations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-worst-case-time-and-space-complexity, def-multitape-and-nondeterministic-machines]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Eric Blais, Models of Computation, 17. Space Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/space"
---

## Statement

Let $M$ be a fixed $k$-tape deterministic or nondeterministic Turing machine,
and fix an input $x$ of length $n$. Then there is a constant $c_M>0$ such that
if every branch of $M$ on $x$ visits at most $s(n)\ge 1$ tape cells, then the
number of configurations that can arise on input $x$ is at most
$2^{c_M s(n)}$.

## Facts & Assumptions

**Given:** a fixed $k$-tape machine $M$, an input $x$ of length $n$, and a bound $s:=s(n)\ge 1$ on the number of visited cells.

[L1] A multitape machine has a finite state set, finitely many tape alphabets, and one head position on each tape ([[def-multitape-and-nondeterministic-machines]]).

[L2] Worst-case space is the total number of tape cells ever visited during a halting computation ([[def-worst-case-time-and-space-complexity]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], once the input $x$ is fixed a configuration of $M$ is determined by the current state, the $k$ head positions, and the symbols on the cells that have been visited so far: every unvisited work-tape cell is still blank, and every unvisited input-tape cell still carries its fixed symbol from $x$. By [L2], at most $s$ tape cells are ever visited in total. [L1, L2, given]

2.1 Let $Q$ be the finite state set and let $\Gamma$ be a common finite upper bound for the tape alphabets. Step 1.1 gives at most $|Q|$ choices for the state, at most $(s+1)^k$ choices for the head positions, and at most $|\Gamma|^s$ choices for the symbols on the visited cells. Hence the total number of configurations that can arise on input $x$ is at most $|Q|(s+1)^k|\Gamma|^s$. [step 1.1, algebra]

3.1 Because $M$ is fixed, the constants $|Q|$, $k$, and $|\Gamma|$ are fixed. For $s\ge 1$ there is therefore a constant $c_M$ with $|Q|(s+1)^k|\Gamma|^s\le 2^{c_M s}$. This proves the claimed exponential bound. [step 2.1, algebra] ∎
