---
id: thm-supporting-lines-for-convex-functions
kind: theorem
title: "Every slope between the left and right derivatives of a convex function gives a supporting line"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-supporting-line-for-a-real-function, thm-one-sided-derivatives-of-convex-functions]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "R. Gardner, Convex Functions, Notes 6.6"
      url: "https://faculty.etsu.edu/gardnerr/5210/notes/6-6.pdf"
pipeline_run: null
---

## Statement

Let $f:I\to\mathbb R$ be convex on an open interval, let $c\in I$, and let $m$ satisfy $f'_-(c)\le m\le f'_+(c)$. Then the line $x\mapsto f(c)+m(x-c)$ supports $f$ at $c$.

## Facts & Assumptions

**Given:** A convex $f:I\to\mathbb R$, an interior point $c$, and $f'_-(c)\le m\le f'_+(c)$.

[L1] For $u<v$, $f'_-(u)\le f'_+(u)\le (f(v)-f(u))/(v-u)\le f'_-(v)\le f'_+(v)$ ([[thm-one-sided-derivatives-of-convex-functions]]).

[L2] A line of slope $m$ supports $f$ at $c$ when $f(x)\ge f(c)+m(x-c)$ throughout the interval ([[def-supporting-line-for-a-real-function]]).

## Proof

**Proof technique:** direct.

1.1 If $x<c$, [L1] applied to $x<c$ gives $(f(c)-f(x))/(c-x)\le f'_-(c)\le m$. [L1, L2]

2.1 If $x>c$, [L1] gives $m\le f'_+(c)\le(f(x)-f(c))/(x-c)$. [step 1.1, L2, algebra]

3.1 Multiplying the inequalities in steps 1.1 and 2.1 by their positive denominators and rearranging yields $f(x)\ge f(c)+m(x-c)$ on both sides of $c$, while equality holds at $c$; hence [L2] applies. [step 1.1, step 2.1] ∎
