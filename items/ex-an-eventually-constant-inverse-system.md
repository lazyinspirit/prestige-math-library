---
id: ex-an-eventually-constant-inverse-system
kind: example
title: "An eventually constant inverse system has inverse limit equal to its stable value"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-concrete-inverse-limit-universal-property-in-groups, thm-cofinal-subsystems-have-isomorphic-inverse-limits]
proof_strategy: "direct"
verification:
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

## Example

An eventually constant inverse system has inverse limit isomorphic to its
stable value.

## Facts & Assumptions

**Given:** An inverse system $(G_i,\varphi_{ij})$ and an index $i_0$ such that $\varphi_{i_0j}:G_j\to G_{i_0}$ is an isomorphism for every $j\ge i_0$.

[L1] The inverse limit satisfies the concrete universal property ([[thm-concrete-inverse-limit-universal-property-in-groups]]).

## Verification

**Proof technique:** direct.

1.1 A compatible tuple is determined uniquely by its $i_0$-coordinate, because for every $j\ge i_0$ the coordinate $g_j$ must be the unique preimage of $g_{i_0}$ under the isomorphism $\varphi_{i_0j}$. [given]

2.1 Conversely, let $g\in G_{i_0}$. For each index $i$, choose some $j\ge i,i_0$, possible because the index set is directed, and define $$ g_i:=\varphi_{ij}\bigl(\varphi_{i_0j}^{-1}(g)\bigr)\in G_i. $$ This does not depend on the choice of $j$, because any larger common upper bound gives the same value after applying compatibility of the transition maps. The tuple $(g_i)$ is compatible and has $i_0$-coordinate $g$. Therefore the projection to the $i_0$-coordinate is surjective as well as injective by step 1.1. [L1, step 1.1, construct]

3.1 The map sending a compatible tuple to its $i_0$-coordinate is therefore a bijective homomorphism, and [L1] identifies it with the inverse-limit comparison map. Hence the inverse limit is isomorphic to $G_{i_0}$. [L1, step 2.1] ∎
