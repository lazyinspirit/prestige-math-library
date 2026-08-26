---
id: cor-compositions-with-k-parts-are-counted-by-binomial-coefficients
kind: corollary
title: "Compositions of $n$ into $k$ positive parts are counted by $\\binom{n-1}{k-1}$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-compositions-have-generating-function-x-over-one-minus-two-x, thm-stars-and-bars]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 5: Combinatorial Constructions"
      url: "https://enumeration.ca/toolbox/combinatorial-constructions/"
pipeline_run: null
---

## Statement

Let $n,k \in \mathbb{N}$ with $n \ge 1$ and $k \ge 1$. Then the number of
compositions of $n$ into exactly $k$ positive parts is

$$\binom{n-1}{k-1}.$$

When $k>n$, there are no such compositions.

## Facts & Assumptions

**Given:** Naturals $n \ge 1$ and $k \ge 1$.

[L1] The previous corollary identifies a composition as a finite sequence of positive integers ([[cor-compositions-have-generating-function-x-over-one-minus-two-x]]).

[L2] For $m \ge 1$, the number of weak compositions of $N$ into $m$ parts is $\binom{N+m-1}{m-1}$ ([[thm-stars-and-bars]]).

## Proof

**Proof technique:** direct.

1.1 A composition $(c_1,\dots,c_k)$ of $n$ into $k$ positive parts determines a weak composition $(c_1-1,\dots,c_k-1)$ of $n-k$ into $k$ parts, and conversely adding $1$ to every part of a weak composition of $n-k$ into $k$ parts recovers a composition of $n$ into $k$ parts. If $k>n$, no such composition exists, because $c_1+\cdots+c_k \ge 1+\cdots+1 = k > n$. [L1, construct, algebra]

2.1 When $k \le n$, step 1.1 and [L2] give $\binom{(n-k)+k-1}{k-1} = \binom{n-1}{k-1}$ compositions. Together with the empty case from step 1.1, this proves the claim. [step 1.1, L2, algebra] ∎
