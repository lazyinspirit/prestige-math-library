---
id: ex-time-diagonal-language-respects-its-budget
kind: example
title: "Budgeting a time-diagonal language"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-time-diagonal-language-respects-its-budget, thm-deterministic-time-hierarchy]
proof_strategy: direct
verification: {precheck: pass}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, §3.1"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Example

Fix one candidate pair $(M,c)$, with positive integer multiplier $c$, in the
clocked diagonal construction of [[lem-time-diagonal-language-respects-its-budget]].
For sufficiently long padded codes of this fixed pair, decoding, constructing
the clock $c f(n)$, and simulating it fit within any fixed positive fraction
of $g(n)$. The required padding threshold may depend on $M$ and $c$.

## Facts & Assumptions

**Given:** time-constructible $f,g$ with $n\le f(n)$ eventually and
$f\log f=o(g)$, a fixed pair $(M,c)$, and its padded codes of length $n$.

## Verification

**Proof technique:** direct.

1.1 For this fixed pair, decoding costs $O_M(n)$, clock construction costs $O_c(n+f(n))$, and simulation costs $O_M(n+c f(n)\log(c f(n)+2))$. Since $c$ is fixed and $f(n)\ge n$ eventually, their sum is $O_{M,c}(f(n)\log(f(n)+2))=o(g(n))$. [given, algebra]

2.1 Therefore, for every fixed reserve $\varepsilon>0$, there is $N_{M,c,\varepsilon}$ such that all these padded codes of length $n\ge N_{M,c,\varepsilon}$ fit within $\varepsilon g(n)$ simulation time. Complementing the terminal answer adds constant time. Shorter codes can take the construction's timeout/default branch; no common padding threshold or simulation constant over all pairs is claimed. [step 1.1, algebra] ∎
