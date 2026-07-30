---
id: lem-products-preserve-regularity
kind: lemma
title: "Arbitrary products of regular spaces are regular"
status: published
origin: session
deps: [def-product-topology, lem-regularity-via-closed-neighbourhoods, lem-finite-choice]
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

An arbitrary product of regular spaces is regular.

## Facts & Assumptions

**Given:** A point $x$ in a product $P=\prod_{i\in I}X_i$ of regular spaces and an open set $W\subseteq P$ containing $x$.

[F1] A basic product-open neighbourhood of $x$ restricts only finitely many coordinates and lies inside $W$ ([[def-product-topology]]).

[L1] In a regular factor, $x_i\in U_i$ open gives open $V_i$ with $x_i\in V_i\subseteq\overline{V_i}\subseteq U_i$ ([[lem-regularity-via-closed-neighbourhoods]]).

[L2] A family indexed by a natural number whose members are nonempty has a choice function, without any choice axiom ([[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 Choose a basic neighbourhood $B=\bigcap_{i\in J}\pi_i^{-1}[U_i]$ of $x$ inside $W$, where $J$ is finite. [F1]

1.2 Since $J$ is finite, [L2] makes these factorwise choices simultaneously: take open $V_i$ with $x_i\in V_i\subseteq\overline{V_i}\subseteq U_i$ for every $i\in J$. [L1, L2]

2.1 Put $V=\bigcap_{i\in J}\pi_i^{-1}[V_i]$. It is open, contains $x$, and its closure lies in $\bigcap_{i\in J}\pi_i^{-1}[\overline{V_i}]\subseteq B\subseteq W$. [F1, step 1.2]

3.1 The closed-neighbourhood characterization proves $P$ regular. [L1, step 2.1] ∎
