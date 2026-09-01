---
id: thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion
kind: theorem
title: "The canonical map to the profinite completion has kernel equal to the finite residual and has dense image"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-profinite-completion-of-an-abstract-group, def-canonical-map-to-the-profinite-completion, def-finite-residual-and-residually-finite-group]
proof_strategy: "direct"
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Statement

The canonical map $\iota_G:G\to\widehat G$ has kernel equal to the finite
residual of $G$, and its image is dense in $\widehat G$.

## Facts & Assumptions

**Given:** An abstract group $G$ with profinite completion $\widehat G$ and canonical map $\iota_G$.

[L1] The profinite completion is the inverse limit of the quotients $G/N$, and $R_f(G)$ is the intersection of the finite-index normal subgroups ([[def-profinite-completion-of-an-abstract-group]], [[def-canonical-map-to-the-profinite-completion]], [[def-finite-residual-and-residually-finite-group]]).

[L2] The completion carries the inverse-limit topology from its finite discrete
quotients ([[def-profinite-completion-of-an-abstract-group]]).

## Proof

**Proof technique:** direct.

1.1 An element $g\in G$ lies in $\ker\iota_G$ exactly when every coordinate $gN$ is the identity coset in $G/N$. That is equivalent to $g\in N$ for every finite-index normal subgroup $N$. By [L1], this means precisely $g\in R_f(G)$. [L1, given]

1.2 By [L2], let $U$ be a nonempty basic open set of $\widehat G$. Then $U$ fixes finitely many coordinates, say at $N_1,\dots,N_m$, to compatible cosets $g_kN_k$. Let $M:=N_1\cap\cdots\cap N_m$, which is again finite-index normal. Compatibility means exactly that these finitely many coordinates come from one coset $gM$ in $G/M$. Since $M\subseteq N_k$, the image of $gM$ in $G/N_k$ is the prescribed coset $g_kN_k$ for each $k$. Therefore $\iota_G(g)\in U$. [L1, L2, given, construct]

2.1 Step 1.2 says that every nonempty basic open set meets $\iota_G[G]$, so the image is dense. Together with step 1.1, this proves the theorem. [step 1.1, step 1.2] ∎
