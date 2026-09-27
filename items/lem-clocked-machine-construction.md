---
id: lem-clocked-machine-construction
kind: lemma
title: "A constructible time bound yields a uniformly clocked simulator"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-effective-encoding-of-turing-machines, def-universal-turing-machine, def-time-and-space-constructible-function, lem-time-at-least-input-length-permits-complete-input-reading]
justified_by: []
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 19: Time-bounded computations"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.19.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $t:\mathbb N\to\mathbb N$ be time-constructible, and assume $n\le t(n)$ for
all sufficiently large $n$. Then for every coded deterministic machine
$e=\ulcorner M\urcorner$ there exists a deterministic machine
$\operatorname{Clock}_{e,t}$ such that, on each input $x$:

- if $M$ halts within at most $t(|x|)$ steps, then
  $\operatorname{Clock}_{e,t}$ halts with the same output;
- if $M$ has not halted by time $t(|x|)$, then
  $\operatorname{Clock}_{e,t}$ halts and rejects.

## Facts & Assumptions

**Given:** A time-constructible function $t$ and a coded deterministic machine $e=\ulcorner M\urcorner$.

[L1] Time-constructibility means that a machine can compute the binary numeral of $t(n)$ within $O(t(n))$ time on input $1^n$, by [[def-time-and-space-constructible-function]].

[L2] A universal simulator reproduces the halting outputs and divergence of the coded machine on the coded input, by [[def-universal-turing-machine]].

[L3] The machine code $e$ is an effective binary description of $M$, by [[def-effective-encoding-of-turing-machines]].

[L4] Any machine that must fully read an input of length $n$ needs at least linear time, by [[lem-time-at-least-input-length-permits-complete-input-reading]].

## Proof

**Proof technique:** direct.

1.1 On input $x$, the machine $\operatorname{Clock}_{e,t}$ first scans the whole input once to learn $|x|$. The lower bound hypothesis $n\le t(n)$ together with [L4] ensures that this preliminary scan fits inside the intended asymptotic budget. It then runs the constructor from [L1] on unary input $1^{|x|}$ to obtain the binary numeral of $t(|x|)$ and writes a counter of that size on a work tape. [L1, L4, given, construct]

2.1 Next, using the fixed code $e$ from [L3], the machine initializes the simulated configuration of $M$ on $x$. It first checks whether that configuration is already halting. Otherwise, while the counter is positive it simulates one transition, decrements the counter, and checks whether the new configuration is halting. If so, it outputs exactly what $M$ outputs, including when this was the $t(|x|)$-th transition. If the counter is zero and the simulated configuration is still nonhalting, it rejects. This is the standard clocked simulation built from the effective transition table [L3] and universal behavior in [L2]. [L2, L3, step 1.1, construct]

3.1 Step 2.1 proves the two clauses of the statement: runs of $M$ halting in at most $t(|x|)$ transitions are preserved, and overlong runs are cut off by a halting reject state. [step 2.1] ∎
