---
id: lem-of-square-positive
kind: lemma
title: "Squares of nonzero elements are positive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ordered-field, lem-of-mult-neg]
aliases: []
landmark: false
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Innsbruck notes: Ordered fields"
      url: "https://www.uibk.ac.at/media/filer_public/28/02/280225fd-dde6-4e9c-bff6-baad33ff4a05/ragen.pdf"
pipeline_run: null
proof_strategy: cases
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$. For
every $a \in F$ with $a \neq 0$ we have $a^2 > 0$, where $a^2 = a \cdot a$. In
particular, every nonzero square is positive.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and an element $a \in F$ with $a \neq 0$.

[L1] $x > 0 \iff x \in P$, and by trichotomy for $a \neq 0$ exactly one of $a \in P$, $-a \in P$ holds ([[def-ordered-field]]).

[L2] $P$ is closed under multiplication: if $u, v \in P$ then $uv \in P$ (axiom O2 of [[def-ordered-field]]).

[L3] In any field, $(-u)(-v) = uv$ ([[lem-of-mult-neg]]).

## Proof

**Proof technique:** cases.

1.1 Since $a \neq 0$, trichotomy leaves exactly two possibilities: $a \in P$ or $-a \in P$. [L1]

2.1 Case $a > 0$: then $a \in P$, so closure gives $a \cdot a \in P$, i.e. $a^2 > 0$. [assume-case pos, step 1.1, L2, L1]

2.2 Case $a < 0$: then $-a \in P$, so closure gives $(-a)(-a) \in P$; since $(-a)(-a) = a \cdot a = a^2$ by L3, we get $a^2 \in P$, i.e. $a^2 > 0$. [assume-case neg, step 1.1, L2, L3, L1]

3.1 The cases $a > 0$ and $a < 0$ exhaust all of $a \neq 0$ by trichotomy, and both yield $a^2 > 0$. [cases-exhaustive, step 2.1, step 2.2] ∎
