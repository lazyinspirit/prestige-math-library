---
id: thm-degree-one-inflation-restriction-exact-sequence
kind: theorem
title: "Degree-one inflation–restriction is exact"
status: published
origin: pipeline
deps: [lem-degree-one-maps-and-quotient-action-are-well-defined]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
sources:
  scraped: []
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
    - title: "Dekimpe–Hartl–Wauters, A seven-term exact sequence for the cohomology of a group extension, Sections 2–5 pp.2–11 and Section 10.2 p.21"
      url: "https://arxiv.org/pdf/1103.4052"
---

## Statement

For every extension $1\to N\to G\to Q\to1$ and left G-module A, the bar-cohomology sequence
$$0\longrightarrow H^1(Q,A^N)\xrightarrow{\operatorname{inf}}H^1(G,A)\xrightarrow{\operatorname{res}}H^1(N,A)^Q$$
is exact. This crossed-map proof is choice-free; the derived interpretation retains its inherited comparison convention. No surjectivity of restriction is asserted.

## Facts & Assumptions

**Given:** The extension, A, and the well-defined degree-one maps.

[F1] The displayed maps are homomorphisms with the stated domains and codomains ([[lem-degree-one-maps-and-quotient-action-are-well-defined]]).

## Proof

1.1 If an inflated c is principal, say $c(\pi g)=ga-a$, restriction to N gives $na=a$ for every n, because c(1)=0. Thus $a\in A^N$ and c itself is principal on Q. Inflation is injective. An inflated cocycle restricts to zero on N, so its class belongs to the kernel of restriction. [F1, given, algebra]

2.1 Conversely let D restrict to a principal map $n\mapsto na-a$. Replace D by $D_0=D-\delta a$, so $D_0|_N=0$. For n in N, $D_0(gn)=D_0(g)$, and $D_0(ng)=nD_0(g)$. But $ng=g(g^{-1}ng)$, so these equations also give $nD_0(g)=D_0(g)$. Thus $D_0$ is constant on quotient fibers and takes values in $A^N$. Define c(q) as this unique common value; no representatives need be chosen. For any g,h above q,r the crossed identity yields $c(qr)=c(q)+q c(r)$. Hence $D_0=\operatorname{inf}c$ and [D] lies in its image. [F1, step 1.1, algebra] ∎
