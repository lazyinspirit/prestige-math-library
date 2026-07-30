---
id: fs-every-subnet-of-a-sequence-is-a-subsequence
kind: false-statement
title: "FALSE: every subnet of a sequence is a subsequence"
status: published
origin: session
deps: [def-subnet, lem-index-map-grows, def-net-eventually-and-frequently, def-sequence-convergence-top, def-standard-topologies]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Schlumprecht, Math 655 notes"
      url: "https://people.tamu.edu/~t-schlumprecht/course_notes_math655_23c.pdf"
pipeline_run: null
---

## Statement

**FALSE.** Every subnet of a sequence is a subsequence.

## Facts & Assumptions

**Given:** The discrete topological space $\mathbb N$ and its identity sequence $x_n=n$.

[A1] A subnet may use any eventually cofinal index map; it need not use a strictly increasing map ([[def-subnet]]).

[A2] A subsequence of $x$ is a composite $x\circ h$ with $h:\mathbb N\to\mathbb N$ strictly increasing; such an $h$ is injective ([[lem-index-map-grows]]).

## Refutation

**Proof technique:** direct.

1.1 Put $\phi(0)=0$ and $\phi(k)=k-1$ for $k\ge1$, and let $y_k=x_{\phi(k)}$. For every $n$, all $k\ge n+1$ satisfy $\phi(k)=k-1\ge n$, so $\phi$ is eventually cofinal and $y$ is a subnet of $x$. [A1]

2.1 The subnet has $y_0=y_1=0$. Every subsequence of the injective identity sequence is injective by [A2], so $y$ cannot be a subsequence of $x$. [step 1.1, A2]

3.1 Thus the stated universal claim is false. [step 2.1] ∎
