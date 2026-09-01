---
id: lem-compatible-tuples-form-a-subgroup
kind: lemma
title: "Compatible tuples form a subgroup of the product group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-compatible-tuple-inverse-limit-of-groups, def-subgroup, def-group]
proof_strategy: "direct"
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Statement

The compatible tuples in an inverse system form a subgroup of the full product
group.

## Facts & Assumptions

**Given:** An inverse system of groups indexed by a directed set $I$.

[L1] The inverse limit is the set of tuples satisfying
$\varphi_{ij}(g_j)=g_i$ for every comparable pair $i\le j$
([[def-compatible-tuple-inverse-limit-of-groups]]).

[F1] A subset of a group is a subgroup exactly when it contains the identity and
is closed under products and inverses ([[def-subgroup]], [[def-group]]).

## Proof

**Proof technique:** direct.

1.1 The identity tuple $(e_i)_{i\in I}$ is compatible, because every transition map is a homomorphism and therefore sends $e_j$ to $e_i$. So the inverse limit is nonempty. [L1, F1, given]

1.2 If $(g_i)$ and $(h_i)$ are compatible, then for every $i\le j$ one has $$\varphi_{ij}(g_jh_j)=\varphi_{ij}(g_j)\varphi_{ij}(h_j)=g_ih_i.$$ Likewise $\varphi_{ij}(g_j^{-1})=g_i^{-1}$. Hence coordinatewise products and coordinatewise inverses remain compatible. [L1, given, algebra]

2.1 By [F1], step 1.1 and step 1.2 prove that the compatible tuples form a subgroup of the product group. [F1, step 1.1, step 1.2] ∎
