---
id: lem-products-preserve-complete-regularity
kind: lemma
title: "Arbitrary products of completely regular spaces are completely regular"
status: published
origin: session
deps: [def-product-topology, thm-product-universal-property, def-completely-regular-and-tychonoff-spaces, lem-finite-minima-of-continuous-unit-interval-maps, lem-finite-choice]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
pipeline_run: null
---

## Statement

An arbitrary product of completely regular spaces is completely regular.

## Facts & Assumptions

**Given:** A product $P=\prod_{i\in I}X_i$ of completely regular spaces, a closed $C\subseteq P$, and $x\in P\setminus C$.

[F1] A basic product-open set has finite support, and the product universal property makes finite-coordinate maps continuous ([[def-product-topology]], [[thm-product-universal-property]]).

[F2] Complete regularity gives $h_i:X_i\to[0,1]$ with $h_i(x_i)=1$ and $h_i[X_i\setminus U_i]=\{0\}$ when $x_i\in U_i$ is open ([[def-completely-regular-and-tychonoff-spaces]]).

[L1] A finite pointwise minimum of continuous $[0,1]$-valued maps is continuous ([[lem-finite-minima-of-continuous-unit-interval-maps]]).

[L2] A family indexed by a natural number whose members are nonempty has a choice function, without any choice axiom ([[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 Choose a finite-support basic neighbourhood $B=\bigcap_{i\in J}\pi_i^{-1}[U_i]$ of $x$ contained in $P\setminus C$. [F1]

1.2 The finite-choice result [L2] selects a map $h_i$ as in [F2] for every $i\in J$; put $h=\min_{i\in J}(h_i\circ\pi_i)$. [F2, L1, L2]

2.1 The map $h$ is continuous and $h(x)=1$. If $y\in C$, then $y\notin B$, so $y_i\notin U_i$ for some $i\in J$ and $h(y)=0$. [F1, L1, step 1.1, step 1.2]

3.1 Thus $h$ separates $x$ from $C$ in the defining sense of complete regularity. [F2, step 2.1] ∎
