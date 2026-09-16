---
id: thm-coordinate-functionals-of-a-schauder-basis-are-bounded
kind: theorem
title: "Coordinate functionals of a Schauder basis are bounded"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dependent-choice, def-partial-sum-projections-and-basis-constant, lem-schauder-coefficient-space-is-banach, thm-bounded-inverse-theorem]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Thomas Schlumprecht, Course Notes in Functional Analysis, Math 655"
      url: "https://people.tamu.edu/~t-schlumprecht/course_notes_math655_23c.pdf"
      locator: "Definition 3.1.4 and Theorem 3.1.6, printed pp.65-68; coefficient-space bounded-inverse route used here"
pipeline_run: phase-2-next-18
---

## Statement

Assume DC. If $(e_n)_{n\ge1}$ is a Schauder basis of a Banach space $X$, then
every coordinate functional $e_n^*$ and every partial-sum projection $P_N$ is
bounded. Moreover

$$K:=\sup_{N\ge0}\|P_N\|<\infty.$$

## Facts & Assumptions

[A1] The Axiom of Dependent Choice holds ([[def-dependent-choice]]).

[L1] The coefficient space $E$ is Banach and its summation map $S:E\to X$ is a bounded linear bijection ([[lem-schauder-coefficient-space-is-banach]]).

[L2] Under DC, a bounded linear bijection between Banach spaces has bounded inverse ([[thm-bounded-inverse-theorem]]).

[L3] $P_Nx=\sum_{n\le N}e_n^*(x)e_n$ and the basis constant is the supremum of their norms ([[def-partial-sum-projections-and-basis-constant]]).

## Proof

**Proof technique:** direct.

**Given:** The objects and hypotheses in the Statement.

1.1 Apply [L2] to [L1]. The only choice use is [A1], through that bounded-inverse [given, L2, L1, A1] theorem. Thus $S^{-1}:X\to E$ is bounded. [A1, L1, L2]

2.1 Truncation $Q_N:E\to E$, $(a_n)\mapsto(a_1,\ldots,a_N,0,\ldots)$, satisfies $\|Q_Na\|_E\le\|a\|_E$, because every partial sum of $Q_Na$ is a partial sum of $a$. Since $P_N=SQ_NS^{-1}$ and $\|S\|\le1$, [given, L1, L3, step 1.1]

$$\|P_N\|\le\|S^{-1}\|$$

for every $N$, including $N=0$. Hence $K<\infty$. [L1, L3, step 1.1]

3.1 For $n\ge1$, [given, L3, step 2.1]

$$e_n^*(x)e_n=(P_n-P_{n-1})x.$$

Because $e_n\ne0$, taking norms gives $|e_n^*(x)|\le(\|P_n\|+\|P_{n-1}\|)\|x\|/\|e_n\|$. Thus every $e_n^*$ is bounded. [L3, step 2.1] ∎
