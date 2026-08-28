---
id: cor-algebraic-connectivity-characterises-connectedness
kind: corollary
title: "A finite simple graph is connected if and only if its algebraic connectivity is positive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebraic-connectivity-of-a-graph, thm-laplacian-kernel-dimension-counts-components]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "O. Pikhurko, Algebraic Methods in Combinatorics, Section 14.2"
      url: "https://opikhurko.warwick.ac.uk/AlgMet.pdf"
---

## Statement

Let $G$ be a finite simple graph with at least two vertices. Then $G$ is
connected if and only if its algebraic connectivity is positive.

## Facts & Assumptions

**Given:** A finite simple graph $G$ with at least two vertices.

[F1] The algebraic connectivity of $G$ is the second-smallest Laplacian eigenvalue $\mu_2(G)$ ([[def-algebraic-connectivity-of-a-graph]]).

[L1] The multiplicity of the Laplacian eigenvalue $0$ equals the number of connected components ([[thm-laplacian-kernel-dimension-counts-components]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ is connected, then [L1] says that the eigenvalue $0$ has multiplicity $1$, so the next Laplacian eigenvalue $\mu_2(G)$ is strictly positive. By [F1], the algebraic connectivity is positive. [L1, F1]

1.2 If the algebraic connectivity is positive, then [F1] gives $\mu_2(G)>0$, so $0$ occurs only once in the Laplacian spectrum. By [L1], the number of connected components is therefore $1$, which means that $G$ is connected. [F1, L1]

2.1 Steps 1.1 and 1.2 prove the two directions of the equivalence. [step 1.1, step 1.2] ∎
