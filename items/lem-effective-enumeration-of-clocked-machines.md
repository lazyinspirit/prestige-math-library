---
id: lem-effective-enumeration-of-clocked-machines
kind: lemma
title: "Effective enumeration of clocked machines"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-efficient-universal-simulation-with-clock, def-effective-encoding-of-turing-machines]
proof_strategy: direct
verification: {precheck: pass}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Chapter 3"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Fix a total computable bound $h:\mathbb N\to\mathbb N$ and one halting
constructor for its values. There is a total effective decoding of binary
strings into pairs $(M,c)$, where $M$ is a deterministic multitape machine
and $c\ge1$ is an integer. Every pair occurs and has arbitrarily long padded
codes; malformed codes denote a fixed rejecting pair.

A decoded pair can be equipped either with a step clock $c h(|x|)$ or with
a visited-cell cap $c h(|x|)$. A step clock rejects on expiry. A cell cap
rejects before the next visit would exceed the cap, but does not by itself
force a looping computation to halt. The cap counts simulated cells, not the
constructor's or simulator's own resource use. Resource-bounded applications
must separately charge construction and simulation costs and impose their
appropriate time- or space-constructibility hypotheses.

## Facts & Assumptions

**Given:** the fixed $h$ and its constructor, and a finite binary string $z$.

## Proof

**Proof technique:** direct.

1.1 Parse $z$ into three self-delimiting fields for a machine code, a canonical positive binary integer $c$, and an ignored padding string, rejecting trailing data. Use the finite-table multitape extension in [[def-efficient-universal-simulation-with-clock]] of the total decoder in [[def-effective-encoding-of-turing-machines]]. Invalid fields return the fixed rejector pair with multiplier one. Every finite string is thereby decoded in finite time; listing all strings in length-lexicographic order gives the enumeration. [given, construct]

2.1 For each valid machine and multiplier, encoding these fields with successively longer padding supplies arbitrarily long codes for that pair. On input $x$, compute $b=c h(|x|)$ using the fixed halting constructor. A step counter enforces $b$ simulated transitions, returning a halting result if it occurs within the budget and otherwise rejecting. This is the supplied step-clock interface. [step 1.1, construct]

3.1 For a cell cap, maintain the minimum and maximum visited position on each simulated tape, together with their total interval length. Each tape head moves to an adjacent cell, so these intervals count precisely its visited cells. Include the initial visited cells, rejecting immediately if they already exceed $b$, and reject before a transition that would enlarge the total beyond $b$. This effective monitor preserves every run staying within the cap; a loop inside it may continue forever. A separate configuration clock is needed to force such a run to halt. [step 2.1, construct]

4.1 If the relevant resource use of $M$ is $O(h(n))$, some fixed positive integer $c$ bounds it for all sufficiently large $n$. The enumeration includes this pair, and its corresponding monitor then preserves those computations. No claim about exceptional small lengths where $h(n)=0$, or about the monitor's own resource overhead, is implicit. [step 3.1, algebra] ∎
