---
id: thm-schur-monochromatic-sum
kind: theorem
title: "Schur's theorem: every finite colouring of a sufficiently long positive initial interval $\\{1,\\ldots,N\\}$ has positive monochromatic $x,y,z$ with $x+y=z$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-finite-graph-ramsey-binomial-bound, def-ramsey-colouring-and-arrow-notation, def-natural-numbers, def-nat-order]
justified_by: []
aliases: []
landmark: true
short: "Schur's theorem"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "I. B. Leader, Ramsey Theory, remark after Theorem 8"
      url: "https://www.dpmms.cam.ac.uk/~par31/notes/ramsey.pdf"
pipeline_run: null
---

## Statement

For every positive number $c$ of colours there is a positive natural $N$ such that every $c$-colouring of $\{1,\ldots,N\}$ has positive $x,y,z$ of one colour satisfying $x+y=z$. The variables need not be distinct. Natural order is that of [[def-natural-numbers]] and [[def-nat-order]], and the proof uses the pair-colouring convention of [[def-ramsey-colouring-and-arrow-notation]].

## Facts & Assumptions

**Given:** A positive number $c$ of colours and a colouring of a sufficiently long positive initial interval.

[L1] For all positive $s,t$, $\binom{s+t-2}{s-1}\to(s,t)^2$ ([[thm-finite-graph-ramsey-binomial-bound]]).



## Proof

**Proof technique:** direct.

1.1 Iterating [L1] gives a finite $M$ such that every $c$-colouring of the pairs of an $M$-element set has a monochromatic triangle: separate one colour from the remaining colours, use [L1] with target $3$ for the first colour and with a recursively chosen target for the others, and continue through the finite colour list. [L1]

2.1 Colour the edge $\{i,j\}$ of the ordered vertex set $\{0,\ldots,M-1\}$, with $i<j$, by the given colour of the positive difference $j-i$. Step 1.1 gives a monochromatic triangle $i<j<k$. [step 1.1]

3.1 Put $x=j-i$, $y=k-j$ and $z=k-i$. These are positive, the edge colouring says they have one original colour, and arithmetic gives $x+y=z$. Taking $N=M-1$ contains all three differences. [step 2.1, algebra] ∎
