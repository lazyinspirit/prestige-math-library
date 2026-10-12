---
id: thm-artin-fixed-field-degree-theorem
kind: theorem
title: "Artin's fixed-field theorem: $[K:K^G]=|G|$ and $\\operatorname{Aut}(K/K^G)=G$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-fixed-field-of-an-automorphism-group, lem-artin-fixed-field-lower-degree-bound, lem-artin-fixed-field-upper-degree-bound, thm-relative-automorphism-group-and-separable-degree-bound]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Theorem 3.4 and Corollary 3.5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, The Galois Correspondence, Theorems 5.2-5.3"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
pipeline_run: null
---

## Statement

If $G$ is a finite group of automorphisms of $K$, then $[K:K^G]=|G|$ and $\operatorname{Aut}(K/K^G)=G$.

## Facts & Assumptions

**Given:** A field $K$, a finite automorphism group $G$, and the fixed field $K^G$.

[L1] If $G$ is a finite group of automorphisms of $K$, then $[K:K^G]\ge |G|$ ([[lem-artin-fixed-field-lower-degree-bound]]).

[L2] If $G$ is a finite group of automorphisms of $K$, then $[K:K^G]\le |G|$ ([[lem-artin-fixed-field-upper-degree-bound]]).

[L3] For a finite extension $K/E$, one has $|\operatorname{Aut}(K/E)|\le[K:E]$ ([[thm-relative-automorphism-group-and-separable-degree-bound]]).

## Proof

**Proof technique:** direct.

1.1 The opposing bounds [L1] and [L2] give $[K:K^G]=|G|$. In particular $K/K^G$ is finite. For $G=\{1\}$ this says $K^G=K$ and the degree is $1$. [L1, L2]

2.1 Every $\sigma\in G$ fixes $K^G$, so $G\subseteq\operatorname{Aut}(K/K^G)$. By [L3] and step 1.1, $|\operatorname{Aut}(K/K^G)|\le[K:K^G]=|G|$; a finite set containing $G$ and having at most its cardinality equals $G$. [step 1.1, L3, algebra] ∎
