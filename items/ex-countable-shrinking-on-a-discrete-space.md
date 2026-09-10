---
id: ex-countable-shrinking-on-a-discrete-space
kind: example
title: A countable shrinking computed
status: draft
origin: pipeline
deps: [def-countable-paracompactness-and-dowker-space]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "K. P. Hart, Set-Theoretic Topology, Chapter 4 §3 Theorem 3.3(3), p. 27; discrete specialization"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf
---

## Example

In a discrete space every decreasing closed sequence $(F_n)$ with empty intersection is its own open expansion: $G_n=F_n$ has $\overline{G_n}=F_n$. Explicitly, on discrete $\omega$ take $F_n=\{m\in\omega:m\ge n\}$ and $G_n=F_n$. No choice axiom is needed.

## Facts & Assumptions

**Given:** A discrete space $X$ (every subset is open), and decreasing closed $F_n\subseteq X$ with empty intersection; in the displayed instance $X=\omega$ and $F_n=\{m:m\ge n\}$.

[F1] Countable paracompactness asks for a locally finite open refining cover of each countable open cover ([[def-countable-paracompactness-and-dowker-space]]).

## Verification

1.1 In a discrete space complements of subsets are open, so every subset is also closed. Thus $G_n=F_n$ is open, contains $F_n$, and has $\overline{G_n}=F_n$. Consequently $\bigcap_n\overline{G_n}=\bigcap_nF_n=\varnothing$. The same equations hold when $F_n$ or $X$ is empty. [given, algebra]

2.1 For the instance on $\omega$, $F_0=\omega$, $F_1=\omega\setminus\{0\}$, and $F_{n+1}\subseteq F_n$. For each $m\in\omega$, $m\notin F_{m+1}$, proving the empty intersection despite every $F_n$ being nonempty. The singleton family $\{\{m\}:m\in\omega\}$ is an open refining cover of every open cover: a member containing $m$ also contains $\{m\}$. The neighborhood $\{m\}$ meets exactly one singleton, so the family is locally finite, verifying countable paracompactness directly. No simultaneous selection of cover members is involved. QED. [F1, step 1.1]
