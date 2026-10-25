---
id: prop-standard-circle-loops-have-their-integer-degrees
kind: proposition
title: "$\\deg(\\omega_n)=n$ for every integer $n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-standard-integer-loops-in-the-circle, def-degree-of-a-circle-loop, thm-path-lifting-for-covering-maps]
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

$\deg(\omega_n)=n$ for every integer $n$.

## Facts & Assumptions

**Given:** An integer $n$ and the standard loop $\omega_n$.

[L1] For every integer $n$, define $\widetilde\omega_n(t)=nt$ and $\omega_n=p\circ\widetilde\omega_n$ ([[def-standard-integer-loops-in-the-circle]]).

[L2] For a based circle loop $\alpha$ with its lift $\widetilde\alpha$ beginning at zero, define $\deg(\alpha)=\widetilde\alpha(1)$ ([[def-degree-of-a-circle-loop]]).

[L3] Given a covering $p:E\to B$, a path $\alpha:I\to B$, and $e_0\in E$ above $\alpha(0)$, there is a unique path $\widetilde\alpha:I\to E$ with $\widetilde\alpha(0)=e_0$ and $p\circ\widetilde\alpha=\alpha$ ([[thm-path-lifting-for-covering-maps]]).

## Proof

**Proof technique:** direct.

1.1 The path $t\mapsto nt$ starts at zero and projects to $\omega_n$ by [L1]. The uniqueness clause of [L3] therefore identifies it with the lift used to define the degree of $\omega_n$. [L1, L3]

2.1 Its terminal value is $n\cdot1=n$, so [L2] gives $\deg(\omega_n)=n$. This calculation is uniform for $n=0$, positive $n$, and negative $n$. [step 1.1, L2, algebra] ∎
