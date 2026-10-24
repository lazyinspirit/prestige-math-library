---
id: ex-rotations-of-a-square-on-its-vertices
kind: example
title: "The four rotations of a square act freely, transitively and faithfully on its vertices"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-group-action, def-free-group-action, thm-integers-modulo-n-basic-algebra, thm-standard-representatives-modulo-n]
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
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, 14.1"
      url: "https://twjudson.github.io/aata-files/aata-html/actions-section-groups-acting-on-sets.html"
pipeline_run: null
---

## Example

Label the vertices of a square by $\mathbb Z/4$ in cyclic order. The rotation
group $\mathbb Z/4$ acts by $a\cdot x=a+x$. This action is free, transitive,
and faithful.

## Facts & Assumptions

**Given:** The additive group $A=\mathbb Z/4$ acting on $X=A$ by translation.

[L1] A left action is transitive and faithful as defined in [[def-group-action]].

[L2] An action is free when only the identity can fix a point ([[def-free-group-action]]).

[L3] The residue classes modulo $4$ form an additive group ([[thm-integers-modulo-n-basic-algebra]]).

[L4] The four classes have unique representatives $0,1,2,3$ ([[thm-standard-representatives-modulo-n]]).

## Verification

**Proof technique:** direct.

1.1 One has $0\cdot x=x$ and $(a+b)\cdot x=(a+b)+x=a+(b+x)=a\cdot(b\cdot x)$, so [L1] and [L3] give an action. [L1, L3]

2.1 Given vertices $x,y$, the unique class $a=y-x$ satisfies $a\cdot x=y$, proving transitivity. If $a\cdot x=x$, cancellation gives $a=0$, so the action is free. [step 1.1, L1, L2, L3, L4]

3.1 An element fixing every vertex fixes $0$, so it is $0$ by step 2.1; hence the action is faithful. [step 2.1, L1] ∎
