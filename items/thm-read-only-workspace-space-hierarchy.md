---
id: thm-read-only-workspace-space-hierarchy
kind: theorem
title: "The read-only-workspace space hierarchy theorem"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-read-only-input-workspace-classes, lem-effective-enumeration-of-clocked-machines, lem-read-only-workspace-universal-simulation, lem-read-only-workspace-diagonal-machine-halts, def-asymptotic-resource-comparison]
proof_strategy: contradiction
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Theorem 3.2"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

If $f,g$ are work-space constructible, $\lceil\log_2(n+2)\rceil=O(f(n))$,
and $f=o(g)$, then
$$ \mathrm{DWORKSPACE}(f(n))\subsetneq\mathrm{DWORKSPACE}(g(n)). $$

## Facts & Assumptions

**Given:** $f,g$ satisfying the stated local-model hypotheses.

## Proof

**Proof technique:** contradiction.

1.1 Apply [[lem-effective-enumeration-of-clocked-machines]] with the work-space bound $f$. On a code $z$ of length $n$ for $(M,c)$, first compare the required cap $c f(n)+O(\log n)$ with a fixed fraction of $g(n)$. If it does not fit, return a fixed answer; if it fits, simulate $M(z)$ with cap $c f(n)$, stop after its finite configuration bound, and return the opposite answer. Malformed codes also receive a fixed answer. [given, construct]

2.1 The preliminary comparison and the guarded simulation use $O(g(n))$ work cells on every input. For each fixed decoded pair, the simulator and its counter use $O(f(n)+\log n)$ cells; because $f=o(g)$ and the logarithmic floor is absorbed by $f$, every sufficiently long padded code for that pair passes the guard. Thus the diagonal language lies in $\mathrm{DWORKSPACE}(g)$ without losing the eventual self-code needed below. [step 1.1, algebra]

3.1 If the diagonal language were in $\mathrm{DWORKSPACE}(f)$, choose a clock multiplier $c$ for its decider and then a sufficiently long padded code $z$ for that pair. On input $z$ the diagonal machine simulates that same decider on $z$ and returns the opposite answer, a contradiction. Since $f=O(g)$ also gives the ordinary inclusion, the containment is strict. [step 2.1, assume-contra, discharge-contradiction] ∎
