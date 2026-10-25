---
id: lem-time-at-least-input-length-permits-complete-input-reading
kind: lemma
title: "Any machine that fully reads every input of length n needs at least linear time"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-worst-case-time-and-space-complexity]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 19: Time-bounded computations"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.19.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-10-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $M$ be a $k$-tape machine, and suppose that at least one input word of
length $n$ exists and that $M$ halts on every input of that length. If, on
every such input, the accepting or rejecting branch of $M$ scans each of the
first $n$ input cells before halting, then
$$ \operatorname{Time}_M(n)\ge n. $$

## Facts & Assumptions

**Given:** A halting machine $M$, an inhabited length-$n$ input set, and the input-reading property stated above.

[L1] Worst-case running time $\operatorname{Time}_M(n)$ is the maximum number of steps over inputs of length $n$, by [[def-worst-case-time-and-space-complexity]].

## Proof

**Proof technique:** direct.

1.1 For $n=0$ the claimed lower bound is immediate. For $n\ge1$, the input head starts at cell $0$ and moves at most one cell per transition. Reaching cell $n-1$ therefore takes at least $n-1$ transitions. The hypothesis says the machine scans that cell before halting, so it must make a further transition from a nonhalting configuration scanning the cell before it can enter an accepting or rejecting state. Thus every such halting branch takes at least $n$ steps. [given]

2.1 The hypothesis says this lower bound applies on every input of length $n$, and the input set is nonempty. By [L1], its worst-case maximum is at least the time on any one such input, so $\operatorname{Time}_M(n)\ge n$. Without the nonemptiness premise the claim fails for an empty input alphabet and $n>0$, because the revised worst-case convention gives value zero. [L1, step 1.1] ∎
