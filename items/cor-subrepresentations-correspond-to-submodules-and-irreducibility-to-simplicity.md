---
id: cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity
kind: corollary
title: "Under the dictionary, subrepresentations are exactly submodules and irreducible representations are exactly simple modules"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-simple-module, def-subrepresentation-and-irreducible-representation, thm-group-actions-and-group-ring-modules-correspond]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Proposition 1.1.5"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Statement

Let $k$ be a field, let $G$ be a group, and let $V$ be a finite-dimensional
representation of $G$ over $k$. Under the correspondence of
[[thm-group-actions-and-group-ring-modules-correspond]]:

1. the subrepresentations of $V$ are exactly the $k[G]$-submodules of $V$;
2. $V$ is irreducible if and only if it is simple as a $k[G]$-module.

## Facts & Assumptions

**Given:** A finite-dimensional representation $V$ of $G$ over $k$.

[L1] A subrepresentation is a linear subspace stable under every group element, and irreducible means nonzero with no proper nonzero subrepresentation ([[def-subrepresentation-and-irreducible-representation]]).

[L2] A $G$-action on a $k$-vector space is the same thing as a left $k[G]$-module structure, and $G$-equivariant maps are exactly $k[G]$-module homomorphisms ([[thm-group-actions-and-group-ring-modules-correspond]]).

[L3] A simple module is a nonzero module whose only submodules are $0$ and the whole module ([[def-simple-module]]).

## Proof

**Proof technique:** direct.

1.1 A linear subspace $W \le V$ is stable under every $g \in G$ if and only if it is stable under every basis element $[g]$ of $k[G]$ under the action of [L2]. Because the action of an arbitrary $a=\sum_g r_g[g]$ is the corresponding $k$-linear combination of the actions of the basis elements, this is equivalent to stability under every element of $k[G]$. So the subrepresentations of $V$ are exactly the $k[G]$-submodules. [L1, L2, given]

2.1 By [L1], irreducibility means that $V$ is nonzero and has no proper nonzero subrepresentation. By step 1.1 those are exactly the proper nonzero $k[G]$-submodules, and [L3] is the same condition in module language. Therefore $V$ is irreducible if and only if it is simple as a $k[G]$-module. [step 1.1, L1, L3] ∎
