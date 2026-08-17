---
id: thm-circle-loops-are-path-homotopic-iff-they-have-equal-degree
kind: theorem
title: "Two based circle loops are path-homotopic if and only if they have equal degree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-degree-is-invariant-under-path-homotopy, lem-circle-loops-of-equal-degree-are-path-homotopic]
aliases: []
landmark: true
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

Two based circle loops are path-homotopic if and only if they have equal degree.

## Facts & Assumptions

**Given:** Based loops $\alpha$ and $\beta$ at $[0]$ in $\mathbb R/\mathbb Z$.

[L1] Path-homotopic based circle loops have the same degree ([[thm-degree-is-invariant-under-path-homotopy]]).

[L2] Based circle loops of equal degree are path-homotopic ([[lem-circle-loops-of-equal-degree-are-path-homotopic]]).

## Proof

**Proof technique:** direct.

1.1 If $\alpha$ and $\beta$ are path-homotopic, then [L1] gives $\deg(\alpha)=\deg(\beta)$. [L1]

1.2 Conversely, if $\deg(\alpha)=\deg(\beta)$, then [L2] gives an endpoint-fixed path homotopy from $\alpha$ to $\beta$. [L2]

2.1 Steps 1.1 and 1.2 prove the forward and reverse implications, respectively, so the stated biconditional holds. [step 1.1, step 1.2] ∎
