---
id: thm-brouwer-fixed-point-theorem-for-the-disk
kind: theorem
title: "Brouwer fixed-point theorem for the closed disk"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-fixed-point-free-disk-map-produces-a-retraction, thm-no-retraction-of-the-closed-disk-onto-the-circle]
justified_by: []
aliases: []
landmark: true
short: "Brouwer fixed point for $D^2$"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Theorem 1.9"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 1, §6"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Every continuous map $f:D^2\to D^2$ from the closed unit disk to itself has a fixed point: there is an $x\in D^2$ such that $f(x)=x$.

## Facts & Assumptions

**Given:** A continuous map $f:D^2\to D^2$.

[L1] Every continuous fixed-point-free map $f:D^2\to D^2$ determines a continuous retraction $D^2\to S^1$ ([[lem-fixed-point-free-disk-map-produces-a-retraction]]).

[L2] There is no continuous retraction from the closed unit disk $D^2$ onto its boundary circle $S^1$ ([[thm-no-retraction-of-the-closed-disk-onto-the-circle]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose that $f$ has no fixed point, so $f(x)\ne x$ for every $x\in D^2$. [given, assume-contra]

2.1 By [L1], the map $f$ then determines a continuous retraction $D^2\to S^1$, contradicting [L2]. Therefore $f$ has a fixed point. [step 1.1, L1, L2, discharge-contradiction] ∎
