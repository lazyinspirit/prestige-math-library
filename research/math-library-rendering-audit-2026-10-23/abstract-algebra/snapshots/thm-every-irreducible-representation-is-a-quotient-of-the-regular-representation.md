---
id: thm-every-irreducible-representation-is-a-quotient-of-the-regular-representation
kind: theorem
title: "Every irreducible representation of a finite group is a quotient of the regular representation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity, def-trivial-regular-and-permutation-representations, thm-group-actions-and-group-ring-modules-correspond]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Theorem 2.1.1 and its regular-module corollaries"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a finite group and let $V$ be an irreducible representation of $G$
over a field $k$. Then there is a surjective morphism from the regular
representation of $G$ over $k$ onto $V$.

## Facts & Assumptions

**Given:** A finite group $G$, a field $k$, and an irreducible representation $V$ of $G$ over $k$.

[L1] Under the group-ring dictionary, subrepresentations are exactly $k[G]$-submodules, and irreducible representations are exactly simple $k[G]$-modules ([[cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity]]).

[L2] The regular representation is the action of $G$ on $k[G]$ by left multiplication on the basis vectors $[g]$ ([[def-trivial-regular-and-permutation-representations]]).

[L3] $G$-equivariant maps are exactly $k[G]$-module homomorphisms ([[thm-group-actions-and-group-ring-modules-correspond]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the representation $V$ is a simple $k[G]$-module. [L1, given]

2.1 Choose $0 \ne v \in V$. The submodule $k[G]v$ is nonzero, so simplicity from step 1.1 forces $k[G]v=V$. [step 1.1, L1, given, choose]

3.1 Define $\phi:k[G] \to V$ by $\phi(a):=a \cdot v$. Then $\phi$ is a $k[G]$-module homomorphism, and its image is exactly $k[G]v=V$ by step 2.1. So $\phi$ is surjective. [step 2.1, L3, given, algebra]

4.1 By [L2] and [L3], the map $\phi$ is a surjective morphism from the regular representation onto $V$. Hence $V$ is a quotient of the regular representation. [step 3.1, L2, L3] ∎
