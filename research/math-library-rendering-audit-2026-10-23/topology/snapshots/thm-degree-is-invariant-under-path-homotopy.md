---
id: thm-degree-is-invariant-under-path-homotopy
kind: theorem
title: "Path-homotopic based circle loops have the same degree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-degree-of-a-circle-loop, cor-lifted-path-endpoints-depend-only-on-path-homotopy]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Ch. 1, Section 1.1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 1, Section 5"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Path-homotopic based circle loops have the same degree.

## Facts & Assumptions

**Given:** Based loops $\alpha,\beta:I\to\mathbb R/\mathbb Z$ at $[0]$ and an endpoint-fixed path homotopy from $\alpha$ to $\beta$.

[L1] Every based circle loop $\gamma$ has a unique lift $\widetilde\gamma$ beginning at zero, and $\deg(\gamma)=\widetilde\gamma(1)$ ([[def-degree-of-a-circle-loop]]).

[L2] Endpoint-fixed homotopic paths in the base have lifts with the same endpoint whenever their lifts begin at the same point ([[cor-lifted-path-endpoints-depend-only-on-path-homotopy]]).

## Proof

**Proof technique:** direct.

1.1 Let $\widetilde\alpha$ and $\widetilde\beta$ be the unique lifts used in [L1]. Both begin at the common point $0$. [given, L1]

2.1 Since the base loops are endpoint-fixed homotopic and the lifts have the same initial point, [L2] gives $\widetilde\alpha(1)=\widetilde\beta(1)$. [step 1.1, L2]

3.1 Reading these terminal values through [L1] yields $\deg(\alpha)=\deg(\beta)$. [step 2.1, L1] ∎
