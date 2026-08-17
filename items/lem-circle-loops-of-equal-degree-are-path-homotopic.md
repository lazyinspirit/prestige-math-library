---
id: lem-circle-loops-of-equal-degree-are-path-homotopic
kind: lemma
title: "Based circle loops of equal degree are path-homotopic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-degree-of-a-circle-loop, def-circle-as-real-line-mod-integers, lem-straight-line-homotopies-are-continuous, thm-composition-respects-homotopy]
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

Based circle loops of equal degree are path-homotopic.

## Facts & Assumptions

**Given:** Based loops $\alpha,\beta:I\to\mathbb R/\mathbb Z$ at $[0]$ with $\deg(\alpha)=\deg(\beta)$.

[L1] Each based circle loop $\gamma$ has a unique lift $\widetilde\gamma$ beginning at zero, with $\deg(\gamma)=\widetilde\gamma(1)$ ([[def-degree-of-a-circle-loop]]).

[L2] If $n\ge1$, $C\subseteq\mathbb R^n$ is convex, and $f,g:X\to C$ are continuous, then $H(x,t)=(1-t)f(x)+tg(x)$ is a continuous homotopy from $f$ to $g$ ([[lem-straight-line-homotopies-are-continuous]]).

[L3] If $v:Y\to Z$ is continuous and $f\simeq_A g$, then $v\circ f\simeq_A v\circ g$ ([[thm-composition-respects-homotopy]]).

[L4] The quotient projection $p:\mathbb R\to\mathbb R/\mathbb Z$ is continuous ([[def-circle-as-real-line-mod-integers]]).

## Proof

**Proof technique:** direct.

1.1 Let $\widetilde\alpha$ and $\widetilde\beta$ be the lifts from [L1]. Both begin at zero, and the degree hypothesis with [L1] gives $\widetilde\alpha(1)=\widetilde\beta(1)$. [given, L1]

2.1 Since $\mathbb R$ is convex, [L2] makes $H(t,s)=(1-s)\widetilde\alpha(t)+s\widetilde\beta(t)$ continuous. Step 1.1 gives $H(0,s)=0$ and $H(1,s)=\widetilde\alpha(1)=\widetilde\beta(1)$ for every $s$, so this homotopy fixes both endpoints. [step 1.1, L2, algebra]

3.1 Postcomposing with the continuous quotient projection, [L3] and [L4] give an endpoint-fixed homotopy $p\circ H$. The defining lift equations in [L1] identify its endpoints as $p\circ\widetilde\alpha=\alpha$ and $p\circ\widetilde\beta=\beta$. Hence the loops are path-homotopic. [step 2.1, L1, L3, L4] ∎
