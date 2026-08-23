---
id: thm-fundamental-group-of-a-topological-group-is-abelian
kind: theorem
title: "The fundamental group of a topological group is abelian"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-loop-products-in-a-topological-group-agree-up-to-homotopy, thm-fundamental-group-laws, def-group]
justified_by: []
aliases: []
landmark: true
short: '$\pi_1(G)$ is abelian'
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 1, Problem 3"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

If $G$ is a topological group with identity $e$, then $\pi_1(G,e)$ is an abelian group.

## Facts & Assumptions

**Given:** A topological group $G$ with identity $e$ and based loops $\alpha,\beta$ at $e$.

[L1] Pointwise multiplication of based loops in a topological group descends to loop classes and agrees there with loop concatenation; the pointwise product loop is homotopic to both concatenation orders ([[lem-loop-products-in-a-topological-group-agree-up-to-homotopy]]).

[L2] Loop concatenation makes $\pi_1(G,e)$ a group whose identity is the class of the constant loop at $e$ ([[thm-fundamental-group-laws]]).

[F1] A group is abelian when its operation is commutative ([[def-group]]).

## Proof

**Proof technique:** direct.

1.1 The classes $[\alpha]$ and $[\beta]$ have concatenation product $[\alpha*\beta]$, while their pointwise product is represented by $t\mapsto\alpha(t)\beta(t)$; [L1] identifies these two classes. [given, L1, L2]

2.1 The same pointwise product is also homotopic to $\beta*\alpha$ by [L1]. Therefore $[\alpha][\beta]=[\alpha*\beta]=[\beta*\alpha]=[\beta][\alpha]$. [step 1.1, L1, L2]

3.1 Since $[\alpha]$ and $[\beta]$ were arbitrary, multiplication in $\pi_1(G,e)$ is commutative, so the fundamental group is abelian. [step 2.1, F1] ∎
