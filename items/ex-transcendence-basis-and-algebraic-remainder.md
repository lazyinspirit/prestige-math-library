---
id: ex-transcendence-basis-and-algebraic-remainder
kind: example
title: "A transcendence basis of k(s, t, sqrt(s+t)) over k"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-maximal-algebraically-independent-subset-is-a-transcendence-basis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 9"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Example

Let $K=k(s,t,\sqrt{s+t})$, where $s$ and $t$ are algebraically independent over
$k$. Then $\{s,t\}$ is a transcendence basis of $K$ over $k$.

## Facts & Assumptions

**Given:** A field $k$, algebraically independent elements $s,t$ over $k$, and $u=\sqrt{s+t}$.

[L1] An algebraically independent set is a transcendence basis once the ambient field is algebraic over the generated field ([[lem-maximal-algebraically-independent-subset-is-a-transcendence-basis]]).

## Verification

**Proof technique:** direct.

1.1 The set $\{s,t\}$ is algebraically independent over $k$ by construction, so $k(s,t)$ is a rational function field in two variables. [given]

2.1 The remaining generator $u$ satisfies the polynomial $X^2-(s+t)\in k(s,t)[X]$, so $u$ is algebraic over $k(s,t)$. Since $K=k(s,t,u)$, the whole field $K$ is algebraic over $k(s,t)$. [step 1.1, given]

3.1 Therefore [L1] shows that $\{s,t\}$ is a transcendence basis of $K$ over $k$. [L1, step 2.1] ∎
