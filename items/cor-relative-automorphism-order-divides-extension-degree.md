---
id: cor-relative-automorphism-order-divides-extension-degree
kind: corollary
title: "For a finite extension, $|\\operatorname{Aut}(K/F)|$ divides $[K:F]$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-relative-automorphism-group-and-separable-degree-bound, def-fixed-field-of-an-automorphism-group, thm-artin-fixed-field-degree-theorem, thm-tower-law-for-finite-field-extensions]
aliases: []
landmark: false
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
    - title: "K. Conrad, The Galois Correspondence, Corollary 4.2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 3"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

If $K/F$ is a finite extension, then $|\operatorname{Aut}(K/F)|$ divides $[K:F]$.

## Facts & Assumptions

**Given:** A finite extension $K/F$, the finite group $G:=\operatorname{Aut}(K/F)$ supplied by [[thm-relative-automorphism-group-and-separable-degree-bound]], and its fixed field $E:=K^G$ ([[def-fixed-field-of-an-automorphism-group]]).

[L1] If $G$ is a finite group of automorphisms of $K$, then $[K:K^G]=|G|$ and $\operatorname{Aut}(K/K^G)=G$ ([[thm-artin-fixed-field-degree-theorem]]).

[L2] If $F\subseteq E\subseteq K$ and both successive extensions are finite, then $[K:F]=[K:E][E:F]$ ([[thm-tower-law-for-finite-field-extensions]]).

## Proof

**Proof technique:** direct.

1.1 Artin's theorem gives $|\operatorname{Aut}(K/F)|=|G|=[K:E]$. [L1]

2.1 The tower formula gives $[K:F]=[K:E][E:F]=|\operatorname{Aut}(K/F)|[E:F]$, proving the divisibility. Degree one and a trivial automorphism group both give divisor $1$. [step 1.1, L2] ∎
