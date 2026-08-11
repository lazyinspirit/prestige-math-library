---
id: ex-action-groupoid-orbits-and-stabilizers
kind: example
title: "An action groupoid has the acted-on set as objects, orbits as connected components, and stabilizers as automorphism groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-isomorphism-groupoid-and-connected-category, prop-monoids-and-groups-as-one-object-categories, def-group-action, def-orbit-and-stabilizer]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Example 1.1.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

Every group action determines a groupoid whose categorical connectedness and
automorphisms recover the action's orbits and stabilizers.

## Facts & Assumptions

**Given:** A left action of a group $G$ on a set $X$.

[L1] The identity and multiplication in $G$ may be read as categorical identity and composition ([[prop-monoids-and-groups-as-one-object-categories]]).

[L2] The action axioms, orbits, and stabilizers have their standard meanings ([[def-group-action]], [[def-orbit-and-stabilizer]]).

[L3] A groupoid has only invertible arrows, and connectedness means that every two objects are joined by an arrow ([[def-isomorphism-groupoid-and-connected-category]]).

## Verification

**Proof technique:** direct.

1.1 Define $X\mathbin{//}G$ to have objects $x\in X$ and one arrow $(g,x):x\to g\cdot x$ for each $g\in G$. Put $(h,g\cdot x)\circ(g,x)=(hg,x)$ and $1_x=(e,x)$. [L1, L2]

2.1 Associativity and the identity laws follow from the corresponding group laws and the action law. The inverse of $(g,x)$ is $(g^{-1},g\cdot x)$, so this category is a groupoid. [step 1.1, L1, L2, L3]

2.2 Objects $x,y$ are joined by an arrow exactly when $y=g\cdot x$ for some $g$, which is exactly membership in the same orbit. An automorphism of $x$ is an element $g$ with $g\cdot x=x$, exactly an element of $\operatorname{Stab}_G(x)$. [step 1.1, L2, L3]

3.1 Consequently the connected components of $X\mathbin{//}G$ are the $G$-orbits, and $\operatorname{Aut}(x)=\operatorname{Stab}_G(x)$ with the same multiplication. [step 2.1, step 2.2] ∎
